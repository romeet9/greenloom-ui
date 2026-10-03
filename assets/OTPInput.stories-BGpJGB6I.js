import{aC as a,ad as S,j as e,B as n,at as ge,au as he,aS as Te,aq as Pe,ar as B,n as be,T as i,l as pe,y as xe,z as me,ak as de,X as fe}from"./iframe-C1qQ09LF.js";import{S as Oe}from"./Sandbox.web-B2xP21Qp.js";import{S as Be}from"./StoryPageWrapper-CS0_5maI.js";import{g as Ie}from"./storybookArgTypes-DFfQV31s.js";const t={BASE_PROPS:"OTPInput Props",LABEL_PROPS:"Label Props",VALIDATION_PROPS:"Validation Props",KEYBOARD_PROPS:"Keyboard Props"},Se={title:"Components/Input/OTPInput",component:a,args:{placeholder:"",name:"otp",isDisabled:!1,value:void 0,autoFocus:!1,onChange:({name:o,value:s})=>{console.log(`input field ${o} content changed to ${s}`)},onBlur:({name:o,value:s,inputIndex:r})=>{console.log(`input field ${o} blurred with value ${s} for inputIdex ${r}`)},onFocus:({name:o,value:s,inputIndex:r})=>{console.log(`input field ${o} focused with value ${s} for inputIdex ${r}`)},onOTPFilled:({name:o,value:s})=>{console.log(`otp field ${o} filled with ${s}`)},label:"Enter OTP",labelPosition:"top",validationState:"none",otpLength:6,helpText:void 0,errorText:void 0,successText:void 0},tags:["autodocs"],argTypes:{placeholder:{table:{category:t.BASE_PROPS}},otpLength:{table:{category:t.BASE_PROPS}},name:{table:{category:t.BASE_PROPS}},isDisabled:{table:{category:t.BASE_PROPS}},value:{table:{category:t.BASE_PROPS}},autoFocus:{table:{category:t.BASE_PROPS}},onChange:{table:{category:t.BASE_PROPS}},onBlur:{table:{category:t.BASE_PROPS}},onFocus:{table:{category:t.BASE_PROPS}},onOTPFilled:{table:{category:t.BASE_PROPS}},label:{table:{category:t.LABEL_PROPS}},labelSuffix:{table:{category:t.LABEL_PROPS}},labelTrailing:{table:{category:t.LABEL_PROPS}},size:{table:{category:t.LABEL_PROPS}},testID:{table:{category:t.LABEL_PROPS}},accessibilityLabel:{table:{category:t.LABEL_PROPS}},labelPosition:{table:{category:t.LABEL_PROPS}},keyboardReturnKeyType:{table:{category:t.KEYBOARD_PROPS}},keyboardType:{table:{category:t.KEYBOARD_PROPS}},autoCompleteSuggestionType:{table:{category:t.KEYBOARD_PROPS}},isMasked:{table:{category:t.KEYBOARD_PROPS}},validationState:{table:{category:t.VALIDATION_PROPS}},helpText:{table:{category:t.VALIDATION_PROPS}},errorText:{table:{category:t.VALIDATION_PROPS}},successText:{table:{category:t.VALIDATION_PROPS}},...Ie()},parameters:{docs:{page:()=>e.jsxs(Be,{componentName:"OTPInput",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Input/OTPInput/_decisions/_decisions.md",componentDescription:"A one-time password (OTP), also known as a one-time PIN, one-time authorization code (OTAC) or dynamic password, is a password that is valid for only one login session or a transaction. These are a group of inputs and can be either 4 or 6 characters long.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=76077-81363&t=kxYCFAmMWz6sMy04-1&scaling=min-zoom&page-id=10953%3A180623&mode=design",children:[e.jsx(fe,{children:"Usage"}),e.jsx(Oe,{showConsole:!0,children:`
              import { OTPInput } from '@greenloom/ui/components';

              function App() {
                return (
                  // Fill OTP and check console
                  <OTPInput 
                    label="Enter OTP" 
                    onOTPFilled={(e) => console.log(e)} 
                  />
                )
              }

              export default App;
            `})]})}}},c=({...o})=>{const s=o.otpLength===4?"376px":"568px";return e.jsx(n,{maxWidth:s,children:e.jsx(a,{...o})})},l=c.bind({});l.storyName="OTPInput";const p=c.bind({});p.storyName="OTPInput with 4 Fields";p.args={otpLength:4};const x=c.bind({});x.storyName="OTPInput with Help Text";x.args={helpText:"Add a message here"};const m=c.bind({});m.storyName="OTPInput without Label";m.args={label:void 0,accessibilityLabel:"Enter OTP",helpText:"Add a message here"};const d=c.bind({});d.storyName="OTPInput with Masked input";d.args={isMasked:!0,otpLength:4,label:"Enter Pin"};const u=c.bind({});u.storyName="OTPInput with error";u.args={validationState:"error",errorText:"Invalid message"};const g=c.bind({});g.storyName="OTPInput with success";g.args={validationState:"success",successText:"Validated"};const ye=({...o})=>{const s=o.otpLength===4?"376px":"568px";return e.jsxs(n,{display:"flex",flexDirection:"column",maxWidth:s,children:[e.jsx(i,{size:"large",marginBottom:"spacing.2",children:"Medium Size:"}),e.jsx(a,{...o,size:"medium"}),e.jsx(i,{size:"large",marginTop:"spacing.4",marginBottom:"spacing.2",children:"Large Size:"}),e.jsx(a,{...o,size:"large"})]})},b=ye.bind({});b.args={helpText:"Help Text"};const Le=()=>e.jsx(l,{label:"Enter OTP",name:"otp",onChange:({name:o,value:s})=>console.log({name:o,value:s})}),f=Le.bind({}),je=()=>e.jsx(l,{label:"Enter OTP",value:"123456",name:"otp"}),O=je.bind({}),h=()=>{const[o,s]=S.useState(0),r=S.useRef([]);return e.jsxs(n,{gap:"spacing.3",display:"flex",flexDirection:"column",children:[e.jsxs(n,{maxWidth:"200px",display:"flex",flexDirection:"row",alignItems:"flex-end",gap:"spacing.3",children:[e.jsxs(ge,{selectionType:"single",children:[e.jsx(he,{label:"Item to focus",placeholder:"Select Item To Focus",name:"action",value:`${o}`,onChange:({values:I})=>{s(Number(I[0]))}}),e.jsx(Te,{children:e.jsxs(Pe,{children:[e.jsx(B,{title:"0",value:"0"}),e.jsx(B,{title:"1",value:"1"}),e.jsx(B,{title:"2",value:"2"}),e.jsx(B,{title:"3",value:"3"})]})})]}),e.jsx(n,{children:e.jsx(be,{onClick:()=>{console.log(r),r==null||r.current[o].focus()},children:"Focus"})})]}),e.jsx(n,{maxWidth:"376px",children:e.jsx(a,{ref:r,label:"Enter OTP",name:"otp",otpLength:4,onChange:({name:I,value:ue})=>console.log({name:I,value:ue})})})]})};h.storyName="OTP Input Ref";h.parameters={docs:{description:{story:"The OTP component offers a `ref` prop for programmatically focusing on its input fields. This prop exposes an array of individual refs for each input, allowing you to focus on a particular field using `inputRef.current[index].focus()`."}}};const T=c.bind({});T.storyName="OTPInput with Label Suffix & Trailing";T.args={label:"Enter OTP",placeholder:"Enter OTP",labelSuffix:e.jsx(xe,{content:"Enter your OTP",placement:"right",children:e.jsx(me,{display:"flex",children:e.jsx(de,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(pe,{size:"small",children:"Learn more"})};const P=()=>e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.8",children:[e.jsxs(n,{children:[e.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Basic Variants"}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(n,{maxWidth:"568px",children:e.jsx(a,{label:"Default",name:"default"})}),e.jsx(n,{maxWidth:"568px",children:e.jsx(a,{label:"With Value",value:"123456",name:"withValue"})}),e.jsx(n,{maxWidth:"568px",children:e.jsx(a,{label:"With Help Text",helpText:"This is a helpful message",name:"withHelpText"})}),e.jsx(n,{maxWidth:"568px",children:e.jsx(a,{label:"Disabled",isDisabled:!0,name:"disabled"})})]})]}),e.jsxs(n,{children:[e.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Validation States"}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(n,{maxWidth:"568px",children:e.jsx(a,{label:"Error State",value:"123456",validationState:"error",errorText:"Invalid OTP. Please try again",name:"error"})}),e.jsx(n,{maxWidth:"568px",children:e.jsx(a,{label:"Success State",value:"123456",validationState:"success",successText:"OTP verified successfully",name:"success"})})]})]}),e.jsxs(n,{children:[e.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Sizes"}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(n,{maxWidth:"568px",children:e.jsx(a,{label:"Medium Size",size:"medium",name:"sizeMedium"})}),e.jsx(n,{maxWidth:"568px",children:e.jsx(a,{label:"Large Size",size:"large",name:"sizeLarge"})})]})]}),e.jsxs(n,{children:[e.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Label Positions"}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(n,{maxWidth:"568px",children:e.jsx(a,{label:"Label Top",labelPosition:"top",name:"labelTop"})}),e.jsx(n,{maxWidth:"568px",children:e.jsx(a,{label:"Label Left",labelPosition:"left",name:"labelLeft"})})]})]}),e.jsxs(n,{children:[e.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"OTP Length"}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(n,{maxWidth:"376px",children:e.jsx(a,{label:"4 Digit OTP",otpLength:4,name:"otpLength4"})}),e.jsx(n,{maxWidth:"568px",children:e.jsx(a,{label:"6 Digit OTP",otpLength:6,name:"otpLength6"})})]})]}),e.jsxs(n,{children:[e.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Masked Input"}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(n,{maxWidth:"376px",children:e.jsx(a,{label:"Masked 4 Digit PIN",otpLength:4,isMasked:!0,name:"masked4"})}),e.jsx(n,{maxWidth:"568px",children:e.jsx(a,{label:"Masked 6 Digit OTP",otpLength:6,isMasked:!0,name:"masked6"})})]})]}),e.jsxs(n,{children:[e.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Auto Focus"}),e.jsx(n,{maxWidth:"568px",children:e.jsx(a,{label:"Auto Focus Enabled",autoFocus:!0,name:"autoFocus"})})]}),e.jsxs(n,{children:[e.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"surface.text.gray.subtle",children:"With Label Suffix & Trailing"}),e.jsx(n,{maxWidth:"568px",children:e.jsx(a,{label:"Enter OTP",name:"labelSuffixTrailing",labelSuffix:e.jsx(xe,{content:"Your OTP is sent to your registered mobile number",placement:"right",children:e.jsx(me,{display:"flex",children:e.jsx(de,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(pe,{size:"small",children:"Learn more"})})})]})]});P.storyName="Showcase - All Variants";P.parameters={docs:{description:{story:"A comprehensive showcase of all OTPInput variants including basic states, validation states, sizes, label positions, OTP lengths, masked input, auto focus, and more."}}};var y,L,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`({
  ...args
}) => {
  const maxWidth = args.otpLength === 4 ? '376px' : '568px';
  return <Box maxWidth={maxWidth}>
      <OTPInputComponent {...args} />
    </Box>;
}`,...(j=(L=l.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var W,v,z;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`({
  ...args
}) => {
  const maxWidth = args.otpLength === 4 ? '376px' : '568px';
  return <Box maxWidth={maxWidth}>
      <OTPInputComponent {...args} />
    </Box>;
}`,...(z=(v=p.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var A,D,w;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`({
  ...args
}) => {
  const maxWidth = args.otpLength === 4 ? '376px' : '568px';
  return <Box maxWidth={maxWidth}>
      <OTPInputComponent {...args} />
    </Box>;
}`,...(w=(D=x.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var k,R,E;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`({
  ...args
}) => {
  const maxWidth = args.otpLength === 4 ? '376px' : '568px';
  return <Box maxWidth={maxWidth}>
      <OTPInputComponent {...args} />
    </Box>;
}`,...(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var C,_,F;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`({
  ...args
}) => {
  const maxWidth = args.otpLength === 4 ? '376px' : '568px';
  return <Box maxWidth={maxWidth}>
      <OTPInputComponent {...args} />
    </Box>;
}`,...(F=(_=d.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var M,N,V;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`({
  ...args
}) => {
  const maxWidth = args.otpLength === 4 ? '376px' : '568px';
  return <Box maxWidth={maxWidth}>
      <OTPInputComponent {...args} />
    </Box>;
}`,...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var $,H,Y;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`({
  ...args
}) => {
  const maxWidth = args.otpLength === 4 ? '376px' : '568px';
  return <Box maxWidth={maxWidth}>
      <OTPInputComponent {...args} />
    </Box>;
}`,...(Y=(H=g.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var K,U,q;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`({
  ...args
}) => {
  const maxWidth = args.otpLength === 4 ? '376px' : '568px';
  return <Box display="flex" flexDirection="column" maxWidth={maxWidth}>
      <Text size="large" marginBottom="spacing.2">
        Medium Size:
      </Text>
      <OTPInputComponent {...args} size="medium" />
      <Text size="large" marginTop="spacing.4" marginBottom="spacing.2">
        Large Size:
      </Text>
      <OTPInputComponent {...args} size="large" />
    </Box>;
}`,...(q=(U=b.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var Q,X,Z;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <OTPInput label="Enter OTP" name="otp" onChange={({
    name,
    value
  }): void => console.log({
    name,
    value
  })} />;
}`,...(Z=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var G,J,ee;O.parameters={...O.parameters,docs:{...(G=O.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <OTPInput label="Enter OTP" value="123456" name="otp" />;
}`,...(ee=(J=O.parameters)==null?void 0:J.docs)==null?void 0:ee.source}}};var ne,te,ae;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [focusOn, setFocusOn] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement[]>([]);
  return <Box gap="spacing.3" display="flex" flexDirection="column">
      <Box maxWidth="200px" display="flex" flexDirection="row" alignItems="flex-end" gap="spacing.3">
        <Dropdown selectionType="single">
          <SelectInput label="Item to focus" placeholder="Select Item To Focus" name="action" value={\`\${focusOn}\`} onChange={({
          values
        }) => {
          setFocusOn(Number(values[0]));
        }} />
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="0" value="0" />
              <ActionListItem title="1" value="1" />
              <ActionListItem title="2" value="2" />
              <ActionListItem title="3" value="3" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
        <Box>
          <Button onClick={() => {
          console.log(inputRef);
          inputRef?.current[focusOn].focus();
        }}>
            Focus
          </Button>
        </Box>
      </Box>
      <Box maxWidth="376px">
        <OTPInputComponent ref={inputRef} label="Enter OTP" name="otp" otpLength={4} onChange={({
        name,
        value
      }): void => console.log({
        name,
        value
      })} />
      </Box>
    </Box>;
}`,...(ae=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,se,ie;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`({
  ...args
}) => {
  const maxWidth = args.otpLength === 4 ? '376px' : '568px';
  return <Box maxWidth={maxWidth}>
      <OTPInputComponent {...args} />
    </Box>;
}`,...(ie=(se=T.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var re,le,ce;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.8">
      {/* Basic Variants */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Basic Variants
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Box maxWidth="568px">
            <OTPInputComponent label="Default" name="default" />
          </Box>
          <Box maxWidth="568px">
            <OTPInputComponent label="With Value" value="123456" name="withValue" />
          </Box>
          <Box maxWidth="568px">
            <OTPInputComponent label="With Help Text" helpText="This is a helpful message" name="withHelpText" />
          </Box>
          <Box maxWidth="568px">
            <OTPInputComponent label="Disabled" isDisabled name="disabled" />
          </Box>
        </Box>
      </Box>

      {/* Validation States */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Validation States
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Box maxWidth="568px">
            <OTPInputComponent label="Error State" value="123456" validationState="error" errorText="Invalid OTP. Please try again" name="error" />
          </Box>
          <Box maxWidth="568px">
            <OTPInputComponent label="Success State" value="123456" validationState="success" successText="OTP verified successfully" name="success" />
          </Box>
        </Box>
      </Box>

      {/* Sizes */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Sizes
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Box maxWidth="568px">
            <OTPInputComponent label="Medium Size" size="medium" name="sizeMedium" />
          </Box>
          <Box maxWidth="568px">
            <OTPInputComponent label="Large Size" size="large" name="sizeLarge" />
          </Box>
        </Box>
      </Box>

      {/* Label Positions */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Label Positions
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Box maxWidth="568px">
            <OTPInputComponent label="Label Top" labelPosition="top" name="labelTop" />
          </Box>
          <Box maxWidth="568px">
            <OTPInputComponent label="Label Left" labelPosition="left" name="labelLeft" />
          </Box>
        </Box>
      </Box>

      {/* OTP Length */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          OTP Length
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Box maxWidth="376px">
            <OTPInputComponent label="4 Digit OTP" otpLength={4} name="otpLength4" />
          </Box>
          <Box maxWidth="568px">
            <OTPInputComponent label="6 Digit OTP" otpLength={6} name="otpLength6" />
          </Box>
        </Box>
      </Box>

      {/* Masked Input */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Masked Input
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Box maxWidth="376px">
            <OTPInputComponent label="Masked 4 Digit PIN" otpLength={4} isMasked name="masked4" />
          </Box>
          <Box maxWidth="568px">
            <OTPInputComponent label="Masked 6 Digit OTP" otpLength={6} isMasked name="masked6" />
          </Box>
        </Box>
      </Box>

      {/* Auto Focus */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Auto Focus
        </Text>
        <Box maxWidth="568px">
          {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
          <OTPInputComponent label="Auto Focus Enabled" autoFocus name="autoFocus" />
        </Box>
      </Box>

      {/* With Label Suffix & Trailing */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="surface.text.gray.subtle">
          With Label Suffix & Trailing
        </Text>
        <Box maxWidth="568px">
          <OTPInputComponent label="Enter OTP" name="labelSuffixTrailing" labelSuffix={<Tooltip content="Your OTP is sent to your registered mobile number" placement="right">
                <TooltipInteractiveWrapper display="flex">
                  <InfoIcon size="small" color="surface.icon.gray.muted" />
                </TooltipInteractiveWrapper>
              </Tooltip>} labelTrailing={<Link size="small">Learn more</Link>} />
        </Box>
      </Box>
    </Box>;
}`,...(ce=(le=P.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const We=["OTPInput","OTPInput4Fields","OTPInputHelpText","OTPInputWithoutLabel","OTPInputMasked","OTPInputError","OTPInputSuccess","OTPInputSizes","OTPInputUncontrolled","OTPInputControlled","OTPInputRef","OTPInputWithLabelSuffixTrailing","OTPInputShowcase"],we=Object.freeze(Object.defineProperty({__proto__:null,OTPInput:l,OTPInput4Fields:p,OTPInputControlled:O,OTPInputError:u,OTPInputHelpText:x,OTPInputMasked:d,OTPInputRef:h,OTPInputShowcase:P,OTPInputSizes:b,OTPInputSuccess:g,OTPInputUncontrolled:f,OTPInputWithLabelSuffixTrailing:T,OTPInputWithoutLabel:m,__namedExportsOrder:We,default:Se},Symbol.toStringTag,{value:"Module"}));export{we as o};
