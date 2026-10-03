import{a9 as a,ad as t,j as e,B as r,T as i}from"./iframe-C1qQ09LF.js";import{g as A,a as M,d as Y}from"./usePaymentCardDetection-DFgjyIo8.js";import{S as L}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const Z={title:"Components/Input/TextInput/Format",component:a,parameters:{docs:{page:()=>e.jsx(L,{componentName:"TextInput",componentDescription:"TextInput with format support for different input patterns like credit card numbers, phone numbers etc.",figmaURL:"https://www.figma.com/file/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=1234-5678"})}}},k=o=>/^\d*$/.test(o),b=()=>{const[o,n]=t.useState(""),[p,s]=t.useState(""),[l,m]=t.useState("unknown"),[d,u]=t.useState("none"),[T,c]=t.useState(""),C=({value:D,rawValue:x})=>{const f=k(x??"");if(!f&&x?(u("error"),c("Please enter numbers only")):(u("none"),c("")),n(D??""),s(x??""),x&&f){const I=Y(x);m(I)}};return e.jsxs(r,{children:[e.jsx(a,{label:"Card Number",placeholder:"Enter card number",value:o,format:M(l),onChange:C,helpText:"Try: 4111111111111111 (Visa), 5555555555554444 (Mastercard), 378282246310005 (Amex)",trailing:A(l),type:"number",validationState:d,errorText:T}),e.jsx(r,{backgroundColor:"surface.background.gray.moderate",padding:"spacing.4",borderRadius:"medium",margin:["spacing.4","spacing.0"],children:e.jsxs(i,{children:["Formatted Value: ",o]})}),e.jsx(r,{backgroundColor:"surface.background.gray.moderate",padding:"spacing.4",borderRadius:"medium",children:e.jsxs(i,{children:["Raw Value: ",p]})})]})};b.storyName="Format Controlled";const g=()=>{const[o,n]=t.useState(""),[p,s]=t.useState(""),[l,m]=t.useState("none"),[d,u]=t.useState("");return e.jsxs(r,{children:[e.jsx(a,{label:"Date",placeholder:"Enter date",defaultValue:"",format:"##/##/####",onChange:({value:T,rawValue:c})=>{!k(c??"")&&c?(m("error"),u("Please enter numbers only")):(m("none"),u("")),n(T??""),s(c??"")},helpText:"Enter date in DD/MM/YYYY format",type:"number",validationState:l,errorText:d}),e.jsx(r,{backgroundColor:"surface.background.gray.moderate",padding:"spacing.4",borderRadius:"medium",margin:["spacing.4","spacing.0"],children:e.jsxs(i,{children:["Formatted Value: ",o]})}),e.jsx(r,{backgroundColor:"surface.background.gray.moderate",padding:"spacing.4",borderRadius:"medium",children:e.jsxs(i,{children:["Raw Value: ",p]})})]})};g.storyName="Format Uncontrolled";const X=()=>{const[o,n]=t.useState(""),[p,s]=t.useState(""),[l,m]=t.useState("(####)-####-####");return e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(a,{label:"Format Pattern",placeholder:"Enter format pattern (use # for input positions)",value:l,onChange:({value:d})=>{m(d??""),n(""),s("")},helpText:"Example patterns: ####-####-####, (###) ###-####, ##/##/####"}),e.jsx(a,{label:"Formatted Input",placeholder:"Enter value",value:o,format:l,onChange:({value:d,rawValue:u})=>{n(d??""),s(u??"")},helpText:"Enter value to see it formatted according to the pattern above",showClearButton:!0,onClearButtonClick:()=>{n(""),s("")}}),e.jsx(r,{backgroundColor:"surface.background.gray.moderate",padding:"spacing.4",borderRadius:"medium",children:e.jsxs(i,{children:["Formatted Value: ",o]})}),e.jsx(r,{backgroundColor:"surface.background.gray.moderate",padding:"spacing.4",borderRadius:"medium",children:e.jsxs(i,{children:["Raw Value: ",p]})})]})};X.storyName="Custom Format";const h=()=>e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(a,{label:"Aadhaar Number",placeholder:"Enter Aadhaar",format:"#### #### ####",helpText:"Format: XXXX XXXX XXXX"}),e.jsx(a,{label:"Time (24-hour)",placeholder:"Enter time",format:"##:##:##",helpText:"Format: HH:MM:SS"}),e.jsx(a,{label:"Postal Code",placeholder:"Enter postal code",format:"### ###",helpText:"Format: XXX XXX"}),e.jsx(a,{label:"PAN Number",placeholder:"Enter PAN",format:"##### #### #",helpText:"Format: XXXXX XXXX X"}),e.jsx(a,{label:"IP Address",placeholder:"Enter IP address",format:"###.###.###.###",helpText:"Format: XXX.XXX.XXX.XXX"}),e.jsx(a,{label:"License Plate",placeholder:"Enter license plate",format:"## ## ####",helpText:"Format: AB 12 CDEF"}),e.jsx(a,{label:"GST Number",placeholder:"Enter GST",format:"## #### #### #### #",helpText:"Format: XX XXXX XXXX XXXX X"})]});h.storyName="Format Patterns";var S,V,N;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [cardNumber, setCardNumber] = React.useState('');
  const [rawCardNumber, setRawCardNumber] = React.useState('');
  const [cardBrand, setCardBrand] = React.useState<PaymentCardBrand>('unknown');
  const [validationState, setValidationState] = React.useState<'none' | 'error'>('none');
  const [errorText, setErrorText] = React.useState('');
  const handleCardNumberChange = ({
    value,
    rawValue
  }: {
    value?: string;
    rawValue?: string;
  }): void => {
    const isValidNumber = validateNumber(rawValue ?? '');
    if (!isValidNumber && rawValue) {
      setValidationState('error');
      setErrorText('Please enter numbers only');
    } else {
      setValidationState('none');
      setErrorText('');
    }
    setCardNumber(value ?? '');
    setRawCardNumber(rawValue ?? '');
    if (rawValue && isValidNumber) {
      const brand = detectPaymentCardBrand(rawValue);
      setCardBrand(brand);
    }
  };
  return <Box>
      <TextInputComponent label="Card Number" placeholder="Enter card number" value={cardNumber} format={getPaymentCardNumberFormat(cardBrand)} onChange={handleCardNumberChange} helpText="Try: 4111111111111111 (Visa), 5555555555554444 (Mastercard), 378282246310005 (Amex)" trailing={getPaymentCardBrandIcon(cardBrand)} type="number" validationState={validationState} errorText={errorText} />
      <Box backgroundColor="surface.background.gray.moderate" padding="spacing.4" borderRadius="medium" margin={['spacing.4', 'spacing.0']}>
        <Text>Formatted Value: {cardNumber}</Text>
      </Box>
      <Box backgroundColor="surface.background.gray.moderate" padding="spacing.4" borderRadius="medium">
        <Text>Raw Value: {rawCardNumber}</Text>
      </Box>
    </Box>;
}`,...(N=(V=b.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var R,w,F;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState('');
  const [rawDate, setRawDate] = React.useState('');
  const [validationState, setValidationState] = React.useState<'none' | 'error'>('none');
  const [errorText, setErrorText] = React.useState('');
  return <Box>
      <TextInputComponent label="Date" placeholder="Enter date" defaultValue="" format="##/##/####" onChange={({
      value,
      rawValue
    }) => {
      const isValidNumber = validateNumber(rawValue ?? '');
      if (!isValidNumber && rawValue) {
        setValidationState('error');
        setErrorText('Please enter numbers only');
      } else {
        setValidationState('none');
        setErrorText('');
      }
      setDate(value ?? '');
      setRawDate(rawValue ?? '');
    }} helpText="Enter date in DD/MM/YYYY format" type="number" validationState={validationState} errorText={errorText} />
      <Box backgroundColor="surface.background.gray.moderate" padding="spacing.4" borderRadius="medium" margin={['spacing.4', 'spacing.0']}>
        <Text>Formatted Value: {date}</Text>
      </Box>
      <Box backgroundColor="surface.background.gray.moderate" padding="spacing.4" borderRadius="medium">
        <Text>Raw Value: {rawDate}</Text>
      </Box>
    </Box>;
}`,...(F=(w=g.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var B,y,E;X.parameters={...X.parameters,docs:{...(B=X.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  const [rawValue, setRawValue] = React.useState('');
  const [pattern, setPattern] = React.useState('(####)-####-####');
  return <Box display="flex" flexDirection="column" gap="spacing.4">
      <TextInputComponent label="Format Pattern" placeholder="Enter format pattern (use # for input positions)" value={pattern} onChange={({
      value
    }) => {
      setPattern(value ?? '');
      setValue('');
      setRawValue('');
    }} helpText="Example patterns: ####-####-####, (###) ###-####, ##/##/####" />
      <TextInputComponent label="Formatted Input" placeholder="Enter value" value={value} format={pattern} onChange={({
      value,
      rawValue
    }) => {
      setValue(value ?? '');
      setRawValue(rawValue ?? '');
    }} helpText="Enter value to see it formatted according to the pattern above" showClearButton={true} onClearButtonClick={() => {
      setValue('');
      setRawValue('');
    }} />
      <Box backgroundColor="surface.background.gray.moderate" padding="spacing.4" borderRadius="medium">
        <Text>Formatted Value: {value}</Text>
      </Box>
      <Box backgroundColor="surface.background.gray.moderate" padding="spacing.4" borderRadius="medium">
        <Text>Raw Value: {rawValue}</Text>
      </Box>
    </Box>;
}`,...(E=(y=X.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var v,P,j;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.4">
      <TextInputComponent label="Aadhaar Number" placeholder="Enter Aadhaar" format="#### #### ####" helpText="Format: XXXX XXXX XXXX" />
      <TextInputComponent label="Time (24-hour)" placeholder="Enter time" format="##:##:##" helpText="Format: HH:MM:SS" />
      <TextInputComponent label="Postal Code" placeholder="Enter postal code" format="### ###" helpText="Format: XXX XXX" />
      <TextInputComponent label="PAN Number" placeholder="Enter PAN" format="##### #### #" helpText="Format: XXXXX XXXX X" />
      <TextInputComponent label="IP Address" placeholder="Enter IP address" format="###.###.###.###" helpText="Format: XXX.XXX.XXX.XXX" />
      <TextInputComponent label="License Plate" placeholder="Enter license plate" format="## ## ####" helpText="Format: AB 12 CDEF" />
      <TextInputComponent label="GST Number" placeholder="Enter GST" format="## #### #### #### #" helpText="Format: XX XXXX XXXX XXXX X" />
    </Box>;
}`,...(j=(P=h.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const $=["CardNumberFormat","DateFormat","CustomFormat","FormatPatterns"];export{b as CardNumberFormat,X as CustomFormat,g as DateFormat,h as FormatPatterns,$ as __namedExportsOrder,Z as default};
