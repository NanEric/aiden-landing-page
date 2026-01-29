"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { METRICS, CHART_DATA, LOG_ENTRIES } from '@/data/mockData';

export function DashboardDisplay() {
  const { t } = useLanguage();

  return (
    <div className="max-w-[1400px] mx-auto px-6 pb-32 w-full">
      <div className="glass-panel rounded-2xl p-8 overflow-hidden shadow-[0_0_80px_rgba(0,242,255,0.12)] bg-[#071015] relative border border-primary/20">
        <div className="absolute inset-0 scan-lines opacity-10 pointer-events-none"></div>
        
        <div className="flex justify-between items-end mb-10 px-2">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">{t.mockup.title}</h2>
            <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">{t.mockup.subtitle}</p>
          </div>
          <div className="text-right flex flex-col items-end gap-1">
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em]">{t.mockup.lastSync}</span>
            <span className="text-2xl font-mono text-primary font-bold">08:42:15 UTC</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {METRICS.map((metric, index) => (
            <div key={index} className="dashboard-card rounded-xl border border-white/5 bg-[#0e1721] relative group text-left">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">{t.mockup[metric.label === 'Total Tokens' ? 'totalTokens' : metric.label === 'Estimated Cost' ? 'estimatedCost' : metric.label === 'Context Window' ? 'contextWindow' : 'activeDays'] || metric.label}</span>
                <span className="material-symbols-outlined text-slate-600 text-xl">{metric.icon}</span>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-white tracking-tight">{metric.value}</span>
                <span className={`text-xs font-bold ${metric.changeColor}`}>{metric.change}</span>
              </div>
              
              {metric.subtext && (
                 <div className="flex justify-between text-[10px] font-mono text-slate-600 uppercase font-bold">
                    <span>{metric.subtext}</span>
                 </div>
              )}

              {metric.progressBar && (
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-gradient-to-r from-primary to-secondary w-3/4 h-full"></div>
                </div>
              )}

              {metric.progressBars && (
                 <div className="flex gap-1 h-1.5 mt-1">
                    <div className="flex-1 bg-primary rounded-full"></div>
                    <div className="flex-1 bg-primary rounded-full"></div>
                    <div className="flex-1 bg-primary rounded-full"></div>
                    <div className="flex-1 bg-primary/20 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 dashboard-card rounded-xl border border-white/10 !p-8 relative min-h-[480px] bg-[#0c161d]">
            <div className="flex justify-between items-start mb-14">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-1">{t.mockup.chartTitle}</h3>
                <p className="text-[10px] text-slate-500 uppercase font-mono tracking-[0.2em]">{t.mockup.chartSubtitle}</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold text-white block leading-none mb-1">{CHART_DATA.value}</span>
                <span className="text-[9px] font-mono text-primary uppercase font-bold tracking-widest">{t.mockup.peakThroughput}</span>
              </div>
            </div>
            
            <div className="relative h-[280px] w-full">
              <div className="absolute inset-0 grid-bg opacity-30"></div>
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="cyanGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(0, 242, 255, 0.4)" stopOpacity="1"></stop>
                    <stop offset="100%" stopColor="rgba(0, 242, 255, 0)" stopOpacity="1"></stop>
                  </linearGradient>
                </defs>
                <path className="chart-svg" d="M0,32 C5,30 10,18 15,18 C20,18 25,28 30,28 C35,28 40,20 45,20 C50,20 55,24 60,24 C65,24 70,12 75,12 C80,12 85,22 90,22 C95,22 100,16 100,16" fill="none" stroke="#00f2ff" strokeLinecap="round" strokeWidth="2.5"></path>
                <path d="M0,32 C5,30 10,18 15,18 C20,18 25,28 30,28 C35,28 40,20 45,20 C50,20 55,24 60,24 C65,24 70,12 75,12 C80,12 85,22 90,22 C95,22 100,16 100,16 V40 H0 Z" fill="url(#cyanGrad)"></path>
              </svg>
              <div className="absolute -bottom-10 w-full flex justify-between px-2 text-[9px] font-mono text-slate-600 font-bold uppercase tracking-widest">
                <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>23:59</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 dashboard-card rounded-xl border border-white/10 !p-0 overflow-hidden flex flex-col bg-black/40 text-left">
            <div className="px-5 py-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">terminal</span>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">{t.mockup.systemLogs}</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
              </div>
            </div>
            
            <div className="p-6 terminal-text flex-1 font-mono text-slate-400 space-y-4 overflow-y-auto max-h-[420px]">
              {LOG_ENTRIES.map((log, index) => (
                <div key={index} className="flex gap-2">
                  <span className="text-slate-600 shrink-0 text-[10px]">{log.time}</span>
                  <span className={`${log.color} font-bold uppercase shrink-0`}>{log.type}</span>
                  <span className={log.messageColor || "text-slate-300"}>{log.message}</span>
                </div>
              ))}
              
              <div className="flex gap-1 items-center text-primary mt-6">
                <span>_</span>
                <span className="w-2 h-4 bg-primary/40 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
