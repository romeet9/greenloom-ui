import type { ReactNode } from 'react';
import type { ThemeTokens, ColorSchemeNamesInput } from '~tokens/theme';

type LoomProviderProps = {
  themeTokens: ThemeTokens;
  colorScheme?: ColorSchemeNamesInput;
  children: ReactNode;
};

type BladeProviderProps = LoomProviderProps;

export type { LoomProviderProps, BladeProviderProps };
