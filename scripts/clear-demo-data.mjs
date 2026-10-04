#!/usr/bin/env node
/**
 * Bulk-clear DEMO DATA before going live.
 *
 * What it does:
 *   1. Backs up the current vehicles.json to src/data/backups/ (timestamped).
 *   2. Removes every vehicle where is_demo === true.
 *   3. Leaves non-demo (real) inventory untouched.
 *
 * Safety: vehicles are never hard-deleted without a backup; this script only
 * removes records explicitly flagged is_demo:true, so it cannot accidentally
 * remove real inventory.
 *
 * Usage:
 *   node scripts/clear-demo-data.mjs            # preview + confirm
 *   node scripts/clear-demo-data.mjs --yes      # run without prompting
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_DIR = join(ROOT, 'src', 'data');
const BACKUP_DIR = join(DATA_DIR, 'backups');
const VEHICLES_PATH = join(DATA_DIR, 'vehicles.json');

const vehicles = JSON.parse(readFileSync(VEHICLES_PATH, 'utf8'));
const demo = vehicles.filter((v) => v.is_demo === true);
const real = vehicles.filter((v) => v.is_demo !== true);

console.log(`Inventory: ${vehicles.length} total, ${real.length} real, ${demo.length} demo.`);

if (demo.length === 0) {
  console.log('No demo vehicles to clear. Nothing to do.');
  process.exit(0);
}

const force = process.argv.includes('--yes');
if (!force) {
  console.log(`\nThis will remove ${demo.length} demo vehicle(s):`);
  for (const v of demo) console.log(`  - ${v.vehicle_id} (${v.brand}/${v.model})`);
  console.log(`\nRun again with --yes to confirm.`);
  process.exit(0);
}

mkdirSync(BACKUP_DIR, { recursive: true });
const ts = new Date().toISOString().replace(/[:.]/g, '-');
const backupPath = join(BACKUP_DIR, `vehicles-${ts}.json`);
copyFileSync(VEHICLES_PATH, backupPath);

writeFileSync(VEHICLES_PATH, JSON.stringify(real, null, 2) + '\n', 'utf8');

console.log(`Backup written to ${backupPath}`);
console.log(`Removed ${demo.length} demo vehicle(s). ${real.length} real vehicle(s) remain.`);
