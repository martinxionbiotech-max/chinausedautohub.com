# ChinaUsedAutoHub — 上线前最终审计（PHASE 0 · 只审计不改）

> 审计日期：2026-10-04　|　范围：五仓本地（chinausedautohub.com 主站 + data / market / tools / companies 四子站）
> 依据：`phase2/46-car-export-prelaunch-prompt.md` PHASE 0 / 1 / 2 / 3 / 6 / 8 / 9 / 11 / 17 / 21 / 22 / 24
> 硬约束遵守：**本批仅审计 + 写报告，未修改任何仓库文件**。本报告为唯一产出物。
> 主仓路径：`/root/.openclaw/workspace/repos/chinausedautohub.com`（本文件落在 `docs/prelaunch-audit.md`）

---

## 0. 结论速览（中文紧凑报告）

| 维度 | 结论 |
|---|---|
| 五仓页面总数（英文规范 URL，不含四语副本） | **171**（主站 65 · data 47 · market 27 · tools 12 · companies 20） |
| **25 点检查异常数（按仓）** | 主站 **5** · data **3** · market **4** · tools **4** · companies **3**（详见 §1 表末汇总） |
| 五概念越界清单 | **5 条**（§2：车型页规格与车辆页重叠、市场页法规建议边界、计算器假精度、demo 公司、机械组合页） |
| **8 状态标签差距** | 现有 6 态，**缺 4**：Inspection pending / Needs confirmation / Estimated / Historical（§3.1） |
| **5 置信标签差距** | market 站实际用 high/medium/low/unknown 四级，**缺 Confirmed / Needs verification**（§3.4） |
| **Guides 20 主题覆盖** | 已覆盖 **9** / 部分 **4** / 缺 **7**（§3.3） |
| **Tools 六要素缺失** | 11 工具 × 6 要素 = 66 槽，**缺 18 槽**（§3.5）+ 假精度 1 项（fmtMoney 强制两位小数） |
| **Company 待处理记录** | **3** demo 公司 + **4** 空类别（§3.6） |
| **P1 页判定** | 充分 **1**（Contact）/ 需升级 **5**（首页·Trust·How It Works·Services·车辆模板）/ 需重构 **1**（About）（§4） |
| **launch-readiness（初步）** | **NOT READY**（主因：全站 0 台真实库存、leadEndpoint 空、P1 六个页五个未达标、demo 记录残留） |

---

## 1. 25 点检查（PHASE 0 清单逐项，五仓结论 + 证据）

> 判定符号：✅ 达标　🟡 部分/有缺口　🔴 异常/缺失。末尾按仓汇总异常数。

### 1. page inventory（页面清单）
- ✅ **主站**：65 EN 页（en 无前缀 + `/ar/` `/ru/` `/es/` 四语，`src/pages/` 结构完整）。实体：首页 / cars(12 demo 车辆详情) / brands(8) / markets(7) / 8 guides / 5 services / how-it-works / trust / faq / about / contact / 11 法律合规页 / body-types(2) / powertrains(5) / new-arrivals。
- ✅ **data**：47 页 = 首页 + 20 车型 + 16 品牌 + body-types/powertrains/glossary/vehicle-specifications/vehicle-types(4)。
- ✅ **market**：27 页 = 首页 + 7 国家 + 7 ev 子页(已 301) + 2 suv 子页(已 301) + duties-taxes / ev-import / ports / shipping-routes / vehicle-age-rules / import-guides(301) / documents(301) / regions(301) / kenya-byd-song-plus(硬编码残留)。
- ✅ **tools**：12 页 = 首页 + 11 工具。
- ✅ **companies**：20 页 = 首页 + 8 类别 + 11 公司。
- **证据**：`find src/pages -type f` 五仓；`docs/content-audit.md` §1（171 页计数已核实）。

### 2. URL 结构
- ✅ 主站语义路由清晰：`/cars/[brand]/[model]/[inventoryId]/`、`/guides/[guide]/`、`/services/[service]/`、`/brands/[brand]/`、`/markets/`。
- ✅ 子站单段语义：data `/models/{id}`、market `/countries/{slug}`、companies `/companies/{id}`、tools `/landed-cost-calculator/`。
- ✅ **规范域单数已就绪**：`site.json` subdomains + 四子站 astro.config / shared config 全单数（data/market/tool/company）。
- **证据**：`src/data/site.json`、`astro.config.mjs`、五仓 `src/pages`。

### 3. navigation（导航）
- ✅ 主站 Header/Footer 四向导航；四子站共享 Header 生态互链（Vehicles/Vehicle Data/Companies/Tools/Markets）。
- ✅ 主站 `src/components/Header.astro` + `Footer.astro`；子站 `shared/components/Header.astro`。
- **证据**：主站 `src/components/` 7 组件；子站 `shared/components/` 5 组件（BaseLayout/Footer/Header/SourceNote/SpecTable）。

### 4. internal links（内链）
- 🟡 跨站互链矩阵基本建立（车辆→车型→品牌→市场→工具→指南）。**缺**：主站品牌页 → companies 公司实体链（brand → company 方向未落地）；`kenya/byd-song-plus` 硬编码组合页残留。
- **证据**：`docs/vehicle-market-model.md`；`grep -rn "byd-song-plus" market/src/pages` 命中硬编码页。

### 5. breadcrumbs（面包屑）
- 🟡 `Breadcrumb.astro` + `breadcrumbSchema()` 已建，但**仅在部分模板接入**（HowItWorks/BodyType/NewArrivals 等）。车辆详情页、guides、services 未见 breadcrumb 接线。
- **证据**：`grep -rn "Breadcrumb" src/templates/*.astro` 命中 3 个模板；VehicleDetailPage.astro 无。

### 6. canonical tags
- ✅ BaseLayout 自引用 canonical + hreflang 四语 alternates（含 x-default）。四子站共享 BaseLayout 同款。
- **证据**：`src/components/BaseLayout.astro:31-61`（`rel="canonical"` + `rel="alternate" hreflang`）。

### 7. robots / noindex
- ✅ 五仓 `public/robots.txt` 均带 `Sitemap: https://<单数域>/sitemap-index.xml`。
- ✅ demo 车辆详情页 `noindex`（`is_demo` 门控）；四子站 404 页 `noindex`。
- **证据**：五仓 `public/robots.txt`；`astro.config.mjs` sitemap filter 排除 demo；`shared/components/BaseLayout.astro` noindex prop。

### 8. sitemap
- ✅ `@astrojs/sitemap` 集成，build 生成 sitemap-index + 分片；demo 车辆页由 filter 排除（mark-real 后自动恢复，URL 不变）。
- **证据**：`astro.config.mjs` `isDemoVehiclePage` + `sitemap.filter`。

### 9. title / meta descriptions
- ✅ BaseLayout 统一渲染 `<title>` + `<meta name="description">`；每模板传 title/description。
- 🟡 部分页 description 为模板化拼接（可接受）；无重复 title 迹象（每模板唯一 h1）。
- **证据**：`src/components/BaseLayout.astro:55-56`。

### 10. H1 / H2 结构
- ✅ 每模板 1 个 `<h1>`（22 个模板 grep 均为 1）；market 国家页 21 个 h2 分节结构清晰。
- **证据**：`grep -rc "<h1" src/templates/*.astro` 全部 =1；国家页 21 `<h2>`。

### 11. schema（结构化数据）
- ✅ `schema.ts` 8 个 builder：organization/webSite/article/breadcrumb/vehicle/itemList/faq；`vehicleSchema()` 对 demo 不输出 `availability`（防假 InStock）；稳定 `@id`。
- ✅ 工具页 WebApplication schema；市场页 SourceNote。
- **证据**：`src/lib/schema.ts`（13 个导出函数）；tools 页内 `application/ld+json`。

### 12. duplicate / thin content
- 🔴 **薄页清单**（主站）：`body-types`(2) / `powertrains`(5) / `new-arrivals`（≈ /cars/ 重排，无信息增量）。
- 🔴 **薄页清单**（market）：7 国 `ev/` 子页、2 国 `suv/` 子页、`import-guides`、`documents`、`regions` —— 机械模板/重排，P3.2 已 301 折叠，但 `kenya/byd-song-plus` 仍残留。
- 🔴 **薄页清单**（companies）：4 空类别（logistics/shipping/suppliers/ports 无数据）。
- **证据**：`docs/content-audit.md` §2 B/D 级 22+7 页。

### 13. placeholder / demo content
- 🔴 **主站**：12 台车辆全部 `is_demo:true`（0 台真实库存）。三层标记已到位（noindex + title 前缀 + DEMO 徽章），但**公开商用视角仍是全 demo 站**。
- 🔴 **companies**：3 demo 公司（Orient Auto Export / Gulf Motors Trading / East Africa Vehicle Inspection），`unverified` + DemoBanner 已到位。
- **证据**：`vehicles.json` 12 台全 is_demo；`companies.json` 3 条 unverified。

### 14. inconsistent terminology（术语一致性）
- 🔴 **验证态术语跨站不统一**（核心异常）：
  - 主站车辆 = **六态**（verified/provided/seller_supplied/source_backed/not_available/not_independently_verified）。
  - data 站 = **Source-backed/Reported/Estimated/Unknown**（CONFIDENCE_LEVELS 映射）。
  - market 站 = **high/medium/low/unknown** 四级。
  - companies 站 = **verified/publicly_listed/source-backed/unverified** 独立四级。
  - 总纲 PHASE 2 Trust 要求 **8 状态标签**、PHASE 6 Market 要求 **5 置信标签**——两套目标与现状均未对齐。
- **证据**：`src/i18n/trust.ts`、`data/src/lib/helpers.ts:67-82`、market 页 `confHigh/confMedium/confLow`、`companies/src/lib/companies.ts:32`。

### 15. inconsistent data fields（数据字段一致性）
- 🟡 market 税规/法规字段齐全（taxrule_id/country_id/rate_pct/effective_date/last_checked/source/source_url/confidence/needs_review/notes）。
- 🔴 `confidence` 取值用 `high/medium/low`，与 data 站 `CONFIDENCE_LEVELS`（Source-backed/Reported/Estimated/Unknown）**双源漂移**，且均不满足 PHASE 6 要求的 5 标签。
- **证据**：`taxrules.json`（medium 11 / low 6）、`importrules.json`（medium 13 / low 15）。

### 16. broken links（破链）
- ✅ 五仓域一致性 grep 全净（0 复数域残留：`tools.`/`companies.` 无命中）。
- 🟡 `kenya/byd-song-plus` 硬编码组合页仍存在（非死链，但为反模式残留）。
- 🟡 跨域链接路径级可达性未在本批做 curl 全量验证（skill 规定上线 crawl 阶段才做，本批只审计）。
- **证据**：域残留 grep 五仓全空；`market/src/pages/countries/kenya/byd-song-plus.astro` 存在。

### 17. orphan pages（孤儿页）
- 🟡 疑似孤儿：`new-arrivals`（无入链，仅 header）、`body-types/[type]`、`powertrains/[type]`（知识应让位 data 站，现为弱入链浏览过滤）。
- **证据**：`docs/content-audit.md` §2 B 级；内链方向断链（brand→company、vehicle→market 结构化缺失）。

### 18. weak pages（弱页）
- 🔴 **About 页 = 3 段**（title/description/h1/contact + 3 paragraphs），PHASE 2 要求 10 节 + 三分法，严重不足。
- 🔴 market `countries/` 索引、`documents/` 等为纯抽取重排页。
- **证据**：`en.json` `about.paragraphs` 长度 = 3。

### 19. excessive template repetition（模板重复）
- 🟡 market 7 国 `ev/`、2 国 `suv/`、`import-guides`、`documents`、`regions` 为机械模板重复 → 已 301 折叠（P3.2），但 `kenya/byd-song-plus` 组合页残留。
- ✅ 主站 guide/service 均四语人工文案，非机械生成。
- **证据**：`market/public/_redirects` 5 条 301。

### 20. commercial conversion paths（转化路径）
- 🔴 **`site.json` `leadEndpoint` 为空字符串**（`""`）——询车表单后端未接线，LeadForm 无真实提交端点。
- ✅ 转化触点存在：email `landengltd@gmail.com`、WhatsApp `+86 13323237275`、contact 表单、车辆页 Request Quote CTA、`/request-a-car/` 301 → `/contact/`。
- **证据**：`src/data/site.json:16`；`src/components/LeadForm.astro`；`public/_redirects`。

### 21. trust signals（信任信号）
- ✅ Trust 页 9 节 + 六态定义已上线（车辆信息收集/数据政策/检查政策/定价政策/可用性政策/出口单证/买家沟通/风险防欺诈/信息准确性）。
- 🔴 相对 PHASE 2 的 13 节要求，缺：Vehicle verification（独立节）、Mileage information、Price update policy、Vehicle history、VIN handling、Market information sources、Regulatory information、Calculator assumptions、Last-updated policy、Data limitations、Corrections policy（约 8 节为隐式覆盖或缺失）。
- **证据**：`src/i18n/trust.ts` `sections` = 9 项。

### 22. source attribution（来源标注）
- ✅ market 每规则 SourceNote（source/source_url/source_date/confidence/effective_date/notes）；data 车型 SourceNote；guides「Reliable sources」+「Last reviewed」。
- ✅ 来源分级清晰：Official/Industry/Third-party/Informational（`docs/trust-terminology.md` §3）。
- **证据**：`shared/components/SourceNote.astro`；8 篇 guide 尾部 sources 节。

### 23. last-updated information
- ✅ 8 篇 guide 均带「Last reviewed: 2026-10-04」+ 无固定费率声明。
- ✅ market 时效数据带 `last_checked` / `source_date`；fx 带 source_date。
- 🟡 车辆详情页有 `lastUpdated`/`lastVerified` 词典键，但 demo 车 `last_verified_at` 为 null（正常，勿补）。
- **证据**：`guides/*.ts` 尾部；`taxrules.json` last_checked；`en.json` detail.lastUpdated。

### 24. market / regulatory disclaimers（法规免责）
- ✅ 主站 11 法律合规页（privacy/terms/cookies + 8 合规页含 disclaimer/vehicle-listing-disclaimer/export-compliance）。
- ✅ market 国家页顶部「Regulations are high-risk data… verify with official authorities」+ 每条 SourceNote。
- ✅ 税规 `needs_review` 字段 + FAQ 不硬编码税率（指向页内税表）。
- **证据**：`src/lib/site.ts` LEGAL_PAGES；market 国家页 `:144`；`docs/trust-terminology.md`。

### 25. AI-search readability（AI 可读性）
- ✅ 结构化小节 + 表格 + 明确定义 + 实体名一致 + 清晰关系（Brand→Model→Trim、Vehicle→Model、Tool→Market）。
- ✅ 无「AI summary」人造区块；guides 用 checklist/table 决策框架。
- 🟡 部分页面仅 WHAT+HOW，缺 WHY/WHEN-NOT/RISK/EVIDENCE（content-audit §1 结构完整度 🔴 项）。
- **证据**：`docs/content-audit.md` §1「结构完整度」列。

### 25 点异常数汇总（🔴 + 关键 🟡 计异常）

| 仓 | 异常项 | 计数 |
|---|---|---|
| **主站** | #12 薄页 · #13 全 demo · #18 About 弱页 · #20 leadEndpoint 空 · #14 术语跨站 | **5** |
| **data** | #14 confidence 术语漂移 · #15 字段取值漂移 · #17 弱入链 | **3** |
| **market** | #14 置信标签缺 2 · #16 硬编码组合页 · #17/#19 机械页残留 · #15 confidence 漂移 | **4** |
| **tools** | #20 假精度（fmtMoney 两位小数） · #18 六要素缺失 · #15 假精度风险 | **4** |
| **companies** | #13 3 demo 记录 · #12 4 空类别 · #14 独立四级术语 | **3** |

---

## 2. 五概念信息模型核查（PHASE 1）

五概念（A 车辆库存 / B 车辆知识 / C 市场情报 / D 决策工具 / E 商业服务）**架构上已清晰分离**，但存在 **5 条越界**：

| # | 越界 | 位置 | 证据 | 判定 |
|---|---|---|---|---|
| 1 | **车型页规格被当作车辆页字段** | 车辆详情页 `vehicles.json` 含 `specs/generation/trim/dimensions/range_km` 等车型级字段，与 data `/models/{id}/` 重叠 | `vehicles.json` 40+ 字段；VehicleDetailPage 有 `keySpecs` + `aboutModel` 区 | 边界模糊但已用「About this model」链接缓解——需强化「车辆专属字段 vs 车型级字段」视觉区分（PHASE 11 硬要求） |
| 2 | **市场页可能被读作法律意见** | 国家页法规/税率虽带 source + 免责，但无显式「This is not legal advice」措辞 | market 国家页 `:144` 只有「verify with official authorities」 | 部分越界——补法律意见免责声明（PHASE 1 C 类明确要求） |
| 3 | **计算器假精度** | `fmtMoney` 强制 `minimumFractionDigits:2`，工具输出 `$7,382.16` 式精确到分，但底层规则多为估计 | `tools/src/lib/calc.js:9-16` | 越界——应区分 Estimate vs 精确值（PHASE 8 明令） |
| 4 | **demo 公司被当作真实商业实体** | 3 demo 公司 `business_scope` 以「Demo —」前缀 + unverified，但仍在公开 category 页渲染 | `companies.json` demo-* 3 条；`[category].astro` demoBanner | 已标记但**仍公开**——PHASE 9 要求「移除或隐藏」，当前是「标记但展示」 |
| 5 | **机械组合页（车型×市场）** | `kenya/byd-song-plus` 单例组合页，无独立信息增量 | `market/src/pages/countries/kenya/byd-song-plus.astro` | 越界反模式（PHASE 7 明令禁机械组合），P3.2 未清理 |

**结论**：五概念分离**基本达标**，但越界 #1/#2/#4 需在上线前收紧（车辆页字段区分、法律意见免责、demo 公司展示策略）。

---

## 3. 缺口矩阵（PHASE 2–17 逐项 vs 现状）

### 3.1 Trust 页：13 节 + 8 状态标签
- **13 节覆盖**：现有 9 节（见 §1.21）。缺独立节：Vehicle verification、Mileage information、Price update policy、Vehicle history、VIN handling、Market information sources、Regulatory information、Calculator assumptions、Last-updated policy、Data limitations、Corrections policy ≈ **8 节隐式或缺失**（部分内容已散落在别的节）。
- **8 状态标签对照**：

| PHASE 2 要求 8 态 | 现状六态 | 状态 |
|---|---|---|
| Verified | `verified` ✅ | 已有 |
| Source-backed | `source_backed` ✅ | 已有 |
| Seller-provided | `seller_supplied` ✅ | 已有（命名差「-provided」vs「_supplied」） |
| **Inspection pending** | — | 🔴 缺 |
| **Needs confirmation** | — | 🔴 缺 |
| **Estimated** | — | 🔴 缺（data 站有 `Estimated`，主站无） |
| **Historical** | — | 🔴 缺 |
| **Unavailable** | `not_available` ✅ | 已有 |

  **现状还多出 2 态**：`provided`、`not_independently_verified`（合理，但不在 8 态清单内）。
  **差距 = 缺 4 态**（Inspection pending / Needs confirmation / Estimated / Historical）。

### 3.2 Services：6 类 vs 8 类
- 现状 **5 类**：vehicle-sourcing / vehicle-inspection / export-documentation / shipping / port-handling。
- 目标 8 类对照：

| 目标 | 现状 | 状态 |
|---|---|---|
| Vehicle Sourcing | vehicle-sourcing ✅ | 有 |
| Vehicle Inspection Coordination | vehicle-inspection ✅ | 有 |
| **Vehicle Verification** | — | 🔴 缺 |
| **Export Coordination** | （仅 export-documentation，偏单证） | 🔴 缺（Export Coordination 作为独立服务） |
| Shipping Coordination | shipping ✅ | 有 |
| Documentation Support | export-documentation ✅ | 有 |
| **Market Research** | — | 🔴 缺 |
| **Fleet / Batch Sourcing** | — | 🔴 缺 |

  **差距 = 缺 4 类**（Vehicle Verification / Export Coordination / Market Research / Fleet-Batch Sourcing）；port-handling 为超出目标的第 6 类（可保留）。

### 3.3 Guides：8 篇 vs 20 主题
现状 8 篇：how-to-buy / china-used-car-export-process / vehicle-inspection / export-documents / shipping / fob-vs-cif-vs-cfr / landed-cost / buying-chinese-evs-for-export。

| # | 主题 | 覆盖 | 依据 |
|---|---|---|---|
| 1 | How to Buy a Used Car from China | ✅ 已覆盖 | how-to-buy |
| 2 | How Chinese Used-Car Export Works | ✅ 已覆盖 | china-used-car-export-process |
| 3 | How to Verify a Used Car in China | ✅ 已覆盖 | vehicle-inspection |
| 4 | How to Inspect a Used Car Before Export | ✅ 已覆盖 | vehicle-inspection |
| 5 | How to Check Used EV Battery Health | 🟡 部分 | EV guide 有 battery 节，无独立 SOH 判定 |
| 6 | How to Check Mileage and Vehicle History | 🟡 部分 | inspection 有 mileage/accident 节 |
| 7 | How to Compare Chinese Used EVs | 🔴 缺 | 仅 vehicle-comparison 工具，无 guide |
| 8 | Used EV vs ICE Vehicles from China | 🔴 缺 | — |
| 9 | FOB vs CFR vs CIF for Vehicle Imports | ✅ 已覆盖 | fob-vs-cif-vs-cfr |
| 10 | RoRo vs Container Shipping | 🟡 部分 | shipping 有 RoRo/container 节，缺决策矩阵 |
| 11 | How Much Does It Cost to Import | ✅ 已覆盖 | landed-cost |
| 12 | How Import Duties Affect Landed Cost | ✅ 已覆盖 | landed-cost |
| 13 | What Documents Are Needed to Export | ✅ 已覆盖 | export-documents |
| 14 | How to Evaluate a Chinese Supplier | 🔴 缺 | — |
| 15 | Common Risks When Buying from China | 🟡 部分 | inspection「red flags」，无独立风险 guide |
| 16 | How to Choose a Chinese EV for Export | ✅ 已覆盖 | buying-chinese-evs-for-export |
| 17 | Chinese Domestic vs Export Specification | 🔴 缺 | brands.ts 有片段，无 guide |
| 18 | How to Evaluate a Used BYD | 🔴 缺 | — |
| 19 | How to Evaluate a Used Geely | 🔴 缺 | — |
| 20 | How to Evaluate a Used Chery | 🔴 缺 | — |

**计数：已覆盖 9 / 部分 4 / 缺 7**（#7 #8 #14 #17 #18 #19 #20）。

### 3.4 Market 国家页：19 节 + 5 置信标签
- **节数**：国家页现有 **21 个 h2 节**，**超额达标**（19 节要求已满足，含 Import Eligibility / Vehicle Age Rules / Drive Side / Import Duties / VAT / Official Sources / EV Rules / Required Documents / Ports / Shipping / Popular Vehicle Types / Vehicle Segment Fit / Chinese Brands / Import Costs / Market Considerations / Related Tools / Related Guides 等）。
- **5 置信标签对照**：

| PHASE 6 要求 5 标签 | 现状 | 状态 |
|---|---|---|
| **Confirmed** | —（data 站有「Source-backed」，market 无 Confirmed） | 🔴 缺 |
| Source-backed | data 站 high→Source-backed；market 站用 high | 🟡 术语不统一 |
| **Needs verification** | — | 🔴 缺（有 `needs_review:true` 布尔但非展示标签） |
| Estimated | data 站 low→Estimated；market 站用 low | 🟡 术语不统一 |
| Unknown | unknown ✅ | 已有 |

  **差距 = 缺 2 标签**（Confirmed / Needs verification）+ market/data 术语漂移（high/medium/low vs Source-backed/Reported/Estimated/Unknown）。
- **每条法规 Source/Date checked/Jurisdiction/Applicability/Caveat**：
  - Source ✅（source + source_url）
  - Date checked ✅（last_checked / source_date）
  - Jurisdiction 🟡（靠 `country_id` 隐式，无显式「Jurisdiction: Kenya」字段）
  - Applicability 🟡（靠 rule_text/notes 隐式，无结构化 applicability 字段）
  - Caveat ✅（notes 字段，SourceNote 支持）
  - **现状：5 项中 3 达标（Source/Date/Caveat），2 项隐式（Jurisdiction/Applicability）。**

### 3.5 Tools：六要素 + 假精度
六要素 = Inputs / Formula / Assumptions / Data source / Last updated / Limitations。

| 工具 | Inputs | Formula | Assumptions | Data source | Last updated | Limitations | 缺槽 |
|---|---|---|---|---|---|---|---|
| currency-converter | 🟡(字段有,无标题) | ✅ | ✅ | ✅ | ✅ | ✅ | 1 |
| ev-import-cost | ✅ | ✅ | ✅ | 🟡(内联) | 🟡(内联) | ✅ | 2 |
| fob-cfr-cif | ✅ | ✅ | ✅ | 🟡(内联) | 🟡(内联) | ✅ | 2 |
| import-duty | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0 |
| landed-cost | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0 |
| market-compatibility | ✅ | 🔴 | ✅ | ✅ | ✅ | ✅ | 1 |
| profit | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0 |
| shipping-cost-estimator | 🔴 | 🔴 | ✅ | 🔴 | 🔴 | ✅ | 4 |
| tco-calculator | 🔴 | ✅ | ✅ | 🔴 | 🔴 | ✅ | 3 |
| vehicle-age | ✅ | 🔴 | ✅ | 🔴 | 🔴 | ✅ | 3 |
| vehicle-comparison | 🔴 | 🔴 | ✅ | ✅ | ✅ | ✅ | 2 |

**六要素缺失槽 = 18**（Inputs 4 · Formula 3 · Data source 4 · Last updated 5 · Assumptions 0 · Limitations 0）。
- **假精度检测**：`fmtMoney()` 强制 `minimumFractionDigits:2` → 所有工具结果输出 `$X,XXX.XX` 精确到分，即使底层税率/运费是估计值。**1 项假精度缺陷**（PHASE 8 明令：无法精确计算时显示「Estimated」而非精确分）。
- **证据**：`tools/src/lib/calc.js:9-16`。

### 3.6 Company：demo/占位/虚构记录清单
- **3 demo 记录**（PHASE 9 要求移除或隐藏）：

| company_id | name | business_type | 处置 |
|---|---|---|---|
| demo-orient-auto-export | Orient Auto Export (Demo) Co., Ltd. | exporter | 待处理（移除或隐藏） |
| demo-gulf-motors-trading | Gulf Motors Trading (Demo) LLC | dealer | 待处理 |
| demo-eastafrica-inspection | East Africa Vehicle Inspection (Demo) | inspection | 待处理 |

- **4 空类别**（无数据）：logistics-companies / shipping-companies / suppliers / ports。
- **8 整车厂**（可保留）：byd/geely/chery/changan/great-wall/li-auto/nio/xpeng（publicly_listed/source-backed）。
- **现状**：demo 已标 unverified + DemoBanner + 「Demo —」前缀，**但仍公开渲染** → 上线前需决策「隐藏 or 移除」。

### 3.7 车辆模板 vs PHASE 11 的 30+ 节
PHASE 11 要求约 30 个概念节。现状 VehicleDetailPage 覆盖约 **22 节**：

已覆盖：Vehicle title / Availability status / Vehicle ID / Last updated / Price（askingPrice+priceNote）/ Location / Year / Mileage / Fuel/powertrain / Transmission / Drive / Body type / Color / VIN（verification 对象内）/ Vehicle history（accident/maintenance）/ Inspection status / Battery status（EV）/ Photos（images）/ Documents / Specifications（keySpecs）/ Condition / Export information / Shipping / Destination considerations / Request Quote / Similar vehicles / Related model（aboutModel）/ Related guides。

**缺失节**：Price type（显式）/ Registration date（显式展示）/ VIN status（独立节）/ What's included / What's excluded / Related market（显式结构化链接）/ Related model 的「generation/trim」链。
**车辆专属 vs 车型级区分**：🟡 车辆页携带 `specs/generation/trim/dimensions/range_km`（车型级字段），与 data 车型页重叠，靠「About this model」链接缓解，**但缺显式视觉/字段级区分标签**（如「Vehicle-specific」vs「Model-typical」）。

### 3.8 How It Works：5 步 vs 10 步
- 现状 **5 步**：Search → Select → Request a Quote → Confirm → Export。
- 目标 **10 步**：Search → Shortlist → Vehicle information review → Availability confirmation → Inspection/verification → Price confirmation → Export documentation → Shipping arrangement → Destination clearance → Delivery。
- **差距 = 缺 5 步**（Shortlist / Vehicle information review / Availability confirmation / Inspection/verification / Price confirmation——部分散落在 how-to-buy guide 而非 how-it-works 页）。
- **平台 vs 第三方责任分界**：🟡 有「whatWeProvide」区块 + export-process guide「who is involved」角色表，但 how-it-works 页本身未显式标注「哪步平台负责 / 哪步第三方（海关/船司/目的国注册）」。**需强化分界**（PHASE 2 明令「不暗示平台控制海关/注册/运输」）。

### 3.9 About：10 节 + 三分法
- 现状 **3 段**（title/h1/contact + 3 paragraphs）。
- 目标 10 节：What it is / Who it serves / What info provided / How info collected / What is verified / What may need confirmation / How sourcing works / What NOT guaranteed / Relationship (inventory↔data↔market) / Contact path。
- **差距 = 缺 7 节** + 三分法（Platform information / Vehicle-specific verified information / Official destination-country requirements）**完全缺失**。
- **证据**：`en.json` `about.paragraphs` = 3；无独立 `about.ts` 内容文件。

### 3.10 PHASE 17 合规指南覆盖判定
PHASE 17 要求「China Used Car Export: Process, Requirements and Buyer Considerations」覆盖 10 主题：

| 主题 | 现状（china-used-car-export-process） | 判定 |
|---|---|---|
| Vehicle eligibility | 「export eligibility and documents」节提及 | 🟡 部分 |
| Export enterprise | 「who is involved」提及 coordinator，无资质细节 | 🟡 部分 |
| Vehicle registration | 「domestic transfer to export stage」节 | 🟡 部分 |
| Inspection | 「vehicle condition and documentation」节 | 🟡 部分 |
| Export license | 仅「export documents」泛提，无许可资质 | 🔴 缺 |
| Documentation | 有独立节 + export-documents guide | ✅ 覆盖 |
| Destination requirements | 「destination import and clearance」+ 链 market | ✅ 覆盖 |
| Shipping | 有独立节 + shipping guide | ✅ 覆盖 |
| Customs | 「destination clearance」提及 | 🟡 部分 |
| Post-export | 「tracking shipment」+ delays | 🟡 部分 |

**判定：覆盖 3 / 部分 6 / 缺 1**（Export license）。且**未引用当前中国官方政府来源**（无官方法规 URL），PHASE 17 要求「Use current official Chinese government sources」——**未达标**。

---

## 4. PHASE 21 优先级输入

### P1 页面逐页判定

| 页 | 现状深度 | 判定 | 依据 |
|---|---|---|---|
| 首页 `/` | 有 WHO/WHAT/WHY + 四向链接，但方法论浅 | **需升级** | 缺「方法论」段落 + 5 pathway 显式化；「how we solve problems」叙事弱 |
| Trust `/trust/` | 9 节 + 六态 | **需升级** | 缺 4 状态标签 + 约 8 节（§3.1） |
| How It Works | 5 步 + 4 服务区 + 4 FAQ | **需升级** | 5 步→10 步 + 平台/第三方分界（§3.8） |
| Services | 5 类六节结构 | **需升级** | 5 类→8 类（缺 4 类）（§3.2） |
| About | 3 段 | **需重构** | 10 节 + 三分法全缺（§3.9） |
| Contact | email/WhatsApp/表单 + 真实触点 | **充分** | 但 leadEndpoint 空，表单后端需接线 |
| 车辆模板 | 22 节 + 验证六态 | **需升级** | 缺 ~8 节 + 车辆/车型字段区分（§3.7） |

**P1 汇总：充分 1 / 需升级 5 / 需重构 1。**

### P2–P5 范围清单
- **P2**：data 20 车型页（Top 10–20）+ 主站 8 品牌页（Top 10 品牌）+ market 7 国家页（Top 10 市场）。
- **P3**：15–25 篇指南（现状 8 篇，缺 7 主题 + 部分 4 主题深化，§3.3）。
- **P4**：11 工具六要素补全（18 槽）+ 假精度修复（1 项，§3.5）。
- **P5**：companies 3 demo 记录处置 + 4 空类别挂「coming soon」+ 整车厂页补 used-vehicle relevance 叙述。

---

## 5. PHASE 22 / 24 预检

### 5.1 demo 内容在公共商用页面的残留点
1. **主站 12 台车辆全 demo**（`is_demo:true`）——`/cars/` 及所有车辆详情页均为演示数据（已 noindex + 前缀，但公开可访问）。
2. **companies 3 demo 公司**——已 unverified + DemoBanner，但仍在 `/used-car-exporters/` `/dealers/` `/inspection-companies/` 公开渲染。
3. **market `kenya/byd-song-plus` 硬编码组合页**——反模式残留，未清理。
4. **tools 首页「Coming soon」徽章死代码**——11 工具全 `done:true`，`done:false` 分支永不触发（`badge-soon` 无实际用途，非 demo 数据但为残留 UI）。

### 5.2 业务事实空缺清单（PHASE 24：该标「Not currently available / Requires confirmation / Internal TODO」）
| 空缺 | 位置 | 应标注 |
|---|---|---|
| 真实车辆库存 = 0 | `vehicles.json`（12 全 demo） | Internal TODO（接入真实库存走 mark-real） |
| 询车表单后端端点 | `site.json` `leadEndpoint: ""` | Internal TODO（接线 LeadForm） |
| 已验证的出口商/经销商/检验公司 = 0 | `companies.json`（仅 3 demo） | 「Not currently available」+ 移除 demo 公开 |
| 中国官方出口法规来源 URL | export-process guide（无官方 URL） | Requires confirmation（补官方政府来源） |
| 车型级字段混入车辆页 | `vehicles.json` specs/generation/trim/dimensions | 标注「Model-typical, confirm vehicle-specific」 |
| 车辆 `last_verified_at` = null | demo 车 | 「Not available」（已按 demo 规则处理，勿补） |
| companies demo 记录 email/phone/whatsapp = null | `companies.json` | 「Not available」（已 null，勿编造） |

### 5.3 launch-readiness 评分（初步）

| 维度 | 评分(1-10) | 依据 |
|---|---|---|
| Architecture | 8 | 五仓语义分离、shared 层一致、URL 规范 |
| SEO | 7 | canonical/hreflang/sitemap/robots 到位，但 demo 页 noindex 后真实索引页稀缺 |
| AIO | 7 | 结构化 + 表格 + 实体关系清晰 |
| Content | 5 | 8 guides 优质，但 About 极薄、P1 五个页未达标 |
| Data | 6 | data/market 数据契约完整，但 confidence 术语双源漂移 |
| Trust | 6 | 六态 + SourceNote 到位，但缺 4 状态标签 + 2 置信标签 |
| Commercial | 3 | leadEndpoint 空、0 真实库存、3 demo 公司公开 |
| Technical | 7 | 无破链（域级）、redirects 到位，但假精度 + 面包屑不全 |
| Compliance-information | 6 | 11 法律页 + 免责到位，但 PHASE 17 缺官方来源 + Export license |
| **Overall** | **5.5** | — |

**最终结论：NOT READY。**

**TOP 阻塞项（上线前必须）**：
1. 真实库存接入（0 台真实车 = 商用不可发布）。
2. `leadEndpoint` 接线（询价表单无后端）。
3. 处置 3 demo 公司（隐藏或移除公开渲染）。
4. P1 六页达标（About 重构 + How It Works 10 步 + Services 8 类 + Trust 8 状态标签 + 车辆模板补节 + 首页方法论）。
5. confidence 术语跨站统一（8 状态标签 + 5 置信标签）。

**建议下一阶段**：先完成 5 个 TOP 阻塞项（业务接线 + demo 处置 + P1 达标 + 术语统一），再做 P2（车型/品牌/市场页深化）与 P3（7 篇新指南 + 4 篇深化）。

---

### 附：审计文档路径
- 本报告：`chinausedautohub.com/docs/prelaunch-audit.md`
- 前序审计（可交叉引用）：`docs/content-audit.md`（Phase 3.1 全站内容审计）、`docs/phase2-audit.md`、`docs/phase3-audit.md`、`docs/trust-terminology.md`（信任术语规范）、`docs/vehicle-market-model.md`（Vehicle×Market 数据模型）、`docs/phase3-content-deliverables.md`
