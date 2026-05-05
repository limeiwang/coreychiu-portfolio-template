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
    name: 'meiwang-portfolio',
    description: '基于 Next.js 16 + TailwindCSS + Shadcn/UI 的个人博客模板，支持 MDX 博客、RSS、多分析工具与暗色模式。',
    link: { href: 'github.com/limeiwang/meiwang-portfolio', label: 'Portfolio Template' },
    gitStars: 0,
    gitForks: 0,
  },
]
