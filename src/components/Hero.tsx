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
    <section className="relative hero-glow overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-6 pt-56 pb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-mono font-bold uppercase tracking-widest mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {t.hero.badge.replace('{{version}}', version)}
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold text-center mb-8 leading-[1.05] max-w-5xl premium-heading">
          {t.hero.titleLine1} <span className="text-gradient">{t.hero.titleLine2}</span>
        </h1>

        <p className="text-slate-400 text-center text-sm md:text-base max-w-3xl font-medium leading-relaxed uppercase tracking-[0.3em]">
          {t.hero.description}
        </p>
      </div>

      <DashboardDisplay />
    </section>
  );
}
