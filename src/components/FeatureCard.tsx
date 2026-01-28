import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color }) => {
  const colorMap: Record<string, string> = {
    primary: 'border-primary/20 bg-primary/10 text-primary hover:border-primary/50',
    indigo: 'border-indigo-500/20 bg-indigo-500/10 text-indigo-400 hover:border-indigo-500/50',
    amber: 'border-amber-500/20 bg-amber-500/10 text-amber-400 hover:border-amber-500/50',
    rose: 'border-rose-500/20 bg-rose-500/10 text-rose-400 hover:border-rose-500/50',
  };

  const currentStyles = colorMap[color] || colorMap.primary;

  return (
    <div className="group p-8 rounded-2xl bg-surface-dark border border-border-dark hover:bg-slate-900/50 transition-all duration-300">
      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${currentStyles}`}>
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};
