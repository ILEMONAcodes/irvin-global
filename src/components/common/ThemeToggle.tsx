'use client';

import { Moon, Sun } from 'lucide-react';
import { toggleDarkMode, useDarkMode } from '@/lib/theme';

type ThemeToggleProps = {
  compact?: boolean;
};

export default function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const darkMode = useDarkMode();
  const label = darkMode ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      onClick={() => toggleDarkMode(darkMode)}
      aria-label={label}
      aria-pressed={darkMode}
      title={label}
      className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-[#111b2e] dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-300 ${compact ? 'h-10 w-10' : 'min-h-10 px-3 text-xs font-semibold'}`}
    >
      {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {!compact && <span>{darkMode ? 'Light mode' : 'Dark mode'}</span>}
    </button>
  );
}
