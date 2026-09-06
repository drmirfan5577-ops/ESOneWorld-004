import React, { useState } from 'react';
import { Language, ThemeKey } from '@/types';
import { THEMES } from '@/constants/themes';
import { toast } from 'sonner';

interface ESOneWorldProps {
  lang: Language;
  setLang: (l: Language) => void;
  themeKey: ThemeKey;
  onThemeChange: (key: ThemeKey) => void;
  onAdminPanel: () => void;
}

const GALLERY_ITEMS = [
  { id: 1, emoji: '🌍', label: 'Global Family', gradient: 'from-blue-400 to-blue-700' },
  { id: 2, emoji: '🕌', label: 'Islamic World', gradient: 'from-emerald-400 to-green-700' },
  { id: 3, emoji: '🚀', label: 'Innovation', gradient: 'from-violet-400 to-purple-700' },
  { id: 4, emoji: '🌙', label: 'Faith & Hope', gradient: 'from-amber-400 to-orange-600' },
  { id: 5, emoji: '📡', label: 'Broadcasting', gradient: 'from-red-400 to-rose-700' },
  { id: 6, emoji: '🌐', label: 'UniOrbi', gradient: 'from-teal-400 to-cyan-700' },
];

const ESOneWorld: React.FC<ESOneWorldProps> = ({ lang, setLang, themeKey, onThemeChange, onAdminPanel }) => {
  const [activeSection, setActiveSection] = useState<'gallery' | 'settings' | 'about'>('gallery');

  const label = (en: string, ur: string) => lang === 'ur' ? ur : en;

  return (
    <div className="page-enter pb-4">
      {/* Hero */}
      <div
        className="mx-3 mt-3 mb-3 rounded-3xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a, #1e3a8a, #1e1b4b)' }}
      >
        <div className="p-4 text-center">
          <div className="text-4xl mb-2">🌐</div>
          <div className="text-white font-bold text-xl shimmer-text mb-1">ESOneWorld</div>
          <div className="text-blue-300 text-xs mb-1">{label("Neither a Global Village nor a Global Community", "نہ ایک عالمی گاؤں نہ عالمی معاشرہ")}</div>
          <div className="text-amber-300 font-semibold text-sm">{label("It's a Global Family Platform™", "یہ ایک عالمی خاندانی پلیٹ فارم ہے™")}</div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-4 pb-4">
          {(['gallery', 'settings', 'about'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              className={`flex-1 py-1.5 rounded-xl text-[10px] font-bold transition-all ${
                activeSection === tab ? 'bg-blue-500 text-white' : 'bg-white/10 text-white/60'
              }`}
            >
              {tab === 'gallery' ? label('🖼️ Gallery', '🖼️ گیلری')
                : tab === 'settings' ? label('⚙️ Settings', '⚙️ ترتیبات')
                : label('ℹ️ About', 'ℹ️ بارے میں')}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery */}
      {activeSection === 'gallery' && (
        <div className="px-3">
          <div className="grid grid-cols-2 gap-3 mb-4">
            {GALLERY_ITEMS.map(item => (
              <div
                key={item.id}
                className={`rounded-3xl bg-gradient-to-br ${item.gradient} p-6 flex flex-col items-center justify-center aspect-square cursor-pointer hover:scale-[1.02] transition-all shadow-lg`}
                onClick={() => toast.info(`${item.label} — Coming soon`)}
              >
                <span className="text-4xl mb-2">{item.emoji}</span>
                <span className="text-white text-xs font-bold text-center">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Locker */}
          <div className="glass-card rounded-3xl p-4 mb-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔒</span>
              <div className="flex-1">
                <div className="font-bold text-gray-800 text-sm">{label('Secure Locker', 'محفوظ لاکر')}</div>
                <div className="text-xs text-gray-500">{label('Your private secure vault', 'آپ کا ذاتی محفوظ خانہ')}</div>
              </div>
              <button
                onClick={() => toast.info('Locker: Coming in next update!')}
                className="px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-gray-700 to-gray-900"
              >
                {label('Open', 'کھولیں')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings */}
      {activeSection === 'settings' && (
        <div className="px-3 space-y-3">
          {/* Theme Selector */}
          <div className="glass-card rounded-3xl p-4">
            <div className="font-bold text-gray-800 text-sm mb-3">🎨 {label('Theme & Wallpaper', 'تھیم اور وال پیپر')}</div>
            <div className="grid grid-cols-2 gap-2">
              {THEMES.map(t => (
                <button
                  key={t.key}
                  onClick={() => { onThemeChange(t.key); toast.success(`Theme: ${t.nameEn}`); }}
                  className={`rounded-2xl overflow-hidden border-2 transition-all ${themeKey === t.key ? 'border-blue-600 scale-105' : 'border-white/80'}`}
                >
                  <div className="h-10 w-full" style={{ background: t.previewGradient }} />
                  <div className="bg-gray-50 px-2 py-1 flex items-center justify-between">
                    <div>
                      <div className="text-gray-800 text-[9px] font-bold truncate">{t.nameEn}</div>
                      <div className="text-gray-500 text-[8px] font-urdu truncate">{t.nameUr}</div>
                    </div>
                    {themeKey === t.key && <span className="text-blue-600 text-xs">✓</span>}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Language */}
          <div className="glass-card rounded-3xl p-4">
            <div className="font-bold text-gray-800 text-sm mb-3">🌐 {label('Language', 'زبان')}</div>
            <div className="flex gap-2">
              {(['en', 'ur', 'ar'] as Language[]).map(l => (
                <button
                  key={l}
                  onClick={() => { setLang(l); toast.success(l === 'en' ? 'English selected' : l === 'ur' ? 'اردو منتخب' : 'العربية محددة'); }}
                  className={`flex-1 py-2 rounded-2xl text-sm font-bold transition-all ${lang === l ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white' : 'bg-white/60 text-gray-600'}`}
                >
                  {l === 'en' ? '🇬🇧 EN' : l === 'ur' ? '🇵🇰 UR' : '🇸🇦 AR'}
                </button>
              ))}
            </div>
          </div>

          {/* Admin Panel Button */}
          <button
            onClick={onAdminPanel}
            className="w-full glass-card rounded-3xl p-4 flex items-center gap-3 hover:bg-white/90 transition-all"
          >
            <span className="text-3xl">🔐</span>
            <div className="flex-1 text-left">
              <div className="font-bold text-gray-800 text-sm">{label('Admin Panel', 'ایڈمن پینل')}</div>
              <div className="text-xs text-gray-500">{label('Password protected full control', 'پاسورڈ سے محفوظ مکمل کنٹرول')}</div>
            </div>
            <span className="text-gray-400">→</span>
          </button>

          {/* Legal */}
          <div className="glass-card rounded-3xl p-4 space-y-2">
            <div className="font-bold text-gray-800 text-sm mb-1">📋 {label('Legal & Policies', 'قانونی')}</div>
            {[
              { label: label('Privacy Policy', 'رازداری کی پالیسی'), emoji: '🔏' },
              { label: label('Terms of Use', 'استعمال کی شرائط'), emoji: '📄' },
              { label: label('Disclaimer', 'دستبرداری'), emoji: '⚠️' },
              { label: label('Copyrights', 'کاپی رائٹس'), emoji: '©️' },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => toast.info(`${item.label} — Available soon`)}
                className="w-full flex items-center gap-3 py-2 text-sm text-gray-700 hover:text-blue-700 transition-colors"
              >
                <span>{item.emoji}</span><span>{item.label}</span><span className="ml-auto text-gray-400">→</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* About */}
      {activeSection === 'about' && (
        <div className="px-3 space-y-3">
          <div className="glass-card rounded-3xl p-4">
            <div className="text-center mb-4">
              <div className="text-5xl mb-2">🌐</div>
              <div className="font-bold text-xl text-gray-800">ESOneWorld</div>
              <div className="text-xs text-blue-600 font-semibold">Global Family Platform™</div>
              <div className={`text-sm text-gray-600 mt-2 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                {label(
                  '"Neither a Global Village nor a Global Community — It\'s a Global Family Platform"',
                  '"نہ ایک عالمی گاؤں، نہ ایک عالمی معاشرہ — یہ ایک عالمی خاندانی پلیٹ فارم ہے"'
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-gray-700 text-sm">🎯 {label('Our Vision & Mission', 'وژن اور مشن')}</div>
              <p className={`text-xs text-gray-600 leading-relaxed ${lang === 'ur' ? 'font-urdu text-right' : ''}`}>
                {label(
                  'To unite the global Muslim family and all humanity through digital connection, knowledge sharing, and innovative technology — bridging gaps, building trust, and fostering a unified global family.',
                  'ڈیجیٹل رابطے، علم کے اشتراک اور جدید ٹیکنالوجی کے ذریعے عالمی مسلم خاندان اور تمام انسانیت کو متحد کرنا۔'
                )}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="glass-card rounded-3xl p-4">
            <div className="font-bold text-gray-800 text-sm mb-3">📞 {label('Contact Us', 'ہم سے رابطہ')}</div>
            <div className="space-y-2">
              {[
                { label: 'Admin', email: 'Admin@drirfan.online' },
                { label: 'Contact', email: 'Contact@drirfan.online' },
                { label: 'Info', email: 'Info@drirfan.online' },
                { label: 'Personal', email: 'drirfan5577@drirfan.online' },
                { label: 'Support', email: 'Support@drirfan.online' },
              ].map(c => (
                <a key={c.email} href={`mailto:${c.email}`} className="flex items-center gap-2 text-xs text-blue-700 font-medium hover:underline">
                  <span className="text-gray-400 w-14 flex-shrink-0">{c.label}:</span>
                  <span>{c.email}</span>
                </a>
              ))}
              <a href="https://drirfan.online" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-blue-700 font-medium hover:underline">
                <span className="text-gray-400 w-14 flex-shrink-0">Website:</span>
                <span>www.drirfan.online</span>
              </a>
            </div>
          </div>

          <div className="text-center py-2">
            <div className="text-xs text-gray-500">© 2026 ESOneWorld • Dr. M. Irfan Qadir</div>
            <div className="text-xs text-gray-400">All Rights Reserved • drirfan.online</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ESOneWorld;
