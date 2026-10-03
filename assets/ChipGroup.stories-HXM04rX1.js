import{j as e,B as r,aM as p,aN as s,ad as B,n as j,H as xe,T as V,l as De,aO as be,aP as fe,aQ as ve,az as Pe,aR as Se,at as Te,aw as Be,aS as Ve,aq as Ge,ar as je,C as Ae}from"./iframe-C1qQ09LF.js";import{S as Re}from"./Sandbox.web-B2xP21Qp.js";import{S as Oe}from"./StoryPageWrapper-CS0_5maI.js";import{g as Me}from"./storybookArgTypes-DFfQV31s.js";import{i as w}from"./iconMap-BGYDFM5U.js";const We=()=>e.jsxs(Oe,{componentDescription:"Chips represents a collection of selectable objects which enable users to make selections, filter content, and trigger relevant actions. Chips can have either single selection or multiple (based on context).",componentName:"ChipGroup",imports:`import { Chip, ChipGroup } from '@greenloom/ui/components';
import type { ChipProps, ChipGroupProps } from '@greenloom/ui/components';`,figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=75272-53870&t=TGcKiXJiozSRKwOG-1&scaling=min-zoom&page-id=52377%3A23885&mode=design",note:e.jsxs(V,{children:["Chip is a combination of ChipGroup and Chip components. This story demonstrates only the props of ChipGroup component. For Chips component props refer to the Chip story"," ",e.jsx(De,{target:"_blank",href:"https://ui.greenloom.ai/?path=/docs/components-chip-chip",children:"here"})]}),children:[e.jsx(xe,{size:"large",children:"Usage"}),e.jsx(Re,{showConsole:!0,editorHeight:400,children:`
          import { Box, Chip, ChipGroup, Text } from '@greenloom/ui/components';

          function App() {
            return (
              <Box>
                <ChipGroup
                  label="Select Business type:"
                  accessibilityLabel="Choose one business type from the options below"
                  defaultValue="proprietorship"
                  onChange={({name, values}) => console.log({name, values})}
                >
                  <Chip value="proprietorship">Proprietorship</Chip>
                  <Chip value="public">Public</Chip>
                  <Chip value="small-business">Small Business</Chip>
                </ChipGroup>
              </Box>
            )
          }

          export default App;
        `})]}),a={CHIP:"Chip Props",CHIP_GROUP:"ChipGroup Props"},Ue={title:"Components/Chip/ChipGroup",args:{isDisabled:!1,name:void 0,accessibilityLabel:"Choose one business type from the options below",icon:void 0},tags:["autodocs"],argTypes:{label:{description:"Label for the `ChipGroup`.",control:{type:"text"},table:{category:a.CHIP_GROUP,type:{summary:"string"}}},accessibilityLabel:{description:"Accessibility label for the `ChipGroup`.",control:{type:"text"},table:{category:a.CHIP_GROUP,type:{summary:"string"}}},labelPosition:{description:"Sets the position of the label",options:["top","left"],control:{type:"select"},table:{category:a.CHIP_GROUP,type:{summary:'"top" | "left"'}}},helpText:{description:"Help text for the `ChipGroup`.",control:{type:"text"},table:{category:a.CHIP_GROUP,type:{summary:"string"}}},errorText:{description:"Error text for the `ChipGroup`.",control:{type:"text"},table:{category:a.CHIP_GROUP,type:{summary:"string"}}},validationState:{description:"Sets the validation state of the ChipGroup.",options:["error","none"],control:{type:"select"},table:{category:a.CHIP_GROUP,type:{summary:'"error" | "none"'}}},necessityIndicator:{description:"Renders a necessity indicator after ChipGroup label.",options:["required","optional","none"],control:{type:"select"},table:{category:a.CHIP_GROUP,type:{summary:'"required" | "optional" | "none"'}}},isDisabled:{description:"Disables or enables `ChipGroup`, it will propagate down to all the children `Chip` components.",control:{type:"boolean"},table:{category:a.CHIP_GROUP,type:{summary:"boolean"}}},isRequired:{description:"Sets the required state of the ChipGroup component.",control:{type:"boolean"},table:{category:a.CHIP_GROUP,type:{summary:"boolean"}}},name:{description:"Specifies the name attribute for the `ChipGroup` component. When provided, this attribute ensures that the Chip elements within the group are semantically associated, allowing them to be grouped logically for form submission.",control:{type:"text"},table:{category:a.CHIP_GROUP,type:{summary:"string"}}},onChange:{description:"The callback invoked on any state change within the `ChipGroup`.",table:{category:a.CHIP_GROUP,type:{summary:"({ name, values }: { name: string; values: string[] }) => void"}}},selectionType:{description:"Defines the selection behavior within the ChipGroup component. When set to 'single', only one Chip can be selected at a time, akin to a radio button group. When set to 'multiple', multiple Chips can be concurrently selected, simulating checkbox-like behavior within the group.",options:["single","multiple"],control:{type:"select"},table:{category:a.CHIP_GROUP,type:{summary:'"single" | "multiple"'}}},value:{description:"Value of the Chip group Acts as a controlled component by specifying the ChipGroup value Use onChange to update its value.",table:{category:a.CHIP_GROUP,type:{summary:"string"}}},defaultValue:{description:"Sets the initial value of the Chip group",table:{category:a.CHIP_GROUP,type:{summary:"string | string[]"}}},size:{description:"Specifies the size of the rendered Chips withing the ChipGroup",options:["xsmall","small","medium","large"],control:{type:"radio"},table:{category:a.CHIP_GROUP,type:{summary:'"xsmall" | "small" | "medium" | "large"'}}},color:{description:"Sets the ChipGroups's visual color, it will propagate down to all the Chips",table:{category:a.CHIP_GROUP,type:{summary:'"primary" | "positive" | "negative"'}},options:["primary","positive","negative"],control:{type:"select"}},icon:{name:"icon",description:"Displays a Blade Icon component within each Chip. Mutually exclusive with `leading`.",type:"select",options:Object.keys(w),mapping:w,table:{category:a.CHIP,type:{summary:"IconComponent"}}},leading:{description:"Custom leading element rendered before the Chip label, such as a flag, avatar, logo, or SVG asset. Mutually exclusive with `icon`.",control:!1,table:{category:a.CHIP,type:{summary:"React.ReactNode"}}},...Me()},parameters:{docs:{page:We}}},G=({children:l,...o})=>{const n=["Proprietorship","Public","Small Business"];return e.jsx(r,{children:e.jsx(p,{...o,children:n.map((t,i)=>e.jsx(s,{value:t,icon:o.icon,children:t},i))})})},c=G.bind({});c.storyName="Single Selection";c.args={selectionType:"single",label:"Select Business type:"};c.argTypes={value:{options:["Proprietorship","Public","Small Business"],control:{type:"select"}},defaultValue:{options:["Proprietorship","Public","Small Business"],control:{type:"select"}}};const we=({children:l,...o})=>{const n=["Automated Payment Links","Wallet on My App","Offer discounts, Pay Later & EMI options"];return e.jsx(r,{children:e.jsx(p,{selectionType:"multiple",...o,children:n.map(t=>e.jsx(s,{value:t,icon:o.icon,children:t},t))})})},u=we.bind({});u.storyName="Multi Selection";u.args={label:"What other capabilities are you looking for?",accessibilityLabel:"Select other capabilities you are looking for from the options below",selectionType:"multiple"};u.argTypes={defaultValue:{options:["Automated Payment Links","Wallet on My App","Offer discounts, Pay Later & EMI options"],control:{type:"multi-select"}}};const h=G.bind({});h.storyName="Uncontrolled Single Selection with Default Value";h.args={defaultValue:"Proprietorship",selectionType:"single",label:"Select Business type:"};h.argTypes={defaultValue:{options:["Proprietorship","Public","Small Business"],control:{type:"select"}}};const m=we.bind({});m.storyName="Uncontrolled Multiple Selection with Default Value";m.args={defaultValue:["Automated Payment Links"],label:"What other capabilities are you looking for?",accessibilityLabel:"Select other capabilities you are looking for from the options below",selectionType:"multiple"};m.argTypes={defaultValue:{options:["Automated Payment Links","Wallet on My App","Offer discounts, Pay Later & EMI options"],control:{type:"multi-select"}}};const ze=({...l})=>{const o=["Proprietorship","Public","Small Business"],[n,t]=B.useState("Proprietorship");return e.jsxs(r,{display:"flex",gap:"spacing.5",flexDirection:"column",minHeight:"200px",children:[e.jsxs(Te,{marginRight:"spacing.4",children:[e.jsx(Be,{size:"small",children:"Business Type"}),e.jsx(Ve,{children:e.jsx(Ge,{children:o.map(i=>e.jsx(je,{title:i,value:i,onClick:({name:T})=>t(T),isSelected:n===i},i))})})]}),e.jsx(p,{...l,selectionType:"single",value:n,onChange:({values:i})=>t(i[0]),children:o.map(i=>e.jsx(s,{value:i,children:i},i))})]})},b=ze.bind({});b.storyName="Controlled Single Selection";b.args={accessibilityLabel:"Choose one business type from the options below",selectionType:"single"};const He=l=>{const o=["Automated Payment Links","Wallet on My App","Offer discounts, Pay Later & EMI options"],[n,t]=B.useState(["Automated Payment Links"]);return e.jsxs(r,{display:"flex",gap:"spacing.5",flexDirection:"column",minHeight:"200px",children:[e.jsxs(Te,{marginRight:"spacing.4",selectionType:"multiple",children:[e.jsx(Be,{size:"small",children:"What other capabilities are you looking for?"}),e.jsx(Ve,{children:e.jsx(Ge,{children:o.map(i=>e.jsx(je,{title:i,value:i,onClick:({name:T,value:Ie})=>t(Ie?n.filter(Le=>Le!==T):n.concat([T])),isSelected:n.includes(i)},i))})})]}),e.jsx(p,{...l,selectionType:"multiple",onChange:({values:i})=>t(i),value:n,children:o.map(i=>e.jsx(s,{value:i,icon:l.icon,children:i},i))})]})},f=He.bind({});f.storyName="Controlled Multiple Selection";f.args={accessibilityLabel:"Select other capabilities you are looking for from the options below",selectionType:"multiple"};const v=G.bind({});v.storyName="Disabled";v.args={isDisabled:!0,selectionType:"single",label:"Select Business type:"};const _e=({children:l,...o})=>e.jsx(r,{children:e.jsxs(p,{defaultValue:"payment-links",...o,children:[e.jsx(s,{value:"payment-links",icon:be,children:"Automated Payment Links"}),e.jsx(s,{value:"wallet",icon:fe,children:"Wallet on My App"}),e.jsx(s,{value:"offers",icon:ve,children:"Offer discounts, Pay Later & EMI options"})]})}),d=_e.bind({});d.storyName="With Icon";d.args={selectionType:"single",label:"What other capabilities are you looking for?",accessibilityLabel:"Choose one business type from the options below"};d.parameters={controls:{exclude:["icon","leading"]}};const Ne=l=>e.jsxs(r,{display:"flex",flexDirection:"column",children:[e.jsx(V,{size:"large",weight:"semibold",marginBottom:"spacing.3",children:"Is the result helpful?"}),e.jsxs(p,{defaultValue:"yes",...l,children:[e.jsx(s,{color:"positive",value:"yes",icon:Pe,children:"Yes"}),e.jsx(s,{color:"negative",value:"no",icon:Se,children:"No"})]})]}),g=Ne.bind({});g.storyName="With Color";g.args={selectionType:"single",accessibilityLabel:"Is the result helpful? Please select either yer or no"};g.parameters={controls:{exclude:["icon","leading"]}};const Ee=l=>e.jsxs(r,{display:"flex",flexDirection:"column",children:[e.jsx(V,{size:"large",weight:"semibold",marginBottom:"spacing.3",children:"Is the result helpful?"}),e.jsxs(p,{defaultValue:"yes",...l,children:[e.jsx(s,{color:"positive",value:"yes",icon:Pe}),e.jsx(s,{color:"negative",value:"no",icon:Se})]})]}),y=Ee.bind({});y.storyName="Icon Only";y.args={selectionType:"single",accessibilityLabel:"Is the result helpful? Please select either yer or no"};y.parameters={controls:{exclude:["icon","leading","children"]}};const ke=({children:l,...o})=>{const n=["Proprietorship","Public","Small Business"];return e.jsxs(r,{children:[e.jsx(p,{defaultValue:"Proprietorship",label:"Select Business Type:",...o,children:n.map(t=>e.jsx(s,{value:t,icon:o.icon,children:t.toUpperCase()},t))}),e.jsxs(V,{marginTop:"spacing.3",children:["The text within the Chip can be transformed to uppercase by passing"," ",e.jsx(Ae,{size:"medium",children:" value.toUpperCase() "})," as the children."]})]})},P=ke.bind({});P.storyName="Text Transformation (Uppercase)";ke.args={selectionType:"single",accessibilityLabel:"Choose one business type from the options below"};const qe=({children:l,...o})=>{const n=["xsmall","small","medium","large"];return e.jsx(r,{children:n.map((t,i)=>e.jsxs(r,{children:[e.jsx(xe,{marginBottom:"spacing.3",size:"small",children:t}),e.jsx(r,{marginBottom:"spacing.4",children:e.jsxs(p,{defaultValue:"payment-links",label:"What other capabilities are you looking for?",size:t,...o,children:[e.jsx(s,{value:"payment-links",icon:be,children:"Automated Payment Links"}),e.jsx(s,{value:"wallet",icon:fe,children:"Wallet on My App"}),e.jsx(s,{value:"offers",icon:ve,children:"Offer discounts, Pay Later & EMI options"})]})})]},i))})},C=qe.bind({});C.storyName="All Sizes";C.args={accessibilityLabel:"Select other capabilities you are looking for from the options below",selectionType:"single"};C.parameters={controls:{exclude:["icon","leading"]}};const x=l=>{const o=B.useRef(null),[n,t]=B.useState("");return e.jsxs(r,{gap:"spacing.3",display:"flex",flexDirection:"column",children:[e.jsxs(p,{selectionType:"single",value:n,...l,children:[e.jsx(s,{ref:o,value:"Proprietorship",children:"Proprietorship"}),e.jsx(s,{value:"Public",children:"Public"}),e.jsx(s,{value:"Small Business",children:"Small Business"})]}),e.jsxs(r,{maxWidth:"400px",display:"flex",flexDirection:"row",gap:"spacing.3",children:[e.jsx(j,{isFullWidth:!0,onClick:()=>{var i;(i=o==null?void 0:o.current)==null||i.focus(),t("Proprietorship")},children:"Select Proprietorship"}),e.jsx(j,{isFullWidth:!0,variant:"secondary",onClick:()=>{var i;(i=o==null?void 0:o.current)==null||i.blur(),t("")},children:"Reset Selection"})]})]})};x.storyName="Chip Ref";x.args={accessibilityLabel:"Select one business type from the options below",selectionType:"single"};x.parameters={controls:{exclude:["icon","leading"]}};const S=()=>{const l=[{value:"100",label:"₹100"},{value:"500",label:"₹500"},{value:"1000",label:"₹1000"},{value:"2000",label:"₹2000"},{value:"5000",label:"₹5000"},{value:"10000",label:"₹10000"},{value:"20000",label:"₹20000"},{value:"50000",label:"₹50000"},{value:"100000",label:"₹100000"},{value:"200000",label:"₹200000"}];return e.jsxs(r,{gap:"spacing.3",display:"flex",flexDirection:"column",children:[e.jsx(p,{selectionType:"single",label:"Select a gift card with value (with default layout)",children:l.map((o,n)=>e.jsx(s,{value:o.value,children:o.label},n))}),e.jsx(p,{selectionType:"single",label:"Select a gift card with value (with custom layout)",children:e.jsx(r,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, minmax(0, 30px))",gap:"spacing.3",children:l.map((o,n)=>e.jsx(s,{value:o.value,width:"100%",children:o.label},n))})})]})};S.storyName="ChipGroup with Custom layout";var k,I,L;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const chipValues = ['Proprietorship', 'Public', 'Small Business'];
  return <Box>
      <ChipGroupComponent {...args}>
        {chipValues.map((chipValue: string, index) => <ChipComponent key={index} value={chipValue} icon={args.icon}>
            {chipValue}
          </ChipComponent>)}
      </ChipGroupComponent>
    </Box>;
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var D,A,R;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const chipValues = ['Automated Payment Links', 'Wallet on My App', 'Offer discounts, Pay Later & EMI options'];
  return <Box>
      <ChipGroupComponent selectionType="multiple" {...args}>
        {chipValues.map((chipValue: string) => <ChipComponent key={chipValue} value={chipValue} icon={args.icon}>
            {chipValue}
          </ChipComponent>)}
      </ChipGroupComponent>
    </Box>;
}`,...(R=(A=u.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var O,M,W;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const chipValues = ['Proprietorship', 'Public', 'Small Business'];
  return <Box>
      <ChipGroupComponent {...args}>
        {chipValues.map((chipValue: string, index) => <ChipComponent key={index} value={chipValue} icon={args.icon}>
            {chipValue}
          </ChipComponent>)}
      </ChipGroupComponent>
    </Box>;
}`,...(W=(M=h.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var U,z,H;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const chipValues = ['Automated Payment Links', 'Wallet on My App', 'Offer discounts, Pay Later & EMI options'];
  return <Box>
      <ChipGroupComponent selectionType="multiple" {...args}>
        {chipValues.map((chipValue: string) => <ChipComponent key={chipValue} value={chipValue} icon={args.icon}>
            {chipValue}
          </ChipComponent>)}
      </ChipGroupComponent>
    </Box>;
}`,...(H=(z=m.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var _,N,E;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`({
  ...args
}) => {
  const chipValues = ['Proprietorship', 'Public', 'Small Business'];
  const [value, setValue] = React.useState('Proprietorship');
  return <Box display="flex" gap="spacing.5" flexDirection="column" minHeight="200px">
      <Dropdown marginRight="spacing.4">
        <DropdownButton size="small">Business Type</DropdownButton>
        <DropdownOverlay>
          <ActionList>
            {chipValues.map((chipValue: string) => <ActionListItem key={chipValue} title={chipValue} value={chipValue} onClick={({
            name
          }) => setValue(name)} isSelected={value === chipValue} />)}
          </ActionList>
        </DropdownOverlay>
      </Dropdown>

      <ChipGroupComponent {...args} selectionType="single" value={value} onChange={({
      values
    }) => setValue(values[0])}>
        {chipValues.map((chipValue: string) => <ChipComponent key={chipValue} value={chipValue}>
            {chipValue}
          </ChipComponent>)}
      </ChipGroupComponent>
    </Box>;
}`,...(E=(N=b.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var q,F,K;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const chipValues = ['Automated Payment Links', 'Wallet on My App', 'Offer discounts, Pay Later & EMI options'];
  const [values, setValues] = React.useState(['Automated Payment Links']);
  return <Box display="flex" gap="spacing.5" flexDirection="column" minHeight="200px">
      <Dropdown marginRight="spacing.4" selectionType="multiple">
        <DropdownButton size="small">What other capabilities are you looking for?</DropdownButton>
        <DropdownOverlay>
          <ActionList>
            {chipValues.map((chipValue: string) => <ActionListItem key={chipValue} title={chipValue} value={chipValue} onClick={({
            name,
            value
          }) => value ? setValues(values.filter(v => v !== name)) : setValues(values.concat([name]))} isSelected={values.includes(chipValue)} />)}
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
      <ChipGroupComponent {...args} selectionType="multiple" onChange={({
      values
    }) => setValues(values)} value={values}>
        {chipValues.map((chipValue: string) => <ChipComponent key={chipValue} value={chipValue} icon={args.icon}>
            {chipValue}
          </ChipComponent>)}
      </ChipGroupComponent>
    </Box>;
}`,...(K=(F=f.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var Q,Y,J;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const chipValues = ['Proprietorship', 'Public', 'Small Business'];
  return <Box>
      <ChipGroupComponent {...args}>
        {chipValues.map((chipValue: string, index) => <ChipComponent key={index} value={chipValue} icon={args.icon}>
            {chipValue}
          </ChipComponent>)}
      </ChipGroupComponent>
    </Box>;
}`,...(J=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var X,Z,$;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <Box>
      <ChipGroupComponent defaultValue="payment-links" {...args}>
        <ChipComponent value="payment-links" icon={PaymentLinksIcon}>
          Automated Payment Links
        </ChipComponent>
        <ChipComponent value="wallet" icon={SmartphoneIcon}>
          Wallet on My App
        </ChipComponent>
        <ChipComponent value="offers" icon={TagIcon}>
          Offer discounts, Pay Later & EMI options
        </ChipComponent>
      </ChipGroupComponent>
    </Box>;
}`,...($=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,oe,ie;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  return <Box display="flex" flexDirection="column">
      <Text size="large" weight="semibold" marginBottom="spacing.3">
        Is the result helpful?
      </Text>

      <ChipGroupComponent defaultValue="yes" {...args}>
        <ChipComponent color="positive" value="yes" icon={ThumbsUpIcon}>
          Yes
        </ChipComponent>
        <ChipComponent color="negative" value="no" icon={ThumbsDownIcon}>
          No
        </ChipComponent>
      </ChipGroupComponent>
    </Box>;
}`,...(ie=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var te,ne,se;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  return <Box display="flex" flexDirection="column">
      <Text size="large" weight="semibold" marginBottom="spacing.3">
        Is the result helpful?
      </Text>

      <ChipGroupComponent defaultValue="yes" {...args}>
        <ChipComponent color="positive" value="yes" icon={ThumbsUpIcon} />
        <ChipComponent color="negative" value="no" icon={ThumbsDownIcon} />
      </ChipGroupComponent>
    </Box>;
}`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var le,ae,re;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const chipValues = ['Proprietorship', 'Public', 'Small Business'];
  return <Box>
      <ChipGroupComponent defaultValue="Proprietorship" label="Select Business Type:" {...args}>
        {chipValues.map((chipValue: string) => <ChipComponent key={chipValue} value={chipValue} icon={args.icon}>
            {chipValue.toUpperCase()}
          </ChipComponent>)}
      </ChipGroupComponent>
      <Text marginTop="spacing.3">
        The text within the Chip can be transformed to uppercase by passing{' '}
        <Code size="medium"> value.toUpperCase() </Code> as the children.
      </Text>
    </Box>;
}`,...(re=(ae=P.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var pe,ce,ue;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const sizes = ['xsmall', 'small', 'medium', 'large'];
  return <Box>
      {sizes.map((size, index) => <Box key={index}>
          <Heading marginBottom="spacing.3" size="small">
            {size}
          </Heading>
          <Box marginBottom="spacing.4">
            <ChipGroupComponent defaultValue="payment-links" label="What other capabilities are you looking for?" size={size as ChipGroupProps['size']} {...args}>
              <ChipComponent value="payment-links" icon={PaymentLinksIcon}>
                Automated Payment Links
              </ChipComponent>
              <ChipComponent value="wallet" icon={SmartphoneIcon}>
                Wallet on My App
              </ChipComponent>
              <ChipComponent value="offers" icon={TagIcon}>
                Offer discounts, Pay Later & EMI options
              </ChipComponent>
            </ChipGroupComponent>
          </Box>
        </Box>)}
    </Box>;
}`,...(ue=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var he,me,de;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`args => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const chipRef = React.useRef<BladeElementRef>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = React.useState('');
  return <Box gap="spacing.3" display="flex" flexDirection="column">
      <ChipGroupComponent selectionType="single" value={value} {...args}>
        <ChipComponent ref={chipRef} value="Proprietorship">
          Proprietorship
        </ChipComponent>
        <ChipComponent value="Public">Public</ChipComponent>
        <ChipComponent value="Small Business">Small Business</ChipComponent>
      </ChipGroupComponent>
      <Box maxWidth="400px" display="flex" flexDirection="row" gap="spacing.3">
        <Button isFullWidth={true} onClick={() => {
        chipRef?.current?.focus();
        setValue('Proprietorship');
      }}>
          Select Proprietorship
        </Button>
        <Button isFullWidth={true} variant="secondary" onClick={() => {
        chipRef?.current?.blur();
        setValue('');
      }}>
          Reset Selection
        </Button>
      </Box>
    </Box>;
}`,...(de=(me=x.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ge,ye,Ce;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const chipArray = [{
    value: '100',
    label: '₹100'
  }, {
    value: '500',
    label: '₹500'
  }, {
    value: '1000',
    label: '₹1000'
  }, {
    value: '2000',
    label: '₹2000'
  }, {
    value: '5000',
    label: '₹5000'
  }, {
    value: '10000',
    label: '₹10000'
  }, {
    value: '20000',
    label: '₹20000'
  }, {
    value: '50000',
    label: '₹50000'
  }, {
    value: '100000',
    label: '₹100000'
  }, {
    value: '200000',
    label: '₹200000'
  }];
  return <Box gap="spacing.3" display="flex" flexDirection="column">
      <ChipGroupComponent selectionType="single" label="Select a gift card with value (with default layout)">
        {chipArray.map((chip, index) => <ChipComponent key={index} value={chip.value}>
            {chip.label}
          </ChipComponent>)}
      </ChipGroupComponent>
      <ChipGroupComponent selectionType="single" label="Select a gift card with value (with custom layout)">
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gridTemplateRows="repeat(3, minmax(0, 30px))" gap="spacing.3">
          {chipArray.map((chip, index) => <ChipComponent key={index} value={chip.value} width="100%">
              {chip.label}
            </ChipComponent>)}
        </Box>
      </ChipGroupComponent>
    </Box>;
}`,...(Ce=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source}}};const Fe=["SingleSelection","MultiSelection","DefaultSelectedSingle","DefaultMultiSelected","ControlledSingleSelection","ControlledMultiSelection","Disabled","ChipWithIcon","ChipWithColor","ChipIconOnly","TextTransformationUppercase","AllChipSizes","chipRef","CutomLayoutInChipGroup"],Ze=Object.freeze(Object.defineProperty({__proto__:null,AllChipSizes:C,ChipIconOnly:y,ChipWithColor:g,ChipWithIcon:d,ControlledMultiSelection:f,ControlledSingleSelection:b,CutomLayoutInChipGroup:S,DefaultMultiSelected:m,DefaultSelectedSingle:h,Disabled:v,MultiSelection:u,SingleSelection:c,TextTransformationUppercase:P,__namedExportsOrder:Fe,chipRef:x,default:Ue},Symbol.toStringTag,{value:"Module"}));export{Ze as c};
