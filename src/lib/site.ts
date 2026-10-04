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
