import React, { useState } from 'react';
import { Language, Contact } from '@/types';
import { toast } from 'sonner';

interface GuestRoomProps { lang: Language; }

const CONTACTS: Contact[] = [
  { id: '1', name: 'Dr. Irfan Qadir', nameUr: 'ڈاکٹر عرفان قادر', lastMsg: 'Assalam u Alaikum!', time: '10:30', avatar: '👨‍⚕️', unread: 3, isOnline: true },
  { id: '2', name: 'Smart World Order', nameUr: 'سمارٹ ورلڈ آرڈر', lastMsg: 'New broadcast available', time: '09:15', avatar: '🌍', unread: 12, isOnline: true },
  { id: '3', name: 'UniOrbi Team', nameUr: 'یونی آربی ٹیم', lastMsg: 'Platform update ready', time: 'Yesterday', avatar: '🚀', unread: 0, isOnline: false },
  { id: '4', name: 'Islamic Hub Group', nameUr: 'اسلامی گروپ', lastMsg: 'JazakAllah Khair', time: 'Yesterday', avatar: '🕌', unread: 5, isOnline: true },
  { id: '5', name: 'Global Family', nameUr: 'عالمی خاندان', lastMsg: 'Welcome to the family!', time: 'Mon', avatar: '👨‍👩‍👧‍👦', unread: 0, isOnline: false },
  { id: '6', name: 'Support Team', nameUr: 'سپورٹ ٹیم', lastMsg: 'How can we help?', time: 'Sun', avatar: '🛟', unread: 1, isOnline: true },
];

const GuestRoom: React.FC<GuestRoomProps> = ({ lang }) => {
  const [activeChat, setActiveChat] = useState<Contact | null>(null);
  const [msg, setMsg] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Assalam u Alaikum! Welcome to ESOneWorld.', isMe: false, time: '10:28' },
    { id: 2, text: 'Wa Alaikum Assalam! JazakAllah', isMe: true, time: '10:29' },
    { id: 3, text: 'This is the Global Family Platform. How can I help you?', isMe: false, time: '10:30' },
  ]);

  const label = (en: string, ur: string) => lang === 'ur' ? ur : en;

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), text: msg, isMe: true, time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) }]);
    setMsg('');
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: 'Thank you for your message! 🌟', isMe: false, time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) }]);
    }, 1000);
  };

  if (activeChat) {
    return (
      <div className="flex flex-col h-screen page-enter">
        {/* Chat Header */}
        <div className="glass-card px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
          <button onClick={() => setActiveChat(null)} className="text-blue-600 text-xl">←</button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-2xl border-2 border-white shadow-md">
            {activeChat.avatar}
          </div>
          <div className="flex-1">
            <div className="font-bold text-gray-800 text-sm">{lang === 'ur' && activeChat.nameUr ? activeChat.nameUr : activeChat.name}</div>
            <div className={`text-xs ${activeChat.isOnline ? 'text-green-600' : 'text-gray-400'}`}>
              {activeChat.isOnline ? label('Online', 'آن لائن') : label('Offline', 'آف لائن')}
            </div>
          </div>
          <div className="flex gap-2">
            {['📞', '📹', '⋮'].map((ic, i) => (
              <button key={i} onClick={() => toast.info('Feature coming soon!')} className="app-icon-btn w-9 h-9 flex items-center justify-center rounded-xl text-base">
                {ic}
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 pb-24">
          {messages.map(m => (
            <div key={m.id} className={`flex ${m.isMe ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm shadow-md ${
                  m.isMe
                    ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-br-sm'
                    : 'glass-card text-gray-800 rounded-bl-sm'
                }`}
              >
                <div>{m.text}</div>
                <div className={`text-[9px] mt-1 text-right ${m.isMe ? 'text-blue-200' : 'text-gray-400'}`}>
                  {m.time} {m.isMe && '✓✓'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={sendMessage}
          className="fixed bottom-[68px] left-0 right-0 px-4 py-2 glass-card-deep border-t border-white/80"
        >
          <div className="flex items-center gap-2">
            <button type="button" className="text-xl">😊</button>
            <input
              value={msg}
              onChange={e => setMsg(e.target.value)}
              placeholder={label('Type a message...', 'پیغام لکھیں...')}
              className="flex-1 bg-white/70 rounded-2xl px-4 py-2 text-sm text-gray-700 border border-white/80 outline-none"
            />
            <button type="button" className="text-xl">📎</button>
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center shadow-lg"
            >
              ➤
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="page-enter pb-4">
      {/* Header */}
      <div className="glass-card mx-3 mt-3 mb-3 p-3 rounded-3xl">
        <div className="flex items-center gap-2">
          <span className="text-2xl">💬</span>
          <div className="flex-1">
            <div className="font-bold text-gray-800">{label("Guest Room", "گیسٹ روم")}</div>
            <div className="text-xs text-gray-500">{label("Chats • Calls • Live Streaming", "چیٹس • کالز • لائیو")}</div>
          </div>
        </div>
        <div className="flex gap-3 mt-3">
          {[
            { emoji: '💬', label: label('Chats', 'چیٹس'), color: '#1e40af' },
            { emoji: '📞', label: label('Calls', 'کالز'), color: '#065f46' },
            { emoji: '📹', label: label('Video', 'ویڈیو'), color: '#92400e' },
            { emoji: '🔴', label: label('Live', 'لائیو'), color: '#991b1b' },
          ].map((btn, i) => (
            <button
              key={i}
              onClick={() => toast.info(`${btn.label} coming soon!`)}
              className="flex-1 glass-card rounded-2xl py-2 flex flex-col items-center gap-1"
            >
              <span className="text-lg">{btn.emoji}</span>
              <span className="text-[9px] font-semibold" style={{ color: btn.color }}>{btn.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Contact List */}
      <div className="px-3 space-y-2">
        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1 mb-2">
          {label('Recent Contacts', 'حالیہ رابطے')}
        </div>
        {CONTACTS.map(contact => (
          <button
            key={contact.id}
            onClick={() => setActiveChat(contact)}
            className="w-full glass-card rounded-2xl p-3 flex items-center gap-3 text-left hover:bg-white/90 transition-all"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-2xl border-2 border-white shadow-md">
                {contact.avatar}
              </div>
              {contact.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className={`font-semibold text-gray-800 text-sm truncate ${lang === 'ur' ? 'font-urdu' : ''}`}>
                  {lang === 'ur' && contact.nameUr ? contact.nameUr : contact.name}
                </span>
                <span className="text-[10px] text-gray-400 flex-shrink-0 ml-2">{contact.time}</span>
              </div>
              <div className="text-xs text-gray-500 truncate mt-0.5">{contact.lastMsg}</div>
            </div>
            {contact.unread > 0 && (
              <div className="flex-shrink-0 min-w-[20px] h-5 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                {contact.unread}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GuestRoom;
