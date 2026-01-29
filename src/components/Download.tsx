"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { DOWNLOAD_CONTENT } from '@/data/mockData';
import { useDownloadStats } from '@/hooks/useDownloadStats';

interface DownloadProps {
  macUrl: string;
  windowsUrl: string;
  version: string;
  onDownloadClick: (type: 'mac' | 'windows') => void;
}

export function Download({ macUrl, windowsUrl, version, onDownloadClick }: DownloadProps) {
  const { t, language } = useLanguage();
  const { stats, loading, error } = useDownloadStats();

  return (
    <section className="py-32 px-6 bg-[#030712] relative overflow-hidden" id="download">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(112,0,255,0.1),transparent_50%)]"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-normal uppercase premium-heading">
            {t.download.heading}
          </h2>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.4em]">
            {t.download.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DOWNLOAD_CONTENT.cards.map((card, index) => {
            const isMac = card.platform === 'macOS';
            const translatedCard = t.download.cards[index];
            const gradientClass = isMac ? 'from-primary/20 hover:from-primary' : 'from-secondary/20 hover:from-secondary';
            const neonClass = isMac ? 'group-hover:neon-border-cyan' : 'group-hover:neon-border-purple';
            const pillClass = isMac ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-secondary/10 border-secondary/20 text-secondary';
            const btnBg = isMac ? 'bg-primary text-background-dark shadow-[0_0_20px_rgba(0,242,255,0.3)]' : 'bg-secondary text-white shadow-[0_0_20px_rgba(112,0,255,0.3)]';
            const downloadUrl = isMac ? macUrl : windowsUrl;
            
            // 获取真实的下载数据
            const downloadCount = isMac ? stats.mac : stats.windows;
            const downloadsText = loading ? 'Loading...' : error ? 'N/A' : `${downloadCount.toLocaleString()} ${language === 'en' ? 'DOWNLOADS' : '次下载'}`;
            
            // 动态替换版本号和下载次数
            const dynamicDetails = translatedCard.details
              .replace('{{version}}', version)
              .replace('{{macDownloads}}', stats.mac.toLocaleString())
              .replace('{{windowsDownloads}}', stats.windows.toLocaleString());

            return (
              <div key={card.platform} className={`group relative rounded-3xl p-1 bg-gradient-to-br ${gradientClass} to-transparent transition-all duration-500`}>
                <div className="bg-background-dark/90 backdrop-blur-2xl rounded-[1.4rem] p-10 flex flex-col items-center text-center">
                  <div className={`w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 ${neonClass} transition-all`}>
                    <span className="material-symbols-outlined text-5xl text-white font-extralight">{card.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 premium-heading uppercase">{card.platform}</h3>
                  <p className="text-slate-500 font-mono text-[10px] mb-4 uppercase tracking-[0.2em]">{dynamicDetails}</p>
                  
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${pillClass} text-[10px] font-mono mb-8 tracking-widest`}>
                    <span className="material-symbols-outlined text-[12px]">download_done</span>
                    {downloadsText}
                  </div>
                  
                  <div className="w-full h-px bg-white/5 mb-8"></div>
                  
                  <a 
                    href={downloadUrl}
                    onClick={() => onDownloadClick(isMac ? 'mac' : 'windows')}
                    className={`w-full py-4 rounded-xl ${btnBg} font-extrabold text-sm uppercase transition-all flex items-center justify-center gap-2 premium-heading hover:brightness-110 cursor-pointer`}
                  >
                    <span className="material-symbols-outlined text-lg">download</span>
                    {translatedCard.btnText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}