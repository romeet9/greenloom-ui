import{iQ as t,j as e,B as r,T as g,ad as m,n as h,a9 as H,H as O,aM as W,aN as L,X as P,aI as z,i7 as G,i8 as _,aJ as U,C as b}from"./iframe-C1qQ09LF.js";import{I as E}from"./InternalCardExample-CQZjq6zS.js";import{s as N}from"./StoryRouter-CDfSoprG.js";import{S as X}from"./StoryPageWrapper-CS0_5maI.js";import{S as F}from"./StepperRouterExample.web-BLXEDnkM.js";import{M as Q}from"./codeExamples-BhJLat9R.js";const Y=()=>e.jsxs(X,{componentName:"Move",componentDescription:" The Move component is a motion preset that animates the opacity and position of its children, allowing them to smoothly appear or disappear. It ensures seamless transitions while keeping the UI visually engaging.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74864-85897&t=CvaYT53LNc4OYVKa-1&scaling=min-zoom&page-id=21689%3A381614&mode=design",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/rfcs/2024-08-21-motion-presets.md",children:[e.jsx(P,{children:"Usage"}),e.jsx(Q,{})]}),$={title:"Motion/Move",component:t,tags:["autodocs"],decorators:[N(void 0,{initialEntries:["/onboarding/introduction"]})],args:{motionTriggers:["mount"],type:"inout",shouldUnmountWhenHidden:!1},argTypes:{children:{table:{disable:!0}}},parameters:{docs:{page:Y}}},A=s=>{const[o,i]=m.useState(!0);return e.jsxs(r,{backgroundColor:"surface.background.gray.intense",padding:"spacing.8",borderRadius:"medium",borderWidth:"thin",borderColor:"surface.border.gray.muted",children:[e.jsx(h,{marginBottom:"spacing.4",onClick:()=>i(!o),children:"Toggle Move"}),e.jsx(t,{...s,isVisible:o})]})},a=A.bind({});a.args={children:e.jsx(E,{})};const d=s=>{const[o,i]=m.useState(!0);return e.jsxs(r,{minHeight:"350px",children:[e.jsx(h,{marginBottom:"spacing.11",onClick:()=>i(!o),children:"Toggle Move"}),e.jsxs(r,{display:"flex",alignItems:"flex-start",gap:"spacing.8",flexWrap:"wrap",backgroundColor:"surface.background.gray.intense",padding:"spacing.8",borderRadius:"medium",children:[e.jsx(t,{...s,isVisible:o,children:e.jsx(H,{label:"Input that moves"})}),e.jsx(t,{...s,isVisible:o,children:e.jsx(h,{children:"Button that moves"})}),e.jsx(t,{...s,isVisible:o,children:e.jsx(r,{backgroundColor:"surface.background.cloud.intense",padding:"spacing.4",children:e.jsx(g,{color:"surface.text.onCloud.onIntense",children:"Box that moves"})})}),e.jsx(t,{...s,isVisible:o,children:e.jsx(O,{children:"Heading that moves"})}),e.jsx(t,{...s,isVisible:o,children:e.jsx(W,{selectionType:"multiple",label:"ChipGroup that moves",children:["Public","Small Business","Large Organization"].map(n=>e.jsx(L,{value:n,children:n},n))})}),e.jsx(t,{...s,isVisible:o,children:e.jsx(g,{children:"Move with custom components. Ensure you forward refs to your custom components"})})]})]})},l=s=>e.jsxs(r,{maxHeight:"400px",overflowX:"hidden",overflow:"auto",backgroundColor:"surface.background.gray.intense",padding:"spacing.8",borderRadius:"medium",borderWidth:"thin",borderColor:"surface.border.gray.muted",children:[e.jsx(r,{height:"500px",width:"100%",children:e.jsx(g,{children:"Scroll down"})}),e.jsx(t,{...s,children:e.jsx(E,{})})]});l.args={motionTriggers:["in-view"]};const x=[{title:"Introduction",timestamp:"Mon, 15th Oct’23 | 12:00pm",description:"Introduction to Green Loom Payment Gateway",href:"/onboarding/introduction"},{title:"Personal Details",timestamp:"Mon, 16th Oct’23 | 12:00pm",description:"Fill your Personal Details for onboarding",href:"/onboarding/personal-details"},{title:"Business Details",timestamp:"Mon, 17th Oct’23 | 12:00pm",description:"Fill your Business Details for onboarding",href:"/onboarding/business-details"},{title:"Complete Onboarding",timestamp:"Mon, 20th Oct’23 | 12:00pm",description:"Complete your onboarding to start",href:"/onboarding/complete-onboarding"}],J=({match:s})=>{const o=x.findIndex(n=>{var c;return(c=n.href)==null?void 0:c.includes(s.params.id)}),i=x[o];return i?e.jsx(t,{children:e.jsxs(z,{width:"100%",children:[e.jsx(G,{children:e.jsx(_,{title:`${o+1}. ${i.title}`,subtitle:i.description})}),e.jsxs(U,{children:[e.jsx(b,{size:"medium",isHighlighted:!1,children:i.href??""}),e.jsxs(g,{marginTop:"spacing.4",children:["This is an example of ",e.jsx(b,{size:"medium",children:"Move"})," component used for Page Transition."]})]})]})}):e.jsx(t,{children:e.jsx(g,{children:"Unknown Route"})})},u=()=>e.jsx(F,{stepsSampleData:x,routeComponent:J}),p=s=>{const[o,i]=m.useState(!1),n=m.useRef(null);return m.useEffect(()=>{var c;o&&((c=n.current)==null||c.focus())},[o]),e.jsxs(r,{minHeight:"350px",children:[e.jsx(h,{marginBottom:"spacing.4",onClick:()=>i(!o),children:"Toggle Move"}),e.jsx(t,{...s,isVisible:o,children:e.jsx(H,{ref:n,label:"My Text Input",helpText:`This is an example to showcase how you can continue to use ref like you normally do
            inside Move as well`})})]})};var f,v,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [isVisible, setIsVisible] = React.useState(true);
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.8" borderRadius="medium" borderWidth="thin" borderColor="surface.border.gray.muted">
      <Button marginBottom="spacing.4" onClick={() => setIsVisible(!isVisible)}>
        Toggle Move
      </Button>
      <Move {...args} isVisible={isVisible} />
    </Box>;
}`,...(M=(v=a.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var j,y,C;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`(args: typeof Move): React.ReactElement => {
  const [isVisible, setIsVisible] = React.useState(true);
  return <Box minHeight="350px">
      <Button marginBottom="spacing.11" onClick={() => setIsVisible(!isVisible)}>
        Toggle Move
      </Button>

      <Box display="flex" alignItems="flex-start" gap="spacing.8" flexWrap="wrap" backgroundColor="surface.background.gray.intense" padding="spacing.8" borderRadius="medium">
        <Move {...args} isVisible={isVisible}>
          <TextInput label="Input that moves" />
        </Move>

        <Move {...args} isVisible={isVisible}>
          <Button>Button that moves</Button>
        </Move>

        <Move {...args} isVisible={isVisible}>
          <Box backgroundColor="surface.background.cloud.intense" padding="spacing.4">
            <Text color="surface.text.onCloud.onIntense">Box that moves</Text>
          </Box>
        </Move>

        <Move {...args} isVisible={isVisible}>
          <Heading>Heading that moves</Heading>
        </Move>

        <Move {...args} isVisible={isVisible}>
          <ChipGroup selectionType="multiple" label="ChipGroup that moves">
            {['Public', 'Small Business', 'Large Organization'].map((chipValue: string) => <Chip key={chipValue} value={chipValue}>
                {chipValue}
              </Chip>)}
          </ChipGroup>
        </Move>

        <Move {...args} isVisible={isVisible}>
          <Text>
            Move with custom components. Ensure you forward refs to your custom components
          </Text>
        </Move>
      </Box>
    </Box>;
}`,...(C=(y=d.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var V,B,T;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`(args: typeof Move): React.ReactElement => {
  return <Box maxHeight="400px" overflowX="hidden" overflow="auto" backgroundColor="surface.background.gray.intense" padding="spacing.8" borderRadius="medium" borderWidth="thin" borderColor="surface.border.gray.muted">
      <Box height="500px" width="100%">
        <Text>Scroll down</Text>
      </Box>
      <Move {...args}>
        <InternalCardExample />
      </Move>
    </Box>;
}`,...(T=(B=l.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var R,I,w;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <StepperRouterExample stepsSampleData={stepsSampleData} routeComponent={OnboardingRoute} />;
}`,...(w=(I=u.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var k,S,D;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`(args: typeof Move): React.ReactElement => {
  const [isVisible, setIsVisible] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (isVisible) {
      inputRef.current?.focus();
    }
  }, [isVisible]);
  return <Box minHeight="350px">
      <Button marginBottom="spacing.4" onClick={() => setIsVisible(!isVisible)}>
        Toggle Move
      </Button>
      <Move {...args} isVisible={isVisible}>
        <TextInput ref={inputRef} label="My Text Input" helpText="This is an example to showcase how you can continue to use ref like you normally do
            inside Move as well" />
      </Move>
    </Box>;
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const K=["Default","WithDifferentComponents","MoveWhenInView","OnRouteChange","WithRef"],ie=Object.freeze(Object.defineProperty({__proto__:null,Default:a,MoveWhenInView:l,OnRouteChange:u,WithDifferentComponents:d,WithRef:p,__namedExportsOrder:K,default:$},Symbol.toStringTag,{value:"Module"}));export{a as D,ie as M};
