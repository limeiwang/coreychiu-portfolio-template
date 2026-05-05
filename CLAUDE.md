# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Task | Command |
|------|---------|
| Dev server | `pnpm dev` |
| Production build | `pnpm build` |
| Start production | `pnpm start` |
| Lint | `pnpm lint` (ESLint with `next/core-web-vitals`) |

## Architecture

This is a **Next.js 16 App Router** portfolio/blog template with **React 19**, **TailwindCSS v3**, **Shadcn/UI (new-york style)**, and **MagicUI**. The import alias `@/*` maps to `./src/*`.

### Content & Configuration

All site content is driven by static TypeScript config files in `src/config/` — there is no database:

- `infoConfig.ts` — re-exports all section configs; defines personal info (`name`, `headline`, `introduction`, `socialLinks`, `techIcons`, etc.)
- `siteConfig.ts` — navigation items (`navItems` for header, `footerItems` for footer) and env-derived values (`site_url`, `utm_source`)
- `projects.ts` — project listings (`projects[]` and `githubProjects[]`)
- `career.ts` / `education.ts` / `friends.ts` / `changelog.ts` / `activity.ts` — section-specific data

User-facing values like name, headline, social links, and section content are configured in these files — not hardcoded in components.

### Blog System (MDX)

Blog posts live as `.mdx` files in `src/content/blog/`. Each file has frontmatter (`title`, `description`, `author`, `date`).

- `src/lib/blogs.ts` — reads `.mdx` files via `gray-matter` frontmatter parsing; `getAllBlogs()` returns sorted list, `getBlogBySlug()` returns a single blog
- `src/lib/mdx.ts` — compiles MDX to React at runtime via `next-mdx-remote/rsc` with custom components from `src/components/shared/MdxComponents.tsx`
- Blog pages use `src/components/layout/BlogLayout.tsx`
- Custom MDX components: syntax-highlighted code blocks (`react-syntax-highlighter` with `oneDark` theme), styled headings, tables, blockquotes, internal links via Next.js `Link` and external links with `target="_blank"`

### Page Routes

| Route | File | Notes |
|-------|------|-------|
| `/` | `src/app/page.tsx` | Home page with hero, projects, GitHub projects, blogs, career, icon cloud. Education and Activity (TweetGrid) modules are hidden. |
| `/about` | `src/app/about/page.tsx` | About page |
| `/blogs` | `src/app/blogs/page.tsx` | Blog listing |
| `/blogs/[slug]` | `src/app/blogs/[slug]/page.tsx` | Individual blog post (MDX) |
| `/projects` | `src/app/projects/page.tsx` | Projects listing |
| `/friends` | `src/app/friends/page.tsx` | Friends page |
| `/changelog` | `src/app/changelog/page.tsx` | Changelog page |
| `/feed` | `src/app/feed/route.ts` | RSS feed (XML) |
| `/api/visit-stats` | `src/app/api/visit-stats/route.ts` | Visitor stats from OpenPanel API |
| `robots.ts` | `src/app/robots.ts` | Dynamic robots.txt |
| `sitemap.ts` | `src/app/sitemap.ts` | Dynamic sitemap |

### Layout & Providers

`src/app/layout.tsx` wraps everything in `<Providers>` (from `src/app/providers.tsx`) which provides:
- `next-themes` `ThemeProvider` with `class` attribute strategy for dark/light mode
- `AppContext` exposing `previousPathname` for page transition awareness
- A `ThemeWatcher` that syncs system preference changes

The `<Layout>` component (`src/components/layout/Layout.tsx`) renders `<Header>` + `<main>` + `<Footer>` with a fixed background decoration layer.

### Styling

- CSS custom properties (HSL colors) for theming defined in `src/styles/tailwind.css` — light and dark variants
- Shadcn/UI components use `cn()` utility from `src/lib/utils.ts` (`clsx` + `tailwind-merge`)
- `typography.ts` provides the `@tailwindcss/typography` prose styles referenced in `tailwind.config.ts`
- `prettier-plugin-tailwindcss` for class sorting

### Analytics

`src/components/analytics/analytics.tsx` conditionally renders Google Analytics, OpenPanel, and Plausible scripts — only in production (`NODE_ENV === 'production'`). Each provider checks for its respective env var before rendering.

### Environment Variables

See `.env.example`. Key variables:
- `NEXT_PUBLIC_SITE_URL` — required for RSS feed, sitemap, and robots.txt
- `NEXT_PUBLIC_OPENPANEL_CLIENT_ID` / `OPENPANEL_API_SECRET_ID` / `OPENPANEL_PROJECT_ID` — visitor stats
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` — Google Analytics
- `NEXT_PUBLIC_PLAUSIBLE_URL` / `NEXT_PUBLIC_PLAUSIBLE_SRC` — Plausible Analytics

### GitHub Actions

- `.github/workflows/snk.yml` — daily cron generates GitHub contribution snake SVGs and pushes them to the repo

### Custom Social Icons

`src/components/shared/CustomIcon.tsx` uses a hybrid approach:
- **Phosphor icons** (`@phosphor-icons/react`) for standard platforms (GitHub, WeChat, etc.)
- **SVG paths from Simple Icons** for Chinese platforms (掘金, B站, 微博, 小红书, 抖音). Paths were sourced from `simple-icons` v14 CDN (`https://cdn.jsdelivr.net/npm/simple-icons@14/icons/<slug>.svg`). The `SvgIcon` wrapper applies `opacity=0.85` and `scale(0.875)` to visually match Phosphor's `weight="duotone"` style.

### WeChat QR Code

The WeChat social link uses `qrCode: '/wechat.jpg'` instead of `href`. Both `SocialLinks` components (home + about) detect `qrCode` on a link and render a button that opens a centered modal overlay with the QR code image. The `qrCode` field is optional on `SocialLinkType`.

### Icon Cloud SSR

`react-icon-cloud` generates random canvas IDs, causing hydration mismatch if server-rendered. The fix: `src/components/home/IconCloudWrapper.tsx` is a `'use client'` component that dynamically imports `IconCloud` with `{ ssr: false }`. Always use `IconCloudWrapper` in server components, never `IconCloud` directly.

### Placeholder Links

`ProjectCard` and `FriendCard` check for `href === '#'` and conditionally skip the `<Link>` overlay wrapper. Next.js `Link` cannot prefetch malformed URLs like `https://#?...`, which would cause runtime errors. Projects without public URLs should use `link: { href: '#', ... }`.

### API Graceful Degradation

`/api/visit-stats` returns `{ totalUV: '-', dailyUV: '-' }` when OpenPanel credentials are not configured, instead of throwing a 500 error.

## Known Pitfalls

- **Simple Icons slugs**: `pinia` and `visualstudiocode` do NOT exist in `simple-icons` v14 (the version used by `react-icon-cloud`). The tech icons list uses `element` and `webstorm` as replacements. Always verify slugs against `https://cdn.jsdelivr.net/npm/simple-icons@14/icons/<slug>.svg` before adding new tech icons.
- **`ssr: false` in Server Components**: Next.js 16 does not allow `next/dynamic({ ssr: false })` directly in Server Components. The pattern must be: Server Component → Client Component wrapper → `dynamic({ ssr: false })`.
- **The date locale is `zh-CN`** (`src/lib/formatDate.ts`). RSS feed and blog dates render in Chinese format.

## Notes

- `next.config.mjs` sets `images.unoptimized: true` (static export compatible) and enables MDX via `@next/mdx` with `remarkGfm` and `rehypePrism` plugins
- Both `pnpm-lock.yaml` and `package-lock.json` exist — prefer `pnpm`
- The `--webpack` flag is passed to `next dev` and `next build` in `package.json` scripts (Turbopack disabled)
- The site is configured in **Chinese** — all user-facing text, navigation, dates, and metadata use zh-CN
