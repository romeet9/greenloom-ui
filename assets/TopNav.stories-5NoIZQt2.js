import{k7 as R,j as e,X as Ze,a5 as Qe,u as O,k8 as V,ad as g,x as S,k9 as E,ka as W,kb as G,eR as X,hc as Se,hb as Pe,hL as ee,hK as P,eq as te,cP as _,ha as ie,kc as q,kd as j,ke as ne,gv as Ce,kf as v,kg as y,F as Q,kh as d,ki as He,l as De,gt as Fe,kj as C,B as n,jF as se,y as x,hX as b,hJ as oe,$ as H,a3 as h,T as i,aY as et,aZ as tt,a_ as it,b0 as nt,n as Oe,P as Ve,da as st,aH as ot,L as at,f as I,kk as le,kl as rt,km as ct,dJ as Ee,dH as We,dL as Ge,dO as Xe,at as lt,aS as dt,aq as mt,ar as ht,ax as ut,jW as pt,jX as gt,eB as xt,kn as de,ko as bt,jV as ft}from"./iframe-C1qQ09LF.js";import{L as _e}from"./react-router-dom-qPKeHXvg.js";import{t as jt}from"./code-DFCk_3dG.js";import{s as vt}from"./StoryRouter-CDfSoprG.js";import{R as D}from"./RazorpayLogo-Cs3mU7R0.js";import{S as yt}from"./Sandbox.web-B2xP21Qp.js";import{S as Tt}from"./StoryPageWrapper-CS0_5maI.js";import{a as qe,u as ae,m as me}from"./react-router-CrS3lpF2.js";import"./preload-helper-Dp1pzeXC.js";import"./baseCode-DnWYDQ6N.js";import"./Sandbox.web-C7diOxlu.js";import"./componentStatusData-8pChZ-5h.js";const f=()=>{},kt=()=>e.jsxs(Tt,{componentName:"TopNav",componentDescription:"The top navigation bar is positioned at the top of the screen that provides quick access to different products, search & user profile.",figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=90311-235393&m=dev",children:[e.jsx(Ze,{children:"Usage (with React Router v6)"}),e.jsx(Qe,{color:"notice",title:"State Management Note",description:`TopNav component requires you to handle active link and active menu item on consumer end
        since the component is detached from React Router. The example below includes some boilerplate in handling these active states using React Router v6. Make sure to test your edge cases while implementing.`,isFullWidth:!0,isDismissible:!1}),e.jsx(yt,{files:jt,editorHeight:600,hideNavigation:!1,openFile:"SideNavExample.tsx,utils.tsx,App.tsx,TopNavExample.tsx"})]}),$t={title:"Components/TopNav",component:R,tags:["autodocs"],parameters:{docs:{page:kt}},decorators:[vt(void 0,{initialEntries:["/home"]})]},Ue=(t,{href:s,activeOnLinks:o})=>{const m=!!me(t.pathname,{path:s,exact:!1}),c=!!(o!=null&&o.find(a=>me(t.pathname,{path:a,exact:!1})));return m||c},u=t=>{const s=ae();return e.jsx(ft,{...t,as:_e,isActive:Ue(s,{href:t.href,activeOnLinks:t.activeOnLinks})})},It=({isOpen:t,onDismiss:s})=>e.jsx(pt,{isOpen:t,onDismiss:s,position:"absolute",children:e.jsxs(gt,{children:[e.jsx(u,{icon:X,title:"Home",href:"/home"}),e.jsx(u,{icon:xt,title:"L2 Trigger",href:"/l2-item",activeOnLinks:["/l2-item","/l2-item-2","/l3-item","/l3-item-2"],children:e.jsxs(de,{children:[e.jsx(u,{title:"L2 Item",href:"/l2-item"}),e.jsx(u,{title:"L2 Item 2",href:"/l2-item-2"}),e.jsx(u,{title:"L3 Trigger",activeOnLinks:["/l3-item","/l3-item-2"],children:e.jsxs(de,{children:[e.jsx(u,{title:"L3 Item",href:"/l3-item"}),e.jsx(u,{title:"L3 Item 2",href:"/l3-item-2"})]})})]})}),e.jsxs(bt,{title:"Products",maxVisibleItems:2,children:[e.jsx(u,{icon:Ge,title:"Gateway",href:"/gateway"}),e.jsx(u,{icon:Ee,title:"Links",href:"/links"}),e.jsx(u,{icon:We,title:"Pages",href:"/pages"}),e.jsx(u,{icon:Xe,title:"Button",href:"/button"})]})]})}),U=g.forwardRef((t,s)=>{const o=ae(),m=Ue(o,{href:t.href,activeOnLinks:t.activeOnLinks});return e.jsx(ne,{ref:s,...t,as:_e,isActive:m})}),$e=({icon:t,title:s,description:o})=>e.jsxs(n,{display:"flex",gap:"spacing.4",children:[e.jsx(n,{borderRadius:"medium",padding:"spacing.5",backgroundColor:"surface.background.gray.subtle",children:e.jsx(t,{color:"interactive.icon.neutral.subtle",size:"medium"})}),e.jsxs(n,{children:[e.jsx(i,{color:"surface.text.gray.subtle",size:"medium",weight:"semibold",children:s}),e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:o})]})]}),$=Ve.div(({background:t})=>({height:"100vh",background:t??"#000000"})),Bt=[{title:"Payment Links",icon:Ee},{title:"Payment Pages",icon:We},{title:"Payment Gateway",icon:Ge},{title:"Payment Buttons",icon:Xe}],At=[{title:"Transactions",icon:oe},{title:"Settlements",icon:P},{title:"Refunds",icon:_}],Mt=Ve.div(({isActive:t})=>({width:t?"400px":"200px",transition:"width 200ms ease-in-out"})),re=()=>{const[t,s]=g.useState(""),[o,m]=g.useState(!1),c=Bt.filter(a=>a.title.toLowerCase().includes(t.toLowerCase()));return e.jsx(Mt,{isActive:o,children:e.jsxs(lt,{onOpenChange:a=>m(a),children:[e.jsx(se,{placeholder:"Search in payments",accessibilityLabel:"Search Across Green Loom",onChange:({value:a})=>s(a)}),e.jsx(dt,{children:c.length===0&&t.length>0?e.jsx(n,{padding:"spacing.5",display:"flex",justifyContent:"center",children:e.jsx(i,{color:"surface.text.gray.muted",children:"No results found"})}):e.jsx(mt,{children:(t.length===0?At:c).map(a=>e.jsx(ht,{title:a.title,value:a.title,leading:e.jsx(ut,{icon:a.icon})},a.title))})})]})})},wt=()=>e.jsx(re,{}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{display:"flex",alignItems:"center",marginLeft:"spacing.2",children:e.jsx(D,{})}),e.jsx(n,{}),e.jsx(n,{marginRight:"spacing.2",children:e.jsxs(j,{openInteraction:"click",children:[e.jsx(h,{size:"medium",name:"RK"}),e.jsxs(v,{children:[e.jsx(y,{title:"Profile"}),e.jsxs(n,{display:"flex",gap:"spacing.4",padding:"spacing.4",alignItems:"center",children:[e.jsx(h,{size:"medium",name:"RK"}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(i,{size:"medium",weight:"semibold",children:"Anurag Hazra"}),e.jsx(i,{size:"xsmall",color:"surface.text.gray.muted",children:"Green Loom Trusted Merchant"})]})]}),e.jsx(d,{children:e.jsx(i,{color:"surface.text.gray.subtle",children:"Settings"})}),e.jsx(d,{color:"negative",children:e.jsx(i,{color:"feedback.text.negative.intense",children:"Logout"})})]})]})})]}),ce=({variant:t="neutral"})=>{const s=qe(),{theme:o}=O(),{matchedBreakpoint:m,matchedDeviceType:c}=V({breakpoints:o.breakpoints}),a=m==="m",p=c==="mobile",[T,k]=g.useState(!1),[r,F]=g.useState(null),K=ae().pathname;g.useEffect(()=>{F(K)},[K]);const Je=t==="primary"?o.colors.surface.background.primary.intense:"#000000";return e.jsx($,{background:Je,children:e.jsxs(S,{children:[e.jsx(R,{variant:t,children:p?e.jsx(J,{}):e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(D,{})}),e.jsx(W,{children:e.jsx(G,{items:[{title:"Ray AI",href:"/home",icon:st,titleSuffix:e.jsx(Q,{size:"small",emphasis:"subtle",color:"positive",children:"BETA"})},{href:"/payroll",title:"Payroll",icon:{default:Pe,selected:Se},description:"Automate payroll with ease."},{href:"/payments",title:"Payments",icon:{default:P,selected:ee},description:"Manage payments effortlessly."},{href:"/magic-checkout",title:"Magic Checkout",icon:{default:_,selected:te},description:"Fast, one-click checkout."},{href:"/rize",title:"Rize",icon:ie,isAlwaysOverflowing:!0,description:"Boost your business growth."}],children:({items:Ke,overflowingItems:Y})=>{const Z=Y.find(l=>l.href===r);return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:Ke.map(l=>e.jsx(U,{...l},l.title))}),Y.length?e.jsxs(j,{openInteraction:"hover",children:[e.jsx(ne,{title:Z?`More: ${Z.title}`:"More",trailing:e.jsx(Ce,{color:"surface.icon.staticWhite.subtle"}),isActive:!!Z}),e.jsxs(v,{children:[e.jsx(y,{title:"Products for you",trailing:e.jsx(Q,{emphasis:"subtle",color:"notice",children:"Recommended"})}),Y.map(l=>{const Ye=l.icon&&typeof l.icon=="object"&&"default"in l.icon?l.icon.default:l.icon;return e.jsx(d,{onClick:()=>{s.push(l.href),F(l.href)},children:e.jsx($e,{icon:Ye,title:l.title,description:l.description})},l.href)}),e.jsx(He,{children:e.jsx(De,{href:"",icon:Fe,iconPosition:"right",children:"View all products"})})]})]}):null]})}})}),e.jsxs(C,{children:[a?e.jsx(x,{content:"Search in payments",children:e.jsx(b,{size:p?"small":"medium",icon:ot,onClick:f,accessibilityLabel:"Search in payments",emphasis:t==="primary"?"subtle":void 0})}):e.jsx(re,{}),e.jsx(x,{content:"View Ecosystem Health",children:e.jsx(b,{size:p?"small":"medium",icon:oe,onClick:f,accessibilityLabel:"View Ecosystem Health",isHighlighted:!0,emphasis:t==="primary"?"subtle":void 0})}),e.jsx(x,{content:"View Announcements",children:e.jsx(b,{size:p?"small":"medium",icon:H,onClick:f,emphasis:t==="primary"?"subtle":void 0,accessibilityLabel:"View Announcements",isHighlighted:!0})}),e.jsxs(j,{openInteraction:"click",children:[e.jsx(h,{size:"small",name:"Anurag Hazra"}),e.jsxs(v,{children:[e.jsx(y,{title:"Profile"}),e.jsxs(n,{display:"flex",gap:"spacing.4",padding:"spacing.4",alignItems:"center",children:[e.jsx(h,{size:"medium",name:"John Doe"}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(i,{size:"medium",weight:"semibold",children:"John Doe"}),e.jsx(i,{size:"xsmall",color:"surface.text.gray.muted",children:"Green Loom Trusted Merchant"})]})]}),e.jsx(d,{children:e.jsx(i,{color:"surface.text.gray.subtle",children:"Settings"})}),e.jsx(d,{color:"negative",children:e.jsx(i,{color:"feedback.text.negative.intense",children:"Logout"})})]})]})]})]})}),e.jsxs(n,{overflow:"hidden",position:"relative",zIndex:1,borderRadius:{base:"none",m:"large"},borderTopRightRadius:{base:"none",m:"large"},borderBottomLeftRadius:"none",borderBottomRightRadius:"none",height:"100%",marginX:{base:"spacing.0",m:"spacing.3"},children:[e.jsx(It,{isOpen:T,onDismiss:()=>{k(!1)}}),e.jsx(n,{marginLeft:{base:"0px",m:le(ct),xl:le(rt)},height:"calc(100vh - 58px)",children:e.jsx(n,{height:"100vh",padding:"spacing.5",overflowY:"scroll",backgroundColor:"surface.background.gray.moderate",children:e.jsxs(n,{width:{base:"max-content",m:"100%"},height:"200vh",children:[e.jsxs(i,{weight:"semibold",children:["Active URL: ",K]}),e.jsx(i,{marginY:"spacing.4",children:"This demo integrates:"}),e.jsxs(at,{children:[e.jsx(I,{children:"SideNav"}),e.jsx(I,{children:"Menu (Explore Tab)"}),e.jsx(I,{children:"ReactRouter"}),e.jsx(I,{children:"Mobile Responsiveness"}),e.jsx(I,{children:"One Dashboard Layout"})]})]})})})]})]})})},Nt=()=>e.jsx(ce,{}),zt=()=>{const t=qe(),{theme:s}=O(),{matchedDeviceType:o}=V({breakpoints:s.breakpoints}),m=o==="mobile",[c,a]=g.useState(null);return e.jsx($,{children:e.jsxs(S,{children:[e.jsx(R,{children:m?e.jsx(J,{}):e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(D,{})}),e.jsx(W,{children:e.jsx(G,{items:[{title:"Home",href:"/home",icon:X},{href:"/payroll",title:"Payroll",icon:{default:Pe,selected:Se},description:"Automate payroll with ease."},{href:"/payments",title:"Payments",icon:{default:P,selected:ee},description:"Manage payments effortlessly."},{href:"/magic-checkout",title:"Magic Checkout",icon:{default:_,selected:te},description:"Fast, one-click checkout."},{href:"/rize",title:"Rize",icon:ie,isAlwaysOverflowing:!0,description:"Boost your business growth."}],children:({items:p,overflowingItems:T})=>{const k=T.find(r=>r.href===c);return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:p.map(r=>e.jsx(U,{...r},r.title))}),T.length?e.jsxs(j,{openInteraction:"hover",children:[e.jsx(ne,{title:k?`More: ${k.title}`:"More",trailing:e.jsx(Ce,{}),isActive:!!k}),e.jsxs(v,{children:[e.jsx(y,{title:"Products for you",trailing:e.jsx(Q,{emphasis:"subtle",color:"notice",children:"Recommended"})}),T.map(r=>{const F=r.icon&&typeof r.icon=="object"&&"default"in r.icon?r.icon.default:r.icon;return e.jsx(d,{onClick:()=>{t.push(r.href),a(r.href)},children:e.jsx($e,{icon:F,title:r.title,description:r.description})},r.href)}),e.jsx(He,{children:e.jsx(De,{href:"",icon:Fe,iconPosition:"right",children:"View all products"})})]})]}):null]})}})}),e.jsxs(C,{children:[e.jsx(n,{width:"200px",children:e.jsx(se,{placeholder:"Search in payments",accessibilityLabel:"Search Across Green Loom"})}),e.jsx(x,{content:"View Ecosystem Health",children:e.jsx(b,{size:"medium",icon:oe,onClick:f,isHighlighted:!0,accessibilityLabel:"View Ecosystem Health"})}),e.jsx(x,{content:"View Announcements",children:e.jsx(b,{icon:H,onClick:f,isHighlighted:!0,size:"medium",accessibilityLabel:"View Announcements"})}),e.jsxs(j,{openInteraction:"click",children:[e.jsx(h,{size:"small",name:"Anurag Hazra"}),e.jsxs(v,{children:[e.jsx(y,{title:"Profile"}),e.jsxs(n,{display:"flex",gap:"spacing.4",padding:"spacing.4",alignItems:"center",children:[e.jsx(h,{size:"medium",name:"Anurag Hazra"}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(i,{size:"medium",weight:"semibold",children:"Anurag Hazra"}),e.jsx(i,{size:"xsmall",color:"surface.text.gray.muted",children:"Green Loom Trusted Merchant"})]})]}),e.jsx(d,{children:e.jsx(i,{color:"surface.text.gray.subtle",children:"Settings"})}),e.jsx(d,{color:"negative",children:e.jsx(i,{color:"feedback.text.negative.intense",children:"Logout"})})]})]})]})]})}),e.jsx(n,{overflow:"hidden",position:"relative",borderRadius:{base:"none",m:"large"},borderTopRightRadius:{base:"none",m:"large"},borderBottomLeftRadius:"none",borderBottomRightRadius:"none",height:"100%",marginX:{base:"spacing.0",m:"spacing.3"},children:e.jsx(n,{height:"calc(100vh - 58px)",padding:"spacing.5",backgroundColor:"surface.background.gray.moderate",children:e.jsx(i,{margin:"spacing.5",children:"This is a minimal example usage of TopNav, checkout Full Dashboard Layout example for other features & integration details."})})})]})})},B=zt.bind({});B.storyName="Minimal";const A=Nt.bind({});A.storyName="Full Example";const Lt=()=>{const{theme:t}=O(),{matchedDeviceType:s}=V({breakpoints:t.breakpoints}),o=s==="mobile",[m,c]=g.useState(!1);return e.jsx($,{children:e.jsxs(S,{children:[e.jsxs(R,{children:[o?e.jsx(J,{}):e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(D,{})}),e.jsx(W,{children:e.jsx(G,{items:[{title:"Home",href:"/home",icon:X},{href:"/payments",title:"Payments",icon:{default:P,selected:ee},description:"Manage payments effortlessly."},{href:"/magic-checkout",title:"Magic Checkout",icon:{default:_,selected:te},description:"Fast, one-click checkout."},{href:"/rize",title:"Rize",icon:ie,isAlwaysOverflowing:!0,description:"Boost your business growth."}],children:({items:a})=>e.jsx(q,{children:a.map(p=>e.jsx(U,{...p},p.title))})})}),e.jsxs(C,{children:[e.jsx(re,{}),e.jsx(x,{content:"View Announcements",children:e.jsx(b,{icon:H,onClick:f,accessibilityLabel:"View Announcements",isHighlighted:!0,size:"medium"})}),e.jsxs(j,{openInteraction:"click",children:[e.jsx(h,{size:"small",name:"Anurag Hazra"}),e.jsxs(v,{children:[e.jsx(y,{title:"Profile"}),e.jsxs(n,{display:"flex",gap:"spacing.4",padding:"spacing.4",alignItems:"center",children:[e.jsx(h,{size:"medium",name:"Anurag Hazra"}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(i,{size:"medium",weight:"semibold",children:"Anurag Hazra"}),e.jsx(i,{size:"xsmall",color:"surface.text.gray.muted",children:"Green Loom Trusted Merchant"})]})]}),e.jsx(d,{onClick:()=>c(!0),children:e.jsx(i,{color:"surface.text.gray.subtle",children:"Settings"})}),e.jsx(d,{color:"negative",children:e.jsx(i,{color:"feedback.text.negative.intense",children:"Logout"})})]})]})]})]}),e.jsxs(et,{isOpen:m,onDismiss:()=>c(!1),size:"small",children:[e.jsx(tt,{title:"Settings"}),e.jsxs(it,{children:[e.jsx(se,{label:"xyz",placeholder:"Search in settings"}),e.jsx(i,{children:"This is a basic settings modal."})]}),e.jsx(nt,{children:e.jsx(Oe,{onClick:()=>c(!1),children:"Close"})})]})]}),e.jsx(n,{overflow:"hidden",position:"relative",borderRadius:{base:"none",m:"large"},borderTopRightRadius:{base:"none",m:"large"},borderBottomLeftRadius:"none",borderBottomRightRadius:"none",height:"100%",marginX:{base:"spacing.0",m:"spacing.3"},children:e.jsx(n,{height:"calc(100vh - 58px)",padding:"spacing.5",backgroundColor:"surface.background.gray.moderate",children:e.jsx(i,{margin:"spacing.5",children:o?"Resize your browser to see the desktop version with the search dropdown.":"Click on the search input to see the dropdown with search results. Type to filter items."})})})]})})},M=Lt.bind({});M.storyName="Search With Dropdown";const Rt=()=>e.jsxs(S,{children:[e.jsxs(C,{children:[e.jsx(wt,{}),e.jsx(x,{content:"View Announcements",children:e.jsx(b,{icon:H,onClick:f,accessibilityLabel:"View Announcements",isHighlighted:!0,size:"medium"})}),e.jsxs(j,{openInteraction:"click",children:[e.jsx(h,{size:"small",name:"Anurag Hazra"}),e.jsxs(v,{children:[e.jsx(y,{title:"Profile"}),e.jsxs(n,{display:"flex",gap:"spacing.4",padding:"spacing.4",alignItems:"center",children:[e.jsx(h,{size:"medium",name:"Anurag Hazra"}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(i,{size:"medium",weight:"semibold",children:"Anurag Hazra"}),e.jsx(i,{size:"xsmall",color:"surface.text.gray.muted",children:"Green Loom Trusted Merchant"})]})]}),e.jsx(d,{children:e.jsx(i,{color:"surface.text.gray.subtle",children:"Settings"})}),e.jsx(d,{color:"negative",children:e.jsx(i,{color:"feedback.text.negative.intense",children:"Logout"})})]})]})]}),e.jsx(n,{overflow:"hidden",position:"relative",borderRadius:{base:"none",m:"large"},borderTopRightRadius:{base:"none",m:"large"},borderBottomLeftRadius:"none",borderBottomRightRadius:"none",height:"100%",marginX:{base:"spacing.0",m:"spacing.3"},children:e.jsx(n,{height:"calc(100vh - 58px)",padding:"spacing.5",backgroundColor:"surface.background.gray.moderate",children:e.jsx(i,{margin:"spacing.5",children:"This example shows direct usage of `TopNavContext.Provider` using TopNavActions component to wrap search and preserve app color scheme for search overlays."})})})]}),w=Rt.bind({});w.storyName="TopNavActions With Context";const St=()=>{const{theme:t}=O(),{matchedDeviceType:s}=V({breakpoints:t.breakpoints}),o=s==="mobile";return e.jsx($,{children:e.jsxs(S,{children:[e.jsx(R,{children:o?e.jsx(J,{}):e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(D,{})}),e.jsx(W,{children:e.jsx(G,{items:[{title:"Home",href:"/home",icon:X},{href:"/payments",title:"Payments",icon:P}],children:({items:m})=>e.jsx(q,{children:m.map(c=>e.jsx(U,{...c},c.title))})})}),e.jsxs(C,{children:[e.jsx(Oe,{variant:"primary",size:"medium",children:"Activate"}),e.jsx(x,{content:"View Announcements",children:e.jsx(b,{icon:H,onClick:f,accessibilityLabel:"View Announcements",isHighlighted:!0,size:"medium"})}),e.jsxs(j,{openInteraction:"click",children:[e.jsx(h,{size:"small",name:"Anurag Hazra"}),e.jsxs(v,{children:[e.jsx(y,{title:"Profile"}),e.jsxs(n,{display:"flex",gap:"spacing.4",padding:"spacing.4",alignItems:"center",children:[e.jsx(h,{size:"medium",name:"Anurag Hazra"}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(i,{size:"medium",weight:"semibold",children:"Anurag Hazra"}),e.jsx(i,{size:"xsmall",color:"surface.text.gray.muted",children:"Green Loom Trusted Merchant"})]})]}),e.jsx(d,{children:e.jsx(i,{color:"surface.text.gray.subtle",children:"Settings"})}),e.jsx(d,{color:"negative",children:e.jsx(i,{color:"feedback.text.negative.intense",children:"Logout"})})]})]})]})]})}),e.jsx(n,{overflow:"hidden",position:"relative",borderRadius:{base:"none",m:"large"},borderTopRightRadius:{base:"none",m:"large"},borderBottomLeftRadius:"none",borderBottomRightRadius:"none",height:"100%",marginX:{base:"spacing.0",m:"spacing.3"},children:e.jsx(n,{height:"calc(100vh - 58px)",padding:"spacing.5",backgroundColor:"surface.background.gray.moderate",children:e.jsx(i,{margin:"spacing.5",children:"This example shows a Button inside TopNavActions alongside other action items."})})})]})})},N=St.bind({});N.storyName="With Button";const Pt=()=>e.jsx(ce,{variant:"neutral"}),z=Pt.bind({});z.storyName="Neutral Variant";const Ct=()=>e.jsx(ce,{variant:"primary"}),L=Ct.bind({});L.storyName="Primary Variant";var he,ue,pe;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const history = useHistory();
  const {
    theme
  } = useTheme();
  const {
    matchedDeviceType
  } = useBreakpoint({
    breakpoints: theme.breakpoints
  });
  const isMobile = matchedDeviceType === 'mobile';
  const [selectedProduct, setSelectedProduct] = React.useState<string | null>(null);
  return <DashboardBackground>
      <BaseBox>
        <TopNav>
          {isMobile ? <MobileTopNav /> : <>
              <TopNavBrand>
                <RazorpayLogoWhite />
              </TopNavBrand>
              <TopNavContent>
                <TabNav items={[{
              title: 'Home',
              href: '/home',
              icon: HomeIcon
            }, {
              href: '/payroll',
              title: 'Payroll',
              icon: {
                default: AutomatePayrollIcon,
                selected: AutomatePayrollFilledIcon
              },
              description: 'Automate payroll with ease.'
            }, {
              href: '/payments',
              title: 'Payments',
              icon: {
                default: AcceptPaymentsIcon,
                selected: AcceptPaymentsFilledIcon
              },
              description: 'Manage payments effortlessly.'
            }, {
              href: '/magic-checkout',
              title: 'Magic Checkout',
              icon: {
                default: ShoppingBagIcon,
                selected: MagicCheckoutFilledIcon
              },
              description: 'Fast, one-click checkout.'
            }, {
              href: '/rize',
              title: 'Rize',
              icon: AwardIcon,
              isAlwaysOverflowing: true,
              description: 'Boost your business growth.'
            }]}>
                  {({
                items,
                overflowingItems
              }) => {
                const activeProduct = overflowingItems.find(item => item.href === selectedProduct);
                return <>
                        <TabNavItems>
                          {items.map(item => <TabNavItemLink key={item.title} {...item} />)}
                        </TabNavItems>
                        {overflowingItems.length ? <Menu openInteraction="hover">
                            <TabNavItem title={activeProduct ? \`More: \${activeProduct.title}\` : 'More'} trailing={<ChevronDownIcon />} isActive={Boolean(activeProduct)} />
                            <MenuOverlay>
                              <MenuHeader title="Products for you" trailing={<Badge emphasis="subtle" color="notice">
                                    Recommended
                                  </Badge>} />
                              {overflowingItems.map(item => {
                        const OverflowIcon = item.icon && typeof item.icon === 'object' && 'default' in item.icon ? item.icon.default : item.icon;
                        return <MenuItem key={item.href} onClick={() => {
                          history.push(item.href!);
                          setSelectedProduct(item.href!);
                        }}>
                                    <ExploreItem icon={OverflowIcon as IconComponent} title={item.title} description={item.description!} />
                                  </MenuItem>;
                      })}
                              <MenuFooter>
                                <BladeLink href="" icon={ChevronRightIcon} iconPosition="right">
                                  View all products
                                </BladeLink>
                              </MenuFooter>
                            </MenuOverlay>
                          </Menu> : null}
                      </>;
              }}
                </TabNav>
              </TopNavContent>
              <TopNavActions>
                <Box width="200px">
                  <SearchInput placeholder="Search in payments" accessibilityLabel="Search Across Green Loom" />
                </Box>
                <Tooltip content="View Ecosystem Health">
                  <IconButton size="medium" icon={ActivityIcon} onClick={noop} isHighlighted={true} accessibilityLabel="View Ecosystem Health" />
                </Tooltip>
                <Tooltip content="View Announcements">
                  <IconButton icon={AnnouncementIcon} onClick={noop} isHighlighted={true} size="medium" accessibilityLabel="View Announcements" />
                </Tooltip>
                <Menu openInteraction="click">
                  <Avatar size="small" name="Anurag Hazra" />
                  <MenuOverlay>
                    <MenuHeader title="Profile" />
                    <Box display="flex" gap="spacing.4" padding="spacing.4" alignItems="center">
                      <Avatar size="medium" name="Anurag Hazra" />
                      <Box display="flex" flexDirection="column" gap="spacing.2">
                        <Text size="medium" weight="semibold">
                          Anurag Hazra
                        </Text>
                        <Text size="xsmall" color="surface.text.gray.muted">
                          Green Loom Trusted Merchant
                        </Text>
                      </Box>
                    </Box>
                    <MenuItem>
                      <Text color="surface.text.gray.subtle">Settings</Text>
                    </MenuItem>
                    <MenuItem color="negative">
                      <Text color="feedback.text.negative.intense">Logout</Text>
                    </MenuItem>
                  </MenuOverlay>
                </Menu>
              </TopNavActions>
            </>}
        </TopNav>
        <Box overflow="hidden" position="relative" borderRadius={{
        base: 'none',
        m: 'large'
      }} borderTopRightRadius={{
        base: 'none',
        m: 'large'
      }} borderBottomLeftRadius="none" borderBottomRightRadius="none" height="100%" marginX={{
        base: 'spacing.0',
        m: 'spacing.3'
      }}>
          <Box height="calc(100vh - 58px)" padding="spacing.5" backgroundColor="surface.background.gray.moderate">
            <Text margin="spacing.5">
              This is a minimal example usage of TopNav, checkout Full Dashboard Layout example for
              other features & integration details.
            </Text>
          </Box>
        </Box>
      </BaseBox>
    </DashboardBackground>;
}`,...(pe=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,xe,be;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:"() => <TopNavFullExample />",...(be=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var fe,je,ve;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const {
    theme
  } = useTheme();
  const {
    matchedDeviceType
  } = useBreakpoint({
    breakpoints: theme.breakpoints
  });
  const isMobile = matchedDeviceType === 'mobile';
  const [isSettingsModalOpen, setIsSettingsModalOpen] = React.useState(false);
  return <DashboardBackground>
      <BaseBox>
        <TopNav>
          {isMobile ? <MobileTopNav /> : <>
              <TopNavBrand>
                <RazorpayLogoWhite />
              </TopNavBrand>
              <TopNavContent>
                <TabNav items={[{
              title: 'Home',
              href: '/home',
              icon: HomeIcon
            }, {
              href: '/payments',
              title: 'Payments',
              icon: {
                default: AcceptPaymentsIcon,
                selected: AcceptPaymentsFilledIcon
              },
              description: 'Manage payments effortlessly.'
            }, {
              href: '/magic-checkout',
              title: 'Magic Checkout',
              icon: {
                default: ShoppingBagIcon,
                selected: MagicCheckoutFilledIcon
              },
              description: 'Fast, one-click checkout.'
            }, {
              href: '/rize',
              title: 'Rize',
              icon: AwardIcon,
              isAlwaysOverflowing: true,
              description: 'Boost your business growth.'
            }]}>
                  {({
                items
              }) => <TabNavItems>
                      {items.map(item => <TabNavItemLink key={item.title} {...item} />)}
                    </TabNavItems>}
                </TabNav>
              </TopNavContent>
              <TopNavActions>
                <TopNavSearchDropdown />
                <Tooltip content="View Announcements">
                  <IconButton icon={AnnouncementIcon} onClick={noop} accessibilityLabel="View Announcements" isHighlighted={true} size="medium" />
                </Tooltip>
                <Menu openInteraction="click">
                  <Avatar size="small" name="Anurag Hazra" />
                  <MenuOverlay>
                    <MenuHeader title="Profile" />
                    <Box display="flex" gap="spacing.4" padding="spacing.4" alignItems="center">
                      <Avatar size="medium" name="Anurag Hazra" />
                      <Box display="flex" flexDirection="column" gap="spacing.2">
                        <Text size="medium" weight="semibold">
                          Anurag Hazra
                        </Text>
                        <Text size="xsmall" color="surface.text.gray.muted">
                          Green Loom Trusted Merchant
                        </Text>
                      </Box>
                    </Box>
                    <MenuItem onClick={() => setIsSettingsModalOpen(true)}>
                      <Text color="surface.text.gray.subtle">Settings</Text>
                    </MenuItem>
                    <MenuItem color="negative">
                      <Text color="feedback.text.negative.intense">Logout</Text>
                    </MenuItem>
                  </MenuOverlay>
                </Menu>
              </TopNavActions>
            </>}
          <Modal isOpen={isSettingsModalOpen} onDismiss={() => setIsSettingsModalOpen(false)} size="small">
            <ModalHeader title="Settings" />
            <ModalBody>
              <SearchInput label="xyz" placeholder="Search in settings" />
              <Text>This is a basic settings modal.</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setIsSettingsModalOpen(false)}>Close</Button>
            </ModalFooter>
          </Modal>
        </TopNav>
        <Box overflow="hidden" position="relative" borderRadius={{
        base: 'none',
        m: 'large'
      }} borderTopRightRadius={{
        base: 'none',
        m: 'large'
      }} borderBottomLeftRadius="none" borderBottomRightRadius="none" height="100%" marginX={{
        base: 'spacing.0',
        m: 'spacing.3'
      }}>
          <Box height="calc(100vh - 58px)" padding="spacing.5" backgroundColor="surface.background.gray.moderate">
            <Text margin="spacing.5">
              {isMobile ? 'Resize your browser to see the desktop version with the search dropdown.' : 'Click on the search input to see the dropdown with search results. Type to filter items.'}
            </Text>
          </Box>
        </Box>
      </BaseBox>
    </DashboardBackground>;
}`,...(ve=(je=M.parameters)==null?void 0:je.docs)==null?void 0:ve.source}}};var ye,Te,ke;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <BaseBox>
      <TopNavActions>
        <TopNavSearchDropdownWithContext />
        <Tooltip content="View Announcements">
          <IconButton icon={AnnouncementIcon} onClick={noop} accessibilityLabel="View Announcements" isHighlighted={true} size="medium" />
        </Tooltip>
        <Menu openInteraction="click">
          <Avatar size="small" name="Anurag Hazra" />
          <MenuOverlay>
            <MenuHeader title="Profile" />
            <Box display="flex" gap="spacing.4" padding="spacing.4" alignItems="center">
              <Avatar size="medium" name="Anurag Hazra" />
              <Box display="flex" flexDirection="column" gap="spacing.2">
                <Text size="medium" weight="semibold">
                  Anurag Hazra
                </Text>
                <Text size="xsmall" color="surface.text.gray.muted">
                  Green Loom Trusted Merchant
                </Text>
              </Box>
            </Box>
            <MenuItem>
              <Text color="surface.text.gray.subtle">Settings</Text>
            </MenuItem>
            <MenuItem color="negative">
              <Text color="feedback.text.negative.intense">Logout</Text>
            </MenuItem>
          </MenuOverlay>
        </Menu>
      </TopNavActions>

      <Box overflow="hidden" position="relative" borderRadius={{
      base: 'none',
      m: 'large'
    }} borderTopRightRadius={{
      base: 'none',
      m: 'large'
    }} borderBottomLeftRadius="none" borderBottomRightRadius="none" height="100%" marginX={{
      base: 'spacing.0',
      m: 'spacing.3'
    }}>
        <Box height="calc(100vh - 58px)" padding="spacing.5" backgroundColor="surface.background.gray.moderate">
          <Text margin="spacing.5">
            This example shows direct usage of \`TopNavContext.Provider\` using TopNavActions
            component to wrap search and preserve app color scheme for search overlays.
          </Text>
        </Box>
      </Box>
    </BaseBox>;
}`,...(ke=(Te=w.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};var Ie,Be,Ae;N.parameters={...N.parameters,docs:{...(Ie=N.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  const {
    theme
  } = useTheme();
  const {
    matchedDeviceType
  } = useBreakpoint({
    breakpoints: theme.breakpoints
  });
  const isMobile = matchedDeviceType === 'mobile';
  return <DashboardBackground>
      <BaseBox>
        <TopNav>
          {isMobile ? <MobileTopNav /> : <>
              <TopNavBrand>
                <RazorpayLogoWhite />
              </TopNavBrand>
              <TopNavContent>
                <TabNav items={[{
              title: 'Home',
              href: '/home',
              icon: HomeIcon
            }, {
              href: '/payments',
              title: 'Payments',
              icon: AcceptPaymentsIcon
            }]}>
                  {({
                items
              }) => <TabNavItems>
                      {items.map(item => <TabNavItemLink key={item.title} {...item} />)}
                    </TabNavItems>}
                </TabNav>
              </TopNavContent>
              <TopNavActions>
                <Button variant="primary" size="medium">
                  Activate
                </Button>
                <Tooltip content="View Announcements">
                  <IconButton icon={AnnouncementIcon} onClick={noop} accessibilityLabel="View Announcements" isHighlighted={true} size="medium" />
                </Tooltip>
                <Menu openInteraction="click">
                  <Avatar size="small" name="Anurag Hazra" />
                  <MenuOverlay>
                    <MenuHeader title="Profile" />
                    <Box display="flex" gap="spacing.4" padding="spacing.4" alignItems="center">
                      <Avatar size="medium" name="Anurag Hazra" />
                      <Box display="flex" flexDirection="column" gap="spacing.2">
                        <Text size="medium" weight="semibold">
                          Anurag Hazra
                        </Text>
                        <Text size="xsmall" color="surface.text.gray.muted">
                          Green Loom Trusted Merchant
                        </Text>
                      </Box>
                    </Box>
                    <MenuItem>
                      <Text color="surface.text.gray.subtle">Settings</Text>
                    </MenuItem>
                    <MenuItem color="negative">
                      <Text color="feedback.text.negative.intense">Logout</Text>
                    </MenuItem>
                  </MenuOverlay>
                </Menu>
              </TopNavActions>
            </>}
        </TopNav>
        <Box overflow="hidden" position="relative" borderRadius={{
        base: 'none',
        m: 'large'
      }} borderTopRightRadius={{
        base: 'none',
        m: 'large'
      }} borderBottomLeftRadius="none" borderBottomRightRadius="none" height="100%" marginX={{
        base: 'spacing.0',
        m: 'spacing.3'
      }}>
          <Box height="calc(100vh - 58px)" padding="spacing.5" backgroundColor="surface.background.gray.moderate">
            <Text margin="spacing.5">
              This example shows a Button inside TopNavActions alongside other action items.
            </Text>
          </Box>
        </Box>
      </BaseBox>
    </DashboardBackground>;
}`,...(Ae=(Be=N.parameters)==null?void 0:Be.docs)==null?void 0:Ae.source}}};var Me,we,Ne;z.parameters={...z.parameters,docs:{...(Me=z.parameters)==null?void 0:Me.docs,source:{originalSource:'() => <TopNavFullExample variant="neutral" />',...(Ne=(we=z.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};var ze,Le,Re;L.parameters={...L.parameters,docs:{...(ze=L.parameters)==null?void 0:ze.docs,source:{originalSource:'() => <TopNavFullExample variant="primary" />',...(Re=(Le=L.parameters)==null?void 0:Le.docs)==null?void 0:Re.source}}};const Jt=["Minimal","FullExample","SearchWithDropdown","TopNavActionsWithContext","WithButton","NeutralVariant","PrimaryVariant"];export{A as FullExample,B as Minimal,z as NeutralVariant,L as PrimaryVariant,M as SearchWithDropdown,w as TopNavActionsWithContext,N as WithButton,Jt as __namedExportsOrder,$t as default};
