# AGENTS.md — chinausedautohub.com

China Used Auto Hub（中国二手车出口商业站）。Astro 5 + Tailwind + 静态优先 + Cloudflare Pages。
总纲：/root/.openclaw/workspace/phase2/42-car-export-platform-prompt.md（§1-§30 全部约束仍然有效）。

## 多语言同步规则（用户明确要求，长期有效）

网站四语：英语（默认，无 URL 前缀）+ 阿拉伯语 /ar/ + 俄语 /ru/ + 西班牙语 /es/。

**主站任何内容更新，必须四语同步更新，同一 commit 内完成：**

1. 新增/修改 UI 字符串、模板标签、CTA、表单字段、页面正文 → 必须同步更新
   `src/i18n/{en,ar,ru,es}.json` 词典（或各语内容文件），**禁止只改英文**；
2. 新增/修改车辆数据（description/condition/export 文本字段）→ 四语同步；品牌名/车型名/专有名词不翻译；
3. 新增页面 → 同步生成四语路由 + hreflang 互链 + 每语独立 title/description；
4. 阿拉伯语页必须保持 `dir="rtl"`；所有新 UI 组件必须 RTL 兼容（用 logical properties）；
5. 提交前自检：`grep -rn "待翻译\|TODO" src/i18n` 无残留；三语页面无整段未译英文（专有名词除外）。

## 其他硬约束

- 数据层（src/data/*.json）与展示层分离；Agent 更新只能走 scripts/update-vehicle.mjs（changelog + validation + 禁删）。
- 库存生命周期：Sold 页面保留不 404；状态枚举 available/reserved/sold/unavailable。
- 零虚构商业数据（销量/认证/排名/客户数）；Demo 数据 is_demo 标记，上线前 scripts/clear-demo-data.mjs 清除。
- 唯一 title/description/H1 + canonical + Schema 与页面可见信息一致（禁伪造 Rating/价格）。
- 子站（data/companies/tools/market.chinausedautohub.com）内容不复制进主站。
- 联系方式只放真实触点（site.json）。
