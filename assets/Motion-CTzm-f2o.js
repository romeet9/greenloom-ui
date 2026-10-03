import{t as c,P as a,j as e,u as l,kW as m,M as h,D as x,m as u,s as p}from"./iframe-C1qQ09LF.js";import{useMDXComponents as d}from"./index-Au6382uh.js";import"./preload-helper-Dp1pzeXC.js";const j=a.div`
  height: 40px;
  width: 40px;
  background-color: ${o=>o.theme.colors.surface.background.primary.subtle};
  border-radius: ${o=>c(o.theme.border.radius.medium)};
  animation: ${o=>`move 3s ${o.easing||"linear"}  infinite`};
  @keyframes move {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(80px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`,g=()=>{const{theme:o}=l();return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Delay (in milliseconds)"}),e.jsx("table",{children:e.jsx("tbody",{children:Object.entries(o.motion.delay).map(([n,s])=>e.jsxs("tr",{children:[e.jsx("td",{children:`theme.motion.delay.${n}`}),e.jsx("td",{children:s})]},n))})}),e.jsx("h3",{children:"Duration (in milliseconds)"}),e.jsx("table",{children:e.jsx("tbody",{children:Object.entries(o.motion.duration).map(([n,s])=>e.jsxs("tr",{children:[e.jsx("td",{children:`theme.motion.duration.${n}`}),e.jsx("td",{children:s})]},n))})}),e.jsx("h3",{children:"Easing"}),e.jsx("table",{children:e.jsx("tbody",{children:Object.entries(o.motion.easing).map(([n,s])=>e.jsxs("tr",{children:[e.jsx("td",{children:`theme.motion.easing.${n}`}),e.jsx("td",{children:s}),e.jsx("td",{style:{width:"150px"},children:e.jsx(j,{theme:o,easing:o.motion.easing[n]})})]},n))})})]})},f=()=>{const{theme:o}=l(),n=a.div`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    background-color: ${s=>s.theme.colors.surface.background.primary.subtle};
    animation: ${s=>`resize ${m(s.theme.motion.duration.xgentle)} ${s.theme.motion.easing.standard} infinite`};
    @keyframes resize {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
  `;return e.jsx(n,{theme:o,easing:o.motion.easing.standard})};function r(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Tokens/Motion",parameters:{docs:{container:({children:s,context:t})=>{const i=t.store.globals.globals.colorScheme;return e.jsx(x,{context:t,children:e.jsx(u,{themeTokens:p,colorScheme:i,children:s},i)})}}}}),`
`,e.jsx(n.h1,{id:"-motion-tokens",children:"🎬 Motion Tokens"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["These tokens should be used along with the ",e.jsx(n.a,{href:"?path=/story/utils-makemotiontime--docs",children:"makeMotionTime util"}),"."]}),`
`]}),`
`,`
`,`
`,e.jsx(g,{}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example Usage"}),`
`,e.jsxs(n.p,{children:["If we want to create a circle that scales up and down with a ",e.jsx(n.strong,{children:"duration"})," of ",e.jsx(n.code,{children:"xgentle"})," and an ",e.jsx(n.strong,{children:"easing"})," of ",e.jsx(n.code,{children:"standard.effective"})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Ensure you've followed all the steps under ",e.jsx(n.a,{href:"https://ui.greenloom.ai/?path=/docs/guides-how-to-use--docs",rel:"nofollow",children:'"Guides/Usage"'})," to setup your theme with ",e.jsx(n.code,{children:"<BladeProvider>"})]}),`
`,e.jsxs(n.li,{children:["Your theme tokens will be automatically available to ",e.jsx(n.code,{children:"styled-components"})," as a ",e.jsx(n.code,{children:"theme"})," prop"]}),`
`,e.jsxs(n.li,{children:["Create a component using ",e.jsx(n.code,{children:"styled-components"})," that looks like this:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import styled from 'styled-components';
import { makeMotionTime } from '@greenloom/ui/utils';

const ExampleDiv = styled.div\`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: \${(props) =>
    console.log('from example div', props.theme) ||
    props.theme.colors.surface.background.primary.subtle};
  animation: \${(props) =>
    \`resize \${makeMotionTime(props.theme.motion.duration.xgentle)} \${
      props.theme.motion.easing.standard
    } infinite\`};
  @keyframes resize {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
\`;
`})}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsxs(n.li,{children:["You can also access your motion tokens using the ",e.jsx(n.code,{children:"useTheme"})," hook"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useTheme } from '@greenloom/ui/components';
import { makeMotionTime } from '@greenloom/ui/utils';

const CustomComponent = () => {
  const { theme } = useTheme();
  const easing = theme.motion.easing.standard;
  const duration = makeMotionTime(theme.motion.duration.xgentle);
  const delay = makeMotionTime(theme.motion.delay.short);

  return (
    ...
  );
};
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: ",e.jsx(n.code,{children:"makeMotionTime"})," is a helper function that converts ",e.jsx(n.code,{children:"duration"})," & ",e.jsx(n.code,{children:"delay"})," to a platform specific unit for web & native. You should always use this helper function while consuming ",e.jsx(n.code,{children:"duration"})," & ",e.jsx(n.code,{children:"delay"})," tokens"]}),`
`]}),`
`,e.jsx(n.h3,{id:"output",children:"Output:"}),`
`,e.jsx("br",{}),`
`,e.jsx(f,{})]})}function M(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{g as Motion,f as MotionExample,M as default};
