import{H as s,j as e,B as C,T as i,C as p,L as S,f as d,X as L,ab as w}from"./iframe-C1qQ09LF.js";import{S as B}from"./Sandbox.web-B2xP21Qp.js";import{S as z}from"./StoryPageWrapper-CS0_5maI.js";import{g as v}from"./storybookArgTypes-DFfQV31s.js";const P=()=>e.jsxs(z,{componentDescription:"The Heading Component is usually used for headings of each major section of a page.",componentName:"Heading",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Typography/_decisions/decisions.md",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=71123-52743&t=DaKuYvkYnno4qVsq-1&scaling=min-zoom&page-id=3%3A0&mode=design",children:[e.jsx(L,{children:"Usage"}),e.jsx(B,{children:`
          import { Heading } from '@greenloom/ui/components';

          function App() {
            return (
              <Heading size="large">Blade by Green Loom</Heading>
            )
          }

          export default App;
        `})]}),k=()=>({size:{description:"Decides the size of the heading"},...v()}),I={title:"Components/Typography/Heading",component:s,args:{children:"Get Started With Payment Gateway",weight:"semibold",as:void 0},tags:["autodocs"],argTypes:k(),parameters:{docs:{page:()=>e.jsx(P,{})}}},T=n=>e.jsx(s,{...n,children:n.children}),t=T.bind({}),a=T.bind({});a.args={color:"surface.text.primary.normal"};const A=w()?s:"sup",M=()=>e.jsxs(C,{children:[e.jsxs(s,{children:["Supercharge your business with the all‑powerful"," ",e.jsx(s,{as:"span",color:"surface.text.primary.normal",children:"Payment Gateway"})]}),e.jsxs(s,{marginTop:"spacing.5",children:["Start accepting"," ",e.jsx(s,{as:"span",color:"feedback.text.information.intense",children:"payments"})," ","at just 2% ",e.jsx(A,{children:"*"})]})]}),r=M.bind({}),W=n=>e.jsxs(C,{children:[e.jsxs(i,{children:["By default"," ",e.jsx(i,{as:"span",weight:"semibold",children:"Heading"})," ","component automatically renders the respective ",e.jsx(p,{size:"medium",children:"h*"})," tag based on the"," ",e.jsx(i,{as:"span",weight:"semibold",children:"size prop"})," ","passed"]}),e.jsxs(S,{children:[e.jsx(d,{children:"small: h6"}),e.jsx(d,{children:"medium: h5"}),e.jsx(d,{children:"large: h4"}),e.jsx(d,{children:"subheading variant: p"})]}),e.jsxs(i,{marginBottom:"spacing.5",children:["But you can also pass a custom ",e.jsx(p,{size:"medium",children:"as"})," prop to override the rendered HTML:"]}),e.jsx(s,{...n,children:"Tweak the storybook controls to see the dom change"})]}),o=W.bind({});o.args={as:"h1"};var m,c,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <HeadingComponent {...args}>{args.children}</HeadingComponent>;
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var l,h,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <HeadingComponent {...args}>{args.children}</HeadingComponent>;
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,y,j;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Box>
      <HeadingComponent>
        Supercharge your business with the all‑powerful{' '}
        <HeadingComponent as="span" color="surface.text.primary.normal">
          Payment Gateway
        </HeadingComponent>
      </HeadingComponent>
      <HeadingComponent marginTop="spacing.5">
        Start accepting{' '}
        <HeadingComponent as="span" color="feedback.text.information.intense">
          payments
        </HeadingComponent>{' '}
        at just 2% <Sup>*</Sup>
      </HeadingComponent>
    </Box>;
}`,...(j=(y=r.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var b,H,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <Box>
      <Text>
        By default{' '}
        <Text as="span" weight="semibold">
          Heading
        </Text>{' '}
        component automatically renders the respective <Code size="medium">h*</Code> tag based on
        the{' '}
        <Text as="span" weight="semibold">
          size prop
        </Text>{' '}
        passed
      </Text>
      <List>
        <ListItem>small: h6</ListItem>
        <ListItem>medium: h5</ListItem>
        <ListItem>large: h4</ListItem>
        <ListItem>subheading variant: p</ListItem>
      </List>
      <Text marginBottom="spacing.5">
        But you can also pass a custom <Code size="medium">as</Code> prop to override the rendered
        HTML:
      </Text>
      <HeadingComponent {...args}>
        Tweak the storybook controls to see the dom change
      </HeadingComponent>
    </Box>;
}`,...(f=(H=o.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};const _=["Heading","WithColor","WithMixedColors","AsProp"],U=Object.freeze(Object.defineProperty({__proto__:null,AsProp:o,Heading:t,WithColor:a,WithMixedColors:r,__namedExportsOrder:_,default:I},Symbol.toStringTag,{value:"Module"}));export{U as h};
