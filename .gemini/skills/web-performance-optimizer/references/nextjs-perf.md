# Next.js Performance Best Practices

## 1. Image Optimization (`next/image`)
Always use the `<Image>` component instead of `<img>`.
- **Automatic:** Resizing, optimizing, and serving in modern formats (WebP).
- **Lazy Loading:** Default behavior. Set `priority` for LCP images (above the fold).

## 2. Font Optimization (`next/font`)
Use `next/font` to automatically optimize and host fonts.
- Removes external network requests to Google Fonts.
- Zero layout shift.

## 3. Script Loading (`next/script`)
Control when third-party scripts load.
- `strategy="beforeInteractive"`: Critical scripts (rare).
- `strategy="afterInteractive"`: Default (e.g., analytics).
- `strategy="lazyOnload"`: Low priority (e.g., chat widgets).

## 4. Route Segments & Config
- **Dynamic IO:** Use `export const dynamic = 'force-static'` for pages that don't need real-time data.
- **Generate Static Params:** Use `generateStaticParams` for static builds of dynamic routes.

## 5. Bundle Analysis
Use `@next/bundle-analyzer` to identify large dependencies.
- Watch out for large libraries like `moment`, `lodash` (use modular imports).
