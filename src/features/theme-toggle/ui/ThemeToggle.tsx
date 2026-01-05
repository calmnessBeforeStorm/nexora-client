'use client';

import { useThemeStore } from '@/entities/theme/model/store';
import { Button } from '@/shared/ui/button';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <Button 
      onClick={toggleTheme} 
      className="top-4 right-4 !w-auto py-2 px-3 text-xs z-50"
    >
      {isDark ? 'Перейти на светлую' : 'Перейти на темную'}
    </Button>
  );
};