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

export type VehicleStatus = 'available' | 'reserved' | 'sold' | 'unavailable';

export interface ExportInfo {
  export_availability?: string;
  pickup_location?: string;
  shipping_port?: string;
  inspection?: string;
  documents?: string;
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
  condition: Record<string, string>;
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
