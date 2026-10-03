import{aj as p,j as e,X as W,x as c,T as g,r as d}from"./iframe-C1qQ09LF.js";import{S as R}from"./Sandbox.web-B2xP21Qp.js";import{S as k}from"./StoryPageWrapper-CS0_5maI.js";import{g as M}from"./storybookArgTypes-DFfQV31s.js";const L=()=>e.jsxs(k,{componentName:"Counter",componentDescription:"Counters are visual indicators that contains numerical values, tallies or counts in regards to some context. It can be used to show non-interactive numerical data.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74858-52172&t=LY9ssuVTANWMEksF-1&scaling=min-zoom&page-id=8222%3A70410&mode=design",children:[e.jsx(W,{children:"Usage"}),e.jsx(R,{children:`
          import { Counter } from '@greenloom/ui/components';

          function App() {
            return (
              // Change values to anything less than 99 to see change
              <Counter max={99} value={140} />
            )
          }

          export default App;
        `})]}),N={title:"Components/Counter",component:p,tags:["autodocs"],argTypes:M(),parameters:{docs:{page:L}}},E=({...i})=>e.jsx(p,{...i}),o=E.bind({});o.args={value:20,color:"neutral",emphasis:"subtle"};o.storyName="Default";const a=E.bind({});a.args={value:120,max:99,color:"neutral",emphasis:"intense"};a.storyName="Max";const l=({...i})=>{const m=["positive","negative","notice","information","neutral","primary"];return e.jsxs(c,{display:"flex",flexDirection:"column",children:[e.jsx(g,{children:"Subtle Emphasis"}),e.jsx(c,{display:"flex",flexDirection:"row",paddingTop:"spacing.3",paddingBottom:"spacing.5",flexWrap:"wrap",children:m.map(t=>d.createElement(p,{...i,key:t,marginRight:"spacing.3",marginTop:"spacing.2",color:t,emphasis:"subtle"}))}),e.jsx(g,{children:"Intense Emphasis"}),e.jsx(c,{display:"flex",flexDirection:"row",paddingTop:"spacing.3",paddingBottom:"spacing.5",flexWrap:"wrap",children:m.map(t=>d.createElement(p,{...i,key:t,marginRight:"spacing.3",marginTop:"spacing.2",color:t,emphasis:"intense"}))})]})},r=l.bind({});r.args={value:20,size:"small"};r.storyName="Small Size";const s=l.bind({});s.args={value:20,size:"medium"};s.storyName="Medium Size";const n=l.bind({});n.args={value:20,size:"large"};n.storyName="Large Size";var u,x,B;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`({
  ...args
}) => {
  return <CounterComponent {...args} />;
}`,...(B=(x=o.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var f,h,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`({
  ...args
}) => {
  return <CounterComponent {...args} />;
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,C,S;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`({
  ...args
}) => {
  const colors = ['positive', 'negative', 'notice', 'information', 'neutral', 'primary'] as const;
  return <BaseBox display="flex" flexDirection="column">
      <BladeText>Subtle Emphasis</BladeText>
      <BaseBox display="flex" flexDirection="row" paddingTop="spacing.3" paddingBottom="spacing.5" flexWrap="wrap">
        {colors.map(color => <CounterComponent {...args} key={color} marginRight="spacing.3" marginTop="spacing.2" color={color} emphasis="subtle" />)}
      </BaseBox>
      <BladeText>Intense Emphasis</BladeText>
      <BaseBox display="flex" flexDirection="row" paddingTop="spacing.3" paddingBottom="spacing.5" flexWrap="wrap">
        {colors.map(color => <CounterComponent {...args} key={color} marginRight="spacing.3" marginTop="spacing.2" color={color} emphasis="intense" />)}
      </BaseBox>
    </BaseBox>;
}`,...(S=(C=r.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,w,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`({
  ...args
}) => {
  const colors = ['positive', 'negative', 'notice', 'information', 'neutral', 'primary'] as const;
  return <BaseBox display="flex" flexDirection="column">
      <BladeText>Subtle Emphasis</BladeText>
      <BaseBox display="flex" flexDirection="row" paddingTop="spacing.3" paddingBottom="spacing.5" flexWrap="wrap">
        {colors.map(color => <CounterComponent {...args} key={color} marginRight="spacing.3" marginTop="spacing.2" color={color} emphasis="subtle" />)}
      </BaseBox>
      <BladeText>Intense Emphasis</BladeText>
      <BaseBox display="flex" flexDirection="row" paddingTop="spacing.3" paddingBottom="spacing.5" flexWrap="wrap">
        {colors.map(color => <CounterComponent {...args} key={color} marginRight="spacing.3" marginTop="spacing.2" color={color} emphasis="intense" />)}
      </BaseBox>
    </BaseBox>;
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var D,j,z;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`({
  ...args
}) => {
  const colors = ['positive', 'negative', 'notice', 'information', 'neutral', 'primary'] as const;
  return <BaseBox display="flex" flexDirection="column">
      <BladeText>Subtle Emphasis</BladeText>
      <BaseBox display="flex" flexDirection="row" paddingTop="spacing.3" paddingBottom="spacing.5" flexWrap="wrap">
        {colors.map(color => <CounterComponent {...args} key={color} marginRight="spacing.3" marginTop="spacing.2" color={color} emphasis="subtle" />)}
      </BaseBox>
      <BladeText>Intense Emphasis</BladeText>
      <BaseBox display="flex" flexDirection="row" paddingTop="spacing.3" paddingBottom="spacing.5" flexWrap="wrap">
        {colors.map(color => <CounterComponent {...args} key={color} marginRight="spacing.3" marginTop="spacing.2" color={color} emphasis="intense" />)}
      </BaseBox>
    </BaseBox>;
}`,...(z=(j=n.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const _=["Counter","Max","CounterSmallSize","CounterMediumSize","CounterLargeSize"],U=Object.freeze(Object.defineProperty({__proto__:null,Counter:o,CounterLargeSize:n,CounterMediumSize:s,CounterSmallSize:r,Max:a,__namedExportsOrder:_,default:N},Symbol.toStringTag,{value:"Module"}));export{U as c};
