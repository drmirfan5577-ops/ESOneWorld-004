import React, { useState } from 'react';
import { Language } from '@/types';
import { APPS, APP_CATEGORIES } from '@/constants/apps';
import AppIcon from '@/components/features/AppIcon';
import { toast } from 'sonner';

interface HomeProps {
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [browserUrl, setBrowserUrl] = useState('');

  const filtered = APPS.filter(app => {
    const matchCat = app.category === activeCategory;
    const matchSearch = searchQuery
      ? app.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchCat && matchSearch;
  });

  const handleApp = (app: typeof APPS[0]) => {
    toast.success(`Opening ${app.name}...`, { description: app.url, duration: 2000 });
    window.open(app.url, '_blank', 'noopener,noreferrer');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!browserUrl.trim()) return;
    let url = browserUrl.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      if (url.includes('.') && !url.includes(' ')) {
        url = 'https://' + url;
      } else {
        url = `https://www.google.com/search?q=${encodeURIComponent(url)}`;
      }
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const label = (en: string, ur: string, ar?: string) => {
    if (lang === 'ur') return ur;
    if (lang === 'ar' && ar) return ar;
    return en;
  };

  return (
    <div className="page-enter pb-2">
      {/* Browser Header */}
      <div className="glass-card mx-3 mt-3 mb-3 p-3 rounded-3xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🌐</span>
          <div>
            <div className="font-bold text-gray-800 text-sm leading-tight">
              {label('UniBrowser', 'یونی براؤزر', 'متصفح يوني')}
            </div>
            <div className="text-[10px] text-gray-500">ES Browser Dashboard</div>
          </div>
          <div className="ml-auto text-xs font-bold text-blue-700">
            {new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>

        {/* Search / URL Bar */}
        <form onSubmit={handleSearch} className="flex items-center gap-2 bg-white/80 rounded-2xl px-3 py-2 border border-white/90 shadow-inner">
          <span className="text-gray-400 text-sm">🔍</span>
          <input
            value={browserUrl}
            onChange={e => setBrowserUrl(e.target.value)}
            placeholder={label('Search Google or enter URL...', 'گوگل تلاش یا URL درج کریں...', 'ابحث أو أدخل URL...')}
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
            style={{ direction: lang !== 'en' ? 'rtl' : 'ltr' }}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-bold px-3 py-1 rounded-xl shadow-md"
          >
            GO
          </button>
        </form>

        {/* Search filter */}
        {searchQuery && (
          <div className="flex items-center gap-2 mt-2">
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Filter apps..."
              className="flex-1 bg-white/60 rounded-xl px-3 py-1.5 text-xs text-gray-700 border border-white/70 outline-none"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-gray-400 text-sm">✕</button>
            )}
          </div>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 px-3 pb-2 overflow-x-auto no-scrollbar">
        {APP_CATEGORIES.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`cat-pill flex-shrink-0 ${activeCategory === cat.key ? 'active' : ''}`}
          >
            {lang === 'ur' ? `${cat.labelEn.split(' ')[0]} ${cat.labelUr}` : cat.labelEn}
          </button>
        ))}
      </div>

      {/* App Grid */}
      <div className="px-3">
        {filtered.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            <div className="text-4xl mb-2">🔍</div>
            <div className="text-sm">{label('No apps found', 'کوئی ایپ نہیں ملی')}</div>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-3">
            {filtered.map(app => (
              <AppIcon key={app.id} app={app} onPress={handleApp} size="md" />
            ))}
          </div>
        )}
      </div>

      {/* Quick Filter Bar */}
      <div className="px-3 mt-4 mb-2">
        <input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={label('🔍 Filter apps by name...', '🔍 نام سے ایپ تلاش کریں...')}
          className="w-full bg-white/70 rounded-2xl px-4 py-2.5 text-sm text-gray-700 border border-white/80 outline-none shadow-inner"
        />
      </div>

      {/* Stats Bar */}
      <div className="mx-3 mt-2 glass-card rounded-2xl p-3">
        <div className="grid grid-cols-4 gap-2">
          {[
            { val: '35+', label: label('Apps', 'ایپس'), color: '#1e40af', icon: '📱' },
            { val: '8', label: label('Themes', 'تھیمز'), color: '#065f46', icon: '🎨' },
            { val: '3', label: label('Languages', 'زبانیں'), color: '#92400e', icon: '🌐' },
            { val: '24/7', label: label('Live', 'لائیو'), color: '#991b1b', icon: '🔴' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-lg">{stat.icon}</div>
              <div className="font-bold text-sm" style={{ color: stat.color }}>{stat.val}</div>
              <div className="text-[9px] text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
