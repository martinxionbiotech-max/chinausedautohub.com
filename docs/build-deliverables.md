# Build Deliverables — China Used Car Export（Phase 1）

> 总纲：`/root/.openclaw/workspace/phase2/42-car-export-platform-prompt.md`
> 技术栈：Astro 5 + TypeScript + Tailwind CSS 3 + 静态输出 + Cloudflare Pages 兼容 + Schema.org
> 构建：`npm run build` ✅（35 页，静态 HTML，无 SPA，无 WordPress）

---

## 1. URL Tree

```
/                                   首页（§6 全结构）
/cars/                              车辆目录（搜索/筛选/排序/Load More）
/cars/{brand}/{model}/{inventory-id}/ 车辆详情（12 台 demo）
/brands/                            品牌目录
/brands/{brand}/                    品牌页（8 个）
/body-types/                        车型分类目录
/body-types/{type}/                 车型分类页（suv / sedan）
/new-arrivals/                      新到车辆
/request-a-car/                     求购表单
/how-it-works/                      购买流程
/about/                             关于
/contact/                           联系
/privacy/ · /terms/ · /cookies/     法律页
/404.html                           404
```

**Inventory URL 示例**：`/cars/byd/song-plus/byd-song-plus-2024-001/`
（brand slug / model slug / vehicle_id 三段，稳定、唯一、可预测）

---

## 2. Component Tree

```
BaseLayout.astro（head/SEO/canonical/schema + <slot/>）
├── Header.astro（主导航 + 外部资源区 + 移动菜单）
├── Footer.astro（浏览/公司/资源/法律/联系方式）
├── Breadcrumb.astro（面包屑 + BreadcrumbList schema）
├── SearchModule.astro（Hero 搜索模块）
├── VehicleCard.astro（车辆卡，含 data-* 属性供筛选）
└── LeadForm.astro（询盘表单，variant=full|quote，含校验/honeypot/成功/错误态）
```

数据访问统一走 `src/lib/data.ts`（见 §3），页面/组件不直接 import 原始 JSON。

---

## 3. Data Schema（数据层）

| 实体 | 文件 | 关键字段 |
| --- | --- | --- |
| `Vehicle`（库存单元） | `src/data/vehicles.json` | `vehicle_id, vin, brand, model, year, mileage_km, body_type, fuel, transmission, drive, color, location, status, price{amount,currency}, original_price, images[], specs[], description, condition{}, export, is_demo, source, created_at, updated_at` |
| `VehicleModel`（车型） | `src/data/models.json` | `slug, brand, name, bodyType, fuelType, shortDescription, dataUrl` |
| `Brand` | `src/data/brands.json` | `slug, name, fullName, country, overview, dataUrl` |
| `BodyType` | `body-types.json` | `slug, name, description` |
| `FuelType` | `fuel-types.json` | `slug, name, description` |
| `Transmission` | `transmissions.json` | `slug, name` |
| `DriveType` | `drive-types.json` | `slug, name` |
| `Market`（目的国骨架） | `markets.json` | `slug, name, region, dataUrl` |

**关键设计**：
- 展示层与数据层逻辑分离：页面只调 `src/lib/data.ts` 的访问函数（`getAllVehicles()`、`getVehicle()`、`filterVehicles()`、`getSimilarVehicles()` 等）。未来迁数据库/API 只改 `data.ts`。
- 价格双轨：`price`（展示价，USD）+ `original_price`（来源价，CNY），互不覆盖。
- `status` 枚举：`available / reserved / sold / unavailable`。Sold 页保留（不 404）。
- 时间戳：`created_at` / `updated_at`，详情页显示 "Last updated"。

---

## 4. Vehicle Schema（结构化数据）

详情页输出 `Product` + `Vehicle` + `Offer` + `BreadcrumbList`，另附 `FAQPage`（按车辆真实问题，最多 3-4 条）。

- **价格与库存状态与页面一致**：`Offer.price` = `price.amount`；`Offer.availability` 映射 `available/reserved → InStock`，`sold → OutOfStock`。
- **禁伪造**：无 `rating` / `review` / `aggregateRating`。
- Demo 车辆以 `is_demo:true` + 页面 `DEMO DATA` 标注，`itemCondition = UsedCondition`。
- 列表页输出 `ItemList`；全局输出 `Organization` + `WebSite`。

---

## 5. SEO Strategy

- **每页唯一** `title` / `description` / `H1` / `canonical`（`BaseLayout` 统一生成，canonical 绝对 URL 指向 `SITE.url`）。
- **Sitemap**：`@astrojs/sitemap` 自动生成 `sitemap-index.xml` + `sitemap-0.xml`（34 个可索引 URL，404 排除）。
- **robots.txt**：`Allow: /` + Sitemap 引用。
- **BreadcrumbList**：所有内页面包屑。
- **核心数据在可抓取 HTML**：`/cars/` 服务端渲染全部车辆卡（含 `data-*` 属性），JS 仅做渐进增强筛选，非 JS 环境下所有卡片仍可见。
- **禁低价值程序化页**：品牌页/车型页仅当有真实车辆时生成（`getBrandsWithVehicles` / `getBodyTypesWithVehicles`）；无 `/cars/{brand}/a/...` 之类垃圾页。
- **AI/GEO 友好**：清晰标题、短事实性摘要、表格化规格、实体关系、原始数据（VIN/年份/里程/价格/状态可直接机器解析）。

---

## 6. Internal Linking Strategy

车辆 → 车型 → 品牌 → 数据站 → 市场 → 工具 的语义链：

| 页面 | 链接目标 |
| --- | --- |
| Vehicle 详情 | Brand 页（主站）· Model 数据页（data.example.com）· 相似车辆 · Request Quote · Tools |
| Brand 页 | 该品牌 Available Vehicles · Popular Models（→ data.example.com）· Vehicle Types · Related Data · Related Markets |
| Body Type 页 | 相关车辆 · 常见品牌 · 热门车型 · Request a Car |
| 首页 | Featured / Brands / Types / New Arrivals / Request / Market 入口 / Data·Tools 入口 / How It Works |

所有子站链接（data/tools/companies/market.example.com）均标注「future sub-site」，明确为外部资源区，与主站商业目录视觉区分。

---

## 7. Agent Update Architecture

- **唯一入口**：`scripts/update-vehicle.mjs`（CREATE / UPDATE / UPDATE PRICE / UPDATE STATUS / UPDATE IMAGES / UPDATE SPECS / MARK RESERVED / MARK SOLD）。
- **每次写入**：validation（price>0 · mileage≥0 · year 合理区间 · status 枚举）+ changelog 追加（`src/data/changelog.json`：vehicle_id / timestamp / changed_fields / old_value / new_value / source / agent）+ **禁删数据**。
- **重复检测**：VIN 优先，次 `brand+model+year+mileage+source`。
- **Demo 批量清除**：`scripts/clear-demo-data.mjs`（先备份到 `src/data/backups/`，再删 `is_demo:true` 记录）。
- 详见 `docs/agent-operations.md`。

---

## 8. 当前完成情况（Phase 1 已实现）

- ✅ 全部 10 类页面（§28 顺序）—— Homepage / 目录 / 详情 / 品牌 / 车型分类 / 求购 / 流程 / 关于 / 联系 / 法律页。
- ✅ 数据层（9 个 JSON 实体）+ 逻辑分离访问层。
- ✅ 12 台 Demo 样车（BYD/Geely/Chery/Changan/GAC/Great Wall/NIO/XPeng 真实在华车型），全部 `is_demo:true` + 页面 `DEMO DATA` 标注 + 示例价标注。
- ✅ 库存生命周期：available(10) / reserved(1) / sold(1)，Sold 页保留（"This vehicle has been sold" + 相似车辆 + 规格历史），不 404。
- ✅ SEO 系统：唯一 title/description/H1 + canonical + BreadcrumbList + sitemap + robots.txt + 内部链接链。
- ✅ 性能：静态 HTML 优先 · 图片懒加载 · 移动端优先（详情页首屏含 Price/Availability/Request Quote）。
- ✅ 视觉：白/浅灰底 + 单一品牌深蓝（`#182a44` 系）+ 大图 + 清晰价格层级 + 克制交互（无渐变/玻璃拟态/过度圆角）。
- ✅ `npm run build` 通过（35 页静态 HTML）。
- ✅ Agent 脚本 + 校验 + changelog + 重复检测 + demo 清除，经实测验证。
- ✅ 联系方式仅保留真实触点：`landengltd@gmail.com` + WhatsApp `+86 13323237275`。

## 9. 尚未完成项目

1. **域名**：`SITE.url` 默认 `https://china-used-car-export.pages.dev`（总纲未给正式域名），集中在 `src/data/site.json` 一处可改。
2. **GitHub 远程仓库**：尚未创建/关联（需用户授权后建），本次仅本地 commit。
3. **表单后端**：`LeadForm` 目前无真实接收端（`leadEndpoint` 为空，提交走本地成功提示 + honeypot 防垃圾）；待接入 Email / CRM webhook。
4. **真实图片**：全部使用统一中性占位图（SVG，明确标注 "DEMO — Placeholder image"），待替换真实车图 + 生成 WebP/AVIF 响应式尺寸。
5. **真实库存数据**：当前 12 台均为 demo，上线前需 `clear-demo-data` + 导入真实库存。
6. **子站**：data / tools / companies / market.example.com 均为占位链接（未来子站）。
7. **额外栏目**：`/fuel-types/`、`/featured-cars/`、`/markets/`、`/export/`、`/faq/` 未单独建页（总纲列为「按内容再增加」，非 Phase 1 必需）。
8. **Cloudflare Pages 部署配置**：尚未生成 `wrangler.toml` / 部署管线。

## 10. 后续建议

1. 确定正式域名后改 `src/data/site.json` 的 `url`（唯一改点），重建即可全局生效。
2. 接入询盘后端（Email / CRM webhook），把 `site.json` 的 `leadEndpoint` 填上真实地址。
3. 导入真实库存：用 `scripts/update-vehicle.mjs create` 批量建车（或写导入脚本复用同一数据层），替换 demo 后执行 `clear-demo-data --yes`。
4. 配图：上传真实车图到 `public/images/`，在 `Vehicle.images[]` 引用；考虑引入 `@astrojs/image` 做 WebP/AVIF 响应式输出。
5. 部署 Cloudflare Pages：build command `npm run build`，output `dist`，绑定域名。
6. 扩展栏目前，先有真实数据支撑（避免低价值页），再建 `/fuel-types/`、`/markets/` 等。
7. 未来 Agent 接入：直接调用 `update-vehicle.mjs` 或复刻其校验/去重/changelog 逻辑到服务端 API。
