"use client";

import React, { useState } from 'react';
import {
  Zap, Download, Apple, Monitor, Terminal as TerminalIcon,
  Copy, Check, Star, Activity, BarChart3, Clock, Layers
} from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('npm install -g aiden-cli');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-slate-200 selection:bg-cyan-500/30 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-800/50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-cyan-500 p-1.5 rounded-lg glow-cyan">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white">AIDEN</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a
              href="#features"
              onClick={(e) => scrollToSection(e, 'features')}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Features
            </a>
            <a
              href="#download"
              onClick={(e) => scrollToSection(e, 'download')}
              className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-cyan-400 transition-all active:scale-95 shadow-lg shadow-white/5 cursor-pointer"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-32">
        {/* Hero Section */}
        <section className="px-6 max-w-7xl mx-auto text-center mb-32">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full text-xs font-bold text-cyan-400 mb-8 animate-bounce">
            <Star className="w-3 h-3 fill-current" />
            v1.0.2 Now Live
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight">
            Bring Clarity to Your <br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Gemini CLI Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-20 leading-relaxed">
            Aiden is a lightweight desktop monitoring dashboard that provides real-time visibility into your API calls, token consumption, and command logs.
          </p>

          {/* Product Preview Mockup */}
          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-950 rounded-2xl border border-slate-800 p-2 shadow-2xl overflow-hidden">
              <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 flex flex-col gap-6 text-left">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                  </div>
                  <div className="text-[10px] mono text-slate-500 uppercase tracking-widest">Aiden_Engine_Active.log</div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 glass rounded-lg p-4 flex flex-col justify-between border-cyan-500/20">
                    <div className="text-[10px] font-bold text-cyan-500">TOKENS_IN</div>
                    <div className="text-2xl font-black mono">124.5k</div>
                  </div>
                  <div className="h-24 glass rounded-lg p-4 flex flex-col justify-between border-indigo-500/20">
                    <div className="text-[10px] font-bold text-indigo-500">LATENCY</div>
                    <div className="text-2xl font-black mono">0.42ms</div>
                  </div>
                  <div className="h-24 glass rounded-lg p-4 flex flex-col justify-between border-emerald-500/20">
                    <div className="text-[10px] font-bold text-emerald-500">STABILITY</div>
                    <div className="text-2xl font-black mono">99.9%</div>
                  </div>
                </div>
                <div className="h-32 bg-black/40 rounded-lg border border-slate-800 p-4 font-mono text-xs text-slate-500 overflow-hidden">
                  <div className="text-cyan-400">&gt; aiden init --model=gemini-3-pro</div>
                  <div className="mt-1">Initializing intake valves... [OK]</div>
                  <div className="mt-1">Synchronizing token vectors... [OK]</div>
                  <div className="mt-1 opacity-50">Monitoring real-time mechanical throughput...</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-6 py-32 bg-slate-950/50 border-y border-slate-900 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">Everything you need to master Gemini.</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Turn complex CLI data into actionable visual insights with a suite of professional monitoring tools.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                title="Real-time Tracking"
                description="Monitor requests and responses in milliseconds with full streaming support."
                iconName="Activity"
                color="bg-cyan-500"
              />
              <FeatureCard
                title="Usage Analytics"
                description="Visual token consumption reports to help you stay ahead of your API billing."
                iconName="BarChart3"
                color="bg-indigo-500"
              />
              <FeatureCard
                title="Command History"
                description="Never lose a great prompt again. Full searchable history of all CLI interactions."
                iconName="Clock"
                color="bg-amber-500"
              />
              <FeatureCard
                title="Latency Monitor"
                description="Track response times and optimize your production deployment logic."
                iconName="Layers"
                color="bg-rose-500"
              />
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="px-6 py-32 bg-gradient-to-b from-transparent to-cyan-500/10 border-t border-slate-900 scroll-mt-24">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Upgrade your Gemini <br /> development experience.</h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
              <button className="w-full md:w-auto px-10 py-5 bg-white text-black rounded-2xl font-black text-lg hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-white/5 active:scale-95">
                <Apple className="w-6 h-6" />
                Download for macOS
              </button>
              <button className="w-full md:w-auto px-10 py-5 bg-slate-900 border border-slate-800 text-white rounded-2xl font-black text-lg hover:border-slate-500 transition-all flex items-center justify-center gap-3 active:scale-95">
                <Monitor className="w-6 h-6" />
                Download for Windows
              </button>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 px-5 py-2 glass rounded-full border-slate-800">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-400 tracking-tight">10,000+ engineers joined this month</span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-600 mt-4">
                <span>VERSION: v1.0.2</span>
                <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                <span className="text-slate-500">STABLE BUILD</span>
                <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                <span>SIZE: 42.5MB</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-900 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-slate-800 p-1 rounded-md">
              <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
            </div>
            <span className="text-sm font-bold text-white tracking-tighter">AIDEN ENGINE</span>
            <span className="text-[10px] text-slate-600 ml-4 font-mono">© 2024 AIDEN MONITORING LTD.</span>
          </div>

          <div className="flex gap-8 text-[10px] font-bold text-slate-500 tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
