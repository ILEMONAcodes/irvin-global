'use client';

import { useSyncExternalStore } from 'react';

export const THEME_STORAGE_KEY = 'irvin-dashboard-theme';
const THEME_CHANGE_EVENT = 'irvin-dashboard-theme-change';

function subscribeToTheme(onStoreChange: () => void) {
  window.addEventListener('storage', onStoreChange);
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener('storage', onStoreChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
  };
}

function getThemeSnapshot() {
  return window.localStorage.getItem(THEME_STORAGE_KEY) === 'dark';
}

function getServerThemeSnapshot() {
  return false;
}

export function useDarkMode() {
  return useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);
}

export function toggleDarkMode(currentDarkMode: boolean) {
  window.localStorage.setItem(THEME_STORAGE_KEY, currentDarkMode ? 'light' : 'dark');
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}
