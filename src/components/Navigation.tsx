"use client";

import React, { useState } from 'react';
import { Zap, Check, Share2 } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export function Navigation() {
  const [shareSuccess, setShareSuccess] = useState(false);
  const { t } = useLanguage();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Aiden',
          text: 'Check out Aiden - The AI Monitoring Engine',
          url: window.location.href,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          copyLink();
        }
      }
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 2000);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-slate-800/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-cyan-500 p-1.5 rounded-lg glow-cyan">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">AIDEN</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <LanguageSwitcher />
            <a
              href="#features"
              onClick={(e) => scrollToSection(e, 'features')}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {t.nav.features}
            </a>
            <a
              href="#download"
              onClick={(e) => scrollToSection(e, 'download')}
              className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-cyan-400 transition-all active:scale-95 shadow-lg shadow-white/5 cursor-pointer"
            >
              {t.nav.download}
            </a>
          </div>

          <button
            onClick={handleShare}
            className="text-slate-400 hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="Share"
          >
            {shareSuccess ? <Check className="w-5 h-5 text-green-500" /> : <Share2 className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
