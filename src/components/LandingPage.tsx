"use client";

import React, { useState, useEffect } from 'react';
import { DOWNLOAD_CONFIG, trackDownload } from '@/config/downloads';
import { APP_CONFIG } from '@/config/app';
import { useLanguage } from '@/components/LanguageContext';
import { DownloadTips } from '@/components/DownloadTips';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Download } from '@/components/Download';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  const [config, setConfig] = useState({
    macUrl: DOWNLOAD_CONFIG.mac.url,
    windowsUrl: DOWNLOAD_CONFIG.windows.url,
    version: APP_CONFIG.version
  });
  
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

    const hideTips = localStorage.getItem('aiden_hide_download_tips');
    if (hideTips !== 'true') {
      setShowDownloadTips(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-dark text-slate-100 selection:bg-primary/30 font-display">
      <Navigation />

      <main className="flex-1">
        <Hero version={displayVersion} />
        <Features />
        <Download 
          macUrl={macUrl} 
          windowsUrl={windowsUrl} 
          version={displayVersion} 
          onDownloadClick={handleDownloadClick} 
        />
      </main>

      <Footer />

      <DownloadTips
        isOpen={showDownloadTips}
        onClose={() => setShowDownloadTips(false)}
      />
    </div>
  );
}
