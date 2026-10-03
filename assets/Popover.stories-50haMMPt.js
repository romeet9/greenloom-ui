import{ib as a,ad as p,j as e,B as n,T as o,C as U,n as i,jP as W,ak as Te,F as ke,aj as Ce,a9 as Be,hX as Oe,cn as F,e5 as Le,aH as De,X as V,av as Me,ab as A,L as E,f as m,g as Re,h as x,x as ze,a8 as M,y as We,an as Ae,ao as Ne,a5 as Ue,aK as Fe}from"./iframe-C1qQ09LF.js";import{S as Ve}from"./StoryPageWrapper-CS0_5maI.js";import{S as Ee}from"./Sandbox.web-B2xP21Qp.js";import{i as w}from"./iconMap-BGYDFM5U.js";import{P as He}from"./PopoverVsTooltip-C-nCkevd.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const{action:Ye}=__STORYBOOK_MODULE_ACTIONS__,_e=()=>e.jsxs(Ve,{componentName:"Popover",componentDescription:"The popover typically provides additional context about the element or its function. A popover is always triggered by a mouse hover on desktop and on tap on mobile.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74881-74441&t=pUgmEvKFltc22Yap-1&scaling=min-zoom&page-id=55505%3A14506&mode=design",children:[e.jsx(V,{children:"Usage"}),e.jsx(Ee,{children:`
        import { Popover, Button } from '@greenloom/ui/components'
        
        function App() {
          return (
            <Popover content="Hello world" placement="bottom">
              <Button>Hover over me</Button>
            </Popover>
          )
        }

        export default App;
      `}),e.jsx(V,{children:"Popover Vs Tooltip Vs Guided Popover"}),e.jsx(He,{})]}),it={title:"Components/Popover",component:a,tags:["autodocs"],argTypes:{titleLeading:{name:"titleLeading",type:"select",options:Object.keys(w)},content:{control:{disable:!0}},footer:{control:{disable:!0}},initialFocusRef:{control:{disable:!0}}},parameters:{docs:{page:_e}}},L=({children:t})=>e.jsx(n,{width:"100%",height:"70vh",display:"flex",alignItems:"center",justifyContent:"center",children:t}),g=()=>e.jsx(n,{children:e.jsxs(n,{display:"flex",gap:"spacing.3",padding:"spacing.3",flexDirection:"column",borderRadius:"medium",backgroundColor:"surface.background.gray.intense",borderWidth:"thin",borderColor:"surface.border.gray.subtle",children:[e.jsxs(n,{display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"spacing.5",children:[e.jsx(o,{size:"medium",children:"Gross Settlements"}),e.jsx(M,{size:"medium",value:5e3})]}),e.jsxs(n,{display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"spacing.5",children:[e.jsx(o,{size:"medium",children:"Deductions"}),e.jsx(M,{color:"negative",size:"medium",value:250})]}),e.jsx(Fe,{variant:"subtle"}),e.jsxs(n,{display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"spacing.5",children:[e.jsx(o,{weight:"semibold",size:"medium",children:"Net Settlements"}),e.jsx(M,{size:"medium",weight:"semibold",value:4750})]})]})}),R=p.forwardRef((t,s)=>e.jsxs(n,{display:"flex",flexDirection:"row",gap:"spacing.5",alignItems:"center",justifyContent:"space-between",children:[e.jsx(Me,{size:"medium",children:"Settle with refunds"}),e.jsx(i,{ref:s,onClick:t.onClick,size:"small",variant:"tertiary",children:"Settle amount"})]})),Se=t=>{const s=w[t.titleLeading];return e.jsx(L,{children:e.jsx(a,{...t,titleLeading:e.jsx(s,{color:"interactive.icon.gray.normal",size:"medium"}),children:e.jsx(i,{children:"View Settlement"})})})},h=Se.bind({});h.storyName="Default";h.args={title:"Settlement breakup",content:e.jsx(g,{}),footer:e.jsx(R,{}),titleLeading:"SettlementsIcon"};const f=Se.bind({});f.storyName="Uncontrolled";f.args={title:"Settlement breakup",content:e.jsx(g,{}),footer:e.jsx(R,{}),titleLeading:"SettlementsIcon",defaultIsOpen:!0,onOpenChange:({isOpen:t})=>{Ye("onOpenChange")({isOpen:t})}};const B=t=>{const[s,r]=p.useState(!1),c=w[t.titleLeading];return e.jsxs(n,{children:[e.jsxs(o,{marginBottom:"spacing.5",children:["You can make the popover controlled by passing the ",e.jsx(U,{children:"isOpen"}),", and"," ",e.jsx(U,{children:"onOpenChange"})," props."]}),e.jsx(L,{children:e.jsxs(n,{textAlign:"center",children:[e.jsxs(o,{marginBottom:"spacing.4",children:["Is Popover Open? ",s?"Yes":"No"]}),e.jsx(a,{...t,isOpen:s,onOpenChange:({isOpen:l})=>{r(l)},footer:e.jsx(R,{onClick:()=>r(!1)}),titleLeading:e.jsx(c,{color:"interactive.icon.gray.normal",size:"medium"}),children:e.jsx(i,{onClick:()=>r(l=>!l),children:"View Settlement"})})]})})]})};B.args={placement:"left",title:"Settlement breakup",content:e.jsx(g,{}),titleLeading:"SettlementsIcon"};const Ge=(t,s)=>{const r=["top","top-start","top-end","left","left-start","left-end","bottom","bottom-start","bottom-end","right","right-start","right-end"],[c,l]=p.useState("bottom"),d=s.viewMode==="docs";return e.jsxs(n,{display:"flex",flexDirection:"row",flexWrap:"nowrap",children:[e.jsx(n,{flex:1,children:e.jsx(Ae,{label:"Select Placement",onChange:({value:u})=>l(u),children:r.map(u=>e.jsx(Ne,{value:u,children:u},u))})}),e.jsx(n,{flex:1,margin:"auto",marginTop:"20%",children:e.jsx(a,{...t,isOpen:d||A()?void 0:!0,placement:c,children:e.jsx(i,{children:"View Settlement"})})})]})},v=Ge.bind({});v.storyName="Placement";v.args={title:"Settlement breakup",content:e.jsx(g,{})};const j=t=>{const s=w[t.titleLeading];return e.jsxs(e.Fragment,{children:[e.jsxs(o,{as:"span",children:["With"," ",e.jsx(o,{weight:"semibold",as:"span",children:"PopoverInteractiveWrapper"})," ","you can make Popover open when clicking non-interactive elements like Icons,Badges,Counter etc"]}),e.jsx(o,{color:"surface.text.gray.muted",children:"Note: PopoverInteractiveWrapper is a button by default."}),e.jsx(L,{children:e.jsxs(n,{display:"flex",flexDirection:"row",alignItems:"center",gap:"spacing.3",children:[e.jsx(a,{...t,titleLeading:e.jsx(s,{color:"interactive.icon.gray.normal",size:"medium"}),children:e.jsx(W,{display:"inline-block",children:e.jsx(Te,{color:"interactive.icon.gray.normal",size:"large"})})}),e.jsx(a,{...t,titleLeading:e.jsx(s,{color:"interactive.icon.gray.normal",size:"medium"}),children:e.jsx(W,{children:e.jsx(ke,{color:"information",children:"NEW"})})}),e.jsx(a,{...t,titleLeading:e.jsx(s,{color:"interactive.icon.gray.normal",size:"medium"}),children:e.jsx(W,{children:e.jsx(Ce,{value:20})})})]})})]})};j.storyName="PopoverInteractiveWrapper";j.args={placement:"top",title:"Settlement breakup",content:e.jsx(g,{}),titleLeading:"SettlementsIcon"};const Ke=p.forwardRef(({children:t,onTouchEnd:s,...r},c)=>A()?e.jsx(i,{ref:c,onClick:r.onClick,children:t}):e.jsx(ze,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",borderRadius:"medium",role:"button",tabIndex:0,ref:c,style:{cursor:"pointer"},...r,children:t})),Ze=()=>A()?null:e.jsxs(E,{children:[e.jsxs(m,{children:["Make sure to expose ref from the custom component via"," ",e.jsx(Re,{href:"https://react.dev/reference/react/forwardRef",children:"React.forwardRef"})]}),e.jsxs(m,{children:["Make sure that your component can receive focus"," ",e.jsx(x,{as:"span",color:"surface.text.gray.muted",children:"(eg: have tabIndex:0)"})]}),e.jsxs(m,{children:["Forward event handlers to the custom trigger"," ",e.jsx(x,{as:"span",color:"surface.text.gray.muted",children:"(you can import the PopoverTriggerProps type from blade when using TypeScript)"}),e.jsxs(E,{children:[e.jsx(m,{children:"onClick"}),e.jsxs(m,{children:["onMouseDown"," ",e.jsx(x,{as:"span",color:"surface.text.gray.muted",children:"(not needed if your trigger is a button component)"})]}),e.jsxs(m,{children:["onPointerDown"," ",e.jsx(x,{as:"span",color:"surface.text.gray.muted",children:"(not needed if your trigger is a button component)"})]}),e.jsxs(m,{children:["onKeyDown"," ",e.jsx(x,{as:"span",color:"surface.text.gray.muted",children:"(not needed if your trigger is a button component)"})]}),e.jsxs(m,{children:["onKeyUp"," ",e.jsx(x,{as:"span",color:"surface.text.gray.muted",children:"(not needed if your trigger is a button component)"})]}),e.jsxs(m,{children:["onTouchEnd"," ",e.jsx(x,{as:"span",color:"surface.text.gray.muted",children:"(react-native only)"})]})]})]})]}),S=t=>{const s=w[t.titleLeading];return e.jsxs(e.Fragment,{children:[e.jsx(o,{as:"span",children:"Most of your usecase can be solved using PopoverInteractiveWrapper, but if you want to use a custom trigger element you do this:"}),e.jsx(Ze,{}),e.jsx(o,{marginBottom:"spacing.4",children:"Alternatively you can just spread the props to the trigger, instead of adding them 1 by 1"}),e.jsx(L,{children:e.jsx(a,{...t,titleLeading:e.jsx(s,{color:"interactive.icon.gray.normal",size:"medium"}),children:e.jsx(Ke,{children:"View Settlements"})})})]})};S.args={placement:"top",title:"Settlement breakup",content:e.jsx(g,{}),titleLeading:"SettlementsIcon"};const T=t=>{const s=p.useRef(null),r=w[t.titleLeading];return e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"If you wan to focus on a particular element when the popover opens, you can pass the ref of the element to the initialFocusRef prop."}),e.jsx(L,{children:e.jsx(a,{...t,initialFocusRef:s,footer:e.jsx(R,{ref:s}),titleLeading:e.jsx(r,{color:"interactive.icon.gray.normal",size:"medium"}),children:e.jsx(i,{children:"View Settlement"})})})]})};T.args={placement:"left",title:"Settlement breakup",titleLeading:"SettlementsIcon",content:e.jsx(g,{})};const Xe=t=>e.jsxs(n,{display:"flex",flexDirection:"row",gap:"spacing.10",children:[e.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing.3",children:[e.jsx(o,{size:"small",color:"surface.text.gray.muted",children:"Click to open"}),e.jsx(a,{...t,children:e.jsx(i,{children:"View Settlement"})})]}),e.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing.3",children:[e.jsx(o,{size:"small",color:"surface.text.gray.muted",children:"Hover to open"}),e.jsx(a,{...t,openInteraction:"hover",children:e.jsx(i,{children:"View Settlement"})})]})]}),y=Xe.bind({});y.storyName="With Different Open Interaction";y.args={title:"Settlement breakup",content:e.jsx(g,{})};const Qe=[{label:"Payment Success",amount:1149},{label:"Payment Failed",amount:1149},{label:"Refund Processed",amount:499}],qe=()=>e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.4",maxWidth:"320px",children:[e.jsx(o,{size:"small",color:"surface.text.gray.muted",children:"Move the pointer across the buttons: hover popovers and tooltips switch in place instead of fading out and in again."}),Qe.map(({label:t,amount:s})=>e.jsx(a,{openInteraction:"hover",placement:"right",title:t,content:e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsxs(o,{size:"small",color:"surface.text.gray.muted",children:["Preview of the ",t.toLowerCase()," screen"]}),e.jsx(M,{value:s})]}),children:e.jsx(i,{variant:"secondary",isFullWidth:!0,children:t})},t)),e.jsx(We,{content:"Tooltips are part of the same group",placement:"right",children:e.jsx(i,{variant:"tertiary",isFullWidth:!0,children:"With a tooltip"})})]}),I=qe.bind({});I.storyName="Switching Between Hover Popovers";I.parameters={docs:{description:{story:"Hover popovers share one group with every Tooltip. Opening one closes whichever is showing, and the replaced one disappears without fading while the new one appears in place. Only the first fades in and the last fades out. Click popovers are not part of the group."}}};const N=({shouldShow:t})=>t?e.jsx(Ue,{title:"Please switch to stories panel",marginBottom:"spacing.5",description:"Open this example in the 'Stories' panel and reload the page for better experince",color:"notice"}):null,k=(t,s)=>{const r=s.viewMode==="docs",c=p.useRef(null),[l,d]=p.useState(!1),[u,z]=p.useState(!1),P=()=>{d(!1),z(!0)};return e.jsxs(n,{children:[e.jsx(N,{shouldShow:r}),e.jsxs(o,{as:"span",children:[e.jsx(o,{as:"span",weight:"semibold",children:"Product Usecase Example:"}),e.jsx(o,{children:"A popover that opens when the user focuses on the input field and asks the user to do an action. It only opens once and never again."})]}),e.jsx(n,{width:"fit-content",marginTop:"spacing.8",children:e.jsx(a,{placement:"left",isOpen:l,initialFocusRef:c,title:"Use items from ZohoBooks",onOpenChange:({isOpen:b})=>{d(b),b||P()},content:e.jsx(o,{children:"Integrate with your accounting tool ZohoBooks to use items directly from it."}),footer:e.jsx(n,{display:"flex",flexDirection:"row",children:e.jsxs(n,{marginLeft:"auto",display:"flex",flexDirection:"row",gap:"spacing.3",children:[e.jsx(i,{onClick:()=>P(),size:"small",variant:"secondary",children:"I'll do it later"}),e.jsx(i,{ref:c,onClick:()=>P(),size:"small",variant:"primary",children:"Integrate now"})]})}),children:e.jsx(Be,{onFocus:()=>{u||d(!0)},label:"Item Name"})})})]})};k.storyName="Product Usecase: Input with action";const C=(t,s)=>{const r=s.viewMode==="docs",[c,l]=p.useState(!0),[d,u]=p.useState(!1),[z,P]=p.useState(!1),b=()=>{l(!1),u(D=>!D)};return e.jsxs(n,{children:[e.jsx(N,{shouldShow:r}),e.jsxs(o,{as:"span",children:[e.jsx(o,{as:"span",weight:"semibold",children:"Product Usecase Example:"}),e.jsx(o,{children:"A darkmode popover that opens on page load and asks the user to try dark mode. It only opens once and never again."})]}),e.jsxs(o,{marginY:"spacing.5",children:["isDarkMode On? ",d?"Yes":"No"]}),e.jsx(n,{marginTop:"spacing.8",children:e.jsx(a,{placement:"bottom-end",isOpen:z?!1:c,onOpenChange:({isOpen:D})=>{l(D),D||P(!0)},title:"Dark Mode",titleLeading:e.jsx(F,{color:"interactive.icon.gray.normal",size:"small"}),content:e.jsxs(o,{as:"span",children:["Want a more comfortable reading experience?"," ",e.jsx(o,{as:"span",weight:"semibold",children:"Try dark mode"})]}),footer:e.jsx(n,{display:"flex",flexDirection:"row",children:e.jsxs(n,{marginLeft:"auto",display:"flex",flexDirection:"row",gap:"spacing.3",children:[e.jsx(i,{onClick:()=>l(!1),size:"small",variant:"secondary",children:"Not now"}),e.jsx(i,{onClick:b,size:"small",variant:"primary",children:"Yes"})]})}),children:e.jsx(Oe,{onClick:b,accessibilityLabel:"Toggle Darkmode",icon:d?F:Le})})})]})};C.storyName="Product Usecase: Dark Mode";const O=(t,s)=>{const[r,c]=p.useState(!0),l=s.viewMode==="docs";return e.jsxs(n,{children:[e.jsx(N,{shouldShow:l}),e.jsxs(o,{as:"span",children:[e.jsx(o,{as:"span",weight:"semibold",children:"Product Usecase Example:"}),e.jsx(o,{children:"A popover that opens on page load and lets user know about the new search feature. It only opens once and never again."})]}),e.jsx(n,{width:"400px",marginTop:"spacing.8",children:e.jsx(a,{isOpen:r,onOpenChange:({isOpen:d})=>{c(d)},placement:"bottom",title:"Introducing Search",content:e.jsx(o,{as:"span",children:"Your can search for Payments products, Account & Settings, and more."}),footer:e.jsx(n,{display:"flex",flexDirection:"row",children:e.jsx(n,{marginLeft:"auto",children:e.jsx(i,{onClick:()=>{c(!1)},size:"small",variant:"tertiary",children:"Got it"})})}),children:e.jsx(Be,{icon:De,label:"Search",placeholder:"Search payments prodcts, settings and more"})})})]})};O.storyName="Product Usecase: Introducing Search";var H,Y,_;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const LeadingIcon = iconMap[args.titleLeading as string]!;
  return <Center>
      <Popover {...args} titleLeading={<LeadingIcon color="interactive.icon.gray.normal" size="medium" />}>
        <Button>View Settlement</Button>
      </Popover>
    </Center>;
}`,...(_=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var G,K,Z;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const LeadingIcon = iconMap[args.titleLeading as string]!;
  return <Center>
      <Popover {...args} titleLeading={<LeadingIcon color="interactive.icon.gray.normal" size="medium" />}>
        <Button>View Settlement</Button>
      </Popover>
    </Center>;
}`,...(Z=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var X,Q,q;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  const LeadingIcon = iconMap[args.titleLeading as string]!;
  return <Box>
      <Text marginBottom="spacing.5">
        You can make the popover controlled by passing the <Code>isOpen</Code>, and{' '}
        <Code>onOpenChange</Code> props.
      </Text>
      <Center>
        <Box textAlign="center">
          <Text marginBottom="spacing.4">Is Popover Open? {isOpen ? 'Yes' : 'No'}</Text>
          <Popover {...args} isOpen={isOpen} onOpenChange={({
          isOpen
        }) => {
          setIsOpen(isOpen);
        }} footer={<FooterContent onClick={() => setIsOpen(false)} />} titleLeading={<LeadingIcon color="interactive.icon.gray.normal" size="medium" />}>
            <Button onClick={() => setIsOpen(prev => !prev)}>View Settlement</Button>
          </Popover>
        </Box>
      </Center>
    </Box>;
}`,...(q=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:q.source}}};var J,$,ee;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`(args, context) => {
  const allPlacements = ['top', 'top-start', 'top-end', 'left', 'left-start', 'left-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end'];
  const [placement, setPlacement] = React.useState<PopoverProps['placement']>('bottom');
  const isInDocsMode = context.viewMode === 'docs';
  return <Box display="flex" flexDirection="row" flexWrap="nowrap">
      <Box flex={1}>
        <RadioGroup label="Select Placement" onChange={({
        value
      }) => setPlacement(value as PopoverProps['placement'])}>
          {allPlacements.map(placement => {
          return <Radio key={placement} value={placement}>
                {placement}
              </Radio>;
        })}
        </RadioGroup>
      </Box>

      <Box flex={1} margin="auto" marginTop="20%">
        <Popover {...args} isOpen={isInDocsMode || isReactNative() ? undefined : true} placement={placement}>
          <Button>View Settlement</Button>
        </Popover>
      </Box>
    </Box>;
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,oe;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  const LeadingIcon = iconMap[args.titleLeading as string]!;
  return <>
      <Text as="span">
        With{' '}
        <Text weight="semibold" as="span">
          PopoverInteractiveWrapper
        </Text>{' '}
        you can make Popover open when clicking non-interactive elements like Icons,Badges,Counter
        etc
      </Text>
      <Text color="surface.text.gray.muted">
        Note: PopoverInteractiveWrapper is a button by default.
      </Text>
      <Center>
        <Box display="flex" flexDirection="row" alignItems="center" gap="spacing.3">
          <Popover {...args} titleLeading={<LeadingIcon color="interactive.icon.gray.normal" size="medium" />}>
            <PopoverInteractiveWrapper display="inline-block">
              <InfoIcon color="interactive.icon.gray.normal" size="large" />
            </PopoverInteractiveWrapper>
          </Popover>

          <Popover {...args} titleLeading={<LeadingIcon color="interactive.icon.gray.normal" size="medium" />}>
            <PopoverInteractiveWrapper>
              <Badge color="information">NEW</Badge>
            </PopoverInteractiveWrapper>
          </Popover>

          <Popover {...args} titleLeading={<LeadingIcon color="interactive.icon.gray.normal" size="medium" />}>
            <PopoverInteractiveWrapper>
              <Counter value={20} />
            </PopoverInteractiveWrapper>
          </Popover>
        </Box>
      </Center>
    </>;
}`,...(oe=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,re,ae;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  const LeadingIcon = iconMap[args.titleLeading as string]!;
  return <>
      <Text as="span">
        Most of your usecase can be solved using PopoverInteractiveWrapper, but if you want to use a
        custom trigger element you do this:
      </Text>

      <CustomTriggerDocs />
      <Text marginBottom="spacing.4">
        Alternatively you can just spread the props to the trigger, instead of adding them 1 by 1
      </Text>
      <Center>
        <Popover {...args} titleLeading={<LeadingIcon color="interactive.icon.gray.normal" size="medium" />}>
          <MyCustomTriggerButton>View Settlements</MyCustomTriggerButton>
        </Popover>
      </Center>
    </>;
}`,...(ae=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ie,ce,le;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const LeadingIcon = iconMap[args.titleLeading as string]!;
  return <>
      <Text>
        If you wan to focus on a particular element when the popover opens, you can pass the ref of
        the element to the initialFocusRef prop.
      </Text>
      <Center>
        <Popover {...args} initialFocusRef={buttonRef} footer={<FooterContent ref={buttonRef} />} titleLeading={<LeadingIcon color="interactive.icon.gray.normal" size="medium" />}>
          <Button>View Settlement</Button>
        </Popover>
      </Center>
    </>;
}`,...(le=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var pe,de,ue;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`args => {
  return <Box display="flex" flexDirection="row" gap="spacing.10">
      <Box display="flex" flexDirection="column" alignItems="center" gap="spacing.3">
        <Text size="small" color="surface.text.gray.muted">
          Click to open
        </Text>
        <Popover {...args}>
          <Button>View Settlement</Button>
        </Popover>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" gap="spacing.3">
        <Text size="small" color="surface.text.gray.muted">
          Hover to open
        </Text>
        <Popover {...args} openInteraction="hover">
          <Button>View Settlement</Button>
        </Popover>
      </Box>
    </Box>;
}`,...(ue=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,ge,xe;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.4" maxWidth="320px">
      <Text size="small" color="surface.text.gray.muted">
        Move the pointer across the buttons: hover popovers and tooltips switch in place instead of
        fading out and in again.
      </Text>
      {hoverPreviews.map(({
      label,
      amount
    }) => <Popover key={label} openInteraction="hover" placement="right" title={label} content={<Box display="flex" flexDirection="column" gap="spacing.2">
              <Text size="small" color="surface.text.gray.muted">
                Preview of the {label.toLowerCase()} screen
              </Text>
              <Amount value={amount} />
            </Box>}>
          <Button variant="secondary" isFullWidth>
            {label}
          </Button>
        </Popover>)}
      <Tooltip content="Tooltips are part of the same group" placement="right">
        <Button variant="tertiary" isFullWidth>
          With a tooltip
        </Button>
      </Tooltip>
    </Box>;
}`,...(xe=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var he,fe,ve;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`(args, context) => {
  const isInDocsMode = context.viewMode === 'docs';
  const integrateButtonRef = React.useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [actionTaken, setActionTaken] = React.useState(false);
  const close = () => {
    setIsOpen(false);
    setActionTaken(true);
  };
  return <Box>
      <StoriesPanelSwitchAlert shouldShow={isInDocsMode} />
      <Text as="span">
        <Text as="span" weight="semibold">
          Product Usecase Example:
        </Text>
        <Text>
          A popover that opens when the user focuses on the input field and asks the user to do an
          action. It only opens once and never again.
        </Text>
      </Text>
      <Box width="fit-content" marginTop="spacing.8">
        <Popover placement="left" isOpen={isOpen} initialFocusRef={integrateButtonRef} title="Use items from ZohoBooks" onOpenChange={({
        isOpen
      }) => {
        setIsOpen(isOpen);
        if (!isOpen) {
          close();
        }
      }} content={<Text>
              Integrate with your accounting tool ZohoBooks to use items directly from it.
            </Text>} footer={<Box display="flex" flexDirection="row">
              <Box marginLeft="auto" display="flex" flexDirection="row" gap="spacing.3">
                <Button onClick={() => close()} size="small" variant="secondary">
                  I'll do it later
                </Button>
                <Button ref={integrateButtonRef} onClick={() => close()} size="small" variant="primary">
                  Integrate now
                </Button>
              </Box>
            </Box>}>
          <TextInput onFocus={() => {
          if (!actionTaken) {
            setIsOpen(true);
          }
        }} label="Item Name" />
        </Popover>
      </Box>
    </Box>;
}`,...(ve=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var je,ye,Ie;C.parameters={...C.parameters,docs:{...(je=C.parameters)==null?void 0:je.docs,source:{originalSource:`(args, context) => {
  const isInDocsMode = context.viewMode === 'docs';
  const [isOpen, setIsOpen] = React.useState(true);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [hasSeen, setHasSeen] = React.useState(false);
  const toggleDarkMode = () => {
    // close the popover and toggle darkmode
    setIsOpen(false);
    setIsDarkMode(prev => !prev);
  };
  return <Box>
      <StoriesPanelSwitchAlert shouldShow={isInDocsMode} />
      <Text as="span">
        <Text as="span" weight="semibold">
          Product Usecase Example:
        </Text>
        <Text>
          A darkmode popover that opens on page load and asks the user to try dark mode. It only
          opens once and never again.
        </Text>
      </Text>
      <Text marginY="spacing.5">isDarkMode On? {isDarkMode ? 'Yes' : 'No'}</Text>
      <Box marginTop="spacing.8">
        <Popover placement="bottom-end" isOpen={hasSeen ? false : isOpen} onOpenChange={({
        isOpen
      }) => {
        setIsOpen(isOpen);
        // if the popover is closed, it means the user has seen it
        if (!isOpen) {
          setHasSeen(true);
        }
      }} title="Dark Mode" titleLeading={<SunIcon color="interactive.icon.gray.normal" size="small" />} content={<Text as="span">
              Want a more comfortable reading experience?{' '}
              <Text as="span" weight="semibold">
                Try dark mode
              </Text>
            </Text>} footer={<Box display="flex" flexDirection="row">
              <Box marginLeft="auto" display="flex" flexDirection="row" gap="spacing.3">
                <Button onClick={() => setIsOpen(false)} size="small" variant="secondary">
                  Not now
                </Button>
                <Button onClick={toggleDarkMode} size="small" variant="primary">
                  Yes
                </Button>
              </Box>
            </Box>}>
          <IconButton onClick={toggleDarkMode} accessibilityLabel="Toggle Darkmode" icon={isDarkMode ? SunIcon : MoonIcon} />
        </Popover>
      </Box>
    </Box>;
}`,...(Ie=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};var we,Pe,be;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:`(args, context) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const isInDocsMode = context.viewMode === 'docs';
  return <Box>
      <StoriesPanelSwitchAlert shouldShow={isInDocsMode} />
      <Text as="span">
        <Text as="span" weight="semibold">
          Product Usecase Example:
        </Text>
        <Text>
          A popover that opens on page load and lets user know about the new search feature. It only
          opens once and never again.
        </Text>
      </Text>
      <Box width="400px" marginTop="spacing.8">
        <Popover isOpen={isOpen} onOpenChange={({
        isOpen
      }) => {
        setIsOpen(isOpen);
      }} placement="bottom" title="Introducing Search" content={<Text as="span">
              Your can search for Payments products, Account & Settings, and more.
            </Text>} footer={<Box display="flex" flexDirection="row">
              <Box marginLeft="auto">
                <Button onClick={() => {
            setIsOpen(false);
          }} size="small" variant="tertiary">
                  Got it
                </Button>
              </Box>
            </Box>}>
          <TextInput icon={SearchIcon} label="Search" placeholder="Search payments prodcts, settings and more" />
        </Popover>
      </Box>
    </Box>;
}`,...(be=(Pe=O.parameters)==null?void 0:Pe.docs)==null?void 0:be.source}}};const ct=["Default","Uncontrolled","Controlled","Placement","PopoverInteractiveWrapperTemplate","CustomTrigger","InitialFocus","OpenInteraction","HoverSwitching","ProductUseCase1","ProductUseCase2","ProductUseCase3"];export{B as Controlled,S as CustomTrigger,h as Default,I as HoverSwitching,T as InitialFocus,y as OpenInteraction,v as Placement,j as PopoverInteractiveWrapperTemplate,k as ProductUseCase1,C as ProductUseCase2,O as ProductUseCase3,f as Uncontrolled,ct as __namedExportsOrder,it as default};
