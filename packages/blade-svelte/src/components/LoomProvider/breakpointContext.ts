import { getContext, setContext } from 'svelte';
import type { Breakpoint, DeviceType } from '@greenloom/loom-core/utils';

export const BLADE_BREAKPOINT_CONTEXT_KEY = 'blade-breakpoint-context';

export type BreakpointState = {
  /** Matched breakpoint token; `undefined` during SSR and before mount. */
  readonly matchedBreakpoint: Breakpoint | undefined;
  /** `'mobile'` for base/xs/s (tablet included), otherwise `'desktop'`. */
  readonly matchedDeviceType: DeviceType;
};

/**
 * Provide breakpoint state via a getter for Svelte 5 reactivity.
 */
export function setBreakpointContext(getBreakpointState: () => BreakpointState): void {
  setContext(BLADE_BREAKPOINT_CONTEXT_KEY, getBreakpointState);
}

/**
 * Read the reactive viewport breakpoint tracked by the nearest LoomProvider.
 * Svelte equivalent of React Blade's `useBreakpoint`.
 *
 * Keep the returned object and read its fields inside `$derived` or the template.
 * Destructuring it snapshots the values and loses reactivity.
 *
 * @example
 * ```svelte
 * <script>
 *   import { useBreakpoint } from '@greenloom/loom-svelte/components';
 *   const breakpoint = useBreakpoint();
 *   const isMobile = $derived(breakpoint.matchedDeviceType === 'mobile');
 * </script>
 * ```
 */
export function useBreakpoint(): BreakpointState {
  const getter = getContext<(() => BreakpointState) | undefined>(BLADE_BREAKPOINT_CONTEXT_KEY);

  if (!getter) {
    throw new Error(
      '[Blade: useBreakpoint]: LoomProvider is missing. Wrap your app in <LoomProvider themeTokens={loomTheme}>.',
    );
  }

  return getter();
}
