import{i2 as m,j as t,B as g,H as B,T as x,n as a}from"./iframe-C1qQ09LF.js";import{g as h}from"./storybookArgTypes-DFfQV31s.js";import"./preload-helper-Dp1pzeXC.js";const j={title:"Components/BottomBar",component:m,tags:["autodocs"],argTypes:h(),globals:{viewport:{value:"iPhone6",isRotated:!1}}},l=({children:u,...p})=>t.jsxs(g,{minHeight:"400px",padding:"spacing.4",children:[t.jsx(B,{size:"medium",children:"BottomBar Example"}),t.jsx(x,{marginTop:"spacing.2",color:"surface.text.gray.muted",children:"BottomBar stays fixed to the bottom and can contain primary mobile actions."}),t.jsx(m,{...p,children:u??t.jsxs(t.Fragment,{children:[t.jsx(a,{variant:"secondary",isFullWidth:!0,children:"Cancel"}),t.jsx(a,{isFullWidth:!0,children:"Continue"})]})})]}),n=l.bind({});n.args={};const e=l.bind({});e.args={children:t.jsx(a,{isFullWidth:!0,size:"large",children:"Continue"})};var o,r,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <Box minHeight="400px" padding="spacing.4">
      <Heading size="medium">BottomBar Example</Heading>
      <Text marginTop="spacing.2" color="surface.text.gray.muted">
        BottomBar stays fixed to the bottom and can contain primary mobile actions.
      </Text>
      <BottomBar {...args}>
        {children ?? <>
            <Button variant="secondary" isFullWidth>
              Cancel
            </Button>
            <Button isFullWidth>Continue</Button>
          </>}
      </BottomBar>
    </Box>;
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var s,c,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <Box minHeight="400px" padding="spacing.4">
      <Heading size="medium">BottomBar Example</Heading>
      <Text marginTop="spacing.2" color="surface.text.gray.muted">
        BottomBar stays fixed to the bottom and can contain primary mobile actions.
      </Text>
      <BottomBar {...args}>
        {children ?? <>
            <Button variant="secondary" isFullWidth>
              Cancel
            </Button>
            <Button isFullWidth>Continue</Button>
          </>}
      </BottomBar>
    </Box>;
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["Default","SingleAction"];export{n as Default,e as SingleAction,b as __namedExportsOrder,j as default};
