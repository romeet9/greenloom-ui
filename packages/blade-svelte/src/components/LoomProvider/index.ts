/**
 * LoomProvider — theme scope for Blade Svelte apps.
 *
 * @example
 * ```svelte
 * <script>
 *   import { LoomProvider, Button } from '@greenloom/loom-svelte/components';
 *   import { loomTheme, createTheme } from '@greenloom/loom-core/tokens';
 *
 *   const { theme } = createTheme({ brandColor: '#19BEA2', borderRadius: { medium: 16 } });
 * </script>
 *
 * <LoomProvider themeTokens={loomTheme} colorScheme="light">
 *   <Button>Pay</Button>
 * </LoomProvider>
 * ```
 */
export { default as LoomProvider } from './LoomProvider.svelte';
export { useTheme } from './useTheme';
export { useBreakpoint } from './breakpointContext';
export type { BreakpointState } from './breakpointContext';
export type {
  Theme,
  LoomProviderProps,
  BladeThemeContextValue,
  BladeComponentName,
  BladeComponentConfig,
  BladeComponentConfigMap,
  ComponentSlots,
} from './types';
