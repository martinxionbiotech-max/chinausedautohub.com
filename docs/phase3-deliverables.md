# Phase 3 Final Deliverables — ChinaUsedAutoHub

> 交付批次：P3-FINAL（§30 全量 crawl + §32 最终报告）
> 日期：2026-10-04 UTC
> 依据：`phase2/44-car-export-phase3-prompt.md`（§1–§32）、`docs/phase3-audit.md`（前置审计）
> 产出：本文件 `docs/phase3-deliverables.md`
> 范围：五仓本地 dist 全量 crawl + 线上四子域 HEAD 复测 + 交叉链接矩阵复扫

---

## 0. QA 结论速览（TL;DR）

| 维度 | 结果 |
|---|---|
| 线上四子域 200 复测 | ✅ `data` / `market` / `tool` / `company` 全 200；复数 `tools.` / `companies.` **NXDOMAIN**（无 DNS） |
| 规范域（单数）残留 | ✅ 五仓源码 + dist 全生态 **0 处**复数域引用（仅审计文档历史记录） |
| canonical | ✅ 五仓 0 错误 |
| robots | ✅ 五仓全带 `Sitemap:` 指令（P1-5 已修） |
| sitemap | ✅ 主站 172 实际数复核一致；data 47 / market 27 / tools 12 / companies 20，全部覆盖各自页面 |
| 内部破链 | ✅ 主站 220 页内链死链 **0**（真实）；子站 0 真实破链（tools 3 条为 JS 模板字面量误报） |
| 外部互链矩阵 | ✅ 主站→子站 31 条 + 子站互链 78 条，**全部 200** |
| orphan pages | ✅ 每仓仅 `/404.html`（预期） |
| 重复 title/description | ✅ 五仓同语内 **0 / 0**（四语同构不计） |
| heading 层级 | ⚠️ 主站 13 页 h1→h3 跳级（卡片/页脚，无 h2）——低优先 |
| schema | ✅ 类型匹配 / 无假属性 / demo 无 availability；⚠️ 部分实体缺 `@id`（P2-3 低优先） |
| demo 控制 | ✅ 48 详情页（12×4）`noindex,follow` + title `Example Vehicle Listing` 前缀（四语）+ 排除 sitemap + schema 移除 availability |
| 修复项 | **0**（P0/P1 已在 P3-P0/P1a/P1b 提交中落实，本批复核通过） |

**五仓终态**：全部 working tree clean，`ahead/behind = 0/0`（已 push）。

---

## A. Completed changes（本批验证项 — 增量修复 0，全部为核验）

本批纪律为「验证 + 报告为主，仅明确缺陷时最小修复」。全量 crawl 后**未发现需修复的明确缺陷**——phase3-audit 的 P0（6 项）与 P1（7 项）已在前期提交中落实，本批复核确认。核验项：

1. **P0-1 复数域**：`shared/config/config.ts`（4 份）、`tools/companies` 的 `astro.config.mjs`、`companies/src/layouts/i18n-notes.md` 全部改为单数 `tool.` / `company.`；全生态复数域残留 0。
2. **P0-2 demo SEO 控制**：48 详情页 `noindex,follow` + 四语 title 前缀 + schema 移除 `availability`。
3. **P0-3 主站→market 路径**：`marketUrl()` 已改 `/countries/{slug}`，7 市场全 200。
4. **P0-4 主站→data 模型路径 + ID**：`dataModelUrl()` 改 `/models/{dataModelId}` 单段；8 车型映射正确，4 无匹配车型保守置 null（不产生破链）。
5. **P0-5 generation/trim 展示**：详情页「VEHICLE ENTITY CHAIN」面包屑 + 规格行已接线（字段仍 null 时显示 Not Available，符合 §6 不填造）。
6. **P0-6 状态枚举**：`types.ts` / `update-vehicle.mjs` / `AGENTS.md` 三者统一为 `available|reserved|sold|sourcing|expired|removed`（§7 五态 + sourcing 兼容）。

---

## B. Domain inconsistencies fixed

| 项 | 状态 |
|---|---|
| 主站 `site.json` 子域 | ✅ 单数（data/company/tool/market） |
| 四子站 `shared/config/config.ts` | ✅ `company.` / `tool.`（单数） |
| 四子站 `astro.config.mjs` | ✅ 单数规范域 |
| companies i18n-notes hreflang 示例 | ✅ `company.chinausedautohub.com` |
| 五仓 dist HTML 复数域残留 | ✅ **0**（`grep` 全空） |
| 五仓源码复数域残留 | ✅ **0**（仅 `phase3-audit.md` 历史记录提及） |
| 线上 DNS | ✅ 单数域解析 Cloudflare；复数域 NXDOMAIN |

---

## C. Vehicle architecture improvements

- **实体链** Brand → Model → Generation → Trim → Vehicle：详情页新增「VEHICLE ENTITY CHAIN」可见面包屑，Generation/Trim 字段已接线（当前 demo 数据为 null → 显示 Not Available，不编造）。
- **Schema** `vehicleSchema()`：demo 车辆移除 `availability`（`is_demo ? {} : {availability}`），杜绝「真实在售」误导；`@id` 用详情页 URL 自引用，无假属性。
- **真实库存就绪**：字段骨架（身份/规格/商业/验证/证据/状态/来源/市场适配/出口）与 §6 九组对齐；缺失字段保留 null 不填造。
- **状态生命周期**：Sold 保留不 404；枚举三处统一。

---

## D. Data / Market / Tools / Company improvements

| 子站 | 核验结果 |
|---|---|
| **data**（47 页） | 实体链完整（20 车型含 generation/trim/specs）；每页 SourceNote + confidence；0 破链；sitemap 47 全覆盖 |
| **market**（27 页） | 7 国家每规则带 source/last_checked/confidence；FAQ 已去硬编码税率（改指数据表 + 官方核实提示）；唯一 Country×Model 页 `kenya/byd-song-plus` 已数据驱动（`getModel()`）；政府来源外链全 200 |
| **tools**（12 页） | 11 工具无假计算（`calc.js` 纯函数 + 汇率读真实 JSON）；页面标「Estimate ≠ final quotation」；schema WebApplication 恰当 |
| **companies**（20 页） | 11 条公司（8 真实车厂 publicly_listed/source-backed + 3 demo `unverified` 显 DemoBanner）；字段规范完整；外链车厂官网全 200 |

---

## E. SEO/AIO improvements

- **title/description 唯一**：五仓同语内 0 重复。
- **canonical**：五仓 0 错误，全部指向各自规范域。
- **hreflang**：主站全 221 页 ×5 组（en/ar/ru/es/x-default）完整；四子站 EN-only（符合 §21）。
- **sitemap**：主站 172（复核一致，demo 详情已排除）；四子站全部生成且 robots 声明。
- **schema 类型匹配**：主站 Organization/WebSite/ItemList/BreadcrumbList/Article(32)/FAQPage(4)/Product+Vehicle+Offer(48)；data Dataset/Brand/Vehicle/DefinedTermSet；market Article/CollectionPage；tools WebApplication/ItemList；companies Organization/CollectionPage —— 均与页面内容相符，无假属性。
- **demo 不伪装**：noindex + title 前缀 + 无 availability + sitemap 排除，四层防护。
- **AIO/GEO 结构**：Question → Direct Answer → Evidence → Related Entity → Next Action 链路已在 P2 落地，本批核验保持。

---

## F. Technical issues discovered（本批新发现，均低优先，未改）

1. **heading 层级跳级**（主站 13 页）：`/cars/`、`/new-arrivals/`、`/cookies/`（×4 语）+ `/404.html` 存在 h1→h3 跳级（无 h2）。卡片标题用 h3、页脚栏目标题用 h3 直接接在 h1/h2 后。属语义层级瑕疵，不影响抓取与索引。
2. **schema `@id` 缺失**（低优先，P2-3）：FAQPage（主站 4 + tools 3）、data Vehicle/Dataset、market Article、companies Organization 未输出 `@id` 实体引用（各 JSON-LD 块独立）。未来实体知识图谱时补。
3. **404 本地化链接**：`/404.html` 语言切换器指向 `/ar/404/` `/ru/404/` `/es/404/`（无独立文件，靠 Cloudflare 回退到根 404）。已知小瑕疵，phase2 已记录。

---

## G. Issues intentionally NOT changed

- **4 车型无 data 站匹配**（coolray / tiggo-8-pro / arrizo-8 / uni-v）：`dataModelId` 置 null，不生成跨站链接。理由：data 站无精确同名实体（`tiggo-8-pro` ↔ data 的 `chery-tiggo-8` 命名不一致），保守「不链不错链」优于「链错实体」。
- **schema `@id` 图引用**（P2-3）：低优先，留待实体知识图谱阶段。
- **heading 跳级**：卡片/页脚 h3 是现有设计模式，跨 4 语 + 共享组件改动面大，非明确缺陷，不改。
- **子站仓库目录名复数**（`tools.` / `companies.` 目录名）：不影响 Cloudflare Pages 绑定，随未来域名切换一并改。
- **market 唯一 Country×Model 页**：保留（已数据驱动），未扩展为批量模板（§13「不 mass-create」）。

---

## H. Remaining risks

| 风险 | 说明 | 建议 |
|---|---|---|
| 全库存为 Demo | 12 台全 `is_demo:true`（noindex 已控） | 上线前 `scripts/clear-demo-data.mjs --yes` |
| 表单无后端 | `site.json.leadEndpoint=""`，提交走本地假成功 | 接 Email/CRM webhook（转化关键） |
| generation/trim 数据为 null | 字段已接线但 demo 无真实值 | 真实库存接入时补 generation/trim/model_year |
| 验证术语缺 3 态 | Seller Supplied / Source-backed / Not Independently Verified 未单独呈现 | 真实库存接入时扩展 confidence 级别 |
| 无部署配置 | 未见 `wrangler.toml` | 建 Cloudflare Pages 管线 |
| 404 未本地化 | `/ar/404/` 等靠回退 | 低优先级 |

---

## I. Recommended next action

**进入「Observation + Real Inventory Integration」期，不自动开启新 SEO/内容阶段。**

1. **等待真实库存**：owner 逐步提供真实车辆数据后，经 `scripts/update-vehicle.mjs create` 接入（复用现有 entity/data 架构，不改架构）。
2. **接入 Lead 后端**：接 Email/CRM webhook，替换假成功逻辑（转化率最高优先）。
3. **demo→real 转换**：接入真实车后执行 `clear-demo-data`；如需保留某 demo URL，用相同 `vehicle_id` 新建（URL 不变性已保证）。
4. **部署管线**：建 `wrangler.toml` + CI，上线后二次验证 sitemap/robots/四子域互链。
5. **真实库存到位后**：补 generation/trim/model_year、verification_status 枚举、Source/Last checked 术语块（§8/§9 已预留字段）。

**长期目标**：ChinaUsedAutoHub = 真实库存 + 车辆知识图谱 + 市场情报 + 进口成本工具 + 公司情报 + B2B 车辆 sourcing。优化数据质量与实体关系，不追求页面数量。

---

*本批为纯验证+报告批，未修改任何仓库文件；五仓 working tree clean，均与 origin/main 同步（0/0）。*
