import { AppLink } from '@/types';

export const APP_CATEGORIES = [
  { key: 'popular', labelEn: '⭐ Popular Hub', labelUr: 'مقبول' },
  { key: 'social', labelEn: '👥 Social Hub', labelUr: 'سوشل' },
  { key: 'islamic', labelEn: '🕌 Islamic Hub', labelUr: 'اسلامی' },
  { key: 'ai', labelEn: '🤖 AI Hub', labelUr: 'اے آئی' },
  { key: 'news', labelEn: '📰 News Hub', labelUr: 'خبریں' },
  { key: 'smart', labelEn: '🎓 Smart Series', labelUr: 'سمارٹ' },
];

export const APPS: AppLink[] = [
  // Popular
  { id: 'youtube', name: 'YouTube', nameUr: 'یوٹیوب', emoji: '▶️', url: 'https://youtube.com', category: 'popular', color: '#FF0000', bgGradient: 'linear-gradient(135deg,#ff6b6b,#ff0000)' },
  { id: 'google', name: 'Google', nameUr: 'گوگل', emoji: '🔍', url: 'https://google.com', category: 'popular', color: '#4285F4', bgGradient: 'linear-gradient(135deg,#4285F4,#34A853)' },
  { id: 'gmail', name: 'Gmail', nameUr: 'جی میل', emoji: '✉️', url: 'https://gmail.com', category: 'popular', color: '#EA4335', bgGradient: 'linear-gradient(135deg,#EA4335,#FBBC05)' },
  { id: 'maps', name: 'Google Maps', nameUr: 'گوگل میپس', emoji: '🗺️', url: 'https://maps.google.com', category: 'popular', color: '#34A853', bgGradient: 'linear-gradient(135deg,#34A853,#4285F4)' },
  { id: 'netflix', name: 'Netflix', nameUr: 'نیٹ فلکس', emoji: '🎬', url: 'https://netflix.com', category: 'popular', color: '#E50914', bgGradient: 'linear-gradient(135deg,#E50914,#831010)' },
  { id: 'amazon', name: 'Amazon', nameUr: 'ایمیزون', emoji: '🛒', url: 'https://amazon.com', category: 'popular', color: '#FF9900', bgGradient: 'linear-gradient(135deg,#FF9900,#232F3E)' },
  { id: 'wikipedia', name: 'Wikipedia', nameUr: 'ویکیپیڈیا', emoji: '📚', url: 'https://wikipedia.org', category: 'popular', color: '#3366CC', bgGradient: 'linear-gradient(135deg,#3366CC,#1a3a77)' },
  { id: 'spotify', name: 'Spotify', nameUr: 'اسپاٹیفائی', emoji: '🎵', url: 'https://spotify.com', category: 'popular', color: '#1DB954', bgGradient: 'linear-gradient(135deg,#1DB954,#0a6e2e)' },
  // Social
  { id: 'whatsapp', name: 'WhatsApp', nameUr: 'واٹس ایپ', emoji: '💬', url: 'https://web.whatsapp.com', category: 'social', color: '#25D366', bgGradient: 'linear-gradient(135deg,#25D366,#128C7E)' },
  { id: 'facebook', name: 'Facebook', nameUr: 'فیس بک', emoji: '📘', url: 'https://facebook.com', category: 'social', color: '#1877F2', bgGradient: 'linear-gradient(135deg,#1877F2,#0d5bdb)' },
  { id: 'instagram', name: 'Instagram', nameUr: 'انسٹاگرام', emoji: '📸', url: 'https://instagram.com', category: 'social', color: '#E4405F', bgGradient: 'linear-gradient(135deg,#833AB4,#FD1D1D,#FCB045)' },
  { id: 'tiktok', name: 'TikTok', nameUr: 'ٹک ٹاک', emoji: '🎵', url: 'https://tiktok.com', category: 'social', color: '#010101', bgGradient: 'linear-gradient(135deg,#010101,#ff0050,#00f2ea)' },
  { id: 'twitter', name: 'Twitter/X', nameUr: 'ٹویٹر ایکس', emoji: '🐦', url: 'https://twitter.com', category: 'social', color: '#1DA1F2', bgGradient: 'linear-gradient(135deg,#1DA1F2,#0a6d9e)' },
  { id: 'telegram', name: 'Telegram', nameUr: 'ٹیلیگرام', emoji: '✈️', url: 'https://web.telegram.org', category: 'social', color: '#2CA5E0', bgGradient: 'linear-gradient(135deg,#2CA5E0,#1a6fa0)' },
  { id: 'snapchat', name: 'Snapchat', nameUr: 'اسنیپ چیٹ', emoji: '👻', url: 'https://snapchat.com', category: 'social', color: '#FFFC00', bgGradient: 'linear-gradient(135deg,#FFFC00,#ffaa00)' },
  { id: 'linkedin', name: 'LinkedIn', nameUr: 'لنکڈ ان', emoji: '💼', url: 'https://linkedin.com', category: 'social', color: '#0077B5', bgGradient: 'linear-gradient(135deg,#0077B5,#004e80)' },
  // Islamic
  { id: 'quran', name: 'Holy Quran', nameUr: 'قرآن مجید', emoji: '📖', url: 'https://quran.com', category: 'islamic', color: '#2E7D32', bgGradient: 'linear-gradient(135deg,#2E7D32,#1b5e20)' },
  { id: 'islamicinstitute', name: 'Islamic Institute', nameUr: 'اسلامی ادارہ', emoji: '🕌', url: 'https://islamicfinder.org', category: 'islamic', color: '#1B5E20', bgGradient: 'linear-gradient(135deg,#66BB6A,#2E7D32)' },
  { id: 'haramtv', name: 'Makkah Live', nameUr: 'مکہ لائیو', emoji: '🕋', url: 'https://quranradiomakkah.com', category: 'islamic', color: '#F9A825', bgGradient: 'linear-gradient(135deg,#F9A825,#e65100)' },
  { id: 'islamqa', name: 'IslamQA', nameUr: 'اسلام سوال', emoji: '🌙', url: 'https://islamqa.info', category: 'islamic', color: '#0D47A1', bgGradient: 'linear-gradient(135deg,#0D47A1,#1565C0)' },
  // AI
  { id: 'chatgpt', name: 'ChatGPT', nameUr: 'چیٹ جی پی ٹی', emoji: '🤖', url: 'https://chat.openai.com', category: 'ai', color: '#10a37f', bgGradient: 'linear-gradient(135deg,#10a37f,#0a6e52)' },
  { id: 'gemini', name: 'Gemini', nameUr: 'جیمنی', emoji: '✨', url: 'https://gemini.google.com', category: 'ai', color: '#4285F4', bgGradient: 'linear-gradient(135deg,#4285F4,#a142f4)' },
  { id: 'claude', name: 'Claude', nameUr: 'کلاڈ', emoji: '🧠', url: 'https://claude.ai', category: 'ai', color: '#D97757', bgGradient: 'linear-gradient(135deg,#D97757,#c05c3b)' },
  { id: 'perplexity', name: 'Perplexity', nameUr: 'پرپلیکسٹی', emoji: '🔮', url: 'https://perplexity.ai', category: 'ai', color: '#6366f1', bgGradient: 'linear-gradient(135deg,#6366f1,#4f46e5)' },
  { id: 'genspark', name: 'GenSpark', nameUr: 'جین اسپارک', emoji: '⚡', url: 'https://genspark.ai', category: 'ai', color: '#f59e0b', bgGradient: 'linear-gradient(135deg,#f59e0b,#d97706)' },
  { id: 'qwen', name: 'Qwen', nameUr: 'کیوون', emoji: '🌐', url: 'https://qwen.ai', category: 'ai', color: '#7c3aed', bgGradient: 'linear-gradient(135deg,#7c3aed,#6d28d9)' },
  // News
  { id: 'geo', name: 'Geo News', nameUr: 'جیو نیوز', emoji: '📡', url: 'https://geo.tv', category: 'news', color: '#1a237e', bgGradient: 'linear-gradient(135deg,#1a237e,#283593)' },
  { id: 'arynews', name: 'ARY News', nameUr: 'اے آر وائی', emoji: '📺', url: 'https://arynews.tv', category: 'news', color: '#b71c1c', bgGradient: 'linear-gradient(135deg,#b71c1c,#c62828)' },
  { id: 'bbc', name: 'BBC News', nameUr: 'بی بی سی', emoji: '🌍', url: 'https://bbc.com/news', category: 'news', color: '#BB1919', bgGradient: 'linear-gradient(135deg,#BB1919,#8B0000)' },
  { id: 'aljazeera', name: 'Al Jazeera', nameUr: 'الجزیرہ', emoji: '🌐', url: 'https://aljazeera.com', category: 'news', color: '#0067A5', bgGradient: 'linear-gradient(135deg,#0067A5,#004e80)' },
  // Smart
  { id: 'github', name: 'GitHub', nameUr: 'گٹ ہب', emoji: '🐙', url: 'https://github.com', category: 'smart', color: '#181717', bgGradient: 'linear-gradient(135deg,#181717,#424242)' },
  { id: 'canva', name: 'Canva', nameUr: 'کینوا', emoji: '🎨', url: 'https://canva.com', category: 'smart', color: '#00C4CC', bgGradient: 'linear-gradient(135deg,#00C4CC,#7D2AE8)' },
  { id: 'zoom', name: 'Zoom', nameUr: 'زوم', emoji: '📹', url: 'https://zoom.us', category: 'smart', color: '#2D8CFF', bgGradient: 'linear-gradient(135deg,#2D8CFF,#1a5fc9)' },
  { id: 'netlify', name: 'Netlify', nameUr: 'نیٹلیفائی', emoji: '🚀', url: 'https://netlify.com', category: 'smart', color: '#00AD9F', bgGradient: 'linear-gradient(135deg,#00AD9F,#0a6e65)' },
  { id: 'onspace', name: 'OnSpace AI', nameUr: 'آن اسپیس', emoji: '🌌', url: 'https://onspace.ai', category: 'smart', color: '#6366f1', bgGradient: 'linear-gradient(135deg,#6366f1,#a855f7)' },
  { id: 'uniorbi', name: 'UniOrbi', nameUr: 'یونی آربی', emoji: '🌐', url: 'https://uniorbi.com', category: 'smart', color: '#059669', bgGradient: 'linear-gradient(135deg,#059669,#0284c7)' },
];

export const NEWS_TICKER = [
  '🌟 Global markets rise amid tech sector growth',
  '🕌 Islamic Finance Summit 2026 opens in Riyadh',
  '🚀 SpaceX launches new satellite constellation',
  '✅ System Status: All features operational',
  '🔄 Auto-update: Last synced 2 min ago',
  '🌍 ESOneWorld — Global Family Platform is LIVE',
  '📡 Smart World Order — Both eyes on overall what\'s really going on',
];
