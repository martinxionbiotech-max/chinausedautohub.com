// URL builders. All public-facing routes are generated here so the URL
// scheme stays consistent and can be changed in one place.
import type { Vehicle, Brand, VehicleModel, BodyType, Market, Powertrain } from './types';
import { SUBDOMAINS } from './site';

export function vehicleUrl(v: Pick<Vehicle, 'brand' | 'model' | 'vehicle_id'>): string {
  return `/cars/${v.brand}/${v.model}/${v.vehicle_id}/`;
}

export function brandUrl(b: Pick<Brand, 'slug'>): string {
  return `/brands/${b.slug}/`;
}

export function bodyTypeUrl(t: Pick<BodyType, 'slug'>): string {
  return `/body-types/${t.slug}/`;
}

export function powertrainUrl(p: Pick<Powertrain, 'slug'>): string {
  return `/powertrains/${p.slug}/`;
}

export function servicesUrl(): string {
  return '/services/';
}

export function serviceUrl(slug: string): string {
  return `/services/${slug}/`;
}

export function guidesUrl(): string {
  return '/guides/';
}

export function guideUrl(slug: string): string {
  return `/guides/${slug}/`;
}

export function trustUrl(): string {
  return '/trust/';
}

export function faqUrl(): string {
  return '/faq/';
}

export function marketsUrl(): string {
  return '/markets/';
}

export function newArrivalsUrl(): string {
  return '/new-arrivals/';
}

export function requestACarUrl(): string {
  return '/contact/';
}

// Model specifications live on the Data sub-site, not the main site.
// The data sub-site routes models at `/models/{model_id}` (one segment);
// returns null when the main-site model has no corresponding data page.
export function dataModelUrl(m: Pick<VehicleModel, 'dataModelId'>): string | null {
  return m.dataModelId ? `${SUBDOMAINS.data}/models/${m.dataModelId}/` : null;
}

export function dataBrandUrl(b: Pick<Brand, 'slug'>): string {
  return `${SUBDOMAINS.data}/brands/${b.slug}/`;
}

export function marketUrl(m: Pick<Market, 'slug'>): string {
  return `${SUBDOMAINS.market}/countries/${m.slug}/`;
}

export function toolsUrl(): string {
  return `${SUBDOMAINS.tools}/`;
}

// Individual tools on the Tools sub-site. Paths are the sub-site's stable
// routes; labels are localised in the dictionary layer.
export type ToolSlug = 'landed-cost-calculator' | 'import-duty-calculator' | 'shipping-cost-estimator' | 'profit-calculator';

export function toolUrl(slug: ToolSlug): string {
  return `${SUBDOMAINS.tools}/${slug}/`;
}
