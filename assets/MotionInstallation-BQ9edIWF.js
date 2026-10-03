import{j as e}from"./iframe-C1qQ09LF.js";import{useMDXComponents as i}from"./index-Au6382uh.js";import"./preload-helper-Dp1pzeXC.js";function t(o){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h3,{id:"1-reduced-bundle-size-setup",children:"1. Reduced bundle size setup"}),`
`,e.jsxs(n.p,{children:["This setup is taken from ",e.jsx(n.a,{href:"https://motion.dev/docs/react-reduce-bundle-size",rel:"nofollow",children:"Motion React - Reduce Bundle Size Docs"})]}),`
`,e.jsxs(n.h4,{id:"if-youre-only-using-basic-presets-like-fade-move-slide-stagger-animateinteractions-etc",children:["If you're only using basic presets like ",e.jsx(n.code,{children:"Fade"}),", ",e.jsx(n.code,{children:"Move"}),", ",e.jsx(n.code,{children:"Slide"}),", ",e.jsx(n.code,{children:"Stagger"}),", ",e.jsx(n.code,{children:"AnimateInteractions"}),", etc"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// features.js
import { domAnimation } from 'framer-motion';
export default domAnimation; // ~15kb
`})}),`
`,e.jsxs(n.h4,{id:"if-youre-using-morph-or-layout-animations-of-motion-react",children:["If you're using ",e.jsx(n.code,{children:"Morph"})," or Layout animations of Motion React"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// features.js
import { domMax } from 'framer-motion';
export default domMax; // ~25kb (This includes domAnimation bundle as well so no need to import domAnimation again)
`})}),`
`,e.jsx(n.h3,{id:"2-lazy-load-into-your-appjs",children:"2. Lazy load into your App.js"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { LazyMotion, m } from 'framer-motion';

// Make sure to return the specific export containing the feature bundle.
const loadFeatures = () => import('./features.js').then((res) => res.default);

function App() {
  return (
    // \`strict\` ensures that you only use \`m\` and not \`motion\` in your components
    // Blade presets always use \`m\` while animating
    <LazyMotion strict features={loadFeatures}>
      {/* The animations run when loadFeatures resolves. */}
      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
    </LazyMotion>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"3-go-ahead-and-enjoy-the-blade-motion-presets",children:"3. Go ahead and enjoy the Blade Motion Presets"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { Fade, Badge } from '@greenloom/ui/components';

function MyComponent() {
  return (
    <Fade>
      <Badge color="positive">Motion Approved</Badge>
    </Fade>
  );
}
`})}),`
`,e.jsxs(n.p,{children:["Checkout ",e.jsx(n.a,{href:"/?path=/docs/motion-fade--docs",children:"Motion - Fade Documentation"})," and get started"]})]})}function d(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{d as default};
