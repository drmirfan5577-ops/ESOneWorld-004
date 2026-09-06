export type TabKey = 'home' | 'guests' | 'global' | 'paradise' | 'esmart' | 'esonewworld';

export type Language = 'en' | 'ur' | 'ar';

export type ThemeKey =
  | 'crystal-white'
  | 'emerald'
  | 'crimson'
  | 'royal-blue'
  | 'golden-mosque'
  | 'pakistan-green'
  | 'holographic'
  | 'sunset';

export interface Theme {
  key: ThemeKey;
  nameEn: string;
  nameUr: string;
  nameAr: string;
  bgClass: string;
  themeClass: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  previewGradient: string;
  isDark: boolean;
}

export interface AppLink {
  id: string;
  name: string;
  nameUr?: string;
  emoji: string;
  url: string;
  category: string;
  color: string;
  bgGradient: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  text: string;
  time: string;
  isMe: boolean;
  avatar: string;
}

export interface Contact {
  id: string;
  name: string;
  nameUr?: string;
  lastMsg: string;
  time: string;
  avatar: string;
  unread: number;
  isOnline: boolean;
}

export interface IslamicContent {
  id: string;
  type: 'quran' | 'hadees' | 'series';
  title: string;
  titleUr: string;
  titleAr?: string;
  subtitle?: string;
  description?: string;
  color: string;
  gradient: string;
  icon: string;
}

export interface NewsItem {
  id: string;
  text: string;
}
