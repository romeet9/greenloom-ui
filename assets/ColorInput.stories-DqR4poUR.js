import{jv as a,j as e,B as p}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const W={title:"Components/Input/ColorInput",component:a,args:{label:"Color",defaultValue:{hex:"#FFFFFF",opacity:100},size:"medium",showOpacity:!0,isDisabled:!1,labelPosition:"top"},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},labelPosition:{control:{type:"select"},options:["top","left"]},validationState:{control:{type:"select"},options:["none","error","success"]}}},u=B=>e.jsx(a,{...B}),r=u.bind({});r.storyName="Default";const t=u.bind({});t.storyName="With Opacity";t.args={label:"Background Color",defaultValue:{hex:"#FF5733",opacity:80},showOpacity:!0};const o=u.bind({});o.storyName="Without Opacity";o.args={label:"Text Color",defaultValue:{hex:"#000000",opacity:100},showOpacity:!1};const s=()=>e.jsxs(p,{display:"flex",flexDirection:"column",gap:"spacing.6",children:[e.jsx(a,{label:"Small",size:"small",defaultValue:{hex:"#FF5733",opacity:100}}),e.jsx(a,{label:"Medium",size:"medium",defaultValue:{hex:"#33FF57",opacity:75}}),e.jsx(a,{label:"Large",size:"large",defaultValue:{hex:"#3357FF",opacity:50}})]}),i=()=>e.jsxs(p,{display:"flex",flexDirection:"column",gap:"spacing.6",children:[e.jsx(a,{label:"Label",labelPosition:"left",defaultValue:{hex:"#FFFFFF",opacity:100}}),e.jsx(a,{label:"Label",labelPosition:"left",defaultValue:{hex:"#FFFFFF",opacity:100},showOpacity:!1})]}),c=()=>e.jsxs(p,{display:"flex",flexDirection:"column",gap:"spacing.6",children:[e.jsx(a,{label:"Help Text",defaultValue:{hex:"#FFFFFF",opacity:100},helpText:"Enter a 6-digit hex code"}),e.jsx(a,{label:"Error State",defaultValue:{hex:"#ZZZ",opacity:100},validationState:"error",errorText:"Invalid hex color"}),e.jsx(a,{label:"Success State",defaultValue:{hex:"#00FF00",opacity:100},validationState:"success",successText:"Color saved successfully"})]}),l=u.bind({});l.storyName="Disabled";l.args={label:"Disabled Color",defaultValue:{hex:"#CCCCCC",opacity:50},isDisabled:!0};var n,d,x;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return <ColorInput {...args} />;
}`,...(x=(d=r.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var m,F,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <ColorInput {...args} />;
}`,...(f=(F=t.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var y,b,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <ColorInput {...args} />;
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,C,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.6">
      <ColorInput label="Small" size="small" defaultValue={{
      hex: '#FF5733',
      opacity: 100
    }} />
      <ColorInput label="Medium" size="medium" defaultValue={{
      hex: '#33FF57',
      opacity: 75
    }} />
      <ColorInput label="Large" size="large" defaultValue={{
      hex: '#3357FF',
      opacity: 50
    }} />
    </Box>;
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var V,I,j;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.6">
      <ColorInput label="Label" labelPosition="left" defaultValue={{
      hex: '#FFFFFF',
      opacity: 100
    }} />
      <ColorInput label="Label" labelPosition="left" defaultValue={{
      hex: '#FFFFFF',
      opacity: 100
    }} showOpacity={false} />
    </Box>;
}`,...(j=(I=i.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var D,O,T;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.6">
      <ColorInput label="Help Text" defaultValue={{
      hex: '#FFFFFF',
      opacity: 100
    }} helpText="Enter a 6-digit hex code" />
      <ColorInput label="Error State" defaultValue={{
      hex: '#ZZZ',
      opacity: 100
    }} validationState="error" errorText="Invalid hex color" />
      <ColorInput label="Success State" defaultValue={{
      hex: '#00FF00',
      opacity: 100
    }} validationState="success" successText="Color saved successfully" />
    </Box>;
}`,...(T=(O=c.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var v,z,L;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <ColorInput {...args} />;
}`,...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const Z=["Default","WithOpacity","WithoutOpacity","Sizes","LabelPositionLeft","ValidationStates","Disabled"];export{r as Default,l as Disabled,i as LabelPositionLeft,s as Sizes,c as ValidationStates,t as WithOpacity,o as WithoutOpacity,Z as __namedExportsOrder,W as default};
