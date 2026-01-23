import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

// 检查是否配置了有效的 KV
const hasKV = process.env.KV_REST_API_URL && 
              process.env.KV_REST_API_TOKEN && 
              process.env.KV_REST_API_URL.startsWith('https://');

export async function GET() {
  let macUrl = "";
  let windowsUrl = "";

  // 只有在有有效 KV 配置时才尝试获取数据
  if (hasKV) {
    try {
      const { kv } = await import("@vercel/kv");
      macUrl = await kv.get<string>("downloadzip:mac") || "";
      windowsUrl = await kv.get<string>("downloadzip:windows") || "";
    } catch (error) {
      console.warn("Failed to fetch download URLs from KV:", error);
      // 使用环境变量作为降级方案
      macUrl = process.env.NEXT_PUBLIC_DOWNLOAD_URL_MAC || "";
      windowsUrl = process.env.NEXT_PUBLIC_DOWNLOAD_URL_WINDOWS || "";
    }
  } else {
    // 没有 KV 配置时使用环境变量
    macUrl = process.env.NEXT_PUBLIC_DOWNLOAD_URL_MAC || "";
    windowsUrl = process.env.NEXT_PUBLIC_DOWNLOAD_URL_WINDOWS || "";
  }

  // 尝试从 windowsUrl 提取版本号
  // 格式: https://.../download/0.1.0/aiden-monitor_0.1.0_x64_en-US.zip
  let version = "";
  if (windowsUrl) {
    try {
      const match = windowsUrl.match(/\/download\/([^\/]+)\//);
      if (match && match[1]) {
        version = match[1];
        if (!version.startsWith('v')) {
          version = 'v' + version;
        }
      }
    } catch (e) {
      console.warn("Failed to extract version from windowsUrl:", e);
    }
  }

  return NextResponse.json({
    macUrl,
    windowsUrl,
    version
  });
}
