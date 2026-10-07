# Car2 Phase 1 — 五站内容审计 + 直接修复

日期：2026-10-07
范围：主站 chinausedautohub.com + 四子站 data / market / tools / companies（按总纲 §1/§11/§12/§13）
方法：逐站抽检（主站 40 页 + 子站各 20 页），发现问题当场修，不只出报告。

## 一、扫描覆盖

| 站点 | 抽检页数 | 关键面 |
|---|---|---|
| 主站 | 40（EN 全核心页 + 抽查 ar/ru/es） | 首页/品牌/车型/车辆详情/body-types/powertrains/markets/services/guides/faq/trust/legal/404 |
| data | 20（模型页 + 品牌页 + 索引页 + 术语/规格参考） | 120 车型 · 53 品牌 · Related Markets/Guides/Tools/Vehicles |
| market | 20（国家页 + 组合页 + 静态页 + 三语） | 82 国×4 语 · 228 组合 · Related Tools/Guides · Vehicle×Country |
| tools | 20（11 计算器 + 索引 + 法律页） | Related vehicles/countries/tools · Next steps · 六要素 |
| companies | 20（11 公司 + 类别页 + 法律页） | Company Intelligence · demo 隔离 · Related brands/markets |

## 二、缺陷发现清单

### 缺陷 1（P0，market 仓）：`vehicle.misc.inCountry` 渲染残留

**现象**：market 组合页（`VehicleMarketPage.astro`）"Related" 区两处交叉链接锚文本渲染成字面量 `vehicle.misc.inCountry`，而非「{model} in {country}」——共 **912 个 HTML 文件**（228 组合 × 4 语）中招。

**根因**：`misc()` helper 定义为 `t(dict, 'vehicle.misc.${k}', v)`，但 `inCountry` 键只存在于 `country.misc.inCountry`（CountryPage 用的是 `country.misc.` 前缀的独立 `misc` 定义）。`t()` 对缺失键回落为键名字面量，于是渲染出 `vehicle.misc.inCountry`。

**修复**：两处 `misc("inCountry", …)` 改为 `t(dict, "country.misc.inCountry", …)`，与数据键对齐。

**验证**：`grep -rl "vehicle.misc.inCountry" dist/` = 0；es 样例渲染为「Atto 3 en Kenya」。

### 缺陷 2（P1，market 仓）：空 "Known limitations" `<ul>`

**现象**：组合页「Known limitations」节在无 hard blocker 时渲染空 `<ul>`——共 **23 个 HTML 文件**。因为原回退条件 `!rel?.drive_side_fit?.status && !rel?.age_rule_fit?.status && !rel?.ev_charging_compat?.needs_adapter` 只在三个字段全空时成立，而绝大多数关系 `drive_side_fit.status` 是 `match`/`needs_conversion`（非空），导致 `limitationNone` 永不触发。

**修复**：新增 `hasLimitations` 布尔（mismatch / borderline / ineligible / needs_adapter 任一为真），回退改为 `{!hasLimitations && <li>limitationNone</li>}`。

**验证**：`<ul></ul>` 空列表残留 = 0（全 1264 页）。

### 缺陷 3（复核通过，无需修）：demo 库存信号三层标记

12 台 demo 车 + 3 家 demo 公司均完整：
- 主站 12 台 demo 车：详情页 `noindex,follow` ✓ · `<title>` 前缀 `Example Vehicle Listing —` ✓ · 页内 `DEMO DATA` 徽章 + `Example price` 注记 ✓ · JSON-LD 无 `availability`（0 处 InStock）✓ · sitemap 排除详情页（260 URL 中 0 泄漏）✓
- companies 3 家 demo 公司：详情页 `noindex` ✓ · 类别页 `isDemo()` 过滤（0 泄漏，显示 "No verified listings yet"）✓ · sitemap 排除 ✓
- mark-real 机制就绪：`update-vehicle.mjs` mark-real 翻转 is_demo 自动去 noindex/title 前缀/demo 横幅，URL 不变；与未来真实库存无 URL/entity 冲突。

### 缺陷 4（复核通过，无需修）：空 Related 模块

各站 Related 区均达标（每页 2–4 实体）：
- data 模型页：Related Markets（23 车型有映射，其余门控隐藏）+ Guides（6–7）+ Tools（4–7）+ Vehicles（同品牌多车型）——抽检 byd-song-plus markets=3/guides=7/tools=7
- market 国家页：Related Tools（4）+ Related Guides（6）恒渲染 + Vehicle×Country 组合区（按 relations 门控）
- tools 计算器：Related vehicles/countries/tools 每页 2–4 实体 + Next steps 四链
- companies 整车厂：Company Intelligence 关系区（`isAutomaker` 门控）
- 主站车辆详情页/品牌页：Related Guides 区块在场

### 缺陷 5（复核通过，无需修）：重复模板 / 程序化页

- 30 个 Kenya 组合页「h1 + verdict + drive-side」签名全部唯一（30/30），无机械重复
- 全站 `<meta name="description">` 无重复（逐页唯一）
- 全站无空 `<ul>/<ol>`（脚本/样式剥离后扫描 = 0）
- 无 `[object Object]` / `undefined` / `NaN` / `{未替换变量}` 渲染残留（残留的 `NaN`/`undefined` 均为源码里的 `Number.isNaN`/`?? undefined` 合法 TS）

## 三、修复清单（按仓）

| 仓 | 修复内容 | 文件 | 影响页数 |
|---|---|---|---|
| market | 修复 `vehicle.misc.inCountry` 字面量残留 | src/templates/VehicleMarketPage.astro | 912 |
| market | 修复空 "Known limitations" `<ul>` | src/templates/VehicleMarketPage.astro | 23 |

主站 / data / tools / companies：无缺陷，零改动。

## 四、§11 索引质量门（七检查）

对新增/抽检页逐项评估：

| 检查 | 结果 |
|---|---|
| Content Value | 通过——所有抽检页有独立信息价值 |
| Duplicate | 通过——无重复 description/正文签名 |
| Template Similarity | 通过——组合页经增量门禁，签名唯一 |
| Entity Completeness | 通过——无据字段显示 Not available，不编造 |
| Source | 通过——market 每条声明带 source+confidence+checked_date |
| Internal Link | 通过——交叉链接 URL 约定（尾斜杠/单段/单数域）核对无误 |
| Indexability | 通过——demo 页 noindex + sitemap 排除；无新增低价值页 |

**noindex 处理清单**：本批无新增需 noindex 的页。既有 noindex 均为有意保留（主站 demo 车详情、companies demo 公司详情、各站 404）。

## 五、未修项及原因

无。发现的 2 处缺陷均已当场修复并验证。

## 六、结论

Phase 1（技术/模板/placeholder/空模块）审计完成。生态整体健康：demo 三层标记、数据门禁、交叉链接、Schema、多语均已就绪。真实缺口集中在 market 组合页模板——2 处渲染缺陷（912 页字面量残留 + 23 页空模块），已最小化修复并重建验证（1264 页全部通过）。
