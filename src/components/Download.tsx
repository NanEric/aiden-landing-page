"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { useDownloadStats } from '@/hooks/useDownloadStats';

interface DownloadProps {
  macUrl: string;
  onDownloadClick: (type: 'mac' | 'windows') => void;
}

export function Download({ macUrl, onDownloadClick }: DownloadProps) {
  const { t } = useLanguage();
  const { stats, loading, error } = useDownloadStats();

  // Combine downloads from stats
  const totalDownloads = stats.mac + stats.windows;
  const displayDownloads = (() => {
    if (loading || error) return '—';
    if (totalDownloads >= 1000) {
      return (totalDownloads / 1000).toFixed(1) + 'k';
    }
    return totalDownloads.toLocaleString();
  })();

  return (
    <section className="py-24 bg-[#F1F5F9] border-y border-slate-200/60" id="download">
      <div className="max-w-[1280px] mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
          {t.download.heading}
        </h2>
        <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
          {t.download.subheading}
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm animate-pulse-subtle">
            <span className="material-symbols-outlined text-primary text-xl">trending_up</span>
            <span className="text-slate-600 font-semibold text-sm">
              <span className="text-slate-900 font-extrabold">{displayDownloads}</span> {t.download.downloads}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="text-slate-500 text-sm">{t.download.trusted}</span>
          </div>
          
          <div className="flex justify-center">
            <a 
              href={macUrl}
              onClick={() => onDownloadClick('mac')}
              className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-2xl shadow-primary/30 hover:-translate-y-1 hover:brightness-110 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined">download</span>
              {t.download.btnText}
            </a>
          </div>
          
          <p className="text-slate-400 text-sm font-medium">
            {t.download.requirements}
          </p>
        </div>
      </div>
    </section>
  );
}
