"use client";

import React, { useState, useEffect } from 'react';
import { DOWNLOAD_CONFIG, trackDownload } from '@/config/downloads';
import { APP_CONFIG } from '@/config/app';
import { DownloadTips } from '@/components/DownloadTips';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Download } from '@/components/Download';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  const [config, setConfig] = useState({
    macUrl: DOWNLOAD_CONFIG.mac.url,
    version: APP_CONFIG.version
  });
  
  const [showDownloadTips, setShowDownloadTips] = useState(false);

  useEffect(() => {
    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        setConfig(prev => ({
          macUrl: data.macUrl || prev.macUrl,
          version: data.version || prev.version
        }));
      })
      .catch(err => console.error("Failed to load config:", err));
  }, []);

  const { macUrl } = config;

  const handleDownloadClick = (type: 'mac' | 'windows') => {
    trackDownload(type);

    const hideTips = localStorage.getItem('aiden_hide_download_tips');
    if (hideTips !== 'true') {
      setShowDownloadTips(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-primary/10 font-sans">
      <Navigation />

      <main className="flex-1">
        <Hero version={config.version} />
        <Features />
        <Download 
          macUrl={macUrl} 
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
