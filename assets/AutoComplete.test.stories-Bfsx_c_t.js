import{b9 as x,j as t,ad as w,n as y,at as I,aS as k,aq as V,ar as d,T as $,jg as G,ba as Q,B as ee}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const{within:m,userEvent:i,waitFor:s,expect:a}=__STORYBOOK_MODULE_TEST__,D=e=>{const o=e.getAttribute("aria-activedescendant"),n=document.querySelector(`#${o}`);return n==null?void 0:n.textContent},O=({items:e=["Mumbai","Bengaluru","Pune"],...o})=>t.jsxs(I,{...o,children:[t.jsx(x,{label:"City"}),t.jsxs(k,{zIndex:1002,testID:"dropdown-overlay",children:[t.jsx(G,{title:"Recent Searches"}),t.jsx(V,{children:e.map(n=>t.jsx(d,{title:n,value:n.toLowerCase()},n))}),t.jsx(Q,{children:t.jsx(ee,{children:t.jsx(y,{isFullWidth:!0,children:"Apply"})})})]})]}),g=e=>t.jsx(O,{...e});g.play=async()=>{const{getByRole:e}=m(document.body),o=e("combobox",{name:"City"});await i.click(o),await s(()=>a(e("option",{name:"Bengaluru"})).toBeVisible()),await i.click(e("option",{name:"Bengaluru"})),await s(()=>a(e("combobox",{name:"City"})).toHaveValue("Bengaluru"))};const C=e=>t.jsx(O,{...e});C.play=async()=>{const{getByRole:e,queryByRole:o}=m(document.body),n=e("combobox",{name:"City"});await i.type(n,"p");const l=o("option",{name:"Bengaluru"});await s(()=>a(l).not.toBeInTheDocument());const r=e("option",{name:"Pune"});await s(()=>a(r).toBeVisible()),await i.click(r),await s(()=>a(e("combobox",{name:"City"})).toHaveValue("Pune"))};const b=e=>t.jsx(O,{...e,selectionType:"multiple"});b.play=async()=>{const{getByRole:e,getByLabelText:o,queryByLabelText:n}=m(document.body),l=e("combobox",{name:"City"});await i.type(l,"b"),await a(n("Close Bengaluru tag")).toBeFalsy(),await i.click(e("option",{name:"Bengaluru"})),await i.type(l,"p"),await i.click(e("option",{name:"Pune"})),await a(o("Close Bengaluru tag")).toBeInTheDocument(),await a(o("Close Pune tag")).toBeInTheDocument(),await a(n("Close Mumbai tag")).toBeFalsy(),await i.keyboard("{Backspace}"),await a(n("Close Pune tag")).toBeFalsy(),await a(o("Close Bengaluru tag")).toBeInTheDocument()};const B=e=>t.jsx(O,{...e,items:["Mumbai","Bengaluru","Pune","Delhi","Hyderabad","Chennai","Kolkata","Ahmedabad","Jaipur","Lucknow","Kanpur","Nagpur","Patna"]});B.play=async()=>{const{getByRole:e,getByTestId:o}=m(document.body),n=e("combobox",{name:"City"});await i.type(n,"i"),await s(()=>a(D(n)).toBe("Mumbai")),await i.keyboard("{ArrowDown}"),await a(D(n)).toBe("Delhi"),await i.keyboard("{ArrowDown}"),await a(D(n)).toBe("Chennai"),await i.keyboard("{Enter}"),await s(()=>a(e("combobox",{name:"City"})).toHaveValue("Chennai")),await s(()=>a(o("dropdown-overlay")).not.toBeVisible()),await i.keyboard("{ArrowDown}"),await s(()=>a(o("dropdown-overlay")).toBeVisible()),await i.keyboard("{Escape}"),await s(()=>a(o("dropdown-overlay")).not.toBeVisible()),await a(n).toHaveFocus(),await i.keyboard("{TAB}"),await a(n).not.toHaveFocus()};const h=()=>{const[e,o]=w.useState(),[n,l]=w.useState(""),[r,u]=w.useState(!1),c=p=>{o(p.toLowerCase()),l(p)};return t.jsxs(t.Fragment,{children:[t.jsx(y,{onClick:()=>c("Bangalore"),children:"Select Bangalore"}),t.jsx(y,{marginX:"spacing.4",variant:"secondary",onClick:()=>c(""),children:"Clear Selection"}),t.jsx(y,{variant:"tertiary",onClick:()=>{u(!0)},children:"Open Dropdown"}),t.jsxs(I,{isOpen:r,onOpenChange:p=>{u(p)},selectionType:"single",children:[t.jsx(x,{label:"Select City",value:e,onChange:p=>{o(p.values[0])},inputValue:n,onInputValueChange:({value:p})=>l(p??"")}),t.jsx(k,{children:t.jsxs(V,{children:[t.jsx(d,{title:"Bangalore",value:"bangalore"}),t.jsx(d,{title:"Pune",value:"pune"}),t.jsx(d,{title:"Chennai",value:"chennai"})]})})]}),t.jsx($,{testID:"input-value",children:n})]})};h.play=async()=>{const{getByRole:e,getByTestId:o,findByRole:n}=m(document.body),l=e("combobox",{name:"Select City"});await i.click(e("button",{name:"Select Bangalore"})),await s(()=>a(l).toHaveValue("Bangalore")),await i.click(l),await i.click(await n("option",{name:"Pune"})),await s(()=>a(l).toHaveValue("Pune")),await a(o("input-value")).toHaveTextContent("Pune"),await i.type(l,"XYZ"),await a(o("input-value")).toHaveTextContent("PuneXYZ"),await i.click(e("button",{name:"Clear Selection"})),await s(()=>a(l).toHaveValue("")),await i.click(e("button",{name:"Open Dropdown"})),await s(()=>a(e("listbox",{name:"Select City"})).toBeVisible())};const v=()=>{const[e,o]=w.useState([]),[n,l]=w.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(y,{onClick:()=>{e.includes("bangalore")||o([...e,"bangalore"])},children:"Select Bangalore"}),t.jsx(y,{variant:"secondary",marginLeft:"spacing.4",onClick:()=>l(!n),children:"Open Dropdown"}),t.jsxs(I,{isOpen:n,onOpenChange:l,selectionType:"multiple",children:[t.jsx(x,{label:"Select City",value:e,onChange:r=>{r&&o(r.values)}}),t.jsx(k,{children:t.jsxs(V,{children:[t.jsx(d,{title:"Bangalore",value:"bangalore"}),t.jsx(d,{title:"Pune",value:"pune"}),t.jsx(d,{title:"Chennai",value:"chennai"})]})})]})]})};v.play=async()=>{var r,u;const{getByRole:e,queryAllByLabelText:o,findByRole:n}=m(document.body),l=e("combobox",{name:"Select City"});await a((r=o("Close Bangalore tag"))==null?void 0:r[0]).toBeFalsy(),await i.click(e("button",{name:"Select Bangalore"})),await s(()=>{var c;return a((c=o("Close Bangalore tag"))==null?void 0:c[0]).toBeInTheDocument()}),await i.click(l),await i.click(await n("option",{name:"Pune"})),await s(()=>{var c;return a((c=o("Close Pune tag"))==null?void 0:c[0]).toBeInTheDocument()}),await a((u=o("Close Bangalore tag"))==null?void 0:u[0]).toBeInTheDocument(),await i.type(l,"c"),await s(()=>a(D(l)).toBe("Chennai")),await i.click(e("option",{name:"Chennai"})),await s(()=>{var c;return a((c=o("Close Chennai tag"))==null?void 0:c[0]).toBeInTheDocument()}),await i.click(e("button",{name:"Open Dropdown"})),await s(()=>a(e("listbox",{name:"Select City"})).toBeVisible())};const j=[{title:"Mumbai",value:"mumbai",keywords:["maharashtra"]},{title:"Pune",value:"pune",keywords:["maharashtra"]},{title:"Bengaluru",value:"bengaluru",keywords:["karnataka","bangalore"]}],S=()=>{const e=j.map(l=>l.value),[o,n]=w.useState(e);return t.jsxs(I,{selectionType:"multiple",children:[t.jsx(x,{label:"Cities",onInputValueChange:({value:l})=>{if(l){const r=j.filter(u=>u.title.toLowerCase().startsWith(l.toLowerCase())||u.keywords.find(c=>c.toLowerCase().includes(l.toLowerCase()))).map(u=>u.value);r.length>0?n(r):n([])}else n(e)},filteredValues:o,helpText:"Try typing 'maharashtra' in input"}),o.length>0?t.jsx(k,{children:t.jsx(V,{children:j.map(l=>t.jsx(d,{title:l.title,value:l.value},l.value))})}):null]})};S.play=async()=>{const{getByRole:e,queryByRole:o}=m(document.body),n=e("combobox",{name:"Cities"});await i.click(n),await s(()=>a(e("listbox",{name:"Cities"})).toBeVisible()),await a(e("option",{name:"Mumbai"})).toBeVisible(),await a(e("option",{name:"Pune"})).toBeVisible(),await a(e("option",{name:"Bengaluru"})).toBeVisible(),await i.keyboard("maha"),await a(e("option",{name:"Mumbai"})).toBeVisible(),await a(e("option",{name:"Pune"})).toBeVisible(),await a(o("option",{name:"Bengaluru"})).not.toBeInTheDocument(),await a(e("option",{name:"Pune"})).toHaveAttribute("aria-selected","false"),await i.click(e("option",{name:"Pune"})),await a(e("option",{name:"Pune"})).toHaveAttribute("aria-selected","true")};const ne={title:"Components/Interaction Tests/AutoComplete",component:x,parameters:{controls:{disable:!0},a11y:{disable:!0},essentials:{disable:!0},actions:{disable:!0}}};var f,T,A;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`(props): React.ReactElement => {
  return <BasicDropdown {...props} />;
}`,...(A=(T=g.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var R,L,P;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`(props): React.ReactElement => {
  return <BasicDropdown {...props} />;
}`,...(P=(L=C.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var F,M,H;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`(props): React.ReactElement => {
  return <BasicDropdown {...props} selectionType="multiple" />;
}`,...(H=(M=b.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var E,_,q;B.parameters={...B.parameters,docs:{...(E=B.parameters)==null?void 0:E.docs,source:{originalSource:`(props): React.ReactElement => {
  return <BasicDropdown {...props} items={['Mumbai', 'Bengaluru', 'Pune', 'Delhi', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Patna']} />;
}`,...(q=(_=B.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var K,X,W;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`(): React.ReactElement => {
  const [currentSelection, setCurrentSelection] = React.useState<undefined | string>();
  const [inputValue, setInputValue] = React.useState('');
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const setSelection = (value: string): void => {
    setCurrentSelection(value.toLowerCase());
    setInputValue(value);
  };
  return <>
      <Button onClick={() => setSelection('Bangalore')}>Select Bangalore</Button>
      <Button marginX="spacing.4" variant="secondary" onClick={() => setSelection('')}>
        Clear Selection
      </Button>
      <Button variant="tertiary" onClick={() => {
      setIsDropdownOpen(true);
    }}>
        Open Dropdown
      </Button>
      <Dropdown isOpen={isDropdownOpen} onOpenChange={isOpen => {
      setIsDropdownOpen(isOpen);
    }} selectionType="single">
        <AutoComplete label="Select City" value={currentSelection} onChange={args => {
        setCurrentSelection(args.values[0]);
      }} inputValue={inputValue} onInputValueChange={({
        value
      }) => setInputValue(value ?? '')} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Bangalore" value="bangalore" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Chennai" value="chennai" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
      <Text testID="input-value">{inputValue}</Text>
    </>;
}`,...(W=(X=h.parameters)==null?void 0:X.docs)==null?void 0:W.source}}};var Y,J,N;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`(): React.ReactElement => {
  const [currentSelection, setCurrentSelection] = React.useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  return <>
      <Button onClick={() => {
      if (!currentSelection.includes('bangalore')) {
        setCurrentSelection([...currentSelection, 'bangalore']);
      }
    }}>
        Select Bangalore
      </Button>
      <Button variant="secondary" marginLeft="spacing.4" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        Open Dropdown
      </Button>

      <Dropdown isOpen={isDropdownOpen} onOpenChange={setIsDropdownOpen} selectionType="multiple">
        <AutoComplete label="Select City" value={currentSelection} onChange={args => {
        if (args) {
          setCurrentSelection(args.values);
        }
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Bangalore" value="bangalore" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Chennai" value="chennai" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </>;
}`,...(N=(J=v.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var Z,z,U;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`(): React.ReactElement => {
  const cityValues = filteredMap.map(city => city.value);
  const [filteredValues, setFilteredValues] = React.useState<string[]>(cityValues);
  return <Dropdown selectionType="multiple">
      <AutoComplete label="Cities" onInputValueChange={({
      value
    }) => {
      if (value) {
        const filteredItems = filteredMap.filter(city => city.title.toLowerCase().startsWith(value.toLowerCase()) || city.keywords.find(keyword => keyword.toLowerCase().includes(value.toLowerCase()))).map(city => city.value);
        if (filteredItems.length > 0) {
          setFilteredValues(filteredItems);
        } else {
          setFilteredValues([]);
        }
      } else {
        setFilteredValues(cityValues);
      }
    }} filteredValues={filteredValues} helpText="Try typing 'maharashtra' in input" />
      {filteredValues.length > 0 ? <DropdownOverlay>
          <ActionList>
            {filteredMap.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
          </ActionList>
        </DropdownOverlay> : null}
    </Dropdown>;
}`,...(U=(z=S.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};const oe=["ItemSelect","ItemSort","ItemMultiSelect","Accessibility","ControlledDropdownSingleSelect","ControlledDropdownMultiSelect","ControlledFiltering"];export{B as Accessibility,v as ControlledDropdownMultiSelect,h as ControlledDropdownSingleSelect,S as ControlledFiltering,b as ItemMultiSelect,g as ItemSelect,C as ItemSort,oe as __namedExportsOrder,ne as default};
