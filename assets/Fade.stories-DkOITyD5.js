import{j1 as t,j as e,B as o,T as l,ad as g,n as h,a9 as E,H as W,aM as M,aN as v,a5 as L,l as P,X as z,aI as G,i7 as _,i8 as U,aJ as N,C as b}from"./iframe-C1qQ09LF.js";import{I as O}from"./InternalCardExample-CQZjq6zS.js";import{s as X}from"./StoryRouter-CDfSoprG.js";import{S as Y}from"./StoryPageWrapper-CS0_5maI.js";import{S as A}from"./StepperRouterExample.web-BLXEDnkM.js";import{F as $}from"./codeExamples-BhJLat9R.js";const J=()=>e.jsxs(Y,{componentName:"Fade",componentDescription:"The Fade component is a motion preset that animates the opacity of its children, allowing them to smoothly appear or disappear. It ensures seamless transitions while keeping the UI visually engaging.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74864-85897&t=CvaYT53LNc4OYVKa-1&scaling=min-zoom&page-id=21689%3A381614&mode=design",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/rfcs/2024-08-21-motion-presets.md",children:[e.jsx(L,{marginY:"spacing.5",title:"Followed the Motion React Installation?",description:e.jsxs(l,{children:["Make sure you've followed the installation and setup of Motion React from our"," ",e.jsx(P,{href:"/?path=/docs/guides-installation--docs",children:"Installation Doc"})," (Step 3)"]}),isDismissible:!1,isFullWidth:!0}),e.jsx(z,{children:"Usage"}),e.jsx($,{})]}),K={title:"Motion/Fade",component:t,tags:["autodocs"],decorators:[X(void 0,{initialEntries:["/onboarding/introduction"]})],args:{motionTriggers:["mount"],type:"inout",shouldUnmountWhenHidden:!1},argTypes:{children:{table:{disable:!0}}},parameters:{docs:{page:J}}},Q=i=>{const[s,a]=g.useState(!0);return e.jsxs(o,{backgroundColor:"surface.background.gray.intense",padding:"spacing.8",borderRadius:"medium",borderWidth:"thin",borderColor:"surface.border.gray.muted",children:[e.jsx(h,{marginBottom:"spacing.4",onClick:()=>a(!s),children:"Toggle Fade"}),e.jsx(t,{...i,isVisible:i.isVisible??s})]})},r=Q.bind({});r.args={children:e.jsx(O,{})};const u=i=>{const[s,a]=g.useState(!0);return e.jsxs(o,{minHeight:"350px",children:[e.jsx(h,{marginBottom:"spacing.11",onClick:()=>a(!s),children:"Toggle Fade"}),e.jsxs(o,{display:"flex",alignItems:"flex-start",gap:"spacing.8",flexWrap:"wrap",backgroundColor:"surface.background.gray.intense",padding:"spacing.8",borderRadius:"medium",children:[e.jsx(t,{...i,isVisible:s,children:e.jsx(E,{label:"Input that fades"})}),e.jsx(t,{...i,isVisible:s,children:e.jsx(h,{children:"Button that fades"})}),e.jsx(t,{...i,isVisible:s,children:e.jsx(o,{backgroundColor:"surface.background.cloud.intense",padding:"spacing.4",children:e.jsx(l,{color:"surface.text.onCloud.onIntense",children:"Box that fades"})})}),e.jsx(t,{...i,isVisible:s,children:e.jsx(W,{children:"Heading that fades"})}),e.jsx(t,{...i,isVisible:s,children:e.jsx(M,{selectionType:"multiple",label:"ChipGroup that fades",children:["Public","Small Business","Large Organization"].map(n=>e.jsx(v,{value:n,children:n},n))})}),e.jsx(t,{...i,isVisible:s,children:e.jsx(l,{children:"Fade with custom components. Ensure you forward refs to your custom components"})})]})]})},d=i=>e.jsxs(o,{maxHeight:"400px",overflowX:"hidden",overflow:"auto",backgroundColor:"surface.background.gray.intense",padding:"spacing.8",borderRadius:"medium",borderWidth:"thin",borderColor:"surface.border.gray.muted",children:[e.jsx(o,{height:"500px",width:"100%",children:e.jsx(l,{children:"Scroll down"})}),e.jsx(t,{...i,children:e.jsx(O,{})})]});d.args={motionTriggers:["in-view"]};const x=[{title:"Introduction",timestamp:"Mon, 15th Oct’23 | 12:00pm",description:"Introduction to Green Loom Payment Gateway",href:"/onboarding/introduction"},{title:"Personal Details",timestamp:"Mon, 16th Oct’23 | 12:00pm",description:"Fill your Personal Details for onboarding",href:"/onboarding/personal-details"},{title:"Business Details",timestamp:"Mon, 17th Oct’23 | 12:00pm",description:"Fill your Business Details for onboarding",href:"/onboarding/business-details"},{title:"Complete Onboarding",timestamp:"Mon, 20th Oct’23 | 12:00pm",description:"Complete your onboarding to start",href:"/onboarding/complete-onboarding"}],Z=({match:i})=>{const s=x.findIndex(n=>{var c;return(c=n.href)==null?void 0:c.includes(i.params.id)}),a=x[s];return a?e.jsx(t,{children:e.jsxs(G,{width:"100%",children:[e.jsx(_,{children:e.jsx(U,{title:`${s+1}. ${a.title}`,subtitle:a.description})}),e.jsxs(N,{children:[e.jsx(b,{size:"medium",isHighlighted:!1,children:a.href??""}),e.jsxs(l,{marginTop:"spacing.4",children:["This is an example of ",e.jsx(b,{size:"medium",children:"Fade"})," component used for Page Transition."]})]})]})}):e.jsx(t,{children:e.jsx(l,{children:"Unknown Route"})})},p=()=>e.jsx(A,{stepsSampleData:x,routeComponent:Z}),m=i=>{const[s,a]=g.useState(!1),n=g.useRef(null);return g.useEffect(()=>{var c;s&&((c=n.current)==null||c.focus())},[s]),e.jsxs(o,{minHeight:"350px",children:[e.jsx(h,{marginBottom:"spacing.4",onClick:()=>a(!s),children:"Toggle Fade"}),e.jsx(t,{...i,isVisible:s,children:e.jsx(E,{ref:n,label:"My Text Input",helpText:`This is an example to showcase how you can continue to use ref like you normally do
            inside Fade as well`})})]})};var f,j,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [isVisible, setIsVisible] = React.useState(true);
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.8" borderRadius="medium" borderWidth="thin" borderColor="surface.border.gray.muted">
      <Button marginBottom="spacing.4" onClick={() => setIsVisible(!isVisible)}>
        Toggle Fade
      </Button>
      <Fade {...args} isVisible={args.isVisible ?? isVisible} />
    </Box>;
}`,...(y=(j=r.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var F,C,V;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`(args: typeof Fade): React.ReactElement => {
  const [isVisible, setIsVisible] = React.useState(true);
  return <Box minHeight="350px">
      <Button marginBottom="spacing.11" onClick={() => setIsVisible(!isVisible)}>
        Toggle Fade
      </Button>

      <Box display="flex" alignItems="flex-start" gap="spacing.8" flexWrap="wrap" backgroundColor="surface.background.gray.intense" padding="spacing.8" borderRadius="medium">
        <Fade {...args} isVisible={isVisible}>
          <TextInput label="Input that fades" />
        </Fade>

        <Fade {...args} isVisible={isVisible}>
          <Button>Button that fades</Button>
        </Fade>

        <Fade {...args} isVisible={isVisible}>
          <Box backgroundColor="surface.background.cloud.intense" padding="spacing.4">
            <Text color="surface.text.onCloud.onIntense">Box that fades</Text>
          </Box>
        </Fade>

        <Fade {...args} isVisible={isVisible}>
          <Heading>Heading that fades</Heading>
        </Fade>

        <Fade {...args} isVisible={isVisible}>
          <ChipGroup selectionType="multiple" label="ChipGroup that fades">
            {['Public', 'Small Business', 'Large Organization'].map((chipValue: string) => <Chip key={chipValue} value={chipValue}>
                {chipValue}
              </Chip>)}
          </ChipGroup>
        </Fade>

        <Fade {...args} isVisible={isVisible}>
          <Text>
            Fade with custom components. Ensure you forward refs to your custom components
          </Text>
        </Fade>
      </Box>
    </Box>;
}`,...(V=(C=u.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var B,R,T;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`(args: typeof Fade): React.ReactElement => {
  return <Box maxHeight="400px" overflowX="hidden" overflow="auto" backgroundColor="surface.background.gray.intense" padding="spacing.8" borderRadius="medium" borderWidth="thin" borderColor="surface.border.gray.muted">
      <Box height="500px" width="100%">
        <Text>Scroll down</Text>
      </Box>
      <Fade {...args}>
        <InternalCardExample />
      </Fade>
    </Box>;
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var I,w,k;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <StepperRouterExample stepsSampleData={stepsSampleData} routeComponent={OnboardingRoute} />;
}`,...(k=(w=p.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,D,H;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`(args: typeof Fade): React.ReactElement => {
  const [isVisible, setIsVisible] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (isVisible) {
      inputRef.current?.focus();
    }
  }, [isVisible]);
  return <Box minHeight="350px">
      <Button marginBottom="spacing.4" onClick={() => setIsVisible(!isVisible)}>
        Toggle Fade
      </Button>
      <Fade {...args} isVisible={isVisible}>
        <TextInput ref={inputRef} label="My Text Input" helpText="This is an example to showcase how you can continue to use ref like you normally do
            inside Fade as well" />
      </Fade>
    </Box>;
}`,...(H=(D=m.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};const q=["Default","WithDifferentComponents","FadeWhenInView","OnRouteChange","WithRef"],oe=Object.freeze(Object.defineProperty({__proto__:null,Default:r,FadeWhenInView:d,OnRouteChange:p,WithDifferentComponents:u,WithRef:m,__namedExportsOrder:q,default:K},Symbol.toStringTag,{value:"Module"}));export{r as D,oe as F};
