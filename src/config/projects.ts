// projects
export const projectHeadLine = "我所做的与正在做的事。"
export const projectIntro = "从 AI 应用到全栈 SaaS，从独立产品到开源框架——这里是我参与和主导过的一些代表性项目。"

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
    name: '门店经营数字化系统',
    description: '面向连锁门店的 SaaS 数字化经营系统，集 POS 收银、会员管理、商品库存与小程序商城于一体，内置 AI OCR 智能入库功能。',
    link: { href: '#', label: '门店经营数字化系统' },
    techStack: ['Vue 3', 'Pinia', 'uni-app', 'Express', 'Sequelize', 'MySQL', 'JWT'],
    tags: ['SaaS', '全栈', 'POS收银', 'AI OCR'],
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
    name: 'meiwang-portfolio',
    description: '基于 Next.js 16 + TailwindCSS + Shadcn/UI 的个人博客模板，支持 MDX 博客、RSS、多分析工具与暗色模式。',
    link: { href: 'github.com/limeiwang/coreychiu-portfolio-template', label: 'Portfolio Template' },
    gitStars: 0,
    gitForks: 0,
  },
]
