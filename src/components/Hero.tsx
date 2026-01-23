"use client";

import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

interface HeroProps {
  version: string;
}

export function Hero({ version }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="px-6 max-w-7xl mx-auto text-center mb-32">
      <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full text-xs font-bold text-cyan-400 mb-8 animate-bounce">
        <Star className="w-3 h-3 fill-current" />
        {version} {t.hero.badge}
      </div>
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight">
        {t.hero.titleLine1} <br />
        <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">{t.hero.titleLine2}</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-20 leading-relaxed">
        {t.hero.description}
      </p>

      {/* Product Preview Mockup */}
      <div className="relative group max-w-5xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-slate-950 rounded-2xl border border-slate-800 p-2 shadow-2xl overflow-hidden">
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 flex flex-col gap-6 text-left">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
              </div>
              <div className="text-[10px] mono text-slate-500 uppercase tracking-widest">{t.mockup.activeLog}</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-24 glass rounded-lg p-4 flex flex-col justify-between border-cyan-500/20">
                <div className="text-[10px] font-bold text-cyan-500">{t.mockup.tokensIn}</div>
                <div className="text-2xl font-black mono">124.5k</div>
              </div>
              <div className="h-24 glass rounded-lg p-4 flex flex-col justify-between border-indigo-500/20">
                <div className="text-[10px] font-bold text-indigo-500">{t.mockup.latency}</div>
                <div className="text-2xl font-black mono">0.42ms</div>
              </div>
              <div className="h-24 glass rounded-lg p-4 flex flex-col justify-between border-emerald-500/20">
                <div className="text-[10px] font-bold text-emerald-500">{t.mockup.stability}</div>
                <div className="text-2xl font-black mono">99.9%</div>
              </div>
            </div>
            <div className="h-32 bg-black/40 rounded-lg border border-slate-800 p-4 font-mono text-xs text-slate-500 overflow-hidden">
              <div className="text-cyan-400">{t.mockup.initCmd}</div>
              <div className="mt-1">{t.mockup.initStep1}</div>
              <div className="mt-1">{t.mockup.initStep2}</div>
              <div className="mt-1 opacity-50">{t.mockup.initStep3}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
