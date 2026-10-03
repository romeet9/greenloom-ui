import{l6 as O,a$ as i,j as e,H as m,B as a,ad as u,n as j,T as o,aK as x,aI as f,i7 as _,i8 as W,ij as F,id as G,aJ as w,ab as B,l7 as $,L as M,f as h,k6 as y,C as Z,a8 as V,a5 as J}from"./iframe-C1qQ09LF.js";import{S as K}from"./StoryPageWrapper-CS0_5maI.js";import{S as Q}from"./Sandbox.web-B2xP21Qp.js";const k=t=>t.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(n,s)=>(s?"-":"")+n.toLowerCase()),X=()=>e.jsxs(K,{componentName:"Skeleton",componentDescription:"Skeleton Loader is a static / animated placeholder for the information that is still loading. It mimic the structure and look of the entire view.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74864-85414&t=R6i97c0Mf28p8ZvY-1&scaling=min-zoom&page-id=16498%3A256331&mode=design",children:[e.jsx(m,{size:"large",children:"Usage"})," ",e.jsx(Q,{children:`
        import { Skeleton } from '@greenloom/ui/components';
        
        function App() {
          return (
            <Skeleton width="100%" height="50px" margin="spacing.4" />
          )
        }

        export default App;
        `})]}),N="StyledProps",q=["width","height","minWidth","minHeight","margin","marginTop","marginBottom","marginLeft","marginRight","marginX","marginY","top","left","bottom","right","maxHeight","maxWidth","gap","flex","columnGap","rowGap"],ee=q.reduce((t,n)=>({...t,[n]:{description:`**CSS property \`${n}\`**



<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/${k(n)}">MDN Docs for ${k(n)}</a><br/><br/>`,table:{category:N,type:{summary:`MakeValueResponsive<CSSObject['${n}']>`}},name:n}}),{}),ae={title:"Components/Skeleton",component:i,tags:["autodocs"],argTypes:{...ee,borderRadius:{table:{category:N}},__brand__:{table:{disable:!0}}},args:{width:"100%",height:"50px",borderRadius:"medium"},parameters:{chromatic:{delay:O.duration["2xgentle"]},docs:{page:X}}},ie=t=>e.jsx(a,{padding:"spacing.3",display:"flex",gap:"spacing.3",flexWrap:"wrap",children:e.jsx(i,{width:"50%",height:"50px",borderRadius:"medium",...t})}),d=ie.bind({}),r=()=>e.jsxs(a,{flex:B()?void 0:1,flexDirection:"column",width:"100%",padding:"spacing.5",borderRadius:"medium",backgroundColor:"surface.background.gray.intense",children:[e.jsxs(a,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsx(i,{width:"60px",height:"60px",borderRadius:"max",flexShrink:0,marginRight:"spacing.3"}),e.jsxs(a,{width:"100%",display:"flex",flexDirection:"column",children:[e.jsx(i,{borderRadius:"medium",width:"50%",height:"30px",marginBottom:"spacing.3"}),e.jsx(i,{borderRadius:"medium",width:"70%",height:"20px"})]})]}),e.jsxs(a,{marginTop:"spacing.4",display:"flex",flexDirection:"column",children:[e.jsx(i,{borderRadius:"medium",width:"100%",height:"20px",marginBottom:"spacing.3"}),e.jsx(i,{borderRadius:"medium",width:"100%",height:"20px",marginBottom:"spacing.3"}),e.jsx(i,{borderRadius:"medium",width:"90%",height:"20px"})]})]}),te=()=>e.jsxs(a,{padding:"spacing.3",display:"flex",gap:"spacing.3",flexWrap:"wrap",children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]}),l=te.bind({}),b=({isLoading:t})=>e.jsx(f,{padding:"spacing.7",children:e.jsx(w,{children:t?e.jsxs(a,{display:"flex",flexDirection:"column",backgroundColor:"surface.background.gray.intense",children:[e.jsxs(a,{display:"flex",flexDirection:"column",marginBottom:"spacing.3",children:[e.jsx(i,{height:"24px",width:{s:"80%",base:"50%"},borderRadius:"medium",marginBottom:"spacing.3"}),e.jsx(i,{height:"40px",width:{s:"60%",base:"30%"},borderRadius:"medium",marginBottom:"spacing.3"}),e.jsx(i,{height:"20px",width:{s:"80%",base:"50%"},borderRadius:"medium"})]}),e.jsx(i,{height:"65px",borderRadius:"medium",marginBottom:"spacing.3"}),e.jsx(a,{marginY:"spacing.3"}),e.jsx(x,{}),e.jsx(a,{marginBottom:"spacing.4",marginTop:"spacing.3"}),e.jsx(i,{height:"20px",width:"100%",borderRadius:"medium",marginBottom:"spacing.2"}),e.jsx(i,{height:"20px",width:"100%",borderRadius:"medium"})]}):e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.3",backgroundColor:"surface.background.gray.intense",children:[e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(m,{size:"medium",children:"Total Repayable Amount"}),e.jsx(V,{size:"large",value:16e4}),e.jsxs(o,{children:["Principal:"," ",e.jsx(o,{as:"span",weight:"semibold",children:"₹16000"})," ","Interest:"," ",e.jsx(o,{as:"span",weight:"semibold",children:"₹450"})]})]}),e.jsx(J,{isFullWidth:!0,intent:"information",description:"The interest charged will be deposited back to your bank account within a day of payment"}),e.jsx(a,{marginTop:"spacing.3"}),e.jsx(x,{}),e.jsx(a,{marginBottom:"spacing.3"}),e.jsx(o,{children:"The amount will be deducted in 3 installments from your settlement balance between Feb 18-20 on daily basis"})]})})}),ne=()=>{const[t,n]=u.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(j,{onClick:()=>n(s=>!s),children:"Toggle Loading"}),e.jsx(o,{marginY:"spacing.4",children:"Skeleton supports subset of Box properties like margin, padding, flex to help you position it as per your needs to compose more complex skeleton layouts."}),e.jsx(a,{marginY:"spacing.4",display:"flex",flexWrap:"wrap",flexDirection:{s:"row",base:"column"},children:B()?e.jsx(b,{isLoading:t}):e.jsxs(e.Fragment,{children:[e.jsx(a,{flex:1,marginBottom:"spacing.4",marginRight:"spacing.4",children:e.jsx(b,{isLoading:t})}),e.jsx(a,{flex:1,children:e.jsx(b,{isLoading:t})})]})})]})},c=ne.bind({}),oe=()=>{const[t,n]=u.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(j,{onClick:()=>{n(s=>!s)},children:"Toggle Loading"}),e.jsx(o,{marginY:"spacing.4",children:"You can also use Skeleton to show loading states for existing Loom UI components by composing multiple Skeletons and laying them out via layout props."}),e.jsx(a,{width:{xs:"100%",m:"400px"},marginTop:"spacing.4",children:t?e.jsxs(a,{padding:"spacing.7",display:"flex",gap:"spacing.2",flexDirection:"column",backgroundColor:"surface.background.gray.intense",elevation:"lowRaised",borderRadius:"medium",children:[e.jsxs(a,{marginBottom:"spacing.4",display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(i,{width:"100%",height:"24px",borderRadius:"medium"}),e.jsx(i,{width:"50%",height:"20px",borderRadius:"medium"})]}),e.jsx(x,{}),e.jsx(i,{marginTop:"spacing.5",width:"100%",height:"100px",borderRadius:"medium"})]}):e.jsxs(f,{children:[e.jsxs(_,{children:[e.jsx(W,{title:"Payment Pages",subtitle:"Automated Receipts Enabled"}),e.jsx(F,{visual:e.jsx(G,{color:"neutral",children:"UPI"})})]}),e.jsx(w,{children:e.jsx(o,{children:"Green Loom Payment Pages is the easiest way to accept payments with a custom-branded online store. Accept international and domestic payments with automated payment receipts. Take your store online instantly with zero coding."})})]})})]})},g=oe.bind({}),se=()=>{const[t,n]=u.useState(!0);return u.useEffect(()=>{$(t?"Usage with announce loading":"Usage with announce finished loading")},[t]),B()?e.jsx(o,{children:"Story not available on ReactNative"}):e.jsxs(e.Fragment,{children:[e.jsx(o,{marginBottom:"spacing.4",children:"To make Skeleton loader accessible and let consumers know that some content on the page is loading there are few options:"}),e.jsxs(M,{children:[e.jsxs(h,{children:["If you have a section of the page which is loading you can wrap the whole section in a div and set ",e.jsx(y,{children:"aria-busy"})," to indicate the content is loading"]}),e.jsxs(h,{children:["If you are using a button which triggers a loading state and you've set"," ",e.jsx(y,{children:"<Button isLoading />"}),", you do not need to do anything because button already announces the loading state"]}),e.jsxs(h,{children:["Finally, if you want to announce a page level loading state you can utilize the"," ",e.jsx(y,{children:"announce()"})," method exposed by blade to convey the loading state to the user."]})]}),e.jsxs(m,{marginY:"spacing.5",children:["Example 1: ",e.jsx(Z,{size:"medium",children:"announce()"})," method"]}),e.jsx(j,{onClick:()=>{n(s=>!s)},children:"Toggle Loading"}),e.jsx(a,{width:"400px",marginTop:"spacing.4",children:t?e.jsxs(a,{padding:"spacing.7",display:"flex",gap:"spacing.2",flexDirection:"column",backgroundColor:"surface.background.gray.intense",elevation:"lowRaised",borderRadius:"medium",children:[e.jsxs(a,{marginBottom:"spacing.4",display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(i,{width:"100%",height:"24px",borderRadius:"medium"}),e.jsx(i,{width:"50%",height:"20px",borderRadius:"medium"})]}),e.jsx(x,{}),e.jsx(i,{marginTop:"spacing.5",width:"100%",height:"100px",borderRadius:"medium"})]}):e.jsxs(f,{children:[e.jsxs(_,{children:[e.jsx(W,{title:"Payment Pages",subtitle:"Automated Receipts Enabled"}),e.jsx(F,{visual:e.jsx(G,{color:"neutral",children:"UPI"})})]}),e.jsx(w,{children:e.jsx(o,{children:"Green Loom Payment Pages is the easiest way to accept payments with a custom-branded online store. Accept international and domestic payments with automated payment receipts. Take your store online instantly with zero coding."})})]})}),e.jsx(m,{marginY:"spacing.5",children:"Example 2: aria-busy method"}),e.jsx("section",{"aria-busy":t,children:e.jsx(a,{width:"50%",display:"flex",gap:"spacing.3",flexWrap:"wrap",children:t?e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]}):e.jsx(o,{children:"Content loaded"})})})]})},p=se.bind({});var L,C,S;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  return <Box padding="spacing.3" display="flex" gap="spacing.3" flexWrap="wrap">
      <Skeleton width="50%" height="50px" borderRadius="medium" {...args} />
    </Box>;
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var R,T,v;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Box padding="spacing.3" display="flex" gap="spacing.3" flexWrap="wrap">
      <BasicSkeleton />
      <BasicSkeleton />
      <BasicSkeleton />
    </Box>;
}`,...(v=(T=l.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var I,D,P;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [isLoading, setIsLoading] = React.useState(true);
  return <>
      <Button onClick={() => setIsLoading(prev => !prev)}>Toggle Loading</Button>

      <Text marginY="spacing.4">
        Skeleton supports subset of Box properties like margin, padding, flex to help you position
        it as per your needs to compose more complex skeleton layouts.
      </Text>
      <Box marginY="spacing.4" display="flex" flexWrap="wrap" flexDirection={{
      s: 'row',
      base: 'column'
    }}>
        {isReactNative() ? <LoadableCard isLoading={isLoading} /> : <>
            <Box flex={1} marginBottom="spacing.4" marginRight="spacing.4">
              <LoadableCard isLoading={isLoading} />
            </Box>
            <Box flex={1}>
              <LoadableCard isLoading={isLoading} />
            </Box>
          </>}
      </Box>
    </>;
}`,...(P=(D=c.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var H,A,Y;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [isLoading, setIsLoading] = React.useState(true);
  return <>
      <Button onClick={() => {
      setIsLoading(prev => !prev);
    }}>
        Toggle Loading
      </Button>
      <Text marginY="spacing.4">
        You can also use Skeleton to show loading states for existing Loom UI components by
        composing multiple Skeletons and laying them out via layout props.
      </Text>
      <Box width={{
      xs: '100%',
      m: '400px'
    }} marginTop="spacing.4">
        {isLoading ? <Box padding="spacing.7" display="flex" gap="spacing.2" flexDirection="column" backgroundColor="surface.background.gray.intense" elevation="lowRaised" borderRadius="medium">
            <Box marginBottom="spacing.4" display="flex" flexDirection="column" gap="spacing.2">
              <Skeleton width="100%" height="24px" borderRadius="medium" />
              <Skeleton width="50%" height="20px" borderRadius="medium" />
            </Box>
            <Divider />
            <Skeleton marginTop="spacing.5" width="100%" height="100px" borderRadius="medium" />
          </Box> : <Card>
            <CardHeader>
              <CardHeaderLeading title="Payment Pages" subtitle="Automated Receipts Enabled" />
              <CardHeaderTrailing visual={<CardHeaderBadge color="neutral">UPI</CardHeaderBadge>} />
            </CardHeader>
            <CardBody>
              <Text>
                Green Loom Payment Pages is the easiest way to accept payments with a custom-branded
                online store. Accept international and domestic payments with automated payment
                receipts. Take your store online instantly with zero coding.
              </Text>
            </CardBody>
          </Card>}
      </Box>
    </>;
}`,...(Y=(A=g.parameters)==null?void 0:A.docs)==null?void 0:Y.source}}};var E,z,U;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    announce(isLoading ? 'Usage with announce loading' : 'Usage with announce finished loading');
  }, [isLoading]);
  if (isReactNative()) return <Text>Story not available on ReactNative</Text>;
  return <>
      <Text marginBottom="spacing.4">
        To make Skeleton loader accessible and let consumers know that some content on the page is
        loading there are few options:
      </Text>
      <List>
        <ListItem>
          If you have a section of the page which is loading you can wrap the whole section in a div
          and set <ListItemCode>aria-busy</ListItemCode> to indicate the content is loading
        </ListItem>
        <ListItem>
          If you are using a button which triggers a loading state and you've set{' '}
          <ListItemCode>&lt;Button isLoading /&gt;</ListItemCode>, you do not need to do anything
          because button already announces the loading state
        </ListItem>
        <ListItem>
          Finally, if you want to announce a page level loading state you can utilize the{' '}
          <ListItemCode>announce()</ListItemCode> method exposed by blade to convey the loading
          state to the user.
        </ListItem>
      </List>

      <Heading marginY="spacing.5">
        Example 1: <Code size="medium">announce()</Code> method
      </Heading>
      <Button onClick={() => {
      setIsLoading(prev => !prev);
    }}>
        Toggle Loading
      </Button>
      <Box width="400px" marginTop="spacing.4">
        {isLoading ? <Box padding="spacing.7" display="flex" gap="spacing.2" flexDirection="column" backgroundColor="surface.background.gray.intense" elevation="lowRaised" borderRadius="medium">
            <Box marginBottom="spacing.4" display="flex" flexDirection="column" gap="spacing.2">
              <Skeleton width="100%" height="24px" borderRadius="medium" />
              <Skeleton width="50%" height="20px" borderRadius="medium" />
            </Box>
            <Divider />
            <Skeleton marginTop="spacing.5" width="100%" height="100px" borderRadius="medium" />
          </Box> : <Card>
            <CardHeader>
              <CardHeaderLeading title="Payment Pages" subtitle="Automated Receipts Enabled" />
              <CardHeaderTrailing visual={<CardHeaderBadge color="neutral">UPI</CardHeaderBadge>} />
            </CardHeader>
            <CardBody>
              <Text>
                Green Loom Payment Pages is the easiest way to accept payments with a custom-branded
                online store. Accept international and domestic payments with automated payment
                receipts. Take your store online instantly with zero coding.
              </Text>
            </CardBody>
          </Card>}
      </Box>

      <Heading marginY="spacing.5">Example 2: aria-busy method</Heading>

      <section aria-busy={isLoading}>
        <Box width="50%" display="flex" gap="spacing.3" flexWrap="wrap">
          {isLoading ? <>
              <BasicSkeleton />
              <BasicSkeleton />
              <BasicSkeleton />
            </> : <Text>Content loaded</Text>}
        </Box>
      </section>
    </>;
}`,...(U=(z=p.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};const re=["Default","Basic","Complex","CardExample","SkeletonAccessibility"],ge=Object.freeze(Object.defineProperty({__proto__:null,Basic:l,CardExample:g,Complex:c,Default:d,SkeletonAccessibility:p,__namedExportsOrder:re,default:ae},Symbol.toStringTag,{value:"Module"}));export{ge as s};
