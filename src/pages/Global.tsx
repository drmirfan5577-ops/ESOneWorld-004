import React, { useState } from 'react';
import { Language } from '@/types';
import { toast } from 'sonner';

interface GlobalProps { lang: Language; }

const COMMUNITIES = [
  { id: '1', name: 'Smart World Order', nameUr: 'سمارٹ ورلڈ آرڈر', members: '12.4K', emoji: '🌍', description: 'Both eyes on overall what\'s really going on', color: '#1e40af', gradient: 'from-blue-600 to-blue-900', isLive: true },
  { id: '2', name: 'ESOneWorld Community', nameUr: 'ای ایس ون ورلڈ', members: '8.2K', emoji: '🌐', description: 'Global Family Platform — United We Stand', color: '#065f46', gradient: 'from-emerald-600 to-teal-900', isLive: false },
  { id: '3', name: 'Islamic Global Network', nameUr: 'اسلامی عالمی نیٹ ورک', members: '25K', emoji: '🕌', description: 'Connecting Muslims worldwide with peace & faith', color: '#92400e', gradient: 'from-amber-600 to-green-800', isLive: true },
  { id: '4', name: 'Pakistan Digital Hub', nameUr: 'پاکستان ڈیجیٹل', members: '18K', emoji: '🇵🇰', description: 'Digital Pakistan — Innovation & Progress', color: '#14532d', gradient: 'from-green-700 to-green-900', isLive: false },
  { id: '5', name: 'Tech & Innovation', nameUr: 'ٹیک اور اختراع', members: '9.8K', emoji: '🚀', description: 'Cutting-edge tech discussions and innovations', color: '#6d28d9', gradient: 'from-purple-600 to-indigo-900', isLive: false },
  { id: '6', name: 'UniOrbi Network', nameUr: 'یونی آربی نیٹ ورک', members: '4.1K', emoji: '⚡', description: '@uniorbi.com — The Main Platform Hub', color: '#0284c7', gradient: 'from-sky-600 to-blue-900', isLive: true },
];

const GROUPS = [
  { id: 'g1', name: 'Family Connections', nameUr: 'خاندانی رابطے', emoji: '👨‍👩‍👧‍👦', count: 234, color: '#e11d48' },
  { id: 'g2', name: 'Knowledge Sharing', nameUr: 'علم کا اشتراک', emoji: '📚', count: 892, color: '#0369a1' },
  { id: 'g3', name: 'Quran & Hadees', nameUr: 'قرآن و حدیث', emoji: '📖', count: 1204, color: '#15803d' },
  { id: 'g4', name: 'Digital Media', nameUr: 'ڈیجیٹل میڈیا', emoji: '📱', count: 567, color: '#7c3aed' },
  { id: 'g5', name: 'Business & Finance', nameUr: 'کاروبار', emoji: '💼', count: 445, color: '#b45309' },
  { id: 'g6', name: 'Health & Wellness', nameUr: 'صحت', emoji: '🌱', count: 378, color: '#059669' },
];

const Global: React.FC<GlobalProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'communities' | 'groups'>('communities');

  const label = (en: string, ur: string) => lang === 'ur' ? ur : en;

  return (
    <div className="page-enter pb-4">
      {/* Header */}
      <div className="glass-card mx-3 mt-3 mb-3 p-3 rounded-3xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🌍</span>
          <div>
            <div className="font-bold text-gray-800">{label('Global', 'گلوبل')}</div>
            <div className="text-xs text-gray-500">{label('Groups & Communities Worldwide', 'عالمی گروپس اور کمیونٹیز')}</div>
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex gap-2">
          {(['communities', 'groups'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-2xl text-sm font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg'
                  : 'bg-white/60 text-gray-600'
              }`}
            >
              {tab === 'communities'
                ? label('🌐 Communities', '🌐 کمیونٹیز')
                : label('👥 Groups', '👥 گروپس')}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-2 px-3 mb-3">
        {[
          { val: '6', label: label('Communities', 'کمیونٹیز'), color: '#1e40af' },
          { val: '77K+', label: label('Members', 'ممبران'), color: '#065f46' },
          { val: '3', label: label('Live Now', 'ابھی لائیو'), color: '#991b1b' },
        ].map((s, i) => (
          <div key={i} className="flex-1 glass-card rounded-2xl p-2 text-center">
            <div className="font-bold text-sm" style={{ color: s.color }}>{s.val}</div>
            <div className="text-[9px] text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Communities List */}
      {activeTab === 'communities' && (
        <div className="px-3 space-y-3">
          {COMMUNITIES.map(comm => (
            <button
              key={comm.id}
              onClick={() => toast.success(`Joining ${comm.name}...`)}
              className="w-full glass-card rounded-3xl overflow-hidden text-left hover:scale-[1.01] transition-all"
            >
              <div className={`bg-gradient-to-r ${comm.gradient} p-3 flex items-center gap-3`}>
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl border border-white/30">
                  {comm.emoji}
                </div>
                <div className="flex-1">
                  <div className={`font-bold text-white text-sm ${lang === 'ur' ? 'font-urdu' : ''}`}>
                    {lang === 'ur' ? comm.nameUr : comm.name}
                  </div>
                  <div className="text-white/70 text-[10px] truncate">{comm.description}</div>
                </div>
                {comm.isLive && (
                  <div className="flex items-center gap-1 bg-red-500/80 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                    <span className="live-dot w-1.5 h-1.5 bg-white rounded-full" />
                    LIVE
                  </div>
                )}
              </div>
              <div className="p-2 flex items-center justify-between bg-white/50">
                <span className="text-xs text-gray-600 font-semibold">👥 {comm.members} members</span>
                <span className="text-xs text-blue-600 font-semibold">
                  {label('Join →', 'شامل ہوں →')}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Groups Grid */}
      {activeTab === 'groups' && (
        <div className="px-3 grid grid-cols-2 gap-3">
          {GROUPS.map(group => (
            <button
              key={group.id}
              onClick={() => toast.success(`Opening ${group.name}...`)}
              className="glass-card rounded-3xl p-4 text-left hover:scale-[1.02] transition-all"
            >
              <div className="text-3xl mb-2">{group.emoji}</div>
              <div className={`font-bold text-gray-800 text-sm mb-1 ${lang === 'ur' ? 'font-urdu text-right' : ''}`}>
                {lang === 'ur' ? group.nameUr : group.name}
              </div>
              <div className="text-[10px] font-semibold" style={{ color: group.color }}>
                {group.count} {label('members', 'ممبران')}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Global;
