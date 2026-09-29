'use client';

import { useEffect, type ReactNode } from 'react';
import { useDarkMode } from '@/lib/theme';

export default function ThemeDocument({ children }: { children: ReactNode }) {
  const darkMode = useDarkMode();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return children;
}
