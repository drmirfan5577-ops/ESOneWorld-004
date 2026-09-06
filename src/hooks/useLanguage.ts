import { useState, useCallback } from 'react';
import { Language } from '@/types';

const STORAGE_KEY = 'esoneworld_lang';

export function useLanguage() {
  const [lang, setLangState] = useState<Language>(() => {
    return (localStorage.getItem(STORAGE_KEY) as Language) || 'en';
  });

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const t = useCallback((en: string, ur?: string, ar?: string) => {
    if (lang === 'ur' && ur) return ur;
    if (lang === 'ar' && ar) return ar;
    return en;
  }, [lang]);

  return { lang, setLang, t };
}
