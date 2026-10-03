import{kz as t,j as e,ks as w,B as n,aI as H,aJ as T,H as c,T as S,iQ as k,n as d,E as I,X as M,ad as A}from"./iframe-C1qQ09LF.js";import{I as l}from"./InternalCardExample-CQZjq6zS.js";import{S as P}from"./StoryPageWrapper-CS0_5maI.js";import{E as z}from"./codeExamples-BhJLat9R.js";const R=()=>e.jsxs(P,{componentName:"Elevate",componentDescription:"Elevate component animates over CSS `box-shadow` property and allows you to highlight component by adding shadow",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74864-85897&t=CvaYT53LNc4OYVKa-1&scaling=min-zoom&page-id=21689%3A381614&mode=design",note:"Elevate component animates over box-shadow so adding this to text components would create a broken experience. Make sure to use it on block components like Card, Box, etx",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/rfcs/2024-08-21-motion-presets.md",children:[e.jsx(M,{children:"Usage"}),e.jsx(z,{})]}),D={title:"Motion/Elevate",component:t,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},parameters:{docs:{page:R}}},L=a=>{const[g,C]=A.useState(!1);return e.jsxs(n,{children:[e.jsx(d,{marginBottom:"spacing.4",onClick:()=>C(!g),children:"Toggle Elevate"}),e.jsx(n,{children:e.jsx(t,{...a,isHighlighted:g})})]})},_=a=>e.jsx(t,{...a}),U=a=>e.jsxs(n,{display:"flex",gap:"spacing.4",children:[e.jsx(t,{...a}),e.jsx(t,{...a}),e.jsx(t,{...a})]}),o=_.bind({});o.args={children:e.jsx(l,{elevation:"none"}),motionTriggers:["hover"]};const s=U.bind({});s.args={children:e.jsx(l,{elevation:"none"}),motionTriggers:["hover"]};const r=L.bind({});r.args={children:e.jsx(l,{elevation:"none"})};const i=a=>e.jsx(w,{motionTriggers:["hover"],children:e.jsx(n,{display:"contents",children:e.jsx(t,{...a,children:e.jsx(H,{width:"400px",padding:"spacing.0",backgroundColor:"surface.background.gray.moderate",elevation:"none",children:e.jsx(T,{children:e.jsxs(n,{overflow:"auto",children:[e.jsxs(n,{padding:"spacing.6",children:[e.jsx(c,{as:"h2",weight:"regular",children:"Payment Pages"}),e.jsxs(c,{marginY:"spacing.4",size:"large",as:"h3",children:["Accept payments"," ",e.jsx(c,{size:"large",as:"span",color:"surface.text.primary.normal",children:"without coding on a custom branded store"})]}),e.jsx(S,{children:"Hover this card to see how you can add Elevate and AnimateInteractions both on a component"})]}),e.jsx(k,{motionTriggers:["on-animate-interactions"],children:e.jsxs(n,{display:"flex",gap:"spacing.4",justifyContent:"flex-end",padding:["spacing.4","spacing.6"],elevation:"highRaised",children:[e.jsx(d,{variant:"secondary",icon:I,iconPosition:"right",children:"Know More"}),e.jsx(d,{children:"Sign Up"})]})})]})})})})})});var p,m,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <Elevate {...args} />;
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,u,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <Box display="flex" gap="spacing.4">
      <Elevate {...args} />
      <Elevate {...args} />
      <Elevate {...args} />
    </Box>;
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var j,y,E;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [isHighlighted, setIsHighlighted] = React.useState(false);
  return <Box>
      <Button marginBottom="spacing.4" onClick={() => setIsHighlighted(!isHighlighted)}>
        Toggle Elevate
      </Button>
      <Box>
        <Elevate {...args} isHighlighted={isHighlighted} />
      </Box>
    </Box>;
}`,...(E=(y=r.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var B,f,b;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`(args: ElevateProps): React.ReactElement => {
  return <AnimateInteractions motionTriggers={['hover']}>
      <Box display="contents">
        <Elevate {...args}>
          <Card width="400px" padding="spacing.0" backgroundColor="surface.background.gray.moderate" elevation="none">
            <CardBody>
              <Box overflow="auto">
                <Box padding="spacing.6">
                  <Heading as="h2" weight="regular">
                    Payment Pages
                  </Heading>
                  <Heading marginY="spacing.4" size="large" as="h3">
                    Accept payments{' '}
                    <Heading size="large" as="span" color="surface.text.primary.normal">
                      without coding on a custom branded store
                    </Heading>
                  </Heading>
                  <Text>
                    Hover this card to see how you can add Elevate and AnimateInteractions both on a
                    component
                  </Text>
                </Box>

                <Move motionTriggers={['on-animate-interactions']}>
                  <Box display="flex" gap="spacing.4" justifyContent="flex-end" padding={['spacing.4', 'spacing.6']} elevation="highRaised">
                    <Button variant="secondary" icon={ExternalLinkIcon} iconPosition="right">
                      Know More
                    </Button>
                    <Button>Sign Up</Button>
                  </Box>
                </Move>
              </Box>
            </CardBody>
          </Card>
        </Elevate>
      </Box>
    </AnimateInteractions>;
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const O=["Default","MultipleCardsHover","Controlled","WithAnimateInteraction"],Q=Object.freeze(Object.defineProperty({__proto__:null,Controlled:r,Default:o,MultipleCardsHover:s,WithAnimateInteraction:i,__namedExportsOrder:O,default:D},Symbol.toStringTag,{value:"Module"}));export{o as D,Q as E};
