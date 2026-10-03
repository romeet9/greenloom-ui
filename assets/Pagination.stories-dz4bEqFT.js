import{jO as c,j as a,X as D,r as l,B as u,T as N}from"./iframe-C1qQ09LF.js";import{S as B}from"./Sandbox.web-B2xP21Qp.js";import{S as I}from"./StoryPageWrapper-CS0_5maI.js";import{a as v}from"./storybookArgTypes-DFfQV31s.js";import"./preload-helper-Dp1pzeXC.js";import"./baseCode-DnWYDQ6N.js";import"./Sandbox.web-C7diOxlu.js";import"./componentStatusData-8pChZ-5h.js";const L=()=>a.jsxs(I,{componentDescription:"Pagination is a navigation component that allows users to navigate through multiple pages of content. It provides page number navigation, page size selection, and direct page jumping capabilities.",componentName:"Pagination",figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=75154-262065&m=dev",children:[a.jsx(D,{children:"Usage"}),a.jsx(B,{showConsole:!0,children:`
        import { Pagination } from '@greenloom/ui/components';
        import { useState } from 'react';
        
        function App() {
          const [selectedPage, setSelectedPage] = useState(1);
          
          return (
            <Pagination
              totalPages={100}
              selectedPage={selectedPage}
              onSelectedPageChange={({ page }) => setSelectedPage(page)}
              showPageNumberSelector
              showPageSizePicker
            />
          );
        }

        export default App;
      `})]}),Z={title:"Components/Pagination",component:c,args:{totalPages:100,selectedPage:1,defaultSelectedPage:1,defaultPageSize:10,showPageSizePicker:!1,showPageNumberSelector:!1,showLabel:!1,isDisabled:!1,onSelectedPageChange:({page:e})=>{console.log("Page changed:",e)},onPageSizeChange:({pageSize:e})=>{console.log("Page size changed:",e)}},tags:["autodocs"],argTypes:{...v(),totalPages:{control:"number",description:"Total pages in the pagination"},selectedPage:{control:"number",description:"Current active page (1-indexed). When provided, component is controlled."},defaultSelectedPage:{control:"number",description:"Default page when uncontrolled (1-indexed, where 1 is the first page)."},defaultPageSize:{control:"select",options:[10,25,50],description:"The default page size."},pageSize:{control:"select",options:[10,25,50],description:"Current page size when controlled."},showPageSizePicker:{control:"boolean",description:"Whether to show the page size picker."},showPageNumberSelector:{control:"boolean",description:"Whether to show the page number selector."},showLabel:{control:"boolean",description:"Whether to show the label."},label:{control:"text",description:"Custom label text."},isDisabled:{control:"boolean",description:"Whether the pagination component is disabled."}},parameters:{docs:{page:L}}},E=({...e})=>{const[d,o]=l.useState(1),[g,P]=l.useState(10);return a.jsx(u,{padding:"spacing.4",backgroundColor:"surface.background.gray.intense",children:a.jsx(c,{...e,selectedPage:d,pageSize:g,totalPages:1e3/g,onSelectedPageChange:({page:p})=>o(p),onPageSizeChange:({pageSize:p})=>P(p)})})},n=E.bind({});n.args={selectedPage:1,showPageNumberSelector:!0,showPageSizePicker:!0,showLabel:!0};const T=()=>{const[e,d]=l.useState(1),[o,g]=l.useState(10);return a.jsxs(u,{padding:"spacing.4",backgroundColor:"surface.background.gray.intense",children:[a.jsxs(N,{marginBottom:"spacing.4",children:["Current Page: ",e,", Page Size: ",o]}),a.jsx(c,{totalPages:1e3/o,selectedPage:e,pageSize:o,onSelectedPageChange:({page:i})=>d(i),onPageSizeChange:({pageSize:i})=>g(i),showPageSizePicker:!0,showPageNumberSelector:!0,showLabel:!0})]})},s=()=>a.jsx(T,{});s.storyName="Controlled Example";const U=()=>a.jsx(u,{padding:"spacing.4",backgroundColor:"surface.background.gray.intense",children:a.jsx(c,{totalPages:100,defaultSelectedPage:1,defaultPageSize:10,onSelectedPageChange:({page:e})=>console.log("Page changed:",e),onPageSizeChange:({pageSize:e})=>console.log("Page size changed:",e),showPageSizePicker:!0,showPageNumberSelector:!0,showLabel:!0})}),r=()=>a.jsx(U,{});r.storyName="Uncontrolled Example";const t=E.bind({});t.args={totalPages:10,isDisabled:!0,showPageSizePicker:!0,showPageNumberSelector:!0};t.storyName="Disabled State";var m,S,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`({
  ...args
}) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [pageSize, setPageSize] = useState<10 | 25 | 50>(10);
  const totalItems = 1000;
  return <Box padding="spacing.4" backgroundColor="surface.background.gray.intense">
      <PaginationComponent {...args} selectedPage={selectedPage} pageSize={pageSize} totalPages={totalItems / pageSize} onSelectedPageChange={({
      page
    }) => setSelectedPage(page)} onPageSizeChange={({
      pageSize
    }) => setPageSize(pageSize as 10 | 25 | 50)} />
    </Box>;
}`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var b,z,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <ControlledExample />;
}`,...(x=(z=s.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var f,C,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <UncontrolledExample />;
}`,...(w=(C=r.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var k,j,y;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`({
  ...args
}) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [pageSize, setPageSize] = useState<10 | 25 | 50>(10);
  const totalItems = 1000;
  return <Box padding="spacing.4" backgroundColor="surface.background.gray.intense">
      <PaginationComponent {...args} selectedPage={selectedPage} pageSize={pageSize} totalPages={totalItems / pageSize} onSelectedPageChange={({
      page
    }) => setSelectedPage(page)} onPageSizeChange={({
      pageSize
    }) => setPageSize(pageSize as 10 | 25 | 50)} />
    </Box>;
}`,...(y=(j=t.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const q=["Default","ControlledExampleStory","UncontrolledExampleStory","Disabled"];export{s as ControlledExampleStory,n as Default,t as Disabled,r as UncontrolledExampleStory,q as __namedExportsOrder,Z as default};
