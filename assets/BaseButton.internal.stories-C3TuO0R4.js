import{i9 as s,j as a}from"./iframe-C1qQ09LF.js";import{i as r}from"./iconMap-BGYDFM5U.js";import{S as l}from"./StoryPageWrapper-CS0_5maI.js";import{g as u}from"./storybookArgTypes-DFfQV31s.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const I={title:"Components/Button/BaseButton (Internal)",component:s,args:{variant:"primary",color:"default",children:"Pay Now",onClick:()=>{console.log("clicked")},isDisabled:!1,isLoading:!1,size:"medium",iconPosition:"left",isFullWidth:!1,type:"button"},tags:["autodocs"],argTypes:{...u(),icon:{name:"icon",options:Object.keys(r)}},parameters:{docs:{page:()=>a.jsx(l,{componentDescription:"This is the BaseButton component. It is only for internal Blade usage.",componentName:"BaseButton"})}}},B=({icon:i,children:c,...p})=>{const m=r[i];return a.jsx(s,{icon:m,...p,children:c})},o=B.bind({});o.storyName="Default";var n,t,e;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
  icon,
  children,
  ...args
}) => {
  const IconComponent = iconMap[icon as unknown as string];
  return <BaseButtonComponent icon={IconComponent} {...args}>
      {children}
    </BaseButtonComponent>;
}`,...(e=(t=o.parameters)==null?void 0:t.docs)==null?void 0:e.source}}};const b=["BaseButton"];export{o as BaseButton,b as __namedExportsOrder,I as default};
