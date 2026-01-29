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

// 模拟数据存储（仅在开发环境或没有 KV 时使用）
const mockData: { [key: string]: number } = {
  [getKVKey('downloads:mac')]: 14203,
  [getKVKey('downloads:windows')]: 10392,
};

export async function GET() {
  try {
    let macCount, windowsCount;
    
    if (hasKV && kv) {
      [macCount, windowsCount] = await Promise.all([
        kv.get(getKVKey('downloads:mac')) || 0,
        kv.get(getKVKey('downloads:windows')) || 0
      ]);
    } else {
      // 使用模拟数据
      macCount = mockData[getKVKey('downloads:mac')];
      windowsCount = mockData[getKVKey('downloads:windows')];
    }

    return NextResponse.json({
      mac: macCount,
      windows: windowsCount
    });
  } catch (error) {
    console.error('Download stats error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
