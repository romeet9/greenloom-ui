import{jW as C,ad as I,j as e,B as i,jX as q,ko as K,da as oe,T as j,hX as re,eh as Y,n as B,bb as $,X as ce,a5 as le,jV as de,a$ as b,eB as pe,hg as me,be as ue,fB as he,b5 as fe,a7 as Q,gK as ge,fc as xe,b7 as ve,dL as Ie,c5 as Se,bw as be,o as R,gA as E,d7 as w,bR as T,cT as Z,ay as ye,gV as Ne,G as Ce,hb as je,gb as Be,eV as ke,g3 as Le,kn as y,kv as Ae,cg as Pe,b3 as Re,gN as Ee,aI as we,aJ as Te,gt as Oe,b2 as Fe,y as Me,F as He}from"./iframe-C1qQ09LF.js";import{L as Ue}from"./react-router-dom-qPKeHXvg.js";import{a as De,b as ze}from"./RazorpayLogo-Cs3mU7R0.js";import{d as N}from"./baseCode-DnWYDQ6N.js";import{s as Ve}from"./StoryRouter-CDfSoprG.js";import{g as Je}from"./storybookArgTypes-DFfQV31s.js";import{S as We}from"./StoryPageWrapper-CS0_5maI.js";import{S as Ge}from"./Sandbox.web-B2xP21Qp.js";import{u as ee,S as _e,R as Xe,m as O}from"./react-router-CrS3lpF2.js";const qe={"App.tsx":N`import React from 'react';
  import { BrowserRouter } from 'react-router-dom';
  import SideNavExample from './SideNavExample';
  
  const App = () => {
    return (
      <BrowserRouter>
        <SideNavExample />
      </BrowserRouter>
    );
  };

  export default App;
  `,"SideNavExample.tsx":N`import React from 'react';
  import {
    matchPath,
    useLocation,
    Link,
    Routes,
    Route,
  } from 'react-router-dom';
  import {
    SideNavBody,
    SideNav,
    SideNavLink,
    SideNavLevel,
    SideNavSection,
    SideNavFooter,
    SideNavItem,
    Box,
    Button,
    Indicator,
    Text,
    Switch as BladeSwitch,
    BoxIcon,
    SettingsIcon,
    UserIcon,
    MenuIcon,
  } from '@greenloom/loom/components';
  import { navItemsJSON } from './navItemsJSON';

  const Page = ({ match }) => (
    <Box padding={{ base: 'spacing.2', m: 'spacing.6' }}>
      <pre>
        <code>{JSON.stringify(match, null, 4)}</code>
      </pre>
    </Box>
  );
  
  /**
   * Returns all hrefs in child tree for given item
   */ 
  const getAllChildHrefs = (
    items
  ) => {
    const hrefs = [];

    if (!items) {
      return [];
    }

    items.forEach((item) => {
      if (item.href) {
        hrefs.push(item.href);
      }
      if (item.items) {
        hrefs.push(...getAllChildHrefs(item.items));
      }
    });

    return hrefs;
  };

  /**
   * Loops over JSON to return all routes including child routes 
   */ 
  const getAllRoutesFromJSON = () => {
    let allHrefs = [];

    navItemsJSON.forEach((section) => {
      if (section.items) {
        allHrefs = allHrefs.concat(getAllChildHrefs(section.items));
      }
    });

    return allHrefs;
  };

  /**
   * Returns if the given href or one of the items from activeOnLinks are active
   */ 
  const isItemActive = (
    location,
    { href, activeOnLinks }
  ) => {
    const isCurrentPathActive = Boolean(matchPath(location.pathname, href ?? ''));

    const isSubItemActive = Boolean(
      activeOnLinks?.find((href) => matchPath(location.pathname, href))
    );

    return isCurrentPathActive || isSubItemActive;
  };

  /**
   * React Router v6 Wrapper around Blade's SideNavLink that passes active state of item based on react router state
   */ 
  const NavLink = (props) => {
    const location = useLocation();

    return (
      <SideNavLink
        {...props}
        as={Link}
        isActive={isItemActive(location, {
          href: props.href,
          activeOnLinks: props.activeOnLinks,
        })}
      />
    );
  };

  const SideNavExample = () => {
    const [isMobileOpen, setIsMobileOpen] = React.useState(false);
    const [isTestModeActive, setIsTestModeActive] = React.useState(false);
    const location = useLocation();

    /**
     * Keeps the section expanded on load if one if the items are active
     */ 
    const getDefaultSectionExpanded = (items) => {
      const activeItem = items.find((l1Item) =>
        isItemActive(location, {
          href: l1Item.href,
          activeOnLinks: getAllChildHrefs(l1Item.items),
        })
      );

      return Boolean(activeItem);
    };

    return (
      <Box minHeight="500px">
        <SideNav isOpen={isMobileOpen} onDismiss={() => setIsMobileOpen(false)}>
          <SideNavBody>
            {navItemsJSON.map((l1Sections) => {
              return (
                <SideNavSection
                  key={l1Sections.title}
                  title={l1Sections.title}
                  maxVisibleItems={l1Sections.maxItemsVisible}
                  defaultIsExpanded={getDefaultSectionExpanded(
                    l1Sections.items.slice(l1Sections.maxItemsVisible)
                  )}
                >
                  {l1Sections.items.map((l1Item) => {
                    if (!l1Item.items) {
                      return <NavLink key={l1Item.title} {...l1Item} />;
                    }

                    return (
                      <NavLink
                        key={l1Item.title}
                        {...l1Item}
                        activeOnLinks={getAllChildHrefs(l1Item.items)}
                        href={l1Item.items[0].href}
                      >
                        <SideNavLevel key={l1Item.title}>
                          {l1Item.items?.map((l2Item) => {
                            if (!l2Item.items) {
                              return <NavLink key={l2Item.title} {...l2Item} />;
                            }

                            return (
                              <NavLink
                                key={l2Item.title}
                                {...l2Item}
                                activeOnLinks={getAllChildHrefs(l2Item.items)}
                                href={undefined}
                              >
                                <SideNavLevel key={l2Item.title}>
                                  {l2Item.items?.map((l3Item) => {
                                    return (
                                      <NavLink key={l3Item.title} {...l3Item} />
                                    );
                                  })}
                                </SideNavLevel>
                              </NavLink>
                            );
                          })}
                        </SideNavLevel>
                      </NavLink>
                    );
                  })}
                </SideNavSection>
              );
            })}
          </SideNavBody>
          <SideNavFooter>
            <SideNavItem
              as="label"
              title="Test Mode"
              leading={
                <Indicator
                  color={isTestModeActive ? 'notice' : 'positive'}
                  emphasis="intense"
                  accessibilityLabel="Test mode status"
                />
              }
              backgroundColor={
                isTestModeActive ? 'feedback.background.notice.subtle' : undefined
              }
              trailing={
                <BladeSwitch
                  accessibilityLabel="Toggle test mode"
                  size="small"
                  isChecked={isTestModeActive}
                  onChange={({ isChecked }) => {
                    setIsTestModeActive(isChecked);
                  }}
                />
              }
            />
            <NavLink
              title="Settings"
              icon={SettingsIcon}
              href="/settings/user"
              activeOnLinks={['/settings/user', '/settings/account']}
            >
              <SideNavLevel>
                <NavLink
                  icon={UserIcon}
                  title="User Settings"
                  href="/settings/user"
                />
                <NavLink
                  icon={BoxIcon}
                  title="Account Settings"
                  href="/settings/account"
                />
              </SideNavLevel>
            </NavLink>
          </SideNavFooter>
        </SideNav>

        <Box marginLeft={{ base: 'spacing.0', m: '300px' }} paddingTop="spacing.10">
          <Button
            display={{ base: undefined, m: 'none' }}
            variant="tertiary"
            icon={MenuIcon}
            onClick={() => setIsMobileOpen(true)}
            position="fixed"
            top="spacing.4"
            right="spacing.4"
            zIndex="2"
          />
          <Text 
            marginY="spacing.4" 
            display={{ base: undefined, m: 'none' }}
          >
            For Desktop version, click Preview tab below to open preview in fullscreen
          </Text>
          <Routes>
            {[...getAllRoutesFromJSON(), '/settings/user', '/settings/account'].map(
              (route) => (
                <Route
                  key={route}
                  path={route}
                  element={<Page match={{ route }} />}
                />
              )
            )}
          </Routes>
        </Box>
      </Box>
    );
  };

  export default SideNavExample;
  `,"navItemsJSON.tsx":N`import React from 'react';
  import {
    ArrowUpRightIcon,
    BillIcon,
    BuildingIcon,
    CashIcon,
    CodeSnippetIcon,
    ConfettiIcon,
    CreditCardIcon,
    FilePlusIcon,
    FileTextIcon,
    HeadsetIcon,
    LayoutIcon,
    PlusIcon,
    AutomatePayrollIcon,
    ReportsIcon,
    StampIcon,
    UserCheckIcon,
    UserIcon,
    Tooltip,
    Button,
  } from '@greenloom/loom/components';


  export const navItemsJSON = [
    {
      type: 'section',
      title: undefined,
      items: [
        {
          icon: LayoutIcon,
          title: 'Home',
          href: '/app/dashboard',
        },
        {
          icon: ArrowUpRightIcon,
          title: 'Payouts',
          href: '/app/payouts',
          tooltip: {
            content: 'Open Payouts (Cmd + O)',
          },
          trailing: (
            <Tooltip content="Create Payout (Cmd + P)" placement="right">
              <Button icon={PlusIcon} size="xsmall" variant="tertiary" accessibilityLabel="Create Payout" />
            </Tooltip>
          ),
        },
        {
          icon: FileTextIcon,
          title: 'Account Statement',
          href: '/app/account-statement',
        },
      ],
    },
    {
      type: 'section',
      title: 'Offerings',
      maxItemsVisible: 3,
      items: [
        {
          icon: CreditCardIcon,
          title: 'Corporate Credit Card',
          href: '/app/corporate-credit-card',
          items: [
            {
              icon: UserIcon,
              title: 'User Profile',
              href: '/app/user/profile',
            },
            {
              icon: BuildingIcon,
              title: 'Business Profile',
              href: '/app/business/profile',
              items: [
                {
                  title: 'Business Banks',
                  href: '/app/business/banks',
                },
                {
                  title: 'Business Routes',
                  href: '/app/business/routes',
                },
              ],
            },
            {
              icon: FilePlusIcon,
              title: 'Billing',
              href: '/app/billing',
            },
          ],
        },
        {
          icon: BillIcon,
          title: 'Vendor Payments',
          href: '/app/vendor-payments',
        },
        {
          icon: StampIcon,
          title: 'Tax Payments',
          href: '/app/tax-payments',
        },
        {
          icon: AutomatePayrollIcon,
          title: 'Payroll',
          href: '/app/payroll',
        },
        {
          icon: ReportsIcon,
          title: 'Reports',
          href: '/app/reports',
        },
        {
          icon: UserCheckIcon,
          title: 'Public Profile',
          href: '/app/public-profile',
        },
        {
          icon: CodeSnippetIcon,
          title: 'Code Snippet',
          href: '/app/code-snippet',
        },
        {
          icon: HeadsetIcon,
          title: 'Support',
          href: '/app/support',
        },
      ],
    },
    {
      type: 'section',
      title: 'Miscellaneous',
      items: [
        {
          icon: CashIcon,
          title: 'Cost Center',
          href: '/app/cost-center',
        },
        {
          icon: ConfettiIcon,
          title: 'Offers',
          href: '/app/confetti',
        },
      ],
    },
  ];
  `},Ke=()=>e.jsxs(We,{componentName:"SideNav",componentDescription:"The side navigation is positioned along the left side of the screen that provides quick access to different sections or functionalities of the application.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=87921-138303&m=dev&scaling=min-zoom&page-id=87588%3A51157",children:[e.jsx(ce,{children:"Usage (with React Router v6)"}),e.jsx(le,{color:"notice",title:"State Management Note",description:`SideNav component requires you to handle active link and active menu item on consumer end
        since the component is detached from React Router. The example below includes some boilerplate in handling these active states using React Router v6. Make sure to test your edge cases while implementing. Checkout API Decision of SideNav for more details.`,isFullWidth:!0,isDismissible:!1}),e.jsx(Ge,{files:qe,editorHeight:600,hideNavigation:!1,openFile:"App.tsx,navItemsJSON.tsx,SideNavExample.tsx"})]}),Ye={title:"Components/SideNav",component:C,tags:["autodocs"],argTypes:{...Je()},parameters:{docs:{page:Ke}},decorators:[Ve(void 0,{initialEntries:["/app/dashboard"]})]},$e=({match:t})=>e.jsx(i,{padding:{base:"spacing.2",m:"spacing.6"},children:e.jsx(j,{color:"surface.text.gray.normal",fontFamily:"code",children:e.jsx("pre",{style:{margin:0,padding:"16px",borderRadius:"8px",color:"inherit",fontFamily:"inherit",fontSize:"13.5px",lineHeight:"1.6"},children:e.jsx("code",{children:JSON.stringify(t,null,4)})})})}),te=({children:t})=>e.jsxs(i,{paddingX:"spacing.4",backgroundColor:"surface.background.gray.moderate",height:"100%",display:"flex",flexDirection:"column",children:[e.jsxs(i,{position:"relative",display:"flex",height:"56px",alignItems:"center",width:"100%",children:[e.jsx(i,{position:"absolute",bottom:"-10px",left:"0px",children:e.jsx(De,{})}),e.jsx(i,{width:{base:void 0,m:"264px"},textAlign:"center",children:e.jsx(ze,{})}),e.jsx(i,{flex:"1",display:{base:"none",m:"block"},children:e.jsx(b,{width:"100%",height:"12px",borderRadius:"medium"})}),e.jsxs(i,{flex:"3",marginLeft:"spacing.6",display:{base:"none",m:"block"},children:[e.jsx(b,{marginBottom:"spacing.2",width:"100%",height:"12px",borderRadius:"medium"}),e.jsx(b,{width:"100%",height:"12px",borderRadius:"medium"})]})]}),e.jsx(i,{position:"relative",borderRadius:"large",overflow:"hidden",paddingTop:"spacing.4",flex:"1",borderWidth:"thin",borderColor:"surface.border.gray.muted",elevation:"midRaised",backgroundColor:"surface.background.gray.intense",borderBottomWidth:"none",borderBottomRightRadius:"none",borderBottomLeftRadius:"none",children:t})]}),ie=[{type:"section",title:void 0,items:[{icon:pe,title:"Home",href:"/app/dashboard"},{icon:me,title:"Payouts",href:"/app/payouts",tooltip:{content:"Open Payouts (Cmd + O)"},trailing:e.jsx(Me,{content:"Create Payout (Cmd + P)",placement:"right",children:e.jsx(B,{icon:$,size:"xsmall",variant:"tertiary",accessibilityLabel:"Create payout"})})},{icon:ue,title:"Account Statement",href:"/app/account-statement"}]},{type:"section",title:"International Payments",items:[{icon:fe,title:"Global",href:"/app/global",titleSuffix:e.jsx(He,{color:"positive",size:"small",children:"New"}),items:[{icon:he,title:"International Payments",href:"/app/international-payments"}]}]},{type:"section",title:"Offerings",maxItemsVisible:3,items:[{icon:R,title:"Corporate Credit Card",href:"/app/corporate-credit-card",items:[{icon:Q,title:"User Profile",href:"/app/user/profile"},{icon:ge,title:"Business Profile",href:"/app/business/profile",items:[{title:"Business Banks",href:"/app/business/banks"},{title:"Business Routes",href:"/app/business/routes"}]},{icon:xe,title:"Billing",href:"/app/billing"},{icon:ve,title:"Bank Accounts",href:"/app/bank-accounts"},{icon:Ie,title:"Payment Gateway",href:"/app/payment-gateway"},{icon:Se,title:"Transaction History",href:"/app/transaction-history"},{icon:be,title:"Digital Wallet",href:"/app/digital-wallet"},{icon:R,title:"Credit Services",href:"/app/credit-services"},{icon:E,title:"Cash Management",href:"/app/cash-management"},{icon:w,title:"Financial Reports",href:"/app/financial-reports"},{icon:T,title:"Customer Verification",href:"/app/customer-verification"},{icon:Z,title:"Account Settings",href:"/app/account-settings"},{icon:ye,title:"Customer Support",href:"/app/customer-support"}]},{icon:Ne,title:"Vendor Payments",href:"/app/vendor-payments"},{icon:Ce,title:"Tax Payments",href:"/app/tax-payments"},{icon:je,title:"Payroll",href:"/app/payroll"},{icon:w,title:"Reports",href:"/app/reports"},{icon:T,title:"Public Profile",href:"/app/public-profile"},{icon:Be,title:"Code Snippet",href:"/app/code-snippet"},{icon:ke,title:"Support",href:"/app/support"}]},{type:"section",title:"Miscellaneous",items:[{icon:E,title:"Cost Center",href:"/app/cost-center"},{icon:Le,title:"Offers",href:"/app/confetti"}]}],x=t=>{const a=[];return t?(t.forEach(o=>{o.href&&a.push(o.href),o.items&&a.push(...x(o.items))}),a):[]},Qe=()=>{let t=[];return ie.forEach(a=>{a.items&&(t=t.concat(x(a.items)))}),t},ne=(t,{href:a,activeOnLinks:o})=>{const c=!!O(t.pathname,{path:a,exact:!1}),p=!!(o!=null&&o.find(u=>O(t.pathname,{path:u,exact:!1})));return c||p},s=t=>{const a=ee();return e.jsx(de,{...t,as:Ue,isActive:ne(a,{href:t.href,activeOnLinks:t.activeOnLinks})})},k=({showExampleContentPadding:t=!0,...a})=>{const[o,c]=I.useState(!1),[p,u]=I.useState(!1),l=ee(),v=n=>!!n.find(S=>ne(l,{href:S.href,activeOnLinks:x(S.items)}));return e.jsxs(i,{minHeight:"500px",children:[e.jsxs(C,{...a,isOpen:o,onDismiss:()=>c(!1),onVisibleLevelChange:({visibleLevel:n})=>console.log(n),children:[e.jsx(q,{children:ie.map(n=>e.jsx(K,{title:n.title,maxVisibleItems:n.maxItemsVisible,defaultIsExpanded:v(n.items.slice(n.maxItemsVisible)),children:n.items.map(r=>{var L;if(!r.items)return e.jsx(s,{...r},r.title);const{titleSuffix:S,...se}=r;return e.jsx(s,{...se,activeOnLinks:x(r.items),href:r.items[0].href,children:e.jsx(y,{titleSuffix:r.titleSuffix,children:(L=r.items)==null?void 0:L.map(d=>{var A;return d.items?e.jsx(s,{...d,activeOnLinks:x(d.items),href:void 0,children:e.jsx(y,{children:(A=d.items)==null?void 0:A.map(P=>e.jsx(s,{...P},P.title))},d.title)},d.title):e.jsx(s,{...d,description:"RBL20I43"},d.title)})},r.title)},r.title)})},n.title))}),e.jsxs(Ae,{children:[e.jsx(SideNavItem,{as:"label",title:"Test Mode",leading:Pe,trailing:e.jsx(Re,{accessibilityLabel:"Toggle test mode",size:"small",isChecked:p,onChange:({isChecked:n})=>{u(n)}})}),e.jsx(s,{title:"Settings",icon:Z,href:"/settings/user",activeOnLinks:["/settings/user","/settings/account"],children:e.jsxs(y,{children:[e.jsx(s,{icon:Q,title:"User Settings",href:"/settings/user"}),e.jsx(s,{icon:Ee,title:"Account Settings",href:"/settings/account"})]})})]})]}),e.jsxs(i,{marginLeft:{base:"spacing.0",m:"300px"},paddingY:t?{base:"spacing.11",m:"spacing.0"}:"spacing.0",paddingX:{base:"spacing.4",m:"spacing.0"},children:[e.jsx(B,{display:{base:void 0,m:"none"},variant:"tertiary",icon:Y,accessibilityLabel:"Open navigation menu",onClick:()=>c(!0),position:"fixed",top:"spacing.4",right:"spacing.4",zIndex:"2"}),e.jsx(_e,{children:[...Qe(),"/settings/user","/settings/account"].map(n=>e.jsx(Xe,{path:n,component:$e},n))})]})]})},Ze=({...t})=>e.jsx(k,{...t}),h=Ze.bind({}),f=({...t})=>{const[a,o]=I.useState(!0),[c,p]=I.useState(!0),u=()=>{o(l=>{const v=!l;return v&&p(!0),v})};return e.jsxs(i,{minHeight:"500px",children:[e.jsx(C,{...t,backgroundColor:"surface.background.gray.intense",isExpanded:a,onExpandChange:({isExpanded:l})=>{o(l),l&&p(!0)},onExpandTransitionEnd:({isExpanded:l})=>{l||p(!1)},banner:e.jsxs(i,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsxs(i,{display:"flex",alignItems:"center",justifyContent:c?"space-between":"center",overflow:"hidden",children:[c?e.jsxs(i,{display:"flex",alignItems:"center",gap:"spacing.3",children:[e.jsx(oe,{size:"medium"}),e.jsx(j,{truncateAfterLines:1,size:"large",weight:"semibold",children:"Ray AI"})]}):null,e.jsx(re,{onClick:u,size:"medium",icon:Y,margin:"spacing.2",accessibilityLabel:"Toggle SideNav"})]}),e.jsx(i,{display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(B,{variant:"secondary",size:"small",icon:$,isFullWidth:c,accessibilityLabel:"New chat",children:c?"New chat":void 0})})]}),children:e.jsx(q,{children:e.jsxs(K,{children:[e.jsx(s,{title:"How to center div in CSS",href:"/chat/center-div"}),e.jsx(s,{title:"How to get promoted to CTO in Green Loom?",href:"/chat/promotion"}),e.jsx(s,{title:"Will Anurag take over AI's job?",href:"/chat/anurag-ai"}),e.jsx(s,{title:"How to learn JavaScript in 2 minutes?",href:"/chat/javascript"}),e.jsx(s,{title:"Claude Code plugins to cure depression",href:"/chat/depression"}),e.jsx(s,{title:"Can Blade MCP fix my life?",href:"/chat/mcp"})]})})}),e.jsx(i,{marginLeft:{base:"spacing.0",m:"240px"},padding:"spacing.4"})]})},ae=()=>e.jsx(we,{href:"/activate",padding:"spacing.4",elevation:"none",children:e.jsxs(Te,{children:[e.jsxs(i,{display:"flex",justifyContent:"space-between",marginBottom:"spacing.2",children:[e.jsx(j,{size:"medium",weight:"semibold",children:"Activation Pending"}),e.jsx(i,{children:e.jsx(Oe,{})})]}),e.jsx(Fe,{label:"Progress",showPercentage:!0,value:50})]})}),g=({...t})=>e.jsx(te,{children:e.jsx(k,{position:"absolute",...t,banner:e.jsx(ae,{}),showExampleContentPadding:!1})}),m=({...t})=>e.jsx(te,{children:e.jsx(k,{position:"absolute",...t,banner:e.jsx(ae,{}),showExampleContentPadding:!1})});m.storyName="Mobile SideNav";m.parameters={viewport:{defaultViewport:"iPhone6"}};var F,M,H;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`({
  ...args
}) => {
  return <SideNavExample {...args} />;
}`,...(H=(M=h.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var U,D,z;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`({
  ...args
}) => {
  const [isSideNavFullyExpanded, setIsSideNavFullyExpanded] = React.useState(true);
  const [isBannerExpandedUI, setIsBannerExpandedUI] = React.useState(true);
  const handleSideNavToggle = (): void => {
    setIsSideNavFullyExpanded(prevIsSideNavFullyExpanded => {
      const nextIsSideNavFullyExpanded = !prevIsSideNavFullyExpanded;
      if (nextIsSideNavFullyExpanded) {
        setIsBannerExpandedUI(true);
      }
      return nextIsSideNavFullyExpanded;
    });
  };
  return <Box minHeight="500px">
      <SideNav {...args} backgroundColor="surface.background.gray.intense" isExpanded={isSideNavFullyExpanded} onExpandChange={({
      isExpanded
    }) => {
      setIsSideNavFullyExpanded(isExpanded);
      if (isExpanded) {
        setIsBannerExpandedUI(true);
      }
    }} onExpandTransitionEnd={({
      isExpanded
    }) => {
      if (!isExpanded) {
        setIsBannerExpandedUI(false);
      }
    }} banner={<Box display="flex" flexDirection="column" gap="spacing.3">
            <Box display="flex" alignItems="center" justifyContent={isBannerExpandedUI ? 'space-between' : 'center'} overflow="hidden">
              {isBannerExpandedUI ? <Box display="flex" alignItems="center" gap="spacing.3">
                  <RayIcon size="medium" />
                  <Text truncateAfterLines={1} size="large" weight="semibold">
                    Ray AI
                  </Text>
                </Box> : null}
              <IconButton onClick={handleSideNavToggle} size="medium" icon={MenuIcon} margin="spacing.2" accessibilityLabel="Toggle SideNav" />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button variant="secondary" size="small" icon={PlusIcon} isFullWidth={isBannerExpandedUI} accessibilityLabel="New chat">
                {isBannerExpandedUI ? 'New chat' : undefined}
              </Button>
            </Box>
          </Box>}>
        <SideNavBody>
          <SideNavSection>
            <NavItem title="How to center div in CSS" href="/chat/center-div" />
            <NavItem title="How to get promoted to CTO in Green Loom?" href="/chat/promotion" />
            <NavItem title="Will Anurag take over AI's job?" href="/chat/anurag-ai" />
            <NavItem title="How to learn JavaScript in 2 minutes?" href="/chat/javascript" />
            <NavItem title="Claude Code plugins to cure depression" href="/chat/depression" />
            <NavItem title="Can Blade MCP fix my life?" href="/chat/mcp" />
          </SideNavSection>
        </SideNavBody>
      </SideNav>
      <Box marginLeft={{
      base: 'spacing.0',
      m: '240px'
    }} padding="spacing.4" />
    </Box>;
}`,...(z=(D=f.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var V,J,W;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`({
  ...args
}) => {
  return <DashboardSkeleton>
      <SideNavExample position="absolute" {...args} banner={<ActivationCard />} showExampleContentPadding={false} />
    </DashboardSkeleton>;
}`,...(W=(J=g.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var G,_,X;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`({
  ...args
}) => {
  return <DashboardSkeleton>
      <SideNavExample position="absolute" {...args} banner={<ActivationCard />} showExampleContentPadding={false} />
    </DashboardSkeleton>;
}`,...(X=(_=m.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};const et=["Default","CollapsibleSideNav","DashboardLayout","MobileSideNav"],dt=Object.freeze(Object.defineProperty({__proto__:null,CollapsibleSideNav:f,DashboardLayout:g,Default:h,MobileSideNav:m,__namedExportsOrder:et,default:Ye},Symbol.toStringTag,{value:"Module"}));export{dt as t};
