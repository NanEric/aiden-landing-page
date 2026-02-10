"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '@/config/i18n';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window !== 'undefined') {
            const browserLang = navigator.language.split('-')[0];
            return browserLang === 'zh' ? 'zh' : 'en';
        }
        return 'en';
    });

    const value = {
        language,
        setLanguage,
        t: translations[language],
    };

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
