# Phase 2 Final Deliverables — chinausedautohub.com

> 交付批次：P2-D（PHASE 23 SEO 复检 + PHASE 24 AIO/GEO 快检 + PHASE 25 内链 topic graph + PHASE 28 QA 复扫 + FINAL DELIVERABLE）
> 日期：2026-10-04 UTC
> 依据：`phase2/43-car-export-phase2-prompt.md`（§1–§30）、仓库 `AGENTS.md`（四语同步规则）
> 产出：本文件 `docs/phase2-deliverables.md`

---

## 0. 结论速览（TL;DR）

| 指标 | 数值 |
| --- | --- |
| 静态页面总数 | **225**（224 可索引 + 404） |
| 唯一路由（en 形态） | **56** × 4 语 = 224 |
| sitemap URL | **224**（唯一、域 chinausedautohub.com 正确） |
| 重复 title / description | **0 / 0** |
| canonical 错误 | **0** |
| hreflang 缺失（<5 组）/ x-default 缺失 | **0 / 0** |
| 内部破链（排除本地化 404） | **0** |
| orphan 页面 | **0** |
| 误用 noindex | 仅 `/404.html` |
| 伪造认证文案（"certified"） | **0** |
| FAQPage schema 页面 | 仅 `/faq/`（4 语） |
| Article schema 页面 | 仅 `/guides/*`（8 篇 × 4 语 = 32） |
| Product/Vehicle schema | 仅车辆详情（12 × 4 = 48） |
| BreadcrumbList | 全内页 |

**本批（P2-D）实际修正 6 项（增量，未改动任何稳定 URL）：**
1. FAQPage schema 从 `/how-it-works/` 与车辆详情页移除，仅保留 `/faq/`（PHASE 23「FAQPage 仅 /faq/」）。
2. Article schema `inLanguage` 由硬编码 `'en'` 改为随 locale 输出 `en/ar/ru/es`（四语指南正确标注语言）。
3. Footer 增补 `/markets/` 链接（首页/页脚指向全部新集群）。
4. 车辆详情页增补 Market 链接（Vehicle→Market 链路）。
5. Markets 概览页增补 Suitable Vehicles / Brands / Import Tools 三卡内链（Market→Suitable Vehicles→Brands→Tools→Request）。
6. `i18n/markets.ts` 新增 3 个 L10n 键 × 4 语（suitableVehicles / browseBrands / importTools）。

---

## 1. Current Architecture

**定位**：China Used Auto Hub = 中国二手车出口商业 sourcing 平台（Commercial Sourcing + Export Service + Vehicle Discovery + Lead Generation）。

**技术栈**：Astro 5（静态输出，`format: directory`、`trailingSlash: always`）+ TypeScript + Tailwind CSS 3 + `@astrojs/sitemap` + `astro:i18n`（四语 hreflang）。部署目标 Cloudflare Pages。

**分层**：
- 数据层 `src/data/*.json`（10 文件：vehicles/brands/models/body-types/fuel-types/transmissions/drive-types/markets/powertrains/site/changelog），仅经 `src/lib/data.ts` 访问。
- 展示层 `src/pages/**`（薄壳）+ `src/templates/**`（14 模板）+ `src/components/**`（7 组件）。
- i18n 层：`src/i18n/*.json`（共享 UI 词典）+ `src/i18n/{reference,vehicles,brands,services,guides,trust,faq,markets}.ts`（内容翻译，en 权威，ar/ru/es 事实翻译）。

**路由**：英语默认无前缀，`/ar/ /ru/ /es/` 带前缀。`localizedUrl()` / `localizedPath()` 统一生成，无硬编码 URL。

---

## 2. New Architecture

（本批为收官批，架构与 P2-B/P2-C 一致，未重构，仅增量补链与 SEO 修正。）

最终信息架构（56 唯一路由）：

```
/                             首页（Hero/Trust/Featured/Brands/Types/Powertrains/Why/Services/Markets/How It Works/Hubs/Request/FAQ/Final CTA）
/cars/                        车辆目录（服务端全量渲染 + 客户端渐进筛选）
/cars/{brand}/{model}/{id}/   车辆详情（12 × 4 = 48）
/brands/ /brands/{brand}/     品牌目录 + 品牌 landing（8 × 4）
/body-types/ /body-types/{type}/  车身类型（suv/sedan，仅按真实库存生成）
/powertrains/ /powertrains/{type}/ 动力类型（ev/phev/petrol，仅按真实库存生成）
/new-arrivals/                新到车辆
/services/ + 5 子页           sourcing/inspection/export-documentation/shipping/port-handling
/guides/ + 8 篇                evergreen 买家指南
/trust/ /faq/ /markets/ /how-it-works/
/request-a-car/ /about/ /contact/ /privacy/ /terms/ /cookies/
```

**不变原则**：数据层与展示层分离；taxonomy 页仅在存在真实数据时生成（`getPowertrainsWithVehicles` / `getBodyTypesWithVehicles` 过滤，避免空 taxonomy 页）；子站内容不复制回主站。

---

## 3. Changed Pages

| 页面 | 变更 | 语言 |
| --- | --- | --- |
| `/how-it-works/`（HowItWorksPage） | 移除 FAQPage JSON-LD（FAQ 可见内容保留） | 4 语 |
| 车辆详情页（VehicleDetailPage，12 台） | 移除 FAQPage JSON-LD；Destination Considerations 增补 Markets 链接 | 4 语 |
| `/guides/{guide}`（GuidePage，8 篇） | Article schema `inLanguage` 随 locale 输出 | 4 语 |
| 页脚（Footer，全站） | 增补 `/markets/` 链接 | 4 语 |
| `/markets/`（MarketsPage） | 增补 Suitable Vehicles / Brands / Import Tools 三卡内链 | 4 语 |

---

## 4. New Pages

本批未新增页面。P2-B 已落地的全部新集群（本批核验通过，无孤儿）：

| 集群 | 页面 | 数量 |
| --- | --- | --- |
| Services | `/services/` + 5 子页 | 6 × 4 = 24 |
| Guides | `/guides/` + 8 篇 | 9 × 4 = 36 |
| Trust | `/trust/` | 1 × 4 = 4 |
| FAQ | `/faq/` | 1 × 4 = 4 |
| Powertrains | `/powertrains/` + 3（ev/phev/petrol） | 4 × 4 = 16 |
| Markets 概览 | `/markets/` | 1 × 4 = 4 |

---

## 5. Removed / Merged Pages

- **Removed：0**（遵守「不删除有效内容」）。
- **Merged：0**（Contact 与 Request a Car 语义不同，维持分离）。
- 状态枚举扩展（P2-A）：`available | reserved | sold | sourcing | expired | hidden`；Sold 页保留不 404。

---

## 6. Navigation Changes

Header（P2-C 已定稿，本批复核无改动）：

- 一级：**Vehicles**（下拉：Available Vehicles / Vehicle Types / New Arrivals）· **Brands** · **Markets** · **Services** · **How It Works**
- Resources 下拉：Vehicle Data · Market Information · Buying Guides · Import Tools · Companies（子站均 `target=_blank rel=noopener noreferrer`）
- 右侧：Request a Car（primary）· Contact（secondary）
- 术语合规：一级标签已由「Certified Vehicle」改为「Vehicles」（虚构认证风险清零）。

Footer 四栏：Browse（Vehicles/Brands/Types/Powertrains/**Markets**/New Arrivals/Services/Guides/Request/How It Works）· Company（About/Contact/Trust/FAQ）· Related Resources（子站）· Legal（Privacy/Terms/Cookies）。

---

## 7. Vehicle Schema

统一 vehicle schema（`src/lib/types.ts` + `src/lib/schema.ts`），PHASE 6 字段全覆盖：

- 身份/状态：`vehicle_id / vin / status / created_at / updated_at / last_verified_at / data_source`
- 描述：`brand / model / generation / trim / year / registration_date / mileage_km`
- 动力：`fuel / transmission / drive / body_type / battery_capacity / battery_health`
- 位置：`color / location / port`（port 待结构化，暂以 location 承载）
- 价格：`price / original_price`（`asking_price` 语义由 `price` 承载）
- 状态字段：`condition{8 子项} / accident_history / maintenance_history / inspection_status / export_status / destination / documents / export`
- 置信度：`data_confidence{vehicle_identity/mileage/price/inspection/battery_health/maintenance_history}`（四级 verified/provided/estimated/not_available/not_provided）

Schema.org 输出（`vehicleSchema()`）：`Product` + `Vehicle` + `Offer` + `QuantitativeValue`（mileage）+ 条件字段（`dateVehicleFirstRegistered/vehicleConfiguration/additionalProperty` 仅在字段非空时输出，不虚构）。Demo 列表不伪装为市场实价。

字段不存在时显示 `Not Provided / Not Available / Not Verified`，不生成 AI 数据（PHASE 6/9 合规）。

---

## 8. Internal Linking Strategy

topic graph 五链路（PHASE 25）+ 收口：

| 链路 | 实现 |
| --- | --- |
| Brand→Models→Vehicles→Data | 品牌页：Popular Models（→data 子站）· Available Vehicles（→详情）· Related Data（→data 子站） |
| Vehicle→Brand→Model Data→Market→Request | 详情页：面包屑品牌 · About This Model/Related Data（→data）· **Markets 链接（本批新增）** · LeadForm/Request Similar |
| Market→Suitable Vehicles→Brands→Tools→Request | Markets 页：市场卡（→market 子站）· **Suitable Vehicles（→/cars/）· Brands（→/brands/）· Import Tools（→tools 子站）· Request CTA（本批新增）** |
| Guide→Data→Market→Tools→Request | GuidePage 底部 Resources 区：Data/Market/Tools 子站 + Request a Car |
| Service→How It Works→Request | 每个服务页 + 服务目录页：How It Works + Request CTA |
| 首页/页脚→全部新集群 | 首页含 services/guides/markets/faq/powertrains 区块；页脚含 services/guides/trust/faq/powertrains/**markets（本批补）** |

所有内链由 `localizedUrl()` 生成，四语正确、无硬编码；子站链接 `target=_blank rel=noopener noreferrer`。orphan 检查：**0 孤儿页**（全 224 可索引页均被 Header/Footer/首页/上级目录反链）。

---

## 9. SEO Changes

复检（PHASE 23）逐项，本批修正标 ★：

| 项 | 结果 | 证据 |
| --- | --- | --- |
| title 唯一 | ✅ 0 重复 | 全 224 页 title 全唯一 |
| description 唯一 | ✅ 0 重复 | 全 224 页 description 全唯一 |
| H1 唯一 | ✅（同语 0 重复；四语同模板翻译按规则不算重复） | 13 组重复仅车辆标题跨语同名，属专有名词不译 |
| canonical | ✅ 0 错误 | 224 页 canonical 与 `https://chinausedautohub.com{path}` 一致 |
| hreflang | ✅ 全页 4 语 + x-default | 0 页 <5 组，0 页缺 x-default |
| schema 类型匹配 | ✅ | Article 仅 guides（32）· FAQPage 仅 /faq/（4，★本批从 how-it-works+详情移除）· Product/Vehicle 仅详情（48）· BreadcrumbList 全内页 |
| Article 语言标注 | ✅ ★ | `inLanguage` 由硬编码 en 改为随 locale |
| OG/Twitter | ✅ | og:type/title/description/url/image + twitter:card 齐全，og-default.svg 存在 |
| sitemap | ✅ | 224 URL 唯一，域 chinausedautohub.com，404 已过滤 |
| robots.txt | ✅ | `Sitemap: https://chinausedautohub.com/sitemap-index.xml`（P0 已修） |
| breadcrumb | ✅ | 全内页 BreadcrumbList + 可见面包屑 |

---

## 10. AIO/GEO Changes

抽查 5 类核心页，Question→Direct Answer→Evidence→Related Entity→Next Action 结构：

| 页面类型 | 结构落地 |
| --- | --- |
| 车辆详情 | Question（FAQ 区）→ Direct Answer（description/specs）→ Evidence（Data Confidence 表 + Condition/History）→ Related Entity（Similar + Related Data）→ Next Action（Request Quote/Request Similar） |
| 品牌页 | 直接回答（overview/whyConsider）→ Evidence（chinaPosition/exportConsideration 事实陈述）→ Related Entity（Models/Vehicles/Types/Powertrains/Markets/Data）→ Next Action（Request This Brand） |
| 服务页 | Question（What is/Who for）→ Direct Answer（whatIs/whoFor）→ 边界（included/notIncluded/infoRequired）→ Next Action（What happens next + How It Works + Request） |
| 指南页 | 分节 Question 式标题 → 事实回答 → 无虚构价格表 → Related Entity（Data/Market/Tools）→ Next Action（Request） |
| FAQ 页 | 纯 Question→Answer 列表 + Request CTA |

无 AI 套话、无关键词堆砌、无 FAQ spam（详情页 FAQ 仅 2–4 条真实问题）。每页明确实体：Brand/Model/Vehicle/Country/Port/Powertrain/Service。

---

## 11. Trust Changes

- `/trust/` 页：明确区分四级置信度（Verified / Provided / Estimated / Not Available），8 节信息政策（How Information Collected / Data Policy / Inspection / Pricing / Availability / Export Documentation / Buyer Communication / Risk-Fraud Prevention / Accuracy）。
- 车辆详情「Information Availability」表 + `data_confidence` 数据层四级，与 trust 页一致。
- Demo 车辆标注完整：卡与详情均「DEMO DATA」徽章 + 「Example price — demo listing」+「Demo placeholder image」；`is_demo` 仅存数据层。
- 无虚构认证/检测/出口量/排名；服务能力表述统一用「availability depends on vehicle / destination / buyer requirements」。

---

## 12. Conversion Improvements

- 双表单：`LeadForm` variant=full（求购）与 variant=quote（报价，带隐藏车辆字段）。
- PHASE 19 字段：Buyer Type（Dealer/Importer/Wholesaler/Fleet/Rental/Other）· Destination Country/Port · Vehicle Type · Brand/Model · Fuel · Quantity · Budget · Timeline · Contact；「I don't know the exact model」+「Recommend vehicles suitable for my market」勾选。
- Honeypot + 客户端校验 + 语言本地化错误/成功提示。
- CTA 覆盖：Hero（Browse/Request）· 详情（Request Quote/WhatsApp/Request Similar）· 各目录与集群页（Request a Car）。
- **遗留缺口**：`site.json.leadEndpoint` 为空，提交走本地假成功；需接 Email/CRM webhook（见 §14）。

---

## 13. Technical Changes

- **FAQPage 收敛**：`HowItWorksPage`、`VehicleDetailPage` 移除 `faqSchema()` 引用；仅 `FaqPage` 输出 FAQPage。
- **Article 语言**：`schema.ts articleSchema()` 新增 `locale?` 参数；`GuidePage` 传入当前 locale 与本地化 headline/description。
- **内链**：`Footer.astro` 增 markets；`VehicleDetailPage` 增 markets；`MarketsPage` 增三卡（并导入 `SUBDOMAINS`）。
- **i18n**：`markets.ts` 新增 `suitableVehicles/browseBrands/importTools` 3 键 × 4 语。
- 构建：`npm run build` → **225 页**，5.7s，无报错；sitemap 224 URL。

---

## 14. Remaining Risks

| 风险 | 说明 | 建议 |
| --- | --- | --- |
| 表单无后端 | `site.json.leadEndpoint=""`，提交走假成功 | Phase 3 接 Email/CRM webhook（转化关键） |
| 全库存为 Demo | 12 台全 `is_demo:true` | 上线前 `scripts/clear-demo-data.mjs --yes` |
| 子站未验证上线 | data/market/tools/companies 子站链接均为外部，主站以正式链接指向 | 确认子站部署后保留；未上线前观察 404 |
| `changelog.json` 为空 | 更新脚本可写但无历史 | 上线数据治理时启用 |
| 404 未本地化 | 仅根 `404.html`，`/ar/404` 等靠回退 | 低优先级；语言切换器在 404 页指向本地化 404 属已知小瑕疵 |
| 无部署配置 | 未见 `wrangler.toml` | Cloudflare Pages 管线待建 |
| brand 页 knowledge 深度 | 8 品牌已有 whyConsider/chinaPosition/exportConsideration | Phase 3 可再加目的地市场/型号对比深度 |

---

## 15. Recommended Phase 3

1. **Lead 后端接入**：接 Email/CRM webhook，替换假成功逻辑（转化率最高优先）。
2. **真实库存接入**：接入真实车辆数据（含 port / registration_date / battery_health 结构化），清除 demo；上线前执行 `clear-demo-data`。
3. **子站部署确认**：data/market/tools/companies 四子站上线并互链验证；主站 Market 卡正式启用。
4. **品牌页深化**：每品牌补目的地市场适配、型号对比、常见出口版本差异（PHASE 10 深化）。
5. **Vehicle History/Inspection 结构化**：接入检测报告/维保记录的真实数据源（四级置信度从 provided 提升至 verified）。
6. **部署管线**：建立 `wrangler.toml` + CI 自动构建发布 + sitemap/robots 上线后二次验证。
7. **本地化 404 + 站内搜索**：补 `/ar/404` 等；可选站内全文检索。

---

*本批所有改动均为增量内链与 SEO 修正，未改动任何稳定 URL；四语同步完成于同一 commit。*
