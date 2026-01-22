"use client";

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Languages } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all text-xs font-bold text-slate-400 hover:text-cyan-400 group"
        >
            <Languages className="w-3.5 h-3.5" />
            <span>{language === 'en' ? '中文' : 'EN'}</span>
        </button>
    );
};
