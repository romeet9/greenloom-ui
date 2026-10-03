import{j as e,M as i}from"./iframe-C1qQ09LF.js";import{useMDXComponents as t}from"./index-Au6382uh.js";import"./preload-helper-Dp1pzeXC.js";function r(o){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Guides/Usage"}),`
`,e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"24px"},children:[e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",backgroundColor:"rgba(16,185,129,0.12)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#10B981",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]})}),e.jsxs("div",{children:[e.jsx("h1",{style:{margin:0,fontSize:"28px",fontWeight:700},children:"Using Loom UI"}),e.jsx("p",{style:{margin:0,fontSize:"14px",opacity:.75},children:"Component consumption, theme providers, and token workflows"})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Before starting, ensure you have followed the ",e.jsx(n.a,{href:"?path=/docs/guides-installation--docs",children:"installation guide"})," and installed ",e.jsx(n.code,{children:"@greenloom/ui"})," and its peer dependencies."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"1-wrap-your-app-with-bladeprovider",children:["1. Wrap Your App with ",e.jsx(n.code,{children:"BladeProvider"})]}),`
`,e.jsxs(n.p,{children:["To activate theme tokens, responsive breakpoints, and dark mode transitions, wrap your application root inside ",e.jsx(n.code,{children:"BladeProvider"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import { BladeProvider } from '@greenloom/ui/components';
import { bladeTheme } from '@greenloom/ui/tokens';
import App from './App';

export default function AppWrapper(): JSX.Element {
  return (
    <BladeProvider themeTokens={bladeTheme} colorScheme="dark">
      <App />
    </BladeProvider>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"benefits-of-the-loom-provider",children:"Benefits of the Loom Provider:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsive Breakpoints:"})," Components adapt automatically across mobile ($375\\text",px,"$), tablet ($768\\text",px,"$), and desktop ($1024\\text",px,"+$)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Instant Dark/Light Theming:"})," Seamless switching between high-contrast dark mode and clean light surfaces."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Typographic Standardization:"})," Automatic rem/px calculations mapped to the ",e.jsx(n.strong,{children:"Geist & Geist Mono"})," scales."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2-consuming-components",children:"2. Consuming Components"}),`
`,e.jsxs(n.p,{children:["Import UI components, icons, and tokens directly from ",e.jsx(n.code,{children:"@greenloom/ui"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, SideNav, DownloadIcon } from '@greenloom/ui/components';

export function ExportAction() {
  return (
    <Button 
      variant="secondary" 
      size="medium" 
      icon={DownloadIcon} 
      iconPosition="left"
      accessibilityLabel="Export report"
    >
      Export Report
    </Button>
  );
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"3-mapping-tokens-from-figma-to-code",children:"3. Mapping Tokens from Figma to Code"}),`
`,e.jsxs(n.p,{children:["Loom UI is designed with a ",e.jsx(n.strong,{children:'"What you see in Figma is what you get in Code"'})," standard."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important Rule:"})," Never hardcode hex/RGB values. Always use semantic token paths (",e.jsx(n.code,{children:"surface.background.gray.moderate"}),", ",e.jsx(n.code,{children:"surface.text.gray.normal"}),") so your UI automatically adapts to dark mode."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import styled from 'styled-components';
import type { Theme } from '@greenloom/ui/components';

const StyledCard = styled.div(
  ({ theme }: { theme: Theme }) => \`
    width: 368px;
    background-color: \${theme.colors.surface.background.gray.moderate};
    border: 1px solid \${theme.colors.surface.border.gray.subtle};
    padding: \${theme.spacing[5]}px;
    border-radius: \${theme.border.radius.medium}px;
  \`
);
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"4-mobile--ios-safari-optimization",children:"4. Mobile & iOS Safari Optimization"}),`
`,e.jsxs(n.p,{children:["When using overlay components like ",e.jsx(n.code,{children:"BottomSheet"})," or ",e.jsx(n.code,{children:"SpotlightPopoverTour"})," on mobile Safari, ensure your global stylesheet contains:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`html, body {
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
`})})]})}function l(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{l as default};
