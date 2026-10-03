/// <reference types="vite/client" />

import { Theme } from '@greenloom/loom/components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
