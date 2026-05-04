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
