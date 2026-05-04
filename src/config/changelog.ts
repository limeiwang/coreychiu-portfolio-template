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
