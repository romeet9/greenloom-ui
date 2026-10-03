import{jj as b,jk as t,jl as u,at as d,ad as l,j as e,B as o,au as x,aS as p,T as I,n as m,hZ as Y,aj as $,f6 as ee,ba as te}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const ne={title:"Components/Dropdown/With TreeView",component:d,subcomponents:{TreeView:u,TreeViewItem:t,TreeViewLoadMore:b},args:{},parameters:{viewMode:"story",options:{showPanel:!1},previewTabs:{"storybook/docs/panel":{hidden:!0}},chromatic:{disableSnapshot:!0}}},E=e.jsxs(t,{title:"India",value:"india",defaultIsExpanded:!0,children:[e.jsxs(t,{title:"Karnataka",value:"karnataka",defaultIsExpanded:!0,children:[e.jsx(t,{title:"Bengaluru",value:"bengaluru"}),e.jsx(t,{title:"Mysuru",value:"mysuru"})]}),e.jsx(t,{title:"Goa",value:"goa"})]}),v=()=>{const[s,a]=l.useState([]);return e.jsxs(o,{maxWidth:"300px",minHeight:"400px",children:[e.jsxs(d,{selectionType:"single",children:[e.jsx(x,{label:"Region",placeholder:"Select region",onChange:({values:n})=>a(n)}),e.jsx(p,{children:e.jsx(u,{children:E})})]}),e.jsxs(I,{marginTop:"spacing.4",children:["Selected: ",s.join(", ")||"none"]})]})},S=()=>e.jsx(o,{maxWidth:"300px",minHeight:"400px",children:e.jsxs(d,{selectionType:"single",children:[e.jsx(x,{label:"City",placeholder:"Select city"}),e.jsx(p,{children:e.jsx(u,{children:e.jsxs(t,{title:"India",value:"india",isSelectable:!1,defaultIsExpanded:!0,children:[e.jsxs(t,{title:"Karnataka",value:"karnataka",isSelectable:!1,children:[e.jsx(t,{title:"Bengaluru",value:"bengaluru"}),e.jsx(t,{title:"Mysuru",value:"mysuru"})]}),e.jsxs(t,{title:"Goa",value:"goa",isSelectable:!1,children:[e.jsx(t,{title:"Panaji",value:"panaji"}),e.jsx(t,{title:"Margao",value:"margao"})]})]})})})]})}),T=()=>{const[s,a]=l.useState({values:[],selectedGroups:[]});return e.jsxs(o,{maxWidth:"300px",minHeight:"400px",children:[e.jsxs(d,{selectionType:"multiple",children:[e.jsx(x,{label:"Regions",placeholder:"Select regions",onChange:({values:n,selectedGroups:r})=>a({values:n,selectedGroups:r??[]})}),e.jsx(p,{children:e.jsx(u,{children:E})})]}),e.jsxs(I,{marginTop:"spacing.4",children:["values: [",s.values.join(", "),"]"]}),e.jsxs(I,{children:["selectedGroups: [",s.selectedGroups.join(", "),"]"]})]})},y=()=>{const[s,a]=l.useState([]);return e.jsxs(o,{maxWidth:"300px",minHeight:"400px",display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(o,{display:"flex",gap:"spacing.3",children:[e.jsx(m,{size:"small",onClick:()=>a(["bengaluru","mysuru"]),children:"Select Karnataka"}),e.jsx(m,{size:"small",variant:"tertiary",onClick:()=>a([]),children:"Clear"})]}),e.jsxs(d,{selectionType:"multiple",children:[e.jsx(x,{label:"Regions",placeholder:"Select regions",value:s,onChange:({values:n})=>a(n)}),e.jsx(p,{children:e.jsx(u,{children:E})})]})]})},w=()=>{const[s,a]=l.useState([]),[n,r]=l.useState(!1);return e.jsxs(o,{minHeight:"500px",children:[e.jsxs(d,{selectionType:"multiple",isOpen:n,onOpenChange:r,children:[e.jsx(Y,{label:"Regions",value:s,onChange:({values:g})=>a(g),onClearButtonClick:()=>a([])}),e.jsxs(p,{children:[e.jsx(u,{children:e.jsxs(t,{title:"India",value:"india",defaultIsExpanded:!0,leading:e.jsx(ee,{color:"interactive.icon.gray.muted",size:"medium"}),children:[e.jsxs(t,{title:"Karnataka",value:"karnataka",defaultIsExpanded:!0,trailing:e.jsx($,{value:2,color:"information"}),children:[e.jsx(t,{title:"Bengaluru",value:"bengaluru"}),e.jsx(t,{title:"Mysuru",value:"mysuru"})]}),e.jsx(t,{title:"Goa",value:"goa"})]})}),e.jsx(te,{children:e.jsxs(o,{display:"flex",gap:"spacing.3",width:"100%",children:[e.jsx(m,{isFullWidth:!0,size:"small",variant:"tertiary",onClick:()=>a([]),children:"Clear"}),e.jsx(m,{isFullWidth:!0,size:"small",onClick:()=>r(!1),children:"Apply"})]})})]})]}),e.jsx(I,{marginTop:"spacing.4",children:'Selecting all of Karnataka shows the chip as "Karnataka", not a leaf count'})]})},j=()=>{const[s,a]=l.useState([]),[n,r]=l.useState(!1),[g,h]=l.useState(!1);return e.jsxs(o,{maxWidth:"300px",minHeight:"400px",display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(o,{children:e.jsx(m,{size:"small",variant:"tertiary",onClick:()=>{h(!1),a([]),r(!1)},children:"Reset (check spinner again)"})}),e.jsxs(d,{selectionType:"multiple",children:[e.jsx(x,{label:"Regions",placeholder:"Select regions"}),e.jsx(p,{children:e.jsxs(u,{children:[e.jsx(t,{title:"Karnataka",value:"karnataka",hasChildren:!0,isLoading:n,isExpanded:g,onExpandChange:({isExpanded:c})=>{h(c),c&&s.length===0&&(r(!0),setTimeout(()=>{a(["Bengaluru","Mysuru","Hubballi"]),r(!1)},1500))},children:s.map(c=>e.jsx(t,{title:c,value:c.toLowerCase()},c))}),e.jsx(t,{title:"Goa",value:"goa"})]})})]})]})},f=["Bengaluru","Mysuru","Hubballi","Mangaluru","Belagavi","Kalaburagi"],k=["Goa","Kerala","Maharashtra","Tamil Nadu"],V=2,C=()=>{const[s,a]=l.useState(V),[n,r]=l.useState(1),[g,h]=l.useState(!1),[c,L]=l.useState(!1);return e.jsx(o,{maxWidth:"300px",minHeight:"500px",children:e.jsxs(d,{selectionType:"multiple",children:[e.jsx(x,{label:"Regions",placeholder:"Select regions"}),e.jsx(p,{children:e.jsxs(u,{children:[e.jsxs(t,{title:"Karnataka",value:"karnataka",defaultIsExpanded:!0,children:[f.slice(0,s).map(i=>e.jsx(t,{title:i,value:i.toLowerCase()},i)),s<f.length?e.jsx(b,{isLoading:g,onClick:()=>{h(!0),setTimeout(()=>{a(i=>Math.min(i+V,f.length)),h(!1)},1500)}}):null]}),k.slice(0,n).map(i=>e.jsx(t,{title:i,value:i.toLowerCase()},i)),n<k.length?e.jsx(b,{isLoading:c,onClick:()=>{L(!0),setTimeout(()=>{r(i=>Math.min(i+V,k.length)),L(!1)},1500)},children:"Show more states"}):null]})})]})})};var R,B,D;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`(): React.ReactElement => {
  const [selected, setSelected] = React.useState<string[]>([]);
  return <Box maxWidth="300px" minHeight="400px">
      <Dropdown selectionType="single">
        <SelectInput label="Region" placeholder="Select region" onChange={({
        values
      }) => setSelected(values)} />
        <DropdownOverlay>
          <TreeView>{regionsTree}</TreeView>
        </DropdownOverlay>
      </Dropdown>
      <Text marginTop="spacing.4">Selected: {selected.join(', ') || 'none'}</Text>
    </Box>;
}`,...(D=(B=v.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var O,W,M;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box maxWidth="300px" minHeight="400px">
      {/* branches opt out of selection with isSelectable={false}: clicking them (or Enter/Space)
          toggles expansion, so only leaf items can become the selected value */}
      <Dropdown selectionType="single">
        <SelectInput label="City" placeholder="Select city" />
        <DropdownOverlay>
          <TreeView>
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
          </TreeView>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(M=(W=S.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var G,K,H;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`(): React.ReactElement => {
  const [payload, setPayload] = React.useState<{
    values: string[];
    selectedGroups: string[];
  }>({
    values: [],
    selectedGroups: []
  });
  return <Box maxWidth="300px" minHeight="400px">
      <Dropdown selectionType="multiple">
        <SelectInput label="Regions" placeholder="Select regions" onChange={({
        values,
        selectedGroups
      }) => setPayload({
        values,
        selectedGroups: selectedGroups ?? []
      })} />
        <DropdownOverlay>
          <TreeView>{regionsTree}</TreeView>
        </DropdownOverlay>
      </Dropdown>
      {/* selecting a branch cascades to its leaves: \`values\` carries the leaves,
          \`selectedGroups\` the topmost fully-selected branches */}
      <Text marginTop="spacing.4">values: [{payload.values.join(', ')}]</Text>
      <Text>selectedGroups: [{payload.selectedGroups.join(', ')}]</Text>
    </Box>;
}`,...(H=(K=T.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var A,_,F;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`(): React.ReactElement => {
  const [values, setValues] = React.useState<string[]>([]);
  return <Box maxWidth="300px" minHeight="400px" display="flex" flexDirection="column" gap="spacing.4">
      <Box display="flex" gap="spacing.3">
        <Button size="small" onClick={() => setValues(['bengaluru', 'mysuru'])}>
          Select Karnataka
        </Button>
        <Button size="small" variant="tertiary" onClick={() => setValues([])}>
          Clear
        </Button>
      </Box>
      <Dropdown selectionType="multiple">
        <SelectInput label="Regions" placeholder="Select regions" value={values} onChange={({
        values: nextValues
      }) => setValues(nextValues)} />
        <DropdownOverlay>
          <TreeView>{regionsTree}</TreeView>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(F=(_=y.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var z,P,Z;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`(): React.ReactElement => {
  const [values, setValues] = React.useState<string[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  return <Box minHeight="500px">
      {/* the overlay is controlled so the footer's Apply can close it */}
      <Dropdown selectionType="multiple" isOpen={isOpen} onOpenChange={setIsOpen}>
        <FilterChipSelectInput label="Regions" value={values} onChange={({
        values: nextValues
      }) => setValues(nextValues)} onClearButtonClick={() => setValues([])} />
        <DropdownOverlay>
          <TreeView>
            <TreeViewItem title="India" value="india" defaultIsExpanded leading={<FolderIcon color="interactive.icon.gray.muted" size="medium" />}>
              <TreeViewItem title="Karnataka" value="karnataka" defaultIsExpanded trailing={<Counter value={2} color="information" />}>
                <TreeViewItem title="Bengaluru" value="bengaluru" />
                <TreeViewItem title="Mysuru" value="mysuru" />
              </TreeViewItem>
              <TreeViewItem title="Goa" value="goa" />
            </TreeViewItem>
          </TreeView>
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
}`,...(Z=(P=w.parameters)==null?void 0:P.docs)==null?void 0:Z.source}}};var q,N,J;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`(): React.ReactElement => {
  const [cities, setCities] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isKarnatakaExpanded, setIsKarnatakaExpanded] = React.useState(false);
  return <Box maxWidth="300px" minHeight="400px" display="flex" flexDirection="column" gap="spacing.4">
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
      <Dropdown selectionType="multiple">
        <SelectInput label="Regions" placeholder="Select regions" />
        <DropdownOverlay>
          {/* children arriving late re-register as Dropdown options, so keyboard
              traversal and selection pick them up without reopening the overlay */}
          <TreeView>
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
          </TreeView>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(J=(N=j.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var Q,U,X;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`(): React.ReactElement => {
  const [visibleCityCount, setVisibleCityCount] = React.useState(PAGE_SIZE);
  const [visibleStateCount, setVisibleStateCount] = React.useState(1);
  const [isLoadingCities, setIsLoadingCities] = React.useState(false);
  const [isLoadingStates, setIsLoadingStates] = React.useState(false);
  return <Box maxWidth="300px" minHeight="500px">
      <Dropdown selectionType="multiple">
        <SelectInput label="Regions" placeholder="Select regions" />
        <DropdownOverlay>
          <TreeView>
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
          </TreeView>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(X=(U=C.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const le=["Default","WithLeafOnlySelection","WithMultiSelect","WithControlledSelection","WithFilterChip","WithAsyncChildren","WithLoadMore"];export{v as Default,j as WithAsyncChildren,y as WithControlledSelection,w as WithFilterChip,S as WithLeafOnlySelection,C as WithLoadMore,T as WithMultiSelect,le as __namedExportsOrder,ne as default};
