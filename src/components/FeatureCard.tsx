
import React from 'react';
import * as Icons from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: keyof typeof Icons;
  color: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, iconName, color }) => {
  const Icon = Icons[iconName] as React.ElementType;

  return (
    <div className="glass p-8 rounded-2xl flex flex-col gap-4 hover:border-slate-500 transition-all duration-500 group">
      <div className={`p-3 rounded-xl w-fit ${color}/10 border border-current/20 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
