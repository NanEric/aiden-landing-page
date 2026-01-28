"use client";

import React, { useState } from 'react';
import { Check, Share2 } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { NAV_LINKS } from '@/data/mockData';

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
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-white text-2xl">bolt</span>
          </div>
          <h2 className="text-white text-2xl font-bold tracking-tight">Aiden</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" 
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
             <LanguageSwitcher />
          </div>
          
          <button 
            onClick={handleShare}
            className="text-slate-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-white/5"
          >
            {shareSuccess ? <Check className="w-5 h-5 text-green-500" /> : <Share2 className="w-5 h-5" />}
          </button>

          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-lg shadow-primary/20">
            {t.nav.download}
          </button>
        </div>
      </div>
    </header>
  );
}
