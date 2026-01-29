"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { FOOTER_LINKS } from '@/data/mockData';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background-dark border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-background-dark text-sm font-bold">radar</span>
            </div>
            <span className="text-white text-lg font-bold uppercase premium-heading">
              {t.footer.engine}<span className="text-primary">{t.footer.pro}</span>
            </span>
          </div>
          <p className="text-slate-600 text-[10px] font-mono uppercase tracking-[0.3em]">
             {t.footer.copyright}
          </p>
        </div>
        
        <nav className="flex items-center gap-8">
          {FOOTER_LINKS.map((link) => (
            <a 
              key={link.label}
              className="text-slate-500 hover:text-primary text-[10px] font-mono uppercase tracking-[0.2em] transition-colors" 
              href={link.href}
            >
              {t.footer.links[link.label.toLowerCase() as keyof typeof t.footer.links] || link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}