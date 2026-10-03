import{kr as t,j as e,B as r,T as h,ad as g,n as b,a9 as L,H as G,aM as _,aN as U,X as N,aI as X,i7 as F,i8 as Y,aJ as $,C as f}from"./iframe-C1qQ09LF.js";import{I as P}from"./InternalCardExample-CQZjq6zS.js";import{s as A}from"./StoryRouter-CDfSoprG.js";import{S as J}from"./StoryPageWrapper-CS0_5maI.js";import{S as K}from"./StepperRouterExample.web-BLXEDnkM.js";import{S as Q}from"./codeExamples-BhJLat9R.js";const Z=()=>e.jsxs(J,{componentName:"Slide",componentDescription:"The Slide component is a motion preset that animates the children by sliding them in from outside of viewport, allowing them to smoothly appear or disappear. Unlike Move, Slide is meant to animate components from outside of viewport",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74864-85897&t=CvaYT53LNc4OYVKa-1&scaling=min-zoom&page-id=21689%3A381614&mode=design",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/rfcs/2024-08-21-motion-presets.md",children:[e.jsx(N,{children:"Usage"}),e.jsx(Q,{})]}),q={title:"Motion/Slide",component:t,tags:["autodocs"],decorators:[A(void 0,{initialEntries:["/onboarding/introduction"]})],args:{motionTriggers:["mount"],type:"inout",shouldUnmountWhenHidden:!1,direction:"bottom"},argTypes:{children:{table:{disable:!0}}},parameters:{docs:{page:Z}}},z=s=>{const[i,o]=g.useState(!0);return e.jsxs(r,{backgroundColor:"surface.background.gray.intense",padding:"spacing.8",borderRadius:"medium",borderWidth:"thin",borderColor:"surface.border.gray.muted",children:[e.jsx(b,{marginBottom:"spacing.4",onClick:()=>o(!i),children:"Toggle Slide"}),e.jsx(t,{...s,isVisible:i,children:e.jsx(P,{})})]})},a=z.bind({});a.args={direction:"bottom"};const l=z.bind({});l.args={direction:{enter:"right",exit:"bottom"}};const p=s=>{const[i,o]=g.useState(!0);return e.jsxs(r,{minHeight:"350px",children:[e.jsx(b,{marginBottom:"spacing.11",onClick:()=>o(!i),children:"Toggle Slide"}),e.jsxs(r,{display:"flex",alignItems:"flex-start",gap:"spacing.8",flexWrap:"wrap",backgroundColor:"surface.background.gray.intense",padding:"spacing.8",borderRadius:"medium",children:[e.jsx(t,{...s,isVisible:i,children:e.jsx(L,{label:"Input that slides"})}),e.jsx(t,{...s,isVisible:i,children:e.jsx(b,{children:"Button that slides"})}),e.jsx(t,{...s,isVisible:i,children:e.jsx(r,{backgroundColor:"surface.background.cloud.intense",padding:"spacing.4",children:e.jsx(h,{color:"surface.text.onCloud.onIntense",children:"Box that slides"})})}),e.jsx(t,{...s,isVisible:i,children:e.jsx(G,{children:"Heading that slides"})}),e.jsx(t,{...s,isVisible:i,children:e.jsx(_,{selectionType:"multiple",label:"ChipGroup that slides",children:["Public","Small Business","Large Organization"].map(n=>e.jsx(U,{value:n,children:n},n))})}),e.jsx(t,{...s,isVisible:i,children:e.jsx(h,{children:"Slide with custom components. Ensure you forward refs to your custom components"})})]})]})},d=s=>e.jsxs(r,{maxHeight:"400px",overflowX:"hidden",overflow:"auto",backgroundColor:"surface.background.gray.intense",padding:"spacing.8",borderRadius:"medium",borderWidth:"thin",borderColor:"surface.border.gray.muted",children:[e.jsx(r,{height:"500px",width:"100%",children:e.jsx(h,{children:"Scroll down"})}),e.jsx(t,{...s,children:e.jsx(P,{})})]});d.args={motionTriggers:["in-view"],direction:"right"};const x=[{title:"Introduction",timestamp:"Mon, 15th Oct’23 | 12:00pm",description:"Introduction to Green Loom Payment Gateway",href:"/onboarding/introduction"},{title:"Personal Details",timestamp:"Mon, 16th Oct’23 | 12:00pm",description:"Fill your Personal Details for onboarding",href:"/onboarding/personal-details"},{title:"Business Details",timestamp:"Mon, 17th Oct’23 | 12:00pm",description:"Fill your Business Details for onboarding",href:"/onboarding/business-details"},{title:"Complete Onboarding",timestamp:"Mon, 20th Oct’23 | 12:00pm",description:"Complete your onboarding to start",href:"/onboarding/complete-onboarding"}],ee=({match:s})=>{const i=x.findIndex(n=>{var u;return(u=n.href)==null?void 0:u.includes(s.params.id)}),o=x[i];return o?e.jsx(t,{direction:{enter:"bottom",exit:"top"},fromOffset:"100vh",children:e.jsxs(X,{width:"100%",height:"100%",children:[e.jsx(F,{children:e.jsx(Y,{title:`${i+1}. ${o.title}`,subtitle:o.description})}),e.jsxs($,{children:[e.jsx(f,{size:"medium",isHighlighted:!1,children:o.href??""}),e.jsxs(h,{marginTop:"spacing.4",children:["This is an example of ",e.jsx(f,{size:"medium",children:"Slide"})," component used for Page Transition."]})]})]})}):e.jsx(t,{children:e.jsx(h,{children:"Unknown Route"})})},c=()=>e.jsx(K,{stepsSampleData:x,routeComponent:ee});c.args={direction:{enter:"bottom",exit:"top"}};const m=s=>{const[i,o]=g.useState(!1),n=g.useRef(null);return g.useEffect(()=>{var u;i&&((u=n.current)==null||u.focus())},[i]),e.jsxs(r,{minHeight:"350px",children:[e.jsx(b,{marginBottom:"spacing.4",onClick:()=>o(!i),children:"Toggle Slide"}),e.jsx(t,{...s,isVisible:i,children:e.jsx(L,{ref:n,label:"My Text Input",helpText:`This is an example to showcase how you can continue to use ref like you normally do
            inside Slide as well`})})]})};var S,C,j;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [isVisible, setIsVisible] = React.useState(true);
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.8" borderRadius="medium" borderWidth="thin" borderColor="surface.border.gray.muted">
      <Button marginBottom="spacing.4" onClick={() => setIsVisible(!isVisible)}>
        Toggle Slide
      </Button>
      <Slide {...args} isVisible={isVisible}>
        <InternalCardExample />
      </Slide>
    </Box>;
}`,...(j=(C=a.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var y,V,B;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [isVisible, setIsVisible] = React.useState(true);
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.8" borderRadius="medium" borderWidth="thin" borderColor="surface.border.gray.muted">
      <Button marginBottom="spacing.4" onClick={() => setIsVisible(!isVisible)}>
        Toggle Slide
      </Button>
      <Slide {...args} isVisible={isVisible}>
        <InternalCardExample />
      </Slide>
    </Box>;
}`,...(B=(V=l.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var R,T,I;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`(args: typeof Slide): React.ReactElement => {
  const [isVisible, setIsVisible] = React.useState(true);
  return <Box minHeight="350px">
      <Button marginBottom="spacing.11" onClick={() => setIsVisible(!isVisible)}>
        Toggle Slide
      </Button>

      <Box display="flex" alignItems="flex-start" gap="spacing.8" flexWrap="wrap" backgroundColor="surface.background.gray.intense" padding="spacing.8" borderRadius="medium">
        <Slide {...args} isVisible={isVisible}>
          <TextInput label="Input that slides" />
        </Slide>

        <Slide {...args} isVisible={isVisible}>
          <Button>Button that slides</Button>
        </Slide>

        <Slide {...args} isVisible={isVisible}>
          <Box backgroundColor="surface.background.cloud.intense" padding="spacing.4">
            <Text color="surface.text.onCloud.onIntense">Box that slides</Text>
          </Box>
        </Slide>

        <Slide {...args} isVisible={isVisible}>
          <Heading>Heading that slides</Heading>
        </Slide>

        <Slide {...args} isVisible={isVisible}>
          <ChipGroup selectionType="multiple" label="ChipGroup that slides">
            {['Public', 'Small Business', 'Large Organization'].map((chipValue: string) => <Chip key={chipValue} value={chipValue}>
                {chipValue}
              </Chip>)}
          </ChipGroup>
        </Slide>

        <Slide {...args} isVisible={isVisible}>
          <Text>
            Slide with custom components. Ensure you forward refs to your custom components
          </Text>
        </Slide>
      </Box>
    </Box>;
}`,...(I=(T=p.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var k,w,D;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`(args: typeof Slide): React.ReactElement => {
  return <Box maxHeight="400px" overflowX="hidden" overflow="auto" backgroundColor="surface.background.gray.intense" padding="spacing.8" borderRadius="medium" borderWidth="thin" borderColor="surface.border.gray.muted">
      <Box height="500px" width="100%">
        <Text>Scroll down</Text>
      </Box>
      <Slide {...args}>
        <InternalCardExample />
      </Slide>
    </Box>;
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var E,W,H;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`(): React.ReactElement => {
  return <StepperRouterExample stepsSampleData={stepsSampleData} routeComponent={OnboardingRoute} />;
}`,...(H=(W=c.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var O,v,M;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`(args: typeof Slide): React.ReactElement => {
  const [isVisible, setIsVisible] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (isVisible) {
      inputRef.current?.focus();
    }
  }, [isVisible]);
  return <Box minHeight="350px">
      <Button marginBottom="spacing.4" onClick={() => setIsVisible(!isVisible)}>
        Toggle Slide
      </Button>
      <Slide {...args} isVisible={isVisible}>
        <TextInput ref={inputRef} label="My Text Input" helpText="This is an example to showcase how you can continue to use ref like you normally do
            inside Slide as well" />
      </Slide>
    </Box>;
}`,...(M=(v=m.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};const ie=["Default","WithDifferentDirections","WithDifferentComponents","SlideWhenInView","OnRouteChange","WithRef"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:a,OnRouteChange:c,SlideWhenInView:d,WithDifferentComponents:p,WithDifferentDirections:l,WithRef:m,__namedExportsOrder:ie,default:q},Symbol.toStringTag,{value:"Module"}));export{le as S,l as W};
