import{li as x}from"./iframe-C1qQ09LF.js";var c={exports:{}},u;function C(){return u||(u=1,(function(e){function r(a){var o=void 0;typeof a=="string"?o=[a]:o=a.raw;for(var t="",n=0;n<o.length;n++)t+=o[n].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),n<(arguments.length<=1?0:arguments.length-1)&&(t+=arguments.length<=n+1?void 0:arguments[n+1]);var m=t.split(`
`),s=null;return m.forEach(function(i){var g=i.match(/^(\s+)\S+/);if(g){var p=g[1].length;s?s=Math.min(s,p):s=p}}),s!==null&&(t=m.map(function(i){return i[0]===" "?i.slice(s):i}).join(`
`)),t=t.trim(),t.replace(/\\n/g,`
`)}e.exports=r})(c)),c.exports}var w=C();const l=x(w),S={"@razorpay/i18nify-js":"^1.12.3","@razorpay/i18nify-react":"^4.0.12","styled-components":"^5"},d={peerDependencies:S},L={react:"^19","react-dom":"^19","react-router-dom":"^6","framer-motion":"11.13.3","@types/react":"^19","@types/react-dom":"^19","@greenloom/loom":"*","styled-components":"^5","@razorpay/i18nify-js":"^1.12.3","@razorpay/i18nify-react":"^4.0.12"},B={vite:"6.2.2","@vitejs/plugin-react":"4.3.4"},f={dependencies:L,devDependencies:B};var v={},h=Object.freeze,z=Object.defineProperty,k=(e,r)=>h(z(e,"raw",{value:h(e.slice())})),y;const M=v.GITHUB_REF==="refs/heads/master",b=()=>{const e=v.GITHUB_SHA;return e&&!M?`https://pkg.csb.dev/razorpay/blade/commit/${e.slice(0,8)}/@greenloom/loom`:"*"},T=JSON.stringify({compilerOptions:{target:"ES2020",useDefineForClassFields:!0,lib:["ES2020","DOM","DOM.Iterable"],module:"ESNext",skipLibCheck:!0,moduleResolution:"bundler",allowImportingTsExtensions:!0,resolveJsonModule:!0,isolatedModules:!0,noEmit:!0,jsx:"react-jsx",strict:!1,noUnusedLocals:!1,noUnusedParameters:!1,noFallthroughCasesInSwitch:!0},include:["src"]},null,4),j=()=>({dependencies:{react:"^18","react-dom":"^18","react-scripts":"4.0.3","framer-motion":"11.13.3","@greenloom/loom":b(),"styled-components":d.peerDependencies["styled-components"],"@razorpay/i18nify-js":d.peerDependencies["@razorpay/i18nify-js"],"@razorpay/i18nify-react":d.peerDependencies["@razorpay/i18nify-react"]}}),D=JSON.stringify({scripts:{dev:"vite",build:"vite build"},stackblitz:{startCommand:"yarn && yarn dev",installDependencies:!1},dependencies:{...f.dependencies,"@greenloom/loom":b()},devDependencies:f.devDependencies},null,4),E=l`// features.js
import { domMax } from 'framer-motion';
// ~25kb (Only expose domAnimations instead of domMax if you're not using Morph preset or layout animations in your project)
export default domMax; 
`,O=l`
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
`,_=l(y||(y=k([`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="https://raw.githubusercontent.com/razorpay/blade/1e77f0b35172654037a431a916b3190b545fd232/branding/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blade Example</title>
    <style>
    /* 
      You should ideally write these styles in styled-component's createGlobalStyles.
      We're adding it here because that is not working in stackblitz example
    */
    * {
      box-sizing: border-box;
    }

    html, body {
      margin: 0px;
      padding: 0px;
    }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.tsx"><\/script>
  </body>
</html>
`]))),I=l`
import { Box, Button, IconButton, SlashIcon } from '@greenloom/loom/components';
import React from 'react';

const overrideConsoleLog = () => {
  const actualConsoleLog = console.log;
  const customConsole = {
    log: function (message) {
      const logMessage = document.createElement('p');
      logMessage.style.fontSize = '14px';
      logMessage.textContent = '> ' + JSON.stringify(message, null, 4);

      const newConsole = document.querySelector('#log-console');
      if (!newConsole) {
        return;
      }

      newConsole.appendChild(logMessage);
      newConsole.scrollTop = newConsole.scrollHeight;
    },
  };

  // Override the global console.log with the custom implementation
  window.console.log = (...args) => {
    customConsole.log(...args);
    actualConsoleLog(...args);
  };
};

overrideConsoleLog();

export const Logger = () => {
  const [showLogger, setShowLogger] = React.useState(true);
  const consoleRef = React.useRef();

  return (
    <>
      <Box
        position="fixed"
        bottom="spacing.0"
        left="spacing.0"
        width="100%"
        textAlign="right"
      >
        <Button
          variant="tertiary"
          size="small"
          onClick={() => {
            setShowLogger(!showLogger);
          }}
        >
          Toggle Console
        </Button>
        <Box
          position="absolute"
          bottom="spacing.0"
          right="spacing.0"
          padding="spacing.3"
          margin="spacing.4"
          elevation="none"
          borderRadius="round"
          backgroundColor="surface.background.gray.moderate"
          borderColor="surface.border.gray.muted"
          display={showLogger ? 'inline-block' : 'none'}
        >
          <IconButton
            onClick={() => {
              if (consoleRef.current) {
                consoleRef.current.innerHTML = '';
              }
            }}
            icon={SlashIcon}
            size="medium"
            accessibilityLabel="Clear Console"
          />
        </Box>
        <Box
          padding={['spacing.4', 'spacing.7']}
          overflow="auto"
          height="30vh"
          elevation="midRaised"
          backgroundColor="surface.background.gray.intense"
          id="log-console"
          ref={consoleRef}
          display={showLogger ? 'block' : 'none'}
          textAlign="left"
          borderTopWidth="thin"
          borderTopColor="surface.border.gray.muted"
        />
      </Box>
    </>
  );
};
`,J=({themeTokenName:e,brandColor:r,colorScheme:a,showConsole:o})=>l`
import React from 'react';
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { LazyMotion } from 'framer-motion';

const loadFeatures = () => import('./features.js').then((res) => res.default);

import { LoomProvider, Box } from "@greenloom/loom/components";
import { ${e}, createTheme } from "@greenloom/loom/tokens";

import App from "./App";
${o?'import { Logger } from "./Logger";':""}
import '@greenloom/loom/fonts.css';

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("root is null");
}
const root = createRoot(rootElement);

const getTheme = () => {
  if(${!!r}){
    return createTheme({
      brandColor: "${r}",
    }).theme;
  }
  return ${e};
}

root.render(
  <LoomProvider themeTokens={getTheme()} colorScheme="${a}">
    <LazyMotion strict features={loadFeatures}>
      <Box 
        backgroundColor="surface.background.gray.subtle"
        minHeight="100vh"
        padding={['spacing.4', 'spacing.7']}
        display="flex"
        flexDirection="column"
      >
        <Box>
          <App />
        </Box>
        ${o?"<Logger />":""}
      </Box>
    </LazyMotion>
  </LoomProvider>
);

console.clear(); // There could be some codesandbox warnings, clearing them here on init
`;export{D as a,j as b,l as d,E as f,J as g,_ as i,I as l,T as t,O as v};
