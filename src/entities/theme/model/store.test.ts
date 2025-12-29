import { describe, it, expect, beforeEach } from 'vitest';
import { useThemeStore } from './store';

describe('theme store', () => {
  beforeEach(() => {
    // reset to defaults
    useThemeStore.setState({ isDark: true, animationsEnabled: true });
  });

  it('has default values', () => {
    const state = useThemeStore.getState();
    expect(state.isDark).toBe(true);
    expect(state.animationsEnabled).toBe(true);
  });

  it('toggles theme', () => {
    const { toggleTheme } = useThemeStore.getState();
    toggleTheme();
    expect(useThemeStore.getState().isDark).toBe(false);
  });

  it('toggles animations', () => {
    const { toggleAnimations } = useThemeStore.getState();
    toggleAnimations();
    expect(useThemeStore.getState().animationsEnabled).toBe(false);
  });
});
