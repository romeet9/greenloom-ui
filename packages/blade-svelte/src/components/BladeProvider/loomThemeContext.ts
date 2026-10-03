import { getContext, setContext } from 'svelte';
import type { BladeThemeContextValue } from './types';

export const LOOM_THEME_CONTEXT_KEY = 'loom-theme-context';
export const BLADE_THEME_CONTEXT_KEY = LOOM_THEME_CONTEXT_KEY;

/**
 * Provide theme context via a getter for Svelte 5 reactivity.
 */
export function setLoomThemeContext(getContextValue: () => BladeThemeContextValue): void {
  setContext(LOOM_THEME_CONTEXT_KEY, getContextValue);
}
export const setBladeThemeContext = setLoomThemeContext;

/**
 * Read theme context getter. Returns undefined outside LoomProvider.
 */
export function getLoomThemeContextGetter(): (() => BladeThemeContextValue) | undefined {
  return getContext<(() => BladeThemeContextValue) | undefined>(LOOM_THEME_CONTEXT_KEY);
}
export const getBladeThemeContextGetter = getLoomThemeContextGetter;
