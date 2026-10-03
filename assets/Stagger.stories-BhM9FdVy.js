import{j0 as p,j as e,iQ as t,X as T,ad as W,B as E,n as F,T as P,aI as _,i7 as A,i8 as G,aJ as H,aM as U,aN as N,j1 as u,kr as m}from"./iframe-C1qQ09LF.js";import{I as r}from"./InternalCardExample-CQZjq6zS.js";import{s as $}from"./StoryRouter-CDfSoprG.js";import{S as z}from"./StoryPageWrapper-CS0_5maI.js";import{S as J}from"./StepperRouterExample.web-BLXEDnkM.js";import{b as L}from"./codeExamples-BhJLat9R.js";const Q=()=>e.jsxs(z,{componentName:"Stagger",componentDescription:"Stagger component allows you to stagger children (make them appear one after the other). Its a utility preset. You can use any of the base presets like Move, Fade, Slide inside of it",children:[e.jsx(T,{children:"Usage"}),e.jsx(L,{})]}),X={title:"Motion/Stagger",component:p,tags:["autodocs"],decorators:[$(void 0,{initialEntries:["/onboarding/introduction"]})],args:{motionTriggers:["mount"],type:"inout",shouldUnmountWhenHidden:!1},argTypes:{children:{table:{disable:!0}}},parameters:{docs:{page:Q}}},b=c=>{const[g,i]=W.useState(!0);return e.jsxs(E,{backgroundColor:"surface.background.gray.intense",padding:"spacing.8",borderRadius:"medium",borderWidth:"thin",borderColor:"surface.border.gray.muted",children:[e.jsx(F,{marginBottom:"spacing.4",onClick:()=>i(a=>!a),children:"Toggle Stagger"}),e.jsx(p,{...c,display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"spacing.4",isVisible:g,children:c.children})]})},n=b.bind({});n.args={children:e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsx(r,{})}),e.jsx(u,{children:e.jsx(r,{})}),e.jsx(u,{children:e.jsx(r,{})})]})};const s=b.bind({});s.args={children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsx(r,{})}),e.jsx(t,{children:e.jsx(r,{})}),e.jsx(t,{children:e.jsx(r,{})})]})};const o=b.bind({});o.args={children:e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsx(r,{})}),e.jsx(m,{children:e.jsx(r,{})}),e.jsx(m,{children:e.jsx(r,{})})]})};const l=()=>e.jsxs(p,{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"spacing.4",children:[e.jsx(t,{children:e.jsx(r,{})}),e.jsx(t,{children:e.jsx(r,{})}),e.jsx(t,{children:e.jsx(r,{})})]}),x=[{title:"Introduction",timestamp:"Mon, 15th Oct’23 | 12:00pm",description:"Introduction to Green Loom Payment Gateway",href:"/onboarding/introduction"},{title:"Personal Details",timestamp:"Mon, 16th Oct’23 | 12:00pm",description:"Fill your Personal Details for onboarding",href:"/onboarding/personal-details"},{title:"Business Details",timestamp:"Mon, 17th Oct’23 | 12:00pm",description:"Fill your Business Details for onboarding",href:"/onboarding/business-details"},{title:"Complete Onboarding",timestamp:"Mon, 20th Oct’23 | 12:00pm",description:"Complete your onboarding to start",href:"/onboarding/complete-onboarding"}],Y=({match:c})=>{const g=x.findIndex(a=>{var h;return(h=a.href)==null?void 0:h.includes(c.params.id)}),i=x[g];return i?e.jsxs(_,{width:"100%",children:[e.jsx(A,{children:e.jsx(G,{title:`${g+1}. ${i.title}`,subtitle:i.description})}),e.jsx(H,{children:e.jsx(U,{label:"Account Information",selectionType:"multiple",children:e.jsx(p,{type:"in",display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"spacing.3",children:["Business Type: Freelance","Account Status: Activated","Test Mode: Disabled","Primary Product: Banking"].map(a=>e.jsx(t,{children:e.jsx(N,{value:a.toLowerCase().replace(/ /g,"-"),children:a})},a))})})})]}):e.jsx(t,{children:e.jsx(P,{children:"Unknown Route"})})},d=()=>e.jsx(J,{stepsSampleData:x,routeComponent:Y});var f,j,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  // Drive visibility from local state only. Storybook controls often inject
  // \`args.isVisible === true\` (component default), which would lock the toggle
  // via \`args.isVisible ?? isVisible\` and make the button appear to do nothing.
  const [isVisible, setIsVisible] = React.useState(true);
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.8" borderRadius="medium" borderWidth="thin" borderColor="surface.border.gray.muted">
      <Button marginBottom="spacing.4" onClick={() => setIsVisible(prev => !prev)}>
        Toggle Stagger
      </Button>
      <Stagger {...args} display="flex" flexDirection="row" flexWrap="wrap" gap="spacing.4" isVisible={isVisible}>
        {args.children}
      </Stagger>
    </Box>;
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var y,v,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  // Drive visibility from local state only. Storybook controls often inject
  // \`args.isVisible === true\` (component default), which would lock the toggle
  // via \`args.isVisible ?? isVisible\` and make the button appear to do nothing.
  const [isVisible, setIsVisible] = React.useState(true);
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.8" borderRadius="medium" borderWidth="thin" borderColor="surface.border.gray.muted">
      <Button marginBottom="spacing.4" onClick={() => setIsVisible(prev => !prev)}>
        Toggle Stagger
      </Button>
      <Stagger {...args} display="flex" flexDirection="row" flexWrap="wrap" gap="spacing.4" isVisible={isVisible}>
        {args.children}
      </Stagger>
    </Box>;
}`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var k,V,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  // Drive visibility from local state only. Storybook controls often inject
  // \`args.isVisible === true\` (component default), which would lock the toggle
  // via \`args.isVisible ?? isVisible\` and make the button appear to do nothing.
  const [isVisible, setIsVisible] = React.useState(true);
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.8" borderRadius="medium" borderWidth="thin" borderColor="surface.border.gray.muted">
      <Button marginBottom="spacing.4" onClick={() => setIsVisible(prev => !prev)}>
        Toggle Stagger
      </Button>
      <Stagger {...args} display="flex" flexDirection="row" flexWrap="wrap" gap="spacing.4" isVisible={isVisible}>
        {args.children}
      </Stagger>
    </Box>;
}`,...(w=(V=o.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var D,B,M;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`(): React.ReactElement => {
  return <Stagger display="flex" flexDirection="row" flexWrap="wrap" gap="spacing.4">
      <Move>
        <InternalCardExample />
      </Move>
      <Move>
        <InternalCardExample />
      </Move>
      <Move>
        <InternalCardExample />
      </Move>
    </Stagger>;
}`,...(M=(B=l.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var I,R,O;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <StepperRouterExample stepsSampleData={stepsSampleData} routeComponent={OnboardingRoute} />;
}`,...(O=(R=d.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};const q=["Default","MoveStagger","SlideStagger","OnMount","OnRouteChange"],ne=Object.freeze(Object.defineProperty({__proto__:null,Default:n,MoveStagger:s,OnMount:l,OnRouteChange:d,SlideStagger:o,__namedExportsOrder:q,default:X},Symbol.toStringTag,{value:"Module"}));export{n as D,ne as S};
