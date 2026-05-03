# Maginex Education 网站 v2

新版 Maginex 留学官网。基于 Astro 构建的多页静态站，专为 SEO + 性能优化。

## 设计

- **风格**：黑白极简 + 柠檬黄 (#E8FF52) 高光 — Linear / Stripe 风
- **字体**：Inter (英文) + PingFang SC (中文)
- **响应式**：手机 / 平板 / 桌面三档断点

## 技术栈

- **Astro 4** — 静态站点生成
- **原生 CSS** — 不用 Tailwind / CSS-in-JS
- **Formspree** — 表单接收（需替换 endpoint）

## 项目结构

```
site/
├── src/
│   ├── data/
│   │   ├── site.js              # 全站数据：导航、顾问、案例、服务、FAQ
│   │   ├── articles.js          # 文章元数据
│   │   └── article-content.js   # 文章正文
│   ├── layouts/
│   │   └── Base.astro           # 全站布局：header / footer / nav
│   ├── pages/
│   │   ├── index.astro          # 首页
│   │   ├── consultants.astro    # 顾问团队
│   │   ├── cases.astro          # 学生案例
│   │   ├── services.astro       # 服务项目
│   │   ├── contact.astro        # 联系我们
│   │   ├── 404.astro
│   │   └── resources/
│   │       ├── index.astro      # 资源中心列表
│   │       └── [slug].astro     # 文章详情（动态路由）
│   └── styles/
│       └── global.css           # 全局样式 + 设计 tokens
├── public/                      # 静态资源
├── astro.config.mjs
└── package.json
```

## 本地开发

```bash
cd site
npm install
npm run dev
```

打开 http://localhost:4321 查看。

## 构建生产版本

```bash
npm run build
npm run preview  # 本地预览构建结果
```

构建产物在 `dist/`。

## 内容更新

### 添加新文章

1. 在 `src/data/articles.js` 的 `ARTICLES` 数组前面加一条记录（含 slug, title, cat, author 等）
2. 在 `src/data/article-content.js` 的 `ARTICLE_CONTENT` 对象里加一条 `'your-slug': { toc, body }`
3. body 是 HTML 字符串，支持 `.callout`, `.opt-grid`, `.case-box`, `.checklist`, `.mid-cta` 等内置组件
4. 重新构建即可，URL 自动是 `/resources/your-slug/`

### 修改顾问 / 案例

直接编辑 `src/data/site.js` 中的对应数组。

### 修改文案

- 顶部 banner / 公司信息 → `src/data/site.js` 中的 `SITE`
- 各页文案直接在对应 .astro 文件内修改

## 部署到 Vercel

### 第一次部署

1. 把代码 push 到 GitHub（建议仓库名 `maginext-v2`）
2. 打开 https://vercel.com/new
3. Import 你的仓库
4. **Framework Preset** 选 `Astro`
5. **Root Directory** 改成 `site`（如果整个仓库根就是 site/，则保持默认）
6. 点 Deploy
7. 30 秒后拿到 `xxx.vercel.app` 临时域名

### 绑定 maginext.com（Namecheap）

1. Vercel 项目 → Settings → Domains → 添加 `maginext.com` 和 `www.maginext.com`
2. Vercel 会显示 2 条 DNS 记录要求：
   - `A Record` `@` → `76.76.21.21`
   - `CNAME` `www` → `cname.vercel-dns.com`
3. 登录 Namecheap → Domain List → maginext.com → **Manage** → **Advanced DNS**
4. 删除现有 A Record 和 CNAME（建议先截图备份）
5. 添加上面 2 条记录，TTL 选 Automatic
6. 保存。等 5–30 分钟生效（可用 https://dnschecker.org 检查）
7. 回 Vercel 看 Domain 状态变成 ✅ 即可

### 推荐：先用子域名测试

部署后建议先把 `new.maginext.com` 指向 Vercel 测试一周，确认无误再切主域名。在 Namecheap 加：
- `CNAME` `new` → `cname.vercel-dns.com`

## 表单配置（Formspree）

1. 注册 https://formspree.io（免费版每月 50 次提交）
2. 创建 New Form，得到 endpoint 形如 `https://formspree.io/f/xyzabc123`
3. 全局替换 `REPLACE_ME` 为你的 endpoint：
   - `src/pages/index.astro` 第一个 `formspree.io/f/REPLACE_ME`
   - `src/pages/contact.astro`
4. 收件邮箱在 Formspree 后台配置

## SEO 已配置

- ✅ 每页独立 `<title>` `<meta description>`
- ✅ Open Graph 标签
- ✅ canonical URL
- ✅ 文章页 JSON-LD 结构化数据 (Article schema)
- ✅ 自动生成 sitemap.xml（@astrojs/sitemap）
- ✅ robots.txt（在 public/）

## 待替换的占位

- 顾问头像（目前是首字母色块）→ 真人照片，放 `public/avatars/`
- 合作机构 logo（目前文字）→ 实际 logo SVG
- 微信 / WhatsApp 二维码 → `public/qr/wechat.png`, `public/qr/whatsapp.png`
- 表单 Formspree endpoint
- 全站具体数据（offer 数、Top30 率等）→ `src/data/site.js` 的 `STATS`

## 联系

技术问题：[你的邮箱]
内容更新：[你的邮箱]
