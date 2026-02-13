"use client";

import React from 'react';

export function DashboardDisplay() {
  return (
    <div className="relative max-w-[800px] mx-auto group">
      <div className="bg-white rounded-3xl overflow-hidden window-glow border border-slate-200 shadow-2xl">
        <img
          src="/aiden-hero.png"
          alt="Aiden dashboard preview"
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
}
