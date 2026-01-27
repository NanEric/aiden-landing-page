# Aiden 产品官网需求文档 (PRD)

## 1. 项目概述

**Aiden Landing Page** 是 Aiden 智能监控引擎的官方展示与下载门户。该网站旨在以现代化、科技感的视觉风格展示 Aiden 的核心能力，提供多平台客户端下载，并引导用户快速上手。项目采用 Next.js 构建，注重高性能与流畅的用户体验。

## 2. 技术栈 (Tech Stack)

*   **核心框架**: Next.js 16.1.4 (App Router)
*   **前端库**: React 19.2.3, TypeScript
*   **样式方案**: Tailwind CSS v4
*   **图标库**: Lucide React
*   **数据可视化**: Recharts (用于仪表盘组件)
*   **部署**: Vercel / Node.js

## 3. 功能需求 (Functional Requirements)

### 3.1 导航栏 (Navigation)
*   **布局**: 顶部固定悬浮，采用玻璃拟态 (Glassmorphism) 效果。
*   **品牌展示**: 左侧展示 Logo (Zap 图标) 及 "AIDEN" 品牌字样。
*   **功能入口**:
    *   **语言切换**: 集成 `LanguageSwitcher`，支持中/英切换。
    *   **锚点导航**: "特性 (Features)" 和 "下载 (Download)" 链接，点击支持平滑滚动。
    *   **高亮按钮**: "下载" 按钮采用高亮样式，引导转化。
*   **分享功能**:
    *   优先调用浏览器原生分享 API (`navigator.share`)。
    *   降级方案：自动复制当前页面 URL 到剪贴板，并显示成功反馈。

### 3.2 首屏区域 (Hero Section)
*   **版本通知**: 顶部显示当前版本号及 "New" 徽标，带跳动动画。
*   **主标题**: 采用渐变色文字 (Cyan to Indigo) 强调核心价值。
*   **产品演示 (Mockup)**:
    *   交互式仪表盘模拟：展示 "Tokens In", "Latency", "Stability" 等关键指标。
    *   终端模拟：展示初始化命令执行过程的动画效果。

### 3.3 特性展示 (Features Section)
*   **响应式网格**: 移动端单列 -> 平板双列 -> 桌面端四列布局。
*   **特性卡片**:
    *   **Activity**: 实时监控能力。
    *   **BarChart3**: 成本与用量分析。
    *   **Clock**: 响应速度 (TTFT) 追踪。
    *   **Layers**: 推理过程可视化。
*   **视觉区分**: 每个特性通过不同主题色 (Cyan, Indigo, Amber, Rose) 进行区分。

### 3.4 下载中心 (Download Section)
*   **多平台支持**:
    *   **macOS**: 提供 `.dmg` 下载，显示 Apple 图标。
    *   **Windows**: 提供 `.exe` 下载，显示 Monitor 图标。
*   **动态配置**: 下载链接优先通过 `/api/config` 获取，失败则回退至本地配置 (`DOWNLOAD_CONFIG`)。
*   **下载统计**: 集成 `DownloadStats` 组件展示下载量。
*   **安全指引 (Download Tips)**:
    *   macOS 用户下载后触发弹窗。
    *   提供 `sudo xattr -cr` 命令以解决 "未验证开发者" 提示。
    *   支持 "一键复制" 命令及 "不再显示" (LocalStorage) 选项。

### 3.5 国际化 (Internationalization)
*   **架构**: 基于 React Context (`LanguageContext`) 实现全局状态管理。
*   **自动检测**: 初始化时自动识别浏览器语言 (`navigator.language`)，默认为英语 ('en')，支持中文 ('zh')。
*   **内容覆盖**: 全站文案（包括导航、Hero、特性、下载提示等）均需支持多语言配置。

## 4. 非功能性需求 (Non-Functional Requirements)

*   **响应式设计**: 严格适配 Mobile, Tablet, Desktop 三种视口尺寸。
*   **视觉风格**:
    *   **Dark Mode**: 全站采用深色背景 (`#020617`)。
    *   **动效**: 使用 Tailwind 动画 (animate-bounce, glow effects) 增强交互感。
*   **性能优化**:
    *   利用 Next.js 服务端组件优化首屏渲染。
    *   静态资源 (Icons, Fonts) 按需加载。

## 5. 项目结构 (Project Structure)

```text
aiden-landing-page/
├── src/
│   ├── app/                # 页面路由与 API
│   ├── components/         # 核心组件 (Hero, Features, Download...)
│   ├── config/             # 全局配置 (downloads, i18n, app)
│   ├── lib/                # 工具函数
│   └── ...
├── public/                 # 静态资源
└── ...
```
