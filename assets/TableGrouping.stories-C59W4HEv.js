import{iV as B,j as e,B as g,r as v,iW as D,iX as E,iY as i,iZ as N,i_ as A,i$ as u,a8 as p}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const X={title:"Components/Table/Grouping",component:B,parameters:{docs:{page:null}}},h={nodes:[{id:"july13",method:"Rzp - July 13",amount:245e3,fees:8750,total:253750,nodes:[{id:"july13-card",method:"Card",amount:15e4,fees:6e3,total:156e3,nodes:null},{id:"july13-upi",method:"UPI",amount:65e3,fees:0,total:65e3,nodes:null},{id:"july13-netbanking",method:"Net Banking",amount:3e4,fees:2750,total:32750,nodes:null}]},{id:"july12",method:"Rzp - July 12",amount:185e3,fees:5950,total:190950,nodes:[{id:"july12-card",method:"Card",amount:12e4,fees:4800,total:124800,nodes:null},{id:"july12-upi",method:"UPI",amount:45e3,fees:0,total:45e3,nodes:null},{id:"july12-netbanking",method:"Net Banking",amount:2e4,fees:1150,total:21150,nodes:null}]},{id:"july11",method:"Rzp - July 11",amount:125e3,fees:4250,total:129250,nodes:[{id:"july11-card",method:"Card",amount:85e3,fees:3400,total:88400,nodes:null},{id:"july11-upi",method:"UPI",amount:25e3,fees:0,total:25e3,nodes:null},{id:"july11-netbanking",method:"Net Banking",amount:15e3,fees:850,total:15850,nodes:null}]}]},j=({data:c,selectionType:l,onSelectionChange:o,gridColumnStart:n,gridColumnEnd:r,defaultSelectedIds:R,disabledIds:m})=>e.jsx(B,{data:c,selectionType:l,isGrouped:!0,onSelectionChange:o,showBorderedCells:!0,defaultSelectedIds:R,children:k=>e.jsxs(e.Fragment,{children:[e.jsx(D,{children:e.jsxs(E,{children:[e.jsx(i,{children:"Payment Method"}),e.jsx(i,{children:"Amount"}),e.jsx(i,{children:"Fees"}),e.jsx(i,{children:"Total"})]})}),e.jsx(N,{children:k.map((t,w)=>e.jsxs(A,{item:t,isDisabled:m==null?void 0:m.includes(t.id),children:[e.jsx(u,{gridColumnStart:t.treeXLevel===0?n??1:void 0,gridColumnEnd:t.treeXLevel===0?r??5:void 0,children:t.method}),t.treeXLevel!==0&&e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsx(p,{value:t.amount,isAffixSubtle:!1})}),e.jsx(u,{children:e.jsx(p,{value:t.fees,isAffixSubtle:!1})}),e.jsx(u,{children:e.jsx(p,{value:t.total,isAffixSubtle:!1})})]})]},w))})]})}),s=()=>e.jsx(g,{children:e.jsx(j,{data:h,selectionType:"none"})});s.storyName="Basic Grouping";const a=()=>{const[c,l]=v.useState([]),o=({selectedIds:n})=>{console.log("selectedIds",n),l(n)};return e.jsx(g,{children:e.jsx(j,{data:h,selectionType:"multiple",onSelectionChange:o,gridColumnStart:2,gridColumnEnd:6})})};a.storyName="Table Grouping with Selection";const d=()=>{const[c,l]=v.useState([]),o=({selectedIds:r})=>{console.log("selectedIds",r),l(r)},n=["july12","july12-card","july12-upi","july12-netbanking"];return e.jsx(g,{children:e.jsx(j,{data:h,selectionType:"multiple",onSelectionChange:o,gridColumnStart:2,gridColumnEnd:6,defaultSelectedIds:n,disabledIds:n})})};d.storyName="Table Grouping with Disabled Rows";var S,x,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Box>
      <GroupingTableTemplate data={sampleData} selectionType="none" />
    </Box>;
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var I,f,T;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [ignoredSelectedIds, setIgnoredSelectedIds] = useState<Identifier[]>([]);
  const handleSelectionChange = ({
    selectedIds
  }: {
    selectedIds: Identifier[];
  }): void => {
    console.log('selectedIds', selectedIds);
    setIgnoredSelectedIds(selectedIds);
  };
  return <Box>
      <GroupingTableTemplate data={sampleData} selectionType="multiple" onSelectionChange={handleSelectionChange} gridColumnStart={2} gridColumnEnd={6} />
    </Box>;
}`,...(T=(f=a.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var b,C,G;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [ignoredSelectedIds, setIgnoredSelectedIds] = useState<Identifier[]>([]);
  const handleSelectionChange = ({
    selectedIds
  }: {
    selectedIds: Identifier[];
  }): void => {
    console.log('selectedIds', selectedIds);
    setIgnoredSelectedIds(selectedIds);
  };
  const july12GroupIds = ['july12', 'july12-card', 'july12-upi', 'july12-netbanking'];
  return <Box>
      <GroupingTableTemplate data={sampleData} selectionType="multiple" onSelectionChange={handleSelectionChange} gridColumnStart={2} gridColumnEnd={6} defaultSelectedIds={july12GroupIds} disabledIds={july12GroupIds} />
    </Box>;
}`,...(G=(C=d.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};const z=["BasicGrouping","TableGroupingWithSelection","TableGroupingWithDisabledRows"];export{s as BasicGrouping,d as TableGroupingWithDisabledRows,a as TableGroupingWithSelection,z as __namedExportsOrder,X as default};
