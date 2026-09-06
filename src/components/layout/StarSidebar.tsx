import React from 'react';
import { Language } from '@/types';
import { THEMES } from '@/constants/themes';
import { ThemeKey } from '@/types';

interface StarSidebarProps {
  side: 'left' | 'right';
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  themeKey: ThemeKey;
  onThemeChange: (key: ThemeKey) => void;
  onAdminPanel: () => void;
}

const LEFT_MENU = [
  { emoji: '🏠', en: 'Home Dashboard', ur: 'ہوم' },
  { emoji: '🔔', en: 'Notifications', ur: 'اطلاعات' },
  { emoji: '📌', en: 'Bookmarks', ur: 'بک مارک' },
  { emoji: '📥', en: 'Downloads', ur: 'ڈاؤنلوڈ' },
  { emoji: '📊', en: 'Statistics', ur: 'اعداد و شمار' },
  { emoji: '🔒', en: 'Locker', ur: 'لاکر' },
  { emoji: '🌐', en: 'UniOrbi Hub', ur: 'یونی آربی' },
  { emoji: '📝', en: 'UniFlow Notes', ur: 'یونی فلو' },
  { emoji: '📧', en: 'UniMail', ur: 'یونی میل' },
  { emoji: '📰', en: 'UniNews', ur: 'یونی نیوز' },
];

const RIGHT_MENU = [
  { emoji: '🎨', en: 'Themes & Wallpapers', ur: 'تھیمز' },
  { emoji: '⚙️', en: 'Settings', ur: 'ترتیبات' },
  { emoji: '🌙', en: 'Dark / Light Mode', ur: 'ڈارک موڈ' },
  { emoji: '🔐', en: 'Admin Panel', ur: 'ایڈمن پینل' },
  { emoji: '📋', en: 'Privacy Policy', ur: 'رازداری' },
  { emoji: '⚠️', en: 'Disclaimer', ur: 'دستبرداری' },
  { emoji: '©️', en: 'Copyrights', ur: 'کاپی رائٹس' },
  { emoji: '🎯', en: 'Vision & Mission', ur: 'وژن' },
  { emoji: '👥', en: 'About Us', ur: 'ہمارے بارے میں' },
  { emoji: '📞', en: 'Contact Us', ur: 'رابطہ' },
];

const StarSidebar: React.FC<StarSidebarProps> = ({
  side,
  isOpen,
  onClose,
  lang,
  themeKey,
  onThemeChange,
  onAdminPanel,
}) => {
  const [showThemes, setShowThemes] = React.useState(false);

  if (!isOpen) return null;

  const label = (en: string, ur: string) => lang === 'ur' ? ur : en;
  const isRtl = lang !== 'en';
  const menuItems = side === 'left' ? LEFT_MENU : RIGHT_MENU;

  const handleItemClick = (item: typeof RIGHT_MENU[0]) => {
    if (item.en === 'Themes & Wallpapers') {
      setShowThemes(v => !v);
    } else if (item.en === 'Admin Panel') {
      onAdminPanel();
      onClose();
    } else {
      onClose();
    }
  };

  return (
    <>
      <div className="sidebar-overlay" onClick={onClose} />
      <div className={`sidebar-panel ${side === 'left' ? 'sidebar-left' : 'sidebar-right'}`}>
        {/* Header */}
        <div
          className="p-4 flex items-center justify-between sticky top-0 z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(30,64,175,0.95), rgba(7,89,133,0.95))',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div>
            <div className="text-white font-bold text-base">
              ⭐ {side === 'left'
                ? label('Quick Links', 'فوری لنکس')
                : label('Settings & More', 'ترتیبات')}
            </div>
            <div className="text-blue-200 text-xs">ESOneWorld Platform</div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-all"
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-3 space-y-1">
          {menuItems.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => handleItemClick(item)}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl glass-card hover:bg-white/90 transition-all text-left ${isRtl ? 'flex-row-reverse' : ''}`}
              >
                <span className="text-xl">{item.emoji}</span>
                <span className={`font-medium text-gray-800 text-sm flex-1 ${isRtl ? 'text-right font-urdu' : ''}`}>
                  {label(item.en, item.ur)}
                </span>
                <span className="text-gray-400 text-xs">{isRtl ? '←' : '→'}</span>
              </button>

              {/* Theme Grid (under Themes item) */}
              {item.en === 'Themes & Wallpapers' && showThemes && (
                <div className="mt-2 p-2 rounded-2xl bg-white/50 border border-white/70">
                  <div className="text-xs font-bold text-gray-600 mb-2 text-center">
                    🎨 {label('Select Theme', 'تھیم منتخب کریں')}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {THEMES.map(t => (
                      <button
                        key={t.key}
                        onClick={() => onThemeChange(t.key)}
                        className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                          themeKey === t.key ? 'border-blue-600 scale-105' : 'border-white/80'
                        }`}
                      >
                        <div
                          className="h-12 w-full"
                          style={{ background: t.previewGradient }}
                        />
                        <div className="bg-gray-800/80 px-2 py-1">
                          <div className="text-white text-[9px] font-bold truncate">{t.nameEn}</div>
                          <div className="text-gray-300 text-[8px] font-urdu truncate">{t.nameUr}</div>
                        </div>
                        {themeKey === t.key && (
                          <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center">
                            <span className="text-white text-[8px]">✓</span>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 mt-4 border-t border-gray-200">
          <div className="text-center">
            <div className="text-xs font-bold text-gray-700">ESOneWorld</div>
            <div className="text-[10px] text-gray-500">Admin@drirfan.online</div>
            <div className="text-[10px] text-gray-500">drirfan.online</div>
            <div className="text-[10px] text-blue-700 font-semibold mt-1">
              Global Family Platform™
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StarSidebar;
