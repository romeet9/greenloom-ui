import{j as r,B as m,H as n}from"./iframe-C1qQ09LF.js";import{c as p}from"./index-Dc_7pmQ9.js";import{t as c}from"./SideNav.stories--9cQVGRd.js";import"./preload-helper-Dp1pzeXC.js";import"./react-router-dom-qPKeHXvg.js";import"./react-router-CrS3lpF2.js";import"./RazorpayLogo-Cs3mU7R0.js";import"./baseCode-DnWYDQ6N.js";import"./StoryRouter-CDfSoprG.js";import"./storybookArgTypes-DFfQV31s.js";import"./StoryPageWrapper-CS0_5maI.js";import"./Sandbox.web-C7diOxlu.js";import"./componentStatusData-8pChZ-5h.js";import"./Sandbox.web-B2xP21Qp.js";const l=Object.values(p(c)),e=()=>r.jsx(m,{display:"flex",flexDirection:"column",gap:"spacing.4",children:l.filter(o=>{var t;return(t=o.storyName)==null?void 0:t.includes("Dashboard")}).map(o=>r.jsxs(r.Fragment,{children:[r.jsx(n,{children:o.storyName}),r.jsx(o,{})]}))}),D={title:"Components/KitchenSink/SideNav",component:e,parameters:{chromatic:{disableSnapshot:!1},options:{showPanel:!1}}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(): JSX.Element => {
  return <Box display="flex" flexDirection="column" gap="spacing.4">
      {allStories.filter(Story => Story.storyName?.includes('Dashboard')).map(Story => {
      return <>
              <Heading>{Story.storyName}</Heading>
              <Story />
            </>;
    })}
    </Box>;
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const H=["SideNav"];export{e as SideNav,H as __namedExportsOrder,D as default};
