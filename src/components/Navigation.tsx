"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';

export function Navigation() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <header className="nav-glass">
      <div className="max-w-[1280px] mx-auto px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary font-bold text-3xl">query_stats</span>
          <span className="font-extrabold text-2xl tracking-tight text-slate-900">Aiden</span>
        </div>
        
        <nav className="flex items-center gap-8">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">language</span>
            {language === 'en' ? 'EN / 中' : '中 / EN'}
          </button>
          
          <a 
            href="#download"
            className="bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
            {t.nav.download}
          </a>
        </nav>
      </div>
    </header>
  );
}