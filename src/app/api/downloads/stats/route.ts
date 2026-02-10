import { NextResponse } from 'next/server';
import { getKVKey } from '@/lib/kv-helper';

// 检查是否配置了有效的 KV
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

export async function GET() {
  try {
    if (!hasKV || !kv) {
      return NextResponse.json(
        { error: 'KV not configured' },
        { status: 503 }
      );
    }

    const [macCount, windowsCount] = await Promise.all([
      kv.get(getKVKey('downloads:mac')) || 0,
      kv.get(getKVKey('downloads:windows')) || 0
    ]);

    return NextResponse.json({
      mac: macCount,
      windows: windowsCount
    });
  } catch (error) {
    console.error('Download stats error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
