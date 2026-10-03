import{j as e,M as o}from"./iframe-C1qQ09LF.js";import{useMDXComponents as i}from"./index-Au6382uh.js";import"./preload-helper-Dp1pzeXC.js";function s(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Utils/makeSize"}),`
`,e.jsx(n.h2,{id:"makesize",children:e.jsx(n.code,{children:"makeSize"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"makeSize"})," converts any numerical unit into ",e.jsx(n.code,{children:"px"}),` units for both web and react native.
This was created with the purpose of having a utility that appends units to our size values.`]}),`
`,e.jsxs(n.p,{children:["For example ",e.jsx(n.code,{children:"makeSize(10)"})," will return ",e.jsx(n.code,{children:"10px"})," for web as well as react native."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const makeSize = (size: number) => string;
`})}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { makeSize } from '@greenloom/ui/utils';
import styled from 'styled-components';

const CustomComponent = styled.div\`
  height: \${makeSize(512)}; // '512px'
  width: \${makeSize(256)}; // '256px'
\`;
`})})]})}function l(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{l as default};
