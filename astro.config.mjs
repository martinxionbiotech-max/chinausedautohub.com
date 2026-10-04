// @ts-check
import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import sitemap from '@astrojs/sitemap';

// Single source of truth for the public site URL lives in src/data/site.json.
// If the production domain changes, edit that one file only.
const siteJson = JSON.parse(
  readFileSync(new URL('./src/data/site.json', import.meta.url), 'utf-8'),
);

export default defineConfig({
  site: siteJson.url,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
