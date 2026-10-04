# ChinaUsedAutoHub — Phase 3 审计报告（只审计，未改任何文件）

> 审计日期：2026-10-04　|　范围：五仓本地仓库　|　依据：`phase2/44-car-export-phase3-prompt.md` §2–§31 + 主仓 AGENTS.md
> 硬约束遵守：本批未修改任何仓库文件（本报告为唯一产出物）。

---

## 0. 结论速览（中文紧凑报告）

| 维度 | 结论 |
|---|---|
| 规范域（线上实测 + §3） | `data` / `market` / `tool` / `company` 均为**单数**；`tools.` / `companies.`（复数）无 DNS |
| 主站 site.json | ✅ 已用单数（`company` / `tool`），**无需改** |
| 域不一致引用总数 | **13 行代码级引用**（跨 4 子仓），详见 §3 |
| 导航残留（旧模板） | 无旧导航模板残留；phase2 的 2 个 REBUILD 项**已落实**（见 §4） |
| DEMO SEO 风险 | **HIGH**（12 台 demo 全部可索引，title/价格/Product+Offer+InStock schema 均无 demo 标记） |
| 五仓 schema / sitemap 状态 | 主站完整；四子站无 Sitemap 指令、无 hreflang、无 noindex 能力（见 §8） |
| 交叉链接缺口 | 主站→market 路径全错（`/uae` 应为 `/countries/uae`）；主站→data 模型路径错（2 段 vs 1 段）；模型身份错位 |
| P0 / P1 / P2 规模 | P0 ≈ 6 项，P1 ≈ 7 项，P2 ≈ 3 项（详见 §12） |
| 审计文档路径 | `chinausedautohub.com/docs/phase3-audit.md`（本文件） |

---

## 1. 仓库结构概览

| 仓 | 框架 | 站点常量来源 | 数据层 |
|---|---|---|---|
| `chinausedautohub.com`（主站） | Astro 5 + Tailwind | `src/data/site.json`（单一真源） | `src/data/*.json`（8 品牌/12 车型/12 车辆/7 市场） |
| `data.chinausedautohub.com` | Astro 5 + 共享设计系统 | `shared/config/config.ts` + `astro.config.mjs` | `shared/data/models.json`（20 车型，含 generation/trim/specs） |
| `market.chinausedautohub.com` | 同上 | 同上 | `shared/data/{countries,importrules,taxrules,ports,routes}.json` |
| `tools.chinausedautohub.com` | 同上 | 同上 | `shared/data/{fx,taxrules}.json` + 纯函数 `lib/calc.js` |
| `companies.chinausedautohub.com` | 同上 | 同上 | `shared/data/companies.json`（11 条） |

**关键架构事实**：四子仓的 `shared/` 目录（components + data + config）经 md5 校验**完全相同**（9 个 data 文件 + 5 个组件全部一致），即「一套共享层 × 4 份物理拷贝」。这既是优点（视觉/数据契约统一），也是风险（任何改动需 4 仓同步，否则漂移）。

---

## 2. 域一致性（§3，P0）

**规范域**：单数 `data` / `market` / `tool` / `company`（线上实测 200，复数域无 DNS）。

### 2.1 主站 site.json 当前值核对 ✅
```json
"subdomains": {
  "data": "https://data.chinausedautohub.com",
  "companies": "https://company.chinausedautohub.com",   // ✅ 单数
  "tools": "https://tool.chinausedautohub.com",          // ✅ 单数
  "market": "https://market.chinausedautohub.com"
}
```
主站已采用单数规范域，**无需修改**。主站全量扫描（src/**）未发现任何 `tools.` / `companies.` 复数 URL 引用（仅 AGENTS.md/docs 的文字性描述中出现「companies」一词，非 URL）。

### 2.2 域不一致引用清单（需修正）

| 仓 | 文件 | 行 | 现值 | 应值 |
|---|---|---|---|---|
| 四子仓共享 | `shared/config/config.ts`（4 份相同） | 5 | `https://companies.${BASE_DOMAIN}` | `https://company.${BASE_DOMAIN}` |
| 四子仓共享 | `shared/config/config.ts`（4 份相同） | 6 | `https://tools.${BASE_DOMAIN}` | `https://tool.${BASE_DOMAIN}` |
| tools | `astro.config.mjs` | 3 | `https://tools.chinausedautohub.com` | `https://tool.chinausedautohub.com` |
| companies | `astro.config.mjs` | 3 | `https://companies.chinausedautohub.com` | `https://company.chinausedautohub.com` |
| companies | `src/layouts/i18n-notes.md` | 30–32 | 3 处 hreflang 示例 `https://companies.chinausedautohub.com/...` | `https://company.chinausedautohub.com/...` |

> 说明：`shared/config/config.ts` 逻辑上 1 份、物理上 4 份（四仓各一，内容一致）。修正需 4 仓同步。
> 附带项：`tools.` / `companies.` 的**仓库目录名**与规范域不一致（`companies.chinausedautohub.com/` 目录名是复数）。目录名不影响 Cloudflare Pages 绑定，但建议后续随域名切换一并改名以消除困惑（低优先级，非代码）。

### 2.3 附加发现：主站→子站的**路径**错误（非域名，但同属 §3「无失效引用」）
见 §10 交叉链接矩阵——域名对了、路径错了（market 少 `/countries/`，data 模型多一层 brand 段）。

---

## 3. 导航一致性（§4，P0）

- **主站**：Header/Footer 集中于 `src/components/{Header,Footer,BaseLayout}.astro`，所有模板统一走 BaseLayout，**无旧导航结构残留**。
- **phase2-audit 的 2 个 REBUILD 项核实结果**：
  - `BrandPage.astro`（原「薄页」）→ 已升级为「商业 + 知识」落地页（Overview + Available Vehicles + Popular Models + Vehicle Types + Powertrain + Market Position + Related Data + CTA），**已落实**。
  - `robots.txt`（原 sitemap 域为 pages.dev）→ 现为 `Sitemap: https://chinausedautohub.com/sitemap-index.xml`，**已修复**。
- **跨仓导航差异**（KEEP 但标注）：主站导航为富结构（Vehicles 下拉 / Brands / Markets / Services / How It Works + Resources 下拉 + 语言切换）；四子仓为极简「eco-nav」（Vehicles / Vehicle Data / Companies / Tools / Markets）。子仓导航未包含主站的 Brands / Services / How It Works，主站 Header 的资源下拉才含全部子站入口。术语基本对齐（「Vehicle Data」主站与 data 站一致；「Markets」↔「Market Information」轻微差异）。
- **结论**：无遗留旧模板；主站内部一致；主站↔子站导航结构不同但语义可接受（IMPROVE 项：统一术语「Markets」并考虑子站 nav 增加「Brands」入口）。

---

## 4. DEMO SEO 控制（§27，P0）

### 4.1 现状（12 台车全部 `is_demo:true`）
- **可见标记存在**：详情页 + 卡片均显示「DEMO DATA」徽章、「Example price — demo listing」、demo 图片注记、FAQ 明确「不是真实在售车」。VIN 前缀 `DEMO-VIN-`。
- **但 SEO 层无 demo 标记**（风险点）：
  - `<title>` = `${year} ${brand} ${model} — ${price} | China Used Car Export`，例：`2024 BYD Song Plus — $24,800 | China Used Car Export` —— 与真实在售车标题无异，无「Example」字样。
  - `<meta description>` 无 demo 字样（仅车辆参数）。
  - **无 noindex**：demo 页全部可索引，进入 sitemap，自引用 canonical。
  - **JSON-LD 伪造风险**：`vehicleSchema()` 对 demo 车输出 `@type: Product` + `Offer{price, availability:InStock}` + `Vehicle{VIN, mileage, ...}`。这直接违反 §19「Do not mark DEMO vehicles as real commercial inventory」+ §27「DEMO pages could appear as genuine inventory」。
  - 图片为 `placeholder-*.svg`（无真实照片，符合 §7 不造假，但 alt/视觉均为占位图）。

### 4.2 风险等级：**HIGH**

### 4.3 控制方案选项（供决策，本批未实施）
| 方案 | 做法 | 取舍 |
|---|---|---|
| A（推荐） | demo 车 title 前缀 `Example Vehicle Listing:`；meta description 加 `(example/demo listing — not real inventory)`；schema 对 `is_demo` 时**移除 Offer 价格/availability**（或 `availability: PreOrder` + `itemCondition` 明确非真实在售） | 保留可索引但消除「真实库存」误导；改动集中在 `vehicleSchema()` + `VehicleDetailPage` 标题 |
| B | demo 详情页加 `<meta robots noindex>`（BaseLayout 已支持 `noindex` prop） | 最彻底；但当前**全部**库存为 demo，等于整车区从索引消失；未来转真实需逐台移除 noindex（URL 不变） |
| C | A + B 组合 | 先 noindex 详情页，上线真实库存时对真实车移除 noindex + 保留 title 前缀逻辑 |

**建议**：采用 **C**——`is_demo` 时 title 加前缀 + schema 降级 + noindex 详情页；demo→real 转换时（`is_demo=false` 或状态转 real）自动恢复。`clear-demo-data.mjs` 上线前会删除全部 demo 车（详见 §6），因此 noindex 是过渡性安全网。

---

## 5. 车辆实体架构（§5，P0）

### 5.1 Brand→Model→Generation→Trim→Vehicle 链现状

| 层 | 主站 | data 子站 |
|---|---|---|
| Brand | ✅ 8 品牌（brands.json） | ✅ 16 品牌（shared brands.json） |
| Model | ✅ 12 车型（models.json，**无 generation/trim**） | ✅ 20 车型（含 generations[].trims[].specs） |
| Generation | ❌ 主站无此层（vehicles.json 字段存在但全 null） | ✅ 完整 |
| Trim | ❌ 同上 | ✅ 完整 |
| Vehicle | ✅ 12 台（vehicles.json） | — |

**结论**：Generation→Trim 层**只存在于 data 子站**；主站车辆/车型数据层无 generation/trim（字段已在批 A 加入但全 null），展示层未接线。

### 5.2 展示层接线核实
- `schema.ts`：已接线——`trim → vehicleConfiguration`、`generation → additionalProperty`（**仅当非 null 时输出**，当前全 null 故不输出）。
- `VehicleDetailPage.astro`：**未接线**——详情页无 generation/trim 显示区（规格区只渲染 `specs[]`）。
- 结论：generation/trim 字段「数据层已加、schema 已预留、**展示层未接线**」。

### 5.3 §5 十五项清单对照（主站车辆详情页）

| # | 项 | 状态 | # | 项 | 状态 |
|---|---|---|---|---|---|
| 1 | Brand | ✅ | 9 | Drive type | ✅ |
| 2 | Model | ✅ | 10 | Mileage | ✅ |
| 3 | Generation | ❌（null） | 11 | Location | ✅ |
| 4 | Trim | ❌（null） | 12 | Price | ✅ |
| 5 | Model year | ✅ | 13 | Status | ✅ |
| 6 | Body type | ✅ | 14 | Vehicle ID | ✅ |
| 7 | Powertrain | ⚠️（以 fuel 代替，无独立 powertrain） | 15 | Last updated | ✅ |
| 8 | Fuel type | ✅ | — | Verification status | ✅（Information Availability 表） |

缺口：**Generation、Trim**（2 项）为硬缺口；Powertrain 与 Fuel 合并为一字段。

---

## 6. 真实库存模型就绪度（§6，P0）

### 6.1 §6 九组字段 vs vehicles.json 对照

| 组 | 字段 | 现状 |
|---|---|---|
| 1 身份 | vehicle_id / brand / model / generation / trim / model_year | ✅✅✅ / ❌(null) / ❌(null) / ⚠️（字段名 `year`，非 `model_year`） |
| 2 规格 | mileage / powertrain / fuel / transmission / drivetrain / body_type / battery / range / dimensions / key specs | ✅ / ❌无独立 powertrain / ✅ / ✅ / ✅(drive) / ✅ / ❌(battery_capacity null) / ❌无 range / ❌无 dimensions（仅 specs 文本） / ✅(specs[]) |
| 3 商业 | asking_price / currency / location / availability / listing_date / updated_at | ✅(price) / ✅ / ✅ / ✅(status) / ✅(created_at) / ✅(updated_at) |
| 4 验证 | verification_status / mileage_status / inspection_status / document_status / battery_status / last_verified | ❌无 verification_status / ❌ / ✅(null) / ❌(documents null) / ❌(battery_health null) / ✅(last_verified_at null) |
| 5 证据 | VIN / 外内仪表照片 / inspection report / battery report / maintenance history / registration/document | ✅(DEMO-VIN) / ❌(单张 placeholder) / ❌ / ❌ / ❌(null) / ❌(null) |
| 6 状态 | status | ⚠️ 枚举不完整（见 6.2） |
| 7 来源 | source | ✅（source + data_source） |
| 8 市场适配 | destination / export_eligibility | ❌(destination null) / ❌ |
| 9 出口 | export / shipping / notes | ❌(export null) / ❌ / ❌ |

**结论**：骨架已搭好（约 55% 字段就位），但 generation/trim、verification_status 枚举、battery/range/dimensions、证据媒体、export/market-suitability 等约 45% 字段缺失或 null。**符合 §6「不填造」要求**（未编造），但真实库存接入时需补充这些字段与展示。

### 6.2 状态枚举对照（§7 五态）
| 来源 | 枚举 |
|---|---|
| §7 要求 | Available / Reserved / Sold / Expired / **Removed**（5） |
| AGENTS.md | available / reserved / sold / **unavailable**（4） |
| 实际实现（update-vehicle.mjs + i18n + VehicleCard） | available / reserved / sold / **sourcing** / expired / **hidden**（6） |

**三处不一致**：§7 的「Removed」↔实现「hidden」语义错位；实现多出「sourcing」；AGENTS.md 的「unavailable」在实现中已不存在（**AGENTS.md 已过时**）。需统一枚举并回写 AGENTS.md。

### 6.3 demo→real 转换路径（URL 不变性）评估
- URL 生成 `vehicleUrl = /cars/{brand}/{model}/{vehicle_id}/` 稳定，不受 demo 标记影响。✅
- 但转换路径是「**删除** demo + **新建** real」：`clear-demo-data.mjs` 删除全部 `is_demo:true`，`update-vehicle.mjs` 新建真实车。**无「将某台 demo 原地转 real」的显式路径**——若需保持某 demo 的 URL，须新建时复用相同 `vehicle_id`（update-vehicle.mjs `create` 支持）。
- **建议（IMPROVE）**：增加「demo 转 real」操作（保留 vehicle_id/URL，仅翻转 is_demo + 补真实字段），避免真实库存到来时 URL 断裂。

---

## 7. 验证/信任架构（§8/§9，P1）

### 7.1 现有 Information Availability 区块 vs §8 六态
| §8 六态 | 现有实现 |
|---|---|
| Provided | ✅（provided） |
| Verified | ✅（verified） |
| **Seller Supplied** | ❌ 缺失（现有「provided」混用卖家提供/来源背书） |
| **Source-backed** | ❌ 缺失 |
| Not Available | ✅（not_available） |
| **Not Independently Verified** | ❌ 缺失（现有无此措辞） |

现有 5 级：`verified / provided / estimated / not_available / not_provided`，缺「Seller Supplied / Source-backed / Not Independently Verified」3 态。

### 7.2 术语体系现状
| 术语 | 主站车辆 | market | companies | data |
|---|---|---|---|---|
| Source | ❌（仅 source 字段，未展示） | ✅ 每规则 | ✅ 每公司 | ✅ SourceNote |
| Last checked | ⚠️（仅 last_verified_at 全局） | ✅ 每规则 | ✅ last_checked | ✅ source_date |
| Last updated | ✅ updated_at | ✅ | ✅ | ⚠️ |
| Data availability | ⚠️（confidence 表近似） | — | — | — |
| Verification level | ⚠️（5 级，缺 3 态） | ✅ confidence | ✅ 4 级（verified/publicly_listed/source-backed/unverified） | ✅ confidence |

**结论**：market/companies/data 三子站已具备良好 Source/Last checked/confidence 体系；**主站车辆页最弱**（无 Source 展示、无「Not Independently Verified」措辞、conf 表字段粒度不足）。

---

## 8. 四子站审计（§10/§13–16，P1/P2）——只审计

### 8.1 data 站
- 实体链 **Brand→Model→Generation→Trim→Specs→Powertrain 完整**（models.json 20 车型含 generations/trims/specs；页面按 generation→trim 渲染 SpecTable + SourceNote + confidence）。✅
- 页面：brands/[brand]、models/[model]、body-types、powertrains、vehicle-types/[type]、vehicle-specifications、glossary。**无薄页灌水**（reference.ts 为工程知识定义，非编造数据）。✅
- 缺：`market-position.ts` 仅覆盖部分车型；schema 无 `@id` 图引用（低优先）。
- **KEEP**。

### 8.2 market 站
- 国家页数据质量**良好**：每规则带 source/source_url/last_checked/confidence/needs_review；税率表、港口、航线均来源标注；`taxrules.json` 基线 14 条全 `needs_review:true`。✅
- **风险点**：`content.ts` 的 FAQ 文本**硬编码税率**（如 UAE「5% duty + 5% VAT」、Kenya「25% duty + 16% VAT」）与 `taxrules.json` 数据并存，存在**双源漂移风险**（§14 要求来源可查，FAQ 文本无独立 source 字段）。
- 结构异常：`countries/kenya/byd-song-plus.astro` 是**唯一硬编码的 Country×Model 页**（非数据驱动），其余为通用模板。→ 需决策：扩展为数据驱动 or 删除。
- **KEEP + IMPROVE**（税率去硬编码、统一 Country×Model 模式）。

### 8.3 tools 站
- 现有 **11 个工具**（≥ §15 六工具：Landed Cost ✅ / Import Duty ✅ / Profit ✅ / Vehicle Comparison ✅ / Vehicle Age ✅ / Shipping Cost ✅，另加 Currency/FOB-CFR-CIF/Market Compatibility/EV Import/TCO）。
- **无假计算结果**：`calc.js` 纯函数，税率/汇率读取真实 JSON（带 source/last_checked/needs_review），运费/港口费由用户输入（注释明确「never invent unit rates」），页面标「estimate ≠ quotation」。✅
- schema 类型恰当（WebApplication + BreadcrumbList + ItemList）。✅
- **KEEP**。

### 8.4 companies 站
- 字段规范完整（SCHEMA.md 定义 business_type + verification_status 4 级 + source/last_checked）。✅
- **demo 公司标注规范**：3 条 demo（`demo-*` 前缀）全部 `verification_status:unverified`，页面显 DemoBanner；8 家真实车厂标 publicly_listed/source-backed（有真实依据）。✅ 符合 §16「不把 demo 当真实公司」。
- 类别覆盖 §16 全类（automaker/exporter/dealer/inspection/logistics/shipping/supplier/ports）。✅
- **KEEP**。

---

## 9. Schema / Sitemap / Robots / Canonical（§19/§20，P1）

| 仓 | JSON-LD 类型 | 匹配性 | sitemap | robots | canonical/hreflang |
|---|---|---|---|---|---|
| 主站 | Organization/WebSite/ItemList/BreadcrumbList/Article/FAQPage/**Product+Vehicle+Offer** | ⚠️ Product+Offer 对 demo 车输出价格+InStock（见 §4） | ✅ sitemap-index.xml（robots 引用） | ✅ | ✅ 自引用 + 4 语 hreflang |
| data | Dataset/Brand/Vehicle/BreadcrumbList | ✅ | ✅ 生成（@astrojs/sitemap） | ⚠️ robots 无 Sitemap 指令 | ⚠️ 无 hreflang（EN-only） |
| market | Article/BreadcrumbList/CollectionPage | ✅ | ✅ 生成 | ⚠️ 同上 | ⚠️ 同上 |
| tools | ItemList/WebApplication/BreadcrumbList | ✅ | ✅ 生成 | ⚠️ 同上 | ⚠️ 同上 |
| companies | Organization/CollectionPage/BreadcrumbList | ✅ | ✅ 生成 | ⚠️ 同上 | ⚠️ 同上 |

**发现**：
1. **demo 车 Product+Offer schema 造假风险**（P0，见 §4）——`vehicleSchema()` 未按 `is_demo` 降级。
2. 四子站 `BaseLayout` 恒写 `<meta robots="index,follow">`，**无 noindex 能力**（页面无 prop 传入）。
3. 四子站 robots.txt **无 Sitemap 指令**（sitemap 已生成但未被声明，发现性受损）。
4. 四子站**无 hreflang**（i18n-notes.md 仅记录规划，未实现）——与 §21「English 为主」兼容，但若未来加 zh 需实现。
5. 无 `@id` 图引用（各 JSON-LD 块独立，无实体引用链接）——低优先。
6. 未发现意外 noindex / 参数重复 URL / 明显孤立页（主站 `_redirects` 仅 4 条旧路径 301，正常）。

---

## 10. 五仓交叉链接矩阵（§17 优先级链）

| 方向 | 现状 | 问题 |
|---|---|---|
| 主站→data 品牌 | ✅ `/brands/{slug}` 正确（brands.json dataUrl + dataBrandUrl()） | — |
| 主站→data 模型 | ❌ `dataModelUrl()` = `/models/{brand}/{slug}`（2 段）+ models.json dataUrl 同错 | data 实际路由 `/models/{model_id}`（1 段，如 `/models/byd-song-plus`）；且主站 `slug`（song-plus）≠ data `model_id`（byd-song-plus） |
| 主站→data 模型身份 | ❌ 主站 12 车型 vs data 20 车型错位：`tiggo-8-pro`↔`chery-tiggo-8` 不同名；`coolray`/`arrizo-8`/`uni-v` 在 data 站**不存在** | 需统一模型 ID 映射 |
| 主站→market | ❌ `marketUrl()` + HomePage + BrandPage + markets.json 全部用 `/uae`（缺 `/countries/`） | 应为 `/countries/{slug}` |
| 主站→tools/companies | ✅ 用单数规范域（site.json） | 目标域正确；但子站尚未切单数（见 §2） |
| 子站→主站 | ✅ 全部链接 MAIN_SITE_URL | — |
| 子站→子站（Header eco-nav） | ⚠️ companies/tools 链接用复数域（config.ts）→ 指向无 DNS 域 | 随 §2 修正 |
| data→market | ✅ `/countries/kenya/` 等正确 | — |
| market→data | ⚠️ 「Popular Vehicle Types」链到 `/models/`（列表页，非具体实体）；品牌链到 `/brands/`（列表页） | 未做实体级语义链接（§17 缺口） |
| companies→data/market | ✅ `/brands/{id}/`、`/countries/{id}/` 正确 | — |
| tools→data/market | ✅ `/models/{id}/`、`/countries/{id}/` 正确 | — |

---

## 11. 多语言现状（§21，P2）

- 主站四语（en 默认无前缀 + /ar/ + /ru/ + /es/）：**页面奇偶一致**（en 24 文件含 404；ar/es/ru 各 23，无本地化 404）。hreflang 在 BaseLayout 全量互链。✅
- 词典干净：`grep 待翻译/TODO` 无残留（AGENTS.md 自检项通过）。✅
- 与「四语同步」规则兼容结论：**主站当前遵守**（四语页面 + 词典 + RTL 均就位）；但**四子站为纯英文**（i18n-notes.md 仅有规划文档，未实现 zh）——与 §21「English 为主、按需翻译」兼容，非缺陷。
- 注意：AGENTS.md 要求「新增内容四语同步」，若后续给车辆详情补 generation/trim 展示，需四语同步新 UI 字符串。

---

## 12. KEEP / IMPROVE 判定 + 优先级清单

### P0（6 项）
| # | 问题 | 仓 | 建议 |
|---|---|---|---|
| P0-1 | 子站复数域（tools./companies.）13 行引用 | 四子仓 | 统一单数 tool/company，4 仓同步 config + astro.config + companies i18n-notes |
| P0-2 | demo 车 SEO 层无标记（title/desc/schema/sitemap） | 主站 | 方案 C（title 前缀 + schema 降级 + noindex 详情页） |
| P0-3 | 主站→market 路径错（`/uae` → `/countries/uae`） | 主站 | 修 marketUrl()/HomePage/BrandPage/markets.json |
| P0-4 | 主站→data 模型路径错 + 模型 ID 错位 | 主站 | 修 dataModelUrl()/models.json，统一模型 ID 映射 |
| P0-5 | generation/trim 展示层未接线 | 主站 | 详情页补 generation/trim 显示（数据就位后） |
| P0-6 | 状态枚举三处不一致（§7/AGENTS/实现） | 主站 | 统一枚举 + 回写 AGENTS.md |

### P1（7 项）
| # | 问题 | 仓 | 建议 |
|---|---|---|---|
| P1-1 | 车辆验证术语缺 3 态（Seller Supplied/Source-backed/Not Independently Verified） | 主站 | 扩展 confidence 级别 + 每字段 Source/Last checked |
| P1-2 | 车辆无 Source 展示 | 主站 | 详情页加 Source/Last checked 术语块 |
| P1-3 | market FAQ 硬编码税率双源漂移 | market | 税率统一读 taxrules.json |
| P1-4 | market 唯一硬编码 Country×Model 页 | market | 数据驱动化 or 删除 |
| P1-5 | 四子站 robots.txt 无 Sitemap 指令 | 四子仓 | 补 `Sitemap:` 行 |
| P1-6 | 四子站 BaseLayout 无 noindex 能力 | 四子仓 | 加 noindex prop |
| P1-7 | market→data 语义链接弱（列表页而非实体） | market | 具体模型/品牌直链 |

### P2（3 项）
| # | 问题 | 仓 | 建议 |
|---|---|---|---|
| P2-1 | demo→real 无原地转换路径 | 主站 | update-vehicle.mjs 加「demo 转 real」保留 vehicle_id |
| P2-2 | 子站仓库目录名复数 | 四子仓 | 后续随域名切换改目录名（非代码） |
| P2-3 | 无 @id 图引用 | 五仓 | 低优先，未来实体知识图谱时补 |

### KEEP（判定为保留）
- 主站 site.json 单数域 ✅、四语架构 ✅、数据层/展示层分离 + update-vehicle.mjs 变更门禁 ✅、Sold 保留不 404 ✅、data 站实体链 ✅、market 站 source/confidence 体系 ✅、tools 站无假计算 ✅、companies 站 demo 标注 ✅、共享设计系统 ✅、零虚构数据 ✅。

---

## 13. 附录：域不一致引用按仓统计

| 仓 | 复数域引用文件数 | 引用行数 | 详情 |
|---|---|---|---|
| chinausedautohub.com（主站） | 0 | 0 | ✅ 全单数 |
| data | 1（shared/config） | 2 | COMPANIES/TOOLS 常量复数 |
| market | 1（shared/config） | 2 | 同上 |
| tools | 2（astro.config + shared/config） | 3 | 自身域复数 + config 常量 |
| companies | 3（astro.config + shared/config + i18n-notes） | 6 | 自身域复数 + config 常量 + 3 处 hreflang |
| **合计** | **7 物理文件** | **13 行** | shared/config 为 4 份相同内容 |
