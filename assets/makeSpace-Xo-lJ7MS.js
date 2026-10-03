import{j as e,M as c}from"./iframe-C1qQ09LF.js";import{useMDXComponents as o}from"./index-Au6382uh.js";import"./preload-helper-Dp1pzeXC.js";function t(s){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Utils/makeSpace"}),`
`,e.jsx(n.h2,{id:"makespace",children:e.jsx(n.code,{children:"makeSpace"})}),`
`,e.jsxs(n.p,{children:[`Spacing tokens in our theme are stored as plain numbers but they need to be converted into px units before we can use them.
`,e.jsx(n.code,{children:"makeSpace"})," converts spacing tokens into ",e.jsx(n.code,{children:"px"})," units for web as well as react native."]}),`
`,e.jsxs(n.p,{children:["For example, ",e.jsx(n.code,{children:"makeSpace(10)"})," will return ",e.jsx(n.code,{children:"10px"})," for web as well as react native."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Should be used only with Loom UI's ",e.jsx(n.a,{href:"?path=/story/tokens-spacing--docs",children:"Spacing tokens"})]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const makeSpace = (size: number) => string;
`})}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { makeSpace } from '@greenloom/ui/utils';
import styled from 'styled-components';

const CustomComponent = styled.div\`
  padding: \${({ theme }) => makeSpace(theme.spacing[2])}; // 4px
\`;
`})})]})}function l(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{l as default};
