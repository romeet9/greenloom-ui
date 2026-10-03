import{jR as a,j as e,B as t,T as n,jS as l,aj as i,H as k,ad as f,n as C,aK as K,y as j}from"./iframe-C1qQ09LF.js";import{S as Z}from"./Sandbox.web-B2xP21Qp.js";import{S as q}from"./StoryPageWrapper-CS0_5maI.js";import{g as J}from"./storybookArgTypes-DFfQV31s.js";const X=()=>e.jsxs(q,{componentName:"QuickFilter",componentDescription:"QuickFilter & QuickFilterGroups can be used to show a list of filters that can be selected by the user.",apiDecisionLink:null,figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=100413-32686&t=n9A7LztwEkIsly3v-0",children:[e.jsx(k,{size:"large",children:"Usage"}),e.jsx(Z,{showConsole:!0,children:`
        import { QuickFilterGroup,QuickFilter  } from '@greenloom/ui/components';
        
        function App() {
          return (
            <QuickFilterGroup >
             <QuickFilter title="Title1" value="value1" trailingElement={<Counter value={234} />} />{' '}
             <QuickFilter title="Title2" value="value2" trailingElement={<Counter value={234} />} />{' '}
           </QuickFilterGroup>
          )
        }

        export default App;
      `})]}),Y={title:"Components/QuickFilter & QuickFilterGroup",component:a,tags:["autodocs"],argTypes:{...J()},parameters:{docs:{page:X}}},$=r=>e.jsxs(a,{...r,children:[e.jsx(l,{title:"All",value:"All",trailing:e.jsx(i,{value:400,color:"information"})}),e.jsx(l,{title:"Captured",value:"Captured",trailing:e.jsx(i,{value:234,color:"positive"})}),e.jsx(l,{title:"Failed",value:"Failed",trailing:e.jsx(i,{value:234,color:"negative"})})]}),o=$.bind({});o.storyName="Default";o.args={selectionType:"single"};const ee=()=>e.jsxs(a,{selectionType:"single",onChange:({name:r,values:u})=>{console.log(r,u)},children:[e.jsx(l,{title:"Unresolved",value:"unresolved",trailing:e.jsx(i,{value:234,color:"information"})}),e.jsx(l,{title:"Resolved",value:"resolved",trailing:e.jsx(i,{value:234,color:"positive"})}),e.jsx(l,{title:"In Progress",value:"in_progress",trailing:e.jsx(i,{value:234,color:"neutral"})})]}),c=ee.bind({});c.storyName="QuickFilter Single Selection";const le=()=>e.jsxs(a,{selectionType:"multiple",onChange:({name:r,values:u})=>{console.log(r,u)},children:[e.jsx(l,{title:"Captured",value:"Captured",trailing:e.jsx(i,{value:234,color:"positive"})}),e.jsx(l,{title:"Failed",value:"Failed",trailing:e.jsx(i,{value:234,color:"negative"})}),e.jsx(l,{title:"Pending",value:"Pending",trailing:e.jsx(i,{value:234,color:"neutral"})})]}),p=le.bind({});p.storyName="QuickFilter Multiple Selection";const ie=()=>e.jsxs(a,{selectionType:"single",defaultValue:"Captured",children:[e.jsx(l,{title:"Captured",value:"Captured",trailing:e.jsx(i,{value:234,color:"positive"})}),e.jsx(l,{title:"Failed",value:"Failed",trailing:e.jsx(i,{value:234,color:"negative"})}),e.jsx(l,{title:"Pending",value:"Pending",trailing:e.jsx(i,{value:234,color:"neutral"})})]}),d=ie.bind({});d.storyName="QuickFilter with default value";const te=()=>{const[r,u]=f.useState(["Captured"]);return e.jsxs(a,{selectionType:"multiple",value:r,onChange:({values:m})=>u(m??[]),children:[e.jsx(l,{title:"Captured",value:"Captured",trailing:e.jsx(i,{value:234,color:"positive"})}),e.jsx(l,{title:"Failed",value:"Failed",trailing:e.jsx(i,{value:234,color:"negative"})}),e.jsx(l,{title:"Pending",value:"Pending",trailing:e.jsx(i,{value:234,color:"neutral"})})]})},g=te.bind({});g.storyName="QuickFilter Controlled";const ae=()=>e.jsxs(a,{selectionType:"single",children:[e.jsx(j,{content:"Filter all captured tickets",placement:"top",children:e.jsx(l,{title:"Captured",value:"Captured",trailing:e.jsx(i,{value:234,color:"positive"})})}),e.jsx(j,{content:"Filter all failed tickets",placement:"top",children:e.jsx(l,{title:"Failed",value:"Failed",trailing:e.jsx(i,{value:234,color:"negative"})})}),e.jsx(j,{content:"Filter all pending tickets",placement:"top",children:e.jsx(l,{title:"Pending",value:"Pending",trailing:e.jsx(i,{value:234,color:"neutral"})})})]}),x=ae.bind({});x.storyName="QuickFilters with Tooltip";const re=()=>{const[r,u]=f.useState(""),[m,Q]=f.useState([]);return e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsxs(t,{children:[e.jsxs(k,{size:"small",children:["Single Quick Filters Value: ",r]}),e.jsx(C,{onClick:()=>u("Failed"),children:"Set Value"})]}),e.jsxs(a,{selectionType:"single",value:r,onChange:({values:F})=>u(F[0]??""),children:[e.jsx(l,{title:"Captured",value:"Captured",trailing:e.jsx(i,{value:234,color:"positive"})}),e.jsx(l,{title:"Failed",value:"Failed",trailing:e.jsx(i,{value:234,color:"negative"})}),e.jsx(l,{title:"Pending",value:"Pending",trailing:e.jsx(i,{value:234,color:"neutral"})})]}),e.jsx(K,{}),e.jsxs(t,{children:[e.jsxs(k,{size:"small",children:["Multiple Quick Filters Value: ",m]}),e.jsx(C,{onClick:()=>Q(["Failed","Pending"]),children:"Set Value"})]}),e.jsxs(a,{selectionType:"multiple",value:m,onChange:({values:F})=>Q(F??[]),children:[e.jsx(l,{title:"Captured",value:"Captured",trailing:e.jsx(i,{value:234,color:"positive"})}),e.jsx(l,{title:"Failed",value:"Failed",trailing:e.jsx(i,{value:234,color:"negative"})}),e.jsx(l,{title:"Pending",value:"Pending",trailing:e.jsx(i,{value:234,color:"neutral"})})]})]})},v=re.bind({});v.storyName="Change Controlled QuickFilter";const s=()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.8",children:[e.jsxs(t,{children:[e.jsx(n,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"surface.text.gray.subtle",children:"Single Selection"}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(n,{size:"small",color:"surface.text.gray.muted",children:"Default (Unselected)"}),e.jsxs(a,{selectionType:"single",children:[e.jsx(l,{title:"All",value:"all",trailing:e.jsx(i,{value:400})}),e.jsx(l,{title:"Captured",value:"captured",trailing:e.jsx(i,{value:234})}),e.jsx(l,{title:"Failed",value:"failed",trailing:e.jsx(i,{value:56})})]})]}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(n,{size:"small",color:"surface.text.gray.muted",children:"With Selection"}),e.jsxs(a,{selectionType:"single",defaultValue:"captured",children:[e.jsx(l,{title:"All",value:"all",trailing:e.jsx(i,{value:400})}),e.jsx(l,{title:"Captured",value:"captured",trailing:e.jsx(i,{value:234})}),e.jsx(l,{title:"Failed",value:"failed",trailing:e.jsx(i,{value:56})})]})]})]})]}),e.jsxs(t,{children:[e.jsx(n,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"surface.text.gray.subtle",children:"Multiple Selection"}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(n,{size:"small",color:"surface.text.gray.muted",children:"Default (Unselected)"}),e.jsxs(a,{selectionType:"multiple",children:[e.jsx(l,{title:"Captured",value:"captured",trailing:e.jsx(i,{value:234})}),e.jsx(l,{title:"Failed",value:"failed",trailing:e.jsx(i,{value:56})}),e.jsx(l,{title:"Pending",value:"pending",trailing:e.jsx(i,{value:12})})]})]}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(n,{size:"small",color:"surface.text.gray.muted",children:"With Selection"}),e.jsxs(a,{selectionType:"multiple",defaultValue:["captured","failed"],children:[e.jsx(l,{title:"Captured",value:"captured",trailing:e.jsx(i,{value:234})}),e.jsx(l,{title:"Failed",value:"failed",trailing:e.jsx(i,{value:56})}),e.jsx(l,{title:"Pending",value:"pending",trailing:e.jsx(i,{value:12})})]})]})]})]}),e.jsxs(t,{children:[e.jsx(n,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"surface.text.gray.subtle",children:"Without Counter"}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(n,{size:"small",color:"surface.text.gray.muted",children:"Single Selection"}),e.jsxs(a,{selectionType:"single",defaultValue:"active",children:[e.jsx(l,{title:"All",value:"all"}),e.jsx(l,{title:"Active",value:"active"}),e.jsx(l,{title:"Inactive",value:"inactive"})]})]}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(n,{size:"small",color:"surface.text.gray.muted",children:"Multiple Selection"}),e.jsxs(a,{selectionType:"multiple",defaultValue:["active"],children:[e.jsx(l,{title:"All",value:"all"}),e.jsx(l,{title:"Active",value:"active"}),e.jsx(l,{title:"Inactive",value:"inactive"})]})]})]})]}),e.jsxs(t,{children:[e.jsx(n,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"surface.text.gray.subtle",children:"With Counter Colors"}),e.jsx(t,{display:"flex",flexDirection:"column",gap:"spacing.5",children:e.jsxs(a,{selectionType:"single",defaultValue:"all",children:[e.jsx(l,{title:"All",value:"all",trailing:e.jsx(i,{value:400,color:"information"})}),e.jsx(l,{title:"Success",value:"success",trailing:e.jsx(i,{value:234,color:"positive"})}),e.jsx(l,{title:"Failed",value:"failed",trailing:e.jsx(i,{value:56,color:"negative"})}),e.jsx(l,{title:"Pending",value:"pending",trailing:e.jsx(i,{value:12,color:"notice"})})]})})]})]});s.storyName="Showcase - All Variants";s.parameters={docs:{description:{story:"A comprehensive showcase of all QuickFilter variants including single/multiple selection, selected/unselected states, with/without counters, and different counter colors."}}};var h,y,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <QuickFilterGroup {...args}>
      <QuickFilter title="All" value="All" trailing={<Counter value={400} color="information" />} />
      <QuickFilter title="Captured" value="Captured" trailing={<Counter value={234} color="positive" />} />
      <QuickFilter title="Failed" value="Failed" trailing={<Counter value={234} color="negative" />} />
    </QuickFilterGroup>;
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var T,B,D;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <QuickFilterGroup selectionType="single" onChange={({
    name,
    values
  }) => {
    console.log(name, values);
  }}>
      <QuickFilter title="Unresolved" value="unresolved" trailing={<Counter value={234} color="information" />} />
      <QuickFilter title="Resolved" value="resolved" trailing={<Counter value={234} color="positive" />} />
      <QuickFilter title="In Progress" value="in_progress" trailing={<Counter value={234} color="neutral" />} />
    </QuickFilterGroup>;
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var P,G,V;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <QuickFilterGroup selectionType="multiple" onChange={({
    name,
    values
  }) => {
    console.log(name, values);
  }}>
      <QuickFilter title="Captured" value="Captured" trailing={<Counter value={234} color="positive" />} />
      <QuickFilter title="Failed" value="Failed" trailing={<Counter value={234} color="negative" />} />
      <QuickFilter title="Pending" value="Pending" trailing={<Counter value={234} color="neutral" />} />
    </QuickFilterGroup>;
}`,...(V=(G=p.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var b,z,A;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <QuickFilterGroup selectionType="single" defaultValue="Captured">
      <QuickFilter title="Captured" value="Captured" trailing={<Counter value={234} color="positive" />} />
      <QuickFilter title="Failed" value="Failed" trailing={<Counter value={234} color="negative" />} />
      <QuickFilter title="Pending" value="Pending" trailing={<Counter value={234} color="neutral" />} />
    </QuickFilterGroup>;
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var w,W,M;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState<string | string[]>(['Captured']);
  return <QuickFilterGroup selectionType="multiple" value={value} onChange={({
    values
  }) => setValue(values ?? [])}>
      <QuickFilter title="Captured" value="Captured" trailing={<Counter value={234} color="positive" />} />
      <QuickFilter title="Failed" value="Failed" trailing={<Counter value={234} color="negative" />} />
      <QuickFilter title="Pending" value="Pending" trailing={<Counter value={234} color="neutral" />} />
    </QuickFilterGroup>;
}`,...(M=(W=g.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var N,R,U;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <QuickFilterGroup selectionType="single">
      <Tooltip content="Filter all captured tickets" placement="top">
        <QuickFilter title="Captured" value="Captured" trailing={<Counter value={234} color="positive" />} />
      </Tooltip>
      <Tooltip content="Filter all failed tickets" placement="top">
        <QuickFilter title="Failed" value="Failed" trailing={<Counter value={234} color="negative" />} />
      </Tooltip>
      <Tooltip content="Filter all pending tickets" placement="top">
        <QuickFilter title="Pending" value="Pending" trailing={<Counter value={234} color="neutral" />} />
      </Tooltip>
    </QuickFilterGroup>;
}`,...(U=(R=x.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var _,I,H;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState<string | string[]>('');
  const [multipleValue, setMultipleValue] = React.useState<string | string[]>([]);
  return <Box display="flex" flexDirection="column" gap="spacing.3">
      <Box>
        <Heading size="small">Single Quick Filters Value: {value}</Heading>
        <Button onClick={() => setValue('Failed')}>Set Value</Button>
      </Box>
      <QuickFilterGroup selectionType="single" value={value} onChange={({
      values
    }) => setValue(values[0] ?? '')}>
        <QuickFilter title="Captured" value="Captured" trailing={<Counter value={234} color="positive" />} />
        <QuickFilter title="Failed" value="Failed" trailing={<Counter value={234} color="negative" />} />
        <QuickFilter title="Pending" value="Pending" trailing={<Counter value={234} color="neutral" />} />
      </QuickFilterGroup>
      <Divider />
      <Box>
        <Heading size="small">Multiple Quick Filters Value: {multipleValue}</Heading>
        <Button onClick={() => setMultipleValue(['Failed', 'Pending'])}>Set Value</Button>
      </Box>
      <QuickFilterGroup selectionType="multiple" value={multipleValue} onChange={({
      values
    }) => setMultipleValue(values ?? [])}>
        <QuickFilter title="Captured" value="Captured" trailing={<Counter value={234} color="positive" />} />
        <QuickFilter title="Failed" value="Failed" trailing={<Counter value={234} color="negative" />} />
        <QuickFilter title="Pending" value="Pending" trailing={<Counter value={234} color="neutral" />} />
      </QuickFilterGroup>
    </Box>;
}`,...(H=(I=v.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var E,L,O;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.8">
      {/* Single Selection */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="surface.text.gray.subtle">
          Single Selection
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Box display="flex" flexDirection="column" gap="spacing.2">
            <Text size="small" color="surface.text.gray.muted">
              Default (Unselected)
            </Text>
            <QuickFilterGroup selectionType="single">
              <QuickFilter title="All" value="all" trailing={<Counter value={400} />} />
              <QuickFilter title="Captured" value="captured" trailing={<Counter value={234} />} />
              <QuickFilter title="Failed" value="failed" trailing={<Counter value={56} />} />
            </QuickFilterGroup>
          </Box>
          <Box display="flex" flexDirection="column" gap="spacing.2">
            <Text size="small" color="surface.text.gray.muted">
              With Selection
            </Text>
            <QuickFilterGroup selectionType="single" defaultValue="captured">
              <QuickFilter title="All" value="all" trailing={<Counter value={400} />} />
              <QuickFilter title="Captured" value="captured" trailing={<Counter value={234} />} />
              <QuickFilter title="Failed" value="failed" trailing={<Counter value={56} />} />
            </QuickFilterGroup>
          </Box>
        </Box>
      </Box>

      {/* Multiple Selection */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="surface.text.gray.subtle">
          Multiple Selection
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Box display="flex" flexDirection="column" gap="spacing.2">
            <Text size="small" color="surface.text.gray.muted">
              Default (Unselected)
            </Text>
            <QuickFilterGroup selectionType="multiple">
              <QuickFilter title="Captured" value="captured" trailing={<Counter value={234} />} />
              <QuickFilter title="Failed" value="failed" trailing={<Counter value={56} />} />
              <QuickFilter title="Pending" value="pending" trailing={<Counter value={12} />} />
            </QuickFilterGroup>
          </Box>
          <Box display="flex" flexDirection="column" gap="spacing.2">
            <Text size="small" color="surface.text.gray.muted">
              With Selection
            </Text>
            <QuickFilterGroup selectionType="multiple" defaultValue={['captured', 'failed']}>
              <QuickFilter title="Captured" value="captured" trailing={<Counter value={234} />} />
              <QuickFilter title="Failed" value="failed" trailing={<Counter value={56} />} />
              <QuickFilter title="Pending" value="pending" trailing={<Counter value={12} />} />
            </QuickFilterGroup>
          </Box>
        </Box>
      </Box>

      {/* Without Counter */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="surface.text.gray.subtle">
          Without Counter
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Box display="flex" flexDirection="column" gap="spacing.2">
            <Text size="small" color="surface.text.gray.muted">
              Single Selection
            </Text>
            <QuickFilterGroup selectionType="single" defaultValue="active">
              <QuickFilter title="All" value="all" />
              <QuickFilter title="Active" value="active" />
              <QuickFilter title="Inactive" value="inactive" />
            </QuickFilterGroup>
          </Box>
          <Box display="flex" flexDirection="column" gap="spacing.2">
            <Text size="small" color="surface.text.gray.muted">
              Multiple Selection
            </Text>
            <QuickFilterGroup selectionType="multiple" defaultValue={['active']}>
              <QuickFilter title="All" value="all" />
              <QuickFilter title="Active" value="active" />
              <QuickFilter title="Inactive" value="inactive" />
            </QuickFilterGroup>
          </Box>
        </Box>
      </Box>

      {/* With Different Counter Colors */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="surface.text.gray.subtle">
          With Counter Colors
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <QuickFilterGroup selectionType="single" defaultValue="all">
            <QuickFilter title="All" value="all" trailing={<Counter value={400} color="information" />} />
            <QuickFilter title="Success" value="success" trailing={<Counter value={234} color="positive" />} />
            <QuickFilter title="Failed" value="failed" trailing={<Counter value={56} color="negative" />} />
            <QuickFilter title="Pending" value="pending" trailing={<Counter value={12} color="notice" />} />
          </QuickFilterGroup>
        </Box>
      </Box>
    </Box>;
}`,...(O=(L=s.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const ne=["Default","QuickFilterSingleStory","QuickFilterMultipleStory","QuickFilterWithDefaultStory","QuickFilterControlledStory","QuickFiltersWithTooltipStory","ChangeControlledQuickFilterStory","QuickFilterShowcase"],pe=Object.freeze(Object.defineProperty({__proto__:null,ChangeControlledQuickFilterStory:v,Default:o,QuickFilterControlledStory:g,QuickFilterMultipleStory:p,QuickFilterShowcase:s,QuickFilterSingleStory:c,QuickFilterWithDefaultStory:d,QuickFiltersWithTooltipStory:x,__namedExportsOrder:ne,default:Y},Symbol.toStringTag,{value:"Module"}));export{pe as Q};
