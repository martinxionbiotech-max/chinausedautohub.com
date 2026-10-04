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

// Legal & compliance pages — the single source of truth for the footer legal
// nav and the LegalPage template. Each page renders from the `legal.<key>`
// dictionary entry; labels come from `breadcrumb.<crumbKey>`. Pages are
// grouped into Legal (site governance) and Disclaimers (risk disclosure).
export interface LegalPageMeta {
  slug: string; // URL segment (also the LegalPage `variant`)
  key: string; // content key under t.legal
  crumbKey: string; // label key under t.breadcrumb
  path: string; // root-relative URL
  group: 'legal' | 'disclaimers';
}

export const LEGAL_PAGES: LegalPageMeta[] = [
  { slug: 'legal-notice', key: 'legalNotice', crumbKey: 'legalNotice', path: '/legal-notice/', group: 'legal' },
  { slug: 'privacy', key: 'privacy', crumbKey: 'privacy', path: '/privacy/', group: 'legal' },
  { slug: 'terms', key: 'terms', crumbKey: 'terms', path: '/terms/', group: 'legal' },
  { slug: 'cookies', key: 'cookies', crumbKey: 'cookies', path: '/cookies/', group: 'legal' },
  { slug: 'data-protection', key: 'dataProtection', crumbKey: 'dataProtection', path: '/data-protection/', group: 'legal' },
  { slug: 'copyright', key: 'copyright', crumbKey: 'copyright', path: '/copyright/', group: 'legal' },
  { slug: 'disclaimer', key: 'disclaimer', crumbKey: 'disclaimer', path: '/disclaimer/', group: 'disclaimers' },
  { slug: 'vehicle-listing-disclaimer', key: 'vehicleListingDisclaimer', crumbKey: 'vehicleListingDisclaimer', path: '/vehicle-listing-disclaimer/', group: 'disclaimers' },
  { slug: 'export-compliance', key: 'exportCompliance', crumbKey: 'exportCompliance', path: '/export-compliance/', group: 'disclaimers' },
  { slug: 'external-links', key: 'externalLinks', crumbKey: 'externalLinks', path: '/external-links/', group: 'disclaimers' },
  { slug: 'errors-omissions', key: 'errorsOmissions', crumbKey: 'errorsOmissions', path: '/errors-omissions/', group: 'disclaimers' },
];

export const LEGAL_NAV = {
  legal: LEGAL_PAGES.filter((p) => p.group === 'legal'),
  disclaimers: LEGAL_PAGES.filter((p) => p.group === 'disclaimers'),
};

export function formatPrice(
  price: { amount: number; currency: string },
  locale = 'en',
): string {
  const code = price.currency === 'CNY' ? 'CNY' : price.currency;
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: code,
      maximumFractionDigits: 0,
    }).format(price.amount);
  } catch {
    return `${code} ${price.amount.toLocaleString(locale)}`;
  }
}

export function formatMileage(km: number, locale = 'en', unit = 'km'): string {
  return `${km.toLocaleString(locale)} ${unit}`;
}

export function formatDate(iso: string, locale = 'en'): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' });
}
