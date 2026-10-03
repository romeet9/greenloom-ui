import{j as e,M as o}from"./iframe-C1qQ09LF.js";import{useMDXComponents as i}from"./index-Au6382uh.js";import"./Sandbox.web-C7diOxlu.js";import"./preload-helper-Dp1pzeXC.js";import"./baseCode-DnWYDQ6N.js";function r(t){const n={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Guides/Integrations/Routing Libraries"}),`
`,e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"24px"},children:[e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",backgroundColor:"rgba(16,185,129,0.12)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#10B981",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"6",cy:"18",r:"3"}),e.jsx("circle",{cx:"18",cy:"6",r:"3"}),e.jsx("path",{d:"M6 15V9a6 6 0 0 1 6-6h3"})]})}),e.jsxs("div",{children:[e.jsx("h1",{style:{margin:0,fontSize:"28px",fontWeight:700},children:"Routing Libraries Integration"}),e.jsx("p",{style:{margin:0,fontSize:"14px",opacity:.75},children:"Integrate Loom UI navigation components with React Router, Next.js, and Remix"})]})]}),`
`,e.jsxs(n.p,{children:["This guide demonstrates how to integrate Loom UI components (",e.jsx(n.code,{children:"Link"}),", ",e.jsx(n.code,{children:"Button"}),", ",e.jsx(n.code,{children:"SideNav"}),", ",e.jsx(n.code,{children:"Tabs"}),", ",e.jsx(n.code,{children:"Breadcrumb"}),") with modern routing frameworks."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"react-router-link-integration",children:"React Router Link Integration"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Link as BladeLink } from '@greenloom/ui/components';
import { useHref, useLinkClickHandler } from 'react-router-dom';

export function RouterLink({ to, children, ...props }) {
  const href = useHref(to);
  const handleClick = useLinkClickHandler(to);

  return (
    <BladeLink href={href} onClick={handleClick} {...props}>
      {children}
    </BladeLink>
  );
}
`})})]})}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{h as default};
