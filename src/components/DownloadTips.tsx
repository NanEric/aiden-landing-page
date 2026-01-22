"use client";

import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Terminal, Info } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface DownloadTipsProps {
    isOpen: boolean;
    onClose: () => void;
}

export const DownloadTips: React.FC<DownloadTipsProps> = ({ isOpen, onClose }) => {
    const [copied, setCopied] = useState(false);
    const [dontShowAgain, setDontShowAgain] = useState(false);
    const { t } = useLanguage();

    const xattrCommand = 'sudo xattr -cr /Applications/aiden-monitor.app';

    const copyCommand = () => {
        navigator.clipboard.writeText(xattrCommand);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleClose = () => {
        if (dontShowAgain) {
            localStorage.setItem('aiden_hide_download_tips', 'true');
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[100] pointer-events-none">
            <div
                className={`relative w-[400px] bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl pointer-events-auto transform transition-all duration-500 ease-out flex flex-col ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/5">
                    <div className="flex items-center gap-2.5">
                        <div className="bg-cyan-500/10 p-1.5 rounded-lg">
                            <Info className="w-4 h-4 text-cyan-400" />
                        </div>
                        <h3 className="text-base font-bold text-white tracking-tight">{t.tips.title}</h3>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-1.5 hover:bg-white/5 rounded-full transition-colors group"
                    >
                        <X className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-5 space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    {/* Step 1 */}
                    <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-[10px] font-black text-black">
                            1
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-xs font-bold text-white">{t.tips.step1Title}</h4>
                            <p className="text-[11px] text-slate-400 leading-normal">
                                {t.tips.step1DescPart1}<span className="text-cyan-400 font-mono">aiden-monitor.app</span> {t.tips.step1DescPart2}<span className="text-slate-300">/Applications</span>）
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-[10px] font-black text-black">
                            2
                        </div>
                        <div className="space-y-3 flex-1">
                            <h4 className="text-xs font-bold text-white">{t.tips.step2Title}</h4>

                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                                <div className="relative bg-black/50 rounded-lg border border-white/5 p-3 font-mono text-[11px] overflow-hidden">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-rose-500/20"></div>
                                            <div className="w-2 h-2 rounded-full bg-amber-500/20"></div>
                                            <div className="w-2 h-2 rounded-full bg-emerald-500/20"></div>
                                        </div>
                                        <button
                                            onClick={copyCommand}
                                            className="flex items-center gap-1 px-1.5 py-0.5 bg-white/5 hover:bg-white/10 rounded text-[9px] font-bold text-slate-400 transition-colors"
                                        >
                                            {copied ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
                                            {copied ? t.tips.copied : t.tips.copy}
                                        </button>
                                    </div>
                                    <div className="text-cyan-400/90 break-all leading-normal">
                                        {xattrCommand}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-xl p-3 flex gap-2.5">
                        <Terminal className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <p className="text-[10px] text-slate-500 leading-normal">
                            {t.tips.footerPart1}<span className="text-slate-300 font-bold">aiden</span>{t.tips.footerPart2}
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-white/5 bg-white/[0.02] flex items-center justify-between gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="relative flex items-center">
                            <input
                                type="checkbox"
                                className="peer sr-only"
                                checked={dontShowAgain}
                                onChange={(e) => setDontShowAgain(e.target.checked)}
                            />
                            <div className="w-4 h-4 border border-slate-700 rounded peer-checked:bg-cyan-500 peer-checked:border-cyan-500 transition-all"></div>
                            <Check className="w-3 h-3 text-black absolute left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-[11px] text-slate-500 group-hover:text-slate-400 transition-colors">{t.tips.dontShow}</span>
                    </label>

                    <button
                        onClick={handleClose}
                        className="px-4 py-1.5 bg-white text-black rounded-lg text-xs font-bold hover:bg-cyan-400 transition-all active:scale-[0.95]"
                    >
                        {t.tips.done}
                    </button>
                </div>
            </div>
        </div>
    );
};
