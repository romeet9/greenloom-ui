import{j as e,M as t}from"./iframe-C1qQ09LF.js";import{useMDXComponents as s}from"./index-Au6382uh.js";import"./preload-helper-Dp1pzeXC.js";function r(o){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Utils/makeTypographySize"}),`
`,e.jsx(n.h2,{id:"maketypographysize",children:e.jsx(n.code,{children:"makeTypographySize"})}),`
`,e.jsxs(n.p,{children:[`Fonts in our theme are stored as plain numbers but they need to be converted into platform specific units before we can use them.
`,e.jsx(n.code,{children:"makeTypographySize"})," converts font sizes into ",e.jsx(n.code,{children:"rem"})," units for web and ",e.jsx(n.code,{children:"px"})," units for react native."]}),`
`,e.jsxs(n.p,{children:["For example, ",e.jsx(n.code,{children:"makeTypographySize(16)"})," returns ",e.jsx(n.code,{children:"'1rem'"})," for web and ",e.jsx(n.code,{children:"'16px'"})," for react native."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Should be used with Loom UI ",e.jsx(n.a,{href:"?path=/story/tokens-typography--docs",children:"Typography tokens"})]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Loom UI uses ",e.jsx(n.code,{children:"rem"})," for web responsive scaling & ",e.jsx(n.code,{children:"px"})," for React Native."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const makeTypographySize = (size: number) => string;
`})}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { makeTypographySize } from '@greenloom/ui/utils';
import styled from 'styled-components';

const CustomComponent = styled.div\`
  font-size: \${({ theme }) =>
    makeTypographySize(
      theme.typography.fonts.size[200],
    )}; // '1rem' for web & '16px' for react native
\`;
`})})]})}function d(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{d as default};
