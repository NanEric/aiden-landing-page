# 下载统计功能设置指南

## 功能概述
本项目已集成下载统计功能，使用 Vercel KV 存储来跟踪和显示下载次数。

## 已实现的功能
- ✅ 下载点击统计（macOS 和 Windows 分别统计）
- ✅ 总下载量显示
- ✅ 实时数据更新（每30秒刷新）
- ✅ 优雅的 UI 显示组件
- ✅ 降级处理（没有 KV 时使用模拟数据）

## 降级行为
**重要：** 当没有配置 Vercel KV 时，系统会自动使用模拟数据：
- macOS: 1,234 次下载
- Windows: 5,678 次下载  
- 总计: 6,912 次下载

这样可以确保在开发环境中功能正常显示，不会因为缺少环境变量而报错。

## 部署步骤

### 1. 部署到 Vercel
```bash
npm run build
vercel --prod
```

### 2. 配置 Vercel KV
1. 在 Vercel 项目控制台中，进入 "Storage" 选项卡
2. 创建新的 KV 数据库
3. 在项目设置中添加环境变量：
   - `KV_REST_API_URL` (自动填充)
   - `KV_REST_API_TOKEN` (自动填充)

### 3. 配置下载链接
在 Vercel 项目设置中添加环境变量：
- `NEXT_PUBLIC_DOWNLOAD_URL_MAC`: macOS 下载链接
- `NEXT_PUBLIC_DOWNLOAD_URL_WINDOWS`: Windows 下载链接

## 本地开发设置

### 1. 安装 Vercel CLI
```bash
npm i -g vercel
```

### 2. 链接项目
```bash
vercel link
```

### 3. 获取 KV 凭据
在 Vercel 控制台的 KV 数据库页面获取：
- REST API URL
- REST API Token

### 4. 创建本地环境变量文件
创建 `.env.local` 文件：
```env
KV_REST_API_URL=your_kv_rest_api_url
KV_REST_API_TOKEN=your_kv_rest_api_token
NEXT_PUBLIC_DOWNLOAD_URL_MAC=https://your-cdn-url.com/aiden-mac.dmg
NEXT_PUBLIC_DOWNLOAD_URL_WINDOWS=https://your-cdn-url.com/aiden-windows.exe
```

## API 端点

### POST /api/downloads/track
记录下载事件
```json
{
  "platform": "mac" | "windows"
}
```

### GET /api/downloads/track
获取下载统计
```json
{
  "mac": 1234,
  "windows": 5678,
  "total": 6912
}
```

## 组件使用

### DownloadStats 组件
显示下载统计信息，自动每30秒刷新数据。

```tsx
import { DownloadStats } from '@/components/DownloadStats';

// 在组件中使用
<DownloadStats />
```

### 下载跟踪
```tsx
import { trackDownload } from '@/config/downloads';

// 在下载按钮点击时调用
onClick={() => trackDownload('mac')}
```

## 数据结构
KV 存储的键值对：
- `downloads:mac`: macOS 下载次数
- `downloads:windows`: Windows 下载次数  
- `downloads:total`: 总下载次数

## 注意事项
- Vercel KV 有免费额度限制
- 数据持久化存储，重启后数据不会丢失
- 统计数据实时更新，无需手动刷新页面
