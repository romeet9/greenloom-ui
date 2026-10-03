import{jV as p,j as e,n as l,bb as c,F as m,B as g,jW as u,jX as v,eR as S}from"./iframe-C1qQ09LF.js";import{i as a}from"./iconMap-BGYDFM5U.js";import"./preload-helper-Dp1pzeXC.js";const n={'<Badge color="positive" size="small">NEW</Badge>':e.jsx(m,{color:"positive",size:"small",children:"NEW"})},o={'<Button icon={PlusIcon} variant="tertiary" size="xsmall" />':e.jsx(l,{icon:c,variant:"tertiary",size:"xsmall",accessibilityLabel:"Add item"})},B={title:"Components/SideNav/SideNavLink Playground",component:p,argTypes:{icon:{name:"icon",type:"select",options:Object.keys(a),mapping:a},titleSuffix:{name:"titleSuffix",type:"select",options:Object.keys(n),mapping:n},trailing:{name:"trailing",type:"select",options:Object.keys(o),mapping:o}}},x=d=>e.jsx(g,{children:e.jsx(u,{position:"absolute",top:"spacing.0",children:e.jsx(v,{children:e.jsx(p,{...d})})})}),i=x.bind({});i.args={title:"Home",icon:S,tooltip:{content:"Open Dashboard Home (Cmd + H)"}};i.storyName="SideNavLink Playground";var t,s,r;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  return <Box>
      <SideNav position="absolute" top="spacing.0">
        <SideNavBody>
          <SideNavLink {...args} />
        </SideNavBody>
      </SideNav>
    </Box>;
}`,...(r=(s=i.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const b=["SideNavLinkPlayground"];export{i as SideNavLinkPlayground,b as __namedExportsOrder,B as default};
