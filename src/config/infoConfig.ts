export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


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
