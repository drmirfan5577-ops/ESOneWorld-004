import React, { useState } from 'react';
import { TabKey } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';
import BottomNav from '@/components/layout/BottomNav';
import Header from '@/components/layout/Header';
import NewsTicker from '@/components/layout/NewsTicker';
import StarSidebar from '@/components/layout/StarSidebar';
import Home from '@/pages/Home';
import GuestRoom from '@/pages/GuestRoom';
import Global from '@/pages/Global';
import Paradise from '@/pages/Paradise';
import ESmart from '@/pages/ESmart';
import ESOneWorld from '@/pages/ESOneWorld';
import AdminPanel from '@/pages/AdminPanel';

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const { themeKey, theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  if (showAdmin) {
    return (
      <AdminPanel
        lang={lang}
        themeKey={themeKey}
        onThemeChange={setTheme}
        onBack={() => setShowAdmin(false)}
      />
    );
  }

  const tabTitles: Record<TabKey, { en: string; ur: string }> = {
    home: { en: 'UniBrowser — Home', ur: 'یونی براؤزر — ہوم' },
    guests: { en: 'Guest Room', ur: 'گیسٹ روم' },
    global: { en: 'Global', ur: 'گلوبل' },
    paradise: { en: 'Paradise Hub', ur: 'جنت مرکز' },
    esmart: { en: 'E-Smart — UniOrbi', ur: 'ای-سمارٹ' },
    esonewworld: { en: 'ESOneWorld', ur: 'ای ایس ون ورلڈ' },
  };

  const currentTitle = lang === 'ur' ? tabTitles[activeTab].ur : tabTitles[activeTab].en;

  return (
    <div
      className={`min-h-screen max-w-lg mx-auto relative overflow-hidden ${theme.themeClass}`}
      style={{
        background: `linear-gradient(135deg, ${theme.gradientFrom} 0%, ${theme.gradientTo} 100%)`,
        minHeight: '100dvh',
      }}
    >
      {/* Sidebars */}
      <StarSidebar
        side="left"
        isOpen={leftSidebarOpen}
        onClose={() => setLeftSidebarOpen(false)}
        lang={lang}
        themeKey={themeKey}
        onThemeChange={setTheme}
        onAdminPanel={() => setShowAdmin(true)}
      />
      <StarSidebar
        side="right"
        isOpen={rightSidebarOpen}
        onClose={() => setRightSidebarOpen(false)}
        lang={lang}
        themeKey={themeKey}
        onThemeChange={setTheme}
        onAdminPanel={() => setShowAdmin(true)}
      />

      {/* Scrollable Content Area */}
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        {activeTab === 'home' ? (
          <Header
            onLeftStar={() => setLeftSidebarOpen(true)}
            onRightStar={() => setRightSidebarOpen(true)}
            lang={lang}
            setLang={setLang}
            showBismillah
          />
        ) : (
          <div className="glass-card sticky top-0 z-30 px-3 pt-2 pb-2">
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={() => setLeftSidebarOpen(true)}
                className="star-btn w-9 h-9 rounded-xl flex items-center justify-center text-lg"
              >
                ⭐
              </button>
              <div className="flex-1 text-center">
                <div className="font-bold text-gray-800 text-sm">{currentTitle}</div>
                <div className="flex justify-center gap-1.5 mt-1">
                  {(['en', 'ur', 'ar'] as const).map(l => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-2 py-0.5 rounded-full text-[9px] font-semibold transition-all ${
                        lang === l
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/60 text-gray-500 border border-gray-200'
                      }`}
                    >
                      {l === 'en' ? 'EN' : l === 'ur' ? 'اردو' : 'AR'}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setRightSidebarOpen(true)}
                className="star-btn w-9 h-9 rounded-xl flex items-center justify-center text-lg"
              >
                ⭐
              </button>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto pb-[100px]">
          {activeTab === 'home' && <Home lang={lang} />}
          {activeTab === 'guests' && <GuestRoom lang={lang} />}
          {activeTab === 'global' && <Global lang={lang} />}
          {activeTab === 'paradise' && <Paradise lang={lang} />}
          {activeTab === 'esmart' && <ESmart lang={lang} />}
          {activeTab === 'esonewworld' && (
            <ESOneWorld
              lang={lang}
              setLang={setLang}
              themeKey={themeKey}
              onThemeChange={setTheme}
              onAdminPanel={() => setShowAdmin(true)}
            />
          )}
        </div>
      </div>

      {/* News Ticker */}
      <NewsTicker />

      {/* Bottom Navigation */}
      <BottomNav active={activeTab} onChange={setActiveTab} lang={lang} />
    </div>
  );
};

export default Index;
