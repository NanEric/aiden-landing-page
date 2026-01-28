"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { HERO_CONTENT } from '@/data/mockData';
import { DashboardMockup } from './DashboardMockup';

interface HeroProps {
  version: string;
}

export function Hero({ version }: HeroProps) {
  const { t } = useLanguage();

  return (
    <main className="pt-32 pb-20 relative overflow-hidden">
      {/* Abstract background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[120px]"></div>
      </div>

      <section className="max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8 pulse-badge">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {t.hero.badge.replace('{{version}}', version)}
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight max-w-4xl leading-[1.1]">
          <span className="hero-gradient-text">
            {t.hero.titleLine1} {t.hero.titleLine2}
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xl shadow-primary/20">
            {HERO_CONTENT.primaryCta}
          </button>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl text-base font-bold border border-slate-700 transition-all">
            {HERO_CONTENT.secondaryCta}
          </button>
        </div>

        <DashboardMockup />
      </section>
    </main>
  );
}