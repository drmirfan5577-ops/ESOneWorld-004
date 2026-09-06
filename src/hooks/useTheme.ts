import { useState, useEffect, useCallback } from 'react';
import { ThemeKey } from '@/types';
import { THEMES } from '@/constants/themes';

const STORAGE_KEY = 'esoneworld_theme';
const DEFAULT_THEME: ThemeKey = 'crystal-white';

export function useTheme() {
  const [themeKey, setThemeKey] = useState<ThemeKey>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return (saved as ThemeKey) || DEFAULT_THEME;
  });

  const theme = THEMES.find(t => t.key === themeKey) || THEMES[0];

  const applyTheme = useCallback((key: ThemeKey) => {
    const body = document.body;
    THEMES.forEach(t => {
      body.classList.remove(t.themeClass);
    });
    const found = THEMES.find(t => t.key === key);
    if (found) {
      body.classList.add(found.themeClass);
    }
  }, []);

  useEffect(() => {
    applyTheme(themeKey);
    localStorage.setItem(STORAGE_KEY, themeKey);
  }, [themeKey, applyTheme]);

  const setTheme = useCallback((key: ThemeKey) => {
    setThemeKey(key);
  }, []);

  return { themeKey, theme, setTheme, themes: THEMES };
}
