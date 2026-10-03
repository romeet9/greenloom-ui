import{jp as S,ad as c,j as e,at as d,hZ as u,aS as p,aq as v,ar as s,h_ as B}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const b={title:"Components/FilterChipGroup",component:S,args:{},parameters:{viewMode:"story",options:{showPanel:!1},previewTabs:{"storybook/docs/panel":{hidden:!0}},chromatic:{disableSnapshot:!0}}},r=()=>{const[l,o]=c.useState(void 0);return e.jsxs(S,{children:[e.jsxs(d,{children:[e.jsx(u,{label:"Filter",value:l,onClearButtonClick:()=>{o(void 0)}}),e.jsx(p,{children:e.jsxs(v,{children:[e.jsx(s,{onClick:({name:t,value:a})=>{console.log({name:t,value:a}),o(t)},isSelected:status==="latest-added",title:"Latest Added",value:"latest-added"}),e.jsx(s,{onClick:({name:t,value:a})=>{console.log({name:t,value:a}),o(t)},isSelected:l==="latest-invoice",title:"Latest Invoice",value:"latest-invoice"}),e.jsx(s,{onClick:({name:t,value:a})=>{console.log({name:t,value:a}),o(t)},isSelected:l==="oldest-due-date",title:"Oldest Due Date",value:"oldest-due-date"})]})})]}),e.jsx(B,{label:"Date",selectionType:"range"})]})},i=()=>{const l="latest-added",o=["active"],[t,a]=c.useState(l),[I,m]=c.useState(o),k=()=>{a(l),m(o)};return e.jsxs(S,{showClearButton:!1,onResetButtonClick:k,children:[e.jsxs(d,{children:[e.jsx(u,{label:"Sort",value:t,onChange:({values:h})=>a(h[0])}),e.jsx(p,{children:e.jsxs(v,{children:[e.jsx(s,{title:"Latest Added",value:"latest-added"}),e.jsx(s,{title:"Latest Invoice",value:"latest-invoice"}),e.jsx(s,{title:"Oldest Due Date",value:"oldest-due-date"})]})})]}),e.jsxs(d,{selectionType:"multiple",children:[e.jsx(u,{label:"Status",value:I,onChange:({values:h})=>m(h)}),e.jsx(p,{children:e.jsxs(v,{children:[e.jsx(s,{title:"Active",value:"active"}),e.jsx(s,{title:"Pending",value:"pending"}),e.jsx(s,{title:"Failed",value:"failed"})]})})]})]})},n=()=>{const l=["active"],[o,t]=c.useState(l);return e.jsx(S,{onResetButtonClick:()=>t(l),onClearButtonClick:()=>t([]),children:e.jsxs(d,{selectionType:"multiple",children:[e.jsx(u,{label:"Status",value:o,onChange:({values:a})=>t(a)}),e.jsx(p,{children:e.jsxs(v,{children:[e.jsx(s,{title:"Active",value:"active"}),e.jsx(s,{title:"Pending",value:"pending"}),e.jsx(s,{title:"Failed",value:"failed"})]})})]})})};var A,C,D;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`(): React.ReactElement => {
  const [value, setSelectedValue] = React.useState<string | undefined>(undefined);
  return <FilterChipGroup>
      <Dropdown>
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
      </Dropdown>
      <FilterChipDatePicker label="Date" selectionType="range" />
    </FilterChipGroup>;
}`,...(D=(C=r.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var T,L,g,x,j;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`(): React.ReactElement => {
  const SORT_DEFAULT = 'latest-added';
  const STATUS_DEFAULT = ['active'];
  const [sort, setSort] = React.useState<string | undefined>(SORT_DEFAULT);
  const [status, setStatus] = React.useState<string[]>(STATUS_DEFAULT);
  const handleReset = (): void => {
    setSort(SORT_DEFAULT);
    setStatus(STATUS_DEFAULT);
  };
  return <FilterChipGroup showClearButton={false} onResetButtonClick={handleReset}>
      <Dropdown>
        <FilterChipSelectInput label="Sort" value={sort} onChange={({
        values
      }) => setSort(values[0])} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Latest Added" value="latest-added" />
            <ActionListItem title="Latest Invoice" value="latest-invoice" />
            <ActionListItem title="Oldest Due Date" value="oldest-due-date" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
      <Dropdown selectionType="multiple">
        <FilterChipSelectInput label="Status" value={status} onChange={({
        values
      }) => setStatus(values)} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Active" value="active" />
            <ActionListItem title="Pending" value="pending" />
            <ActionListItem title="Failed" value="failed" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </FilterChipGroup>;
}`,...(g=(L=i.parameters)==null?void 0:L.docs)==null?void 0:g.source},description:{story:`Group-level "Reset" (Phase 1).

"Reset" and "Clear" are separate group-level actions. \`onResetButtonClick\` renders the Reset
action, which fires a single callback WITHOUT emptying the chips — so the consumer restores every
filter's default in one place. Here \`showClearButton={false}\` hides the Clear action so only
"Reset" is offered, and one click restores BOTH the Sort and Status filters to their defaults.
(Restoring defaults for uncontrolled filters is Phase 2 — see \`_decisions/filter-chip-reset.md\`.)`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.description}}};var R,F,f,w,y;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`(): React.ReactElement => {
  const STATUS_DEFAULT = ['active'];
  const [status, setStatus] = React.useState<string[]>(STATUS_DEFAULT);
  return <FilterChipGroup onResetButtonClick={() => setStatus(STATUS_DEFAULT)} onClearButtonClick={() => setStatus([])}>
      <Dropdown selectionType="multiple">
        <FilterChipSelectInput label="Status" value={status} onChange={({
        values
      }) => setStatus(values)} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Active" value="active" />
            <ActionListItem title="Pending" value="pending" />
            <ActionListItem title="Failed" value="failed" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </FilterChipGroup>;
}`,...(f=(F=n.parameters)==null?void 0:F.docs)==null?void 0:f.source},description:{story:'A group can offer **both** a "Reset" and a "Clear" action at the same time by providing\n`onResetButtonClick` (restores defaults) alongside the default Clear action (`onClearButtonClick`\nempties everything). Labels can be customised via `resetButtonText` / `clearButtonText`.',...(y=(w=n.parameters)==null?void 0:w.docs)==null?void 0:y.description}}};const E=["Default","WithResetButton","WithResetAndClearButtons"];export{r as Default,n as WithResetAndClearButtons,i as WithResetButton,E as __namedExportsOrder,b as default};
