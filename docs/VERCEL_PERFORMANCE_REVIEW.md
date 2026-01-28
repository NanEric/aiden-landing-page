# Aiden Landing Page 性能审查报告 (Vercel 最佳实践视角)

本报告基于 `aiden-landing-page/.gemini/skills/vercel-react-best-practices` 中定义的 Vercel 工程团队最佳实践，对 `aiden-landing-page/src/components/LandingPage.tsx` 进行了专项审查。

## 核心发现与建议

### 1. Bundle 体积优化 (CRITICAL)

#### 1.1 避免桶文件导入 (Rule 2.1)
- **发现**: 代码中使用了 `import { Zap } from 'lucide-react';`。
- **风险**: 即使在生产环境下，如果未配置路径优化，可能会导致导入过多的图标代码，增加初始 Bundle 体积。
- **优化**: 
  - 建议改为直接路径导入：`import Zap from 'lucide-react/dist/esm/icons/zap';`
  - 或者确保 `next.config.js` 中启用了 `experimental.optimizePackageImports: ['lucide-react']`。

#### 1.2 重型组件动态导入 (Rule 2.4)
- **发现**: `DownloadTips` 组件被直接静态导入并渲染。
- **风险**: 这是一个模态框组件，且依赖于用户点击下载后才显示。静态导入会将其代码包含在主包中。
- **优化**: 使用 `next/dynamic` 进行动态导入，减少首屏 JavaScript 体积。
  ```tsx
  const DownloadTips = dynamic(() => import('@/components/DownloadTips').then(mod => mod.DownloadTips), { ssr: false });
  ```

### 2. 客户端数据获取 (MEDIUM-HIGH)

#### 2.1 使用 SWR 代替手动 useEffect 获取 (Rule 4.3)
- **发现**: 目前使用 `useEffect` 配合 `fetch('/api/config')` 来手动维护配置状态。
- **风险**: 缺乏自动去重、缓存、聚焦重新验证等高级特性。
- **优化**: 建议改用 `useSWR`。这不仅能简化代码，还能确保在用户切回页面时配置能自动保持最新。
  ```tsx
  const { data: remoteConfig } = useSWR('/api/config', fetcher);
  // 合并本地默认配置与远程配置...
  ```

### 3. 重渲染优化 (MEDIUM)

#### 3.1 延迟读取状态/存储 (Rule 5.2 & 7.5)
- **发现**: `handleDownloadClick` 中直接同步调用 `localStorage.getItem`。
- **建议**: 虽然此处调用频率不高，但根据 Vercel 规范，建议对 Storage 的读取进行 try-catch 包装（防止无痕模式报错），并考虑将此类持久化偏好集成到 SWR 或全局 Context 中，以减少对原生 API 的直接依赖。

### 4. 渲染性能 (MEDIUM)

#### 4.1 提取并提升静态 JSX (Rule 6.3)
- **发现**: `footer` 部分包含大量静态文本和图标，且内容完全不随组件状态变化。
- **优化**: 将 `footer` 提取为独立的组件（如 `src/components/Footer.tsx`）并使用 `memo` 包装，或者将其定义为组件外的常量。这在父组件 `LandingPage` 重新渲染时可以完全跳过 Footer 的协调过程。

## 性能评分影响预测

| 优化项 | 影响指标 | 预期增益 | 优先级 |
| :--- | :--- | :--- | :--- |
| **动态导入 DownloadTips** | TBT / LCP | 高 | **CRITICAL** |
| **优化 Lucide 导入** | Total Bundle Size | 中 | **CRITICAL** |
| **引入 SWR** | UX / Consistency | 中 | HIGH |
| **静态组件提取** | Render Time | 低 | MEDIUM |

---

*报告生成时间：2026年1月28日*
*执行专家：Aiden Performance Engine (Vercel Patterns Enabled)*
