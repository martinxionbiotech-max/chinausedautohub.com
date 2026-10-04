#!/usr/bin/env node
/**
 * Agent vehicle-inventory operations — the ONLY supported way to mutate the
 * data layer. Agents must never edit page HTML directly.
 *
 * Supported actions:
 *   create          CREATE VEHICLE
 *   update          UPDATE VEHICLE (field-by-field via --set key=value, repeatable)
 *   update-price    UPDATE PRICE
 *   update-status   UPDATE STATUS
 *   update-images   UPDATE IMAGES
 *   update-specs    UPDATE SPECS (add/replace spec rows)
 *   mark-reserved   MARK RESERVED
 *   mark-sold       MARK SOLD
 *   list            List inventory (read-only)
 *
 * Every mutation:
 *   - validates input (price > 0, mileage >= 0, plausible year, status enum)
 *   - detects duplicates (VIN first, then brand+model+year+mileage+source)
 *   - appends a changelog entry (never overwrites history)
 *   - never deletes a vehicle record
 *
 * Usage examples:
 *   node scripts/update-vehicle.mjs list
 *   node scripts/update-vehicle.mjs mark-sold --vehicle-id byd-song-plus-2024-001
 *   node scripts/update-vehicle.mjs update-price --vehicle-id byd-song-plus-2024-001 --amount 23900 --currency USD
 *   node scripts/update-vehicle.mjs update --vehicle-id X --set status=sold
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_DIR = join(ROOT, 'src', 'data');
const VEHICLES_PATH = join(DATA_DIR, 'vehicles.json');
const CHANGELOG_PATH = join(DATA_DIR, 'changelog.json');

const STATUSES = ['available', 'reserved', 'sold', 'sourcing', 'expired', 'hidden'];
const CURRENT_YEAR = new Date().getFullYear();
const MIN_YEAR = 1990;
const MAX_YEAR = CURRENT_YEAR + 1;

// ---------- IO ----------
function readVehicles() {
  return JSON.parse(readFileSync(VEHICLES_PATH, 'utf8'));
}
function writeVehicles(list) {
  writeFileSync(VEHICLES_PATH, JSON.stringify(list, null, 2) + '\n', 'utf8');
}
function readChangelog() {
  if (!existsSync(CHANGELOG_PATH)) return [];
  return JSON.parse(readFileSync(CHANGELOG_PATH, 'utf8'));
}
function appendChangelog(entry) {
  const log = readChangelog();
  log.push(entry);
  writeFileSync(CHANGELOG_PATH, JSON.stringify(log, null, 2) + '\n', 'utf8');
}

// ---------- Validation ----------
function fail(msg) {
  console.error('ERROR: ' + msg);
  process.exit(1);
}

function assertValid(vehicle, { partial = false } = {}) {
  const errors = [];
  if (vehicle.price !== undefined) {
    if (!(vehicle.price.amount > 0)) errors.push('price.amount must be > 0');
  }
  if (vehicle.mileage_km !== undefined) {
    if (vehicle.mileage_km < 0) errors.push('mileage_km cannot be < 0');
  }
  if (vehicle.year !== undefined) {
    if (!Number.isInteger(vehicle.year) || vehicle.year < MIN_YEAR || vehicle.year > MAX_YEAR) {
      errors.push(`year must be an integer between ${MIN_YEAR} and ${MAX_YEAR}`);
    }
  }
  if (vehicle.status !== undefined) {
    if (!STATUSES.includes(vehicle.status)) {
      errors.push(`status must be one of: ${STATUSES.join(', ')}`);
    }
  }
  if (errors.length) fail(errors.join('; '));
}

// ---------- Duplicate detection ----------
function findDuplicate(list, candidate, { excludeId } = {}) {
  const same = list.filter((v) => v.vehicle_id !== excludeId);

  const vinHit = same.find((v) => v.vin && candidate.vin && v.vin.toLowerCase() === candidate.vin.toLowerCase());
  if (vinHit) return { reason: 'VIN', match: vinHit };

  const key = (v) => `${v.brand}|${v.model}|${v.year}|${v.mileage_km}|${v.source}`;
  const keyHit = same.find((v) => key(v) === key(candidate));
  if (keyHit) return { reason: 'brand+model+year+mileage+source', match: keyHit };

  return null;
}

// ---------- Args ----------
function parseArgs(argv) {
  const args = {};
  const sets = [];
  const positionals = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      if (key === 'set') {
        sets.push(argv[++i]);
      } else if (key.includes('=')) {
        const [k, v] = key.split('=');
        args[k] = v;
      } else {
        const next = argv[i + 1];
        if (next === undefined || next.startsWith('--')) {
          args[key] = true;
        } else {
          args[key] = next;
          i++;
        }
      }
    } else {
      positionals.push(a);
    }
  }
  return { args, sets, positionals };
}

function req(args, key, label = key) {
  const v = args[key];
  if (v === undefined || v === '') fail(`missing required --${label}`);
  return v;
}

function num(args, key, label = key) {
  const v = req(args, key, label);
  const n = Number(v);
  if (Number.isNaN(n)) fail(`--${label} must be a number`);
  return n;
}

// ---------- Changelog helper ----------
function recordChange(vehicle, changedFields, oldValue, newValue, action, source = 'agent') {
  appendChangelog({
    vehicle_id: vehicle.vehicle_id,
    timestamp: new Date().toISOString(),
    action,
    changed_fields: changedFields,
    old_value: oldValue,
    new_value: newValue,
    source,
    agent: 'scripts/update-vehicle.mjs',
  });
}

// ---------- Actions ----------
function actionList(list) {
  for (const v of list) {
    console.log(`${v.vehicle_id}\t${v.brand}/${v.model}\t${v.year}\t${v.status}\t${v.price.amount} ${v.price.currency}${v.is_demo ? '\t[demo]' : ''}`);
  }
}

function actionCreate(list, args) {
  const vehicle_id = req(args, 'vehicle-id');
  if (list.some((v) => v.vehicle_id === vehicle_id)) fail(`vehicle_id already exists: ${vehicle_id}`);

  const amount = num(args, 'price');
  const currency = args.currency || 'USD';
  const original_amount = args['original-price'] ? Number(args['original-price']) : undefined;
  const original_currency = args['original-currency'] || 'CNY';

  const vehicle = {
    vehicle_id,
    vin: req(args, 'vin'),
    brand: req(args, 'brand'),
    model: req(args, 'model'),
    year: num(args, 'year'),
    mileage_km: num(args, 'mileage'),
    body_type: req(args, 'body-type'),
    fuel: req(args, 'fuel'),
    transmission: args.transmission || 'automatic',
    drive: args.drive || 'fwd',
    color: args.color || 'Not provided',
    location: args.location || 'China',
    status: args.status || 'available',
    price: { amount, currency },
    original_price: original_amount
      ? { amount: original_amount, currency: original_currency }
      : { amount, currency },
    images: (args.images || '/images/placeholder-suv-white.svg').split(',').map((s) => s.trim()),
    specs: [],
    description: args.description || '',
    condition: {
      exterior: null,
      interior: null,
      engine: null,
      transmission: null,
      chassis: null,
      electrical: null,
      tires: null,
      paint: null,
    },
    generation: null,
    trim: null,
    registration_date: null,
    battery_capacity: null,
    battery_health: null,
    accident_history: null,
    maintenance_history: null,
    inspection_status: null,
    export_status: null,
    destination: null,
    documents: null,
    data_source: args.source || 'agent',
    data_confidence: {},
    last_verified_at: null,
    export: null,
    is_demo: true,
    source: args.source || 'agent',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  assertValid(vehicle);
  const dup = findDuplicate(list, vehicle);
  if (dup) fail(`duplicate detected via ${dup.reason}: existing ${dup.match.vehicle_id}`);

  list.push(vehicle);
  writeVehicles(list);
  recordChange(vehicle, Object.keys(vehicle), null, vehicle, 'create', vehicle.source);
  console.log(`Created ${vehicle_id}`);
}

function getVehicle(list, id) {
  const v = list.find((x) => x.vehicle_id === id);
  if (!v) fail(`vehicle not found: ${id}`);
  return v;
}

function applySets(target, sets) {
  const changed = [];
  for (const s of sets) {
    const idx = s.indexOf('=');
    if (idx < 0) fail(`--set must be key=value, got: ${s}`);
    const key = s.slice(0, idx).trim();
    const raw = s.slice(idx + 1).trim();
    let value = raw;
    if (/^-?\d+(\.\d+)?$/.test(raw)) value = Number(raw);
    else if (raw === 'true') value = true;
    else if (raw === 'false') value = false;
    target[key] = value;
    changed.push(key);
  }
  return changed;
}

function actionUpdate(list, args, sets) {
  const id = req(args, 'vehicle-id');
  const v = getVehicle(list, id);
  const old = { ...v, price: { ...v.price } };
  const changed = applySets(v, sets);
  if (!changed.length) fail('--update requires at least one --set key=value');
  v.updated_at = new Date().toISOString();
  assertValid(v);
  writeVehicles(list);
  const oldValue = Object.fromEntries(changed.map((k) => [k, old[k]]));
  const newValue = Object.fromEntries(changed.map((k) => [k, v[k]]));
  recordChange(v, changed, oldValue, newValue, 'update');
  console.log(`Updated ${id}: ${changed.join(', ')}`);
}

function actionUpdatePrice(list, args) {
  const id = req(args, 'vehicle-id');
  const v = getVehicle(list, id);
  const amount = num(args, 'amount');
  const currency = args.currency || v.price.currency;
  if (!(amount > 0)) fail('price must be > 0');
  const old = { ...v.price };
  v.price = { amount, currency };
  v.updated_at = new Date().toISOString();
  assertValid(v);
  writeVehicles(list);
  recordChange(v, ['price'], old, v.price, 'update-price');
  console.log(`Price updated for ${id}: ${old.amount} ${old.currency} -> ${amount} ${currency}`);
}

function actionUpdateStatus(list, args) {
  const id = req(args, 'vehicle-id');
  const v = getVehicle(list, id);
  const status = req(args, 'status');
  if (!STATUSES.includes(status)) fail(`status must be one of: ${STATUSES.join(', ')}`);
  const old = v.status;
  v.status = status;
  v.updated_at = new Date().toISOString();
  writeVehicles(list);
  recordChange(v, ['status'], old, status, 'update-status');
  console.log(`Status updated for ${id}: ${old} -> ${status}`);
}

function actionUpdateImages(list, args) {
  const id = req(args, 'vehicle-id');
  const v = getVehicle(list, id);
  const images = req(args, 'images').split(',').map((s) => s.trim()).filter(Boolean);
  if (!images.length) fail('images must be a comma-separated list');
  const old = v.images;
  v.images = images;
  v.updated_at = new Date().toISOString();
  writeVehicles(list);
  recordChange(v, ['images'], old, images, 'update-images');
  console.log(`Images updated for ${id} (${images.length} image(s))`);
}

function actionUpdateSpecs(list, args, sets) {
  const id = req(args, 'vehicle-id');
  const v = getVehicle(list, id);
  const old = v.specs.map((s) => ({ ...s }));
  for (const s of sets) {
    const idx = s.indexOf('=');
    if (idx < 0) fail('--set for specs must be label=value');
    const label = s.slice(0, idx).trim();
    const value = s.slice(idx + 1).trim();
    const existing = v.specs.find((x) => x.label === label);
    if (existing) existing.value = value;
    else v.specs.push({ label, value });
  }
  v.updated_at = new Date().toISOString();
  writeVehicles(list);
  recordChange(v, ['specs'], old, v.specs, 'update-specs');
  console.log(`Specs updated for ${id}`);
}

function actionMark(list, args, status, actionName) {
  const id = req(args, 'vehicle-id');
  const v = getVehicle(list, id);
  const old = v.status;
  v.status = status;
  v.updated_at = new Date().toISOString();
  writeVehicles(list);
  recordChange(v, ['status'], old, status, actionName);
  console.log(`${id}: ${old} -> ${status}`);
}

// ---------- Main ----------
function main() {
  const { args, sets, positionals } = parseArgs(process.argv.slice(2));
  const action = positionals[0];

  if (!action || action === 'help' || args.help) {
    console.log(`Usage: node scripts/update-vehicle.mjs <action> [--key value ...]\n
Actions:
  list                                          List inventory (read-only)
  create  --vehicle-id --vin --brand --model --year --mileage --body-type
          --fuel --price [--currency USD] [--transmission] [--drive]
          [--color] [--location] [--status] [--original-price] [--images]
          [--source] [--description]
  update  --vehicle-id --set key=value [...]    Update arbitrary fields
  update-price   --vehicle-id --amount N [--currency USD]
  update-status  --vehicle-id --status STATUS
  update-images  --vehicle-id --images "a.svg,b.svg"
  update-specs   --vehicle-id --set label=value [...]
  mark-reserved  --vehicle-id
  mark-sold      --vehicle-id`);
    return;
  }

  const list = readVehicles();
  switch (action) {
    case 'list': return actionList(list);
    case 'create': return actionCreate(list, args);
    case 'update': return actionUpdate(list, args, sets);
    case 'update-price': return actionUpdatePrice(list, args);
    case 'update-status': return actionUpdateStatus(list, args);
    case 'update-images': return actionUpdateImages(list, args);
    case 'update-specs': return actionUpdateSpecs(list, args, sets);
    case 'mark-reserved': return actionMark(list, args, 'reserved', 'mark-reserved');
    case 'mark-sold': return actionMark(list, args, 'sold', 'mark-sold');
    default: fail(`unknown action: ${action}`);
  }
}

main();
