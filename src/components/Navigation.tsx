"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { NAV_LINKS } from '@/config/site';

export function Navigation() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] nav-glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-background-dark text-2xl font-bold">radar</span>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-white text-2xl font-black font-[family-name:var(--font-inter)] tracking-normal premium-heading uppercase">
                AIDEN<span className="text-primary italic">PRO</span>
              </span>
              <div className="flex items-center gap-1.5 ml-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[8px] font-mono font-bold text-emerald-500 tracking-[0.2em] uppercase">System Live</span>
              </div>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-16 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              className="nav-link-hover text-slate-300 text-[11px] font-bold uppercase tracking-[0.25em]" 
              href={link.href}
            >
              {t.nav[link.label.toLowerCase() as keyof typeof t.nav] || link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button 
            className="lang-btn"
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
          >
            {language === 'en' ? 'ZH/EN' : 'EN/ZH'}
          </button>
          <a className="glowing-btn px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 inline-flex" href="#download">
            <span className="text-background-dark text-xs font-black uppercase tracking-widest flex items-center gap-2">
              {t.nav.download}
              <span className="material-symbols-outlined text-sm">download</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}