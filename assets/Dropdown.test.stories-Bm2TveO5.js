import{at as w,j as e,ad as A,n as d,au as j,aS as m,aq as y,ar as l,a9 as oe,b8 as ae,jg as re,b9 as ie,ba as ne,jF as se}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const{within:u,userEvent:o,waitFor:s,expect:n}=__STORYBOOK_MODULE_TEST__,c=t=>{const r=t.getAttribute("aria-activedescendant"),a=document.querySelector(`#${r}`);return a==null?void 0:a.textContent},I=({items:t=["Mumbai","Bengaluru","Pune"],...r})=>e.jsxs(w,{...r,children:[e.jsx(j,{label:"City"}),e.jsx(m,{testID:"dropdown-overlay",children:e.jsx(y,{children:t.map(a=>e.jsx(l,{title:a,value:a.toLowerCase()},a))})})]}),b=t=>e.jsx(I,{...t});b.play=async()=>{const{getByRole:t}=u(document.body),r=t("combobox",{name:"City"});await o.click(r);const a=t("option",{name:"Bengaluru"});await o.click(a),await n(t("combobox",{name:"City"})).toHaveTextContent("Bengaluru")};const h=t=>e.jsx(I,{...t,selectionType:"multiple"});h.play=async()=>{const{getByRole:t,getByLabelText:r,queryByLabelText:a}=u(document.body),i=t("combobox",{name:"City"});await o.click(i),await n(a("Close Bengaluru tag")).toBeFalsy(),await o.click(t("option",{name:"Bengaluru"})),await o.click(t("option",{name:"Pune"})),await n(r("Close Bengaluru tag")).toBeInTheDocument(),await n(r("Close Pune tag")).toBeInTheDocument(),await n(a("Close Mumbai tag")).toBeFalsy()};const B=t=>e.jsx(I,{...t,items:["Mumbai","Bengaluru","Pune","Delhi","Hyderabad","Chennai","Kolkata","Ahmedabad","Jaipur","Lucknow","Kanpur","Nagpur","Patna"]});B.play=async()=>{const{getByRole:t,getByTestId:r}=u(document.body),a=t("combobox",{name:"City"});a.focus(),await o.keyboard("{ArrowDown}"),await o.keyboard("{ArrowDown}"),await n(c(a)).toBe("Mumbai"),await o.keyboard("{ArrowDown}"),await n(c(a)).toBe("Bengaluru"),await o.keyboard("{Home}"),await n(c(a)).toBe("Mumbai"),await o.keyboard("{PageDown}"),await n(c(a)).toBe("Kanpur"),await o.keyboard("{PageDown}"),await n(c(a)).toBe("Patna"),await o.keyboard("{PageUp}"),await n(c(a)).toBe("Pune"),await o.keyboard("{End}"),await n(c(a)).toBe("Patna"),await o.keyboard("p"),await n(c(a)).toBe("Pune"),await o.keyboard("a"),await n(c(a)).toBe("Patna"),await o.keyboard("{Enter}"),await n(t("combobox",{name:"City"})).toHaveTextContent("Patna"),await s(()=>n(r("dropdown-overlay")).not.toBeVisible()),await o.keyboard("{ArrowDown}"),await s(()=>n(r("dropdown-overlay")).toBeVisible()),await o.keyboard("{Escape}"),await s(()=>n(r("dropdown-overlay")).not.toBeVisible()),await n(a).toHaveFocus(),await o.keyboard("{TAB}"),await n(a).not.toHaveFocus()};const D=()=>{const[t,r]=A.useState(!1);return e.jsxs(w,{children:[e.jsx(j,{label:"Fruits"}),e.jsxs(m,{testID:"dropdown-overlay",children:[e.jsxs(y,{children:[e.jsx(l,{title:"Apple",value:"apple"}),e.jsx(l,{title:"Mango",value:"mango"})]}),e.jsxs(ne,{children:[e.jsx(d,{onClick:()=>r(!0),children:t?"Applied":"Apply"}),e.jsx(d,{marginLeft:"spacing.4",variant:"secondary",onClick:()=>r(!1),children:"Cancel"})]})]})]})};D.play=async()=>{const{getByRole:t,queryByRole:r,getByTestId:a}=u(document.body),i=t("combobox",{name:"Fruits"});await o.click(i),await s(()=>n(t("dialog",{name:"Fruits"})).toBeVisible()),await o.keyboard("{ArrowDown}"),await n(c(i)).toBe("Apple"),await n(i).toHaveFocus(),await o.keyboard("{TAB}"),await n(t("button",{name:"Apply"})).toHaveFocus(),await n(r("button",{name:"Applied"})).toBeFalsy(),await o.keyboard("{Enter}"),await s(()=>n(t("button",{name:"Applied"})).toBeInTheDocument()),await o.keyboard("{TAB}"),await n(t("button",{name:"Cancel"})).toHaveFocus(),await o.keyboard("{Escape}"),await s(()=>n(a("dropdown-overlay")).not.toBeVisible())};const x=()=>{const[t,r]=A.useState(),[a,i]=A.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>r("bangalore"),children:"Select Bangalore"}),e.jsx(d,{marginX:"spacing.4",variant:"secondary",onClick:()=>r(""),children:"Clear Selection"}),e.jsx(d,{variant:"tertiary",onClick:()=>{i(!0)},children:"Open Dropdown"}),e.jsxs(w,{isOpen:a,onOpenChange:p=>{i(p)},selectionType:"single",children:[e.jsx(j,{label:"Select City",value:t,onChange:p=>{r(p.values[0])}}),e.jsx(m,{children:e.jsxs(y,{children:[e.jsx(l,{title:"Bangalore",value:"bangalore"}),e.jsx(l,{title:"Pune",value:"pune"}),e.jsx(l,{title:"Chennai",value:"chennai"})]})})]})]})};x.play=async()=>{const{getByRole:t}=u(document.body),r=t("combobox",{name:"Select City"});await n(r).toHaveTextContent("Select Option"),await o.click(t("button",{name:"Select Bangalore"})),await s(()=>n(r).toHaveTextContent("Bangalore")),await o.click(r),await o.click(t("option",{name:"Pune"})),await s(()=>n(r).toHaveTextContent("Pune")),await o.click(t("button",{name:"Clear Selection"})),await s(()=>n(r).toHaveTextContent("Select Option")),await o.click(t("button",{name:"Open Dropdown"})),await s(()=>n(t("listbox",{name:"Select City"})).toBeVisible())};const v=()=>{const[t,r]=A.useState([]),[a,i]=A.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>{t.includes("bangalore")||r([...t,"bangalore"])},children:"Select Bangalore"}),e.jsx(d,{onClick:()=>i(!a),children:"Open Dropdown"}),e.jsxs(w,{isOpen:a,onOpenChange:i,selectionType:"multiple",children:[e.jsx(j,{label:"Select City",value:t,onChange:p=>{p&&r(p.values)}}),e.jsx(m,{children:e.jsxs(y,{children:[e.jsx(l,{title:"Bangalore",value:"bangalore"}),e.jsx(l,{title:"Pune",value:"pune"}),e.jsx(l,{title:"Chennai",value:"chennai"})]})})]})]})};v.play=async()=>{var i,p;const{getByRole:t,queryAllByLabelText:r}=u(document.body),a=t("combobox",{name:"Select City"});await n((i=r("Close Bangalore tag"))==null?void 0:i[0]).toBeFalsy(),await o.click(t("button",{name:"Select Bangalore"})),await s(()=>{var g;return n((g=r("Close Bangalore tag"))==null?void 0:g[0]).toBeInTheDocument()}),await o.click(a),await o.click(t("option",{name:"Pune"})),await s(()=>{var g;return n((g=r("Close Pune tag"))==null?void 0:g[0]).toBeInTheDocument()}),await n((p=r("Close Bangalore tag"))==null?void 0:p[0]).toBeInTheDocument(),await o.click(t("button",{name:"Open Dropdown"})),await s(()=>n(t("listbox",{name:"Select City"})).toBeVisible())};const C=()=>e.jsxs(w,{children:[e.jsx(j,{label:"Fruits"}),e.jsxs(m,{testID:"dropdown-overlay",children:[e.jsx(re,{children:e.jsx(ie,{label:"Fruits"})}),e.jsxs(y,{children:[e.jsx(l,{title:"Apple",value:"apple"}),e.jsx(l,{title:"Mango",value:"mango"})]}),e.jsx(ne,{children:e.jsx(d,{marginLeft:"spacing.4",variant:"primary",children:"Next"})})]})]});C.play=async()=>{const{getByRole:t,getAllByRole:r}=u(document.body),a=t("combobox",{name:"Fruits"});await o.click(a),await s(()=>n(t("dialog",{name:"Fruits"})).toBeVisible());const i=t("searchbox",{name:"Fruits"});await o.click(i),await n(r("option")).toHaveLength(2),await o.keyboard("a"),await o.keyboard("p"),await n(i).toHaveValue("ap"),await n(r("option")).toHaveLength(1),await o.keyboard("{Enter}"),await n(a).toHaveTextContent("Apple"),await o.click(a),await n(i).toHaveValue(""),await n(a).toHaveTextContent("Apple"),await o.click(a)};const S=()=>e.jsx(se,{label:"Search",placeholder:"Search here",trailing:e.jsxs(w,{children:[e.jsx(ae,{defaultValue:"home"}),e.jsx(m,{children:e.jsxs(y,{children:[e.jsx(l,{title:"Home",value:"home"}),e.jsx(l,{title:"Pricing",value:"pricing"})]})})]})});S.play=async()=>{const{getByRole:t}=u(document.body);await new Promise(a=>setTimeout(a,2e3));const r=t("button",{name:"change Home filter"});await o.click(r),await s(()=>n(t("menuitem",{name:"Home"})).toBeVisible()),await o.click(t("menuitem",{name:"Pricing"})),await new Promise(a=>setTimeout(a,2e3)),await n(t("button",{name:"change Pricing filter"})).toBeInTheDocument()};const k=()=>e.jsx(oe,{label:"Enter Upi Id",placeholder:"98XXXXXXXXX",trailing:e.jsxs(w,{children:[e.jsx(ae,{defaultValue:"sbi",onChange:({name:t,value:r})=>{console.log("onChange",t,r)}}),e.jsx(m,{children:e.jsxs(y,{children:[e.jsx(l,{title:"@sbi",value:"sbi"}),e.jsx(l,{title:"@yesbank",value:"yesbank"})]})})]})});k.play=async()=>{const{getByRole:t}=u(document.body);await new Promise(a=>setTimeout(a,2e3));const r=t("button",{name:"change @sbi filter"});await o.click(r),await new Promise(a=>setTimeout(a,2e3)),await o.click(t("menuitem",{name:"@yesbank"})),await s(()=>n(r).toHaveTextContent("@yesbank")),await o.click(t("button",{name:"change @yesbank filter"})),await new Promise(a=>setTimeout(a,2e3)),await o.click(t("button",{name:"change @yesbank filter"}))};const pe={title:"Components/Interaction Tests/Dropdown",component:w,parameters:{controls:{disable:!0},a11y:{disable:!0},essentials:{disable:!0}}};var O,T,L;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`(props): React.ReactElement => {
  return <BasicDropdown {...props} />;
}`,...(L=(T=b.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var R,P,H;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`(props): React.ReactElement => {
  return <BasicDropdown {...props} selectionType="multiple" />;
}`,...(H=(P=h.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var F,f,E;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`(props): React.ReactElement => {
  return <BasicDropdown {...props} items={['Mumbai', 'Bengaluru', 'Pune', 'Delhi', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Patna']} />;
}`,...(E=(f=B.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var X,M,V;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`(): React.ReactElement => {
  const [hasApplied, setHasApplied] = React.useState(false);
  return <Dropdown>
      <SelectInput label="Fruits" />
      <DropdownOverlay testID="dropdown-overlay">
        <ActionList>
          <ActionListItem title="Apple" value="apple" />
          <ActionListItem title="Mango" value="mango" />
        </ActionList>
        <DropdownFooter>
          {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
          <Button onClick={() => setHasApplied(true)}>{hasApplied ? 'Applied' : 'Apply'}</Button>
          <Button marginLeft="spacing.4" variant="secondary" onClick={() => setHasApplied(false)}>
            Cancel
          </Button>
        </DropdownFooter>
      </DropdownOverlay>
    </Dropdown>;
}`,...(V=(M=D.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var _,K,q;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`(): React.ReactElement => {
  const [currentSelection, setCurrentSelection] = React.useState<undefined | string>();
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  return <>
      <Button onClick={() => setCurrentSelection('bangalore')}>Select Bangalore</Button>
      <Button marginX="spacing.4" variant="secondary" onClick={() => setCurrentSelection('')}>
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
        <SelectInput label="Select City" value={currentSelection} onChange={args => {
        setCurrentSelection(args.values[0]);
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
}`,...(q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var N,U,W;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`(): React.ReactElement => {
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
      <Button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Open Dropdown</Button>

      <Dropdown isOpen={isDropdownOpen} onOpenChange={setIsDropdownOpen} selectionType="multiple">
        <SelectInput label="Select City" value={currentSelection} onChange={args => {
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
}`,...(W=(U=v.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var J,Y,$;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`(): React.ReactElement => {
  return <Dropdown>
      <SelectInput label="Fruits" />
      <DropdownOverlay testID="dropdown-overlay">
        <DropdownHeader>
          <AutoComplete label="Fruits" />
        </DropdownHeader>
        <ActionList>
          <ActionListItem title="Apple" value="apple" />
          <ActionListItem title="Mango" value="mango" />
        </ActionList>
        <DropdownFooter>
          <Button marginLeft="spacing.4" variant="primary">
            Next
          </Button>
        </DropdownFooter>
      </DropdownOverlay>
    </Dropdown>;
}`,...($=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var z,G,Q;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`(): React.ReactElement => {
  return <SearchInput label="Search" placeholder="Search here" trailing={<Dropdown>
          <InputDropdownButton defaultValue="home" />
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Home" value="home" />
              <ActionListItem title="Pricing" value="pricing" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>} />;
}`,...(Q=(G=S.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var Z,ee,te;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`(): React.ReactElement => {
  return <TextInput label="Enter Upi Id" placeholder="98XXXXXXXXX" trailing={<Dropdown>
          <InputDropdownButton defaultValue="sbi" onChange={({
      name,
      value
    }) => {
      console.log('onChange', name, value);
    }} />
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="@sbi" value="sbi" />
              <ActionListItem title="@yesbank" value="yesbank" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>} />;
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const ue=["BasicSelectItem","MultiSelectItem","Accessibility","FooterActions","ControlledDropdownSingleSelect","ControlledDropdownMultiSelect","DropdownWithSearch","SearchTrailingDropdown","DropdownWithControlledSearch"];export{B as Accessibility,b as BasicSelectItem,v as ControlledDropdownMultiSelect,x as ControlledDropdownSingleSelect,k as DropdownWithControlledSearch,C as DropdownWithSearch,D as FooterActions,h as MultiSelectItem,S as SearchTrailingDropdown,ue as __namedExportsOrder,pe as default};
