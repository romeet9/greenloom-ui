import{jB as D,j as t,X as O,T as s,B as n,L as S,f as g,k6 as T,n as e,jx as p,ad as L,aY as U,aZ as A,a_ as N,b0 as Y,$ as F,H as R}from"./iframe-C1qQ09LF.js";import{u as x}from"./useToast.web-DG48GqLd.js";import{S as H}from"./StoryPageWrapper-CS0_5maI.js";import{S as V}from"./Sandbox.web-B2xP21Qp.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const Z=()=>t.jsxs(H,{componentName:"Toast",componentDescription:"Toast is a feedback element to display temporary short messages in the interface",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=75839-1125191&t=J1cSX69DjMGlLgC9-1&scaling=min-zoom&page-id=7665%3A27414&mode=design",children:[t.jsx(O,{children:"Usage"}),t.jsx(V,{children:`
        import { ToastContainer, useToast } from '@greenloom/ui/components';

        function App() {
          const toast = useToast();

          // Integrating Blade Toast in your App
          // 1. Render the ToastContainer component at the root of your app
          // 2. Utilize the methods exposed via useToast hook to show/dismiss toasts
          return (
            <Box>
              <ToastContainer />
              <Button 
                onClick={() => {
                  toast.show({ content: 'Payment successful', color: 'positive' })
                }}
              >
                Show Toast
              </Button>
            </Box>
          );
        }
        
        export default App;        
      `})]}),st={title:"Components/Toast",component:D,tags:["autodocs"],argTypes:{isVisible:{table:{disable:!0}},id:{table:{disable:!0}}},parameters:{docs:{page:Z}}},W={negative:"Unable to fetch merchant details",positive:"Customer details failed successfully",notice:"Your KYC is pending",information:"Your transaction will be settled in 3 business days, this is a long message to test the toast container overflow behavior",neutral:"Your transaction will be settled in 3 business days"},P=o=>{const r=x();return o.type==="promotional"&&(o.content=t.jsx(s,{size:"small",children:o.content})),t.jsxs(n,{height:"80vh",children:[t.jsx(s,{size:"medium",marginBottom:"spacing.4",children:"To start using toast simply:"}),t.jsxs(S,{children:[t.jsxs(g,{children:["Import and render the ",t.jsx(T,{children:"ToastContainer"})," component from blade at the root of your project"]}),t.jsxs(g,{children:["Utilize the methods exposed via ",t.jsx(T,{children:"useToast()"})," hook to show/dismiss toasts"]})]}),t.jsx(s,{marginY:"spacing.4",color:"surface.text.gray.muted",children:'After changing storybook controls, press the "show toast" button to see changes'}),t.jsx(e,{onClick:()=>{r.show(o)},children:"Show Toast"}),t.jsx(p,{})]})};P.storyName="Basic";const l=P.bind({});l.args={color:"neutral",type:"informational",autoDismiss:!1,content:"Payment successful",action:{text:"Okay",onClick:({toastId:o})=>console.log(o)}};const $=()=>{const o=x(),r=o.toasts.some(i=>i.type==="promotional"),a=({color:i})=>{o.show({content:W[i],color:i,action:{text:"Okay",onClick:({toastId:u})=>o.dismiss(u)},onDismissButtonClick:({toastId:u})=>console.log(`${u} Dismissed!`)})},h=()=>{o.show({type:"promotional",leading:F,content:t.jsxs(n,{display:"flex",gap:"spacing.3",flexDirection:"column",children:[t.jsx(R,{children:"Introducing TurboUPI"}),t.jsx("img",{loading:"lazy",width:"100%",height:"100px",alt:"Promotional Toast",style:{objectFit:"cover",borderRadius:"8px"},src:"https://d6xcmfyh68wv8.cloudfront.net/blog-content/uploads/2023/05/Features-blog.png"}),t.jsx(s,{weight:"semibold",children:"Lightning-fast payments with the new Green Loom Turbo UPI"}),t.jsx(s,{size:"xsmall",children:"Turbo UPI allows end-users to complete their payment in-app, with no redirections or dependence on third-party UPI apps. With Turbo UPI, payments will be 5x faster with a significantly-improved success rate of 10%!"})]}),action:{text:"Try TurboUPI",onClick:({toastId:i})=>o.dismiss(i)},onDismissButtonClick:({toastId:i})=>console.log(`${i} Dismissed!`)})};return t.jsxs(n,{height:"80vh",children:[t.jsx(s,{children:"Show Informational Toasts:"}),t.jsxs(n,{display:"flex",gap:"spacing.3",marginY:"spacing.5",children:[t.jsx(e,{variant:"tertiary",onClick:()=>a({color:"positive"}),children:"Positive"}),t.jsx(e,{variant:"tertiary",onClick:()=>a({color:"negative"}),children:"Negative"}),t.jsx(e,{variant:"tertiary",onClick:()=>a({color:"notice"}),children:"Notice"}),t.jsx(e,{variant:"tertiary",onClick:()=>a({color:"information"}),children:"Information"}),t.jsx(e,{variant:"tertiary",onClick:()=>a({color:"neutral"}),children:"Neutral"})]}),t.jsx(s,{children:"Show Promotional Toasts:"}),t.jsx(s,{size:"small",color:"surface.text.gray.muted",children:"Note: There can only be 1 promotional toast at a time"}),t.jsx(n,{display:"flex",gap:"spacing.3",marginY:"spacing.5",children:t.jsx(e,{variant:"tertiary",onClick:()=>h(),isDisabled:r,children:"Promotional"})}),t.jsx(p,{})]})},c=$.bind({});c.storyName="Toast Variants";const _=()=>{const o=x(),r=()=>{o.show({content:"This toast appears with custom bottom offset",color:"information",action:{text:"Dismiss",onClick:({toastId:a})=>o.dismiss(a)}})};return t.jsxs(n,{height:"80vh",children:[t.jsx(s,{size:"medium",marginBottom:"spacing.4",children:"ToastContainer with custom `offsetBottom`"}),t.jsx(s,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.6",children:"The toast will appear 100px from the bottom of the viewport instead of the default position"}),t.jsx(e,{onClick:r,children:"Show Toast with Custom Offset"}),t.jsx(p,{offsetBottom:100})]})},d=_.bind({});d.storyName="Container Offset";const G=()=>{const o=x(),[r,a]=L.useState(!1),h=()=>{o.show({content:"This toast has z-index 3000 and appears above the modal (z-index 2000)",color:"positive",duration:1e4,action:{text:"Dismiss",onClick:({toastId:i})=>o.dismiss(i)}})};return t.jsxs(n,{height:"80vh",children:[t.jsx(s,{size:"medium",marginBottom:"spacing.4",children:"Toast with Custom zIndex"}),t.jsxs(n,{marginTop:"spacing.6",paddingTop:"spacing.6",borderTopWidth:"thin",borderTopColor:"surface.border.gray.muted",children:[t.jsx(s,{size:"medium",marginBottom:"spacing.4",children:"Toast Above Modal Demo"}),t.jsx(s,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.6",children:"Open a full-page modal with z-index 2000, then show a toast with z-index 3000 to see it appear above the modal."}),t.jsxs(n,{display:"flex",gap:"spacing.3",children:[t.jsx(e,{onClick:()=>a(!0),children:"Open Modal (z-index 2000)"}),r&&t.jsx(e,{onClick:h,children:"Show Toast Above Modal (z-index 3000)"})]})]}),t.jsxs(U,{isOpen:r,onDismiss:()=>a(!1),size:"full",zIndex:2e3,children:[t.jsx(A,{title:"Modal with z-index 2000"}),t.jsxs(N,{children:[t.jsx(s,{marginBottom:"spacing.4",children:"This is a full-page modal with z-index 2000. Click the button below to show a toast with z-index 3000, which will appear above this modal."}),t.jsx(e,{onClick:h,children:"Show Toast Above Modal (z-index 3000)"})]}),t.jsx(Y,{children:t.jsx(e,{variant:"secondary",onClick:()=>a(!1),children:"Close Modal"})})]}),t.jsx(p,{zIndex:3e3})]})},m=G.bind({});m.storyName="Z-Index";var f,w,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const toast = useToast();
  if (args.type === 'promotional') {
    args.content = <Text size="small">{args.content}</Text>;
  }
  return <Box height="80vh">
      <Text size="medium" marginBottom="spacing.4">
        To start using toast simply:
      </Text>
      <List>
        <ListItem>
          Import and render the <ListItemCode>ToastContainer</ListItemCode> component from blade at
          the root of your project
        </ListItem>
        <ListItem>
          Utilize the methods exposed via <ListItemCode>useToast()</ListItemCode> hook to
          show/dismiss toasts
        </ListItem>
      </List>
      <Text marginY="spacing.4" color="surface.text.gray.muted">
        After changing storybook controls, press the "show toast" button to see changes
      </Text>
      <Button onClick={() => {
      toast.show(args);
    }}>
        Show Toast
      </Button>
      <ToastContainer />
    </Box>;
}`,...(y=(w=l.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var b,B,C;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const toast = useToast();
  const hasPromoToast = toast.toasts.some(t => t.type === 'promotional');
  const showInformationalToast = ({
    color
  }: {
    color: ToastProps['color'];
  }) => {
    toast.show({
      content: texts[color!],
      color,
      action: {
        text: 'Okay',
        onClick: ({
          toastId
        }) => toast.dismiss(toastId)
      },
      onDismissButtonClick: ({
        toastId
      }) => console.log(\`\${toastId} Dismissed!\`)
    });
  };
  const showPromotionalToast = () => {
    toast.show({
      type: 'promotional',
      leading: AnnouncementIcon,
      content: <Box display="flex" gap="spacing.3" flexDirection="column">
          <Heading>Introducing TurboUPI</Heading>
          <img loading="lazy" width="100%" height="100px" alt="Promotional Toast" style={{
          objectFit: 'cover',
          borderRadius: '8px'
        }} src="https://d6xcmfyh68wv8.cloudfront.net/blog-content/uploads/2023/05/Features-blog.png" />
          <Text weight="semibold">Lightning-fast payments with the new Green Loom Turbo UPI</Text>
          <Text size="xsmall">
            Turbo UPI allows end-users to complete their payment in-app, with no redirections or
            dependence on third-party UPI apps. With Turbo UPI, payments will be 5x faster with a
            significantly-improved success rate of 10%!
          </Text>
        </Box>,
      action: {
        text: 'Try TurboUPI',
        onClick: ({
          toastId
        }) => toast.dismiss(toastId)
      },
      onDismissButtonClick: ({
        toastId
      }) => console.log(\`\${toastId} Dismissed!\`)
    });
  };
  return <Box height="80vh">
      <Text>Show Informational Toasts:</Text>
      <Box display="flex" gap="spacing.3" marginY="spacing.5">
        <Button variant="tertiary" onClick={() => showInformationalToast({
        color: 'positive'
      })}>
          Positive
        </Button>
        <Button variant="tertiary" onClick={() => showInformationalToast({
        color: 'negative'
      })}>
          Negative
        </Button>
        <Button variant="tertiary" onClick={() => showInformationalToast({
        color: 'notice'
      })}>
          Notice
        </Button>
        <Button variant="tertiary" onClick={() => showInformationalToast({
        color: 'information'
      })}>
          Information
        </Button>
        <Button variant="tertiary" onClick={() => showInformationalToast({
        color: 'neutral'
      })}>
          Neutral
        </Button>
      </Box>
      <Text>Show Promotional Toasts:</Text>
      <Text size="small" color="surface.text.gray.muted">
        Note: There can only be 1 promotional toast at a time
      </Text>
      <Box display="flex" gap="spacing.3" marginY="spacing.5">
        <Button variant="tertiary" onClick={() => showPromotionalToast()} isDisabled={hasPromoToast}>
          Promotional
        </Button>
      </Box>
      <ToastContainer />
    </Box>;
}`,...(C=(B=c.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var I,v,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const toast = useToast();
  const showToast = () => {
    toast.show({
      content: 'This toast appears with custom bottom offset',
      color: 'information',
      action: {
        text: 'Dismiss',
        onClick: ({
          toastId
        }) => toast.dismiss(toastId)
      }
    });
  };
  return <Box height="80vh">
      <Text size="medium" marginBottom="spacing.4">
        ToastContainer with custom \`offsetBottom\`
      </Text>
      <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.6">
        The toast will appear 100px from the bottom of the viewport instead of the default position
      </Text>
      <Button onClick={showToast}>Show Toast with Custom Offset</Button>
      <ToastContainer offsetBottom={100} />
    </Box>;
}`,...(j=(v=d.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var z,k,M;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const toast = useToast();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showToastAboveModal = () => {
    toast.show({
      content: 'This toast has z-index 3000 and appears above the modal (z-index 2000)',
      color: 'positive',
      duration: 10000,
      action: {
        text: 'Dismiss',
        onClick: ({
          toastId
        }) => toast.dismiss(toastId)
      }
    });
  };
  return <Box height="80vh">
      <Text size="medium" marginBottom="spacing.4">
        Toast with Custom zIndex
      </Text>

      <Box marginTop="spacing.6" paddingTop="spacing.6" borderTopWidth="thin" borderTopColor="surface.border.gray.muted">
        <Text size="medium" marginBottom="spacing.4">
          Toast Above Modal Demo
        </Text>
        <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.6">
          Open a full-page modal with z-index 2000, then show a toast with z-index 3000 to see it
          appear above the modal.
        </Text>
        <Box display="flex" gap="spacing.3">
          <Button onClick={() => setIsModalOpen(true)}>Open Modal (z-index 2000)</Button>
          {isModalOpen && <Button onClick={showToastAboveModal}>Show Toast Above Modal (z-index 3000)</Button>}
        </Box>
      </Box>
      <Modal isOpen={isModalOpen} onDismiss={() => setIsModalOpen(false)} size="full" zIndex={2000}>
        <ModalHeader title="Modal with z-index 2000" />
        <ModalBody>
          <Text marginBottom="spacing.4">
            This is a full-page modal with z-index 2000. Click the button below to show a toast with
            z-index 3000, which will appear above this modal.
          </Text>
          <Button onClick={showToastAboveModal}>Show Toast Above Modal (z-index 3000)</Button>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Close Modal
          </Button>
        </ModalFooter>
      </Modal>
      <ToastContainer zIndex={3000} />
    </Box>;
}`,...(M=(k=m.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const et=["Basic","ToastVariants","ContainerOffset","ZIndex"];export{l as Basic,d as ContainerOffset,c as ToastVariants,m as ZIndex,et as __namedExportsOrder,st as default};
