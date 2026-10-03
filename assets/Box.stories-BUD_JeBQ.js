import{B as r,ab as m,j as e,T as n,n as q,l as J,ad as G,ae as K,H as Q}from"./iframe-C1qQ09LF.js";import{b as Z}from"./storybookArgTypes-DFfQV31s.js";import{S as $}from"./StoryPageWrapper-CS0_5maI.js";import{L as ee}from"./LinkToStorybook-BSNXrL_K.js";var h;window.top&&((h=document.getElementById(window.top.location.hash))==null||h.scrollIntoView());const oe={title:"Components/Layout Primitives (Box)/Box",component:r,tags:["autodocs"],argTypes:Z(),parameters:{docs:{page:()=>e.jsx($,{componentName:"Box",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/rfcs/2023-01-06-layout.md",componentDescription:"Box Component from Layout Primitives of Blade.",propsDescription:"All Box props support responsive objects. Props marked with 💅🏼 next to their names are the props that can also be used as styled-props on other Loom UI components. Check out styled-props documentation for more details.",children:e.jsxs(r,{paddingY:"spacing.5",paddingBottom:"spacing.8",children:[e.jsx(Q,{size:"xlarge",children:"Layout Primitives Documentation"}),e.jsxs(n,{marginTop:"spacing.3",children:["Check Out"," ",e.jsx(ee,{url:"Components/Layout Primitives (Box)/How to Create Layouts?",children:'"How to Create Layouts?" Docs'})," ","for more detailed documentation of Box"]})]})})}}},a=t=>e.jsx(r,{...t,children:e.jsx(n,{children:"Change controls to see the parameters change for the container"})});a.args={padding:{base:"spacing.2",m:"spacing.10"},backgroundColor:"surface.background.gray.intense"};const s=t=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Change screen size to see flexDirection switch between row and column"}),e.jsxs(r,{...t,children:[e.jsx(r,{flex:"1",backgroundColor:"surface.background.primary.intense",padding:"spacing.5",children:e.jsx(n,{color:"surface.text.staticWhite.normal",children:"Box1"})}),e.jsx(r,{flex:"1",backgroundColor:"surface.background.cloud.intense",padding:"spacing.5",children:e.jsx(n,{color:"surface.text.onCloud.onIntense",children:"Box2"})})]})]});s.args={display:"flex",paddingY:"spacing.6",flexDirection:{base:"column",m:"row"}};const c=t=>e.jsxs(r,{backgroundColor:"surface.background.gray.moderate",paddingY:"spacing.11",paddingX:m()?"spacing.0":"spacing.4",display:"flex",flexDirection:"row",gap:"spacing.8",children:[e.jsx(r,{...t,elevation:"lowRaised",children:e.jsx(n,{children:"Low "})}),e.jsx(r,{...t,elevation:"midRaised",children:e.jsx(n,{children:"Mid"})}),e.jsx(r,{...t,elevation:"highRaised",children:e.jsx(n,{children:"High"})})]});c.args={padding:"spacing.8",backgroundColor:"surface.background.gray.moderate",borderRadius:"large"};const i=t=>m()?e.jsx(r,{children:e.jsx(n,{children:"as prop is not supported on React Native. Check the same story on web"})}):e.jsx(r,{...t,children:e.jsxs(n,{children:["This box is rendered as ",t.as," HTML tag"]})});i.args={as:"section"};const l=t=>{const o=G.useRef(null);return e.jsxs(r,{height:"300px",overflow:"auto",backgroundColor:"surface.background.gray.moderate",children:[e.jsx(q,{onClick:()=>{m()||K(o.current).scrollIntoView()},children:"Click to Scroll"}),e.jsx(r,{ref:o,...t,children:e.jsx(n,{children:"Hi from Box with ref"})})]})};l.args={marginTop:"800px"};const d=t=>e.jsx(r,{...t,onMouseOver:o=>console.log("onMouseOver",o),onMouseEnter:o=>console.log("onMouseEnter",o),onMouseLeave:o=>console.log("onMouseLeave",o),onScroll:o=>console.log("onScroll",o),children:e.jsx(n,{marginY:"300px",children:"Move mouse over this text and check console"})});d.args={overflowY:"auto",height:"300px"};const g=t=>e.jsxs(r,{children:[e.jsx(r,{draggable:!0,maxWidth:"fit-content",onDragStart:o=>{console.log("onDragStart",o)},onDragEnd:o=>{console.log("onDragEnd",o)},children:e.jsx(q,{children:" Drag me into the box below & check console"})}),e.jsx(r,{...t,margin:"spacing.5",backgroundColor:"surface.background.gray.moderate",onDragEnter:o=>{o.preventDefault(),console.log("onDragEnter",o)},onDragOver:o=>{o.preventDefault(),console.log("onDragOver",o)},onDragLeave:o=>{console.log("onDragLeave",o)},onDrop:o=>{o.preventDefault(),console.log("onDrop",o)}})]});g.args={overflowY:"auto",height:"300px"};const p=()=>e.jsxs(r,{children:[e.jsx(J,{href:"#section-1",children:"Scroll to section"}),e.jsx(r,{height:"100vh"}),e.jsx(r,{height:"100vh",as:"section",id:"section-1",children:e.jsxs(n,{children:["Section of the page with id"," ",e.jsx(n,{as:"span",weight:"semibold",children:"section-1"})," ","that we want to scroll to."]})})]}),u=()=>e.jsx(r,{backgroundColor:"surface.background.primary.intense",padding:"spacing.3",margin:"spacing.3",height:"300px",clipPath:"ellipse(130px 140px at 10% 20%)",transformOrigin:"top left",transform:"rotate(10deg) translate(100px, 20%)",children:e.jsx(n,{as:"span",weight:"semibold",color:"surface.text.staticWhite.normal",children:"Custom Polygon"})}),x=()=>{const[t,o]=G.useState(!1);return e.jsx(r,{backgroundColor:t?"surface.background.primary.intense":"surface.background.gray.intense",backdropFilter:"blur(32px)",padding:"spacing.8",borderRadius:"medium",transition:"all 0.2s ease-in-out",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:e.jsx(n,{color:t?"surface.text.staticWhite.normal":"surface.text.gray.normal",children:"Hover me to see the transition effect!"})})};var f,b,B;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`(args: BoxProps): React.ReactElement => {
  return <Box {...args}>
      <Text>Change controls to see the parameters change for the container</Text>
    </Box>;
}`,...(B=(b=a.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var v,k,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`(args: BoxProps): React.ReactElement => {
  return <>
      <Text>Change screen size to see flexDirection switch between row and column</Text>
      <Box {...args}>
        <Box flex="1" backgroundColor="surface.background.primary.intense" padding="spacing.5">
          <Text color="surface.text.staticWhite.normal">Box1</Text>
        </Box>
        <Box flex="1" backgroundColor="surface.background.cloud.intense" padding="spacing.5">
          <Text color="surface.text.onCloud.onIntense">Box2</Text>
        </Box>
      </Box>
    </>;
}`,...(j=(k=s.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var y,D,T;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`(args: BoxProps): React.ReactElement => {
  return <Box backgroundColor="surface.background.gray.moderate" paddingY="spacing.11" paddingX={isReactNative() ? 'spacing.0' : 'spacing.4'} display="flex" flexDirection="row" gap="spacing.8">
      <Box {...args} elevation="lowRaised">
        <Text>Low </Text>
      </Box>
      <Box {...args} elevation="midRaised">
        <Text>Mid</Text>
      </Box>
      <Box {...args} elevation="highRaised">
        <Text>High</Text>
      </Box>
    </Box>;
}`,...(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var R,w,C;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`(args: BoxProps): React.ReactElement => {
  if (isReactNative()) {
    return <Box>
        <Text>as prop is not supported on React Native. Check the same story on web</Text>
      </Box>;
  }
  return <Box {...args}>
      <Text>This box is rendered as {args.as} HTML tag</Text>
    </Box>;
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var S,E,L;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`(args: BoxProps): React.ReactElement => {
  const ref = React.useRef<BoxRefType>(null);
  return <Box height="300px" overflow="auto" backgroundColor="surface.background.gray.moderate">
      <Button onClick={() => {
      if (!isReactNative()) {
        castWebType(ref.current).scrollIntoView();
      }
    }}>
        Click to Scroll
      </Button>
      <Box ref={ref} {...args}>
        <Text>Hi from Box with ref</Text>
      </Box>
    </Box>;
}`,...(L=(E=l.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var M,W,P;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`(args: BoxProps): React.ReactElement => {
  return <Box {...args} onMouseOver={e => console.log('onMouseOver', e)} onMouseEnter={e => console.log('onMouseEnter', e)} onMouseLeave={e => console.log('onMouseLeave', e)} onScroll={e => console.log('onScroll', e)}>
      <Text marginY="300px">Move mouse over this text and check console</Text>
    </Box>;
}`,...(P=(W=d.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var H,O,I;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`(args: BoxProps): React.ReactElement => {
  return <Box>
      <Box draggable maxWidth="fit-content" onDragStart={e => {
      console.log('onDragStart', e);
    }} onDragEnd={e => {
      console.log('onDragEnd', e);
    }}>
        <Button> Drag me into the box below & check console</Button>
      </Box>
      <Box {...args} margin="spacing.5" backgroundColor="surface.background.gray.moderate" onDragEnter={e => {
      e.preventDefault();
      console.log('onDragEnter', e);
    }} onDragOver={e => {
      e.preventDefault();
      console.log('onDragOver', e);
    }} onDragLeave={e => {
      console.log('onDragLeave', e);
    }} onDrop={e => {
      e.preventDefault();
      console.log('onDrop', e);
    }} />
    </Box>;
}`,...(I=(O=g.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var Y,N,A;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box>
      <Link href="#section-1">Scroll to section</Link>
      <Box height="100vh" />
      <Box height="100vh" as="section" id="section-1">
        <Text>
          Section of the page with id{' '}
          <Text as="span" weight="semibold">
            section-1
          </Text>{' '}
          that we want to scroll to.
        </Text>
      </Box>
    </Box>;
}`,...(A=(N=p.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var _,z,F;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box backgroundColor="surface.background.primary.intense" padding="spacing.3" margin="spacing.3" height="300px" clipPath="ellipse(130px 140px at 10% 20%)" transformOrigin="top left" transform="rotate(10deg) translate(100px, 20%)">
      <Text as="span" weight="semibold" color="surface.text.staticWhite.normal">
        Custom Polygon
      </Text>
    </Box>;
}`,...(F=(z=u.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var V,X,U;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`(): React.ReactElement => {
  const [hovered, setHovered] = React.useState(false);
  return <Box backgroundColor={hovered ? 'surface.background.primary.intense' : 'surface.background.gray.intense'} backdropFilter="blur(32px)" padding="spacing.8" borderRadius="medium" transition="all 0.2s ease-in-out" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Text color={hovered ? 'surface.text.staticWhite.normal' : 'surface.text.gray.normal'}>
        Hover me to see the transition effect!
      </Text>
    </Box>;
}`,...(U=(X=x.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};const re=["Default","Responsive","Elevations","AsSection","WithRef","WithMouseEvents","WithDragAndDropEvents","WithId","Polygon","WithTransition"],ce=Object.freeze(Object.defineProperty({__proto__:null,AsSection:i,Default:a,Elevations:c,Polygon:u,Responsive:s,WithDragAndDropEvents:g,WithId:p,WithMouseEvents:d,WithRef:l,WithTransition:x,__namedExportsOrder:re,default:oe},Symbol.toStringTag,{value:"Module"}));export{ce as b};
