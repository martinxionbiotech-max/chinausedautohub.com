# China Used Car Export

A static commercial + inventory + lead-generation platform for sourcing used and near-new vehicles from China for export.

## Stack

- **Astro 5** (static output) + **TypeScript** + **Tailwind CSS 3**
- Cloudflare Pages compatible · Schema.org structured data · no WordPress / no SPA

## Quick start

```bash
npm install
npm run dev        # local dev
npm run build      # static build → dist/
npm run preview    # preview the build
```

## Data layer

Vehicle inventory lives in `src/data/*.json` and is read exclusively through `src/lib/data.ts`. Pages/components never import raw JSON directly, so the data layer can be swapped for a database/API without touching the UI.

## Agent operations

Update inventory only through the data layer:

```bash
node scripts/update-vehicle.mjs list                 # read-only listing
node scripts/update-vehicle.mjs mark-sold --vehicle-id <id>
node scripts/update-vehicle.mjs update-price --vehicle-id <id> --amount 23900 --currency USD
node scripts/clear-demo-data.mjs --yes               # bulk-clear DEMO DATA before launch
```

See `docs/agent-operations.md` and `docs/build-deliverables.md`.

## Notes

- All current inventory is **DEMO DATA** (`is_demo: true`, labelled on every page).
- Site URL / contact / sub-domain links are configured in `src/data/site.json` (single source of truth).
