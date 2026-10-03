import{a as g,j as e,H as G,T as s,l as E,C as c,F as ca,aj as oa,ip as la,B as n,aI as b,aJ as u,b as h,c as r,d as o,ab as m,ad as U,n as K,aa as q,gk as Q,cT as H,aK as Z,e6 as da,aP as ga,y as pa,z as ba,a5 as v,i7 as ee,i8 as ae,o as ua,bn as ma,b7 as ha,L as xa,f as X,h as O,b3 as Ta,E as ie}from"./iframe-C1qQ09LF.js";import{s as va}from"./StoryRouter-CDfSoprG.js";import{i as ne}from"./iconMap-BGYDFM5U.js";import{S as Ia}from"./StoryPageWrapper-CS0_5maI.js";import{S as ya}from"./Sandbox.web-B2xP21Qp.js";import{a as ja,R as fa}from"./react-router-CrS3lpF2.js";const Ba=()=>e.jsxs(Ia,{componentName:"Tabs",componentDescription:"A tab is a navigation component used in the interface to switch between different views in the same context. Tabs are contextual to the section or the page and are triggered by user interaction.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=75154-84398&t=QK3OC85vjD0Yt67V-1&scaling=min-zoom&page-id=60438%3A44047&mode=design",note:e.jsxs(s,{children:["Tabs can look visually similar to"," ",e.jsx(E,{target:"_blank",href:"https://ui.greenloom.ai/?path=/docs/components-segmentedcontrol--docs",children:"SegmentedControl"}),", but they solve different problems. Use ",e.jsx(c,{size:"medium",children:"Tabs"})," to navigate between distinct views or sections of content, where selecting a tab reveals its own content panel. If you instead need a compact, form-like control to pick one of 2–5 options that filter or change how the"," ",e.jsx(s,{as:"span",weight:"semibold",children:"same"})," ","content is displayed (e.g. Daily / Weekly / Monthly, List / Grid), use"," ",e.jsx(c,{size:"medium",children:"SegmentedControl"}),"."]}),children:[e.jsx(G,{size:"large",children:"Usage"}),e.jsx(ya,{editorHeight:500,children:`
        import {
          Box,
          Text,
          Tabs,
          TabList,
          TabItem,
          TabPanel,
        } from '@greenloom/ui/components';

        function App() {
          return (
            <Tabs variant="bordered" orientation="horizontal">
              <TabList>
                <TabItem value="subscriptions">Subscription</TabItem>
                <TabItem value="plans">Plans</TabItem>
                <TabItem value="settings">Settings</TabItem>
              </TabList>

              <TabPanel value="subscriptions">
                <Box paddingTop="spacing.4">
                  <Text>Subscriptions Panel</Text>
                </Box>
              </TabPanel>
              <TabPanel value="plans">
                <Box paddingTop="spacing.4">
                  <Text>Plans Panel</Text>
                </Box>
              </TabPanel>
              <TabPanel value="settings">
                <Box paddingTop="spacing.4">
                  <Text>Settings Panel</Text>
                </Box>
              </TabPanel>
            </Tabs>
          )
        }

        export default App;
        `})]}),p={TABS:"Tabs Props",TAB_ITEM:"TabItem Props"},se={Counter:e.jsx(oa,{color:"positive",value:2}),Badge:e.jsx(ca,{color:"positive",children:"NEW"})},Pa={title:"Components/Tabs",component:g,tags:["autodocs"],argTypes:{onChange:{table:{disable:!0},action:"onChange"},value:{table:{disable:!0}},defaultValue:{table:{disable:!0}},children:{table:{disable:!0}},isFullWidthTabItem:{control:{type:"boolean"},table:{category:p.TABS}},orientation:{control:{type:"select"},options:["horizontal","vertical"],table:{category:p.TABS}},size:{control:{type:"select"},options:["small","medium","large"],table:{category:p.TABS}},variant:{control:{type:"select"},options:["bordered","borderless","filled"],table:{category:p.TABS}},tabItemChildren:{control:{type:"text"},table:{category:p.TAB_ITEM},description:"The label of the tab item."},tabItemIsDisabled:{control:{type:"boolean"},table:{category:p.TAB_ITEM},description:"If `true`, the tab item will be disabled."},tabItemLeading:{table:{category:p.TAB_ITEM},control:{type:"select"},mapping:ne,options:Object.keys(ne),description:"Leading element of the tab item. Can be used to render an icon."},tabItemTrailing:{table:{category:p.TAB_ITEM},control:{type:"select"},mapping:se,options:Object.keys(se),description:"Trailing element of the tab item. Can be used to render an badge/counter."},tabItemHref:{table:{category:p.TAB_ITEM},control:{type:"text"}},isLazy:{table:{category:p.TABS}}},args:{isFullWidthTabItem:!1,orientation:"horizontal",size:"medium",variant:"bordered",tabItemChildren:"Tab Item",tabItemIsDisabled:!1,tabItemLeading:"ClipboardIcon",tabItemTrailing:"Badge",tabItemHref:"",isLazy:!1},decorators:[va(void 0,{initialEntries:["/accounts/subscriptions"]})],parameters:{docs:{page:Ba}}},J=({isVertical:a,children:i})=>e.jsx(n,{marginLeft:a?"spacing.4":"spacing.0",marginTop:a?"spacing.0":"spacing.4",children:i}),$=({isVertical:a,size:i="medium"})=>e.jsxs(J,{isVertical:a,children:[e.jsx(s,{size:i,children:"This is an overview of your active subscriptions. You can click on each subscription to view more details."}),e.jsxs(n,{flexDirection:{base:"column",m:"row"},display:"flex",width:"100%",gap:"spacing.4",marginY:"spacing.4",children:[e.jsx(v,{title:"1 - Active Subscriptions",description:"You have 1 active subscription. Active subscriptions are subscriptions that are currently being charged.",color:"positive",isDismissible:!1}),e.jsx(v,{title:"2 - Halted Subscriptions",description:"You have 2 halted subscriptions. Halted subscriptions are subscriptions that have been stopped by the customer or by you.",color:"notice",isDismissible:!1}),e.jsx(v,{title:"1 - Failed Subscriptions",description:"You have 1 failed subscription. Failed subscriptions are subscriptions that have failed to charge the customer.",color:"negative",isDismissible:!1}),e.jsx(v,{title:"3 - Expired Subscriptions",description:"You have 3 expired subscriptions. Expired subscriptions are subscriptions that have reached the end of their billing cycle.",color:"information",isDismissible:!1})]})]}),W=({isVertical:a,size:i="medium"})=>e.jsxs(J,{isVertical:a,children:[e.jsx(s,{size:i,children:"This is an overview of all your plans. You can click on each plan to view more details."}),e.jsxs(n,{marginTop:"spacing.4",display:"flex",gap:"spacing.4",flexDirection:{base:"column",m:"row"},children:[e.jsxs(b,{onClick:()=>null,padding:"spacing.5",elevation:"none",width:"100%",children:[e.jsx(ee,{children:e.jsx(ae,{title:"Basic Plan",subtitle:"ID: plan_MoUThTYyKiCq7t"})}),e.jsx(u,{children:e.jsxs(n,{display:"flex",flexDirection:"row",gap:"spacing.4",children:[e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(s,{weight:"semibold",size:i,children:"Name"}),e.jsx(s,{weight:"semibold",size:i,children:"Description"}),e.jsx(s,{weight:"semibold",size:i,children:"Bill Amount"}),e.jsx(s,{weight:"semibold",size:i,children:"Bill Frequency"})]}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(s,{size:i,children:"Basic Plan"}),e.jsx(s,{size:i,children:"Basic Plan Description"}),e.jsx(s,{size:i,children:"$9.99"}),e.jsx(s,{size:i,children:"Monthly"})]})]})})]}),e.jsxs(b,{onClick:()=>null,padding:"spacing.5",elevation:"none",width:"100%",children:[e.jsx(ee,{children:e.jsx(ae,{title:"Premium Plan",subtitle:"ID: plan_WoUDhTxyKi2CE7t"})}),e.jsx(u,{children:e.jsxs(n,{display:"flex",flexDirection:"row",gap:"spacing.4",children:[e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(s,{weight:"semibold",size:i,children:"Name"}),e.jsx(s,{weight:"semibold",size:i,children:"Description"}),e.jsx(s,{weight:"semibold",size:i,children:"Bill Amount"}),e.jsx(s,{weight:"semibold",size:i,children:"Bill Frequency"})]}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(s,{size:i,children:"Premium Plan"}),e.jsx(s,{size:i,children:"Premium Plan Description"}),e.jsx(s,{size:i,children:"$19.99"}),e.jsx(s,{size:i,children:"Monthly"})]})]})})]})]})]}),_=({title:a,icon:i,children:t,size:l="medium"})=>e.jsx(b,{padding:"spacing.5",elevation:"none",width:"100%",children:e.jsx(u,{children:e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(n,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[e.jsxs(n,{display:"flex",flexDirection:"row",gap:"spacing.4",alignItems:"center",children:[e.jsx(i,{size:"large",color:"surface.icon.gray.subtle"}),e.jsx(G,{size:l,children:a})]}),e.jsx(Ta,{accessibilityLabel:"Enable Card"})]}),t]})})}),M=({isVertical:a,size:i="medium"})=>e.jsxs(J,{isVertical:a,children:[e.jsx(s,{size:i,children:"This is an overview of your settings. You can enable or disable Payment Methods as per your requirements."}),e.jsxs(n,{marginTop:"spacing.4",display:"flex",flexDirection:{base:"column",m:"row"},gap:"spacing.4",children:[e.jsxs(_,{title:"Card",icon:ua,size:i,children:[e.jsx(s,{size:i,children:"Accept recurring payments via debit & credit cards for your subscriptions in any of our supported international currencies."}),e.jsx(s,{size:i,children:"Note: Only limited cards are supported due to new payment regulations by RBI. View supported cards"}),e.jsx(v,{isDismissible:!1,color:"information",title:"Payment limits",description:"Accept payments upto ₹ 2,00,000 ₹ - Indian Rupee (INR) Payments above ₹ 15,000 ₹ - Indian Rupee (INR) will ask the customer for OTP verification as well."})]}),e.jsxs(_,{title:"UPI",icon:ma,size:i,children:[e.jsx(s,{size:i,children:"Accept recurring payments via UPI apps like PhonePe, Paytm & BHIM for your subscriptions. Only supports Indian currency."}),e.jsx(v,{isDismissible:!1,color:"information",title:"Payment limits",description:"Accept payments upto ₹ 1,00,000 ₹ - Indian Rupee (INR) (For BFSI: ₹ 2,00,000 ₹ - Indian Rupee (INR)) Payments above ₹ 15,000 ₹ - Indian Rupee (INR) will ask the customer for UPI PIN verification as well."})]}),e.jsxs(_,{title:"eMandate",icon:ha,size:i,children:[e.jsx(s,{size:i,children:"Accept recurring payments directly via bank accounts for your subscriptions. Only supports Indian currency."}),e.jsx(v,{isDismissible:!1,color:"information",title:"Payment limits",description:"Accept payments upto: ₹ 1,00,00,000"})]})]})]}),x=a=>{const i=la(),t=`${a.isFullWidthTabItem}-${a.orientation}-${a.size}-${a.tabItemIsDisabled}`,l=i?"horizontal":a.orientation,d=l==="vertical";return e.jsx(n,{height:m()?"100%":void 0,children:e.jsx(b,{elevation:"none",padding:"spacing.0",children:e.jsx(u,{height:"100%",children:e.jsx(n,{height:"100%",marginX:"spacing.6",marginBottom:"spacing.6",marginTop:"spacing.5",children:e.jsxs(g,{...a,orientation:l,children:[e.jsxs(h,{children:[e.jsx(r,{value:"subscriptions",children:"Subscription"}),e.jsx(r,{value:"plans",isDisabled:a.tabItemIsDisabled,leading:a.tabItemLeading,trailing:a.tabItemTrailing,children:a.tabItemChildren}),e.jsx(r,{value:"settings",children:"Settings"})]}),e.jsx(o,{value:"subscriptions",children:e.jsx($,{isVertical:d,size:a.size})}),e.jsx(o,{value:"plans",children:e.jsx(W,{isVertical:d,size:a.size})}),e.jsx(o,{value:"settings",children:e.jsx(M,{isVertical:d,size:a.size})})]},t)})})})})},N=x.bind({}),za=a=>{const i=`${a.isFullWidthTabItem}-${a.orientation}-${a.size}-${a.tabItemIsDisabled}`,t=a.orientation==="vertical",[l,d]=U.useState("plans");return e.jsxs(n,{height:m()?"100%":void 0,children:[e.jsxs(n,{padding:"spacing.3",marginBottom:"spacing.5",children:[e.jsx(s,{children:"Tab's state can be controlled by using the value & onChange prop."}),e.jsxs(s,{weight:"semibold",marginBottom:"spacing.4",children:["Current Tab: ",l]}),e.jsxs(n,{display:"flex",flexDirection:"row",gap:"spacing.4",children:[e.jsx(K,{variant:"tertiary",onClick:()=>d("subscriptions"),children:"Go to Subscriptions"}),e.jsx(K,{variant:"tertiary",onClick:()=>d("plans"),children:"Go to Plans"}),e.jsx(K,{variant:"tertiary",onClick:()=>d("settings"),children:"Go to Settings"})]})]}),e.jsx(b,{elevation:"none",padding:"spacing.0",children:e.jsx(u,{height:"100%",children:e.jsx(n,{height:"100%",marginX:"spacing.6",marginBottom:"spacing.6",marginTop:"spacing.5",children:e.jsxs(g,{value:l,onChange:T=>{d(T)},children:[e.jsxs(h,{children:[e.jsx(r,{value:"subscriptions",children:"Subscription"}),e.jsx(r,{value:"plans",isDisabled:a.tabItemIsDisabled,leading:a.tabItemLeading,trailing:a.tabItemTrailing,children:a.tabItemChildren}),e.jsx(r,{value:"settings",children:"Settings"})]}),e.jsx(o,{value:"subscriptions",children:e.jsx($,{isVertical:t,size:a.size})}),e.jsx(o,{value:"plans",children:e.jsx(W,{isVertical:t,size:a.size})}),e.jsx(o,{value:"settings",children:e.jsx(M,{isVertical:t,size:a.size})})]},i)})})})]})},F=za.bind({}),Ca=a=>{const i=`${a.isFullWidthTabItem}-${a.orientation}-${a.size}-${a.tabItemIsDisabled}`,t=a.orientation==="vertical";return m()?e.jsx(s,{children:"Story not available on ReactNative"}):e.jsxs(n,{children:[e.jsxs(s,{children:["You can compose Tooltip with TabItem to show additional information about the TabItem by wrapping the ",e.jsx(c,{size:"medium",children:"TabItem"})," with"," ",e.jsx(c,{size:"medium",children:"TooltipInteractiveWrapper"}),"."]}),e.jsx(s,{marginBottom:"spacing.5",color:"surface.text.gray.subtle",children:"(Hover over the Settings tab to see it in action)"}),e.jsx(b,{elevation:"none",padding:"spacing.0",children:e.jsx(u,{children:e.jsx(n,{marginX:"spacing.6",marginBottom:"spacing.6",marginTop:"spacing.5",children:e.jsxs(g,{children:[e.jsxs(h,{children:[e.jsx(r,{value:"subscriptions",children:"Subscription"}),e.jsx(r,{value:"plans",isDisabled:a.tabItemIsDisabled,leading:a.tabItemLeading,trailing:a.tabItemTrailing,children:a.tabItemChildren}),e.jsx(pa,{placement:"right",content:"Change payment method settings and enable different payment methods.",title:"Payment Settings",children:e.jsx(ba,{children:e.jsx(r,{value:"settings",children:"Settings"})})})]}),e.jsx(o,{value:"subscriptions",children:e.jsx($,{isVertical:t,size:a.size})}),e.jsx(o,{value:"plans",children:e.jsx(W,{isVertical:t,size:a.size})}),e.jsx(o,{value:"settings",children:e.jsx(M,{isVertical:t,size:a.size})})]},i)})})})]})},A=Ca.bind({}),I=x.bind({});I.storyName="Size: Small";I.args={size:"small"};const y=x.bind({});y.storyName="Size: Medium";y.args={size:"medium"};const j=x.bind({});j.storyName="Size: Large";j.args={size:"large"};const f=x.bind({});f.args={variant:"filled"};const B=x.bind({});B.args={variant:"filled",orientation:"vertical"};const P=x.bind({});P.args={variant:"bordered"};const z=x.bind({});z.args={variant:"borderless"};const C=x.bind({});C.args={variant:"bordered",orientation:"vertical"};const S=x.bind({});S.args={isFullWidthTabItem:!0};const Sa=()=>e.jsxs(n,{height:m()?"100%":void 0,children:[e.jsxs(s,{children:["With the ",e.jsx(c,{size:"medium",children:"borderless"})," variant, you can remove the default border below the TabList and separate ",e.jsx(c,{size:"medium",children:"Divider"})," component which spans end to end to the ",e.jsx(c,{size:"medium",children:"Card"}),"."]}),e.jsx(b,{marginTop:"spacing.6",elevation:"none",padding:"spacing.0",children:e.jsx(u,{height:"100%",children:e.jsx(n,{height:"100%",marginX:"spacing.6",marginBottom:"spacing.6",marginTop:"spacing.5",children:e.jsxs(g,{variant:"borderless",defaultValue:"subscriptions",children:[e.jsxs(h,{children:[e.jsx(r,{value:"subscriptions",leading:q,children:"Subscription"}),e.jsx(r,{value:"plans",leading:Q,children:"Plans"}),e.jsx(r,{value:"settings",leading:H,children:"Settings"})]}),e.jsx(Z,{}),e.jsxs(n,{children:[e.jsx(o,{value:"subscriptions",children:e.jsx($,{isVertical:!1})}),e.jsx(o,{value:"plans",children:e.jsx(W,{isVertical:!1})}),e.jsx(o,{value:"settings",children:e.jsx(M,{isVertical:!1})})]})]})})})})]}),V=Sa.bind({});V.storyName="End to End Borders";const Va=()=>{const a=la(),[i,t]=U.useState("subscriptions");if(m())return e.jsx(s,{children:"Story not supported in ReactNative"});let l=e.jsx(e.Fragment,{});return i==="subscriptions"&&(l=e.jsxs(e.Fragment,{children:[e.jsx(E,{href:"#",icon:ie,children:"Documentation"}),e.jsx(K,{size:"small",children:"Subscribe"})]})),i==="plans"&&(l=e.jsx(K,{size:"small",children:"Create Plan"})),i==="settings"&&(l=e.jsx(E,{href:"#",icon:ie,children:"Need Help?"})),a&&(l=e.jsx(e.Fragment,{})),e.jsxs(n,{height:m()?"100%":void 0,children:[e.jsxs(s,{children:["We can add related actions to the Tab's right side (as found in the"," ",e.jsx(E,{href:"https://dashboard.greenloom.ai/app/subscriptions",children:"dashboard"}),") by wrapping the ",e.jsx(c,{size:"medium",children:"TabList"})," with a ",e.jsx(c,{size:"medium",children:"Box"})," and aligning buttons or links to the right side of the box with flex."]}),e.jsx(s,{color:"surface.text.gray.muted",children:"Note: In mobile devices the real estate is limited, thus the UI should be tweaked."}),e.jsx(b,{marginTop:"spacing.6",elevation:"none",padding:"spacing.0",children:e.jsx(u,{children:e.jsx(n,{height:"100%",marginX:"spacing.6",marginBottom:"spacing.6",marginTop:"spacing.5",children:e.jsxs(g,{variant:"borderless",value:i,onChange:t,children:[e.jsxs(n,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsxs(h,{children:[e.jsx(r,{value:"subscriptions",leading:q,children:"Subscription"}),e.jsx(r,{value:"plans",leading:Q,children:"Plans"}),e.jsx(r,{value:"settings",leading:H,children:"Settings"})]}),e.jsx(n,{display:"flex",alignItems:"center",gap:"spacing.5",children:l})]}),e.jsx(Z,{}),e.jsxs(n,{children:[e.jsx(o,{value:"subscriptions",children:e.jsx($,{isVertical:!1})}),e.jsx(o,{value:"plans",children:e.jsx(W,{isVertical:!1})}),e.jsx(o,{value:"settings",children:e.jsx(M,{isVertical:!1})})]})]})})})})]})},w=Va.bind({});w.storyName="Tabs with Toolbar";const wa=({match:a})=>e.jsxs(s,{weight:"semibold",marginY:"spacing.4",children:["Router param: ",a.params.id]}),Da=()=>{const a=ja(),i=(t,l)=>{t.preventDefault(),a.push(l)};return m()?e.jsx(s,{children:"Story not supported in ReactNative"}):e.jsxs(n,{height:m()?"100%":void 0,children:[e.jsxs(s,{children:["You can use ",e.jsx(c,{size:"medium",children:"Tabs"})," with ",e.jsx(c,{size:"medium",children:"react-router"})," to create a tabbed navigation."]}),e.jsxs(xa,{children:[e.jsx(X,{children:e.jsxs(O,{children:["Step 1: Pass ",e.jsx(c,{size:"medium",children:"href"})," prop to the"," ",e.jsx(c,{size:"medium",children:"TabItem"})," to make it a link."]})}),e.jsx(X,{children:e.jsxs(O,{children:["Step 2: Add ",e.jsx(c,{size:"medium",children:"onClick"})," handler to the"," ",e.jsx(c,{size:"medium",children:"TabItem"})," to prevent the default behaviour of the link."]})}),e.jsx(X,{children:e.jsxs(O,{children:["Step 3: Use ",e.jsx(c,{size:"medium",children:"react-router"})," utilities like"," ",e.jsx(c,{size:"medium",children:"history.push()"})," to do client side navigation."]})})]}),e.jsxs(s,{color:"surface.text.gray.muted",children:["Switch to the ",e.jsx(c,{size:"medium",children:"Actions"})," addon panel in storybook to see how routes are changing, and also notice how we can detect which route is active by using the"," ",e.jsx(c,{size:"medium",children:"Route"}),"component."]}),e.jsx(b,{marginTop:"spacing.6",elevation:"none",padding:"spacing.0",children:e.jsx(u,{children:e.jsx(n,{height:"100%",marginX:"spacing.6",marginBottom:"spacing.6",marginTop:"spacing.5",children:e.jsxs(g,{variant:"borderless",defaultValue:"subscriptions",children:[e.jsxs(h,{children:[e.jsx(r,{value:"subscriptions",leading:q,href:"/accounts/subscriptions",onClick:t=>i(t,"/accounts/subscriptions"),children:"Subscription"}),e.jsx(r,{value:"plans",leading:Q,href:"/accounts/plans",onClick:t=>i(t,"/accounts/plans"),children:"Plans"}),e.jsx(r,{value:"settings",leading:H,href:"/accounts/settings",onClick:t=>i(t,"/accounts/settings"),children:"Settings"})]}),e.jsx(Z,{}),e.jsxs(n,{children:[e.jsx(fa,{path:"/accounts/:id",component:wa}),e.jsx(o,{value:"subscriptions",children:e.jsx($,{isVertical:!1})}),e.jsx(o,{value:"plans",children:e.jsx(W,{isVertical:!1})}),e.jsx(o,{value:"settings",children:e.jsx(M,{isVertical:!1})})]})]})})})})]})},La=()=>e.jsx(Da,{}),D=La.bind({});D.storyName="React Router";const ka=()=>e.jsx(n,{height:m()?"100%":void 0,children:e.jsx(b,{marginTop:"spacing.6",elevation:"none",padding:"spacing.0",children:e.jsx(u,{height:"100%",children:e.jsx(n,{height:"100%",marginX:"spacing.6",marginBottom:"spacing.6",marginTop:"spacing.5",children:e.jsxs(g,{isFullWidthTabItem:!1,variant:"filled",defaultValue:"desktop",children:[e.jsxs(n,{padding:"spacing.6",minHeight:"300px",display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:"spacing.6",children:[e.jsx(o,{value:"desktop",children:e.jsx(n,{elevation:"midRaised",display:"flex",alignItems:"center",justifyContent:"center",width:"400px",height:"200px",borderRadius:"large",borderColor:"surface.border.gray.muted",borderWidth:"thin",children:e.jsx(s,{children:"Desktop Preview"})})}),e.jsx(o,{value:"mobile",children:e.jsx(n,{elevation:"midRaised",display:"flex",alignItems:"center",justifyContent:"center",width:"140px",height:"200px",borderRadius:"large",borderColor:"surface.border.gray.muted",borderWidth:"thin",children:e.jsx(s,{children:"Mobile Preview"})})})]}),e.jsx(n,{width:"200px",padding:"spacing.6",children:e.jsxs(h,{children:[e.jsx(r,{value:"desktop",leading:da}),e.jsx(r,{value:"mobile",leading:ga})]})})]})})})})}),L=ka.bind({});L.storyName="Icon only tabs";const te=({variant:a,size:i,orientation:t="horizontal"})=>{const l=["option1","option2","option3","option4","option5"],d="option3";return e.jsxs(g,{variant:a,size:i,orientation:t,defaultValue:"option1",children:[e.jsx(h,{children:l.map(T=>e.jsx(r,{value:T,isDisabled:T===d,children:"Option"},T))}),l.map(T=>e.jsx(o,{value:T,children:e.jsx(n,{})},T))]})},Ra=({size:a,isFullWidthTabItem:i})=>{const t=["option1","option2","option3"],l="option3";return e.jsxs(g,{size:a,isFullWidthTabItem:i,defaultValue:"option1",children:[e.jsx(h,{children:t.map(d=>e.jsx(r,{value:d,leading:H,trailing:e.jsx(oa,{value:3}),isDisabled:d===l,children:"Option"},d))}),t.map(d=>e.jsx(o,{value:d,children:e.jsx(n,{})},d))]})},$a=["small","medium","large"],re=["bordered","borderless","filled"],Y=a=>a.charAt(0).toUpperCase()+a.slice(1),Wa=()=>m()?e.jsx(s,{children:"Story not available on ReactNative"}):e.jsx(n,{display:"flex",flexDirection:"column",gap:"spacing.11",backgroundColor:"surface.background.gray.intense",padding:"spacing.7",children:$a.map(a=>e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.7",children:[e.jsxs(G,{size:"small",children:["Size: ",Y(a)]}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(s,{size:"small",weight:"semibold",color:"surface.text.gray.subtle",children:"Horizontal"}),e.jsx(n,{display:"flex",flexDirection:"row",gap:"spacing.8",flexWrap:"wrap",children:re.map(i=>e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(s,{size:"small",color:"surface.text.gray.muted",children:Y(i)}),e.jsx(te,{variant:i,size:a,orientation:"horizontal"})]},i))})]}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(s,{size:"small",weight:"semibold",color:"surface.text.gray.subtle",children:"Vertical"}),e.jsx(n,{display:"flex",flexDirection:"row",gap:"spacing.8",flexWrap:"wrap",children:re.map(i=>e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(s,{size:"small",color:"surface.text.gray.muted",children:Y(i)}),e.jsx(te,{variant:i,size:a,orientation:"vertical"})]},i))})]}),e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(s,{size:"small",weight:"semibold",color:"surface.text.gray.subtle",children:"isFullWidthTabItem (with leading & trailing)"}),e.jsx(n,{display:"flex",flexDirection:"row",gap:"spacing.8",flexWrap:"wrap",children:[!1,!0].map(i=>e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.3",width:i?"100%":void 0,children:[e.jsxs(s,{size:"small",color:"surface.text.gray.muted",children:["isFullWidthTabItem: ",String(i)]}),e.jsx(Ra,{size:a,isFullWidthTabItem:i})]},String(i)))})]})]},a))}),Ma=()=>{const[a,i]=U.useState(!1);return U.useEffect(()=>{const t=setTimeout(()=>{i(!0)},100);return()=>clearTimeout(t)},[]),e.jsxs(n,{padding:"spacing.5",children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.5",children:"Dashboard"}),e.jsx(n,{display:a?"block":"none",children:e.jsxs(g,{defaultValue:"payments",children:[e.jsxs(h,{children:[e.jsx(r,{value:"orders",children:"Orders"}),e.jsx(r,{value:"payments",children:"Payments"}),e.jsx(r,{value:"refunds",children:"Refunds"})]}),e.jsx(o,{value:"orders",children:e.jsx(n,{padding:"spacing.5",children:e.jsx(s,{children:"Orders content"})})}),e.jsx(o,{value:"payments",children:e.jsx(n,{padding:"spacing.5",children:e.jsx(s,{children:"Payments content"})})}),e.jsx(o,{value:"refunds",children:e.jsx(n,{padding:"spacing.5",children:e.jsx(s,{children:"Refunds content"})})})]})})]})},k=Wa.bind({});k.parameters={docs:{description:{story:"A comprehensive visual showcase of all Tabs variants (bordered, borderless, filled), sizes (small, medium, large), and orientations (horizontal, vertical)."}}};const R=Ma.bind({});R.storyName="Tabs with delayed visibility";var oe,le,ce;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
  const isMobile = useIsMobile();
  const invalidationKey = \`\${args.isFullWidthTabItem}-\${args.orientation}-\${args.size}-\${args.tabItemIsDisabled}\`;
  const orientation = isMobile ? 'horizontal' : args.orientation;
  const isVertical = orientation === 'vertical';
  return <Box height={isReactNative() ? '100%' : undefined}>
      <Card elevation="none" padding="spacing.0">
        <CardBody height="100%">
          <Box height="100%" marginX="spacing.6" marginBottom="spacing.6" marginTop="spacing.5">
            <Tabs key={invalidationKey} {...args} orientation={orientation}>
              <TabList>
                <TabItem value="subscriptions">Subscription</TabItem>
                <TabItem value="plans" isDisabled={args.tabItemIsDisabled} leading={args.tabItemLeading} trailing={args.tabItemTrailing}>
                  {args.tabItemChildren}
                </TabItem>
                <TabItem value="settings">Settings</TabItem>
              </TabList>

              <TabPanel value="subscriptions">
                <SubscriptionPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="plans">
                <PlansPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="settings">
                <SettingsPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
            </Tabs>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(ce=(le=N.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ge,pe;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`args => {
  const invalidationKey = \`\${args.isFullWidthTabItem}-\${args.orientation}-\${args.size}-\${args.tabItemIsDisabled}\`;
  const isVertical = args.orientation === 'vertical';
  const [value, setValue] = React.useState('plans');
  return <Box height={isReactNative() ? '100%' : undefined}>
      <Box padding="spacing.3" marginBottom="spacing.5">
        <Text>Tab's state can be controlled by using the value & onChange prop.</Text>
        <Text weight="semibold" marginBottom="spacing.4">
          Current Tab: {value}
        </Text>
        <Box display="flex" flexDirection="row" gap="spacing.4">
          <Button variant="tertiary" onClick={() => setValue('subscriptions')}>
            Go to Subscriptions
          </Button>
          <Button variant="tertiary" onClick={() => setValue('plans')}>
            Go to Plans
          </Button>
          <Button variant="tertiary" onClick={() => setValue('settings')}>
            Go to Settings
          </Button>
        </Box>
      </Box>

      <Card elevation="none" padding="spacing.0">
        <CardBody height="100%">
          <Box height="100%" marginX="spacing.6" marginBottom="spacing.6" marginTop="spacing.5">
            <Tabs key={invalidationKey} value={value} onChange={value => {
            setValue(value);
          }}>
              <TabList>
                <TabItem value="subscriptions">Subscription</TabItem>
                <TabItem value="plans" isDisabled={args.tabItemIsDisabled} leading={args.tabItemLeading} trailing={args.tabItemTrailing}>
                  {args.tabItemChildren}
                </TabItem>
                <TabItem value="settings">Settings</TabItem>
              </TabList>

              <TabPanel value="subscriptions">
                <SubscriptionPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="plans">
                <PlansPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="settings">
                <SettingsPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
            </Tabs>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(pe=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var be,ue,me;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`args => {
  const invalidationKey = \`\${args.isFullWidthTabItem}-\${args.orientation}-\${args.size}-\${args.tabItemIsDisabled}\`;
  const isVertical = args.orientation === 'vertical';
  if (isReactNative()) {
    return <Text>Story not available on ReactNative</Text>;
  }
  return <Box>
      <Text>
        You can compose Tooltip with TabItem to show additional information about the TabItem by
        wrapping the <Code size="medium">TabItem</Code> with{' '}
        <Code size="medium">TooltipInteractiveWrapper</Code>.
      </Text>
      <Text marginBottom="spacing.5" color="surface.text.gray.subtle">
        (Hover over the Settings tab to see it in action)
      </Text>
      <Card elevation="none" padding="spacing.0">
        <CardBody>
          <Box marginX="spacing.6" marginBottom="spacing.6" marginTop="spacing.5">
            <Tabs key={invalidationKey}>
              <TabList>
                <TabItem value="subscriptions">Subscription</TabItem>
                <TabItem value="plans" isDisabled={args.tabItemIsDisabled} leading={args.tabItemLeading} trailing={args.tabItemTrailing}>
                  {args.tabItemChildren}
                </TabItem>
                <Tooltip placement="right" content="Change payment method settings and enable different payment methods." title="Payment Settings">
                  <TooltipInteractiveWrapper>
                    <TabItem value="settings">Settings</TabItem>
                  </TooltipInteractiveWrapper>
                </Tooltip>
              </TabList>

              <TabPanel value="subscriptions">
                <SubscriptionPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="plans">
                <PlansPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="settings">
                <SettingsPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
            </Tabs>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(me=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var he,xe,Te;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`args => {
  const isMobile = useIsMobile();
  const invalidationKey = \`\${args.isFullWidthTabItem}-\${args.orientation}-\${args.size}-\${args.tabItemIsDisabled}\`;
  const orientation = isMobile ? 'horizontal' : args.orientation;
  const isVertical = orientation === 'vertical';
  return <Box height={isReactNative() ? '100%' : undefined}>
      <Card elevation="none" padding="spacing.0">
        <CardBody height="100%">
          <Box height="100%" marginX="spacing.6" marginBottom="spacing.6" marginTop="spacing.5">
            <Tabs key={invalidationKey} {...args} orientation={orientation}>
              <TabList>
                <TabItem value="subscriptions">Subscription</TabItem>
                <TabItem value="plans" isDisabled={args.tabItemIsDisabled} leading={args.tabItemLeading} trailing={args.tabItemTrailing}>
                  {args.tabItemChildren}
                </TabItem>
                <TabItem value="settings">Settings</TabItem>
              </TabList>

              <TabPanel value="subscriptions">
                <SubscriptionPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="plans">
                <PlansPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="settings">
                <SettingsPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
            </Tabs>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(Te=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var ve,Ie,ye;y.parameters={...y.parameters,docs:{...(ve=y.parameters)==null?void 0:ve.docs,source:{originalSource:`args => {
  const isMobile = useIsMobile();
  const invalidationKey = \`\${args.isFullWidthTabItem}-\${args.orientation}-\${args.size}-\${args.tabItemIsDisabled}\`;
  const orientation = isMobile ? 'horizontal' : args.orientation;
  const isVertical = orientation === 'vertical';
  return <Box height={isReactNative() ? '100%' : undefined}>
      <Card elevation="none" padding="spacing.0">
        <CardBody height="100%">
          <Box height="100%" marginX="spacing.6" marginBottom="spacing.6" marginTop="spacing.5">
            <Tabs key={invalidationKey} {...args} orientation={orientation}>
              <TabList>
                <TabItem value="subscriptions">Subscription</TabItem>
                <TabItem value="plans" isDisabled={args.tabItemIsDisabled} leading={args.tabItemLeading} trailing={args.tabItemTrailing}>
                  {args.tabItemChildren}
                </TabItem>
                <TabItem value="settings">Settings</TabItem>
              </TabList>

              <TabPanel value="subscriptions">
                <SubscriptionPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="plans">
                <PlansPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="settings">
                <SettingsPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
            </Tabs>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(ye=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var je,fe,Be;j.parameters={...j.parameters,docs:{...(je=j.parameters)==null?void 0:je.docs,source:{originalSource:`args => {
  const isMobile = useIsMobile();
  const invalidationKey = \`\${args.isFullWidthTabItem}-\${args.orientation}-\${args.size}-\${args.tabItemIsDisabled}\`;
  const orientation = isMobile ? 'horizontal' : args.orientation;
  const isVertical = orientation === 'vertical';
  return <Box height={isReactNative() ? '100%' : undefined}>
      <Card elevation="none" padding="spacing.0">
        <CardBody height="100%">
          <Box height="100%" marginX="spacing.6" marginBottom="spacing.6" marginTop="spacing.5">
            <Tabs key={invalidationKey} {...args} orientation={orientation}>
              <TabList>
                <TabItem value="subscriptions">Subscription</TabItem>
                <TabItem value="plans" isDisabled={args.tabItemIsDisabled} leading={args.tabItemLeading} trailing={args.tabItemTrailing}>
                  {args.tabItemChildren}
                </TabItem>
                <TabItem value="settings">Settings</TabItem>
              </TabList>

              <TabPanel value="subscriptions">
                <SubscriptionPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="plans">
                <PlansPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="settings">
                <SettingsPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
            </Tabs>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(Be=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:Be.source}}};var Pe,ze,Ce;f.parameters={...f.parameters,docs:{...(Pe=f.parameters)==null?void 0:Pe.docs,source:{originalSource:`args => {
  const isMobile = useIsMobile();
  const invalidationKey = \`\${args.isFullWidthTabItem}-\${args.orientation}-\${args.size}-\${args.tabItemIsDisabled}\`;
  const orientation = isMobile ? 'horizontal' : args.orientation;
  const isVertical = orientation === 'vertical';
  return <Box height={isReactNative() ? '100%' : undefined}>
      <Card elevation="none" padding="spacing.0">
        <CardBody height="100%">
          <Box height="100%" marginX="spacing.6" marginBottom="spacing.6" marginTop="spacing.5">
            <Tabs key={invalidationKey} {...args} orientation={orientation}>
              <TabList>
                <TabItem value="subscriptions">Subscription</TabItem>
                <TabItem value="plans" isDisabled={args.tabItemIsDisabled} leading={args.tabItemLeading} trailing={args.tabItemTrailing}>
                  {args.tabItemChildren}
                </TabItem>
                <TabItem value="settings">Settings</TabItem>
              </TabList>

              <TabPanel value="subscriptions">
                <SubscriptionPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="plans">
                <PlansPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="settings">
                <SettingsPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
            </Tabs>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(Ce=(ze=f.parameters)==null?void 0:ze.docs)==null?void 0:Ce.source}}};var Se,Ve,we;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`args => {
  const isMobile = useIsMobile();
  const invalidationKey = \`\${args.isFullWidthTabItem}-\${args.orientation}-\${args.size}-\${args.tabItemIsDisabled}\`;
  const orientation = isMobile ? 'horizontal' : args.orientation;
  const isVertical = orientation === 'vertical';
  return <Box height={isReactNative() ? '100%' : undefined}>
      <Card elevation="none" padding="spacing.0">
        <CardBody height="100%">
          <Box height="100%" marginX="spacing.6" marginBottom="spacing.6" marginTop="spacing.5">
            <Tabs key={invalidationKey} {...args} orientation={orientation}>
              <TabList>
                <TabItem value="subscriptions">Subscription</TabItem>
                <TabItem value="plans" isDisabled={args.tabItemIsDisabled} leading={args.tabItemLeading} trailing={args.tabItemTrailing}>
                  {args.tabItemChildren}
                </TabItem>
                <TabItem value="settings">Settings</TabItem>
              </TabList>

              <TabPanel value="subscriptions">
                <SubscriptionPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="plans">
                <PlansPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="settings">
                <SettingsPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
            </Tabs>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(we=(Ve=B.parameters)==null?void 0:Ve.docs)==null?void 0:we.source}}};var De,Le,ke;P.parameters={...P.parameters,docs:{...(De=P.parameters)==null?void 0:De.docs,source:{originalSource:`args => {
  const isMobile = useIsMobile();
  const invalidationKey = \`\${args.isFullWidthTabItem}-\${args.orientation}-\${args.size}-\${args.tabItemIsDisabled}\`;
  const orientation = isMobile ? 'horizontal' : args.orientation;
  const isVertical = orientation === 'vertical';
  return <Box height={isReactNative() ? '100%' : undefined}>
      <Card elevation="none" padding="spacing.0">
        <CardBody height="100%">
          <Box height="100%" marginX="spacing.6" marginBottom="spacing.6" marginTop="spacing.5">
            <Tabs key={invalidationKey} {...args} orientation={orientation}>
              <TabList>
                <TabItem value="subscriptions">Subscription</TabItem>
                <TabItem value="plans" isDisabled={args.tabItemIsDisabled} leading={args.tabItemLeading} trailing={args.tabItemTrailing}>
                  {args.tabItemChildren}
                </TabItem>
                <TabItem value="settings">Settings</TabItem>
              </TabList>

              <TabPanel value="subscriptions">
                <SubscriptionPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="plans">
                <PlansPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="settings">
                <SettingsPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
            </Tabs>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(ke=(Le=P.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Re,$e,We;z.parameters={...z.parameters,docs:{...(Re=z.parameters)==null?void 0:Re.docs,source:{originalSource:`args => {
  const isMobile = useIsMobile();
  const invalidationKey = \`\${args.isFullWidthTabItem}-\${args.orientation}-\${args.size}-\${args.tabItemIsDisabled}\`;
  const orientation = isMobile ? 'horizontal' : args.orientation;
  const isVertical = orientation === 'vertical';
  return <Box height={isReactNative() ? '100%' : undefined}>
      <Card elevation="none" padding="spacing.0">
        <CardBody height="100%">
          <Box height="100%" marginX="spacing.6" marginBottom="spacing.6" marginTop="spacing.5">
            <Tabs key={invalidationKey} {...args} orientation={orientation}>
              <TabList>
                <TabItem value="subscriptions">Subscription</TabItem>
                <TabItem value="plans" isDisabled={args.tabItemIsDisabled} leading={args.tabItemLeading} trailing={args.tabItemTrailing}>
                  {args.tabItemChildren}
                </TabItem>
                <TabItem value="settings">Settings</TabItem>
              </TabList>

              <TabPanel value="subscriptions">
                <SubscriptionPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="plans">
                <PlansPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="settings">
                <SettingsPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
            </Tabs>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(We=($e=z.parameters)==null?void 0:$e.docs)==null?void 0:We.source}}};var Me,Ne,Fe;C.parameters={...C.parameters,docs:{...(Me=C.parameters)==null?void 0:Me.docs,source:{originalSource:`args => {
  const isMobile = useIsMobile();
  const invalidationKey = \`\${args.isFullWidthTabItem}-\${args.orientation}-\${args.size}-\${args.tabItemIsDisabled}\`;
  const orientation = isMobile ? 'horizontal' : args.orientation;
  const isVertical = orientation === 'vertical';
  return <Box height={isReactNative() ? '100%' : undefined}>
      <Card elevation="none" padding="spacing.0">
        <CardBody height="100%">
          <Box height="100%" marginX="spacing.6" marginBottom="spacing.6" marginTop="spacing.5">
            <Tabs key={invalidationKey} {...args} orientation={orientation}>
              <TabList>
                <TabItem value="subscriptions">Subscription</TabItem>
                <TabItem value="plans" isDisabled={args.tabItemIsDisabled} leading={args.tabItemLeading} trailing={args.tabItemTrailing}>
                  {args.tabItemChildren}
                </TabItem>
                <TabItem value="settings">Settings</TabItem>
              </TabList>

              <TabPanel value="subscriptions">
                <SubscriptionPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="plans">
                <PlansPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="settings">
                <SettingsPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
            </Tabs>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(Fe=(Ne=C.parameters)==null?void 0:Ne.docs)==null?void 0:Fe.source}}};var Ae,Ke,Ee;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => {
  const isMobile = useIsMobile();
  const invalidationKey = \`\${args.isFullWidthTabItem}-\${args.orientation}-\${args.size}-\${args.tabItemIsDisabled}\`;
  const orientation = isMobile ? 'horizontal' : args.orientation;
  const isVertical = orientation === 'vertical';
  return <Box height={isReactNative() ? '100%' : undefined}>
      <Card elevation="none" padding="spacing.0">
        <CardBody height="100%">
          <Box height="100%" marginX="spacing.6" marginBottom="spacing.6" marginTop="spacing.5">
            <Tabs key={invalidationKey} {...args} orientation={orientation}>
              <TabList>
                <TabItem value="subscriptions">Subscription</TabItem>
                <TabItem value="plans" isDisabled={args.tabItemIsDisabled} leading={args.tabItemLeading} trailing={args.tabItemTrailing}>
                  {args.tabItemChildren}
                </TabItem>
                <TabItem value="settings">Settings</TabItem>
              </TabList>

              <TabPanel value="subscriptions">
                <SubscriptionPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="plans">
                <PlansPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
              <TabPanel value="settings">
                <SettingsPanel isVertical={isVertical} size={args.size} />
              </TabPanel>
            </Tabs>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(Ee=(Ke=S.parameters)==null?void 0:Ke.docs)==null?void 0:Ee.source}}};var Ue,He,Xe;V.parameters={...V.parameters,docs:{...(Ue=V.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <Box height={isReactNative() ? '100%' : undefined}>
      <Text>
        With the <Code size="medium">borderless</Code> variant, you can remove the default border
        below the TabList and separate <Code size="medium">Divider</Code> component which spans end
        to end to the <Code size="medium">Card</Code>.
      </Text>

      <Card marginTop="spacing.6" elevation="none" padding="spacing.0">
        <CardBody height="100%">
          <Box height="100%" marginX="spacing.6" marginBottom="spacing.6" marginTop="spacing.5">
            <Tabs variant="borderless" defaultValue="subscriptions">
              <TabList>
                <TabItem value="subscriptions" leading={SubscriptionsIcon}>
                  Subscription
                </TabItem>
                <TabItem value="plans" leading={ClipboardIcon}>
                  Plans
                </TabItem>
                <TabItem value="settings" leading={SettingsIcon}>
                  Settings
                </TabItem>
              </TabList>
              <Divider />

              <Box>
                <TabPanel value="subscriptions">
                  <SubscriptionPanel isVertical={false} />
                </TabPanel>
                <TabPanel value="plans">
                  <PlansPanel isVertical={false} />
                </TabPanel>
                <TabPanel value="settings">
                  <SettingsPanel isVertical={false} />
                </TabPanel>
              </Box>
            </Tabs>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(Xe=(He=V.parameters)==null?void 0:He.docs)==null?void 0:Xe.source}}};var Oe,_e,Ye;w.parameters={...w.parameters,docs:{...(Oe=w.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  const isMobile = useIsMobile();
  const [value, setValue] = React.useState('subscriptions');
  if (isReactNative()) {
    return <Text>Story not supported in ReactNative</Text>;
  }
  let actions: React.ReactElement = <></>;
  if (value === 'subscriptions') {
    actions = <>
        <Link href="#" icon={ExternalLinkIcon}>
          Documentation
        </Link>
        <Button size="small">Subscribe</Button>
      </>;
  }
  if (value === 'plans') {
    actions = <Button size="small">Create Plan</Button>;
  }
  if (value === 'settings') {
    actions = <Link href="#" icon={ExternalLinkIcon}>
        Need Help?
      </Link>;
  }
  if (isMobile) {
    actions = <></>;
  }
  return <Box height={isReactNative() ? '100%' : undefined}>
      <Text>
        We can add related actions to the Tab's right side (as found in the{' '}
        <Link href="https://dashboard.greenloom.ai/app/subscriptions">dashboard</Link>) by wrapping
        the <Code size="medium">TabList</Code> with a <Code size="medium">Box</Code> and aligning
        buttons or links to the right side of the box with flex.
      </Text>
      <Text color="surface.text.gray.muted">
        Note: In mobile devices the real estate is limited, thus the UI should be tweaked.
      </Text>

      <Card marginTop="spacing.6" elevation="none" padding="spacing.0">
        <CardBody>
          <Box height="100%" marginX="spacing.6" marginBottom="spacing.6" marginTop="spacing.5">
            <Tabs variant="borderless" value={value} onChange={setValue}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <TabList>
                  <TabItem value="subscriptions" leading={SubscriptionsIcon}>
                    Subscription
                  </TabItem>
                  <TabItem value="plans" leading={ClipboardIcon}>
                    Plans
                  </TabItem>
                  <TabItem value="settings" leading={SettingsIcon}>
                    Settings
                  </TabItem>
                </TabList>
                <Box display="flex" alignItems="center" gap="spacing.5">
                  {actions}
                </Box>
              </Box>
              <Divider />

              <Box>
                <TabPanel value="subscriptions">
                  <SubscriptionPanel isVertical={false} />
                </TabPanel>
                <TabPanel value="plans">
                  <PlansPanel isVertical={false} />
                </TabPanel>
                <TabPanel value="settings">
                  <SettingsPanel isVertical={false} />
                </TabPanel>
              </Box>
            </Tabs>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(Ye=(_e=w.parameters)==null?void 0:_e.docs)==null?void 0:Ye.source}}};var Ge,qe,Qe;D.parameters={...D.parameters,docs:{...(Ge=D.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <ReactRouterExample />;
}`,...(Qe=(qe=D.parameters)==null?void 0:qe.docs)==null?void 0:Qe.source}}};var Ze,Je,ea;L.parameters={...L.parameters,docs:{...(Ze=L.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <Box height={isReactNative() ? '100%' : undefined}>
      <Card marginTop="spacing.6" elevation="none" padding="spacing.0">
        <CardBody height="100%">
          <Box height="100%" marginX="spacing.6" marginBottom="spacing.6" marginTop="spacing.5">
            <Tabs isFullWidthTabItem={false} variant="filled" defaultValue="desktop">
              <Box padding="spacing.6" minHeight="300px" display="flex" alignItems="center" justifyContent="center" paddingBottom="spacing.6">
                <TabPanel value="desktop">
                  <Box elevation="midRaised" display="flex" alignItems="center" justifyContent="center" width="400px" height="200px" borderRadius="large" borderColor="surface.border.gray.muted" borderWidth="thin">
                    <Text>Desktop Preview</Text>
                  </Box>
                </TabPanel>
                <TabPanel value="mobile">
                  <Box elevation="midRaised" display="flex" alignItems="center" justifyContent="center" width="140px" height="200px" borderRadius="large" borderColor="surface.border.gray.muted" borderWidth="thin">
                    <Text>Mobile Preview</Text>
                  </Box>
                </TabPanel>
              </Box>

              <Box width="200px" padding="spacing.6">
                <TabList>
                  <TabItem value="desktop" leading={MonitorIcon} />
                  <TabItem value="mobile" leading={SmartphoneIcon} />
                </TabList>
              </Box>
            </Tabs>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(ea=(Je=L.parameters)==null?void 0:Je.docs)==null?void 0:ea.source}}};var aa,ia,na;k.parameters={...k.parameters,docs:{...(aa=k.parameters)==null?void 0:aa.docs,source:{originalSource:`() => {
  if (isReactNative()) {
    return <Text>Story not available on ReactNative</Text>;
  }
  return <Box display="flex" flexDirection="column" gap="spacing.11" backgroundColor="surface.background.gray.intense" padding="spacing.7">
      {showcaseSizes.map(size => <Box key={size} display="flex" flexDirection="column" gap="spacing.7">
          <Heading size="small">Size: {capitalize(size)}</Heading>

          {/* Horizontal orientation */}
          <Box display="flex" flexDirection="column" gap="spacing.5">
            <Text size="small" weight="semibold" color="surface.text.gray.subtle">
              Horizontal
            </Text>
            <Box display="flex" flexDirection="row" gap="spacing.8" flexWrap="wrap">
              {showcaseVariants.map(variant => <Box key={variant} display="flex" flexDirection="column" gap="spacing.3">
                  <Text size="small" color="surface.text.gray.muted">
                    {capitalize(variant)}
                  </Text>
                  <ShowcaseTabsInstance variant={variant} size={size} orientation="horizontal" />
                </Box>)}
            </Box>
          </Box>

          {/* Vertical orientation */}
          <Box display="flex" flexDirection="column" gap="spacing.5">
            <Text size="small" weight="semibold" color="surface.text.gray.subtle">
              Vertical
            </Text>
            <Box display="flex" flexDirection="row" gap="spacing.8" flexWrap="wrap">
              {showcaseVariants.map(variant => <Box key={variant} display="flex" flexDirection="column" gap="spacing.3">
                  <Text size="small" color="surface.text.gray.muted">
                    {capitalize(variant)}
                  </Text>
                  <ShowcaseTabsInstance variant={variant} size={size} orientation="vertical" />
                </Box>)}
            </Box>
          </Box>

          {/* isFullWidthTabItem with leading & trailing */}
          <Box display="flex" flexDirection="column" gap="spacing.5">
            <Text size="small" weight="semibold" color="surface.text.gray.subtle">
              isFullWidthTabItem (with leading & trailing)
            </Text>
            <Box display="flex" flexDirection="row" gap="spacing.8" flexWrap="wrap">
              {[false, true].map(isFullWidth => <Box key={String(isFullWidth)} display="flex" flexDirection="column" gap="spacing.3" width={isFullWidth ? '100%' : undefined}>
                  <Text size="small" color="surface.text.gray.muted">
                    isFullWidthTabItem: {String(isFullWidth)}
                  </Text>
                  <ShowcaseFullWidthTabsInstance size={size} isFullWidthTabItem={isFullWidth} />
                </Box>)}
            </Box>
          </Box>
        </Box>)}
    </Box>;
}`,...(na=(ia=k.parameters)==null?void 0:ia.docs)==null?void 0:na.source}}};var sa,ta,ra;R.parameters={...R.parameters,docs:{...(sa=R.parameters)==null?void 0:sa.docs,source:{originalSource:`() => {
  const [isLayoutReady, setIsLayoutReady] = React.useState(false);

  // Simulates a dashboard layout that renders content after
  // an async operation (data fetch, sidebar animation, etc.)
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLayoutReady(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);
  return <Box padding="spacing.5">
      <Text size="large" weight="semibold" marginBottom="spacing.5">
        Dashboard
      </Text>

      {/* 
        The Tabs mount immediately, but the container starts 
        with display:none / width:0. When it becomes visible,
        TabIndicator has already measured (got 0) and won't re-measure.
       */}
      <Box display={isLayoutReady ? 'block' : 'none'}>
        <Tabs defaultValue="payments">
          <TabList>
            <TabItem value="orders">Orders</TabItem>
            <TabItem value="payments">Payments</TabItem>
            <TabItem value="refunds">Refunds</TabItem>
          </TabList>
          <TabPanel value="orders">
            <Box padding="spacing.5">
              <Text>Orders content</Text>
            </Box>
          </TabPanel>
          <TabPanel value="payments">
            <Box padding="spacing.5">
              <Text>Payments content</Text>
            </Box>
          </TabPanel>
          <TabPanel value="refunds">
            <Box padding="spacing.5">
              <Text>Refunds content</Text>
            </Box>
          </TabPanel>
        </Tabs>
      </Box>
    </Box>;
}`,...(ra=(ta=R.parameters)==null?void 0:ta.docs)==null?void 0:ra.source}}};const Na=["Default","Controlled","WithTooltip","Small","Medium","Large","Filled","FilledVertical","Bordered","Borderless","BorderedVertical","FullWidthTabItem","ProductUseCase1","ProductUseCase2","ProductUseCase3","ProductUseCase4","Showcase","DelayedTabs"],Xa=Object.freeze(Object.defineProperty({__proto__:null,Bordered:P,BorderedVertical:C,Borderless:z,Controlled:F,Default:N,DelayedTabs:R,Filled:f,FilledVertical:B,FullWidthTabItem:S,Large:j,Medium:y,ProductUseCase1:V,ProductUseCase2:w,ProductUseCase3:D,ProductUseCase4:L,Showcase:k,Small:I,WithTooltip:A,__namedExportsOrder:Na,default:Pa},Symbol.toStringTag,{value:"Module"}));export{Xa as t};
