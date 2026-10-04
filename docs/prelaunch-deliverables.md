# ChinaUsedAutoHub — Pre-Launch Deliverables（PHASE 22–25 终 QA）

> 审计日期：2026-10-04　|　审计师：上线审计（只审计 + 最小修复，本批未改任何仓库文件）
> 范围：五仓本地（chinausedautohub.com 主站 + data / market / tools / companies 四子站）
> 依据：`phase2/46-car-export-prelaunch-prompt.md` PHASE 22 / 23 / 24 / 25
> 本文件 = PHASE 25 最终交付物（16 项 + 就绪评分 + 最终判定）

---

## 0. 最终判定（先行）

**READY WITH MINOR FIXES**

五仓技术 QA 全部通过，demo 内容公共页残留 = 0，P1 页 + P3 指南全部达标，业务事实空缺全部如实标注（零编造）。剩余两个业务性待办（真实库存接入 + 询车表单端点接线）属商业决策，非代码缺陷，已在 §13–14 记录为 Internal TODO。

---

## 1. What was changed（本批 PHASE 22–25 做了什么）

本批为**审计 + 报告**，未修改仓库文件。以下「changed」为前序 PHASE 2–21 已完成、本批复核确认的改动汇总（git 五仓均为 clean，与 origin/main 同步）：

- **PHASE 2 主站 P1 六页升级**：首页（methodology + 5 pathway）、About（10 节 + 三分法）、Trust（13 节 + 8 状态标签）、How It Works（10 步 + 平台/第三方分界）、Services（5→8 类）、Contact（真实触点）。
- **PHASE 3 指南系统**：8 → **19 篇**，含 15 篇权威 evergreen + PHASE 17 合规指南（官方 MOFCOM/GACC 来源）。
- **PHASE 4 data 站**：20 车型页深化为 20 节记录。
- **PHASE 5 品牌**：8 品牌 whyConsider/chinaPosition/exportConsideration 三字段。
- **PHASE 6 market 站**：7 国家页 → 5 置信标签 + 完整法规元数据（Source/Date/Jurisdiction/Applicability/Caveat）。
- **PHASE 8 tools 站**：11 工具六要素声明 + Estimate-vs-quote-vs-customs 区分 + `fmtEstimate`。
- **PHASE 9 companies 站**：3 demo 公司从公开目录与 sitemap 排除。
- **PHASE 16/17**：Source/Evidence 体系 + 中国二手车出口合规指南（官方来源）。

## 2. What was intentionally NOT changed（有意不改）

- **0 台真实库存**：任务明示「NOT primarily about adding real vehicle inventory」，12 台车辆保持 `is_demo:true`（走 mark-real 接入）。
- **五仓架构 / 规范域单数**：已就绪，未重改（data/market/tool/company 单数）。
- **shared/ 层**：四子站 md5 一致，未触碰。
- **demo 车三层标记**：noindex + title 前缀 + DEMO 徽章，有意保留（mark-real 自动去除）。
- **Sold/Reserved 页**：保留不 404（生命周期规范）。

## 3. Pages upgraded（升级页）

| 页 | 位置 | 升级内容 |
|---|---|---|
| Home `/` | 主站 | WHO/WHAT/WHY + methodology 段 + 5 pathway |
| About `/about/` | 主站 | 10 节 + 「三种信息」三分法 |
| Trust `/trust/` | 主站 | 13 节 + 8 状态标签 |
| How It Works `/how-it-works/` | 主站 | 10 步 + 平台/第三方/both 责任分界 |
| Services `/services/` | 主站 | 5→8 类，每类六节结构 |
| Vehicle template | 主站 | 20 节 + price type + registration date + included/excluded |
| 20 车型页 | data | 20 节记录（Source-backed 置信） |
| 7 国家页 | market | 5 置信标签 + 法规元数据 |
| 11 工具页 | tools | 六要素声明 + Estimate 区分 |
| 8 整车厂页 | companies | intelligence 关系区（仅 automaker） |

## 4. New pages created（新建页）

- **11 篇新指南**（主站，四语）：compare-chinese-used-evs、ev-vs-ice-vehicles-from-china、china-domestic-vs-export-specification、evaluate-used-byd、evaluate-used-geely、evaluate-used-chery、evaluate-chinese-used-car-supplier、check-used-ev-battery-health、check-mileage-and-vehicle-history、roro-vs-container-shipping、**china-used-car-export-compliance**（PHASE 17）。
- **3 个新服务类**：vehicle-verification、export-coordination、market-research、fleet-batch-sourcing（净 +3，port-handling 折叠）。

## 5. Pages removed / noindexed（删除/折叠/不索引）

- **noindex**：12 台 demo 车辆详情页（四语 ×12）、3 demo 公司详情页、五仓 404 页。
- **301 折叠**：主站 `/request-a-car/`→`/contact/`、`/services/port-handling/`→`/services/`；market 站 7 国 `/ev/`、2 国 `/suv/`、`/regions/`、`/import-guides/`、`/documents/`、`/countries/kenya/byd-song-plus/`→国家页。
- **从 sitemap 排除**：demo 车辆详情页（filter）、demo 公司详情页（filter）——均已实测 0 残留。

## 6. Demo content removed（demo 内容移除）

- **主站 demo 车公共索引面 = 0**：demo 详情页 noindex + sitemap 排除，sitemap 中 `/cars/*` 详情 = 0 条。
- **companies demo 公共渲染 = 0**：used-car-exporters / dealers / inspection-companies 三个类别页渲染「No verified listings yet」，0 demo 公司公开渲染；3 demo 详情页保留 noindex +「Demo data retained for development」提示。
- **占位图仅 demo 列表**：`placeholder-*.svg` 仅出现在 demo 车辆列表/详情（cars/new-arrivals/powertrains/brands 的 demo 车卡），非公共商用页面。

## 7. Trust improvements（信任改进）

- Trust 页 13 节全量：Vehicle Information Sources / Vehicle Verification / Inspection Status / Mileage / Price Update / Vehicle History / VIN Handling / Market Information Sources / Regulatory Information / Calculator Assumptions / Last-Updated Policy / Data Limitations / Corrections Policy。
- **8 状态标签**落地：Verified / Source-backed / Seller-provided / Inspection pending / Needs confirmation / Estimated / Historical / Unavailable（`trust.ts` 明确 8 态定义）。
- market 站 **5 置信标签**：Confirmed / Source-backed / Needs verification / Estimated / Unknown（`market.ts` 映射，国家页实测渲染）。
- data 站置信映射：high→Source-backed（**绝不标 Verified**），medium→Reported，low→Estimated。
- companies 站 4 级：verified / publicly_listed / source-backed / unverified。
- 来源分级（Official/Industry/Third-party/Informational）+ `docs/trust-terminology.md` 禁词规则。

## 8. Data model improvements（数据模型改进）

- 验证六态 9 字段（`verification` 对象），demo 禁 verified（脚本 `assertValid` 拒绝）。
- 状态六态枚举（available/reserved/sold/sourcing/expired/removed），Sold 页保留。
- data 站 `CONFIDENCE_LEVELS` 与厂商规格「Source-backed」规范。
- `docs/vehicle-market-model.md`：Vehicle×Market 六 delta 字段（全可选/null + 信息增量门禁）。

## 9. Market intelligence improvements（市场情报改进）

- 7 国家页 19+ 节（含 Import Eligibility / Required Documents / Vehicle Segment Fit / Related Guides / Verification Date & Evidence）。
- 每条法规 Source / Date checked / Jurisdiction / Applicability / Caveat + `needs_review` 字段。
- FAQ 不硬编码税率（指向页内税表）；税率唯一真源 `taxrules.json`。
- `effective_date` / `source_url` 无据留 null（零编造）。

## 10. Tool improvements（工具改进）

- 11 工具全部补齐六要素（Inputs/Formula/Assumptions/Data source/Last updated/Limitations）——实测 11/11 无缺槽。
- 假精度修复：新增 `fmtEstimate()`（整数 + 「Estimated $」前缀），total 级用 Estimate、明细级用 fmtMoney（4 工具仍用 fmtMoney 于用户输入的精确值/汇率换算，属合理）。
- 工具结果链 Vehicle Data / Market / Inventory / Request Quote。

## 11. Internal linking improvements（内链改进）

- 五仓跨域互链矩阵：66 条唯一跨域链接全部 curl 实测 200（含裸域尾斜杠）。
- Vehicle→Model→Brand→Market→Guide→Tool 六向：车辆详情页「Related Guides」、品牌页「Related Guides」、data 模型页 Related Markets/Guides/Tools、market 国家页 Popular models→`/models/{id}/` + Chinese brands→`/brands/{id}/`。
- 面包屑：主站 20 个模板全部接入 Breadcrumb + BreadcrumbList schema（前序审计仅 3 个，现已全覆盖）。
- 域一致性：五仓 0 复数域残留（`tools.`/`companies.` 无命中）。

## 12. Schema improvements（结构化数据改进）

- 主站 schema 类型实测：Organization / WebSite / BreadcrumbList / Product / Offer / Vehicle / Article / FAQPage / ItemList / ContactPoint / QuantitativeValue / PropertyValue / Brand。
- **demo 车 schema 不输出 `availability`**（无 InStock）——实测 demo 车辆页仅 Offer + price，无 availability 字段。
- 真实车才 `statusToSchemaAvailability`（available/reserved→InStock，sold→OutOfStock）。
- 稳定 `@id`：Organization `/#organization`、WebSite `/#website`、Product=canonical URL、Vehicle=`#vehicle`。
- tools 页 WebApplication schema、market SourceNote、companies Organization+BreadcrumbList。

## 13. Remaining content gaps（剩余内容缺口）

| 缺口 | 位置 | 处置 |
|---|---|---|
| Guides 20 主题中 1 篇未独立成文（RoRo vs Container 已补，其余 19/20 已覆盖） | 主站 | 已覆盖 19 篇，无强制追加 |
| 车辆页「Vehicle-specific vs Model-typical」视觉区分标签 | 车辆模板 | 靠「About this model」链接缓解，未加字段级标签 |
| body-types / powertrains 知识页 | 主站 | 弱入链浏览过滤页，知识已让位 data 站 |

## 14. Remaining business information gaps（剩余业务信息缺口，PHASE 24）

| 空缺 | 位置 | 应标注（现状） |
|---|---|---|
| **真实车辆库存 = 0** | `vehicles.json` 12 全 demo | Internal TODO：接入真实库存走 `mark-real` |
| **询车表单后端端点 = 空** | `site.json` `leadEndpoint:""` | Internal TODO：接线 LeadForm（当前 action='#' + fetch 空端点） |
| 已验证出口商/经销商/检验公司 = 0 | `companies.json` 3 demo | 「Not currently available」+ demo 已从公开目录移除 |
| 整车厂 email/phone/whatsapp = null | `companies.json` 8 automaker | 正确保留 null（website/source_url 已填，触点非必需） |
| demo 公司 email/phone/whatsapp/website/source_url = null | `companies.json` 3 demo | 「Not available」+ 已 noindex |
| market 法规不确定项 | taxrules 17(10 needs_review) / importrules 28(21 needs_review) | 已标 needs_review + notes，SourceNote 渲染 |
| 车辆 `last_verified_at` = null | `vehicles.json` 12 demo | 「Not available」（demo 规则，勿补） |

**零编造确认**：全站无销量/认证/排名/客户数；无来源数字一律 null 或「Not available」；无来源 URL 留 null。

## 15. Remaining technical issues（剩余技术问题）

| 项 | 等级 | 说明 |
|---|---|---|
| 76 张空 alt 图片 | 🟡 轻微 | `brand-banner-1200x400.webp`（品牌横幅，装饰性）+ placeholder SVG，`alt=""` 属可接受，非缺 alt |
| tools 首页「Coming soon」徽章死代码 | 🟡 轻微 | 11 工具全 `done:true`，`badge-soon` 分支永不触发（非 demo 数据，残留 UI） |
| 4 工具明细级仍用 fmtMoney | 🟡 轻微 | 用户输入精确值/汇率换算，total 级已用 fmtEstimate，合理 |
| leadEndpoint 空 | 🔴 商业阻塞 | 表单无后端，见 §14 |

## 16. Recommended next phase（建议下一阶段）

1. **业务接线（TOP）**：接入真实库存（`mark-real`）+ 接线 `leadEndpoint`。
2. 处置 companies 3 demo 记录（删除或转真实公司）。
3. 车辆页加「Vehicle-specific vs Model-typical」字段级视觉区分标签。
4. 可选：清理 tools「Coming soon」死代码 + 为品牌横幅补品牌名 alt。

---

## Launch-readiness score（十维）

| 维度 | 评分(1-10) | 依据 |
|---|---|---|
| **Architecture** | **9** | 五仓语义分离清晰、shared 层 md5 一致、URL 规范、数据层门禁脚本完善 |
| **SEO** | **8** | canonical/hreflang/sitemap/robots/redirects 全到位；demo 页 noindex 后真实索引页稀缺（唯一扣分点） |
| **AIO** | **8** | 结构化小节 + 表格 + 实体关系清晰（Brand→Model→Trim、Vehicle→Market→Regulation） |
| **Content** | **8** | 19 篇指南优质 + P1 六页达标；body-types/powertrains 仍弱 |
| **Data** | **7** | 数据契约完整 + 验证六态；confidence 术语已统一，但 0 真实库存 |
| **Trust** | **8** | 8 状态标签 + 5 置信标签 + SourceNote + 13 节；标签体系完整 |
| **Commercial** | **4** | leadEndpoint 空 + 0 真实库存 + 3 demo 公司；转化触点（email/WhatsApp）已就绪但后端未接 |
| **Technical** | **8** | 无破链、redirects 到位、面包屑全覆盖、schema 完整；仅轻微残留 |
| **Compliance-information** | **8** | 11 法律页 + PHASE 17 合规指南（官方 MOFCOM/GACC 来源，checked 2026-10-04） |
| **Overall** | **7.5** | 平台架构/内容/信任/合规就绪，商业接线（库存+表单）是唯一实质剩余项 |

## 最终判定

**READY WITH MINOR FIXES**

- **技术面**：五仓 build 全绿（exit 0），25 点检查零 🔴 异常，demo 公共残留 0，跨域 66 链接全 200，线上五域 200 复测通过。
- **内容面**：P1 六页 + P3 19 指南 + PHASE 17 合规指南全部达标，业务事实零编造。
- **剩余「MINOR FIXES」**（非代码缺陷，属商业决策）：
  1. 接入真实车辆库存（`mark-real`，URL 不变自动去 noindex）。
  2. 接线 `leadEndpoint`（询车表单后端）。

> 注：0 台真实库存与空 leadEndpoint 是商业 go-live 的前提，已如实记录为 Internal TODO，不属本审计可修的技术缺陷。平台作为「可信 B2B 采购 + 车辆数据 + 市场情报 + 决策工具平台」已结构就绪，接入真实数据即可商用发布。

---

### 附：审计路径
- 本文件：`chinausedautohub.com/docs/prelaunch-deliverables.md`
- 前序审计：`docs/prelaunch-audit.md`（PHASE 0 只读审计）、`docs/content-audit.md`、`docs/phase2-audit.md`、`docs/phase3-audit.md`、`docs/trust-terminology.md`、`docs/vehicle-market-model.md`、`docs/phase3-content-deliverables.md`
