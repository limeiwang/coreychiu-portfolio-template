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
          <path d="M12 1.5L2 11.5l3.2 3.2L12 8l6.8 6.7L22 11.5 12 1.5zM5.2 15.5L2 18.7 12 22l10-3.3-3.2-3.2L12 18l-6.8-2.5z" />
        </SvgIcon>
      );
    case "bilibili":
      return (
        <SvgIcon size={size}>
          <path d="M17.5 3a.5.5 0 010 1H15v1a3 3 0 013 3v7a3 3 0 01-3 3H9a3 3 0 01-3-3V8a3 3 0 013-3h.5l-1-1h2l1.8 1.8L12 7l.7-1.2L14.5 4h2l-1 1H17.5zM6 8v7a3 3 0 003 3h6a3 3 0 003-3V8a3 3 0 00-3-3H9a3 3 0 00-3 3zm3 1h2v2H9V9zm4 0h2v2h-2V9z" />
        </SvgIcon>
      );
    case "weibo":
      return (
        <SvgIcon size={size}>
          <path d="M10.5 2a8.5 8.5 0 108.2 10.5 4.5 4.5 0 11-6.2-6.2A8.5 8.5 0 0010.5 2zm0 2a6.5 6.5 0 016.4 5.5 2.5 2.5 0 00-3.6 1.8 2.4 2.4 0 00-.2 1 2.5 2.5 0 103.6-2.1A6.5 6.5 0 1110.5 4zm-.3 4a3 3 0 100 6 3 3 0 000-6zm0 1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
        </SvgIcon>
      );
    case "xiaohongshu":
      return (
        <SvgIcon size={size}>
          <path d="M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h14V4H5zm2 2h3v3H7V6zm5 0h5v1h-5V6zm0 3h5v1h-5V9zm0 3h5v1h-5v-1zm-5 2h3v3H7v-3z" />
        </SvgIcon>
      );
    case "douyin":
      return (
        <SvgIcon size={size}>
          <path d="M16 2v9.5a4 4 0 11-4-4V5a6 6 0 009 4V2h-5zm-1 1.5h3V9a4.5 4.5 0 00-3-1.5v1.5a3 3 0 103 3V7.5h-3V3.5z" />
        </SvgIcon>
      );
    default:
      return null
  }
}