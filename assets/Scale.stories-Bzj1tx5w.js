import{kt as r,j as e,X as u,ad as S,B as s,n as x}from"./iframe-C1qQ09LF.js";import{I as p}from"./InternalCardExample-CQZjq6zS.js";import{S as j}from"./StoryPageWrapper-CS0_5maI.js";import{a as b}from"./codeExamples-BhJLat9R.js";const f=()=>e.jsxs(j,{componentName:"Scale",componentDescription:"Scale component animates over CSS `scale` property and allows you to enlarge or shrink element on certain interactions",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74864-85897&t=CvaYT53LNc4OYVKa-1&scaling=min-zoom&page-id=21689%3A381614&mode=design",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/rfcs/2024-08-21-motion-presets.md",children:[e.jsx(u,{children:"Usage"}),e.jsx(b,{})]}),B={title:"Motion/Scale",component:r,tags:["autodocs"],argTypes:{children:{table:{disable:!0}}},parameters:{docs:{page:f}}},y=o=>{const[n,h]=S.useState(!1);return e.jsxs(s,{children:[e.jsx(x,{marginBottom:"spacing.4",onClick:()=>h(!n),children:"Toggle Scale"}),e.jsx(s,{children:e.jsx(r,{...o,isHighlighted:n})})]})},C=o=>e.jsx(r,{...o}),a=C.bind({});a.args={children:e.jsx(s,{display:"inline-block",children:e.jsx(p,{})})};const t=y.bind({});t.args={children:e.jsx(s,{display:"inline-block",children:e.jsx(p,{})})};var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return <Scale {...args} />;
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,g,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [isHighlighted, setIsHighlighted] = React.useState(false);
  return <Box>
      <Button marginBottom="spacing.4" onClick={() => setIsHighlighted(!isHighlighted)}>
        Toggle Scale
      </Button>
      <Box>
        <Scale {...args} isHighlighted={isHighlighted} />
      </Box>
    </Box>;
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const H=["Default","Controlled"],I=Object.freeze(Object.defineProperty({__proto__:null,Controlled:t,Default:a,__namedExportsOrder:H,default:B},Symbol.toStringTag,{value:"Module"}));export{a as D,I as S};
