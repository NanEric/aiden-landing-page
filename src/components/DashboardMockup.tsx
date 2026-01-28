"use client";

import React from 'react';
import { METRICS } from '@/data/mockData';

export function DashboardMockup() {
  return (
    <div className="w-full max-w-5xl bg-surface-dark border border-border-dark rounded-2xl shadow-2xl p-4 md:p-8 relative group cyber-glow">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-8 border-b border-border-dark pb-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">analytics</span>
            <span className="font-bold text-white tracking-tight">Infrastructure Overview</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-500 rounded text-[10px] font-black border border-green-500/20 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            SYSTEMS ONLINE
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {METRICS.map((metric) => (
          <div key={metric.label} className="bg-background-dark/50 p-6 rounded-xl border border-border-dark flex flex-col gap-2 group-hover:border-primary/30 transition-all duration-500">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{metric.label}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white tabular-nums">{metric.value}</span>
              <span className={`${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-400'} text-sm font-bold`}>{metric.change}</span>
            </div>
            <div className="w-full bg-slate-800/50 h-1.5 rounded-full mt-2 overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ${
                  metric.color === 'primary' ? 'bg-primary shadow-[0_0_10px_#13a4ec]' : 
                  metric.color === 'indigo' ? 'bg-indigo-500 shadow-[0_0_10px_#6366f1]' : 
                  'bg-emerald-500 shadow-[0_0_10px_#10b981]'
                }`} 
                style={{ width: `${metric.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Chart Visualization */}
      <div className="bg-background-dark/50 rounded-xl border border-border-dark p-6 min-h-[320px] flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-black text-white uppercase tracking-[0.2em]">Traffic Analysis</h3>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_#13a4ec]"></div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Incoming</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"></div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Processed</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-end gap-2 min-h-[200px] px-2">
          {/* Bar chart mockup with neon gradients */}
          {[40, 60, 30, 80, 50, 90, 45, 70, 55, 85, 40, 65].map((height, i) => (
             <div 
               key={i} 
               className={`flex-1 rounded-t-sm transition-all duration-700 hover:opacity-80 cursor-pointer ${
                 i % 2 === 0 
                   ? 'bg-gradient-to-t from-primary/10 to-primary/40 border-t-2 border-primary/60' 
                   : 'bg-gradient-to-t from-indigo-500/10 to-indigo-500/40 border-t-2 border-indigo-500/60'
               }`} 
               style={{ height: `${height}%` }}
             ></div>
          ))}
        </div>
      </div>
    </div>
  );
}