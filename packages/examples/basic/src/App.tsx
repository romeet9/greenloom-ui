import React from 'react';
import { LoomProvider, Button } from '@greenloom/loom/components';
import { loomTheme } from '@greenloom/loom/tokens';
import '@greenloom/loom/fonts.css';

function App(): React.ReactElement {
  return (
    <LoomProvider themeTokens={loomTheme} colorScheme="light">
      <Button onClick={() => console.log('hi')}>Hello</Button>
    </LoomProvider>
  );
}

export default App;
