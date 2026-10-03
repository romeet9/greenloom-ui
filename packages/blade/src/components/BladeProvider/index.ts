import type { Colors, ThemeTokens } from '~tokens/theme/theme';
import type {
  Border,
  Breakpoints,
  Motion,
  Spacing,
  Typography,
  Elevation,
  BackdropBlur,
} from '~tokens/global';
export { LoomProvider, BladeProvider } from './BladeProvider';
export * from './types';
export { default as useTheme, useLoomTheme, useBladeTheme } from './useTheme';

export type Theme = {
  name: ThemeTokens['name'];
  border: Border;
  breakpoints: Breakpoints;
  colors: Colors;
  spacing: Spacing;
  motion: Motion;
  elevation: Elevation;
  typography: Typography;
  backdropBlur: BackdropBlur;
};
