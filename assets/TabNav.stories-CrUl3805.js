import{ke as c,j as e,B as s,T as n,C as r,l as N,L as M,f as g,k6 as f,a5 as j,kb as _,eR as k,hK as B,cP as E,ha as S,kc as C,kd as O,gv as u,kf as L,kh as V,F as l}from"./iframe-C1qQ09LF.js";import{a as z}from"./code-DFCk_3dG.js";import{i as T}from"./iconMap-BGYDFM5U.js";import{S as D}from"./Sandbox.web-B2xP21Qp.js";import{S as P}from"./StoryPageWrapper-CS0_5maI.js";const Y=()=>e.jsx(P,{componentName:"TabNav",componentDescription:"TabNav is a subcomponent of TopNav which can be used inside or outside TopNav",children:e.jsx(D,{files:z,editorHeight:600,hideNavigation:!1,openFile:"App.tsx"})}),v={"<ChevronDownIcon />":e.jsx(u,{}),'<Badge color="positive">NEW</Badge>':e.jsx(l,{color:"positive",children:"NEW"})},x={'<Badge size="small" color="primary">BETA</Badge>':e.jsx(l,{size:"small",emphasis:"subtle",color:"primary",children:"BETA"}),'<Badge size="small" color="positive">NEW</Badge>':e.jsx(l,{size:"small",emphasis:"subtle",color:"positive",children:"NEW"})},i={TAB_NAV_ITEM:"TabNavItem Props",ITEM_DATA:'Extra props for "item" data'},F={title:"Components/TopNav/TabNav",component:c,argTypes:{title:{type:"string",table:{category:i.TAB_NAV_ITEM}},href:{type:"string",table:{category:i.TAB_NAV_ITEM}},target:{type:"string",table:{category:i.TAB_NAV_ITEM}},accessibilityLabel:{type:"string",table:{category:i.TAB_NAV_ITEM}},as:{type:"string",table:{category:i.TAB_NAV_ITEM}},icon:{name:"icon",type:"select",options:Object.keys(T),table:{category:i.TAB_NAV_ITEM}},trailing:{name:"trailing",type:"select",options:Object.keys(v),table:{category:i.TAB_NAV_ITEM}},titleSuffix:{name:"titleSuffix",type:"select",options:Object.keys(x),table:{category:i.TAB_NAV_ITEM}},isAlwaysOverflowing:{type:"boolean",table:{category:i.ITEM_DATA}},isActive:{type:"boolean",table:{category:i.TAB_NAV_ITEM}},description:{type:"string",table:{category:i.ITEM_DATA}},onClick:{type:"function",table:{category:i.TAB_NAV_ITEM}},onKeyDown:{type:"function",table:{category:i.TAB_NAV_ITEM}},onKeyUp:{type:"function",table:{category:i.TAB_NAV_ITEM}},onMouseDown:{type:"function",table:{category:i.TAB_NAV_ITEM}},onPointerDown:{type:"function",table:{category:i.TAB_NAV_ITEM}}},args:{title:"Payroll",description:"Manage payroll effortlessly.",isAlwaysOverflowing:!1,isActive:!1},tags:["autodocs"],parameters:{docs:{page:Y}}},H=a=>{const b=T[a.icon],A=v[a.trailing],I=x[a.titleSuffix];return e.jsxs(s,{padding:"spacing.4",children:[e.jsx(n,{marginY:"spacing.2",children:"TabNav component provides a flexible way for you to build tabs which automatically handles responsiveness and overflows as screen size reduces"}),e.jsxs(n,{marginTop:"spacing.5",children:["TabNav component takes in an array of ",e.jsx(r,{children:"items"})," and gives you the flexibility of the rendering via a ",e.jsx(N,{href:"https://reactpatterns.com/#render-prop",children:"render prop"})]}),e.jsxs(s,{marginY:"spacing.4",children:[e.jsx(n,{children:"The render prop exposes two arrays:"}),e.jsxs(M,{children:[e.jsxs(g,{children:[e.jsx(f,{children:"items"})," - an array of items that fit in the available space"]}),e.jsxs(g,{children:[e.jsx(f,{children:"overflowingItems"})," - an array of items that overflow the available space"]})]})]}),e.jsxs(n,{children:["You can map over these arrays and render the ",e.jsx(r,{children:"TabNavItem"})," component for each item or for the overflowing items you can render a ",e.jsx(r,{children:"Menu"}),' component to create a dropdown "More" menu.']}),e.jsx(j,{emphasis:"subtle",color:"information",description:"TabNav's 'item' prop accepts all the props of TabNavItem component and few extra props like isAlwaysOverflowing, description",marginTop:"spacing.4",isDismissible:!1}),e.jsx(_,{marginTop:"spacing.7",items:[{title:"Home",href:"/home",icon:k},{href:"/payroll",title:a.title,icon:b,trailing:A,titleSuffix:I,isActive:a.isActive,isAlwaysOverflowing:a.isAlwaysOverflowing,description:a.description},{href:"/payments",title:"Payments",icon:B,description:"Manage payments effortlessly."},{href:"/magic-checkout",title:"Magic Checkout",icon:E,description:"Fast, one-click checkout."},{href:"/rize",title:"Rize",icon:S,isAlwaysOverflowing:!0,description:"Boost your business growth."}],children:({items:w,overflowingItems:p})=>e.jsxs(e.Fragment,{children:[e.jsx(C,{children:w.map(t=>e.jsx(c,{title:t.title,href:t.href,icon:t.icon,isActive:t.isActive,trailing:t.trailing,titleSuffix:t.titleSuffix},t.title))}),p.length?e.jsxs(O,{openInteraction:"hover",children:[e.jsx(c,{title:"More",trailing:e.jsx(u,{})}),e.jsx(L,{children:p.map(t=>{const m=t.icon&&typeof t.icon=="object"&&"default"in t.icon?t.icon.default:t.icon;return e.jsx(V,{onClick:()=>{console.log("clicked",t.title)},children:e.jsxs(s,{padding:"spacing.2",children:[e.jsxs(s,{display:"flex",gap:"spacing.2",children:[m&&e.jsx(m,{}),e.jsx(n,{weight:"semibold",children:t.title})]}),e.jsx(n,{marginTop:"spacing.2",size:"small",color:"surface.text.gray.subtle",children:t.description})]})},t.href)})})]}):null]})},JSON.stringify(a))]})},o=H.bind({});o.args={title:"Payroll",isActive:!0};o.storyName="TabNavExample";var d,y,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`(args: TabNavItemProps & {
  isAlwaysOverflowing: boolean;
  description: string;
}) => {
  const icon = iconMap[args.icon as unknown as keyof typeof iconMap];
  const trailing = trailingMapping[args.trailing as unknown as keyof typeof trailingMapping];
  const titleSuffix = titleSuffixMapping[args.titleSuffix as unknown as keyof typeof titleSuffixMapping];
  return <Box padding="spacing.4">
      <Text marginY="spacing.2">
        TabNav component provides a flexible way for you to build tabs which automatically handles
        responsiveness and overflows as screen size reduces
      </Text>

      <Text marginTop="spacing.5">
        TabNav component takes in an array of <Code>items</Code> and gives you the flexibility of
        the rendering via a <Link href="https://reactpatterns.com/#render-prop">render prop</Link>
      </Text>

      <Box marginY="spacing.4">
        <Text>The render prop exposes two arrays:</Text>
        <List>
          <ListItem>
            <ListItemCode>items</ListItemCode> - an array of items that fit in the available space
          </ListItem>
          <ListItem>
            <ListItemCode>overflowingItems</ListItemCode> - an array of items that overflow the
            available space
          </ListItem>
        </List>
      </Box>

      <Text>
        You can map over these arrays and render the <Code>TabNavItem</Code> component for each item
        or for the overflowing items you can render a <Code>Menu</Code> component to create a
        dropdown "More" menu.
      </Text>

      <Alert emphasis="subtle" color="information" description="TabNav's 'item' prop accepts all the props of TabNavItem component and few extra props like isAlwaysOverflowing, description" marginTop="spacing.4" isDismissible={false} />

      <TabNav key={JSON.stringify(args)} marginTop="spacing.7" items={[{
      title: 'Home',
      href: '/home',
      icon: HomeIcon
    }, {
      href: '/payroll',
      title: args.title,
      icon,
      trailing,
      titleSuffix,
      isActive: args.isActive,
      isAlwaysOverflowing: args.isAlwaysOverflowing,
      description: args.description
    }, {
      href: '/payments',
      title: 'Payments',
      icon: AcceptPaymentsIcon,
      description: 'Manage payments effortlessly.'
    }, {
      href: '/magic-checkout',
      title: 'Magic Checkout',
      icon: ShoppingBagIcon,
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
        return <>
              <TabNavItems>
                {items.map(item => {
              return <TabNavItem key={item.title} title={item.title} href={item.href} icon={item.icon} isActive={item.isActive} trailing={item.trailing} titleSuffix={item.titleSuffix} />;
            })}
              </TabNavItems>
              {overflowingItems.length ? <Menu openInteraction="hover">
                  <TabNavItem title="More" trailing={<ChevronDownIcon />} />
                  <MenuOverlay>
                    {overflowingItems.map(item => {
                const Icon = item.icon && typeof item.icon === 'object' && 'default' in item.icon ? item.icon.default : item.icon;
                return <MenuItem key={item.href} onClick={() => {
                  console.log('clicked', item.title);
                }}>
                          <Box padding="spacing.2">
                            <Box display="flex" gap="spacing.2">
                              {Icon && <Icon />}
                              <Text weight="semibold">{item.title}</Text>
                            </Box>
                            <Text marginTop="spacing.2" size="small" color="surface.text.gray.subtle">
                              {item.description}
                            </Text>
                          </Box>
                        </MenuItem>;
              })}
                  </MenuOverlay>
                </Menu> : null}
            </>;
      }}
      </TabNav>
    </Box>;
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const W=["TabNavExample"],G=Object.freeze(Object.defineProperty({__proto__:null,TabNavExample:o,__namedExportsOrder:W,default:F},Symbol.toStringTag,{value:"Module"}));export{G as t};
