# Phase 3 Content Deliverables — ChinaUsedAutoHub（P3.10–3.12 收官）

> 交付批次：P3.10–P3.12（§13 Trust/Provenance 统一 + §16 全站内链 + 最终 SEO/AIO/内容质量审计）
> 日期：2026-10-04 UTC
> 依据：`phase2/45-car-export-phase3-content-prompt.md`（§13/§16/§22）
> 范围：五仓本地仓库（main + data + market + tools + companies），全部 build 通过、`0/0` 同步

---

## 0. 结论速览

| 维度 | 结果 |
|---|---|
| 五仓 build | ✅ 主站 221 页 / data 48 / market 16 / tools 13 / companies 21，全部 0 错误 |
| 信任术语统一 | ✅ 六态（主站车辆）+ 四源分级（market）+ 公司四级 + data SourceNote/confidence 全对齐 `docs/trust-terminology.md` |
| 补缺 Source/Last checked | ✅ data 品牌 16 + 国家 7（×4 共享层）+ market-position 补 Last checked |
| 「Verified」误标 | ✅ data 站高置信误标「Verified」→ 改为「Source-backed」（厂商规格≠独立验证） |
| 内链补挂 | ✅ 车辆详情页 +6 指南、品牌页 +4 指南（四语同步） |
| orphan pages | ✅ 五仓各仅 `/404.html`（预期） |
| 内部破链 | ✅ 主站 0 真实破链（仅 4 语 404 回退已知项）；四子站 0 |
| 重复 title/description | ✅ 五仓同语内 0 / 0 |
| 规范域 | ✅ 全生态 0 复数域引用（`data`/`market`/`tool`/`company` 单数） |
| demo 控制 | ✅ 主站 48 详情页 noindex + Example 前缀 + 无 availability + 出 sitemap；companies 3 demo 全 `unverified` |

---

## 1. Content Audit Summary [HIGH]

五仓内容审计结论：现有资产均已承担「独立且有价值的知识任务」，**无重复/灌水页**，无需删除、合并或重定位。判定如下：

| 仓 | 页面数 | 判定 | 说明 |
|---|---|---|---|
| main（主站） | 221（56 en + 55×3 语 + 404） | A/E 保留 | 车辆/品牌/市场/服务/指南/信任页，边界清晰 |
| data | 48 | A/E 保留 | 品牌→车型→代际→trim→规格 完整实体链 |
| market | 16 | A 保留 | 7 国家页 + 6 索引页，每规则带 source/date/confidence |
| tools | 13 | E 保留 | 11 工具 + 首页 + 404，无假计算 |
| companies | 21 | A 保留 | 8 真实车厂 + 3 demo 公司（显式 unverified） |

审计维度（URL / Title / Purpose / Intent / Entity / Depth / Duplicate / Link Opp / Data Req）逐页核对结果：**语义重叠 0，需合并/删除/重定位 0**。

---

## 2. 修改页面清单 [HIGH]

| 仓 | 文件 | 改动 |
|---|---|---|
| main | `src/templates/VehicleDetailPage.astro` | 新增「Related Guides」区块（5+1 指南，EV/PHEV 追加 EV 指南） |
| main | `src/templates/BrandPage.astro` | 新增「Related Guides」区块（4 指南） |
| main | `src/i18n/{en,ar,ru,es}.json` | 新增 `detail.relatedGuides` + `brands.relatedGuides` 四语键 |
| data | `src/lib/helpers.ts` | 置信展示映射 `high: Verified → Source-backed`；`confidenceLevel()` 高置信恒返回 Source-backed |
| data | `src/pages/models/[model].astro` | `confidenceClass` 移除「Verified」分支；China Market Position 补 `Last checked` |
| data | `src/lib/market-position.ts` | 新增 `MARKET_POSITION_CHECKED = 2026-10-04` |
| data | `shared/data/brands.json` | 16 品牌补 `source_date: 2026-10-04` |
| data | `shared/data/countries.json` | 7 国家补 `source_date: 2026-10-04` |
| market / tools / companies | `shared/data/brands.json`、`shared/data/countries.json` | 与 data 同步同一份（四子站 shared/ 保持一致） |

---

## 3. 新增页面清单 [LOW]

**本批 0 新增页面**。P3.10–3.12 为「收官统一 + 审计」，不扩张页面数量。前期 P3.1–3.9 已新增的 EV 知识 / Vehicle×Market 模型页维持不变。

---

## 4. 合并 / 删除 / 重定位清单 [MEDIUM]

**本批 0 项**。语义重叠审计确认无「两个页面回答同一问题」的情况：

- How It Works ≠ Commercial overview（前者讲流程步骤，后者讲价值主张）
- How to Buy ≠ Export Process（前者买家决策，后者运营流程）
- Inspection ≠ 车辆页 inspection（前者风险知识，后者字段展示）
- Landed Cost ≠ 工具（前者方法论，后者计算）

均无需合并或重定位。

---

## 5. Vehicle Data 改进 [HIGH]

data 站（Vehicle Intelligence Database）本批核验+补缺：

- **实体链完整**：Brand→Model→Generation→Trim→Specs→Powertrain，20 车型全就位。
- **置信展示修正**：高置信「Verified」→「Source-backed」，与信任术语 §2/§4 对齐（厂商规格是「可引用来源」，非「独立验证」）——修复一处**过度声明**。
- **Source/Date 补全**：品牌页此前无 `source_date`（SourceNote 只显示 Source 无日期），16 品牌补齐；车型页 China Market Position 补 Last checked。
- **不填造**：所有 null 字段渲染为 Not available，未编造任何规格。

---

## 6. Market Data 改进 [HIGH]

market 站（Market Intelligence）本批核验+补缺：

- **每规则 Source/Date/Confidence** 已就位：28 条 importrules + 17 条 taxrules 全部带 `source`/`last_checked`/`confidence`/`needs_review`。
- **国家级 source_date 补齐**：7 国家 `countries.json` 此前 `source_date: null`，补齐为 2026-10-04（drive side/currency 属数据断言，需日期）。
- **FAQ 去硬编码税率**：已确认（前期修复）FAQ 指向页内表格 + 官方核实提示，无双源漂移。
- **不确定性显式标注**：taxrules 全 `needs_review: true`，`effective_date` 无真实值留 null，不编造生效日期。

---

## 7. Company Data 改进 [HIGH]

companies 站本批核验（无改动，已达标）：

- **四级验证**：`verified / publicly_listed / source-backed / unverified` 独立于主站六态，SCHEMA 定义清晰。
- **demo 隔离**：3 条 demo 公司（`demo-*`）全 `unverified` + DemoBanner + `verification_evidence: "Demo data — not verified"`；8 家真实车厂 `publicly_listed`/`source-backed`（有官网佐证）。
- **关系区**：automaker 页 Company→Brand→Vehicle→Export→Market 证据驱动，`deriveOwnership` 只从证据推「国有/上市」，不编造。

---

## 8. EV Knowledge 改进 [MEDIUM]

EV 知识体系（前期 P3.7 建立）本批核验保持，无退化：

- `buying-chinese-evs-for-export` 指南覆盖电池 SOH/容量/衰减、充电标准、区域软件、OTA 局限、目的地兼容性。
- 车辆详情页 EV/PHEV 追加 EV 指南链（本次内链补挂）。
- 未编造 SOH/容量/化学体系数字；无公开数字写「Not publicly documented」。

---

## 9. Vehicle × Market 数据模型 [MEDIUM]

- 模型：`MODEL_MARKETS`（data→market 国家映射）+ `market/kenya/byd-song-plus` 唯一数据驱动组合页（`getModel()` 读共享层）。
- 坚持 §13「不 mass-create」：未扩展为批量 `/byd-song-plus-uae/` 式机械页。
- 品牌→市场关系经 `ecosystem.ts` 落地，只链真实存在的国家页。

---

## 10. Internal Linking 改进 [HIGH]

六向语义内链终检+补挂：

| 方向 | 状态 |
|---|---|
| Main↕Guide↕Data↕Market↕Tool↕Company | ✅ Header eco-nav + Footer resources + Home resource hubs 全通 |
| **Vehicle→Guide** | ✅ 本批补挂：详情页 +6 指南（how-to-buy / export-process / inspection / landed-cost / shipping / EV） |
| **Brand→Guide** | ✅ 本批补挂：品牌页 +4 指南 |
| Vehicle↔Brand↔Market↔Tool | ✅ 已存在（entity chain / 相关数据 / destination / related tools） |
| Market→Vehicles/Brands/Guides/Tools | ✅ 国家页四向全通 |
| Guide→Data/Market/Tools | ✅ 指南页 links 区块全通 |
| 孤立页 | ✅ 五仓各仅 `/404.html`，0 真实 orphan |

锚文本自然（指南标题 + 「Buying Guides」副标），无关键词堆砌。

---

## 11. SEO / AIO 改进 [HIGH]

终审计复扫：

- **title/description 唯一**：五仓同语内 0 重复。
- **canonical**：五仓 0 错误，均指向规范单数域。
- **hreflang**：主站全 221 页 ×5 组完整；四子站 EN-only（符合 §21）。
- **sitemap**：主站 172 / data 47 / market 15 / tools 12 / companies 20，demo 详情已排除；robots 全带 `Sitemap:` 指令。
- **schema**：类型匹配 / 无假属性 / demo 无 `availability`；主实体带 `@id`。
- **AIO 结构**：Question→Direct Answer→Evidence→Related Entity→Next Action 保持（前期 P2 落地）。
- **demo 不伪装**：四层防护（noindex + Example 前缀 + 无 availability + 出 sitemap）全通过。

---

## 12. Trust / Provenance 改进 [HIGH]

P3.10 核心交付：

1. **术语对齐**：主站六态 + market 四源分级 + companies 四级 + data SourceNote/confidence，全表对齐 `docs/trust-terminology.md`。
2. **消除「Verified」过度声明**：data 站厂商规格高置信不再标「Verified」，改为「Source-backed」——绝不制造虚假验证。
3. **补缺 Source/Last checked**（按仓）：
   - data：品牌 16 + 国家 7 + market-position 1 = **24 处**
   - market：品牌 16 + 国家 7 = **23 处**（shared 同步）
   - tools：品牌 16 + 国家 7 = **23 处**（shared 同步）
   - companies：品牌 16 + 国家 7 = **23 处**（shared 同步）
   - main：0 处（车辆页 Source/Last checked/Last updated/Data availability/Verification level 五元已齐，本批复核通过）
4. **demo 标注复核**：主站 demo 车 Source 如实显示 `demo`；companies demo 公司 `unverified`。

> 注：shared/data 为四子站物理四份、内容一致，故品牌/国家的补缺数在四仓各计入一次（同一数据实体）。

---

## 13. 尚未解决的问题 [MEDIUM]

| # | 问题 | 优先级 |
|---|---|---|
| 1 | 全库存为 Demo（12 台 `is_demo: true`，noindex 已控） | [HIGH] |
| 2 | 表单无后端（`leadEndpoint=""`，提交走假成功） | [HIGH] |
| 3 | 4 车型无 data 站匹配（coolray/tiggo-8-pro/arrizo-8/uni-v，`dataModelId: null`） | [MEDIUM] |
| 4 | generation/trim 数据为 null（字段已接线，demo 无真实值） | [MEDIUM] |
| 5 | 验证术语 3 态（Seller Supplied / Source-backed / Not Independently Verified）未单独呈现 | [LOW] |
| 6 | heading h1→h3 跳级（13 页，卡片/页脚） | [LOW] |
| 7 | 无部署管线（未见 `wrangler.toml`） | [MEDIUM] |
| 8 | `/404.html` 语言切换指向 `/ar/404/` 等（Cloudflare 回退） | [LOW] |
| 9 | 子站仓库目录名复数（`tools.`/`companies.`）不影响绑定，待域名切换一并改 | [LOW] |

---

## 14. Phase 4 推荐方向 [MEDIUM]

**进入「Observation + Real Inventory Integration」期，不自动开启新内容阶段。**

1. **等待真实库存** [HIGH]：owner 提供真实车辆后经 `scripts/update-vehicle.mjs create` 接入（复用 entity/data 架构）。
2. **接入 Lead 后端** [HIGH]：Email/CRM webhook 替换假成功（转化最高优先）。
3. **demo→real 转换** [MEDIUM]：`mark-real` 翻转 is_demo、URL 不变；上线前 `clear-demo-data`。
4. **部署管线** [MEDIUM]：建 `wrangler.toml` + CI，上线后二次验证 sitemap/robots/互链。
5. **实体知识图谱** [LOW]：补 schema `@id` 图引用（FAQPage / data Vehicle / market Article / companies Organization）。
6. **真实库存到位后** [MEDIUM]：补 generation/trim/model_year、verification_status 枚举、Seller Supplied 等 3 态术语块。

---

*本批为收官统一 + 审计批：P3.10 信任术语统一与补缺、P3.11 车辆/品牌页补指南内链、P3.12 全站复扫产出本报告。五仓均 build 通过、分仓 commit 并 push、同步 0/0。*
