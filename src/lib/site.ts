// Site-wide constants — single source of truth.
// Change the public domain in src/data/site.json only.
import siteJson from '../data/site.json';

export const SITE = siteJson;

export const SITE_URL = SITE.url;

export const CONTACT = {
  email: SITE.email,
  whatsapp: SITE.whatsapp,
  whatsappLink: SITE.whatsappLink,
};

export const SUBDOMAINS = SITE.subdomains;

// Primary (commercial) navigation.
export const PRIMARY_NAV = [
  { label: 'Vehicles', href: '/cars/' },
  { label: 'Brands', href: '/brands/' },
  { label: 'Vehicle Types', href: '/body-types/' },
  { label: 'New Arrivals', href: '/new-arrivals/' },
  { label: 'Request a Car', href: '/request-a-car/' },
  { label: 'How It Works', href: '/how-it-works/' },
];

// External / related resources — visually distinct from core commercial nav.
export const RESOURCE_NAV = [
  { label: 'Vehicle Data', href: SUBDOMAINS.data, external: true, note: 'future sub-site' },
  { label: 'Market Information', href: SUBDOMAINS.market, external: true, note: 'future sub-site' },
  { label: 'Tools', href: SUBDOMAINS.tools, external: true, note: 'future sub-site' },
  { label: 'Companies', href: SUBDOMAINS.companies, external: true, note: 'future sub-site' },
];

export const LEGAL_NAV = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
  { label: 'Cookie Policy', href: '/cookies/' },
];

export function formatPrice(price: { amount: number; currency: string }): string {
  const code = price.currency === 'CNY' ? 'CNY' : price.currency;
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: code,
      maximumFractionDigits: 0,
    }).format(price.amount);
  } catch {
    return `${code} ${price.amount.toLocaleString('en-US')}`;
  }
}

export function formatMileage(km: number): string {
  return `${km.toLocaleString('en-US')} km`;
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}
