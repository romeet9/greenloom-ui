import { getBladeThemeContextGetter } from './loomThemeContext';
import type { BladeThemeContextValue } from './types';

/**
 * Access the nearest LoomProvider theme context.
 *
 * @example
 * ```svelte
 * <script>
 *   import { useTheme } from '@greenloom/loom-svelte/components';
 *   const { theme, colorScheme, setColorScheme } = useTheme();
 * </script>
 * ```
 */
export function useTheme(): BladeThemeContextValue {
  const getter = getBladeThemeContextGetter();

  if (!getter) {
    throw new Error(
      '[Blade: useTheme]: LoomProvider is missing. Wrap your app in <LoomProvider themeTokens={loomTheme}>.',
    );
  }

  return getter();
}
