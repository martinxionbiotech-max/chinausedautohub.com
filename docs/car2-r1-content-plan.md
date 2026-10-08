# ChinaUsedAutoHub — Car2 内容体系升级 Round 1（只读审计）

> 总纲：`/root/.openclaw/workspace/phase2/51-car2-content-system-prompt.md`
> 本轮边界：**只产出分析，不新建/改写任何页面内容。五仓均只读，无代码改动。**
> 产出：本报告（A–G 全项）+ `docs/content-inventory.csv`
> 日期：2026-10-08

---

## 0. 结论速览（中文紧凑报告）

| 维度 | 数字 |
|---|---|
| 五站 indexable URL（en 基线 + 子站全量） | 主站 67（en 基线，四语≈268）+ data 190 + market 82 国 + 228 组合 + 6 静态 + tools 15 + companies 22 ≈ **611 个独立 URL**（不含四语乘数、不含 noindex demo） |
| Action 分布（本批判定） | KEEP ≈ 588 · EXPAND 6 · REWRITE 0 · MERGE 0 · REDIRECT 0 · NOINDEX 0 · REMOVE 0 |
| 强页（独立信息价值） | 主站 19 guides + 8 services + 8 品牌页 + trust/about/how-it-works；data 120 模型页；market 82 国页+228 组合页；tools 11 计算器；companies 9 上市整车厂 |
| 弱页（应 EXPAND） | market oman / kuwait / russia 三国编辑层 5/11 字段（薄） |
| NOINDEX/REMOVE 候选 | **0**（现有 noindex 均为有意 demo 隔离，符合规范） |
| 缺口集群 | Trust/Company 缺 9/10 · Knowledge pillar 缺 1 hub + 3 篇 · Policy 2026 缺 1 hub + 7 篇 · Sourcing 缺 1 hub + 5 篇 |
| 首批 10 页 | 见 §G（前 5 页 = R2 执行对象） |

**核心判断**：五站基础设施已高度成熟（数据层 120 车型/53 品牌/82 国/228 组合 + 三子站 source/confidence 体系 + 5.2 万互链）。真正缺口不在"清理弱页"，而在**主站缺失 4 个 pillar hub 与 24 篇高价值决策页**——Trust/Company（§4）、Knowledge pillar（§6）、Policy 2026（§8）、Sourcing（§22）。这批内容是把"信息基础设施"升级为"买家信任决策层"的关键，也是当前最强的 topical authority 机会。

---

## 1. §1 全站 Inventory

完整逐 URL 判定见 `docs/content-inventory.csv`（字段：Site/URL/Type/Current Topic/Quality/Search Intent/Business Value/Action）。

### 1.1 主站 chinausedautohub.com（en 基线 67 URL；四语 ≈ 268）

| 分组 | URL 数 | 说明 |
|---|---|---|
| Home / About / Contact / FAQ / How-it-works / Trust | 6 | 全 Strong，KEEP |
| Guides | 19 + 1 索引 = 20 | 全 Strong，KEEP（1 篇 compliance 建议 EXPAND） |
| Services | 8 + 1 索引 = 9 | Good，KEEP |
| Brands | 8 + 1 索引 = 9 | Strong，KEEP |
| Body-types / Powertrains facets | 2 + 5 + 2 索引 = 9 | Thin（facet 页），KEEP |
| Markets 索引 / New-arrivals / Cars 索引 | 3 | markets=Good；new-arrivals/cars=Weak（仅 demo 车），KEEP |
| 法律/合规页 | 11 | Good，KEEP |
| Demo 车辆详情页 | 12（noindex） | Good，KEEP（有意隔离） |

### 1.2 data 站（190 URL）

- 53 品牌页 + 120 模型页 + 120 generations + 126 trims + 4 body-type 相关 + 4 vehicle-types + 索引页 + glossary + vehicle-specifications + 4 法律页。全 KEEP，模型页为 Strong。

### 1.3 market 站（82 国 + 228 组合 + 6 静态 + 法律，四语）

- 82 国家页：**8 优先国全在场**；但 oman/kuwait/russia 编辑层仅 5/11 字段 → **EXPAND ×3**。
- 228 组合页（vehicle-market，全过增量门禁）：Strong，KEEP。
- 静态页 6：duties-taxes / ev-import / ports / shipping-routes / vehicle-age-rules / countries 索引 → KEEP。

### 1.4 tools 站（15 URL）

- 11 计算器 + 4 法律页，全 KEEP。landed-cost / import-duty / vehicle-comparison / market-compatibility 为 Strong。

### 1.5 companies 站（22 URL）

- 12 公司（9 上市整车厂 publicly_listed + 3 demo unverified noindex）+ 4 类别页 + 4 法律页。9 上市整车厂 Strong，KEEP。

### 1.6 Action 统计

| Action | 计数 | 对象 |
|---|---|---|
| KEEP | ≈ 588 | 全部现有 indexable 页 |
| EXPAND | 6 | market oman / kuwait / russia（3）+ 主站 compliance guide（1）+ data 9 款 EI 未填车型（建议，见 §B.5）+ 主站 new-arrivals（建议） |
| REWRITE / MERGE / REDIRECT | 0 | 无 |
| NOINDEX / REMOVE | 0 | 无（现有 noindex 均为 demo 有意隔离） |

---

## 2. A. Existing Content Assessment

### 2.1 强页清单（真正有独立信息价值的页）

| 站 | 页面 | 独立价值 |
|---|---|---|
| 主站 | `/trust/`（13 节 + 8 数据状态标签） | 平台信任方法论，全站信任语义锚点 |
| 主站 | `/how-it-works/`（10 步 + owner 三态标签） | 平台/第三方责任边界，独一无二 |
| 主站 | `/about/`（10 节 + 三分法 distinctions） | E-E-A-T 编辑责任层 |
| 主站 | 19 篇 guides | 每篇 Quick Answer/Key Facts/Detailed/Practical Guidance/Common Mistakes 结构，四语，指向 source 层 |
| 主站 | 8 品牌页（12 节采购视角） | brands.ts + brands-detail.ts 双源，采购决策导向 |
| data | 120 模型页（20 节模型记录 + EI + 验证六态） | 模型线规格 + export intelligence + 溯源五元组 |
| market | 82 国家页（Quick Facts + 法规/税率/年限/港口/组合 + source 五元） | 逐国 China-specific 进口情报，全源可溯 |
| market | 228 组合页（8 delta 字段 + 增量门禁） | Vehicle×Market 独立增量，机械组合已否决 |
| tools | 11 计算器（六要素 + 三分法 + Example + Related 三区） | 决策工具链 8 步 |
| companies | 9 上市整车厂（13 字段 + verification_evidence） | 供应链尽调实体 |

### 2.2 弱页清单（应 EXPAND/REWRITE）

| 站 | 页面 | 证据 | 建议 |
|---|---|---|---|
| market | `/countries/oman/` | countryContent 仅 5/11 字段（缺 commonBrands/brandsSource/recommendSummary/recommendedCharacteristics/marketRisks） | EXPAND（§12 优先国） |
| market | `/countries/kuwait/` | 同上 5/11 | EXPAND（§12 优先国） |
| market | `/countries/russia/` | 同上 5/11 | EXPAND（§12 优先国） |
| 主站 | `/guides/china-used-car-export-compliance/` | 单页承载了 Policy 集群 7 个主题，信息过载 | EXPAND（拆分出 Policy 集群，见 §B.3） |
| 主站 | `/new-arrivals/` | 仅 12 demo 车，无真实库存语义 | 保持现状（诚实原则），真实库存接入后再评估 |
| data | 9 款 `export_relevance == null` 车型 | 111/120 已填，剩 9 款出口情报未填 | 建议下一 EI 回填批补（非本批） |

### 2.3 候选 NOINDEX/REMOVE 清单

**无。** 现有 noindex 页面全部为**有意 demo 隔离**（12 demo 车 + 3 demo 公司），三层标记完整（noindex + title 前缀 + 无 InStock schema），符合"不虚构库存"原则，不应删除。未发现 thin 到需要 noindex/remove 的页面——薄页均为 facet（body-types/powertrains）或有明确升级路径（market 3 国）。

---

## 3. B. Content Gap Analysis（对照总纲集群）

### B.1 Trust / Company 十页集群（§4）— 缺 9/10

| §4 目标页 | 现状 | 判定 |
|---|---|---|
| How to Verify a China Used Car Exporter | 部分覆盖于 `/guides/evaluate-chinese-used-car-supplier/` + `/trust/` | **缺失**（需独立页，聚焦 exporter 验证六态） |
| China Used Car Exporter Due Diligence Checklist | 无 | **缺失** |
| How to Check a Chinese Company's Registration | companies 站有实体，但无"如何查工商注册"指南 | **缺失** |
| How to Verify Used Car Export Credentials | compliance guide 有 enterprise filing 章节 | **缺失**（需独立决策页） |
| How to Verify a Vehicle Before Payment | 部分覆盖 check-mileage / vehicle-inspection | **缺失**（付款前验证动作清单） |
| How to Avoid Used Car Export Scams in China | 无 | **缺失** |
| China Used Car Export Payment Risks | 无 | **缺失** |
| China Used Car Export Contract Checklist | 无 | **缺失** |
| China Used Car Inspection Checklist | `/guides/vehicle-inspection/` 覆盖主体 | **部分存在**（可 EXPAND 加付款前检查清单） |
| China Used Car Exporter Red Flags | 无 | **缺失** |

**结论**：Trust 集群 10 页里 8 页完全缺失、1 页部分存在、1 页主体存在。这是 P0 最高优先级，直接回答买家核心问题 "Can I trust a China used car exporter?"

### B.2 Knowledge pillar + 10 cluster（§6/§7）— 缺 1 hub + 3 篇

**Pillar `/china-used-car-export/` 缺失**。现有 19 篇 guides 分散在 `/guides/`，无统一 pillar hub。

| §7 cluster | 现状 |
|---|---|
| how-to-buy-used-cars-from-china | ✅ `/guides/how-to-buy-used-car-from-china/` |
| export-process | ✅ `/guides/china-used-car-export-process/` |
| export-cost | ✅ `/guides/landed-cost/` |
| export-documents | ✅ `/guides/export-documents/` |
| vehicle-inspection | ✅ `/guides/vehicle-inspection/` |
| shipping | ✅ `/guides/shipping/` |
| **payment** | ❌ **缺失** |
| **warranty** | ❌ **缺失** |
| **export-risks** | ❌ **缺失**（部分覆盖 compliance guide） |
| exporter-verification | ✅ `/guides/evaluate-chinese-used-car-supplier/` |

**结论**：缺 1 个 pillar hub + 3 篇（payment/warranty/export-risks）。7 篇已存在，**按 §2 规则优先升级原页、不新建 URL**。

### B.3 Policy 2026 十页集群（§8）— 缺 1 hub + 7 篇（§2 规则：优先升级原页）

**注意**：主站已有 `/guides/china-used-car-export-compliance/`（覆盖 enterprise filing/180-day/negative list/licence）与 `/export-compliance/` 法律页。按 §2"优先升级原页不建新 URL"：

| §8 目标页 | 现状 | 判定 |
|---|---|---|
| China Used Car Export Rules 2026 | compliance guide 部分覆盖 | **缺失独立页**（建 pillar） |
| China's 180-Day Used Car Export Rule | compliance guide 埋 1 段 | **缺失独立页**（高价值，可独立建） |
| Used Car Export After-Sales Service Confirmation | compliance guide 埋 1 段 | **缺失独立页** |
| China Used Car Export Compliance | ✅ compliance guide + 法律页 | 存在（EXPAND 升级） |
| China Used Car Exporter Credit Evaluation | 无 | **缺失** |
| China Used Car Export Negative List | compliance guide 有 "Restricted and prohibited vehicles" 节 | **部分存在**（可独立建） |
| New Cars Exported as Used Cars | 无 | **缺失** |
| How the 180-Day Rule Affects Buyers | 无 | **缺失** |
| How to Verify Export Compliance | 无 | **缺失** |
| 2026 Policy Changes | 无 | **缺失** |

**结论**：Policy 集群是当前最强 topical authority 机会（180-Day Rule 是 2026 高频搜索实体）。已有一篇 compliance guide 可作升级底座；建议建 1 个 `/china-used-car-export-rules/` pillar + 5 篇高价值独立页（180-Day Rule / After-Sales Confirmation / Credit Evaluation / Negative List / 2026 Changes），其余主题 EXPAND 进现有 compliance guide。

### B.4 Sourcing 七页集群（§22）— 缺 1 hub + 5 篇

主站**无 `/sourcing/` 路由**（现有 8 个 services 在 `/services/`）。

| §22 目标页 | 现状 |
|---|---|
| How China Used Car Sourcing Works | 部分覆盖 `/services/vehicle-sourcing/` | **缺失独立页** |
| Used Car Sourcing From China | 无 | **缺失** |
| China EV Sourcing | 无 | **缺失** |
| BYD Sourcing | 无 | **缺失** |
| Chinese SUV Sourcing | 无 | **缺失** |
| Fleet Vehicle Sourcing | ✅ `/services/fleet-batch-sourcing/` | 存在 |
| Export-Ready Vehicle Sourcing | 无 | **缺失** |

**结论**：缺 1 个 `/sourcing/` pillar + 5 篇。Sourcing 是商业转化层（信息流→inquiry），但优先级低于 Trust/Policy。

### B.5 Market 8 国首批（§12）— 已有 82 国，判定 8 国深度

**8 优先国全在场**：uae / saudi-arabia / oman / kuwait / kenya / tanzania / russia / kazakhstan。

| 国家 | 编辑层字段 | 深度判定 |
|---|---|---|
| uae | 10/11 | ✅ 够深 |
| saudi-arabia | 10/11 | ✅ 够深 |
| kenya | 11/11 | ✅ 够深（全量） |
| tanzania | 10/11 | ✅ 够深 |
| kazakhstan | 10/11 | ✅ 够深 |
| **oman** | **5/11** | ❌ 不够深（缺 commonBrands/brandsSource/recommendSummary/recommendedCharacteristics/marketRisks） |
| **kuwait** | **5/11** | ❌ 不够深 |
| **russia** | **5/11** | ❌ 不够深 |

**结论**：8 国里 5 国已够深，3 国（oman/kuwait/russia）编辑层偏薄需 EXPAND。R3 的"Market 8 国"应聚焦这 3 国的深化 + 5 国做一轮质量复查（confidence 标签分布、source 时效、组合页覆盖）。

### B.6 Data 首批 10–20 车型（§17）— 已有 120 款，判定深度

- 优先品牌（BYD/Geely/Chery/Changan/Haval/GAC/Jetour/MG/Exeed）**全部在 53 品牌池内**。
- 120 车型中 **111 款 `export_relevance` 已填**（EI 回填覆盖 92.5%），120/120 `right_hand_drive_relevance` 已填。
- 9 款 EI 未填：集中在合资中国造国内特供（Toyota/VW/Benz/BMW/Honda/Hyundai/Nissan LWB 特供版 + Buick GL8 + Ford Everest）——按 §b11"broker 目录列名 ≠ 出口证据"纪律，这些**保持 null 是正确的**，非缺口。

**结论**：首批重点车型（BYD Song Plus/Seal、Geely Monjaro/Coolray、Chery Tiggo 8/Arrizo 8、Changan CS75/Uni-V、GAC GS4、Haval H6、NIO ES6、XPeng G6 等）**深度已足够**——均有 20 节模型记录 + EI + 组合页。Data 侧无 P0 缺口，R3 之后可再补少数几款有出口证据的合资车型。

---

## 4. C. Topic Authority Map（主题层级现状与缺口）

```
Main Site (chinausedautohub.com)
├── Knowledge  ──── /guides/ (19 篇)  ⚠️ 无 pillar hub，payment/warranty/risks 3 篇缺
├── Export Policy ─ /guides/china-used-car-export-compliance/ + /export-compliance/  ⚠️ 无 /china-used-car-export-rules/ pillar
├── Sourcing  ──── /services/ (8)  ⚠️ 无 /sourcing/ pillar，5 篇缺
├── Shipping  ──── /guides/shipping/ + /guides/roro-vs-container/ + /guides/fob-vs-cif-vs-cfr/  ✅
├── Inspection  ── /guides/vehicle-inspection/ + /guides/check-used-ev-battery-health/  ✅
├── Export Process /guides/china-used-car-export-process/ + /how-it-works/  ✅
├── Trust/Verification /trust/ + /guides/evaluate-chinese-used-car-supplier/  ⚠️ 9/10 集群缺
│
├── Market (子站)  ── market.chinausedautohub.com  ✅ 82 国 + 228 组合 + 5 对比表
├── Data (子站)  ──── data.chinausedautohub.com  ✅ 120 车型 + 53 品牌 + glossary
├── Tool (子站)  ──── tools.chinausedautohub.com  ✅ 11 计算器
└── Company (子站) ─ companies.chinausedautohub.com  ✅ 9 上市整车厂 + 尽调目录
```

**pillar-cluster 关系现状**：主站 4 大 pillar（Knowledge/Policy/Sourcing/Trust）中 **0 个有显式 pillar hub 页**——cluster 内容存在但缺统一入口。这是权威性建设的首要结构性缺口。

**子站层级已完整**：data（brand→model→generation→trim）、market（region→country→vehicle×country）、tools（工具链 8 步）、companies（category→company）均已形成 pillar-cluster。

---

## 5. D. Internal Linking Map

**现状**（已核实）：5.2 万互链实例 / 1809 去重目标，六向实体图（Vehicle↔Brand↔Market↔Guide↔Tool↔Company）完整，断链 0、陈旧 0。

**新集群所需链接路径差距**：

| 目标路径 | 现状 | 缺口 |
|---|---|---|
| Policy → Company | compliance guide → companies 站仅弱链 | 需 Policy 页 → `/companies/{automaker}/` 强链（§24 指定） |
| Sourcing → Vehicle | 无 `/sourcing/` 页，故无此路径 | 建 Sourcing 页后 → data `/models/{id}/` |
| Trust → Company | `/trust/` 方法论 → companies 站目录 | 需逐页强链（Due Diligence → company 实体） |
| Sourcing → Market | 无 | 建 Sourcing 页后 → market `/countries/{id}/` |
| Policy → Sourcing | 无 | 建两 pillar 后互链 |
| Vehicle → Market / Market → Vehicle | ✅ 组合页双向已有 | 无 |
| Tool → Vehicle / Market / Tool 链 | ✅ Related 三区已落地 | 无 |

**结论**：现有实体图（Vehicle/Market/Tool/Company 四子站互链）已完整；**缺口全部集中在主站新建的 Trust/Policy/Sourcing 三个新 pillar 与既有实体的连接路径**。每建一页需按 §30 建 3–6 条内链（parent/sibling/data/market/tool/company/sourcing）。

---

## 6. E. P0 Content List（§32 最高优先级）

| # | 内容 | 现有页 | 判定 | 优先级 |
|---|---|---|---|---|
| P0-1 | China Used Car Exporter Due Diligence Checklist | 无 | 缺失（新建） | P0 |
| P0-2 | How to Verify a China Used Car Exporter | 部分（evaluate-supplier guide） | 缺失（新建独立页） | P0 |
| P0-3 | How to Avoid Used Car Export Scams in China | 无 | 缺失（新建） | P0 |
| P0-4 | China Used Car Exporter Red Flags | 无 | 缺失（新建） | P0 |
| P0-5 | China's 180-Day Used Car Export Rule | 埋 1 段于 compliance guide | 缺失独立页（新建） | P0 |
| P0-6 | China Used Car Export Rules 2026（Policy pillar） | 部分（compliance guide） | 缺失 pillar（新建） | P0 |
| P0-7 | China Used Car Export Contract Checklist | 无 | 缺失（新建） | P0 |
| P0-8 | China Used Car Export Payment Risks | 无 | 缺失（新建） | P0 |
| P0-9 | How to Verify a Vehicle Before Payment | 部分（check-mileage/inspection） | 缺失（新建） | P0 |
| P0-10 | China Used Car Export Guide（Knowledge pillar） | 无 | 缺失 pillar（新建） | P0 |
| P0-11 | China Used Car Export Compliance（升级） | ✅ compliance guide | 需升级（EXPAND） | P0 |
| P0-12 | How to Check a Chinese Company's Registration | 无 | 缺失（新建） | P0 |
| P0-13 | How to Verify Used Car Export Credentials | 部分 | 缺失（新建） | P0 |

---

## 7. F. P1 Content List

| # | 内容 | 现状 | 判定 |
|---|---|---|---|
| P1-1..8 | Market 8 国深化（oman/kuwait/russia EXPAND + 5 国质量复查） | 8 国在场 | 升级 3 国 + 复查 5 国 |
| P1-9 | Landed Cost 深化 | ✅ tools landed-cost + guide | 已存在，复查 |
| P1-10 | Vehicle Inspection（付款前清单） | ✅ guide | EXPAND 加付款前检查清单 |
| P1-11 | Shipping | ✅ 3 篇 | 已存在 |
| P1-12 | Documents | ✅ guide + service | 已存在 |
| P1-13 | Sourcing pillar `/sourcing/` | 无 | 缺失（新建，P1 末位） |

---

## 8. G. First 10 Pages to Produce（首批清单）

> 前 5 页 = **R2 执行对象**（本轮不写，仅计划）。字段表如下。

| # | URL | Page Type | Primary Topic | Search Intent | Target Audience | Primary Question | Business Value | Required Sources | Related Market | Related Vehicle | Related Tool | Existing Page | Action | Priority |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `/guides/how-to-verify-china-used-car-exporter/` | Guide (Trust) | 出口商验证方法 + 六态 | Commercial Investigation | 海外 B2B 买家/采购代理 | "How do I verify a China used car exporter is legitimate?" | 直接解决信任核心问题，最高转化 | MOFCOM 备案平台说明；工商查询公开渠道；trust.ts 六态 | market 相关国 | data 车型 | companies 目录 | evaluate-chinese-used-car-supplier（部分） | 新建（与现有 guide 差异化：聚焦"验证六态"动作） | P0 · R2 |
| 2 | `/guides/china-used-car-exporter-due-diligence-checklist/` | Guide (Trust) | 尽调清单（可勾选） | Commercial Investigation | 采购经理/合规 | "What should I check before paying an exporter?" | 决策清单，高复用 | §4 清单 + companies 13 字段 | market 国 | — | exporter risk 工具（未来） | 无 | 新建 | P0 · R2 |
| 3 | `/guides/china-used-car-export-contract-checklist/` | Guide (Trust) | 合同要点清单 | Commercial Investigation | 采购/法务 | "What terms protect me in a China export contract?" | 付款前防护，高转化 | 合同要素 + 免责 | market 国 | — | — | 无 | 新建 | P0 · R2 |
| 4 | `/guides/china-used-car-export-payment-risks/` | Guide (Trust) | 付款风险 + 支付方式 | Commercial Investigation | 买家 | "How do I pay a China exporter without being scammed?" | 付款环节风险防护 | 支付方式 + 风险信号 | — | — | — | 无 | 新建 | P0 · R2 |
| 5 | `/guides/china-180-day-used-car-export-rule/` | Guide (Policy) | 180-Day 规则（2026 新政） | Informational + Commercial | 买家/出口商 | "What is China's 180-day used car export rule?" | 2026 最强政策搜索实体，topical authority | 商贸函〔2025〕648号 + 25号 + 6号公告 | 全部出口国 | 受影响车型 | — | china-used-car-export-compliance（埋 1 段） | 新建独立页（拆分） | P0 · R2 |
| 6 | `/china-used-car-export-rules/` | Pillar (Policy) | 2026 出口政策总览 | Informational | 全部买家 | "What are the 2026 China used car export rules?" | Policy 集群枢纽，权威性锚点 | 官方文件清单 | 全部国 | — | — | 无 | 新建 pillar | P0 · R2 后 |
| 7 | `/guides/china-used-car-exporter-red-flags/` | Guide (Trust) | 红旗信号清单 | Commercial Investigation | 买家 | "What red flags signal a scam exporter?" | 防骗核心 | §4 红旗 + 案例 | — | — | — | 无 | 新建 | P0 |
| 8 | `/guides/how-to-avoid-china-used-car-export-scams/` | Guide (Trust) | 防骗指南 | Commercial Investigation | 买家 | "How do I avoid used car export scams from China?" | 高搜索量防骗内容 | §4 + 红旗 | — | — | — | 无 | 新建 | P0 |
| 9 | `/guides/how-to-check-chinese-company-registration/` | Guide (Trust) | 工商注册查询 | Commercial Investigation | 采购/尽调 | "How do I check a Chinese company's registration?" | 尽调前置动作 | 工商公开查询渠道（不虚构） | — | — | companies 目录 | 无 | 新建 | P0 |
| 10 | `/china-used-car-export/` | Pillar (Knowledge) | 出口知识枢纽 | Informational | 新买家 | "Complete guide to buying and exporting used cars from China?" | Knowledge 集群枢纽 | 19 guides 汇总 + 子站链 | 全部国 | 全部车型 | 全部工具 | 无 | 新建 pillar | P0 |

**R2 执行边界（前 5 页）**：Trust 决策页 ×4（#1–#4）+ Policy 180-Day 页 ×1（#5）。每页按 §28 结构（Title→Direct Answer→Key Facts→What This Means for Buyers→Detailed→Table→Example→Risks→Checklist→Sources→Last Updated→Related），四语同步（§31：阿拉伯语重点 UAE/Saudi，俄语重点 Russia/CIS，西语保持核心页），引用官方来源、零编造（§5/§9）。

---

## 9. 附：本轮硬约束遵守声明

- ✅ 五仓只读，无任何代码/页面/数据改动（本报告 + CSV 落在主站 `docs/`，属分析文档非页面内容）。
- ✅ 未新建/改写任何 indexable 页面。
- ✅ 未虚构资质/库存/资质/公司（弱页判定均基于现有文件实测）。
- ✅ 遵守 §2：优先升级原页（Policy 集群标注 EXPAND 而非盲目新建）。

### 报告路径
- 本报告：`chinausedautohub.com/docs/car2-r1-content-plan.md`
- 清单：`chinausedautohub.com/docs/content-inventory.csv`
