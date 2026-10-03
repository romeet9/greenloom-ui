import{dL as ge,aO as he,dO as xe,dH as fe,hH as ye,fL as Me,gH as be,ad as p,j as e,T as m,P as je,l4 as Te,t as ve,kk as ke,v as Ie,kh as s,B as r,kd as i,kf as c,n as C,a3 as k,l as B,gr as Be,gv as Oe,y as de,z as we,a5 as Ce,L as Se,f as D,h as _,X as Pe,ac as W,F as Le,m as Re,s as Ae,kg as ze,a7 as De,g0 as _e,l5 as We,cg as Ee,ce as Ve,cR as Fe,er as Ne,ki as Ue}from"./iframe-C1qQ09LF.js";import{g as Ye}from"./storybookArgTypes-DFfQV31s.js";import{S as $e}from"./StoryPageWrapper-CS0_5maI.js";import{S as qe}from"./Sandbox.web-B2xP21Qp.js";const O=je.button(n=>({all:"unset",padding:Ie(n.theme.spacing[4]),color:n.theme.colors.surface.text.gray.normal,backgroundColor:n.isTransparent?n.theme.colors.transparent:n.theme.colors.interactive.background.gray.faded,borderRadius:n.isTransparent?"0px":ke(n.theme.border.radius.medium),borderBottomWidth:ve(n.theme.border.width.thick),borderBottomStyle:"solid",borderBottomColor:n.theme.colors.transparent,cursor:"pointer",'&:hover, &[aria-expanded="true"]':{backgroundColor:n.isTransparent?n.theme.colors.transparent:n.theme.colors.interactive.background.gray.fadedHighlighted,color:n.theme.colors.interactive.text.primary.normal,borderBottomColor:n.theme.colors.interactive.border.primary.default},"&:focus-visible":Te({theme:n.theme})})),M=p.forwardRef(({children:n,...t},a)=>e.jsx(O,{ref:a,...t,isTransparent:!0,children:e.jsx(m,{color:"currentColor",weight:"semibold",children:n})})),E={payments:[{icon:ge,name:"Payment Gateway",description:"Payments on your Website & App",href:"/payment-gateway"},{icon:he,name:"Payment Links",description:"Payments Links for you",href:"/payment-links"},{icon:xe,name:"Payment Button",description:"Payments Buttons for your site",href:"/payment-button"},{icon:fe,name:"Payment Pages",description:"Payments Page for your Business",href:"/payment-pages"}],banking:[{icon:ye,name:"RazorpayX",description:"Business banking supercharged",href:"/x"},{icon:Me,name:"Current Account",description:"Payments Links for you",href:"/current-account"},{icon:be,name:"Razorpay Capital",description:"Payments Buttons for your site",href:"/capital"}]},w=({icon:n,name:t,description:a,href:l})=>e.jsx(s,{href:l,children:e.jsxs(r,{display:"flex",alignItems:"center",gap:"spacing.4",children:[e.jsx(r,{display:"flex",alignItems:"center",children:e.jsx(r,{borderRadius:"round",backgroundColor:"surface.background.primary.intense",padding:"spacing.3",height:"36px",width:"36px",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(n,{color:"surface.icon.staticWhite.normal"})})}),e.jsxs(r,{children:[e.jsx(m,{weight:"semibold",size:"large",children:t}),e.jsx(m,{color:"surface.text.gray.muted",children:a})]})]})});try{M.displayName="MenuTrigger",M.__docgenInfo={description:"",displayName:"MenuTrigger",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{w.displayName="CustomMenuItem",w.__docgenInfo={description:"",displayName:"CustomMenuItem",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"IconComponent"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}}}catch{}try{O.displayName="CustomMenuTrigger",O.__docgenInfo={description:"",displayName:"CustomMenuTrigger",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},isTransparent:{defaultValue:null,description:"",name:"isTransparent",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const Xe=()=>e.jsxs($e,{componentName:"Menu",componentDescription:"Action Menu displays a list of actions on temporary surfaces. They allow users to action(s) from multiple options. They appear when users interact with a button, action, or other control.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=90082-41948&m=dev&scaling=min-zoom&content-scaling=fixed&page-id=90026%3A23382&t=C1ehQJKwn0PpRa7Y-1",children:[e.jsx(Ce,{isFullWidth:!0,isDismissible:!1,color:"information",marginBottom:"spacing.7",title:"Menu Usage Note",description:e.jsxs(Se,{children:[e.jsxs(D,{children:["Menu is ",e.jsx(_,{weight:"semibold",children:"NOT"})," responsive by default. Some Menus should become BottomSheet or Drawer in mobile. Make sure to use correct component in mobile"]}),e.jsxs(D,{children:["Menus are ",e.jsx(_,{weight:"semibold",children:"NOT"})," selectable. Use Dropdown with Select or AutoComplete for selectable options"]})]})}),e.jsx(Pe,{children:"Usage"}),e.jsx(qe,{children:`
        import React from 'react';
        import { 
          Menu, 
          MenuDivider, 
          MenuItem, 
          MenuOverlay, 
          MenuHeader, 
          MenuFooter,
          Button,
          Box,
          Link,
          Text,
          CopyIcon,
          LogOutIcon,
          ShareIcon,
          TestIcon,
          TicketIcon,
          UserIcon
        } from '@greenloom/ui/components';
        
        function App() {
          return (
            <Box>
              <Menu>
                <Button>Menu</Button>
                <MenuOverlay>
                  <MenuHeader title="Saurabh Daware" subtitle="Admin" leading={<UserIcon />} />
                  <Box paddingY="spacing.4" paddingX="spacing.3">
                    <Text display="block" size="medium" weight="semibold">
                      Green Loom Pvt Ltd
                    </Text>
                    <Box display="flex" alignItems="center" gap="spacing.3">
                      <Text size="small">MID: Xyzyspoon13857</Text>
                      <Link variant="button" size="small" icon={CopyIcon} />
                    </Box>
                  </Box>
                  <Button variant="tertiary" isFullWidth size="xsmall">
                    Switch Merchant
                  </Button>
                  <MenuDivider marginTop="spacing.3" />
                  <MenuItem
                    title="Enable Test Mode"
                    leading={<TestIcon size="small" />}
                    description="Enable test mode"
                  />
                  <MenuItem
                    title="View Support Tickets"
                    leading={<TicketIcon size="small" />}
                    description="View all your support tickets"
                  />
                  <Menu>
                    <MenuItem leading={<ShareIcon size="small" />} title="Share Profile" />
                    <MenuOverlay>
                      <MenuItem title="Mail" />
                      <Menu>
                        <MenuItem title="Instagram" />
                        <MenuOverlay>
                          <MenuItem title="Instagram Stories" />
                          <MenuItem title="Instagram Post" />
                          <MenuItem title="Instagram Chat" />
                        </MenuOverlay>
                      </Menu>
                    </MenuOverlay>
                  </Menu>
                  <MenuItem
                    leading={<LogOutIcon size="small" color="feedback.icon.negative.intense" />}
                    title="Log Out"
                    color="negative"
                  />
                  <MenuFooter>
                    <Text variant="caption" size="small">
                      Partner with us and start earning on every referral
                    </Text>
                  </MenuFooter>
                </MenuOverlay>
              </Menu>
            </Box>
          )
          
        }

        export default App;
        `})]}),He={title:"Components/Menu",component:i,tags:["autodocs"],argTypes:{...Ye(),trigger:{table:{disable:!0}}},parameters:{docs:{page:Xe}}},P=e.jsxs(e.Fragment,{children:[e.jsx(ze,{title:"Saurabh Daware",subtitle:"Admin",leading:e.jsx(De,{})}),e.jsxs(r,{paddingBottom:"spacing.4",paddingX:"spacing.3",children:[e.jsx(m,{display:"block",size:"medium",weight:"semibold",children:"Green Loom Pvt Ltd"}),e.jsxs(r,{display:"flex",alignItems:"center",gap:"spacing.3",children:[e.jsx(m,{size:"small",children:"MID: Xyzyspoon13857"}),e.jsx(B,{variant:"button",size:"small",icon:_e})]})]}),e.jsx(C,{variant:"tertiary",isFullWidth:!0,size:"xsmall",children:"Switch Merchant"}),e.jsx(We,{marginY:"spacing.3"}),e.jsx(s,{title:"Enable Test Mode",leading:e.jsx(Ee,{size:"small"}),description:"Enable test mode"}),e.jsx(s,{title:"View Support Tickets",leading:e.jsx(Ve,{size:"small"}),description:"View all your support tickets"}),e.jsxs(i,{children:[e.jsx(s,{leading:e.jsx(Fe,{size:"small"}),title:"Share Profile"}),e.jsxs(c,{children:[e.jsx(s,{title:"Mail"}),e.jsxs(i,{children:[e.jsx(s,{title:"Instagram"}),e.jsxs(c,{children:[e.jsx(s,{title:"Instagram Stories"}),e.jsx(s,{title:"Instagram Post"}),e.jsx(s,{title:"Instagram Chat"})]})]})]})]}),e.jsx(de,{content:"Log out from Saurabh Daware's Profile",children:e.jsx(s,{leading:e.jsx(Ne,{size:"small",color:"feedback.icon.negative.intense"}),title:"Log Out",color:"negative"})}),e.jsx(Ue,{children:e.jsx(m,{variant:"caption",size:"small",children:"Partner with us and start earning on every referral"})})]}),g=({trigger:n,...t})=>e.jsxs(r,{children:[e.jsxs(i,{...t,children:[n,e.jsx(c,{children:P})]}),e.jsx(m,{marginTop:"spacing.9",children:"Open Menu to know why these random blocks are here"}),e.jsxs(Re,{themeTokens:Ae,colorScheme:"dark",children:[e.jsx(r,{marginTop:"spacing.4",marginLeft:"-12px",backgroundColor:"feedback.background.negative.intense",height:"100px",width:"100px"}),e.jsx(r,{marginLeft:"200px",borderRadius:"round",backgroundColor:"feedback.background.negative.intense",height:"100px",width:"100px"})]})]}),Ge=n=>e.jsxs(e.Fragment,{children:[e.jsx(m,{marginY:"spacing.4",children:"Menu component is flexible enough to let you create custom menus with custom triggers and custom items"}),e.jsxs(r,{display:"flex",children:[e.jsxs(i,{...n,children:[e.jsx(M,{children:"Payments"}),e.jsxs(c,{children:[e.jsx(r,{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"spacing.3",children:E.payments.map(t=>e.jsx(w,{...t},t.name))}),e.jsx(B,{icon:W,iconPosition:"right",size:"large",marginY:"spacing.3",marginX:"spacing.4",href:"https://greenloom.ai/",children:"View All Products"})]})]}),e.jsxs(i,{...n,children:[e.jsx(M,{children:"Banking+"}),e.jsxs(c,{children:[e.jsx(r,{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"spacing.3",children:E.banking.map(t=>e.jsx(w,{...t},t.name))}),e.jsx(B,{icon:W,iconPosition:"right",size:"large",marginY:"spacing.3",marginX:"spacing.4",href:"https://greenloom.ai/x/",children:"View All Products"})]})]}),e.jsxs(i,{...n,children:[e.jsx(M,{children:"Payroll"}),e.jsxs(c,{children:[e.jsx(s,{title:"For SMEs",href:"/payroll"}),e.jsx(s,{title:"For Enterprises",href:"/payroll/enterprises",titleSuffix:e.jsx(Le,{color:"positive",size:"small",children:"NEW"})})]})]})]})]}),Je=({trigger:n,...t})=>{const[a,l]=p.useState(!1);return e.jsxs(r,{children:[e.jsx(C,{marginY:"spacing.4",onClick:()=>l(!0),children:"Open Menu"}),e.jsxs(i,{...t,isOpen:a,onOpenChange:({isOpen:I})=>l(I),children:[n,e.jsx(c,{children:P})]})]})},h=g.bind({});h.args={trigger:e.jsx(k,{name:"Saurabh Daware",size:"large",color:"primary"})};const x=g.bind({});x.args={trigger:e.jsx(k,{size:"large",color:"primary"})};const f=Ge.bind({});f.args={openInteraction:"hover"};const V=["Payments","Settlements","Manage Account","Support"],Qe={Payments:["Create a payment link for the latest abandoned checkout.","Share a one-time payment page with [email].","Retry the failed auto-debit for invoice #INV-2031.","Generate a reminder for overdue payment #PAY-7782."],Settlements:["Show today’s expected settlement timeline.","Reconcile payout #PAYOUT-1147 with bank statement.","Download T+1 settlement report for this week.","Investigate deduction marked as adjustment #ADJ-902."],"Manage Account":["Enable AMEX cards on my checkout page.","Update the business name on my billing label.","Add [email] as a Finance user.","Disable 'Cash on Delivery' for orders above ₹5,000."],Support:["Why was chargeback #CB-4451 raised?","Escalate open ticket #SUP-982 to priority support.","Share dispute evidence checklist with my team.","Draft a status update for customer [email]."]},b=n=>{const t=p.useRef([]),[a,l]=p.useState([]),[I,me]=p.useState(null);return p.useLayoutEffect(()=>{const u=()=>{var R,A;const d=V.map((S,pe)=>{var z;return(z=t.current[pe])==null?void 0:z.getBoundingClientRect()}),o=(R=d[0])==null?void 0:R.left,L=(A=d[d.length-1])==null?void 0:A.right;o==null||L==null||(l(d.map(S=>S?Math.round(o-S.left):0)),me(Math.round(L-o)))};return u(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)}},[]),e.jsx(r,{paddingTop:"spacing.10",children:e.jsx(r,{display:"flex",gap:"spacing.4",children:V.map((u,d)=>e.jsx(r,{ref:o=>{if(o&&"getBoundingClientRect"in o){t.current[d]=o;return}t.current[d]=null},children:e.jsxs(i,{...n,children:[e.jsx(M,{children:u}),e.jsx(c,{width:I!=null?`${I}px`:void 0,offset:{mainAxis:12,crossAxis:a[d]??0},children:Qe[u].map(o=>e.jsx(s,{title:o},`${u}-${o}`))})]})},u))})})},j=n=>{const[t,a]=p.useState(!1);return e.jsxs(r,{display:"flex",flexDirection:"row",alignItems:"center",gap:"spacing.8",children:[e.jsx(g,{...n,trigger:e.jsx(C,{children:"Button Trigger"})}),e.jsx(g,{...n,trigger:e.jsx(k,{name:"Saurabh Daware",size:"large"})}),e.jsx(g,{...n,onOpenChange:({isOpen:l})=>{a(l)},trigger:e.jsx(B,{variant:"button",icon:t?Be:Oe,iconPosition:"right",children:"Link Trigger"})}),e.jsx(g,{...n,trigger:e.jsx(O,{children:"Custom Menu Trigger"})})]})},y=Je.bind({});y.args={trigger:e.jsx(k,{name:"Saurabh Daware",size:"large",color:"primary"})};const T=n=>e.jsx(r,{paddingTop:"spacing.10",children:e.jsx(de,{content:"Saurabh Daware's Profile",placement:"top",children:e.jsx(we,{children:e.jsxs(i,{...n,children:[e.jsx(k,{name:"Saurabh Daware"}),e.jsx(c,{children:P})]})})})}),v=n=>{const t=["bottom-start","bottom-end","top-start","top-end","left","right"];return e.jsx(r,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"spacing.8",paddingTop:"spacing.15",paddingBottom:"spacing.15",children:t.map(a=>e.jsxs(i,{...n,defaultPlacement:a,children:[e.jsx(C,{children:a}),e.jsxs(c,{children:[e.jsx(s,{title:`${a} item 1`}),e.jsx(s,{title:`${a} item 2`}),e.jsx(s,{title:`${a} item 3`})]})]},a))})};var F,N,U;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`({
  trigger,
  ...args
}) => {
  return <Box>
      <Menu {...args}>
        {trigger}
        <MenuOverlay>{accountsMenuOverlayContent}</MenuOverlay>
      </Menu>
      <Text marginTop="spacing.9">Open Menu to know why these random blocks are here</Text>
      <BladeProvider themeTokens={bladeTheme} colorScheme="dark">
        <Box marginTop="spacing.4" marginLeft="-12px" backgroundColor="feedback.background.negative.intense" height="100px" width="100px" />
        <Box marginLeft="200px" borderRadius="round" backgroundColor="feedback.background.negative.intense" height="100px" width="100px" />
      </BladeProvider>
    </Box>;
}`,...(U=(N=h.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var Y,$,q;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`({
  trigger,
  ...args
}) => {
  return <Box>
      <Menu {...args}>
        {trigger}
        <MenuOverlay>{accountsMenuOverlayContent}</MenuOverlay>
      </Menu>
      <Text marginTop="spacing.9">Open Menu to know why these random blocks are here</Text>
      <BladeProvider themeTokens={bladeTheme} colorScheme="dark">
        <Box marginTop="spacing.4" marginLeft="-12px" backgroundColor="feedback.background.negative.intense" height="100px" width="100px" />
        <Box marginLeft="200px" borderRadius="round" backgroundColor="feedback.background.negative.intense" height="100px" width="100px" />
      </BladeProvider>
    </Box>;
}`,...(q=($=x.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var X,H,G;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  return <>
      <Text marginY="spacing.4">
        Menu component is flexible enough to let you create custom menus with custom triggers and
        custom items
      </Text>
      <Box display="flex">
        <Menu {...args}>
          <MenuTrigger>Payments</MenuTrigger>
          <MenuOverlay>
            <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap="spacing.3">
              {navMenuItems.payments.map(product => <CustomMenuItem key={product.name} {...product} />)}
            </Box>
            <Link icon={ArrowRightIcon} iconPosition="right" size="large" marginY="spacing.3" marginX="spacing.4" href="https://greenloom.ai/">
              View All Products
            </Link>
          </MenuOverlay>
        </Menu>

        <Menu {...args}>
          <MenuTrigger>Banking+</MenuTrigger>
          <MenuOverlay>
            <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap="spacing.3">
              {navMenuItems.banking.map(product => <CustomMenuItem key={product.name} {...product} />)}
            </Box>
            <Link icon={ArrowRightIcon} iconPosition="right" size="large" marginY="spacing.3" marginX="spacing.4" href="https://greenloom.ai/x/">
              View All Products
            </Link>
          </MenuOverlay>
        </Menu>

        <Menu {...args}>
          <MenuTrigger>Payroll</MenuTrigger>
          <MenuOverlay>
            <MenuItem title="For SMEs" href="/payroll" />
            <MenuItem title="For Enterprises" href="/payroll/enterprises" titleSuffix={<Badge color="positive" size="small">
                  NEW
                </Badge>} />
          </MenuOverlay>
        </Menu>
      </Box>
    </>;
}`,...(G=(H=f.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var J,Q,K;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`(props: MenuProps): React.ReactElement => {
  type TriggerAnchorElement = {
    getBoundingClientRect: () => DOMRect;
  };
  const anchorRefs = React.useRef<(TriggerAnchorElement | null)[]>([]);
  const [crossAxisOffsets, setCrossAxisOffsets] = React.useState<number[]>([]);
  const [overlayWidth, setOverlayWidth] = React.useState<number | null>(null);
  React.useLayoutEffect(() => {
    const computeOffsets = (): void => {
      const anchorRects = fixedAnchorButtons.map((_, index) => anchorRefs.current[index]?.getBoundingClientRect());
      const anchorLeft = anchorRects[0]?.left;
      const lastAnchorRight = anchorRects[anchorRects.length - 1]?.right;
      if (anchorLeft == null || lastAnchorRight == null) {
        return;
      }
      setCrossAxisOffsets(anchorRects.map(rect => {
        if (!rect) {
          return 0;
        }
        return Math.round(anchorLeft - rect.left);
      }));
      setOverlayWidth(Math.round(lastAnchorRight - anchorLeft));
    };
    computeOffsets();
    window.addEventListener('resize', computeOffsets);
    return () => {
      window.removeEventListener('resize', computeOffsets);
    };
  }, []);
  return <Box paddingTop="spacing.10">
      <Box display="flex" gap="spacing.4">
        {fixedAnchorButtons.map((buttonLabel, index) => {
        return <Box key={buttonLabel} ref={element => {
          if (element && 'getBoundingClientRect' in element) {
            anchorRefs.current[index] = element;
            return;
          }
          anchorRefs.current[index] = null;
        }}>
              <Menu {...props}>
                <MenuTrigger>{buttonLabel}</MenuTrigger>
                <MenuOverlay width={overlayWidth != null ? \`\${overlayWidth}px\` : undefined} offset={{
              mainAxis: 12,
              crossAxis: crossAxisOffsets[index] ?? 0
            }}>
                  {fixedAnchorMenuItemsByTrigger[buttonLabel].map(menuItemTitle => <MenuItem key={\`\${buttonLabel}-\${menuItemTitle}\`} title={menuItemTitle} />)}
                </MenuOverlay>
              </Menu>
            </Box>;
      })}
      </Box>
    </Box>;
}`,...(K=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};var Z,ee,ne;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`(props: MenuProps): React.ReactElement => {
  const [isLinkTriggerOpen, setIsLinkTriggerOpen] = React.useState(false);
  return <Box display="flex" flexDirection="row" alignItems="center" gap="spacing.8">
      <MenuTemplate {...props} trigger={<Button>Button Trigger</Button>} />
      <MenuTemplate {...props} trigger={<Avatar name="Saurabh Daware" size="large" />} />
      <MenuTemplate {...props} onOpenChange={({
      isOpen
    }) => {
      setIsLinkTriggerOpen(isOpen);
    }} trigger={<Link variant="button" icon={isLinkTriggerOpen ? ChevronUpIcon : ChevronDownIcon} iconPosition="right">
            Link Trigger
          </Link>} />
      <MenuTemplate {...props} trigger={<CustomMenuTrigger>Custom Menu Trigger</CustomMenuTrigger>} />
    </Box>;
}`,...(ne=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,ae;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`({
  trigger,
  ...args
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <Box>
      <Button marginY="spacing.4" onClick={() => setIsOpen(true)}>
        Open Menu
      </Button>
      <Menu {...args} isOpen={isOpen} onOpenChange={({
      isOpen
    }) => setIsOpen(isOpen)}>
        {trigger}
        <MenuOverlay>{accountsMenuOverlayContent}</MenuOverlay>
      </Menu>
    </Box>;
}`,...(ae=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,ie,oe;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`(props: MenuProps): React.ReactElement => {
  return <Box paddingTop="spacing.10">
      <Tooltip content="Saurabh Daware's Profile" placement="top">
        <TooltipInteractiveWrapper>
          <Menu {...props}>
            <Avatar name="Saurabh Daware" />
            <MenuOverlay>{accountsMenuOverlayContent}</MenuOverlay>
          </Menu>
        </TooltipInteractiveWrapper>
      </Tooltip>
    </Box>;
}`,...(oe=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ce,le,ue;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`(props: MenuProps): React.ReactElement => {
  const placements = ['bottom-start', 'bottom-end', 'top-start', 'top-end', 'left', 'right'] as const;
  return <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap="spacing.8" paddingTop="spacing.15" paddingBottom="spacing.15">
      {placements.map(placement => <Menu key={placement} {...props} defaultPlacement={placement}>
          <Button>{placement}</Button>
          <MenuOverlay>
            <MenuItem title={\`\${placement} item 1\`} />
            <MenuItem title={\`\${placement} item 2\`} />
            <MenuItem title={\`\${placement} item 3\`} />
          </MenuOverlay>
        </Menu>)}
    </Box>;
}`,...(ue=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};const Ke=["Default","WithAvatarIcon","CustomItems","MenuWithCustomOffsets","WithDifferentTriggers","Controlled","WithTooltip","WithPlacement"],rn=Object.freeze(Object.defineProperty({__proto__:null,Controlled:y,CustomItems:f,Default:h,MenuWithCustomOffsets:b,WithAvatarIcon:x,WithDifferentTriggers:j,WithPlacement:v,WithTooltip:T,__namedExportsOrder:Ke,default:He},Symbol.toStringTag,{value:"Module"}));export{rn as m};
