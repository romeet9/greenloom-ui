import{l0 as b,j as e,H as te,B as g,l1 as o,a9 as a,r as N,jx as ne,jC as oe,n as V,ip as ce,at as he,au as ge,aS as xe,aq as fe,ar as y}from"./iframe-C1qQ09LF.js";import{u as le}from"./useToast.web-DG48GqLd.js";import{S as ve}from"./Sandbox.web-B2xP21Qp.js";import{S as be}from"./StoryPageWrapper-CS0_5maI.js";import{b as Ce}from"./storybookArgTypes-DFfQV31s.js";import{g as se,a as ie,b as E,d as B}from"./usePaymentCardDetection-DFgjyIo8.js";const Ie=`import React, { useState } from 'react';
import {
  InputGroup,
  InputRow,
  TextInput,
  DatePicker,
  Button,
  Box,
  PasswordInput
} from '@greenloom/loom/components';

const InputGroupExample = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <InputGroup label="Payment Details" hintText="Enter your payment details">
        <InputRow gridTemplateColumns="1fr">
          <TextInput 
            placeholder="1234 5678 9012 3456" 
            format="#### #### #### ####"
            label="Card Number"
            value={formData.cardNumber}
            onChange={({ value }) => handleInputChange('cardNumber', value)}
          />
        </InputRow>
        <InputRow gridTemplateColumns="1fr">
          <TextInput 
            placeholder="MM/YY" 
            format="##/##"
            label="Expiry Date"
            value={formData.expiryDate}
            onChange={({ value }) => handleInputChange('expiryDate', value)}
          />
        </InputRow>
        <InputRow gridTemplateColumns="1fr 1fr">
          <PasswordInput 
            placeholder="123" 
            label="CVV"
            maxCharacters={3}
            value={formData.cvv}
            onChange={({ value }) => handleInputChange('cvv', value)}
          />
          <TextInput 
            placeholder="John Doe" 
            label="Cardholder Name"
            value={formData.cardholderName}
            onChange={({ value }) => handleInputChange('cardholderName', value)}
          />
        </InputRow>
      </InputGroup>
      <Box display="flex" justifyContent="flex-end" alignItems="center" marginTop="spacing.4">
        <Button onClick={handleSubmit} variant="primary">
          Submit Payment
        </Button>
      </Box>
    </>
  );
};

export default InputGroupExample;
`,ye={title:"Components/InputGroup",component:b,tags:["autodocs"],argTypes:Ce(),parameters:{docs:{page:()=>e.jsxs(be,{componentDescription:"InputGroup organizes related form inputs with consistent spacing and layout.",componentName:"InputGroup",figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=104279-27155&p=f&m=dev",children:[e.jsx(te,{size:"large",children:"Usage"}),e.jsx(ve,{editorHeight:500,children:Ie})]})}}},Ne=s=>e.jsxs(b,{...s,children:[e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"Street Address",label:"Street Address"})}),e.jsxs(o,{gridTemplateColumns:"1fr 1fr",children:[e.jsx(a,{placeholder:"City",label:"City"}),e.jsx(a,{placeholder:"ZIP Code",label:"ZIP Code"})]}),e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"Country",label:"Country"})})]}),v=Ne.bind({});v.args={label:"Shipping Address",helpText:"Where should we deliver your order?"};const Te=s=>e.jsxs(b,{...s,children:[e.jsxs(o,{gridTemplateColumns:"1fr 1fr",children:[e.jsx(a,{placeholder:"First Name",label:"First Name"}),e.jsx(a,{placeholder:"Last Name",label:"Last Name"})]}),e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"Street Address",label:"Street Address"})}),e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"Street Address Line-2",label:"Address Line 2"})}),e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"Apartment Name",label:"Apartment Name"})}),e.jsxs(o,{gridTemplateColumns:"1fr 1fr",children:[e.jsx(a,{placeholder:"City",label:"City"}),e.jsx(a,{placeholder:"State",label:"State"})]}),e.jsxs(o,{gridTemplateColumns:"1fr 1fr",children:[e.jsx(a,{placeholder:"ZIP Code",label:"ZIP Code"}),e.jsx(a,{placeholder:"Country",label:"Country"})]})]}),T=Te.bind({});T.args={label:"Billing Address",helpText:"Complete address information required for billing"};const we=s=>{const n=ce();return e.jsxs(g,{children:[e.jsxs(b,{...s,children:[n?e.jsxs(e.Fragment,{children:[e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"Business Name",label:"Business Name"})}),e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"Trading Name",label:"Trading Name"})})]}):e.jsxs(o,{gridTemplateColumns:"1fr 1fr",children:[e.jsx(a,{placeholder:"Business Name",label:"Business Name"}),e.jsx(a,{placeholder:"Trading Name",label:"Trading Name"})]}),e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"Business Email",label:"Business Email"})}),n?e.jsxs(e.Fragment,{children:[e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"PAN Number",label:"Business PAN"})}),e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"GST Number",label:"GSTIN"})})]}):e.jsxs(o,{gridTemplateColumns:"1fr 1fr",children:[e.jsx(a,{placeholder:"PAN Number",label:"Business PAN"}),e.jsx(a,{placeholder:"GST Number",label:"GSTIN"})]}),n?e.jsxs(e.Fragment,{children:[e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"Account Number",label:"Bank Account Number"})}),e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"IFSC Code",label:"IFSC Code"})})]}):e.jsxs(o,{gridTemplateColumns:"2fr 1fr",children:[e.jsx(a,{placeholder:"Account Number",label:"Bank Account Number"}),e.jsx(a,{placeholder:"IFSC Code",label:"IFSC Code"})]}),e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsxs(he,{selectionType:"single",children:[e.jsx(ge,{label:"Business Category",placeholder:"Select Business Category",name:"businessCategory",onChange:({name:c,values:d})=>{console.log({name:c,values:d})}}),e.jsx(xe,{children:e.jsxs(fe,{children:[e.jsx(y,{title:"E-commerce",value:"ecommerce"}),e.jsx(y,{title:"Education",value:"education"}),e.jsx(y,{title:"Healthcare",value:"healthcare"}),e.jsx(y,{title:"Food & Beverage",value:"food_beverage"}),e.jsx(y,{title:"Financial Services",value:"financial"}),e.jsx(y,{title:"Others",value:"others"})]})})]})})]}),e.jsxs(g,{display:"flex",justifyContent:"space-between",width:"100%",children:[e.jsx(g,{}),e.jsx(V,{variant:"primary",marginTop:"spacing.3",children:"Start Onboarding"})]})]})},w=we.bind({});w.args={label:"Merchant Onboarding",helpText:"Complete your business details to start accepting payments"};const De=()=>{const s=le(),[n,c]=N.useState({cardNumber:"12345678",expiryDate:"12",cvv:"12",cardholderName:"John Doe",email:"invalid-email"}),[d,p]=N.useState({cardNumber:!0,expiryDate:!0,cvv:!0,cardholderName:!1,email:!0}),x=()=>{const t={cardNumber:!1,expiryDate:!1,cvv:!1,cardholderName:!1,email:!1};return n.cardNumber?n.cardNumber.length<13&&(t.cardNumber=!0):t.cardNumber=!0,n.expiryDate||(t.expiryDate=!0),n.cvv?n.cvv.length!==E(B(n.cardNumber))&&(t.cvv=!0):t.cvv=!0,n.cardholderName||(t.cardholderName=!0),n.email&&/\S+@\S+\.\S+/.test(n.email)||(t.email=!0),p(t),Object.values(t).every(f=>!f)},S=()=>Object.values(d).some(t=>t),u=(t,f)=>{c(I=>({...I,[t]:f})),d[t]&&p(I=>({...I,[t]:!1}))},C=()=>{x()&&s.show({content:"Payment information saved successfully!",color:"positive"})},m=t=>d[t]?"error":"none";return e.jsxs(g,{children:[e.jsx(ne,{}),e.jsxs(b,{label:"Payment & Billing Information",helpText:"Complete all fields to process your payment",validationState:S()?"error":"none",errorText:S()?"Please fix all errors before submitting":"",children:[e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"Card Number",label:"Card Number",value:n.cardNumber,onChange:({value:t})=>u("cardNumber",t||""),validationState:m("cardNumber"),trailing:se(B(n.cardNumber)),format:ie(B(n.cardNumber))})}),e.jsxs(o,{gridTemplateColumns:"1fr 1fr",children:[e.jsx(a,{placeholder:"Expiry Date",label:"Expiry Date",format:"##/##",value:n.expiryDate,onChange:({value:t})=>u("expiryDate",t||""),validationState:m("expiryDate")}),e.jsx(oe,{placeholder:"CVV",label:"CVV",value:n.cvv,onChange:({value:t})=>u("cvv",t||""),validationState:m("cvv"),maxCharacters:E(B(n.cardNumber))})]}),e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"Cardholder Name",label:"Cardholder Name",value:n.cardholderName,onChange:({value:t})=>u("cardholderName",t||""),validationState:m("cardholderName")})}),e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"Email Address",label:"Email Address",value:n.email,onChange:({value:t})=>u("email",t||""),validationState:m("email")})})]}),e.jsxs(g,{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"spacing.4",children:[e.jsx(g,{}),e.jsx(V,{variant:"primary",onClick:C,children:"Submit Payment"})]})]})},R=De.bind({}),je=s=>{const n=["medium","large"],c=["top","left"];return e.jsx(e.Fragment,{children:n.map((d,p)=>e.jsxs(g,{marginBottom:"spacing.8",children:[e.jsxs(te,{marginBottom:"spacing.3",children:["Size: ",d," & Label Position: ",c[p]]}),e.jsx(v,{...s,size:d,labelPosition:c[p]})]},p))})},D=je.bind({});D.args={label:"Shipping Address",helpText:"Where should we deliver your order?"};const Se=s=>e.jsxs(b,{...s,children:[e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"Street Address",label:"Street Address",value:"123 Main Street"})}),e.jsxs(o,{gridTemplateColumns:"2fr 1fr",children:[e.jsx(a,{placeholder:"City",label:"City",value:"San Francisco"}),e.jsx(a,{placeholder:"ZIP Code",label:"ZIP Code",value:"94102"})]}),e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{placeholder:"Country",label:"Country",value:"United States"})})]}),j=Se.bind({});j.args={label:"Shipping Address (Read Only)",helpText:"This address cannot be modified",isDisabled:!0};const Be=()=>{const s=le(),[n,c]=N.useState({cardNumber:"",expiryDate:"",cvv:"",cardholderName:""}),[d,p]=N.useState({cardNumber:"",expiryDate:"",cvv:"",cardholderName:""}),[x,S]=N.useState("unknown"),[u,C]=N.useState({}),m={cardNumber:r=>r.trim()?r.length<13?"Card number incomplete":"":"Card number is required",expiryDate:r=>{if(!r.trim())return"Expiry date is required";if(r.length!==4)return"Invalid format";const i=r.substring(0,2),h=r.substring(2,4),l=new Date,F=l.getFullYear()%100,me=l.getMonth()+1,A=parseInt(h,10),pe=parseInt(i,10);return A<F||A===F&&pe<me?"Card expired":""},cvv:r=>{if(!r.trim())return"CVV is required";const i=E(x);return r.length!==i?`CVV must be ${i} digits`:""},cardholderName:r=>r.trim()?"":"Name is required"},t=(r,i,h)=>{c(l=>({...l,[r]:i})),h!==void 0?(p(l=>({...l,[r]:h})),r==="cardNumber"&&S(B(h))):p(l=>({...l,[r]:i})),u[r]&&C(l=>({...l,[r]:""}))},f=r=>{const i=d[r],h=n[r];let l="";r==="cardNumber"||r==="expiryDate"?l=m[r](i):l=m[r](h),l&&C(F=>({...F,[r]:l}))},I=()=>Object.values(u).some(r=>r!==""),de=()=>{c({cardNumber:"",expiryDate:"",cvv:"",cardholderName:""}),p({cardNumber:"",expiryDate:"",cvv:"",cardholderName:""}),S("unknown"),C({})},ue=()=>{const r={cardNumber:m.cardNumber(d.cardNumber),expiryDate:m.expiryDate(d.expiryDate),cvv:m.cvv(n.cvv),cardholderName:m.cardholderName(n.cardholderName)};C(r),Object.values(r).some(h=>h!=="")?s.show({content:"Please fix all errors before submitting",color:"negative"}):(s.show({content:`Payment method added! Card ending in ${n.cardNumber.slice(-4)}`,color:"positive"}),de())};return e.jsxs(g,{children:[e.jsx(ne,{}),e.jsxs(b,{label:"Payment Information",helpText:"Enter your card details to add a payment method",validationState:I()?"error":"none",errorText:I()?"Please fix all errors before submitting":"",children:[e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{label:"Card Number",placeholder:"1234 5678 9012 3456",value:n.cardNumber,format:ie(x),trailing:se(x),onChange:({value:r,rawValue:i})=>t("cardNumber",r||"",i),onBlur:()=>f("cardNumber"),validationState:u.cardNumber?"error":"none"})}),e.jsxs(o,{gridTemplateColumns:"1fr 1fr",children:[e.jsx(a,{label:"Expiry Date",placeholder:"MM/YY",value:n.expiryDate,format:"##/##",onChange:({value:r,rawValue:i})=>t("expiryDate",r||"",i),onBlur:()=>f("expiryDate"),validationState:u.expiryDate?"error":"none"}),e.jsx(oe,{label:`CVV ${x==="amex"?"(4 digits)":"(3 digits)"}`,placeholder:x==="amex"?"1234":"123",maxCharacters:E(x),value:n.cvv,onChange:({value:r})=>t("cvv",r||""),onBlur:()=>f("cvv"),validationState:u.cvv?"error":"none"})]}),e.jsx(o,{gridTemplateColumns:"1fr",children:e.jsx(a,{label:"Cardholder Name",placeholder:"John Doe",value:n.cardholderName,onChange:({value:r})=>t("cardholderName",r||""),onBlur:()=>f("cardholderName"),validationState:u.cardholderName?"error":"none"})})]}),e.jsx(g,{display:"flex",justifyContent:"flex-end",alignItems:"center",marginTop:"spacing.4",children:e.jsx(V,{variant:"primary",onClick:ue,children:"Add Payment Method"})})]})},P=Be.bind({});var G,L,M;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`args => <InputGroupComponent {...args}>
    <InputRow gridTemplateColumns="1fr">
      <TextInput placeholder="Street Address" label="Street Address" />
    </InputRow>
    <InputRow gridTemplateColumns="1fr 1fr">
      <TextInput placeholder="City" label="City" />
      <TextInput placeholder="ZIP Code" label="ZIP Code" />
    </InputRow>
    <InputRow gridTemplateColumns="1fr">
      <TextInput placeholder="Country" label="Country" />
    </InputRow>
  </InputGroupComponent>`,...(M=(L=v.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var k,O,Y;T.parameters={...T.parameters,docs:{...(k=T.parameters)==null?void 0:k.docs,source:{originalSource:`args => <InputGroupComponent {...args}>
    <InputRow gridTemplateColumns="1fr 1fr">
      <TextInput placeholder="First Name" label="First Name" />
      <TextInput placeholder="Last Name" label="Last Name" />
    </InputRow>
    <InputRow gridTemplateColumns="1fr">
      <TextInput placeholder="Street Address" label="Street Address" />
    </InputRow>
    <InputRow gridTemplateColumns="1fr">
      <TextInput placeholder="Street Address Line-2" label="Address Line 2" />
    </InputRow>
    <InputRow gridTemplateColumns="1fr">
      <TextInput placeholder="Apartment Name" label="Apartment Name" />
    </InputRow>
    <InputRow gridTemplateColumns="1fr 1fr">
      <TextInput placeholder="City" label="City" />
      <TextInput placeholder="State" label="State" />
    </InputRow>
    <InputRow gridTemplateColumns="1fr 1fr">
      <TextInput placeholder="ZIP Code" label="ZIP Code" />
      <TextInput placeholder="Country" label="Country" />
    </InputRow>
  </InputGroupComponent>`,...(Y=(O=T.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var Z,z,q;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  const isMobile = useIsMobile();
  return <Box>
      <InputGroupComponent {...args}>
        {isMobile ? <>
            <InputRow gridTemplateColumns="1fr">
              <TextInput placeholder="Business Name" label="Business Name" />
            </InputRow>
            <InputRow gridTemplateColumns="1fr">
              <TextInput placeholder="Trading Name" label="Trading Name" />
            </InputRow>
          </> : <InputRow gridTemplateColumns="1fr 1fr">
            <TextInput placeholder="Business Name" label="Business Name" />
            <TextInput placeholder="Trading Name" label="Trading Name" />
          </InputRow>}
        <InputRow gridTemplateColumns="1fr">
          <TextInput placeholder="Business Email" label="Business Email" />
        </InputRow>
        {isMobile ? <>
            <InputRow gridTemplateColumns="1fr">
              <TextInput placeholder="PAN Number" label="Business PAN" />
            </InputRow>
            <InputRow gridTemplateColumns="1fr">
              <TextInput placeholder="GST Number" label="GSTIN" />
            </InputRow>
          </> : <InputRow gridTemplateColumns="1fr 1fr">
            <TextInput placeholder="PAN Number" label="Business PAN" />
            <TextInput placeholder="GST Number" label="GSTIN" />
          </InputRow>}
        {isMobile ? <>
            <InputRow gridTemplateColumns="1fr">
              <TextInput placeholder="Account Number" label="Bank Account Number" />
            </InputRow>
            <InputRow gridTemplateColumns="1fr">
              <TextInput placeholder="IFSC Code" label="IFSC Code" />
            </InputRow>
          </> : <InputRow gridTemplateColumns="2fr 1fr">
            <TextInput placeholder="Account Number" label="Bank Account Number" />
            <TextInput placeholder="IFSC Code" label="IFSC Code" />
          </InputRow>}
        <InputRow gridTemplateColumns="1fr">
          <Dropdown selectionType="single">
            <SelectInput label="Business Category" placeholder="Select Business Category" name="businessCategory" onChange={({
            name,
            values
          }) => {
            console.log({
              name,
              values
            });
          }} />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="E-commerce" value="ecommerce" />
                <ActionListItem title="Education" value="education" />
                <ActionListItem title="Healthcare" value="healthcare" />
                <ActionListItem title="Food & Beverage" value="food_beverage" />
                <ActionListItem title="Financial Services" value="financial" />
                <ActionListItem title="Others" value="others" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
        </InputRow>
      </InputGroupComponent>
      <Box display="flex" justifyContent="space-between" width="100%">
        <Box />
        <Button variant="primary" marginTop="spacing.3">
          Start Onboarding
        </Button>
      </Box>
    </Box>;
}`,...(q=(z=w.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var W,_,H;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    cardNumber: '12345678',
    expiryDate: '12',
    cvv: '12',
    cardholderName: 'John Doe',
    email: 'invalid-email'
  });
  const [errors, setErrors] = useState({
    cardNumber: true,
    expiryDate: true,
    cvv: true,
    cardholderName: false,
    email: true
  });
  const validateField = (): boolean => {
    const newErrors = {
      cardNumber: false,
      expiryDate: false,
      cvv: false,
      cardholderName: false,
      email: false
    };
    if (!formData.cardNumber) {
      newErrors.cardNumber = true;
    } else if (formData.cardNumber.length < 13) {
      newErrors.cardNumber = true;
    }
    if (!formData.expiryDate) {
      newErrors.expiryDate = true;
    }
    if (!formData.cvv) {
      newErrors.cvv = true;
    } else if (formData.cvv.length !== getPaymentCardCVVLength(detectPaymentCardBrand(formData.cardNumber))) {
      newErrors.cvv = true;
    }
    if (!formData.cardholderName) {
      newErrors.cardholderName = true;
    }
    if (!formData.email) {
      newErrors.email = true;
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = true;
    }
    setErrors(newErrors);
    return Object.values(newErrors).every(error => !error);
  };
  const hasFormErrors = (): boolean => {
    return Object.values(errors).some(error => error);
  };
  const handleInputChange = (name: string, value: string): void => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when typing
    if (errors[name as keyof typeof errors]) setErrors(prev => ({
      ...prev,
      [name]: false
    }));
  };
  const handleSubmit = (): void => {
    if (validateField()) {
      toast.show({
        content: 'Payment information saved successfully!',
        color: 'positive'
      });
    }
  };
  const getValidationState = (fieldName: string): 'error' | 'none' => {
    if (errors[fieldName as keyof typeof errors]) return 'error';
    return 'none';
  };
  return <Box>
      <ToastContainer />

      <InputGroupComponent label="Payment & Billing Information" helpText="Complete all fields to process your payment" validationState={hasFormErrors() ? 'error' : 'none'} errorText={hasFormErrors() ? 'Please fix all errors before submitting' : ''}>
        <InputRow gridTemplateColumns="1fr">
          <TextInput placeholder="Card Number" label="Card Number" value={formData.cardNumber} onChange={({
          value
        }) => handleInputChange('cardNumber', value || '')} validationState={getValidationState('cardNumber')} trailing={getPaymentCardBrandIcon(detectPaymentCardBrand(formData.cardNumber))} format={getPaymentCardNumberFormat(detectPaymentCardBrand(formData.cardNumber))} />
        </InputRow>
        <InputRow gridTemplateColumns="1fr 1fr">
          <TextInput placeholder="Expiry Date" label="Expiry Date" format="##/##" value={formData.expiryDate} onChange={({
          value
        }) => handleInputChange('expiryDate', value || '')} validationState={getValidationState('expiryDate')} />
          <PasswordInput placeholder="CVV" label="CVV" value={formData.cvv} onChange={({
          value
        }) => handleInputChange('cvv', value || '')} validationState={getValidationState('cvv')} maxCharacters={getPaymentCardCVVLength(detectPaymentCardBrand(formData.cardNumber))} />
        </InputRow>
        <InputRow gridTemplateColumns="1fr">
          <TextInput placeholder="Cardholder Name" label="Cardholder Name" value={formData.cardholderName} onChange={({
          value
        }) => handleInputChange('cardholderName', value || '')} validationState={getValidationState('cardholderName')} />
        </InputRow>
        <InputRow gridTemplateColumns="1fr">
          <TextInput placeholder="Email Address" label="Email Address" value={formData.email} onChange={({
          value
        }) => handleInputChange('email', value || '')} validationState={getValidationState('email')} />
        </InputRow>
      </InputGroupComponent>
      <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="spacing.4">
        <Box />
        <Button variant="primary" onClick={handleSubmit}>
          Submit Payment
        </Button>
      </Box>
    </Box>;
}`,...(H=(_=R.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var $,J,U;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const sizes: InputGroupProps['size'][] = ['medium', 'large'];
  const labelPositions: InputGroupProps['labelPosition'][] = ['top', 'left'];
  return <>
      {sizes.map((size, index) => <Box key={index} marginBottom="spacing.8">
          <Heading marginBottom="spacing.3">
            Size: {size} & Label Position: {labelPositions[index]}
          </Heading>
          <Default {...args} size={size} labelPosition={labelPositions[index]} />
        </Box>)}
    </>;
}`,...(U=(J=D.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var Q,K,X;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`args => <InputGroupComponent {...args}>
    <InputRow gridTemplateColumns="1fr">
      <TextInput placeholder="Street Address" label="Street Address" value="123 Main Street" />
    </InputRow>
    <InputRow gridTemplateColumns="2fr 1fr">
      <TextInput placeholder="City" label="City" value="San Francisco" />
      <TextInput placeholder="ZIP Code" label="ZIP Code" value="94102" />
    </InputRow>
    <InputRow gridTemplateColumns="1fr">
      <TextInput placeholder="Country" label="Country" value="United States" />
    </InputRow>
  </InputGroupComponent>`,...(X=(K=j.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var ee,re,ae;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  const [rawFormData, setRawFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  const [cardBrand, setCardBrand] = useState<PaymentCardBrand>('unknown');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const validators = {
    cardNumber: (rawValue: string): string => {
      if (!rawValue.trim()) return 'Card number is required';
      if (rawValue.length < 13) return 'Card number incomplete';
      return '';
    },
    expiryDate: (rawValue: string): string => {
      if (!rawValue.trim()) return 'Expiry date is required';
      if (rawValue.length !== 4) return 'Invalid format';
      const month = rawValue.substring(0, 2);
      const year = rawValue.substring(2, 4);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;
      const expYear = parseInt(year, 10);
      const expMonth = parseInt(month, 10);
      if (expYear < currentYear || expYear === currentYear && expMonth < currentMonth) {
        return 'Card expired';
      }
      return '';
    },
    cvv: (value: string): string => {
      if (!value.trim()) return 'CVV is required';
      const expectedLength = getPaymentCardCVVLength(cardBrand);
      if (value.length !== expectedLength) return \`CVV must be \${expectedLength} digits\`;
      return '';
    },
    cardholderName: (value: string): string => {
      return !value.trim() ? 'Name is required' : '';
    }
  };
  const handleInputChange = (field: string, value: string, rawValue?: string): void => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (rawValue !== undefined) {
      setRawFormData(prev => ({
        ...prev,
        [field]: rawValue
      }));
      if (field === 'cardNumber') {
        setCardBrand(detectPaymentCardBrand(rawValue));
      }
    } else {
      setRawFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };
  const handleBlur = (field: string): void => {
    const rawValue = rawFormData[field as keyof typeof rawFormData];
    const formattedValue = formData[field as keyof typeof formData];
    let error = '';
    if (field === 'cardNumber' || field === 'expiryDate') {
      error = validators[field](rawValue);
    } else {
      error = validators[field as keyof typeof validators](formattedValue);
    }
    if (error) {
      setErrors(prev => ({
        ...prev,
        [field]: error
      }));
    }
  };
  const hasFormErrors = (): boolean => {
    return Object.values(errors).some(error => error !== '');
  };
  const resetForm = (): void => {
    setFormData({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: ''
    });
    setRawFormData({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: ''
    });
    setCardBrand('unknown');
    setErrors({});
  };
  const handleSubmit = (): void => {
    const newErrors = {
      cardNumber: validators.cardNumber(rawFormData.cardNumber),
      expiryDate: validators.expiryDate(rawFormData.expiryDate),
      cvv: validators.cvv(formData.cvv),
      cardholderName: validators.cardholderName(formData.cardholderName)
    };
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (!hasErrors) {
      toast.show({
        content: \`Payment method added! Card ending in \${formData.cardNumber.slice(-4)}\`,
        color: 'positive'
      });
      resetForm();
    } else {
      toast.show({
        content: 'Please fix all errors before submitting',
        color: 'negative'
      });
    }
  };
  return <Box>
      <ToastContainer />

      <InputGroupComponent label="Payment Information" helpText="Enter your card details to add a payment method" validationState={hasFormErrors() ? 'error' : 'none'} errorText={hasFormErrors() ? 'Please fix all errors before submitting' : ''}>
        <InputRow gridTemplateColumns="1fr">
          <TextInput label="Card Number" placeholder="1234 5678 9012 3456" value={formData.cardNumber} format={getPaymentCardNumberFormat(cardBrand)} trailing={getPaymentCardBrandIcon(cardBrand)} onChange={({
          value,
          rawValue
        }) => handleInputChange('cardNumber', value || '', rawValue)} onBlur={() => handleBlur('cardNumber')} validationState={errors.cardNumber ? 'error' : 'none'} />
        </InputRow>

        <InputRow gridTemplateColumns="1fr 1fr">
          <TextInput label="Expiry Date" placeholder="MM/YY" value={formData.expiryDate} format="##/##" onChange={({
          value,
          rawValue
        }) => handleInputChange('expiryDate', value || '', rawValue)} onBlur={() => handleBlur('expiryDate')} validationState={errors.expiryDate ? 'error' : 'none'} />
          <PasswordInput label={\`CVV \${cardBrand === 'amex' ? '(4 digits)' : '(3 digits)'}\`} placeholder={cardBrand === 'amex' ? '1234' : '123'} maxCharacters={getPaymentCardCVVLength(cardBrand)} value={formData.cvv} onChange={({
          value
        }) => handleInputChange('cvv', value || '')} onBlur={() => handleBlur('cvv')} validationState={errors.cvv ? 'error' : 'none'} />
        </InputRow>

        <InputRow gridTemplateColumns="1fr">
          <TextInput label="Cardholder Name" placeholder="John Doe" value={formData.cardholderName} onChange={({
          value
        }) => handleInputChange('cardholderName', value || '')} onBlur={() => handleBlur('cardholderName')} validationState={errors.cardholderName ? 'error' : 'none'} />
        </InputRow>
      </InputGroupComponent>

      <Box display="flex" justifyContent="flex-end" alignItems="center" marginTop="spacing.4">
        <Button variant="primary" onClick={handleSubmit}>
          Add Payment Method
        </Button>
      </Box>
    </Box>;
}`,...(ae=(re=P.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const Re=["Default","Detailed","ResponsiveForm","WithValidation","AllVariants","Disabled","InputGroupWithFormat"],Le=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:D,Default:v,Detailed:T,Disabled:j,InputGroupWithFormat:P,ResponsiveForm:w,WithValidation:R,__namedExportsOrder:Re,default:ye},Symbol.toStringTag,{value:"Module"}));export{Le as i};
