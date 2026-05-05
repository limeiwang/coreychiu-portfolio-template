'use client'

import {
  Bank,
  GithubLogo,
  XLogo,
  InstagramLogo,
  Envelope,
  GraduationCap,
  Coffee,
  Butterfly,
  Pill,
  WechatLogo,
  DiscordLogo
} from '@phosphor-icons/react'

function SvgIcon({ size, children }: { size: number; children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      {children}
    </svg>
  )
}

export function CustomIcon({ name, size = 20 }: { name: string; size?: number }) {
  switch (name) {
    case 'bank':
      return <Bank size={size} weight="duotone" />;
    case 'github':
      return <GithubLogo size={size} weight="duotone" />;
    case 'x':
      return <XLogo size={size} weight="duotone" />;
    case 'instagram':
      return <InstagramLogo size={size} weight="duotone" />;
    case "bsky":
      return <Butterfly size={size} weight="duotone" />
    case 'email':
      return <Envelope size={size} weight="duotone" />;
    case "college":
      return <GraduationCap size={size} weight="duotone" />;
    case "coffee":
      return <Coffee size={size} weight="duotone" />;
    case "pill":
      return <Pill size={size} weight="duotone" />;
    case "wechat":
      return <WechatLogo size={size} weight="duotone" />;
    case "discord":
      return <DiscordLogo size={size} weight="duotone" />;
    case "juejin":
      return (
        <SvgIcon size={size}>
          <path d="M12 2L2 12l3.5 3.5L12 9l6.5 6.5L22 12 12 2z" />
        </SvgIcon>
      );
    case "bilibili":
      return (
        <SvgIcon size={size}>
          <path d="M2 5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H8l-4 3V5zm8 3v4m4-4v4" stroke="currentColor" strokeWidth="2" fill="none" />
        </SvgIcon>
      );
    case "weibo":
      return (
        <SvgIcon size={size}>
          <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12zm0 3a3 3 0 100 6 3 3 0 000-6z" />
        </SvgIcon>
      );
    case "xiaohongshu":
      return (
        <SvgIcon size={size}>
          <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm3 4v2h2V7H7zm0 4v6h2v-6H7zm4-4v8h2V7h-2zm4 0v2h2V7h-2zm0 4v4h2v-4h-2z" />
        </SvgIcon>
      );
    case "douyin":
      return (
        <SvgIcon size={size}>
          <path d="M9 3v8.5a3.5 3.5 0 11-3.5-3.5c.2 0 .4.02.6.05V5.5A5.5 5.5 0 0010 16.5V3H9zm6 0v1.5c1.1 0 2.1.3 3 .9V3h-3z" />
        </SvgIcon>
      );
    default:
      return null
  }
}