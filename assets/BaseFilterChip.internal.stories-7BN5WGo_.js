import{j as e,B as t,T as s,C as v,hY as r,at as d,hZ as x,aS as h,aq as m,ar as l,h_ as u,h$ as o,ad as B}from"./iframe-C1qQ09LF.js";import{S as T}from"./StoryPageWrapper-CS0_5maI.js";import{g as F}from"./storybookArgTypes-DFfQV31s.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const P=()=>e.jsx(T,{componentDescription:"Chips represents a collection of selectable objects which enable users to make selections, filter content, and trigger relevant actions. Chips can have either single selection or multiple (based on context).",componentName:"BaseFilterChip",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=75272-53870&t=TGcKiXJiozSRKwOG-1&scaling=min-zoom&page-id=52377%3A23885&mode=design"}),R={title:"Components/BaseFilterChip",tags:["autodocs"],argTypes:F(),parameters:{docs:{page:P}}},z=()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(s,{weight:"semibold",size:"small",children:"Date filter"}),e.jsx(t,{children:e.jsx(u,{label:"Date",selectionType:"single",defaultValue:o("1999-04-22").toDate()})})]}),S=()=>{const[a,c]=B.useState("active");return e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(s,{weight:"semibold",size:"small",children:"Dropdown filter"}),e.jsx(t,{children:e.jsxs(d,{selectionType:"single",children:[e.jsx(x,{label:"Status",value:a,onChange:({values:p})=>c(p[0]??"")}),e.jsx(h,{children:e.jsxs(m,{children:[e.jsx(l,{title:"Active",value:"active"}),e.jsx(l,{title:"Pending",value:"pending"}),e.jsx(l,{title:"Failed",value:"failed"})]})})]})})]})},A=()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(s,{weight:"semibold",size:"small",children:"Date filter"}),e.jsx(t,{children:e.jsx(u,{label:"Date",selectionType:"single",defaultValue:o("1999-04-22").toDate(),showClearButton:!1})})]}),I=()=>{const[a,c]=B.useState("latest");return e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(s,{weight:"semibold",size:"small",children:"Dropdown filter"}),e.jsx(t,{children:e.jsxs(d,{selectionType:"single",children:[e.jsx(x,{label:"Sort",value:a,showClearButton:!1,onChange:({values:p})=>c(p[0]??"")}),e.jsx(h,{children:e.jsxs(m,{children:[e.jsx(l,{title:"Latest first",value:"latest"}),e.jsx(l,{title:"Oldest first",value:"oldest"})]})})]})})]})},n=()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.6",children:[e.jsxs(t,{display:"flex",gap:"spacing.4",flexWrap:"wrap",children:[e.jsx(r,{label:"Date",value:"22/04/1999 - 14/02/2025"}),e.jsx(r,{label:"Unselected Chip"}),e.jsx(r,{label:"Phone Numbers",value:["9999999999","0000000000"],selectionType:"multiple"}),e.jsx(r,{label:"Disabled",value:["9999999999","0000000000"],selectionType:"multiple",isDisabled:!0})]}),e.jsxs(t,{children:[e.jsx(s,{marginBottom:"spacing.4",color:"surface.text.gray.muted",size:"small",children:"BaseFilterChip also powers the Dropdown's FilterChipSelectInput. Open the chip to select an option."}),e.jsxs(d,{selectionType:"single",children:[e.jsx(x,{label:"Status"}),e.jsx(h,{children:e.jsxs(m,{children:[e.jsx(l,{title:"Active",value:"active"}),e.jsx(l,{title:"Pending",value:"pending"}),e.jsx(l,{title:"Failed",value:"failed"})]})})]})]}),e.jsxs(t,{children:[e.jsxs(s,{marginBottom:"spacing.4",color:"surface.text.gray.muted",size:"small",children:["BaseFilterChip powers the FilterChipDatePicker. With"," ",e.jsx(s,{as:"span",weight:"semibold",size:"small",children:'displayFormat="compact"'}),", selecting a named preset shows the preset label, while a custom range shows a humanised date range inside the chip's selected state."]}),e.jsx(u,{label:"Date",selectionType:"range",displayFormat:"compact",presets:[{label:"Past 7 days",value:a=>[o(a).subtract(7,"days").toDate(),a]},{label:"Past 15 days",value:a=>[o(a).subtract(15,"days").toDate(),a]},{label:"Past month",value:a=>[o(a).subtract(1,"month").toDate(),a]},{label:"Custom",value:()=>[null,null]}],onChange:a=>{console.log(a)}})]})]}),i=()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.8",maxWidth:"760px",children:[e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(s,{weight:"semibold",children:"Clear button behaviour"}),e.jsxs(s,{size:"small",color:"surface.text.gray.muted",children:["Use ",e.jsx(v,{children:"showClearButton"})," to control the clear (cross) button on the date and dropdown filters that BaseFilterChip powers."]})]}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(s,{weight:"semibold",size:"medium",children:"With clear button (default)"}),e.jsxs(t,{display:"grid",gridTemplateColumns:"repeat(2, minmax(280px, 1fr))",gap:"spacing.7",alignItems:"flex-start",children:[e.jsx(z,{}),e.jsx(S,{})]})]}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(s,{weight:"semibold",size:"medium",children:["Without clear button (showClearButton=","{false}",")"]}),e.jsxs(t,{display:"grid",gridTemplateColumns:"repeat(2, minmax(280px, 1fr))",gap:"spacing.7",alignItems:"flex-start",children:[e.jsx(A,{}),e.jsx(I,{})]})]})]});i.storyName="Clear Button Behaviour";var g,f,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.6">
      <Box display="flex" gap="spacing.4" flexWrap="wrap">
        <BaseFilterChip label="Date" value="22/04/1999 - 14/02/2025" />
        <BaseFilterChip label="Unselected Chip" />
        <BaseFilterChip label="Phone Numbers" value={['9999999999', '0000000000']} selectionType="multiple" />
        <BaseFilterChip label="Disabled" value={['9999999999', '0000000000']} selectionType="multiple" isDisabled />
      </Box>
      <Box>
        <Text marginBottom="spacing.4" color="surface.text.gray.muted" size="small">
          BaseFilterChip also powers the Dropdown&apos;s FilterChipSelectInput. Open the chip to
          select an option.
        </Text>
        <Dropdown selectionType="single">
          <FilterChipSelectInput label="Status" />
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Active" value="active" />
              <ActionListItem title="Pending" value="pending" />
              <ActionListItem title="Failed" value="failed" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
      <Box>
        <Text marginBottom="spacing.4" color="surface.text.gray.muted" size="small">
          BaseFilterChip powers the FilterChipDatePicker. With{' '}
          <Text as="span" weight="semibold" size="small">
            displayFormat=&quot;compact&quot;
          </Text>
          , selecting a named preset shows the preset label, while a custom range shows a humanised
          date range inside the chip&apos;s selected state.
        </Text>
        <FilterChipDatePicker label="Date" selectionType="range" displayFormat="compact" presets={[{
        label: 'Past 7 days',
        value: date => [dayjs(date).subtract(7, 'days').toDate(), date]
      }, {
        label: 'Past 15 days',
        value: date => [dayjs(date).subtract(15, 'days').toDate(), date]
      }, {
        label: 'Past month',
        value: date => [dayjs(date).subtract(1, 'month').toDate(), date]
      }, {
        label: 'Custom',
        value: () => [null, null] as DatesRangeValue
      }]} onChange={date => {
        console.log(date);
      }} />
      </Box>
    </Box>;
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var j,D,y,C,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.8" maxWidth="760px">
      <Box display="flex" flexDirection="column" gap="spacing.2">
        <Text weight="semibold">Clear button behaviour</Text>
        <Text size="small" color="surface.text.gray.muted">
          Use <Code>showClearButton</Code> to control the clear (cross) button on the date and
          dropdown filters that BaseFilterChip powers.
        </Text>
      </Box>

      <Box display="flex" flexDirection="column" gap="spacing.4">
        <Text weight="semibold" size="medium">
          With clear button (default)
        </Text>
        <Box display="grid" gridTemplateColumns="repeat(2, minmax(280px, 1fr))" gap="spacing.7" alignItems="flex-start">
          <ClearDateEnabled />
          <ClearDropdownEnabled />
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="spacing.4">
        <Text weight="semibold" size="medium">
          Without clear button (showClearButton={'{false}'})
        </Text>
        <Box display="grid" gridTemplateColumns="repeat(2, minmax(280px, 1fr))" gap="spacing.7" alignItems="flex-start">
          <ClearDateDisabled />
          <ClearDropdownDisabled />
        </Box>
      </Box>
    </Box>;
}`,...(y=(D=i.parameters)==null?void 0:D.docs)==null?void 0:y.source},description:{story:"Demonstrates how the clear (cross) button behaves across common wirings of the\nFilterChipDatePicker, and how to hide it with `showClearButton={false}`.",...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.description}}};const _=["Default","ClearButtonBehavior"];export{i as ClearButtonBehavior,n as Default,_ as __namedExportsOrder,R as default};
