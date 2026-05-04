# 李美旺个人博客 — 内容替换实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 Corey Chiu Portfolio Template 的所有内容、配置和文案替换为李美旺的个人信息，打造中文"AI应用开发者 + 工程师作品中枢"定位的个人网站，不改动模板结构。

**Architecture:** 纯配置与文案替换。修改 `src/config/` 下的数据文件、`src/app/` 下的页面文案、以及少量组件中的硬编码文本。不新增或删除任何文件，不修改组件结构、样式或业务逻辑。

**Tech Stack:** Next.js 16, React 19, TypeScript, TailwindCSS, Shadcn/UI (new-york), MDX

---

### Task 1: 站点导航配置 (siteConfig.ts)

**Files:**
- Modify: `src/config/siteConfig.ts`

- [ ] **Step 1: 替换导航项为中文**

```typescript
export const footerItems: Array<NavItemType> = [
  { name: '首页', href: '/' },
  { name: '关于', href: '/about' },
  { name: '项目', href: '/projects' },
  { name: '博客', href: '/blogs' },
  { name: '友链', href: '/friends' },
  { name: '更新日志', href: '/changelog' },
]

export const navItems: Array<NavItemType> = [
  { name: '首页', href: '/' },
  { name: '关于', href: '/about' },
  { name: '项目', href: '/projects' },
  { name: '博客', href: '/blogs' },
]
```

- [ ] **Step 2: 验证编译通过**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/config/siteConfig.ts
git commit -m "feat: translate navigation items to Chinese"
```

---

### Task 2: 个人信息与核心配置 (infoConfig.ts)

**Files:**
- Modify: `src/config/infoConfig.ts`

- [ ] **Step 1: 替换个人信息、社交媒体、技术图标、博客标语、About 内容**

将 `src/config/infoConfig.ts` 的 `export * from` 行之后的所有内容替换为：

```typescript
// personal info
export const name = '李美旺'
export const headline = 'AI 应用工程师 · 前端架构师 · 内容系统与智能应用构建者'
export const introduction = '我是一名前端工程师，拥有 6 年+开发经验，专注于 AI 应用系统与复杂 Web 架构的设计与实现。过去参与过智慧城市可视化平台、企业级内容管理系统，以及 AI 电商分镜生成、智能学习助手等应用的开发，覆盖从前端工程到系统架构的完整链路。我更关注如何将 AI 能力工程化落地，转化为可实际使用的产品与系统，而不仅仅是技术实现。'
export const email = '19322932086@163.com'
export const githubUsername = 'limeiwang'

// about page
export const aboutMeHeadline = '我是李美旺，一名专注于 AI 应用与复杂 Web 架构的前端工程师。'
export const aboutParagraphs = [
  '我拥有 6 年+开发经验，技术栈覆盖 Vue 3、React、TypeScript、Node.js，具备从 0 到 1 搭建大型系统的全栈能力。我既能在 Vue 生态中高效构建企业级后台与数据可视化大屏，也能在 React 生态中使用 Next.js、Prisma 等技术栈快速交付 AI 驱动的全栈应用。',
  '过去几年，我深度参与了智慧城市、数字道路、城市仿真等大型项目，主导了微前端架构方案（Qiankun + Vite）在多个产品线的落地。同时，我也积极探索 AI 技术在前端领域的应用——从 AI 电商视频分镜生成，到商品图片智能处理，再到微信小程序端的 AI 辅助工具，持续拓展前端工程师在 AI 时代的边界。',
  '目前，我正致力于将 AI 能力工程化落地，探索大模型在实际业务场景中的价值。我相信，好的工程师不仅要能写出高质量的代码，更要能将技术与商业需求结合，打造真正解决问题的产品。',
]

// blog
export const blogHeadLine = 'AI 应用实践 · 架构设计 · 产品落地思考'
export const blogIntro = '记录我在 AI 应用开发、前端架构设计和产品商业化方面的一些思考与实践。'

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/limeiwang',
    external: true,
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    href: 'https://mp.weixin.qq.com/s/DxnRgqNfgzXIhqj6w_x0dQ',
    external: true,
  },
]

// https://simpleicons.org/
export const techIcons = [
  'react',
  'nextdotjs',
  'typescript',
  'javascript',
  'tailwindcss',
  'vite',
  'webpack',
  'pinia',
  'nodedotjs',
  'prisma',
  'postgresql',
  'supabase',
  'openai',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'mapbox',
  'wechat',
]
```

- [ ] **Step 2: 验证编译通过**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/config/infoConfig.ts
git commit -m "feat: replace personal info, social links, tech icons with Chinese content"
```

---

### Task 3: 项目作品配置 (projects.ts)

**Files:**
- Modify: `src/config/projects.ts`

- [ ] **Step 1: 替换项目数据**

将 `src/config/projects.ts` 完全替换为：

```typescript
// projects
export const projectHeadLine = "我所做的与正在做的事。"
export const projectIntro = "从智慧城市到 AI 应用，从企业级系统到独立产品——这里是我参与和主导过的一些代表性项目。"

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  date?: string
  logo?: string
  category?: string[]
  tags?: string[]
  image?: string
  techStack?: string[]
  gitStars?: number
  gitForks?: number
}

export const projects: Array<ProjectItemType> = [
  {
    name: '电商视频分镜AI',
    description: 'AI 驱动的电商视频分镜生成器，上传商品图片即可自动生成包含 9 个镜头的专业级视频分镜脚本，支持 TikTok、抖音、Amazon 多平台适配。',
    link: { href: '#', label: '电商视频分镜AI' },
    techStack: ['Next.js 16', 'TypeScript', 'Prisma', 'PostgreSQL', '豆包大模型', '智谱 GLM-4V'],
    tags: ['AI', '电商', '视频生成', 'SaaS'],
  },
  {
    name: 'Product Image Generator',
    description: '面向电商的 AI 商品图片生成工具，基于 SDXL + LoRA 实现背景移除与场景图合成，支持多平台尺寸适配与批量处理。',
    link: { href: '#', label: 'Product Image Generator' },
    techStack: ['Python', 'FastAPI', 'PyTorch', 'SDXL', 'LoRA', 'Docker'],
    tags: ['AI', '图片生成', '电商', 'Python'],
  },
  {
    name: '戒烟助手',
    description: '基于 uni-app 的跨平台 AI 戒烟辅助微信小程序，提供戒烟计划制定、进度追踪与 AI 智能建议。',
    link: { href: '#', label: '戒烟助手' },
    techStack: ['uni-app', 'Vue 3', 'uniCloud', '微信小程序'],
    tags: ['AI', '微信小程序', '健康'],
  },
  {
    name: '门店经营数字化系统',
    description: '面向连锁门店的 SaaS 数字化经营系统，集 POS 收银、会员管理、商品库存与小程序商城于一体，内置 AI OCR 智能入库功能。',
    link: { href: '#', label: '门店经营数字化系统' },
    techStack: ['Vue 3', 'Pinia', 'uni-app', 'Express', 'Sequelize', 'MySQL', 'JWT'],
    tags: ['SaaS', '全栈', 'POS收银', 'AI OCR'],
  },
  {
    name: '深圳前海地下道路智慧化管控平台',
    description: '基于微前端架构（Qiankun）的智慧交通管控系统，实现地下道路设备联动、实时预警与应急处置，前端加载速度提升 20%，内存占用降低 30%。',
    link: { href: '#', label: '前海智慧管控' },
    techStack: ['Vue 3', 'Qiankun', '高德地图 API', 'ECharts', '若依框架'],
    tags: ['智慧城市', '微前端', '交通管控'],
  },
  {
    name: '城市数智推演仿真平台',
    description: '"1+3+6+N"架构的城市级 3D 仿真推演平台，集成 Cesium + Unity 实现二维数据与三维场景实时联动，覆盖政策模拟、地块更新、交通治理等核心功能。获区域数字经济创新奖。',
    link: { href: '#', label: '城市推演仿真' },
    techStack: ['Vue 3', 'Cesium', 'Unity', 'ECharts', 'TypeScript'],
    tags: ['智慧城市', '3D 仿真', '数字孪生'],
  },
  {
    name: '上海临港基础设施全量运管平台',
    description: '城市新基建运营管理平台，统一接入 14 类 150+ 智能网联设备，实现设备全生命周期管理、拓扑可视化与运维闭环，故障处理效率提升 50%。已复制推广至沧州等地。',
    link: { href: '#', label: '临港运管平台' },
    techStack: ['Vue 3', 'Element-UI', '高德地图 API', 'ECharts', 'WebSocket', 'uni-app'],
    tags: ['智慧城市', 'IoT', '设备运维'],
  },
  {
    name: '智合极创 Admin',
    description: '基于 React 19 + React Router v7 构建的通用管理后台框架，内置权限管理、Markdown 编辑器与 Docker 一键部署方案，可作为新项目的启动脚手架。',
    link: { href: '#', label: '智合极创 Admin' },
    techStack: ['React 19', 'React Router v7', 'TypeScript', 'TailwindCSS 4', 'Zustand'],
    tags: ['管理后台', 'React', '开源'],
  },
]

export const githubProjects: Array<ProjectItemType> = [
  {
    name: 'coreychiu-portfolio-template',
    description: '基于 Next.js 16 + TailwindCSS + Shadcn/UI 的个人博客模板，支持 MDX 博客、RSS、多分析工具与暗色模式。',
    link: { href: 'github.com/limeiwang/coreychiu-portfolio-template', label: 'Portfolio Template' },
    gitStars: 0,
    gitForks: 0,
  },
]
```

- [ ] **Step 2: 验证编译通过**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/config/projects.ts
git commit -m "feat: replace projects with Li Meiwang's 8 featured projects"
```

---

### Task 4: 职业经历配置 (career.ts)

**Files:**
- Modify: `src/config/career.ts`

- [ ] **Step 1: 替换职业数据**

将 `src/config/career.ts` 完全替换为：

```typescript
// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}

export const careerList: Array<CareerItemType> = [
  {
    company: '中电信数字城市科技有限公司',
    title: '前端开发工程师',
    logo: 'bank',
    start: '2022.03',
    end: '2025.03',
  },
  {
    company: '软通动力技术服务有限公司（百度）',
    title: '前端开发工程师',
    logo: 'bank',
    start: '2019.08',
    end: '2022.03',
  },
]
```

- [ ] **Step 2: 验证编译通过**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/config/career.ts
git commit -m "feat: replace career entries with Chinese content"
```

---

### Task 5: 更新日志 & 友链配置 (changelog.ts, friends.ts)

**Files:**
- Modify: `src/config/changelog.ts`
- Modify: `src/config/friends.ts`

- [ ] **Step 1: 替换更新日志**

将 `src/config/changelog.ts` 完全替换为：

```typescript
// changelog
export const changelogHeadLine = "本站更新日志"
export const changelogIntro = "记录本博客的迭代与变化。"

export type ChangelogItemType = {
  date: string
  content: [
    {
      title: string
      description: string
    },
  ]
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: '2026-05-04',
    content: [
      {
        title: '🚀 基于模板初始化个人博客',
        description:
          '基于 Corey Chiu Portfolio Template 搭建个人博客，替换为中文内容配置，包含 8 个精选项目展示、职业经历、技术图标云等模块。',
      },
    ],
  },
]
```

- [ ] **Step 2: 替换友链为占位**

将 `src/config/friends.ts` 完全替换为：

```typescript
// friends
export const friendsHeadLine = '朋友们'
export const friendsIntro = '一些有趣的同行与朋友。'

export type FriendItemType = {
  name: string
  description?: string
  link: { href: string; label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  {
    name: '期待你的加入',
    description: '如果你也想出现在这里，欢迎联系我。',
    link: { href: '#' },
  },
]
```

- [ ] **Step 3: 验证编译通过**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add src/config/changelog.ts src/config/friends.ts
git commit -m "feat: add initial changelog entry and friends placeholder"
```

---

### Task 6: 首页模块调整 (page.tsx)

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: 移除 Education 和 Activity 模块**

在 `src/app/page.tsx` 中：

**删除 import 行：**
```diff
- import Education from '@/components/home/Education'
...
- import { TweetGrid } from "@/components/home/TweetGrid";
- import { MarqueeVertical } from '@/components/home/MarqueeVertical'
```

**删除 import 中的 `activityHeadLine`, `activityIntro`：**

将：
```typescript
import { projectHeadLine, projectIntro, projects, githubProjects, blogHeadLine, blogIntro, techIcons, activityHeadLine, activityIntro } from '@/config/infoConfig'
```
改为：
```typescript
import { projectHeadLine, projectIntro, projects, githubProjects, blogHeadLine, blogIntro, techIcons } from '@/config/infoConfig'
```

**删除 `<Education />` 组件**（在 Career 下方的行）：
```diff
- <Education />
```

**删除整个 Activity section**（TweetGrid + MarqueeVertical 所在的整个 div）：
```diff
- <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
-   <h2 className="text-3xl font-semibold tracking-tight md:text-5xl opacity-80">
-     {activityHeadLine}
-   </h2>
-   <p className="text-base text-muted-foreground max-w-2xl mb-2">
-     {activityIntro}
-   </p>
-   <TweetGrid />
-   <MarqueeVertical />
- </div>
```

- [ ] **Step 2: 验证编译通过**

Run: `npx tsc --noEmit`
Expected: No errors (未使用的 import 会导致 TS 错误，确保都已删除)

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: hide Education and Activity modules from homepage"
```

---

### Task 7: About 页面 & 布局元数据 (about/page.tsx, layout.tsx)

**Files:**
- Modify: `src/app/about/page.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: 更新 About 页面的 metadata description**

在 `src/app/about/page.tsx` 中，替换 metadata description：

```diff
- description: 'Hi, I am Corey Chiu, a software engineer based in Shenzhen, China.',
+ description: '我是李美旺，一名专注于 AI 应用与复杂 Web 架构的前端工程师。',
```

（About 页面的 aboutMeHeadline 和 aboutParagraphs 从 infoConfig 导入，已在 Task 2 中更新，无需再次修改。）

- [ ] **Step 2: 更新根布局 metadata**

在 `src/app/layout.tsx` 中，metadata 的 `title.default` 和 `description` 引用的是 `name` 和 `headline`、`introduction` 变量，这些已在 Task 2 中更新。无需代码改动。

- [ ] **Step 3: 验证编译通过**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: update About page metadata to Chinese"
```

---

### Task 8: 组件硬编码文本翻译

**Files:**
- Modify: `src/components/home/BlogCard.tsx`
- Modify: `src/app/blogs/page.tsx`
- Modify: `src/components/shared/GithubRepo.tsx`
- Modify: `src/components/layout/VisitData.tsx`
- Modify: `src/lib/formatDate.ts`
- Modify: `src/app/page.tsx` (首页的 "Read more blogs" 链接)

- [ ] **Step 1: 翻译 BlogCard "Read blog" 按钮**

在 `src/components/home/BlogCard.tsx:16`：
```diff
- <Card.Cta>Read blog</Card.Cta>
+ <Card.Cta>阅读文章</Card.Cta>
```

- [ ] **Step 2: 翻译博客列表页 "Read blog" 按钮**

在 `src/app/blogs/page.tsx:25`：
```diff
- <Card.Cta>Read blog</Card.Cta>
+ <Card.Cta>阅读文章</Card.Cta>
```

- [ ] **Step 3: 翻译首页 "Read more blogs" 链接**

在 `src/app/page.tsx:97`：
```diff
- <Link href="/blogs" className="flex flex-row items-center text-sm text-primary hover:underline capitalize font-semibold">Read more blogs 
+ <Link href="/blogs" className="flex flex-row items-center text-sm text-primary hover:underline capitalize font-semibold">更多文章
```

- [ ] **Step 4: 更新 GitHub 仓库链接**

在 `src/components/shared/GithubRepo.tsx:11`：
```diff
- href="https://github.com/iAmCorey/coreychiu-portfolio-template"
+ href="https://github.com/limeiwang/coreychiu-portfolio-template"
```

- [ ] **Step 5: 翻译访问统计文本**

在 `src/components/layout/VisitData.tsx:37`：
```diff
- Total Visits: {stats.totalUV} / Today Visits: {stats.dailyUV}
+ 总访问量: {stats.totalUV} / 今日访问量: {stats.dailyUV}
```

- [ ] **Step 6: 日期格式改为中文**

在 `src/lib/formatDate.ts:2`：
```diff
- return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
+ return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('zh-CN', {
```

- [ ] **Step 7: 验证编译通过**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 8: Commit**

```bash
git add src/components/home/BlogCard.tsx src/app/blogs/page.tsx src/app/page.tsx src/components/shared/GithubRepo.tsx src/components/layout/VisitData.tsx src/lib/formatDate.ts
git commit -m "feat: translate hardcoded UI text to Chinese, update GitHub URL"
```

---

### Task 9: 清理测试博客内容

**Files:**
- Modify: `src/content/blog/test-blog.mdx`

- [ ] **Step 1: 替换测试博客为占位**

将 `src/content/blog/test-blog.mdx` 替换为：

```markdown
---
title: '欢迎访问我的博客'
description: '这是我的第一篇博客文章，后续会在这里分享 AI 应用实践、架构设计和产品落地方面的思考。'
date: '2026-05-04'
---

## 关于这个博客

这里会记录我在 AI 应用开发、前端架构设计和产品商业化方面的一些思考与实践。

### 计划写作的方向

- **AI 应用实践** — 大模型接入、AI 产品开发经验
- **架构设计** — 微前端、全栈架构、系统设计
- **产品落地** — 从技术到商业化产品的思考

敬请期待更多内容。
```

- [ ] **Step 2: 验证编译通过**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/content/blog/test-blog.mdx
git commit -m "feat: replace test blog with Chinese welcome post"
```

---

### Task 10: 最终验证

**Files:**
- 无

- [ ] **Step 1: TypeScript 编译检查**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 2: 构建验证**

Run: `pnpm build`
Expected: 构建成功，无错误

- [ ] **Step 3: 启动开发服务器验证关键页面**

Run: `pnpm dev`

手动验证以下页面：
- `http://localhost:3000/` — 首页：中文内容、8 个项目卡片、职业经历、无 Education 和 Activity 模块
- `http://localhost:3000/about` — 关于页面：中文介绍
- `http://localhost:3000/projects` — 项目页面：8 个项目 + 1 个 GitHub 项目
- `http://localhost:3000/blogs` — 博客列表：欢迎文章
- `http://localhost:3000/friends` — 友链：占位内容
- `http://localhost:3000/changelog` — 更新日志：1 条记录
- 导航栏、页脚链接为中文

- [ ] **Step 4: Commit（如有后续修复）**

```bash
git add -A
git commit -m "chore: final verification fixes"
```
