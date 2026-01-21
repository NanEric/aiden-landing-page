"use client";

import React, { useState, useEffect } from 'react';
import { Download, Apple, Monitor, TrendingUp } from 'lucide-react';
import { getDownloadStats } from '@/config/downloads';

interface DownloadStats {
  mac: number;
  windows: number;
  total: number;
}

export const DownloadStats: React.FC = () => {
  const [stats, setStats] = useState<DownloadStats>({ mac: 0, windows: 0, total: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDownloadStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch download stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    
    // 每30秒刷新一次统计数据
    const interval = setInterval(fetchStats, 30000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Download className="w-4 h-4 animate-pulse" />
        <span>Loading stats...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* 总下载量显示 */}
      <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border-slate-800">
        <TrendingUp className="w-4 h-4 text-cyan-400" />
        <span className="text-sm font-bold text-white">
          {stats.total.toLocaleString()} Downloads
        </span>
      </div>

      {/* 平台分布 */}
      <div className="flex items-center gap-6 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <Apple className="w-3 h-3" />
          <span>macOS: {stats.mac.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <Monitor className="w-3 h-3" />
          <span>Windows: {stats.windows.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
