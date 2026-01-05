'use client';

import { useThemeStore } from '@/entities/theme/model/store';
import { Button } from '@/shared/ui/button';

export const AnimationsToggle = () => {
  const { animationsEnabled, toggleAnimations } = useThemeStore();

  return (
    <Button 
      onClick={toggleAnimations} 
      className="top-4 right-16 !w-auto py-2 px-3 text-xs z-50"
      variant="secondary"
    >
      {animationsEnabled ? 'Анимации вкл' : '⏸ Анимации выкл'}
    </Button>
  );
};
