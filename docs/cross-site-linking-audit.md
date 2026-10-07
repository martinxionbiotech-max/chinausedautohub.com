# ChinaUsedAutoHub — 主站↔子站互链终检批（五仓）

> 审计日期：2026-10-07　|　范围：五仓本地仓库 + 本地 dist 产物　|　类型：互链终检 + 修复
> 规范域（单数）：`chinausedautohub.com`（主站）· `data` / `market` / `tool` / `company` 四子站

---

## 0. 结论速览

| 维度 | 结论 |
|---|---|
| 链接地图规模 | 五仓互链实例 **52,520** 条，去重目标 URL **1,809** 个 |
| 断链（404 目标） | **0** |
| 陈旧目标（已删/slug 变更） | **0** |
| 301 跳转链消除 | **21 处源码修正**（3 URL builder + 15 dataUrl 字段 + 3 模板链接），覆盖主站全部 `market countries` / `data models` / `data brands` 实体链接 |
| 补挂（缺失互链） | **13 个实体**（主站 2 车型补 dataModelId + data 站 11 车型补 Related-market 链接，合计新增 **40 条**互链） |
| 变更仓 | 主站 + data 站（2 仓） |
| 报告路径 | `chinausedautohub.com/docs/cross-site-linking-audit.md`（本文件） |

---

## 1. 链接地图（五仓全量）

### 1.1 规模统计

| 仓 | 互链实例数 | 去重目标 URL | 主要出向 |
|---|---|---|---|
| chinausedautohub.com（主站） | 5,384 | 53 | data / market / tool / company |
| data.chinausedautohub.com | 3,309 | 232 | main / market / tool |
| market.chinausedautohub.com | 42,388 | 1,348 | main / data / tool |
| tools.chinausedautohub.com | 1,119 | 125 | main / data / market / company |
| company.chinausedautohub.com | 320 | 51 | main / data / market |
| **合计** | **52,520** | **1,809** | — |

> market 站实例数最高：82 国页 × 4 语 × 每国热门车型/品牌/工具/指南链接 + 228 组合页，呈指数放大。

### 1.2 六向实体关系链接（源码级地图）

**主站 → 子站（Main→子站）**
- `src/components/Header.astro` / `Footer.astro`：`SUBDOMAINS.{data,market,tools,companies}` 四个根链接（4 语）。
- `src/lib/urls.ts`：`dataModelUrl()`（→ data `/models/{id}/`）、`dataBrandUrl()`（→ data `/brands/{slug}/`）、`marketUrl()`（→ market `/countries/{slug}/`）、`toolsUrl()` / `toolUrl()`（→ tool）。
- `src/templates/BrandPage.astro`：品牌页 → data 品牌 + data 车型 + market 市场 + tool。
- `src/templates/BodyTypePage.astro` / `BodyTypesPage.astro`：→ data body-types + market。
- `src/templates/HomePage.astro`：→ data / market / tools + market 市场卡片。
- `src/templates/MarketsPage.astro`：→ market 市场（`markets.json dataUrl`）+ tools。
- `src/templates/VehicleDetailPage.astro`：→ data 品牌 + data 车型（`dataModelUrl`）。
- `src/templates/NewArrivalsPage.astro` / `PowertrainPage.astro` / `PowertrainsPage.astro`：→ data models / powertrains。
- `src/i18n/guides/*.ts`（22 篇指南）：硬编码 → data 车型（byd-song-plus / atto-3 / seal / li-auto-l7 / nio-es6 / xpeng-g6 / geely-monjaro / chery-tiggo-8 / saic-mg-zs / toyota-rav4 / byd-qin-plus / byd-han / great-wall-haval-h6 等）+ market 国家/ev-import/ports/vehicle-age-rules + tool 计算器。
- `src/data/markets.json`：7 市场 `dataUrl` → market。
- `src/data/brands.json`：8 品牌 `dataUrl` → data（字段当前未被模板消费，保留一致性）。

**data → market / main / tools（Vehicle↔Market↔Guide↔Tool）**
- `src/lib/ecosystem.ts`：8 品牌 → 18 条 market 国家链接（byd/geely/chery/great-wall/changan/gac/li-auto/nio）。
- `src/lib/model-links.ts`：
  - `modelMarketLinks()`：23 车型 → market 国家（`MODEL_MARKETS`）。
  - `modelGuideLinks()`：全部 120 车型 → main `/guides/{slug}/`（6 基础 + 1 EV）。
  - `modelToolLinks()`：全部 120 车型 → tool 计算器（4 基础 + 1 EV）。
- `src/lib/model-notes.ts`：→ main `/cars/?brand={id}`。
- `src/pages/brands/[brand].astro`：→ main `/cars/` + tool + market。
- `src/pages/models/[model].astro`：→ main `/cars/` + `/contact/` + tool `/vehicle-comparison/` + market。

**market → data / tools / main（Market↔Vehicle/Brand/Guide/Tool）**
- `src/templates/CountryPage.astro`（82 国 × 4 语）：→ data `/models/{id}/` + `/brands/{id}/` + `/vehicle-types/{ev,suv,sedan}/` + tool（landed-cost / import-duty / currency-converter / vehicle-comparison）+ main 指南（6 篇）+ main `/cars/` / `/contact/` + 组合页 `/countries/{c}/{v}/`。
- `src/templates/VehicleMarketPage.astro`（228 组合页）：→ data 车型/品牌 + tool（landed-cost / import-duty）+ main `/guides/export-documents/`。

**tools → data / market / main / company**
- 11 计算器页：→ data 车型（硬编码）+ data `/vehicle-types/{ev,suv,sedan}/` + market 国家（82 国循环 + 硬编码）+ main `/cars/` / `/contact/` + company（shipping-cost-estimator）。

**company → data / market / main**
- `src/pages/[category].astro`（8 类别）：→ data `/brands/{id}/` + market `/ports/`。
- `src/pages/companies/[company].astro`（8 真实公司）：→ market `/countries/{id}/` + data `/brands/{id}/` + data `/models/{id}/` + main `/cars/`。

**四子站共享 Header eco-nav**：`Vehicles`(main) / `Vehicle Data`(data) / `Companies`(company) / `Tools`(tool) / `Markets`(market) —— 五向根链接。

---

## 2. 目标存在性验证

### 2.1 实体 ID 全集（单一真源）

| 实体 | 数量 | 来源 |
|---|---|---|
| data 车型（model_id） | 120 | `data/shared/data/models.json` |
| data 品牌（brand_id） | 53 | `data/shared/data/brands.json` |
| data vehicle-types | 4（ev / hybrid / suv / sedan） | `data/src/lib/helpers.ts VEHICLE_TYPES` |
| market 国家（country_id） | 82 | `market/shared/data/countries.json` |
| market 组合页（vehicle×country） | 228（全部 pass gate） | `market/shared/data/vehicle-market.json` |
| tools 计算器 | 11 | `tools/src/pages/*/index.astro` |
| company 类别 | 8 | `companies/src/lib/categories.ts` |
| company 实体 | 8 真实（3 demo 已 noindex） | `companies/shared/data/companies.json` |
| main 指南 | 22 | `main/src/i18n/guides/*.ts` |

### 2.2 验证结果

| 检查项 | 结果 |
|---|---|
| 所有引用 model_id ⊆ data 120 | ✅ 0 缺失 |
| 所有引用 brand_id ⊆ data 53 | ✅ 0 缺失 |
| 所有引用 country_id ⊆ market 82 | ✅ 0 缺失 |
| market 组合关系 228/228 通过 generation gate | ✅ 无 404 组合页 |
| tools 11 计算器 / 8 类别 / 8 公司路径 | ✅ 全部存在 |
| main 指南 6+1 slug | ✅ 全部存在 |
| **断链（404）** | **0** |
| **陈旧目标** | **0** |

### 2.3 附带发现（非断链，记录）

- **models.json 四仓漂移**：`data`/`tools` = 120 车型，`market` = 58，`companies` = 20。因均为 data 120 的**子集**，所有引用 ID 仍解析，**不产生断链**；但 market/companies 侧的实体链接覆盖面收窄（market 58 车型中已覆盖 content.ts 全部 25 个 popularModelIds，故无内容缺失；companies 20 车型仅影响 automaker 关联车型展示）。建议后续按「共享层 × 4 份物理拷贝」原则同步 models.json/brands.json。
- **主站 `_redirects` 5 条 301**（`/request-a-car/`→`/contact/`、`/services/port-handling/`→`/services/` 及 3 语 request-a-car）：均为主站内部旧路径安全网，当前无任何页面指向这些旧路径，保留无害。

---

## 3. 修复明细

### 3.1 301 跳转链消除（主站，21 处源码修正）

子站 canonical 均为尾斜杠形式（sitemap 实测：`/brands/aion/`、`/countries/uae/`、`/currency-converter/`、`/companies/byd-auto/`），且 market 站 `trailingSlash: 'always'`。主站此前以**无尾斜杠**链接，产生 301 链。已统一为尾斜杠：

| 文件 | 修正 | 影响 |
|---|---|---|
| `src/lib/urls.ts` | `dataModelUrl` / `dataBrandUrl` / `marketUrl` 三 builder 加尾斜杠 | 全站模板复用 |
| `src/data/markets.json` | 7 条 `dataUrl` 加尾斜杠 | MarketsPage |
| `src/data/brands.json` | 8 条 `dataUrl` 加尾斜杠 | 一致性（字段当前未消费） |
| `src/templates/BrandPage.astro` | 市场卡片链接加尾斜杠 | 8 品牌 × 4 语 |
| `src/templates/BodyTypePage.astro` | 同上 | body-type 页 × 4 语 |
| `src/templates/HomePage.astro` | 同上 | 首页 × 4 语 |

修复后主站 dist 中 `market.chinausedautohub.com/countries/{slug}`（无斜杠）实例由 **308 → 0**。

### 3.2 补挂（缺失互链，13 个实体 / 40 条链接）

| 方向 | 实体 | 补挂内容 |
|---|---|---|
| Main→data（Vehicle↔data） | 主站 `geely-coolray`（Coolray） | `models.json dataModelId: null → "geely-coolray"` |
| Main→data（Vehicle↔data） | 主站 `chery-arrizo-8`（Arrizo 8） | `models.json dataModelId: null → "chery-arrizo-8"` |
| data→market（Vehicle↔Market） | 11 车型 | `model-links.ts MODEL_MARKETS` 增补：byd-dolphin(13)、mg-4(12)、byd-sealion-6(5)、chery-tiggo-7、deepal-s07、haval-h9、honda-cr-v、mg-5、toyota-rav4、wuling-bingo、zeekr-001（各 1） |

> 依据：11 车型均已在 market 站 `content.ts countryContent.popularModelIds` 中列为热门车型，但此前 data 车型页缺对应 Related-market 链接。国别全部来自 market 已发布数据，零虚构。

---

## 4. 分仓统计

| 仓 | 断链修复 | 陈旧修复 | 301 消除 | 补挂 | 变更文件 |
|---|---|---|---|---|---|
| chinausedautohub.com（主站） | 0 | 0 | 21 处（urls.ts + markets.json + brands.json + 3 模板） | 2 实体（dataModelId） | 5 |
| data.chinausedautohub.com | 0 | 0 | 0 | 11 实体（38 链接） | 1 |
| market.chinausedautohub.com | 0 | 0 | 0 | 0 | 0 |
| tools.chinausedautohub.com | 0 | 0 | 0 | 0 | 0 |
| company.chinausedautohub.com | 0 | 0 | 0 | 0 | 0 |
| **合计** | **0** | **0** | **21** | **13 实体 / 40 链接** | **6** |

---

## 5. 收尾

- 变更仓 build：主站（309 页）、data（185 页）均通过。
- 分仓 commit（标记 `cross-linking`）并 push；五仓同步 0/0。
