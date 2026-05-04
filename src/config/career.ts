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
