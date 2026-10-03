import{jN as i,j as n,X as s,j5 as d,bf as g,bg as k,bh as h}from"./iframe-C1qQ09LF.js";import{i as c}from"./iconMap-BGYDFM5U.js";import{g as j}from"./storybookArgTypes-DFfQV31s.js";import"./preload-helper-Dp1pzeXC.js";const y={title:"Components/Link/BaseLink (Internal)",variant:"anchor",component:i,args:{children:"Pay Now",onClick:o=>{console.log("clicked",o)},href:"https://github.com/razorpay/blade",target:"_blank",rel:"noreferrer noopener",contrast:"low"},tags:["autodocs"],argTypes:{icon:{name:"icon",type:"select",options:Object.keys(c)},...j()},parameters:{docs:{page:()=>n.jsxs(n.Fragment,{children:[n.jsx(s,{}),n.jsx(d,{children:"This is the internal BaseLink component."}),n.jsx(s,{children:"Example"}),n.jsx(g,{}),n.jsx(s,{children:"Properties"}),n.jsx(k,{}),n.jsx(h,{})]})}}},x=({icon:o,children:p,...m})=>{const l=c[o];return n.jsx(i,{icon:l,...m,children:p})},e=x.bind({});e.storyName="BaseLink";var r,a,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
  icon,
  children,
  ...args
}) => {
  const IconComponent = iconMap[icon as unknown as string];
  return <BaseLinkComponent icon={IconComponent} {...args}>
      {children}
    </BaseLinkComponent>;
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const C=["BaseLink"];export{e as BaseLink,C as __namedExportsOrder,y as default};
