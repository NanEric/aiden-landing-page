---
name: web-performance-optimizer
description: 专门用于 Web 应用性能优化。当需要提升页面加载速度、优化 Core Web Vitals、减小包体积或解决卡顿问题时使用。
---

# Web Performance Optimizer

## 概述

此技能专注于诊断和解决 Web 应用的性能瓶颈。它基于 Core Web Vitals (CWV) 标准，提供针对资源加载、渲染路径和运行时交互的优化建议，特别针对 Next.js 应用进行了适配。

## 核心能力

### 1. 加载速度优化 (Load Performance)
- **目标**: 降低 LCP (Largest Contentful Paint) 和 FCP (First Contentful Paint)。
- **策略**: 图像优化、字体加载策略、关键 CSS 提取、资源预加载 (Preload)。
- **参考**: [core-web-vitals.md](references/core-web-vitals.md)

### 2. 交互响应优化 (Interactivity)
- **目标**: 降低 INP (Interaction to Next Paint) 和 TBT (Total Blocking Time)。
- **策略**: 减少主线程阻塞、代码分割 (Code Splitting)、延迟加载非关键脚本。

### 3. 视觉稳定性 (Visual Stability)
- **目标**: 降低 CLS (Cumulative Layout Shift)。
- **策略**: 预留布局空间、固定尺寸媒体元素、防止字体加载导致的重排。

### 4. Next.js 特有优化
- **目标**: 利用框架特性提升性能。
- **策略**: `next/image` 使用、服务端组件 (RSC) 策略、静态生成 (SSG/ISR)。
- **参考**: [nextjs-perf.md](references/nextjs-perf.md)

## 使用流程

1.  **诊断 (Diagnose)**: 询问用户当前的性能瓶颈或 Lighthouse 评分。如果未知，检查代码中明显的性能杀手（如未优化的图片、巨大的 Bundle）。
2.  **分析 (Analyze)**:
    - 检查 `package.json` 中的大依赖。
    - 检查图片标签是否使用了 `next/image`。
    - 检查字体加载方式。
    - 检查 `useEffect` 中是否有阻塞渲染的同步操作。
3.  **建议 (Propose)**: 提供具体的优化措施。例如：“将首页的大图加上 `priority` 属性，并将 Lodash 替换为按需引入。”
4.  **执行 (Execute)**: 修改代码以应用优化。

## 示例请求
- "我的网站首屏加载太慢了。"
- "Lighthouse 显示 LCP 只有 50 分，怎么优化？"
- "如何减少这个页面的 JavaScript 体积？"