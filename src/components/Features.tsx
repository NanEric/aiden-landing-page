"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { FEATURES } from '@/data/mockData';

export function Features() {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white premium-heading uppercase">
            {t.features.heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const translatedFeature = t.features.cards[index];
            const borderColor = feature.color === 'primary' ? 'primary' : 
                              feature.color === 'secondary' ? 'secondary' : 
                              feature.color.split('-')[0]; // emerald, amber
            
            const borderClass = feature.color === 'primary' ? 'border-t-primary/20 hover:neon-border-cyan' :
                                feature.color === 'secondary' ? 'border-t-secondary/20 hover:neon-border-purple' :
                                feature.color.includes('emerald') ? 'border-t-emerald-400/20 hover:border-emerald-400/40' :
                                'border-t-amber-400/20 hover:border-amber-400/40';
            
            const iconBgClass = feature.color === 'primary' ? 'bg-primary/10 border-primary/20' :
                                feature.color === 'secondary' ? 'bg-secondary/10 border-secondary/20' :
                                feature.color.includes('emerald') ? 'bg-emerald-400/10 border-emerald-400/20' :
                                'bg-amber-400/10 border-amber-400/20';

            const iconTextClass = feature.color === 'primary' ? 'text-primary' :
                                  feature.color === 'secondary' ? 'text-secondary' :
                                  feature.color.includes('emerald') ? 'text-emerald-400' :
                                  'text-amber-400';
            
            const footerTextClass = iconTextClass;
            const footerBarClass = feature.color === 'primary' ? 'bg-primary/20' :
                                   feature.color === 'secondary' ? 'bg-secondary/20' :
                                   feature.color.includes('emerald') ? 'bg-emerald-400/20' :
                                   'bg-amber-400/20';

            return (
              <div key={index} className={`group p-8 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-500 border-t-2 ${borderClass}`}>
                <div className={`w-12 h-12 mb-8 flex items-center justify-center rounded-xl ${iconBgClass} group-hover:scale-110 transition-transform`}>
                  <span className={`material-symbols-outlined ${iconTextClass} text-3xl font-light`}>{feature.icon}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-4 uppercase premium-heading">
                  {translatedFeature.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {translatedFeature.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2">
                  <span className={`text-[10px] font-mono ${footerTextClass} uppercase tracking-widest`}>
                    {translatedFeature.footer}
                  </span>
                  <div className={`h-px flex-1 ${footerBarClass}`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}