import{i5 as a,j as e,X as E,B as o,i6 as r,eR as n,aI as O,i7 as Q,i8 as X,aJ as $,T as b,C as B,l as J}from"./iframe-C1qQ09LF.js";import{L as V}from"./react-router-dom-qPKeHXvg.js";import{s as Y}from"./StoryRouter-CDfSoprG.js";import{S as Z}from"./StoryPageWrapper-CS0_5maI.js";import{S as q}from"./Sandbox.web-B2xP21Qp.js";import{g as F}from"./storybookArgTypes-DFfQV31s.js";import{R as c,u as T,m as G}from"./react-router-CrS3lpF2.js";const K=()=>e.jsxs(Z,{componentName:"Breadcrumb",componentDescription:"Breadcrumbs are used for navigating through or to show user’s location in an application",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=81379-63155&t=WMj82CNLXHQp4D1C-1&scaling=min-zoom&page-id=81010%3A24682&mode=design",children:[e.jsx(E,{children:"Usage"}),e.jsx(q,{children:`
        import { Box, Breadcrumb, BreadcrumbItem, HomeIcon } from '@greenloom/ui/components';

        function App() {
          return (
            <Box padding="spacing.4">
              <Breadcrumb>
                <BreadcrumbItem accessibilityLabel="Home" icon={HomeIcon} href="/home" />
                <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
                <BreadcrumbItem isCurrentPage href="/settlements">
                  Settlements
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>
          );
        }
        
        export default App;        
      `})]}),ee={title:"Components/Breadcrumb",component:a,tags:["autodocs"],argTypes:{...F()},args:{size:"medium",color:"primary",showLastSeparator:!1},decorators:[Y(void 0,{initialEntries:["/home"]})],parameters:{docs:{page:K}}},N=m=>e.jsx(o,{padding:"spacing.4",backgroundColor:m.color==="white"?"surface.background.cloud.intense":void 0,children:e.jsxs(a,{...m,children:[e.jsx(r,{accessibilityLabel:"Home",icon:n,href:"/home"}),e.jsx(r,{href:"/dashboard",children:"Dashboard"}),e.jsx(r,{isCurrentPage:!0,href:"/settlements",children:"Settlements"})]})});N.storyName="Basic";const i=N.bind({}),U=()=>e.jsxs(o,{display:"flex",gap:"spacing.5",flexDirection:"column",children:[e.jsxs(a,{size:"small",children:[e.jsx(r,{accessibilityLabel:"Home",icon:n,href:"/home"}),e.jsx(r,{href:"/dashboard",children:"Dashboard"}),e.jsx(r,{isCurrentPage:!0,href:"/settlements",children:"Settlements"})]}),e.jsxs(a,{size:"medium",children:[e.jsx(r,{icon:n,href:"/home"}),e.jsx(r,{href:"/dashboard",children:"Dashboard"}),e.jsx(r,{isCurrentPage:!0,href:"/settlements",children:"Settlements"})]}),e.jsxs(a,{size:"large",children:[e.jsx(r,{icon:n,href:"/home"}),e.jsx(r,{href:"/dashboard",children:"Dashboard"}),e.jsx(r,{isCurrentPage:!0,href:"/settlements",children:"Settlements"})]})]});U.storyName="Sizes";const d=U.bind({}),v=()=>e.jsxs(o,{display:"flex",gap:"spacing.5",flexDirection:"column",children:[e.jsx(o,{padding:"spacing.4",children:e.jsxs(a,{size:"medium",color:"primary",children:[e.jsx(r,{accessibilityLabel:"Home",icon:n,href:"/home"}),e.jsx(r,{href:"/dashboard",children:"Dashboard"}),e.jsx(r,{isCurrentPage:!0,href:"/settlements",children:"Settlements"})]})}),e.jsx(o,{padding:"spacing.4",children:e.jsxs(a,{size:"medium",color:"neutral",children:[e.jsx(r,{icon:n,href:"/home"}),e.jsx(r,{href:"/dashboard",children:"Dashboard"}),e.jsx(r,{isCurrentPage:!0,href:"/settlements",children:"Settlements"})]})}),e.jsx(o,{padding:"spacing.4",backgroundColor:"surface.background.cloud.intense",children:e.jsxs(a,{size:"medium",color:"white",children:[e.jsx(r,{icon:n,href:"/home"}),e.jsx(r,{href:"/dashboard",children:"Dashboard"}),e.jsx(r,{isCurrentPage:!0,href:"/settlements",children:"Settlements"})]})})]});v.storyName="Colors";const u=v.bind({}),A=()=>e.jsx(o,{display:"flex",gap:"spacing.5",flexDirection:"column",children:e.jsx(o,{padding:"spacing.6",width:"350px",backgroundColor:"surface.background.gray.intense",children:e.jsxs(a,{size:"medium",color:"primary",children:[e.jsx(r,{accessibilityLabel:"Home",icon:n,href:"/home"}),e.jsx(r,{href:"/item1",children:"Item 1"}),e.jsx(r,{href:"/item2",children:"Item 2"}),e.jsx(r,{href:"/item3",children:"Item 3"}),e.jsx(r,{href:"/item4",children:"Item 4"}),e.jsx(r,{href:"/item5",children:"Item 5"}),e.jsx(r,{href:"/item6",children:"Item 6"}),e.jsx(r,{href:"/item7",children:"Item 7"})]})})});A.storyName="BreadcrumbWrapMultiline";const l=A.bind({}),t={home:"/home",products:"/products",payments:"/payments",intPayments:"/international-payments",acceptIntPayments:"/accepts-international-payments"},re=({onClick:m,...p})=>{const _=T(),M=G(_.pathname,{path:p.href,exact:!0})!==null;return e.jsx(r,{isCurrentPage:M,onClick:x=>{m==null||m(x),x.preventDefault(),p.navigate()},...p})},s=m=>e.jsx(V,{component:re,...m}),te=()=>e.jsx(a,{size:"medium",color:"primary",children:e.jsx(s,{icon:n,to:t.home,accessibilityLabel:"Home"})}),se=()=>e.jsxs(a,{size:"medium",color:"primary",children:[e.jsx(s,{icon:n,to:t.home,accessibilityLabel:"Home"}),e.jsx(s,{to:t.products,children:"Products"})]}),ae=()=>e.jsxs(a,{size:"medium",color:"primary",children:[e.jsx(s,{icon:n,to:t.home,accessibilityLabel:"Home"}),e.jsx(s,{to:t.products,children:"Products"}),e.jsx(s,{to:t.payments,children:"Payments"})]}),ne=()=>e.jsxs(a,{size:"medium",color:"primary",children:[e.jsx(s,{icon:n,to:t.home,accessibilityLabel:"Home"}),e.jsx(s,{to:t.products,children:"Products"}),e.jsx(s,{to:t.payments,children:"Payments"}),e.jsx(s,{to:t.intPayments,children:"International Payments"})]}),oe=()=>e.jsxs(a,{size:"medium",color:"primary",children:[e.jsx(s,{icon:n,to:t.home,accessibilityLabel:"Home"}),e.jsx(s,{to:t.products,children:"Products"}),e.jsx(s,{to:t.payments,children:"Payments"}),e.jsx(s,{to:t.intPayments,children:"International Payments"}),e.jsx(s,{to:t.acceptIntPayments,children:"Accept International Payments"})]}),me=()=>{const m=T();return e.jsxs(O,{marginTop:"spacing.5",children:[e.jsx(Q,{children:e.jsx(X,{title:`Welcome to ${m.pathname}`})}),e.jsxs($,{children:[e.jsxs(o,{marginBottom:"spacing.8",children:[e.jsxs(b,{children:["You can use ",e.jsx(B,{size:"medium",children:"Breadcrumbs"})," with"," ",e.jsx(B,{size:"medium",children:"react-router"})," to create a breadcrumb trail for your app."]}),e.jsxs(b,{weight:"semibold",as:"span",marginTop:"spacing.4",children:["Open this"," ",e.jsx(J,{href:"https://stackblitz.com/edit/rmuj5e?file=App.tsx",children:"Stackblitz link"})," to see the source code."]})]}),e.jsx(b,{marginBottom:"spacing.3",children:"Trigger URL Change:"}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsxs(s,{to:t.home,children:["1.1"," Home"]}),e.jsxs(s,{to:t.products,children:["1.1"," Products"]}),e.jsxs(s,{to:t.payments,children:["1.1"," Payments"]}),e.jsxs(s,{to:t.intPayments,children:["1.1.2"," International Payments"]}),e.jsxs(s,{to:t.acceptIntPayments,children:["1.1.3"," Accept International Payments"]})]})]})]})},ce=()=>e.jsxs(o,{children:[e.jsx(c,{path:t.home,component:te}),e.jsx(c,{path:t.products,component:se}),e.jsx(c,{path:t.payments,component:ae}),e.jsx(c,{path:t.intPayments,component:ne}),e.jsx(c,{path:t.acceptIntPayments,component:oe}),e.jsx(c,{path:"/",component:me})]}),W=()=>e.jsx(ce,{});W.storyName="ReactRouterUsage";const h=W.bind({});var g,f,j;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`props => {
  return <Box padding="spacing.4" backgroundColor={props.color === 'white' ? 'surface.background.cloud.intense' : undefined}>
      <Breadcrumb {...props}>
        <BreadcrumbItem accessibilityLabel="Home" icon={HomeIcon} href="/home" />
        <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
        <BreadcrumbItem isCurrentPage href="/settlements">
          Settlements
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>;
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var I,y,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <Box display="flex" gap="spacing.5" flexDirection="column">
      <Breadcrumb size="small">
        <BreadcrumbItem accessibilityLabel="Home" icon={HomeIcon} href="/home" />
        <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
        <BreadcrumbItem isCurrentPage href="/settlements">
          Settlements
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="medium">
        <BreadcrumbItem icon={HomeIcon} href="/home" />
        <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
        <BreadcrumbItem isCurrentPage href="/settlements">
          Settlements
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="large">
        <BreadcrumbItem icon={HomeIcon} href="/home" />
        <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
        <BreadcrumbItem isCurrentPage href="/settlements">
          Settlements
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>;
}`,...(P=(y=d.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var S,C,z;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Box display="flex" gap="spacing.5" flexDirection="column">
      <Box padding="spacing.4">
        <Breadcrumb size="medium" color="primary">
          <BreadcrumbItem accessibilityLabel="Home" icon={HomeIcon} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage href="/settlements">
            Settlements
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box padding="spacing.4">
        <Breadcrumb size="medium" color="neutral">
          <BreadcrumbItem icon={HomeIcon} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage href="/settlements">
            Settlements
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box padding="spacing.4" backgroundColor="surface.background.cloud.intense">
        <Breadcrumb size="medium" color="white">
          <BreadcrumbItem icon={HomeIcon} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage href="/settlements">
            Settlements
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </Box>;
}`,...(z=(C=u.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var H,D,L;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Box display="flex" gap="spacing.5" flexDirection="column">
      <Box padding="spacing.6" width="350px" backgroundColor="surface.background.gray.intense">
        <Breadcrumb size="medium" color="primary">
          <BreadcrumbItem accessibilityLabel="Home" icon={HomeIcon} href="/home" />
          <BreadcrumbItem href="/item1">Item 1</BreadcrumbItem>
          <BreadcrumbItem href="/item2">Item 2</BreadcrumbItem>
          <BreadcrumbItem href="/item3">Item 3</BreadcrumbItem>
          <BreadcrumbItem href="/item4">Item 4</BreadcrumbItem>
          <BreadcrumbItem href="/item5">Item 5</BreadcrumbItem>
          <BreadcrumbItem href="/item6">Item 6</BreadcrumbItem>
          <BreadcrumbItem href="/item7">Item 7</BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </Box>;
}`,...(L=(D=l.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var R,k,w;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <RouterExample />;
}`,...(w=(k=h.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const ie=["Basic","Sizes","Colors","BreadcrumbWrapMultiline","ReactRouterUsage"],Be=Object.freeze(Object.defineProperty({__proto__:null,Basic:i,BreadcrumbWrapMultiline:l,Colors:u,ReactRouterUsage:h,Sizes:d,__namedExportsOrder:ie,default:ee},Symbol.toStringTag,{value:"Module"}));export{Be as B};
