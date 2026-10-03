import{j as e,m as o,H as t,n as s,o as a,p as c,M as d}from"./iframe-C1qQ09LF.js";import{useMDXComponents as l}from"./index-Au6382uh.js";import"./preload-helper-Dp1pzeXC.js";const h=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",margin:"20px 0"},children:[e.jsxs(o,{themeTokens:c({brandColor:"#10B981"}).theme,colorScheme:"light",children:[e.jsx(t,{size:"small",children:"Emerald Green Brand — Automatic Dark Contrast Text"}),e.jsx(s,{icon:a,accessibilityLabel:"Process payout",children:"Process Payout"})]}),e.jsxs(o,{themeTokens:c({brandColor:"#0E0E0E"}).theme,colorScheme:"light",children:[e.jsx(t,{size:"small",children:"Monochrome Black Brand — Automatic Light Contrast Text"}),e.jsx(s,{icon:a,accessibilityLabel:"Process payout",children:"Process Payout"})]})]});function i(r){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Guides/Theming/createTheme Function"}),`
`,e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"24px"},children:[e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",backgroundColor:"rgba(16,185,129,0.12)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#10B981",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 2a10 10 0 0 1 10 10"}),e.jsx("path",{d:"M12 18a6 6 0 0 1-6-6"})]})}),e.jsxs("div",{children:[e.jsx("h1",{style:{margin:0,fontSize:"28px",fontWeight:700},children:"Custom Theming with createTheme"}),e.jsx("p",{style:{margin:0,fontSize:"14px",opacity:.75},children:"Generate accessible color palettes and theme tokens for Green Loom"})]})]}),`
`,e.jsxs(n.p,{children:["Loom UI is powered by a ",e.jsx(n.strong,{children:"Powder Green"})," chromatic palette by default. However, you can generate custom brand palettes or sub-brand tokens using the ",e.jsx(n.code,{children:"createTheme()"})," utility while preserving strict WCAG AAA accessibility."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(n.h3,{id:"createtheme-brandcolor-",children:e.jsx(n.code,{children:"createTheme({ brandColor })"})}),`
`,e.jsxs(n.p,{children:["Generates a complete ",e.jsx(n.code,{children:"ThemeTokens"})," object containing typography, motion, spacing, and a dynamically balanced color scale based on your primary brand color."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { createTheme } from '@greenloom/ui/tokens';
import { BladeProvider } from '@greenloom/ui/components';

// 1. Generate customized tokens from your brand color
const { theme: customThemeTokens } = createTheme({
  brandColor: '#10B981', // Hex, RGB, or HSL
});

// 2. Supply to your provider
export function BrandedApp() {
  return (
    <BladeProvider themeTokens={customThemeTokens} colorScheme="dark">
      <App />
    </BladeProvider>
  );
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"automatic-contrast-calculation",children:"Automatic Contrast Calculation"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"createTheme"})," automatically calculates foreground and background luminance to ensure text and icon contrast meets the ",e.jsx(n.strong,{children:"WCAG 2.1 AA & AAA standards ($\\ge 4.5:1$)"}),":"]}),`
`,`
`,e.jsx(h,{})]})}function u(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{h as ContrastDemo,u as default};
