// Shared TypeScript types for the data layer.
// The JSON files in src/data/ must conform to these interfaces.

export interface Price {
  amount: number;
  currency: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export type VehicleStatus = 'available' | 'reserved' | 'sold' | 'sourcing' | 'expired' | 'removed';

export interface ExportInfo {
  export_availability?: string;
  pickup_location?: string;
  shipping_port?: string;
  inspection?: string;
  documents?: string;
}

// Six-state verification system (§8). A vehicle detail is marked with one of
// these levels so buyers know how much to rely on it. Only `verified` asserts
// independent confirmation against a source/document we hold; demo listings
// must never use `verified`.
export type VerificationLevel =
  | 'provided'
  | 'verified'
  | 'seller_supplied'
  | 'source_backed'
  | 'not_available'
  | 'not_independently_verified';

// The nine verification fields exposed on a vehicle listing (§8).
export interface Verification {
  mileage?: VerificationLevel;
  vehicle_identity?: VerificationLevel;
  photos?: VerificationLevel;
  inspection?: VerificationLevel;
  battery_report?: VerificationLevel;
  service_history?: VerificationLevel;
  documents?: VerificationLevel;
  vin?: VerificationLevel;
  export_eligibility?: VerificationLevel;
  [key: string]: VerificationLevel | undefined;
}

export interface Vehicle {
  vehicle_id: string;
  vin: string;
  brand: string;
  model: string;
  year: number;
  mileage_km: number;
  body_type: string;
  fuel: string;
  transmission: string;
  drive: string;
  color: string;
  location: string;
  status: VehicleStatus;
  price: Price;
  original_price: Price;
  images: string[];
  specs: SpecItem[];
  description: string;
  condition: Record<string, string | null>;
  generation?: string | null;
  trim?: string | null;
  registration_date?: string | null;
  battery_capacity?: string | null;
  battery_health?: string | null;
  accident_history?: string | null;
  maintenance_history?: string | null;
  inspection_status?: string | null;
  export_status?: string | null;
  destination?: string | null;
  // Phase 3 real-inventory model — structure only, never fabricated (null until real data).
  powertrain?: string | null;
  range_km?: number | null;
  dimensions?: string | null;
  verification_status?: string | null;
  mileage_status?: string | null;
  document_status?: string | null;
  battery_status?: string | null;
  inspection_report?: string | null;
  battery_report?: string | null;
  interior_photos?: string[] | null;
  dashboard_photos?: string[] | null;
  export_eligibility?: string | null;
  shipping?: string | null;
  notes?: string | null;
  documents?: string[] | null;
  data_source?: string;
  verification?: Verification;
  last_verified_at?: string | null;
  export: ExportInfo | null;
  is_demo: boolean;
  source: string;
  created_at: string;
  updated_at: string;
}

export interface Brand {
  slug: string;
  name: string;
  fullName: string;
  country: string;
  overview: string;
  dataUrl: string;
}

export interface VehicleModel {
  slug: string;
  brand: string;
  name: string;
  bodyType: string;
  fuelType: string;
  shortDescription: string;
  /** data sub-site model_id (e.g. "byd-song-plus"); null when no corresponding data page. */
  dataModelId: string | null;
}

export interface BodyType {
  slug: string;
  name: string;
  description: string;
}

export interface Powertrain {
  slug: string;
  name: string;
  description: string;
}

export interface FuelType {
  slug: string;
  name: string;
  description: string;
}

export interface TransmissionType {
  slug: string;
  name: string;
}

export interface DriveType {
  slug: string;
  name: string;
}

export interface Market {
  slug: string;
  name: string;
  region: string;
  dataUrl: string;
}
