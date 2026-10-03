import { LoomProvider } from '@greenloom/loom/components';
import { paymentTheme } from '@greenloom/loom/tokens';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('root is null');
}
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <LoomProvider themeTokens={paymentTheme} colorScheme="light">
      <App />
    </LoomProvider>
  </StrictMode>,
);

console.clear();
