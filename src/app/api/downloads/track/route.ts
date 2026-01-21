import { NextRequest, NextResponse } from 'next/server';

// 检查是否配置了有效的 KV（必须是真实的 HTTPS URL）
const hasKV = process.env.KV_REST_API_URL && 
              process.env.KV_REST_API_TOKEN && 
              process.env.KV_REST_API_URL.startsWith('https://');

// 动态导入 kv，只在有有效配置时使用
let kv: any;
if (hasKV) {
  try {
    kv = require('@vercel/kv').kv;
  } catch (error) {
    console.warn('Failed to initialize KV client:', error);
    // 如果初始化失败，将 hasKV 设为 false
    const hasKV = false;
  }
}

// 模拟数据存储（仅在开发环境或没有 KV 时使用）
const mockData: { [key: string]: number } = {
  'downloads:mac': 1234,
  'downloads:windows': 5678,
  'downloads:total': 6912
};

export async function POST(request: NextRequest) {
  try {
    const { platform } = await request.json();

    if (!platform || !['mac', 'windows'].includes(platform)) {
      return NextResponse.json({ error: 'Invalid platform' }, { status: 400 });
    }

    // 增加下载计数
    const key = `downloads:${platform}`;
    const totalKey = 'downloads:total';
    
    if (hasKV && kv) {
      await kv.incr(key);
      await kv.incr(totalKey);
    } else {
      // 降级到模拟数据
      mockData[key] = (mockData[key] || 0) + 1;
      mockData[totalKey] = (mockData[totalKey] || 0) + 1;
    }

    // 获取最新的统计数据
    let macCount, windowsCount, totalCount;
    
    if (hasKV && kv) {
      [macCount, windowsCount, totalCount] = await Promise.all([
        kv.get('downloads:mac') || 0,
        kv.get('downloads:windows') || 0,
        kv.get('downloads:total') || 0
      ]);
    } else {
      // 使用模拟数据
      macCount = mockData['downloads:mac'];
      windowsCount = mockData['downloads:windows'];
      totalCount = mockData['downloads:total'];
    }

    return NextResponse.json({
      success: true,
      stats: {
        mac: platform === 'mac' ? (macCount || 1) : macCount,
        windows: platform === 'windows' ? (windowsCount || 1) : windowsCount,
        total: totalCount
      }
    });
  } catch (error) {
    console.error('Download tracking error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    // 获取所有下载统计
    let macCount, windowsCount, totalCount;
    
    if (hasKV && kv) {
      [macCount, windowsCount, totalCount] = await Promise.all([
        kv.get('downloads:mac') || 0,
        kv.get('downloads:windows') || 0,
        kv.get('downloads:total') || 0
      ]);
    } else {
      // 使用模拟数据
      macCount = mockData['downloads:mac'];
      windowsCount = mockData['downloads:windows'];
      totalCount = mockData['downloads:total'];
    }

    return NextResponse.json({
      mac: macCount,
      windows: windowsCount,
      total: totalCount
    });
  } catch (error) {
    console.error('Download stats error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
