'use client';

import { useThemeStore } from '@/entities/theme/model/store';
import { useLayoutEffect } from 'react';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isDark = useThemeStore((state) => state.isDark);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
  }, [isDark]);

  return <>{children}</>;
};