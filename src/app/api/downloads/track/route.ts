import { NextRequest, NextResponse } from 'next/server';
import { getKVKey } from '@/lib/kv-helper';

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
  }
}

export async function POST(request: NextRequest) {
  try {
    const { platform } = await request.json();

    if (!platform || !['mac', 'windows'].includes(platform)) {
      return NextResponse.json({ error: 'Invalid platform' }, { status: 400 });
    }

    if (!hasKV || !kv) {
      return NextResponse.json(
        { error: 'KV not configured' },
        { status: 503 }
      );
    }

    // 增加下载计数
    const key = getKVKey(`downloads:${platform}`);
    const totalKey = getKVKey('downloads:total');
    
    await kv.incr(key);
    await kv.incr(totalKey);

    // 获取最新的统计数据
    const [macCount, windowsCount, totalCount] = await Promise.all([
      kv.get(getKVKey('downloads:mac')) || 0,
      kv.get(getKVKey('downloads:windows')) || 0,
      kv.get(getKVKey('downloads:total')) || 0
    ]);

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
    if (!hasKV || !kv) {
      return NextResponse.json(
        { error: 'KV not configured' },
        { status: 503 }
      );
    }

    const [macCount, windowsCount, totalCount] = await Promise.all([
      kv.get(getKVKey('downloads:mac')) || 0,
      kv.get(getKVKey('downloads:windows')) || 0,
      kv.get(getKVKey('downloads:total')) || 0
    ]);

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
