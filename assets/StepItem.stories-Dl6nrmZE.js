import{e as i,j as e,jZ as c,N as l,j_ as d,B as I,S as u}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const m=["positive","neutral","notice","information","primary","negative"],S=m.reduce((t,s)=>(t[`<StepItemIndicator color="${s}" />`]=e.jsx(d,{color:s}),t),{}),h=m.reduce((t,s)=>(t[`<StepItemIcon color="${s}" icon={CheckIcon} />`]=e.jsx(c,{icon:l,color:s}),t),{}),r={...S,...h},j={title:"Components/StepGroup/Step Item Playground",component:i,argTypes:{marker:{type:"select",options:Object.keys(r),mapping:r},minWidth:{description:"Minimum width of the StepItem. Only applies in horizontal orientation.",control:"text"},_nestingLevel:{table:{disable:!0}},_index:{table:{disable:!0}},_totalIndex:{table:{disable:!0}}}},x=t=>e.jsx(I,{children:e.jsxs(u,{children:[e.jsx(i,{title:"First Item",description:"A test item to show how first item looks like"}),e.jsx(i,{...t}),e.jsx(i,{title:"Last Item",description:"A test item to show how last item looks like"})]})}),o=x.bind({});o.args={title:"Item Title",timestamp:"Thu 15th Oct, 2024",description:"Item Description",onClick:void 0};o.storyName="Step Item Playground";var n,a,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return <Box>
      <StepGroup>
        <StepItem title="First Item" description="A test item to show how first item looks like" />
        <StepItem {...args} />
        <StepItem title="Last Item" description="A test item to show how last item looks like" />
      </StepGroup>
    </Box>;
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const y=["StepItemPlayground"];export{o as StepItemPlayground,y as __namedExportsOrder,j as default};
