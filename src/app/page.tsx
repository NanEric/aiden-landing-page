import LandingPage from "@/components/LandingPage";

export const dynamic = "force-dynamic";

// 检查是否配置了有效的 KV
const hasKV = process.env.KV_REST_API_URL && 
              process.env.KV_REST_API_TOKEN && 
              process.env.KV_REST_API_URL.startsWith('https://');

export default async function Page() {
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

  return (
    <LandingPage 
      macUrl={macUrl} 
      windowsUrl={windowsUrl} 
    />
  );
}