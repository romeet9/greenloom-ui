import type { TypographyPlatforms } from '@greenloom/loom-core/tokens';
import type { DeviceType } from '@greenloom/loom-core/utils';

/**
 * Typography follows the same mobile/desktop split as `useBreakpoint()`,
 * so both flip together on a single breakpoint crossing.
 */
export const getTypographyPlatform = (deviceType: DeviceType): TypographyPlatforms => {
  return deviceType === 'mobile' ? 'onMobile' : 'onDesktop';
};
