import{i4 as s,j as t,B as m,H as u,dL as O,c5 as E,dJ as H,dH as w,dO as T,i3 as c,X as C,a5 as D,ad as W,eR as M,fL as _,hH as z,jW as G,jX as F,ei as J,jV as U}from"./iframe-C1qQ09LF.js";import{N as S}from"./react-router-dom-qPKeHXvg.js";import{d as h}from"./baseCode-DnWYDQ6N.js";import{s as q}from"./StoryRouter-CDfSoprG.js";import{S as V}from"./Sandbox.web-B2xP21Qp.js";import{S as X}from"./StoryPageWrapper-CS0_5maI.js";import{g as Q}from"./storybookArgTypes-DFfQV31s.js";import{S as Z,R as K,u as L,m as g}from"./react-router-CrS3lpF2.js";const Y={"App.tsx":h`import React from 'react';
  import { BrowserRouter } from 'react-router-dom';
  import { AllRoutes, BottomNavExample } from './BottomNavExample';
  
  const App = () => {
    return (
      <BrowserRouter>
        <BottomNavExample />
        <AllRoutes />
      </BrowserRouter>
    );
  };

  export default App;
  `,"BottomNavExample.tsx":h`import React from 'react';
  import {
    matchPath,
    useLocation,
    NavLink,
    Routes,
    Route,
  } from 'react-router-dom';
  import {
    Box,
    BottomNav,
    BottomNavItem,
    BottomNavItemProps
  } from '@greenloom/loom/components';
  import { bottomNavItems } from './bottomNavItems';


  const SamplePage = ({ match }: { match: any }): React.ReactElement => (
    <Box padding={{ base: 'spacing.2', m: 'spacing.6' }}>
      <pre>
        <code>{JSON.stringify(match, null, 4)}</code>
      </pre>
    </Box>
  );

  /**
   * Returns if the given href or one of the items from activeOnLinks are active
   */ 
  const isItemActive = (
    location: { pathname: string },
    { href, activeOnLinks }: { href?: string; activeOnLinks?: string[] }
  ): boolean => {
    const isCurrentPathActive = Boolean(matchPath(location.pathname, href ?? ''));

    const isSubItemActive = Boolean(
      activeOnLinks?.find((href) => matchPath(location.pathname, href))
    );

    return isCurrentPathActive || isSubItemActive;
  };

  const BottomNavRouterItem = (
    props: Omit<BottomNavItemProps, 'as'> & {
      activeOnLinks?: string[];
    },
  ): React.ReactElement => {
    const location = useLocation();

    return (
      <BottomNavItem
        {...props}
        as={NavLink}
        isActive={isItemActive(location, { href: props.href, activeOnLinks: props.activeOnLinks })}
      />
    );
  };

  export const AllRoutes = () => {
    return (
      <Routes>
        {Object.values(bottomNavItems).map((route) => (
          <Route key={route.href} path={route.href} element={<SamplePage match={{ route }} />} />
        ))}
      </Routes>
    )
  }

  export const BottomNavExample = () => {
    return (
      <BottomNav>
        {bottomNavItems.map((item, index) => (
          <BottomNavRouterItem key={index} {...item} />
        ))}
      </BottomNav>
    )
  }
  `,"bottomNavItems.ts":h`import {
    PaymentGatewayIcon,
    TransactionsIcon,
    PaymentLinkIcon,
    PaymentPagesIcon,
    PaymentButtonIcon,
  } from '@greenloom/loom/components';

  export const bottomNavItems = [
    {
      title: 'Payments',
      href: '/',
      icon: PaymentGatewayIcon,
    },
    {
      title: 'Transactions',
      href: '/transactions',
      icon: TransactionsIcon,
    },
    {
      title: 'Links',
      href: '/payment-links',
      icon: PaymentLinkIcon,
    },
    {
      title: 'Pages',
      href: '/payment-pages',
      icon: PaymentPagesIcon,
    },
    {
      title: 'Buttons',
      href: '/payment-buttons',
      icon: PaymentButtonIcon,
    },
  ] as const;
  `},$=()=>t.jsxs(X,{componentName:"BottomNav",componentDescription:"Bottom navigation component is a persistent user interface element at the bottom of a mobile app screen, providing quick access to core functionalities through icons and labels.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=96508-47113&node-type=frame&m=dev&scaling=min-zoom&content-scaling=fixed&page-id=91244%3A54900",children:[t.jsx(C,{children:"Usage (with React Router v6)"}),t.jsx(D,{color:"notice",title:"State Management Note",description:`BottomNav component requires you to handle active link and active menu item on consumer end
        since the component is detached from React Router. The example below includes some boilerplate in handling these active states using React Router v6. Make sure to test your edge cases while implementing. Checkout API Decision of BottomNav for more details.`,isFullWidth:!0,isDismissible:!1}),t.jsx(V,{files:Y,editorHeight:600,hideNavigation:!1,openFile:"App.tsx,bottomNavItems.ts,BottomNavExample.tsx"})]}),tt={title:"Components/BottomNav",component:s,tags:["autodocs"],argTypes:Q(),parameters:{docs:{page:$}},decorators:[q(void 0,{initialEntries:["/payments"]})],globals:{viewport:{value:"iPhone6",isRotated:!1}}},i=[{title:"Payments",href:"/payments",icon:O},{title:"Transactions",href:"/transactions",icon:E,isActive:!0},{title:"Links",href:"/payment-links",icon:H},{title:"Pages",href:"/payment-pages",icon:w},{title:"Buttons",href:"/payment-buttons",icon:T}],x=[{title:"Home",href:"/home",icon:M},{title:"Current Account",href:"/x/current-account",icon:_},{title:"Rize",href:"/rize",icon:z}],et=({match:e})=>t.jsx(m,{padding:{base:"spacing.2",m:"spacing.6"},children:t.jsx("pre",{children:t.jsx("code",{children:JSON.stringify(e,null,4)})})}),A=(e,{href:o,activeOnLinks:a})=>{const r=!!g(e.pathname,{path:o,exact:!0}),n=!!(a!=null&&a.find(v=>g(e.pathname,{path:v,exact:!0})));return r||n},f=e=>{const o=L();return t.jsx(c,{...e,as:S,isActive:A(o,{href:e.href,activeOnLinks:e.activeOnLinks})})},ot=e=>{const o=L();return t.jsx(U,{...e,as:S,isActive:A(o,{href:e.href,activeOnLinks:e.activeOnLinks})})},nt=({children:e,...o})=>t.jsx(s,{...o,children:i.map((a,r)=>t.jsx(c,{...a},r))}),at=({children:e,args:o})=>{const[a,r]=W.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(Z,{children:[...Object.values(i),...Object.values(x)].map(n=>t.jsx(K,{path:n.href,component:et},n.href))}),t.jsx(G,{display:{base:"block",m:"none"},isOpen:a,onDismiss:()=>r(!1),position:"absolute",children:t.jsx(F,{children:x.map(n=>t.jsx(ot,{...n},n.title))})}),t.jsx(s,{...o,children:e??[...i.slice(0,-1).map((n,v)=>t.jsx(f,{...n},v)),t.jsx(f,{title:"More",onClick:()=>r(!0),icon:J,activeOnLinks:Object.values(x).map(n=>n.href)},"more")]})]})},st=({children:e,...o})=>t.jsx(at,{args:o,children:e}),l=nt.bind({});l.args={};const p=st.bind({});p.args={};const d=()=>t.jsxs(m,{display:"flex",flexDirection:"column",gap:"spacing.10",children:[t.jsxs(m,{children:[t.jsx(u,{children:"2 Items"}),t.jsx(s,{position:"relative",children:i.slice(0,2).map((e,o)=>t.jsx(c,{...e},o))})]}),t.jsxs(m,{children:[t.jsx(u,{children:"3 Items"}),t.jsx(s,{position:"relative",children:i.slice(0,3).map((e,o)=>t.jsx(c,{...e},o))})]}),t.jsxs(m,{children:[t.jsx(u,{children:"4 Items"}),t.jsx(s,{position:"relative",children:i.slice(0,4).map((e,o)=>t.jsx(c,{...e},o))})]}),t.jsxs(m,{children:[t.jsx(u,{children:"Max Items"}),t.jsx(s,{position:"relative",children:i.map((e,o)=>t.jsx(c,{...e},o))})]})]});var N,B,I;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <BottomNav {...args}>
      {bottomNavItems.map((item, index) => <BottomNavItem key={index} {...item} />)}
    </BottomNav>;
}`,...(I=(B=l.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var j,y,R;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <WithRoutingExample args={args}>{children}</WithRoutingExample>;
}`,...(R=(y=p.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var b,P,k;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box display="flex" flexDirection="column" gap="spacing.10">
      <Box>
        <Heading>2 Items</Heading>
        <BottomNav position="relative">
          {bottomNavItems.slice(0, 2).map((item, index) => <BottomNavItem key={index} {...item} />)}
        </BottomNav>
      </Box>
      <Box>
        <Heading>3 Items</Heading>
        <BottomNav position="relative">
          {bottomNavItems.slice(0, 3).map((item, index) => <BottomNavItem key={index} {...item} />)}
        </BottomNav>
      </Box>
      <Box>
        <Heading>4 Items</Heading>
        <BottomNav position="relative">
          {bottomNavItems.slice(0, 4).map((item, index) => <BottomNavItem key={index} {...item} />)}
        </BottomNav>
      </Box>
      <Box>
        <Heading>Max Items</Heading>
        <BottomNav position="relative">
          {bottomNavItems.map((item, index) => <BottomNavItem key={index} {...item} />)}
        </BottomNav>
      </Box>
    </Box>;
}`,...(k=(P=d.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const it=["SimpleBottomNav","WithRouting","ItemsCount"],ht=Object.freeze(Object.defineProperty({__proto__:null,ItemsCount:d,SimpleBottomNav:l,WithRouting:p,__namedExportsOrder:it,default:tt},Symbol.toStringTag,{value:"Module"}));export{ht as b};
