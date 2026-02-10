"use client";

import React from 'react';

export function DashboardDisplay() {
  return (
    <div className="relative max-w-[800px] mx-auto group">
      <div className="bg-[#f2f4f7] rounded-3xl overflow-hidden window-glow border border-slate-200 text-left shadow-2xl">
        {/* Top Bar / Header */}
        <div className="px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-slate-600 text-2xl">person</span>
            </div>
            <div>
              <div className="text-[#334155] font-bold text-lg leading-tight">aiden@aiden.com</div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-slate-500 text-sm font-medium">Online</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-slate-200 px-2 py-0.5 rounded text-xs text-slate-600 font-bold mb-1 inline-block">v1.0</div>
            <div className="text-slate-400 text-sm font-medium">Updated: 1:02</div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-blue-600">view_list</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 mb-1">15,829,830</div>
            <div className="text-slate-600 font-bold text-base mb-2">Total AI Usage</div>
            <div className="text-slate-400 text-sm font-medium">Sent: 15717.8k / Received: 112.0k</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-emerald-600">payments</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 mb-1">$1.21</div>
            <div className="text-slate-600 font-bold text-base mb-2">Est. Cost</div>
            <div className="text-slate-400 text-sm font-medium">Current Cycle</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-orange-600">bar_chart</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 mb-1">0%</div>
            <div className="text-slate-600 font-bold text-base mb-2">Memory Load</div>
            <div className="text-slate-400 text-sm font-medium">Current Capacity</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-purple-600">calendar_month</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 mb-1">1d</div>
            <div className="text-slate-600 font-bold text-base mb-2">Active Days</div>
            <div className="text-slate-400 text-sm font-medium">This Month</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="px-6 py-5 flex items-center justify-between border-t border-slate-200">
          <div className="flex items-center gap-2 text-slate-500 font-bold">
            <span className="material-symbols-outlined">menu_book</span>
            <span>Docs</span>
          </div>
          <div className="flex items-center gap-6 text-slate-500">
            <span className="material-symbols-outlined cursor-pointer hover:text-slate-800 transition-colors">settings</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-red-500 transition-colors">power_settings_new</span>
          </div>
        </div>
      </div>
    </div>
  );
}
