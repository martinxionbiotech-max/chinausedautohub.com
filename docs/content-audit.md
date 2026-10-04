# ChinaUsedAutoHub — Phase 3.1 全站 Content Audit（只审计，未改任何文件）

> 审计日期：2026-10-04　|　范围：五仓本地仓库（主站 + data/market/tools/companies 四子站）
> 依据：`phase2/45-car-export-phase3-content-prompt.md` §1–§7 / §17 / §20–§21 + 主仓 AGENTS.md（四语同步规则）
> 硬约束遵守：**本批仅审计 + 写报告，未修改任何仓库文件**。本报告为唯一产出物。
> 主仓路径：`/root/.openclaw/workspace/repos/chinausedautohub.com`

---

## 0. 结论速览（中文紧凑报告）

| 维度 | 结论 |
|---|---|
| 五仓页面总数（英文规范 URL，不含四语副本） | **171**（主站 65 · data 47 · market 27 · tools 12 · companies 20） |
| 主站四语规模 | 主站 65 EN 页 ×4 语 ≈ **260 渲染页**（en 无前缀 + `/ar/` `/ru/` `/es/`）；四子站纯英文 |
| A（保留并深化） | **116** |
| B（合并/重新定位） | **22** |
| C（补充） | **6** |
| D（删除/避免扩张） | **7** |
| E（Tool/Data/Reference） | **20** |
| A/B/C 名单要点 | 见 §2；**B 级是 Phase 3.2 主战场**（机械模板页 + 冗余聚合页） |
| 六组 overlap 判定 | 全部 **Differentiate/Reposition**（无 Merge、无 Redirect）——六页边界清晰但互相越界，见 §3 |
| 决策主题覆盖矩阵（13 Buyer Decision） | 覆盖 1 / 部分 8 / **缺失 4**（§4） |
| Original Expertise（8 主题） | 覆盖 0 / 部分 4 / **缺失 4**（§4） |
| EV 知识缺口数（§10 四块） | Battery 3 · Vehicle 3 · Compatibility 4 · Export Risks 3 ≈ **13 项**（§5） |
| HIGH 优先级项数 | **18**（§7） |
| 审计文档路径 | `chinausedautohub.com/docs/content-audit.md`（本文件） |

> 架构事实：四子仓 `shared/`（components + data + config）经 md5 校验完全相同（9 data 文件 + 5 组件），「一套共享层 × 4 份物理拷贝」，任何改动需四仓同步。数据所有权按站分：DATA 维护 brands/models，MARKET 维护 countries/importrules/taxrules/ports/routes，COMPANIES 维护 companies，TOOLS 维护 fx。
>
> 提示：总纲 §1 声称主站「6 services」，实测为 **5 services**（vehicle-sourcing / vehicle-inspection / export-documentation / shipping / port-handling）。

---

## 1. 全站内容清单（§2 十二维）

> 列说明：Depth 记 `词数w/节数s`（主站 guide 为英文权威文本词数；模板页记结构完整度）。"结构完整度" 按 WHAT/WHY/HOW/WHEN/WHEN-NOT/RISK/DECISION/EVIDENCE/CONCLUSION 九问衡量：🟢全 / 🟡部分 / 🔴仅 WHAT+HOW。

### 1.1 主站 chinausedautohub.com（65 EN 页）

**（a）核心实体/商业页**

| URL | Title | Purpose | Primary Topic | Search Intent | Entity | Supporting Entities | Current Depth | Duplicate/Overlap | Missing Info | Internal Link Opps | Data-Source Req | Action |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/` | China Used Car Export — 首页 | 商业入口 + 生态枢纽 | 平台总览 | 商业/导航 | Organization `/#organization` | 品牌·车型·市场·工具·指南 | 🟡 完整但浅 | 与 /cars/ /guides/ /markets/ 概览重复链接 | — | 保持既有四向链接 | site.json 真源 | **A** 保留，微调 |
| `/cars/` | 库存浏览 | 浏览 12 台 demo 车 | 车辆清单 | 商业/浏览 | ItemList | 品牌·车型 | 🟡 薄（12 demo） | 与 `/new-arrivals/` 按时间重叠 | 真实库存后需筛选项 | → `/brands/` `/body-types/` `/powertrains/` | vehicles.json（脚本门禁） | **A** |
| `/cars/[brand]/` | 品牌库存过滤 | 按品牌浏览车辆 | 品牌×库存 | 商业/浏览 | Brand | 车型·车辆 | 🔴 仅 WHAT+HOW | 与 `/brands/[brand]/` 重叠（同为品牌聚合） | 无品牌知识叙述（应回链品牌页） | → 对应 `/brands/{slug}/` | — | **A**（保留，作为过滤视图） |
| `/cars/[brand]/[model]/[inventoryId]/` ×12 | 车辆详情 | 单台车详情 + 验证六态 | 车辆实体 | 交易/评估 | Vehicle `#vehicle` + Product | 品牌·车型·市场·工具 | 🟡 完整（description/condition/history/inspection/battery/documents/export/shipping/destination/faq） | 与 data `/models/{id}/` 规格部分重叠 | demo 车字段大量 `null`（condition/battery_health/accident）——正常，勿补 | → data `/models/{id}/`、market 目标国、tools landed-cost | vehicles.json verification 六态 | **A** 保留；接入真实库存走 mark-real |
| `/brands/` | 品牌目录 | 8 品牌入口 | 品牌列表 | 浏览 | ItemList | 品牌 | 🔴 仅列表 | — | 品牌对比视角（谁适合出口） | → 各品牌页 | brands.json | **A** |
| `/brands/[brand]/` ×8 | 品牌落地页 | 品牌知识 + 可购车辆 | 品牌实体 | 信息/浏览 | Brand `/#brand-{slug}` | 车型·车辆·市场·工具 | 🟡 有 whyConsider/chinaPosition/exportConsideration 三知识字段 | 与 `/cars/[brand]/` 车辆列表重叠 | 品牌→公司实体链接（company 站）缺失 | → company `/companies/{id}/`、data `/brands/{id}/` | brands.json + 公开市场知识 | **A** 保留深化（补公司实体链） |
| `/markets/` | Popular Markets 概览 | 7 市场入口 + 链到 market 站 | 市场概览 | 导航 | ItemList | 市场 | 🔴 仅概览 | 与 market 站 countries 页（正确：主站不复制） | — | → market `/countries/{slug}/` | markets.json | **A**（保持薄，纯导航） |
| `/body-types/` + `/body-types/[type]/` ×2 | 车身类型页 | suv/sedan 浏览 | 车身类型 | 浏览 | DefinedTerm | 车型·品牌·动力 | 🔴 仅 2 类型 + 描述 | 与 data `/vehicle-types/suv|sedan/` 定义重叠 | 类型定义应让位 data 站 | → data `/body-types/` `/vehicle-types/` | body-types.json | **B**（重定位为浏览过滤，知识让位 data） |
| `/powertrains/` + `/powertrains/[type]/` ×5 | 动力类型页 | ev/phev/hybrid/petrol/diesel 浏览 | 动力类型 | 浏览 | DefinedTerm | 车型·品牌 | 🔴 描述浅 | EV/PHEV 页与 EV guide + data powertrains + market ev-import 重叠 | 动力定义应让位 data 站 | → data `/powertrains/`、EV guide | powertrains.json | **B**（同 body-types） |
| `/new-arrivals/` | 最新车源 | 按时间排序车源 | 库存视图 | 浏览 | ItemList | 车辆 | 🔴 极薄（≈ /cars/ 重排） | 与 `/cars/` 高度重叠 | 无独立信息增量 | 并入 /cars/ 或加 sort | — | **B**（合并进 /cars/ 排序视图） |
| `/how-it-works/` | 商业流程 | 5 步 + 4 服务区 + FAQ | 平台流程 | 商业 | WebSite | 服务·指南 | 🟡 但 5 步与 How-to-Buy 决策步骤重叠 | **与 How to Buy guide 严重重叠**（见 §3-组1） | 缺少「为什么走平台」的差异化 | → how-to-buy guide、services | — | **A**（Reposition 为纯平台流程，见 §3） |
| `/trust/` | Trust & 验证 | 六态验证 + 信息收集政策 | 信任/溯源 | 信息 | WebPage | 车辆·数据 | 🟢 完整（六态+9 字段+政策） | — | 子站（data/market/companies）溯源术语未完全对齐（见 §5/§7） | → 各验证示例页 | trust-terminology.md | **A** 保留深化（跨站术语统一是 3.10） |
| `/faq/` | 买家 FAQ | 买家常见问题 | FAQ | 信息 | FAQPage | — | 🟡 合理 | 与 how-it-works FAQ、guide 内 FAQ 有少量重复 | — | → guides、how-it-works | — | **A**（保持，勿扩成 FAQ Farm） |
| `/contact/` | 联系 | 邮件/WhatsApp + 询车表单 | 转化 | 交易 | ContactPoint | — | 🟢 完整 | — | — | → `/cars/` | site.json 真实触点 | **A** |
| `/about/` | 关于 | 平台介绍 | E-E-A-T | 信息 | Organization | — | 🔴 极薄（仅 title/contact） | — | **团队/方法/来源/纠正机制缺失**（E-E-A-T 核心） | → trust、guides | 真实团队信息 | **A** 保留深化（Phase 3.10 重点） |
| `/terms/` `/privacy/` `/cookies/` | 法律 | 法律条款 | 合规 | 参考 | WebPage | — | 🟢 完整 | — | — | — | — | **E**（Reference） |

**（b）Guides（8 篇，src/i18n/guides/）**

| URL（slug） | Title | Purpose | Primary Topic | Search Intent | Entity | Current Depth（en 词数/节数） | 结构完整度 | Duplicate/Overlap | Missing Info（相对 Phase 3 §4 要求） | Internal Link Opps | Data-Source Req | Action |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/guides/how-to-buy-used-car-from-china/` | How to Buy a Used Car from China | 买家决策流程 | 买家决策 | 决策 | Article | 1095w / 21s | 🟡 有 8 步 + 常见错误 + 问题清单 + 术语表 | **与 /how-it-works/ 5 步重叠** | 缺 Decision Framework（商业适配度公式）、缺「何时拒绝一辆车」、缺「低价车为何未必是好出口车」 | → how-it-works、inspection、landed-cost、tools | — | **A** 深化（加 Decision Framework + 例外 + 拒绝条件） |
| `/guides/china-used-car-export-process/` | China Used Car Export Process | 出口操作流程 | 出口操作 | 信息 | Article | 824w / 19s | 🟡 完整但泛 | **与 export-documents + shipping 两 guide 重叠**（文档/运输章节重复） | 缺操作级角色分工表、缺时间线可视化 | → export-documents、shipping | — | **A**（Reposition 为高层编排，细节让位专篇） |
| `/guides/vehicle-inspection/` | Vehicle Inspection | 车辆风险评估 | 检查/风险 | 决策 | Article | 879w / 18s | 🟡 有 EV 检查 + 红旗 + 里程核验 | 与 service `vehicle-inspection` 重叠（商业 vs 方法，需区分） | 缺「何时拒绝」显式框架（仅红旗列表） | → inspection service、data models、trust | — | **A** 深化（补拒绝阈值/风险分级） |
| `/guides/export-documents/` | Export Documents | 出口单证 | 单证 | 信息 | Article | 817w / 20s | 🟡 有清单 + 错误 + 保留期 | 与 export-process「文档」章 + market `/documents/` 重叠 | 缺按目的国的单证差异矩阵（应链 market） | → market `/documents/`、export-process | — | **A** 深化（按国单证差异） |
| `/guides/shipping/` | Shipping | 运输方式 | 运输 | 信息 | Article | 820w / 19s | 🟡 有 RoRo/集装箱/承运人对比 | 与 FOB guide「freight/insurance」重叠 | 缺 RoRo vs 集装箱决策矩阵强化 | → tools shipping-estimator、market ports/routes | — | **A** 深化（决策矩阵） |
| `/guides/fob-vs-cif-vs-cfr/` | FOB / CFR / CIF | 贸易术语 | Incoterms | 决策 | Article | 941w / 17s | 🟡 有风险转移 + 费用分摊 | **与 landed-cost「成本构成」+ shipping「运费保险」重叠** | **缺 Incoterm Decision Matrix**（§11 明确要求：自备货代/卖方安排/买保险/老手/新手/单车/多车/集装箱/RoRo 九情形） | → landed-cost、tools fob-cfr-cif-calculator | — | **A** 深化（补 Incoterm Decision Matrix） |
| `/guides/landed-cost/` | How to Estimate Landed Cost | 成本方法论 | 落地成本 | 决策 | Article | 896w / 20s | 🟡 有成本构成 + 分步 + 示例 | 与 FOB guide 部分重叠 | 缺 fixed/variable/destination-dependent/vehicle-dependent 成本分类（§12 明确要求） | → tools landed-cost/import-duty/ev-import-cost | taxrules.json（税率真源） | **A** 深化（补成本分类 + 链工具） |
| `/guides/buying-chinese-evs-for-export/` | Buying Chinese EVs for Export | EV 出口知识 | EV | 决策 | Article | 724w / 18s | 🟡 有电池/充电/兼容性章节 | 与 market `/ev-import/`、data `/vehicle-types/ev/` 重叠 | **缺 SOH/可用容量/衰减曲线/电池化学/GB-T vs CCS 充电标准/软件 OTA 区域锁**（§5 详列） | → market ev-import、data EV models、tools ev-import-cost | — | **A** 深化（EV Knowledge Framework 主承载，§10） |

**（c）Services（5 篇，src/i18n/services.ts）**

> 结构统一：whatIs / whoFor / included / notIncluded / infoRequired / nextSteps 六节（每篇四语）。🟢 六问齐全。

| URL | Title | Purpose | Entity | Duplicate/Overlap | Action |
|---|---|---|---|---|---|
| `/services/vehicle-sourcing/` | Vehicle Sourcing | 商业服务 | Service | 与 how-to-buy「sourcing」步骤重叠 | **A**（商业 vs 知识区分，互链） |
| `/services/vehicle-inspection/` | Vehicle Inspection | 商业服务 | Service | 与 inspection guide 重叠 | **A**（互链，guide=方法/service=条款） |
| `/services/export-documentation/` | Export Documentation | 商业服务 | Service | 与 export-documents guide 重叠 | **A** |
| `/services/shipping/` | Shipping | 商业服务 | Service | 与 shipping guide 重叠 | **A** |
| `/services/port-handling/` | Port Handling | 商业服务 | Service | 与 shipping guide 部分重叠 | **A** |

### 1.2 data 站 data.chinausedautohub.com（47 页）

| URL | Purpose | Primary Topic | Entity | Current Depth | Duplicate/Overlap | Missing Info | Action |
|---|---|---|---|---|---|---|---|
| `/` | 数据站枢纽 | 车型库入口 | WebSite | 🟡 完整 | — | — | **A** |
| `/models/` | 车型索引 | 20 车型列表 | ItemList | 🔴 列表 | — | 按品牌/动力/车身筛选 | **A** |
| `/models/[model]/` ×20 | 车型实体页 | 品牌→代→trim→spec | Vehicle | 🟡 有 generation/trim/spec 表 + SourceNote + Export Considerations + China Market Position | 与主站车辆页规格重叠（可接受） | 缺 charging info 完整性、缺「Export Considerations」逐车型深度、缺 related markets 结构化 | **A** 深化（Vehicle Intelligence Database，§6） |
| `/brands/` + `/brands/[brand]/` ×16 | 品牌页 | 品牌实体 | Brand | 🟡 有 powertrain/body-type/models 聚合 | 与主站 8 品牌页重叠（16 vs 8 覆盖） | 主站仅 8 品牌有对应，data 16 品牌（含 toyota/vw/bmw/mercedes/honda/hyundai） | **A** |
| `/body-types/` | 车身类型定义 | 类型参考 | DefinedTerm | 🟡 5 类型定义 | 与主站 body-types 重叠 | — | **E**（Reference） |
| `/powertrains/` | 动力类型定义 | 动力参考 | DefinedTerm | 🟡 4 类型定义 | 与主站 powertrains 重叠 | — | **E** |
| `/vehicle-types/ev/` `/vehicle-types/hybrid/` | EV/混动列表 | 动力筛选 | CollectionPage | 🟡 有定义 | 与 powertrains 定义重叠 | — | **A**（EV/hybrid 是 EV 知识框架承载） |
| `/vehicle-types/suv/` `/vehicle-types/sedan/` | SUV/轿车列表 | 车身筛选 | CollectionPage | 🔴 薄 | 与 body-types 重叠 | — | **B**（合并进 body-types 或保留为纯筛选） |
| `/glossary/` | 术语表 | 20 术语 | DefinedTermSet | 🟢 完整（20 term） | — | 可加 SOH/battery chemistry/GB-T 术语 | **E**（Reference） |
| `/vehicle-specifications/` | 规格字段说明 | 字段参考 | FAQPage | 🟢 完整 | — | — | **E**（Reference） |

### 1.3 market 站 market.chinausedautohub.com（27 页）

| URL | Purpose | Primary Topic | Entity | Current Depth | Duplicate/Overlap | Missing Info | Action |
|---|---|---|---|---|---|---|---|
| `/` | 市场枢纽 | 7 国入口 | CollectionPage | 🟡 完整 | — | — | **A** |
| `/countries/` | 国家索引 | 7 国 | ItemList | 🔴 列表 | — | — | **A** |
| `/countries/[country]/` ×7 | 国家情报页 | 法规/税/年限/驾驶侧/港口 | Article | 🟢 完整（overview + 法规 + 税 + 官方来源 + FAQ + popular models） | — | 缺 Vehicle Segment Fit/Buyer Profile/Risks/Landed Cost 结构化（§8 清单项部分缺失） | **A** 深化（Market Intelligence） |
| `/countries/[country]/ev/` ×7 | 各国 EV 子页 | EV 规则 | Article | 🔴 薄（机械模板，evNote+ev_rules 复用） | **与 `/ev-import/` 中心页重叠**；7 页机械生成 | 无独立信息增量 | **B**（合并进国家页 EV 区 + 单一 ev-import 中心） |
| `/countries/[country]/suv/` ×2（kenya/nigeria） | 各国 SUV 子页 | SUV 规则 | Article | 🔴 极薄（仅 2 国，机械模板） | 与国家页重叠 | 无独立增量 | **D**（避免扩张，折叠进国家页） |
| `/countries/kenya/byd-song-plus/` | 硬编码组合页 | 单车型×肯尼亚 | Article | 🟡 有规格+兼容性 | 与 data `/models/byd-song-plus/` + 国家页重叠 | 无独立增量（机械组合反模式，§7） | **B**（作为 Vehicle×Market 模板试点，勿机械复制） |
| `/documents/` | 单证要求 | 跨国单证聚合 | CollectionPage | 🔴 薄（从 importrules 抽取） | 与国家页 + 主站 export-documents guide 重叠 | 无独立增量 | **B**（合并/重定位） |
| `/duties-taxes/` | 税率对比 | 跨国关税对比 | CollectionPage | 🟡 有对比表 | 与国家页税表重复（双源） | 需保证 taxrules.json 单一真源 | **A**（对比视角有价值） |
| `/ev-import/` | EV 进口中心 | EV 政策对比 | Article | 🟡 有政策/税率/国别 | 与各国 ev 子页重叠 | 可深化为 EV 知识框架的一部分 | **A**（EV 知识框架承载） |
| `/import-guides/` | 按国规则聚合 | 全规则重排 | CollectionPage | 🔴 薄（rules 重排） | 与国家页近乎重复 | 无独立增量 | **B**（合并进 countries 索引） |
| `/ports/` | 港口数据 | 15 港口 | CollectionPage | 🟡 参考数据 | — | — | **E** |
| `/regions/` | 区域分组 | 3 区域 | CollectionPage | 🔴 极薄 | 与首页按区域分组重叠 | 无独立增量 | **D**（删除/并入首页） |
| `/shipping-routes/` | 航线数据 | 12 航线 | CollectionPage | 🟡 参考数据 | — | — | **E** |
| `/vehicle-age-rules/` | 年限规则对比 | 跨国年限对比 | CollectionPage | 🟡 有对比 | 与国家页年限重复 | — | **A**（对比视角有价值） |

### 1.4 tools 站 tool.chinausedautohub.com（12 页）

| URL | 功能 | Action |
|---|---|---|
| `/` | 工具枢纽（11 工具卡） | **A** |
| `/landed-cost-calculator/` | 落地成本计算 | **E** |
| `/import-duty-calculator/` | 关税计算 | **E** |
| `/profit-calculator/` | 利润/毛利计算 | **E** |
| `/vehicle-comparison/` | 4 车对比 | **E** |
| `/market-compatibility/` | 市场兼容性检查 | **E** |
| `/currency-converter/` | 汇率换算 | **E** |
| `/shipping-cost-estimator/` | 运费估算 | **E** |
| `/fob-cfr-cif-calculator/` | Incoterm 值计算 | **E** |
| `/vehicle-age-calculator/` | 车龄计算 | **E** |
| `/ev-import-cost-calculator/` | EV 进口成本 | **E** |
| `/tco-calculator/` | 5 年总持有成本 | **E** |

> 全部 11 工具页为真实计算器（`lib/calc.js` 14 个函数：calcLandedCost/calcDuty/calcProfit/calcIncoterms/calcTCO 等），均带 WebApplication schema + 税率 source/date 标注。**E 级不意味着无用——是「工具页，不做散文深化」**。关键：文章不得复制工具，只解释「为什么这样算」并链到工具。

### 1.5 companies 站 company.chinausedautohub.com（20 页）

| URL | Purpose | Action |
|---|---|---|
| `/` | 公司枢纽 + 验证级别 | **A** |
| `/automakers/` | 整车厂类别（8 家） | **A** |
| `/used-car-exporters/` `/dealers/` `/inspection-companies/` | 3 类别（各 1 demo） | **C**（demo 占位，待真实数据） |
| `/logistics-companies/` `/shipping-companies/` `/suppliers/` `/ports/` | 4 空类别 | **D**（无数据，避免扩张） |
| `/companies/[company]/` ×11 | 公司实体页 | 8 家整车厂 **A**（byd/geely/chery/changan/great-wall/li-auto/nio/xpeng，publicly_listed/source-backed）；3 demo **C**（unverified，勿当真） |

> Company 页当前字段：overview/headquarters/ownership/manufacturing/brands/vehicle types/export markets/EV relevance/verification——已接近 §9 目标，但**缺「relevant models 结构化互链」与「used-vehicle relevance 叙述」**。demo 三家（Orient Auto Export / Gulf Motors Trading / East Africa Vehicle Inspection）必须保持 `unverified`，绝不当作真实事实。

---

## 2. A/B/C/D/E 分级汇总

判定标准（§2）：**「这个 URL 是否承担一个独立且有价值的知识任务？」**——页面短 ≠ 要扩写。

| 级 | 计数 | 名单要点 |
|---|---|---|
| **A 保留并深化** | **116** | 主站：首页 /cars/ /cars/[brand]/ ×12车辆详情 /brands/(8) /markets/ /how-it-works/ /trust/ /faq/ /contact/ /about/ + 8 guides + 5 services；data：首页 /models/(20) /brands/(16) /vehicle-types/ev+hybrid；market：首页 /countries/(7) /duties-taxes/ /ev-import/ /vehicle-age-rules/；tools：首页；companies：首页 /automakers/ + 8 整车厂 |
| **B 合并/重新定位** | **22** | 主站：body-types(2) powertrains(5) /new-arrivals/；data：/vehicle-types/suv+sedan/；market：各国 ev 子页(7) /countries/kenya/byd-song-plus/ /documents/ /import-guides/ |
| **C 补充** | **6** | companies：3 demo 类别 + 3 demo 公司 |
| **D 删除/避免扩张** | **7** | market：各国 suv 子页(2) /regions/；companies：logistics/shipping/suppliers/ports 4 空类别 |
| **E Tool/Data/Reference** | **20** | 主站 3 法律页；data：body-types powertrains glossary vehicle-specifications；market：ports shipping-routes；tools：11 工具页 |

---

## 3. Semantic Overlap 审计（§17，六组边界核验）

| 组 | 页面 | 当前重叠证据 | 边界定义建议 | 判定 |
|---|---|---|---|---|
| 1 | **How It Works（商业概览） vs How to Buy（买家决策）** | /how-it-works/ 的 5 步（Search→Select→Request Quote→Confirm→Export）与 how-to-buy guide 的 8 步（Define requirements→…→Export prep/destination）**逐级对应**，且 how-to-buy 本身已有「Step 1–8」步骤流 + 常见错误 + 问题清单 | How It Works = **平台侧交易流程**（走这条流程会经历什么，5 步收口，短）；How to Buy = **买家侧决策流程**（怎么选、怎么验证、怎么预算、何时拒绝，深） | **Differentiate（Reposition）**：/how-it-works/ 砍掉决策内容，只留平台流程 + 服务区 + 链到 guide |
| 2 | **How to Buy vs Export Process（中国出口操作）** | how-to-buy Step 6-8（确认购买/出口准备/目的国清关）与 export-process 的「出口资质/单证/运输/清关」段落**重复解释同一段出口操作** | How to Buy = **止于「确认购买」的买家决策**；Export Process = **起于「确认后」的中国出口操作**（国内过户/资质/时间线/角色/延迟） | **Differentiate**：how-to-buy 的 Step 7-8 缩为「交给出口流程」，细节链接到 export-process |
| 3 | **Export Process vs Inspection（车辆风险评估）** | export-process 的「车辆状况与单证」章节与 inspection guide 的「检查什么/红旗/里程核验」**部分重叠** | Export Process = **出口执行编排**（不深讲车况）；Inspection = **车辆风险方法**（深） | **Differentiate**：export-process 的「车况」章改为链 inspection guide |
| 4 | **Inspection vs Landed Cost（成本方法论）** | 弱重叠：两者都在「决策前」环节，但 inspection 讲风险、landed-cost 讲成本，**当前无直接重复** | Inspection = **风险维度**；Landed Cost = **成本维度**；两者是「商业适配度」公式的两个输入 | **Differentiate**（确认边界清晰，需在 Decision Framework 中明确两者并列关系） |
| 5 | **Landed Cost vs FOB/CFR/CIF（贸易术语决策）** | landed-cost 的「成本构成」（vehicle/freight/insurance/duties/taxes/port）与 FOB guide 的「谁付什么/风险转移/如何影响 landed cost」**重叠在 freight/insurance 两块** | Landed Cost = **总成本方法论**（所有构成 + fixed/variable 分类 + 示例）；FOB/CFR/CIF = **Incoterm 决策**（谁承担运费/保险/风险，选哪个术语） | **Differentiate**：landed-cost 的 freight/insurance 只给构成，不展开术语；FOB guide 补 Decision Matrix |
| 6 | **FOB/CFR/CIF vs Shipping** | FOB guide 的「freight/insurance/risk transfer」与 shipping guide 的「freight, insurance and charges」「RoRo vs container」**重叠在运费/保险** | FOB/CFR/CIF = **合同术语（钱/险归谁）**；Shipping = **物理运输方式（怎么运）** | **Differentiate**：shipping 讲方式/港口/时效，FOB 讲费用归属/风险转移 |

**次生重叠**（非核心六组，一并记录）：
- Export Process ↔ Export Documents ↔ Shipping：export-process 的「文档」「运输」章与两个专篇 guide 重复 → Export Process 重定位为高层编排，细节让位专篇。
- Inspection guide ↔ Inspection service：方法 vs 商业条款 → 互链区分。
- Landed Cost guide ↔ tools（landed-cost/import-duty/ev-import-cost）：guide 讲「为什么这样算」，不复制工具计算。

**结论：六组均为 Differentiate/Reposition，无 Merge、无 Redirect**。核心动作是**修剪每个 guide 的越界章节，改为互链**，让每个 URL 只回答自己的那个知识问题。

---

## 4. 决策内容缺口（§3/§5）

### 4.1 13 个 Buyer Decision 主题覆盖矩阵

| # | 主题 | 覆盖 | 现状 |
|---|---|---|---|
| 1 | How to choose a Chinese used vehicle for export | 🟡 部分 | how-to-buy 有流程，缺显式 Decision Framework |
| 2 | How to compare two Chinese used vehicles | 🟡 部分 | vehicle-comparison 工具 + guide「comparing candidates」节，缺方法论 |
| 3 | How to evaluate a low-price vehicle | 🔴 缺失 | — |
| 4 | How to evaluate mileage | 🟡 部分 | inspection「verify mileage」 |
| 5 | How to evaluate accident history | 🟡 部分 | inspection「accident history」 |
| 6 | How to evaluate vehicle age | 🟡 部分 | market 年限规则 + vehicle-age 工具，缺「为何年限重要」框架 |
| 7 | How to evaluate EV battery condition | 🟡 部分 | EV guide + inspection EV 节，缺 SOH 判定框架 |
| 8 | How to evaluate export suitability | 🔴 缺失 | 散落在 export-process 资质/eligibility，无框架 |
| 9 | How to evaluate destination compatibility | 🟡 部分 | market-compatibility 工具 + 国家页，缺方法论 |
| 10 | How to calculate landed cost | 🟢 覆盖 | landed-cost guide + 工具（完整闭环） |
| 11 | How to evaluate total ownership cost | 🟡 部分 | tco 工具，无 guide 解释 |
| 12 | When to reject a vehicle | 🔴 缺失 | inspection 仅「red flags」列表，无显式拒绝框架 |
| 13 | What makes a vehicle commercially suitable for export | 🔴 缺失 | — |

**计数：覆盖 1 / 部分 8 / 缺失 4**（#3 #8 #12 #13）。

### 4.2 8 个 Original Expertise 主题覆盖矩阵（§18）

| # | 主题 | 覆盖 | 现状 |
|---|---|---|---|
| 1 | Why the cheapest used car is not always the best export vehicle | 🔴 缺失 | — |
| 2 | What makes a Chinese used vehicle commercially exportable | 🔴 缺失 | ≈ 决策主题 #13 |
| 3 | Why landed cost matters more than purchase price | 🟡 部分 | landed-cost guide 暗示「不只是车价」，未展开 |
| 4 | How destination-market rules influence vehicle selection | 🟡 部分 | market 站有数据，无综合论述 |
| 5 | Why EV battery condition changes export economics | 🟡 部分 | EV guide 电池章节，未与经济性挂钩 |
| 6 | Why domestic-market specification matters | 🟡 部分 | brands.ts exportConsideration 字段 |
| 7 | When a buyer should reject a vehicle | 🔴 缺失 | ≈ 决策主题 #12 |
| 8 | How experienced importers evaluate sourcing opportunities | 🔴 缺失 | — |

**计数：覆盖 0 / 部分 4 / 缺失 4**（#1 #2 #7 #8）。

> 建议：缺失的 8 个主题（决策 4 + 专业 4）合并去重后 ≈ **6 个新知识任务**（#3低价值判断、#8出口适配、#12/#7拒绝、#13/#2商业适配、#1最便宜≠最好、#8采购评估）——这是 Phase 3.3 的 Buyer Decision Knowledge 集群核心，但**必须用 Decision Framework + 证据 + 推理写成，不得写成空泛观点**。

### 4.3 缺 Decision Framework / Exceptions / Checklist / Risk 的页面清单

- **How to Buy**：缺 Decision Framework（商业适配度公式）、缺 Exceptions、缺「何时拒绝」（Checklist 有、Risk 弱）
- **Export Process**：缺 Checklist（单证核对表在专篇）、Risk 弱（有「常见延迟」）
- **Inspection**：缺显式「拒绝阈值」Framework，Risk 有（红旗）
- **Landed Cost**：缺 fixed/variable/destination-dependent 分类（§12），Checklist 有
- **FOB/CFR/CIF**：缺 Incoterm Decision Matrix（§11 九情形）
- **Shipping**：缺 RoRo vs Container Decision Matrix
- **8 品牌页**：无 Decision 属性（定位为实体知识，可接受）
- **7 国家页**：缺 Vehicle Segment Fit / Buyer Profile / Common Risks / Landed Cost Considerations 结构化（§8 清单 20 项，当前约 12 项）

---

## 5. EV 知识现状（§10，四块缺口）

| 块 | 现状 | 缺口（数量） |
|---|---|---|
| **Battery** | EV guide 有「battery condition/health/capacity」「warranty/degradation」「measurement methods」；glossary 有 kWh | ① SOH 定义与判定（缺）；② 可用容量 vs 标称容量（缺）；③ 衰减曲线/化学（LFP vs NMC）差异（缺）→ **3 项** |
| **Vehicle** | EV guide 有「BEV vs PHEV」；glossary 有 EREV/BEV/PHEV/HEV/DM-i | ① EREV（增程式）在 guide 中缺失（仅 glossary 有）；② 国内规格 vs 出口规格差异叙述浅；③ generation/trim 维度未关联 EV → **3 项** |
| **Compatibility** | EV guide 有「charging standards by region」（很浅） | ① GB/T vs CCS2 vs CHAdeMO 充电标准/接口；② 电压/频率；③ 软件/OTA；④ 语言/联网服务 → **4 项** |
| **Export Risks** | EV guide 有「parts/service/resale」「export/customs for EVs」 | ① 电池质保区域有效性；② app 可用性/软件区域锁；③ OTA 限制；④ 目的地兼容性（部分由 market-compatibility 工具覆盖）→ 核心 **3 项**（④ 视为部分） |

**EV 缺口总数 ≈ 13 项**。承载页：主站 EV guide + market `/ev-import/` + data `/vehicle-types/ev/` + glossary（补术语）。**不可写成「EV 科普」**——每项必须回答「为何影响二手车出口决策」。零编造：无来源的电池/充电数据不写。

---

## 6. Vehicle × Market 数据模型评估（§7）

### 6.1 现有结构能否支撑组合关系

- data 站：`models.json`（20 车型，`model_id` 主键，generation→trim→specs 15 字段）+ `brands.json`（16 品牌，`brand_id`）。
- market 站：`countries.json`（7 国，`country_id` 主键，drive_side/currency/region）+ `importrules.json`（28 条，`country_id` 外键，4 类）+ `taxrules.json`（17 条，`country_id`）+ `ports.json`（15）+ `routes.json`（12）。
- 现有组合痕迹：market 国家页硬编码 `popularModelIds`（如 uae→[li-auto-l7,byd-han,nio-es6]）；`kenya/byd-song-plus.astro` 单个硬编码组合页；tools `/market-compatibility/` 做 drive-side/eligibility 检查。

**结论：两个主键体系（model_id ↔ country_id）已具备外键关联的语义基础，但缺一张显式的「vehicle × market 关系表」**。当前组合靠页面内硬编码，无法规模化、无法被工具/模板复用。

### 6.2 组合页生成条件（独立信息增量判定）草案

一个 Vehicle × Market 组合页**只有当它具备以下至少一项独立信息增量时才生成**，否则只做互链不建页：

1. **驾驶侧冲突**：LHD 车型 × RHD 市场（如 kenya/tanzania/nigeria）→ 有真实「不可直接进口」信息。
2. **年限规则冲突**：车型 production_years × 市场 age limit（如 saudi 5 年、kenya 8 年）→ 有「该车能否合规进口」的判定。
3. **EV/PHEV 政策差异**：EV 车型 × 有 EV 激励/豁免的市场（uzbekistan/kazakhstan/kenya）→ 有「关税减免」增量。
4. **规格兼容性**：充电标准（GB/T vs 目的地 CCS2）、排放标准（China VI vs 目的地）→ 有可验证差异。
5. **同品牌出口先例**：该车型在目标市场有官方出口版本（如 Monjaro=海外版 Xingyue L）→ 有命名/规格映射增量。

**反模式（§7 明令禁止）**：`/byd-song-plus-uae/` `/byd-song-plus-kenya/` `/byd-song-plus-nigeria/` 这种机械 SEO 组合页。**现有 `kenya/byd-song-plus.astro` 是唯一试点，评估后决定保留为模板样例或折叠进国家页，绝不机械复制。**

### 6.3 数据模型建议（Phase 3.8 输入）

- 新增 `vehicle-market-relations.json`（MARKET 站或共享层），字段：`model_id` / `country_id` / `drive_side_compat`（compatible/conflict/na）/ `age_compat` / `ev_incentive_note` / `charging_standard_note` / `homologation_note` / `source` / `confidence`——**只写有来源的事实，未知写 null**。
- 模板 `/countries/[country]/vehicles/[model]/` 仅当满足 6.2 至少一项增量时生成；否则国家页 + 车型页双向互链即可。

---

## 7. 优先级行动清单（§22，分组为 Phase 3.2→3.12）

### [HIGH PRIORITY]（18 项）

**PHASE 3.2（重叠与定位，5 项）**
1. [HIGH] Reposition `/how-it-works/`：砍决策内容，只留平台 5 步流程 + 链 how-to-buy（§3-组1）
2. [HIGH] 修剪 how-to-buy Step 6-8 与 export-process 的重叠（§3-组2）
3. [HIGH] 合并 market 7 个 `/countries/[country]/ev/` 子页 → 国家页 EV 区 + 单一 `/ev-import/` 中心
4. [HIGH] 删除/折叠 market `/regions/`、`/countries/[country]/suv/`（2）、`/import-guides/`、`/documents/`（§2 D/B 级）
5. [HIGH] 主站 body-types(2) + powertrains(5) + new-arrivals 重定位：知识让位 data 站，保留为浏览过滤

**PHASE 3.3（Buyer Decision Knowledge，5 项）**
6. [HIGH] how-to-buy 加 Decision Framework（商业适配度公式 = 车价+检查风险+运费+进口成本+配件服务+充电兼容+转售，全变量解释）
7. [HIGH] 新增「How to evaluate a low-price vehicle」决策内容（#3）
8. [HIGH] 新增「When to reject a vehicle」决策内容（#12/#7，含拒绝阈值）
9. [HIGH] 新增「What makes a vehicle commercially exportable」决策内容（#13/#2，含 TCO/适配度）
10. [HIGH] inspection guide 加显式「拒绝/风险分级」Framework

**PHASE 3.9（Incoterm/Landed Cost/Inspection Framework，3 项）**
11. [HIGH] FOB/CFR/CIF guide 补 Incoterm Decision Matrix（§11 九情形：自备货代/卖方安排/买保险/老手/新手/单车/多车/集装箱/RoRo）
12. [HIGH] landed-cost guide 补 fixed/variable/destination-dependent/vehicle-dependent 成本分类（§12）
13. [HIGH] shipping guide 补 RoRo vs Container Decision Matrix

**PHASE 3.7（EV Knowledge Framework，2 项）**
14. [HIGH] EV guide 补 SOH/可用容量/衰减/电池化学（LFP vs NMC）——Battery 3 缺口
15. [HIGH] EV guide 补 GB/T vs CCS 充电标准/电压频率/软件 OTA/语言联网——Compatibility 4 缺口

**PHASE 3.8（Vehicle × Market，1 项）**
16. [HIGH] 建 `vehicle-market-relations` 数据模型 + 独立信息增量判定，停用机械组合页（§6）

**PHASE 3.10（Trust/溯源，1 项）**
17. [HIGH] 统一跨站溯源术语：主站 verification 六态 vs 子站 source/confidence 体系对齐（trust-terminology.md）

**PHASE 3.6（Company，1 项）**
18. [HIGH] 整车厂公司页补「relevant models 结构化互链」+「used-vehicle relevance」叙述（§9）

### [MEDIUM PRIORITY]（9 项）

19. [MEDIUM] /about/ 页 E-E-A-T 深化（团队/方法/来源/纠正机制）——当前极薄
20. [MEDIUM] 品牌页补 company 站实体互链（brand → company）
21. [MEDIUM] data 车型页补 charging info 完整性 + related markets 结构化互链
22. [MEDIUM] 国家页补 Vehicle Segment Fit / Buyer Profile / Common Risks / Landed Cost Considerations（§8 清单）
23. [MEDIUM] 新增「How to evaluate total ownership cost」guide（配合 tco 工具，#11）
24. [MEDIUM] 新增「How to evaluate export suitability」框架（#8）
25. [MEDIUM] export-documents guide 补按目的国单证差异矩阵（链 market）
26. [MEDIUM] Original Expertise 主题 #3（landed cost 比车价重要）、#6（国内规格重要）展开成独立论证页
27. [MEDIUM] glossary 补 SOH/battery chemistry/GB-T/CCS 术语

### [LOW PRIORITY]（5 项）

28. [LOW] market 国家页 FAQ 保持指向页内税表（不硬编码税率，已合规，巡检即可）
29. [LOW] tools 工具页补「为什么这样算」的一句话方法论链接（不复制计算）
30. [LOW] data `/vehicle-types/suv|sedan/` 合并进 body-types
31. [LOW] 主站四语「结构完整度」奇偶复核（已同步，巡检）
32. [LOW] companies 空类别（logistics/shipping/suppliers/ports）挂「coming soon」占位，避免空页扩张

---

## 附：未决问题与 Phase 4 方向

- **未决**：data 站 16 品牌 vs 主站 8 品牌不对齐（data 含 toyota/vw/bmw/mercedes/honda/hyundai 合资/进口品牌）——需确认这些非中国品牌在「中国二手车出口」语境下的定位（国产合资车可出口，但需在品牌页明确「China-market 生产」）。
- **未决**：Vehicle × Market 组合页的「独立信息增量」判定阈值需产品侧拍板（§6.2 五条件采用哪几项）。
- **Phase 4 方向**：真实库存接入后的（1）车辆实体页与 data 车型页的 canonical 关系（车 vs 车型两类实体）；（2）market 法规数据的持续更新机制（source_date 自动失效告警）；（3）跨站 sitemap/hreflang 的索引覆盖终检。
