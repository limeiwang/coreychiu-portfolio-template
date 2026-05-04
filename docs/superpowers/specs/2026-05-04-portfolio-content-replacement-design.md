# 李美旺个人博客 — 内容与配置替换设计

日期：2026-05-04 | 类型：内容替换（无结构改动）

## 目标

基于 Corey Chiu Portfolio Template，替换所有配置、内容和文案为李美旺的个人信息，打造"AI应用开发者 + 工程师作品中枢"定位的个人网站。不改动模板结构、组件或样式。

## 全局信息

| 字段 | 值 |
|------|-----|
| name | 李美旺 |
| headline | AI 应用工程师 · 前端架构师 · 内容系统与智能应用构建者 |
| introduction | 我是一名前端工程师，拥有 6 年+开发经验，专注于 AI 应用系统与复杂 Web 架构的设计与实现。过去参与过智慧城市可视化平台、企业级内容管理系统，以及 AI 电商分镜生成、智能学习助手等应用的开发，覆盖从前端工程到系统架构的完整链路。我更关注如何将 AI 能力工程化落地，转化为可实际使用的产品与系统，而不仅仅是技术实现。 |
| email | 19322932086@163.com |
| githubUsername | limeiwang |
| 语言 | 中文 |
| 社交媒体 | GitHub (https://github.com/limeiwang), 微信 (Limw0321) |

## 技术图标（16 个）

前 端：react, nextdotjs, typescript, javascript, tailwindcss
后 端：nodedotjs, prisma, postgresql, supabase
AI：openai
工具平台：vercel, docker, git, github, visualstudiocode
地图/其他：mapbox, wechat

## 导航配置

**navItems**：首页 / 关于 / 项目 / 博客
**footerItems**：首页 / 关于 / 项目 / 博客 / 友链 / 更新日志

## 首页模块

| 模块 | 操作 | 说明 |
|------|------|------|
| 个人信息 + 图标云 | 保留，替换内容 | 使用中文 headline/introduction |
| GitHub 贡献蛇形图 | 保留 | 用户改为 limeiwang |
| 个人项目 (projects) | 保留，替换为 8 个项目 | 见下方项目列表 |
| GitHub 开源 (githubProjects) | 保留，替换为 1 个 | coreychiu-portfolio-template fork |
| 博客卡片 | 保留 | 后续填充博客文章 |
| 职业经历 (Career) | 保留，2 条 | 见下方职业列表 |
| 教育背景 (Education) | **隐藏** | 删除组件引用 |
| 活动模块 (TweetGrid + MarqueeVertical) | **隐藏** | 删除组件引用 |

## 项目列表（8 个）

1. **电商视频分镜AI** — AI 驱动的电商视频分镜生成器（Next.js 16, Prisma, 豆包/智谱/OpenAI）
2. **Product Image Generator** — AI 商品图片生成，背景移除+场景图生成（Python, FastAPI, SDXL, LoRA）
3. **戒烟助手** — 微信小程序 AI 戒烟辅助工具（uni-app, Vue 3, uniCloud）
4. **门店经营数字化系统** — 多租户零售 SaaS，POS+会员+小程序商城（Vue 3, Express, Sequelize, MySQL）
5. **深圳前海地下道路智慧化管控平台** — 微前端架构智慧交通系统（Vue 3, Qiankun, 高德地图, ECharts）
6. **城市数智推演仿真平台** — 3D 城市仿真推演（Vue 3, Cesium, Unity, ECharts）
7. **上海临港基础设施全量运管平台** — 14 类 150+设备统一接入运管（Vue 3, Element-UI, 高德地图, uni-app）
8. **智合极创 Admin** — React 19 通用管理后台框架（React 19, React Router v7, TailwindCSS 4）

## GitHub 开源项目（1 个）

- coreychiu-portfolio-template（fork）

## 职业经历（2 条）

1. 中电信数字城市科技有限公司 — 前端开发工程师 — 2022.03 至 2025.03
2. 软通动力技术服务有限公司（百度） — 前端开发工程师 — 2019.08 至 2022.03

## 教育背景

隐藏。不展示在首页。

## 其他页面

- **About 页面**：深度技术叙事，分三层（定位/技术历程/当前状态），中文
- **友链页面**：保留，1-2 个占位项
- **更新日志页面**：保留，1 条初始记录（2026-05-04 基于模板初始化）
- **博客页面**：保留空模板，后续填充 MDX 文章

## 环境变量配置

- `NEXT_PUBLIC_SITE_URL`：用户自己的域名（部署时配置）
- `NEXT_PUBLIC_UTM_SOURCE`：用户自定义
- 分析工具 ID（OpenPanel/Google/Plausible）：用户自行配置
