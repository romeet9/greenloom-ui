import{jO as s,j as o,B as n,T as g}from"./iframe-C1qQ09LF.js";import{S as p}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const x={title:"Components/Pagination/API",component:s,parameters:{docs:{page:()=>o.jsx(p,{componentDescription:"You can find a complete list of Pagination props here",componentName:"Pagination",apiDecisionComponentName:"Pagination"})}}},c=({...a})=>o.jsxs(n,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",minHeight:"200px",children:[o.jsx(n,{marginBottom:"spacing.4",children:o.jsx(g,{children:"Check the props panel to see all available props and their descriptions."})}),o.jsx(s,{...a})]}),e=c.bind({});e.args={totalPages:100,currentPage:0,defaultCurrentPage:0,defaultPageSize:10,showPageSizePicker:!0,showPageNumberSelector:!0,showLabel:!0,onPageChange:({page:a})=>{console.log("Page changed:",a)},onPageSizeChange:({pageSize:a})=>{console.log("Page size changed:",a)}};e.storyName="Pagination";var t,r,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
  ...args
}) => {
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto" minHeight="200px">
      <Box marginBottom="spacing.4">
        <Text>Check the props panel to see all available props and their descriptions.</Text>
      </Box>
      <Pagination {...args} />
    </Box>;
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const f=["PaginationAPIStory"];export{e as PaginationAPIStory,f as __namedExportsOrder,x as default};
