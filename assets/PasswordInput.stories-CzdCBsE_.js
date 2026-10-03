import{jC as s,r as xe,j as e,B as t,T as o,l as pe,y as ue,z as me,ak as ge,X as be,ad as he,x as fe,n as we}from"./iframe-C1qQ09LF.js";import{S as Pe}from"./Sandbox.web-B2xP21Qp.js";import{S as Se}from"./StoryPageWrapper-CS0_5maI.js";import{g as ye}from"./storybookArgTypes-DFfQV31s.js";const Be=()=>e.jsxs(Se,{componentName:"PasswordInput",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Input/PasswordInput/_decisions/decisions.md",componentDescription:"PasswordInput is an input field for entering passwords. The input is masked by default. On mobile devices the last typed letter is shown for a brief moment. The masking can be toggled using an optional reveal button.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=76077-85891&t=09RYuDrnHwIebYMZ-1&scaling=min-zoom&page-id=10953%3A110156&mode=design",children:[e.jsx(be,{children:"Usage"}),e.jsx(Pe,{children:`
          import { PasswordInput } from '@greenloom/ui/components';

          function App() {
            return (
              <PasswordInput 
                label="Enter Password" 
                onChange={(e) => console.log(e)} 
              />
            )
          }

          export default App;
        `})]}),a={BASE_PROPS:"Password Input Props",LABEL_PROPS:"Label Props",VALIDATION_PROPS:"Validation Props"},Ie={title:"Components/Input/PasswordInput",component:s,args:{name:"password",label:"Enter password",helpText:"We recommend having at least 8 characters in your password",showHelpTextOnFocus:!1,placeholder:"Enter a strong password"},tags:["autodocs"],argTypes:{accessibilityLabel:{table:{category:a.BASE_PROPS}},testID:{table:{category:a.BASE_PROPS}},autoFocus:{table:{category:a.BASE_PROPS}},label:{table:{category:a.LABEL_PROPS}},labelPosition:{table:{category:a.LABEL_PROPS}},labelSuffix:{table:{category:a.LABEL_PROPS}},labelTrailing:{table:{category:a.LABEL_PROPS}},name:{table:{category:a.BASE_PROPS}},placeholder:{table:{category:a.BASE_PROPS}},size:{table:{category:a.BASE_PROPS}},maxCharacters:{table:{category:a.BASE_PROPS}},isDisabled:{table:{category:a.BASE_PROPS}},isRequired:{table:{category:a.BASE_PROPS}},necessityIndicator:{table:{category:a.BASE_PROPS}},defaultValue:{table:{category:a.BASE_PROPS}},showRevealButton:{table:{category:a.BASE_PROPS}},validationState:{table:{category:a.VALIDATION_PROPS}},helpText:{table:{category:a.VALIDATION_PROPS}},showHelpTextOnFocus:{table:{category:a.VALIDATION_PROPS}},successText:{table:{category:a.VALIDATION_PROPS}},errorText:{table:{category:a.VALIDATION_PROPS}},value:{table:{category:a.BASE_PROPS}},keyboardReturnKeyType:{table:{category:a.BASE_PROPS}},autoCompleteSuggestionType:{table:{category:a.BASE_PROPS}},onChange:{control:{disable:!0},table:{category:a.BASE_PROPS}},onSubmit:{control:{disable:!0},table:{category:a.BASE_PROPS}},onFocus:{control:{disable:!0},table:{category:a.BASE_PROPS}},onBlur:{control:{disable:!0},table:{category:a.BASE_PROPS}},...ye()},parameters:{docs:{page:Be}}},n=({...r})=>e.jsx(s,{...r}),w=n.bind({}),i=n.bind({});i.args={autoCompleteSuggestionType:"newPassword"};i.parameters={docs:{description:{story:"`autoCompleteSuggestionType` can be used to tell the platform if the input field is being used for inputting new password or current password. This provides hints to browser autofill and password managers. **Note:** there is a [known issue](https://github.com/facebook/react-native/issues/21911) for iOS."}}};const l=n.bind({});l.args={maxCharacters:16};l.parameters={docs:{description:{story:"`maxCharacters` can be used to restrict the maximum permissible characters and show a character counter"}}};const c=n.bind({});c.args={validationState:"error",errorText:"Error"};c.parameters={docs:{description:{story:"`validationState` can be used to set an `error` state and an approriate hint can be passed with `errorText`"}}};const d=n.bind({});d.args={validationState:"success",successText:"Success"};d.parameters={docs:{description:{story:"`validationState` can be used to set a `success` state and an approriate hint can be passed with `successText`"}}};const p=n.bind({});p.args={labelPosition:"left"};p.parameters={docs:{description:{story:"`labelPosition` can be used to adjust the positioning of input label"}}};const h=n.bind({});h.args={label:void 0,accessibilityLabel:"Password"};const u=n.bind({});u.args={isDisabled:!0,defaultValue:"My_Strong#Password!"};u.parameters={docs:{description:{story:"`isDisabled` can be used to make the password input field read only (disabled for user input), `defaultValue` can be used to pass an initial value"}}};const m=n.bind({});m.args={isRequired:!0,necessityIndicator:"required"};m.parameters={docs:{description:{story:"`isRequired` can be used to make the password input field required for form submission, `necessityIndicator` can be used to show a visual cue by passing `required` as value"}}};const Te=({...r})=>e.jsxs(t,{display:"flex",flexDirection:"column",children:[e.jsx(o,{size:"large",marginBottom:"spacing.2",children:"Medium Size:"}),e.jsx(s,{...r,size:"medium"}),e.jsx(o,{size:"large",marginTop:"spacing.4",marginBottom:"spacing.2",children:"Large Size:"}),e.jsx(s,{...r,size:"large"})]}),P=Te.bind({}),f=()=>{const[r,S]=xe.useState("");return e.jsx(s,{label:"Controlled PasswordInput",helpText:"See the console for output",value:r,onChange:({value:y})=>{console.log("Controlled Input Value:",y),S(y)}})};f.parameters={docs:{description:{story:"`value` and `onChange` can be used to make the input field controlled"}}};const g=()=>{const r=he.useRef(null);return e.jsxs(fe,{gap:"spacing.3",display:"flex",alignItems:"end",children:[e.jsx(s,{ref:r,label:"Message"}),e.jsx(we,{onClick:()=>{var S;(S=r==null?void 0:r.current)==null||S.focus(),console.log(r)},children:"Click to focus the input"})]})};g.storyName="Password Input Ref";g.parameters={docs:{description:{story:"PasswordInput component exposes the `ref` prop. The `ref` exposes two methods `focus` & `scrollIntoView` which can be used to programatically control the DOM element"}}};const x=n.bind({});x.storyName="PasswordInput with Label Suffix & Trailing";x.args={label:"Enter password",placeholder:"Enter password",labelSuffix:e.jsx(ue,{content:"Enter your password",placement:"right",children:e.jsx(me,{display:"flex",children:e.jsx(ge,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(pe,{size:"small",children:"Learn more"})};const b=()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.8",children:[e.jsxs(t,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Basic Variants"}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(s,{label:"Default",placeholder:"Enter password",name:"default"}),e.jsx(s,{label:"With Value",defaultValue:"My_Strong#Password123",name:"withValue"}),e.jsx(s,{label:"With Help Text",placeholder:"Enter password",helpText:"We recommend having at least 8 characters in your password",name:"withHelpText"}),e.jsx(s,{label:"Disabled",placeholder:"Enter password",isDisabled:!0,name:"disabled"})]})]}),e.jsxs(t,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Validation States"}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(s,{label:"Error State",defaultValue:"WeakPassword",validationState:"error",errorText:"Password must be at least 8 characters long",name:"error"}),e.jsx(s,{label:"Success State",defaultValue:"StrongPassword123!",validationState:"success",successText:"Password meets all requirements",name:"success"})]})]}),e.jsxs(t,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Sizes"}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(s,{label:"Medium Size",placeholder:"Medium size password input",size:"medium",name:"sizeMedium"}),e.jsx(s,{label:"Large Size",placeholder:"Large size password input",size:"large",name:"sizeLarge"})]})]}),e.jsxs(t,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Label Positions"}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(s,{label:"Label Top",placeholder:"Label on top",labelPosition:"top",name:"labelTop"}),e.jsx(s,{label:"Label Left",placeholder:"Label on left",labelPosition:"left",name:"labelLeft"})]})]}),e.jsxs(t,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Necessity Indicators"}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(s,{label:"Required Field",placeholder:"Enter password",necessityIndicator:"required",name:"required"}),e.jsx(s,{label:"Optional Field",placeholder:"Enter password",necessityIndicator:"optional",name:"optional"})]})]}),e.jsxs(t,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Reveal Button"}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(s,{label:"With Reveal Button",placeholder:"Enter password",showRevealButton:!0,defaultValue:"MyPassword123",name:"withRevealButton"}),e.jsx(s,{label:"Without Reveal Button",placeholder:"Enter password",showRevealButton:!1,defaultValue:"MyPassword123",name:"withoutRevealButton"})]})]}),e.jsxs(t,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Max Characters"}),e.jsx(s,{label:"Max Characters",placeholder:"Max 20 characters",maxCharacters:20,name:"maxCharacters"})]}),e.jsxs(t,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"surface.text.gray.subtle",children:"With Label Suffix & Trailing"}),e.jsx(s,{label:"Password",placeholder:"Enter password",labelSuffix:e.jsx(ue,{content:"Your password should be strong and secure",placement:"right",children:e.jsx(me,{display:"flex",children:e.jsx(ge,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(pe,{size:"small",children:"Learn more"}),name:"labelSuffixTrailing"})]})]});b.storyName="Showcase - All Variants";b.parameters={docs:{description:{story:"A comprehensive showcase of all PasswordInput variants including basic states, validation states, sizes, label positions, reveal button, max characters, and more."}}};var B,I,T;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`({
  ...args
}) => {
  return <PasswordInput {...args} />;
}`,...(T=(I=w.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var R,j,L;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`({
  ...args
}) => {
  return <PasswordInput {...args} />;
}`,...(L=(j=i.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var z,E,v;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`({
  ...args
}) => {
  return <PasswordInput {...args} />;
}`,...(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var A,O,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`({
  ...args
}) => {
  return <PasswordInput {...args} />;
}`,...(D=(O=c.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var _,C,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`({
  ...args
}) => {
  return <PasswordInput {...args} />;
}`,...(k=(C=d.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var V,M,W;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`({
  ...args
}) => {
  return <PasswordInput {...args} />;
}`,...(W=(M=p.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var q,N,F;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`({
  ...args
}) => {
  return <PasswordInput {...args} />;
}`,...(F=(N=h.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var H,Y,U;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`({
  ...args
}) => {
  return <PasswordInput {...args} />;
}`,...(U=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var Z,K,Q;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`({
  ...args
}) => {
  return <PasswordInput {...args} />;
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,G,J;P.parameters={...P.parameters,docs:{...(X=P.parameters)==null?void 0:X.docs,source:{originalSource:`({
  ...args
}) => {
  return <Box display="flex" flexDirection="column">
      <Text size="large" marginBottom="spacing.2">
        Medium Size:
      </Text>
      <PasswordInput {...args} size="medium" />
      <Text size="large" marginTop="spacing.4" marginBottom="spacing.2">
        Large Size:
      </Text>
      <PasswordInput {...args} size="large" />
    </Box>;
}`,...(J=(G=P.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var $,ee,ae;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`(): ReactElement => {
  const [state, setState] = useState<string | undefined>('');
  return <PasswordInput label="Controlled PasswordInput" helpText="See the console for output" value={state} onChange={({
    value
  }) => {
    console.log('Controlled Input Value:', value);
    setState(value);
  }} />;
}`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,te,re;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputRef = React.useRef<HTMLInputElement>(null);
  return <BaseBox gap="spacing.3" display="flex" alignItems="end">
      <PasswordInput ref={inputRef} label="Message" />
      <Button onClick={() => {
      inputRef?.current?.focus();
      console.log(inputRef);
    }}>
        Click to focus the input
      </Button>
    </BaseBox>;
}`,...(re=(te=g.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,ne,ie;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`({
  ...args
}) => {
  return <PasswordInput {...args} />;
}`,...(ie=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,ce,de;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.8">
      {/* Basic Variants */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Basic Variants
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <PasswordInput label="Default" placeholder="Enter password" name="default" />
          <PasswordInput label="With Value" defaultValue="My_Strong#Password123" name="withValue" />
          <PasswordInput label="With Help Text" placeholder="Enter password" helpText="We recommend having at least 8 characters in your password" name="withHelpText" />
          <PasswordInput label="Disabled" placeholder="Enter password" isDisabled name="disabled" />
        </Box>
      </Box>

      {/* Validation States */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Validation States
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <PasswordInput label="Error State" defaultValue="WeakPassword" validationState="error" errorText="Password must be at least 8 characters long" name="error" />
          <PasswordInput label="Success State" defaultValue="StrongPassword123!" validationState="success" successText="Password meets all requirements" name="success" />
        </Box>
      </Box>

      {/* Sizes */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Sizes
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <PasswordInput label="Medium Size" placeholder="Medium size password input" size="medium" name="sizeMedium" />
          <PasswordInput label="Large Size" placeholder="Large size password input" size="large" name="sizeLarge" />
        </Box>
      </Box>

      {/* Label Positions */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Label Positions
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <PasswordInput label="Label Top" placeholder="Label on top" labelPosition="top" name="labelTop" />
          <PasswordInput label="Label Left" placeholder="Label on left" labelPosition="left" name="labelLeft" />
        </Box>
      </Box>

      {/* Necessity Indicators */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Necessity Indicators
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <PasswordInput label="Required Field" placeholder="Enter password" necessityIndicator="required" name="required" />
          <PasswordInput label="Optional Field" placeholder="Enter password" necessityIndicator="optional" name="optional" />
        </Box>
      </Box>

      {/* With Reveal Button */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Reveal Button
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <PasswordInput label="With Reveal Button" placeholder="Enter password" showRevealButton defaultValue="MyPassword123" name="withRevealButton" />
          <PasswordInput label="Without Reveal Button" placeholder="Enter password" showRevealButton={false} defaultValue="MyPassword123" name="withoutRevealButton" />
        </Box>
      </Box>

      {/* With Max Characters */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Max Characters
        </Text>
        <PasswordInput label="Max Characters" placeholder="Max 20 characters" maxCharacters={20} name="maxCharacters" />
      </Box>

      {/* With Label Suffix & Trailing */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="surface.text.gray.subtle">
          With Label Suffix & Trailing
        </Text>
        <PasswordInput label="Password" placeholder="Enter password" labelSuffix={<Tooltip content="Your password should be strong and secure" placement="right">
              <TooltipInteractiveWrapper display="flex">
                <InfoIcon size="small" color="surface.icon.gray.muted" />
              </TooltipInteractiveWrapper>
            </Tooltip>} labelTrailing={<Link size="small">Learn more</Link>} name="labelSuffixTrailing" />
      </Box>
    </Box>;
}`,...(de=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const Re=["Default","AutoComplete","MaxCharacters","ErrorState","SuccessState","LabelAtLeft","PasswordInputWithoutLabel","Disabled","Required","PasswordInputSizes","ControlledInput","inputRef","PasswordInputWithLabelSuffixTrailing","PasswordInputShowcase"],ve=Object.freeze(Object.defineProperty({__proto__:null,AutoComplete:i,ControlledInput:f,Default:w,Disabled:u,ErrorState:c,LabelAtLeft:p,MaxCharacters:l,PasswordInputShowcase:b,PasswordInputSizes:P,PasswordInputWithLabelSuffixTrailing:x,PasswordInputWithoutLabel:h,Required:m,SuccessState:d,__namedExportsOrder:Re,default:Ie,inputRef:g},Symbol.toStringTag,{value:"Module"}));export{ve as p};
