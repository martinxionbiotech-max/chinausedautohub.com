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

export type VehicleStatus = 'available' | 'reserved' | 'sold' | 'sourcing' | 'expired' | 'hidden';

export interface ExportInfo {
  export_availability?: string;
  pickup_location?: string;
  shipping_port?: string;
  inspection?: string;
  documents?: string;
}

export type ConfidenceLevel =
  | 'verified'
  | 'provided'
  | 'estimated'
  | 'not_available'
  | 'not_provided';

export interface DataConfidence {
  vehicle_identity?: ConfidenceLevel;
  mileage?: ConfidenceLevel;
  price?: ConfidenceLevel;
  inspection?: ConfidenceLevel;
  battery_health?: ConfidenceLevel;
  maintenance_history?: ConfidenceLevel;
  [key: string]: ConfidenceLevel | undefined;
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
  documents?: string[] | null;
  data_source?: string;
  data_confidence?: DataConfidence;
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
  dataUrl: string;
}

export interface BodyType {
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
