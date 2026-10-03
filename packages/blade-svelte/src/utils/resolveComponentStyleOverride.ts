import type { StyleOverride } from '@greenloom/loom-core/styles';
import { mergeStyleOverride } from '@greenloom/loom-core/utils';
import type { BladeThemeContextValue, BladeComponentName } from '../components/LoomProvider/types';

/**
 * Merges provider `componentConfig.styleOverride` with an instance override.
 * Instance wins on slot conflicts.
 *
 * Pass `themeContextGetter` from `getBladeThemeContextGetter()` (captured during
 * component init) so context is read reactively inside `$derived`.
 */
export function resolveComponentStyleOverride<Slot extends string>(
  componentName: BladeComponentName,
  instanceOverride: StyleOverride<Slot> | undefined,
  themeContextGetter: (() => BladeThemeContextValue) | undefined,
): StyleOverride<Slot> {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const providerOverride = themeContextGetter?.().componentConfig?.[componentName]
    ?.styleOverride as StyleOverride<Slot> | undefined;

  return mergeStyleOverride(providerOverride, instanceOverride);
}
