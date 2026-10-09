# Car2 索引质量终查 — 108 新 URL 索引就绪度报告

日期：2026-10-09
范围：主站 chinausedautohub.com 的 Car2 新增 108 URL（27 页 × en/ar/ru/es 四语）
批次：R2（5 页）· R2b（5 页）· 批A（6 新 + 1 EXPAND）· 批B（7 页）· 批C（3 页）
方法：本地 `dist/` 构建产物逐文件脚本对照 + 线上 chinausedautohub.com 抽样 HEAD/GET

---

## 0. 结论速览（五查全部通过，P0 = 0）

| 检查 | 结果 |
|---|---|
| ① sitemap 覆盖 | **108 / 108**（sitemap-0.xml 全含，108/108 已构建） |
| ② robots meta | 0 意外 noindex（demo 隔离除外，本批新页零 noindex） |
| ② canonical | 108/108 指向正确本地化版本，0 错配 |
| ② hreflang | 27 组 × (en/ar/ru/es + x-default) 全齐，0 断组 / 0 错指 |
| ③ 结构化数据 | 216 JSON-LD 块（108 Article + 108 BreadcrumbList），0 语法错误，0 虚构字段 |
| ④ 线上可访问性 | 10/10 抽样 200 + text/html + 无 CF 错误页，部署与本地构建一致 |
| ⑤ GSC 就绪 | robots.txt 已引用 sitemap-index；提交核对单见 §5 |
| P0 修复数 | **0**（无 sitemap 漏页 / canonical 错 / hreflang 断组，无需重建） |

---

## 1. Sitemap 覆盖（108 / 108）

- `dist/sitemap-index.xml`：1 条 sitemap 索引 → `https://chinausedautohub.com/sitemap-0.xml`。
- `dist/sitemap-0.xml`：全站 **364** 个 `<loc>`（单文件 sitemap，无分片）。
- 脚本对照：27 页 × 4 语 = **108 个预期 URL 全部命中**，0 遗漏。
- dist 实际构建：412 个 `index.html`（非 _astro）= 364 sitemap + 48 demo 车辆详情页（12 台 demo 车 × 4 语，`is_demo` 有意排除，符合 AGENTS.md「Demo 数据 is_demo 标记，上线前清除」纪律）。**48 个排除项全部为 demo 车辆，无合法 indexable 页被误排**。

结论：sitemap 覆盖率 **108/108**，无漏页。

---

## 2. robots / canonical / hreflang

### 2.1 robots meta

108 页全部检查 `<meta name="robots">`：**0 处 noindex**（新页全 `index`，demo 隔离不在本批范围内）。

### 2.2 canonical

108 页 canonical 逐条对照「语言前缀 + 本地路径」：

- 英文无前缀（`/guides/{slug}/`、`/{pillar}/`、`/sourcing/`、`/sourcing/{slug}/`）；
- ar/ru/es 带前缀（`/ar|ru|es/...`）。

结果：**108/108 指向正确本地化版本，0 错配、0 缺失**。

### 2.3 hreflang 四语互指完整性（27 组逐组核对）

每组（27 页）在四语版本中均需含 `en` / `ar` / `ru` / `es` / `x-default` 五个 alternate 链接。脚本逐组核对：

- **27/27 组五链齐全**（0 断组）；
- 各语 alternate `href` 指向对应语言正确 URL（0 错指）；
- `x-default` 统一指向英文版（0 错指）。

结论：hreflang 四语互指完整性 **100%**，五组（R2-R2b-批A-批B-批C）全部通过。

---

## 3. 结构化数据（JSON-LD）

108 页全部抽取 `<script type="application/ld+json">` 块：

| 面 | 结果 |
|---|---|
| 块总数 | 216（108 页 × Article + BreadcrumbList） |
| JSON 语法校验 | **0 语法错误**（全部 `JSON.parse` 通过） |
| @type 分布 | Article ×108 · BreadcrumbList ×108 |
| 虚构字段扫描 | **0**（price/offers/aggregateRating/review/rating/founder/employee/telephone 等均未出现） |

字段复核（抽样含五组代表页）：

- **Article**：`@id` / `headline` / `description` / `mainEntityOfPage` / `author`（Organization，非虚构个人）/ `publisher`（Organization）/ `inLanguage`（正确四语值）。无 price / datePublished 编造 / 虚构作者。
- **BreadcrumbList**：Home → 父级 → 本页三级 `ListItem`，position 连续，`item` 指向真实 URL。

> 说明：WebSite schema 仅挂首页（全站统一 Organization + WebSite），新页按页型使用 Article + BreadcrumbList，符合既有 schema 约定，无遗漏也无不符。

结论：JSON-LD 语法校验 **0 错误**，零虚构字段 **0 命中**。

---

## 4. 线上可访问性（部署产物抽样 10 URL）

抽样覆盖五组 × 四语（HEAD/GET 实测，2026-10-09）：

| URL | 状态 | content-type | CF 错误页 |
|---|---|---|---|
| /guides/how-to-verify-china-used-car-exporter/ (en·R2) | 200 | text/html; charset=utf-8 | 无 |
| /ar/guides/china-used-car-exporter-red-flags/ (ar·R2b) | 200 | text/html; charset=utf-8 | 无 |
| /ru/china-used-car-export-rules/ (ru·R2b) | 200 | text/html; charset=utf-8 | 无 |
| /es/china-used-car-export/ (es·R2b) | 200 | text/html; charset=utf-8 | 无 |
| /guides/2026-china-used-car-export-policy-changes/ (en·A) | 200 | text/html; charset=utf-8 | 无 |
| /ar/guides/used-car-export-after-sales-service-confirmation/ (ar·A) | 200 | text/html; charset=utf-8 | 无 |
| /es/sourcing/byd-sourcing/ (es·B) | 200 | text/html; charset=utf-8 | 无 |
| /ru/sourcing/ (ru·B) | 200 | text/html; charset=utf-8 | 无 |
| /guides/china-used-car-export-payment/ (en·C) | 200 | text/html; charset=utf-8 | 无 |
| /es/guides/china-used-car-export-warranty/ (es·C) | 200 | text/html; charset=utf-8 | 无 |

- **10/10 全部 200**，content-type 正确，无 Cloudflare 错误页。
- 线上 canonical + hreflang 抽查与本地构建一致（示例：R2 guide 五链齐全、ru/sourcing 五链齐全）。

结论：**线上部署已同步本地构建，无滞后**。

---

## 5. GSC 就绪声明 + sitemap 提交核对单

本环境无 GSC API 凭据，无法程序化提交。以下为人工/一键提交核对单。

### 5.1 sitemap URL 清单

| 文件 | URL |
|---|---|
| sitemap index（推荐提交入口） | `https://chinausedautohub.com/sitemap-index.xml` |
| 实际 URL 集 | `https://chinausedautohub.com/sitemap-0.xml`（364 URL，含本批 108） |

### 5.2 robots.txt 引用（已就绪）

```
Sitemap: https://chinausedautohub.com/sitemap-index.xml
```

（`dist/robots.txt` 已生成并含该行，线上 `https://chinausedautohub.com/robots.txt` 可直接供抓取器读取。）

### 5.3 建议在 GSC 提交的分 sitemap 列表

本主站为**单文件 sitemap**（`sitemap-0.xml`），无分片。提交建议：

| # | 提交项 | 说明 |
|---|---|---|
| 1 | `https://chinausedautohub.com/sitemap-index.xml` | 首选入口，GSC 自动发现并抓取 sitemap-0.xml |
| 2 | `https://chinausedautohub.com/sitemap-0.xml` | 可同时直提（幂等，无副作用） |

> 若后续需要分语言/分页型拆片（当前 364 URL 远低于单文件 50,000 上限，无需拆片），再按 `sitemap-guides.xml` / `sitemap-pillars.xml` / `sitemap-sourcing.xml` 拆分提交。当前单文件方案已足够。

### 5.4 一键提交操作步骤（人工）

1. GSC → 侧栏「Sitemap（站点地图）」→ 「新增站点地图」；
2. 填入 `sitemap-index.xml`（或直接 `sitemap-0.xml`）→ 提交；
3. 等待「已发现 364 个网址 / 成功」状态，核对本批 108 URL 出现在「网页索引编制」报告中。

---

## 6. 异常清单

**P0（sitemap 漏页 / canonical 错 / hreflang 断组）：0 项。**

无 P1/P2 需修项。仅以下信息性说明（非缺陷，不阻断索引）：

| 项 | 级别 | 说明 |
|---|---|---|
| 48 个 demo 车辆详情页不在 sitemap | 信息性 | 有意排除（`is_demo` noindex），非漏页 |
| Article schema 未含 datePublished/dateModified | 信息性 | 现有约定不含日期字段，非虚构、非必须；如需可后续补 lastModified（非本批） |

---

## 附录：27 页清单（五组 × 四语 = 108 URL）

### R2（5 页 · Trust/Policy guides）
1. `/guides/how-to-verify-china-used-car-exporter/`
2. `/guides/china-used-car-exporter-due-diligence-checklist/`
3. `/guides/china-used-car-export-contract-checklist/`
4. `/guides/china-used-car-export-payment-risks/`
5. `/guides/china-180-day-used-car-export-rule/`

### R2b（5 页 · 2 pillar + 3 Trust guides）
6. `/guides/china-used-car-exporter-red-flags/`
7. `/guides/how-to-avoid-china-used-car-export-scams/`
8. `/guides/how-to-check-chinese-company-registration/`
9. `/china-used-car-export/`（Knowledge pillar）
10. `/china-used-car-export-rules/`（Policy pillar）

### 批A（7 页 · 6 新 guide + 1 EXPAND）
11. `/guides/how-to-verify-used-car-export-credentials/`
12. `/guides/how-to-verify-a-vehicle-before-payment/`
13. `/guides/used-car-export-after-sales-service-confirmation/`
14. `/guides/china-used-car-exporter-credit-evaluation/`
15. `/guides/china-used-car-export-negative-list/`
16. `/guides/2026-china-used-car-export-policy-changes/`
17. `/guides/vehicle-inspection/`（EXPAND）

### 批B（7 页 · 1 sourcing pillar + 6 topics）
18. `/sourcing/`（pillar）
19. `/sourcing/how-china-used-car-sourcing-works/`
20. `/sourcing/used-car-sourcing-from-china/`
21. `/sourcing/china-ev-sourcing/`
22. `/sourcing/byd-sourcing/`
23. `/sourcing/chinese-suv-sourcing/`
24. `/sourcing/export-ready-vehicle-sourcing/`

### 批C（3 页 · Knowledge cluster closeout）
25. `/guides/china-used-car-export-payment/`
26. `/guides/china-used-car-export-warranty/`
27. `/guides/china-used-car-export-risks/`

> 语言映射：en = 无前缀；ar / ru / es = `/ar|ru|es/` 前缀。每页 4 语 → 27 × 4 = 108 URL。
