import React, { useState } from 'react';
import { Language, ThemeKey } from '@/types';
import { THEMES } from '@/constants/themes';
import { APPS } from '@/constants/apps';
import { toast } from 'sonner';

interface AdminPanelProps {
  lang: Language;
  themeKey: ThemeKey;
  onThemeChange: (key: ThemeKey) => void;
  onBack: () => void;
}

const ADMIN_PASSWORD = '@1122#';

const AdminPanel: React.FC<AdminPanelProps> = ({ lang, themeKey, onThemeChange, onBack }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [pwd, setPwd] = useState('');
  const [pwdError, setPwdError] = useState('');
  const [activeSection, setActiveSection] = useState<'dashboard' | 'themes' | 'apps' | 'integrations' | 'settings'>('dashboard');
  const [showPwd, setShowPwd] = useState(false);

  const label = (en: string, ur: string) => lang === 'ur' ? ur : en;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pwd === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPwdError('');
      toast.success('Admin Panel: Access Granted ✓');
    } else {
      setPwdError(label('Incorrect password. Try again.', 'غلط پاسورڈ۔ دوبارہ کوشش کریں۔'));
      toast.error('Access Denied');
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-crystal p-6 page-enter">
        <div className="glass-card-deep w-full max-w-sm rounded-3xl p-6">
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">🔐</div>
            <div className="font-bold text-2xl text-gray-800">{label('Admin Panel', 'ایڈمن پینل')}</div>
            <div className="text-sm text-gray-500 mt-1">{label('ESOneWorld — Full Command & Control', 'مکمل کنٹرول سنٹر')}</div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                {label('Admin Password', 'ایڈمن پاسورڈ')}
              </label>
              <div className="flex items-center gap-2 bg-white/80 rounded-2xl px-3 py-2.5 border border-white/90">
                <span className="text-gray-400">🔑</span>
                <input
                  type={showPwd ? 'text' : 'password'}
                  value={pwd}
                  onChange={e => setPwd(e.target.value)}
                  placeholder={label('Enter password...', 'پاسورڈ درج کریں...')}
                  className="flex-1 bg-transparent text-sm text-gray-800 outline-none"
                  autoComplete="current-password"
                />
                <button type="button" onClick={() => setShowPwd(v => !v)} className="text-gray-400 text-sm">
                  {showPwd ? '🙈' : '👁️'}
                </button>
              </div>
              {pwdError && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span>⚠️</span>{pwdError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-2xl font-bold text-white text-sm shadow-lg transition-all hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #1e40af, #1e3a8a)' }}
            >
              {label('🔐 Enter Admin Panel', '🔐 ایڈمن پینل میں داخل ہوں')}
            </button>

            <button type="button" onClick={onBack} className="w-full py-2 text-sm text-gray-500 font-medium">
              ← {label('Back to App', 'ایپ پر واپس')}
            </button>
          </form>

          <div className="mt-4 text-center text-[10px] text-gray-400">
            {label('Default password: @1122#', 'ڈیفالٹ پاسورڈ: @1122#')}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-crystal page-enter">
      {/* Admin Header */}
      <div
        className="sticky top-0 z-30 px-4 py-3 flex items-center justify-between"
        style={{ background: 'linear-gradient(135deg, #0f172a, #1e3a8a)', backdropFilter: 'blur(20px)' }}
      >
        <button onClick={onBack} className="text-white/70 hover:text-white text-sm">← {label('Back', 'واپس')}</button>
        <div className="text-center">
          <div className="text-white font-bold text-sm">🔐 {label('Admin Panel', 'ایڈمن پینل')}</div>
          <div className="text-blue-300 text-[9px]">ESOneWorld — Full Control</div>
        </div>
        <button
          onClick={() => { setAuthenticated(false); setPwd(''); toast.info('Logged out'); }}
          className="text-red-400 text-xs font-semibold"
        >
          {label('Logout', 'لاگ آؤٹ')}
        </button>
      </div>

      {/* Section Nav */}
      <div className="flex gap-1.5 px-3 py-3 overflow-x-auto no-scrollbar">
        {(['dashboard', 'themes', 'apps', 'integrations', 'settings'] as const).map(s => (
          <button
            key={s}
            onClick={() => setActiveSection(s)}
            className={`cat-pill flex-shrink-0 ${activeSection === s ? 'active' : ''}`}
          >
            {s === 'dashboard' ? '📊 ' + label('Dashboard', 'ڈیش بورڈ')
              : s === 'themes' ? '🎨 ' + label('Themes', 'تھیمز')
              : s === 'apps' ? '📱 ' + label('Apps', 'ایپس')
              : s === 'integrations' ? '🔗 ' + label('Integrations', 'انضمام')
              : '⚙️ ' + label('Settings', 'ترتیبات')}
          </button>
        ))}
      </div>

      <div className="px-3 pb-6 space-y-4">

        {/* Dashboard */}
        {activeSection === 'dashboard' && (
          <>
            <div className="glass-card rounded-3xl p-4">
              <div className="font-bold text-gray-800 mb-3">📊 {label('System Overview', 'سسٹم جائزہ')}</div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '📱', label: label('Total Apps', 'کل ایپس'), val: APPS.length + '+', color: '#1e40af' },
                  { icon: '🎨', label: label('Themes', 'تھیمز'), val: THEMES.length, color: '#065f46' },
                  { icon: '🌐', label: label('Languages', 'زبانیں'), val: 3, color: '#92400e' },
                  { icon: '✅', label: label('Status', 'حالت'), val: 'Live', color: '#059669' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/60 rounded-2xl p-3 flex items-center gap-2">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <div className="font-bold text-sm" style={{ color: s.color }}>{s.val}</div>
                      <div className="text-[10px] text-gray-500">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-4">
              <div className="font-bold text-gray-800 mb-3">⚙️ {label('Quick Actions', 'فوری اقدامات')}</div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: label('Add New App', 'نئی ایپ شامل کریں'), emoji: '➕', color: '#1e40af' },
                  { label: label('Edit Theme', 'تھیم تبدیل کریں'), emoji: '🎨', color: '#065f46' },
                  { label: label('Manage Users', 'صارفین'), emoji: '👥', color: '#7c3aed' },
                  { label: label('Backup Data', 'بیک اپ'), emoji: '💾', color: '#92400e' },
                  { label: label('View Logs', 'لاگ دیکھیں'), emoji: '📋', color: '#0369a1' },
                  { label: label('Sync Now', 'ابھی سنک'), emoji: '🔄', color: '#059669' },
                ].map((a, i) => (
                  <button
                    key={i}
                    onClick={() => toast.info(`${a.label} — Coming soon in update`)}
                    className="bg-white/60 rounded-2xl p-3 flex items-center gap-2 text-left hover:bg-white/90 transition-all"
                  >
                    <span className="text-xl">{a.emoji}</span>
                    <span className="text-xs font-semibold" style={{ color: a.color }}>{a.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Themes Manager */}
        {activeSection === 'themes' && (
          <div className="glass-card rounded-3xl p-4">
            <div className="font-bold text-gray-800 mb-3">🎨 {label('Theme Manager', 'تھیم مینیجر')}</div>
            <div className="space-y-2">
              {THEMES.map(t => (
                <div key={t.key} className="flex items-center gap-3 bg-white/60 rounded-2xl p-3">
                  <div className="w-12 h-8 rounded-xl flex-shrink-0" style={{ background: t.previewGradient }} />
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-gray-800">{t.nameEn}</div>
                    <div className="text-[10px] text-gray-500 font-urdu">{t.nameUr}</div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => { onThemeChange(t.key); toast.success(`Theme set: ${t.nameEn}`); }}
                      className={`px-2 py-1 rounded-xl text-[10px] font-bold transition-all ${themeKey === t.key ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                    >
                      {themeKey === t.key ? label('Active', 'فعال') : label('Set', 'لگائیں')}
                    </button>
                    <button onClick={() => toast.info('Edit theme — Pro feature')} className="px-2 py-1 rounded-xl text-[10px] font-bold bg-gray-100 text-gray-500">
                      ✏️
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={() => toast.info('Create custom theme — Coming soon!')}
                className="w-full py-2.5 rounded-2xl border-2 border-dashed border-gray-300 text-gray-500 text-xs font-semibold hover:border-blue-400 hover:text-blue-500 transition-colors"
              >
                ➕ {label('Add Custom Theme', 'نیا تھیم بنائیں')}
              </button>
            </div>
          </div>
        )}

        {/* Apps Manager */}
        {activeSection === 'apps' && (
          <div className="glass-card rounded-3xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="font-bold text-gray-800">📱 {label('App Manager', 'ایپ مینیجر')} ({APPS.length})</div>
              <button
                onClick={() => toast.info('Add app — Admin feature')}
                className="px-3 py-1 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-blue-800"
              >
                ➕ {label('Add', 'شامل')}
              </button>
            </div>
            <div className="space-y-1.5 max-h-96 overflow-y-auto">
              {APPS.slice(0, 20).map(app => (
                <div key={app.id} className="flex items-center gap-2 bg-white/60 rounded-xl px-3 py-2">
                  <span className="text-lg">{app.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-gray-800 truncate">{app.name}</div>
                    <div className="text-[9px] text-gray-400 truncate">{app.url}</div>
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => toast.info(`Edit ${app.name}`)} className="text-blue-400 text-xs p-1">✏️</button>
                    <button onClick={() => toast.info(`Disable ${app.name}`)} className="text-orange-400 text-xs p-1">🚫</button>
                    <button onClick={() => toast.error(`Delete ${app.name}?`)} className="text-red-400 text-xs p-1">🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Integrations */}
        {activeSection === 'integrations' && (
          <div className="space-y-3">
            {[
              { cat: label('Deployment Platforms', 'ڈپلوئی'), items: ['Netlify', 'Vercel', 'Firebase', 'GitHub Pages', 'OnSpace', 'Cloudflare Pages'] },
              { cat: label('AI Integrations', 'اے آئی'), items: ['ChatGPT API', 'Gemini API', 'Claude API', 'Perplexity', 'Qwen'] },
              { cat: label('Social Media APIs', 'سوشل میڈیا'), items: ['YouTube API', 'Facebook Graph', 'Twitter API', 'TikTok API', 'Telegram Bot'] },
              { cat: label('Hosting & Storage', 'ہوسٹنگ'), items: ['Namecheap', 'Supabase', 'Firebase Storage', 'Cloudflare R2'] },
              { cat: label('Email Services', 'ای میل'), items: ['Zoho Mail', 'Resend', 'SMTP Custom', 'Gmail API'] },
            ].map((group, i) => (
              <div key={i} className="glass-card rounded-3xl p-4">
                <div className="font-semibold text-gray-700 text-sm mb-2">🔗 {group.cat}</div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map(item => (
                    <button
                      key={item}
                      onClick={() => toast.info(`${item} — Configure integration`)}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/70 text-gray-700 border border-gray-200 hover:bg-blue-50 hover:text-blue-700 transition-all"
                    >
                      {item}
                    </button>
                  ))}
                  <button
                    onClick={() => toast.info('Add more integrations')}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition-all"
                  >
                    ➕ {label('Add More', 'مزید')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Settings */}
        {activeSection === 'settings' && (
          <div className="space-y-3">
            <div className="glass-card rounded-3xl p-4">
              <div className="font-bold text-gray-800 mb-3">🔐 {label('Security Settings', 'سیکیورٹی')}</div>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-gray-600">{label('Change Admin Password', 'پاسورڈ تبدیل کریں')}</label>
                  <div className="flex gap-2 mt-1">
                    <input
                      type="password"
                      placeholder={label('New password...', 'نیا پاسورڈ...')}
                      className="flex-1 bg-white/80 rounded-xl px-3 py-2 text-sm border border-white/80 outline-none"
                    />
                    <button
                      onClick={() => toast.info('Password change — Save to localStorage')}
                      className="px-3 py-2 rounded-xl text-xs font-bold text-white bg-blue-600"
                    >
                      {label('Save', 'محفوظ')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-4">
              <div className="font-bold text-gray-800 mb-3">🌐 {label('App Configuration', 'ایپ کنفیگریشن')}</div>
              {[
                { label: label('Enable Registration', 'رجسٹریشن فعال'), enabled: true },
                { label: label('OTP Verification', 'او ٹی پی'), enabled: true },
                { label: label('Auto-save', 'خودکار محفوظ'), enabled: true },
                { label: label('Dark Mode Auto', 'ڈارک موڈ آٹو'), enabled: false },
                { label: label('Push Notifications', 'نوٹیفکیشن'), enabled: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <span className="text-sm text-gray-700">{item.label}</span>
                  <button
                    onClick={() => toast.info(`Toggled: ${item.label}`)}
                    className={`w-12 h-6 rounded-full transition-all relative ${item.enabled ? 'bg-blue-600' : 'bg-gray-300'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${item.enabled ? 'right-1' : 'left-1'}`} />
                  </button>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-3xl p-4">
              <div className="font-bold text-gray-800 mb-3">📦 {label('Deployment', 'ڈپلوئی')}</div>
              <div className="grid grid-cols-3 gap-2">
                {['Netlify', 'Vercel', 'Firebase'].map(d => (
                  <button
                    key={d}
                    onClick={() => toast.success(`Deploy to ${d}...`)}
                    className="py-2 rounded-xl text-xs font-bold text-white"
                    style={{ background: d === 'Netlify' ? 'linear-gradient(135deg,#00AD9F,#0a6e65)' : d === 'Vercel' ? 'linear-gradient(135deg,#000,#333)' : 'linear-gradient(135deg,#F5820D,#FFA000)' }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
