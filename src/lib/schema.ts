// Schema.org (JSON-LD) builders. Every block reflects ONLY visible page
// data — no fabricated ratings, reviews, prices or availability.
import type { Vehicle, Brand, VehicleModel, BodyType } from './types';
import { SITE, SITE_URL, CONTACT, formatPrice } from './site';
import { resolveVehicle, vehicleTitle } from './data';
import { vehicleUrl, brandUrl } from './urls';

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE_URL,
    email: CONTACT.email,
    // Only real, verifiable contact points are exposed.
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: CONTACT.email,
        availableLanguage: ['English'],
      },
    ],
  };
}

export function webSiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE_URL,
    description: SITE.description,
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(crumbs: Crumb[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.path.startsWith('http') ? c.path : `${SITE_URL}${c.path}`,
    })),
  };
}

// Vehicle detail page: Product + Vehicle + Offer, plus BreadcrumbList.
export function vehicleSchema(v: Vehicle): JsonLd {
  const d = resolveVehicle(v);
  const brandName = d.brand?.name ?? v.brand;
  const modelName = d.model?.name ?? v.model;
  const url = `${SITE_URL}${vehicleUrl(v)}`;

  const offer: JsonLd = {
    '@type': 'Offer',
    price: v.price.amount,
    priceCurrency: v.price.currency,
    url,
    availability: statusToSchemaAvailability(v.status),
    // Demo listings must not be read as market-live prices.
    itemCondition: 'https://schema.org/UsedCondition',
  };

  const vehicle: JsonLd = {
    '@type': 'Vehicle',
    name: vehicleTitle({ vehicle: v, brand: d.brand, model: d.model }),
    url,
    image: v.images.map((img) => (img.startsWith('http') ? img : `${SITE_URL}${img}`)),
    brand: brandName,
    model: modelName,
    vehicleIdentificationNumber: v.vin,
    vehicleModelDate: String(v.year),
    mileageFromOdometer: {
      '@type': 'QuantitativeValue',
      value: v.mileage_km,
      unitCode: 'KMT',
    },
    vehicleTransmission: d.transmission?.name ?? v.transmission,
    fuelType: d.fuelType?.name ?? v.fuel,
    driveWheelConfiguration: d.drive?.name ?? v.drive,
    color: v.color,
    bodyType: d.bodyType?.name ?? v.body_type,
    offers: offer,
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: vehicleTitle({ vehicle: v, brand: d.brand, model: d.model }),
    url,
    image: v.images.map((img) => (img.startsWith('http') ? img : `${SITE_URL}${img}`)),
    description: v.description,
    brand: { '@type': 'Brand', name: brandName },
    offers: offer,
    vehicle,
    additionalProperty: [{ '@type': 'PropertyValue', name: 'Status', value: v.status }],
  };
}

function statusToSchemaAvailability(status: string): string {
  switch (status) {
    case 'available':
      return 'https://schema.org/InStock';
    case 'reserved':
      return 'https://schema.org/InStock';
    case 'sold':
      return 'https://schema.org/OutOfStock';
    default:
      return 'https://schema.org/OutOfStock';
  }
}

// ItemList for collection pages (home featured, brand listings, etc.).
export function itemListSchema(items: { name: string; url: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url.startsWith('http') ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(faqs: FaqItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

// Re-export helpers used by pages for consistent crumbs.
export function crumb(name: string, path: string): Crumb {
  return { name, path };
}

export { vehicleUrl, brandUrl, formatPrice };
