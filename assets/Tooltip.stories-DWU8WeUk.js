import{y as o,j as e,X as T,n as _,B as r,T as a,z as M,ak as E,ab as p,l as U,hX as F,b7 as X,C as Y,ad as O,L as j,f as i,g as G,h as C,x as Q}from"./iframe-C1qQ09LF.js";import{S as Z}from"./StoryPageWrapper-CS0_5maI.js";import{S as q}from"./Sandbox.web-B2xP21Qp.js";import{P as J}from"./PopoverVsTooltip-C-nCkevd.js";const K=()=>e.jsxs(Z,{componentName:"Tooltip",componentDescription:"The tooltip typically provides additional context about the element or its function. A tooltip is always triggered by a mouse hover on desktop and on tap on mobile.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74864-86058&t=yvLu210sawTgjmt0-1&scaling=min-zoom&page-id=37400%3A560753&mode=design",children:[e.jsx(T,{children:"Usage"}),e.jsx(q,{children:`
        import { Tooltip, Button } from '@greenloom/ui/components'
        
        function App() {
          return (
            <Tooltip content="Hello world" placement="bottom">
              <Button>Hover over me</Button>
            </Tooltip>
          )
        }

        export default App;
      `}),e.jsx(T,{children:"Tooltip Vs Popover Vs Guided Tour"}),e.jsx(J,{})]}),$={title:"Components/Tooltip",component:o,tags:["autodocs"],args:{placement:"bottom",content:"Amount reversed to customer bank account",onOpenChange:({isOpen:t})=>{console.log(t)}},parameters:{docs:{page:K}}},u=({children:t})=>e.jsx(r,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",children:t}),V=t=>e.jsx(u,{children:e.jsx(o,{...t,children:e.jsx(_,{children:"Hover over me"})})}),c=V.bind({});c.storyName="Default";const s=V.bind({});s.args={title:"Refund successful"};const n=O.forwardRef(({children:t,...g},h)=>e.jsx(r,{ref:h,tabIndex:0,display:"flex",justifyContent:"center",alignItems:"center",flex:p()?void 0:1,width:p()?"40%":"100%",flexShrink:0,padding:"spacing.5",backgroundColor:"surface.background.gray.moderate",...g,children:e.jsx(a,{children:t})})),ee=()=>{const t="Hello world";return p()?e.jsx(u,{children:e.jsxs(r,{alignItems:"center",justifyContent:"center",flexDirection:"row",flexWrap:"wrap",children:[e.jsx(o,{placement:"top-start",content:t,children:e.jsx(n,{children:"top-start"})}),e.jsx(o,{placement:"left",content:t,children:e.jsx(n,{children:"left"})}),e.jsx(o,{placement:"bottom-start",content:t,children:e.jsx(n,{children:"bottom-start"})}),e.jsx(o,{placement:"top",content:t,children:e.jsx(n,{children:"top"})}),e.jsx(o,{placement:"bottom",content:t,children:e.jsx(n,{children:"bottom"})}),e.jsx(o,{placement:"top-end",content:t,children:e.jsx(n,{children:"top-end"})}),e.jsx(o,{placement:"right",content:t,children:e.jsx(n,{children:"right"})}),e.jsx(o,{placement:"bottom-end",content:t,children:e.jsx(n,{children:"bottom-end"})})]})}):e.jsx(u,{children:e.jsxs(r,{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"spacing.4",children:[e.jsxs(r,{display:"flex",alignItems:"center",flexDirection:"column",gap:"spacing.4",children:[e.jsx(o,{placement:"top-start",content:t,children:e.jsx(n,{children:"top-start"})}),e.jsx(o,{placement:"left",content:t,children:e.jsx(n,{children:"left"})}),e.jsx(o,{placement:"bottom-start",content:t,children:e.jsx(n,{children:"bottom-start"})})]}),e.jsxs(r,{display:"flex",alignItems:"center",flexDirection:"column",gap:"spacing.4",children:[e.jsx(o,{placement:"top",content:t,children:e.jsx(n,{children:"top"})}),e.jsx(o,{placement:"bottom",content:t,children:e.jsx(n,{children:"bottom"})})]}),e.jsxs(r,{display:"flex",alignItems:"center",flexDirection:"column",gap:"spacing.4",children:[e.jsx(o,{placement:"top-end",content:t,children:e.jsx(n,{children:"top-end"})}),e.jsx(o,{placement:"right",content:t,children:e.jsx(n,{children:"right"})}),e.jsx(o,{placement:"bottom-end",content:t,children:e.jsx(n,{children:"bottom-end"})})]})]})})},l=ee.bind({});l.storyName="Placement";const te=t=>e.jsxs(r,{children:[e.jsx(a,{children:"When using non-interactive elements as Tooltip triggers, like Icons, Badges, Counters"}),e.jsx(a,{children:"You can wrap the element in TooltipInteractiveWrapper component provided by blade"}),e.jsxs(r,{marginTop:"spacing.5",display:"flex",alignItems:"center",gap:"spacing.2",children:[e.jsx(a,{children:"Refunds"}),e.jsx(o,{...t,placement:"bottom-start",children:e.jsx(M,{children:e.jsx(E,{marginTop:"spacing.2",size:"medium"})})})]})]}),m=te.bind({}),oe=t=>e.jsx(u,{children:e.jsxs(r,{display:"flex",gap:"spacing.11",alignItems:"center",flexWrap:"wrap",children:[e.jsx(o,{...t,placement:"top",children:e.jsx(_,{children:"button"})}),e.jsx(r,{marginTop:"spacing.8"}),e.jsx(o,{...t,placement:"top",children:e.jsx(U,{onClick:()=>console.log(1),href:"#",children:"Link"})}),e.jsx(r,{marginTop:"spacing.8"}),e.jsx(o,{...t,content:"With IconButton",placement:"top-end",children:e.jsx(F,{size:"large",onClick:()=>console.log(1),icon:X,accessibilityLabel:"IconButton"})}),e.jsx(r,{marginTop:"spacing.8"}),e.jsx(o,{...t,content:"With non-interactive icon",placement:"bottom",children:e.jsx(M,{children:e.jsx(E,{size:"large"})})})]})}),d=oe.bind({}),ne=O.forwardRef(({children:t,...g},h)=>(console.log(g),e.jsx(Q,{ref:h,tabIndex:-1,display:p()?"flex":"inline-block",alignSelf:"flex-start",padding:"spacing.4",borderRadius:"medium",backgroundColor:p()?"surface.background.gray.subtle":"surface.background.gray.intense",...g,children:e.jsx(a,{children:t})}))),re=()=>p()?null:e.jsxs(j,{children:[e.jsxs(i,{children:["Make sure to expose ref from the custom component via"," ",e.jsx(G,{href:"https://react.dev/reference/react/forwardRef",children:"React.forwardRef"})]}),e.jsxs(i,{children:["Make sure that your component can receive focus"," ",e.jsx(C,{as:"span",color:"surface.text.gray.muted",children:"(eg: have tabIndex:0)"})]}),e.jsxs(i,{children:["Forward event handlers to the custom trigger"," ",e.jsx(C,{as:"span",color:"surface.text.gray.muted",children:"(you can import the TooltipTriggerProps type from blade when using TypeScript)"}),e.jsxs(j,{children:[e.jsx(i,{children:"onBlur"}),e.jsx(i,{children:"onFocus"}),e.jsx(i,{children:"onMouseLeave"}),e.jsx(i,{children:"onMouseMove"}),e.jsx(i,{children:"onPointerDown"}),e.jsx(i,{children:"onPointerEnter"})]})]})]}),ie=()=>e.jsxs(r,{children:[e.jsx(a,{children:"To create a custom trigger, the tooltip component expects the trigger component to expose:"}),e.jsx(re,{}),e.jsx(a,{marginBottom:"spacing.4",children:"Alternatively you can just spread the props to the trigger, instead of adding them 1 by 1"}),e.jsxs(a,{marginBottom:"spacing.4",children:["If you are using TypeScript you can import the types for these events from blade as"," ",e.jsx(Y,{size:"medium",children:"BladeCommonEvents"})]}),e.jsx(o,{placement:"bottom",content:"A custom trigger",children:e.jsx(ne,{children:"Hover over me"})})]}),x=ie.bind({});var f,B,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <Center>
      <TooltipComponent {...args}>
        <Button>Hover over me</Button>
      </TooltipComponent>
    </Center>;
}`,...(b=(B=c.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var y,v,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <Center>
      <TooltipComponent {...args}>
        <Button>Hover over me</Button>
      </TooltipComponent>
    </Center>;
}`,...(I=(v=s.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var P,w,k;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const tooltipContent = 'Hello world';
  if (isReactNative()) {
    return <Center>
        <Box alignItems="center" justifyContent="center" flexDirection="row" flexWrap="wrap">
          <TooltipComponent placement="top-start" content={tooltipContent}>
            <PlacementBox>top-start</PlacementBox>
          </TooltipComponent>
          <TooltipComponent placement="left" content={tooltipContent}>
            <PlacementBox>left</PlacementBox>
          </TooltipComponent>
          <TooltipComponent placement="bottom-start" content={tooltipContent}>
            <PlacementBox>bottom-start</PlacementBox>
          </TooltipComponent>
          <TooltipComponent placement="top" content={tooltipContent}>
            <PlacementBox>top</PlacementBox>
          </TooltipComponent>
          <TooltipComponent placement="bottom" content={tooltipContent}>
            <PlacementBox>bottom</PlacementBox>
          </TooltipComponent>
          <TooltipComponent placement="top-end" content={tooltipContent}>
            <PlacementBox>top-end</PlacementBox>
          </TooltipComponent>
          <TooltipComponent placement="right" content={tooltipContent}>
            <PlacementBox>right</PlacementBox>
          </TooltipComponent>
          <TooltipComponent placement="bottom-end" content={tooltipContent}>
            <PlacementBox>bottom-end</PlacementBox>
          </TooltipComponent>
        </Box>
      </Center>;
  }
  return <Center>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap="spacing.4">
        <Box display="flex" alignItems="center" flexDirection="column" gap="spacing.4">
          <TooltipComponent placement="top-start" content={tooltipContent}>
            <PlacementBox>top-start</PlacementBox>
          </TooltipComponent>
          <TooltipComponent placement="left" content={tooltipContent}>
            <PlacementBox>left</PlacementBox>
          </TooltipComponent>
          <TooltipComponent placement="bottom-start" content={tooltipContent}>
            <PlacementBox>bottom-start</PlacementBox>
          </TooltipComponent>
        </Box>
        <Box display="flex" alignItems="center" flexDirection="column" gap="spacing.4">
          <TooltipComponent placement="top" content={tooltipContent}>
            <PlacementBox>top</PlacementBox>
          </TooltipComponent>
          <TooltipComponent placement="bottom" content={tooltipContent}>
            <PlacementBox>bottom</PlacementBox>
          </TooltipComponent>
        </Box>
        <Box display="flex" alignItems="center" flexDirection="column" gap="spacing.4">
          <TooltipComponent placement="top-end" content={tooltipContent}>
            <PlacementBox>top-end</PlacementBox>
          </TooltipComponent>
          <TooltipComponent placement="right" content={tooltipContent}>
            <PlacementBox>right</PlacementBox>
          </TooltipComponent>
          <TooltipComponent placement="bottom-end" content={tooltipContent}>
            <PlacementBox>bottom-end</PlacementBox>
          </TooltipComponent>
        </Box>
      </Box>
    </Center>;
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var W,S,L;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  return <Box>
      <Text>
        When using non-interactive elements as Tooltip triggers, like Icons, Badges, Counters
      </Text>
      <Text>You can wrap the element in TooltipInteractiveWrapper component provided by blade</Text>
      <Box marginTop="spacing.5" display="flex" alignItems="center" gap="spacing.2">
        <Text>Refunds</Text>
        <TooltipComponent {...args} placement="bottom-start">
          <TooltipInteractiveWrapper>
            <InfoIcon marginTop="spacing.2" size="medium" />
          </TooltipInteractiveWrapper>
        </TooltipComponent>
      </Box>
    </Box>;
}`,...(L=(S=m.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var D,R,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  return <Center>
      <Box display="flex" gap="spacing.11" alignItems="center" flexWrap="wrap">
        <TooltipComponent {...args} placement="top">
          <Button>button</Button>
        </TooltipComponent>
        <Box marginTop="spacing.8" />
        <TooltipComponent {...args} placement="top">
          <Link onClick={() => console.log(1)} href="#">
            Link
          </Link>
        </TooltipComponent>
        <Box marginTop="spacing.8" />

        <TooltipComponent {...args} content="With IconButton" placement="top-end">
          <IconButton size="large" onClick={() => console.log(1)} icon={BankIcon} accessibilityLabel="IconButton" />
        </TooltipComponent>
        <Box marginTop="spacing.8" />
        <TooltipComponent {...args} content="With non-interactive icon" placement="bottom">
          <TooltipInteractiveWrapper>
            <InfoIcon size="large" />
          </TooltipInteractiveWrapper>
        </TooltipComponent>
      </Box>
    </Center>;
}`,...(z=(R=d.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var A,H,N;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Box>
      <Text>
        To create a custom trigger, the tooltip component expects the trigger component to expose:
      </Text>

      <CustomTriggerDocs />
      <Text marginBottom="spacing.4">
        Alternatively you can just spread the props to the trigger, instead of adding them 1 by 1
      </Text>
      <Text marginBottom="spacing.4">
        If you are using TypeScript you can import the types for these events from blade as{' '}
        <Code size="medium">BladeCommonEvents</Code>
      </Text>
      <TooltipComponent placement="bottom" content="A custom trigger">
        <CustomTrigger>Hover over me</CustomTrigger>
      </TooltipComponent>
    </Box>;
}`,...(N=(H=x.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};const ae=["Default","WithTitle","Placement","NonInteractiveTrigger","TooltipTriggers","WithCustomTrigger"],me=Object.freeze(Object.defineProperty({__proto__:null,Default:c,NonInteractiveTrigger:m,Placement:l,TooltipTriggers:d,WithCustomTrigger:x,WithTitle:s,__namedExportsOrder:ae,default:$},Symbol.toStringTag,{value:"Module"}));export{me as t};
