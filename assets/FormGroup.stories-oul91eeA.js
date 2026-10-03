import{B as n,j as e,H as p,r as me,jx as pe,a9 as m,jJ as ue,n as P,ac as ge,ip as be,T as N,at as fe,au as xe,aS as ye,aq as ve,ar as Be,ad as E,a5 as De,jC as Se}from"./iframe-C1qQ09LF.js";import{S as we}from"./StoryPageWrapper-CS0_5maI.js";import{S as Ce}from"./Sandbox.web-B2xP21Qp.js";import{b as Te}from"./storybookArgTypes-DFfQV31s.js";import{u as he}from"./useToast.web-DG48GqLd.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const ke=`import React from 'react';
import {
  Box,
  Heading,
  TextInput,
  PasswordInput,
  Button,
  ArrowRightIcon,
  Alert,
} from '@greenloom/loom/components';

const FormExample = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [alert, setAlert] = React.useState<{
    type: 'positive' | 'negative' | null;
    title: string;
    description: string;
  } | null>(null);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setAlert({
        type: 'positive',
        title: 'Success!',
        description: 'Your form has been submitted successfully.',
      });
    } else {
      setAlert({
        type: 'negative',
        title: 'Form Submission Failed',
        description: 'Please fix the errors in the form and try again.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box padding="spacing.4" display="flex" flexDirection="column" gap="spacing.4">
        <Box>
          <Heading size="large">Welcome to Blade Example</Heading>
          <Heading size="medium" weight="regular">
            This is an example form built with Blade
          </Heading>
        </Box>

        {alert && (
          <Alert
            color={alert.type}
            title={alert.title}
            description={alert.description}
            emphasis="subtle"
            isDismissible
            onDismiss={() => setAlert(null)}
          />
        )}

        <Box display="flex" flexDirection="column" gap="spacing.4">
          <TextInput
            isRequired
            label="Email"
            name="email"
            value={formData.email}
            onChange={({ value }) => handleChange('email', value)}
            validationState={errors.email ? 'error' : 'none'}
            errorText={errors.email}
          />
          <PasswordInput
            isRequired
            label="Password"
            name="password"
            value={formData.password}
            onChange={({ value }) => handleChange('password', value)}
            helpText="Should be more than 8 characters"
            validationState={errors.password ? 'error' : 'none'}
            errorText={errors.password}
          />
          <Button isFullWidth type="submit" icon={ArrowRightIcon} iconPosition="right">
            Sign In
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default FormExample;

`,We={title:"Patterns/FormGroup",component:n,args:{},tags:["autodocs"],argTypes:Te(),parameters:{docs:{page:()=>e.jsxs(we,{componentDescription:"FormGroup is a pattern that provides a consistent way to build forms using Loom UI components.",componentName:"FormGroup",children:[e.jsx(p,{size:"large",children:"Usage"}),e.jsx(Ce,{editorHeight:500,children:ke})]})}}},Ie=({...u})=>{const[r,i]=me.useState({email:"",message:""}),t=he(),s=o=>{o.preventDefault(),t.show({content:"Thanks for reaching out! Your message has been sent.",color:"positive",type:"informational"}),i({email:"",message:""})};return e.jsx("form",{onSubmit:s,children:e.jsxs(n,{padding:"spacing.6",display:"flex",flexDirection:"column",gap:"spacing.7",...u,children:[e.jsx(pe,{}),e.jsxs(n,{children:[e.jsx(p,{size:"large",children:"Contact Us"}),e.jsx(p,{size:"medium",weight:"regular",children:"We'd love to hear from you"})]}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(m,{label:"Email",name:"email",value:r.email,onChange:({value:o})=>i({...r,email:o??""}),placeholder:"Enter your email"}),e.jsx(ue,{label:"Message",name:"message",value:r.message,onChange:({value:o})=>i({...r,message:o??""}),numberOfLines:4,placeholder:"Enter your message"}),e.jsx(P,{isFullWidth:!0,type:"submit",icon:ge,iconPosition:"right",children:"Send Message"})]})]})})},k=Ie.bind({}),A=u=>{const{errorState:r="grouped",initialErrors:i=!1}=u,[t,s]=E.useState({email:i?"invalid-email":"",password:i?"short":""}),[o,l]=E.useState(i?{email:"Invalid email format",password:"Password must be at least 8 characters"}:{}),[g,h]=E.useState(i&&r==="grouped"?{type:"negative",title:"Form Submission Failed",description:"Please fix the errors in the form and try again."}:null),T=(a,F)=>{s(f=>({...f,[a]:F??""})),o[a]&&l(f=>({...f,[a]:""}))},d=()=>{const a={};return t.email?/\S+@\S+\.\S+/.test(t.email)||(a.email="Invalid email format"):a.email="Email is required",t.password?t.password.length<8&&(a.password="Password must be at least 8 characters"):a.password="Password is required",l(a),Object.keys(a).length===0},L=a=>{a.preventDefault(),d()?h({type:"positive",title:"Success!",description:"Your form has been submitted successfully."}):h({type:"negative",title:"Form Submission Failed",description:"Please fix the errors in the form and try again."})};return e.jsx("form",{onSubmit:L,children:e.jsxs(n,{padding:"spacing.4",display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(n,{children:[e.jsx(p,{size:"large",children:"Welcome to Blade Example"}),e.jsx(p,{size:"medium",weight:"regular",children:"This is an example form built with Loom UI"})]}),r==="grouped"&&g&&e.jsx(De,{color:g.type,title:g.title,description:g.description,emphasis:"subtle",isDismissible:!0,onDismiss:()=>h(null),isFullWidth:!0}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(m,{necessityIndicator:"required",label:"Email",name:"email",value:t.email,onChange:({value:a})=>T("email",a),validationState:o.email?"error":"none",errorText:o.email,placeholder:"Enter your email"}),e.jsx(Se,{necessityIndicator:"required",label:"Password",name:"password",value:t.password,onChange:({value:a})=>T("password",a),helpText:"Should be more than 8 characters",validationState:o.password?"error":"none",errorText:o.password,placeholder:"Enter your password"}),e.jsx(P,{isFullWidth:!0,type:"submit",icon:ge,iconPosition:"right",children:"Sign In"})]})]})})},I=A.bind({}),c=(u,r,i)=>u==="comfortable"?i:r,Pe=[{title:"Mumbai",value:"mumbai"},{title:"Pune",value:"pune"},{title:"Bangalore",value:"bangalore"},{title:"Mysore",value:"mysore"}],b=u=>{const{sectionsLayout:r="vertical",labelPosition:i="top",density:t="normal",longForm:s=!1}=u,o={bankName:"",branchName:"",branchNumber:"",addressLine1:"",addressLine2:"",pinCode:"",city:"",additionalInformation:""},[l,g]=me.useState(o),h=be(),T=he(),d=(a,F)=>{g(f=>({...f,[a]:F}))},L=a=>{a.preventDefault(),T.show({content:"Thanks for reaching out! Your form has been submitted successfully.",color:"positive",type:"informational"}),g(o)};return e.jsx("form",{onSubmit:L,children:e.jsxs(n,{display:"flex",flexDirection:"column",gap:c(t,"spacing.8","spacing.9"),paddingBottom:s?"spacing.11":"spacing.0",children:[e.jsx(pe,{}),e.jsxs(n,{children:[e.jsx(p,{size:"large",weight:"semibold",children:"Bank Branch Form"}),e.jsx(N,{weight:"regular",color:"surface.text.gray.muted",children:"Fill the following information to add a new branch of the bank"})]}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:c(t,"spacing.8","spacing.9"),children:[e.jsxs(n,{display:"flex",flexDirection:r==="horizontal"?"row":"column",gap:c(t,"spacing.5","spacing.6"),children:[e.jsxs(n,{children:[e.jsx(p,{size:"medium",children:"General Details"}),e.jsx(N,{weight:"regular",color:"surface.text.gray.muted",children:"This is general subtext for a section"})]}),e.jsxs(n,{width:"100%",display:"flex",flexDirection:"column",gap:c(t,"spacing.5","spacing.6"),children:[e.jsx(m,{label:"Bank Name",name:"bankName",value:l.bankName,onChange:({value:a})=>d("bankName",a??""),labelPosition:i,helpText:"Full name of the registered national bank",placeholder:"State Bank of India"}),e.jsxs(n,{width:"100%",display:"grid",gridTemplateColumns:h?"1fr":"1fr 1fr",gap:c(t,"spacing.5","spacing.6"),children:[e.jsx(m,{label:"Branch Name",name:"branchName",value:l.branchName,onChange:({value:a})=>d("branchName",a??""),labelPosition:i,helpText:"Generally, it is location of your branch",placeholder:"A1 Block, Janakpuri"}),e.jsx(m,{label:"Branch Number",name:"branchNumber",value:l.branchNumber,onChange:({value:a})=>d("branchNumber",a??""),labelPosition:i,helpText:"The 5-digit number, you can find it on your bank's cheque book",placeholder:"SBIN0011315"})]})]})]}),e.jsxs(n,{display:"flex",flexDirection:r==="horizontal"?"row":"column",gap:c(t,"spacing.5","spacing.6"),children:[e.jsxs(n,{children:[e.jsx(p,{size:"medium",children:"Address Details"}),e.jsx(N,{weight:"regular",color:"surface.text.gray.muted",children:"This is general subtext for a section"})]}),e.jsxs(n,{width:"100%",display:"flex",flexDirection:"column",gap:c(t,"spacing.5","spacing.6"),children:[e.jsx(m,{label:"Address Line 1",name:"addressLine1",value:l.addressLine1,onChange:({value:a})=>d("addressLine1",a??""),labelPosition:i,placeholder:"A1-240, Titan Towers, State Bank of India"}),e.jsx(m,{label:"Address Line 2",name:"addressLine2",value:l.addressLine2,onChange:({value:a})=>d("addressLine2",a??""),labelPosition:i,placeholder:"A1 Janakpuri, Opposite Community Hall"}),e.jsxs(n,{width:"100%",display:"grid",gridTemplateColumns:h?"1fr":"1fr 1fr",gap:c(t,"spacing.5","spacing.6"),children:[e.jsx(m,{label:"Pin Code",name:"pinCode",value:l.pinCode,onChange:({value:a})=>d("pinCode",a??""),labelPosition:i,placeholder:"110018"}),e.jsxs(fe,{selectionType:"single",children:[e.jsx(xe,{label:"City",placeholder:"Select City",name:"action",onChange:({values:a})=>d("city",a[0]??""),labelPosition:i}),e.jsx(ye,{children:e.jsx(ve,{children:Pe.map(a=>e.jsx(Be,{title:a.title,value:a.value},a.value))})})]})]})]})]}),s&&e.jsx(ue,{label:"Additional Information",name:"additionalInformation",value:l.additionalInformation,onChange:({value:a})=>d("additionalInformation",a??""),numberOfLines:15})]}),e.jsxs(n,{display:"flex",gap:"spacing.4",justifyContent:"flex-end",backgroundColor:s?"surface.background.gray.moderate":"transparent",padding:s?"spacing.4":"spacing.0",position:s?"fixed":"static",bottom:"spacing.0",right:"spacing.4",width:"100%",borderColor:"surface.border.gray.muted",borderWidth:s?"thin":"none",children:[e.jsx(P,{variant:"tertiary",color:"primary",size:"medium",children:"Discard"}),e.jsx(P,{type:"submit",variant:"primary",color:"primary",size:"medium",children:"Save"})]})]})})},x=b.bind({});x.args={sectionsLayout:"horizontal"};const y=b.bind({});y.args={labelPosition:"top"};const v=b.bind({});v.args={labelPosition:"left"};const B=b.bind({});B.args={density:"normal"};const D=b.bind({});D.args={density:"comfortable"};const S=A.bind({});S.args={errorState:"individual",initialErrors:!0};const w=A.bind({});w.args={errorState:"grouped",initialErrors:!0};const C=b.bind({});C.args={longForm:!0};var j,H,z;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`({
  ...args
}): JSX.Element => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const toast = useToast();
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    toast.show({
      content: \`Thanks for reaching out! Your message has been sent.\`,
      color: 'positive',
      type: 'informational'
    });
    setFormData({
      email: '',
      message: ''
    });
  };
  return <form onSubmit={handleSubmit}>
      <Box padding="spacing.6" display="flex" flexDirection="column" gap="spacing.7" {...args}>
        <ToastContainer />
        <Box>
          <Heading size="large">Contact Us</Heading>
          <Heading size="medium" weight="regular">
            We'd love to hear from you
          </Heading>
        </Box>

        <Box display="flex" flexDirection="column" gap="spacing.4">
          <TextInput label="Email" name="email" value={formData.email} onChange={({
          value
        }) => setFormData({
          ...formData,
          email: value ?? ''
        })} placeholder="Enter your email" />

          <TextArea label="Message" name="message" value={formData.message} onChange={({
          value
        }) => setFormData({
          ...formData,
          message: value ?? ''
        })} numberOfLines={4} placeholder="Enter your message" />

          <Button isFullWidth type="submit" icon={ArrowRightIcon} iconPosition="right">
            Send Message
          </Button>
        </Box>
      </Box>
    </form>;
}`,...(z=(H=k.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var O,W,R;I.parameters={...I.parameters,docs:{...(O=I.parameters)==null?void 0:O.docs,source:{originalSource:`(props): JSX.Element => {
  const {
    errorState = 'grouped',
    initialErrors = false
  } = props;
  const [formData, setFormData] = React.useState({
    email: initialErrors ? 'invalid-email' : '',
    password: initialErrors ? 'short' : ''
  });
  const [errors, setErrors] = React.useState<Record<string, string>>(initialErrors ? {
    email: 'Invalid email format',
    password: 'Password must be at least 8 characters'
  } : {});
  const [alert, setAlert] = React.useState<{
    type: 'positive' | 'negative';
    title: string;
    description: string;
  } | null>(initialErrors && errorState === 'grouped' ? {
    type: 'negative',
    title: 'Form Submission Failed',
    description: 'Please fix the errors in the form and try again.'
  } : null);
  const handleChange = (name: string, value: string | undefined): void => {
    setFormData(prev => ({
      ...prev,
      [name]: value ?? ''
    }));
    // Clear error when typing
    if (errors[name]) setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (validateForm()) {
      setAlert({
        type: 'positive',
        title: 'Success!',
        description: 'Your form has been submitted successfully.'
      });
    } else {
      setAlert({
        type: 'negative',
        title: 'Form Submission Failed',
        description: 'Please fix the errors in the form and try again.'
      });
    }
  };
  return <form onSubmit={handleSubmit}>
      <Box padding="spacing.4" display="flex" flexDirection="column" gap="spacing.4">
        <Box>
          <Heading size="large">Welcome to Blade Example</Heading>
          <Heading size="medium" weight="regular">
            This is an example form built with Loom UI
          </Heading>
        </Box>

        {errorState === 'grouped' && alert && <Alert color={alert.type} title={alert.title} description={alert.description} emphasis="subtle" isDismissible onDismiss={() => setAlert(null)} isFullWidth />}

        <Box display="flex" flexDirection="column" gap="spacing.4">
          <TextInput necessityIndicator="required" label="Email" name="email" value={formData.email} onChange={({
          value
        }) => handleChange('email', value)} validationState={errors.email ? 'error' : 'none'} errorText={errors.email} placeholder="Enter your email" />
          <PasswordInput necessityIndicator="required" label="Password" name="password" value={formData.password} onChange={({
          value
        }) => handleChange('password', value)} helpText="Should be more than 8 characters" validationState={errors.password ? 'error' : 'none'} errorText={errors.password} placeholder="Enter your password" />
          <Button isFullWidth type="submit" icon={ArrowRightIcon} iconPosition="right">
            Sign In
          </Button>
        </Box>
      </Box>
    </form>;
}`,...(R=(W=I.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var M,q,G;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`(props: LayoutProps): JSX.Element => {
  const {
    sectionsLayout = 'vertical',
    labelPosition = 'top',
    density = 'normal',
    longForm = false
  } = props;
  const initialBankData = {
    bankName: '',
    branchName: '',
    branchNumber: '',
    addressLine1: '',
    addressLine2: '',
    pinCode: '',
    city: '',
    additionalInformation: ''
  };
  const [bankData, setBankData] = useState(initialBankData);
  const isMobile = useIsMobile();
  const toast = useToast();
  const handleChange = (field: string, value: string): void => {
    setBankData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    toast.show({
      content: 'Thanks for reaching out! Your form has been submitted successfully.',
      color: 'positive',
      type: 'informational'
    });
    setBankData(initialBankData);
  };
  return <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.8', 'spacing.9')} paddingBottom={longForm ? 'spacing.11' : 'spacing.0'}>
        <ToastContainer />
        <Box>
          <Heading size="large" weight="semibold">
            Bank Branch Form
          </Heading>
          <Text weight="regular" color="surface.text.gray.muted">
            Fill the following information to add a new branch of the bank
          </Text>
        </Box>

        <Box display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.8', 'spacing.9')}>
          {/* General Details Section */}
          <Box display="flex" flexDirection={sectionsLayout === 'horizontal' ? 'row' : 'column'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
            <Box>
              <Heading size="medium">General Details</Heading>
              <Text weight="regular" color="surface.text.gray.muted">
                This is general subtext for a section
              </Text>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
              <TextInput label="Bank Name" name="bankName" value={bankData.bankName} onChange={({
              value
            }) => handleChange('bankName', value ?? '')} labelPosition={labelPosition} helpText="Full name of the registered national bank" placeholder="State Bank of India" />
              <Box width="100%" display="grid" gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
                <TextInput label="Branch Name" name="branchName" value={bankData.branchName} onChange={({
                value
              }) => handleChange('branchName', value ?? '')} labelPosition={labelPosition} helpText="Generally, it is location of your branch" placeholder="A1 Block, Janakpuri" />

                <TextInput label="Branch Number" name="branchNumber" value={bankData.branchNumber} onChange={({
                value
              }) => handleChange('branchNumber', value ?? '')} labelPosition={labelPosition} helpText="The 5-digit number, you can find it on your bank's cheque book" placeholder="SBIN0011315" />
              </Box>
            </Box>
          </Box>

          {/* Address Details Section */}
          <Box display="flex" flexDirection={sectionsLayout === 'horizontal' ? 'row' : 'column'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
            <Box>
              <Heading size="medium">Address Details</Heading>
              <Text weight="regular" color="surface.text.gray.muted">
                This is general subtext for a section
              </Text>
            </Box>
            <Box width="100%" display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
              <TextInput label="Address Line 1" name="addressLine1" value={bankData.addressLine1} onChange={({
              value
            }) => handleChange('addressLine1', value ?? '')} labelPosition={labelPosition} placeholder="A1-240, Titan Towers, State Bank of India" />

              <TextInput label="Address Line 2" name="addressLine2" value={bankData.addressLine2} onChange={({
              value
            }) => handleChange('addressLine2', value ?? '')} labelPosition={labelPosition} placeholder="A1 Janakpuri, Opposite Community Hall" />

              <Box width="100%" display="grid" gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
                <TextInput label="Pin Code" name="pinCode" value={bankData.pinCode} onChange={({
                value
              }) => handleChange('pinCode', value ?? '')} labelPosition={labelPosition} placeholder="110018" />

                <Dropdown selectionType="single">
                  <SelectInput label="City" placeholder="Select City" name="action" onChange={({
                  values
                }) => handleChange('city', values[0] ?? '')} labelPosition={labelPosition} />
                  <DropdownOverlay>
                    <ActionList>
                      {CITY_OPTIONS.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>
              </Box>
            </Box>
          </Box>
          {longForm && <TextArea label="Additional Information" name="additionalInformation" value={bankData.additionalInformation} onChange={({
          value
        }) => handleChange('additionalInformation', value ?? '')}
        // @ts-expect-error - Using higher numberOfLines for scrolling behavior
        numberOfLines={15} />}
        </Box>

        <Box display="flex" gap="spacing.4" justifyContent="flex-end" backgroundColor={longForm ? 'surface.background.gray.moderate' : 'transparent'} padding={longForm ? 'spacing.4' : 'spacing.0'} position={longForm ? 'fixed' : 'static'} bottom="spacing.0" right="spacing.4" width="100%" borderColor="surface.border.gray.muted" borderWidth={longForm ? 'thin' : 'none'}>
          <Button variant="tertiary" color="primary" size="medium">
            Discard
          </Button>
          <Button type="submit" variant="primary" color="primary" size="medium">
            Save
          </Button>
        </Box>
      </Box>
    </form>;
}`,...(G=(q=x.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,Y,U;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`(props: LayoutProps): JSX.Element => {
  const {
    sectionsLayout = 'vertical',
    labelPosition = 'top',
    density = 'normal',
    longForm = false
  } = props;
  const initialBankData = {
    bankName: '',
    branchName: '',
    branchNumber: '',
    addressLine1: '',
    addressLine2: '',
    pinCode: '',
    city: '',
    additionalInformation: ''
  };
  const [bankData, setBankData] = useState(initialBankData);
  const isMobile = useIsMobile();
  const toast = useToast();
  const handleChange = (field: string, value: string): void => {
    setBankData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    toast.show({
      content: 'Thanks for reaching out! Your form has been submitted successfully.',
      color: 'positive',
      type: 'informational'
    });
    setBankData(initialBankData);
  };
  return <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.8', 'spacing.9')} paddingBottom={longForm ? 'spacing.11' : 'spacing.0'}>
        <ToastContainer />
        <Box>
          <Heading size="large" weight="semibold">
            Bank Branch Form
          </Heading>
          <Text weight="regular" color="surface.text.gray.muted">
            Fill the following information to add a new branch of the bank
          </Text>
        </Box>

        <Box display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.8', 'spacing.9')}>
          {/* General Details Section */}
          <Box display="flex" flexDirection={sectionsLayout === 'horizontal' ? 'row' : 'column'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
            <Box>
              <Heading size="medium">General Details</Heading>
              <Text weight="regular" color="surface.text.gray.muted">
                This is general subtext for a section
              </Text>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
              <TextInput label="Bank Name" name="bankName" value={bankData.bankName} onChange={({
              value
            }) => handleChange('bankName', value ?? '')} labelPosition={labelPosition} helpText="Full name of the registered national bank" placeholder="State Bank of India" />
              <Box width="100%" display="grid" gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
                <TextInput label="Branch Name" name="branchName" value={bankData.branchName} onChange={({
                value
              }) => handleChange('branchName', value ?? '')} labelPosition={labelPosition} helpText="Generally, it is location of your branch" placeholder="A1 Block, Janakpuri" />

                <TextInput label="Branch Number" name="branchNumber" value={bankData.branchNumber} onChange={({
                value
              }) => handleChange('branchNumber', value ?? '')} labelPosition={labelPosition} helpText="The 5-digit number, you can find it on your bank's cheque book" placeholder="SBIN0011315" />
              </Box>
            </Box>
          </Box>

          {/* Address Details Section */}
          <Box display="flex" flexDirection={sectionsLayout === 'horizontal' ? 'row' : 'column'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
            <Box>
              <Heading size="medium">Address Details</Heading>
              <Text weight="regular" color="surface.text.gray.muted">
                This is general subtext for a section
              </Text>
            </Box>
            <Box width="100%" display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
              <TextInput label="Address Line 1" name="addressLine1" value={bankData.addressLine1} onChange={({
              value
            }) => handleChange('addressLine1', value ?? '')} labelPosition={labelPosition} placeholder="A1-240, Titan Towers, State Bank of India" />

              <TextInput label="Address Line 2" name="addressLine2" value={bankData.addressLine2} onChange={({
              value
            }) => handleChange('addressLine2', value ?? '')} labelPosition={labelPosition} placeholder="A1 Janakpuri, Opposite Community Hall" />

              <Box width="100%" display="grid" gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
                <TextInput label="Pin Code" name="pinCode" value={bankData.pinCode} onChange={({
                value
              }) => handleChange('pinCode', value ?? '')} labelPosition={labelPosition} placeholder="110018" />

                <Dropdown selectionType="single">
                  <SelectInput label="City" placeholder="Select City" name="action" onChange={({
                  values
                }) => handleChange('city', values[0] ?? '')} labelPosition={labelPosition} />
                  <DropdownOverlay>
                    <ActionList>
                      {CITY_OPTIONS.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>
              </Box>
            </Box>
          </Box>
          {longForm && <TextArea label="Additional Information" name="additionalInformation" value={bankData.additionalInformation} onChange={({
          value
        }) => handleChange('additionalInformation', value ?? '')}
        // @ts-expect-error - Using higher numberOfLines for scrolling behavior
        numberOfLines={15} />}
        </Box>

        <Box display="flex" gap="spacing.4" justifyContent="flex-end" backgroundColor={longForm ? 'surface.background.gray.moderate' : 'transparent'} padding={longForm ? 'spacing.4' : 'spacing.0'} position={longForm ? 'fixed' : 'static'} bottom="spacing.0" right="spacing.4" width="100%" borderColor="surface.border.gray.muted" borderWidth={longForm ? 'thin' : 'none'}>
          <Button variant="tertiary" color="primary" size="medium">
            Discard
          </Button>
          <Button type="submit" variant="primary" color="primary" size="medium">
            Save
          </Button>
        </Box>
      </Box>
    </form>;
}`,...(U=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var X,_,V;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`(props: LayoutProps): JSX.Element => {
  const {
    sectionsLayout = 'vertical',
    labelPosition = 'top',
    density = 'normal',
    longForm = false
  } = props;
  const initialBankData = {
    bankName: '',
    branchName: '',
    branchNumber: '',
    addressLine1: '',
    addressLine2: '',
    pinCode: '',
    city: '',
    additionalInformation: ''
  };
  const [bankData, setBankData] = useState(initialBankData);
  const isMobile = useIsMobile();
  const toast = useToast();
  const handleChange = (field: string, value: string): void => {
    setBankData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    toast.show({
      content: 'Thanks for reaching out! Your form has been submitted successfully.',
      color: 'positive',
      type: 'informational'
    });
    setBankData(initialBankData);
  };
  return <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.8', 'spacing.9')} paddingBottom={longForm ? 'spacing.11' : 'spacing.0'}>
        <ToastContainer />
        <Box>
          <Heading size="large" weight="semibold">
            Bank Branch Form
          </Heading>
          <Text weight="regular" color="surface.text.gray.muted">
            Fill the following information to add a new branch of the bank
          </Text>
        </Box>

        <Box display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.8', 'spacing.9')}>
          {/* General Details Section */}
          <Box display="flex" flexDirection={sectionsLayout === 'horizontal' ? 'row' : 'column'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
            <Box>
              <Heading size="medium">General Details</Heading>
              <Text weight="regular" color="surface.text.gray.muted">
                This is general subtext for a section
              </Text>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
              <TextInput label="Bank Name" name="bankName" value={bankData.bankName} onChange={({
              value
            }) => handleChange('bankName', value ?? '')} labelPosition={labelPosition} helpText="Full name of the registered national bank" placeholder="State Bank of India" />
              <Box width="100%" display="grid" gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
                <TextInput label="Branch Name" name="branchName" value={bankData.branchName} onChange={({
                value
              }) => handleChange('branchName', value ?? '')} labelPosition={labelPosition} helpText="Generally, it is location of your branch" placeholder="A1 Block, Janakpuri" />

                <TextInput label="Branch Number" name="branchNumber" value={bankData.branchNumber} onChange={({
                value
              }) => handleChange('branchNumber', value ?? '')} labelPosition={labelPosition} helpText="The 5-digit number, you can find it on your bank's cheque book" placeholder="SBIN0011315" />
              </Box>
            </Box>
          </Box>

          {/* Address Details Section */}
          <Box display="flex" flexDirection={sectionsLayout === 'horizontal' ? 'row' : 'column'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
            <Box>
              <Heading size="medium">Address Details</Heading>
              <Text weight="regular" color="surface.text.gray.muted">
                This is general subtext for a section
              </Text>
            </Box>
            <Box width="100%" display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
              <TextInput label="Address Line 1" name="addressLine1" value={bankData.addressLine1} onChange={({
              value
            }) => handleChange('addressLine1', value ?? '')} labelPosition={labelPosition} placeholder="A1-240, Titan Towers, State Bank of India" />

              <TextInput label="Address Line 2" name="addressLine2" value={bankData.addressLine2} onChange={({
              value
            }) => handleChange('addressLine2', value ?? '')} labelPosition={labelPosition} placeholder="A1 Janakpuri, Opposite Community Hall" />

              <Box width="100%" display="grid" gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
                <TextInput label="Pin Code" name="pinCode" value={bankData.pinCode} onChange={({
                value
              }) => handleChange('pinCode', value ?? '')} labelPosition={labelPosition} placeholder="110018" />

                <Dropdown selectionType="single">
                  <SelectInput label="City" placeholder="Select City" name="action" onChange={({
                  values
                }) => handleChange('city', values[0] ?? '')} labelPosition={labelPosition} />
                  <DropdownOverlay>
                    <ActionList>
                      {CITY_OPTIONS.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>
              </Box>
            </Box>
          </Box>
          {longForm && <TextArea label="Additional Information" name="additionalInformation" value={bankData.additionalInformation} onChange={({
          value
        }) => handleChange('additionalInformation', value ?? '')}
        // @ts-expect-error - Using higher numberOfLines for scrolling behavior
        numberOfLines={15} />}
        </Box>

        <Box display="flex" gap="spacing.4" justifyContent="flex-end" backgroundColor={longForm ? 'surface.background.gray.moderate' : 'transparent'} padding={longForm ? 'spacing.4' : 'spacing.0'} position={longForm ? 'fixed' : 'static'} bottom="spacing.0" right="spacing.4" width="100%" borderColor="surface.border.gray.muted" borderWidth={longForm ? 'thin' : 'none'}>
          <Button variant="tertiary" color="primary" size="medium">
            Discard
          </Button>
          <Button type="submit" variant="primary" color="primary" size="medium">
            Save
          </Button>
        </Box>
      </Box>
    </form>;
}`,...(V=(_=v.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var K,Q,Z;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`(props: LayoutProps): JSX.Element => {
  const {
    sectionsLayout = 'vertical',
    labelPosition = 'top',
    density = 'normal',
    longForm = false
  } = props;
  const initialBankData = {
    bankName: '',
    branchName: '',
    branchNumber: '',
    addressLine1: '',
    addressLine2: '',
    pinCode: '',
    city: '',
    additionalInformation: ''
  };
  const [bankData, setBankData] = useState(initialBankData);
  const isMobile = useIsMobile();
  const toast = useToast();
  const handleChange = (field: string, value: string): void => {
    setBankData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    toast.show({
      content: 'Thanks for reaching out! Your form has been submitted successfully.',
      color: 'positive',
      type: 'informational'
    });
    setBankData(initialBankData);
  };
  return <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.8', 'spacing.9')} paddingBottom={longForm ? 'spacing.11' : 'spacing.0'}>
        <ToastContainer />
        <Box>
          <Heading size="large" weight="semibold">
            Bank Branch Form
          </Heading>
          <Text weight="regular" color="surface.text.gray.muted">
            Fill the following information to add a new branch of the bank
          </Text>
        </Box>

        <Box display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.8', 'spacing.9')}>
          {/* General Details Section */}
          <Box display="flex" flexDirection={sectionsLayout === 'horizontal' ? 'row' : 'column'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
            <Box>
              <Heading size="medium">General Details</Heading>
              <Text weight="regular" color="surface.text.gray.muted">
                This is general subtext for a section
              </Text>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
              <TextInput label="Bank Name" name="bankName" value={bankData.bankName} onChange={({
              value
            }) => handleChange('bankName', value ?? '')} labelPosition={labelPosition} helpText="Full name of the registered national bank" placeholder="State Bank of India" />
              <Box width="100%" display="grid" gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
                <TextInput label="Branch Name" name="branchName" value={bankData.branchName} onChange={({
                value
              }) => handleChange('branchName', value ?? '')} labelPosition={labelPosition} helpText="Generally, it is location of your branch" placeholder="A1 Block, Janakpuri" />

                <TextInput label="Branch Number" name="branchNumber" value={bankData.branchNumber} onChange={({
                value
              }) => handleChange('branchNumber', value ?? '')} labelPosition={labelPosition} helpText="The 5-digit number, you can find it on your bank's cheque book" placeholder="SBIN0011315" />
              </Box>
            </Box>
          </Box>

          {/* Address Details Section */}
          <Box display="flex" flexDirection={sectionsLayout === 'horizontal' ? 'row' : 'column'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
            <Box>
              <Heading size="medium">Address Details</Heading>
              <Text weight="regular" color="surface.text.gray.muted">
                This is general subtext for a section
              </Text>
            </Box>
            <Box width="100%" display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
              <TextInput label="Address Line 1" name="addressLine1" value={bankData.addressLine1} onChange={({
              value
            }) => handleChange('addressLine1', value ?? '')} labelPosition={labelPosition} placeholder="A1-240, Titan Towers, State Bank of India" />

              <TextInput label="Address Line 2" name="addressLine2" value={bankData.addressLine2} onChange={({
              value
            }) => handleChange('addressLine2', value ?? '')} labelPosition={labelPosition} placeholder="A1 Janakpuri, Opposite Community Hall" />

              <Box width="100%" display="grid" gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
                <TextInput label="Pin Code" name="pinCode" value={bankData.pinCode} onChange={({
                value
              }) => handleChange('pinCode', value ?? '')} labelPosition={labelPosition} placeholder="110018" />

                <Dropdown selectionType="single">
                  <SelectInput label="City" placeholder="Select City" name="action" onChange={({
                  values
                }) => handleChange('city', values[0] ?? '')} labelPosition={labelPosition} />
                  <DropdownOverlay>
                    <ActionList>
                      {CITY_OPTIONS.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>
              </Box>
            </Box>
          </Box>
          {longForm && <TextArea label="Additional Information" name="additionalInformation" value={bankData.additionalInformation} onChange={({
          value
        }) => handleChange('additionalInformation', value ?? '')}
        // @ts-expect-error - Using higher numberOfLines for scrolling behavior
        numberOfLines={15} />}
        </Box>

        <Box display="flex" gap="spacing.4" justifyContent="flex-end" backgroundColor={longForm ? 'surface.background.gray.moderate' : 'transparent'} padding={longForm ? 'spacing.4' : 'spacing.0'} position={longForm ? 'fixed' : 'static'} bottom="spacing.0" right="spacing.4" width="100%" borderColor="surface.border.gray.muted" borderWidth={longForm ? 'thin' : 'none'}>
          <Button variant="tertiary" color="primary" size="medium">
            Discard
          </Button>
          <Button type="submit" variant="primary" color="primary" size="medium">
            Save
          </Button>
        </Box>
      </Box>
    </form>;
}`,...(Z=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,ee,ae;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`(props: LayoutProps): JSX.Element => {
  const {
    sectionsLayout = 'vertical',
    labelPosition = 'top',
    density = 'normal',
    longForm = false
  } = props;
  const initialBankData = {
    bankName: '',
    branchName: '',
    branchNumber: '',
    addressLine1: '',
    addressLine2: '',
    pinCode: '',
    city: '',
    additionalInformation: ''
  };
  const [bankData, setBankData] = useState(initialBankData);
  const isMobile = useIsMobile();
  const toast = useToast();
  const handleChange = (field: string, value: string): void => {
    setBankData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    toast.show({
      content: 'Thanks for reaching out! Your form has been submitted successfully.',
      color: 'positive',
      type: 'informational'
    });
    setBankData(initialBankData);
  };
  return <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.8', 'spacing.9')} paddingBottom={longForm ? 'spacing.11' : 'spacing.0'}>
        <ToastContainer />
        <Box>
          <Heading size="large" weight="semibold">
            Bank Branch Form
          </Heading>
          <Text weight="regular" color="surface.text.gray.muted">
            Fill the following information to add a new branch of the bank
          </Text>
        </Box>

        <Box display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.8', 'spacing.9')}>
          {/* General Details Section */}
          <Box display="flex" flexDirection={sectionsLayout === 'horizontal' ? 'row' : 'column'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
            <Box>
              <Heading size="medium">General Details</Heading>
              <Text weight="regular" color="surface.text.gray.muted">
                This is general subtext for a section
              </Text>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
              <TextInput label="Bank Name" name="bankName" value={bankData.bankName} onChange={({
              value
            }) => handleChange('bankName', value ?? '')} labelPosition={labelPosition} helpText="Full name of the registered national bank" placeholder="State Bank of India" />
              <Box width="100%" display="grid" gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
                <TextInput label="Branch Name" name="branchName" value={bankData.branchName} onChange={({
                value
              }) => handleChange('branchName', value ?? '')} labelPosition={labelPosition} helpText="Generally, it is location of your branch" placeholder="A1 Block, Janakpuri" />

                <TextInput label="Branch Number" name="branchNumber" value={bankData.branchNumber} onChange={({
                value
              }) => handleChange('branchNumber', value ?? '')} labelPosition={labelPosition} helpText="The 5-digit number, you can find it on your bank's cheque book" placeholder="SBIN0011315" />
              </Box>
            </Box>
          </Box>

          {/* Address Details Section */}
          <Box display="flex" flexDirection={sectionsLayout === 'horizontal' ? 'row' : 'column'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
            <Box>
              <Heading size="medium">Address Details</Heading>
              <Text weight="regular" color="surface.text.gray.muted">
                This is general subtext for a section
              </Text>
            </Box>
            <Box width="100%" display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
              <TextInput label="Address Line 1" name="addressLine1" value={bankData.addressLine1} onChange={({
              value
            }) => handleChange('addressLine1', value ?? '')} labelPosition={labelPosition} placeholder="A1-240, Titan Towers, State Bank of India" />

              <TextInput label="Address Line 2" name="addressLine2" value={bankData.addressLine2} onChange={({
              value
            }) => handleChange('addressLine2', value ?? '')} labelPosition={labelPosition} placeholder="A1 Janakpuri, Opposite Community Hall" />

              <Box width="100%" display="grid" gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
                <TextInput label="Pin Code" name="pinCode" value={bankData.pinCode} onChange={({
                value
              }) => handleChange('pinCode', value ?? '')} labelPosition={labelPosition} placeholder="110018" />

                <Dropdown selectionType="single">
                  <SelectInput label="City" placeholder="Select City" name="action" onChange={({
                  values
                }) => handleChange('city', values[0] ?? '')} labelPosition={labelPosition} />
                  <DropdownOverlay>
                    <ActionList>
                      {CITY_OPTIONS.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>
              </Box>
            </Box>
          </Box>
          {longForm && <TextArea label="Additional Information" name="additionalInformation" value={bankData.additionalInformation} onChange={({
          value
        }) => handleChange('additionalInformation', value ?? '')}
        // @ts-expect-error - Using higher numberOfLines for scrolling behavior
        numberOfLines={15} />}
        </Box>

        <Box display="flex" gap="spacing.4" justifyContent="flex-end" backgroundColor={longForm ? 'surface.background.gray.moderate' : 'transparent'} padding={longForm ? 'spacing.4' : 'spacing.0'} position={longForm ? 'fixed' : 'static'} bottom="spacing.0" right="spacing.4" width="100%" borderColor="surface.border.gray.muted" borderWidth={longForm ? 'thin' : 'none'}>
          <Button variant="tertiary" color="primary" size="medium">
            Discard
          </Button>
          <Button type="submit" variant="primary" color="primary" size="medium">
            Save
          </Button>
        </Box>
      </Box>
    </form>;
}`,...(ae=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,ie,te;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`(props): JSX.Element => {
  const {
    errorState = 'grouped',
    initialErrors = false
  } = props;
  const [formData, setFormData] = React.useState({
    email: initialErrors ? 'invalid-email' : '',
    password: initialErrors ? 'short' : ''
  });
  const [errors, setErrors] = React.useState<Record<string, string>>(initialErrors ? {
    email: 'Invalid email format',
    password: 'Password must be at least 8 characters'
  } : {});
  const [alert, setAlert] = React.useState<{
    type: 'positive' | 'negative';
    title: string;
    description: string;
  } | null>(initialErrors && errorState === 'grouped' ? {
    type: 'negative',
    title: 'Form Submission Failed',
    description: 'Please fix the errors in the form and try again.'
  } : null);
  const handleChange = (name: string, value: string | undefined): void => {
    setFormData(prev => ({
      ...prev,
      [name]: value ?? ''
    }));
    // Clear error when typing
    if (errors[name]) setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (validateForm()) {
      setAlert({
        type: 'positive',
        title: 'Success!',
        description: 'Your form has been submitted successfully.'
      });
    } else {
      setAlert({
        type: 'negative',
        title: 'Form Submission Failed',
        description: 'Please fix the errors in the form and try again.'
      });
    }
  };
  return <form onSubmit={handleSubmit}>
      <Box padding="spacing.4" display="flex" flexDirection="column" gap="spacing.4">
        <Box>
          <Heading size="large">Welcome to Blade Example</Heading>
          <Heading size="medium" weight="regular">
            This is an example form built with Loom UI
          </Heading>
        </Box>

        {errorState === 'grouped' && alert && <Alert color={alert.type} title={alert.title} description={alert.description} emphasis="subtle" isDismissible onDismiss={() => setAlert(null)} isFullWidth />}

        <Box display="flex" flexDirection="column" gap="spacing.4">
          <TextInput necessityIndicator="required" label="Email" name="email" value={formData.email} onChange={({
          value
        }) => handleChange('email', value)} validationState={errors.email ? 'error' : 'none'} errorText={errors.email} placeholder="Enter your email" />
          <PasswordInput necessityIndicator="required" label="Password" name="password" value={formData.password} onChange={({
          value
        }) => handleChange('password', value)} helpText="Should be more than 8 characters" validationState={errors.password ? 'error' : 'none'} errorText={errors.password} placeholder="Enter your password" />
          <Button isFullWidth type="submit" icon={ArrowRightIcon} iconPosition="right">
            Sign In
          </Button>
        </Box>
      </Box>
    </form>;
}`,...(te=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var oe,re,se;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`(props): JSX.Element => {
  const {
    errorState = 'grouped',
    initialErrors = false
  } = props;
  const [formData, setFormData] = React.useState({
    email: initialErrors ? 'invalid-email' : '',
    password: initialErrors ? 'short' : ''
  });
  const [errors, setErrors] = React.useState<Record<string, string>>(initialErrors ? {
    email: 'Invalid email format',
    password: 'Password must be at least 8 characters'
  } : {});
  const [alert, setAlert] = React.useState<{
    type: 'positive' | 'negative';
    title: string;
    description: string;
  } | null>(initialErrors && errorState === 'grouped' ? {
    type: 'negative',
    title: 'Form Submission Failed',
    description: 'Please fix the errors in the form and try again.'
  } : null);
  const handleChange = (name: string, value: string | undefined): void => {
    setFormData(prev => ({
      ...prev,
      [name]: value ?? ''
    }));
    // Clear error when typing
    if (errors[name]) setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (validateForm()) {
      setAlert({
        type: 'positive',
        title: 'Success!',
        description: 'Your form has been submitted successfully.'
      });
    } else {
      setAlert({
        type: 'negative',
        title: 'Form Submission Failed',
        description: 'Please fix the errors in the form and try again.'
      });
    }
  };
  return <form onSubmit={handleSubmit}>
      <Box padding="spacing.4" display="flex" flexDirection="column" gap="spacing.4">
        <Box>
          <Heading size="large">Welcome to Blade Example</Heading>
          <Heading size="medium" weight="regular">
            This is an example form built with Loom UI
          </Heading>
        </Box>

        {errorState === 'grouped' && alert && <Alert color={alert.type} title={alert.title} description={alert.description} emphasis="subtle" isDismissible onDismiss={() => setAlert(null)} isFullWidth />}

        <Box display="flex" flexDirection="column" gap="spacing.4">
          <TextInput necessityIndicator="required" label="Email" name="email" value={formData.email} onChange={({
          value
        }) => handleChange('email', value)} validationState={errors.email ? 'error' : 'none'} errorText={errors.email} placeholder="Enter your email" />
          <PasswordInput necessityIndicator="required" label="Password" name="password" value={formData.password} onChange={({
          value
        }) => handleChange('password', value)} helpText="Should be more than 8 characters" validationState={errors.password ? 'error' : 'none'} errorText={errors.password} placeholder="Enter your password" />
          <Button isFullWidth type="submit" icon={ArrowRightIcon} iconPosition="right">
            Sign In
          </Button>
        </Box>
      </Box>
    </form>;
}`,...(se=(re=w.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,de,ce;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`(props: LayoutProps): JSX.Element => {
  const {
    sectionsLayout = 'vertical',
    labelPosition = 'top',
    density = 'normal',
    longForm = false
  } = props;
  const initialBankData = {
    bankName: '',
    branchName: '',
    branchNumber: '',
    addressLine1: '',
    addressLine2: '',
    pinCode: '',
    city: '',
    additionalInformation: ''
  };
  const [bankData, setBankData] = useState(initialBankData);
  const isMobile = useIsMobile();
  const toast = useToast();
  const handleChange = (field: string, value: string): void => {
    setBankData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    toast.show({
      content: 'Thanks for reaching out! Your form has been submitted successfully.',
      color: 'positive',
      type: 'informational'
    });
    setBankData(initialBankData);
  };
  return <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.8', 'spacing.9')} paddingBottom={longForm ? 'spacing.11' : 'spacing.0'}>
        <ToastContainer />
        <Box>
          <Heading size="large" weight="semibold">
            Bank Branch Form
          </Heading>
          <Text weight="regular" color="surface.text.gray.muted">
            Fill the following information to add a new branch of the bank
          </Text>
        </Box>

        <Box display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.8', 'spacing.9')}>
          {/* General Details Section */}
          <Box display="flex" flexDirection={sectionsLayout === 'horizontal' ? 'row' : 'column'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
            <Box>
              <Heading size="medium">General Details</Heading>
              <Text weight="regular" color="surface.text.gray.muted">
                This is general subtext for a section
              </Text>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
              <TextInput label="Bank Name" name="bankName" value={bankData.bankName} onChange={({
              value
            }) => handleChange('bankName', value ?? '')} labelPosition={labelPosition} helpText="Full name of the registered national bank" placeholder="State Bank of India" />
              <Box width="100%" display="grid" gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
                <TextInput label="Branch Name" name="branchName" value={bankData.branchName} onChange={({
                value
              }) => handleChange('branchName', value ?? '')} labelPosition={labelPosition} helpText="Generally, it is location of your branch" placeholder="A1 Block, Janakpuri" />

                <TextInput label="Branch Number" name="branchNumber" value={bankData.branchNumber} onChange={({
                value
              }) => handleChange('branchNumber', value ?? '')} labelPosition={labelPosition} helpText="The 5-digit number, you can find it on your bank's cheque book" placeholder="SBIN0011315" />
              </Box>
            </Box>
          </Box>

          {/* Address Details Section */}
          <Box display="flex" flexDirection={sectionsLayout === 'horizontal' ? 'row' : 'column'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
            <Box>
              <Heading size="medium">Address Details</Heading>
              <Text weight="regular" color="surface.text.gray.muted">
                This is general subtext for a section
              </Text>
            </Box>
            <Box width="100%" display="flex" flexDirection="column" gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
              <TextInput label="Address Line 1" name="addressLine1" value={bankData.addressLine1} onChange={({
              value
            }) => handleChange('addressLine1', value ?? '')} labelPosition={labelPosition} placeholder="A1-240, Titan Towers, State Bank of India" />

              <TextInput label="Address Line 2" name="addressLine2" value={bankData.addressLine2} onChange={({
              value
            }) => handleChange('addressLine2', value ?? '')} labelPosition={labelPosition} placeholder="A1 Janakpuri, Opposite Community Hall" />

              <Box width="100%" display="grid" gridTemplateColumns={isMobile ? '1fr' : '1fr 1fr'} gap={getSpacing(density, 'spacing.5', 'spacing.6')}>
                <TextInput label="Pin Code" name="pinCode" value={bankData.pinCode} onChange={({
                value
              }) => handleChange('pinCode', value ?? '')} labelPosition={labelPosition} placeholder="110018" />

                <Dropdown selectionType="single">
                  <SelectInput label="City" placeholder="Select City" name="action" onChange={({
                  values
                }) => handleChange('city', values[0] ?? '')} labelPosition={labelPosition} />
                  <DropdownOverlay>
                    <ActionList>
                      {CITY_OPTIONS.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>
              </Box>
            </Box>
          </Box>
          {longForm && <TextArea label="Additional Information" name="additionalInformation" value={bankData.additionalInformation} onChange={({
          value
        }) => handleChange('additionalInformation', value ?? '')}
        // @ts-expect-error - Using higher numberOfLines for scrolling behavior
        numberOfLines={15} />}
        </Box>

        <Box display="flex" gap="spacing.4" justifyContent="flex-end" backgroundColor={longForm ? 'surface.background.gray.moderate' : 'transparent'} padding={longForm ? 'spacing.4' : 'spacing.0'} position={longForm ? 'fixed' : 'static'} bottom="spacing.0" right="spacing.4" width="100%" borderColor="surface.border.gray.muted" borderWidth={longForm ? 'thin' : 'none'}>
          <Button variant="tertiary" color="primary" size="medium">
            Discard
          </Button>
          <Button type="submit" variant="primary" color="primary" size="medium">
            Save
          </Button>
        </Box>
      </Box>
    </form>;
}`,...(ce=(de=C.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const Re=["SimpleForm","WithValidation","WithHorizontalSectionsTopLabel","WithVerticalSectionsTopLabel","WithVerticalSectionsLeftLabel","WithNormalDensity","WithComfortableDensity","WithIndividualError","WithGroupedError","WithFixedFooter"];export{k as SimpleForm,D as WithComfortableDensity,C as WithFixedFooter,w as WithGroupedError,x as WithHorizontalSectionsTopLabel,S as WithIndividualError,B as WithNormalDensity,I as WithValidation,v as WithVerticalSectionsLeftLabel,y as WithVerticalSectionsTopLabel,Re as __namedExportsOrder,We as default};
