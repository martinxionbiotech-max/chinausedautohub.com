# ChinaUsedAutoHub 五站 Spam + 合规审计报告

- 审计日期：2026-10-07
- 审计范围：chinausedautohub.com（主站）+ data / market / tools / companies 四子站
- 审计性质：Spam 信号扫描 + 合规检查（审计为主，P0 即修）
- 分级：**P0** 明确违规/缺陷（本批修复）· **P1** 风险（建议近期处理）· **P2** 建议（可择机优化）

---

## 一、结论速览

| 检查项 | 结果 | 级别 |
|---|---|---|
| 关键词堆砌 | 未发现 | ✅ |
| 隐藏文本 / 隐蔽内容 | 未发现（`display:none` 均为正当 UI 用途） | ✅ |
| UA 欺骗 / Cloaking | 无机制（纯静态构建） | ✅ |
| 薄页 / 门页 / 规模化滥用 | 模板共享但数据驱动、内容唯一，非门页 | ✅ |
| 结构化数据垃圾 | 无虚构 Rating/Review；**tools 站 price "0" 待改** | ⚠️ P1 |
| 外链质量 | 无 affiliate/付费链接 | ✅ |
| 子站法律页链接 | **缺失 → 已修复** | 🔴 P0（已修） |
| Cookie 同意机制 | 无非必要 cookie，同意 banner 非强制 | 🟡 P2 |
| 联系与主体披露 | 主站完整；**子站缺失 → 已修复** | 🔴 P0（已修） |
| 法规免责 | 82 国页 + 组合页 + 主站均齐备 | ✅ |
| 商标使用 | 名义使用，无侵权暗示 | ✅ |
| 广告/加盟披露 | 无 affiliate | ✅ |
| 数据收集披露 | 一致 | ✅ |

---

## 二、Spam 信号扫描明细

### 1. 关键词堆砌 — ✅ 未发现

- **title / description / H1**：五站均采用「模板 + 真实数据」生成，每页独立取值。主站抽查 30 页、各子站 15 页，标题/描述为「实体名 + 站点定位」式短语，未出现重复关键词堆砌或超长标题。
- **正文关键词密度**：正文为数据驱动（车辆/国家/车型描述），非关键词填充式文案。抽样未发现单一短语异常高频。
- **过度优化锚文本**：内链锚文本均为导航性/描述性文本（品牌名、车型名、页面名、站点名），非精确匹配关键词锚文本。未发现「精确匹配锚比例」异常（生态互链使用 `Vehicles / Vehicle Data / Companies / Tools / Markets` 等站点名，属正常导航锚）。

### 2. 隐藏文本 / 隐蔽内容 — ✅ 未发现

全站 `display:none` / `visibility:hidden` / 同色文本扫描结果，命中均为正当 UI 用途：

| 位置 | 用途 |
|---|---|
| `主站 src/styles/global.css:50-53` | no-JS fallback：`html.js .listing-more{display:none}` 分页「加载更多」门控 |
| `主站 src/components/Header.astro:291` | `::-webkit-details-marker` 移除原生 `<details>` 三角 |
| 各站 `.no-results{...}` | 搜索空结果提示（含 `hidden` 属性，非 SEO 隐藏文本） |

未发现任何「字体同色」「text-indent 负值」「position:absolute 移出视口」等隐藏关键词技术。

### 3. UA 欺骗 / Cloaking — ✅ 无机制（确认声明）

- 五站均为 **Astro 静态构建**（`astro build` 输出静态 HTML），无服务端条件渲染。
- 全站代码扫描 `user-agent` / `navigator.userAgent` / `googlebot` / `cloak` / `isBot` **零命中**（仅有 `botswana`、`owner both` 等词根误报）。
- 结论：**无 cloaking 机制**，curl 默认 UA 与 Googlebot UA 返回内容一致（静态文件，同一份 HTML）。

### 4. 薄页 / 门页 / 规模化滥用 — ✅ 非门页（模板相似度检测）

- **规模**：market 站构建 **1248 页**（82 国家页 × 4 语 + 228 车辆×市场组合页 × 4 语 + 静态页）；data 站 185 页；companies 站 21 页；tools 站 13 页；主站 125 个页面文件 × 4 语。
- **模板相似度 / 内容重复率**：
  - 共享模板（`CountryPage.astro` / `VehicleMarketPage.astro`）但**内容由数据驱动、逐页唯一**：每国 `overview / considerations / faq` 独立（`src/lib/content.ts` 82 国独立文案）；每组合页 `relations` 记录「delta 事实 + source + confidence」（`vehicle-market.json`）。
  - **同语种近重复页**：未发现需列清单的同语种近重复页。国家页与组合页内容因底层数据不同而实质不同。
  - **i18n 多语言**：4 语互链 + `hreflang` + `x-default` 正确（BaseLayout 输出），属正常多语言架构，非重复内容滥用。
- 结论：属「数据驱动的合法规模化内容」，**非门页（doorway）**、非「内容农场」式同质化页。

### 5. 结构化数据垃圾 — ⚠️ 1 项 P1（无虚构 Rating/Price 违规）

- **虚构 Rating/Review 复核**：五站全量扫描 `aggregateRating` / `ratingValue` / `reviewCount` / `review` / `Review` / `bestRating` / `worstRating` **零命中**。确认 **0 违规**（与既定纪律一致）。
- **JSON-LD 类型分布**：主站 `WebSite/Article/BreadcrumbList/Vehicle`；market `Article/BreadcrumbList`；companies `ItemList`；tools `WebApplication`。
- **JSON-LD 与可见内容一致性抽查**：标题/描述/URL 与页面可见信息一致（Article headline/description 取自同一词典键）。
- **⚠️ 发现（P1）**：tools 站 11 个计算器页声明 `WebApplication` + `offers: { "@type":"Offer", price:"0", priceCurrency:"USD" }`（如 `currency-converter/index.astro:29`）。为免费工具标注 `price:"0"` 属非标准表达——schema.org 推荐对免费应用省略 `offers` 或使用 `isAccessibleForFree`。虽非「虚构商品价格」，但存在结构化数据准确性风险。

### 6. 外链质量 — ✅ 无付费/affiliate 链接

- **affiliate / sponsored / paid link 扫描**：`affiliate` / `sponsored` / `advertisement` / `adsense` / `rel="sponsored"` 五站**零命中**。**无 affiliate 链接，无 disclosure 需求。**
- **出站链接构成**：(a) 数据层 `source_url` 指向官方机构/权威来源（海关、政府、行业协会）；(b) 生态内互链（5 站 nav + 资源区块）；(c) `SourceNote` 组件带 `rel="noopener"`。
- **footer 链接密度**：主站 footer 为 4 列导航（浏览/公司/资源/法律+免责），属正常站点导航，无过度链接堆砌。

---

## 三、合规检查明细

### 1. 法律页面完整性 — 🔴 P0（已修复）

- **主站**：11 页合规套件完整 × 4 语（`legal-notice / privacy / terms / cookies / data-protection / copyright / disclaimer / vehicle-listing-disclaimer / export-compliance / external-links / errors-omissions`），由 `LegalPage.astro` 模板 + `lib/site.ts` `LEGAL_PAGES` 驱动，footer 法律/免责分组导航齐全。
- **子站（data / market / tools / companies）**：无本地 Privacy/Terms 页，footer **仅一行 disclaimer，无任何法律页链接、无联系信息、无运营主体声明**。→ **P0，本批已修复**（见第五节）。

### 2. Cookie 同意机制 — 🟡 P2（非强制，但需保持策略准确）

- **同意机制**：五站均**无 cookie banner / 同意脚本**。
- **主站 cookies 页声明**（`src/i18n/en.json → legal.cookies`）：「静态站，不使用广告或分析 cookie；无第三方追踪」。
- **代码复核**：`gtag / analytics / googletagmanager / fbq / hotjar / clarity / plausible` 等第三方脚本扫描**零命中**，与声明一致。
- **结论**：因**无非必要 cookie**（仅基本功能 cookie），依 GDPR 同意 banner **非强制**。列为 P2：保持策略与实际一致；**若未来引入分析/广告，须同步加同意机制**。子站此前无 cookies 页/链接，已通过 footer 链接主站 Cookie Policy 缓解。

### 3. 联系与主体披露 — 🔴 P0（已修复）

- **主站**：footer + contact + legal-notice 三处披露完整——email `landengltd@gmail.com` + WhatsApp `+86 13323237275`；legal-notice 声明「**operated via the contact channels listed on this page**，不公布单独注册法人实体、不虚报注册号」（`en.json:828-833`）。
- **子站**：footer 此前**无联系信息、无运营主体声明**。→ **P0，本批已修复**：4 子站 footer 补齐 email/WhatsApp + 「operated via contact channels」口径声明（与主站一致）。

### 4. 法规免责 — ✅ 齐备

- **market 站**：82 国家页 + 228 组合页模板内**顶部 + 底部双处 disclaimer**（`CountryPage.astro` / `VehicleMarketPage.astro` 的 `<p class="disclaimer">`），文案含「general guidance only, **not legal advice** — consult destination-country authorities」（`en.json footer.disclaimer / country.disclaimer / vehicle.disclaimer`）。四语本地化齐全。
- **主站**：`export-compliance` 法律页存在；export-compliance guide 末尾「not legal advice…confirm with responsible authorities」（`china-used-car-export-compliance.ts:517`）。
- **确认**：82 国页 + 组合页 + 主站免责声明均齐备。

### 5. 商标使用 — ✅ 名义使用

- 品牌名/车型名（BYD/Geely/Chery/Changan 等）在数据层作**事实引用**，属 nominal use。
- companies 站 `VerificationBadge` 明确「**只展示有证据的，不宣称 trusted/certified**」，无「official/authorized/partner」虚假授权暗示。

### 6. 广告 / 加盟披露 — ✅ 无

- 无 affiliate 链接、无赞助内容、无广告（见「外链质量」）。**无需 disclosure。**

### 7. 数据收集披露 — ✅ 一致

- 表单页（`contact` / `request-a-car`）收集 email / WhatsApp；主站 `privacy` + `data-protection` 页描述一致。
- `site.json` `leadEndpoint` 为空（无后端收集脚本），与「静态站、无第三方追踪」声明一致。

---

## 四、分级发现清单汇总

### P0（明确缺陷）— 已全部修复 ✅

| # | 站点 | 问题 | 修复 |
|---|---|---|---|
| P0-1 | data / tools / companies | footer 缺法律页链接、联系信息、运营主体披露 | footer 加主站 Privacy/Terms/Legal Notice/Cookies/Disclaimer 链接 + email/WhatsApp + operated 声明 |
| P0-2 | market | 同上，且需本地化 | footer 加本地化法律页链接（链接主站对应语种页）+ 4 语 i18n 键 |

### P1（风险）— 未修，建议近期处理

| # | 站点 | 问题 | 建议 |
|---|---|---|---|
| P1-1 | tools（11 页） | `WebApplication` + `offers.price:"0"` | 改 `isAccessibleForFree:true` 或删除 `offers` 块 |

### P2（建议）— 可择机优化

| # | 站点 | 问题 | 建议 |
|---|---|---|---|
| P2-1 | 五站 | 无 cookie banner | 当前无非必要 cookie 非强制；**若加分析/广告须同步加同意机制** |
| P2-2 | 子站 | 无本地 cookies 页 | 已通过 footer 链接主站 Cookie Policy；可选建本地页 |
| P2-3 | 全站 | 出站 `rel` 属性不完全统一 | 统一 `rel="noopener noreferrer"`（SourceNote 部分已带 noopener） |

---

## 五、P0 修复记录（本批）

**修复内容**（4 子站，各 2 文件）：

1. `shared/config/config.ts` — 新增 `CONTACT` 常量（email / whatsapp / whatsappLink，与主站 `src/data/site.json` 一致）。
2. `shared/components/Footer.astro` — 新增 legal 区块：
   - 运营主体声明：「China Used Auto Hub is operated via its contact channels; no separately registered corporate entity is published.」
   - 联系：email + WhatsApp（真实触点）。
   - 法律页链接 → 主站 `Privacy / Terms / Legal Notice / Cookies / Disclaimer`。
3. **market 站额外**：`src/i18n/{en,ar,ru,es}.json` 新增 `footer` 本地化键（legalTitle / operated / contact / privacy / terms / legalNotice / cookies / disclaimerPage），法律页链接按当前语种指向主站对应语种页（`/ar/privacy/` 等）。

**验证**：

| 站点 | build 结果 | 页数 |
|---|---|---|
| data | ✅ | 185 |
| market | ✅ | 1248 |
| tools | ✅ | 13 |
| companies | ✅ | 21 |

dist 抽查：market `countries/uae/index.html` footer 含 `operated via its contact channels` + `https://chinausedautohub.com/privacy/`、`/legal-notice/`；`ar/countries/uae/index.html` 含阿拉伯语 `يتم تشغيل China Used Auto Hub` + `chinausedautohub.com/ar/privacy`（本地化法律链接正确）。

---

## 六、附：关键数据规模

- 主站：125 个 `.astro` 页面文件 × 4 语（en 默认 + ar/ru/es 前缀）。
- market：82 国家 × 4 语 = 328 国页 + 228 组合关系 × 4 语 + 静态页 = 构建 1248 页；`relations: 228`，`skipped: 182`。
- data：185 页；tools：13 页；companies：21 页（demo/unverified 记录 noindex + sitemap 排除）。
- 主站法律套件：11 页 × 4 语。
