/**
 * AnnouncementBanner — a slim, full-bleed banner for a single short, system-wide
 * promotional or informational message at the top or bottom edge of a page.
 *
 * @example
 * ```svelte
 * <script>
 *   import { AnnouncementBanner } from '@greenloom/loom-svelte';
 *   import { InfoIcon } from '@greenloom/loom-svelte';
 * </script>
 *
 * <AnnouncementBanner icon={InfoIcon} alignment="center">
 *   Enter promotional text here
 * </AnnouncementBanner>
 * ```
 */
export { default as AnnouncementBanner } from './AnnouncementBanner.svelte';
export type { AnnouncementBannerProps, AnnouncementBannerAlignment } from './types';
