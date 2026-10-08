import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';
const key = 'cyber-agent-theme';

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f3f7f4' : '#080c09');
    try { localStorage.setItem(key, theme); } catch { /* Theme remains usable without storage. */ }
  }, [theme]);
  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key === key && (event.newValue === 'light' || event.newValue === 'dark')) setTheme(event.newValue);
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);
  return [theme, setTheme] as const;
}
