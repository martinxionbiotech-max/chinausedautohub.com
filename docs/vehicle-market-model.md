# Vehicle × Market Data Model — ChinaUsedAutoHub

> 批次：P3.8（§7 Vehicle × Market Intelligence）
> 日期：2026-10-04 UTC
> 依据：`phase2/45-car-export-phase3-content-prompt.md` §7、`phase2/42-car-export-platform-prompt.md`
> 状态：**模型先行，本批不建组合页**（见 §6 决策）

---

## 1. Purpose & scope

The goal is to connect a **Vehicle** (from the Data sub-site) to a **Market** (from the Market
sub-site) through a *relationship* — not through a mechanically generated URL. A combination page
should only exist when the pairing itself produces knowledge that neither the vehicle page nor the
country page already states.

This document defines:

1. the relationship data model (`vehicle_id ↔ country_id`);
2. the fields that make a combination meaningful;
3. the **independent-information-increment** gate that decides whether a page is generated;
4. a page template draft;
5. this phase's pilot decision (0 pages + reasoning).

Ownership: the model lives in the main-site `docs/` because it spans both sub-sites. The actual
combination *pages* (when created) belong to the **Market sub-site**, which owns `countries.json`,
`importrules.json`, `taxrules.json`, `ports.json`, `routes.json` and already implements the only
data-driven Country×Model page (`countries/kenya/byd-song-plus.astro`).

---

## 2. Relationship data model

A combination is a relation record keyed by the pair, not a copy of either side's data. It holds
only the *delta* — the facts that exist because **this vehicle meets this market**.

```
Vehicle × Market relation
├── vehicle_id        (string)  → data sub-site models.json[].model_id
├── country_id        (string)  → market sub-site countries.json[].country_id
├── relationship fields (all optional, null when unknown)
│   ├── drive_side_fit        : "match" | "mismatch" | "needs_conversion" | null
│   ├── age_rule_fit          : "eligible" | "ineligible" | "borderline" | null
│   ├── ev_charging_compat    : { standard, connector, voltage, frequency, needs_adapter, notes } | null
│   ├── import_eligibility    : { status, requirements[], notes } | null
│   ├── shipping_route        : { origin_port, destination_port, method, notes } | null
│   └── cost_anchors          : { duty_rate, vat_rate, ev_duty_rate, basis, notes } | null
└── provenance (every fact)
    ├── source
    ├── source_url
    ├── last_checked
    └── confidence / needs_review
```

### 2.1 Field semantics

| Field | Meaning | Source of truth | Independent increment |
|---|---|---|---|
| `drive_side_fit` | Does the vehicle's steering side match the market's registration rule? | vehicle (`drive_type`/market of origin) × country (`drive_side` rule) | Only the *combination* reveals the match — the country page lists LHD/RHD, but not which specific model is LHD |
| `age_rule_fit` | Does the model's production/registration window satisfy the country's age limit? | model `production_years` × country `vehicle_age` rule | A model's years vs a market's cut-off is a per-pair computation |
| `ev_charging_compat` | Will the EV/PHEV/EREV charge on the destination network (standard/connector/voltage/frequency)? | trim `powertrain`/spec × destination charging context | China uses GB/T; each destination uses CCS2/CHAdeMO/etc. — compat is always a per-pair judgment |
| `import_eligibility` | What conformity/clearance (GCC/SABER/PVoC/SONCAP/EAEU…) applies to *this* vehicle? | model category × country `import_eligibility` rules | Conformity requirements are country-scoped but vary by vehicle class |
| `shipping_route` | Which ports/method apply to this vehicle + market? | country `ports`/`routes` × vehicle size/type | Route is market-scoped; method (RoRo vs container) is vehicle-dependent |
| `cost_anchors` | The duty/VAT anchors that apply to this vehicle class in this market | country `taxrules` × vehicle powertrain (EV vs ICE) | EV duty relief is a per-pair fact (e.g. Kenya EV 10% vs standard 25%) |

### 2.2 Why relationship fields are optional/nullable

Both sides of a pair are already individually sourced and `needs_review`-flagged. The relationship
layer must **not invent a delta**. A field is written only when the two data sources can be
truthfully combined; otherwise it is `null` and the page (if any) shows "Not available" for that
row. This mirrors the site-wide zero-fabrication rule (§8 trust terminology, main-site guides).

---

## 3. Generation conditions — the independent-information-increment gate

A combination page is generated **only when it adds at least one of these increments that neither
parent page already states**:

1. **Compatibility increment** — a drive-side, charging, or voltage/frequency fact that is *specific
   to this model in this market* and is not derivable by a reader from the two parent pages alone.
   Example: a China-market LHD EV × a CCS2 destination has a real charging-compatibility question;
   a generic ICE SUV × an LHD market with no age conflict does not.
2. **Cost/regulatory increment** — an EV-duty-relief, age-cut-off, or conformity requirement that
   materially changes the economics *for this vehicle class*. Example: BYD EV × Kazakhstan
   (EV duty exempt) is a per-pair cost anchor; a generic model with no EV status adds nothing.
3. **Risk/eligibility increment** — a hard block or warning (drive-side mismatch, age ineligibility,
   conformity gap) that only the pairing exposes. A negative result with evidence is a valid
   increment (it warns the buyer off), but a trivially "compatible" pair is not.

**Negative gate — do NOT generate when:**

- the pair is a **mechanical cross-product** (every EV × every market, every SUV × every market);
- the delta is **already fully stated** on the country page (e.g. "UAE is LHD" already tells a
  China LHD model it fits) or the model page (e.g. the model already documents its charging port);
- the pairing produces **no model-specific or market-specific fact** beyond the two parents.

The rule is: *generate the page only if deleting it would lose information a buyer needs.* If a
pair is just "BYD Atto 3 exists" + "Kazakhstan exists", there is nothing to write.

---

## 4. Template draft (when a pair passes the gate)

URL: `market.chinausedautohub.com/countries/{country_id}/{model_id}/` (extends the existing
`countries/kenya/byd-song-plus` pattern).

```
H1: {Model name} → {Country name} — export compatibility & cost
Summary: one sentence stating what this pair specifically resolves (fit, charging, cost).

1. At-a-glance verdict        → eligible / needs review / not eligible (with the deciding factor)
2. Drive-side fit             → model side vs market rule (match/mismatch/conversion)
3. Age-rule fit               → model years vs market cut-off
4. EV charging compatibility  → standard/connector/voltage/frequency + adapter note (EV only)
5. Import eligibility         → conformity/clearance requirements for this vehicle class
6. Shipping route             → origin/destination ports + method
7. Cost anchors               → duty/VAT/EV-duty anchors for this class (link taxrules table)
8. Decision summary           → checklist: what to confirm before committing
9. Related                    → data /models/{id}/, market /countries/{id}/, guides, tools

Each section carries Source / Last checked / Confidence (or "Not available"), never fabricated.
```

The page reuses the Market sub-site's existing `getModel()` / rule-joining helpers; it does not
copy spec values out of `models.json` — it references them.

---

## 5. Data snapshot used for this decision

**Countries** (7, from market `countries.json`):

| country_id | drive_side | region | EV policy (ev_policy rule) | EV duty anchor |
|---|---|---|---|---|
| uae | LHD | middle-east | incentives (charging, toll) | — (no EV-specific duty recorded) |
| saudi-arabia | LHD | middle-east | adoption incentives | — |
| kenya | RHD | africa | EV duty relief (EAC CET) | 10% (vs 25% standard) |
| tanzania | RHD | africa | reduced excise on EV | — |
| nigeria | RHD | africa | developing | — |
| kazakhstan | LHD | central-asia | temporary EV duty exemption | 0% (vs 15%) |
| uzbekistan | LHD | central-asia | EV duty + excise exemption | 0% (vs 30%) |

**EV / PHEV / EREV models** (from data `models.json`, with an EV/PHEV/EREV trim):

`byd-song-plus` (PHEV/EV), `byd-qin-plus` (PHEV/EV), `byd-atto-3` (EV), `byd-han` (EV/PHEV),
`byd-seal` (EV), `li-auto-l7` (EREV), `nio-es6` (EV), `xpeng-g6` (EV), `saic-mg-zs` (EV/ICE).

China domestic-market vehicles are **LHD**, so China-sourced vehicles fit LHD markets by default and
carry a real drive-side question for the three RHD markets (Kenya / Tanzania / Nigeria).

---

## 6. Pilot decision — **0 pages this phase**

**Decision: no combination pages are created in P3.8.** Reasons:

1. **Ownership boundary.** Combination pages are Market-sub-site assets (that sub-site owns the
   country/rule/tax/port/route data and the `getModel()` join). The main site has no vehicle×market
   route and must not duplicate market-owned data (§17 no-duplication, SCHEMA.md ownership contract).
2. **Read-only scope.** This phase's brief marks the four sub-sites as read-only reference; the
   only writable repository is the main site. Creating the pilot on the Market sub-site would
   breach that boundary.
3. **Exemplar already exists.** The Market sub-site already ships one data-driven Country×Model
   page (`kenya/byd-song-plus.astro`), which validates the pattern — more pages would not prove the
   model further, only the data layer would.
4. **No page should be a mechanical cross-product.** Given §3's gate, the honest deliverable now is
   the gate itself and the template, not rushed pages against read-only data.

**Strongest candidate pairs (for a future writable-Market phase), ranked by independent increment:**

| Rank | Pair | Independent increment |
|---|---|---|
| 1 | BYD Atto 3 (EV) × Kazakhstan | LHD fit ✓ · EV duty 0% vs 15% · GB/T→CCS2 charging compat · EAEU conformity — a real per-pair cost + compatibility story |
| 2 | BYD Seal (EV) × Uzbekistan | LHD fit ✓ · EV duty + excise 0% vs 30% · charging + certification — largest duty relief delta |
| 3 | BYD Song Plus (PHEV) × Kenya | RHD mismatch warning (China LHD) + EV/PHEV duty relief — already partially covered by the existing Kenya page |
| 4 | Li Auto L7 (EREV) × any LHD EV market | EREV category is a distinct, under-explained class — high knowledge value but requires EREV-specific rule data first |

These four are recorded here as the go-list when the Market sub-site becomes writable; none is
built now.

---

## 7. Non-goals

- No mass-generated `/model-market/` URL trees (§19 of the Phase-3 brief).
- No duplicate of `models.json` spec values or `taxrules.json` rates into a new file — combination
  pages **reference** sub-site data, they do not copy it.
- No fabricated compatibility verdicts: a charging-standard claim without a source is written
  `null` / "Not available", not guessed.

---

*本批产出：数据模型 + 生成门禁 + 模板草案 + pilot 决策（0 页）。组合页留待 Market 子站可写时按 §6 候选对落地。*
