# Core Web Vitals Optimization

## 1. Largest Contentful Paint (LCP)
**Goal:** < 2.5s
**What it is:** Render time of the largest image or text block.

**Optimization Strategies:**
- **Preload Critical Images:** Use `<link rel="preload">` for the LCP image.
- **Optimize Images:** Use WebP/AVIF formats, proper sizing (`srcset`), and compression.
- **Server Response Time:** Cache HTML response, optimize DB queries.
- **CDN:** Serve static assets from a CDN close to the user.

## 2. Interaction to Next Paint (INP)
**Goal:** < 200ms
**What it is:** Responsiveness to user inputs (clicks, keys).

**Optimization Strategies:**
- **Minimize JS:** Reduce main thread blocking time.
- **Yield to Main Thread:** Break up long tasks using `setTimeout` or `scheduler.postTask`.
- **Hydration:** Prioritize critical UI hydration.

## 3. Cumulative Layout Shift (CLS)
**Goal:** < 0.1
**What it is:** Visual stability (elements moving unexpectedly).

**Optimization Strategies:**
- **Size Attributes:** Always set `width` and `height` on images and videos.
- **Font Loading:** Use `font-display: swap` or `optional` to avoid FOIT/FOUT re-layout.
- **Static Dimensions:** Reserve space for ads or dynamic content containers.
