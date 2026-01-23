"use client";

import React from 'react';
import { Apple, Monitor } from 'lucide-react';
import { DownloadStats } from '@/components/DownloadStats';
import { DOWNLOAD_CONFIG } from '@/config/downloads';
import { useLanguage } from '@/components/LanguageContext';

interface DownloadProps {
  macUrl: string;
  windowsUrl: string;
  version: string;
  onDownloadClick: (type: 'mac' | 'windows') => void;
}

export function Download({ macUrl, windowsUrl, version, onDownloadClick }: DownloadProps) {
  const { t } = useLanguage();

  return (
    <section id="download" className="px-6 py-32 bg-gradient-to-b from-transparent to-cyan-500/10 border-t border-slate-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">{t.download.headingLine1} <br /> {t.download.headingLine2}</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={macUrl || DOWNLOAD_CONFIG.mac.url}
            className="w-full md:w-auto px-10 py-5 bg-white text-black rounded-2xl font-black text-lg hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-white/5 active:scale-95 no-underline"
            download={DOWNLOAD_CONFIG.mac.fileName}
            onClick={() => onDownloadClick('mac')}
          >
            <Apple className="w-6 h-6" />
            {t.download.macos}
          </a>
          <a
            href={windowsUrl || DOWNLOAD_CONFIG.windows.url}
            className="w-full md:w-auto px-10 py-5 bg-slate-900 border border-slate-800 text-white rounded-2xl font-black text-lg hover:border-slate-500 transition-all flex items-center justify-center gap-3 active:scale-95 no-underline"
            download={DOWNLOAD_CONFIG.windows.fileName}
            onClick={() => onDownloadClick('windows')}
          >
            <Monitor className="w-6 h-6" />
            {t.download.windows}
          </a>
        </div>

        <div className="flex flex-col items-center gap-4">
          <DownloadStats />

          <div className="flex items-center gap-4 text-xs font-mono text-slate-600 mt-4">
            <span>{t.download.version}: {version}</span>
            <span className="w-1 h-1 rounded-full bg-slate-800"></span>
            <span className="text-slate-500">{t.download.stable}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
