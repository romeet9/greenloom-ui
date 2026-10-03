import{j as t,B as o,H as a}from"./iframe-C1qQ09LF.js";import{c as n}from"./index-Dc_7pmQ9.js";import{s as m}from"./StepGroup.stories-C5WXZMDY.js";import"./preload-helper-Dp1pzeXC.js";import"./StoryRouter-CDfSoprG.js";import"./react-router-CrS3lpF2.js";import"./StoryPageWrapper-CS0_5maI.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";import"./Sandbox.web-B2xP21Qp.js";import"./storybookArgTypes-DFfQV31s.js";const c=Object.values(n(m)).filter(r=>r.storyName!=="StepGroupWithReactRouter"),e=()=>t.jsx(o,{display:"flex",flexDirection:"row",gap:"spacing.4",flexWrap:"wrap",width:"100%",children:c.map(r=>t.jsxs(o,{children:[t.jsx(a,{children:r.storyName}),t.jsx(r,{minWidth:"300px"})]},r.storyName))}),G={title:"Components/KitchenSink/StepGroup",component:e,parameters:{chromatic:{disableSnapshot:!1},options:{showPanel:!1}}};var s,p,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(): JSX.Element => {
  return <Box display="flex" flexDirection="row" gap="spacing.4" flexWrap="wrap" width="100%">
      {allStories.map(Story => {
      return <Box key={Story.storyName}>
            <Heading>{Story.storyName}</Heading>
            <Story minWidth="300px" />
          </Box>;
    })}
    </Box>;
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const N=["StepGroup"];export{e as StepGroup,N as __namedExportsOrder,G as default};
