import{aY as p,j as e,ad as c,n as i,aZ as m,a_ as h,B as r,a$ as I,b0 as g,b1 as F,a5 as S,T as w,an as D,ao as u}from"./iframe-C1qQ09LF.js";import{i as T}from"./isChromatic-B8jWbKqD.js";import{S as v}from"./StoryPageWrapper-CS0_5maI.js";const R={title:"Components/Modal/SimpleModal",component:p,args:{size:"medium"},parameters:{docs:{page:()=>e.jsx(v,{componentDescription:"This is a Modal component. This story is used for snapshot testing of Modal component.",componentName:"Modal"})}}},N=({size:d})=>{const[s,o]=c.useState(!!T());return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>o(!s),children:"Open Modal"}),e.jsxs(p,{isOpen:s,onDismiss:()=>{o(!1)},size:d,children:[e.jsx(m,{title:"Address Details",subtitle:"This example is created for Modal snapshot testing"}),e.jsx(h,{children:e.jsxs(D,{label:"Addresses",children:[e.jsx(u,{value:"home",children:"Home - 11850 Florida 24, Cedar Key, Florida"}),e.jsx(u,{value:"office-1",children:"Office - 2033 Florida 21, Cedar Key, Florida"}),e.jsx(u,{value:"office-2",children:"Work - 5938 New York, Main Street"})]})}),e.jsx(g,{children:e.jsxs(r,{display:"flex",gap:"spacing.3",justifyContent:"flex-end",width:"100%",children:[e.jsx(i,{variant:"secondary",children:"Remove address"}),e.jsx(i,{children:"Add address"})]})})]})]})},n=N.bind({});n.storyName="Simple Modal";const z=({size:d})=>{const[s,o]=c.useState(!1),a=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>o(!s),children:"Open Non-Dismissible Modal"}),e.jsxs(p,{isOpen:s,isDismissible:!1,size:d,children:[e.jsx(m,{title:"Important Action Required",subtitle:"This modal requires explicit confirmation"}),e.jsxs(h,{children:[e.jsx(S,{title:"Notice",description:"This modal cannot be dismissed by clicking outside or pressing escape key.",color:"notice",isDismissible:!1,isFullWidth:!0}),e.jsx(w,{marginTop:"spacing.4",color:"surface.text.gray.subtle",children:"Try clicking outside the modal or pressing the escape key - it won't close. You must click one of the buttons below to proceed."})]}),e.jsx(g,{children:e.jsxs(r,{display:"flex",gap:"spacing.3",justifyContent:"flex-end",width:"100%",children:[e.jsx(i,{variant:"secondary",onClick:()=>a(),children:"Cancel"}),e.jsx(i,{onClick:()=>a(),variant:"primary",children:"Confirm Action"})]})})]})]})},l=z.bind({});l.storyName="Non-Dismissible Modal";const A=({size:d})=>{const[s,o]=c.useState(!1),[a,k]=c.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>o(!s),children:"Open Modal"}),e.jsxs(p,{isOpen:s,onDismiss:()=>o(!1),size:d,children:[e.jsx(m,{title:"Full Page Modal",subtitle:"This example is created for Full Page Modal"}),e.jsx(h,{height:"100%",padding:"spacing.0",children:e.jsxs(r,{position:"relative",width:"100%",height:"100%",children:[a&&e.jsx(r,{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"surface.background.gray.intense",children:e.jsx(I,{height:"100%",width:"100%"})}),e.jsx("img",{width:"100%",height:"100%",src:"https://picsum.photos/1920/1080",alt:"randm",onLoad:()=>k(!1),style:{display:a?"none":"block"}})]})}),e.jsx(g,{children:e.jsx(r,{display:"flex",gap:"spacing.3",justifyContent:"flex-end",width:"100%",children:e.jsx(i,{variant:"primary",icon:F,isDisabled:a,children:"Download"})})})]})]})},t=A.bind({});t.args={size:"full"};t.storyName="Full Page Modal";var x,f,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`({
  size
}) => {
  // \`!!isChramatic\` is not readable hence disabling the eslint rule
  // eslint-disable-next-line no-unneeded-ternary
  const [isOpen, setIsOpen] = React.useState(isChromatic() ? true : false);
  return <>
      <Button onClick={() => setIsOpen(!isOpen)}>Open Modal</Button>
      <Modal isOpen={isOpen} onDismiss={() => {
      setIsOpen(false);
    }} size={size}>
        <ModalHeader title="Address Details" subtitle="This example is created for Modal snapshot testing" />
        <ModalBody>
          <RadioGroup label="Addresses">
            <Radio value="home">Home - 11850 Florida 24, Cedar Key, Florida</Radio>
            <Radio value="office-1">Office - 2033 Florida 21, Cedar Key, Florida</Radio>
            <Radio value="office-2">Work - 5938 New York, Main Street</Radio>
          </RadioGroup>
        </ModalBody>
        <ModalFooter>
          <Box display="flex" gap="spacing.3" justifyContent="flex-end" width="100%">
            <Button variant="secondary">Remove address</Button>
            <Button>Add address</Button>
          </Box>
        </ModalFooter>
      </Modal>
    </>;
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var M,b,j;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`({
  size
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = (): void => {
    setIsOpen(false);
  };
  return <>
      <Button onClick={() => setIsOpen(!isOpen)}>Open Non-Dismissible Modal</Button>
      <Modal isOpen={isOpen} isDismissible={false} size={size}>
        <ModalHeader title="Important Action Required" subtitle="This modal requires explicit confirmation" />
        <ModalBody>
          <Alert title="Notice" description="This modal cannot be dismissed by clicking outside or pressing escape key." color="notice" isDismissible={false} isFullWidth />
          <Text marginTop="spacing.4" color="surface.text.gray.subtle">
            Try clicking outside the modal or pressing the escape key - it won't close. You must
            click one of the buttons below to proceed.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Box display="flex" gap="spacing.3" justifyContent="flex-end" width="100%">
            <Button variant="secondary" onClick={() => handleClose()}>
              Cancel
            </Button>
            <Button onClick={() => handleClose()} variant="primary">
              Confirm Action
            </Button>
          </Box>
        </ModalFooter>
      </Modal>
    </>;
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var O,B,C;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`({
  size
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isImageLoading, setIsImageLoading] = React.useState(true);
  return <>
      <Button onClick={() => setIsOpen(!isOpen)}>Open Modal</Button>
      <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)} size={size}>
        <ModalHeader title="Full Page Modal" subtitle="This example is created for Full Page Modal" />
        <ModalBody height="100%" padding="spacing.0">
          <Box position="relative" width="100%" height="100%">
            {isImageLoading && <Box position="absolute" top="0px" left="0px" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center" backgroundColor="surface.background.gray.intense">
                <Skeleton height="100%" width="100%" />
              </Box>}
            <img width="100%" height="100%" src="https://picsum.photos/1920/1080" alt="randm" onLoad={() => setIsImageLoading(false)} style={{
            display: isImageLoading ? 'none' : 'block'
          }} />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Box display="flex" gap="spacing.3" justifyContent="flex-end" width="100%">
            <Button variant="primary" icon={DownloadIcon} isDisabled={isImageLoading}>
              Download
            </Button>
          </Box>
        </ModalFooter>
      </Modal>
    </>;
}`,...(C=(B=t.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const L=["SimpleModal","NonDismissibleModal","FullPageModal"],W=Object.freeze(Object.defineProperty({__proto__:null,FullPageModal:t,NonDismissibleModal:l,SimpleModal:n,__namedExportsOrder:L,default:R},Symbol.toStringTag,{value:"Module"}));export{W as m};
