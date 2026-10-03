import{aY as Te,j as e,H as y,ad as f,ip as at,B as t,n as B,ak as Oe,F as J,gr as qt,gv as Et,b2 as $e,kr as Vt,j1 as Wt,aZ as Le,a_ as qe,b0 as Ee,ai as Ie,al as Me,am as ze,ap as Qt,u as we,k8 as je,T as i,a9 as E,aI as ee,aJ as te,bn as ke,r as ii,P as ri,aM as Ye,aN as Ue,S as Yt,e as Ut,aK as re,iV as Xe,iW as Ze,iX as Ke,iY as F,iZ as _e,i_ as Je,i$ as H,k0 as et,k1 as tt,k2 as A,jJ as $t,an as X,ao as Y,gD as Xt,em as Zt,du as Kt,eR as ai,a5 as Ge,jK as Fe,jQ as it,jL as He,jM as rt,fe as Ae,j2 as si,h$ as fe,jZ as Z,N as _t,et as Jt,kq as ni}from"./iframe-C1qQ09LF.js";import{s as oi}from"./StoryRouter-CDfSoprG.js";import{S as li}from"./Sandbox.web-B2xP21Qp.js";import{S as di}from"./StoryPageWrapper-CS0_5maI.js";import{g as ci}from"./storybookArgTypes-DFfQV31s.js";import"./preload-helper-Dp1pzeXC.js";import"./react-router-CrS3lpF2.js";import"./baseCode-DnWYDQ6N.js";import"./Sandbox.web-C7diOxlu.js";import"./componentStatusData-8pChZ-5h.js";const pi=""+new URL("donatenow-Dv9Zhs0v.png",import.meta.url).href,ui=""+new URL("paynow-DqF5R1mb.png",import.meta.url).href,mi=""+new URL("donationButton-DCq5zmmu.png",import.meta.url).href,gi=""+new URL("card-TeP-vm18.png",import.meta.url).href,xi=""+new URL("sideImage-CCT-MTz2.png",import.meta.url).href;fe.extend(ni);const hi=()=>e.jsxs(di,{componentName:"Creation View",componentDescription:"Creation View is a pattern that is used in creation flows",apiDecisionLink:null,figmaURL:"https://www.figma.com/design/ZZ2dpcIAsPCEGPwQ2UdgL1/Blade-Cheatsheet?node-id=949-178337&m=dev",codeUrl:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/CreationView/CreationView.stories.tsx",children:[e.jsx(y,{size:"large",children:"Usage"}),e.jsx(li,{showConsole:!0,children:`
        import React from 'react';
        import {
          Box,
          Button,
          RadioGroup,
          Radio,
          Modal,
          ModalHeader,
          ModalBody,
          ModalFooter,
          Preview,
          PreviewHeader,
          PreviewBody,
          PreviewFooter,
          Heading,
          Alert,
          TextInput,
          Text,
        } from '@greenloom/ui/components';
        function App() {
          const [isOpen, setIsOpen] = React.useState(false);
          const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);
        
          const [formData, setFormData] = React.useState({
            qrUsage: '',
            acceptFixedAmount: '',
            description: '',
          });
        
          const [errors, setErrors] = React.useState<Record<string, string>>({});
          const [alert, setAlert] = React.useState<{
            type: 'positive' | 'negative';
            title: string;
            description: string;
          } | null>(null);
          const [isQrGenerated, setIsQrGenerated] = React.useState(false);
        
          const handleChange = (name: string, value: string | undefined): void => {
            setFormData((prev) => ({ ...prev, [name]: value ?? '' }));
            // Clear error when typing
            if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
          };
        
          const validateForm = (): boolean => {
            const newErrors: Record<string, string> = {};
        
            if (!formData.qrUsage) {
              newErrors.qrUsage = 'Please select QR usage type';
            }
        
            if (!formData.acceptFixedAmount) {
              newErrors.acceptFixedAmount =
                'Please select if you want to accept fixed amount';
            }
        
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
          };
        
          const handleSubmit = (e?: React.FormEvent<HTMLFormElement>): void => {
            e?.preventDefault();
            if (validateForm()) {
              setAlert({
                type: 'positive',
                title: 'Success!',
                description: 'Your QR code has been created successfully.',
              });
              setIsQrGenerated(true);
            } else {
              setAlert({
                type: 'negative',
                title: 'QR Generation Failed',
                description: 'Please fill all the fields correctly',
              });
              setIsQrGenerated(false);
            }
          };
        
          const renderContent = (): React.ReactElement => (
            <Box display="flex" gap="spacing.4" justifyContent="space-between">
              <Box>
                <form onSubmit={handleSubmit}>
                  <Box
                    padding="spacing.4"
                    display="flex"
                    flexDirection="column"
                    gap="spacing.4"
                  >
                    <Box>
                      <Heading size="medium" weight="regular">
                        Configure your QR code settings
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
                        isFullWidth
                      />
                    )}
        
                    <Box display="flex" flexDirection="column" gap="spacing.4">
                      <RadioGroup
                        label="QR Usage"
                        name="qrUsage"
                        value={formData.qrUsage}
                        onChange={({ value }) => handleChange('qrUsage', value)}
                        validationState={errors.qrUsage ? 'error' : 'none'}
                        errorText={errors.qrUsage}
                      >
                        <Radio value="single">Single Payment</Radio>
                        <Radio value="multiple">Multiple Payments</Radio>
                      </RadioGroup>
        
                      <RadioGroup
                        label="Accept Fixed Amount"
                        name="acceptFixedAmount"
                        value={formData.acceptFixedAmount}
                        onChange={({ value }) =>
                          handleChange('acceptFixedAmount', value)
                        }
                        validationState={errors.acceptFixedAmount ? 'error' : 'none'}
                        errorText={errors.acceptFixedAmount}
                      >
                        <Radio value="yes">Yes</Radio>
                        <Radio value="no">No</Radio>
                      </RadioGroup>
        
                      <TextInput
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={({ value }) => handleChange('description', value)}
                        placeholder="Enter description (optional)"
                        helpText="Add a description to identify this QR code"
                      />
        
                      <Button isFullWidth type="submit" iconPosition="right">
                        Create QR Code
                      </Button>
                    </Box>
                  </Box>
                </form>
              </Box>
              <Box width="500px">
                <Preview>
                  <PreviewHeader />
                  <PreviewBody>
                    {isQrGenerated ? (
                      <Box>
                        <img
                          src="https://blog.razorpay.in/blog-content/uploads/2021/11/QR-codes-blog-header.png"
                          alt="QR Code"
                          height="400px"
                        />
                      </Box>
                    ) : (
                      <Box>
                        <Text>QR Code Preview</Text>
                      </Box>
                    )}
                  </PreviewBody>
                  <PreviewFooter />
                </Preview>
              </Box>
            </Box>
          );
        
          const renderFooter = (): React.ReactElement => (
            <Box display="flex" flexDirection="column" gap="spacing.3" width="100%">
              <Box
                display="flex"
                gap="spacing.3"
                justifyContent="space-between"
                width="100%"
              >
                <Box
                  display="flex"
                  width="100%"
                  justifyContent="flex-end"
                  gap="spacing.3"
                >
                  <Button variant="tertiary" onClick={() => setIsOpen(false)}>
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        
          return (
            <Box>
              <Button onClick={() => setIsOpen(!isOpen)}>Create QR Code</Button>
              <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)} size="large">
                <ModalHeader title="Create QR Code" />
                <ModalBody>{renderContent()}</ModalBody>
                <ModalFooter>{renderFooter()}</ModalFooter>
              </Modal>
            </Box>
          );
        }
        
        export default App;
        
        `})]}),ki={title:"Patterns/CreationView",component:Te,tags:["autodocs"],argTypes:{...ci()},parameters:{docs:{page:hi},decorators:[oi(void 0,{initialEntries:["/"]})]}},fi=()=>{const[h,c]=f.useState(!1),[v,l]=f.useState(!1),b=at(),[o,a]=f.useState({qrUsage:"",acceptFixedAmount:"",description:""}),[d,S]=f.useState({}),[R,w]=f.useState(null),[L,k]=f.useState(!1),V=(p,D)=>{a(P=>({...P,[p]:D??""})),d[p]&&S(P=>({...P,[p]:""}))},W=()=>{const p={};return o.qrUsage||(p.qrUsage="Please select QR usage type"),o.acceptFixedAmount||(p.acceptFixedAmount="Please select if you want to accept fixed amount"),S(p),Object.keys(p).length===0},G=p=>{p==null||p.preventDefault(),W()?(w({type:"positive",title:"Success!",description:"Your QR code has been created successfully."}),k(!0)):(w({type:"negative",title:"QR Generation Failed",description:"Please fill all the fields correctly"}),k(!1))},N=({isMobile:p})=>e.jsxs(t,{display:"flex",gap:"spacing.4",justifyContent:"space-between",children:[e.jsx(t,{children:e.jsx("form",{onSubmit:G,children:e.jsxs(t,{padding:"spacing.4",display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(t,{children:e.jsx(y,{size:"medium",weight:"regular",children:"Configure your QR code settings"})}),!p&&R&&e.jsx(Ge,{color:R.type,title:R.title,description:R.description,emphasis:"subtle",isDismissible:!0,onDismiss:()=>w(null),isFullWidth:!0}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(X,{label:"QR Usage",name:"qrUsage",value:o.qrUsage,onChange:({value:D})=>V("qrUsage",D),validationState:d.qrUsage?"error":"none",errorText:d.qrUsage,children:[e.jsx(Y,{value:"single",children:"Single Payment"}),e.jsx(Y,{value:"multiple",children:"Multiple Payments"})]}),e.jsxs(X,{label:"Accept Fixed Amount",name:"acceptFixedAmount",value:o.acceptFixedAmount,onChange:({value:D})=>V("acceptFixedAmount",D),validationState:d.acceptFixedAmount?"error":"none",errorText:d.acceptFixedAmount,children:[e.jsx(Y,{value:"yes",children:"Yes"}),e.jsx(Y,{value:"no",children:"No"})]}),e.jsx(E,{label:"Description",name:"description",value:o.description,onChange:({value:D})=>V("description",D),placeholder:"Enter description (optional)",helpText:"Add a description to identify this QR code"}),!p&&e.jsx(B,{isFullWidth:!0,type:"submit",iconPosition:"right",children:"Create QR Code"})]})]})})}),!p&&e.jsx(t,{width:"500px",children:e.jsxs(Fe,{children:[e.jsx(it,{}),e.jsx(He,{children:L?e.jsx(t,{children:e.jsx("img",{src:"https://blog.razorpay.in/blog-content/uploads/2021/11/QR-codes-blog-header.png",alt:"QR Code",height:"400px"})}):e.jsx(t,{children:e.jsx(i,{children:"QR Code Preview"})})}),e.jsx(rt,{})]})})]}),T=()=>e.jsx(t,{display:"flex",flexDirection:"column",gap:"spacing.4",children:e.jsxs(Fe,{children:[e.jsx(it,{}),e.jsx(He,{children:e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(t,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"400px",children:e.jsx("img",{src:"https://blog.razorpay.in/blog-content/uploads/2021/11/QR-codes-blog-header.png",alt:"QR Code",height:"400px"})}),e.jsxs(t,{padding:"spacing.4",children:[e.jsx(i,{children:"QR Code Details:"}),e.jsxs(t,{marginTop:"spacing.3",children:[e.jsxs(i,{children:["Usage: ",o.qrUsage==="single"?"Single Payment":"Multiple Payments"]}),e.jsxs(i,{children:["Fixed Amount: ",o.acceptFixedAmount==="yes"?"Yes":"No"]}),o.description&&e.jsxs(i,{children:["Description: ",o.description]})]})]})]})}),e.jsx(rt,{})]})}),j=({isMobile:p})=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.3",width:"100%",children:[p&&R&&e.jsx(Ge,{color:R.type,title:R.title,description:R.description,emphasis:"subtle",isDismissible:!0,onDismiss:()=>w(null),isFullWidth:!0}),e.jsxs(t,{display:"flex",gap:"spacing.3",justifyContent:"space-between",width:"100%",children:[p&&e.jsx(B,{variant:"tertiary",icon:Ae,onClick:()=>l(!0),iconPosition:"left"}),e.jsxs(t,{display:"flex",width:"100%",justifyContent:"flex-end",gap:"spacing.3",children:[e.jsx(B,{variant:"tertiary",onClick:()=>c(!1),children:"Cancel"}),p&&!L&&e.jsx(B,{onClick:()=>G(),iconPosition:"right",children:"Create QR Code"}),!p&&e.jsx(B,{variant:"primary",onClick:()=>G(),isDisabled:!L,children:"Save"})]})]})]});return e.jsxs(t,{children:[e.jsx(B,{onClick:()=>c(!h),children:"Create QR Code"}),b?e.jsxs(e.Fragment,{children:[e.jsxs(Ie,{isOpen:h,onDismiss:()=>c(!1),snapPoints:[.75,.75,.75],children:[e.jsx(Me,{title:"Create QR Code"}),e.jsx(ze,{children:N({isMobile:b})}),e.jsx(Qt,{children:j({isMobile:b})})]}),e.jsxs(Ie,{isOpen:v,onDismiss:()=>l(!1),snapPoints:[1,1,1],children:[e.jsx(Me,{title:"QR Code Preview"}),e.jsx(ze,{children:T()})]})]}):e.jsxs(Te,{isOpen:h,onDismiss:()=>c(!1),size:"large",children:[e.jsx(Le,{title:"Create QR Code"}),e.jsx(qe,{children:N({isMobile:b})}),e.jsx(Ee,{children:j({isMobile:b})})]})]})},be=fi.bind({});be.storyName="Single Step (Form Group + Preview)";const de=[{title:"Select Vendor",description:"Choose a vendor for the GRN",stepNumber:1},{title:"Link PO",description:"Link Purchase Order to GRN",stepNumber:2},{title:"GRN Details",description:"Add GRN details and notes",stepNumber:3},{title:"Line Item Details",description:"Add line items and quantities",stepNumber:4},{title:"Review GRN Details",description:"Review and confirm GRN details",stepNumber:5}],I=[{id:"1",name:"ABC Suppliers",email:"contact@abcsuppliers.com",phone:"+91 9876543210",address:"123 Business Park, Mumbai"},{id:"2",name:"XYZ Trading Co.",email:"info@xyztrading.com",phone:"+91 9876543211",address:"456 Corporate Hub, Delhi"},{id:"3",name:"Global Imports Ltd",email:"support@globalimports.com",phone:"+91 9876543212",address:"789 Trade Center, Bangalore"},{id:"4",name:"Local Distributors",email:"sales@localdist.com",phone:"+91 9876543213",address:"321 Market Street, Chennai"}],z=[{id:"PO-001",number:"PO-2024-001",date:"2024-03-15",amount:15e3,status:"Pending",items:5,vendor:"ABC Suppliers"},{id:"PO-002",number:"PO-2024-002",date:"2024-03-14",amount:25e3,status:"Approved",items:8,vendor:"XYZ Trading Co."},{id:"PO-003",number:"PO-2024-003",date:"2024-03-13",amount:18e3,status:"Pending",items:3,vendor:"Global Imports Ltd"},{id:"PO-004",number:"PO-2024-004",date:"2024-03-12",amount:32e3,status:"Approved",items:6,vendor:"Local Distributors"}],ot=({value:h,label:c,children:v})=>e.jsxs(t,{display:"flex",flexDirection:"row",gap:"spacing.3",alignItems:"flex-start",children:[e.jsx(Y,{value:h}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(t,{display:"flex",flexDirection:"row",gap:"spacing.4",children:e.jsx(i,{weight:"medium",color:"surface.text.gray.subtle",children:c})}),v]})]}),ei=({withProgressBar:h=!1})=>{const[c,v]=f.useState(!1),[l,b]=f.useState(!1),o=at(),[a,d]=f.useState(1),[S,R]=f.useState(!1),[w,L]=f.useState(null),[k,V]=f.useState(null),[W,G]=f.useState([]),[N,T]=f.useState(!1),[j,p]=f.useState({}),[D,P]=f.useState({grnNumber:`GRN-${new Date().getFullYear()}-${Math.floor(Math.random()*1e3).toString().padStart(3,"0")}`,date:"",notes:""}),[g,U]=f.useState(null),De=()=>{U(null),p({})},We=r=>{r<=a&&d(r),R(!1),De()},Qe=r=>{const C={};if(r===1&&!w&&(C.vendor="Please select a vendor to proceed"),r===2&&!k&&(C.purchaseOrder="Please select a purchase order to proceed"),r===3)if(!D.date)C.date="Date is required";else{const $=fe(D.date,"YYYY-MM-DD",!0);if(!$.isValid())C.date="Please enter a valid date in YYYY-MM-DD format";else{const _=fe().startOf("day");$.isBefore(_)&&(C.date="Date cannot be in the past")}}return p(C),Object.keys(C).length===0},Re=()=>{a<de.length&&(Qe(a)?(G(r=>[...r,a]),d(a+1),a===3&&U({type:"positive",title:"Success!",description:"GRN details have been saved successfully."})):a===3&&U({type:"negative",title:"Validation Failed",description:"Please fix the errors in the form and try again."}))},ie=()=>{a>1&&(d(a-1),De())},Pe=r=>(g==null?void 0:g.type)==="negative"&&r===a?e.jsx(Z,{icon:Oe,color:"negative"}):W.includes(r)?e.jsx(Z,{icon:_t,color:"positive"}):r===a?e.jsx(Z,{icon:Ae,color:"primary"}):e.jsx(Z,{icon:Jt,color:"primary"}),ce={nodes:[{id:"1",name:"Laptop Dell XPS 13",quantity:2,unitPrice:85e3},{id:"2",name:"Wireless Mouse",quantity:5,unitPrice:1200},{id:"3",name:"Mechanical Keyboard",quantity:3,unitPrice:4500},{id:"4",name:"External SSD 1TB",quantity:4,unitPrice:6500},{id:"5",name:"USB-C Hub",quantity:2,unitPrice:2500}]},K=o?de.filter(r=>r.stepNumber!==5):de,Q=K[K.length-1].stepNumber,m=K.find(r=>r.stepNumber===a),M=()=>{d(1),L(null),V(null),G([]),p({}),U(null),P({grnNumber:`GRN-${new Date().getFullYear()}-${Math.floor(Math.random()*1e3).toString().padStart(3,"0")}`,date:"",notes:""})},x=r=>{P(C=>({...C,date:r?fe(r).format("YYYY-MM-DD"):""})),j.date&&p(C=>({...C,date:void 0}))},O=({isLastStep:r})=>e.jsxs(t,{display:"flex",justifyContent:"space-between",marginTop:"spacing.4",padding:"spacing.4",borderTopColor:"surface.border.gray.muted",children:[e.jsx(B,{variant:"tertiary",onClick:()=>v(!c),children:"Save and Close"}),e.jsxs(t,{display:"flex",gap:"spacing.4",children:[e.jsx(B,{variant:"tertiary",onClick:ie,children:"Previous"}),e.jsx(B,{variant:"primary",onClick:r?()=>{M(),v(!1)}:Re,children:r?"Submit":"Next"})]})]});ii.useEffect(()=>{o&&a===5&&d(4)},[o]);const pe=()=>{var r,C,$,_,ge,xe,he,s;return e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.4",width:"100%",height:"100%",justifyContent:"space-between",children:[e.jsxs(t,{display:"flex",flexDirection:o?"column":"row",padding:"spacing.7",gap:"spacing.4",width:"100%",height:"100%",justifyContent:"space-between",children:[e.jsx(re,{}),e.jsx(t,{width:"100%",height:o?"400px":"600px",children:e.jsxs(Fe,{defaultZoom:.5,children:[e.jsx(it,{}),e.jsx(He,{children:e.jsxs(t,{padding:"spacing.4",display:"flex",flexDirection:"column",gap:"spacing.6",backgroundColor:"surface.background.gray.intense",children:[e.jsxs(t,{padding:"spacing.4",borderBottomWidth:"thin",borderBottomColor:"surface.border.gray.muted",children:[e.jsx(y,{size:"large",children:"Goods Receipt Note"}),e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:D.grnNumber}),e.jsxs(i,{size:"small",color:"surface.text.gray.muted",children:["Date: ",D.date]})]}),e.jsxs(t,{children:[e.jsx(y,{size:"medium",children:"Vendor Details"}),e.jsx(t,{marginTop:"spacing.3",padding:"spacing.4",backgroundColor:"surface.background.gray.intense",borderRadius:"medium",children:w&&e.jsxs(e.Fragment,{children:[e.jsx(t,{display:"flex",justifyContent:"space-between",children:e.jsxs(t,{children:[e.jsx(i,{weight:"semibold",size:"large",children:(r=I.find(u=>u.id===w))==null?void 0:r.name}),e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:(C=I.find(u=>u.id===w))==null?void 0:C.email})]})}),e.jsxs(t,{marginTop:"spacing.3",display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsxs(i,{size:"small",children:["Phone: ",($=I.find(u=>u.id===w))==null?void 0:$.phone]}),e.jsxs(i,{size:"small",children:["Address: ",(_=I.find(u=>u.id===w))==null?void 0:_.address]})]})]})})]}),e.jsxs(t,{children:[e.jsx(y,{size:"medium",children:"Purchase Order Details"}),e.jsx(t,{marginTop:"spacing.3",padding:"spacing.4",backgroundColor:"surface.background.gray.moderate",borderRadius:"medium",children:k&&e.jsxs(t,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[e.jsxs(t,{children:[e.jsx(i,{weight:"semibold",size:"large",children:(ge=z.find(u=>u.id===k))==null?void 0:ge.number}),e.jsxs(i,{size:"small",color:"surface.text.gray.muted",children:["Date: ",(xe=z.find(u=>u.id===k))==null?void 0:xe.date]})]}),e.jsx(J,{size:"medium",color:((he=z.find(u=>u.id===k))==null?void 0:he.status)==="Approved"?"positive":"notice",children:((s=z.find(u=>u.id===k))==null?void 0:s.status)??""})]})})]}),D.notes&&e.jsxs(t,{children:[e.jsx(y,{size:"medium",children:"Notes"}),e.jsx(t,{marginTop:"spacing.3",padding:"spacing.4",backgroundColor:"surface.background.gray.moderate",borderRadius:"medium",children:e.jsx(i,{children:D.notes})})]}),e.jsxs(t,{children:[e.jsx(y,{size:"medium",children:"Line Items"}),e.jsx(t,{marginTop:"spacing.3",children:e.jsx(Xe,{data:ce,children:u=>e.jsxs(e.Fragment,{children:[e.jsx(Ze,{children:e.jsxs(Ke,{children:[e.jsx(F,{children:"Item Name"}),e.jsx(F,{children:"Quantity"}),e.jsx(F,{children:"Unit Price"}),e.jsx(F,{children:"Total Amount"})]})}),e.jsx(_e,{children:u.map(q=>e.jsxs(Je,{item:q,children:[e.jsx(H,{children:q.name}),e.jsx(H,{children:q.quantity}),e.jsxs(H,{children:["₹",q.unitPrice.toLocaleString()]}),e.jsxs(H,{children:["₹",(q.quantity*q.unitPrice).toLocaleString()]})]},q.id))}),e.jsx(et,{children:e.jsxs(tt,{children:[e.jsx(A,{children:"Total Amount"}),e.jsx(A,{children:"-"}),e.jsx(A,{children:"-"}),e.jsxs(A,{children:["₹",u.reduce((q,nt)=>q+nt.quantity*nt.unitPrice,0).toLocaleString()]})]})})]})})})]})]})}),e.jsx(rt,{})]})})]}),!o&&O({isLastStep:!0})]})},ue=r=>{var C,$,_,ge,xe,he;if(r&&a===5)return null;switch(a){case 1:return e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.4",width:"100%",height:"100%",justifyContent:"space-between",children:[e.jsx(t,{display:"flex",flexDirection:"column",padding:"spacing.7",justifyContent:"center",alignItems:"center",children:e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(t,{children:[e.jsx(y,{size:"medium",children:"Select Vendor"}),e.jsx(i,{children:"Choose a vendor from the list below to proceed with GRN creation."})]}),e.jsx(re,{}),e.jsx(X,{label:"Vendors",name:"vendor",value:w??"",onChange:({value:s})=>{L(s),j.vendor&&p(u=>({...u,vendor:void 0}))},validationState:j.vendor?"error":"none",errorText:j.vendor,children:I.map(s=>e.jsx(ee,{padding:"spacing.4",borderRadius:"medium",elevation:"none",as:"label",accessibilityLabel:s.name,marginBottom:"spacing.2",children:e.jsx(te,{children:e.jsx(ot,{value:s.id,label:s.name,children:e.jsxs(t,{display:"flex",gap:"spacing.2",flexDirection:r?"column":"row",children:[e.jsxs(t,{display:"flex",gap:"spacing.2",children:[e.jsx(Zt,{color:"interactive.icon.gray.muted"}),e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:s.email}),!r&&e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:"•"})]}),e.jsxs(t,{display:"flex",gap:"spacing.2",children:[e.jsx(Kt,{color:"interactive.icon.gray.muted"}),e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:s.phone})]})]})})})},s.id))})]})}),!r&&O({})]});case 2:return e.jsx(t,{display:"flex",width:"100%",height:"100%",children:e.jsxs(t,{display:"flex",flexDirection:"column",width:"100%",justifyContent:"space-between",children:[e.jsxs(t,{display:"flex",width:"100%",justifyContent:"space-between",height:"100%",children:[e.jsx(t,{flex:6,display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between",width:"100%",children:e.jsx(t,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",children:e.jsxs(t,{padding:"spacing.5",width:"500px",children:[e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(y,{size:"medium",children:"Link PO"}),e.jsx(i,{children:"Select a Purchase Order to link with this GRN."})]}),e.jsx(t,{flex:1,gap:"spacing.2",marginTop:"spacing.2",children:e.jsx(X,{label:"Purchase Orders",name:"purchaseOrder",value:k??"",onChange:({value:s})=>{V(s),j.purchaseOrder&&p(u=>({...u,purchaseOrder:void 0}))},validationState:j.purchaseOrder?"error":"none",errorText:j.purchaseOrder,children:z.map(s=>e.jsx(ee,{as:"label",accessibilityLabel:s.number,isSelected:k===s.id,marginBottom:"spacing.2",elevation:"none",children:e.jsx(te,{children:e.jsx(ot,{value:s.id,label:s.number,children:e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsxs(t,{display:"flex",gap:"spacing.2",alignItems:"center",children:[e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:s.vendor}),e.jsx(J,{size:"medium",color:s.status==="Approved"?"positive":"notice",children:s.status||""})]}),e.jsxs(t,{display:"flex",gap:"spacing.2",children:[e.jsxs(t,{display:"flex",gap:"spacing.2",children:[e.jsx(Xt,{color:"interactive.icon.gray.muted"}),e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:s.date})]}),e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:"•"}),e.jsxs(i,{size:"small",color:"surface.text.gray.muted",children:[s.items," Items"]}),e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:"•"}),e.jsxs(i,{size:"small",color:"surface.text.gray.muted",children:["₹ ",s.amount.toLocaleString()]})]})]})})})},s.id))})})]})})}),!r&&e.jsx(t,{flex:4,children:e.jsx(Fe,{isDragAndZoomDisabled:!0,children:e.jsx(He,{children:e.jsxs(t,{padding:"spacing.4",display:"flex",flexDirection:"column",gap:"spacing.4",backgroundColor:"surface.background.gray.moderate",children:[w&&e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(i,{weight:"semibold",size:"large",children:(C=I.find(s=>s.id===w))==null?void 0:C.name}),e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:($=I.find(s=>s.id===w))==null?void 0:$.email})]}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsxs(i,{size:"small",children:["Phone: ",(_=I.find(s=>s.id===w))==null?void 0:_.phone]}),e.jsxs(i,{size:"small",children:["Address:"," ",(ge=I.find(s=>s.id===w))==null?void 0:ge.address]})]})]}),k&&e.jsxs(t,{marginTop:"spacing.4",paddingTop:"spacing.4",borderTopWidth:"thin",borderTopColor:"surface.border.gray.muted",children:[e.jsx(i,{weight:"semibold",size:"medium",children:"Selected PO"}),e.jsxs(t,{marginTop:"spacing.2",children:[e.jsxs(i,{size:"small",children:["PO Number:"," ",(xe=z.find(s=>s.id===k))==null?void 0:xe.number]}),e.jsxs(i,{size:"small",children:["Amount: ₹",(he=z.find(s=>s.id===k))==null?void 0:he.amount.toLocaleString()]})]})]})]})})})})]}),!r&&O({})]})});case 3:return e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.4",width:"100%",height:"100%",justifyContent:"space-between",children:[e.jsxs(t,{padding:"spacing.7",display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(t,{children:[e.jsx(y,{size:"medium",children:"GRN Details"}),e.jsx(i,{children:"Add additional details for this GRN."})]}),e.jsx(re,{}),!r&&g&&e.jsx(Ge,{color:g.type,title:g.title,description:g.description,emphasis:"subtle",isDismissible:!0,onDismiss:()=>U(null),isFullWidth:!0}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(E,{label:"GRN Number",name:"grnNumber",value:D.grnNumber,onChange:({value:s})=>P(u=>({...u,grnNumber:s??""})),isDisabled:!0,helpText:"Auto-generated GRN number"}),e.jsx(si,{label:"Date",name:"date",value:D.date?fe(D.date).toDate():void 0,onApply:s=>{x(s)},onChange:s=>{x(s)},onOpenChange:()=>{T(s=>!s)},validationState:j.date?"error":"none",errorText:j.date,helpText:"Select the GRN date",isRequired:!0,necessityIndicator:"required",minDate:new Date}),e.jsx($t,{label:"Notes",name:"notes",value:D.notes,onChange:({value:s})=>P(u=>({...u,notes:s??""})),numberOfLines:4,placeholder:"Add any additional notes or comments"})]})]}),!r&&O({})]});case 4:return e.jsxs(t,{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"spacing.4",height:"100%",children:[e.jsxs(t,{padding:"spacing.7",display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(t,{children:[e.jsx(y,{size:"medium",children:"Line Item Details"}),e.jsx(i,{children:"Add line items and quantities for this GRN."})]}),e.jsx(re,{}),e.jsx(Xe,{data:ce,children:s=>e.jsxs(e.Fragment,{children:[e.jsx(Ze,{children:e.jsxs(Ke,{children:[e.jsx(F,{children:"Item Name"}),e.jsx(F,{children:"Quantity"}),e.jsx(F,{children:"Unit Price"}),e.jsx(F,{children:"Total Amount"})]})}),e.jsx(_e,{children:s.map(u=>e.jsxs(Je,{item:u,children:[e.jsx(H,{children:u.name}),e.jsx(H,{children:u.quantity}),e.jsxs(H,{children:["₹",u.unitPrice.toLocaleString()]}),e.jsxs(H,{children:["₹",(u.quantity*u.unitPrice).toLocaleString()]})]},u.id))}),e.jsx(et,{children:e.jsxs(tt,{children:[e.jsx(A,{children:"Total Amount"}),e.jsx(A,{children:"-"}),e.jsx(A,{children:"-"}),e.jsxs(A,{children:["₹",s.reduce((u,q)=>u+q.quantity*q.unitPrice,0).toLocaleString()]})]})})]})})]}),!r&&O({})]});case 5:return r?null:pe();default:return null}},Ne=()=>{const r=o&&a===Q;return e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.4",padding:"spacing.4",backgroundColor:"surface.background.gray.subtle",borderTopWidth:"thin",borderTopColor:"surface.border.gray.muted",position:"fixed",bottom:"spacing.0",zIndex:1001,width:"100%",children:[o&&g&&e.jsx(Ge,{color:g.type,title:g.title,description:g.description,emphasis:"subtle",isDismissible:!0,onDismiss:()=>U(null),isFullWidth:!0}),e.jsxs(t,{display:"flex",gap:"spacing.4",justifyContent:"space-between",children:[e.jsxs(t,{display:"flex",gap:"spacing.2",children:[r&&e.jsx(B,{variant:"tertiary",icon:Ae,onClick:()=>b(!0),iconPosition:"left",children:"Preview"}),e.jsx(B,{variant:"tertiary",onClick:ie,isDisabled:a===1,children:"Previous"})]}),e.jsx(B,{variant:"primary",onClick:a===Q?()=>{M(),v(!1)}:Re,children:a===Q?"Submit":"Next"})]})]})},me=()=>e.jsx(Yt,{orientation:"vertical",size:"medium",children:K.map(r=>e.jsx(Ut,{title:r.title,description:r.description,titleColor:(g==null?void 0:g.type)==="negative"&&r.stepNumber===a?"feedback.text.negative.intense":void 0,marker:Pe(r.stepNumber),isSelected:(g==null?void 0:g.type)==="negative"?!1:a===r.stepNumber,isDisabled:r.stepNumber>a,onClick:()=>We(r.stepNumber),stepProgress:W.includes(r.stepNumber)?"full":a===r.stepNumber?"start":"none"},r.stepNumber))}),n=ri.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${({theme:r})=>r.colors.overlay.background.subtle};
    z-index: 1004;
  `;return e.jsxs(t,{children:[e.jsx(B,{onClick:()=>v(!c),children:"Create GNR Details"}),o?c&&e.jsxs(t,{width:"100%",minHeight:"100%",backgroundColor:"surface.background.gray.moderate",display:"flex",flexDirection:"column",position:"fixed",top:"spacing.0",left:"spacing.0",zIndex:1e3,children:[e.jsx("div",{role:"button",tabIndex:0,onClick:()=>{h||R(r=>!r)},onKeyDown:()=>{},style:{zIndex:1006},children:e.jsx(t,{display:"flex",alignItems:"center",justifyContent:"center",padding:"spacing.4",backgroundColor:"surface.background.gray.subtle",borderBottomWidth:"thin",borderBottomColor:"surface.border.gray.muted",position:"relative",children:e.jsxs(t,{display:"flex",alignItems:"center",gap:"spacing.4",children:[(g==null?void 0:g.type)==="negative"&&e.jsx(Oe,{color:"feedback.icon.negative.intense"}),h?e.jsx(y,{as:"h2",size:"medium",weight:"semibold",color:"surface.text.gray.normal",wordBreak:"break-word",children:"New GRN"}):e.jsxs(e.Fragment,{children:[e.jsxs(J,{color:(g==null?void 0:g.type)==="negative"?"negative":void 0,children:[" ",a," / ",Q," "]}),e.jsx(y,{size:"small",children:m==null?void 0:m.title}),S?e.jsx(qt,{}):e.jsx(Et,{})]})]})})}),e.jsx($e,{value:a/Q*100,showPercentage:!1,size:"medium",color:(g==null?void 0:g.type)==="negative"?"negative":void 0}),e.jsxs(t,{children:[e.jsx(Vt,{direction:"top",fromOffset:"100%",motionTriggers:["mount"],isVisible:S,children:e.jsx(t,{position:"fixed",top:"51px",left:"spacing.0",backgroundColor:"surface.background.gray.intense",zIndex:1005,width:"100%",height:"272px",borderBottomLeftRadius:"2xlarge",borderBottomRightRadius:"2xlarge",padding:"spacing.7",paddingTop:"spacing.0",children:me()})}),e.jsx(Wt,{motionTriggers:["mount"],isVisible:S,shouldUnmountWhenHidden:!0,children:e.jsx(n,{onClick:()=>R(r=>!r)})})]}),e.jsx(t,{overflow:"auto",height:"calc(100vh - 100px)",padding:"spacing.4",paddingBottom:"spacing.8",children:ue(o)}),!N&&!l&&Ne(),l&&o&&e.jsxs(Ie,{isOpen:l,onDismiss:()=>b(!1),snapPoints:[.9,.9,.9],children:[e.jsx(Me,{title:"Review GRN Details"}),e.jsx(ze,{padding:"spacing.0",children:pe()})]})]}):e.jsxs(Te,{isOpen:c,onDismiss:()=>v(!1),size:"full",children:[e.jsx(Le,{title:"New GRN"}),h&&e.jsx($e,{value:a/Q*100,showPercentage:!1,size:"medium",color:(g==null?void 0:g.type)==="negative"?"negative":void 0}),e.jsx(qe,{height:"100%",padding:"spacing.0",children:e.jsx(t,{width:"100%",height:"100%",display:"flex",flexDirection:"column",children:e.jsxs(t,{display:"flex",flex:1,children:[!h&&e.jsx(t,{width:"300px",padding:"spacing.7",backgroundColor:"surface.background.gray.moderate",children:me()}),e.jsx(t,{width:"100%",display:"flex",flexDirection:"column",children:e.jsx(t,{flex:1,overflow:"auto",children:ue(o)})})]})})})]})]})},ye=ei.bind({});ye.storyName="Multi Steps with StepGroup (Form Group + Preview + Full Page Modal)";const ae=ei.bind({});ae.args={withProgressBar:!0};ae.storyName="Multi Steps with Progress Bar (Form Group + Preview + Full Page Modal)";const ti=({modalSize:h="medium"})=>{const[c,v]=f.useState(!1),[l,b]=f.useState(1),[o,a]=f.useState(null),[d,S]=f.useState(null),[R,w]=f.useState([]),[L,k]=f.useState(!1),V=at(),W=de,G=W[W.length-1].stepNumber,N=W.find(m=>m.stepNumber===l),[T,j]=f.useState({}),[p,D]=f.useState({grnNumber:`GRN-${new Date().getFullYear()}-${Math.floor(Math.random()*1e3).toString().padStart(3,"0")}`,referenceNumber:""}),[P,g]=f.useState(null),U=m=>{const M={};return m===1&&!o&&(M.vendor="Please select a vendor to proceed"),m===2&&!d&&(M.purchaseOrder="Please select a purchase order to proceed"),m===3&&!p.referenceNumber&&(M.referenceNumber="Reference number is required"),j(M),Object.keys(M).length===0},De=()=>{l<de.length&&(U(l)?(w(m=>[...m,l]),b(l+1),g({type:"positive",title:"Success!",description:"Step completed successfully."})):g({type:"negative",title:"Validation Failed",description:"Please fix the errors and try again."}))},We=()=>{l>1&&(b(l-1),g(null),j({}))},Qe=m=>(P==null?void 0:P.type)==="negative"&&m===l?e.jsx(Z,{icon:Oe,color:"negative"}):R.includes(m)?e.jsx(Z,{icon:_t,color:"positive"}):m===l?e.jsx(Z,{icon:Ae,color:"primary"}):e.jsx(Z,{icon:Jt,color:"primary"}),Re=()=>{b(1),a(null),S(null),w([]),j({}),g(null),D({grnNumber:`GRN-${new Date().getFullYear()}-${Math.floor(Math.random()*1e3).toString().padStart(3,"0")}`,referenceNumber:""})},ie={nodes:[{id:"1",name:"Laptop Dell XPS 13",quantity:2,unitPrice:85e3},{id:"2",name:"Wireless Mouse",quantity:5,unitPrice:1200},{id:"3",name:"Keyboard",quantity:3,unitPrice:1500},{id:"4",name:"Monitor",quantity:1,unitPrice:1e4},{id:"5",name:"Speaker",quantity:2,unitPrice:2e3}]},Pe=()=>{var m,M,x,O,pe,ue,Ne,me;switch(l){case 1:return e.jsx(t,{padding:"spacing.6",display:"flex",gap:"spacing.6",height:"100%",children:e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(y,{size:"large",children:"Select Vendor"}),e.jsx(X,{label:"Available Vendors",name:"vendor",value:o??"",onChange:({value:n})=>{a(n),T.vendor&&j(r=>({...r,vendor:void 0}))},validationState:T.vendor?"error":"none",errorText:T.vendor,children:I.map(n=>e.jsx(ee,{padding:"spacing.4",borderRadius:"medium",elevation:"none",as:"label",accessibilityLabel:n.name,marginBottom:"spacing.3",isSelected:o===n.id,children:e.jsx(te,{children:e.jsxs(t,{display:"flex",gap:"spacing.3",alignItems:"flex-start",children:[e.jsx(Y,{value:n.id}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",flex:1,children:[e.jsx(i,{weight:"semibold",size:"medium",children:n.name}),e.jsxs(t,{display:"flex",gap:"spacing.4",flexWrap:"wrap",children:[e.jsxs(t,{display:"flex",gap:"spacing.2",alignItems:"center",children:[e.jsx(Zt,{color:"interactive.icon.gray.muted",size:"small"}),e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:n.email})]}),e.jsxs(t,{display:"flex",gap:"spacing.2",alignItems:"center",children:[e.jsx(Kt,{color:"interactive.icon.gray.muted",size:"small"}),e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:n.phone})]}),e.jsxs(t,{display:"flex",gap:"spacing.2",alignItems:"center",children:[e.jsx(ai,{color:"interactive.icon.gray.muted",size:"small"}),e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:n.address})]})]})]})]})})},n.id))})]})});case 2:return e.jsx(t,{padding:"spacing.6",display:"flex",gap:"spacing.6",height:"100%",children:e.jsxs(t,{flex:1,display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(y,{size:"large",children:"Link Purchase Order"}),e.jsx(X,{label:"Available Purchase Orders",name:"purchaseOrder",value:d??"",onChange:({value:n})=>{S(n),T.purchaseOrder&&j(r=>({...r,purchaseOrder:void 0}))},validationState:T.purchaseOrder?"error":"none",errorText:T.purchaseOrder,children:z.map(n=>e.jsx(ee,{as:"label",accessibilityLabel:n.number,isSelected:d===n.id,marginBottom:"spacing.3",elevation:"none",padding:"spacing.4",children:e.jsx(te,{children:e.jsxs(t,{display:"flex",gap:"spacing.3",alignItems:"flex-start",children:[e.jsx(Y,{value:n.id}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",flex:1,children:[e.jsxs(t,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[e.jsx(i,{weight:"semibold",size:"medium",children:n.number}),e.jsx(J,{size:"medium",color:n.status==="Approved"?"positive":"notice",children:n.status})]}),e.jsxs(t,{display:"flex",gap:"spacing.4",flexWrap:"wrap",children:[e.jsxs(t,{display:"flex",gap:"spacing.2",alignItems:"center",children:[e.jsx(Xt,{color:"interactive.icon.gray.muted",size:"small"}),e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:n.date})]}),e.jsxs(i,{size:"small",color:"surface.text.gray.muted",children:[n.items," Items"]}),e.jsxs(i,{size:"small",weight:"medium",children:["₹",n.amount.toLocaleString()]})]})]})]})})},n.id))})]})});case 3:return e.jsx(t,{padding:"spacing.6",display:"flex",gap:"spacing.6",height:"100%",children:e.jsxs(t,{flex:1,display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(y,{size:"large",children:"GRN Details"}),e.jsxs(t,{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"spacing.4",children:[e.jsx(E,{label:"GRN Number",value:p.grnNumber,isDisabled:!0,helpText:"Auto-generated"}),e.jsx(E,{label:"Reference Number",value:p.referenceNumber,onChange:({value:n})=>{D(r=>({...r,referenceNumber:n??""})),T.referenceNumber&&j(r=>({...r,referenceNumber:void 0}))},validationState:T.referenceNumber?"error":"none",errorText:T.referenceNumber,placeholder:"Enter reference number",isRequired:!0,necessityIndicator:"required"})]}),e.jsxs(t,{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"spacing.4",children:[e.jsx(E,{label:"Delivery Location",placeholder:"Enter delivery location",helpText:"Where items will be delivered"}),e.jsx(E,{label:"Expected Delivery Date",placeholder:"YYYY-MM-DD",helpText:"Expected delivery date"})]}),e.jsx($t,{label:"Additional Notes",placeholder:"Add any additional notes or special instructions",numberOfLines:5,helpText:"Optional notes for this GRN"})]})});case 4:return e.jsxs(t,{padding:"spacing.6",display:"flex",flexDirection:"column",gap:"spacing.6",height:"100%",children:[e.jsx(y,{size:"large",children:"Line Items"}),e.jsx(t,{flex:1,children:e.jsx(Xe,{data:ie,children:n=>e.jsxs(e.Fragment,{children:[e.jsx(Ze,{children:e.jsxs(Ke,{children:[e.jsx(F,{children:"Item Name"}),e.jsx(F,{children:"Quantity"}),e.jsx(F,{children:"Unit Price"}),e.jsx(F,{children:"Total Amount"}),e.jsx(F,{children:"Status"})]})}),e.jsx(_e,{children:n.map((r,C)=>e.jsxs(Je,{item:r,children:[e.jsx(H,{children:e.jsx(t,{children:e.jsx(i,{weight:"medium",children:r.name})})}),e.jsx(H,{children:r.quantity}),e.jsxs(H,{children:["₹",r.unitPrice.toLocaleString()]}),e.jsx(H,{children:e.jsxs(i,{weight:"medium",children:["₹",(r.quantity*r.unitPrice).toLocaleString()]})}),e.jsx(H,{children:e.jsx(J,{color:C%2===0?"positive":"notice",children:C%2===0?"Available":"Pending"})})]},r.id))}),e.jsx(et,{children:e.jsxs(tt,{children:[e.jsxs(A,{children:["Total (",n.length," items)"]}),e.jsx(A,{children:e.jsx(i,{weight:"medium",children:n.reduce((r,C)=>r+C.quantity,0)})}),e.jsx(A,{children:"-"}),e.jsx(A,{children:e.jsxs(i,{weight:"semibold",size:"medium",children:["₹",n.reduce((r,C)=>r+C.quantity*C.unitPrice,0).toLocaleString()]})}),e.jsx(A,{children:"-"})]})})]})})})]});case 5:return e.jsx(t,{padding:"spacing.6",display:"flex",gap:"spacing.6",height:"100%",children:e.jsxs(t,{flex:1,display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{children:e.jsx(y,{size:"large",children:"Review & Submit"})}),e.jsx(t,{display:"flex",flexDirection:"column",children:e.jsx(ee,{padding:"spacing.4",children:e.jsxs(te,{children:[e.jsx(y,{size:"small",marginBottom:"spacing.2",children:"Vendor Information"}),e.jsxs(t,{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"spacing.3",children:[e.jsxs(t,{children:[e.jsx(i,{weight:"medium",size:"small",children:"Vendor Name:"}),e.jsx(i,{children:(m=I.find(n=>n.id===o))==null?void 0:m.name})]}),e.jsxs(t,{children:[e.jsx(i,{weight:"medium",size:"small",children:"Contact Email:"}),e.jsx(i,{size:"small",children:(M=I.find(n=>n.id===o))==null?void 0:M.email})]}),e.jsxs(t,{children:[e.jsx(i,{weight:"medium",size:"small",children:"Phone Number:"}),e.jsx(i,{size:"small",children:(x=I.find(n=>n.id===o))==null?void 0:x.phone})]}),e.jsxs(t,{children:[e.jsx(i,{weight:"medium",size:"small",children:"Address:"}),e.jsx(i,{size:"small",children:(O=I.find(n=>n.id===o))==null?void 0:O.address})]})]}),e.jsx(re,{marginY:"spacing.3"}),e.jsx(y,{size:"small",marginBottom:"spacing.2",children:"Purchase Order Details"}),e.jsxs(t,{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"spacing.3",children:[e.jsxs(t,{children:[e.jsx(i,{weight:"medium",size:"small",children:"PO Number:"}),e.jsx(i,{children:(pe=z.find(n=>n.id===d))==null?void 0:pe.number})]}),e.jsxs(t,{children:[e.jsx(i,{weight:"medium",size:"small",children:"PO Date:"}),e.jsx(i,{children:(ue=z.find(n=>n.id===d))==null?void 0:ue.date})]}),e.jsxs(t,{children:[e.jsx(i,{weight:"medium",size:"small",children:"PO Amount:"}),e.jsxs(i,{children:["₹",(Ne=z.find(n=>n.id===d))==null?void 0:Ne.amount.toLocaleString()]})]}),e.jsxs(t,{children:[e.jsx(i,{weight:"medium",size:"small",children:"Status:"}),e.jsx(J,{color:"positive",children:((me=z.find(n=>n.id===d))==null?void 0:me.status)??"Unknown"})]})]}),e.jsx(re,{marginY:"spacing.3"}),e.jsx(y,{size:"small",marginBottom:"spacing.2",children:"GRN Information"}),e.jsxs(t,{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"spacing.3",children:[e.jsxs(t,{children:[e.jsx(i,{weight:"medium",size:"small",children:"GRN Number:"}),e.jsx(i,{children:p.grnNumber})]}),e.jsxs(t,{children:[e.jsx(i,{weight:"medium",size:"small",children:"Reference Number:"}),e.jsx(i,{children:p.referenceNumber})]})]})]})})})]})});default:return null}},ce=()=>{var m,M;switch(l){case 1:return e.jsxs(t,{padding:"spacing.5",display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(t,{children:[e.jsx(y,{size:"medium",children:"Select Vendor"}),e.jsx(i,{size:"medium",color:"surface.text.gray.muted",children:"Choose a vendor from the list below"})]}),e.jsx(X,{label:"Available Vendors",name:"vendor",value:o??"",onChange:({value:x})=>{a(x),T.vendor&&j(O=>({...O,vendor:void 0}))},validationState:T.vendor?"error":"none",errorText:T.vendor,children:I.slice(0,3).map(x=>e.jsx(Y,{value:x.id,children:x.name},x.id))})]});case 2:return e.jsxs(t,{padding:"spacing.5",display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(t,{children:[e.jsx(y,{size:"medium",children:"Link Purchase Order"}),e.jsx(i,{size:"medium",color:"surface.text.gray.muted",children:"Select a Purchase Order to link with this GRN"})]}),e.jsx(X,{label:"Available Purchase Orders",name:"purchaseOrder",value:d??"",onChange:({value:x})=>{S(x),T.purchaseOrder&&j(O=>({...O,purchaseOrder:void 0}))},validationState:T.purchaseOrder?"error":"none",errorText:T.purchaseOrder,children:z.slice(0,3).map(x=>e.jsxs(Y,{value:x.id,children:[x.number," - ₹",x.amount.toLocaleString()]},x.id))})]});case 3:return e.jsxs(t,{padding:"spacing.5",display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(t,{children:[e.jsx(y,{size:"medium",children:"GRN Details"}),e.jsx(i,{size:"medium",color:"surface.text.gray.muted",children:"Add basic details for this GRN"})]}),e.jsx(E,{label:"GRN Number",value:p.grnNumber,isDisabled:!0,helpText:"Auto-generated"}),e.jsx(E,{label:"Reference Number",value:p.referenceNumber,onChange:({value:x})=>{D(O=>({...O,referenceNumber:x??""})),T.referenceNumber&&j(O=>({...O,referenceNumber:void 0}))},validationState:T.referenceNumber?"error":"none",errorText:T.referenceNumber,placeholder:"Enter reference number",isRequired:!0,necessityIndicator:"required"})]});case 4:return e.jsxs(t,{padding:"spacing.5",display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(t,{children:[e.jsx(y,{size:"medium",children:"Line Items"}),e.jsx(i,{size:"medium",color:"surface.text.gray.muted",children:"Review the items for this GRN"})]}),e.jsxs(t,{children:[e.jsx(i,{weight:"medium",marginBottom:"spacing.3",children:"Selected Items:"}),ie.nodes.slice(0,2).map(x=>e.jsxs(t,{padding:"spacing.3",borderWidth:"thin",borderColor:"surface.border.gray.muted",borderRadius:"medium",marginBottom:"spacing.3",children:[e.jsxs(t,{display:"flex",justifyContent:"space-between",children:[e.jsx(i,{children:x.name}),e.jsxs(i,{children:["Qty: ",x.quantity]})]}),e.jsxs(i,{size:"small",color:"surface.text.gray.muted",children:["₹",x.unitPrice.toLocaleString()," × ",x.quantity," = ₹",(x.quantity*x.unitPrice).toLocaleString()]})]},x.id))]})]});case 5:return e.jsxs(t,{padding:"spacing.5",display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(t,{children:e.jsx(y,{size:"medium",children:"Review & Submit"})}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsxs(t,{display:"grid",gridTemplateColumns:"1fr 1fr",children:[e.jsxs(t,{children:[e.jsx(i,{weight:"medium",children:"Vendor:"}),e.jsx(i,{children:(m=I.find(x=>x.id===o))==null?void 0:m.name})]}),e.jsxs(t,{children:[e.jsx(i,{weight:"medium",children:"Purchase Order:"}),e.jsx(i,{children:(M=z.find(x=>x.id===d))==null?void 0:M.number})]})]}),e.jsxs(t,{display:"grid",gridTemplateColumns:"1fr 1fr",children:[e.jsxs(t,{children:[e.jsx(i,{weight:"medium",children:"GRN Number:"}),e.jsx(i,{children:p.grnNumber})]}),e.jsxs(t,{children:[e.jsx(i,{weight:"medium",children:"Reference Number:"}),e.jsx(i,{children:p.referenceNumber})]})]}),e.jsxs(t,{children:[e.jsx(i,{weight:"medium",children:"Total Amount:"}),e.jsxs(i,{children:["₹",ie.nodes.reduce((x,O)=>x+O.quantity*O.unitPrice,0).toLocaleString()]})]})]})]});default:return null}},K=()=>e.jsx(Yt,{orientation:"vertical",size:"medium",children:de.map(m=>e.jsx(Ut,{title:m.title,marker:Qe(m.stepNumber),isSelected:l===m.stepNumber,isDisabled:m.stepNumber>l,onClick:()=>m.stepNumber<=l&&b(m.stepNumber),stepProgress:R.includes(m.stepNumber)?"full":l===m.stepNumber?"start":"none"},m.stepNumber))}),Q=()=>e.jsxs(t,{display:"flex",gap:"spacing.4",justifyContent:"space-between",children:[e.jsx(B,{variant:"tertiary",onClick:We,isDisabled:l===1,children:"Previous"}),e.jsx(B,{variant:"primary",onClick:l===G?()=>{Re(),v(!1)}:De,children:l===G?"Submit":"Next"})]});return e.jsxs(t,{children:[e.jsx(B,{onClick:()=>v(!0),children:"Create GRN"}),V?c&&e.jsxs(t,{width:"100%",minHeight:"100%",backgroundColor:"surface.background.gray.moderate",display:"flex",flexDirection:"column",position:"fixed",top:"spacing.0",left:"spacing.0",zIndex:1e3,children:[e.jsx("div",{role:"button",tabIndex:0,onClick:()=>k(m=>!m),onKeyDown:()=>{},style:{zIndex:1006},children:e.jsx(t,{display:"flex",alignItems:"center",justifyContent:"center",padding:"spacing.4",backgroundColor:"surface.background.gray.subtle",borderBottomWidth:"thin",borderBottomColor:"surface.border.gray.muted",position:"relative",children:e.jsxs(t,{display:"flex",alignItems:"center",gap:"spacing.4",children:[(P==null?void 0:P.type)==="negative"&&e.jsx(Oe,{color:"feedback.icon.negative.intense"}),e.jsxs(J,{color:(P==null?void 0:P.type)==="negative"?"negative":void 0,children:[l," / ",G]}),e.jsx(y,{size:"small",children:N==null?void 0:N.title}),L?e.jsx(qt,{}):e.jsx(Et,{})]})})}),e.jsx($e,{value:l/G*100,showPercentage:!1,size:"medium",color:(P==null?void 0:P.type)==="negative"?"negative":void 0}),e.jsxs(t,{children:[e.jsx(Vt,{direction:"top",fromOffset:"100%",motionTriggers:["mount"],isVisible:L,children:e.jsx(t,{position:"fixed",top:"51px",left:"spacing.0",backgroundColor:"surface.background.gray.intense",zIndex:1005,width:"100%",height:"240px",borderBottomLeftRadius:"2xlarge",borderBottomRightRadius:"2xlarge",padding:"spacing.7",paddingTop:"spacing.0",children:K()})}),e.jsx(Wt,{motionTriggers:["mount"],isVisible:L,shouldUnmountWhenHidden:!0,children:e.jsx("div",{role:"button",tabIndex:0,style:{position:"fixed",width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1004},onClick:()=>k(m=>!m),onKeyDown:()=>{}})})]}),e.jsx(t,{overflow:"auto",height:"calc(100vh - 100px)",padding:"spacing.4",paddingBottom:"spacing.8",children:h==="large"?Pe():ce()}),e.jsx(t,{display:"flex",flexDirection:"column",gap:"spacing.4",padding:"spacing.4",backgroundColor:"surface.background.gray.subtle",borderTopWidth:"thin",borderTopColor:"surface.border.gray.muted",position:"fixed",bottom:"spacing.0",zIndex:1001,width:"100%",children:Q()})]}):e.jsxs(Te,{isOpen:c,onDismiss:()=>v(!1),size:h,children:[e.jsx(Le,{title:"Create GRN"}),e.jsx(qe,{padding:"spacing.0",children:e.jsxs(t,{display:"flex",height:"100%",children:[e.jsx(t,{width:"250px",padding:"spacing.5",backgroundColor:"surface.background.gray.moderate",children:K()}),e.jsx(t,{flex:1,display:"flex",flexDirection:"column",children:e.jsx(t,{flex:1,overflow:"auto",children:h==="large"?Pe():ce()})})]})}),e.jsx(Ee,{children:Q()})]})]})},Be=ti.bind({});Be.storyName="Multi Steps with StepGroup (Form Group + Medium Modal)";const se=ti.bind({});se.storyName="Multi Steps with StepGroup (Form Group + Large Modal)";se.args={modalSize:"large"};const Ve=({children:h,footer:c,isOpen:v,onDismiss:l,modalBodyPadding:b,modalSize:o="small",wrapInBottomSheetFooter:a=!1,customSnapPoints:d=[.35,.5,.85]})=>{const{theme:S}=we(),{matchedDeviceType:R}=je(S);return R==="mobile"?e.jsxs(Ie,{isOpen:v,onDismiss:l,snapPoints:d,children:[e.jsx(Me,{}),e.jsxs(ze,{padding:b,children:[h,c&&!a&&e.jsx(t,{marginTop:"spacing.6",children:c})]}),c&&a&&e.jsx(Qt,{children:c})]}):e.jsxs(Te,{isOpen:v,onDismiss:l,size:o,children:[e.jsx(Le,{}),e.jsx(qe,{padding:b,children:h}),c&&e.jsx(Ee,{children:c})]})},bi=()=>{const[h,c]=f.useState(!1),{theme:v}=we(),{matchedDeviceType:l}=je(v),b=l==="mobile";return e.jsxs(t,{children:[e.jsx(B,{onClick:()=>c(!0),children:"Open Modal"}),e.jsxs(Ve,{isOpen:h,onDismiss:()=>c(!1),footer:e.jsxs(t,{display:"flex",gap:"spacing.5",justifyContent:"flex-end",width:"100%",children:[e.jsx(B,{variant:"tertiary",isFullWidth:b,children:"Cancel"}),e.jsx(B,{isFullWidth:b,children:" Update"})]}),children:[e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(i,{size:"large",weight:"semibold",children:"Edit display name"}),e.jsx(i,{size:"medium",weight:"regular",color:"surface.text.gray.muted",children:"The new display name will reflect immediately on your dashboard after you update it. It will be visible to you and your team on the Green Loom dashboard."})]}),e.jsx(t,{marginTop:"spacing.5",children:e.jsx(E,{label:"Enter new display name",placeholder:"Enter your display name"})})]})]})},ve=bi.bind({});ve.storyName="Edit and Add Modal";const yi=()=>{const[h,c]=f.useState(!1),[v,l]=f.useState(""),b=[{value:"quickpay",title:"Quick Pay Button",subtitle:"Accepting fixed price payments?  Customers make quick payments of fixed price through this button",icon:ke},{value:"buynow",title:"Buy Now Button",subtitle:"Selling products or event tickets?  Sell multiple items with support for quantity using this button.",icon:ke},{value:"custom",title:"Custom Button",subtitle:"Build your own button with your own design and branding or use our pre-built templates.",icon:ke,isDisabled:!0}],{theme:o}=we(),{matchedDeviceType:a}=je(o),d=a==="mobile";return e.jsxs(t,{children:[e.jsx(B,{onClick:()=>c(!0),children:"Open Modal"}),e.jsxs(Ve,{isOpen:h,onDismiss:()=>{c(!1)},modalSize:"medium",footer:e.jsxs(t,{display:"flex",gap:"spacing.5",justifyContent:"flex-end",width:"100%",children:[e.jsx(B,{variant:"tertiary",isFullWidth:d,onClick:()=>c(!1),children:"Cancel"}),e.jsx(B,{isDisabled:!v,onClick:()=>{console.log("Selected payment method:",v),c(!1)},isFullWidth:d,children:"Proceed"})]}),modalBodyPadding:"spacing.0",wrapInBottomSheetFooter:!0,customSnapPoints:[.8,.9,.95],children:[e.jsxs(t,{paddingX:"spacing.6",paddingTop:"spacing.6",display:"flex",flexDirection:"column",gap:"spacing.1",children:[e.jsx(y,{size:"small",weight:"semibold",children:"Pick a Button Type"}),e.jsx(i,{color:"surface.text.gray.muted",size:"small",weight:"regular",children:"Pick a button which meets your requirements and get a head start on collecting payments or you could build your own"})]}),e.jsx(t,{padding:"spacing.6",children:e.jsx(t,{display:"grid",gridTemplateColumns:{base:"1fr 1fr",m:"1fr 1fr 1fr",l:"1fr 1fr 1fr"},justifyItems:"center",gap:"spacing.5",width:"100%",children:b.map((S,R)=>e.jsx(ee,{isSelected:v===S.value,onClick:S.isDisabled?void 0:()=>l(S.value),padding:"spacing.0",accessibilityLabel:`Select ${S.title}`,width:d?"165px":"228px",height:d?"184px":void 0,borderRadius:"medium",elevation:"none",cursor:S.isDisabled?"not-allowed":"pointer",children:e.jsxs(te,{children:[e.jsx(t,{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"spacing.6",marginX:"spacing.5",children:e.jsx(t,{padding:"10px",backgroundColor:S.isDisabled?"surface.background.gray.subtle":"surface.background.primary.subtle",width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"medium",children:e.jsx(ke,{color:S.isDisabled?"surface.icon.gray.muted":"surface.icon.primary.normal",size:"large"})})}),e.jsx(t,{display:"flex",flexDirection:"row",gap:"spacing.4",alignItems:"center",paddingX:"spacing.5",paddingY:"spacing.4",children:e.jsxs(t,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxHeight:"95px",gap:"spacing.2",children:[e.jsx(i,{size:"medium",weight:"semibold",color:S.isDisabled?"surface.text.gray.muted":"surface.text.gray.normal",children:S.title}),e.jsx(i,{size:"small",color:"surface.text.gray.muted",textAlign:"center",children:S.subtitle})]})})]})},`${S.value}-${R}`))})})]})]})},Se=yi.bind({});Se.storyName="Flow Selection Modal - with Icon Cards";const st=({cardCount:h=3})=>{const[c,v]=f.useState(!1),[l,b]=f.useState(""),{theme:o}=we(),{matchedDeviceType:a}=je(o),d=a==="mobile",S=()=>h===2?"small":h===3?"medium":"large",R=()=>h===2?{base:"1fr 1fr",m:"1fr 1fr"}:h===3?{base:"1fr 1fr",m:"1fr 1fr 1fr"}:{base:"1fr 1fr",m:"1fr 1fr 1fr 1fr"},w=()=>h===2?d?"165px":"160px":h===3?d?"165px":"230px":d?"165px":"220px",L=()=>h===2?d?"250px":"300px":h===3||d?"250px":"260px",k=[{value:"quickpay",title:"Quick Pay Button",subtitle:"Accepting fixed price payments?  Customers make quick payments of fixed price through this button",img:pi,isDisabled:!1},{value:"buynow",title:"Buy Now Button",subtitle:"Selling products or event tickets?  Sell multiple items with  quantity supported.",img:mi,isDisabled:!1},{value:"donations",title:"Donations Button",subtitle:"Raising money for a good cause?  Supporters can pick from presets or donate amount of their choice",img:ui,isDisabled:!1}],V={value:"custom",title:"Custom Button",subtitle:"Build your own button with your own design and branding. You can also use our pre-built templates.",img:gi,isDisabled:!0},G=[...k,V].slice(0,h);return e.jsxs(t,{children:[e.jsx(B,{onClick:()=>v(!0),children:"Open Modal"}),e.jsxs(Ve,{isOpen:c,onDismiss:()=>{v(!1)},modalSize:S(),footer:e.jsxs(t,{display:"flex",gap:"spacing.5",justifyContent:"flex-end",width:"100%",children:[e.jsx(B,{variant:"tertiary",isFullWidth:d,onClick:()=>v(!1),children:"Cancel"}),e.jsx(B,{isDisabled:!l,onClick:()=>{console.log("Selected payment method:",l),v(!1)},isFullWidth:d,children:"Proceed"})]}),modalBodyPadding:"spacing.0",wrapInBottomSheetFooter:!0,customSnapPoints:[.8,.9,.95],children:[e.jsxs(t,{paddingX:"spacing.6",paddingTop:"spacing.6",display:"flex",flexDirection:"column",gap:"spacing.1",children:[e.jsx(y,{size:"small",weight:"semibold",children:"Pick a Button Type"}),e.jsx(i,{color:"surface.text.gray.muted",size:"small",weight:"regular",children:"Pick a button which meets your requirements and get a head start on collecting payments or you could build your own"})]}),e.jsx(t,{padding:"spacing.6",children:e.jsx(t,{display:"grid",gridTemplateColumns:R(),justifyItems:"center",gap:"spacing.5",width:"100%",children:G.map((N,T)=>e.jsx(ee,{isSelected:l===N.value,onClick:N.isDisabled?void 0:()=>b(N.value),padding:"spacing.0",accessibilityLabel:`Select ${N.title}`,width:w(),height:L(),borderRadius:"medium",elevation:"none",cursor:N.isDisabled?"not-allowed":"pointer",children:e.jsx(te,{children:e.jsxs(t,{overflow:"hidden",children:[e.jsx(t,{children:e.jsx("img",{src:N.img,alt:N.title,width:d?"160px":"230px",height:d?"93px":"130px",style:{borderRadius:"4px"}})}),e.jsx(t,{display:"flex",flexDirection:"row",gap:"spacing.4",alignItems:"center",paddingX:"spacing.5",paddingY:"spacing.4",alignContent:"center",justifyContent:"center",children:e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(i,{size:"medium",weight:"semibold",color:N.isDisabled?"surface.text.gray.muted":"surface.text.gray.normal",children:N.title}),e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:N.subtitle})]})})]})})},`${N.value}-${T}`))})})]})]})},ne=st.bind({});ne.args={cardCount:2};ne.storyName="Flow Selection - 2 Cards (Small Modal)";const oe=st.bind({});oe.args={cardCount:3};oe.storyName="Flow Selection - 3 Cards (Medium Modal)";const le=st.bind({});le.args={cardCount:4};le.storyName="Flow Selection - 4 Cards (Large Modal)";const Bi=()=>{const[h,c]=f.useState(!1),{theme:v}=we(),{matchedDeviceType:l}=je(v),b=l==="mobile",o=[{value:"1-2 days",label:"1-2 days"},{value:"3-5 days",label:"3-5 days"},{value:"6-8 days",label:"6-8 days"},{value:"9-15 days",label:"9-15 days"},{value:"not applicable",label:"Not Applicable"}];return e.jsxs(t,{children:[e.jsx(B,{onClick:()=>c(!0),children:"Open Modal"}),e.jsx(Ve,{isOpen:h,onDismiss:()=>c(!1),modalSize:"large",modalBodyPadding:"spacing.0",customSnapPoints:[.8,.9,.95],wrapInBottomSheetFooter:!0,footer:b?e.jsxs(t,{display:"flex",justifyContent:"flex-end",gap:"spacing.5",children:[e.jsx(B,{variant:"tertiary",isFullWidth:b,onClick:()=>c(!1),children:"Back"}),e.jsx(B,{variant:"primary",isFullWidth:b,onClick:()=>c(!1),children:"Continue"})]}):void 0,children:e.jsxs(t,{display:"grid",gridTemplateColumns:b?"1fr":"auto 1fr",gridTemplateRows:b?"1fr":"auto 1fr",width:"100%",height:"100%",children:[!b&&e.jsx(t,{backgroundColor:"surface.background.gray.subtle",height:"596px",width:"400px",display:"flex",flexDirection:"column",justifyContent:"flex-end",overflow:"hidden",gridRow:"span 2",children:e.jsx("img",{src:xi,height:"596px",width:"100%",alt:"random graphics"})}),e.jsxs(t,{height:"596px",paddingTop:"spacing.6",width:"100%",overflow:"auto",display:"flex",flexDirection:"column",justifyContent:"space-between",children:[e.jsxs(t,{paddingX:"spacing.6",children:[e.jsx(y,{size:"medium",weight:"semibold",children:"Create policy pages with Green Loom"}),e.jsx(i,{size:"medium",weight:"regular",color:"surface.text.gray.muted",children:"We need a few details to create the missing policy pages for you"}),e.jsxs(t,{marginTop:"spacing.6",display:"flex",gap:"spacing.7",flexDirection:"column",height:"100%",width:"100%",children:[e.jsx(Ye,{label:"Shipping time",children:o.map(a=>e.jsx(Ue,{value:a.value,children:a.label},a.value))}),e.jsx(Ye,{label:"Cancellation request time",children:o.map(a=>e.jsx(Ue,{value:a.value,children:a.label},a.value))}),e.jsx(Ye,{label:"Refund processing time",children:o.map(a=>e.jsx(Ue,{value:a.value,children:a.label},a.value))}),e.jsx(E,{label:"Support contact number",prefix:"+91",placeholder:"9XXXXXXXXX"}),e.jsx(E,{label:"Support Email ID",placeholder:"support@greenloom.ai"})]})]}),!b&&e.jsx(t,{children:e.jsx(Ee,{children:e.jsxs(t,{display:"flex",justifyContent:"flex-end",gap:"spacing.5",children:[e.jsx(B,{variant:"tertiary",onClick:()=>c(!1),children:"Back"}),e.jsx(B,{variant:"primary",onClick:()=>c(!1),children:"Continue"})]})})})]})]})})]})},Ce=Bi.bind({});Ce.storyName="Single Step Form Modal";var lt,dt,ct;be.parameters={...be.parameters,docs:{...(lt=be.parameters)==null?void 0:lt.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const [formData, setFormData] = React.useState({
    qrUsage: '',
    acceptFixedAmount: '',
    description: ''
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [alert, setAlert] = React.useState<{
    type: 'positive' | 'negative';
    title: string;
    description: string;
  } | null>(null);
  const [isQrGenerated, setIsQrGenerated] = React.useState(false);
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
    if (!formData.qrUsage) {
      newErrors.qrUsage = 'Please select QR usage type';
    }
    if (!formData.acceptFixedAmount) {
      newErrors.acceptFixedAmount = 'Please select if you want to accept fixed amount';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>): void => {
    e?.preventDefault();
    if (validateForm()) {
      setAlert({
        type: 'positive',
        title: 'Success!',
        description: 'Your QR code has been created successfully.'
      });
      setIsQrGenerated(true);
    } else {
      setAlert({
        type: 'negative',
        title: 'QR Generation Failed',
        description: 'Please fill all the fields correctly'
      });
      setIsQrGenerated(false);
    }
  };
  const renderContent = ({
    isMobile
  }: {
    isMobile: boolean;
  }): React.ReactElement => <Box display="flex" gap="spacing.4" justifyContent="space-between">
      <Box>
        <form onSubmit={handleSubmit}>
          <Box padding="spacing.4" display="flex" flexDirection="column" gap="spacing.4">
            <Box>
              <Heading size="medium" weight="regular">
                Configure your QR code settings
              </Heading>
            </Box>

            {!isMobile && alert && <Alert color={alert.type} title={alert.title} description={alert.description} emphasis="subtle" isDismissible onDismiss={() => setAlert(null)} isFullWidth />}

            <Box display="flex" flexDirection="column" gap="spacing.4">
              <RadioGroup label="QR Usage" name="qrUsage" value={formData.qrUsage} onChange={({
              value
            }) => handleChange('qrUsage', value)} validationState={errors.qrUsage ? 'error' : 'none'} errorText={errors.qrUsage}>
                <Radio value="single">Single Payment</Radio>
                <Radio value="multiple">Multiple Payments</Radio>
              </RadioGroup>

              <RadioGroup label="Accept Fixed Amount" name="acceptFixedAmount" value={formData.acceptFixedAmount} onChange={({
              value
            }) => handleChange('acceptFixedAmount', value)} validationState={errors.acceptFixedAmount ? 'error' : 'none'} errorText={errors.acceptFixedAmount}>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </RadioGroup>

              <TextInput label="Description" name="description" value={formData.description} onChange={({
              value
            }) => handleChange('description', value)} placeholder="Enter description (optional)" helpText="Add a description to identify this QR code" />

              {!isMobile && <Button isFullWidth type="submit" iconPosition="right">
                  Create QR Code
                </Button>}
            </Box>
          </Box>
        </form>
      </Box>
      {!isMobile && <Box width="500px">
          <Preview>
            <PreviewHeader />
            <PreviewBody>
              {isQrGenerated ? <Box>
                  <img src="https://blog.razorpay.in/blog-content/uploads/2021/11/QR-codes-blog-header.png" alt="QR Code" height="400px" />
                </Box> : <Box>
                  <Text>QR Code Preview</Text>
                </Box>}
            </PreviewBody>
            <PreviewFooter />
          </Preview>
        </Box>}
    </Box>;
  const renderPreview = (): React.ReactElement => <Box display="flex" flexDirection="column" gap="spacing.4">
      <Preview>
        <PreviewHeader />
        <PreviewBody>
          <Box display="flex" flexDirection="column" gap="spacing.4">
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
              <img src="https://blog.razorpay.in/blog-content/uploads/2021/11/QR-codes-blog-header.png" alt="QR Code" height="400px" />
            </Box>
            <Box padding="spacing.4">
              <Text>QR Code Details:</Text>
              <Box marginTop="spacing.3">
                <Text>
                  Usage: {formData.qrUsage === 'single' ? 'Single Payment' : 'Multiple Payments'}
                </Text>
                <Text>Fixed Amount: {formData.acceptFixedAmount === 'yes' ? 'Yes' : 'No'}</Text>
                {formData.description && <Text>Description: {formData.description}</Text>}
              </Box>
            </Box>
          </Box>
        </PreviewBody>
        <PreviewFooter />
      </Preview>
    </Box>;
  const renderFooter = ({
    isMobile
  }: {
    isMobile: boolean;
  }): React.ReactElement => <Box display="flex" flexDirection="column" gap="spacing.3" width="100%">
      {isMobile && alert && <Alert color={alert.type} title={alert.title} description={alert.description} emphasis="subtle" isDismissible onDismiss={() => setAlert(null)} isFullWidth />}
      <Box display="flex" gap="spacing.3" justifyContent="space-between" width="100%">
        {isMobile && <Button variant="tertiary" icon={FileIcon} onClick={() => setIsPreviewOpen(true)} iconPosition="left" />}
        <Box display="flex" width="100%" justifyContent="flex-end" gap="spacing.3">
          <Button variant="tertiary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          {isMobile && !isQrGenerated && <Button onClick={() => handleSubmit()} iconPosition="right">
              Create QR Code
            </Button>}

          {!isMobile && <Button variant="primary" onClick={() => handleSubmit()} isDisabled={!isQrGenerated}>
              Save
            </Button>}
        </Box>
      </Box>
    </Box>;
  return <Box>
      <Button onClick={() => setIsOpen(!isOpen)}>Create QR Code</Button>
      {isMobile ? <>
          <BottomSheet isOpen={isOpen} onDismiss={() => setIsOpen(false)} snapPoints={[0.75, 0.75, 0.75]}>
            <BottomSheetHeader title="Create QR Code" />
            <BottomSheetBody>{renderContent({
            isMobile
          })}</BottomSheetBody>
            <BottomSheetFooter>{renderFooter({
            isMobile
          })}</BottomSheetFooter>
          </BottomSheet>
          <BottomSheet isOpen={isPreviewOpen} onDismiss={() => setIsPreviewOpen(false)} snapPoints={[1, 1, 1]}>
            <BottomSheetHeader title="QR Code Preview" />
            <BottomSheetBody>{renderPreview()}</BottomSheetBody>
          </BottomSheet>
        </> : <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)} size="large">
          <ModalHeader title="Create QR Code" />
          <ModalBody>{renderContent({
          isMobile
        })}</ModalBody>
          <ModalFooter>{renderFooter({
          isMobile
        })}</ModalFooter>
        </Modal>}
    </Box>;
}`,...(ct=(dt=be.parameters)==null?void 0:dt.docs)==null?void 0:ct.source}}};var pt,ut,mt;ye.parameters={...ye.parameters,docs:{...(pt=ye.parameters)==null?void 0:pt.docs,source:{originalSource:`({
  withProgressBar = false
}: {
  withProgressBar?: boolean;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [showStepGroup, setShowStepGroup] = React.useState(false);
  const [selectedVendor, setSelectedVendor] = React.useState<string | null>(null);
  const [selectedPO, setSelectedPO] = React.useState<string | null>(null);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<{
    vendor?: string;
    purchaseOrder?: string;
    grnDetails?: string;
    date?: string;
  }>({});
  const [grnDetails, setGrnDetails] = React.useState({
    grnNumber: \`GRN-\${new Date().getFullYear()}-\${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}\`,
    date: '',
    notes: ''
  });
  const [alert, setAlert] = React.useState<{
    type: 'positive' | 'negative';
    title: string;
    description: string;
  } | null>(null);
  const onStepGroupChange = (): void => {
    setAlert(null);
    setErrors({});
  };
  const handleStepClick = (stepNumber: number): void => {
    // Allow clicking on any previous step or the current step
    if (stepNumber <= currentStep) {
      setCurrentStep(stepNumber);
    }
    setShowStepGroup(false);
    onStepGroupChange();
  };
  const validateStep = (step: number): boolean => {
    const newErrors: typeof errors = {};
    if (step === 1 && !selectedVendor) {
      newErrors.vendor = 'Please select a vendor to proceed';
    }
    if (step === 2 && !selectedPO) {
      newErrors.purchaseOrder = 'Please select a purchase order to proceed';
    }
    if (step === 3) {
      if (!grnDetails.date) {
        newErrors.date = 'Date is required';
      } else {
        // Check date format and validity using dayjs
        const date = dayjs(grnDetails.date, 'YYYY-MM-DD', true);
        if (!date.isValid()) {
          newErrors.date = 'Please enter a valid date in YYYY-MM-DD format';
        } else {
          // Check if date is in the past
          const today = dayjs().startOf('day');
          if (date.isBefore(today)) {
            newErrors.date = 'Date cannot be in the past';
          }
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleNextStep = (): void => {
    if (currentStep < GRNSteps.length) {
      if (validateStep(currentStep)) {
        setCompletedSteps(prev => [...prev, currentStep]);
        setCurrentStep(currentStep + 1);
        if (currentStep === 3) {
          setAlert({
            type: 'positive',
            title: 'Success!',
            description: 'GRN details have been saved successfully.'
          });
        }
      } else if (currentStep === 3) {
        setAlert({
          type: 'negative',
          title: 'Validation Failed',
          description: 'Please fix the errors in the form and try again.'
        });
      }
    }
  };
  const handlePreviousStep = (): void => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      onStepGroupChange();
    }
  };
  const getStepIcon = (stepNumber: number): React.ReactElement => {
    if (alert?.type === 'negative' && stepNumber === currentStep) {
      return <StepItemIcon icon={InfoIcon} color="negative" />;
    }
    if (completedSteps.includes(stepNumber)) {
      return <StepItemIcon icon={CheckIcon} color="positive" />;
    }
    if (stepNumber === currentStep) {
      return <StepItemIcon icon={FileIcon} color="primary" />;
    }
    return <StepItemIcon icon={LockIcon} color="primary" />;
  };
  const tableData = {
    nodes: [{
      id: '1',
      name: 'Laptop Dell XPS 13',
      quantity: 2,
      unitPrice: 85000
    }, {
      id: '2',
      name: 'Wireless Mouse',
      quantity: 5,
      unitPrice: 1200
    }, {
      id: '3',
      name: 'Mechanical Keyboard',
      quantity: 3,
      unitPrice: 4500
    }, {
      id: '4',
      name: 'External SSD 1TB',
      quantity: 4,
      unitPrice: 6500
    }, {
      id: '5',
      name: 'USB-C Hub',
      quantity: 2,
      unitPrice: 2500
    }]
  };

  // Dynamically filter steps for mobile (remove review step)
  const visibleSteps = isMobile ? GRNSteps.filter(s => s.stepNumber !== 5) : GRNSteps;
  const lastStep = visibleSteps[visibleSteps.length - 1].stepNumber;
  const currentStepObj = visibleSteps.find(s => s.stepNumber === currentStep);
  const resetState = (): void => {
    setCurrentStep(1);
    setSelectedVendor(null);
    setSelectedPO(null);
    setCompletedSteps([]);
    setErrors({});
    setAlert(null);
    setGrnDetails({
      grnNumber: \`GRN-\${new Date().getFullYear()}-\${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}\`,
      date: '',
      notes: ''
    });
  };
  const handleDateChange = (value: DateValue | undefined): void => {
    setGrnDetails(prev => ({
      ...prev,
      date: value ? dayjs(value).format('YYYY-MM-DD') : ''
    }));
    if (errors.date) {
      setErrors(prev => ({
        ...prev,
        date: undefined
      }));
    }
  };
  const deskTopFooter = ({
    isLastStep
  }: {
    isLastStep?: boolean;
  }): React.ReactElement => {
    return <Box display="flex" justifyContent="space-between" marginTop="spacing.4" padding="spacing.4" borderTopColor="surface.border.gray.muted">
        <Button variant="tertiary" onClick={() => setIsOpen(!isOpen)}>
          Save and Close
        </Button>
        <Box display="flex" gap="spacing.4">
          <Button variant="tertiary" onClick={handlePreviousStep}>
            Previous
          </Button>
          <Button variant="primary" onClick={isLastStep ? () => {
          resetState();
          setIsOpen(false);
        } : handleNextStep}>
            {isLastStep ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </Box>;
  };

  // Move user from step 5 to step 4 when switching to mobile (mobile doesn't show review step)
  useEffect(() => {
    if (isMobile && currentStep === 5) {
      setCurrentStep(4);
    }
  }, [isMobile]);
  const renderReviewContent = (): React.ReactElement => <Box display="flex" flexDirection="column" gap="spacing.4" width="100%" height="100%" justifyContent="space-between">
      <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} padding="spacing.7" gap="spacing.4" width="100%" height="100%" justifyContent="space-between">
        <Divider />
        <Box width="100%" height={isMobile ? '400px' : '600px'}>
          <Preview defaultZoom={0.5}>
            <PreviewHeader />
            <PreviewBody>
              <Box padding="spacing.4" display="flex" flexDirection="column" gap="spacing.6" backgroundColor="surface.background.gray.intense">
                {/* GRN Details Section */}
                <Box padding="spacing.4" borderBottomWidth="thin" borderBottomColor="surface.border.gray.muted">
                  <Heading size="large">Goods Receipt Note</Heading>
                  <Text size="small" color="surface.text.gray.muted">
                    {grnDetails.grnNumber}
                  </Text>
                  <Text size="small" color="surface.text.gray.muted">
                    Date: {grnDetails.date}
                  </Text>
                </Box>
                {/* Vendor Details Section */}
                <Box>
                  <Heading size="medium">Vendor Details</Heading>
                  <Box marginTop="spacing.3" padding="spacing.4" backgroundColor="surface.background.gray.intense" borderRadius="medium">
                    {selectedVendor && <>
                        <Box display="flex" justifyContent="space-between">
                          <Box>
                            <Text weight="semibold" size="large">
                              {GRNVendors.find(v => v.id === selectedVendor)?.name}
                            </Text>
                            <Text size="small" color="surface.text.gray.muted">
                              {GRNVendors.find(v => v.id === selectedVendor)?.email}
                            </Text>
                          </Box>
                        </Box>
                        <Box marginTop="spacing.3" display="flex" flexDirection="column" gap="spacing.2">
                          <Text size="small">
                            Phone: {GRNVendors.find(v => v.id === selectedVendor)?.phone}
                          </Text>
                          <Text size="small">
                            Address: {GRNVendors.find(v => v.id === selectedVendor)?.address}
                          </Text>
                        </Box>
                      </>}
                  </Box>
                </Box>
                {/* PO Details Section */}
                <Box>
                  <Heading size="medium">Purchase Order Details</Heading>
                  <Box marginTop="spacing.3" padding="spacing.4" backgroundColor="surface.background.gray.moderate" borderRadius="medium">
                    {selectedPO && <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box>
                          <Text weight="semibold" size="large">
                            {GRNPurchaseOrders.find(p => p.id === selectedPO)?.number}
                          </Text>
                          <Text size="small" color="surface.text.gray.muted">
                            Date: {GRNPurchaseOrders.find(p => p.id === selectedPO)?.date}
                          </Text>
                        </Box>
                        <Badge size="medium" color={GRNPurchaseOrders.find(p => p.id === selectedPO)?.status === 'Approved' ? 'positive' : 'notice'}>
                          {GRNPurchaseOrders.find(p => p.id === selectedPO)?.status ?? ''}
                        </Badge>
                      </Box>}
                  </Box>
                </Box>
                {/* Notes Section */}
                {grnDetails.notes && <Box>
                    <Heading size="medium">Notes</Heading>
                    <Box marginTop="spacing.3" padding="spacing.4" backgroundColor="surface.background.gray.moderate" borderRadius="medium">
                      <Text>{grnDetails.notes}</Text>
                    </Box>
                  </Box>}
                {/* Line Items Section */}
                <Box>
                  <Heading size="medium">Line Items</Heading>
                  <Box marginTop="spacing.3">
                    <Table data={tableData}>
                      {tableData => <>
                          <TableHeader>
                            <TableHeaderRow>
                              <TableHeaderCell>Item Name</TableHeaderCell>
                              <TableHeaderCell>Quantity</TableHeaderCell>
                              <TableHeaderCell>Unit Price</TableHeaderCell>
                              <TableHeaderCell>Total Amount</TableHeaderCell>
                            </TableHeaderRow>
                          </TableHeader>
                          <TableBody>
                            {tableData.map(item => <TableRow key={item.id} item={item}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>₹{item.unitPrice.toLocaleString()}</TableCell>
                                <TableCell>
                                  ₹{(item.quantity * item.unitPrice).toLocaleString()}
                                </TableCell>
                              </TableRow>)}
                          </TableBody>
                          <TableFooter>
                            <TableFooterRow>
                              <TableFooterCell>Total Amount</TableFooterCell>
                              <TableFooterCell>-</TableFooterCell>
                              <TableFooterCell>-</TableFooterCell>
                              <TableFooterCell>
                                ₹
                                {tableData
                            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                            .reduce((sum, item) => sum + item.quantity * item.unitPrice, 0).toLocaleString()}
                              </TableFooterCell>
                            </TableFooterRow>
                          </TableFooter>
                        </>}
                    </Table>
                  </Box>
                </Box>
              </Box>
            </PreviewBody>
            <PreviewFooter />
          </Preview>
        </Box>
      </Box>
      {!isMobile && deskTopFooter({
      isLastStep: true
    })}
    </Box>;

  // In renderStepContent, do not show step 5 on mobile
  const renderStepContent = (isMobile: boolean): React.ReactElement | null => {
    if (isMobile && currentStep === 5) return null;
    switch (currentStep) {
      case 1:
        return <Box display="flex" flexDirection="column" gap="spacing.4" width="100%" height="100%" justifyContent="space-between">
            <Box display="flex" flexDirection="column" padding="spacing.7" justifyContent="center" alignItems="center">
              <Box display="flex" flexDirection="column" gap="spacing.4">
                <Box>
                  <Heading size="medium">Select Vendor</Heading>
                  <Text>Choose a vendor from the list below to proceed with GRN creation.</Text>
                </Box>
                <Divider />
                <RadioGroup label="Vendors" name="vendor" value={selectedVendor ?? ''} onChange={({
                value
              }) => {
                setSelectedVendor(value);
                if (errors.vendor) {
                  setErrors(prev => ({
                    ...prev,
                    vendor: undefined
                  }));
                }
              }} validationState={errors.vendor ? 'error' : 'none'} errorText={errors.vendor}>
                  {GRNVendors.map(vendor => <Card key={vendor.id} padding="spacing.4" borderRadius="medium" elevation="none" as="label" accessibilityLabel={vendor.name} marginBottom="spacing.2">
                      <CardBody>
                        <RadioCard value={vendor.id} label={vendor.name}>
                          <Box display="flex" gap="spacing.2" flexDirection={isMobile ? 'column' : 'row'}>
                            <Box display="flex" gap="spacing.2">
                              <MailIcon color="interactive.icon.gray.muted" />
                              <Text size="small" color="surface.text.gray.muted">
                                {vendor.email}
                              </Text>
                              {!isMobile && <Text size="small" color="surface.text.gray.muted">
                                  •
                                </Text>}
                            </Box>
                            <Box display="flex" gap="spacing.2">
                              <PhoneIcon color="interactive.icon.gray.muted" />
                              <Text size="small" color="surface.text.gray.muted">
                                {vendor.phone}
                              </Text>
                            </Box>
                          </Box>
                        </RadioCard>
                      </CardBody>
                    </Card>)}
                </RadioGroup>
              </Box>
            </Box>
            {!isMobile && deskTopFooter({})}
          </Box>;
      case 2:
        return <Box display="flex" width="100%" height="100%">
            <Box display="flex" flexDirection="column" width="100%" justifyContent="space-between">
              <Box display="flex" width="100%" justifyContent="space-between" height="100%">
                <Box flex={6} display="flex" flexDirection="column" height="100%" justifyContent="space-between" width="100%">
                  <Box display="flex" alignItems="center" justifyContent="center" width="100%">
                    <Box padding="spacing.5" width="500px">
                      <Box display="flex" flexDirection="column" gap="spacing.2">
                        <Heading size="medium">Link PO</Heading>
                        <Text>Select a Purchase Order to link with this GRN.</Text>
                      </Box>

                      <Box flex={1} gap="spacing.2" marginTop="spacing.2">
                        <RadioGroup label="Purchase Orders" name="purchaseOrder" value={selectedPO ?? ''} onChange={({
                        value
                      }) => {
                        setSelectedPO(value);
                        if (errors.purchaseOrder) {
                          setErrors(prev => ({
                            ...prev,
                            purchaseOrder: undefined
                          }));
                        }
                      }} validationState={errors.purchaseOrder ? 'error' : 'none'} errorText={errors.purchaseOrder}>
                          {GRNPurchaseOrders.map(po => <Card as="label" accessibilityLabel={po.number} isSelected={selectedPO === po.id} marginBottom="spacing.2" key={po.id} elevation="none">
                              <CardBody>
                                <RadioCard value={po.id} label={po.number}>
                                  <Box display="flex" flexDirection="column" gap="spacing.2">
                                    <Box display="flex" gap="spacing.2" alignItems="center">
                                      <Text size="small" color="surface.text.gray.muted">
                                        {po.vendor}
                                      </Text>
                                      <Badge size="medium" color={po.status === 'Approved' ? 'positive' : 'notice'}>
                                        {po.status || ''}
                                      </Badge>
                                    </Box>
                                    <Box display="flex" gap="spacing.2">
                                      <Box display="flex" gap="spacing.2">
                                        <CalendarIcon color="interactive.icon.gray.muted" />
                                        <Text size="small" color="surface.text.gray.muted">
                                          {po.date}
                                        </Text>
                                      </Box>
                                      <Text size="small" color="surface.text.gray.muted">
                                        •
                                      </Text>

                                      <Text size="small" color="surface.text.gray.muted">
                                        {po.items} Items
                                      </Text>
                                      <Text size="small" color="surface.text.gray.muted">
                                        •
                                      </Text>
                                      <Text size="small" color="surface.text.gray.muted">
                                        ₹ {po.amount.toLocaleString()}
                                      </Text>
                                    </Box>
                                  </Box>
                                </RadioCard>
                              </CardBody>
                            </Card>)}
                        </RadioGroup>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {!isMobile && <Box flex={4}>
                    <Preview isDragAndZoomDisabled>
                      <PreviewBody>
                        <Box padding="spacing.4" display="flex" flexDirection="column" gap="spacing.4" backgroundColor="surface.background.gray.moderate">
                          {selectedVendor && <>
                              <Box>
                                <Text weight="semibold" size="large">
                                  {GRNVendors.find(v => v.id === selectedVendor)?.name}
                                </Text>
                                <Text size="small" color="surface.text.gray.muted">
                                  {GRNVendors.find(v => v.id === selectedVendor)?.email}
                                </Text>
                              </Box>
                              <Box display="flex" flexDirection="column" gap="spacing.2">
                                <Text size="small">
                                  Phone: {GRNVendors.find(v => v.id === selectedVendor)?.phone}
                                </Text>
                                <Text size="small">
                                  Address:{' '}
                                  {GRNVendors.find(v => v.id === selectedVendor)?.address}
                                </Text>
                              </Box>
                            </>}
                          {selectedPO && <Box marginTop="spacing.4" paddingTop="spacing.4" borderTopWidth="thin" borderTopColor="surface.border.gray.muted">
                              <Text weight="semibold" size="medium">
                                Selected PO
                              </Text>
                              <Box marginTop="spacing.2">
                                <Text size="small">
                                  PO Number:{' '}
                                  {GRNPurchaseOrders.find(p => p.id === selectedPO)?.number}
                                </Text>
                                <Text size="small">
                                  Amount: ₹
                                  {GRNPurchaseOrders.find(p => p.id === selectedPO)?.amount.toLocaleString()}
                                </Text>
                              </Box>
                            </Box>}
                        </Box>
                      </PreviewBody>
                    </Preview>
                  </Box>}
              </Box>
              {!isMobile && deskTopFooter({})}
            </Box>
          </Box>;
      case 3:
        return <Box display="flex" flexDirection="column" gap="spacing.4" width="100%" height="100%" justifyContent="space-between">
            <Box padding="spacing.7" display="flex" flexDirection="column" gap="spacing.4">
              <Box>
                <Heading size="medium">GRN Details</Heading>
                <Text>Add additional details for this GRN.</Text>
              </Box>
              <Divider />
              {!isMobile && alert && <Alert color={alert.type} title={alert.title} description={alert.description} emphasis="subtle" isDismissible onDismiss={() => setAlert(null)} isFullWidth />}
              <Box display="flex" flexDirection="column" gap="spacing.4">
                <TextInput label="GRN Number" name="grnNumber" value={grnDetails.grnNumber} onChange={({
                value
              }) => setGrnDetails(prev => ({
                ...prev,
                grnNumber: value ?? ''
              }))} isDisabled helpText="Auto-generated GRN number" />
                <DatePicker label="Date" name="date" value={grnDetails.date ? dayjs(grnDetails.date).toDate() : undefined} onApply={value => {
                handleDateChange(value);
              }} onChange={value => {
                handleDateChange(value);
              }} onOpenChange={() => {
                setIsDatePickerOpen(prev => !prev);
              }} validationState={errors.date ? 'error' : 'none'} errorText={errors.date} helpText="Select the GRN date" isRequired necessityIndicator="required" minDate={new Date()} // Prevents selecting past dates
              />
                <TextArea label="Notes" name="notes" value={grnDetails.notes} onChange={({
                value
              }) => setGrnDetails(prev => ({
                ...prev,
                notes: value ?? ''
              }))} numberOfLines={4} placeholder="Add any additional notes or comments" />
              </Box>
            </Box>
            {!isMobile && deskTopFooter({})}
          </Box>;
      case 4:
        return <Box display="flex" flexDirection="column" justifyContent="space-between" gap="spacing.4" height="100%">
            <Box padding="spacing.7" display="flex" flexDirection="column" gap="spacing.4">
              <Box>
                <Heading size="medium">Line Item Details</Heading>
                <Text>Add line items and quantities for this GRN.</Text>
              </Box>
              <Divider />
              <Table data={tableData}>
                {tableData => <>
                    <TableHeader>
                      <TableHeaderRow>
                        <TableHeaderCell>Item Name</TableHeaderCell>
                        <TableHeaderCell>Quantity</TableHeaderCell>
                        <TableHeaderCell>Unit Price</TableHeaderCell>
                        <TableHeaderCell>Total Amount</TableHeaderCell>
                      </TableHeaderRow>
                    </TableHeader>
                    <TableBody>
                      {tableData.map(item => <TableRow key={item.id} item={item}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>₹{item.unitPrice.toLocaleString()}</TableCell>
                          <TableCell>
                            ₹{(item.quantity * item.unitPrice).toLocaleString()}
                          </TableCell>
                        </TableRow>)}
                    </TableBody>
                    <TableFooter>
                      <TableFooterRow>
                        <TableFooterCell>Total Amount</TableFooterCell>
                        <TableFooterCell>-</TableFooterCell>
                        <TableFooterCell>-</TableFooterCell>
                        <TableFooterCell>
                          ₹
                          {tableData
                      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                      .reduce((sum, item) => sum + item.quantity * item.unitPrice, 0).toLocaleString()}
                        </TableFooterCell>
                      </TableFooterRow>
                    </TableFooter>
                  </>}
              </Table>
            </Box>
            {!isMobile && deskTopFooter({})}
          </Box>;
      case 5:
        // Only show on desktop
        if (!isMobile) {
          return renderReviewContent();
        }
        return null;
      default:
        return null;
    }
  };
  const renderFooter = (): React.ReactElement => {
    const showPreview = isMobile && currentStep === lastStep;
    return <Box display="flex" flexDirection="column" gap="spacing.4" padding="spacing.4" backgroundColor="surface.background.gray.subtle" borderTopWidth="thin" borderTopColor="surface.border.gray.muted" position="fixed" bottom="spacing.0" zIndex={1001} width="100%">
        {isMobile && alert && <Alert color={alert.type} title={alert.title} description={alert.description} emphasis="subtle" isDismissible onDismiss={() => setAlert(null)} isFullWidth />}
        <Box display="flex" gap="spacing.4" justifyContent="space-between">
          <Box display="flex" gap="spacing.2">
            {showPreview && <Button variant="tertiary" icon={FileIcon} onClick={() => setIsPreviewOpen(true)} iconPosition="left">
                Preview
              </Button>}
            <Button variant="tertiary" onClick={handlePreviousStep} isDisabled={currentStep === 1}>
              Previous
            </Button>
          </Box>
          <Button variant="primary" onClick={currentStep === lastStep ? () => {
          resetState();
          setIsOpen(false);
        } : handleNextStep}>
            {currentStep === lastStep ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </Box>;
  };
  const renderStepGroup = (): React.ReactElement => {
    return <StepGroup orientation="vertical" size="medium">
        {visibleSteps.map(step => <StepItem key={step.stepNumber} title={step.title} description={step.description} titleColor={alert?.type === 'negative' && step.stepNumber === currentStep ? 'feedback.text.negative.intense' : undefined} marker={getStepIcon(step.stepNumber)} isSelected={alert?.type === 'negative' ? false : currentStep === step.stepNumber} isDisabled={step.stepNumber > currentStep} onClick={() => handleStepClick(step.stepNumber)} stepProgress={completedSteps.includes(step.stepNumber) ? 'full' : currentStep === step.stepNumber ? 'start' : 'none'} />)}
      </StepGroup>;
  };
  const BackdropContainer = styled.div\`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: \${({
    theme
  }) => theme.colors.overlay.background.subtle};
    z-index: 1004;
  \`;
  return <Box>
      <Button onClick={() => setIsOpen(!isOpen)}>Create GNR Details</Button>
      {isMobile ? isOpen && <Box width="100%" minHeight="100%" backgroundColor="surface.background.gray.moderate" display="flex" flexDirection="column" position="fixed" top="spacing.0" left="spacing.0" zIndex={1000}>
            {/* Header with current step name */}
            <div role="button" tabIndex={0} onClick={() => {
        if (!withProgressBar) {
          setShowStepGroup((prev: boolean) => !prev);
        }
      }}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onKeyDown={() => {}} style={{
        zIndex: 1006
      }}>
              <Box display="flex" alignItems="center" justifyContent="center" padding="spacing.4" backgroundColor="surface.background.gray.subtle" borderBottomWidth="thin" borderBottomColor="surface.border.gray.muted" position="relative">
                <Box display="flex" alignItems="center" gap="spacing.4">
                  {alert?.type === 'negative' && <InfoIcon color="feedback.icon.negative.intense" />}
                  {withProgressBar ? <Heading as="h2" size="medium" weight="semibold" color="surface.text.gray.normal" wordBreak="break-word">
                      New GRN
                    </Heading> : <>
                      <Badge color={alert?.type === 'negative' ? 'negative' : undefined}>
                        {' '}
                        {currentStep} / {lastStep}{' '}
                      </Badge>
                      <Heading size="small">{currentStepObj?.title}</Heading>
                      {showStepGroup ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </>}
                </Box>
              </Box>
            </div>
            <ProgressBar value={currentStep / lastStep * 100} showPercentage={false} size="medium" color={alert?.type === 'negative' ? 'negative' : undefined} />

            <Box>
              <Slide direction="top" fromOffset="100%" motionTriggers={['mount']} isVisible={showStepGroup}>
                <Box position="fixed" top="51px" left="spacing.0" backgroundColor="surface.background.gray.intense" zIndex={1005} width="100%" height="272px" borderBottomLeftRadius="2xlarge" borderBottomRightRadius="2xlarge" padding="spacing.7" paddingTop="spacing.0">
                  {renderStepGroup()}
                </Box>
              </Slide>
              <Fade motionTriggers={['mount']} isVisible={showStepGroup} shouldUnmountWhenHidden>
                <BackdropContainer onClick={() => setShowStepGroup((prev: boolean) => !prev)} />
              </Fade>
            </Box>
            {/* Step content */}
            <Box overflow="auto" height="calc(100vh - 100px)" padding="spacing.4" paddingBottom="spacing.8">
              {renderStepContent(isMobile)}
            </Box>
            {!isDatePickerOpen && !isPreviewOpen && renderFooter()}
            {/* Preview BottomSheet for mobile */}
            {isPreviewOpen && isMobile && <BottomSheet isOpen={isPreviewOpen} onDismiss={() => setIsPreviewOpen(false)} snapPoints={[0.9, 0.9, 0.9]}>
                <BottomSheetHeader title="Review GRN Details" />
                <BottomSheetBody padding="spacing.0">{renderReviewContent()}</BottomSheetBody>
              </BottomSheet>}
          </Box> : <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)} size="full">
          <ModalHeader title="New GRN" />
          {withProgressBar && <ProgressBar value={currentStep / lastStep * 100} showPercentage={false} size="medium" color={alert?.type === 'negative' ? 'negative' : undefined} />}
          <ModalBody height="100%" padding="spacing.0">
            <Box width="100%" height="100%" display="flex" flexDirection="column">
              <Box display="flex" flex={1}>
                {!withProgressBar && <Box width="300px" padding="spacing.7" backgroundColor="surface.background.gray.moderate">
                    {renderStepGroup()}
                  </Box>}

                <Box width="100%" display="flex" flexDirection="column">
                  <Box flex={1} overflow="auto">
                    {renderStepContent(isMobile)}
                  </Box>
                </Box>
              </Box>
            </Box>
          </ModalBody>
        </Modal>}
    </Box>;
}`,...(mt=(ut=ye.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var gt,xt,ht;ae.parameters={...ae.parameters,docs:{...(gt=ae.parameters)==null?void 0:gt.docs,source:{originalSource:`({
  withProgressBar = false
}: {
  withProgressBar?: boolean;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [showStepGroup, setShowStepGroup] = React.useState(false);
  const [selectedVendor, setSelectedVendor] = React.useState<string | null>(null);
  const [selectedPO, setSelectedPO] = React.useState<string | null>(null);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<{
    vendor?: string;
    purchaseOrder?: string;
    grnDetails?: string;
    date?: string;
  }>({});
  const [grnDetails, setGrnDetails] = React.useState({
    grnNumber: \`GRN-\${new Date().getFullYear()}-\${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}\`,
    date: '',
    notes: ''
  });
  const [alert, setAlert] = React.useState<{
    type: 'positive' | 'negative';
    title: string;
    description: string;
  } | null>(null);
  const onStepGroupChange = (): void => {
    setAlert(null);
    setErrors({});
  };
  const handleStepClick = (stepNumber: number): void => {
    // Allow clicking on any previous step or the current step
    if (stepNumber <= currentStep) {
      setCurrentStep(stepNumber);
    }
    setShowStepGroup(false);
    onStepGroupChange();
  };
  const validateStep = (step: number): boolean => {
    const newErrors: typeof errors = {};
    if (step === 1 && !selectedVendor) {
      newErrors.vendor = 'Please select a vendor to proceed';
    }
    if (step === 2 && !selectedPO) {
      newErrors.purchaseOrder = 'Please select a purchase order to proceed';
    }
    if (step === 3) {
      if (!grnDetails.date) {
        newErrors.date = 'Date is required';
      } else {
        // Check date format and validity using dayjs
        const date = dayjs(grnDetails.date, 'YYYY-MM-DD', true);
        if (!date.isValid()) {
          newErrors.date = 'Please enter a valid date in YYYY-MM-DD format';
        } else {
          // Check if date is in the past
          const today = dayjs().startOf('day');
          if (date.isBefore(today)) {
            newErrors.date = 'Date cannot be in the past';
          }
        }
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleNextStep = (): void => {
    if (currentStep < GRNSteps.length) {
      if (validateStep(currentStep)) {
        setCompletedSteps(prev => [...prev, currentStep]);
        setCurrentStep(currentStep + 1);
        if (currentStep === 3) {
          setAlert({
            type: 'positive',
            title: 'Success!',
            description: 'GRN details have been saved successfully.'
          });
        }
      } else if (currentStep === 3) {
        setAlert({
          type: 'negative',
          title: 'Validation Failed',
          description: 'Please fix the errors in the form and try again.'
        });
      }
    }
  };
  const handlePreviousStep = (): void => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      onStepGroupChange();
    }
  };
  const getStepIcon = (stepNumber: number): React.ReactElement => {
    if (alert?.type === 'negative' && stepNumber === currentStep) {
      return <StepItemIcon icon={InfoIcon} color="negative" />;
    }
    if (completedSteps.includes(stepNumber)) {
      return <StepItemIcon icon={CheckIcon} color="positive" />;
    }
    if (stepNumber === currentStep) {
      return <StepItemIcon icon={FileIcon} color="primary" />;
    }
    return <StepItemIcon icon={LockIcon} color="primary" />;
  };
  const tableData = {
    nodes: [{
      id: '1',
      name: 'Laptop Dell XPS 13',
      quantity: 2,
      unitPrice: 85000
    }, {
      id: '2',
      name: 'Wireless Mouse',
      quantity: 5,
      unitPrice: 1200
    }, {
      id: '3',
      name: 'Mechanical Keyboard',
      quantity: 3,
      unitPrice: 4500
    }, {
      id: '4',
      name: 'External SSD 1TB',
      quantity: 4,
      unitPrice: 6500
    }, {
      id: '5',
      name: 'USB-C Hub',
      quantity: 2,
      unitPrice: 2500
    }]
  };

  // Dynamically filter steps for mobile (remove review step)
  const visibleSteps = isMobile ? GRNSteps.filter(s => s.stepNumber !== 5) : GRNSteps;
  const lastStep = visibleSteps[visibleSteps.length - 1].stepNumber;
  const currentStepObj = visibleSteps.find(s => s.stepNumber === currentStep);
  const resetState = (): void => {
    setCurrentStep(1);
    setSelectedVendor(null);
    setSelectedPO(null);
    setCompletedSteps([]);
    setErrors({});
    setAlert(null);
    setGrnDetails({
      grnNumber: \`GRN-\${new Date().getFullYear()}-\${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}\`,
      date: '',
      notes: ''
    });
  };
  const handleDateChange = (value: DateValue | undefined): void => {
    setGrnDetails(prev => ({
      ...prev,
      date: value ? dayjs(value).format('YYYY-MM-DD') : ''
    }));
    if (errors.date) {
      setErrors(prev => ({
        ...prev,
        date: undefined
      }));
    }
  };
  const deskTopFooter = ({
    isLastStep
  }: {
    isLastStep?: boolean;
  }): React.ReactElement => {
    return <Box display="flex" justifyContent="space-between" marginTop="spacing.4" padding="spacing.4" borderTopColor="surface.border.gray.muted">
        <Button variant="tertiary" onClick={() => setIsOpen(!isOpen)}>
          Save and Close
        </Button>
        <Box display="flex" gap="spacing.4">
          <Button variant="tertiary" onClick={handlePreviousStep}>
            Previous
          </Button>
          <Button variant="primary" onClick={isLastStep ? () => {
          resetState();
          setIsOpen(false);
        } : handleNextStep}>
            {isLastStep ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </Box>;
  };

  // Move user from step 5 to step 4 when switching to mobile (mobile doesn't show review step)
  useEffect(() => {
    if (isMobile && currentStep === 5) {
      setCurrentStep(4);
    }
  }, [isMobile]);
  const renderReviewContent = (): React.ReactElement => <Box display="flex" flexDirection="column" gap="spacing.4" width="100%" height="100%" justifyContent="space-between">
      <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} padding="spacing.7" gap="spacing.4" width="100%" height="100%" justifyContent="space-between">
        <Divider />
        <Box width="100%" height={isMobile ? '400px' : '600px'}>
          <Preview defaultZoom={0.5}>
            <PreviewHeader />
            <PreviewBody>
              <Box padding="spacing.4" display="flex" flexDirection="column" gap="spacing.6" backgroundColor="surface.background.gray.intense">
                {/* GRN Details Section */}
                <Box padding="spacing.4" borderBottomWidth="thin" borderBottomColor="surface.border.gray.muted">
                  <Heading size="large">Goods Receipt Note</Heading>
                  <Text size="small" color="surface.text.gray.muted">
                    {grnDetails.grnNumber}
                  </Text>
                  <Text size="small" color="surface.text.gray.muted">
                    Date: {grnDetails.date}
                  </Text>
                </Box>
                {/* Vendor Details Section */}
                <Box>
                  <Heading size="medium">Vendor Details</Heading>
                  <Box marginTop="spacing.3" padding="spacing.4" backgroundColor="surface.background.gray.intense" borderRadius="medium">
                    {selectedVendor && <>
                        <Box display="flex" justifyContent="space-between">
                          <Box>
                            <Text weight="semibold" size="large">
                              {GRNVendors.find(v => v.id === selectedVendor)?.name}
                            </Text>
                            <Text size="small" color="surface.text.gray.muted">
                              {GRNVendors.find(v => v.id === selectedVendor)?.email}
                            </Text>
                          </Box>
                        </Box>
                        <Box marginTop="spacing.3" display="flex" flexDirection="column" gap="spacing.2">
                          <Text size="small">
                            Phone: {GRNVendors.find(v => v.id === selectedVendor)?.phone}
                          </Text>
                          <Text size="small">
                            Address: {GRNVendors.find(v => v.id === selectedVendor)?.address}
                          </Text>
                        </Box>
                      </>}
                  </Box>
                </Box>
                {/* PO Details Section */}
                <Box>
                  <Heading size="medium">Purchase Order Details</Heading>
                  <Box marginTop="spacing.3" padding="spacing.4" backgroundColor="surface.background.gray.moderate" borderRadius="medium">
                    {selectedPO && <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box>
                          <Text weight="semibold" size="large">
                            {GRNPurchaseOrders.find(p => p.id === selectedPO)?.number}
                          </Text>
                          <Text size="small" color="surface.text.gray.muted">
                            Date: {GRNPurchaseOrders.find(p => p.id === selectedPO)?.date}
                          </Text>
                        </Box>
                        <Badge size="medium" color={GRNPurchaseOrders.find(p => p.id === selectedPO)?.status === 'Approved' ? 'positive' : 'notice'}>
                          {GRNPurchaseOrders.find(p => p.id === selectedPO)?.status ?? ''}
                        </Badge>
                      </Box>}
                  </Box>
                </Box>
                {/* Notes Section */}
                {grnDetails.notes && <Box>
                    <Heading size="medium">Notes</Heading>
                    <Box marginTop="spacing.3" padding="spacing.4" backgroundColor="surface.background.gray.moderate" borderRadius="medium">
                      <Text>{grnDetails.notes}</Text>
                    </Box>
                  </Box>}
                {/* Line Items Section */}
                <Box>
                  <Heading size="medium">Line Items</Heading>
                  <Box marginTop="spacing.3">
                    <Table data={tableData}>
                      {tableData => <>
                          <TableHeader>
                            <TableHeaderRow>
                              <TableHeaderCell>Item Name</TableHeaderCell>
                              <TableHeaderCell>Quantity</TableHeaderCell>
                              <TableHeaderCell>Unit Price</TableHeaderCell>
                              <TableHeaderCell>Total Amount</TableHeaderCell>
                            </TableHeaderRow>
                          </TableHeader>
                          <TableBody>
                            {tableData.map(item => <TableRow key={item.id} item={item}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>₹{item.unitPrice.toLocaleString()}</TableCell>
                                <TableCell>
                                  ₹{(item.quantity * item.unitPrice).toLocaleString()}
                                </TableCell>
                              </TableRow>)}
                          </TableBody>
                          <TableFooter>
                            <TableFooterRow>
                              <TableFooterCell>Total Amount</TableFooterCell>
                              <TableFooterCell>-</TableFooterCell>
                              <TableFooterCell>-</TableFooterCell>
                              <TableFooterCell>
                                ₹
                                {tableData
                            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                            .reduce((sum, item) => sum + item.quantity * item.unitPrice, 0).toLocaleString()}
                              </TableFooterCell>
                            </TableFooterRow>
                          </TableFooter>
                        </>}
                    </Table>
                  </Box>
                </Box>
              </Box>
            </PreviewBody>
            <PreviewFooter />
          </Preview>
        </Box>
      </Box>
      {!isMobile && deskTopFooter({
      isLastStep: true
    })}
    </Box>;

  // In renderStepContent, do not show step 5 on mobile
  const renderStepContent = (isMobile: boolean): React.ReactElement | null => {
    if (isMobile && currentStep === 5) return null;
    switch (currentStep) {
      case 1:
        return <Box display="flex" flexDirection="column" gap="spacing.4" width="100%" height="100%" justifyContent="space-between">
            <Box display="flex" flexDirection="column" padding="spacing.7" justifyContent="center" alignItems="center">
              <Box display="flex" flexDirection="column" gap="spacing.4">
                <Box>
                  <Heading size="medium">Select Vendor</Heading>
                  <Text>Choose a vendor from the list below to proceed with GRN creation.</Text>
                </Box>
                <Divider />
                <RadioGroup label="Vendors" name="vendor" value={selectedVendor ?? ''} onChange={({
                value
              }) => {
                setSelectedVendor(value);
                if (errors.vendor) {
                  setErrors(prev => ({
                    ...prev,
                    vendor: undefined
                  }));
                }
              }} validationState={errors.vendor ? 'error' : 'none'} errorText={errors.vendor}>
                  {GRNVendors.map(vendor => <Card key={vendor.id} padding="spacing.4" borderRadius="medium" elevation="none" as="label" accessibilityLabel={vendor.name} marginBottom="spacing.2">
                      <CardBody>
                        <RadioCard value={vendor.id} label={vendor.name}>
                          <Box display="flex" gap="spacing.2" flexDirection={isMobile ? 'column' : 'row'}>
                            <Box display="flex" gap="spacing.2">
                              <MailIcon color="interactive.icon.gray.muted" />
                              <Text size="small" color="surface.text.gray.muted">
                                {vendor.email}
                              </Text>
                              {!isMobile && <Text size="small" color="surface.text.gray.muted">
                                  •
                                </Text>}
                            </Box>
                            <Box display="flex" gap="spacing.2">
                              <PhoneIcon color="interactive.icon.gray.muted" />
                              <Text size="small" color="surface.text.gray.muted">
                                {vendor.phone}
                              </Text>
                            </Box>
                          </Box>
                        </RadioCard>
                      </CardBody>
                    </Card>)}
                </RadioGroup>
              </Box>
            </Box>
            {!isMobile && deskTopFooter({})}
          </Box>;
      case 2:
        return <Box display="flex" width="100%" height="100%">
            <Box display="flex" flexDirection="column" width="100%" justifyContent="space-between">
              <Box display="flex" width="100%" justifyContent="space-between" height="100%">
                <Box flex={6} display="flex" flexDirection="column" height="100%" justifyContent="space-between" width="100%">
                  <Box display="flex" alignItems="center" justifyContent="center" width="100%">
                    <Box padding="spacing.5" width="500px">
                      <Box display="flex" flexDirection="column" gap="spacing.2">
                        <Heading size="medium">Link PO</Heading>
                        <Text>Select a Purchase Order to link with this GRN.</Text>
                      </Box>

                      <Box flex={1} gap="spacing.2" marginTop="spacing.2">
                        <RadioGroup label="Purchase Orders" name="purchaseOrder" value={selectedPO ?? ''} onChange={({
                        value
                      }) => {
                        setSelectedPO(value);
                        if (errors.purchaseOrder) {
                          setErrors(prev => ({
                            ...prev,
                            purchaseOrder: undefined
                          }));
                        }
                      }} validationState={errors.purchaseOrder ? 'error' : 'none'} errorText={errors.purchaseOrder}>
                          {GRNPurchaseOrders.map(po => <Card as="label" accessibilityLabel={po.number} isSelected={selectedPO === po.id} marginBottom="spacing.2" key={po.id} elevation="none">
                              <CardBody>
                                <RadioCard value={po.id} label={po.number}>
                                  <Box display="flex" flexDirection="column" gap="spacing.2">
                                    <Box display="flex" gap="spacing.2" alignItems="center">
                                      <Text size="small" color="surface.text.gray.muted">
                                        {po.vendor}
                                      </Text>
                                      <Badge size="medium" color={po.status === 'Approved' ? 'positive' : 'notice'}>
                                        {po.status || ''}
                                      </Badge>
                                    </Box>
                                    <Box display="flex" gap="spacing.2">
                                      <Box display="flex" gap="spacing.2">
                                        <CalendarIcon color="interactive.icon.gray.muted" />
                                        <Text size="small" color="surface.text.gray.muted">
                                          {po.date}
                                        </Text>
                                      </Box>
                                      <Text size="small" color="surface.text.gray.muted">
                                        •
                                      </Text>

                                      <Text size="small" color="surface.text.gray.muted">
                                        {po.items} Items
                                      </Text>
                                      <Text size="small" color="surface.text.gray.muted">
                                        •
                                      </Text>
                                      <Text size="small" color="surface.text.gray.muted">
                                        ₹ {po.amount.toLocaleString()}
                                      </Text>
                                    </Box>
                                  </Box>
                                </RadioCard>
                              </CardBody>
                            </Card>)}
                        </RadioGroup>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {!isMobile && <Box flex={4}>
                    <Preview isDragAndZoomDisabled>
                      <PreviewBody>
                        <Box padding="spacing.4" display="flex" flexDirection="column" gap="spacing.4" backgroundColor="surface.background.gray.moderate">
                          {selectedVendor && <>
                              <Box>
                                <Text weight="semibold" size="large">
                                  {GRNVendors.find(v => v.id === selectedVendor)?.name}
                                </Text>
                                <Text size="small" color="surface.text.gray.muted">
                                  {GRNVendors.find(v => v.id === selectedVendor)?.email}
                                </Text>
                              </Box>
                              <Box display="flex" flexDirection="column" gap="spacing.2">
                                <Text size="small">
                                  Phone: {GRNVendors.find(v => v.id === selectedVendor)?.phone}
                                </Text>
                                <Text size="small">
                                  Address:{' '}
                                  {GRNVendors.find(v => v.id === selectedVendor)?.address}
                                </Text>
                              </Box>
                            </>}
                          {selectedPO && <Box marginTop="spacing.4" paddingTop="spacing.4" borderTopWidth="thin" borderTopColor="surface.border.gray.muted">
                              <Text weight="semibold" size="medium">
                                Selected PO
                              </Text>
                              <Box marginTop="spacing.2">
                                <Text size="small">
                                  PO Number:{' '}
                                  {GRNPurchaseOrders.find(p => p.id === selectedPO)?.number}
                                </Text>
                                <Text size="small">
                                  Amount: ₹
                                  {GRNPurchaseOrders.find(p => p.id === selectedPO)?.amount.toLocaleString()}
                                </Text>
                              </Box>
                            </Box>}
                        </Box>
                      </PreviewBody>
                    </Preview>
                  </Box>}
              </Box>
              {!isMobile && deskTopFooter({})}
            </Box>
          </Box>;
      case 3:
        return <Box display="flex" flexDirection="column" gap="spacing.4" width="100%" height="100%" justifyContent="space-between">
            <Box padding="spacing.7" display="flex" flexDirection="column" gap="spacing.4">
              <Box>
                <Heading size="medium">GRN Details</Heading>
                <Text>Add additional details for this GRN.</Text>
              </Box>
              <Divider />
              {!isMobile && alert && <Alert color={alert.type} title={alert.title} description={alert.description} emphasis="subtle" isDismissible onDismiss={() => setAlert(null)} isFullWidth />}
              <Box display="flex" flexDirection="column" gap="spacing.4">
                <TextInput label="GRN Number" name="grnNumber" value={grnDetails.grnNumber} onChange={({
                value
              }) => setGrnDetails(prev => ({
                ...prev,
                grnNumber: value ?? ''
              }))} isDisabled helpText="Auto-generated GRN number" />
                <DatePicker label="Date" name="date" value={grnDetails.date ? dayjs(grnDetails.date).toDate() : undefined} onApply={value => {
                handleDateChange(value);
              }} onChange={value => {
                handleDateChange(value);
              }} onOpenChange={() => {
                setIsDatePickerOpen(prev => !prev);
              }} validationState={errors.date ? 'error' : 'none'} errorText={errors.date} helpText="Select the GRN date" isRequired necessityIndicator="required" minDate={new Date()} // Prevents selecting past dates
              />
                <TextArea label="Notes" name="notes" value={grnDetails.notes} onChange={({
                value
              }) => setGrnDetails(prev => ({
                ...prev,
                notes: value ?? ''
              }))} numberOfLines={4} placeholder="Add any additional notes or comments" />
              </Box>
            </Box>
            {!isMobile && deskTopFooter({})}
          </Box>;
      case 4:
        return <Box display="flex" flexDirection="column" justifyContent="space-between" gap="spacing.4" height="100%">
            <Box padding="spacing.7" display="flex" flexDirection="column" gap="spacing.4">
              <Box>
                <Heading size="medium">Line Item Details</Heading>
                <Text>Add line items and quantities for this GRN.</Text>
              </Box>
              <Divider />
              <Table data={tableData}>
                {tableData => <>
                    <TableHeader>
                      <TableHeaderRow>
                        <TableHeaderCell>Item Name</TableHeaderCell>
                        <TableHeaderCell>Quantity</TableHeaderCell>
                        <TableHeaderCell>Unit Price</TableHeaderCell>
                        <TableHeaderCell>Total Amount</TableHeaderCell>
                      </TableHeaderRow>
                    </TableHeader>
                    <TableBody>
                      {tableData.map(item => <TableRow key={item.id} item={item}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>₹{item.unitPrice.toLocaleString()}</TableCell>
                          <TableCell>
                            ₹{(item.quantity * item.unitPrice).toLocaleString()}
                          </TableCell>
                        </TableRow>)}
                    </TableBody>
                    <TableFooter>
                      <TableFooterRow>
                        <TableFooterCell>Total Amount</TableFooterCell>
                        <TableFooterCell>-</TableFooterCell>
                        <TableFooterCell>-</TableFooterCell>
                        <TableFooterCell>
                          ₹
                          {tableData
                      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                      .reduce((sum, item) => sum + item.quantity * item.unitPrice, 0).toLocaleString()}
                        </TableFooterCell>
                      </TableFooterRow>
                    </TableFooter>
                  </>}
              </Table>
            </Box>
            {!isMobile && deskTopFooter({})}
          </Box>;
      case 5:
        // Only show on desktop
        if (!isMobile) {
          return renderReviewContent();
        }
        return null;
      default:
        return null;
    }
  };
  const renderFooter = (): React.ReactElement => {
    const showPreview = isMobile && currentStep === lastStep;
    return <Box display="flex" flexDirection="column" gap="spacing.4" padding="spacing.4" backgroundColor="surface.background.gray.subtle" borderTopWidth="thin" borderTopColor="surface.border.gray.muted" position="fixed" bottom="spacing.0" zIndex={1001} width="100%">
        {isMobile && alert && <Alert color={alert.type} title={alert.title} description={alert.description} emphasis="subtle" isDismissible onDismiss={() => setAlert(null)} isFullWidth />}
        <Box display="flex" gap="spacing.4" justifyContent="space-between">
          <Box display="flex" gap="spacing.2">
            {showPreview && <Button variant="tertiary" icon={FileIcon} onClick={() => setIsPreviewOpen(true)} iconPosition="left">
                Preview
              </Button>}
            <Button variant="tertiary" onClick={handlePreviousStep} isDisabled={currentStep === 1}>
              Previous
            </Button>
          </Box>
          <Button variant="primary" onClick={currentStep === lastStep ? () => {
          resetState();
          setIsOpen(false);
        } : handleNextStep}>
            {currentStep === lastStep ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </Box>;
  };
  const renderStepGroup = (): React.ReactElement => {
    return <StepGroup orientation="vertical" size="medium">
        {visibleSteps.map(step => <StepItem key={step.stepNumber} title={step.title} description={step.description} titleColor={alert?.type === 'negative' && step.stepNumber === currentStep ? 'feedback.text.negative.intense' : undefined} marker={getStepIcon(step.stepNumber)} isSelected={alert?.type === 'negative' ? false : currentStep === step.stepNumber} isDisabled={step.stepNumber > currentStep} onClick={() => handleStepClick(step.stepNumber)} stepProgress={completedSteps.includes(step.stepNumber) ? 'full' : currentStep === step.stepNumber ? 'start' : 'none'} />)}
      </StepGroup>;
  };
  const BackdropContainer = styled.div\`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: \${({
    theme
  }) => theme.colors.overlay.background.subtle};
    z-index: 1004;
  \`;
  return <Box>
      <Button onClick={() => setIsOpen(!isOpen)}>Create GNR Details</Button>
      {isMobile ? isOpen && <Box width="100%" minHeight="100%" backgroundColor="surface.background.gray.moderate" display="flex" flexDirection="column" position="fixed" top="spacing.0" left="spacing.0" zIndex={1000}>
            {/* Header with current step name */}
            <div role="button" tabIndex={0} onClick={() => {
        if (!withProgressBar) {
          setShowStepGroup((prev: boolean) => !prev);
        }
      }}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onKeyDown={() => {}} style={{
        zIndex: 1006
      }}>
              <Box display="flex" alignItems="center" justifyContent="center" padding="spacing.4" backgroundColor="surface.background.gray.subtle" borderBottomWidth="thin" borderBottomColor="surface.border.gray.muted" position="relative">
                <Box display="flex" alignItems="center" gap="spacing.4">
                  {alert?.type === 'negative' && <InfoIcon color="feedback.icon.negative.intense" />}
                  {withProgressBar ? <Heading as="h2" size="medium" weight="semibold" color="surface.text.gray.normal" wordBreak="break-word">
                      New GRN
                    </Heading> : <>
                      <Badge color={alert?.type === 'negative' ? 'negative' : undefined}>
                        {' '}
                        {currentStep} / {lastStep}{' '}
                      </Badge>
                      <Heading size="small">{currentStepObj?.title}</Heading>
                      {showStepGroup ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </>}
                </Box>
              </Box>
            </div>
            <ProgressBar value={currentStep / lastStep * 100} showPercentage={false} size="medium" color={alert?.type === 'negative' ? 'negative' : undefined} />

            <Box>
              <Slide direction="top" fromOffset="100%" motionTriggers={['mount']} isVisible={showStepGroup}>
                <Box position="fixed" top="51px" left="spacing.0" backgroundColor="surface.background.gray.intense" zIndex={1005} width="100%" height="272px" borderBottomLeftRadius="2xlarge" borderBottomRightRadius="2xlarge" padding="spacing.7" paddingTop="spacing.0">
                  {renderStepGroup()}
                </Box>
              </Slide>
              <Fade motionTriggers={['mount']} isVisible={showStepGroup} shouldUnmountWhenHidden>
                <BackdropContainer onClick={() => setShowStepGroup((prev: boolean) => !prev)} />
              </Fade>
            </Box>
            {/* Step content */}
            <Box overflow="auto" height="calc(100vh - 100px)" padding="spacing.4" paddingBottom="spacing.8">
              {renderStepContent(isMobile)}
            </Box>
            {!isDatePickerOpen && !isPreviewOpen && renderFooter()}
            {/* Preview BottomSheet for mobile */}
            {isPreviewOpen && isMobile && <BottomSheet isOpen={isPreviewOpen} onDismiss={() => setIsPreviewOpen(false)} snapPoints={[0.9, 0.9, 0.9]}>
                <BottomSheetHeader title="Review GRN Details" />
                <BottomSheetBody padding="spacing.0">{renderReviewContent()}</BottomSheetBody>
              </BottomSheet>}
          </Box> : <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)} size="full">
          <ModalHeader title="New GRN" />
          {withProgressBar && <ProgressBar value={currentStep / lastStep * 100} showPercentage={false} size="medium" color={alert?.type === 'negative' ? 'negative' : undefined} />}
          <ModalBody height="100%" padding="spacing.0">
            <Box width="100%" height="100%" display="flex" flexDirection="column">
              <Box display="flex" flex={1}>
                {!withProgressBar && <Box width="300px" padding="spacing.7" backgroundColor="surface.background.gray.moderate">
                    {renderStepGroup()}
                  </Box>}

                <Box width="100%" display="flex" flexDirection="column">
                  <Box flex={1} overflow="auto">
                    {renderStepContent(isMobile)}
                  </Box>
                </Box>
              </Box>
            </Box>
          </ModalBody>
        </Modal>}
    </Box>;
}`,...(ht=(xt=ae.parameters)==null?void 0:xt.docs)==null?void 0:ht.source}}};var ft,bt,yt;Be.parameters={...Be.parameters,docs:{...(ft=Be.parameters)==null?void 0:ft.docs,source:{originalSource:`({
  modalSize = 'medium'
}: {
  modalSize?: 'small' | 'medium' | 'large';
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(1);
  const [selectedVendor, setSelectedVendor] = React.useState<string | null>(null);
  const [selectedPO, setSelectedPO] = React.useState<string | null>(null);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);
  const [showStepGroup, setShowStepGroup] = React.useState(false);
  const isMobile = useIsMobile();

  // Dynamically filter steps for mobile (remove review step)
  const visibleSteps = GRNSteps;
  const lastStep = visibleSteps[visibleSteps.length - 1].stepNumber;
  const currentStepObj = visibleSteps.find(s => s.stepNumber === currentStep);
  const [errors, setErrors] = React.useState<{
    vendor?: string;
    purchaseOrder?: string;
    referenceNumber?: string;
  }>({});
  const [grnDetails, setGrnDetails] = React.useState({
    grnNumber: \`GRN-\${new Date().getFullYear()}-\${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}\`,
    referenceNumber: ''
  });
  const [alert, setAlert] = React.useState<{
    type: 'positive' | 'negative';
    title: string;
    description: string;
  } | null>(null);
  const validateStep = (step: number): boolean => {
    const newErrors: typeof errors = {};
    if (step === 1 && !selectedVendor) {
      newErrors.vendor = 'Please select a vendor to proceed';
    }
    if (step === 2 && !selectedPO) {
      newErrors.purchaseOrder = 'Please select a purchase order to proceed';
    }
    if (step === 3 && !grnDetails.referenceNumber) {
      newErrors.referenceNumber = 'Reference number is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleNextStep = (): void => {
    if (currentStep < GRNSteps.length) {
      if (validateStep(currentStep)) {
        setCompletedSteps(prev => [...prev, currentStep]);
        setCurrentStep(currentStep + 1);
        setAlert({
          type: 'positive',
          title: 'Success!',
          description: 'Step completed successfully.'
        });
      } else {
        setAlert({
          type: 'negative',
          title: 'Validation Failed',
          description: 'Please fix the errors and try again.'
        });
      }
    }
  };
  const handlePreviousStep = (): void => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setAlert(null);
      setErrors({});
    }
  };
  const getStepIcon = (stepNumber: number): React.ReactElement => {
    if (alert?.type === 'negative' && stepNumber === currentStep) {
      return <StepItemIcon icon={InfoIcon} color="negative" />;
    }
    if (completedSteps.includes(stepNumber)) {
      return <StepItemIcon icon={CheckIcon} color="positive" />;
    }
    if (stepNumber === currentStep) {
      return <StepItemIcon icon={FileIcon} color="primary" />;
    }
    return <StepItemIcon icon={LockIcon} color="primary" />;
  };
  const resetState = (): void => {
    setCurrentStep(1);
    setSelectedVendor(null);
    setSelectedPO(null);
    setCompletedSteps([]);
    setErrors({});
    setAlert(null);
    setGrnDetails({
      grnNumber: \`GRN-\${new Date().getFullYear()}-\${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}\`,
      referenceNumber: ''
    });
  };
  const compactTableData = {
    nodes: [{
      id: '1',
      name: 'Laptop Dell XPS 13',
      quantity: 2,
      unitPrice: 85000
    }, {
      id: '2',
      name: 'Wireless Mouse',
      quantity: 5,
      unitPrice: 1200
    }, {
      id: '3',
      name: 'Keyboard',
      quantity: 3,
      unitPrice: 1500
    }, {
      id: '4',
      name: 'Monitor',
      quantity: 1,
      unitPrice: 10000
    }, {
      id: '5',
      name: 'Speaker',
      quantity: 2,
      unitPrice: 2000
    }]
  };
  const renderLargeStepContent = (): React.ReactElement | null => {
    switch (currentStep) {
      case 1:
        return <Box padding="spacing.6" display="flex" gap="spacing.6" height="100%">
            <Box display="flex" flexDirection="column" gap="spacing.3">
              <Heading size="large">Select Vendor</Heading>

              <RadioGroup label="Available Vendors" name="vendor" value={selectedVendor ?? ''} onChange={({
              value
            }) => {
              setSelectedVendor(value);
              if (errors.vendor) {
                setErrors(prev => ({
                  ...prev,
                  vendor: undefined
                }));
              }
            }} validationState={errors.vendor ? 'error' : 'none'} errorText={errors.vendor}>
                {GRNVendors.map(vendor => <Card key={vendor.id} padding="spacing.4" borderRadius="medium" elevation="none" as="label" accessibilityLabel={vendor.name} marginBottom="spacing.3" isSelected={selectedVendor === vendor.id}>
                    <CardBody>
                      <Box display="flex" gap="spacing.3" alignItems="flex-start">
                        <Radio value={vendor.id} />
                        <Box display="flex" flexDirection="column" gap="spacing.2" flex={1}>
                          <Text weight="semibold" size="medium">
                            {vendor.name}
                          </Text>
                          <Box display="flex" gap="spacing.4" flexWrap="wrap">
                            <Box display="flex" gap="spacing.2" alignItems="center">
                              <MailIcon color="interactive.icon.gray.muted" size="small" />
                              <Text size="small" color="surface.text.gray.muted">
                                {vendor.email}
                              </Text>
                            </Box>
                            <Box display="flex" gap="spacing.2" alignItems="center">
                              <PhoneIcon color="interactive.icon.gray.muted" size="small" />
                              <Text size="small" color="surface.text.gray.muted">
                                {vendor.phone}
                              </Text>
                            </Box>
                            <Box display="flex" gap="spacing.2" alignItems="center">
                              <HomeIcon color="interactive.icon.gray.muted" size="small" />
                              <Text size="small" color="surface.text.gray.muted">
                                {vendor.address}
                              </Text>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </CardBody>
                  </Card>)}
              </RadioGroup>
            </Box>
          </Box>;
      case 2:
        return <Box padding="spacing.6" display="flex" gap="spacing.6" height="100%">
            <Box flex={1} display="flex" flexDirection="column" gap="spacing.3">
              <Heading size="large">Link Purchase Order</Heading>
              <RadioGroup label="Available Purchase Orders" name="purchaseOrder" value={selectedPO ?? ''} onChange={({
              value
            }) => {
              setSelectedPO(value);
              if (errors.purchaseOrder) {
                setErrors(prev => ({
                  ...prev,
                  purchaseOrder: undefined
                }));
              }
            }} validationState={errors.purchaseOrder ? 'error' : 'none'} errorText={errors.purchaseOrder}>
                {GRNPurchaseOrders.map(po => <Card key={po.id} as="label" accessibilityLabel={po.number} isSelected={selectedPO === po.id} marginBottom="spacing.3" elevation="none" padding="spacing.4">
                    <CardBody>
                      <Box display="flex" gap="spacing.3" alignItems="flex-start">
                        <Radio value={po.id} />
                        <Box display="flex" flexDirection="column" gap="spacing.2" flex={1}>
                          <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Text weight="semibold" size="medium">
                              {po.number}
                            </Text>
                            <Badge size="medium" color={po.status === 'Approved' ? 'positive' : 'notice'}>
                              {po.status}
                            </Badge>
                          </Box>

                          <Box display="flex" gap="spacing.4" flexWrap="wrap">
                            <Box display="flex" gap="spacing.2" alignItems="center">
                              <CalendarIcon color="interactive.icon.gray.muted" size="small" />
                              <Text size="small" color="surface.text.gray.muted">
                                {po.date}
                              </Text>
                            </Box>
                            <Text size="small" color="surface.text.gray.muted">
                              {po.items} Items
                            </Text>
                            <Text size="small" weight="medium">
                              ₹{po.amount.toLocaleString()}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                    </CardBody>
                  </Card>)}
              </RadioGroup>
            </Box>
          </Box>;
      case 3:
        return <Box padding="spacing.6" display="flex" gap="spacing.6" height="100%">
            <Box flex={1} display="flex" flexDirection="column" gap="spacing.5">
              <Heading size="large">GRN Details</Heading>
              <Box display="grid" gridTemplateColumns="1fr 1fr" gap="spacing.4">
                <TextInput label="GRN Number" value={grnDetails.grnNumber} isDisabled helpText="Auto-generated" />
                <TextInput label="Reference Number" value={grnDetails.referenceNumber} onChange={({
                value
              }) => {
                setGrnDetails(prev => ({
                  ...prev,
                  referenceNumber: value ?? ''
                }));
                if (errors.referenceNumber) {
                  setErrors(prev => ({
                    ...prev,
                    referenceNumber: undefined
                  }));
                }
              }} validationState={errors.referenceNumber ? 'error' : 'none'} errorText={errors.referenceNumber} placeholder="Enter reference number" isRequired necessityIndicator="required" />
              </Box>
              <Box display="grid" gridTemplateColumns="1fr 1fr" gap="spacing.4">
                <TextInput label="Delivery Location" placeholder="Enter delivery location" helpText="Where items will be delivered" />
                <TextInput label="Expected Delivery Date" placeholder="YYYY-MM-DD" helpText="Expected delivery date" />
              </Box>
              <TextArea label="Additional Notes" placeholder="Add any additional notes or special instructions" numberOfLines={5} helpText="Optional notes for this GRN" />
            </Box>
          </Box>;
      case 4:
        return <Box padding="spacing.6" display="flex" flexDirection="column" gap="spacing.6" height="100%">
            <Heading size="large">Line Items</Heading>
            <Box flex={1}>
              <Table data={compactTableData}>
                {tableData => <>
                    <TableHeader>
                      <TableHeaderRow>
                        <TableHeaderCell>Item Name</TableHeaderCell>
                        <TableHeaderCell>Quantity</TableHeaderCell>
                        <TableHeaderCell>Unit Price</TableHeaderCell>
                        <TableHeaderCell>Total Amount</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                      </TableHeaderRow>
                    </TableHeader>
                    <TableBody>
                      {tableData.map((item, index) => <TableRow key={item.id} item={item}>
                          <TableCell>
                            <Box>
                              <Text weight="medium">{item.name}</Text>
                            </Box>
                          </TableCell>

                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>₹{item.unitPrice.toLocaleString()}</TableCell>
                          <TableCell>
                            <Text weight="medium">
                              ₹{(item.quantity * item.unitPrice).toLocaleString()}
                            </Text>
                          </TableCell>
                          <TableCell>
                            <Badge color={index % 2 === 0 ? 'positive' : 'notice'}>
                              {index % 2 === 0 ? 'Available' : 'Pending'}
                            </Badge>
                          </TableCell>
                        </TableRow>)}
                    </TableBody>
                    <TableFooter>
                      <TableFooterRow>
                        <TableFooterCell>Total ({tableData.length} items)</TableFooterCell>
                        <TableFooterCell>
                          <Text weight="medium">
                            {tableData.reduce((sum, item) => sum + item.quantity, 0)}
                          </Text>
                        </TableFooterCell>
                        <TableFooterCell>-</TableFooterCell>
                        <TableFooterCell>
                          <Text weight="semibold" size="medium">
                            ₹
                            {tableData.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0).toLocaleString()}
                          </Text>
                        </TableFooterCell>
                        <TableFooterCell>-</TableFooterCell>
                      </TableFooterRow>
                    </TableFooter>
                  </>}
              </Table>
            </Box>
          </Box>;
      case 5:
        return <Box padding="spacing.6" display="flex" gap="spacing.6" height="100%">
            <Box flex={1} display="flex" flexDirection="column" gap="spacing.5">
              <Box>
                <Heading size="large">Review & Submit</Heading>
              </Box>

              <Box display="flex" flexDirection="column">
                <Card padding="spacing.4">
                  <CardBody>
                    <Heading size="small" marginBottom="spacing.2">
                      Vendor Information
                    </Heading>
                    <Box display="grid" gridTemplateColumns="1fr 1fr" gap="spacing.3">
                      <Box>
                        <Text weight="medium" size="small">
                          Vendor Name:
                        </Text>
                        <Text>{GRNVendors.find(v => v.id === selectedVendor)?.name}</Text>
                      </Box>
                      <Box>
                        <Text weight="medium" size="small">
                          Contact Email:
                        </Text>
                        <Text size="small">
                          {GRNVendors.find(v => v.id === selectedVendor)?.email}
                        </Text>
                      </Box>
                      <Box>
                        <Text weight="medium" size="small">
                          Phone Number:
                        </Text>
                        <Text size="small">
                          {GRNVendors.find(v => v.id === selectedVendor)?.phone}
                        </Text>
                      </Box>
                      <Box>
                        <Text weight="medium" size="small">
                          Address:
                        </Text>
                        <Text size="small">
                          {GRNVendors.find(v => v.id === selectedVendor)?.address}
                        </Text>
                      </Box>
                    </Box>
                    <Divider marginY="spacing.3" />

                    <Heading size="small" marginBottom="spacing.2">
                      Purchase Order Details
                    </Heading>
                    <Box display="grid" gridTemplateColumns="1fr 1fr" gap="spacing.3">
                      <Box>
                        <Text weight="medium" size="small">
                          PO Number:
                        </Text>
                        <Text>{GRNPurchaseOrders.find(p => p.id === selectedPO)?.number}</Text>
                      </Box>
                      <Box>
                        <Text weight="medium" size="small">
                          PO Date:
                        </Text>
                        <Text>{GRNPurchaseOrders.find(p => p.id === selectedPO)?.date}</Text>
                      </Box>
                      <Box>
                        <Text weight="medium" size="small">
                          PO Amount:
                        </Text>
                        <Text>
                          ₹
                          {GRNPurchaseOrders.find(p => p.id === selectedPO)?.amount.toLocaleString()}
                        </Text>
                      </Box>
                      <Box>
                        <Text weight="medium" size="small">
                          Status:
                        </Text>
                        <Badge color="positive">
                          {GRNPurchaseOrders.find(p => p.id === selectedPO)?.status ?? 'Unknown'}
                        </Badge>
                      </Box>
                    </Box>
                    <Divider marginY="spacing.3" />
                    <Heading size="small" marginBottom="spacing.2">
                      GRN Information
                    </Heading>
                    <Box display="grid" gridTemplateColumns="1fr 1fr" gap="spacing.3">
                      <Box>
                        <Text weight="medium" size="small">
                          GRN Number:
                        </Text>
                        <Text>{grnDetails.grnNumber}</Text>
                      </Box>
                      <Box>
                        <Text weight="medium" size="small">
                          Reference Number:
                        </Text>
                        <Text>{grnDetails.referenceNumber}</Text>
                      </Box>
                    </Box>
                  </CardBody>
                </Card>
              </Box>
            </Box>
          </Box>;
      default:
        return null;
    }
  };
  const renderStepContent = (): React.ReactElement | null => {
    switch (currentStep) {
      case 1:
        return <Box padding="spacing.5" display="flex" flexDirection="column" gap="spacing.4">
            <Box>
              <Heading size="medium">Select Vendor</Heading>
              <Text size="medium" color="surface.text.gray.muted">
                Choose a vendor from the list below
              </Text>
            </Box>
            <RadioGroup label="Available Vendors" name="vendor" value={selectedVendor ?? ''} onChange={({
            value
          }) => {
            setSelectedVendor(value);
            if (errors.vendor) {
              setErrors(prev => ({
                ...prev,
                vendor: undefined
              }));
            }
          }} validationState={errors.vendor ? 'error' : 'none'} errorText={errors.vendor}>
              {GRNVendors.slice(0, 3).map(vendor => <Radio key={vendor.id} value={vendor.id}>
                  {vendor.name}
                </Radio>)}
            </RadioGroup>
          </Box>;
      case 2:
        return <Box padding="spacing.5" display="flex" flexDirection="column" gap="spacing.4">
            <Box>
              <Heading size="medium">Link Purchase Order</Heading>
              <Text size="medium" color="surface.text.gray.muted">
                Select a Purchase Order to link with this GRN
              </Text>
            </Box>
            <RadioGroup label="Available Purchase Orders" name="purchaseOrder" value={selectedPO ?? ''} onChange={({
            value
          }) => {
            setSelectedPO(value);
            if (errors.purchaseOrder) {
              setErrors(prev => ({
                ...prev,
                purchaseOrder: undefined
              }));
            }
          }} validationState={errors.purchaseOrder ? 'error' : 'none'} errorText={errors.purchaseOrder}>
              {GRNPurchaseOrders.slice(0, 3).map(po => <Radio key={po.id} value={po.id}>
                  {po.number} - ₹{po.amount.toLocaleString()}
                </Radio>)}
            </RadioGroup>
          </Box>;
      case 3:
        return <Box padding="spacing.5" display="flex" flexDirection="column" gap="spacing.4">
            <Box>
              <Heading size="medium">GRN Details</Heading>
              <Text size="medium" color="surface.text.gray.muted">
                Add basic details for this GRN
              </Text>
            </Box>
            <TextInput label="GRN Number" value={grnDetails.grnNumber} isDisabled helpText="Auto-generated" />
            <TextInput label="Reference Number" value={grnDetails.referenceNumber} onChange={({
            value
          }) => {
            setGrnDetails(prev => ({
              ...prev,
              referenceNumber: value ?? ''
            }));
            if (errors.referenceNumber) {
              setErrors(prev => ({
                ...prev,
                referenceNumber: undefined
              }));
            }
          }} validationState={errors.referenceNumber ? 'error' : 'none'} errorText={errors.referenceNumber} placeholder="Enter reference number" isRequired necessityIndicator="required" />
          </Box>;
      case 4:
        return <Box padding="spacing.5" display="flex" flexDirection="column" gap="spacing.4">
            <Box>
              <Heading size="medium">Line Items</Heading>
              <Text size="medium" color="surface.text.gray.muted">
                Review the items for this GRN
              </Text>
            </Box>
            <Box>
              <Text weight="medium" marginBottom="spacing.3">
                Selected Items:
              </Text>
              {compactTableData.nodes.slice(0, 2).map(item => <Box key={item.id} padding="spacing.3" borderWidth="thin" borderColor="surface.border.gray.muted" borderRadius="medium" marginBottom="spacing.3">
                  <Box display="flex" justifyContent="space-between">
                    <Text>{item.name}</Text>
                    <Text>Qty: {item.quantity}</Text>
                  </Box>
                  <Text size="small" color="surface.text.gray.muted">
                    ₹{item.unitPrice.toLocaleString()} × {item.quantity} = ₹
                    {(item.quantity * item.unitPrice).toLocaleString()}
                  </Text>
                </Box>)}
            </Box>
          </Box>;
      case 5:
        return <Box padding="spacing.5" display="flex" flexDirection="column" gap="spacing.4">
            <Box>
              <Heading size="medium">Review & Submit</Heading>
            </Box>

            <Box display="flex" flexDirection="column" gap="spacing.3">
              <Box display="grid" gridTemplateColumns="1fr 1fr">
                <Box>
                  <Text weight="medium">Vendor:</Text>
                  <Text>{GRNVendors.find(v => v.id === selectedVendor)?.name}</Text>
                </Box>
                <Box>
                  <Text weight="medium">Purchase Order:</Text>
                  <Text>{GRNPurchaseOrders.find(p => p.id === selectedPO)?.number}</Text>
                </Box>
              </Box>
              <Box display="grid" gridTemplateColumns="1fr 1fr">
                <Box>
                  <Text weight="medium">GRN Number:</Text>
                  <Text>{grnDetails.grnNumber}</Text>
                </Box>
                <Box>
                  <Text weight="medium">Reference Number:</Text>
                  <Text>{grnDetails.referenceNumber}</Text>
                </Box>
              </Box>

              <Box>
                <Text weight="medium">Total Amount:</Text>
                <Text>
                  ₹
                  {compactTableData.nodes.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0).toLocaleString()}
                </Text>
              </Box>
            </Box>
          </Box>;
      default:
        return null;
    }
  };
  const renderStepGroup = (): React.ReactElement => {
    return <StepGroup orientation="vertical" size="medium">
        {GRNSteps.map(step => <StepItem key={step.stepNumber} title={step.title} marker={getStepIcon(step.stepNumber)} isSelected={currentStep === step.stepNumber} isDisabled={step.stepNumber > currentStep} onClick={() => step.stepNumber <= currentStep && setCurrentStep(step.stepNumber)} stepProgress={completedSteps.includes(step.stepNumber) ? 'full' : currentStep === step.stepNumber ? 'start' : 'none'} />)}
      </StepGroup>;
  };
  const renderFooter = (): React.ReactElement => <Box display="flex" gap="spacing.4" justifyContent="space-between">
      <Button variant="tertiary" onClick={handlePreviousStep} isDisabled={currentStep === 1}>
        Previous
      </Button>
      <Button variant="primary" onClick={currentStep === lastStep ? () => {
      resetState();
      setIsOpen(false);
    } : handleNextStep}>
        {currentStep === lastStep ? 'Submit' : 'Next'}
      </Button>
    </Box>;
  return <Box>
      <Button onClick={() => setIsOpen(true)}>Create GRN</Button>
      {isMobile ? isOpen && <Box width="100%" minHeight="100%" backgroundColor="surface.background.gray.moderate" display="flex" flexDirection="column" position="fixed" top="spacing.0" left="spacing.0" zIndex={1000}>
            {/* Header with current step name */}
            <div role="button" tabIndex={0} onClick={() => setShowStepGroup((prev: boolean) => !prev)}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onKeyDown={() => {}} style={{
        zIndex: 1006
      }}>
              <Box display="flex" alignItems="center" justifyContent="center" padding="spacing.4" backgroundColor="surface.background.gray.subtle" borderBottomWidth="thin" borderBottomColor="surface.border.gray.muted" position="relative">
                <Box display="flex" alignItems="center" gap="spacing.4">
                  {alert?.type === 'negative' && <InfoIcon color="feedback.icon.negative.intense" />}
                  <Badge color={alert?.type === 'negative' ? 'negative' : undefined}>
                    {currentStep} / {lastStep}
                  </Badge>
                  <Heading size="small">{currentStepObj?.title}</Heading>
                  {showStepGroup ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </Box>
              </Box>
            </div>
            <ProgressBar value={currentStep / lastStep * 100} showPercentage={false} size="medium" color={alert?.type === 'negative' ? 'negative' : undefined} />

            <Box>
              <Slide direction="top" fromOffset="100%" motionTriggers={['mount']} isVisible={showStepGroup}>
                <Box position="fixed" top="51px" left="spacing.0" backgroundColor="surface.background.gray.intense" zIndex={1005} width="100%" height="240px" borderBottomLeftRadius="2xlarge" borderBottomRightRadius="2xlarge" padding="spacing.7" paddingTop="spacing.0">
                  {renderStepGroup()}
                </Box>
              </Slide>
              <Fade motionTriggers={['mount']} isVisible={showStepGroup} shouldUnmountWhenHidden>
                <div role="button" tabIndex={0} style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1004
          }} onClick={() => setShowStepGroup((prev: boolean) => !prev)}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onKeyDown={() => {}} />
              </Fade>
            </Box>
            {/* Step content */}
            <Box overflow="auto" height="calc(100vh - 100px)" padding="spacing.4" paddingBottom="spacing.8">
              {modalSize === 'large' ? renderLargeStepContent() : renderStepContent()}
            </Box>
            <Box display="flex" flexDirection="column" gap="spacing.4" padding="spacing.4" backgroundColor="surface.background.gray.subtle" borderTopWidth="thin" borderTopColor="surface.border.gray.muted" position="fixed" bottom="spacing.0" zIndex={1001} width="100%">
              {renderFooter()}
            </Box>
          </Box> : <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)} size={modalSize}>
          <ModalHeader title="Create GRN" />
          <ModalBody padding="spacing.0">
            <Box display="flex" height="100%">
              <Box width="250px" padding="spacing.5" backgroundColor="surface.background.gray.moderate">
                {renderStepGroup()}
              </Box>
              <Box flex={1} display="flex" flexDirection="column">
                <Box flex={1} overflow="auto">
                  {modalSize === 'large' ? renderLargeStepContent() : renderStepContent()}
                </Box>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>{renderFooter()}</ModalFooter>
        </Modal>}
    </Box>;
}`,...(yt=(bt=Be.parameters)==null?void 0:bt.docs)==null?void 0:yt.source}}};var Bt,vt,St;se.parameters={...se.parameters,docs:{...(Bt=se.parameters)==null?void 0:Bt.docs,source:{originalSource:`CompactMultiStepExample.bind({}) as StoryFn<{
  modalSize?: 'small' | 'medium' | 'large';
}>`,...(St=(vt=se.parameters)==null?void 0:vt.docs)==null?void 0:St.source}}};var Ct,Tt,wt;ve.parameters={...ve.parameters,docs:{...(Ct=ve.parameters)==null?void 0:Ct.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    theme
  } = useTheme();
  const {
    matchedDeviceType
  } = useBreakpoint(theme);
  const isMobile = matchedDeviceType === 'mobile';
  return <Box>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <ResponsiveModalWrapper isOpen={isOpen} onDismiss={() => setIsOpen(false)} footer={<Box display="flex" gap="spacing.5" justifyContent="flex-end" width="100%">
            <Button variant="tertiary" isFullWidth={isMobile}>
              Cancel
            </Button>
            <Button isFullWidth={isMobile}> Update</Button>
          </Box>}>
        <Box display="flex" flexDirection="column" gap="spacing.2">
          <Text size="large" weight="semibold">
            Edit display name
          </Text>
          <Text size="medium" weight="regular" color="surface.text.gray.muted">
            The new display name will reflect immediately on your dashboard after you update it. It
            will be visible to you and your team on the Green Loom dashboard.
          </Text>
        </Box>
        <Box marginTop="spacing.5">
          <TextInput label="Enter new display name" placeholder="Enter your display name" />
        </Box>
      </ResponsiveModalWrapper>
    </Box>;
}`,...(wt=(Tt=ve.parameters)==null?void 0:Tt.docs)==null?void 0:wt.source}}};var jt,Dt,Rt;Se.parameters={...Se.parameters,docs:{...(jt=Se.parameters)==null?void 0:jt.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedMethod, setSelectedMethod] = React.useState('');
  const paymentMethods = [{
    value: 'quickpay',
    title: 'Quick Pay Button',
    subtitle: 'Accepting fixed price payments?  Customers make quick payments of fixed price through this button',
    icon: ZapIcon
  }, {
    value: 'buynow',
    title: 'Buy Now Button',
    subtitle: 'Selling products or event tickets?  Sell multiple items with support for quantity using this button.',
    icon: ZapIcon
  }, {
    value: 'custom',
    title: 'Custom Button',
    subtitle: 'Build your own button with your own design and branding or use our pre-built templates.',
    icon: ZapIcon,
    isDisabled: true
  }];
  const {
    theme
  } = useTheme();
  const {
    matchedDeviceType
  } = useBreakpoint(theme);
  const isMobile = matchedDeviceType === 'mobile';
  return <Box>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <ResponsiveModalWrapper isOpen={isOpen} onDismiss={() => {
      setIsOpen(false);
    }} modalSize="medium" footer={<Box display="flex" gap="spacing.5" justifyContent="flex-end" width="100%">
            <Button variant="tertiary" isFullWidth={isMobile} onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button isDisabled={!selectedMethod} onClick={() => {
        console.log('Selected payment method:', selectedMethod);
        setIsOpen(false);
      }} isFullWidth={isMobile}>
              Proceed
            </Button>
          </Box>} modalBodyPadding="spacing.0" wrapInBottomSheetFooter customSnapPoints={[0.8, 0.9, 0.95]}>
        <Box paddingX="spacing.6" paddingTop="spacing.6" display="flex" flexDirection="column" gap="spacing.1">
          <Heading size="small" weight="semibold">
            Pick a Button Type
          </Heading>
          <Text color="surface.text.gray.muted" size="small" weight="regular">
            Pick a button which meets your requirements and get a head start on collecting payments
            or you could build your own
          </Text>
        </Box>
        <Box padding="spacing.6">
          <Box display="grid" gridTemplateColumns={{
          base: '1fr 1fr',
          m: '1fr 1fr 1fr',
          l: '1fr 1fr 1fr'
        }} justifyItems="center" gap="spacing.5" width="100%">
            {paymentMethods.map((method, index) => <Card key={\`\${method.value}-\${index}\`} isSelected={selectedMethod === method.value} onClick={method.isDisabled ? undefined : () => setSelectedMethod(method.value)} padding="spacing.0" accessibilityLabel={\`Select \${method.title}\`} width={isMobile ? '165px' : '228px'} height={isMobile ? '184px' : undefined} borderRadius="medium" elevation="none" cursor={method.isDisabled ? 'not-allowed' : 'pointer'}>
                <CardBody>
                  <Box display="flex" justifyContent="center" alignItems="center" marginTop="spacing.6" marginX="spacing.5">
                    <Box padding="10px" backgroundColor={method.isDisabled ? 'surface.background.gray.subtle' : 'surface.background.primary.subtle'} width="40px" height="40px" display="flex" justifyContent="center" alignItems="center" borderRadius="medium">
                      <ZapIcon color={method.isDisabled ? 'surface.icon.gray.muted' : 'surface.icon.primary.normal'} size="large" />
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="row" gap="spacing.4" alignItems="center" paddingX="spacing.5" paddingY="spacing.4">
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" maxHeight="95px" gap="spacing.2">
                      <Text size="medium" weight="semibold" color={method.isDisabled ? 'surface.text.gray.muted' : 'surface.text.gray.normal'}>
                        {method.title}
                      </Text>
                      <Text size="small" color="surface.text.gray.muted" textAlign="center">
                        {method.subtitle}
                      </Text>
                    </Box>
                  </Box>
                </CardBody>
              </Card>)}
          </Box>
        </Box>
      </ResponsiveModalWrapper>
    </Box>;
}`,...(Rt=(Dt=Se.parameters)==null?void 0:Dt.docs)==null?void 0:Rt.source}}};var Pt,Nt,kt;ne.parameters={...ne.parameters,docs:{...(Pt=ne.parameters)==null?void 0:Pt.docs,source:{originalSource:`({
  cardCount = 3
}: {
  cardCount?: number;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedMethod, setSelectedMethod] = React.useState('');
  const {
    theme
  } = useTheme();
  const {
    matchedDeviceType
  } = useBreakpoint(theme);
  const isMobile = matchedDeviceType === 'mobile';

  // Get modal size based on card count
  const getModalSize = (): 'small' | 'medium' | 'large' => {
    if (cardCount === 2) return 'small';
    if (cardCount === 3) return 'medium';
    return 'large';
  };

  // Get grid layout based on card count
  const getGridLayout = (): {
    base: string;
    m: string;
  } => {
    if (cardCount === 2) {
      return {
        base: '1fr 1fr',
        m: '1fr 1fr'
      };
    }
    if (cardCount === 3) {
      return {
        base: '1fr 1fr',
        m: '1fr 1fr 1fr'
      };
    }
    return {
      base: '1fr 1fr',
      m: '1fr 1fr 1fr 1fr'
    };
  };

  // Get card width based on count and device
  const getCardWidth = (): SpacingValueType => {
    if (cardCount === 2) return isMobile ? '165px' : '160px';
    if (cardCount === 3) return isMobile ? '165px' : '230px';
    return isMobile ? '165px' : '220px';
  };

  // Get card height based on count and device
  const getCardHeight = (): SpacingValueType => {
    if (cardCount === 2) return isMobile ? '250px' : '300px';
    if (cardCount === 3) return isMobile ? '250px' : '250px';
    return isMobile ? '250px' : '260px';
  };
  const standardButtons = [{
    value: 'quickpay',
    title: 'Quick Pay Button',
    subtitle: 'Accepting fixed price payments?  Customers make quick payments of fixed price through this button',
    img: DonateNow,
    isDisabled: false
  }, {
    value: 'buynow',
    title: 'Buy Now Button',
    subtitle: 'Selling products or event tickets?  Sell multiple items with  quantity supported.',
    img: DonationButton,
    isDisabled: false
  }, {
    value: 'donations',
    title: 'Donations Button',
    subtitle: 'Raising money for a good cause?  Supporters can pick from presets or donate amount of their choice',
    img: PayNow,
    isDisabled: false
  }];
  const customButton = {
    value: 'custom',
    title: 'Custom Button',
    subtitle: 'Build your own button with your own design and branding. You can also use our pre-built templates.',
    img: cardImage,
    isDisabled: true
  };

  // Create all buttons array and slice based on cardCount
  const allButtons = [...standardButtons, customButton];
  const paymentMethods = allButtons.slice(0, cardCount);
  return <Box>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <ResponsiveModalWrapper isOpen={isOpen} onDismiss={() => {
      setIsOpen(false);
    }} modalSize={getModalSize()} footer={<Box display="flex" gap="spacing.5" justifyContent="flex-end" width="100%">
            <Button variant="tertiary" isFullWidth={isMobile} onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button isDisabled={!selectedMethod} onClick={() => {
        console.log('Selected payment method:', selectedMethod);
        setIsOpen(false);
      }} isFullWidth={isMobile}>
              Proceed
            </Button>
          </Box>} modalBodyPadding="spacing.0" wrapInBottomSheetFooter customSnapPoints={[0.8, 0.9, 0.95]}>
        <Box paddingX="spacing.6" paddingTop="spacing.6" display="flex" flexDirection="column" gap="spacing.1">
          <Heading size="small" weight="semibold">
            Pick a Button Type
          </Heading>
          <Text color="surface.text.gray.muted" size="small" weight="regular">
            Pick a button which meets your requirements and get a head start on collecting payments
            or you could build your own
          </Text>
        </Box>
        <Box padding="spacing.6">
          <Box display="grid" gridTemplateColumns={getGridLayout()} justifyItems="center" gap="spacing.5" width="100%">
            {paymentMethods.map((method, index) => <Card key={\`\${method.value}-\${index}\`} isSelected={selectedMethod === method.value} onClick={method.isDisabled ? undefined : () => setSelectedMethod(method.value)} padding="spacing.0" accessibilityLabel={\`Select \${method.title}\`} width={getCardWidth()} height={getCardHeight()} borderRadius="medium" elevation="none" cursor={method.isDisabled ? 'not-allowed' : 'pointer'}>
                <CardBody>
                  <Box overflow="hidden">
                    <Box>
                      <img src={method.img} alt={method.title} width={isMobile ? '160px' : '230px'} height={isMobile ? '93px' : '130px'} style={{
                    borderRadius: '4px'
                  }} />
                    </Box>
                    <Box display="flex" flexDirection="row" gap="spacing.4" alignItems="center" paddingX="spacing.5" paddingY="spacing.4" alignContent="center" justifyContent="center">
                      <Box display="flex" flexDirection="column" gap="spacing.2">
                        <Text size="medium" weight="semibold" color={method.isDisabled ? 'surface.text.gray.muted' : 'surface.text.gray.normal'}>
                          {method.title}
                        </Text>

                        <Text size="small" color="surface.text.gray.muted">
                          {method.subtitle}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </CardBody>
              </Card>)}
          </Box>
        </Box>
      </ResponsiveModalWrapper>
    </Box>;
}`,...(kt=(Nt=ne.parameters)==null?void 0:Nt.docs)==null?void 0:kt.source}}};var Ot,It,Mt;oe.parameters={...oe.parameters,docs:{...(Ot=oe.parameters)==null?void 0:Ot.docs,source:{originalSource:`({
  cardCount = 3
}: {
  cardCount?: number;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedMethod, setSelectedMethod] = React.useState('');
  const {
    theme
  } = useTheme();
  const {
    matchedDeviceType
  } = useBreakpoint(theme);
  const isMobile = matchedDeviceType === 'mobile';

  // Get modal size based on card count
  const getModalSize = (): 'small' | 'medium' | 'large' => {
    if (cardCount === 2) return 'small';
    if (cardCount === 3) return 'medium';
    return 'large';
  };

  // Get grid layout based on card count
  const getGridLayout = (): {
    base: string;
    m: string;
  } => {
    if (cardCount === 2) {
      return {
        base: '1fr 1fr',
        m: '1fr 1fr'
      };
    }
    if (cardCount === 3) {
      return {
        base: '1fr 1fr',
        m: '1fr 1fr 1fr'
      };
    }
    return {
      base: '1fr 1fr',
      m: '1fr 1fr 1fr 1fr'
    };
  };

  // Get card width based on count and device
  const getCardWidth = (): SpacingValueType => {
    if (cardCount === 2) return isMobile ? '165px' : '160px';
    if (cardCount === 3) return isMobile ? '165px' : '230px';
    return isMobile ? '165px' : '220px';
  };

  // Get card height based on count and device
  const getCardHeight = (): SpacingValueType => {
    if (cardCount === 2) return isMobile ? '250px' : '300px';
    if (cardCount === 3) return isMobile ? '250px' : '250px';
    return isMobile ? '250px' : '260px';
  };
  const standardButtons = [{
    value: 'quickpay',
    title: 'Quick Pay Button',
    subtitle: 'Accepting fixed price payments?  Customers make quick payments of fixed price through this button',
    img: DonateNow,
    isDisabled: false
  }, {
    value: 'buynow',
    title: 'Buy Now Button',
    subtitle: 'Selling products or event tickets?  Sell multiple items with  quantity supported.',
    img: DonationButton,
    isDisabled: false
  }, {
    value: 'donations',
    title: 'Donations Button',
    subtitle: 'Raising money for a good cause?  Supporters can pick from presets or donate amount of their choice',
    img: PayNow,
    isDisabled: false
  }];
  const customButton = {
    value: 'custom',
    title: 'Custom Button',
    subtitle: 'Build your own button with your own design and branding. You can also use our pre-built templates.',
    img: cardImage,
    isDisabled: true
  };

  // Create all buttons array and slice based on cardCount
  const allButtons = [...standardButtons, customButton];
  const paymentMethods = allButtons.slice(0, cardCount);
  return <Box>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <ResponsiveModalWrapper isOpen={isOpen} onDismiss={() => {
      setIsOpen(false);
    }} modalSize={getModalSize()} footer={<Box display="flex" gap="spacing.5" justifyContent="flex-end" width="100%">
            <Button variant="tertiary" isFullWidth={isMobile} onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button isDisabled={!selectedMethod} onClick={() => {
        console.log('Selected payment method:', selectedMethod);
        setIsOpen(false);
      }} isFullWidth={isMobile}>
              Proceed
            </Button>
          </Box>} modalBodyPadding="spacing.0" wrapInBottomSheetFooter customSnapPoints={[0.8, 0.9, 0.95]}>
        <Box paddingX="spacing.6" paddingTop="spacing.6" display="flex" flexDirection="column" gap="spacing.1">
          <Heading size="small" weight="semibold">
            Pick a Button Type
          </Heading>
          <Text color="surface.text.gray.muted" size="small" weight="regular">
            Pick a button which meets your requirements and get a head start on collecting payments
            or you could build your own
          </Text>
        </Box>
        <Box padding="spacing.6">
          <Box display="grid" gridTemplateColumns={getGridLayout()} justifyItems="center" gap="spacing.5" width="100%">
            {paymentMethods.map((method, index) => <Card key={\`\${method.value}-\${index}\`} isSelected={selectedMethod === method.value} onClick={method.isDisabled ? undefined : () => setSelectedMethod(method.value)} padding="spacing.0" accessibilityLabel={\`Select \${method.title}\`} width={getCardWidth()} height={getCardHeight()} borderRadius="medium" elevation="none" cursor={method.isDisabled ? 'not-allowed' : 'pointer'}>
                <CardBody>
                  <Box overflow="hidden">
                    <Box>
                      <img src={method.img} alt={method.title} width={isMobile ? '160px' : '230px'} height={isMobile ? '93px' : '130px'} style={{
                    borderRadius: '4px'
                  }} />
                    </Box>
                    <Box display="flex" flexDirection="row" gap="spacing.4" alignItems="center" paddingX="spacing.5" paddingY="spacing.4" alignContent="center" justifyContent="center">
                      <Box display="flex" flexDirection="column" gap="spacing.2">
                        <Text size="medium" weight="semibold" color={method.isDisabled ? 'surface.text.gray.muted' : 'surface.text.gray.normal'}>
                          {method.title}
                        </Text>

                        <Text size="small" color="surface.text.gray.muted">
                          {method.subtitle}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </CardBody>
              </Card>)}
          </Box>
        </Box>
      </ResponsiveModalWrapper>
    </Box>;
}`,...(Mt=(It=oe.parameters)==null?void 0:It.docs)==null?void 0:Mt.source}}};var zt,Gt,Ft;le.parameters={...le.parameters,docs:{...(zt=le.parameters)==null?void 0:zt.docs,source:{originalSource:`({
  cardCount = 3
}: {
  cardCount?: number;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedMethod, setSelectedMethod] = React.useState('');
  const {
    theme
  } = useTheme();
  const {
    matchedDeviceType
  } = useBreakpoint(theme);
  const isMobile = matchedDeviceType === 'mobile';

  // Get modal size based on card count
  const getModalSize = (): 'small' | 'medium' | 'large' => {
    if (cardCount === 2) return 'small';
    if (cardCount === 3) return 'medium';
    return 'large';
  };

  // Get grid layout based on card count
  const getGridLayout = (): {
    base: string;
    m: string;
  } => {
    if (cardCount === 2) {
      return {
        base: '1fr 1fr',
        m: '1fr 1fr'
      };
    }
    if (cardCount === 3) {
      return {
        base: '1fr 1fr',
        m: '1fr 1fr 1fr'
      };
    }
    return {
      base: '1fr 1fr',
      m: '1fr 1fr 1fr 1fr'
    };
  };

  // Get card width based on count and device
  const getCardWidth = (): SpacingValueType => {
    if (cardCount === 2) return isMobile ? '165px' : '160px';
    if (cardCount === 3) return isMobile ? '165px' : '230px';
    return isMobile ? '165px' : '220px';
  };

  // Get card height based on count and device
  const getCardHeight = (): SpacingValueType => {
    if (cardCount === 2) return isMobile ? '250px' : '300px';
    if (cardCount === 3) return isMobile ? '250px' : '250px';
    return isMobile ? '250px' : '260px';
  };
  const standardButtons = [{
    value: 'quickpay',
    title: 'Quick Pay Button',
    subtitle: 'Accepting fixed price payments?  Customers make quick payments of fixed price through this button',
    img: DonateNow,
    isDisabled: false
  }, {
    value: 'buynow',
    title: 'Buy Now Button',
    subtitle: 'Selling products or event tickets?  Sell multiple items with  quantity supported.',
    img: DonationButton,
    isDisabled: false
  }, {
    value: 'donations',
    title: 'Donations Button',
    subtitle: 'Raising money for a good cause?  Supporters can pick from presets or donate amount of their choice',
    img: PayNow,
    isDisabled: false
  }];
  const customButton = {
    value: 'custom',
    title: 'Custom Button',
    subtitle: 'Build your own button with your own design and branding. You can also use our pre-built templates.',
    img: cardImage,
    isDisabled: true
  };

  // Create all buttons array and slice based on cardCount
  const allButtons = [...standardButtons, customButton];
  const paymentMethods = allButtons.slice(0, cardCount);
  return <Box>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <ResponsiveModalWrapper isOpen={isOpen} onDismiss={() => {
      setIsOpen(false);
    }} modalSize={getModalSize()} footer={<Box display="flex" gap="spacing.5" justifyContent="flex-end" width="100%">
            <Button variant="tertiary" isFullWidth={isMobile} onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button isDisabled={!selectedMethod} onClick={() => {
        console.log('Selected payment method:', selectedMethod);
        setIsOpen(false);
      }} isFullWidth={isMobile}>
              Proceed
            </Button>
          </Box>} modalBodyPadding="spacing.0" wrapInBottomSheetFooter customSnapPoints={[0.8, 0.9, 0.95]}>
        <Box paddingX="spacing.6" paddingTop="spacing.6" display="flex" flexDirection="column" gap="spacing.1">
          <Heading size="small" weight="semibold">
            Pick a Button Type
          </Heading>
          <Text color="surface.text.gray.muted" size="small" weight="regular">
            Pick a button which meets your requirements and get a head start on collecting payments
            or you could build your own
          </Text>
        </Box>
        <Box padding="spacing.6">
          <Box display="grid" gridTemplateColumns={getGridLayout()} justifyItems="center" gap="spacing.5" width="100%">
            {paymentMethods.map((method, index) => <Card key={\`\${method.value}-\${index}\`} isSelected={selectedMethod === method.value} onClick={method.isDisabled ? undefined : () => setSelectedMethod(method.value)} padding="spacing.0" accessibilityLabel={\`Select \${method.title}\`} width={getCardWidth()} height={getCardHeight()} borderRadius="medium" elevation="none" cursor={method.isDisabled ? 'not-allowed' : 'pointer'}>
                <CardBody>
                  <Box overflow="hidden">
                    <Box>
                      <img src={method.img} alt={method.title} width={isMobile ? '160px' : '230px'} height={isMobile ? '93px' : '130px'} style={{
                    borderRadius: '4px'
                  }} />
                    </Box>
                    <Box display="flex" flexDirection="row" gap="spacing.4" alignItems="center" paddingX="spacing.5" paddingY="spacing.4" alignContent="center" justifyContent="center">
                      <Box display="flex" flexDirection="column" gap="spacing.2">
                        <Text size="medium" weight="semibold" color={method.isDisabled ? 'surface.text.gray.muted' : 'surface.text.gray.normal'}>
                          {method.title}
                        </Text>

                        <Text size="small" color="surface.text.gray.muted">
                          {method.subtitle}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </CardBody>
              </Card>)}
          </Box>
        </Box>
      </ResponsiveModalWrapper>
    </Box>;
}`,...(Ft=(Gt=le.parameters)==null?void 0:Gt.docs)==null?void 0:Ft.source}}};var Ht,At,Lt;Ce.parameters={...Ce.parameters,docs:{...(Ht=Ce.parameters)==null?void 0:Ht.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    theme
  } = useTheme();
  const {
    matchedDeviceType
  } = useBreakpoint(theme);
  const isMobile = matchedDeviceType === 'mobile';
  const shippingTime = [{
    value: '1-2 days',
    label: '1-2 days'
  }, {
    value: '3-5 days',
    label: '3-5 days'
  }, {
    value: '6-8 days',
    label: '6-8 days'
  }, {
    value: '9-15 days',
    label: '9-15 days'
  }, {
    value: 'not applicable',
    label: 'Not Applicable'
  }];
  return <Box>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <ResponsiveModalWrapper isOpen={isOpen} onDismiss={() => setIsOpen(false)} modalSize="large" modalBodyPadding="spacing.0" customSnapPoints={[0.8, 0.9, 0.95]} wrapInBottomSheetFooter footer={isMobile ? <Box display="flex" justifyContent="flex-end" gap="spacing.5">
              <Button variant="tertiary" isFullWidth={isMobile} onClick={() => setIsOpen(false)}>
                Back
              </Button>
              <Button variant="primary" isFullWidth={isMobile} onClick={() => setIsOpen(false)}>
                Continue
              </Button>
            </Box> : undefined}>
        <Box display="grid" gridTemplateColumns={isMobile ? '1fr' : 'auto 1fr'} gridTemplateRows={isMobile ? '1fr' : 'auto 1fr'} width="100%" height="100%">
          {!isMobile && <Box backgroundColor="surface.background.gray.subtle" height="596px" width="400px" display="flex" flexDirection="column" justifyContent="flex-end" overflow="hidden" gridRow="span 2">
              <img src={ModalSideImage} height="596px" width="100%" alt="random graphics" />
            </Box>}
          <Box height="596px" paddingTop="spacing.6" width="100%" overflow="auto" display="flex" flexDirection="column" justifyContent="space-between">
            <Box paddingX="spacing.6">
              <Heading size="medium" weight="semibold">
                Create policy pages with Green Loom
              </Heading>
              <Text size="medium" weight="regular" color="surface.text.gray.muted">
                We need a few details to create the missing policy pages for you
              </Text>
              <Box marginTop="spacing.6" display="flex" gap="spacing.7" flexDirection="column" height="100%" width="100%">
                <ChipGroup label="Shipping time">
                  {shippingTime.map(time => <Chip key={time.value} value={time.value}>
                      {time.label}
                    </Chip>)}
                </ChipGroup>
                <ChipGroup label="Cancellation request time">
                  {shippingTime.map(time => <Chip key={time.value} value={time.value}>
                      {time.label}
                    </Chip>)}
                </ChipGroup>
                <ChipGroup label="Refund processing time">
                  {shippingTime.map(time => <Chip key={time.value} value={time.value}>
                      {time.label}
                    </Chip>)}
                </ChipGroup>
                <TextInput label="Support contact number" prefix="+91" placeholder="9XXXXXXXXX" />
                <TextInput label="Support Email ID" placeholder="support@greenloom.ai" />
              </Box>
            </Box>
            {!isMobile && <Box>
                <ModalFooter>
                  <Box display="flex" justifyContent="flex-end" gap="spacing.5">
                    <Button variant="tertiary" onClick={() => setIsOpen(false)}>
                      Back
                    </Button>
                    <Button variant="primary" onClick={() => setIsOpen(false)}>
                      Continue
                    </Button>
                  </Box>
                </ModalFooter>
              </Box>}
          </Box>
        </Box>
      </ResponsiveModalWrapper>
    </Box>;
}`,...(Lt=(At=Ce.parameters)==null?void 0:At.docs)==null?void 0:Lt.source}}};const Oi=["Default","MultiStep","MultiStepProgressBar","CompactMultiStep","CompactMultiStepLarge","EditAndAddModal","FlowSelectionModalWithIcon","FlowSelectionModal2Cards","FlowSelectionModal3Cards","FlowSelectionModal4Cards","SingleStepForm"];export{Be as CompactMultiStep,se as CompactMultiStepLarge,be as Default,ve as EditAndAddModal,ne as FlowSelectionModal2Cards,oe as FlowSelectionModal3Cards,le as FlowSelectionModal4Cards,Se as FlowSelectionModalWithIcon,ye as MultiStep,ae as MultiStepProgressBar,Ce as SingleStepForm,Oi as __namedExportsOrder,ki as default};
