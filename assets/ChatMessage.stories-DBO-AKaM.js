import{iR as i,j as e,H as P,B as s,iQ as cs,aI as ds,aJ as us,T as c,an as ps,ao as U,da as r,r as w,iS as V,iT as Y,iU as Q,aM as is,aN as _,az as G,aR as F,hX as d,g0 as ts,cR as os,ad as u,n as D,aK as ls,iV as gs,iW as ms,iX as hs,iY as H,iZ as xs,i_ as ys,i$ as q,F as fs,a8 as Ts,j0 as bs,j1 as Cs,P as Ss}from"./iframe-C1qQ09LF.js";import{S as X}from"./Sandbox.web-B2xP21Qp.js";import{S as js}from"./StoryPageWrapper-CS0_5maI.js";import{g as Bs}from"./storybookArgTypes-DFfQV31s.js";const Is=()=>e.jsxs(js,{componentName:"ChatMessage",componentDescription:"A Chat Message is a visual representation of a message in a chat application.",apiDecisionLink:null,figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=100413-32686&t=n9A7LztwEkIsly3v-0",children:[e.jsx(P,{size:"large",children:"Usage"}),e.jsx(X,{showConsole:!0,children:`
        import { ChatMessage } from '@greenloom/ui/components';
        
        function App() {
          return (
            <ChatMessage senderType="self">Hi, from ray!</ChatMessage>
          )
        }

        export default App;
      `}),e.jsx(P,{size:"large",children:"Rolling Loading Text"}),e.jsx(X,{showConsole:!0,children:`
        import { ChatMessage } from '@greenloom/ui/components';
        import { RayIcon } from '@greenloom/ui/components';

        function App() {
          return (
            <ChatMessage
              isLoading
              senderType="other"
              loadingText={[
                'Analyzing your request...',
                'Fetching relevant details...',
                'Preparing your response...',
                'Almost there...',
              ]}
              leading={<RayIcon size="xlarge" color="surface.icon.onSea.onSubtle" />}
            />
          )
        }

        export default App;
      `})]}),Ms={title:"Components/ChatMessage",component:i,tags:["autodocs"],argTypes:{...Bs()},parameters:{docs:{page:Is}}},vs=a=>e.jsx(i,{wordBreak:"normal",...a,children:"Hi, Can you help me with the docs?"}),p=vs.bind({});p.storyName="Default";p.args={senderType:"self",messageType:"default"};const Ls=()=>{const a=["last","default"];return e.jsx(s,{display:"flex",flexDirection:"column",gap:"spacing.5",children:a.map((n,t)=>e.jsx(i,{senderType:"self",messageType:n,children:"Hi, Can you help me with the docs?"},t))})},g=Ls.bind({});g.storyName="Message Types";g.args={};const As=()=>e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(i,{senderType:"self",messageType:"last",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(i,{senderType:"other",leading:e.jsx(r,{size:"xlarge",color:"surface.icon.onSea.onSubtle"}),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(i,{senderType:"other",marginLeft:"24px",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),m=As.bind({});m.storyName="Sender Types";const Rs=()=>e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(i,{senderType:"other",leading:e.jsx(r,{size:"xlarge",color:"surface.icon.onSea.onSubtle"}),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(i,{senderType:"other",marginLeft:"24px",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),h=Rs.bind({});h.storyName="Sender Type With and Without Icons";const ws=()=>e.jsx(s,{display:"flex",flexDirection:"column",gap:"spacing.5",children:e.jsx(i,{isLoading:!0,senderType:"other",loadingText:"Analyzing your response...",leading:e.jsx(r,{size:"xlarge",color:"surface.icon.onSea.onSubtle"})})}),x=ws.bind({});x.storyName="Loading Chat Message";const Ds=()=>e.jsx(s,{display:"flex",flexDirection:"column",gap:"spacing.5",children:e.jsx(i,{isLoading:!0,senderType:"other",loadingText:["Analyzing your request...","Fetching relevant details...","Preparing your response...","Almost there..."],leading:e.jsx(r,{size:"xlarge",color:"surface.icon.onSea.onSubtle"})})}),y=Ds.bind({});y.storyName="Rolling Loading Text";const ks=()=>e.jsx(s,{display:"flex",flexDirection:"column",gap:"spacing.5",children:e.jsx(i,{validationState:"error",senderType:"self",messageType:"last",errorText:"Message not sent. Tap to retry.",onClick:()=>{console.log("Retrying...")},children:"Can you help me with the docs?"})}),f=ks.bind({});f.storyName="Error Chat Message";const zs=()=>e.jsx(s,{children:e.jsx(i,{senderType:"other",leading:e.jsx(r,{size:"xlarge",color:"surface.icon.onSea.onSubtle"}),children:e.jsx(ds,{children:e.jsx(us,{children:e.jsxs(s,{display:"flex",gap:"8px",flexDirection:"column",children:[e.jsx(c,{variant:"body",size:"medium",children:"Where do you want to collect payments?"}),e.jsxs(ps,{children:[e.jsx(U,{value:"website",children:"Website"}),e.jsx(U,{value:"android",children:"Android App"}),e.jsx(U,{value:"ios",children:"iOS App"})]})]})})})})}),T=zs.bind({});T.storyName="Chat Message Body";const Es=()=>e.jsx(s,{display:"flex",flexDirection:"column",gap:"4px",children:e.jsx(s,{display:"flex",flexDirection:"column",alignContent:"end",gap:"4px",width:"300px",children:e.jsx(cs,{isVisible:!0,motionTriggers:["mount"],type:"inout",children:e.jsx(i,{senderType:"self",messageType:"last",children:"This is a demo message"})})})}),b=Es.bind({});b.storyName="Animated Chat Message";const Hs=()=>e.jsx(s,{display:"flex",flexDirection:"column",gap:"4px",children:e.jsx(s,{display:"flex",flexDirection:"column",alignContent:"end",gap:"4px",width:"300px",children:e.jsx(i,{senderType:"self",messageType:"last",onClick:()=>{console.log("this is a demo message")},children:"This is a demo message"})})}),C=Hs.bind({});C.storyName="Chat Message with Click";const qs=()=>e.jsx(s,{display:"flex",flexDirection:"column",gap:"4px",children:e.jsxs(s,{display:"flex",flexDirection:"column",alignContent:"end",gap:"4px",width:"300px",children:[e.jsx(i,{senderType:"self",messageType:"last",footerActions:e.jsx(s,{display:"flex",justifyContent:"flex-end",children:e.jsxs(is,{label:"",children:[e.jsx(_,{value:"yes",icon:G}),e.jsx(_,{value:"no",icon:F})]})}),children:"This is a demo message"}),e.jsx(i,{senderType:"other",footerActions:e.jsxs(s,{display:"flex",alignItems:"flex-start",children:[e.jsx(d,{icon:G,accessibilityLabel:"Thumbs Up",isHighlighted:!0,onClick:()=>{console.log("Thumbs Up...")}}),e.jsx(d,{icon:F,accessibilityLabel:"Thumbs Down",isHighlighted:!0,onClick:()=>{console.log("Thumbs Down...")}}),e.jsx(d,{icon:ts,accessibilityLabel:"Copy",isHighlighted:!0,onClick:()=>{console.log("Copying...")}}),e.jsx(d,{icon:os,accessibilityLabel:"Share",isHighlighted:!0,onClick:()=>{console.log("Sharing...")}})]}),leading:e.jsx(r,{size:"xlarge",color:"surface.icon.onSea.onSubtle"}),children:"This is a demo message"})]})}),S=qs.bind({});S.storyName="Chat Message with Footer Actions";const Ws=({text:a})=>e.jsx(bs,{children:a.split(" ").map((n,t)=>e.jsx(Cs,{children:e.jsxs(c,{display:"inline",color:"surface.text.gray.normal",weight:"regular",variant:"body",size:"medium",children:[n," "]})},t))}),Ns=()=>e.jsx(s,{display:"flex",flexDirection:"column",gap:"4px",children:e.jsx(s,{display:"flex",flexDirection:"column",alignContent:"end",gap:"4px",width:"300px",children:e.jsx(i,{senderType:"other",leading:e.jsx(r,{size:"xlarge",color:"surface.icon.onSea.onSubtle"}),children:e.jsx(s,{children:e.jsx(Ws,{text:"This is a demo message."})})})})}),j=Ns.bind({});j.storyName="Chat Message with Custom Typing Animation";const Os=["Why is the netbanking pending?","How do I initiate a refund for failed payment?","What are the supported payment methods?"],Us=Ss.button(({theme:a})=>({display:"block",width:"100%",background:"transparent",border:"none",padding:`${a.spacing[3]}px`,cursor:"pointer",textAlign:"left",borderRadius:`${a.border.radius.small}px`,"&:hover":{backgroundColor:a.colors.interactive.background.gray.default}})),K=({label:a,onClick:n})=>e.jsx(Us,{onClick:n,children:e.jsx(c,{color:"surface.text.gray.normal",size:"medium",children:a})}),Ps=()=>e.jsx(s,{display:"flex",flexDirection:"column",gap:"spacing.3",children:Os.map((a,n)=>e.jsx(K,{label:`${n+1}. ${a}`,onClick:()=>console.log(`Selected: ${a}`)},n))}),_s=()=>e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.3",maxWidth:"400px",children:[e.jsx(i,{senderType:"other",leading:e.jsx(r,{size:"large",color:"surface.icon.onSea.onSubtle"}),footerActions:e.jsx(Ps,{}),children:e.jsx(s,{display:"flex",flexDirection:"column",gap:"spacing.3",children:e.jsx(c,{color:"surface.text.gray.normal",weight:"regular",variant:"body",size:"medium",children:"How can I help you next?"})})}),e.jsx(ls,{dividerStyle:"dashed",marginLeft:"24px"})]}),B=_s.bind({});B.storyName="Chat Message with Suggested Questions";const Gs={nodes:[{id:"1",status:"Captured",amount:1e3,col3:"Row Title",col4:"Row Title",col5:"01234"},{id:"2",status:"Captured",amount:1e3,col3:"Row Title",col4:"Row Title",col5:"01234"},{id:"3",status:"Pending",amount:1e3,col3:"Row Title",col4:"Row Title",col5:"01234"},{id:"4",status:"Captured",amount:1e3,col3:"Row Title",col4:"Row Title",col5:"01234"}]},Fs=["Recent","payments","from","pingal@gmail.com"],Ks="Pingal has 3 recent payments totalling ₹26,000. Two are successful (captured) and have been settled. The third—a netbanking payment—is still pending as we wait for the customer's bank to confirm the transfer.",Vs=()=>{const a=e.jsxs(s,{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"spacing.4",children:[e.jsxs(s,{display:"flex",gap:"spacing.4",children:[e.jsx(d,{icon:G,accessibilityLabel:"Thumbs Up",onClick:()=>console.log("Thumbs Up")}),e.jsx(d,{icon:F,accessibilityLabel:"Thumbs Down",onClick:()=>console.log("Thumbs Down")}),e.jsx(d,{icon:ts,accessibilityLabel:"Copy",onClick:()=>console.log("Copy")}),e.jsx(d,{icon:os,accessibilityLabel:"Share",onClick:()=>console.log("Share")})]}),e.jsx(c,{size:"small",color:"surface.text.gray.muted",children:"5 min ago"})]});return e.jsx(s,{display:"flex",flexDirection:"column",children:e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.5",padding:"spacing.6",children:[e.jsx(s,{display:"flex",justifyContent:"flex-end",children:e.jsx(i,{senderType:"self",messageType:"last",children:"How much was settled into my account today?"})}),e.jsx(i,{senderType:"other",leading:e.jsx(r,{size:"xlarge",color:"surface.icon.onSea.onSubtle"}),footerActions:a,children:e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.5",marginTop:"spacing.2",children:[e.jsx(P,{size:"small",weight:"semibold",children:Fs.join(" ")}),e.jsx(c,{color:"surface.text.gray.normal",size:"medium",children:Ks}),e.jsx(s,{children:e.jsx(gs,{data:Gs,children:n=>e.jsxs(e.Fragment,{children:[e.jsx(ms,{children:e.jsxs(hs,{children:[e.jsx(H,{headerKey:"STATUS",children:"Status"}),e.jsx(H,{headerKey:"AMOUNT",children:"Amount"}),e.jsx(H,{headerKey:"COL3",children:"Payment ID"}),e.jsx(H,{headerKey:"COL4",children:"Method"}),e.jsx(H,{headerKey:"COL5",children:"Reference"})]})}),e.jsx(xs,{children:n.map((t,l)=>e.jsxs(ys,{item:t,children:[e.jsx(q,{children:e.jsx(fs,{color:t.status==="Pending"?"notice":"positive",children:t.status})}),e.jsx(q,{children:e.jsx(Ts,{value:t.amount})}),e.jsx(q,{children:t.col3}),e.jsx(q,{children:t.col4}),e.jsx(q,{children:t.col5})]},l))})]})})}),e.jsx(s,{children:e.jsx(is,{accessibilityLabel:"Select platform",defaultValue:"website",onChange:({values:n})=>console.log("Platform:",n),children:[{value:"website",label:"Website"},{value:"android",label:"Android"},{value:"ios",label:"iOS"},{value:"social_media",label:"Social Media"},{value:"others",label:"Others"}].map(({value:n,label:t})=>e.jsx(s,{display:"inline-flex",children:e.jsx(_,{value:n,children:t})},n))})}),e.jsxs(s,{display:"flex",gap:"spacing.3",children:[e.jsx(s,{display:"inline-flex",children:e.jsx(D,{children:"Button"})}),e.jsx(s,{display:"inline-flex",children:e.jsx(D,{variant:"secondary",children:"Button"})})]})]})}),e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.0",children:[e.jsx(i,{senderType:"other",leading:e.jsx(r,{size:"xlarge",color:"surface.icon.onSea.onSubtle"}),children:e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.3",marginTop:"spacing.2",children:[e.jsx(c,{color:"surface.text.gray.normal",size:"medium",children:"How can I help you next?"}),e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(K,{label:"1. Why is the netbanking pending?",onClick:()=>console.log("Q1 selected")}),e.jsx(K,{label:"2. How long does settlement take?",onClick:()=>console.log("Q2 selected")})]})]})}),e.jsx(ls,{dividerStyle:"dashed",marginLeft:"24px",marginTop:"spacing.2"})]})]})})},I=Vs.bind({});I.storyName="Full Chat Example";const Z=[{id:"landscape-1",url:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",alt:"Snowy mountain landscape"},{id:"landscape-2",url:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400",alt:"Forest and mountain view"},{id:"landscape-3",url:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",alt:"Mountain lake view"}],Ys=()=>{const[a,n]=w.useState(!1),[t,l]=w.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(i,{senderType:"self",thumbnails:Z,onThumbnailClick:()=>{l(0),n(!0)},children:"Check out these beautiful landscapes!"}),e.jsx(V,{isOpen:a,onDismiss:()=>n(!1),activeIndex:t,onIndexChange:({index:o})=>l(o),children:e.jsx(Y,{children:Z.map(o=>e.jsx(Q,{src:o.url,alt:o.alt},o.id))})})]})},M=Ys.bind({});M.storyName="Chat Message with 3 Images";const J=[{id:"mountain-1",url:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",alt:"Mountain landscape"},{id:"mountain-2",url:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400",alt:"Mountain and forest view"},{id:"mountain-3",url:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",alt:"Lake with mountains in the background"},{id:"mountain-4",url:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",alt:"Valley and mountain range"},{id:"mountain-5",url:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",alt:"Forest trail landscape"}],Qs=()=>{const[a,n]=w.useState(!1),[t,l]=w.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(i,{senderType:"self",thumbnails:J,onThumbnailClick:()=>{l(0),n(!0)},children:"Example with 5 images (+2 badge)"}),e.jsx(V,{isOpen:a,onDismiss:()=>n(!1),activeIndex:t,onIndexChange:({index:o})=>l(o),children:e.jsx(Y,{children:J.map(o=>e.jsx(Q,{src:o.url,alt:o.alt},o.id))})})]})},v=Qs.bind({});v.storyName="Chat Message with 5 Images";const ee=[{id:"single-landscape-1",url:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",alt:"Single mountain landscape"}],$s=()=>{const[a,n]=w.useState(!1),[t,l]=w.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(i,{senderType:"self",thumbnails:ee,onThumbnailClick:()=>{l(0),n(!0)},children:"ChatMessage with single image"}),e.jsx(V,{isOpen:a,onDismiss:()=>n(!1),activeIndex:t,onIndexChange:({index:o})=>l(o),children:e.jsx(Y,{children:ee.map(o=>e.jsx(Q,{src:o.url,alt:o.alt},o.id))})})]})},L=$s.bind({});L.storyName="Chat Message with Single Image";const N=[{label:"Searching Central KYC records...",completedLabel:"Searched Central KYC records"},{label:"Initiating KYC verification...",completedLabel:"Initiated KYC verification"},{label:"Retrieving documents securely...",completedLabel:"Retrieved documents"},{label:"Verifying address details...",completedLabel:"Verified address details"},{label:"Completing identity checks...",completedLabel:"Completed identity checks"}],Xs=()=>{const[a,n]=u.useState("idle"),[t,l]=u.useState([]),[o,k]=u.useState("loading"),z=u.useCallback(()=>{n("loading"),l([]),k("loading");const W=setTimeout(()=>{n("reasoning");let O=0;const $=()=>{l(rs=>[...rs,N[O]]),O+=1,O<N.length?setTimeout($,900):setTimeout(()=>{k("complete"),n("complete"),setTimeout(()=>{n("done")},800)},700)};setTimeout($,400)},2e3);return()=>clearTimeout(W)},[]),E=a==="loading"||a==="reasoning";return e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.5",maxWidth:"480px",children:[e.jsx(s,{display:"flex",justifyContent:"flex-end",children:e.jsx(i,{senderType:"self",children:"Verify my KYC details"})}),a!=="idle"&&e.jsx(i,{senderType:"other",leading:e.jsx(r,{size:"xlarge",color:"surface.icon.onSea.onSubtle"}),isLoading:E,loadingText:["Thinking...","Processing your request..."],reasoningTraces:t.length>0?t:void 0,reasoningStatus:o,reasoningTitle:"Ray AI thought for 3secs",children:a==="done"?e.jsx(c,{color:"surface.text.gray.normal",size:"medium",children:"Your KYC has been verified successfully. All documents are in order and your identity has been confirmed."}):void 0}),a==="idle"&&e.jsx(D,{size:"small",onClick:z,children:"Run simulation"}),a==="done"&&e.jsx(D,{size:"small",variant:"secondary",onClick:z,children:"Replay"})]})},A=Xs.bind({});A.storyName="Chat Message with Reasoning Traces";const Zs=()=>{const[a,n]=u.useState("idle"),[t,l]=u.useState(0),[o,k]=u.useState("loading"),z=u.useCallback(()=>{n("running"),l(0),k("loading");let E=0;const W=()=>{E+=1,E<N.length?(l(E),setTimeout(W,900)):(k("complete"),setTimeout(()=>n("done"),1200))};setTimeout(W,900)},[]);return e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.5",maxWidth:"480px",children:[e.jsx(s,{display:"flex",justifyContent:"flex-end",children:e.jsx(i,{senderType:"self",children:"Verify my KYC details"})}),a!=="idle"&&e.jsx(i,{senderType:"other",leading:e.jsx(r,{size:"xlarge",color:"surface.icon.onSea.onSubtle"}),isLoading:a==="running",loadingText:["Thinking...","Processing your request..."],reasoningTraces:N,reasoningStatus:o,reasoningTitle:"Ray AI thought for 3secs",reasoningActiveStepIndex:a==="running"?t:void 0,children:a==="done"?e.jsx(c,{color:"surface.text.gray.normal",size:"medium",children:"Your KYC has been verified successfully. All documents are in order and your identity has been confirmed."}):void 0}),a==="idle"&&e.jsx(D,{size:"small",onClick:z,children:"Run simulation"}),a==="done"&&e.jsx(D,{size:"small",variant:"secondary",onClick:z,children:"Replay"})]})},R=Zs.bind({});R.storyName="Chat Message with Reasoning Traces (Upfront Steps)";var se,ae,ne;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  return <ChatMessage wordBreak="normal" {...args}>
      Hi, Can you help me with the docs?
    </ChatMessage>;
}`,...(ne=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,te,oe;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const messageTypes = ['last', 'default'] as const;
  return <Box display="flex" flexDirection="column" gap="spacing.5">
      {messageTypes.map((message, index) => <ChatMessage senderType="self" messageType={message} key={index}>
          Hi, Can you help me with the docs?
        </ChatMessage>)}
    </Box>;
}`,...(oe=(te=g.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,re,ce;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.5">
      <ChatMessage senderType="self" messageType="last">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ChatMessage>
      <ChatMessage senderType="other" leading={<RayIcon size="xlarge" color="surface.icon.onSea.onSubtle" />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ChatMessage>
      <ChatMessage senderType="other" marginLeft="24px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ChatMessage>
    </Box>;
}`,...(ce=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var de,ue,pe;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.5">
      <ChatMessage senderType="other" leading={<RayIcon size="xlarge" color="surface.icon.onSea.onSubtle" />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ChatMessage>
      <ChatMessage senderType="other" marginLeft="24px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ChatMessage>
    </Box>;
}`,...(pe=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,me,he;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.5">
      <ChatMessage isLoading senderType="other" loadingText="Analyzing your response..." leading={<RayIcon size="xlarge" color="surface.icon.onSea.onSubtle" />} />
    </Box>;
}`,...(he=(me=x.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var xe,ye,fe;y.parameters={...y.parameters,docs:{...(xe=y.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.5">
      <ChatMessage isLoading senderType="other" loadingText={['Analyzing your request...', 'Fetching relevant details...', 'Preparing your response...', 'Almost there...']} leading={<RayIcon size="xlarge" color="surface.icon.onSea.onSubtle" />} />
    </Box>;
}`,...(fe=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var Te,be,Ce;f.parameters={...f.parameters,docs:{...(Te=f.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.5">
      <ChatMessage validationState="error" senderType="self" messageType="last" errorText="Message not sent. Tap to retry." onClick={() => {
      console.log('Retrying...');
    }}>
        Can you help me with the docs?
      </ChatMessage>
    </Box>;
}`,...(Ce=(be=f.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var Se,je,Be;T.parameters={...T.parameters,docs:{...(Se=T.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <Box>
      <ChatMessage senderType="other" leading={<RayIcon size="xlarge" color="surface.icon.onSea.onSubtle" />}>
        <Card>
          <CardBody>
            <Box display="flex" gap="8px" flexDirection="column">
              <Text variant="body" size="medium">
                Where do you want to collect payments?
              </Text>
              <RadioGroup>
                <Radio value="website">Website</Radio>
                <Radio value="android">Android App</Radio>
                <Radio value="ios">iOS App</Radio>
              </RadioGroup>
            </Box>
          </CardBody>
        </Card>
      </ChatMessage>
    </Box>;
}`,...(Be=(je=T.parameters)==null?void 0:je.docs)==null?void 0:Be.source}}};var Ie,Me,ve;b.parameters={...b.parameters,docs:{...(Ie=b.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="4px">
      <Box display="flex" flexDirection="column" alignContent="end" gap="4px" width="300px">
        <Move isVisible motionTriggers={['mount']} type="inout">
          <ChatMessage senderType="self" messageType="last">
            This is a demo message
          </ChatMessage>
        </Move>
      </Box>
    </Box>;
}`,...(ve=(Me=b.parameters)==null?void 0:Me.docs)==null?void 0:ve.source}}};var Le,Ae,Re;C.parameters={...C.parameters,docs:{...(Le=C.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="4px">
      <Box display="flex" flexDirection="column" alignContent="end" gap="4px" width="300px">
        <ChatMessage senderType="self" messageType="last" onClick={() => {
        console.log('this is a demo message');
      }}>
          This is a demo message
        </ChatMessage>
      </Box>
    </Box>;
}`,...(Re=(Ae=C.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source}}};var we,De,ke;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="4px">
      <Box display="flex" flexDirection="column" alignContent="end" gap="4px" width="300px">
        <ChatMessage senderType="self" messageType="last" footerActions={<Box display="flex" justifyContent="flex-end">
              <ChipGroup label="">
                <Chip value="yes" icon={ThumbsUpIcon} />
                <Chip value="no" icon={ThumbsDownIcon} />
              </ChipGroup>
            </Box>}>
          This is a demo message
        </ChatMessage>
        <ChatMessage senderType="other" footerActions={<Box display="flex" alignItems="flex-start">
              <IconButtonComponent icon={ThumbsUpIcon} accessibilityLabel="Thumbs Up" isHighlighted onClick={() => {
          console.log('Thumbs Up...');
        }} />
              <IconButtonComponent icon={ThumbsDownIcon} accessibilityLabel="Thumbs Down" isHighlighted onClick={() => {
          console.log('Thumbs Down...');
        }} />
              <IconButtonComponent icon={CopyIcon} accessibilityLabel="Copy" isHighlighted onClick={() => {
          console.log('Copying...');
        }} />
              <IconButtonComponent icon={ShareIcon} accessibilityLabel="Share" isHighlighted onClick={() => {
          console.log('Sharing...');
        }} />
            </Box>} leading={<RayIcon size="xlarge" color="surface.icon.onSea.onSubtle" />}>
          This is a demo message
        </ChatMessage>
      </Box>
    </Box>;
}`,...(ke=(De=S.parameters)==null?void 0:De.docs)==null?void 0:ke.source}}};var ze,Ee,He;j.parameters={...j.parameters,docs:{...(ze=j.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="4px">
      <Box display="flex" flexDirection="column" alignContent="end" gap="4px" width="300px">
        <ChatMessage senderType="other" leading={<RayIcon size="xlarge" color="surface.icon.onSea.onSubtle" />}>
          <Box>
            <TypingText text="This is a demo message." />
          </Box>
        </ChatMessage>
      </Box>
    </Box>;
}`,...(He=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:He.source}}};var qe,We,Ne;B.parameters={...B.parameters,docs:{...(qe=B.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.3" maxWidth="400px">
      <ChatMessage senderType="other" leading={<RayIcon size="large" color="surface.icon.onSea.onSubtle" />} footerActions={<SuggestedQuestionList />}>
        <Box display="flex" flexDirection="column" gap="spacing.3">
          <Text color="surface.text.gray.normal" weight="regular" variant="body" size="medium">
            How can I help you next?
          </Text>
        </Box>
      </ChatMessage>
      <Divider dividerStyle="dashed" marginLeft="24px" />
    </Box>;
}`,...(Ne=(We=B.parameters)==null?void 0:We.docs)==null?void 0:Ne.source}}};var Oe,Ue,Pe;I.parameters={...I.parameters,docs:{...(Oe=I.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  const footerActions = <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="spacing.4">
      <Box display="flex" gap="spacing.4">
        <IconButtonComponent icon={ThumbsUpIcon} accessibilityLabel="Thumbs Up" onClick={() => console.log('Thumbs Up')} />
        <IconButtonComponent icon={ThumbsDownIcon} accessibilityLabel="Thumbs Down" onClick={() => console.log('Thumbs Down')} />
        <IconButtonComponent icon={CopyIcon} accessibilityLabel="Copy" onClick={() => console.log('Copy')} />
        <IconButtonComponent icon={ShareIcon} accessibilityLabel="Share" onClick={() => console.log('Share')} />
      </Box>
      <Text size="small" color="surface.text.gray.muted">
        5 min ago
      </Text>
    </Box>;
  return <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="column" gap="spacing.5" padding="spacing.6">
        <Box display="flex" justifyContent="flex-end">
          <ChatMessage senderType="self" messageType="last">
            How much was settled into my account today?
          </ChatMessage>
        </Box>

        <ChatMessage senderType="other" leading={<RayIcon size="xlarge" color="surface.icon.onSea.onSubtle" />} footerActions={footerActions}>
          <Box display="flex" flexDirection="column" gap="spacing.5" marginTop="spacing.2">
            <Heading size="small" weight="semibold">
              {HEADING_WORDS.join(' ')}
            </Heading>

            <Text color="surface.text.gray.normal" size="medium">
              {PARAGRAPH_TEXT}
            </Text>

            <Box>
              <Table data={paymentTableData}>
                {tableData => <>
                    <TableHeader>
                      <TableHeaderRow>
                        <TableHeaderCell headerKey="STATUS">Status</TableHeaderCell>
                        <TableHeaderCell headerKey="AMOUNT">Amount</TableHeaderCell>
                        <TableHeaderCell headerKey="COL3">Payment ID</TableHeaderCell>
                        <TableHeaderCell headerKey="COL4">Method</TableHeaderCell>
                        <TableHeaderCell headerKey="COL5">Reference</TableHeaderCell>
                      </TableHeaderRow>
                    </TableHeader>
                    <TableBody>
                      {tableData.map((item, index) => <TableRow key={index} item={item}>
                          <TableCell>
                            <Badge color={item.status === 'Pending' ? 'notice' : 'positive'}>
                              {item.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Amount value={item.amount} />
                          </TableCell>
                          <TableCell>{item.col3}</TableCell>
                          <TableCell>{item.col4}</TableCell>
                          <TableCell>{item.col5}</TableCell>
                        </TableRow>)}
                    </TableBody>
                  </>}
              </Table>
            </Box>

            <Box>
              <ChipGroup accessibilityLabel="Select platform" defaultValue="website" onChange={({
              values
            }) => console.log('Platform:', values)}>
                {[{
                value: 'website',
                label: 'Website'
              }, {
                value: 'android',
                label: 'Android'
              }, {
                value: 'ios',
                label: 'iOS'
              }, {
                value: 'social_media',
                label: 'Social Media'
              }, {
                value: 'others',
                label: 'Others'
              }].map(({
                value,
                label
              }) => <Box key={value} display="inline-flex">
                    <Chip value={value}>{label}</Chip>
                  </Box>)}
              </ChipGroup>
            </Box>

            <Box display="flex" gap="spacing.3">
              <Box display="inline-flex">
                <Button>Button</Button>
              </Box>
              <Box display="inline-flex">
                <Button variant="secondary">Button</Button>
              </Box>
            </Box>
          </Box>
        </ChatMessage>

        <Box display="flex" flexDirection="column" gap="spacing.0">
          <ChatMessage senderType="other" leading={<RayIcon size="xlarge" color="surface.icon.onSea.onSubtle" />}>
            <Box display="flex" flexDirection="column" gap="spacing.3" marginTop="spacing.2">
              <Text color="surface.text.gray.normal" size="medium">
                {'How can I help you next?'}
              </Text>
              <Box display="flex" flexDirection="column" gap="spacing.3">
                <SuggestedQuestionItem label="1. Why is the netbanking pending?" onClick={() => console.log('Q1 selected')} />
                <SuggestedQuestionItem label="2. How long does settlement take?" onClick={() => console.log('Q2 selected')} />
              </Box>
            </Box>
          </ChatMessage>
          <Divider dividerStyle="dashed" marginLeft="24px" marginTop="spacing.2" />
        </Box>
      </Box>
    </Box>;
}`,...(Pe=(Ue=I.parameters)==null?void 0:Ue.docs)==null?void 0:Pe.source}}};var _e,Ge,Fe;M.parameters={...M.parameters,docs:{...(_e=M.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return <>
      <ChatMessage senderType="self" thumbnails={THREE_IMAGE_THUMBNAILS} onThumbnailClick={() => {
      setActiveIndex(0);
      setIsLightBoxOpen(true);
    }}>
        Check out these beautiful landscapes!
      </ChatMessage>
      <LightBox isOpen={isLightBoxOpen} onDismiss={() => setIsLightBoxOpen(false)} activeIndex={activeIndex} onIndexChange={({
      index
    }) => setActiveIndex(index)}>
        <LightBoxBody>
          {THREE_IMAGE_THUMBNAILS.map(img => <LightBoxItem key={img.id} src={img.url} alt={img.alt} />)}
        </LightBoxBody>
      </LightBox>
    </>;
}`,...(Fe=(Ge=M.parameters)==null?void 0:Ge.docs)==null?void 0:Fe.source}}};var Ke,Ve,Ye;v.parameters={...v.parameters,docs:{...(Ke=v.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return <>
      <ChatMessage senderType="self" thumbnails={FIVE_IMAGE_THUMBNAILS} onThumbnailClick={() => {
      setActiveIndex(0);
      setIsLightBoxOpen(true);
    }}>
        Example with 5 images (+2 badge)
      </ChatMessage>
      <LightBox isOpen={isLightBoxOpen} onDismiss={() => setIsLightBoxOpen(false)} activeIndex={activeIndex} onIndexChange={({
      index
    }) => setActiveIndex(index)}>
        <LightBoxBody>
          {FIVE_IMAGE_THUMBNAILS.map(img => <LightBoxItem key={img.id} src={img.url} alt={img.alt} />)}
        </LightBoxBody>
      </LightBox>
    </>;
}`,...(Ye=(Ve=v.parameters)==null?void 0:Ve.docs)==null?void 0:Ye.source}}};var Qe,$e,Xe;L.parameters={...L.parameters,docs:{...(Qe=L.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return <>
      <ChatMessage senderType="self" thumbnails={SINGLE_IMAGE_THUMBNAILS} onThumbnailClick={() => {
      setActiveIndex(0);
      setIsLightBoxOpen(true);
    }}>
        ChatMessage with single image
      </ChatMessage>
      <LightBox isOpen={isLightBoxOpen} onDismiss={() => setIsLightBoxOpen(false)} activeIndex={activeIndex} onIndexChange={({
      index
    }) => setActiveIndex(index)}>
        <LightBoxBody>
          {SINGLE_IMAGE_THUMBNAILS.map(img => <LightBoxItem key={img.id} src={img.url} alt={img.alt} />)}
        </LightBoxBody>
      </LightBox>
    </>;
}`,...(Xe=($e=L.parameters)==null?void 0:$e.docs)==null?void 0:Xe.source}}};var Ze,Je,es;A.parameters={...A.parameters,docs:{...(Ze=A.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  const [phase, setPhase] = React.useState<'idle' | 'loading' | 'reasoning' | 'complete' | 'done'>('idle');
  const [visibleTraces, setVisibleTraces] = React.useState<typeof REASONING_STEPS>([]);
  const [reasoningStatus, setReasoningStatus] = React.useState<'loading' | 'complete'>('loading');
  const runSimulation = React.useCallback(() => {
    setPhase('loading');
    setVisibleTraces([]);
    setReasoningStatus('loading');

    // Step 1: show basic loading text for 2s, then start showing reasoning traces
    const startReasoning = setTimeout(() => {
      setPhase('reasoning');
      let stepIndex = 0;
      const addNextStep = (): void => {
        setVisibleTraces(prev => [...prev, REASONING_STEPS[stepIndex]]);
        stepIndex += 1;
        if (stepIndex < REASONING_STEPS.length) {
          setTimeout(addNextStep, 900);
        } else {
          // Step 3 → 4: all steps added, mark complete → triggers auto-collapse
          setTimeout(() => {
            setReasoningStatus('complete');
            setPhase('complete');

            // Step 5: show final message after collapse
            setTimeout(() => {
              setPhase('done');
            }, 800);
          }, 700);
        }
      };
      setTimeout(addNextStep, 400);
    }, 2000);
    return () => clearTimeout(startReasoning);
  }, []);
  const isLoading = phase === 'loading' || phase === 'reasoning';
  return <Box display="flex" flexDirection="column" gap="spacing.5" maxWidth="480px">
      <Box display="flex" justifyContent="flex-end">
        <ChatMessage senderType="self">Verify my KYC details</ChatMessage>
      </Box>

      {phase !== 'idle' && <ChatMessage senderType="other" leading={<RayIcon size="xlarge" color="surface.icon.onSea.onSubtle" />} isLoading={isLoading} loadingText={['Thinking...', 'Processing your request...']} reasoningTraces={visibleTraces.length > 0 ? visibleTraces : undefined} reasoningStatus={reasoningStatus} reasoningTitle="Ray AI thought for 3secs">
          {phase === 'done' ? <Text color="surface.text.gray.normal" size="medium">
              Your KYC has been verified successfully. All documents are in order and your identity
              has been confirmed.
            </Text> : undefined}
        </ChatMessage>}

      {phase === 'idle' && <Button size="small" onClick={runSimulation}>
          Run simulation
        </Button>}
      {phase === 'done' && <Button size="small" variant="secondary" onClick={runSimulation}>
          Replay
        </Button>}
    </Box>;
}`,...(es=(Je=A.parameters)==null?void 0:Je.docs)==null?void 0:es.source}}};var ss,as,ns;R.parameters={...R.parameters,docs:{...(ss=R.parameters)==null?void 0:ss.docs,source:{originalSource:`() => {
  const [phase, setPhase] = React.useState<'idle' | 'running' | 'done'>('idle');
  const [activeStepIndex, setActiveStepIndex] = React.useState(0);
  const [reasoningStatus, setReasoningStatus] = React.useState<'loading' | 'complete'>('loading');
  const runSimulation = React.useCallback(() => {
    setPhase('running');
    setActiveStepIndex(0);
    setReasoningStatus('loading');
    let current = 0;
    const advance = (): void => {
      current += 1;
      if (current < REASONING_STEPS.length) {
        setActiveStepIndex(current);
        setTimeout(advance, 900);
      } else {
        setReasoningStatus('complete');
        setTimeout(() => setPhase('done'), 1200);
      }
    };
    setTimeout(advance, 900);
  }, []);
  return <Box display="flex" flexDirection="column" gap="spacing.5" maxWidth="480px">
      <Box display="flex" justifyContent="flex-end">
        <ChatMessage senderType="self">Verify my KYC details</ChatMessage>
      </Box>

      {phase !== 'idle' && <ChatMessage senderType="other" leading={<RayIcon size="xlarge" color="surface.icon.onSea.onSubtle" />} isLoading={phase === 'running'} loadingText={['Thinking...', 'Processing your request...']} reasoningTraces={REASONING_STEPS} reasoningStatus={reasoningStatus} reasoningTitle="Ray AI thought for 3secs" reasoningActiveStepIndex={phase === 'running' ? activeStepIndex : undefined}>
          {phase === 'done' ? <Text color="surface.text.gray.normal" size="medium">
              Your KYC has been verified successfully. All documents are in order and your identity
              has been confirmed.
            </Text> : undefined}
        </ChatMessage>}

      {phase === 'idle' && <Button size="small" onClick={runSimulation}>
          Run simulation
        </Button>}
      {phase === 'done' && <Button size="small" variant="secondary" onClick={runSimulation}>
          Replay
        </Button>}
    </Box>;
}`,...(ns=(as=R.parameters)==null?void 0:as.docs)==null?void 0:ns.source}}};const Js=["Default","MessageTypes","SenderTypes","SenderTypeWithAndWithoutIcons","Loading","RollingLoadingText","Error","ChatMessageBody","AnimatedChatMessage","ChatMessageWithClick","ChatMessageWithFooterActions","ChatMessageWithCustomTypingAnimation","ChatMessageWithSuggestedQuestions","FullChatExample","ChatMessageWithThreeImages","ChatMessageWithFiveImages","ChatMessageWithSingleImage","ChatMessageWithReasoningTraces","ChatMessageWithUpfrontReasoningTraces"],ia=Object.freeze(Object.defineProperty({__proto__:null,AnimatedChatMessage:b,ChatMessageBody:T,ChatMessageWithClick:C,ChatMessageWithCustomTypingAnimation:j,ChatMessageWithFiveImages:v,ChatMessageWithFooterActions:S,ChatMessageWithReasoningTraces:A,ChatMessageWithSingleImage:L,ChatMessageWithSuggestedQuestions:B,ChatMessageWithThreeImages:M,ChatMessageWithUpfrontReasoningTraces:R,Default:p,Error:f,FullChatExample:I,Loading:x,MessageTypes:g,RollingLoadingText:y,SenderTypeWithAndWithoutIcons:h,SenderTypes:m,__namedExportsOrder:Js,default:Ms},Symbol.toStringTag,{value:"Module"}));export{ia as c};
