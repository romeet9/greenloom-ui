import{C as n,ab as R,j as e,x as l,T as o,X as W}from"./iframe-C1qQ09LF.js";import{S as v}from"./Sandbox.web-B2xP21Qp.js";import{S as I}from"./StoryPageWrapper-CS0_5maI.js";import{g as O}from"./storybookArgTypes-DFfQV31s.js";const N=()=>e.jsxs(I,{componentDescription:"Code component can be used for displaying token, variable names, or inlined code snippets.",componentName:"Code",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Typography/_decisions/decisions.md",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=71123-52803&t=DaKuYvkYnno4qVsq-1&scaling=min-zoom&page-id=3%3A0&mode=design",children:[e.jsx(W,{children:"Usage"}),e.jsx(v,{children:`
          import { Code, Text } from '@greenloom/ui/components';

          function App() {
            return (
              // For React Native, you will have to use flex layout to align Code component properly
              <Text>You can use <Code>Code</Code> component to add inlined Code, token names, variable names, etc</Text>
            )
          }

          export default App;
        `})]}),_={title:"Components/Typography/Code",component:n,args:{size:"small",weight:"regular",children:"SENTRY_AUTH_TOKEN",isHighlighted:!0},parameters:{docs:{page:()=>e.jsx(N,{})}},tags:["autodocs"],argTypes:O()},d=p=>R()?e.jsxs(e.Fragment,{children:[e.jsxs(l,{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap",children:[e.jsx(o,{size:"medium",children:"Lorem ipsum normal text "}),e.jsx(n,{...p,size:"medium"}),e.jsx(o,{size:"medium",children:" component"})]}),e.jsxs(l,{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap",children:[e.jsx(o,{size:"small",children:"Lorem ipsum normal text "}),e.jsx(n,{...p,size:"small"}),e.jsx(o,{size:"small",children:" component"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(o,{size:"medium",children:["Lorem ipsum normal text ",e.jsx(n,{...p,size:"medium"})," component"]}),e.jsxs(o,{size:"small",children:["Lorem ipsum normal text ",e.jsx(n,{...p,size:"small"})," component"]})]}),r=d.bind({}),s=d.bind({});s.args={color:"interactive.text.positive.subtle",isHighlighted:!1,weight:"bold"};const a=()=>e.jsx(n,{size:"medium",children:"mediumCode"}),i=()=>e.jsx(n,{size:"small",children:"smallCode"}),t=d.bind({});t.args={isHighlighted:!1};const m=()=>R()?e.jsxs(e.Fragment,{children:[e.jsxs(l,{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap",children:[e.jsx(o,{children:"Lorem ipsum normal text "}),e.jsx(n,{children:"CODE"}),e.jsx(o,{children:" component"})]}),e.jsxs(l,{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap",children:[e.jsx(o,{children:"Blade is Super Cool DS "}),e.jsx(n,{children:"CODE"}),e.jsx(o,{children:" component"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:["Lorem ipsum normal text ",e.jsx(n,{children:"CODE"})," component"]}),e.jsx(l,{children:e.jsxs(o,{children:["Blade is Super Cool DS ",e.jsx(n,{children:"CODE"})," component"]})})]});var x,c,u;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return isReactNative() ? <>
      <BaseBox display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
        <Text size="medium">Lorem ipsum normal text </Text>
        <CodeComponent {...args} size="medium" />
        <Text size="medium"> component</Text>
      </BaseBox>
      <BaseBox display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
        <Text size="small">Lorem ipsum normal text </Text>
        <CodeComponent {...args} size="small" />
        <Text size="small"> component</Text>
      </BaseBox>
    </> : <>
      <Text size="medium">
        Lorem ipsum normal text <CodeComponent {...args} size="medium" /> component
      </Text>
      <Text size="small">
        Lorem ipsum normal text <CodeComponent {...args} size="small" /> component
      </Text>
    </>;
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var C,g,T;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  return isReactNative() ? <>
      <BaseBox display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
        <Text size="medium">Lorem ipsum normal text </Text>
        <CodeComponent {...args} size="medium" />
        <Text size="medium"> component</Text>
      </BaseBox>
      <BaseBox display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
        <Text size="small">Lorem ipsum normal text </Text>
        <CodeComponent {...args} size="small" />
        <Text size="small"> component</Text>
      </BaseBox>
    </> : <>
      <Text size="medium">
        Lorem ipsum normal text <CodeComponent {...args} size="medium" /> component
      </Text>
      <Text size="small">
        Lorem ipsum normal text <CodeComponent {...args} size="small" /> component
      </Text>
    </>;
}`,...(T=(g=s.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var h,f,z;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`(): React.ReactElement => {
  return <CodeComponent size="medium">mediumCode</CodeComponent>;
}`,...(z=(f=a.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var B,j,S;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`(): React.ReactElement => {
  return <CodeComponent size="small">smallCode</CodeComponent>;
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,y,D;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return isReactNative() ? <>
      <BaseBox display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
        <Text size="medium">Lorem ipsum normal text </Text>
        <CodeComponent {...args} size="medium" />
        <Text size="medium"> component</Text>
      </BaseBox>
      <BaseBox display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
        <Text size="small">Lorem ipsum normal text </Text>
        <CodeComponent {...args} size="small" />
        <Text size="small"> component</Text>
      </BaseBox>
    </> : <>
      <Text size="medium">
        Lorem ipsum normal text <CodeComponent {...args} size="medium" /> component
      </Text>
      <Text size="small">
        Lorem ipsum normal text <CodeComponent {...args} size="small" /> component
      </Text>
    </>;
}`,...(D=(y=t.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var L,b,E;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`(): React.ReactElement => {
  return isReactNative() ? <>
      <BaseBox display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
        <Text>Lorem ipsum normal text </Text>
        <CodeComponent>CODE</CodeComponent>
        <Text> component</Text>
      </BaseBox>
      <BaseBox display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
        <Text>Blade is Super Cool DS </Text>
        <CodeComponent>CODE</CodeComponent>
        <Text> component</Text>
      </BaseBox>
    </> : <>
      <Text>
        Lorem ipsum normal text <CodeComponent>CODE</CodeComponent> component
      </Text>
      <BaseBox>
        <Text>
          Blade is Super Cool DS <CodeComponent>CODE</CodeComponent> component
        </Text>
      </BaseBox>
    </>;
}`,...(E=(b=m.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};const H=["Code","WithBoldColor","SizeMedium","SizeSmall","NonHighlighted","ParagraphUse"],F=Object.freeze(Object.defineProperty({__proto__:null,Code:r,NonHighlighted:t,ParagraphUse:m,SizeMedium:a,SizeSmall:i,WithBoldColor:s,__namedExportsOrder:H,default:_},Symbol.toStringTag,{value:"Module"}));export{F as c};
