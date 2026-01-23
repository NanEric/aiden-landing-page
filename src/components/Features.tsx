"use client";

import React from 'react';
import { Activity, BarChart3, Clock, Layers } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { useLanguage } from '@/components/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="px-6 py-32 bg-slate-950/50 border-y border-slate-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">{t.features.heading}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t.features.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.cards.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
              iconName={
                index === 0 ? "Activity" :
                  index === 1 ? "BarChart3" :
                    index === 2 ? "Clock" : "Layers"
              }
              color={
                index === 0 ? "bg-cyan-500" :
                  index === 1 ? "bg-indigo-500" :
                    index === 2 ? "bg-amber-500" : "bg-rose-500"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
