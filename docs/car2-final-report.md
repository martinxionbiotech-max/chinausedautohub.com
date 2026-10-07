# Car2 Phase 7–8 收官批 — 内链复核 + SEO/Schema/索引质量 + 12 项最终交付

日期：2026-10-07
范围：主站 chinausedautohub.com + 四子站 data / market / tools / companies（按总纲 §8/§10/§11/§13 + Final Deliverable）
前置：car2 Phase 1–6 已完成（P1 修复 912 页残留 / P2 data 50 车型做深 / P3 market 七国 18 节 / P4 组合补增量 58 / P5 工具 11 Example+关联 / P6 公司做深）。本批为收官：内链全量验证、SEO/Schema/索引质量抽检、12 项最终交付报告。

---

## Phase 7 — 内链复核结果

### 7.1 跨域链接目标存在性全量验证（本地 dist 产物对照）

从五仓 `dist/` 提取全部跨域 `<a href>`（去重），逐条映射到目标仓 `dist/` 本地文件验存在性：

| 目标域 | 验通 | 总数 | 失败 |
|---|---|---|---|
| data.chinausedautohub.com | 189 | 190 | 1 |
| market.chinausedautohub.com | 1264 | 1265 | 1 |
| tool.chinausedautohub.com | 17 | 18 | 1 |
| company.chinausedautohub.com | 26 | 27 | 1 |
| **合计** | **1496** | **1500** | **4** |

**4 条「失败」均为误报/良性**：各自 404.html 页内的自指 `/404/` canonical 链接（noindex 页、不进 sitemap、非用户可达断链）。**Phase 2–6 新增互链零断链**。

### 7.2 片段锚点验证（304 条）

全部跨站/站内 `#anchor` 链接（304 条）逐条对照目标页 `id`：

- 国家页 9 锚点（`age-rules` / `import-duties` / `vat-taxes` / `ev-rules` / `registration` / `vehicle-compatibility` / `chinese-brands` / `market-risks` / `recommended-vehicles`）全部在场；
- 市场首页 10 个 region 锚点（`middle-east`…`oceania`）全部在场；
- data 站 `powertrains`/`body-types` 类型锚点、主站 `#request-vehicle` 锚点全部在场。

**零断锚。**

### 7.3 实体图六向抽查（Vehicle↔Brand↔Market↔Guide↔Tool↔Company）

| 方向 | 实测样例 | 结果 |
|---|---|---|
| Vehicle→Brand | data `models/byd-song-plus/` → `/brands/byd/` | ✓ |
| Brand→Vehicle | data `brands/byd/` → 12 款车型页 | ✓ |
| Vehicle→Market | data 车型页 → `/countries/kenya|uae|uzbekistan/` | ✓ |
| Market→Vehicle | market `countries/kenya/` → 6+ data 车型页 + 30 组合页 | ✓ |
| Vehicle→Guide | data 车型页 + 主站车辆详情页 → `/guides/…`（7 篇） | ✓ |
| Brand→Guide | 主站品牌页 Related Guides 区块在场 | ✓ |
| Guide→Tool | 主站 `guides/landed-cost/` → tool 3 计算器 | ✓ |
| Tool→Vehicle/Market | tools 11 页 Related vehicles/countries/tools 三区 | ✓ |
| Company→Brand/Market | `company/companies/byd-auto/` → data 4 品牌 + market 多国 | ✓ |

**六向实体图完整，无孤立方向。**

---

## Phase 8 — SEO / Schema / 索引质量抽检结果

### 8.1 做深页 SEO 复核（抽检 44 页）

抽样范围：market 7 重点国 × 4 语（EN 全 7 + es/ru/ar 各抽）+ tools 11 + companies 9 + data 车型 10。

| 面 | 结果 |
|---|---|
| title | 全部规范（market `Import Used Cars to {Country} — Rules, Duties & Routes`；data `{Model} {中文} — Specifications by Generation & Trim`；companies `{Company} — Company Profile`；tools `{Tool} — China Used Car Export`） |
| description | 全部唯一、含信任声明（source/date/jurisdiction/confidence） |
| H1 | 规范（`{国家} {中文名}` / `{车型} {中文名}` / 公司名 / 工具名） |
| H2 结构 | 结构完整（market 27 节 / data 13–16 节 / tools 14–16 节 / companies Company Intelligence 区） |
| canonical | 全部正确（market 含 locale 前缀 `/es|ru|ar/countries/…/`） |
| noindex | 新增页全 `false`（demo 页除外，见 8.4） |

**发现并修复 1 处实体命名缺陷（entity naming）**：6 款车型 `name_zh` 与英文 `name` 重复，导致标题冗余（如 `CS75 Plus CS75 PLUS`、`MG5 MG5`、`MG HS MG HS`）：

| 车型 | name_zh 修复前 → 修复后 |
|---|---|
| changan-cs75-plus | `CS75 PLUS` → `长安CS75 PLUS` |
| changan-cs35-plus | `CS35 PLUS` → `长安CS35 PLUS` |
| changan-cs55-plus | `CS55 PLUS` → `长安CS55 PLUS` |
| mg-4 | `MG4` → `名爵MG4 EV` |
| mg-5 | `MG5` → `名爵MG5` |
| mg-hs | `MG HS` → `名爵MG HS` |

已按四仓同步纪律落到 **data（权威，6 条）/ tools（全量副本，6 条）/ market（curated 子集，4 条）** 三份 `models.json`，重建后标题正确、data QA 门禁 0 error 0 warning。

### 8.2 Schema.org 复核（零虚构字段）

| 站点 | 使用的 @type | 虚构字段检查 |
|---|---|---|
| 主站首页 | Organization + WebSite + ItemList + ContactPoint | ✓ 无 |
| 主站车辆详情（demo） | Product + Offer + Vehicle + Brand + BreadcrumbList | ✓ `availability` 0 处（demo 不标 InStock） |
| data 首页 | Organization + WebSite + Dataset | ✓ 无 |
| data 模型页 | Vehicle + Brand + BreadcrumbList | ✓ 无 price/offer/review/aggregateRating |
| market 国家页 | Article + BreadcrumbList + dateModified | ✓ 无 author 虚构 |
| tools 计算器 | WebApplication + BreadcrumbList（ev-import/shipping/fob 加 FAQPage） | ✓ FAQ 仅真实问答（ev-import 2 条） |
| companies 公司页 | Organization + BreadcrumbList | ✓ 无 founder/employee/telephone/review 虚构 |

**FAQPage 仅真实问答，无 FAQ farm。零虚构字段。**

### 8.3 sitemap 覆盖验证

| 站点 | sitemap URL 数 | 关键覆盖 |
|---|---|---|
| 主站 | 260 | 4 语全页；demo 车辆详情 0 泄漏 |
| data | 188 | 120 车型 + 53 品牌 + 聚合页全量 |
| market | 1263 | 82 国 × 4 语 = 328 + 组合 228 × 4 语 = 912 + 静态页 |
| tools | 16 | 11 工具 + 法律页 |
| companies | 22 | 9 整车厂 + 类别页 + 法律页（3 demo 公司排除） |

`robots.txt` 五仓全部带 `Sitemap: https://<单数域>/sitemap-index.xml`（data/market/tool/company 单数域正确）。

### 8.4 §11 索引质量七检查（新增页抽检）

| 检查 | 结果 |
|---|---|
| Content Value | ✓ 组合页经增量门禁（228 关系 = 独立增量，182 skipped 不建页） |
| Duplicate | ✓ 无重复 description/标题（data QA dupTitle=0） |
| Template Similarity | ✓ 组合页签名唯一；`[object Object]` 残留 = 0 |
| Entity Completeness | ✓ 无据字段 `Not available`/null 不猜（26 字段矩阵见 §④） |
| Source | ✓ 每声明带 source + confidence + checked_date |
| Internal Link | ✓ 跨域 1496/1500 + 锚点 304/304 |
| Indexability | ✓ demo 车/公司 noindex + sitemap 排除；404 noindex |

---

## 12 项最终交付

### ① 已修改页面列表（Phase 1–6 汇总按仓）

| 仓 | 改动 | 影响页 |
|---|---|---|
| **market**（P1） | `VehicleMarketPage.astro` 修 `vehicle.misc.inCountry` 字面量残留 + 空 Known limitations `<ul>` | 912 + 23 |
| **data**（P2） | 50 款高价值车型做深：analysis 字段 + generation platform + 26 字段审计 + related-markets 回退；`models.json` + `model-links.ts` + `vehicle-overview.ts` + `models/[model].astro` | 50 车型页 |
| **market**（P3） | 7 重点国做深 18 节：`importrules.json` 补 registration 规则 + `content.ts` 补 commonBrands/recommend/risks + `CountryPage.astro` 加 Quick Facts/Registration/Recommended/Risks 区块 + 节锚点 + i18n 四语 | 7 国 × 4 语 |
| **market**（P4） | 58 条弱 Vehicle×Market 关系补 `age_rule_fit` delta（`vehicle-market.json`） | 58 组合页 |
| **tools**（P5） | 11 工具加 Example + Related 三区（vehicle/market/tools）+ flow position（Step n/8）+ prev/next 链；新增 `ToolFlowNav.astro` | 11 工具页 |
| **companies**（P6） | 6 家重点整车厂做深 + 新增 SAIC Motor + Chery 升 publicly_listed + export_presence/confidence 字段；`companies.json` + `[company].astro` + 全量 shared 同步 | 9 公司页 |

### ② 新增页面列表

| 页面 | 仓 | 说明 |
|---|---|---|
| `/companies/saic-motor/` | companies | SAIC Motor 整车厂实体（13 字段 source-backed，P6 新增） |

> 注：car2 P1–P6 为「做深」批，以深化既有实体为主，新增页面仅 SAIC 1 个。组合页 228、国家页 82、车型页 120、工具 11 均为此前批次（P3.x / prelaunch / market-countries 1–13）产出，本批不重复计为新增。

### ③ 删除 / noindex 列表

本批**零删除、零新增 noindex**。既有 noindex 均为有意保留：

- 主站 12 台 demo 车详情页（`noindex,follow`，mark-real 自动去除）
- companies 3 家 demo 公司详情页（`noindex`，类别页 `isDemo()` 过滤）
- 各站 404 页（noindex）

### ④ Data 实体完成情况（26 字段矩阵摘要）

120 车型 + 53 品牌。核心字段完成率（`models.json` 非 null 计数 / 120）：

| 字段组 | 完成 | 字段组 | 完成 |
|---|---|---|---|
| 标识（model_id/brand_id/name/name_zh） | 120/120 | 溯源五元（source_name/url/type/checked_date/confidence） | 120/120 |
| 基础（vehicle_type/body_type/powertrain_types/production_status/generations） | 120/120 | china_market_status | 120/120 |
| 出口情报 export_relevance | 111/120 | common_export_regions | 101/120 |
| RHD/LHD relevance | 120/120 | market_considerations | 86/120 |
| charging_standard_notes | 65/120 | parts_availability_notes | 19/120 |
| homologation_notes | 15/120 | known_limitations | 37/120 |
| 做深四节（used/destination/parts_service） | 50/120 | | |

剩余 9 款 `export_relevance` null 为「无据不填」清单（合资中国造国内特供等），非缺陷。

### ⑤ Market 实体（7 国 18 节 + 82 国）

- **82 国**全量国家页（4 语），含 importrules/taxrules/ports/routes 数据层；
- **7 重点国做深**（Kenya / UAE / Saudi Arabia / Tanzania / Nigeria / Kazakhstan / Uzbekistan）达 18 节完整 import decision profile：Quick Facts + Market Overview + Import Eligibility + Vehicle Age Rules + Drive Side + Import Duties + VAT & Taxes + EV Rules + Registration + Vehicle Compatibility + Chinese Brands + Market Risks + Recommended Vehicles + Related Guides + Verification Date & Evidence Status + 三处 not legal advice 免责；
- 法规/税率每条带 source + date checked + jurisdiction + applicability + confidence 五元。

### ⑥ Vehicle×Country 新增关系

累计 **228 条 relation + 182 skipped**（`meta.batch = batch 24 — market-countries13`）。car2 P4 本批补 **58 条弱关系的 `age_rule_fit` delta**（drive-side mismatch / needs_conversion / EV duty relief / powertrain classification 五类增量）。`skipped ∩ relations = 0`（无自相矛盾）。每条挂 source + confidence + checked_date，无据字段 null → 页面渲染 Not available。

### ⑦ Tool 优化

11 计算器全部补齐三件事：① 六要素声明（Inputs / Formula / Assumptions / Data source / Last updated / Limitations）；② 三分法区块「Estimate vs official quote vs customs assessment」；③ Related 三区（vehicle→data `/models/`、country→market `/countries/`、tools 互链）+ Next steps 四链（Vehicle Data / Market Data / Inventory / Request Quote）。car2 P5 再加：每工具 Example 实例 + flow position（Step n/8）+ prev/next 工具链（`ToolFlowNav.astro`）。

### ⑧ Company 优化

9 家整车厂（8 既有 + SAIC 新增）：6 家重点做深（BYD/Geely/Chery/Changan/GWM/SAIC）至 13 字段（official name / HQ / founded / scope / categories / major brands / export presence / relevant markets / official website / verification status / sources / last checked / confidence）；Chery 升 `publicly_listed`（SEHK 9973，2025 IPO）；新增 `export_presence` + `confidence` 字段（schema + render + SCHEMA.md 三处）；`main_brands`→data `/brands/`、`export_markets`→market `/countries/` 交叉链接展开子品牌。3 家 demo 公司保持 noindex 隔离。

### ⑨ 内链改进

- 全量跨域链接验证 1496/1500（4 条为 404 自指，良性）；
- 片段锚点 304/304 全通；
- 实体图六向（Vehicle↔Brand↔Market↔Guide↔Tool↔Company）完整；
- 交叉链接 URL 约定（子站尾斜杠 / data 单段 / market `/countries/` / 单数域）核对无误；
- 工具 Related 三区、公司品牌/市场链、国家页节锚点→组合页全部目标存在。

### ⑩ SEO / Schema 改进

- 修复 6 款车型 `name_zh` 实体命名重复（标题冗余）；
- Schema 全生态零虚构字段（demo 无 InStock、data 无 price/offer/review、company 无 founder/employee、FAQ 仅真实问答）；
- sitemap 覆盖 82 国×4 语 + 228 组合×4 语全量；robots 五仓 Sitemap 声明齐备；
- data QA 门禁 0 error 0 warning（dupTitle=0 / noDesc=0 / noCanon=0 / brokenLinks=0 / orphan=0）。

### ⑪ 索引质量风险

| 风险 | 级别 | 处置 |
|---|---|---|
| 4 条 404.html 自指 `/404/` canonical | 低 | noindex 页，不影响索引；可后续统一去 canonical 自指（非本批） |
| companies NIO/Li Auto/XPeng meta description「Export markets: n/a」 | 低 | 如实无据，非虚构；未来有据再填 export_markets |
| 9 款车型 `export_relevance` null | 信息性 | 无据不填，列入报告；发现可靠证据再回填 |
| 汇率仅 7 币（fx.json） | 低 | 货币换算器只列 7 币，不编造 70 币汇率（有意约束） |
| tools/market/data 三子站纯英文（market 已三语） | 中 | data/tools/companies 未来可加 es/ru/ar（规划中，非本批） |

无高优先级索引污染风险。demo 三层标记 + 组合页增量门禁 + 数据溯源体系均在位。

### ⑫ 下一阶段最值得建设的 20 个内容实体

按「出口价值 + 数据可得性 + 流量潜力」排序（从 120 车型 / 82 国 / 11 工具 / 9 公司中选）：

1. **南非（国家做深）** — RHD 大国，中国二手车核心出口地，数据可得性高
2. **印度尼西亚（国家做深）** — RHD + 2.7 亿人口，2024 车龄规则放宽
3. **泰国（国家做深）** — RHD + 中国 EV 制造枢纽，需求强
4. **马来西亚（国家做深）** — RHD，BYD/GWM/Zeekr 活跃
5. **墨西哥（国家做深）** — LHD 大市场，中国品牌加速进入
6. **智利（国家做深）** — LHD，拉美中国 EV 领头
7. **俄罗斯（国家做深）** — 大市场，中国品牌主导
8. **澳大利亚（国家做深）** — RHD，中国 EV（BYD/SAIC/Tesla 上海）强势
9. **埃及（国家做深）** — 大市场，进口政策窗口
10. **菲律宾（国家做深）** — RHD，车龄规则明确
11. **byd-seagull（车型做深）** — 高量出口 EV，RHD 市场潜力
12. **xiaomi-su7（车型做深）** — 高关注度，出口待释放
13. **tesla-model-y（车型做深）** — Giga Shanghai 出口 RHD
14. **zeekr-007（车型做深）** — 出口高速增长
15. **li-auto-l9（车型做深）** — 官方 GCC/KZ 进入先例
16. **组合：byd-seagull × 肯尼亚/印尼（RHD EV 新对）** — 独立增量
17. **组合：byd-dolphin × 南非（RHD EV）** — 南非做深后的自然延伸
18. **Zeekr（新公司实体）** — 出口增速最快的中国高端 EV 品牌
19. **工具三语本地化（es/ru/ar）** — tools 站仍英文，接 market 三语
20. **Denza/Fangchengbao/Yangwang 子品牌做深** — BYD 高端矩阵出口情报

> 排序原则：前 10 为「国家做深」——已有 82 国数据层 + 7 国做深范式，边际成本最低、流量与出口价值最高；中 5 为「车型做深」——已有 120 车型 + 50 做深，优先高出口量/高关注 EV；后 5 为组合/新公司/工具三语/子品牌，差异化增量。

---

## 收尾：本批实际改动（commit 范围）

| 仓 | 文件 | 改动 |
|---|---|---|
| data | `shared/data/models.json` | 6 款车型 name_zh 去冗余 |
| tools | `shared/data/models.json` | 同步 6 条 name_zh |
| market | `shared/data/models.json` | 同步 4 条 name_zh（curated 子集） |
| chinausedautohub.com | `docs/car2-final-report.md` | 本报告 |

重建验证：data 189 页 / tools 17 页 / market 1264 页全部通过；data QA 0 error 0 warning。
