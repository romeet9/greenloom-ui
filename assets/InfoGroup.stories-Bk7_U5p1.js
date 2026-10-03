import{jr as d,ad as I,j as e,js as a,jt as t,a7 as l,ju as i,N as o,b7 as s,C,l as m,g0 as z,aT as Be,aW as ke,aV as Ge,F as L,a3 as b,B as G,aI as w,i7 as K,i8 as A,aJ as E,a8 as D,y as Se,z as Ve,ak as He,a9 as X,n as k,O as _e,K as Y,aY as Ne,aZ as Pe,a_ as Le,b0 as Oe,X as Re,aK as Ue}from"./iframe-C1qQ09LF.js";import{S as qe}from"./Sandbox.web-B2xP21Qp.js";import{S as Xe}from"./StoryPageWrapper-CS0_5maI.js";import{g as Ye}from"./storybookArgTypes-DFfQV31s.js";const Qe=()=>e.jsxs(Xe,{componentName:"InfoGroup",componentDescription:"InfoGroup is a structured component for displaying key-value pairs in a consistent, organized format. It provides a standardized way to present information such as transaction details, user data, or any related data pairs with proper visual hierarchy and alignment.",figmaURL:"",children:[e.jsx(Re,{children:"Usage"}),e.jsx(qe,{children:`
        import { InfoGroup, InfoItem, InfoItemKey, InfoItemValue, UserIcon } from '@greenloom/ui/components';
        
        function App() {
          return (
            <InfoGroup itemOrientation="horizontal" size="medium">
              <InfoItem>
                <InfoItemKey leading={UserIcon} helpText="Customer information">
                  Account Holder
                </InfoItemKey>
                <InfoItemValue>Saurabh Daware</InfoItemValue>
              </InfoItem>
            </InfoGroup>
          )
        }

        export default App;
        `})]}),Fe={title:"Components/InfoGroup",component:d,tags:["autodocs"],argTypes:{...Ye()},args:{},parameters:{docs:{page:Qe}}},Je=n=>e.jsxs(d,{...n,children:[e.jsxs(a,{children:[e.jsx(t,{children:"Account Holder"}),e.jsx(i,{children:"Saurabh Daware"})]}),e.jsxs(a,{children:[e.jsx(t,{children:"Payment Method"}),e.jsx(i,{children:"Credit Card"})]}),e.jsxs(a,{children:[e.jsx(t,{children:"Transaction Amount"}),e.jsx(i,{children:e.jsx(D,{weight:"semibold",color:"surface.text.gray.subtle",value:123456,size:n.size})})]}),e.jsxs(a,{children:[e.jsx(t,{children:"Transaction Date"}),e.jsx(i,{children:"Dec 15, 2023"})]}),e.jsxs(a,{children:[e.jsx(t,{children:"Status"}),e.jsx(i,{children:"Completed"})]})]}),r=Je.bind({});r.args={itemOrientation:"horizontal",size:"medium",valueAlign:"left"};r.storyName="Default";const v={xsmall:"small",small:"small",medium:"medium",large:"medium"},O={xsmall:"small",small:"small",medium:"medium",large:"large"},P={xsmall:"medium",small:"medium",medium:"medium",large:"large"},u=n=>e.jsxs(d,{...n,children:[e.jsxs(a,{children:[e.jsx(t,{leading:l,helpText:"Customer information",children:"Account Holder"}),e.jsx(i,{helpText:"Name of the account holder",trailing:o,children:"Saurabh Daware"})]}),e.jsxs(a,{children:[e.jsx(t,{leading:s,children:"Payment ID"}),e.jsx(i,{trailing:e.jsx(m,{icon:z,variant:"button",size:n.size}),children:e.jsx(C,{weight:"bold",size:v[n.size],children:"pay_MK7DGqwYXEwx9Q"})})]}),e.jsxs(a,{children:[e.jsx(t,{leading:s,children:"Transaction Amount"}),e.jsx(i,{children:e.jsx(D,{weight:"semibold",color:"surface.text.gray.subtle",value:25e4,size:n.size})})]}),e.jsxs(a,{children:[e.jsx(t,{leading:l,trailing:e.jsx(Se,{content:"Name of the Approved Merchant",placement:"top",children:e.jsx(Ve,{display:"flex",alignItems:"center",children:e.jsx(He,{size:n.size,color:"surface.icon.gray.muted"})})}),children:"Merchant Name"}),e.jsx(i,{trailing:e.jsx(L,{color:"positive",size:O[n.size],children:"Approved"}),children:"Green Loom Software Pvt Ltd"})]}),e.jsxs(a,{children:[e.jsx(t,{leading:s,children:"Reference Number"}),e.jsx(i,{trailing:e.jsx(m,{icon:z,variant:"button",size:n.size}),children:e.jsx(C,{weight:"bold",size:v[n.size],children:"ref_ABC123XYZ789"})})]}),e.jsxs(a,{children:[e.jsx(t,{leading:o,children:"Transaction Status"}),e.jsx(i,{children:"Success"})]})]});u.args={itemOrientation:"horizontal",size:"medium",maxWidth:{base:"100%",m:"700px"}};u.storyName="With Icons";const f=n=>e.jsxs(d,{...n,children:[e.jsxs(a,{children:[e.jsx(t,{leading:e.jsx(b,{size:n.size,name:"Saurabh Daware"}),helpText:"Customer information",children:"Account Holder"}),e.jsx(i,{trailing:o,children:"Saurabh Daware"})]}),e.jsxs(a,{children:[e.jsx(t,{leading:e.jsx(b,{size:n.size,name:"Bank Account"}),children:"Payment ID"}),e.jsx(i,{trailing:e.jsx(m,{icon:z,variant:"button",size:n.size}),children:e.jsx(C,{weight:"bold",size:v[n.size],children:"pay_MK7DGqwYXEwx9Q"})})]}),e.jsxs(a,{children:[e.jsx(t,{leading:e.jsx(b,{size:n.size,name:"Customer Support"}),children:"Support Agent"}),e.jsx(i,{children:"John Doe"})]}),e.jsxs(a,{children:[e.jsx(t,{leading:e.jsx(b,{size:n.size,name:"Transaction Manager"}),children:"Processed By"}),e.jsx(i,{trailing:o,children:"Jane Smith"})]}),e.jsxs(a,{children:[e.jsx(t,{leading:e.jsx(b,{size:n.size,name:"Business Account"}),children:"Business Name"}),e.jsx(i,{children:"Tech Solutions Inc."})]}),e.jsxs(a,{children:[e.jsx(t,{leading:e.jsx(b,{size:n.size,name:"Payment Gateway"}),children:"Gateway Response"}),e.jsx(i,{trailing:e.jsx(m,{icon:z,variant:"button",size:n.size}),children:e.jsx(C,{weight:"bold",size:v[n.size],children:"gw_resp_SUCCESS_001"})})]})]});f.args={itemOrientation:"horizontal",size:"medium"};f.storyName="With Avatars";const h=n=>e.jsxs(d,{...n,children:[e.jsxs(a,{children:[e.jsx(t,{leading:l,children:"Account Holder"}),e.jsx(i,{trailing:o,children:"Saurabh Daware"})]}),e.jsxs(a,{children:[e.jsx(t,{leading:s,children:"Payment ID"}),e.jsx(i,{trailing:e.jsx(m,{icon:z,variant:"button",size:n.size}),children:e.jsx(C,{weight:"bold",size:v[n.size],children:"pay_MK7DGqwYXEwx9Q"})})]}),e.jsxs(a,{children:[e.jsx(t,{leading:s,children:"Transaction Amount"}),e.jsx(i,{children:e.jsx(D,{weight:"semibold",color:"surface.text.gray.subtle",value:575025,size:n.size})})]}),e.jsxs(a,{children:[e.jsx(t,{leading:l,children:"Customer Email"}),e.jsx(i,{children:"saurabh.daware@example.com"})]}),e.jsxs(a,{children:[e.jsx(t,{leading:o,children:"Payment Status"}),e.jsx(i,{trailing:o,children:"Authorized"})]}),e.jsxs(a,{children:[e.jsx(t,{leading:s,children:"Settlement Date"}),e.jsx(i,{children:"Dec 16, 2023"})]}),e.jsxs(a,{children:[e.jsx(t,{leading:l,children:"Currency"}),e.jsx(i,{children:"INR"})]})]});h.args={itemOrientation:"vertical",size:"medium",isHighlighted:!0,gridTemplateColumns:"repeat(3, 1fr)"};h.storyName="With Vertical Item Orientation";const p=n=>{const[T,S]=I.useState(!1),[W,we]=I.useState("Saurabh Daware"),[R,M]=I.useState(""),[V,U]=I.useState(!1),[Ke,H]=I.useState(!1),[_,B]=I.useState("");I.useEffect(()=>{V&&setTimeout(()=>{U(!1)},1e3)},[V]);const Ae=()=>{M(W),S(!0)},Ee=()=>{we(R),M(""),S(!1)},De=()=>{M(""),S(!1)},Te=()=>{B("saurabh.daware@example.com"),H(!0)},q=()=>{H(!1),B("")},We=()=>{console.log("Sending email change request for:",_),H(!1),B("")};return e.jsxs(e.Fragment,{children:[e.jsxs(d,{...n,children:[e.jsxs(a,{children:[e.jsx(t,{leading:l,helpText:"Click to edit customer information",children:"Account Holder"}),e.jsx(i,{trailing:T?void 0:e.jsx(m,{icon:Y,variant:"button",size:n.size,onClick:Ae}),children:T?e.jsxs(G,{display:"flex",alignItems:"center",gap:"spacing.3",children:[e.jsx(X,{label:"",value:R,onChange:({name:Me,value:N})=>M(N||""),size:P[n.size],placeholder:"Enter account holder name"}),e.jsx(k,{icon:o,variant:"primary",size:P[n.size],onClick:Ee}),e.jsx(k,{icon:_e,variant:"tertiary",size:P[n.size],onClick:De})]}):W})]}),e.jsxs(a,{children:[e.jsx(t,{leading:s,children:"Payment ID"}),e.jsx(i,{trailing:e.jsx(Se,{content:V?"Copied":"Copy Payment ID",placement:"top",children:e.jsx(Ve,{display:"flex",alignItems:"center",children:e.jsx(m,{icon:V?o:z,color:V?"positive":"primary",onClick:()=>{navigator.clipboard.writeText("pay_MK7DGqwYXEwx9Q"),U(!0)},variant:"button",size:n.size})})}),children:e.jsx(C,{weight:"bold",size:v[n.size],children:"pay_MK7DGqwYXEwx9Q"})})]}),e.jsxs(a,{children:[e.jsx(t,{leading:s,children:"Transaction Amount"}),e.jsx(i,{children:e.jsx(D,{weight:"semibold",color:"surface.text.gray.subtle",value:25e4,size:n.size})})]}),e.jsxs(a,{children:[e.jsx(t,{leading:l,children:"Email Address"}),e.jsx(i,{trailing:e.jsx(m,{icon:Y,variant:"button",size:n.size,onClick:Te}),children:"saurabh.daware@example.com"})]}),e.jsxs(a,{children:[e.jsx(t,{leading:o,children:"Payment Status"}),e.jsx(i,{trailing:e.jsx(L,{color:"positive",size:O[n.size],children:"Success"}),children:"Completed"})]}),e.jsxs(a,{children:[e.jsx(t,{leading:s,children:"Transaction Date"}),e.jsx(i,{children:"Dec 15, 2023"})]})]}),e.jsxs(Ne,{isOpen:Ke,onDismiss:q,size:"small",accessibilityLabel:"Edit Email Address",children:[e.jsx(Pe,{title:"Edit Email Address"}),e.jsx(Le,{children:e.jsx(X,{label:"New Email Address",value:_,onChange:({name:Me,value:N})=>B(N||""),placeholder:"Enter new email address",type:"email"})}),e.jsx(Oe,{children:e.jsxs(G,{display:"flex",gap:"spacing.3",justifyContent:"flex-end",children:[e.jsx(k,{variant:"tertiary",onClick:q,children:"Cancel"}),e.jsx(k,{variant:"primary",onClick:We,isDisabled:!_.trim(),children:"Send for Approval"})]})})]})]})};p.args={itemOrientation:"horizontal",size:"medium",maxWidth:{base:"100%",m:"700px"}};p.storyName="With Interactive Items";const Ze=n=>e.jsxs(d,{...n,children:[e.jsxs(a,{children:[e.jsx(t,{truncateAfterLines:1,children:"Key that truncates"}),e.jsx(i,{truncateAfterLines:1,children:"Value that truncates"})]}),e.jsxs(a,{children:[e.jsx(t,{children:"Key that wraps to next line"}),e.jsx(i,{children:"Value that wraps to next line"})]})]}),x=Ze.bind({});x.args={itemOrientation:"horizontal",size:"medium",maxWidth:"100px",gridTemplateColumns:"1fr 1fr"};x.storyName="With Truncation";const g=n=>{const[T,S]=I.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(d,{...n,children:[e.jsxs(a,{children:[e.jsx(t,{leading:l,children:"Account Holder"}),e.jsx(i,{trailing:o,children:"Saurabh Daware"})]}),e.jsxs(a,{children:[e.jsx(t,{leading:s,children:"Payment ID"}),e.jsx(i,{trailing:e.jsx(m,{icon:z,variant:"button",size:n.size}),children:e.jsx(C,{weight:"bold",size:v[n.size],children:"pay_MK7DGqwYXEwx9Q"})})]})]}),e.jsxs(Be,{direction:"top",marginTop:"spacing.4",onExpandChange:({isExpanded:W})=>S(W),children:[e.jsx(ke,{children:T?"Hide Details":"Show More"}),e.jsx(Ge,{children:e.jsxs(d,{...n,children:[e.jsxs(a,{children:[e.jsx(t,{leading:l,children:"Customer Email"}),e.jsx(i,{children:"saurabh.daware@example.com"})]}),e.jsxs(a,{children:[e.jsx(t,{leading:o,children:"Payment Status"}),e.jsx(i,{trailing:e.jsx(L,{color:"positive",size:O[n.size],children:"Success"}),children:"Completed"})]}),e.jsxs(a,{children:[e.jsx(t,{leading:s,children:"Settlement Date"}),e.jsx(i,{children:"Dec 16, 2023"})]}),e.jsxs(a,{children:[e.jsx(t,{leading:l,children:"Currency"}),e.jsx(i,{children:"INR"})]})]})})]})]})};g.args={itemOrientation:"horizontal",size:"medium",gridTemplateColumns:"1fr 1fr",width:"500px"};g.storyName="With Collapsible";const $e=n=>e.jsxs(d,{...n,children:[e.jsxs(a,{children:[e.jsx(t,{children:"Account Holder"}),e.jsx(i,{children:"Saurabh Daware"})]}),e.jsxs(a,{children:[e.jsx(t,{children:"Payment Method"}),e.jsx(i,{children:"Credit Card"})]}),e.jsxs(a,{children:[e.jsx(t,{children:"Transaction Amount"}),e.jsx(i,{children:e.jsx(D,{weight:"semibold",color:"surface.text.gray.subtle",value:123456,size:n.size})})]}),e.jsxs(a,{children:[e.jsx(t,{children:"Transaction Date"}),e.jsx(i,{children:"Dec 15, 2023"})]}),e.jsx(Ue,{gridColumn:"span 2"}),e.jsxs(a,{children:[e.jsx(t,{children:"Status"}),e.jsx(i,{children:"Completed"})]})]}),c=$e.bind({});c.args={itemOrientation:"horizontal",size:"medium",valueAlign:"right",maxWidth:{base:"100%",m:"400px"}};const y=n=>e.jsxs(G,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(w,{elevation:"none",maxWidth:n.maxWidth,children:[e.jsx(K,{children:e.jsx(A,{title:"With valueAlign: left"})}),e.jsx(E,{children:e.jsx(c,{...n,valueAlign:"left"})})]}),e.jsxs(w,{elevation:"none",maxWidth:n.maxWidth,children:[e.jsx(K,{children:e.jsx(A,{title:"With valueAlign: right"})}),e.jsx(E,{children:e.jsx(c,{...n,valueAlign:"right"})})]})]});y.args={itemOrientation:"horizontal",size:"medium",maxWidth:"500px"};y.storyName="With Horizontal Item Alignments";const j=n=>e.jsxs(G,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(w,{elevation:"none",maxWidth:n.maxWidth,children:[e.jsx(K,{children:e.jsx(A,{title:"With gridTemplateColumns: repeat(3, 1fr)"})}),e.jsx(E,{children:e.jsx(r,{...n,gridTemplateColumns:"repeat(3, 1fr)"})})]}),e.jsxs(w,{elevation:"none",maxWidth:n.maxWidth,children:[e.jsx(K,{children:e.jsx(A,{title:"With gridTemplateColumns: repeat(4, 1fr)"})}),e.jsx(E,{children:e.jsx(r,{...n,gridTemplateColumns:"repeat(4, 1fr)"})})]}),e.jsxs(w,{elevation:"none",maxWidth:n.maxWidth,children:[e.jsx(K,{children:e.jsx(A,{title:"With gridTemplateColumns: 1fr"})}),e.jsx(E,{children:e.jsx(r,{...n,gridTemplateColumns:"1fr"})})]})]});j.args={itemOrientation:"vertical",size:"medium",isHighlighted:!0};j.storyName="With Vertical Item Alignments";var Q,F,J;r.parameters={...r.parameters,docs:{...(Q=r.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  return <InfoGroup {...args}>
      <InfoItem>
        <InfoItemKey>Account Holder</InfoItemKey>
        <InfoItemValue>Saurabh Daware</InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey>Payment Method</InfoItemKey>
        <InfoItemValue>Credit Card</InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey>Transaction Amount</InfoItemKey>
        <InfoItemValue>
          <Amount weight="semibold" color="surface.text.gray.subtle" value={123456} size={args.size} />
        </InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey>Transaction Date</InfoItemKey>
        <InfoItemValue>Dec 15, 2023</InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey>Status</InfoItemKey>
        <InfoItemValue>Completed</InfoItemValue>
      </InfoItem>
    </InfoGroup>;
}`,...(J=(F=r.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  return <InfoGroup {...args}>
      <InfoItem>
        <InfoItemKey leading={UserIcon} helpText="Customer information">
          Account Holder
        </InfoItemKey>
        <InfoItemValue helpText="Name of the account holder" trailing={CheckIcon}>
          Saurabh Daware
        </InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={BankIcon}>Payment ID</InfoItemKey>
        <InfoItemValue trailing={<Link icon={CopyIcon} variant="button" size={args.size} />}>
          <Code weight="bold" size={codeSizeMap[args.size!]}>
            pay_MK7DGqwYXEwx9Q
          </Code>
        </InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={BankIcon}>Transaction Amount</InfoItemKey>
        <InfoItemValue>
          <Amount weight="semibold" color="surface.text.gray.subtle" value={250000} size={args.size} />
        </InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={UserIcon} trailing={<Tooltip content="Name of the Approved Merchant" placement="top">
              <TooltipInteractiveWrapper display="flex" alignItems="center">
                <InfoIcon size={args.size} color="surface.icon.gray.muted" />
              </TooltipInteractiveWrapper>
            </Tooltip>}>
          Merchant Name
        </InfoItemKey>
        <InfoItemValue trailing={<Badge color="positive" size={badgeSizeMap[args.size!]}>
              Approved
            </Badge>}>
          Green Loom Software Pvt Ltd
        </InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={BankIcon}>Reference Number</InfoItemKey>
        <InfoItemValue trailing={<Link icon={CopyIcon} variant="button" size={args.size} />}>
          <Code weight="bold" size={codeSizeMap[args.size!]}>
            ref_ABC123XYZ789
          </Code>
        </InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={CheckIcon}>Transaction Status</InfoItemKey>
        <InfoItemValue>Success</InfoItemValue>
      </InfoItem>
    </InfoGroup>;
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,ae,te;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  return <InfoGroup {...args}>
      <InfoItem>
        <InfoItemKey leading={<Avatar size={args.size} name="Saurabh Daware" />} helpText="Customer information">
          Account Holder
        </InfoItemKey>
        <InfoItemValue trailing={CheckIcon}>Saurabh Daware</InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={<Avatar size={args.size} name="Bank Account" />}>
          Payment ID
        </InfoItemKey>
        <InfoItemValue trailing={<Link icon={CopyIcon} variant="button" size={args.size} />}>
          <Code weight="bold" size={codeSizeMap[args.size!]}>
            pay_MK7DGqwYXEwx9Q
          </Code>
        </InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={<Avatar size={args.size} name="Customer Support" />}>
          Support Agent
        </InfoItemKey>
        <InfoItemValue>John Doe</InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={<Avatar size={args.size} name="Transaction Manager" />}>
          Processed By
        </InfoItemKey>
        <InfoItemValue trailing={CheckIcon}>Jane Smith</InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={<Avatar size={args.size} name="Business Account" />}>
          Business Name
        </InfoItemKey>
        <InfoItemValue>Tech Solutions Inc.</InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={<Avatar size={args.size} name="Payment Gateway" />}>
          Gateway Response
        </InfoItemKey>
        <InfoItemValue trailing={<Link icon={CopyIcon} variant="button" size={args.size} />}>
          <Code weight="bold" size={codeSizeMap[args.size!]}>
            gw_resp_SUCCESS_001
          </Code>
        </InfoItemValue>
      </InfoItem>
    </InfoGroup>;
}`,...(te=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ie,oe,se;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
  return <InfoGroup {...args}>
      <InfoItem>
        <InfoItemKey leading={UserIcon}>Account Holder</InfoItemKey>
        <InfoItemValue trailing={CheckIcon}>Saurabh Daware</InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={BankIcon}>Payment ID</InfoItemKey>
        <InfoItemValue trailing={<Link icon={CopyIcon} variant="button" size={args.size} />}>
          <Code weight="bold" size={codeSizeMap[args.size!]}>
            pay_MK7DGqwYXEwx9Q
          </Code>
        </InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={BankIcon}>Transaction Amount</InfoItemKey>
        <InfoItemValue>
          <Amount weight="semibold" color="surface.text.gray.subtle" value={575025} size={args.size} />
        </InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={UserIcon}>Customer Email</InfoItemKey>
        <InfoItemValue>saurabh.daware@example.com</InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={CheckIcon}>Payment Status</InfoItemKey>
        <InfoItemValue trailing={CheckIcon}>Authorized</InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={BankIcon}>Settlement Date</InfoItemKey>
        <InfoItemValue>Dec 16, 2023</InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey leading={UserIcon}>Currency</InfoItemKey>
        <InfoItemValue>INR</InfoItemValue>
      </InfoItem>
    </InfoGroup>;
}`,...(se=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,le,de;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`args => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [accountHolder, setAccountHolder] = React.useState('Saurabh Daware');
  const [tempValue, setTempValue] = React.useState('');
  const [copied, setCopied] = React.useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = React.useState(false);
  const [newEmail, setNewEmail] = React.useState('');
  React.useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }, [copied]);
  const handleEdit = (): void => {
    setTempValue(accountHolder);
    setIsEditing(true);
  };
  const handleSave = (): void => {
    setAccountHolder(tempValue);
    setTempValue('');
    setIsEditing(false);
  };
  const handleCancel = (): void => {
    setTempValue('');
    setIsEditing(false);
  };
  const handleEmailEdit = (): void => {
    setNewEmail('saurabh.daware@example.com');
    setIsEmailModalOpen(true);
  };
  const handleEmailModalClose = (): void => {
    setIsEmailModalOpen(false);
    setNewEmail('');
  };
  const handleSendForApproval = (): void => {
    // Here you would typically send the email change request to your backend
    console.log('Sending email change request for:', newEmail);
    setIsEmailModalOpen(false);
    setNewEmail('');
  };
  return <>
      <InfoGroup {...args}>
        <InfoItem>
          <InfoItemKey leading={UserIcon} helpText="Click to edit customer information">
            Account Holder
          </InfoItemKey>
          <InfoItemValue trailing={isEditing ? undefined : <Link icon={EditIcon} variant="button" size={args.size} onClick={handleEdit} />}>
            {isEditing ? <Box display="flex" alignItems="center" gap="spacing.3">
                <TextInput label="" value={tempValue} onChange={({
              name: _name,
              value
            }) => setTempValue(value || '')} size={inputSizeMap[args.size!]} placeholder="Enter account holder name" />
                <Button icon={CheckIcon} variant="primary" size={inputSizeMap[args.size!]} onClick={handleSave} />
                <Button icon={CloseIcon} variant="tertiary" size={inputSizeMap[args.size!]} onClick={handleCancel} />
              </Box> : accountHolder}
          </InfoItemValue>
        </InfoItem>
        <InfoItem>
          <InfoItemKey leading={BankIcon}>Payment ID</InfoItemKey>
          <InfoItemValue trailing={<Tooltip content={copied ? 'Copied' : 'Copy Payment ID'} placement="top">
                <TooltipInteractiveWrapper display="flex" alignItems="center">
                  <Link icon={copied ? CheckIcon : CopyIcon} color={copied ? 'positive' : 'primary'} onClick={() => {
              void navigator.clipboard.writeText('pay_MK7DGqwYXEwx9Q');
              setCopied(true);
            }} variant="button" size={args.size} />
                </TooltipInteractiveWrapper>
              </Tooltip>}>
            <Code weight="bold" size={codeSizeMap[args.size!]}>
              pay_MK7DGqwYXEwx9Q
            </Code>
          </InfoItemValue>
        </InfoItem>
        <InfoItem>
          <InfoItemKey leading={BankIcon}>Transaction Amount</InfoItemKey>
          <InfoItemValue>
            <Amount weight="semibold" color="surface.text.gray.subtle" value={250000} size={args.size} />
          </InfoItemValue>
        </InfoItem>
        <InfoItem>
          <InfoItemKey leading={UserIcon}>Email Address</InfoItemKey>
          <InfoItemValue trailing={<Link icon={EditIcon} variant="button" size={args.size} onClick={handleEmailEdit} />}>
            saurabh.daware@example.com
          </InfoItemValue>
        </InfoItem>
        <InfoItem>
          <InfoItemKey leading={CheckIcon}>Payment Status</InfoItemKey>
          <InfoItemValue trailing={<Badge color="positive" size={badgeSizeMap[args.size!]}>
                Success
              </Badge>}>
            Completed
          </InfoItemValue>
        </InfoItem>
        <InfoItem>
          <InfoItemKey leading={BankIcon}>Transaction Date</InfoItemKey>
          <InfoItemValue>Dec 15, 2023</InfoItemValue>
        </InfoItem>
      </InfoGroup>

      <Modal isOpen={isEmailModalOpen} onDismiss={handleEmailModalClose} size="small" accessibilityLabel="Edit Email Address">
        <ModalHeader title="Edit Email Address" />
        <ModalBody>
          <TextInput label="New Email Address" value={newEmail} onChange={({
          name: _name,
          value
        }) => setNewEmail(value || '')} placeholder="Enter new email address" type="email" />
        </ModalBody>
        <ModalFooter>
          <Box display="flex" gap="spacing.3" justifyContent="flex-end">
            <Button variant="tertiary" onClick={handleEmailModalClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSendForApproval} isDisabled={!newEmail.trim()}>
              Send for Approval
            </Button>
          </Box>
        </ModalFooter>
      </Modal>
    </>;
}`,...(de=(le=p.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var me,Ie,ce;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`args => {
  return <InfoGroup {...args}>
      <InfoItem>
        <InfoItemKey truncateAfterLines={1}>Key that truncates</InfoItemKey>
        <InfoItemValue truncateAfterLines={1}>Value that truncates</InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey>Key that wraps to next line</InfoItemKey>
        <InfoItemValue>Value that wraps to next line</InfoItemValue>
      </InfoItem>
    </InfoGroup>;
}`,...(ce=(Ie=x.parameters)==null?void 0:Ie.docs)==null?void 0:ce.source}}};var ue,fe,he;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`args => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return <>
      <InfoGroup {...args}>
        <InfoItem>
          <InfoItemKey leading={UserIcon}>Account Holder</InfoItemKey>
          <InfoItemValue trailing={CheckIcon}>Saurabh Daware</InfoItemValue>
        </InfoItem>
        <InfoItem>
          <InfoItemKey leading={BankIcon}>Payment ID</InfoItemKey>
          <InfoItemValue trailing={<Link icon={CopyIcon} variant="button" size={args.size} />}>
            <Code weight="bold" size={codeSizeMap[args.size!]}>
              pay_MK7DGqwYXEwx9Q
            </Code>
          </InfoItemValue>
        </InfoItem>
      </InfoGroup>

      <Collapsible direction="top" marginTop="spacing.4" onExpandChange={({
      isExpanded: _isExpanded
    }) => setIsExpanded(_isExpanded)}>
        <CollapsibleLink>{isExpanded ? 'Hide Details' : 'Show More'}</CollapsibleLink>
        <CollapsibleBody>
          <InfoGroup {...args}>
            <InfoItem>
              <InfoItemKey leading={UserIcon}>Customer Email</InfoItemKey>
              <InfoItemValue>saurabh.daware@example.com</InfoItemValue>
            </InfoItem>
            <InfoItem>
              <InfoItemKey leading={CheckIcon}>Payment Status</InfoItemKey>
              <InfoItemValue trailing={<Badge color="positive" size={badgeSizeMap[args.size!]}>
                    Success
                  </Badge>}>
                Completed
              </InfoItemValue>
            </InfoItem>
            <InfoItem>
              <InfoItemKey leading={BankIcon}>Settlement Date</InfoItemKey>
              <InfoItemValue>Dec 16, 2023</InfoItemValue>
            </InfoItem>
            <InfoItem>
              <InfoItemKey leading={UserIcon}>Currency</InfoItemKey>
              <InfoItemValue>INR</InfoItemValue>
            </InfoItem>
          </InfoGroup>
        </CollapsibleBody>
      </Collapsible>
    </>;
}`,...(he=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var pe,xe,ge;c.parameters={...c.parameters,docs:{...(pe=c.parameters)==null?void 0:pe.docs,source:{originalSource:`args => {
  return <InfoGroup {...args}>
      <InfoItem>
        <InfoItemKey>Account Holder</InfoItemKey>
        <InfoItemValue>Saurabh Daware</InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey>Payment Method</InfoItemKey>
        <InfoItemValue>Credit Card</InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey>Transaction Amount</InfoItemKey>
        <InfoItemValue>
          <Amount weight="semibold" color="surface.text.gray.subtle" value={123456} size={args.size} />
        </InfoItemValue>
      </InfoItem>
      <InfoItem>
        <InfoItemKey>Transaction Date</InfoItemKey>
        <InfoItemValue>Dec 15, 2023</InfoItemValue>
      </InfoItem>
      <Divider gridColumn="span 2" />
      <InfoItem>
        <InfoItemKey>Status</InfoItemKey>
        <InfoItemValue>Completed</InfoItemValue>
      </InfoItem>
    </InfoGroup>;
}`,...(ge=(xe=c.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var ye,je,Ce;y.parameters={...y.parameters,docs:{...(ye=y.parameters)==null?void 0:ye.docs,source:{originalSource:`args => {
  return <Box display="flex" flexDirection="column" gap="spacing.4">
      <Card elevation="none" maxWidth={args.maxWidth}>
        <CardHeader>
          <CardHeaderLeading title="With valueAlign: left" />
        </CardHeader>
        <CardBody>
          <WithDivider {...args} valueAlign="left" />
        </CardBody>
      </Card>

      <Card elevation="none" maxWidth={args.maxWidth}>
        <CardHeader>
          <CardHeaderLeading title="With valueAlign: right" />
        </CardHeader>
        <CardBody>
          <WithDivider {...args} valueAlign="right" />
        </CardBody>
      </Card>
    </Box>;
}`,...(Ce=(je=y.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var ze,ve,be;j.parameters={...j.parameters,docs:{...(ze=j.parameters)==null?void 0:ze.docs,source:{originalSource:`args => {
  return <Box display="flex" flexDirection="column" gap="spacing.4">
      <Card elevation="none" maxWidth={args.maxWidth}>
        <CardHeader>
          <CardHeaderLeading title="With gridTemplateColumns: repeat(3, 1fr)" />
        </CardHeader>
        <CardBody>
          <InfoGroupDefault {...args} gridTemplateColumns="repeat(3, 1fr)" />
        </CardBody>
      </Card>

      <Card elevation="none" maxWidth={args.maxWidth}>
        <CardHeader>
          <CardHeaderLeading title="With gridTemplateColumns: repeat(4, 1fr)" />
        </CardHeader>
        <CardBody>
          <InfoGroupDefault {...args} gridTemplateColumns="repeat(4, 1fr)" />
        </CardBody>
      </Card>

      <Card elevation="none" maxWidth={args.maxWidth}>
        <CardHeader>
          <CardHeaderLeading title="With gridTemplateColumns: 1fr" />
        </CardHeader>
        <CardBody>
          <InfoGroupDefault {...args} gridTemplateColumns="1fr" />
        </CardBody>
      </Card>
    </Box>;
}`,...(be=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};const en=["InfoGroupDefault","WithIcons","WithAvatars","WithVerticalItemOrientation","WithInteractiveItems","InfoGroupWithTruncation","InfoGroupWithCollapsible","WithDivider","WithHorizontalItemAlignments","WithVerticalItemAlignments"],sn=Object.freeze(Object.defineProperty({__proto__:null,InfoGroupDefault:r,InfoGroupWithCollapsible:g,InfoGroupWithTruncation:x,WithAvatars:f,WithDivider:c,WithHorizontalItemAlignments:y,WithIcons:u,WithInteractiveItems:p,WithVerticalItemAlignments:j,WithVerticalItemOrientation:h,__namedExportsOrder:en,default:Fe},Symbol.toStringTag,{value:"Module"}));export{sn as i};
