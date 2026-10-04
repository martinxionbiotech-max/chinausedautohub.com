// @ts-check
import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import sitemap from '@astrojs/sitemap';

// Single source of truth for the public site URL lives in src/data/site.json.
// If the production domain changes, edit that one file only.
const siteJson = JSON.parse(
  readFileSync(new URL('./src/data/site.json', import.meta.url), 'utf-8'),
);

// Demo listings must never appear as indexable inventory. Build a set of
// is_demo vehicle ids so the sitemap excludes their detail pages (and any
// locale variant). When a demo listing is flipped to real (is_demo=false),
// it is automatically re-included without a URL change.
const vehiclesJson = JSON.parse(
  readFileSync(new URL('./src/data/vehicles.json', import.meta.url), 'utf-8'),
);
const demoVehicleIds = new Set(
  (Array.isArray(vehiclesJson) ? vehiclesJson : [])
    .filter((v) => v.is_demo === true)
    .map((v) => v.vehicle_id),
);
const isDemoVehiclePage = (page) => {
  for (const id of demoVehicleIds) {
    if (page.includes(`/${id}/`)) return true;
  }
  return false;
};

export default defineConfig({
  site: siteJson.url,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'ru', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !isDemoVehiclePage(page),
    }),
  ],
});
