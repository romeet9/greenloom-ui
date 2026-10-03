import{hU as t,j as a,X as H,T as B,hV as s,hW as b,hX as r,O as E,a7 as h,B as m,gZ as X,a3 as k,cp as Z}from"./iframe-C1qQ09LF.js";import{S as Y}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const o=()=>{},Q="https://cdn.greenloom.ai/static/assets/optimizer_logo.svg",F=()=>a.jsx(k,{name:"Mavenshop",variant:"square",size:"large"}),J=()=>a.jsx("img",{src:Q,alt:"Green Loom Optimizer",style:{width:"auto",height:"auto",display:"block"}}),K=()=>a.jsx(k,{icon:Z,variant:"square",size:"large"}),$=()=>a.jsx(k,{name:"Maven Shop",variant:"square",size:"large"}),aa=()=>a.jsxs(Y,{componentName:"AppBar",componentDescription:"A top-of-screen application/page header that gives context (logo and/or title), an optional back affordance, and a trailing slot for page-level actions. Use it for mobile and compact desktop surfaces where a full TopNav is too heavy.",figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=123476-15909&t=al61hwUh8Ms2HXUw-4",children:[a.jsx(H,{children:"Usage"}),a.jsx(B,{children:"Compose `AppBar` with `AppBarLeading` for the brand/title cluster and `AppBarActions` for trailing actions. Pass `backButton` to render a back affordance at the left edge."})]}),Ba={title:"Components/AppBar",component:t,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["neutral","subtle"]},isSticky:{control:{type:"boolean"}}},args:{variant:"neutral",isSticky:!0},parameters:{docs:{page:aa}}},ea=e=>a.jsx(t,{...e,backButton:{onClick:o,accessibilityLabel:"Go back"},children:a.jsx(s,{title:"Order details"})}),i=ea.bind({});i.storyName="Default";const oa=e=>a.jsx(t,{...e,backButton:{onClick:o,accessibilityLabel:"Go back"},children:a.jsx(s,{logo:a.jsx(J,{}),trustBadgeVariant:"default"})}),n=oa.bind({});n.storyName="With Logo";const ta=e=>a.jsxs(t,{...e,backButton:{onClick:o,accessibilityLabel:"Go back"},children:[a.jsx(s,{logo:a.jsx($,{}),title:"Maven Shop",trustBadgeVariant:"default"}),a.jsxs(b,{children:[a.jsx(r,{icon:h,emphasis:"moderate",accessibilityLabel:"Profile",onClick:o}),a.jsx(r,{icon:E,emphasis:"moderate",accessibilityLabel:"Close",onClick:o})]})]}),c=ta.bind({});c.storyName="With Actions";const sa=e=>a.jsxs(t,{...e,backButton:{onClick:o,accessibilityLabel:"Go back"},children:[a.jsx(s,{logo:a.jsx(K,{}),title:"Maven Shop"}),a.jsx(b,{children:a.jsx(r,{icon:E,emphasis:"moderate",accessibilityLabel:"Close",onClick:o})})]}),l=sa.bind({});l.storyName="Logo And Title";const ra=e=>a.jsx(t,{...e,backButton:{onClick:o,accessibilityLabel:"Go back"},children:a.jsx(s,{title:"Maven Shop",trustBadgeVariant:"icon-only"})}),p=ra.bind({});p.storyName="Title With Icon Badge";const ia=e=>a.jsxs(m,{backgroundColor:"surface.background.gray.subtle",minHeight:"200px",children:[a.jsxs(t,{...e,variant:"subtle",backButton:{onClick:o,accessibilityLabel:"Go back"},children:[a.jsx(s,{title:"Settings"}),a.jsx(b,{children:a.jsx(r,{icon:h,accessibilityLabel:"Profile",onClick:o})})]}),a.jsx(m,{padding:"spacing.6",children:a.jsx(B,{children:"The `subtle` variant adapts to a light/embedded page background."})})]}),d=ia.bind({});d.storyName="Subtle Variant";const na=e=>a.jsxs(m,{height:"320px",overflowY:"auto",backgroundColor:"surface.background.gray.subtle",children:[a.jsxs(t,{...e,isSticky:!0,backButton:{onClick:o,accessibilityLabel:"Go back"},children:[a.jsx(s,{logo:a.jsx(F,{}),title:"Maven Shop",trustBadgeVariant:"default"}),a.jsx(b,{children:a.jsx(r,{icon:X,accessibilityLabel:"Notifications",onClick:o})})]}),a.jsx(m,{padding:"spacing.6",display:"flex",flexDirection:"column",gap:"spacing.5",children:Array.from({length:20}).map((la,A)=>a.jsxs(B,{children:["Scroll content row ",A+1]},A))})]}),u=na.bind({});u.storyName="Sticky On Scroll";const ca=e=>a.jsxs(t,{...e,backButton:{onClick:o,accessibilityLabel:"Go back"},accessibilityLabel:"Mavenshop checkout",children:[a.jsx(s,{title:"Mavenshop",trustBadgeVariant:"default"}),a.jsx(b,{children:a.jsx(r,{icon:h,emphasis:"moderate",accessibilityLabel:"Profile",onClick:o})})]}),g=ca.bind({});g.storyName="Merchant Checkout";var x,y,L;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`(args: AppBarProps) => {
  return <AppBar {...args} backButton={{
    onClick: noop,
    accessibilityLabel: 'Go back'
  }}>
      <AppBarLeading title="Order details" />
    </AppBar>;
}`,...(L=(y=i.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var f,j,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`(args: AppBarProps) => {
  return <AppBar {...args} backButton={{
    onClick: noop,
    accessibilityLabel: 'Go back'
  }}>
      <AppBarLeading logo={<OptimizerLogo />} trustBadgeVariant="default" />
    </AppBar>;
}`,...(C=(j=n.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var S,v,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`(args: AppBarProps) => {
  return <AppBar {...args} backButton={{
    onClick: noop,
    accessibilityLabel: 'Go back'
  }}>
      <AppBarLeading logo={<TitleInitialsLogo />} title="Maven Shop" trustBadgeVariant="default" />
      <AppBarActions>
        <IconButton icon={UserIcon} emphasis="moderate" accessibilityLabel="Profile" onClick={noop} />
        <IconButton icon={CloseIcon} emphasis="moderate" accessibilityLabel="Close" onClick={noop} />
      </AppBarActions>
    </AppBar>;
}`,...(T=(v=c.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var I,M,G;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`(args: AppBarProps) => {
  return <AppBar {...args} backButton={{
    onClick: noop,
    accessibilityLabel: 'Go back'
  }}>
      <AppBarLeading logo={<StoreLogo />} title="Maven Shop" />
      <AppBarActions>
        <IconButton icon={CloseIcon} emphasis="moderate" accessibilityLabel="Close" onClick={noop} />
      </AppBarActions>
    </AppBar>;
}`,...(G=(M=l.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var P,V,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`(args: AppBarProps) => {
  return <AppBar {...args} backButton={{
    onClick: noop,
    accessibilityLabel: 'Go back'
  }}>
      <AppBarLeading title="Maven Shop" trustBadgeVariant="icon-only" />
    </AppBar>;
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var w,N,U;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`(args: AppBarProps) => {
  return <Box backgroundColor="surface.background.gray.subtle" minHeight="200px">
      <AppBar {...args} variant="subtle" backButton={{
      onClick: noop,
      accessibilityLabel: 'Go back'
    }}>
        <AppBarLeading title="Settings" />
        <AppBarActions>
          <IconButton icon={UserIcon} accessibilityLabel="Profile" onClick={noop} />
        </AppBarActions>
      </AppBar>
      <Box padding="spacing.6">
        <Text>The \`subtle\` variant adapts to a light/embedded page background.</Text>
      </Box>
    </Box>;
}`,...(U=(N=d.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var O,D,_;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`(args: AppBarProps) => {
  return <Box height="320px" overflowY="auto" backgroundColor="surface.background.gray.subtle">
      <AppBar {...args} isSticky backButton={{
      onClick: noop,
      accessibilityLabel: 'Go back'
    }}>
        <AppBarLeading logo={<MerchantLogo />} title="Maven Shop" trustBadgeVariant="default" />
        <AppBarActions>
          <IconButton icon={BellIcon} accessibilityLabel="Notifications" onClick={noop} />
        </AppBarActions>
      </AppBar>
      <Box padding="spacing.6" display="flex" flexDirection="column" gap="spacing.5">
        {Array.from({
        length: 20
      }).map((_, index) => <Text key={index}>Scroll content row {index + 1}</Text>)}
      </Box>
    </Box>;
}`,...(_=(D=u.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var z,R,q;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`(args: AppBarProps) => {
  return <AppBar {...args} backButton={{
    onClick: noop,
    accessibilityLabel: 'Go back'
  }} accessibilityLabel="Mavenshop checkout">
      <AppBarLeading title="Mavenshop" trustBadgeVariant="default" />
      <AppBarActions>
        <IconButton icon={UserIcon} emphasis="moderate" accessibilityLabel="Profile" onClick={noop} />
      </AppBarActions>
    </AppBar>;
}`,...(q=(R=g.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const ha=["Default","WithLogo","WithActions","LogoAndTitle","TitleWithIconBadge","SubtleVariant","Sticky","MerchantCheckout"];export{i as Default,l as LogoAndTitle,g as MerchantCheckout,u as Sticky,d as SubtleVariant,p as TitleWithIconBadge,c as WithActions,n as WithLogo,ha as __namedExportsOrder,Ba as default};
