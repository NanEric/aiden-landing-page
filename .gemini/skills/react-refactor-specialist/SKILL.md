---
name: react-refactor-specialist
description: 专门用于 React 组件重构。当需要提升代码可读性、拆分大型组件、提取自定义 Hook 或优化状态管理时使用。
---

# React Refactor Specialist

## 概述

此技能专注于提升 React 代码库的可维护性和可读性。它通过识别代码异味（Code Smells）并应用标准的重构模式，将混乱的组件转化为清晰、模块化的代码。

## 核心能力

### 1. 组件拆分 (Component Extraction)
- **目标**: 消除 "God Components"（巨型组件）。
- **策略**: 识别逻辑边界，将 UI 部分拆分为纯展示组件 (Presentational Components)，将复杂逻辑移入容器组件或 Hooks。
- **参考**: [patterns.md](references/patterns.md)

### 2. 逻辑复用 (Logic Extraction)
- **目标**: 消除重复逻辑，简化组件内部代码。
- **策略**: 将相关的 `useState` 和 `useEffect` 组合提取为 Custom Hooks。
- **参考**: [hooks-guide.md](references/hooks-guide.md)

### 3. 状态管理优化 (State Management)
- **目标**: 解决 Prop Drilling 和状态混乱。
- **策略**:
    - 本地状态 -> `useState`
    - 复杂本地状态 -> `useReducer`
    - 全局/共享状态 -> `Context` 或 Zustand/Redux

## 使用流程

1.  **分析 (Analyze)**: 阅读目标组件代码，识别以下问题：
    - 文件超过 200 行。
    - 超过 3 个 `useEffect`。
    - 大量的条件渲染 (`x ? y : z`)。
    - 深层嵌套的回调函数。
2.  **建议 (Propose)**: 提出重构计划。例如：“建议将 Header 和 Footer 提取为子组件，并将数据获取逻辑移动到 `useProductData` Hook 中。”
3.  **执行 (Execute)**: 应用重构，确保不破坏原有功能（保持接口兼容）。
4.  **验证 (Verify)**: 检查代码是否更简洁、更易读。

## 示例请求
- "这个 `Dashboard.tsx` 太大了，帮我拆分一下。"
- "把这个表单逻辑提取成一个自定义 Hook。"
- "优化这里的 Props 传递，太深了。"