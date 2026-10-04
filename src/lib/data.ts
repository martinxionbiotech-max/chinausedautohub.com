// Data access layer. Components and pages read vehicles/brands/models
// ONLY through this module — never by importing raw JSON directly.
// This keeps the presentation layer decoupled from storage, so the data
// layer can later be swapped for a database/API without touching UI code.
import vehiclesJson from '../data/vehicles.json';
import brandsJson from '../data/brands.json';
import modelsJson from '../data/models.json';
import bodyTypesJson from '../data/body-types.json';
import fuelTypesJson from '../data/fuel-types.json';
import transmissionsJson from '../data/transmissions.json';
import drivesJson from '../data/drive-types.json';
import marketsJson from '../data/markets.json';
import powertrainsJson from '../data/powertrains.json';
import type {
  Vehicle,
  Brand,
  VehicleModel,
  BodyType,
  Powertrain,
  FuelType,
  TransmissionType,
  DriveType,
  Market,
  VehicleStatus,
} from './types';

const vehicles = vehiclesJson as Vehicle[];
const brands = brandsJson as Brand[];
const models = modelsJson as VehicleModel[];
const bodyTypes = bodyTypesJson as BodyType[];
const fuelTypes = fuelTypesJson as FuelType[];
const transmissions = transmissionsJson as TransmissionType[];
const drives = drivesJson as DriveType[];
const markets = marketsJson as Market[];
const powertrains = powertrainsJson as Powertrain[];

const brandMap = new Map(brands.map((b) => [b.slug, b]));
const modelMap = new Map(models.map((m) => [`${m.brand}/${m.slug}`, m]));
const bodyTypeMap = new Map(bodyTypes.map((t) => [t.slug, t]));
const fuelMap = new Map(fuelTypes.map((t) => [t.slug, t]));
const transmissionMap = new Map(transmissions.map((t) => [t.slug, t]));
const driveMap = new Map(drives.map((t) => [t.slug, t]));
const marketMap = new Map(markets.map((m) => [m.slug, m]));
const powertrainMap = new Map(powertrains.map((p) => [p.slug, p]));
const vehicleMap = new Map(vehicles.map((v) => [v.vehicle_id, v]));

// ---------- Vehicles ----------

export function getAllVehicles(): Vehicle[] {
  return vehicles;
}

export function getVehicle(id: string): Vehicle | undefined {
  return vehicleMap.get(id);
}

export function getVehiclesByBrand(brandSlug: string): Vehicle[] {
  return vehicles.filter((v) => v.brand === brandSlug);
}

export function getVehiclesByModel(modelSlug: string): Vehicle[] {
  return vehicles.filter((v) => v.model === modelSlug);
}

export function getVehiclesByBodyType(typeSlug: string): Vehicle[] {
  return vehicles.filter((v) => v.body_type === typeSlug);
}

export function getVehiclesByPowertrain(powertrainSlug: string): Vehicle[] {
  return vehicles.filter((v) => v.fuel === powertrainSlug);
}

export function getVehiclesByStatus(status: VehicleStatus): Vehicle[] {
  return vehicles.filter((v) => v.status === status);
}

export function getAvailableVehicles(): Vehicle[] {
  return vehicles.filter((v) => v.status === 'available');
}

export function getListableVehicles(): Vehicle[] {
  // Listing shows everything except sold units; sold vehicles remain
  // reachable via their own detail page and the status filter.
  return vehicles.filter((v) => v.status !== 'sold');
}

export function getFeaturedVehicles(limit = 8): Vehicle[] {
  return getAvailableVehicles()
    .slice()
    .sort((a, b) => (a.year !== b.year ? b.year - a.year : a.mileage_km - b.mileage_km))
    .slice(0, limit);
}

export function getNewArrivals(limit = 8): Vehicle[] {
  return vehicles
    .filter((v) => v.status !== 'sold')
    .slice()
    .sort((a, b) => b.updated_at.localeCompare(a.updated_at))
    .slice(0, limit);
}

export function getSimilarVehicles(v: Vehicle, limit = 4): Vehicle[] {
  const scored = vehicles
    .filter((x) => x.vehicle_id !== v.vehicle_id && x.status === 'available')
    .map((x) => {
      let score = 0;
      if (x.model === v.model) score += 4;
      if (x.brand === v.brand) score += 3;
      if (x.body_type === v.body_type) score += 2;
      if (x.fuel === v.fuel) score += 1;
      const priceDelta = Math.abs(x.price.amount - v.price.amount);
      if (priceDelta < 5000) score += 1;
      return { x, score };
    })
    .sort((a, b) => b.score - a.score)
    .map((s) => s.x);
  return scored.slice(0, limit);
}

// ---------- Brands / Models ----------

export function getBrand(slug: string): Brand | undefined {
  return brandMap.get(slug);
}

export function getAllBrands(): Brand[] {
  return brands;
}

export function getBrandsWithVehicles(): Brand[] {
  const seen = new Set(vehicles.map((v) => v.brand));
  return brands.filter((b) => seen.has(b.slug));
}

export function getModel(brandSlug: string, modelSlug: string): VehicleModel | undefined {
  return modelMap.get(`${brandSlug}/${modelSlug}`);
}

export function getModelsByBrand(brandSlug: string): VehicleModel[] {
  return models.filter((m) => m.brand === brandSlug);
}

export function getModelsByBodyType(typeSlug: string): VehicleModel[] {
  return models.filter((m) => m.bodyType === typeSlug);
}

export function getAllModels(): VehicleModel[] {
  return models;
}

// Popular models for a brand: models that actually have inventory, ordered
// by inventory count descending.
export function getPopularModelsForBrand(brandSlug: string): VehicleModel[] {
  return models
    .filter((m) => m.brand === brandSlug)
    .map((m) => ({ m, count: getVehiclesByModel(m.slug).length }))
    .filter((x) => x.count > 0)
    .sort((a, b) => b.count - a.count)
    .map((x) => x.m);
}

// ---------- Reference dictionaries ----------

export function getBodyType(slug: string): BodyType | undefined {
  return bodyTypeMap.get(slug);
}

export function getAllBodyTypes(): BodyType[] {
  return bodyTypes;
}

export function getPowertrain(slug: string): Powertrain | undefined {
  return powertrainMap.get(slug);
}

export function getAllPowertrains(): Powertrain[] {
  return powertrains;
}

export function getPowertrainsWithVehicles(): Powertrain[] {
  const seen = new Set(vehicles.map((v) => v.fuel));
  return powertrains.filter((p) => seen.has(p.slug));
}

export function getBodyTypesWithVehicles(): BodyType[] {
  const seen = new Set(vehicles.map((v) => v.body_type));
  return bodyTypes.filter((t) => seen.has(t.slug));
}

export function getFuelType(slug: string): FuelType | undefined {
  return fuelMap.get(slug);
}

export function getAllFuelTypes(): FuelType[] {
  return fuelTypes;
}

export function getTransmission(slug: string): TransmissionType | undefined {
  return transmissionMap.get(slug);
}

export function getAllTransmissions(): TransmissionType[] {
  return transmissions;
}

export function getDrive(slug: string): DriveType | undefined {
  return driveMap.get(slug);
}

export function getAllDrives(): DriveType[] {
  return drives;
}

export function getMarket(slug: string): Market | undefined {
  return marketMap.get(slug);
}

export function getAllMarkets(): Market[] {
  return markets;
}

// ---------- Composite display helpers ----------

export interface VehicleDisplay {
  vehicle: Vehicle;
  brand: Brand | undefined;
  model: VehicleModel | undefined;
  bodyType: BodyType | undefined;
  fuelType: FuelType | undefined;
  transmission: TransmissionType | undefined;
  drive: DriveType | undefined;
}

export function resolveVehicle(v: Vehicle): VehicleDisplay {
  return {
    vehicle: v,
    brand: getBrand(v.brand),
    model: getModel(v.brand, v.model),
    bodyType: getBodyType(v.body_type),
    fuelType: getFuelType(v.fuel),
    transmission: getTransmission(v.transmission),
    drive: getDrive(v.drive),
  };
}

export function vehicleTitle(d: { vehicle: Vehicle; brand?: Brand; model?: VehicleModel }): string {
  const b = d.brand?.name ?? d.vehicle.brand;
  const m = d.model?.name ?? d.vehicle.model;
  return `${d.vehicle.year} ${b} ${m}`;
}

// ---------- Listing (filter / sort) ----------
// Pure functions used both server-side (default render) and by the
// client-side progressive-enhancement filter on /cars/.

export type SortKey = 'newest' | 'oldest' | 'price-asc' | 'price-desc' | 'mileage-asc' | 'mileage-desc' | 'updated';

export interface ListingQuery {
  brand?: string;
  model?: string;
  bodyType?: string;
  fuel?: string;
  transmission?: string;
  drive?: string;
  minYear?: number;
  maxYear?: number;
  maxPrice?: number;
  maxMileage?: number;
  status?: VehicleStatus | 'all';
  q?: string;
  sort?: SortKey;
}

export function filterVehicles(list: Vehicle[], q: ListingQuery): Vehicle[] {
  let out = list;

  if (q.status && q.status !== 'all') {
    out = out.filter((v) => v.status === q.status);
  } else if (!q.status) {
    out = out.filter((v) => v.status === 'available');
  }

  if (q.brand) out = out.filter((v) => v.brand === q.brand);
  if (q.model) out = out.filter((v) => v.model === q.model);
  if (q.bodyType) out = out.filter((v) => v.body_type === q.bodyType);
  if (q.fuel) out = out.filter((v) => v.fuel === q.fuel);
  if (q.transmission) out = out.filter((v) => v.transmission === q.transmission);
  if (q.drive) out = out.filter((v) => v.drive === q.drive);
  if (q.minYear) out = out.filter((v) => v.year >= q.minYear);
  if (q.maxYear) out = out.filter((v) => v.year <= q.maxYear);
  if (q.maxPrice) out = out.filter((v) => v.price.amount <= q.maxPrice);
  if (q.maxMileage) out = out.filter((v) => v.mileage_km <= q.maxMileage);

  if (q.q) {
    const needle = q.q.toLowerCase();
    out = out.filter((v) => {
      const hay = `${v.brand} ${v.model} ${v.year} ${v.color} ${v.location}`.toLowerCase();
      return hay.includes(needle);
    });
  }

  return sortVehicles(out, q.sort);
}

export function sortVehicles(list: Vehicle[], sort: SortKey = 'newest'): Vehicle[] {
  const arr = list.slice();
  switch (sort) {
    case 'price-asc':
      return arr.sort((a, b) => a.price.amount - b.price.amount);
    case 'price-desc':
      return arr.sort((a, b) => b.price.amount - a.price.amount);
    case 'oldest':
      return arr.sort((a, b) => a.year - b.year);
    case 'mileage-asc':
      return arr.sort((a, b) => a.mileage_km - b.mileage_km);
    case 'mileage-desc':
      return arr.sort((a, b) => b.mileage_km - a.mileage_km);
    case 'updated':
      return arr.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
    case 'newest':
    default:
      return arr.sort((a, b) => b.year - a.year);
  }
}
