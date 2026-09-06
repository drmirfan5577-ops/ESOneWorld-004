import React, { useState } from 'react';
import { Language } from '@/types';
import { toast } from 'sonner';

interface ESmartProps { lang: Language; }

const UNIORBI_APPS = [
  { id: 'unifeel', name: 'UniFeel', nameUr: 'یونی فیل', emoji: '💝', url: 'https://uniorbi.com', color: '#e11d48', gradient: 'from-rose-500 to-pink-700', desc: 'Social Feelings Hub' },
  { id: 'uniedge', name: 'UniEdge', nameUr: 'یونی ایج', emoji: '⚡', url: 'https://uniorbi.com', color: '#d97706', gradient: 'from-amber-500 to-orange-700', desc: 'Smart Edge Computing' },
  { id: 'uniweb', name: 'UniWeb', nameUr: 'یونی ویب', emoji: '🌐', url: 'https://uniorbi.com', color: '#0284c7', gradient: 'from-sky-500 to-blue-700', desc: 'Web Platform Hub' },
  { id: 'unihome', name: 'UniHome', nameUr: 'یونی ہوم', emoji: '🏠', url: 'https://uniorbi.com', color: '#059669', gradient: 'from-emerald-500 to-teal-700', desc: 'Smart Home Connect' },
  { id: 'unihost', name: 'UniHost', nameUr: 'یونی ہوسٹ', emoji: '🚀', url: 'https://uniorbi.com', color: '#7c3aed', gradient: 'from-violet-500 to-purple-700', desc: 'Hosting & Deployment' },
  { id: 'unimail', name: 'UniMail', nameUr: 'یونی میل', emoji: '✉️', url: 'mailto:Admin@drirfan.online', color: '#1e40af', gradient: 'from-blue-500 to-indigo-700', desc: '@drirfan.online' },
  { id: 'uninews', name: 'UniNews', nameUr: 'یونی نیوز', emoji: '📰', url: 'https://uniorbi.com', color: '#991b1b', gradient: 'from-red-500 to-rose-700', desc: 'Smart World News' },
  { id: 'uniflow', name: 'UniFlow', nameUr: 'یونی فلو', emoji: '📝', url: 'https://uniorbi.com', color: '#065f46', gradient: 'from-green-500 to-emerald-700', desc: 'Workflow Management' },
];

const STATS = [
  { label: 'Active Users', labelUr: 'فعال صارفین', val: '24.8K', icon: '👥', color: '#1e40af' },
  { label: 'Daily Visits', labelUr: 'روزانہ وزٹ', val: '98.2K', icon: '📊', color: '#065f46' },
  { label: 'Apps Connected', labelUr: 'جڑی ایپس', val: '35+', icon: '🔗', color: '#92400e' },
  { label: 'Uptime', labelUr: 'اپ ٹائم', val: '99.9%', icon: '⚡', color: '#6d28d9' },
  { label: 'Data Synced', labelUr: 'ڈیٹا سنک', val: '12TB', icon: '💾', color: '#0369a1' },
  { label: 'AI Queries', labelUr: 'اے آئی سوالات', val: '5.1M', icon: '🤖', color: '#be185d' },
];

const ESmart: React.FC<ESmartProps> = ({ lang }) => {
  const [activeSection, setActiveSection] = useState<'platform' | 'stats' | 'integrations'>('platform');

  const label = (en: string, ur: string) => lang === 'ur' ? ur : en;

  return (
    <div className="page-enter pb-4">
      {/* UniOrbi Header */}
      <div
        className="mx-3 mt-3 mb-3 rounded-3xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)' }}
      >
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl">🌐</div>
            <div>
              <div className="text-white font-bold text-lg shimmer-text">UniOrbi</div>
              <div className="text-blue-300 text-xs">@uniorbi.com — Main Platform</div>
            </div>
            <div className="ml-auto">
              <div className="flex items-center gap-1 bg-green-500/20 border border-green-500/50 text-green-400 text-[9px] font-bold px-2 py-1 rounded-full">
                <span className="live-dot w-1.5 h-1.5 bg-green-400 rounded-full" />
                LIVE
              </div>
            </div>
          </div>
          <div className="text-white/70 text-xs mb-3">{label('E-Smart — UniOrbi Main Platform & Branches', 'ای-سمارٹ — یونی آربی مین پلیٹ فارم')}</div>

          {/* Section Tabs */}
          <div className="flex gap-2">
            {(['platform', 'stats', 'integrations'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveSection(tab)}
                className={`flex-1 py-1.5 rounded-xl text-[10px] font-bold transition-all ${
                  activeSection === tab ? 'bg-blue-500 text-white' : 'bg-white/10 text-white/60'
                }`}
              >
                {tab === 'platform' ? label('Platform', 'پلیٹ فارم')
                  : tab === 'stats' ? label('Statistics', 'اعداد')
                  : label('Integrations', 'انضمام')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Apps */}
      {activeSection === 'platform' && (
        <div className="px-3">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1 mb-3">
            {label('UniOrbi App Branches', 'یونی آربی شاخیں')}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {UNIORBI_APPS.map(app => (
              <button
                key={app.id}
                onClick={() => { toast.success(`Opening ${app.name}...`); window.open(app.url, '_blank'); }}
                className={`rounded-3xl overflow-hidden text-left hover:scale-[1.02] transition-all shadow-lg`}
              >
                <div className={`bg-gradient-to-br ${app.gradient} p-4`}>
                  <div className="text-3xl mb-2">{app.emoji}</div>
                  <div className={`text-white font-bold text-sm ${lang === 'ur' ? 'font-urdu' : ''}`}>
                    {lang === 'ur' ? app.nameUr : app.name}
                  </div>
                  <div className="text-white/60 text-[9px] truncate">{app.desc}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Email Links */}
          <div className="mt-4 glass-card rounded-3xl p-4">
            <div className="font-bold text-gray-800 text-sm mb-3">📧 {label('Official Contact', 'سرکاری رابطہ')}</div>
            <div className="space-y-2">
              {['Admin@drirfan.online', 'Contact@drirfan.online', 'Info@drirfan.online', 'Support@drirfan.online'].map(email => (
                <a key={email} href={`mailto:${email}`} className="flex items-center gap-2 text-blue-600 text-xs hover:underline">
                  <span>✉️</span><span>{email}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Statistics */}
      {activeSection === 'stats' && (
        <div className="px-3">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1 mb-3">
            {label('Platform Statistics', 'پلیٹ فارم اعداد و شمار')}
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {STATS.map((s, i) => (
              <div key={i} className="glass-card rounded-3xl p-4">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-bold text-2xl" style={{ color: s.color }}>{s.val}</div>
                <div className={`text-xs text-gray-500 mt-0.5 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                  {lang === 'ur' ? s.labelUr : s.label}
                </div>
              </div>
            ))}
          </div>
          {/* Fake Chart */}
          <div className="glass-card rounded-3xl p-4">
            <div className="font-bold text-gray-800 text-sm mb-3">📈 {label('Weekly Activity', 'ہفتہ وار سرگرمی')}</div>
            <div className="flex items-end gap-1.5 h-20">
              {[65, 80, 45, 90, 75, 100, 85].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-lg"
                    style={{ height: `${h}%`, background: `linear-gradient(180deg, #3b82f6, #1e40af)`, minHeight: 4 }}
                  />
                  <span className="text-[8px] text-gray-400">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Integrations */}
      {activeSection === 'integrations' && (
        <div className="px-3 space-y-3">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1 mb-2">
            {label('Connected Integrations', 'جڑے ہوئے انضمامات')}
          </div>
          {[
            { cat: label('Hosting & Deployment', 'ہوسٹنگ'), items: ['Netlify', 'Vercel', 'Firebase', 'Cloudflare', 'OnSpace', 'GitHub'], icon: '🚀', color: '#0284c7' },
            { cat: label('AI Platforms', 'اے آئی پلیٹ فارمز'), items: ['ChatGPT', 'Gemini', 'Claude', 'Perplexity', 'GenSpark', 'Qwen'], icon: '🤖', color: '#7c3aed' },
            { cat: label('Social Media', 'سوشل میڈیا'), items: ['YouTube', 'WhatsApp', 'Facebook', 'Twitter/X', 'TikTok', 'Instagram', 'Telegram'], icon: '📱', color: '#e11d48' },
            { cat: label('Email & Communication', 'ای میل'), items: ['Zoho', 'Resend', 'SMTP', 'UniMail'], icon: '📧', color: '#065f46' },
          ].map((group, i) => (
            <div key={i} className="glass-card rounded-3xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{group.icon}</span>
                <span className="font-bold text-sm" style={{ color: group.color }}>{group.cat}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-white/70 text-gray-700 border border-gray-200 cursor-pointer hover:bg-white transition-all"
                    onClick={() => toast.info(`${item} integration active`)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ESmart;
