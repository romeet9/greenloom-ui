import{bc as o,j as e,B as j,T as i,C as p,X as T,ab as S}from"./iframe-C1qQ09LF.js";import{S as w}from"./Sandbox.web-B2xP21Qp.js";import{S as B}from"./StoryPageWrapper-CS0_5maI.js";import{g as z}from"./storybookArgTypes-DFfQV31s.js";const P=()=>e.jsxs(B,{componentDescription:"The Display component adds a strong visual touch. Utilize it to create eye-catching sections on your landing pages.",componentName:"Display",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Typography/_decisions/decisions.md",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=71114-259648&t=DaKuYvkYnno4qVsq-1&scaling=min-zoom&page-id=3%3A0&mode=design",children:[e.jsx(T,{children:"Usage"}),e.jsx(w,{children:`
          import { Display } from '@greenloom/ui/components';

          function App() {
            return (
              <Display size="large">Blade by Green Loom</Display>
            )
          }

          export default App;
        `})]}),k={title:"Components/Typography/Display",component:o,args:{size:"small",children:"Power your finance, grow your business",as:void 0},tags:["autodocs"],argTypes:{size:{options:["small","medium","large","xlarge"],control:{type:"radio"},table:{type:{summary:'"small" | "medium" | "large" | "xlarge"'}}},...z()},parameters:{docs:{page:()=>e.jsx(P,{})}}},f=s=>e.jsx(o,{...s,children:s.children}),t=f.bind({}),a=f.bind({});a.args={color:"surface.text.primary.normal"};const M=S()?o:"sup",v=s=>e.jsxs(j,{children:[e.jsxs(o,{...s,children:["Supercharge your business with the all‑powerful"," ",e.jsx(o,{...s,as:"span",color:"surface.text.primary.normal",children:"Payment Gateway"})]}),e.jsxs(o,{marginTop:"spacing.5",...s,children:["Start accepting"," ",e.jsx(o,{...s,as:"span",color:"feedback.text.information.intense",children:"payments"})," ","at just 2% ",e.jsx(M,{children:"*"})]})]}),n=v.bind({}),A=s=>e.jsxs(j,{children:[e.jsxs(i,{children:["By default"," ",e.jsx(i,{as:"span",weight:"semibold",children:"Display"})," ","component automatically renders the ",e.jsx(p,{size:"medium",children:"h1"})," tag."]}),e.jsxs(i,{marginBottom:"spacing.5",children:["But you can also pass a custom ",e.jsx(p,{children:"as"})," prop to override the rendered HTML:"]}),e.jsx(o,{...s,children:"Tweak the storybook controls to see the DOM change"})]}),r=A.bind({});r.args={size:"small",as:"h1"};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <DisplayComponent {...args}>{args.children}</DisplayComponent>;
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <DisplayComponent {...args}>{args.children}</DisplayComponent>;
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,h,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <Box>
      <DisplayComponent {...args}>
        Supercharge your business with the all‑powerful{' '}
        <DisplayComponent {...args} as="span" color="surface.text.primary.normal">
          Payment Gateway
        </DisplayComponent>
      </DisplayComponent>
      <DisplayComponent marginTop="spacing.5" {...args}>
        Start accepting{' '}
        <DisplayComponent {...args} as="span" color="feedback.text.information.intense">
          payments
        </DisplayComponent>{' '}
        at just 2% <Sup>*</Sup>
      </DisplayComponent>
    </Box>;
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var D,b,C;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  return <Box>
      <Text>
        By default{' '}
        <Text as="span" weight="semibold">
          Display
        </Text>{' '}
        component automatically renders the <Code size="medium">h1</Code> tag.
      </Text>
      <Text marginBottom="spacing.5">
        But you can also pass a custom <Code>as</Code> prop to override the rendered HTML:
      </Text>
      <DisplayComponent {...args}>
        Tweak the storybook controls to see the DOM change
      </DisplayComponent>
    </Box>;
}`,...(C=(b=r.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const L=["Display","WithColor","WithMixedColors","AsProp"],G=Object.freeze(Object.defineProperty({__proto__:null,AsProp:r,Display:t,WithColor:a,WithMixedColors:n,__namedExportsOrder:L,default:k},Symbol.toStringTag,{value:"Module"}));export{G as d};
