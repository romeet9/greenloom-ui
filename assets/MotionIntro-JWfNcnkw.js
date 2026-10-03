import{ad as p,j as e,B as n,H as t,j1 as f,iQ as x,kr as w,kt as M,kz as S,lb as y,j0 as I,ks as B,T as r,n as k,l as T,lg as l,M as D,bc as A,a5 as R,A as z,i as E,a0 as F,a1 as V,aK as H}from"./iframe-C1qQ09LF.js";import{useMDXComponents as C}from"./index-Au6382uh.js";import{Motion as P}from"./Motion-CTzm-f2o.js";import W from"./MotionInstallation-BQ9edIWF.js";import{S as c}from"./Sandbox.web-C7diOxlu.js";import{F as $,D as L}from"./Fade.stories-DkOITyD5.js";import{M as U,D as Y}from"./Move.stories-DR1Z-vKK.js";import{S as X,W as G}from"./Slide.stories-QdKfhybc.js";import{S as O,D as _}from"./Scale.stories-Bzj1tx5w.js";import{E as q,D as K}from"./Elevate.stories-BPbomNA1.js";import{M as N,D as Q}from"./Morph.stories-AckrbLkF.js";import{S as J,D as Z}from"./Stagger.stories-BhM9FdVy.js";import{A as ee,a as ne}from"./AnimateInteractions.stories-Bd1mEqZk.js";import"./preload-helper-Dp1pzeXC.js";import"./baseCode-DnWYDQ6N.js";import"./InternalCardExample-CQZjq6zS.js";import"./StoryRouter-CDfSoprG.js";import"./react-router-CrS3lpF2.js";import"./StoryPageWrapper-CS0_5maI.js";import"./componentStatusData-8pChZ-5h.js";import"./StepperRouterExample.web-BLXEDnkM.js";import"./codeExamples-BhJLat9R.js";import"./Sandbox.web-B2xP21Qp.js";const a=({children:o})=>e.jsx(n,{borderWidth:"thin",borderColor:"surface.border.gray.normal",borderRadius:"medium",height:"200px",minWidth:"200px",backgroundColor:"surface.background.gray.intense",padding:"spacing.8",overflow:"hidden",children:o}),s=p.forwardRef(({name:o,borderRadius:i},h)=>e.jsx(n,{ref:h,backgroundColor:"surface.background.gray.intense",elevation:"none",height:"100%",width:"100%",borderColor:"surface.border.gray.muted",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:i,children:o&&e.jsx(r,{weight:"medium",size:"large",children:o},"morph-text")})),d=({children:o,name:i})=>{const h=i.toLowerCase();return e.jsxs(n,{textAlign:"center",children:[o,e.jsx(T,{href:`/?path=/docs/motion-introduction-to-motion--docs#${h}`,onClick:()=>{var m;(m=document.querySelector(`#${h}`))==null||m.scrollIntoView({behavior:"smooth"})},marginTop:"spacing.2",size:"large",children:i})]})},ie=()=>{const[o,i]=p.useState(!0),[h,m]=p.useState(!1),g=p.useRef(null),j=()=>{g.current&&clearInterval(g.current),m(!1)},u=()=>{m(!0),g.current=setInterval(()=>{i(b=>!b)},2e3)};return p.useEffect(()=>(u(),()=>{j()}),[]),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.6",children:[e.jsxs(n,{children:[e.jsx(t,{size:"large",marginY:"spacing.4",children:"Entry / Exit Presets"}),e.jsxs(n,{display:"flex",gap:"spacing.6",children:[e.jsx(d,{name:"Fade",children:e.jsx(a,{children:e.jsx(f,{isVisible:o,children:e.jsx(s,{name:"Fade"})})})}),e.jsx(d,{name:"Move",children:e.jsx(a,{children:e.jsx(x,{isVisible:o,children:e.jsx(s,{name:"Move"})})})}),e.jsx(d,{name:"Slide",children:e.jsx(a,{children:e.jsx(w,{isVisible:o,direction:"right",fromOffset:"100%",children:e.jsx(s,{name:"Slide"})})})})]})]}),e.jsxs(n,{children:[e.jsx(t,{size:"large",marginY:"spacing.4",children:"Highlight Presets"}),e.jsxs(n,{display:"flex",gap:"spacing.6",children:[e.jsx(d,{name:"Scale",children:e.jsx(a,{children:e.jsx(M,{isHighlighted:o,children:e.jsx(s,{name:"Scale"})})})}),e.jsx(d,{name:"Elevate",children:e.jsx(a,{children:e.jsx(S,{isHighlighted:o,children:e.jsx(s,{name:"Elevate"})})})}),e.jsx(d,{name:"Morph",children:e.jsx(a,{children:o?e.jsx(y,{layoutId:"morph-border-radius",children:e.jsx(s,{name:"Morph"})}):e.jsx(y,{layoutId:"morph-border-radius",children:e.jsx(s,{name:"Morph",borderRadius:"round"})})})})]})]}),e.jsxs(n,{children:[e.jsx(t,{size:"large",marginY:"spacing.4",children:"Utility Presets"}),e.jsxs(n,{display:"flex",gap:"spacing.6",children:[e.jsx(d,{name:"Stagger",children:e.jsx(a,{children:e.jsx(I,{isVisible:o,children:e.jsxs(n,{display:"flex",gap:"spacing.4",flexDirection:"column",flexWrap:"wrap",children:[e.jsx(x,{children:e.jsx(s,{name:"Stagger"})}),e.jsx(x,{children:e.jsx(s,{name:"Stagger"})}),e.jsx(x,{children:e.jsx(s,{name:"Stagger"})})]})})})}),e.jsx(d,{name:"AnimateInteractions",children:e.jsx(a,{children:e.jsx(B,{motionTriggers:["hover","focus"],children:e.jsxs(n,{backgroundColor:"surface.background.gray.intense",elevation:"none",height:"100%",width:"100%",borderColor:"surface.border.gray.muted",padding:"spacing.4",position:"relative",textAlign:"center",children:[e.jsx(r,{display:"inline-block",weight:"medium",size:"large",children:"AnimateInteractions"}),e.jsx(r,{variant:"caption",children:"(hover this box)"}),e.jsx(f,{motionTriggers:["on-animate-interactions"],children:e.jsx(n,{position:"absolute",bottom:"spacing.0",elevation:"lowRaised",backgroundColor:"surface.background.cloud.subtle",left:"spacing.0",width:"100%",padding:["spacing.2","spacing.6"],borderTopColor:"surface.border.primary.muted",children:e.jsx(r,{color:"surface.text.onCloud.onSubtle",children:"I appear when parent is hovered"})})})]})})})})]})]}),e.jsx(n,{children:e.jsxs(k,{marginTop:"spacing.4",variant:"tertiary",onClick:()=>{h?j():u()},children:[h?"Stop":"Start"," Animations"]})})]})},oe=()=>e.jsxs(n,{display:"flex",gap:"spacing.10",alignItems:"center",justifyContent:"space-between",children:[e.jsx(n,{flex:"1",padding:"spacing.4",elevation:"lowRaised",borderRadius:"medium",width:"100%",children:e.jsx(c,{children:`import { 
        Fade, 
        Card, 
        CardBody 
      } from '@greenloom/loom/components';


      <Fade>
        <Card>
          <CardBody>Card that animates</CardBody>
        </Card>
      </Fade>
      `})}),e.jsx(n,{flex:"1",children:e.jsx(l,{of:L,meta:$})})]}),te=()=>e.jsxs(n,{display:"flex",gap:"spacing.10",alignItems:"center",justifyContent:"space-between",children:[e.jsx(n,{flex:"1",padding:"spacing.4",elevation:"lowRaised",borderRadius:"medium",width:"100%",children:e.jsx(c,{children:`import { 
        Move, 
        Card, 
        CardBody 
      } from '@greenloom/loom/components';


      <Move>
        <Card>
          <CardBody>Card that animates</CardBody>
        </Card>
      </Move>
      `})}),e.jsx(n,{flex:"1",children:e.jsx(l,{of:Y,meta:U})})]}),re=()=>e.jsxs(n,{display:"flex",gap:"spacing.10",alignItems:"center",justifyContent:"space-between",children:[e.jsx(n,{flex:"1",padding:"spacing.4",elevation:"lowRaised",borderRadius:"medium",width:"100%",children:e.jsx(c,{children:`import { 
        Slide, 
        Card, 
        CardBody 
      } from '@greenloom/loom/components';


      <Slide direction={{ enter: 'right', exit: 'bottom' }}>
        <Card>
          <CardBody>Card that animates</CardBody>
        </Card>
      </Slide>
      `})}),e.jsx(n,{flex:"1",children:e.jsx(l,{of:G,meta:X})})]}),se=()=>e.jsxs(n,{display:"flex",gap:"spacing.10",alignItems:"center",justifyContent:"space-between",children:[e.jsx(n,{flex:"1",padding:"spacing.4",elevation:"lowRaised",borderRadius:"medium",width:"100%",children:e.jsx(c,{children:`import { 
        Scale, 
      } from '@greenloom/loom/components';


      <Scale motionTriggers={['hover']}>
        <img src="" alt="" />
      </Scale>
      `})}),e.jsx(n,{flex:"1",children:e.jsx(l,{of:_,meta:O})})]}),ae=()=>e.jsxs(n,{display:"flex",gap:"spacing.10",alignItems:"center",justifyContent:"space-between",children:[e.jsx(n,{flex:"1",padding:"spacing.4",elevation:"lowRaised",borderRadius:"medium",width:"100%",children:e.jsx(c,{children:`import { 
        Elevate, 
      } from '@greenloom/loom/components';


      <Elevate motionTriggers={['hover']}>
        <Card>
          <CardBody>Card that drops shadow on hover</CardBody>
        </Card>
      </Elevate>
      `})}),e.jsx(n,{flex:"1",children:e.jsx(l,{of:K,meta:q})})]}),de=()=>e.jsxs(n,{display:"flex",gap:"spacing.10",alignItems:"center",justifyContent:"space-between",children:[e.jsx(n,{flex:"1",padding:"spacing.4",elevation:"lowRaised",borderRadius:"medium",width:"100%",children:e.jsx(c,{children:`import { 
        Morph,
        Button,
        TextInput 
      } from '@greenloom/loom/components';
      import { AnimatePresence } from 'framer-motion';

      <AnimatePresence>
      {
          isButton
          ? (
            <Morph layoutId="input-button-morph">
              <Button>Click to Enter</Button>
            </Morph>
          )
          : (
            <Morph layoutId="input-button-morph">
              <TextInput />
            </Morph>
          )
      }
      </AnimatePresence>
      `})}),e.jsx(n,{flex:"1",children:e.jsx(l,{of:Q,meta:N})})]}),le=()=>e.jsxs(n,{display:"flex",gap:"spacing.4",alignItems:"center",flexDirection:"column-reverse",justifyContent:"space-between",children:[e.jsx(n,{padding:"spacing.4",elevation:"lowRaised",borderRadius:"medium",width:"100%",children:e.jsx(c,{children:`import { 
        Stagger,
        Move, 
        Card, 
        CardBody 
      } from '@greenloom/loom/components';


      <Stagger>
        <Move><Card /></Move>
        <Move><Card /></Move>
        <Move><Card /></Move>
      </Stagger
      `})}),e.jsx(n,{maxWidth:"100%",children:e.jsx(l,{of:Z,meta:J})})]}),ce=()=>e.jsxs(n,{display:"flex",gap:"spacing.10",alignItems:"center",justifyContent:"space-between",children:[e.jsx(n,{flex:"1",padding:"spacing.4",elevation:"lowRaised",borderRadius:"medium",width:"100%",children:e.jsx(c,{children:`import { 
        AnimateInteractions,
        Move, 
        Card, 
        CardBody,
        Box,
        Button
      } from '@greenloom/loom/components';


      <AnimateInteractions motionTrigggers={['hover']}>
        <Card>
          <CardBody>
            <Text>Card text</Text>
            <Move motionTriggers={['on-animate-interactions']}>
              <Box>
                <Button>Submit</Button>
              </Box>
            </Move>
          </CardBody>
        </Card>
      </AnimateInteractions>
      `})}),e.jsx(n,{flex:"1",children:e.jsx(l,{of:ne,meta:ee})})]});function v(o){const i={a:"a",code:"code",p:"p",...C(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Motion/Introduction to Motion"}),`
`,e.jsx(x,{children:e.jsxs(n,{children:[e.jsx(A,{children:"Introduction to Motion Presets at Green Loom"}),e.jsx(i.p,{children:e.jsx(i.a,{href:"https://github.com/razorpay/blade/blob/master/rfcs/2024-08-21-motion-presets.md",rel:"nofollow",children:"Motion Presets RFC"})}),e.jsx(i.p,{children:"We offer several easy-to-use motion presets to simplify integrating motion in your projects. This doc is one-stop documentation for everything related to motion presets. Checkout stories of individual motion components from storybook's sidebar to learn in details about each preset."}),e.jsx(ie,{}),e.jsx(n,{marginTop:"spacing.8",marginBottom:"spacing.5",children:e.jsx(t,{size:"2xlarge",children:"Motion React Installation and Setup 📚"})}),e.jsx(R,{title:"Note",description:"If you've followed Step 3 from our Installation Guide and already have Motion React setup, you can skip this-",isFullWidth:!0,isDismissible:!1,marginBottom:"spacing.5"}),e.jsx(z,{maxWidth:"100%",variant:"filled",marginBottom:"spacing.8",children:e.jsxs(E,{children:[e.jsx(F,{title:"Setting Up Motion React"}),e.jsx(V,{children:e.jsx(W,{})})]})}),e.jsx(n,{marginTop:"spacing.11",marginBottom:"spacing.8",children:e.jsx(t,{size:"2xlarge",children:"Motion Preset Components ✨"})}),e.jsxs(n,{id:"fade",children:[e.jsx(t,{size:"large",children:"1. Fade"}),e.jsx(r,{marginTop:"spacing.1",children:e.jsx(i.p,{children:"The Fade component is a motion preset that animates the opacity of its children, allowing them to smoothly appear or disappear. It ensures seamless transitions while keeping the UI visually engaging."})}),e.jsx(oe,{}),e.jsx("p",{align:"right",children:e.jsx(i.a,{href:"/?path=/docs/motion-fade--docs",children:"View Fade Documentation"})})]}),e.jsxs(n,{id:"move",children:[e.jsx(t,{size:"large",children:"2. Move"}),e.jsx(r,{marginTop:"spacing.1",children:e.jsx(i.p,{children:`The Move component is a motion preset that animates the opacity and position of its children,
allowing them to smoothly appear or disappear. It ensures seamless transitions while keeping the
UI visually engaging.`})}),e.jsx(te,{}),e.jsx("p",{align:"right",children:e.jsx(i.a,{href:"/?path=/docs/motion-move--docs",children:"View Move Documentation"})})]}),e.jsxs(n,{id:"move",children:[e.jsx(t,{size:"large",children:"3. Slide"}),e.jsx(r,{marginTop:"spacing.1",children:e.jsx(i.p,{children:`The Slide component is a motion preset that animates the children by sliding them in from
outside of viewport, allowing them to smoothly appear or disappear. Unlike Move, Slide is meant
to animate components from outside of viewport`})}),e.jsx(re,{}),e.jsx("p",{align:"right",children:e.jsx(i.a,{href:"/?path=/docs/motion-slide--docs",children:"View Slide Documentation"})})]}),e.jsxs(n,{id:"scale",children:[e.jsx(t,{size:"large",children:"4. Scale"}),e.jsx(r,{marginTop:"spacing.1",children:e.jsxs(i.p,{children:["Scale component animates over CSS ",e.jsx(i.code,{children:"scale"}),` property and allows you to enlarge or shrink element
on certain interactions`]})}),e.jsx(se,{}),e.jsx("p",{align:"right",children:e.jsx(i.a,{href:"/?path=/docs/motion-scale--docs",children:"View Scale Documentation"})})]}),e.jsxs(n,{id:"elevate",children:[e.jsx(t,{size:"large",children:"5. Elevate"}),e.jsx(r,{marginTop:"spacing.1",children:e.jsxs(i.p,{children:["Elevate component animates over CSS ",e.jsx(i.code,{children:"box-shadow"}),` property and allows you to highlight components
by adding shadows to it`]})}),e.jsx(ae,{}),e.jsx("p",{align:"right",children:e.jsx(i.a,{href:"/?path=/docs/motion-elevate--docs",children:"View Elevate Documentation"})})]}),e.jsxs(n,{id:"morph",children:[e.jsx(t,{size:"large",children:"6. Morph"}),e.jsx(r,{marginTop:"spacing.1",children:e.jsx(i.p,{children:`Morph component is a abstraction on motion react's layout animations. It allows you to morph
between 2 elements`})}),e.jsx(de,{}),e.jsx("p",{align:"right",children:e.jsx(i.a,{href:"/?path=/docs/motion-morph--docs",children:"View Morph Documentation"})})]}),e.jsxs(n,{id:"animateinteractions",children:[e.jsx(t,{size:"large",children:"7. AnimateInteractions"}),e.jsx(r,{marginTop:"spacing.1",children:e.jsxs(i.p,{children:[`AnimateInteractions is a component that allows you to animate child components based on
interactions on parent. This is similar to doing `,e.jsx(i.code,{children:".parent:hover .child {}"})," styling in CSS."]})}),e.jsx(ce,{}),e.jsx("p",{align:"right",children:e.jsx(i.p,{children:e.jsx(i.a,{href:"/?path=/docs/motion-animateinteractions--docs",children:"View AnimateInterations Documentation"})})})]}),e.jsxs(n,{id:"stagger",children:[e.jsx(t,{size:"large",children:"8. Stagger"}),e.jsx(r,{marginTop:"spacing.1",children:e.jsx(i.p,{children:`Stagger component allows you to stagger children (make them appear one after the other). Its a
utility preset. You can use any of the base presets like Move, Fade, Slide inside of it`})}),e.jsx(le,{}),e.jsx("p",{align:"right",children:e.jsx(i.a,{href:"/?path=/docs/motion-stagger--docs",children:"View Stagger Documentation"})})]}),e.jsx(n,{marginTop:"spacing.11",marginBottom:"spacing.8",children:e.jsx(t,{size:"2xlarge",children:"Motion Tokens 🏗️"})}),e.jsx(P,{}),e.jsxs(i.p,{children:["Checkout ",e.jsx(i.a,{href:"/?path=/docs/tokens-motion--docs",children:"Tokens - Motion"})," for full documentation on motion tokens"]}),e.jsx(H,{}),e.jsxs(i.p,{children:["You can learn more about each preset by checking individual documentation from storybook's sidebar. Green Loom employees can reach out to us on #design-system channel for any help. Checkout ",e.jsx(i.a,{href:"/?path=/story/motion-recipes",children:"Recipes"})," for more usecase level examples of motion."]})]})})]})}function Ee(o={}){const{wrapper:i}={...C(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(v,{...o})}):v(o)}export{Ee as default};
