import{j as e,M as t}from"./iframe-C1qQ09LF.js";import{useMDXComponents as s}from"./index-Au6382uh.js";import"./preload-helper-Dp1pzeXC.js";function o(n){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Utils/makeBorderSize"}),`
`,e.jsx(r.h2,{id:"makebordersize",children:e.jsx(r.code,{children:"makeBorderSize"})}),`
`,e.jsxs(r.p,{children:[`Border width & radius sizes in our theme are stored as plain numbers or percentages but they need to be converted into platform specific units before we can use them.
`,e.jsx(r.code,{children:"makeBorderSize"})," converts numeric border size tokens into ",e.jsx(r.code,{children:"px"})," but keeps percentage tokens as is for both web & react native."]}),`
`,e.jsxs(r.p,{children:["For example, ",e.jsx(r.code,{children:"makeBorderSize(8)"})," returns ",e.jsx(r.code,{children:"'8px'"})," but ",e.jsx(r.code,{children:"makeBorderSize('50%')"})," returns ",e.jsx(r.code,{children:"'50%'"}),"."]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["Should be used only with Loom UI's ",e.jsx(r.a,{href:"?path=/story/tokens-border--docs",children:"Border tokens"})]}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`const makeBorderSize = (size: number) => string;
`})}),`
`,e.jsx(r.h3,{id:"example",children:"Example"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { makeBorderSize } from '@greenloom/ui/utils';
import styled from 'styled-components';

const CustomComponent = styled.div\`
  border-width: \${({ theme }) => makeBorderSize(theme.border.width.thick)}; // '1.5px'
  border-radius: \${({ theme }) => makeBorderSize(theme.border.radius.round)}; // '50%'
\`;
`})})]})}function a(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}export{a as default};
