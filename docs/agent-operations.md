# Agent Operations — 车辆数据更新接口

本文件说明未来 Agent（或人工脚本）如何**安全地**更新车辆库存。核心纪律：**Agent 永远不直接改页面 HTML**，只能通过结构化数据层 + 校验脚本操作。

## 数据层位置

| 文件 | 内容 |
| --- | --- |
| `src/data/vehicles.json` | 车辆库存（唯一真值来源） |
| `src/data/models.json` | 车型字典（车型 → 品牌/车身/燃料/简介） |
| `src/data/brands.json` | 品牌字典 |
| `src/data/body-types.json` / `fuel-types.json` / `transmissions.json` / `drive-types.json` | 受控词表 |
| `src/data/markets.json` | 目的国/市场骨架 |
| `src/data/changelog.json` | 每次更新的变更历史（追加，不覆盖） |

展示层（Astro 组件/页面）只通过 `src/lib/data.ts` 读取上述数据，**绝不 import 原始 JSON**。因此未来把 JSON 换成数据库/API 时，只需改写 `data.ts`，前端零改动。

## 支持的操作

通过 `scripts/update-vehicle.mjs` 执行（见 `npm run agent:update -- <action> ...`）：

| Action | 说明 |
| --- | --- |
| `list` | 只读列出库存 |
| `create` | CREATE VEHICLE（新建车辆） |
| `update` | UPDATE VEHICLE（`--set key=value` 可重复，任意字段） |
| `update-price` | UPDATE PRICE |
| `update-status` | UPDATE STATUS |
| `update-images` | UPDATE IMAGES（逗号分隔图片列表） |
| `update-specs` | UPDATE SPECS（`--set label=value` 可重复） |
| `mark-reserved` | MARK RESERVED（`status → reserved`） |
| `mark-sold` | MARK SOLD（`status → sold`，**保留页面**，不 404） |

### 示例

```bash
# 建一辆新车
node scripts/update-vehicle.mjs create \
  --vehicle-id byd-han-2024-001 --vin VIN123 --brand byd --model han \
  --year 2024 --mileage 12000 --body-type sedan --fuel ev --price 28000 \
  --currency USD --source agent

# 改价
node scripts/update-vehicle.mjs update-price --vehicle-id byd-song-plus-2024-001 --amount 23900 --currency USD

# 改状态
node scripts/update-vehicle.mjs mark-sold --vehicle-id byd-song-plus-2024-001

# 补规格
node scripts/update-vehicle.mjs update-specs --vehicle-id byd-song-plus-2024-001 --set "Battery=18.3 kWh" --set "Seats=5"

# 通用字段更新
node scripts/update-vehicle.mjs update --vehicle-id X --set status=reserved --set color=Black
```

## 校验规则（每次写入前强制执行）

| 字段 | 规则 |
| --- | --- |
| `price.amount` | 必须 `> 0` |
| `mileage_km` | 必须 `>= 0` |
| `year` | 必须为整数，且在 `1990` ～ `当前年+1` 之间 |
| `status` | 只能 `available` / `reserved` / `sold` / `unavailable` |

非法输入会直接报错退出（exit 1），**不写入**。

## 重复检测

新建（`create`）时按以下优先级判断重复：

1. **VIN**（大小写不敏感）优先；
2. 其次 `brand + model + year + mileage_km + source` 组合。

命中任一即拒绝创建，并提示已存在的 `vehicle_id`。

## Changelog 记录

每次变更追加一条记录到 `src/data/changelog.json`：

```json
{
  "vehicle_id": "...",
  "timestamp": "ISO-8601",
  "action": "update-price",
  "changed_fields": ["price"],
  "old_value": { "amount": 24800, "currency": "USD" },
  "new_value": { "amount": 23900, "currency": "USD" },
  "source": "agent",
  "agent": "scripts/update-vehicle.mjs"
}
```

历史只追加、从不覆盖。

## 红线（禁止事项）

- ❌ 禁止删除任何车辆记录（脚本无 delete 操作；数据清理需人工确认）。
- ❌ 禁止直接编辑 `.astro` / `.html` 页面。
- ❌ 禁止编造缺失数据 —— 未知值写 `Not provided` 或留空。
- ❌ 人民币原始价不可覆盖：只更新 `price`（展示价），`original_price` 保留来源价。

## Demo 数据批量清除

上线前清除全部 `is_demo:true` 的样车：

```bash
node scripts/clear-demo-data.mjs        # 预览
node scripts/clear-demo-data.mjs --yes  # 备份后执行
```

脚本会先把当前 `vehicles.json` 备份到 `src/data/backups/vehicles-<时间戳>.json`，再删除 demo 记录。
