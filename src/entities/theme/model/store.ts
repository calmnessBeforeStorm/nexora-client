import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
  animationsEnabled: boolean;
  toggleAnimations: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: true, 
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
      animationsEnabled: true,
      toggleAnimations: () => set((state) => ({ animationsEnabled: !state.animationsEnabled })),
    }),
    {
      name: 'theme-storage',
    }
  )
);