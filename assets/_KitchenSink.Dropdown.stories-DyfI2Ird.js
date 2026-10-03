import{j as r,B as i,H as p}from"./iframe-C1qQ09LF.js";import{c as t}from"./index-Dc_7pmQ9.js";import{d as l}from"./DropdownWithButton.stories-Ch1zj_DF.js";import{d as m}from"./DropdownWithSelect.stories-Dq4h3TF0.js";import"./preload-helper-Dp1pzeXC.js";const c=[...Object.values(t(l)),...Object.values(t(m))],o=()=>r.jsx(i,{display:"flex",flexDirection:"column",gap:"spacing.4",children:c.filter(e=>e.storyName.startsWith("Internal")).map(e=>r.jsxs(r.Fragment,{children:[r.jsx(p,{children:e.storyName}),r.jsx(e,{})]}))}),h={title:"Components/KitchenSink/Dropdown",component:o,parameters:{chromatic:{disableSnapshot:!1},options:{showPanel:!1}}};var s,a,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`(): JSX.Element => {
  return <Box display="flex" flexDirection="column" gap="spacing.4">
      {allStories.filter(Story => Story.storyName.startsWith('Internal')).map(Story => {
      return <>
              <Heading>{Story.storyName}</Heading>
              <Story />
            </>;
    })}
    </Box>;
}`,...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const y=["Dropdown"];export{o as Dropdown,y as __namedExportsOrder,h as default};
