import{j as e,H as s,T as o,B as a,C as h,ae as m,iV as x,iW as f,iX as j,iY as p,iZ as y,i_ as S,i$ as n,ib as w,jP as v,ak as b,M as T}from"./iframe-C1qQ09LF.js";import{useMDXComponents as P}from"./index-Au6382uh.js";import{B as C}from"./examples-BjCW8kDQ.js";import{S as R}from"./StoryPageWrapper-CS0_5maI.js";import{S as k}from"./ScrollLink-CHOtCgGV.js";import{S as u}from"./Sandbox.web-C7diOxlu.js";import{S as z}from"./Sandbox.web-B2xP21Qp.js";import"./preload-helper-Dp1pzeXC.js";import"./componentStatusData-8pChZ-5h.js";import"./baseCode-DnWYDQ6N.js";const D={nodes:[{id:"1",prop:"steps",type:"Step[]",typeLink:"#step-props",description:"Array of steps to be rendered, The order of the steps will be the order in which they are rendered depending on the activeStep prop",required:!0},{id:"2",prop:"isOpen",type:"boolean",description:"Whether the tour is open or not",required:!0,default:"false"},{id:"6",prop:"activeStep",type:"number",description:"Active step to be rendered",required:!0},{id:"3",prop:"onOpenChange",type:"({ isOpen: boolean }) => void",description:"Callback when the tour is opened or closed"},{id:"4",prop:"onFinish",type:"() => void",description:"Callback which fires when the stopTour method is called from the steps array"},{id:"5",prop:"onStepChange",type:"(step: number) => void",description:"Callback which fires when the step changes"},{id:"7",prop:"children",type:"React.ReactElement",description:""}]},d=e.jsx(u,{showLineNumbers:!1,wrapContent:!1,children:`
      type SpotlightPopoverStepRenderProps = {
        /**
         * Go to a specific step
         */
        goToStep: (step: number) => void;
        /**
         * Go to the next step
         */
        goToNext: () => void;
        /**
         * Go to the previous step
         */
        goToPrevious: () => void;
        /**
         * Stop the tour
         *
         * This will call the \`onFinish\` callback
         */
        stopTour: () => void;
        /**
         * Current active step (zero based index)
         */
        activeStep: number;
        /**
         * Total number of steps
         */
        totalSteps: number;
      };
    `}),L={nodes:[{id:"5",prop:"name",type:"string",description:"Unique identifier for the tour step",required:!0},{id:"3",prop:"content",type:"(props: SpotlightPopoverStepRenderProps) => React.ReactElement",typeHint:d,description:"Content of the Popover",required:!0},{id:"1",prop:"title",type:"string",description:"Popover Title"},{id:"2",prop:"titleLeading",type:"React.ReactNode",description:"Leading content placed before the title"},{id:"4",prop:"footer",type:"(props: SpotlightPopoverStepRenderProps) => React.ReactNode",typeHint:d,description:"Footer content"},{id:"6",prop:"placement",type:'"top" | "right" | "bottom" | "left" | "top-end" | "top-start" | "right-end" | "right-start" | "bottom-end" | "bottom-start" | "left-end" | "left-start"',description:"Placement of Popover",default:'"top"'}]},l=({data:r})=>e.jsx(x,{rowDensity:"comfortable",showStripedRows:!0,data:r,children:i=>e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsxs(j,{children:[e.jsx(p,{children:"prop"}),e.jsx(p,{children:"type"}),e.jsx(p,{children:"description"}),e.jsx(p,{children:"default"})]})}),e.jsx(y,{children:i.map((t,g)=>e.jsxs(S,{item:t,children:[e.jsx(n,{children:e.jsxs(o,{children:[t.prop," ",t.required&&e.jsx(o,{as:"span",color:"interactive.text.negative.subtle",children:"*"})]})}),e.jsx(n,{children:e.jsxs(a,{display:"flex",gap:"spacing.2",alignItems:"center",children:[t.typeHint?e.jsx(w,{content:t.typeHint,children:e.jsx(v,{children:e.jsx(b,{size:"medium"})})}):null,t.typeLink?e.jsx(k,{size:"medium",href:t.typeLink,children:t.type}):e.jsx(h,{size:"medium",children:t.type})]})}),e.jsx(n,{children:t.description||"-"}),e.jsx(n,{children:t.default||"-"})]},g))})]})}),B=()=>e.jsxs(R,{imports:"",showDefaultExample:!1,showArgsTable:!1,componentName:"SpotlightPopoverTour",componentDescription:"The SpotlightPopoverTour component is used to provide context as well as enable users to take certain actions on it. These are used to highlight a new feature or provide a guided tour to a new user.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74881-74360&t=q6TxgOuZDwBJDYwv-1&scaling=min-zoom&page-id=63871%3A12995&mode=design",children:[e.jsx(s,{size:"large",children:"Usage"}),e.jsx(z,{children:C}),e.jsx(s,{size:"large",children:"iOS Safari Specific Setup"}),e.jsx(o,{marginTop:"spacing.5",children:"When using BottomSheet or SpotlightPopoverTour, Make sure to set a width/height to the `body` otherwise when they open, the page will get clipped. This happens due to a bug in iOS safari where it won't compute the height of the body correctly."}),e.jsx(u,{showLineNumbers:!1,theme:"light",children:`
          body {
            width: 100%;
            height: 100%;
          }
        `}),e.jsx(s,{size:"large",children:"Examples"}),e.jsxs(o,{marginY:"spacing.5",children:["To see examples properly, switch to the"," ",e.jsx(o,{as:"span",weight:"semibold",children:"story view"})]}),e.jsx(s,{size:"large",children:"API"}),e.jsxs(a,{backgroundColor:"surface.background.gray.intense",overflow:m("auto"),minHeight:"400px",display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(a,{paddingBottom:"spacing.4",children:e.jsx(o,{size:"large",children:"SpotlightPopoverTour props"})}),e.jsx(l,{data:D}),e.jsxs(a,{paddingBottom:"spacing.4",id:"step-props",children:[e.jsx(o,{size:"large",children:"Step type"}),e.jsxs(o,{children:["Step type defines each step of the tour, and passed to the"," ",e.jsx(h,{size:"medium",children:"steps"})," prop in the SpotlightPopoverTour component."]})]}),e.jsx(l,{data:L})]})]});function c(r){return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Components/SpotlightPopoverTour"}),`
`,e.jsx(B,{})]})}function X(r={}){const{wrapper:i}={...P(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(c,{...r})}):c()}export{X as default};
