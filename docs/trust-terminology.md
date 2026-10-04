# Trust & Source Terminology — chinausedautohub.com

> 本文件是主站 + 四子站（data / market / tools / company）共用的「信任 / 来源 / 验证」术语规范。
> 所有面向用户的文案必须遵守本表；禁止无证据使用 `official` / `verified` / `certified`（见 §4）。

---

## 1. 统一术语（展示于车辆页 / 公司页 / 市场页 / 数据页）

| 术语 | 英文 | 含义 |
|---|---|---|
| Source | Source | 信息来自哪里（卖家 / 数据提供方 / 官方资料等）。真实来源名；demo 车如实显示 `demo` |
| Last checked | Last checked | 该信息最近一次被核对/更新的时间（无则显示 Not Available） |
| Last updated | Last updated | 该条目最近一次更新的时间（`updated_at`） |
| Data availability | Data availability | 字段中「有数据」的比例/状态（如 `2 of 9 verification fields available`） |
| Verification level | Verification level | 单个字段的六态验证级别（见 §2） |

---

## 2. 六态验证级别（车辆详情页 §8）

每个车辆字段（Mileage / Vehicle identity / Photos / Inspection / Battery report / Service history / Documents / VIN / Export eligibility）标记为以下六态之一：

| slug | 英文 | 含义 |
|---|---|---|
| `verified` | Verified | 已与我们持有的可靠来源/文件核对（如 VIN 或登记文件） |
| `provided` | Provided | 由来源（卖家/经销商/数据提供方）提供，未经独立验证 |
| `seller_supplied` | Seller Supplied | 由卖家直接提供，未经独立验证 |
| `source_backed` | Source-backed | 有可引用的来源支撑（如厂商规格），但未独立复核 |
| `not_available` | Not Available | 我们未持有该信息，明示缺失而非猜测 |
| `not_independently_verified` | Not Independently Verified | 该信息已展示，但尚未独立验证 |

**硬规则**：`verified` 仅在确有独立依据时使用。**Demo 车辆绝不使用 `verified`**，只允许 `provided` / `not_available`。

数据层 slug 与展示层词典键的对应关系见 `src/i18n/{en,ar,ru,es}.json` 的 `confidence.*`（六态键 `provided` / `verified` / `sellerSupplied` / `sourceBacked` / `notAvailable` / `notIndependentlyVerified`）与 `src/i18n/trust.ts`（信任页六态说明）。

---

## 3. 市场数据的四源分级（market 子站使用）

market 子站（以及后续 data 子站）的每条规则/数据标注四源分级之一：

| 等级 | 英文 | 含义 | 示例 |
|---|---|---|---|
| 1 | Official source | 政府 / 海关 / 监管机构的正式文件 | 海关税率表、官方进口法规 |
| 2 | Industry source | 行业协会 / 权威行业出版物 | 行业协会报告、专业媒体 |
| 3 | Third-party source | 第三方服务商 / 商业数据源 | 货代报价、第三方数据库 |
| 4 | Informational reference | 信息性参考，需人工复核 | 非官方说明、经验性信息 |

**规则**：
- 每条市场数据必须带 `source`（四源分级之一）+ `source_url`（如有）+ `last_checked` + `confidence`。
- 税率 / VAT / 年限 / 限制等易变数据标 `needs_review: true`，不硬编码到正文（见 phase3-audit §8.2）。
- 无引用的数据不得标注 `Official source`；不确定时降级为 `Informational reference`。

---

## 4. 禁词规则（`official` / `verified` / `certified`）

以下措辞**只有在有真实证据支撑时**才允许出现：

| 词 | 允许条件 |
|---|---|
| `official` | 指向真实政府/官方来源（如 official customs tariff），且附来源链接 |
| `verified` | 六态中确有独立核对的字段（demo 车禁用） |
| `certified` | 指向真实的、可查证的认证体系（无认证体系时禁用） |

**终检命令**：

```bash
grep -rniE "certified|verified|official" src --include=*.astro --include=*.ts --include=*.json \
  | grep -viE "not_independently_verified|not independently verified|verification|verificationLevel|seller_supplied|verified\",|verified'|notAvailable|// " \
  | grep -v "docs/"
```

预期：仅剩合法的 `verified`（六态词典/信任页定义）+ `verification`（系统名），无「certified 车辆」「officially verified」等无据声明。

---

## 5. 落地文件清单

| 层 | 文件 |
|---|---|
| 数据层（六态） | `src/data/vehicles.json`（每车 `verification` 对象，9 字段） |
| 类型 | `src/lib/types.ts`（`VerificationLevel` / `Verification`） |
| 词典（四语） | `src/i18n/{en,ar,ru,es}.json`（`confidence.*` 六态 + 九字段 + Source/Last checked 等） |
| 信任页 | `src/i18n/trust.ts`（六态定义，四语） |
| 车辆详情页 | `src/templates/VehicleDetailPage.astro`（Vehicle Information & Verification 区块） |
| 数据更新接口 | `scripts/update-vehicle.mjs`（`verification` 字段校验 + 六态枚举 + demo 禁 `verified`） |
