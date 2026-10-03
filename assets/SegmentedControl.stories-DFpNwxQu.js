import{jT as t,ad as J,j as e,B as l,T as o,jU as n,H as i,gD as A,I as G,aA as F,ex as N,eB as U,l as K,C as x}from"./iframe-C1qQ09LF.js";import{S as Q}from"./StoryPageWrapper-CS0_5maI.js";import{S as X}from"./Sandbox.web-B2xP21Qp.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const Y=()=>e.jsxs(Q,{componentDescription:"SegmentedControl allows users to select a single option from a set of 2-5 options, displayed as a horizontal group of buttons.",componentName:"SegmentedControl",imports:"import { SegmentedControl, SegmentedControlItem } from '@greenloom/ui/components';",note:e.jsxs(o,{children:["SegmentedControl can look visually similar to"," ",e.jsx(K,{target:"_blank",href:"https://ui.greenloom.ai/?path=/docs/components-tabs--docs",children:"Tabs"}),", but they solve different problems. Use ",e.jsx(x,{size:"medium",children:"SegmentedControl"})," as a compact, form-like control to pick one of 2–5 options that filter or change how the"," ",e.jsx(o,{as:"span",weight:"semibold",children:"same"})," ","content is displayed (e.g. Daily / Weekly / Monthly, List / Grid). If you instead need to navigate between distinct views or sections, where each option reveals its own content panel, use ",e.jsx(x,{size:"medium",children:"Tabs"}),"."]}),children:[e.jsx(i,{size:"large",children:"Usage"}),e.jsx(X,{editorHeight:300,children:`
          import { Box, SegmentedControl, SegmentedControlItem } from '@greenloom/ui/components';

          function App() {
            return (
              <Box padding="spacing.5">
                <SegmentedControl defaultValue="daily" label="Time Period">
                  <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
                  <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
                  <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
                </SegmentedControl>
              </Box>
            )
          }

          export default App;
        `})]}),ae={title:"Components/SegmentedControl",component:t,tags:["autodocs"],parameters:{docs:{page:Y}},argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},isDisabled:{control:{type:"boolean"}},label:{control:{type:"text"}},labelPosition:{control:{type:"select"},options:["top","left"]},helpText:{control:{type:"text"}},errorText:{control:{type:"text"}},validationState:{control:{type:"select"},options:["none","error"]},necessityIndicator:{control:{type:"select"},options:["none","required","optional"]},isRequired:{control:{type:"boolean"}},name:{control:{type:"text"}},defaultValue:{control:{type:"text"}},value:{table:{disable:!0}},onChange:{table:{disable:!0}},children:{table:{disable:!0}}}},Z=a=>e.jsx(l,{padding:"spacing.5",children:e.jsxs(t,{...a,defaultValue:a.defaultValue||"daily",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"}),e.jsx(n,{value:"monthly",children:"Monthly"})]})}),r=Z.bind({});r.args={size:"medium",isDisabled:!1,label:"Time Period",labelPosition:"top",helpText:"",errorText:"",validationState:"none",necessityIndicator:"none",isRequired:!1};const d=()=>e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.6",padding:"spacing.5",children:[e.jsxs(l,{children:[e.jsx(o,{marginBottom:"spacing.3",weight:"semibold",children:"Small"}),e.jsxs(t,{size:"small",defaultValue:"daily",accessibilityLabel:"Time period",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"}),e.jsx(n,{value:"monthly",children:"Monthly"})]})]}),e.jsxs(l,{children:[e.jsx(o,{marginBottom:"spacing.3",weight:"semibold",children:"Medium"}),e.jsxs(t,{size:"medium",defaultValue:"daily",accessibilityLabel:"Time period",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"}),e.jsx(n,{value:"monthly",children:"Monthly"})]})]}),e.jsxs(l,{children:[e.jsx(o,{marginBottom:"spacing.3",weight:"semibold",children:"Large"}),e.jsxs(t,{size:"large",defaultValue:"daily",accessibilityLabel:"Time period",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"}),e.jsx(n,{value:"monthly",children:"Monthly"})]})]})]}),s=()=>e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.6",padding:"spacing.5",children:[e.jsxs(l,{children:[e.jsx(o,{marginBottom:"spacing.3",weight:"semibold",children:"Icon with label"}),e.jsxs(t,{defaultValue:"day",accessibilityLabel:"Time view",children:[e.jsx(n,{value:"day",leading:A,children:"Day"}),e.jsx(n,{value:"hour",leading:G,children:"Hour"}),e.jsx(n,{value:"trend",leading:F,children:"Trend"})]})]}),e.jsxs(l,{children:[e.jsx(o,{marginBottom:"spacing.3",weight:"semibold",children:"Icon only"}),e.jsxs(t,{defaultValue:"list",accessibilityLabel:"View mode",children:[e.jsx(n,{value:"list",leading:N,accessibilityLabel:"List view"}),e.jsx(n,{value:"grid",leading:U,accessibilityLabel:"Grid view"})]})]})]}),m=()=>e.jsx(l,{padding:"spacing.5",width:"400px",children:e.jsxs(t,{defaultValue:"overview",accessibilityLabel:"Navigation",children:[e.jsx(n,{value:"overview",children:"Overview"}),e.jsx(n,{value:"analytics",children:"Analytics"}),e.jsx(n,{value:"reports",children:"Reports"})]})}),c=()=>e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.6",padding:"spacing.5",children:[e.jsxs(l,{children:[e.jsx(o,{marginBottom:"spacing.3",weight:"semibold",children:"Entire group disabled"}),e.jsxs(t,{isDisabled:!0,defaultValue:"daily",accessibilityLabel:"Time period",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"}),e.jsx(n,{value:"monthly",children:"Monthly"})]})]}),e.jsxs(l,{children:[e.jsx(o,{marginBottom:"spacing.3",weight:"semibold",children:"Single item disabled"}),e.jsxs(t,{defaultValue:"daily",accessibilityLabel:"Time period",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"}),e.jsx(n,{value:"monthly",isDisabled:!0,children:"Monthly"})]})]})]}),g=()=>{const[a,E]=J.useState("weekly");return e.jsxs(l,{padding:"spacing.5",children:[e.jsxs(o,{marginBottom:"spacing.3",children:["Selected: ",a]}),e.jsxs(t,{value:a,onChange:({value:_})=>E(_),accessibilityLabel:"Time period",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"}),e.jsx(n,{value:"monthly",children:"Monthly"})]})]})},u=()=>e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.6",padding:"spacing.5",children:[e.jsxs(t,{label:"Time Period",defaultValue:"daily",helpText:"Select how often you'd like reports",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"}),e.jsx(n,{value:"monthly",children:"Monthly"})]}),e.jsxs(t,{label:"Frequency",defaultValue:"daily",validationState:"error",errorText:"Please select a valid frequency",necessityIndicator:"required",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"}),e.jsx(n,{value:"monthly",children:"Monthly"})]}),e.jsxs(t,{label:"View Mode",labelPosition:"left",defaultValue:"list",children:[e.jsx(n,{value:"list",children:"List"}),e.jsx(n,{value:"grid",children:"Grid"})]})]}),y=()=>e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.8",padding:"spacing.5",children:[e.jsxs(l,{children:[e.jsx(i,{size:"medium",marginBottom:"spacing.4",children:"Sizes"}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(l,{children:[e.jsx(o,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.2",children:"Small"}),e.jsxs(t,{size:"small",defaultValue:"daily",accessibilityLabel:"Time period",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"}),e.jsx(n,{value:"monthly",children:"Monthly"})]})]}),e.jsxs(l,{children:[e.jsx(o,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.2",children:"Medium"}),e.jsxs(t,{size:"medium",defaultValue:"daily",accessibilityLabel:"Time period",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"}),e.jsx(n,{value:"monthly",children:"Monthly"})]})]}),e.jsxs(l,{children:[e.jsx(o,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.2",children:"Large"}),e.jsxs(t,{size:"large",defaultValue:"daily",accessibilityLabel:"Time period",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"}),e.jsx(n,{value:"monthly",children:"Monthly"})]})]})]})]}),e.jsxs(l,{children:[e.jsx(i,{size:"medium",marginBottom:"spacing.4",children:"With Icons"}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(l,{children:[e.jsx(o,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.2",children:"Icon + Label"}),e.jsxs(t,{defaultValue:"day",accessibilityLabel:"Time view",children:[e.jsx(n,{value:"day",leading:A,children:"Day"}),e.jsx(n,{value:"hour",leading:G,children:"Hour"}),e.jsx(n,{value:"trend",leading:F,children:"Trend"})]})]}),e.jsxs(l,{children:[e.jsx(o,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.2",children:"Icon Only"}),e.jsxs(t,{defaultValue:"list",accessibilityLabel:"View mode",children:[e.jsx(n,{value:"list",leading:N,accessibilityLabel:"List view"}),e.jsx(n,{value:"grid",leading:U,accessibilityLabel:"Grid view"})]})]})]})]}),e.jsxs(l,{children:[e.jsx(i,{size:"medium",marginBottom:"spacing.4",children:"Disabled"}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(l,{children:[e.jsx(o,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.2",children:"Group Disabled"}),e.jsxs(t,{isDisabled:!0,defaultValue:"daily",accessibilityLabel:"Time period",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"}),e.jsx(n,{value:"monthly",children:"Monthly"})]})]}),e.jsxs(l,{children:[e.jsx(o,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.2",children:"Single Item Disabled"}),e.jsxs(t,{defaultValue:"daily",accessibilityLabel:"Time period",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"}),e.jsx(n,{value:"monthly",isDisabled:!0,children:"Monthly"})]})]})]})]}),e.jsxs(l,{children:[e.jsx(i,{size:"medium",marginBottom:"spacing.4",children:"Label & Help Text"}),e.jsx(l,{display:"flex",flexDirection:"column",gap:"spacing.4",children:e.jsxs(t,{label:"Report Frequency",helpText:"Choose how often to receive reports",defaultValue:"weekly",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"}),e.jsx(n,{value:"monthly",children:"Monthly"})]})})]}),e.jsxs(l,{children:[e.jsx(i,{size:"medium",marginBottom:"spacing.4",children:"Validation"}),e.jsx(l,{display:"flex",flexDirection:"column",gap:"spacing.4",children:e.jsxs(t,{label:"Priority",defaultValue:"low",validationState:"error",errorText:"High priority items require approval",necessityIndicator:"required",children:[e.jsx(n,{value:"low",children:"Low"}),e.jsx(n,{value:"medium",children:"Medium"}),e.jsx(n,{value:"high",children:"High"})]})})]}),e.jsxs(l,{children:[e.jsx(i,{size:"medium",marginBottom:"spacing.4",children:"Label Position"}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(l,{children:[e.jsx(o,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.2",children:"Top (default)"}),e.jsxs(t,{label:"Period",defaultValue:"daily",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"})]})]}),e.jsxs(l,{children:[e.jsx(o,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.2",children:"Left"}),e.jsxs(t,{label:"Period",labelPosition:"left",defaultValue:"daily",children:[e.jsx(n,{value:"daily",children:"Daily"}),e.jsx(n,{value:"weekly",children:"Weekly"})]})]})]})]}),e.jsxs(l,{children:[e.jsx(i,{size:"medium",marginBottom:"spacing.4",children:"Necessity Indicator"}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(t,{label:"Required Field",necessityIndicator:"required",defaultValue:"a",children:[e.jsx(n,{value:"a",children:"Option A"}),e.jsx(n,{value:"b",children:"Option B"})]}),e.jsxs(t,{label:"Optional Field",necessityIndicator:"optional",defaultValue:"a",children:[e.jsx(n,{value:"a",children:"Option A"}),e.jsx(n,{value:"b",children:"Option B"})]})]})]})]});var p,h,S;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <Box padding="spacing.5">
      <SegmentedControl {...args} defaultValue={args.defaultValue || 'daily'}>
        <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
        <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
        <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
      </SegmentedControl>
    </Box>;
}`,...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var C,v,I;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.6" padding="spacing.5">
      <Box>
        <Text marginBottom="spacing.3" weight="semibold">
          Small
        </Text>
        <SegmentedControl size="small" defaultValue="daily" accessibilityLabel="Time period">
          <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
          <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
          <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
        </SegmentedControl>
      </Box>
      <Box>
        <Text marginBottom="spacing.3" weight="semibold">
          Medium
        </Text>
        <SegmentedControl size="medium" defaultValue="daily" accessibilityLabel="Time period">
          <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
          <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
          <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
        </SegmentedControl>
      </Box>
      <Box>
        <Text marginBottom="spacing.3" weight="semibold">
          Large
        </Text>
        <SegmentedControl size="large" defaultValue="daily" accessibilityLabel="Time period">
          <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
          <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
          <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
        </SegmentedControl>
      </Box>
    </Box>;
}`,...(I=(v=d.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var b,j,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.6" padding="spacing.5">
      <Box>
        <Text marginBottom="spacing.3" weight="semibold">
          Icon with label
        </Text>
        <SegmentedControl defaultValue="day" accessibilityLabel="Time view">
          <SegmentedControlItem value="day" leading={CalendarIcon}>
            Day
          </SegmentedControlItem>
          <SegmentedControlItem value="hour" leading={ClockIcon}>
            Hour
          </SegmentedControlItem>
          <SegmentedControlItem value="trend" leading={TrendingUpIcon}>
            Trend
          </SegmentedControlItem>
        </SegmentedControl>
      </Box>
      <Box>
        <Text marginBottom="spacing.3" weight="semibold">
          Icon only
        </Text>
        <SegmentedControl defaultValue="list" accessibilityLabel="View mode">
          <SegmentedControlItem value="list" leading={ListIcon} accessibilityLabel="List view" />
          <SegmentedControlItem value="grid" leading={LayoutIcon} accessibilityLabel="Grid view" />
        </SegmentedControl>
      </Box>
    </Box>;
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var B,w,T;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <Box padding="spacing.5" width="400px">
      <SegmentedControl defaultValue="overview" accessibilityLabel="Navigation">
        <SegmentedControlItem value="overview">Overview</SegmentedControlItem>
        <SegmentedControlItem value="analytics">Analytics</SegmentedControlItem>
        <SegmentedControlItem value="reports">Reports</SegmentedControlItem>
      </SegmentedControl>
    </Box>;
}`,...(T=(w=m.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var D,k,L;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.6" padding="spacing.5">
      <Box>
        <Text marginBottom="spacing.3" weight="semibold">
          Entire group disabled
        </Text>
        <SegmentedControl isDisabled defaultValue="daily" accessibilityLabel="Time period">
          <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
          <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
          <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
        </SegmentedControl>
      </Box>
      <Box>
        <Text marginBottom="spacing.3" weight="semibold">
          Single item disabled
        </Text>
        <SegmentedControl defaultValue="daily" accessibilityLabel="Time period">
          <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
          <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
          <SegmentedControlItem value="monthly" isDisabled>
            Monthly
          </SegmentedControlItem>
        </SegmentedControl>
      </Box>
    </Box>;
}`,...(L=(k=c.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var V,z,W;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [selected, setSelected] = React.useState('weekly');
  return <Box padding="spacing.5">
      <Text marginBottom="spacing.3">Selected: {selected}</Text>
      <SegmentedControl value={selected} onChange={({
      value: v
    }) => setSelected(v)} accessibilityLabel="Time period">
        <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
        <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
        <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
      </SegmentedControl>
    </Box>;
}`,...(W=(z=g.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var M,H,P;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.6" padding="spacing.5">
      <SegmentedControl label="Time Period" defaultValue="daily" helpText="Select how often you'd like reports">
        <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
        <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
        <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
      </SegmentedControl>

      <SegmentedControl label="Frequency" defaultValue="daily" validationState="error" errorText="Please select a valid frequency" necessityIndicator="required">
        <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
        <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
        <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
      </SegmentedControl>

      <SegmentedControl label="View Mode" labelPosition="left" defaultValue="list">
        <SegmentedControlItem value="list">List</SegmentedControlItem>
        <SegmentedControlItem value="grid">Grid</SegmentedControlItem>
      </SegmentedControl>
    </Box>;
}`,...(P=(H=u.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var q,O,R;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.8" padding="spacing.5">
      {/* Sizes */}
      <Box>
        <Heading size="medium" marginBottom="spacing.4">
          Sizes
        </Heading>
        <Box display="flex" flexDirection="column" gap="spacing.4">
          <Box>
            <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.2">
              Small
            </Text>
            <SegmentedControl size="small" defaultValue="daily" accessibilityLabel="Time period">
              <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
              <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
              <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
            </SegmentedControl>
          </Box>
          <Box>
            <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.2">
              Medium
            </Text>
            <SegmentedControl size="medium" defaultValue="daily" accessibilityLabel="Time period">
              <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
              <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
              <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
            </SegmentedControl>
          </Box>
          <Box>
            <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.2">
              Large
            </Text>
            <SegmentedControl size="large" defaultValue="daily" accessibilityLabel="Time period">
              <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
              <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
              <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
            </SegmentedControl>
          </Box>
        </Box>
      </Box>

      {/* With Icons */}
      <Box>
        <Heading size="medium" marginBottom="spacing.4">
          With Icons
        </Heading>
        <Box display="flex" flexDirection="column" gap="spacing.4">
          <Box>
            <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.2">
              Icon + Label
            </Text>
            <SegmentedControl defaultValue="day" accessibilityLabel="Time view">
              <SegmentedControlItem value="day" leading={CalendarIcon}>
                Day
              </SegmentedControlItem>
              <SegmentedControlItem value="hour" leading={ClockIcon}>
                Hour
              </SegmentedControlItem>
              <SegmentedControlItem value="trend" leading={TrendingUpIcon}>
                Trend
              </SegmentedControlItem>
            </SegmentedControl>
          </Box>
          <Box>
            <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.2">
              Icon Only
            </Text>
            <SegmentedControl defaultValue="list" accessibilityLabel="View mode">
              <SegmentedControlItem value="list" leading={ListIcon} accessibilityLabel="List view" />
              <SegmentedControlItem value="grid" leading={LayoutIcon} accessibilityLabel="Grid view" />
            </SegmentedControl>
          </Box>
        </Box>
      </Box>

      {/* Disabled States */}
      <Box>
        <Heading size="medium" marginBottom="spacing.4">
          Disabled
        </Heading>
        <Box display="flex" flexDirection="column" gap="spacing.4">
          <Box>
            <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.2">
              Group Disabled
            </Text>
            <SegmentedControl isDisabled defaultValue="daily" accessibilityLabel="Time period">
              <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
              <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
              <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
            </SegmentedControl>
          </Box>
          <Box>
            <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.2">
              Single Item Disabled
            </Text>
            <SegmentedControl defaultValue="daily" accessibilityLabel="Time period">
              <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
              <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
              <SegmentedControlItem value="monthly" isDisabled>
                Monthly
              </SegmentedControlItem>
            </SegmentedControl>
          </Box>
        </Box>
      </Box>

      {/* With Label & Help Text */}
      <Box>
        <Heading size="medium" marginBottom="spacing.4">
          Label & Help Text
        </Heading>
        <Box display="flex" flexDirection="column" gap="spacing.4">
          <SegmentedControl label="Report Frequency" helpText="Choose how often to receive reports" defaultValue="weekly">
            <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
            <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
            <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
          </SegmentedControl>
        </Box>
      </Box>

      {/* Validation State */}
      <Box>
        <Heading size="medium" marginBottom="spacing.4">
          Validation
        </Heading>
        <Box display="flex" flexDirection="column" gap="spacing.4">
          <SegmentedControl label="Priority" defaultValue="low" validationState="error" errorText="High priority items require approval" necessityIndicator="required">
            <SegmentedControlItem value="low">Low</SegmentedControlItem>
            <SegmentedControlItem value="medium">Medium</SegmentedControlItem>
            <SegmentedControlItem value="high">High</SegmentedControlItem>
          </SegmentedControl>
        </Box>
      </Box>

      {/* Label Position */}
      <Box>
        <Heading size="medium" marginBottom="spacing.4">
          Label Position
        </Heading>
        <Box display="flex" flexDirection="column" gap="spacing.4">
          <Box>
            <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.2">
              Top (default)
            </Text>
            <SegmentedControl label="Period" defaultValue="daily">
              <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
              <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
            </SegmentedControl>
          </Box>
          <Box>
            <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.2">
              Left
            </Text>
            <SegmentedControl label="Period" labelPosition="left" defaultValue="daily">
              <SegmentedControlItem value="daily">Daily</SegmentedControlItem>
              <SegmentedControlItem value="weekly">Weekly</SegmentedControlItem>
            </SegmentedControl>
          </Box>
        </Box>
      </Box>

      {/* Necessity Indicator */}
      <Box>
        <Heading size="medium" marginBottom="spacing.4">
          Necessity Indicator
        </Heading>
        <Box display="flex" flexDirection="column" gap="spacing.4">
          <SegmentedControl label="Required Field" necessityIndicator="required" defaultValue="a">
            <SegmentedControlItem value="a">Option A</SegmentedControlItem>
            <SegmentedControlItem value="b">Option B</SegmentedControlItem>
          </SegmentedControl>
          <SegmentedControl label="Optional Field" necessityIndicator="optional" defaultValue="a">
            <SegmentedControlItem value="a">Option A</SegmentedControlItem>
            <SegmentedControlItem value="b">Option B</SegmentedControlItem>
          </SegmentedControl>
        </Box>
      </Box>
    </Box>;
}`,...(R=(O=y.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const re=["Default","Sizes","WithIcons","InContainer","Disabled","Controlled","WithLabel","Showcase"];export{g as Controlled,r as Default,c as Disabled,m as InContainer,y as Showcase,d as Sizes,s as WithIcons,u as WithLabel,re as __namedExportsOrder,ae as default};
