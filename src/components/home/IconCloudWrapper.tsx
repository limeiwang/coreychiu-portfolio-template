'use client'

import dynamic from 'next/dynamic'

const IconCloud = dynamic(() => import('@/components/ui/icon-cloud'), { ssr: false })

export default function IconCloudWrapper({ iconSlugs }: { iconSlugs: string[] }) {
  return <IconCloud iconSlugs={iconSlugs} />
}
