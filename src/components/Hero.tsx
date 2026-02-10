"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { DashboardDisplay } from './DashboardDisplay';

interface HeroProps {
  version: string;
}

export function Hero({ version }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="pt-24 pb-12 bg-white overflow-hidden" id="hero">
      <div className="max-w-[1280px] mx-auto px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[12px] font-bold uppercase tracking-widest mb-8 animate-badge-bounce">
          <span className="badge-dot" aria-hidden="true"></span>
          <span className="material-symbols-outlined text-[16px]">ios</span>
          {version} · {t.hero.badge}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8">
          {t.hero.titleLine1} <br className="hidden md:block"/> {t.hero.titleLine2}
        </h1>
        
        <p className="text-slate-500 text-xl md:text-2xl mb-24 max-w-2xl mx-auto leading-relaxed">
          {t.hero.description}
        </p>

        <DashboardDisplay />
      </div>
    </section>
  );
}
