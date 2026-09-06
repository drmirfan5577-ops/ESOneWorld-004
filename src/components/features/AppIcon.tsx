import React from 'react';
import { AppLink } from '@/types';

interface AppIconProps {
  app: AppLink;
  onPress: (app: AppLink) => void;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const AppIcon: React.FC<AppIconProps> = ({ app, onPress, size = 'md', showLabel = true }) => {
  const sizeMap = {
    sm: { box: 'w-14 h-14', emoji: 'text-2xl', label: 'text-[9px]' },
    md: { box: 'w-16 h-16', emoji: 'text-3xl', label: 'text-[10px]' },
    lg: { box: 'w-20 h-20', emoji: 'text-4xl', label: 'text-xs' },
  };
  const s = sizeMap[size];

  return (
    <div className="flex flex-col items-center gap-1" style={{ width: size === 'lg' ? 80 : 66 }}>
      <button
        className={`app-icon-btn ${s.box} flex items-center justify-center relative`}
        onClick={() => onPress(app)}
        title={app.name}
      >
        {/* Gradient tint overlay */}
        <div
          className="absolute inset-0 opacity-10 rounded-[18px]"
          style={{ background: app.bgGradient }}
        />
        {/* Green online dot */}
        <div
          className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full border-2 border-white"
          style={{ background: '#22c55e', boxShadow: '0 0 6px rgba(34,197,94,0.8)' }}
        />
        <span className={`${s.emoji} relative z-10`}>{app.emoji}</span>
      </button>
      {showLabel && (
        <span
          className={`${s.label} font-semibold text-center text-gray-700 leading-tight`}
          style={{ maxWidth: size === 'lg' ? 76 : 62, wordBreak: 'break-word' }}
        >
          {app.name}
        </span>
      )}
    </div>
  );
};

export default AppIcon;
