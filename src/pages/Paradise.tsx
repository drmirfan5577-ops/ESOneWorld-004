import React, { useState } from 'react';
import { Language } from '@/types';
import { toast } from 'sonner';

interface ParadiseProps { lang: Language; }

const QURAN_SURAHS = [
  { no: 1, name: 'Al-Fatihah', nameUr: 'الفاتحہ', nameAr: 'الفاتحة', verses: 7, type: 'Makki' },
  { no: 2, name: 'Al-Baqarah', nameUr: 'البقرہ', nameAr: 'البقرة', verses: 286, type: 'Madani' },
  { no: 3, name: 'Al-Imran', nameUr: 'آل عمران', nameAr: 'آل عمران', verses: 200, type: 'Madani' },
  { no: 36, name: 'Ya-Sin', nameUr: 'یاسین', nameAr: 'يس', verses: 83, type: 'Makki' },
  { no: 55, name: 'Ar-Rahman', nameUr: 'الرحمان', nameAr: 'الرحمن', verses: 78, type: 'Madani' },
  { no: 56, name: 'Al-Waqi\'ah', nameUr: 'الواقعہ', nameAr: 'الواقعة', verses: 96, type: 'Makki' },
  { no: 67, name: 'Al-Mulk', nameUr: 'الملک', nameAr: 'الملك', verses: 30, type: 'Makki' },
  { no: 112, name: 'Al-Ikhlas', nameUr: 'الاخلاص', nameAr: 'الإخلاص', verses: 4, type: 'Makki' },
  { no: 113, name: 'Al-Falaq', nameUr: 'الفلق', nameAr: 'الفلق', verses: 5, type: 'Makki' },
  { no: 114, name: 'An-Nas', nameUr: 'الناس', nameAr: 'الناس', verses: 6, type: 'Makki' },
];

const HADEESES = [
  { id: 1, text: 'The best among you are those who have the best manners and character.', textUr: 'تم میں بہترین وہ ہے جس کے اخلاق بہترین ہوں۔', source: 'Sahih Bukhari', icon: '📿' },
  { id: 2, text: 'A Muslim is the one from whose tongue and hand the Muslims are safe.', textUr: 'مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ ہوں۔', source: 'Sahih Bukhari', icon: '🌟' },
  { id: 3, text: 'Seek knowledge from the cradle to the grave.', textUr: 'علم حاصل کرو گہوارے سے قبر تک۔', source: 'Islamic Tradition', icon: '📚' },
  { id: 4, text: 'The reward of deeds depends upon the intentions.', textUr: 'اعمال کا دارومدار نیتوں پر ہے۔', source: 'Sahih Bukhari', icon: '💎' },
];

const ISLAMIC_SERIES = [
  { id: 'is1', title: 'Islamic History Series', titleUr: 'اسلامی تاریخ', emoji: '🏛️', episodes: 24, gradient: 'from-emerald-600 to-teal-800' },
  { id: 'is2', title: 'Seerah of Prophet ﷺ', titleUr: 'سیرت النبی ﷺ', emoji: '🌙', episodes: 48, gradient: 'from-amber-600 to-orange-800' },
  { id: 'is3', title: 'Stories of Prophets', titleUr: 'قصص الانبیاء', emoji: '⭐', episodes: 36, gradient: 'from-blue-600 to-indigo-800' },
  { id: 'is4', title: 'Smart World Order', titleUr: 'سمارٹ ورلڈ آرڈر', emoji: '📡', episodes: 18, gradient: 'from-red-600 to-rose-800' },
];

const Paradise: React.FC<ParadiseProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'quran' | 'hadees' | 'series'>('quran');

  const label = (en: string, ur: string, ar?: string) => {
    if (lang === 'ur') return ur;
    if (lang === 'ar' && ar) return ar;
    return en;
  };

  return (
    <div className="page-enter pb-4">
      {/* Bismillah Hero */}
      <div
        className="mx-3 mt-3 mb-3 rounded-3xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #14532d 0%, #065f46 40%, #1e3a1e 100%)' }}
      >
        <div className="p-4 text-center">
          <div
            className="text-2xl mb-1 arabic-text font-bold"
            style={{ color: '#fef3c7', textShadow: '0 0 30px rgba(251,191,36,0.5)' }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
          <div className="text-emerald-200 text-xs mb-2">{label('In the name of Allah, the Most Gracious, the Most Merciful', 'اللہ کے نام سے جو بڑا مہربان اور نہایت رحم والا ہے')}</div>
          <div className="font-bold text-white text-base">{label('Paradise Hub', 'جنت مرکز', 'مركز الجنة')}</div>
          <div className="text-emerald-300 text-xs">{label('Holy Quran • Hadees • Islamic Series', 'قرآن • حدیث • سیریز')}</div>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-2 px-4 pb-4">
          {(['quran', 'hadees', 'series'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-2xl text-xs font-bold transition-all ${
                activeTab === tab
                  ? 'bg-amber-400/90 text-gray-900'
                  : 'bg-white/10 text-white/80'
              }`}
            >
              {tab === 'quran' ? '📖 ' + label('Quran', 'قرآن')
                : tab === 'hadees' ? '📿 ' + label('Hadees', 'حدیث')
                : '📺 ' + label('Series', 'سیریز')}
            </button>
          ))}
        </div>
      </div>

      {/* Quran Tab */}
      {activeTab === 'quran' && (
        <div className="px-3 space-y-2">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1 mb-2">
            {label('Holy Quran — Selected Surahs', 'قرآن مجید — منتخب سورتیں')}
          </div>
          {QURAN_SURAHS.map(s => (
            <button
              key={s.no}
              onClick={() => { toast.success(`Opening Surah ${s.name}`); window.open(`https://quran.com/${s.no}`, '_blank'); }}
              className="w-full glass-card rounded-2xl p-3 flex items-center gap-3 text-left hover:bg-white/90 transition-all"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #14532d, #065f46)' }}
              >
                {s.no}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-800 text-sm">{s.name}</span>
                  <span className="arabic-text text-gray-600 text-sm">{s.nameAr}</span>
                </div>
                <div className={`text-xs text-gray-500 ${lang === 'ur' ? 'font-urdu' : ''}`}>
                  {lang === 'ur' ? s.nameUr : `${s.verses} verses • ${s.type}`}
                </div>
              </div>
              <div className="flex gap-1">
                <span className="text-xl">📖</span>
                <span className="text-xl">🔊</span>
              </div>
            </button>
          ))}
          <button
            onClick={() => window.open('https://quran.com', '_blank')}
            className="w-full py-3 rounded-2xl text-sm font-bold text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, #14532d, #065f46)' }}
          >
            {label('📖 Open Full Quran', '📖 مکمل قرآن کھولیں')}
          </button>
        </div>
      )}

      {/* Hadees Tab */}
      {activeTab === 'hadees' && (
        <div className="px-3 space-y-3">
          {HADEESES.map(h => (
            <div key={h.id} className="glass-card rounded-3xl p-4">
              <div className="text-2xl mb-2">{h.icon}</div>
              <p className={`text-sm text-gray-800 font-medium leading-relaxed mb-2 ${lang === 'ur' ? 'font-urdu text-right' : ''}`}>
                {lang === 'ur' ? h.textUr : `"${h.text}"`}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                  📿 {h.source}
                </span>
                <button onClick={() => toast.success('Shared!')} className="text-xs text-blue-600 font-semibold">
                  {label('Share ↗', 'شیئر کریں')}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Series Tab */}
      {activeTab === 'series' && (
        <div className="px-3 grid grid-cols-2 gap-3">
          {ISLAMIC_SERIES.map(s => (
            <button
              key={s.id}
              onClick={() => toast.info(`Opening ${s.title}...`)}
              className={`rounded-3xl overflow-hidden text-left hover:scale-[1.02] transition-all shadow-lg`}
            >
              <div className={`bg-gradient-to-br ${s.gradient} p-4 min-h-[90px] flex flex-col justify-between`}>
                <span className="text-3xl">{s.emoji}</span>
                <div>
                  <div className={`text-white font-bold text-xs ${lang === 'ur' ? 'font-urdu' : ''}`}>
                    {lang === 'ur' ? s.titleUr : s.title}
                  </div>
                  <div className="text-white/60 text-[9px]">{s.episodes} episodes</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Paradise;
