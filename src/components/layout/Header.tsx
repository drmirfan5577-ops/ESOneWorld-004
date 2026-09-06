import React from 'react';
import { Language } from '@/types';

interface HeaderProps {
  onLeftStar: () => void;
  onRightStar: () => void;
  lang: Language;
  setLang: (l: Language) => void;
  title?: string;
  subtitle?: string;
  showBismillah?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onLeftStar,
  onRightStar,
  lang,
  setLang,
  title,
  subtitle,
  showBismillah = false,
}) => {
  return (
    <header className="glass-card sticky top-0 z-30 px-3 pt-2 pb-1">
      {/* Top Row */}
      <div className="flex items-center justify-between gap-2 mb-1">
        {/* Left Star */}
        <button
          onClick={onLeftStar}
          className="star-btn w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
          aria-label="Left Menu"
        >
          ⭐
        </button>

        {/* Center: Title or Search Bar */}
        <div className="flex-1 mx-1">
          {title ? (
            <div className="text-center">
              <div className="font-bold text-sm text-gray-800 leading-tight">{title}</div>
              {subtitle && (
                <div className="text-[10px] text-gray-500">{subtitle}</div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2 bg-white/70 rounded-2xl px-3 py-1.5 border border-white/80 shadow-inner">
              <span className="text-gray-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder={lang === 'ur' ? 'تلاش کریں / URL' : lang === 'ar' ? 'ابحث / URL' : 'Search / URL'}
                className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none min-w-0"
                style={{ direction: lang !== 'en' ? 'rtl' : 'ltr' }}
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-2 py-0.5 rounded-lg">
                GO
              </button>
            </div>
          )}
        </div>

        {/* Right Star */}
        <button
          onClick={onRightStar}
          className="star-btn w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
          aria-label="Right Menu"
        >
          ⭐
        </button>
      </div>

      {/* Bismillah */}
      {showBismillah && (
        <div className="text-center py-1">
          <span
            className="text-lg font-bold arabic-text"
            style={{ color: '#92400e', textShadow: '0 0 20px rgba(202,138,4,0.4)' }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </span>
        </div>
      )}

      {/* Language Switcher */}
      <div className="flex justify-center gap-1.5 mt-1">
        {(['en', 'ur', 'ar'] as Language[]).map(l => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-0.5 rounded-full text-xs font-semibold transition-all ${
              lang === l
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                : 'bg-white/60 text-gray-600 border border-gray-200'
            }`}
          >
            {l === 'en' ? 'English' : l === 'ur' ? 'اردو' : 'العربية'}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
