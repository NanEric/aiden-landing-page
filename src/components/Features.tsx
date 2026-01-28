"use client";

import React from 'react';
import { FeatureCard } from '@/components/FeatureCard';
import { useLanguage } from '@/components/LanguageContext';
import { FEATURES } from '@/data/mockData';

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="max-w-[1280px] mx-auto px-6 mt-32 mb-32">
      <div className="flex flex-col gap-4 mb-16 text-center md:text-left">
        <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight leading-tight">
          {t.features.heading}
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl">
          {t.features.subheading}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            color={feature.color}
          />
        ))}
      </div>
    </section>
  );
}
