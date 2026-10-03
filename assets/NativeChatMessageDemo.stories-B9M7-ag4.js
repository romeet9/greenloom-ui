import{iR as a,j as e,B as n,da as r}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const K={title:"Components/ChatMessage/NativeDemo",component:a,parameters:{docs:{disable:!0}}},I=s=>e.jsx(n,{padding:"spacing.4",children:e.jsx(a,{...s,senderType:"self",children:"How do I integrate Green Loom payment gateway?"})}),t=I.bind({}),v=s=>e.jsx(n,{padding:"spacing.4",children:e.jsx(a,{...s,senderType:"other",leading:e.jsx(r,{size:"medium"}),children:"You can integrate the Green Loom payment gateway by following these steps. First, install the SDK and configure your API keys."})}),o=v.bind({}),R=s=>e.jsx(n,{padding:"spacing.4",children:e.jsx(a,{...s,senderType:"other",isLoading:!0,loadingText:"Thinking...",leading:e.jsx(r,{size:"medium"})})}),i=R.bind({}),k=s=>e.jsx(n,{padding:"spacing.4",children:e.jsx(a,{...s,senderType:"self",validationState:"error",errorText:"Failed to send message. Please try again.",children:"This message failed to send"})}),d=k.bind({}),z=s=>e.jsx(n,{padding:"spacing.4",children:e.jsx(a,{...s,senderType:"other",leading:e.jsx(r,{size:"medium"}),reasoningTraces:[{label:"Understanding the question..."},{label:"Looking up payment gateway docs..."},{label:"Generating integration steps..."}],reasoningStatus:"complete",reasoningTitle:"Explored",children:"Here are the integration steps for the Green Loom payment gateway."})}),g=z.bind({}),D=()=>e.jsxs(n,{padding:"spacing.4",display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(a,{senderType:"self",children:"What is Green Loom?"}),e.jsx(a,{senderType:"other",leading:e.jsx(r,{size:"medium"}),children:"Green Loom is a full-stack financial solutions company that provides payment gateway, business banking, and other financial products."}),e.jsx(a,{senderType:"self",children:"How do I get started?"}),e.jsx(a,{senderType:"other",leading:e.jsx(r,{size:"medium"}),children:"You can sign up on the Green Loom dashboard, complete KYC verification, and then integrate using our SDKs."})]}),p=D.bind({});var c,l,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <Box padding="spacing.4">
      <ChatMessage {...args} senderType="self">
        How do I integrate Green Loom payment gateway?
      </ChatMessage>
    </Box>;
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var h,u,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <Box padding="spacing.4">
      <ChatMessage {...args} senderType="other" leading={<RayIcon size="medium" />}>
        You can integrate the Green Loom payment gateway by following these steps. First, install
        the SDK and configure your API keys.
      </ChatMessage>
    </Box>;
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var x,T,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <Box padding="spacing.4">
      <ChatMessage {...args} senderType="other" isLoading={true} loadingText="Thinking..." leading={<RayIcon size="medium" />} />
    </Box>;
}`,...(f=(T=i.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var C,M,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  return <Box padding="spacing.4">
      <ChatMessage {...args} senderType="self" validationState="error" errorText="Failed to send message. Please try again.">
        This message failed to send
      </ChatMessage>
    </Box>;
}`,...(j=(M=d.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var b,L,S;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <Box padding="spacing.4">
      <ChatMessage {...args} senderType="other" leading={<RayIcon size="medium" />} reasoningTraces={[{
      label: 'Understanding the question...'
    }, {
      label: 'Looking up payment gateway docs...'
    }, {
      label: 'Generating integration steps...'
    }]} reasoningStatus="complete" reasoningTitle="Explored">
        Here are the integration steps for the Green Loom payment gateway.
      </ChatMessage>
    </Box>;
}`,...(S=(L=g.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var w,B,G;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Box padding="spacing.4" display="flex" flexDirection="column" gap="spacing.3">
      <ChatMessage senderType="self">What is Green Loom?</ChatMessage>
      <ChatMessage senderType="other" leading={<RayIcon size="medium" />}>
        Green Loom is a full-stack financial solutions company that provides payment gateway,
        business banking, and other financial products.
      </ChatMessage>
      <ChatMessage senderType="self">How do I get started?</ChatMessage>
      <ChatMessage senderType="other" leading={<RayIcon size="medium" />}>
        You can sign up on the Green Loom dashboard, complete KYC verification, and then integrate
        using our SDKs.
      </ChatMessage>
    </Box>;
}`,...(G=(B=p.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const Y=["SelfMessage","OtherMessage","Loading","ErrorState","WithReasoning","Conversation"];export{p as Conversation,d as ErrorState,i as Loading,o as OtherMessage,t as SelfMessage,g as WithReasoning,Y as __namedExportsOrder,K as default};
