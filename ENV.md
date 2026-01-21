# 环境变量配置

本指南说明如何为 Aiden 项目配置环境变量。

## 版本信息

- `NEXT_PUBLIC_APP_VERSION`: 应用版本号，例如 "v1.0.2"
  - 用于在网站顶部和底部显示当前版本号
  - 格式通常为 "v主版本号.次版本号.修订号"
  - 示例: `v1.0.2`

## 快速开始

1. 复制 `.env.example` 为 `.env.local`：
   ```bash
   cp .env.example .env.local
   ```

2. 在 `.env.local` 中更新以下变量：
   ```env
   # 下载链接配置
   NEXT_PUBLIC_DOWNLOAD_URL_MAC="https://example.com/download/mac"
   NEXT_PUBLIC_DOWNLOAD_URL_WINDOWS="https://example.com/download/windows"
   ```

## 环境变量说明

### 下载链接

- `NEXT_PUBLIC_DOWNLOAD_URL_MAC`: macOS 版本下载链接
- `NEXT_PUBLIC_DOWNLOAD_URL_WINDOWS`: Windows 版本下载链接

## 开发说明

- 所有环境变量必须以 `NEXT_PUBLIC_` 开头才能在浏览器端访问
- 敏感信息请勿直接存储在环境变量中
- `.env.local` 文件已加入 `.gitignore`，不会被提交到版本控制

## 部署说明

在部署时，请确保在部署平台（如 Vercel、Netlify 等）中设置相应的环境变量。
