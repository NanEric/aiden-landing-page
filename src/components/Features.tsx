"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';

const FEATURE_CONFIG = [
  {
    icon: 'speed',
    color: 'text-aiden-blue',
    bgColor: 'bg-aiden-blue/10'
  },
  {
    icon: 'payments',
    color: 'text-aiden-green',
    bgColor: 'bg-aiden-green/10'
  },
  {
    icon: 'memory',
    color: 'text-aiden-orange',
    bgColor: 'bg-aiden-orange/10'
  },
  {
    icon: 'analytics',
    color: 'text-aiden-purple',
    bgColor: 'bg-aiden-purple/10'
  }
];

export function Features() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-[#F8FAFC]" id="features">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-slate-500 text-lg">
            {t.features.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.cards.map((card, index) => {
            const config = FEATURE_CONFIG[index];
            return (
              <div key={index} className="feature-card">
                <div className={`w-12 h-12 rounded-xl ${config.bgColor} flex items-center justify-center mb-8`}>
                  <span className={`material-symbols-outlined ${config.color} text-3xl`}>{config.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}