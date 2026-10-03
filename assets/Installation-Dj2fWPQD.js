import{j as e,M as p,H as o,T as t,a as g,B as x,b as j,c as r,d as i,S as u,e as d,L as f,f as a,g as l,h as c}from"./iframe-C1qQ09LF.js";import{useMDXComponents as m}from"./index-Au6382uh.js";import y from"./MotionInstallation-BQ9edIWF.js";import"./preload-helper-Dp1pzeXC.js";function h(s){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...m(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Guides/Installation"}),`
`,e.jsx(n.h1,{id:"installation--setup",children:"Installation & Setup"}),`
`,e.jsx("br",{}),`
`,e.jsx(o,{size:"large",children:"Loom Design System"}),`
`,e.jsx(t,{marginY:"spacing.4",color:"surface.text.gray.subtle",children:e.jsxs(n.p,{children:["Follow the steps below to install and integrate ",e.jsx("strong",{children:"Loom UI"})," (@greenloom/ui) into your ",e.jsx("strong",{children:"Green Loom"})," web and cross-platform applications."]})}),`
`,e.jsxs(g,{marginTop:"spacing.8",variant:"bordered",orientation:"horizontal",children:[e.jsx(x,{position:"sticky",top:"0px",zIndex:1,backgroundColor:"surface.background.gray.intense",children:e.jsxs(j,{children:[e.jsx(r,{value:"basic",children:"1. Package Installation"}),e.jsx(r,{value:"fonts",children:"2. Typography (Geist)"}),e.jsx(r,{value:"motion",children:"3. Motion Setup"}),e.jsx(r,{value:"ts",children:"4. TypeScript Setup"})]})}),e.jsxs(i,{value:"basic",children:[e.jsx(o,{size:"large",marginTop:"spacing.7",children:"1. Add Loom UI to your project"}),e.jsxs(u,{orientation:"vertical",size:"medium",children:[e.jsxs(d,{title:"1. Install @greenloom/ui and peer dependencies",children:[e.jsx(t,{color:"surface.text.gray.subtle",children:e.jsx(n.p,{children:"Install the Loom design system core package along with its React and motion dependencies:"})}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`yarn add @greenloom/ui styled-components@5.3.11 hugeicons-react framer-motion@11.13.3
`})}),e.jsxs(f,{children:[e.jsxs(a,{children:[e.jsx(l,{href:"https://hugeicons.com",children:"hugeicons-react"}),e.jsx(c,{children:e.jsx(n.p,{children:"Standard stroke icons library for all interface glyphs and actions."})})]}),e.jsxs(a,{children:[e.jsx(l,{href:"https://www.npmjs.com/package/styled-components/v/5.3.11",children:"styled-components@5"}),e.jsx(c,{children:e.jsx(n.p,{children:"Theme-injected styling engine."})})]}),e.jsxs(a,{children:[e.jsx(l,{href:"https://www.framer.com/motion/",children:"framer-motion"}),e.jsx(c,{children:e.jsx(n.p,{children:"Smooth declarative physics and UI transitions."})})]})]})]}),e.jsxs(d,{title:"2. Wrap your application with Loom UIProvider (Loom Provider)",children:[e.jsx(t,{color:"surface.text.gray.subtle",children:e.jsx(n.p,{children:"Provide the Loom theme context and color scheme to your React tree:"})}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import { BladeProvider } from '@greenloom/ui/components';
import { bladeTheme } from '@greenloom/ui/tokens';

export function App() {
  return (
    <BladeProvider themeTokens={bladeTheme} colorScheme="light">
      <YourApplicationRoutes />
    </BladeProvider>
  );
}
`})})]})]})]}),e.jsxs(i,{value:"fonts",children:[e.jsx(o,{size:"large",marginTop:"spacing.7",children:"2. Typography Configuration"}),e.jsx(t,{marginY:"spacing.4",color:"surface.text.gray.subtle",children:e.jsxs(n.p,{children:["Loom UI standardizes on ",e.jsx("strong",{children:"Geist"})," for all headings, body text, and UI labels, and ",e.jsx("strong",{children:"Geist Mono"})," for numeric figures, currencies, tables, counters, and code."]})}),e.jsx(n.h3,{id:"google-fonts-import-recommended-for-web",children:"Google Fonts Import (Recommended for Web)"}),e.jsxs(n.p,{children:["Add the Google Fonts stylesheet to your ",e.jsx(n.code,{children:"<head>"})," or main entry file:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
  rel="stylesheet"
/>
`})}),e.jsx(n.h3,{id:"css--global-styles",children:"CSS / Global Styles"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`body {
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}

code, kbd, samp, pre, .mono {
  font-family: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
}
`})})]}),e.jsxs(i,{value:"motion",children:[e.jsx(o,{size:"large",marginTop:"spacing.7",children:"3. Motion Setup"}),e.jsx(t,{marginY:"spacing.4",color:"surface.text.gray.subtle",children:e.jsx(n.p,{children:"Loom UI components integrate with Framer Motion for smooth layout transitions and modal entrances."})}),e.jsx(y,{})]}),e.jsxs(i,{value:"ts",children:[e.jsx(o,{size:"large",marginY:"spacing.7",children:"4. TypeScript Configuration"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`yarn add -D @types/styled-components
`})}),e.jsx(n.p,{children:"Extend the default theme in your ambient type definitions:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// file: styled.d.ts
import { Theme } from '@greenloom/ui/components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
`})})]})]})]})}function v(s={}){const{wrapper:n}={...m(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(h,{...s})}):h(s)}export{v as default};
