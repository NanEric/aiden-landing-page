"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-[#F9FAFB]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary font-bold text-2xl">query_stats</span>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">Aiden</span>
            </div>
            <div className="flex items-center gap-8 text-sm font-semibold text-slate-400">
              <a className="hover:text-primary transition-colors" href="#">{t.footer.links.privacy}</a>
              <a className="hover:text-primary transition-colors" href="#">{t.footer.links.license}</a>
              <a className="hover:text-primary transition-colors" href="#">{t.footer.links.terms}</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <p className="text-slate-400 text-xs font-mono uppercase tracking-[0.2em]">© 2024 Aiden Labs</p>
          </div>
        </div>
      </div>
    </footer>
  );
}