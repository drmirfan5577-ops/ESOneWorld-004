import React from 'react';
import { TabKey, Language } from '@/types';

interface BottomNavProps {
  active: TabKey;
  onChange: (tab: TabKey) => void;
  lang: Language;
}

const NAV_ITEMS: { key: TabKey; emoji: string; en: string; ur: string; ar: string }[] = [
  { key: 'home', emoji: '🏠', en: 'Home', ur: 'ہوم', ar: 'الرئيسية' },
  { key: 'guests', emoji: '💬', en: 'Guests', ur: 'مہمان', ar: 'الضيوف' },
  { key: 'global', emoji: '🌍', en: 'Global', ur: 'گلوبل', ar: 'العالمي' },
  { key: 'paradise', emoji: '🕌', en: 'Paradise', ur: 'جنت', ar: 'الجنة' },
  { key: 'esmart', emoji: '⚡', en: 'E-Smart', ur: 'ای-سمارٹ', ar: 'ذكي' },
  { key: 'esonewworld', emoji: '🌐', en: 'ESOne', ur: 'ای ایس', ar: 'العالم' },
];

const BottomNav: React.FC<BottomNavProps> = ({ active, onChange, lang }) => {
  const getLabel = (item: typeof NAV_ITEMS[0]) => {
    if (lang === 'ur') return item.ur;
    if (lang === 'ar') return item.ar;
    return item.en;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 glass-card-deep border-t border-white/80 px-1 py-1 safe-bottom">
      <div className="flex items-end justify-around max-w-lg mx-auto">
        {NAV_ITEMS.map(item => {
          const isActive = active === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onChange(item.key)}
              className={`bottom-nav-item flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-2xl min-w-[44px] min-h-[44px] transition-all ${
                isActive
                  ? 'active'
                  : ''
              }`}
              style={{ minWidth: 48 }}
            >
              <div
                className={`flex items-center justify-center rounded-xl transition-all ${
                  isActive
                    ? 'w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-400/40'
                    : 'w-8 h-8 bg-white/60'
                }`}
              >
                <span className={`transition-all ${isActive ? 'text-xl' : 'text-lg'}`}>
                  {item.emoji}
                </span>
              </div>
              <span
                className={`text-[9px] font-semibold leading-tight transition-colors ${
                  isActive ? 'text-blue-700' : 'text-gray-500'
                } ${lang === 'ur' || lang === 'ar' ? 'font-urdu text-[8px]' : ''}`}
              >
                {getLabel(item)}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
