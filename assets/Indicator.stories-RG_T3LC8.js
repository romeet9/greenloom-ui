import{a6 as n,j as e,x as S,n as I,X as j,jn as B}from"./iframe-C1qQ09LF.js";import{S as v}from"./Sandbox.web-B2xP21Qp.js";import{S as L}from"./StoryPageWrapper-CS0_5maI.js";import{g as T}from"./storybookArgTypes-DFfQV31s.js";const N=()=>e.jsxs(L,{componentName:"Indicator",componentDescription:`Indicators describe the condition of an entity. They can be used to convey semantic meaning,
    such as statuses and semantical-categories.`,figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74864-85092&t=jdHbgJTpBgkzHNa7-1&scaling=min-zoom&page-id=8224%3A0&mode=design",children:[e.jsx(j,{children:"Usage"}),e.jsx(v,{editorHeight:500,children:`
        import { Indicator, Box } from '@greenloom/ui/components';

        function App() {
          return (
            <Box>
              <Indicator accessibilityLabel="Success" color="positive" />
            </Box>
          )
        }

        export default App;
        `})]}),w={title:"Components/Indicator",component:n,args:{accessibilityLabel:"Status OK",children:"Success",color:"neutral",size:"medium"},tags:["autodocs"],argTypes:T(),parameters:{docs:{page:N}}},z=({...t})=>e.jsx(n,{...t}),r=z.bind({}),s=({...t})=>e.jsx(n,{...t});s.args={children:void 0,accessibilityLabel:"Success"};s.parameters={docs:{description:{story:"`Indicator` can be used without a label by skipping `children`. **Note**: in this case you should always pass `accessibilityLabel` for screen readers a11y"}}};const a=({...t})=>e.jsx(n,{...t});a.args={children:"Success",emphasis:"intense"};const o=({...t})=>{const i=B()==="react-native";return e.jsxs(S,{position:"relative",display:i?"flex":"inline-flex",alignSelf:"center",children:[e.jsx(n,{...t,position:"absolute",top:i?"-8px":"-4px",right:"-4px",zIndex:10}),e.jsx(I,{children:"Get started"})]})};o.args={children:void 0,color:"notice",accessibilityLabel:"New offers",size:"large"};o.parameters={docs:{description:{story:"You can compose `Indicator` with other components using absolute positioning"}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`({
  ...args
}) => {
  return <IndicatorComponent {...args} />;
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,m,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`({
  ...args
}) => {
  return <IndicatorComponent {...args} />;
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,x,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`({
  ...args
}) => {
  return <IndicatorComponent {...args} />;
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,f,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`({
  ...args
}) => {
  const isReactNative = getPlatformType() === 'react-native';
  return <BaseBox position="relative" display={isReactNative ? 'flex' : 'inline-flex'} alignSelf="center">
      <IndicatorComponent {...args} position="absolute" top={isReactNative ? '-8px' : '-4px'} right="-4px" zIndex={10} />
      <Button>Get started</Button>
    </BaseBox>;
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const C=["Default","WithoutLabel","WithIntenseEmphasis","Composition"],W=Object.freeze(Object.defineProperty({__proto__:null,Composition:o,Default:r,WithIntenseEmphasis:a,WithoutLabel:s,__namedExportsOrder:C,default:w},Symbol.toStringTag,{value:"Module"}));export{W as i};
