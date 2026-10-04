# Phase 2 审计 — chinausedautohub.com（PHASE 1：全站扫描，只审计不改）

> 审计时间：2026-10-04 UTC
> 仓库：`/root/.openclaw/workspace/repos/chinausedautohub.com`
> 范围：全站扫描 + 审计文档产出，**本批未修改任何页面/配置/数据**。
> 依据：`phase2/43-car-export-phase2-prompt.md`（PHASE 1 全维检查 + IMPORTANT RULES + FINAL DELIVERABLE）、仓库 `AGENTS.md`（多语言同步规则）。

---

## 0. 结论速览（TL;DR）

| 指标 | 数值 |
| --- | --- |
| 可索引路由总数 | **136**（sitemap 实计数）+ 404 1 页 = 137 静态输出 |
| 静态页面（12 类 × 4 语） | 48 |
| 车辆详情页（12 台 × 4 语） | 48 |
| 品牌页（8 × 4 语） | 32 |
| 车身类型页（2 × 4 语） | 8 |
| 组件 / 模板 / 数据文件 | 7 / 14 / 10 |
| 词典键数（en 叶子键） | 352（ar 372 / ru 362 / es 357，差异全部为复数类别，无缺译） |
| 缺失页面清单 | services(5) · guides(8) · trust · faq · powertrains(5) · 主站 /markets/ 概览 |
| vehicle schema 字段缺口 | **15** |
| 状态枚举缺口 | sourcing / expired / hidden |
| P0 术语合规位置数 | **8**（Certified×6 + robots.txt sitemap 域×1 + Future Subsite 文案×1 组） |
| KEEP / IMPROVE / REBUILD / REMOVE / MERGE | 15 / 14 / 2 / 0 / 2 |

**三项最高优先级（P0，直接影响合规与可发现性）：**
1. `public/robots.txt` 的 Sitemap 仍指向旧 Cloudflare 默认域 `china-used-car-export.pages.dev`，与 `site.json` 的 `https://chinausedautohub.com` 不一致（sitemap 本体已正确，仅 robots.txt 引用错误）。
2. 导航一级标签 `Certified Vehicle / Certified Vehicles`（4 语词典 + Header）声称「认证」，实际无认证体系，属虚构合规风险，需改 `Vehicles / Available Vehicles`。
3. 全站多处 `future sub-site` / `future Data/Market/Tools sub-site` 文案（Resources 下拉、Footer、首页、品牌页），若子站已上线需清理，否则是「测试站」观感泄漏。

---

## 1. CURRENT SITE STRUCTURE

### 1.1 路由清单（四语 136 页 + 动态模板参数）

英文为默认（无前缀），`/ar/ /ru/ /es/` 带前缀。`trailingSlash: always`，`format: directory`。

| 路由模板 | 动态参数 | 页面数（×4 语） | 说明 |
| --- | --- | --- | --- |
| `/` | — | 4 | 首页 |
| `/about/` | — | 4 | 关于 |
| `/cars/` | — | 4 | 车辆目录（筛选/排序/Load More） |
| `/cars/{brand}/{model}/{inventoryId}/` | brand/model/inventoryId | 48（12 台×4） | 车辆详情 |
| `/brands/` | — | 4 | 品牌目录 |
| `/brands/{brand}/` | brand | 32（8 品牌×4） | 品牌页 |
| `/body-types/` | — | 4 | 车身类型目录 |
| `/body-types/{type}/` | type | 8（2 类型×4） | 车身类型页（仅 suv/sedan） |
| `/new-arrivals/` | — | 4 | 新到车辆 |
| `/request-a-car/` | — | 4 | 求购表单 |
| `/how-it-works/` | — | 4 | 购买流程 |
| `/contact/` | — | 4 | 联系 |
| `/privacy/` `/terms/` `/cookies/` | — | 12 | 法律页 |
| `/404` | — | 1（仅根，未本地化） | 404 回退 |

**当前不存在的路由**（PHASE 2-25 要求但缺失，详见 §3）：
`/services/`（5 子页）、`/guides/`（8 篇）、`/trust/`、`/faq/`、`/powertrains/`（5 子页）、`/markets/`（主站概览）、`/body-types/{van,commercial-vehicles,...}`、`/new-arrivals/`（已存在）。

### 1.2 Components（7）

| 文件 | 职责 |
| --- | --- |
| `BaseLayout.astro` | head 统一生成 title/description/canonical/hreflang/OG/twitter/schema + `<html lang dir>` + Header/Footer |
| `Header.astro` | 主导航（Certified 下拉 + Brands + Request + How It Works）+ Resources 下拉 + 语言切换 + 移动菜单 |
| `Footer.astro` | 浏览/公司/资源/法律四栏 + 真实联系方式 |
| `Breadcrumb.astro` | 面包屑 + BreadcrumbList JSON-LD |
| `LeadForm.astro` | 询盘表单（variant=full/quote，honeypot + 客户端校验） |
| `SearchModule.astro` | Hero 搜索（brand/model/price/year/country） |
| `VehicleCard.astro` | 车辆卡（data-* 属性供客户端筛选） |

### 1.3 Templates（14）

`AboutPage / BodyTypePage / BodyTypesPage / BrandPage / BrandsPage / CarsPage / ContactPage / HomePage / HowItWorksPage / LegalPage / NewArrivalsPage / NotFoundPage / RequestACarPage / VehicleDetailPage`。页面文件（`src/pages/**`）为薄壳，仅传 props 到模板。

### 1.4 数据文件（src/data，10 个）

| 文件 | 字段 | 现状 |
| --- | --- | --- |
| `vehicles.json` | vehicle_id/vin/brand/model/year/mileage_km/body_type/fuel/transmission/drive/color/location/status/price{amount,currency}/original_price/images[]/specs[]/description/condition{}/export/is_demo/source/created_at/updated_at | 12 台全 `is_demo:true`；status 分布 available 10 / reserved 1 / sold 1 |
| `brands.json` | slug/name/fullName/country/overview/dataUrl | 8 品牌 |
| `models.json` | slug/brand/name/bodyType/fuelType/shortDescription/dataUrl | 12 车型 |
| `body-types.json` | slug/name/description | **仅 suv/sedan** |
| `fuel-types.json` | slug/name/description | petrol/ev/phev/hybrid（**缺 diesel**） |
| `drive-types.json` | slug/name | fwd/rwd/awd |
| `transmissions.json` | slug/name | automatic/dct/cvt/manual |
| `markets.json` | slug/name/region/dataUrl | 7 市场（uae/saudi-arabia/kenya/tanzania/nigeria/kazakhstan/uzbekistan） |
| `site.json` | name/url/email/whatsapp/leadEndpoint/subdomains{data,companies,tools,market}/ogImage/markets | **leadEndpoint 为空**；url=chinausedautohub.com |
| `changelog.json` | [] | 空（无变更历史） |

### 1.5 词典键数

| 语言 | 叶子键 | 与 en 的差异 |
| --- | --- | --- |
| en | 352 | — |
| ar | 372 | +20（复数类别 zero/two/few/many × 5 键） |
| ru | 362 | +10（few/many × 5 键） |
| es | 357 | +5（many × 5 键） |

差异全部为 `plurals.*` 复数类别，符合 `Intl.PluralRules`（ar 6 类/ru 4 类/es 2 类/en 2 类），**无缺译键**。`en` 与 ar/ru/es 的「en 缺 vs 各语」均为 0，无新增键漏译。

---

## 2. PHASE 1 全维检查（逐项结果 + 证据）

### 2.1 SEO 基础

| 项 | 结果 | 证据 |
| --- | --- | --- |
| canonical | ✅ 通过 | `BaseLayout.astro` 自指 canonical，绝对 URL 指向 `SITE.url`；模板层各自传 localized canonical |
| hreflang | ✅ 通过 | `BaseLayout` 输出 4 语 `<link rel="alternate" hreflang>` + x-default |
| schema | ⚠️ 部分通过 | Organization/WebSite/ItemList/BreadcrumbList/Product+Vehicle+Offer/FAQPage 齐全；**缺 DataConfidence（PHASE 9）与 generation/trim 等新字段映射** |
| OG/Twitter | ✅ 通过 | og:type/title/description/url/image + twitter:card 齐全 |
| sitemap | ✅ 通过（本体） | `sitemap-index.xml`→`sitemap-0.xml`，136 URL，域为 chinausedautohub.com |
| robots.txt | ❌ **P0** | Sitemap 指向旧域 `https://china-used-car-export.pages.dev/sitemap-index.xml` |
| breadcrumb | ✅ 通过 | 所有内页面包屑 + BreadcrumbList |
| metadata 完整性 | ✅ 通过 | 每页唯一 title/description/H1；无重复 |

### 2.2 内部链接 / 破链 / orphan / 404

- 内部链接全部由 `lib/urls.ts` + `localizedUrl()` 数据驱动生成，**无硬编码死链**。
- 四语互链：语言切换用 `localizedPath()`，四语互链正确。
- orphan pages：无（所有数据页均被目录/首页/详情反链）。
- 404：`404.astro` 仅根存在，未本地化（`/ar/404` 等不存在，靠根 404.html 回退）。无 `noindex` 误伤（仅 404 用 noindex）。
- 外链（data/market/tools/companies 子站）：均 `target=_blank rel=noopener noreferrer`，但均标注 `future sub-site`（见 §5）。

### 2.3 forms / CTA 现状

- `LeadForm` 双 variant（full=求购 / quote=报价）✅；honeypot + 客户端校验 ✅。
- **`site.json.leadEndpoint` 为空** → 表单提交走本地 `setTimeout` 假成功，**无真实接收端**（功能缺口）。
- CTA：首页 Hero「Browse Vehicles / Request a Car」、详情页「Request Quote / Request Similar」、各目录页「Request a Car」✅ 覆盖充分。
- 缺 PHASE 19 的 **Buyer Type（Dealer/Importer/Wholesaler/Fleet/Rental/Other）与 Timeline** 字段。

### 2.4 移动端 UX / 无障碍快检

- `<html lang={locale} dir={dir}>`：✅ ar 为 `dir="rtl"`，其余 ltr（`BaseLayout`）。
- RTL 兼容：Header/Footer/VehicleCard 使用 logical properties（`start/end/ms/me/ps/pe`）✅。
- aria 抽查：nav `aria-label`、图片 `alt`、表单 `<label>`、按钮 aria ✅ 基线达标。
- 移动菜单：`lg:hidden` 汉堡 + JS 切换 ✅。
- 待改进：`<details>` 下拉键盘可达性未完全验证；无 `aria-current` 于导航项（面包屑有）。

### 2.5 placeholder / demo 内容残留点（全列）

| 位置 | 内容 | 数量/证据 |
| --- | --- | --- |
| 车辆数据 | `is_demo:true` | **12 台全 demo**（`vehicles.json`） |
| 占位图 | `public/images/placeholder-*.svg`（10 个，SVG 内嵌「DEMO — Placeholder image」） | 10 文件 |
| 车辆卡 | `DEMO DATA` 徽章 + `Example price — demo listing` | `VehicleCard.astro` / `vehicleCard.demoData/demoPrice` |
| 详情页 | `DEMO DATA` 徽章 + `Example price — demo listing` + `Demo placeholder image` | `VehicleDetailPage.astro` / `detail.demoPrice/demoImageNote` |
| 首页/品牌/导航 | `future sub-site`（Resources 下拉 + Footer + 首页 data/tools 卡 + 品牌页 dataDesc/marketNote） | 见 §5 清单 |
| `changelog.json` | 空数组（无历史） | 数据完整性弱 |
| `leadEndpoint` | 空字符串 | 表单无后端 |

### 2.6 thin content 页清单（词数估算）

| 页面 | 唯一正文估算 | 判定 |
| --- | --- | --- |
| `/brands/{brand}/`（8 页） | 约 150–250 词（overview 一段 + 车型卡短描述） | **thin**，需升为 commercial+knowledge landing（PHASE 10） |
| `/body-types/{type}/`（2 页） | 约 50–100 词（description 一句 + 车辆卡） | **thin** |
| `/body-types/` `/brands/` 目录 | 仅 H1+intro+卡片 | 目录页，可接受 |
| 法律页（privacy/terms/cookies） | 各 2–4 段 | 可接受（法律页不求长） |

### 2.7 重复内容

同语内重复：**未发现**。四语间同构（en/ar/ru/es 同模板翻译）按规则**不算重复**。

---

## 3. Gap 对照（PHASE 2–25 逐项）

### 3.1 缺失页面

| PHASE | 缺失 | 说明 |
| --- | --- | --- |
| §12/13/14/15 | `/services/`（5 页：vehicle-sourcing / vehicle-inspection / export-documentation / shipping / port-handling） | 完全缺失 |
| §16 | `/guides/`（8 篇） | 完全缺失（how-to-buy / export-process / inspection / documents / shipping / fob-vs-cif-vs-cfr / landed-cost / buying-chinese-evs） |
| §17 | `/trust/` | 缺失 |
| §20 | `/faq/`（独立 FAQ 页） | 缺失（仅 how-it-works 与详情页内嵌 FAQ） |
| §11 | `/powertrains/`（5 页：ev/phev/hybrid/petrol/diesel） | 缺失 |
| §11 | body-types 细分 `van / commercial-vehicles`（另有 mpv/pickup/hatchback） | `body-types.json` 仅 suv/sedan |
| §20 | 主站 `/markets/` 概览（Popular Markets + Overview + CTA） | 缺失，当前首页 Market 区块直接外链子站 |

### 3.2 vehicle schema 字段缺口（PHASE 6 vs 现状，15 项）

现有字段对照 `vehicles.json`。以下为**缺失/需结构化**字段：

| 缺口字段 | 现状 |
| --- | --- |
| `generation` | 无 |
| `trim` | 无 |
| `registration_date` | 无 |
| `battery_capacity` | 仅 specs[] 自由文本（"18.3 kWh"），无顶层结构化 |
| `battery_health` | 仅 condition.battery_health（"Not provided" 文本），无结构化 |
| `condition` 子项（exterior/interior/engine/transmission/chassis/electrical/tires/paint） | 仅 5 项且全 "Not provided" |
| `accident_history` | 仅 condition 内文本，非顶层结构化 |
| `maintenance_history` | 仅 condition.maintenance 文本 |
| `inspection_status` | 无 |
| `export_status` | `export` 全为 `null` |
| `destination` | 无 |
| `documents` | `export.documents` 类型存在但 export=null |
| `data_source` | 有 `source`（demo-catalog）但语义不等同 PHASE 6 的 `data_source` |
| `data_confidence` | 无 |
| `last_verified_at` | 仅 `updated_at`，无 `last_verified_at` |
| （附带）`powertrain` 独立 taxonomy | 无（仅 fuel） |
| （附带）`port` | 无（仅 location "Shenzhen, China"） |

### 3.3 状态枚举缺口（PHASE 7）

现状 `VehicleStatus = available | reserved | sold | unavailable`（`types.ts` + `update-vehicle.mjs` STATUSES）。
缺失：**`sourcing` / `expired` / `hidden`**。

### 3.4 数据置信度层缺失（PHASE 9）

- 无 Data Confidence / Information Availability 展示层。
- 无「Verified / Provided / Estimated / Not Available」四级区分（PHASE 17 也要求此四级在 /trust/ 页明确）。
- schema 无对应 structured data。

### 3.5 导航与 PHASE 3 差异

| PHASE 3 推荐 | 现状 |
| --- | --- |
| Vehicles | ❌ 现为「Certified Vehicle」下拉 |
| Brands | ✅ |
| Markets | ❌ 缺（仅 Resources 外链） |
| Services | ❌ 缺 |
| How It Works | ✅ |
| Resources 下拉（Vehicle Data/Market Info/Buying Guides/Import Tools/Companies） | ⚠️ 有 Vehicle Data/Market Info/Tools/Companies，**缺 Buying Guides** |
| 右侧 Request a Car + Get a Quote/Contact | ⚠️ 有 Request a Car，**缺 Get a Quote/Contact** |

### 3.6 首页与 PHASE 4 差异

现状首页区块：Hero / Trust strip / Featured / Brands / Types / New Arrivals / Why / Request CTA / Market 外链 / Data+Tools / How It Works / Final CTA。

| PHASE 4 推荐区块 | 现状 |
| --- | --- |
| Browse by Powertrain | ❌ 缺 |
| Export Services 区块 | ❌ 缺 |
| Popular Markets 区块 | ⚠️ 有 Market 外链，无主站概览页 |
| Vehicle Data Hub / Market Info Hub / Import Tools / Buyer Guides（四卡） | ⚠️ 有 Data+Tools，**缺 Market Info Hub / Buyer Guides** |
| FAQ 区块 | ❌ 缺 |
| Final CTA | ✅ |

### 3.7 请求表单与 PHASE 19 差异

| PHASE 19 字段 | 现状 |
| --- | --- |
| Buyer Type（Dealer/Importer/Wholesaler/Fleet/Rental/Other） | ❌ 缺 |
| Destination Country / Port | ✅ |
| Vehicle Type | ✅（body_type 下拉） |
| Preferred Brand / Model | ✅（brand 下拉 + model 输入） |
| Fuel/Powertrain | ⚠️ 有 fuel，无独立 powertrain |
| Quantity | ✅ |
| Budget | ✅ |
| Specific Requirements | ✅（message） |
| Timeline | ❌ 缺 |
| Contact | ✅ |
| 「I don't know the exact model」 | ✅（unknown_model 勾选） |
| 「Recommend vehicles suitable for my market」 | ❌ 缺（可并入 Buyer Type 逻辑） |

---

## 4. KEEP / IMPROVE / REBUILD / REMOVE / MERGE 判定表

| 对象 | 判定 | 理由 |
| --- | --- | --- |
| `BaseLayout.astro` | KEEP | SEO head 生成正确（canonical/hreflang/OG/schema），无需改动 |
| `Breadcrumb.astro` | KEEP | 面包屑 + BreadcrumbList 完整 |
| `lib/data.ts`（数据访问层） | KEEP | 展示/数据分离架构正确，未来换 DB 只改此层 |
| `lib/schema.ts`（schema 构建器） | IMPROVE | 加 DataConfidence + generation/trim/registration 等新字段映射 |
| `lib/urls.ts` | KEEP | URL 集中管理正确 |
| `lib/types.ts` | IMPROVE | 扩展 Vehicle 接口 + 状态枚举（sourcing/expired/hidden） |
| `i18n/*`（词典层 + reference.ts + vehicles.ts） | KEEP | 结构正确，无缺译；随新内容追加键 |
| `Header.astro` | IMPROVE | 「Certified」→「Vehicles」；加 Markets/Services；右侧加 Get a Quote/Contact |
| `Footer.astro` | IMPROVE | 加 Services/Guides/FAQ/Trust 链接；清理 future sub-site 文案 |
| `HomePage.astro` | IMPROVE | 加 Powertrain / Export Services / Buyer Guides / FAQ 区块 |
| `VehicleDetailPage.astro` | IMPROVE | 加 Data Confidence 层、Vehicle History、Inspection、Battery、Export、Shipping 区块（按 PHASE 8） |
| `CarsPage.astro` | IMPROVE | 状态筛选加 sourcing；加 powertrain 筛选 |
| `VehicleCard.astro` | IMPROVE | demo 徽章随上线清理（保留 demo 态逻辑，仅上线前 clear） |
| `LeadForm.astro` | IMPROVE | 加 Buyer Type / Timeline；接入 leadEndpoint 后端 |
| `SearchModule.astro` | IMPROVE | 加 powertrain 维度 |
| `BrandPage.astro` | REBUILD | 薄页 → commercial+knowledge landing（PHASE 10） |
| `BodyTypePage.astro` | IMPROVE | 扩展 taxonomy（van/commercial 等）后同模板复用 |
| `BodyTypesPage.astro` / `BrandsPage.astro` | IMPROVE | 目录页微调（加车型计数/类型描述） |
| `robots.txt` | REBUILD | **P0**：Sitemap 域从 pages.dev 改为 chinausedautohub.com |
| `site.json` | IMPROVE | 填 `leadEndpoint`；确认子站域是否上线（决定 future 文案去留） |
| `scripts/update-vehicle.mjs` | KEEP | 校验/去重/changelog/禁删 逻辑正确 |
| `scripts/clear-demo-data.mjs` | KEEP | 上线前清除 demo 车辆正确 |
| `404.astro` / `NotFoundPage.astro` | KEEP | 无需改动（可补本地化 404，低优先级） |
| `ContactPage.astro` / `AboutPage.astro` | KEEP | 内容真实、无虚构，达标 |
| `LegalPage.astro` | KEEP | 法律页内容克制、无虚构声明 |
| （无） | REMOVE | 0 项（遵守「不删有效内容」） |
| BodyType + FuelType taxonomy | MERGE | 拆分/合并为独立 BodyType 与 Powertrain 两个 taxonomy（PHASE 11，勿混） |
| Contact + Request a Car | MERGE（保持分离） | 语义不同（渠道 vs 线索），维持两页，不做合并 |

---

## 5. P0 术语合规清单（PHASE 5）

### 5.1 「Certified Vehicle / Certified Vehicles」出现位置（需改 Vehicles/Available Vehicles）

| # | 位置 | 现值 |
| --- | --- | --- |
| 1 | `src/i18n/en.json` `nav.certifiedVehicle` | "Certified Vehicle" |
| 2 | `src/i18n/en.json` `nav.certifiedVehicles` | "Certified Vehicles" |
| 3 | `src/i18n/ar.json` | "السيارات المعتمدة"（认证车） |
| 4 | `src/i18n/ru.json` | "Сертифицированный автомобиль" |
| 5 | `src/i18n/es.json` | "Vehículo certificado" |
| 6 | `src/components/Header.astro` L22/L25 | 下拉 label + 子项使用 `t.nav.certifiedVehicle/certifiedVehicles` |

> 共 6 处（4 语词典键 + Header 调用点）。均为导航「Certified」下拉（实际指向 `/cars/`、`/body-types/`、`/new-arrivals/`）。无认证体系，属虚构合规风险，必须改。

### 5.2 robots.txt Sitemap 域（P0）

| 位置 | 现值 | 应为 |
| --- | --- | --- |
| `public/robots.txt` | `Sitemap: https://china-used-car-export.pages.dev/sitemap-index.xml` | `https://chinausedautohub.com/sitemap-index.xml` |

### 5.3 「Future Subsite / Example Price / Placeholder」标注点全列

| 类型 | 位置 | 文案 |
| --- | --- | --- |
| Future Subsite | `src/i18n/{en,ar,ru,es}.json` `nav.futureSubsite` | "future sub-site" / "موقع فرعي مستقبلي" / "будущий подсайт" / "futuro subsitio" |
| Future Subsite | `Header.astro` L36-39 + `Footer.astro` L24-27 | Resources 四项 data/market/tools/companies 均带 note |
| Future Subsite | `en.json` `brands.dataDesc` | "future Data sub-site" |
| Future Subsite | `en.json` `brands.marketNote` / `home.marketNote` | "future Market sub-site" |
| Future Subsite | `en.json` `home.dataText` / `home.toolsText` | "a future Data/Tools sub-site" |
| Example Price | `en.json` `vehicleCard.demoPrice` / `detail.demoPrice` | "Example price — demo listing" |
| Placeholder | `VehicleCard.astro` / `VehicleDetailPage.astro` | `demoImageAlt` "demo placeholder image" / `demoImageNote` |
| Placeholder | `public/images/placeholder-*.svg`（10 个） | SVG 内嵌 "DEMO — Placeholder image" |

> 判定：`Example Price`/`Placeholder` 属 Demo 标注，**上线前经 `clear-demo-data` 清除，可保留**；`Future Subsite` 若子站（data/market/tools/companies）已上线，须去「future」改正式链接文案。

---

## 6. 多语言维度（PHASE 26 + 仓库 AGENTS.md 同步规则）

现有四语已完整打通：词典层 + `reference.ts`（词表翻译）+ `vehicles.ts`（车辆正文翻译）+ hreflang + RTL。**新增内容必须四语同步、同一 commit**。

### 6.1 每项新页面的四语工作量预估

| 新增 | 页面数 | 词典新增键 | 正文 | 工作量 |
| --- | --- | --- | --- | --- |
| `/services/` 5 页 | 5 × 4 = 20 | ~8–10 键/页 × 4 语 | 每页 300–600 词正文 × 4 语 | **高**（正文四语撰写） |
| `/guides/` 8 篇 | 8 × 4 = 32 | 每篇 2–4 键（title/desc/H1） | 每篇 800–1500 词 × 4 语 | **最高**（evergreen 长文四语） |
| `/trust/` | 1 × 4 = 4 | ~20 键 | 8 节正文 × 4 语 | 中高 |
| `/faq/` | 1 × 4 = 4 | ~15 键（Q/A 对） | 8–12 Q/A × 4 语 | 中 |
| `/powertrains/` 5 页 | 5 × 4 = 20 | ~6 键/页 + 词表 | 每页 200–400 词 × 4 语 | 中高 |
| body-types 新增类型 | 视数据量 | 词表 +3 类型 | 描述句 × 4 语 | 低（随数据驱动） |
| 表单字段（Buyer Type/Timeline） | 0 新页 | ~10 键 × 4 语 | — | 低 |
| 导航文案（Vehicles 替换 Certified 等） | 0 新页 | ~6 键 × 4 语 | — | 低 |

### 6.2 同步执行面

1. **词典**：新键必须同时写入 `en/ar/ru/es.json`（同一 commit），`grep -rn "待翻译\|TODO" src/i18n` 零残留。
2. **内容**：车辆/服务/指南正文四语同步；品牌名/车型名/专有名词不翻译。
3. **hreflang**：`BaseLayout` 自动生成，新页面复用模板即自动四语互链，无需手写。
4. **RTL**：阿拉伯语新 UI 用 logical properties；新组件必须 RTL 兼容。

---

## 7. 其他发现（非 P0，记录备查）

1. **表单无后端**：`site.json.leadEndpoint` 为空，提交走假成功。需接 Email/CRM webhook（PHASE 19 转化关键）。
2. **`unavailable` 状态无实车使用**：类型与 UI 均支持，但 12 台 demo 无一台 `unavailable`（缺 sourcing/expired/hidden 更明显）。
3. **404 未本地化**：仅根 `404.html`，`/ar/404` 等靠回退，体验可接受、低优先级。
4. **子站域未验证上线**：`site.json.subdomains` 已配置 data/companies/tools/market.chinausedautohub.com，但全站以「future」标注，需确认子站是否已部署以决定文案去留。
5. **`changelog.json` 为空**：更新脚本可写，但当前无历史（数据治理弱信号，非缺陷）。
6. **无部署配置**：未见 `wrangler.toml`（Cloudflare Pages 部署管线待建）。

---

*本审计仅扫描与记录，未修改任何页面/配置/数据。执行优化（PHASE 2 起）另批进行。*
