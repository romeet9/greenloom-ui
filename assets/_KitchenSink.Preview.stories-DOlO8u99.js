import{j as e,B as s,H as a}from"./iframe-C1qQ09LF.js";import{c as p}from"./index-Dc_7pmQ9.js";import{p as m}from"./Preview.stories-Mj9yZlJi.js";import"./preload-helper-Dp1pzeXC.js";import"./TextLayer-DHG_rVSn.js";import"./Sandbox.web-B2xP21Qp.js";import"./baseCode-DnWYDQ6N.js";import"./StoryPageWrapper-CS0_5maI.js";import"./Sandbox.web-C7diOxlu.js";import"./componentStatusData-8pChZ-5h.js";import"./storybookArgTypes-DFfQV31s.js";const c=[...Object.values(p(m))],r=()=>e.jsx(s,{display:"flex",flexDirection:"column",gap:"spacing.4",children:c.map(o=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:o.storyName}),e.jsx(o,{})]}))}),y={title:"Components/KitchenSink/Preview",component:r,parameters:{chromatic:{disableSnapshot:!1},options:{showPanel:!1}}};var t,i,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`(): JSX.Element => {
  return <Box display="flex" flexDirection="column" gap="spacing.4">
      {allStories.map(Story => {
      return <>
            <Heading>{Story.storyName}</Heading>
            <Story />
          </>;
    })}
    </Box>;
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const P=["PreviewWindow"];export{r as PreviewWindow,P as __namedExportsOrder,y as default};
