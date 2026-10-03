import{jl as c,j as e,X as O,L as Be,f as B,k6 as m,T as u,C as Ee,ad as o,B as s,n as V,jk as a,dl as Le,J as ze,gx as be,d9 as Pe,cC as De,er as We,eB as Me,at as M,au as _,aS as R,hZ as Re,aj as Ve,f6 as ke,ba as Ke,jj as K,F as Ae,be as z,et as Ge,a3 as Oe}from"./iframe-C1qQ09LF.js";import{S as _e}from"./Sandbox.web-B2xP21Qp.js";import{S as Fe}from"./StoryPageWrapper-CS0_5maI.js";const He=()=>e.jsxs(Fe,{componentName:"TreeView",componentDescription:"TreeView renders a hierarchical list of expandable, selectable items. It works standalone on a page, or inside Dropdown (in place of ActionList) where selection is controlled through the trigger's value / onChange.",figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=125205-58766",note:"TreeView is a web-only component. On React Native it throws an error.",children:[e.jsx(O,{children:"Usage"}),e.jsx(_e,{editorHeight:500,children:`
          import { TreeView, TreeViewItem } from '@greenloom/ui/components';

          function App() {
            return (
              <TreeView
                selectionType="multiple"
                onChange={({ values, selectedGroups }) => {
                  console.log(values, selectedGroups);
                }}
              >
                <TreeViewItem title="India" value="india" defaultIsExpanded>
                  <TreeViewItem title="Karnataka" value="karnataka" defaultIsExpanded>
                    <TreeViewItem title="Bengaluru" value="bengaluru" />
                    <TreeViewItem title="Mysuru" value="mysuru" />
                  </TreeViewItem>
                  <TreeViewItem title="Goa" value="goa" />
                </TreeViewItem>
              </TreeView>
            );
          }

          export default App;
        `}),e.jsx(O,{children:"Keyboard Interactions"}),e.jsxs(Be,{children:[e.jsxs(B,{children:[e.jsx(m,{children:"ArrowDown"})," / ",e.jsx(m,{children:"ArrowUp"})," — move focus to the next / previous visible row (rows hidden under collapsed branches are skipped)"]}),e.jsxs(B,{children:[e.jsx(m,{children:"ArrowRight"})," — expand a collapsed branch; on an expanded branch, move to its first child"]}),e.jsxs(B,{children:[e.jsx(m,{children:"ArrowLeft"})," — collapse an expanded branch; on a leaf, move to its parent"]}),e.jsxs(B,{children:[e.jsx(m,{children:"Home"})," / ",e.jsx(m,{children:"End"})," — move focus to the first / last visible row"]}),e.jsxs(B,{children:[e.jsx(m,{children:"Enter"})," / ",e.jsx(m,{children:"Space"})," — select the focused row (Space is a no-op on TreeViewLoadMore; Enter activates it)"]})]}),e.jsxs(u,{marginTop:"spacing.4",children:["Inside Dropdown, the same map runs through the trigger's keydown pipeline: focus stays on the trigger and the active row is tracked with ",e.jsx(Ee,{children:"aria-activedescendant"}),"."]})]}),Ne={title:"Components/TreeView",component:c,args:{},tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["small","medium"],description:"Visual density of every row in the tree",table:{defaultValue:{summary:"medium"}}}},parameters:{docs:{page:He}}},G=e.jsxs(a,{title:"India",value:"india",defaultIsExpanded:!0,children:[e.jsxs(a,{title:"Karnataka",value:"karnataka",defaultIsExpanded:!0,children:[e.jsx(a,{title:"Bengaluru",value:"bengaluru"}),e.jsx(a,{title:"Mysuru",value:"mysuru"})]}),e.jsx(a,{title:"Goa",value:"goa"})]}),Ze=()=>{const[t,i]=o.useState([]);return e.jsxs(s,{maxWidth:"400px",children:[e.jsx(c,{selectionType:"single",onChange:({values:r})=>i(r),children:G}),e.jsxs(u,{marginTop:"spacing.4",children:["Selected: ",t.join(", ")||"none"]})]})},h=Ze.bind({});h.storyName="Single Select";const Ue=()=>{const[t,i]=o.useState({values:["bengaluru"],selectedGroups:[]});return e.jsxs(s,{maxWidth:"400px",children:[e.jsx(c,{selectionType:"multiple",defaultValue:["bengaluru"],onChange:({values:r,selectedGroups:l})=>i({values:r,selectedGroups:l}),children:G}),e.jsxs(u,{marginTop:"spacing.4",children:["values: [",t.values.join(", "),"]"]}),e.jsxs(u,{children:["selectedGroups: [",t.selectedGroups.join(", "),"]"]})]})},y=Ue.bind({});y.storyName="Multiple Select";const qe=()=>{const[t,i]=o.useState(["mysuru"]),[r,l]=o.useState(!0);return e.jsxs(s,{maxWidth:"400px",display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(s,{display:"flex",gap:"spacing.3",children:[e.jsx(V,{size:"small",onClick:()=>i(["bengaluru","mysuru"]),children:"Select Karnataka"}),e.jsx(V,{size:"small",variant:"tertiary",onClick:()=>i([]),children:"Clear"}),e.jsx(V,{size:"small",variant:"secondary",onClick:()=>l(n=>!n),children:"Toggle Karnataka Expansion"})]}),e.jsx(c,{selectionType:"multiple",value:t,onChange:({values:n})=>i(n),children:e.jsxs(a,{title:"India",value:"india",defaultIsExpanded:!0,children:[e.jsxs(a,{title:"Karnataka",value:"karnataka",isExpanded:r,onExpandChange:({isExpanded:n})=>l(n),children:[e.jsx(a,{title:"Bengaluru",value:"bengaluru"}),e.jsx(a,{title:"Mysuru",value:"mysuru"})]}),e.jsx(a,{title:"Goa",value:"goa"})]})})]})},w=qe.bind({});w.storyName="Controlled";const Je=()=>e.jsx(s,{maxWidth:"400px",children:e.jsx(c,{selectionType:"multiple",children:e.jsxs(a,{title:"India",value:"india",defaultIsExpanded:!0,children:[e.jsxs(a,{title:"Karnataka",value:"karnataka",isDisabled:!0,defaultIsExpanded:!0,children:[e.jsx(a,{title:"Bengaluru",value:"bengaluru"}),e.jsx(a,{title:"Mysuru",value:"mysuru"})]}),e.jsx(a,{title:"Goa",value:"goa"})]})})}),T=Je.bind({});T.storyName="Disabled Branch";const Qe=()=>{const[t,i]=o.useState([]),[r,l]=o.useState(!1),[n,x]=o.useState(!1);return e.jsxs(s,{maxWidth:"400px",display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(s,{children:e.jsx(V,{size:"small",variant:"tertiary",onClick:()=>{x(!1),i([]),l(!1)},children:"Reset (check spinner again)"})}),e.jsxs(c,{selectionType:"multiple",children:[e.jsx(a,{title:"Karnataka",value:"karnataka",hasChildren:!0,isLoading:r,isExpanded:n,onExpandChange:({isExpanded:p})=>{x(p),p&&t.length===0&&(l(!0),setTimeout(()=>{i(["Bengaluru","Mysuru","Hubballi"]),l(!1)},1500))},children:t.map(p=>e.jsx(a,{title:p,value:p.toLowerCase()},p))}),e.jsx(a,{title:"Goa",value:"goa"})]})]})},v=Qe.bind({});v.storyName="Async Children";const P=["Bengaluru","Mysuru","Hubballi","Mangaluru","Belagavi","Kalaburagi"],D=["Goa","Kerala","Maharashtra","Tamil Nadu"],L=2,Xe=()=>{const[t,i]=o.useState(L),[r,l]=o.useState(1),[n,x]=o.useState(!1),[p,k]=o.useState(!1);return e.jsx(s,{maxWidth:"400px",children:e.jsxs(c,{selectionType:"multiple",children:[e.jsxs(a,{title:"Karnataka",value:"karnataka",defaultIsExpanded:!0,children:[P.slice(0,t).map(d=>e.jsx(a,{title:d,value:d.toLowerCase()},d)),t<P.length?e.jsx(K,{isLoading:n,onClick:()=>{x(!0),setTimeout(()=>{i(d=>Math.min(d+L,P.length)),x(!1)},1500)}}):null]}),D.slice(0,r).map(d=>e.jsx(a,{title:d,value:d.toLowerCase()},d)),r<D.length?e.jsx(K,{isLoading:p,onClick:()=>{k(!0),setTimeout(()=>{l(d=>Math.min(d+L,D.length)),k(!1)},1500)},children:"Show more states"}):null]})})},f=Xe.bind({});f.storyName="Load More";const Ye=()=>e.jsxs(s,{display:"flex",gap:"spacing.8",flexWrap:"wrap",minHeight:"400px",children:[e.jsxs(s,{maxWidth:"300px",flexGrow:1,children:[e.jsx(u,{size:"small",weight:"semibold",marginBottom:"spacing.3",children:"Branches selectable (default)"}),e.jsxs(M,{selectionType:"single",children:[e.jsx(_,{label:"Region",placeholder:"Select region"}),e.jsx(R,{children:e.jsx(c,{children:G})})]})]}),e.jsxs(s,{maxWidth:"300px",flexGrow:1,children:[e.jsxs(u,{size:"small",weight:"semibold",marginBottom:"spacing.3",children:["Leaf-only selection (branches use isSelectable=","{false}",")"]}),e.jsxs(M,{selectionType:"single",children:[e.jsx(_,{label:"City",placeholder:"Select city"}),e.jsx(R,{children:e.jsx(c,{children:e.jsxs(a,{title:"India",value:"india",isSelectable:!1,defaultIsExpanded:!0,children:[e.jsxs(a,{title:"Karnataka",value:"karnataka",isSelectable:!1,children:[e.jsx(a,{title:"Bengaluru",value:"bengaluru"}),e.jsx(a,{title:"Mysuru",value:"mysuru"})]}),e.jsxs(a,{title:"Goa",value:"goa",isSelectable:!1,children:[e.jsx(a,{title:"Panaji",value:"panaji"}),e.jsx(a,{title:"Margao",value:"margao"})]})]})})})]})]})]}),j=Ye.bind({});j.storyName="In Dropdown";const $e=()=>{const[t,i]=o.useState([]),[r,l]=o.useState(!1);return e.jsxs(s,{minHeight:"500px",children:[e.jsxs(M,{selectionType:"multiple",isOpen:r,onOpenChange:l,children:[e.jsx(Re,{label:"Regions",value:t,onChange:({values:n})=>i(n),onClearButtonClick:()=>i([])}),e.jsxs(R,{children:[e.jsx(c,{children:e.jsxs(a,{title:"India",value:"india",defaultIsExpanded:!0,leading:e.jsx(ke,{color:"interactive.icon.gray.muted",size:"medium"}),children:[e.jsxs(a,{title:"Karnataka",value:"karnataka",defaultIsExpanded:!0,trailing:e.jsx(Ve,{value:2,color:"information",size:"small"}),children:[e.jsx(a,{title:"Bengaluru",value:"bengaluru"}),e.jsx(a,{title:"Mysuru",value:"mysuru"})]}),e.jsx(a,{title:"Goa",value:"goa"})]})}),e.jsx(Ke,{children:e.jsxs(s,{display:"flex",gap:"spacing.3",width:"100%",children:[e.jsx(V,{isFullWidth:!0,size:"small",variant:"tertiary",onClick:()=>i([]),children:"Clear"}),e.jsx(V,{isFullWidth:!0,size:"small",onClick:()=>l(!1),children:"Apply"})]})})]})]}),e.jsx(u,{marginTop:"spacing.4",children:'Selecting all of Karnataka shows the chip as "Karnataka", not a leaf count'})]})},I=$e.bind({});I.storyName="In Dropdown with Filter Chip";const ea=()=>e.jsx(s,{maxWidth:"360px",borderWidth:"thin",borderColor:"surface.border.gray.muted",children:e.jsx(c,{selectionType:"multiple",children:e.jsx(a,{title:"Payment Gateway Configuration",value:"pg-config",defaultIsExpanded:!0,children:e.jsxs(a,{title:"International Payment Methods and Wallets",value:"intl-methods",defaultIsExpanded:!0,children:[e.jsx(a,{title:"A very long leaf title that should truncate with ellipsis at depth 3 on small screens",value:"long-leaf",description:"Truncation instead of wrapping at 360px"}),e.jsx(a,{title:"Short leaf",value:"short-leaf"})]})})})}),S=ea.bind({});S.storyName="Truncation";const A=({iconSize:t,avatarSize:i,extraTitles:r=[],loadMore:l=null})=>e.jsxs(a,{title:"Reports",value:"reports",description:"Branch with a leading icon and a trailing counter",leading:e.jsx(ke,{color:"interactive.icon.gray.muted",size:t}),trailing:e.jsx(Ve,{value:12,color:"information",size:"small"}),defaultIsExpanded:!0,children:[e.jsx(a,{title:"Settlements",value:"settlements",leading:e.jsx(z,{color:"interactive.icon.gray.muted",size:t}),trailing:e.jsx(Ae,{color:"positive",size:"small",children:"Live"})}),e.jsx(a,{title:"Payouts",value:"payouts",description:"Leaf with a description and plain trailing text",leading:e.jsx(z,{color:"interactive.icon.gray.muted",size:t}),trailing:e.jsx(u,{size:"small",color:"surface.text.gray.muted",children:"Updated 2d ago"})}),e.jsx(a,{title:"Shared with Saurabh",value:"shared",leading:e.jsx(Oe,{name:"Saurabh Daware",size:i}),trailing:e.jsx(Ge,{color:"surface.icon.gray.muted",size:t})}),r.map(n=>e.jsx(a,{title:n,value:n.toLowerCase().replace(/\s+/g,"-"),leading:e.jsx(z,{color:"interactive.icon.gray.muted",size:t})},n)),l]}),aa=()=>e.jsxs(s,{display:"flex",gap:"spacing.8",flexWrap:"wrap",children:[e.jsxs(s,{maxWidth:"400px",flexGrow:1,children:[e.jsx(u,{size:"small",weight:"semibold",marginBottom:"spacing.3",children:"Single select"}),e.jsx(c,{selectionType:"single",children:A({iconSize:"medium",avatarSize:"small"})})]}),e.jsxs(s,{maxWidth:"400px",flexGrow:1,children:[e.jsx(u,{size:"small",weight:"semibold",marginBottom:"spacing.3",children:"Multiple select (leading renders after the checkbox)"}),e.jsx(c,{selectionType:"multiple",defaultValue:["payouts"],children:A({iconSize:"medium",avatarSize:"small"})})]})]}),C=aa.bind({});C.storyName="Leading & Trailing";const W=["Refunds","Disputes","Invoices","Tax deductions"],F=({size:t,label:i,iconSize:r,avatarSize:l})=>{const[n,x]=o.useState(0),[p,k]=o.useState(!1);return e.jsxs(s,{maxWidth:"400px",flexGrow:1,children:[e.jsx(u,{size:"small",weight:"semibold",marginBottom:"spacing.3",children:i}),e.jsx(c,{selectionType:"multiple",size:t,children:A({iconSize:r,avatarSize:l,extraTitles:W.slice(0,n),loadMore:n<W.length?e.jsx(K,{isLoading:p,onClick:()=>{k(!0),setTimeout(()=>{x(d=>Math.min(d+L,W.length)),k(!1)},1500)}}):null})})]})},ta=()=>e.jsxs(s,{display:"flex",gap:"spacing.8",flexWrap:"wrap",children:[e.jsx(F,{size:"medium",label:'size="medium" (default)',iconSize:"medium",avatarSize:"small"}),e.jsx(F,{size:"small",label:'size="small"',iconSize:"small",avatarSize:"xsmall"})]}),b=ta.bind({});b.storyName="Sizes";const E=({label:t})=>e.jsxs(s,{width:"220px",height:"280px",borderRadius:"medium",backgroundColor:"feedback.background.positive.intense",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"spacing.4",children:[e.jsx(be,{size:"2xlarge",color:"surface.icon.staticWhite.normal"}),e.jsx(u,{weight:"semibold",color:"surface.text.staticWhite.normal",children:t})]}),sa=()=>e.jsx(s,{maxWidth:"320px",children:e.jsx(c,{selectionType:"single",defaultValue:["payment-success"],children:e.jsxs(a,{title:"Checkout",value:"checkout",leading:e.jsx(Me,{}),isSelectable:!1,defaultIsExpanded:!0,children:[e.jsx(a,{title:"Payment Animation",value:"payment-animation",leading:e.jsx(Le,{}),popover:{title:"Payment Animation",content:e.jsx(E,{label:"Confirming payment"})}}),e.jsx(a,{title:"Payment Processing",value:"payment-processing",leading:e.jsx(ze,{}),popover:{title:"Payment Processing",content:e.jsx(E,{label:"Processing payment"})}}),e.jsx(a,{title:"Payment Success",value:"payment-success",leading:e.jsx(be,{}),popover:{title:"Payment Success",content:e.jsx(E,{label:"Payment Successful"})}}),e.jsx(a,{title:"Retry Payment",value:"retry-payment",leading:e.jsx(Pe,{}),popover:{title:"Retry Payment",content:e.jsx(E,{label:"Retry Payment"})}}),e.jsx(a,{title:"Cancel Payment",value:"cancel-payment",leading:e.jsx(De,{}),isDisabled:!0}),e.jsx(a,{title:"Exit Payment",value:"exit-payment",leading:e.jsx(We,{})})]})})}),g=sa.bind({});g.storyName="With Hover Preview";g.parameters={docs:{description:{story:"Pass `popover` to show a rich preview when the row is hovered with a mouse. It opens to the right of the row by default so it does not cover the rows above or below, and moving the pointer from row to row switches previews in place."}}};var H,N,Z;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [selected, setSelected] = React.useState<string[]>([]);
  return <Box maxWidth="400px">
      <TreeViewComponent selectionType="single" onChange={({
      values
    }) => setSelected(values)}>
        {regionsTree}
      </TreeViewComponent>
      <Text marginTop="spacing.4">Selected: {selected.join(', ') || 'none'}</Text>
    </Box>;
}`,...(Z=(N=h.parameters)==null?void 0:N.docs)==null?void 0:Z.source}}};var U,q,J;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const [payload, setPayload] = React.useState<{
    values: string[];
    selectedGroups: string[];
  }>({
    // pre-selection: bengaluru makes Karnataka (and India) indeterminate
    values: ['bengaluru'],
    selectedGroups: []
  });
  return <Box maxWidth="400px">
      <TreeViewComponent selectionType="multiple" defaultValue={['bengaluru']} onChange={({
      values,
      selectedGroups
    }) => setPayload({
      values,
      selectedGroups
    })}>
        {regionsTree}
      </TreeViewComponent>
      <Text marginTop="spacing.4">values: [{payload.values.join(', ')}]</Text>
      <Text>selectedGroups: [{payload.selectedGroups.join(', ')}]</Text>
    </Box>;
}`,...(J=(q=y.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState<string[]>(['mysuru']);
  const [isKarnatakaExpanded, setIsKarnatakaExpanded] = React.useState(true);
  return <Box maxWidth="400px" display="flex" flexDirection="column" gap="spacing.4">
      <Box display="flex" gap="spacing.3">
        <Button size="small" onClick={() => setValues(['bengaluru', 'mysuru'])}>
          Select Karnataka
        </Button>
        <Button size="small" variant="tertiary" onClick={() => setValues([])}>
          Clear
        </Button>
        <Button size="small" variant="secondary" onClick={() => setIsKarnatakaExpanded(previous => !previous)}>
          Toggle Karnataka Expansion
        </Button>
      </Box>
      <TreeViewComponent selectionType="multiple" value={values} onChange={({
      values: nextValues
    }) => setValues(nextValues)}>
        <TreeViewItem title="India" value="india" defaultIsExpanded>
          <TreeViewItem title="Karnataka" value="karnataka" isExpanded={isKarnatakaExpanded} onExpandChange={({
          isExpanded
        }) => setIsKarnatakaExpanded(isExpanded)}>
            <TreeViewItem title="Bengaluru" value="bengaluru" />
            <TreeViewItem title="Mysuru" value="mysuru" />
          </TreeViewItem>
          <TreeViewItem title="Goa" value="goa" />
        </TreeViewItem>
      </TreeViewComponent>
    </Box>;
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,ee,ae;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`() => <Box maxWidth="400px">
    <TreeViewComponent selectionType="multiple">
      <TreeViewItem title="India" value="india" defaultIsExpanded>
        <TreeViewItem title="Karnataka" value="karnataka" isDisabled defaultIsExpanded>
          <TreeViewItem title="Bengaluru" value="bengaluru" />
          <TreeViewItem title="Mysuru" value="mysuru" />
        </TreeViewItem>
        <TreeViewItem title="Goa" value="goa" />
      </TreeViewItem>
    </TreeViewComponent>
  </Box>`,...(ae=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,ie;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const [cities, setCities] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isKarnatakaExpanded, setIsKarnatakaExpanded] = React.useState(false);
  return <Box maxWidth="400px" display="flex" flexDirection="column" gap="spacing.4">
      <Box>
        <Button size="small" variant="tertiary" onClick={() => {
        // collapse and drop the loaded children so the next expansion re-triggers the fetch + spinner
        setIsKarnatakaExpanded(false);
        setCities([]);
        setIsLoading(false);
      }}>
          Reset (check spinner again)
        </Button>
      </Box>
      <TreeViewComponent selectionType="multiple">
        <TreeViewItem title="Karnataka" value="karnataka" hasChildren isLoading={isLoading} isExpanded={isKarnatakaExpanded} onExpandChange={({
        isExpanded
      }) => {
        setIsKarnatakaExpanded(isExpanded);
        if (isExpanded && cities.length === 0) {
          setIsLoading(true);
          setTimeout(() => {
            setCities(['Bengaluru', 'Mysuru', 'Hubballi']);
            setIsLoading(false);
          }, 1500);
        }
      }}>
          {cities.map(city => <TreeViewItem key={city} title={city} value={city.toLowerCase()} />)}
        </TreeViewItem>
        <TreeViewItem title="Goa" value="goa" />
      </TreeViewComponent>
    </Box>;
}`,...(ie=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ne,le,re;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const [visibleCityCount, setVisibleCityCount] = React.useState(PAGE_SIZE);
  const [visibleStateCount, setVisibleStateCount] = React.useState(1);
  const [isLoadingCities, setIsLoadingCities] = React.useState(false);
  const [isLoadingStates, setIsLoadingStates] = React.useState(false);
  return <Box maxWidth="400px">
      <TreeViewComponent selectionType="multiple">
        <TreeViewItem title="Karnataka" value="karnataka" defaultIsExpanded>
          {ALL_CITIES.slice(0, visibleCityCount).map(city => <TreeViewItem key={city} title={city} value={city.toLowerCase()} />)}
          {visibleCityCount < ALL_CITIES.length ? <TreeViewLoadMore isLoading={isLoadingCities} onClick={() => {
          setIsLoadingCities(true);
          setTimeout(() => {
            setVisibleCityCount(count => Math.min(count + PAGE_SIZE, ALL_CITIES.length));
            setIsLoadingCities(false);
          }, 1500);
        }} /> : null}
        </TreeViewItem>
        {OTHER_STATES.slice(0, visibleStateCount).map(state => <TreeViewItem key={state} title={state} value={state.toLowerCase()} />)}
        {/* LoadMore at the root */}
        {visibleStateCount < OTHER_STATES.length ? <TreeViewLoadMore isLoading={isLoadingStates} onClick={() => {
        setIsLoadingStates(true);
        setTimeout(() => {
          setVisibleStateCount(count => Math.min(count + PAGE_SIZE, OTHER_STATES.length));
          setIsLoadingStates(false);
        }, 1500);
      }}>
            Show more states
          </TreeViewLoadMore> : null}
      </TreeViewComponent>
    </Box>;
}`,...(re=(le=f.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var oe,ce,de;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`() => <Box display="flex" gap="spacing.8" flexWrap="wrap" minHeight="400px">
    <Box maxWidth="300px" flexGrow={1}>
      <Text size="small" weight="semibold" marginBottom="spacing.3">
        Branches selectable (default)
      </Text>
      <Dropdown selectionType="single">
        <SelectInput label="Region" placeholder="Select region" />
        <DropdownOverlay>
          <TreeViewComponent>{regionsTree}</TreeViewComponent>
        </DropdownOverlay>
      </Dropdown>
    </Box>
    <Box maxWidth="300px" flexGrow={1}>
      <Text size="small" weight="semibold" marginBottom="spacing.3">
        Leaf-only selection (branches use isSelectable={'{false}'})
      </Text>
      {/* branches opt out of selection with isSelectable={false}: clicking them (or Enter/Space)
          toggles expansion, so only leaf items can become the selected value */}
      <Dropdown selectionType="single">
        <SelectInput label="City" placeholder="Select city" />
        <DropdownOverlay>
          <TreeViewComponent>
            <TreeViewItem title="India" value="india" isSelectable={false} defaultIsExpanded>
              <TreeViewItem title="Karnataka" value="karnataka" isSelectable={false}>
                <TreeViewItem title="Bengaluru" value="bengaluru" />
                <TreeViewItem title="Mysuru" value="mysuru" />
              </TreeViewItem>
              <TreeViewItem title="Goa" value="goa" isSelectable={false}>
                <TreeViewItem title="Panaji" value="panaji" />
                <TreeViewItem title="Margao" value="margao" />
              </TreeViewItem>
            </TreeViewItem>
          </TreeViewComponent>
        </DropdownOverlay>
      </Dropdown>
    </Box>
  </Box>`,...(de=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,me;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const [values, setValues] = React.useState<string[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  return <Box minHeight="500px">
      {/* the overlay is controlled so the footer's Apply can close it */}
      <Dropdown selectionType="multiple" isOpen={isOpen} onOpenChange={setIsOpen}>
        <FilterChipSelectInput label="Regions" value={values} onChange={({
        values: nextValues
      }) => setValues(nextValues)} onClearButtonClick={() => setValues([])} />
        <DropdownOverlay>
          <TreeViewComponent>
            <TreeViewItem title="India" value="india" defaultIsExpanded leading={<FolderIcon color="interactive.icon.gray.muted" size="medium" />}>
              <TreeViewItem title="Karnataka" value="karnataka" defaultIsExpanded trailing={<Counter value={2} color="information" size="small" />}>
                <TreeViewItem title="Bengaluru" value="bengaluru" />
                <TreeViewItem title="Mysuru" value="mysuru" />
              </TreeViewItem>
              <TreeViewItem title="Goa" value="goa" />
            </TreeViewItem>
          </TreeViewComponent>
          <DropdownFooter>
            <Box display="flex" gap="spacing.3" width="100%">
              <Button isFullWidth size="small" variant="tertiary" onClick={() => setValues([])}>
                Clear
              </Button>
              <Button isFullWidth size="small" onClick={() => setIsOpen(false)}>
                Apply
              </Button>
            </Box>
          </DropdownFooter>
        </DropdownOverlay>
      </Dropdown>
      <Text marginTop="spacing.4">
        Selecting all of Karnataka shows the chip as &quot;Karnataka&quot;, not a leaf count
      </Text>
    </Box>;
}`,...(me=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var xe,ge,he;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`() =>
// 360px viewport simulation: depth-3 titles truncate instead of wrapping
<Box maxWidth="360px" borderWidth="thin" borderColor="surface.border.gray.muted">
    <TreeViewComponent selectionType="multiple">
      <TreeViewItem title="Payment Gateway Configuration" value="pg-config" defaultIsExpanded>
        <TreeViewItem title="International Payment Methods and Wallets" value="intl-methods" defaultIsExpanded>
          <TreeViewItem title="A very long leaf title that should truncate with ellipsis at depth 3 on small screens" value="long-leaf" description="Truncation instead of wrapping at 360px" />
          <TreeViewItem title="Short leaf" value="short-leaf" />
        </TreeViewItem>
      </TreeViewItem>
    </TreeViewComponent>
  </Box>`,...(he=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ye,we,Te;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`() => <Box display="flex" gap="spacing.8" flexWrap="wrap">
    <Box maxWidth="400px" flexGrow={1}>
      <Text size="small" weight="semibold" marginBottom="spacing.3">
        Single select
      </Text>
      <TreeViewComponent selectionType="single">
        {anatomyTree({
        iconSize: 'medium',
        avatarSize: 'small'
      })}
      </TreeViewComponent>
    </Box>
    <Box maxWidth="400px" flexGrow={1}>
      <Text size="small" weight="semibold" marginBottom="spacing.3">
        Multiple select (leading renders after the checkbox)
      </Text>
      <TreeViewComponent selectionType="multiple" defaultValue={['payouts']}>
        {anatomyTree({
        iconSize: 'medium',
        avatarSize: 'small'
      })}
      </TreeViewComponent>
    </Box>
  </Box>`,...(Te=(we=C.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var ve,fe,je;b.parameters={...b.parameters,docs:{...(ve=b.parameters)==null?void 0:ve.docs,source:{originalSource:`() =>
// icons scale down with the tree - Counter / Badge / Text stay small at both sizes
<Box display="flex" gap="spacing.8" flexWrap="wrap">
    <SizedAnatomyTree size="medium" label={'size="medium" (default)'} iconSize="medium" avatarSize="small" />
    <SizedAnatomyTree size="small" label={'size="small"'} iconSize="small" avatarSize="xsmall" />
  </Box>`,...(je=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:je.source}}};var Ie,Se,Ce;g.parameters={...g.parameters,docs:{...(Ie=g.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => <Box maxWidth="320px">
    <TreeViewComponent selectionType="single" defaultValue={['payment-success']}>
      <TreeViewItem title="Checkout" value="checkout" leading={<LayoutIcon />} isSelectable={false} defaultIsExpanded>
        <TreeViewItem title="Payment Animation" value="payment-animation" leading={<PlayCircleIcon />} popover={{
        title: 'Payment Animation',
        content: <ScreenPreview label="Confirming payment" />
      }} />
        <TreeViewItem title="Payment Processing" value="payment-processing" leading={<LoaderIcon />} popover={{
        title: 'Payment Processing',
        content: <ScreenPreview label="Processing payment" />
      }} />
        <TreeViewItem title="Payment Success" value="payment-success" leading={<CheckCircleIcon />} popover={{
        title: 'Payment Success',
        content: <ScreenPreview label="Payment Successful" />
      }} />
        <TreeViewItem title="Retry Payment" value="retry-payment" leading={<RefreshIcon />} popover={{
        title: 'Retry Payment',
        content: <ScreenPreview label="Retry Payment" />
      }} />
        <TreeViewItem title="Cancel Payment" value="cancel-payment" leading={<SlashIcon />} isDisabled />
        <TreeViewItem title="Exit Payment" value="exit-payment" leading={<LogOutIcon />} />
      </TreeViewItem>
    </TreeViewComponent>
  </Box>`,...(Ce=(Se=g.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};const ia=["SingleSelect","MultipleSelect","Controlled","DisabledBranch","AsyncChildren","LoadMore","InDropdown","InDropdownWithFilterChip","Truncation","LeadingAndTrailing","Sizes","HoverPreview"],oa=Object.freeze(Object.defineProperty({__proto__:null,AsyncChildren:v,Controlled:w,DisabledBranch:T,HoverPreview:g,InDropdown:j,InDropdownWithFilterChip:I,LeadingAndTrailing:C,LoadMore:f,MultipleSelect:y,SingleSelect:h,Sizes:b,Truncation:S,__namedExportsOrder:ia,default:Ne},Symbol.toStringTag,{value:"Module"}));export{oa as t};
