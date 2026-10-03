import{jD as n,j as e,B as a,T as o,du as D,ak as N,l as je,y as we,z as Ne,X as Oe,ad as C,n as Re,C as Ae,jE as ve}from"./iframe-C1qQ09LF.js";import{S as ze}from"./StoryPageWrapper-CS0_5maI.js";import{S as Ee}from"./Sandbox.web-B2xP21Qp.js";import{g as _e}from"./storybookArgTypes-DFfQV31s.js";import{i as L}from"./iconMap-BGYDFM5U.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const t={BASE_PROPS:"Text Input Props",LABEL_PROPS:"Label Props",VALIDATION_PROPS:"Validation Props",VISUAL_PROPS:"Visual Props",KEYBOARD_PROPS:"Keyboard Props"},Ge={title:"Components/Input/PhoneNumberInput",component:n,tags:["autodocs"],args:{country:void 0,defaultCountry:"IN",size:"medium",showDialCode:!0,showCountrySelector:!0,allowedCountries:void 0,defaultValue:void 0,trailingIcon:void 0,leadingIcon:void 0,accessibilityLabel:void 0,showHelpTextOnFocus:!1},argTypes:{country:{table:{category:t.BASE_PROPS}},defaultCountry:{table:{category:t.BASE_PROPS}},allowedCountries:{table:{category:t.BASE_PROPS}},showDialCode:{table:{category:t.BASE_PROPS}},showCountrySelector:{table:{category:t.BASE_PROPS}},defaultValue:{table:{category:t.BASE_PROPS}},testID:{table:{category:t.BASE_PROPS}},size:{table:{category:t.BASE_PROPS}},name:{table:{category:t.BASE_PROPS}},isDisabled:{table:{category:t.BASE_PROPS}},value:{table:{category:t.BASE_PROPS}},textAlign:{table:{category:t.BASE_PROPS}},autoFocus:{table:{category:t.BASE_PROPS}},onSubmit:{control:{disable:!0},table:{category:t.BASE_PROPS}},onClick:{control:{disable:!0},table:{category:t.BASE_PROPS}},onCountryChange:{table:{category:t.BASE_PROPS}},onChange:{table:{category:t.BASE_PROPS}},onFocus:{control:{disable:!0},table:{category:t.BASE_PROPS}},onBlur:{control:{disable:!0},table:{category:t.BASE_PROPS}},label:{table:{category:t.LABEL_PROPS}},accessibilityLabel:{table:{category:t.LABEL_PROPS}},labelPosition:{table:{category:t.LABEL_PROPS}},labelSuffix:{table:{category:t.LABEL_PROPS}},labelTrailing:{table:{category:t.LABEL_PROPS}},necessityIndicator:{table:{category:t.VALIDATION_PROPS}},isRequired:{table:{category:t.VALIDATION_PROPS}},validationState:{table:{category:t.VALIDATION_PROPS}},helpText:{table:{category:t.VALIDATION_PROPS}},showHelpTextOnFocus:{table:{category:t.VALIDATION_PROPS}},errorText:{table:{category:t.VALIDATION_PROPS}},successText:{table:{category:t.VALIDATION_PROPS}},leadingIcon:{name:"leadingIcon",type:"select",options:Object.keys(L),table:{category:t.VISUAL_PROPS}},trailingIcon:{name:"trailingIcon",type:"select",options:Object.keys(L),table:{category:t.VISUAL_PROPS}},onClearButtonClick:{table:{category:t.VISUAL_PROPS}},keyboardReturnKeyType:{table:{category:t.KEYBOARD_PROPS}},autoCompleteSuggestionType:{table:{category:t.KEYBOARD_PROPS}},..._e()},parameters:{docs:{page:()=>e.jsxs(ze,{componentDescription:"A phone number input is an input field that allow users to input phone numbers with a keyboard. It supports entering phone numbers from different geographic locations.",componentName:"PhoneNumberInput",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Input/PhoneNumberInput/_decisions/_decisions.md",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=83906-15584&scaling=scale-down-width&page-id=82637%3A73097&mode=design&t=A1SUVWxe1R52aq58-1",children:[e.jsx(Oe,{children:"Usage"}),e.jsx(Ee,{children:`
              import { PhoneNumberInput } from '@greenloom/ui/components';

              function App() {
                return (
                  <PhoneNumberInput 
                    label="Enter phone number" 
                    onChange={(e) => console.log(e)} 
                  />
                )
              }

              export default App;
            `})]})}}},i=({...s})=>e.jsx(n,{...s}),T=i.bind({}),We=({...s})=>e.jsxs(a,{children:[e.jsxs(o,{marginBottom:"spacing.5",children:["By setting the ",e.jsx(Ae,{size:"medium",children:"allowedCountries={['IN', 'MY']}"})," prop, We can only show two countries in the Country Selector"]}),e.jsx(n,{...s})]}),g=We.bind({});g.args={allowedCountries:["IN","MY"]};const c=i.bind({});c.storyName="Size: Large";c.args={size:"large"};const b=i.bind({});b.args={showCountrySelector:!1};const h=i.bind({});h.args={showDialCode:!1};const x=i.bind({});x.args={defaultCountry:"MY"};const y=i.bind({});y.args={helpText:"Phone number is needed for sending you invoice"};const f=i.bind({});f.args={validationState:"error",errorText:"Phone number is invalid"};const S=i.bind({});S.args={validationState:"success",successText:"Phone number is valid"};const P=i.bind({});P.args={label:void 0,accessibilityLabel:"Enter your phone number"};const I=i.bind({});I.args={showCountrySelector:!1,leadingIcon:D};const ke=()=>{const[s,l]=C.useState("IN");return e.jsxs(a,{children:[e.jsx(Re,{size:"small",variant:"tertiary",marginBottom:"spacing.4",onClick:()=>l("US"),children:"Change Country"}),e.jsxs(o,{marginBottom:"spacing.4",children:["Selected country: ",s]}),e.jsx(n,{label:"Enter phone number",name:"phonenumber",country:s,onCountryChange:({country:r})=>{console.log(r),l(r)}})]})},B=ke.bind({}),Me=()=>{const[s,l]=C.useState(""),[r,A]=C.useState(null);return e.jsxs(a,{children:[e.jsx(n,{label:"Enter phone number",value:s,name:"phonenumber",onChange:({name:m,value:p,country:De,dialCode:Le,phoneNumber:Ve})=>{console.log(`sending ${m}:${p} to analytics service`),l(p??""),A({name:m,value:p,country:De,dialCode:Le,phoneNumber:Ve})}}),r?e.jsxs(a,{marginTop:"spacing.4",children:[e.jsxs(o,{children:[e.jsx(o,{as:"span",weight:"semibold",children:"value:"})," ",r.value]}),e.jsxs(o,{children:[e.jsx(o,{as:"span",weight:"semibold",children:"phoneNumber:"})," ",r.phoneNumber]}),e.jsxs(o,{children:[e.jsx(o,{as:"span",weight:"semibold",children:"country:"})," ",r.country]}),e.jsxs(o,{children:[e.jsx(o,{as:"span",weight:"semibold",children:"dialCode:"})," ",r.dialCode]}),e.jsxs(o,{children:[e.jsx(o,{as:"span",weight:"semibold",children:"name:"})," ",r.name]})]}):null]})},j=Me.bind({}),Ye=()=>{const[s,l]=C.useState(""),[r,A]=C.useState(!0);return e.jsxs(a,{children:[e.jsxs(o,{marginBottom:"spacing.5",children:["You can choose to validate the phone number manually by using the i18nify-js library's"," ",e.jsx(Ae,{size:"medium",children:"isValidPhoneNumber()"})," utility."]}),e.jsx(n,{label:"Enter phone number",value:s,name:"phonenumber",errorText:"Invlaid phone number",validationState:r?"none":"error",onChange:({value:m,country:p})=>{l(m??""),A(ve(m,p))}})]})},w=Ye.bind({}),u=i.bind({});u.storyName="PhoneNumberInput with Label Suffix & Trailing";u.args={label:"Enter phone number",placeholder:"Enter phone number",labelSuffix:e.jsx(we,{content:"Enter your phone number",placement:"right",children:e.jsx(Ne,{display:"flex",children:e.jsx(N,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(je,{size:"small",children:"Learn more"})};const d=()=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.8",children:[e.jsxs(a,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Basic Variants"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(n,{label:"Default",name:"default"}),e.jsx(n,{label:"With Value",defaultValue:"9876543210",name:"withValue"}),e.jsx(n,{label:"With Help Text",helpText:"Phone number is needed for sending you invoice",name:"withHelpText"}),e.jsx(n,{label:"Disabled",isDisabled:!0,name:"disabled"})]})]}),e.jsxs(a,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Validation States"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(n,{label:"Error State",defaultValue:"12345",validationState:"error",errorText:"This phone number is invalid",name:"error"}),e.jsx(n,{label:"Success State",defaultValue:"9876543210",validationState:"success",successText:"This phone number is valid",name:"success"})]})]}),e.jsxs(a,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Sizes"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(n,{label:"Medium Size",size:"medium",name:"sizeMedium"}),e.jsx(n,{label:"Large Size",size:"large",name:"sizeLarge"})]})]}),e.jsxs(a,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Label Positions"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(n,{label:"Label Top",labelPosition:"top",name:"labelTop"}),e.jsx(n,{label:"Label Left",labelPosition:"left",name:"labelLeft"})]})]}),e.jsxs(a,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Necessity Indicators"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(n,{label:"Required Field",necessityIndicator:"required",name:"required"}),e.jsx(n,{label:"Optional Field",necessityIndicator:"optional",name:"optional"})]})]}),e.jsxs(a,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Icons"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(n,{label:"Leading Icon",leadingIcon:D,showCountrySelector:!1,name:"leadingIcon"}),e.jsx(n,{label:"Trailing Icon",trailingIcon:N,name:"trailingIcon"}),e.jsx(n,{label:"Both Icons",leadingIcon:D,trailingIcon:N,showCountrySelector:!1,name:"bothIcons"})]})]}),e.jsxs(a,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Country Selector Variations"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(n,{label:"With Country Selector",showCountrySelector:!0,name:"withCountrySelector"}),e.jsx(n,{label:"Without Country Selector",showCountrySelector:!1,name:"withoutCountrySelector"}),e.jsx(n,{label:"Default Country (Malaysia)",defaultCountry:"MY",name:"defaultCountryMY"}),e.jsx(n,{label:"Allowed Countries Only",allowedCountries:["IN","US","MY"],name:"allowedCountries"})]})]}),e.jsxs(a,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Dial Code Variations"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(n,{label:"With Dial Code",showDialCode:!0,name:"withDialCode"}),e.jsx(n,{label:"Without Dial Code",showDialCode:!1,name:"withoutDialCode"})]})]}),e.jsxs(a,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Text Alignment"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(n,{label:"Left Aligned",defaultValue:"9876543210",textAlign:"left",name:"textAlignLeft"}),e.jsx(n,{label:"Center Aligned",defaultValue:"9876543210",textAlign:"center",name:"textAlignCenter"}),e.jsx(n,{label:"Right Aligned",defaultValue:"9876543210",textAlign:"right",name:"textAlignRight"})]})]}),e.jsxs(a,{children:[e.jsx(o,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"surface.text.gray.subtle",children:"With Label Suffix & Trailing"}),e.jsx(n,{label:"Phone Number",labelSuffix:e.jsx(we,{content:"Your phone number is used for verification",placement:"right",children:e.jsx(Ne,{display:"flex",children:e.jsx(N,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(je,{size:"small",children:"Learn more"}),name:"labelSuffixTrailing"})]})]});d.storyName="Showcase - All Variants";d.parameters={docs:{description:{story:"A comprehensive showcase of all PhoneNumberInput variants including basic states, validation states, sizes, label positions, icons, country selector variations, dial code variations, and more."}}};var V,O,R;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`({
  ...args
}) => {
  return <PhoneNumberInput {...args} />;
}`,...(R=(O=T.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var v,z,E;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`({
  ...args
}) => {
  return <Box>
      <Text marginBottom="spacing.5">
        By setting the <Code size="medium">{\`allowedCountries={['IN', 'MY']}\`}</Code> prop, We can
        only show two countries in the Country Selector
      </Text>
      <PhoneNumberInput {...args} />
    </Box>;
}`,...(E=(z=g.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var _,W,k;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`({
  ...args
}) => {
  return <PhoneNumberInput {...args} />;
}`,...(k=(W=c.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var M,Y,U;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`({
  ...args
}) => {
  return <PhoneNumberInput {...args} />;
}`,...(U=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var q,F,H;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`({
  ...args
}) => {
  return <PhoneNumberInput {...args} />;
}`,...(H=(F=h.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var K,$,Q;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`({
  ...args
}) => {
  return <PhoneNumberInput {...args} />;
}`,...(Q=($=x.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var X,Z,G;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`({
  ...args
}) => {
  return <PhoneNumberInput {...args} />;
}`,...(G=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var J,ee,te;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`({
  ...args
}) => {
  return <PhoneNumberInput {...args} />;
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,oe;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`({
  ...args
}) => {
  return <PhoneNumberInput {...args} />;
}`,...(oe=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,ie,se;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:`({
  ...args
}) => {
  return <PhoneNumberInput {...args} />;
}`,...(se=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,ce,ue;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`({
  ...args
}) => {
  return <PhoneNumberInput {...args} />;
}`,...(ue=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,me,pe;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const [selectedCountry, setSelectedCountry] = React.useState<CountryCodeType>('IN');
  return <Box>
      <Button size="small" variant="tertiary" marginBottom="spacing.4" onClick={() => setSelectedCountry('US')}>
        Change Country
      </Button>
      <Text marginBottom="spacing.4">Selected country: {selectedCountry}</Text>

      <PhoneNumberInput label="Enter phone number" name="phonenumber" country={selectedCountry} onCountryChange={({
      country
    }): void => {
      console.log(country);
      setSelectedCountry(country);
    }} />
    </Box>;
}`,...(pe=(me=B.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,be,he;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = React.useState('');
  const [data, setData] = React.useState<{
    phoneNumber: string;
    dialCode: string;
    country: string;
    value: string;
    name: string;
  } | null>(null);
  return <Box>
      <PhoneNumberInput label="Enter phone number" value={inputValue} name="phonenumber" onChange={({
      name,
      value,
      country,
      dialCode,
      phoneNumber
    }): void => {
      console.log(\`sending \${name}:\${value} to analytics service\`);
      setInputValue(value ?? '');
      setData({
        name,
        value,
        country,
        dialCode,
        phoneNumber
      });
    }} />

      {data ? <Box marginTop="spacing.4">
          <Text>
            <Text as="span" weight="semibold">
              value:
            </Text>{' '}
            {data.value}
          </Text>
          <Text>
            <Text as="span" weight="semibold">
              phoneNumber:
            </Text>{' '}
            {data.phoneNumber}
          </Text>
          <Text>
            <Text as="span" weight="semibold">
              country:
            </Text>{' '}
            {data.country}
          </Text>
          <Text>
            <Text as="span" weight="semibold">
              dialCode:
            </Text>{' '}
            {data.dialCode}
          </Text>
          <Text>
            <Text as="span" weight="semibold">
              name:
            </Text>{' '}
            {data.name}
          </Text>
        </Box> : null}
    </Box>;
}`,...(he=(be=j.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var xe,ye,fe;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = React.useState('');
  const [isValid, setIsValid] = React.useState(true);
  return <Box>
      <Text marginBottom="spacing.5">
        You can choose to validate the phone number manually by using the i18nify-js library's{' '}
        <Code size="medium">isValidPhoneNumber()</Code> utility.
      </Text>
      <PhoneNumberInput label="Enter phone number" value={inputValue} name="phonenumber" errorText="Invlaid phone number" validationState={isValid ? 'none' : 'error'} onChange={({
      value,
      country
    }): void => {
      setInputValue(value ?? '');
      setIsValid(isValidPhoneNumber(value, country));
    }} />
    </Box>;
}`,...(fe=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var Se,Pe,Ie;u.parameters={...u.parameters,docs:{...(Se=u.parameters)==null?void 0:Se.docs,source:{originalSource:`({
  ...args
}) => {
  return <PhoneNumberInput {...args} />;
}`,...(Ie=(Pe=u.parameters)==null?void 0:Pe.docs)==null?void 0:Ie.source}}};var Ce,Te,Be;d.parameters={...d.parameters,docs:{...(Ce=d.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.8">
      {/* Basic Variants */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Basic Variants
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <PhoneNumberInput label="Default" name="default" />
          <PhoneNumberInput label="With Value" defaultValue="9876543210" name="withValue" />
          <PhoneNumberInput label="With Help Text" helpText="Phone number is needed for sending you invoice" name="withHelpText" />
          <PhoneNumberInput label="Disabled" isDisabled name="disabled" />
        </Box>
      </Box>

      {/* Validation States */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Validation States
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <PhoneNumberInput label="Error State" defaultValue="12345" validationState="error" errorText="This phone number is invalid" name="error" />
          <PhoneNumberInput label="Success State" defaultValue="9876543210" validationState="success" successText="This phone number is valid" name="success" />
        </Box>
      </Box>

      {/* Sizes */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Sizes
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <PhoneNumberInput label="Medium Size" size="medium" name="sizeMedium" />
          <PhoneNumberInput label="Large Size" size="large" name="sizeLarge" />
        </Box>
      </Box>

      {/* Label Positions */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Label Positions
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <PhoneNumberInput label="Label Top" labelPosition="top" name="labelTop" />
          <PhoneNumberInput label="Label Left" labelPosition="left" name="labelLeft" />
        </Box>
      </Box>

      {/* Necessity Indicators */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Necessity Indicators
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <PhoneNumberInput label="Required Field" necessityIndicator="required" name="required" />
          <PhoneNumberInput label="Optional Field" necessityIndicator="optional" name="optional" />
        </Box>
      </Box>

      {/* With Icons */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Icons
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <PhoneNumberInput label="Leading Icon" leadingIcon={PhoneIcon} showCountrySelector={false} name="leadingIcon" />
          <PhoneNumberInput label="Trailing Icon" trailingIcon={InfoIcon} name="trailingIcon" />
          <PhoneNumberInput label="Both Icons" leadingIcon={PhoneIcon} trailingIcon={InfoIcon} showCountrySelector={false} name="bothIcons" />
        </Box>
      </Box>

      {/* Country Selector Variations */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Country Selector Variations
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <PhoneNumberInput label="With Country Selector" showCountrySelector name="withCountrySelector" />
          <PhoneNumberInput label="Without Country Selector" showCountrySelector={false} name="withoutCountrySelector" />
          <PhoneNumberInput label="Default Country (Malaysia)" defaultCountry="MY" name="defaultCountryMY" />
          <PhoneNumberInput label="Allowed Countries Only" allowedCountries={['IN', 'US', 'MY']} name="allowedCountries" />
        </Box>
      </Box>

      {/* Dial Code Variations */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Dial Code Variations
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <PhoneNumberInput label="With Dial Code" showDialCode name="withDialCode" />
          <PhoneNumberInput label="Without Dial Code" showDialCode={false} name="withoutDialCode" />
        </Box>
      </Box>

      {/* Text Alignment */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Text Alignment
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <PhoneNumberInput label="Left Aligned" defaultValue="9876543210" textAlign="left" name="textAlignLeft" />
          <PhoneNumberInput label="Center Aligned" defaultValue="9876543210" textAlign="center" name="textAlignCenter" />
          <PhoneNumberInput label="Right Aligned" defaultValue="9876543210" textAlign="right" name="textAlignRight" />
        </Box>
      </Box>

      {/* With Label Suffix & Trailing */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="surface.text.gray.subtle">
          With Label Suffix & Trailing
        </Text>
        <PhoneNumberInput label="Phone Number" labelSuffix={<Tooltip content="Your phone number is used for verification" placement="right">
              <TooltipInteractiveWrapper display="flex">
                <InfoIcon size="small" color="surface.icon.gray.muted" />
              </TooltipInteractiveWrapper>
            </Tooltip>} labelTrailing={<Link size="small">Learn more</Link>} name="labelSuffixTrailing" />
      </Box>
    </Box>;
}`,...(Be=(Te=d.parameters)==null?void 0:Te.docs)==null?void 0:Be.source}}};const Je=["Default","CountriesToShow","SizeLarge","WithoutCountrySelector","WithoutDialCode","DefaultCountry","WithHelpText","WithErrorText","WithSuccessText","WithoutLabel","WithLeadingIcon","ControlledCountrySelector","Controlled","Validation","PhoneNumberInputWithLabelSuffixTrailing","PhoneNumberInputShowcase"];export{j as Controlled,B as ControlledCountrySelector,g as CountriesToShow,T as Default,x as DefaultCountry,d as PhoneNumberInputShowcase,u as PhoneNumberInputWithLabelSuffixTrailing,c as SizeLarge,w as Validation,f as WithErrorText,y as WithHelpText,I as WithLeadingIcon,S as WithSuccessText,b as WithoutCountrySelector,h as WithoutDialCode,P as WithoutLabel,Je as __namedExportsOrder,Ge as default};
