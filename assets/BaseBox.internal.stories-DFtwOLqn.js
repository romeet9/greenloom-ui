import{x as o,j as e,T as m}from"./iframe-C1qQ09LF.js";import{c as g}from"./storybookArgTypes-DFfQV31s.js";import{S as l}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const j={title:"Components/Layout Primitives (Box)/Box/BaseBox (Internal)",component:o,argTypes:g(),parameters:{docs:{page:()=>e.jsx(l,{componentDescription:"This is the BaseBox component. It is only for internal Blade usage. Use Box instead.",componentName:"BaseBox",imports:""})}}},a=s=>e.jsx(o,{...s,children:e.jsx(m,{children:"Change controls to see the parameters change for the container"})}),r=s=>e.jsxs(o,{...s,children:[e.jsx(o,{flex:"1",backgroundColor:"yellow",minHeight:"spacing.10",minWidth:"spacing.10"}),e.jsx(o,{flex:"1",backgroundColor:"green",minHeight:"50px",minWidth:"50px"}),e.jsx(o,{flex:"1",backgroundColor:"purple",minHeight:"50px",minWidth:"50px"}),e.jsx(o,{flex:"1",borderRadius:"max",backgroundColor:"red",minHeight:"50px",minWidth:"50px"})]});r.args={display:"flex",padding:{base:["spacing.10","spacing.3"],l:"spacing.3"},backgroundColor:"surface.background.gray.moderate",flexDirection:{base:"column",l:"row"}};var n,t,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`(args: BaseBoxProps): React.ReactElement => {
  return <BaseBox {...args}>
      <Text>Change controls to see the parameters change for the container</Text>
    </BaseBox>;
}`,...(i=(t=a.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var p,x,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`(args: BaseBoxProps): React.ReactElement => {
  return <BaseBox {...args}>
      <BaseBox flex="1" backgroundColor="yellow" minHeight="spacing.10" minWidth="spacing.10" />
      <BaseBox flex="1" backgroundColor="green" minHeight="50px" minWidth="50px" />
      <BaseBox flex="1" backgroundColor="purple" minHeight="50px" minWidth="50px" />
      <BaseBox flex="1" borderRadius="max" backgroundColor="red" minHeight="50px" minWidth="50px" />
    </BaseBox>;
}`,...(c=(x=r.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};const k=["Default","Responsive"];export{a as Default,r as Responsive,k as __namedExportsOrder,j as default};
