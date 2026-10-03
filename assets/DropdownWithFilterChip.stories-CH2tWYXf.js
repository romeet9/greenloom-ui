import{aw as W,at as n,ad as p,j as e,hZ as d,aS as c,aq as r,ar as t,B as D,T as o}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const G={title:"Components/Dropdown/With Filter Chip",component:n,subcomponents:{DropdownButton:W},args:{},parameters:{viewMode:"story",options:{showPanel:!1},previewTabs:{"storybook/docs/panel":{hidden:!0}},chromatic:{disableSnapshot:!0}}},v=()=>{const[l,i]=p.useState(void 0);return e.jsxs(n,{children:[e.jsx(d,{label:"Filter",value:l,onClearButtonClick:()=>{i(void 0)}}),e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(t,{onClick:({name:a,value:s})=>{console.log({name:a,value:s}),i(a)},isSelected:status==="latest-added",title:"Latest Added",value:"latest-added"}),e.jsx(t,{onClick:({name:a,value:s})=>{console.log({name:a,value:s}),i(a)},isSelected:l==="latest-invoice",title:"Latest Invoice",value:"latest-invoice"}),e.jsx(t,{onClick:({name:a,value:s})=>{console.log({name:a,value:s}),i(a)},isSelected:l==="oldest-due-date",title:"Oldest Due Date",value:"oldest-due-date"})]})})]})},h=()=>{const[l,i]=p.useState([]),a=s=>{l.includes(s)?i(l.filter(u=>u!==s)):i([...l,s])};return e.jsxs(n,{selectionType:"multiple",children:[e.jsx(d,{label:"Filter Chip",value:l,onClearButtonClick:s=>{console.log("value",s),i([])}}),e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(t,{onClick:({name:s})=>{a(s)},title:"Latest Added",value:"latest-added"}),e.jsx(t,{onClick:({name:s})=>{a(s)},title:"Latest Invoice",value:"latest-invoice"}),e.jsx(t,{onClick:({name:s})=>{a(s)},title:"Oldest Due Date",value:"oldest-due-date"})]})})]})},m=()=>e.jsxs(D,{children:[e.jsx(o,{size:"small",weight:"semibold",color:"interactive.text.primary.normal",children:"Uncontrolled Filter Chip Select Input - Single"}),e.jsxs(n,{selectionType:"single",children:[e.jsx(d,{label:"Filter Chip",onChange:l=>{console.log("value",l)},onClearButtonClick:l=>{console.log("value",l)}}),e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Latest Added",value:"latest-added"}),e.jsx(t,{title:"Latest Invoice",value:"latest-invoice"}),e.jsx(t,{title:"Oldest Due Date",value:"oldest-due-date"})]})})]}),e.jsx(o,{size:"small",weight:"semibold",color:"interactive.text.primary.normal",children:"Uncontrolled Filter Chip Select Input - Multiple"}),e.jsxs(n,{selectionType:"multiple",children:[e.jsx(d,{label:"Filter Chip",onChange:l=>{console.log("value",l)},onClearButtonClick:l=>{console.log("value",l)}}),e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Latest Added",value:"latest-added"}),e.jsx(t,{title:"Latest Invoice",value:"latest-invoice"}),e.jsx(t,{title:"Oldest Due Date",value:"oldest-due-date"})]})})]})]}),C=()=>{const[l,i]=p.useState("latest-added"),[a,s]=p.useState(["latest-added","latest-invoice"]);return e.jsxs(D,{children:[e.jsx(o,{size:"small",weight:"semibold",color:"interactive.text.primary.normal",children:"Controlled Filter Chip Select Input - Single"}),e.jsxs(n,{selectionType:"single",children:[e.jsx(d,{label:"Filter Chip",value:l,onChange:({values:u})=>{i(u[0])}}),e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Latest Added",value:"latest-added"}),e.jsx(t,{title:"Latest Invoice",value:"latest-invoice"}),e.jsx(t,{title:"Oldest Due Date",value:"oldest-due-date"})]})})]}),e.jsx(o,{children:" Controlled Filter Chip Select Input - Multiple "}),e.jsxs(n,{selectionType:"multiple",children:[e.jsx(d,{label:"Filter Chip",value:a,onClearButtonClick:()=>{s([])},onChange:({values:u})=>{s(u)}}),e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Latest Added",value:"latest-added"}),e.jsx(t,{title:"Latest Invoice",value:"latest-invoice"}),e.jsx(t,{title:"Oldest Due Date",value:"oldest-due-date"})]})})]})]})},x=()=>e.jsxs(n,{selectionType:"single",children:[e.jsx(d,{label:"Filter Chip",isDisabled:!0}),e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Latest Added",value:"latest-added"}),e.jsx(t,{title:"Latest Invoice",value:"latest-invoice"}),e.jsx(t,{title:"Oldest Due Date",value:"oldest-due-date"})]})})]}),g=()=>e.jsxs(D,{children:[e.jsxs(o,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.4",children:["Pass"," ",e.jsxs(o,{as:"span",size:"small",weight:"semibold",children:["showClearButton=","{false}"]})," ","for filters that must always hold a value. The chip never shows the clear (cross) button, even when a value is selected — the selection can still be changed from the dropdown."]}),e.jsxs(n,{selectionType:"single",children:[e.jsx(d,{label:"Filter Chip",showClearButton:!1}),e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Latest Added",value:"latest-added"}),e.jsx(t,{title:"Latest Invoice",value:"latest-invoice"}),e.jsx(t,{title:"Oldest Due Date",value:"oldest-due-date"})]})})]})]}),S=()=>{const[l,i]=p.useState(["latest-added"]);return e.jsxs(D,{children:[e.jsxs(o,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.4",children:["In"," ",e.jsx(o,{as:"span",size:"small",weight:"semibold",children:'selectionType="multiple"'})," ","the chip shows the selected option's name when a single option is selected (e.g."," ",e.jsx(o,{as:"span",size:"small",weight:"semibold",children:"Filter Chip: Latest Added"}),"), and collapses to a compact counter once more than one is selected (e.g."," ",e.jsx(o,{as:"span",size:"small",weight:"semibold",children:"Filter Chip: 2"}),"). Select more than one option below to see it switch."]}),e.jsxs(n,{selectionType:"multiple",children:[e.jsx(d,{label:"Filter Chip",value:l,onChange:({values:a})=>i(a),onClearButtonClick:()=>i([])}),e.jsx(c,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Latest Added",value:"latest-added"}),e.jsx(t,{title:"Latest Invoice",value:"latest-invoice"}),e.jsx(t,{title:"Oldest Due Date",value:"oldest-due-date"})]})})]})]})};var I,L,j;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`(): React.ReactElement => {
  const [value, setSelectedValue] = React.useState<string | undefined>(undefined);
  return <Dropdown>
      <FilterChipSelectInput label="Filter" value={value} onClearButtonClick={() => {
      setSelectedValue(undefined);
    }} />
      <DropdownOverlay>
        <ActionList>
          <ActionListItem onClick={({
          name,
          value
        }) => {
          console.log({
            name,
            value
          });
          setSelectedValue(name);
        }} isSelected={status === 'latest-added'} title="Latest Added" value="latest-added" />
          <ActionListItem onClick={({
          name,
          value
        }) => {
          console.log({
            name,
            value
          });
          setSelectedValue(name);
        }} isSelected={value === 'latest-invoice'} title="Latest Invoice" value="latest-invoice" />

          <ActionListItem onClick={({
          name,
          value
        }) => {
          console.log({
            name,
            value
          });
          setSelectedValue(name);
        }} isSelected={value === 'oldest-due-date'} title="Oldest Due Date" value="oldest-due-date" />
        </ActionList>
      </DropdownOverlay>
    </Dropdown>;
}`,...(j=(L=v.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var w,A,F;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`(): React.ReactElement => {
  const [value, setSelectedValue] = React.useState<string[]>([]);
  const handleOnClick = (name: string): void => {
    if (value.includes(name)) {
      setSelectedValue(value.filter(val => val !== name));
    } else {
      setSelectedValue([...value, name]);
    }
  };
  return <Dropdown selectionType="multiple">
      <FilterChipSelectInput label="Filter Chip" value={value} onClearButtonClick={value => {
      console.log('value', value);
      setSelectedValue([]);
    }} />
      <DropdownOverlay>
        <ActionList>
          <ActionListItem onClick={({
          name
        }) => {
          handleOnClick(name);
        }} title="Latest Added" value="latest-added" />
          <ActionListItem onClick={({
          name
        }) => {
          handleOnClick(name);
        }} title="Latest Invoice" value="latest-invoice" />

          <ActionListItem onClick={({
          name
        }) => {
          handleOnClick(name);
        }} title="Oldest Due Date" value="oldest-due-date" />
        </ActionList>
      </DropdownOverlay>
    </Dropdown>;
}`,...(F=(A=h.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var y,b,T;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box>
      <Text size="small" weight="semibold" color="interactive.text.primary.normal">
        Uncontrolled Filter Chip Select Input - Single
      </Text>
      <Dropdown selectionType="single">
        <FilterChipSelectInput label="Filter Chip" onChange={value => {
        console.log('value', value);
      }} onClearButtonClick={value => {
        console.log('value', value);
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Latest Added" value="latest-added" />
            <ActionListItem title="Latest Invoice" value="latest-invoice" />
            <ActionListItem title="Oldest Due Date" value="oldest-due-date" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
      <Text size="small" weight="semibold" color="interactive.text.primary.normal">
        Uncontrolled Filter Chip Select Input - Multiple
      </Text>
      <Dropdown selectionType="multiple">
        <FilterChipSelectInput label="Filter Chip" onChange={value => {
        console.log('value', value);
      }} onClearButtonClick={value => {
        console.log('value', value);
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Latest Added" value="latest-added" />
            <ActionListItem title="Latest Invoice" value="latest-invoice" />
            <ActionListItem title="Oldest Due Date" value="oldest-due-date" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(T=(b=m.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var O,B,k;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`(): React.ReactElement => {
  const [singleFilterChipSelectInputValue, setSingleFilterChipSelectInputValue] = React.useState<string | undefined>('latest-added');
  const [multipleFilterChipSelectInputValue, setMultipleFilterChipSelectInputValue] = React.useState<string[]>(['latest-added', 'latest-invoice']);
  return <Box>
      <Text size="small" weight="semibold" color="interactive.text.primary.normal">
        Controlled Filter Chip Select Input - Single
      </Text>
      <Dropdown selectionType="single">
        <FilterChipSelectInput label="Filter Chip" value={singleFilterChipSelectInputValue} onChange={({
        values
      }) => {
        setSingleFilterChipSelectInputValue(values[0]);
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Latest Added" value="latest-added" />
            <ActionListItem title="Latest Invoice" value="latest-invoice" />

            <ActionListItem title="Oldest Due Date" value="oldest-due-date" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
      <Text> Controlled Filter Chip Select Input - Multiple </Text>
      <Dropdown selectionType="multiple">
        <FilterChipSelectInput label="Filter Chip" value={multipleFilterChipSelectInputValue} onClearButtonClick={() => {
        setMultipleFilterChipSelectInputValue([]);
      }} onChange={({
        values
      }) => {
        setMultipleFilterChipSelectInputValue(values);
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Latest Added" value="latest-added" />
            <ActionListItem title="Latest Invoice" value="latest-invoice" />
            <ActionListItem title="Oldest Due Date" value="oldest-due-date" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(k=(B=C.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var V,f,R;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`(): React.ReactElement => {
  return <Dropdown selectionType="single">
      <FilterChipSelectInput label="Filter Chip" isDisabled />
      <DropdownOverlay>
        <ActionList>
          <ActionListItem title="Latest Added" value="latest-added" />
          <ActionListItem title="Latest Invoice" value="latest-invoice" />
          <ActionListItem title="Oldest Due Date" value="oldest-due-date" />
        </ActionList>
      </DropdownOverlay>
    </Dropdown>;
}`,...(R=(f=x.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var z,M,E;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box>
      <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.4">
        Pass{' '}
        <Text as="span" size="small" weight="semibold">
          showClearButton={'{false}'}
        </Text>{' '}
        for filters that must always hold a value. The chip never shows the clear (cross) button,
        even when a value is selected — the selection can still be changed from the dropdown.
      </Text>
      <Dropdown selectionType="single">
        <FilterChipSelectInput label="Filter Chip" showClearButton={false} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Latest Added" value="latest-added" />
            <ActionListItem title="Latest Invoice" value="latest-invoice" />
            <ActionListItem title="Oldest Due Date" value="oldest-due-date" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(E=(M=g.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var U,q,P;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`(): React.ReactElement => {
  const [value, setSelectedValue] = React.useState<string[]>(['latest-added']);
  return <Box>
      <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.4">
        In{' '}
        <Text as="span" size="small" weight="semibold">
          selectionType=&quot;multiple&quot;
        </Text>{' '}
        the chip shows the selected option&apos;s name when a single option is selected (e.g.{' '}
        <Text as="span" size="small" weight="semibold">
          Filter Chip: Latest Added
        </Text>
        ), and collapses to a compact counter once more than one is selected (e.g.{' '}
        <Text as="span" size="small" weight="semibold">
          Filter Chip: 2
        </Text>
        ). Select more than one option below to see it switch.
      </Text>
      <Dropdown selectionType="multiple">
        <FilterChipSelectInput label="Filter Chip" value={value} onChange={({
        values
      }) => setSelectedValue(values)} onClearButtonClick={() => setSelectedValue([])} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Latest Added" value="latest-added" />
            <ActionListItem title="Latest Invoice" value="latest-invoice" />
            <ActionListItem title="Oldest Due Date" value="oldest-due-date" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(P=(q=S.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};const H=["Default","SelectionTypeMultiple","UncontrolledFilterChipSelectInput","FilterChipSelectInputControlled","FilterChipSelectInputDisabled","WithoutClearButton","MultiSelectValueDisplay"];export{v as Default,C as FilterChipSelectInputControlled,x as FilterChipSelectInputDisabled,S as MultiSelectValueDisplay,h as SelectionTypeMultiple,m as UncontrolledFilterChipSelectInput,g as WithoutClearButton,H as __namedExportsOrder,G as default};
