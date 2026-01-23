"use client";

import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { DOWNLOAD_CONFIG, trackDownload } from '@/config/downloads';
import { APP_CONFIG } from '@/config/app';
import { useLanguage } from '@/components/LanguageContext';
import { DownloadTips } from '@/components/DownloadTips';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Download } from '@/components/Download';

export default function LandingPage() {
  const [config, setConfig] = useState({
    macUrl: DOWNLOAD_CONFIG.mac.url,
    windowsUrl: DOWNLOAD_CONFIG.windows.url,
    version: APP_CONFIG.version
  });
  
  // Note: copyToClipboard and related state were identified as unused in the render and have been removed during refactor.
  
  const [showDownloadTips, setShowDownloadTips] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        setConfig(prev => ({
          macUrl: data.macUrl || prev.macUrl,
          windowsUrl: data.windowsUrl || prev.windowsUrl,
          version: data.version || prev.version
        }));
      })
      .catch(err => console.error("Failed to load config:", err));
  }, []);

  const { macUrl, windowsUrl, version } = config;
  const displayVersion = version || APP_CONFIG.version;

  const handleDownloadClick = (type: 'mac' | 'windows') => {
    trackDownload(type);

    // Check if user has opted out of seeing tips
    const hideTips = localStorage.getItem('aiden_hide_download_tips');
    if (hideTips !== 'true') {
      setShowDownloadTips(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-slate-200 selection:bg-cyan-500/30 font-sans">
      <Navigation />

      <main className="flex-1 pt-32">
        <Hero version={displayVersion} />
        <Features />
        <Download 
          macUrl={macUrl} 
          windowsUrl={windowsUrl} 
          version={displayVersion} 
          onDownloadClick={handleDownloadClick} 
        />
      </main>

      <footer className="py-12 border-t border-slate-900 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-slate-800 p-1 rounded-md">
              <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
            </div>
            <span className="text-sm font-bold text-white tracking-tighter">{t.footer.engine}</span>
            <span className="text-[10px] text-slate-600 ml-4 font-mono">{t.footer.copyright}</span>
          </div>

          <div className="flex gap-8 text-[10px] font-bold text-slate-500 tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.support}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.twitter}</a>
          </div>
        </div>
      </footer>

      <DownloadTips
        isOpen={showDownloadTips}
        onClose={() => setShowDownloadTips(false)}
      />
    </div>
  );
}
