"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { FOOTER_LINKS } from '@/data/mockData';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background-dark border-t border-border-dark py-12">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-primary/20 p-1 rounded-lg">
            <span className="material-symbols-outlined text-primary text-xl">bolt</span>
          </div>
          <span className="text-white font-bold">{t.footer.engine}</span>
        </div>
        
        <div className="flex gap-8">
          {FOOTER_LINKS.map((link) => (
            <a 
              key={link.label}
              className="text-slate-500 hover:text-white transition-colors text-sm font-medium" 
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <p className="text-slate-600 text-xs">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
