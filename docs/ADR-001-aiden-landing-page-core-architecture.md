# ADR-001: Aiden Landing Page 核心架构设计

## 状态 (Status)
已接受 (Accepted)

## 上下文 (Context)
我们需要为 Aiden 智能监控引擎构建官方门户网站（Landing Page）。
**核心挑战：**
1. 采用最新的技术栈（Next.js 16, React 19, Tailwind CSS v4）。
2. 需要高性能的首屏加载速度。
3. 必须支持深色模式、多语言切换（中/英）以及平滑的动效。
4. 核心功能是提供多平台下载，并解决 macOS 上的安全性信任问题。

## 决定 (Decision)
我们将采用以下架构方案：

### 1. 基础框架与样式
- **Next.js 16 (App Router)**: 利用 React Server Components (RSC) 最小化客户端 JS 负载，提升 SEO。
- **Tailwind CSS v4**: 使用其全新的性能优化和样式能力。
- **Lucide React**: 统一图标规范。

### 2. 国际化 (i18n) 方案
- **实现方式**: 基于 `React Context` 和 `LocalStorage` 的自定义 `LanguageProvider`。
- **原因**: Landing Page 内容相对固定且主要在客户端进行语言切换展示，自定义 Provider 性能开销小，配置灵活。
- **检测策略**: 首选 `LocalStorage` -> 其次 `navigator.language` -> 最后默认 `en`。

### 3. 组件设计
- **Hero Mockup**: 结合 `Recharts` 模拟实时数据波动，使用 Tailwind 动画模拟终端输入流。
- **Download 模块**: 采用“API 优先，本地回退”策略，确保链接配置的灵活性。
- **Security Guide**: 针对 macOS 用户提供专门的指令复制组件。

## 方案权衡 (Options Considered)

### 选项 A: 全静态导出 (Next.js Static Export)
- **优点**: 部署简单，极速响应。
- **缺点**: 无法利用 `/api/config` 动态下发下载链接，且不利于后续的下载量统计。

### 选项 B: Next.js App Router + 自定义 i18n (当前选择)
- **优点**: 兼顾 SEO（服务端渲染静态内容）与交互灵活性（客户端切换语言）。
- **缺点**: 需要手动管理多语言字典。

## 后果 (Consequences)
- **正面影响**: 极佳的用户体验，符合现代 AI 产品的视觉预期（深色渐变、玻璃拟态）。
- **负面影响**: 对开发者在 React 19 和 Tailwind v4 的适配上有一定学习曲线。
- **风险**: Tailwind v4 尚新，可能存在某些插件兼容性问题（已通过原生 CSS 变量替代缓解）。

## 实施笔记 (Implementation Notes)
- 目录结构严格遵循 `src/app`, `src/components`, `src/config`。
- 下载配置存储在 `src/config/download.ts`。
- 动画效果优先使用 Tailwind 自带类名。
