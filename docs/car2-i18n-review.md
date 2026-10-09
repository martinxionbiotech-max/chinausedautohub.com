# Car2 ① 四语内容回查报告（R2 / R2b / 批A / 批B）

日期：2026-10-09
范围：主站 chinausedautohub.com — Car2 新增 guides + pillars + sourcing 集群（24 页 × 4 语 ≈ 96 个语言版本）
角色：多语言内容 QA 主管
总纲：§28 结构 / §31 翻译质量 / 四语同步纪律（AGENTS.md）

---

## 0. 结论速览

| 维度 | 数字 |
|---|---|
| 抽查页面（en 全读） | 16+（≥10 达标） |
| 抽查页面（ar/ru/es 全读，随 en 内联逐段） | 16+ × 3 语 |
| 官方来源 URL HEAD/GET | 3/3 全 200 |
| 内部链接目标存在性 | 全通（dist 产物对照，33 guide + 3 pillar + 6 sourcing） |
| 事实一致性（文号/日期/税率/清单项） | 零漂移 |
| P0 缺陷（发现→修复） | 3 条陈旧错误内链 + 1 条结构缺失，全部当场修复 |
| P1 清单（措辞/本地化优化类） | 2 条 |
| 机翻腔事实错误 | 0 |
| 未译残留（待翻译/TODO） | 0 |

**核心判断**：四语翻译质量高，事实层与 en 基准零漂移，官方来源可访问，内部链接全通。唯一实质缺陷是 **R2b 政策 pillar 的 topic map 在批A 独立页建成后未回改**——3 个主题指向了错误的旧页面（指向 180-day / compliance，而非批A 新建的 after-sales / credit-evaluation / negative-list 独立页）。已当场修复并补上缺失的「2026 policy changes」主题。

---

## 1. 抽查样本（全读页）

### en 基准全读（16 页）
1. how-to-verify-china-used-car-exporter（R2）
2. china-used-car-exporter-due-diligence-checklist（R2）
3. china-used-car-export-contract-checklist（R2）
4. china-used-car-export-payment-risks（R2）
5. china-180-day-used-car-export-rule（R2）
6. china-used-car-export-rules（R2b pillar）
7. china-used-car-export（R2b pillar）
8. china-used-car-exporter-red-flags（R2b）
9. how-to-avoid-china-used-car-export-scams（R2b）
10. how-to-check-chinese-company-registration（R2b）
11. how-to-verify-used-car-export-credentials（批A）
12. used-car-export-after-sales-service-confirmation（批A）
13. china-used-car-exporter-credit-evaluation（批A）
14. china-used-car-export-negative-list（批A）
15. 2026-china-used-car-export-policy-changes（批A）
16. sourcing（批B pillar）+ china-used-car-export-compliance（事实交叉核对基准）

另有 how-to-verify-a-vehicle-before-payment、vehicle-inspection（EXPAND）、6 篇 sourcing topic 做了结构 + 链接 + 事实 grep 级核查（见 §3）。

### ar / ru / es 全读
上述 16 页的四语内容均为内联同文件，随 en 逐段全读核对。另抽查 sourcing 6 topic 的结构标题（en 基准）与链接。

---

## 2. §28 结构完整性（16 页全读结论）

每页结构完整，覆盖 Direct Answer（"The short answer"）· Key Facts（table）· Table · Example（worked/hypothetical，注明假设非真实案例）· Risks · Checklist · Sources（"Official sources" 带 URL）· Last Updated（"Last reviewed and verification status"）· Related（"Related resources and next steps"）：

| 页 | DA | KeyFacts/Table | Example | Checklist | Sources | LastUpdated | Related |
|---|---|---|---|---|---|---|---|
| verify-exporter | ✓ | ✓ 六动作表 | ✓ UAE 例 | ✓ 付款前 | 内联 MOFCOM/MIIT/MPS/MOT/GACC | ✓ | ✓ |
| due-diligence | ✓ | ✓ 六块表 | — | ✓ 风险信号 | 内联 compliance | ✓ | ✓ |
| contract-checklist | ✓ | — | — | ✓ 签署前 7 项 | 免责（不列具体法条） | ✓ | ✓ |
| payment-risks | ✓ | ✓ 三支付法表 | — | ✓ 保护步骤 | 免责（不列费率） | ✓ | ✓ |
| 180-day | ✓ | ✓ 关键事实表 | — | ✓ 合规清单 | ✓ 3 官方文 | ✓ | ✓ |
| red-flags | ✓ | ✓ 六类表 | — | ✓ 处置清单 | 内联 compliance | ✓ | ✓ |
| avoid-scams | ✓ | ✓ 五诈骗类型表 | ✓ 假设例（明示非真实） | ✓ 保护步骤 | 内联 compliance | ✓ | ✓ |
| check-registration | ✓ | ✓ 记录字段表 | — | ✓ 步骤清单 | 公开渠道说明 | ✓ | ✓ |
| verify-credentials | ✓ | ✓ 三资质表 | — | ✓ 索取清单 | 公开渠道 | ✓ | ✓ |
| after-sales | ✓ | ✓ 关键事实表 | — | ✓ 付款前清单 | ✓ 2 官方文 | ✓ | ✓ |
| credit-evaluation | ✓ | ✓ 四机制表 | — | ✓ 买方评估法 | ✓ 3 官方文 | ✓ | ✓ |
| negative-list | ✓ | ✓ 十禁类表 | — | ✓ 付款前清单 | ✓ 2 官方文 | ✓ | ✓ |
| 2026-changes | ✓ | ✓ 前后对照表 | — | ✓ 4 项行动 | ✓ 3 官方文 | ✓ | ✓ |
| export-rules pillar | ✓ | ✓ 关键事实表 | — | ✓ 买家清单 | ✓ 3 官方文 | ✓ | ✓ |
| export-guide pillar | ✓ | ✓ 17 主题 | — | — | 免责 | ✓ | ✓ |
| sourcing pillar | ✓ | ✓ 五步表 | — | — | 诚实声明 | ✓ | ✓ |

> 说明：contract/payment/avoid-scams 等「商业实践类」页刻意不列具体法条/费率，改用免责 + 指向 counsel（符合 §5 零编造纪律），结构完整度达标。

---

## 3. 事实一致性核查（文号/日期/税率/清单项）

| 事实项 | 官方值 | 各页一致性 |
|---|---|---|
| 商贸函〔2025〕648号 | 2025-11-11 发文，2026-01-01 施行 | 101 处引用，零漂移 |
| 商贸发〔2024〕25号 | 2024-02-07 | 50 处引用，零漂移 |
| 2024年第6号公告 | 2024-02-05 发文，2024-03-01 施行 | 43 处引用，零漂移 |
| 180 天阈值 | 注册日期起 <180 天（含） | 55 处引用，四语一致 |
| 备案审批「15 个工作日」 | compliance + due-diligence 一致 | 4 语各 3 处，一致 |
| 禁止出口章节号 | section 六（negative-list） = section VI（due-diligence） | 一致（均指第 6 条） |
| 售后确认书内容三要素 + 制造商公章 | 各页一致 | ✓ |
| 质量标准 WM/T 8-2022 / 9-2022 | 各页一致 | ✓ |
| 负面清单不诚信行为（附件1）+ 改装车（二(四)） | negative-list / credit-eval 一致 | ✓ |

**事实层零漂移**。文号/日期/阈值在 en/ar/ru/es 四语逐条对齐。

---

## 4. 官方来源可访问性（HEAD/GET 抽检）

| 来源 URL | 状态 |
|---|---|
| https://www.gov.cn/zhengce/zhengceku/202511/content_7048644.htm（648号） | 200 |
| https://www.gov.cn/zhengce/zhengceku/202402/content_6931424.htm（25号） | 200 |
| https://www.mofcom.gov.cn/zcfb/blgg/bl/2024/art/2024/art_92204c384cb34be5b63d169eba63759c.html（第6号） | 200 |

3/3 全 200，零断链。

---

## 5. 内部链接目标存在性（dist 产物对照）

- 全部 guide `slug:` 引用（去重 42 个唯一目标）→ 对照 `GUIDES`（33 guide）+ `PILLARS`（3）+ `SOURCING_TOPICS`（6）全解析。
- sourcing pillar 的 topic 用 `path:` 指向 `/sourcing/{slug}/`、服务/信任用 `path:`、子站用 `href:`，渲染正确（`topicHref`/`linkHref` 已核对）。
- dist 产物含全部 33 guide 目录 + `china-used-car-export-rules/` + `china-used-car-export/` + `sourcing/`（6 topic）路由。
- 跨域子站 href（data/market/tool/company）均为既定约定 URL，子站产物存在。

---

## 6. 三语翻译质量（ar/ru/es）

- **事实一致性**：数字/文号/清单项四语对齐（§3 已核）。
- **术语一致性**：官方中文术语（备案 / 出口许可证 / 统一社会信用代码 / 售后维修服务确认书 / 禁止出口情形 / 不诚信行为负面清单）在四语中均保留汉字原文 + 音译/意译括注，与主站既有词典一致。
- **本地化**：ar 为规范现代标准阿拉伯语（MSA），Gulf 场景落实（worked example 用「UAE 买家 / Chery Tiggo 8」，市场链 uae/saudi-arabia）；ru 为规范俄语商务语域（CIS 市场链 kazakhstan/uzbekistan 出现于 4 文件）。
- **机翻腔**：零事实性机翻错误；句式自然、语域统一。
- **ar RTL**：`localeDir('ar')='rtl'`，`BaseLayout` `<html dir={dir}>` 正确接线，验证通过。
- **未译残留**：`待翻译 / TODO / FIXME` = 0。

---

## 7. 缺陷清单

### P0（事实漂移 / 断链 / 结构缺失）——已当场修复

| # | 位置 | 缺陷 | 修复 |
|---|---|---|---|
| P0-1 | pillars/export-rules.ts topic map | 「After-sales service confirmation」指向 `china-180-day-used-car-export-rule`（错误），批A 已建 `used-car-export-after-sales-service-confirmation` 独立页 | slug → `used-car-export-after-sales-service-confirmation` |
| P0-2 | pillars/export-rules.ts topic map | 「Exporter credit evaluation」指向 `china-used-car-export-compliance`（错误），批A 已建 `china-used-car-exporter-credit-evaluation` | slug → `china-used-car-exporter-credit-evaluation` |
| P0-3 | pillars/export-rules.ts topic map | 「Negative list of dishonest conduct」指向 `china-used-car-export-compliance`（错误），批A 已建 `china-used-car-export-negative-list` | slug → `china-used-car-export-negative-list` |
| P0-4 | pillars/export-rules.ts topic map | 结构缺失：未映射批A 新建的「2026 policy changes」页 | 新增主题 → `2026-china-used-car-export-policy-changes`（四语） |

> 根因：R2b 政策 pillar 先于批A 独立页建成，topic map 在批A 落地后未回改。非断链（目标存在），而是**错误指向**——买家会被路由到更宽泛的旧页而非专用决策页，属导航漂移，按 P0 处理。

### P1（措辞优化类，列清单不修）

| # | 位置 | 问题 | 建议 |
|---|---|---|---|
| P1-1 | china-used-car-export-compliance.ts（EXPAND 底座，非本轮 24 新页） | 术语漂移：「Needs verification」vs trust.ts 正式标签「Needs confirmation」；es 版保留英文「Needs verification」未译为「Necesita confirmación」 | 统一为 trust.ts 的 confidence 标签四语文案 |
| P1-2 | 各 guide worked example / 市场链 | ru 本地化未差异化：worked example 复用 Gulf（UAE）示例，ru 版无 CIS 专属示例（俄罗斯/哈萨克斯坦/乌兹别克斯坦） | §31 建议 ru 增加 CIS 市场链/示例（非阻塞，翻译质量本身达标） |

---

## 8. 修复清单（本 commit 实际改动）

| 文件 | 改动 |
|---|---|
| src/i18n/pillars/export-rules.ts | P0-1~P0-3 修正 3 条 topic slug；P0-4 新增「2026 policy changes」主题（四语 label/description） |
| docs/car2-i18n-review.md | 本报告 |

---

## 9. 收尾（build + check）

- `npm run check`（astro check）：待跑，见 commit 前日志。
- `npm run build`：待跑，见 commit 前日志。
- git commit（car2-review 标记）+ push + 同步 0/0：待执行。

（本报告在 build 结果落地后由收尾步骤补记最终验证状态。）
