# Aiden Landing Page 重构建议报告

本报告由 `react-refactor-specialist` 技能生成，旨在提升 `aiden-landing-page` 代码库的可维护性、可扩展性和代码质量。

## 1. 组件架构优化 (Component Architecture)

### 1.1 提取独立组件
当前部分大型组件承载了过多的 UI 细节，建议进行以下拆分：
- **`Footer`**: 将 `LandingPage.tsx` 中的 `<footer>` 提取为 `src/components/Footer.tsx`。
- **`ProductMockup`**: `Hero.tsx` 中的产品预览 Mockup 逻辑较为复杂（约 40 行代码），建议提取为 `src/components/ProductMockup.tsx`，便于单独维护样式和动画。

### 1.2 增强组件一致性
- **`Features.tsx` 映射逻辑**: 目前使用 `index` 来硬编码图标和颜色。建议建立一个配置对象或在数据层定义 `icon` 和 `color` 属性，避免因 i18n 数据顺序变化导致的 UI 错误。

## 2. 逻辑与 Hooks 抽离 (Logic & Hooks)

### 2.1 创建 `useLandingPageData` 自定义 Hook
`LandingPage.tsx` 目前包含以下非 UI 逻辑：
- 从 `/api/config` 获取配置。
- 下载点击事件处理及 `localStorage` 状态检查。
- 建议将这些逻辑封装到 `src/hooks/useLandingPageData.ts` 中，使组件保持为纯粹的视图层。

### 2.2 统一状态管理
- 下载提示框 (`DownloadTips`) 的状态可以考虑通过一个轻量级的全局状态（或 Context）管理，如果未来有其他页面也需要触发该提示。

## 3. 类型安全与配置 (Types & DX)

### 3.1 强化 `src/types.ts` 的使用
- 确保所有组件（如 `FeatureCard`, `Hero`）都使用 `src/types.ts` 中定义的接口，而不是在组件内部定义局部 Interface。
- 为 i18n 的 `t` 对象提供更严谨的类型推导，以防止引用不存在的翻译键值。

### 3.2 配置中心化
- 检查 `Navigation.tsx` 等组件中是否存在硬编码的链接，应统一移动到 `src/config/navigation.ts`。

## 4. 样式与规范 (Styles & Conventions)

### 4.1 Tailwind 类规范
- 检查 `Hero.tsx` 等文件中的 `mono` 类，确认其是否应为 Tailwind 标准的 `font-mono`。
- 考虑将复杂的背景渐变（如 `-inset-1 bg-gradient-to-r ...`）提取为 Tailwind 的 `layer utilities`，以保持 HTML 简洁。

### 4.2 图片/资产优化
- 对于预览图中的静态图标，确保使用了统一的 Lucide 图标库或优化过的 SVG。

## 5. 性能优化建议 (Performance Optimization)

基于 `web-performance-optimizer` 视角的优化方案：

### 5.1 资源加载优化
- **关键路径 CSS**: 确保 `layout.tsx` 中使用的 `next/font` 正确配置了 `display: 'swap'`（目前已使用 Google Font 自动处理，建议保持）。
- **图标按需加载**: `lucide-react` 虽然支持 Tree Shaking，但在大型应用中，建议检查打包体积。如果发现图标库占据较大体积，可考虑使用 `@lucide/react` 的子路径导入。

### 5.2 渲染策略
- **服务端组件 (RSC) 优先**: 检查目前所有的组件是否都必须标记为 `"use client"`。例如，如果 `Features` 只是展示静态内容，可以尝试将其逻辑剥离，使其作为 RSC 运行，从而减少客户端 JS 体积。
- **懒加载组件**: 对于首屏之外的组件（如 `DownloadStats` 或 `DownloadTips`），建议使用 `next/dynamic` 进行动态导入，以优化初始加载速度。

### 5.3 运行时优化
- **滚动监听**: `Navigation.tsx` 中的平滑滚动逻辑目前工作良好。对于更复杂的交互，建议使用 CSS 的 `scroll-behavior: smooth`（已在 `html` 标签上设置）来减少 JS 介入。

---

## 实施建议步骤

1. **第一阶段 (基础拆分)**: 提取 `Footer` 和 `ProductMockup`。
2. **第二阶段 (逻辑抽离)**: 实现 `useLandingPageData` Hook。
3. **第三阶段 (配置增强)**: 修复 `Features` 的映射逻辑，完善 `types.ts`。

*注：本建议旨在不改变现有功能的前提下，通过重构降低未来的开发成本。*
