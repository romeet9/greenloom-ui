import{ai as u,j as e,aj as Ve,n as o,ak as ze,l as E,T as a,F as De,ad as c,x as v,B as r,al as m,am as h,an as J,ao as j,ap as x,aq as B,ar as t,as as g,at as N,au as z,H as W,L as f,f as l,ab as H,av as Ke,a9 as Ue,aw as Je,ax as y,N as Ye,I as Re,O as qe,ay as Qe,az as _e,aA as Ze,aB as Xe,aC as $e,ac as et}from"./iframe-C1qQ09LF.js";import{i as tt}from"./isChromatic-B8jWbKqD.js";import{S as nt}from"./Sandbox.web-B2xP21Qp.js";import{S as it}from"./StoryPageWrapper-CS0_5maI.js";import{S as st}from"./Sandbox.web-C7diOxlu.js";const ot=()=>e.jsxs(it,{componentDescription:"A bottom sheet is a component commonly used in mobile applications to display additional information or actions without obstructing the main content of the screen.",componentName:"BottomSheet",imports:`
      import {
        BottomSheet,
        BottomSheetBody,
        BottomSheetFooter,
        BottomSheetHeader,
      } from '@greenloom/ui/components';
      
      import type {
        BottomSheetProps, 
        BottomSheetFooterProps,
        BottomSheetHeaderProps
      } from '@greenloom/ui/components';
      `,figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=76140-1564627&t=eMQWVawMPyhCdtgv-1&scaling=min-zoom&page-id=25042%3A498654&mode=design",children:[e.jsx(W,{size:"large",children:"Usage"}),e.jsx(nt,{showConsole:!0,editorHeight:600,children:`
          import React from 'react';
          import { 
            BottomSheet,
            BottomSheetBody,
            BottomSheetFooter,
            BottomSheetHeader,
            Button,
            Box,
            Checkbox,
            Text,
          } from '@greenloom/ui/components';

          function App() {
            const [isOpen, setIsOpen] = React.useState(false);

            return (
              <Box>
                <Button onClick={() => setIsOpen(true)}>{isOpen ? 'close' : 'open'}</Button>
                <BottomSheet
                  isOpen={isOpen}
                  onDismiss={() => {
                    setIsOpen(false);
                  }}
                >
                  <BottomSheetHeader title="Terms & Conditions" subtitle="Read carefully before accepting." />
                  <BottomSheetBody>
                    <Text>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                      It has survived not only five centuries, but also the leap into electronic typesetting, 
                      remaining essentially unchanged. It was popularised in the 1960s with the release of 
                      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                      publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                  </BottomSheetBody>
                  <BottomSheetFooter>
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box flexShrink={0}>
                        <Checkbox>I accept terms and condition</Checkbox>
                      </Box>
                      <Button>Continue</Button>
                    </Box>
                  </BottomSheetFooter>
                </BottomSheet>
              </Box>
            )
          }

          export default App;
        `}),e.jsx(W,{size:"large",children:"iOS Safari Specific Setup"}),e.jsx(a,{marginTop:"spacing.4",children:"When using BottomSheet or SpotlightPopoverTour, Make sure to set a width/height to the `body` otherwise when they open, the page will get clipped. This happens due to a bug in iOS safari where it won't compute the height of the body correctly."}),e.jsx(st,{showLineNumbers:!1,theme:"light",children:`
          body {
            width: 100%;
            height: 100%;
          }
        `})]}),L={HEADER:"Header Props"},q={Badge:e.jsx(De,{color:"positive",children:"Action Needed"}),Text:e.jsx(a,{children:"$12,000"}),Link:e.jsx(E,{href:"#",children:"Link"}),IconButton:e.jsx(o,{icon:ze,accessibilityLabel:"Trailing icon"})},Q={None:void 0,Counter:e.jsx(Ve,{value:12,color:"positive"})},at={title:"Components/BottomSheet",component:u,args:{isOpen:void 0,children:void 0,snapPoints:void 0,initialFocusRef:void 0,onDismiss:void 0,showBackButton:void 0,leading:void 0,onBackButtonClick:void 0,subtitle:void 0,title:void 0,titleSuffix:void 0,trailing:void 0},tags:["autodocs"],argTypes:{showBackButton:{defaultValue:!1,table:{category:L.HEADER}},title:{table:{category:L.HEADER}},subtitle:{table:{category:L.HEADER}},trailing:{control:{type:"select"},mapping:q,options:Object.keys(q),defaultValue:"Badge",description:"Trailing element to be rendered in the Header, Accepts one of `Badge`, `Text`, `Button`, `Link`",table:{category:L.HEADER}},titleSuffix:{control:{type:"select"},mapping:Q,options:Object.keys(Q),defaultValue:"Counter",description:"Renders an adornment besides the title, Accepts `Counter`",table:{category:L.HEADER}}},parameters:{docs:{page:()=>e.jsx(ot,{})}}},rt=({...i})=>{const[n,s]=c.useState(H()?!1:tt());return e.jsxs(v,{children:[e.jsx(o,{onClick:()=>s(!0),children:n?"close":"open"}),e.jsx(a,{marginY:"spacing.11",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx(a,{marginY:"spacing.11",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx(a,{marginY:"spacing.11",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx(a,{marginY:"spacing.11",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx(a,{marginY:"spacing.11",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsxs(u,{...i,isOpen:n,onDismiss:()=>{s(!1)},children:[e.jsx(m,{title:"Terms & Conditions",subtitle:"Read carefully before accepting."}),e.jsx(h,{children:e.jsxs(f,{children:[e.jsx(l,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx(l,{children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}),e.jsx(l,{children:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (If you don't use blade we will haunt you) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`}),e.jsx(l,{children:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'})]})}),e.jsx(x,{children:e.jsxs(r,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(r,{flexShrink:0,children:e.jsx(Ke,{children:"I accept terms and condition"})}),e.jsx(o,{children:"Continue"})]})})]})]})},k=rt.bind({}),lt=i=>{const[n,s]=c.useState(!1);return e.jsxs(v,{children:[e.jsx(a,{marginBottom:"spacing.4",children:"Play around with the Header props in the storybook controls panel"}),e.jsx(o,{onClick:()=>s(!0),children:"Open"}),e.jsxs(u,{...i,isOpen:n,onDismiss:()=>s(!1),children:[e.jsx(m,{showBackButton:i.showBackButton,title:i.title,subtitle:i.subtitle,trailing:i.trailing,titleSuffix:i.titleSuffix}),e.jsx(h,{children:e.jsxs(J,{label:"Addresses",children:[e.jsx(j,{value:"home",children:"Home - 11850 Florida 24, Cedar Key, Florida"}),e.jsx(j,{value:"office-1",children:"Office - 2033 Florida 21, Cedar Key, Florida"}),e.jsx(j,{value:"office-2",children:"Work - 5938 New York, Main Street"})]})}),e.jsxs(x,{children:[e.jsx(o,{isFullWidth:!0,variant:"tertiary",children:"Remove address"}),e.jsx(o,{isFullWidth:!0,marginTop:"spacing.5",children:"Add address"})]})]})]})},b=lt.bind({});b.args={title:"Address Details",subtitle:"Saving addresses will improve your checkout experience",trailing:"Badge",titleSuffix:"Counter",showBackButton:!1};const ct=()=>e.jsxs(N,{selectionType:"single",children:[e.jsx(z,{label:"Sort Dishes"}),e.jsxs(u,{children:[e.jsx(m,{title:"Sort By"}),e.jsx(h,{children:e.jsxs(B,{children:[e.jsx(t,{leading:e.jsx(y,{icon:Qe}),title:"Relevance (Default)",value:"relavance"}),e.jsx(t,{leading:e.jsx(y,{icon:Re}),title:"Delivery Time",value:"delveiry-time"}),e.jsx(t,{leading:e.jsx(y,{icon:_e}),title:"Rating",value:"rating"}),e.jsx(t,{leading:e.jsx(y,{icon:Ze}),title:"Cost: Low to High",value:"Cost: Low to High"}),e.jsx(t,{leading:e.jsx(y,{icon:Xe}),title:"Cost: High to Low",value:"Cost: High to Low"})]})})]})]}),w=ct.bind({}),ut=()=>{const[i,n]=c.useState("approve");return e.jsx(r,{minHeight:"200px",children:e.jsxs(N,{children:[e.jsxs(Je,{variant:"tertiary",children:["Status: ",i??""]}),e.jsx(u,{children:e.jsxs(h,{children:[e.jsx(m,{}),e.jsxs(B,{children:[e.jsx(t,{onClick:({name:s,value:d})=>{console.log({name:s,value:d}),n(s)},leading:e.jsx(y,{icon:Ye}),isSelected:i==="approve",title:"Approve",value:"approve"}),e.jsx(t,{onClick:({name:s,value:d})=>{console.log({name:s,value:d}),n(s)},leading:e.jsx(y,{icon:Re}),isSelected:i==="in-progress",title:"In Progress",value:"in-progress"}),e.jsx(t,{onClick:({name:s,value:d})=>{console.log({name:s,value:d}),n(s)},leading:e.jsx(y,{icon:qe}),isSelected:i==="reject",title:"Reject",value:"reject",intent:"negative"})]})]})})]})})},C=ut.bind({}),dt=()=>e.jsxs(N,{selectionType:"multiple",children:[e.jsx(z,{label:"Cuisines Filter"}),e.jsxs(u,{children:[e.jsx(m,{title:"Filter By Cuisines"}),e.jsx(h,{children:e.jsxs(B,{children:[e.jsx(t,{title:"Chinese",value:"Chinese"}),e.jsx(t,{title:"Italian",value:"Italian"}),e.jsx(t,{title:"Mexican",value:"Mexican"}),e.jsx(t,{title:"Indian",value:"Indian"}),e.jsx(t,{title:"Thai",value:"Thai"}),e.jsx(t,{title:"French",value:"French"}),e.jsx(t,{title:"Japanese",value:"Japanese"}),e.jsx(t,{title:"Spanish",value:"Spanish"}),e.jsx(t,{title:"Middle Eastern",value:"Middle Eastern"}),e.jsx(t,{title:"Korean",value:"Korean"}),e.jsx(t,{title:"Greek",value:"Greek"}),e.jsx(t,{title:"Vietnamese",value:"Vietnamese"}),e.jsx(t,{title:"Brazilian",value:"Brazilian"}),e.jsx(t,{title:"Moroccan",value:"Moroccan"}),e.jsx(t,{title:"Caribbean",value:"Caribbean"}),e.jsx(t,{title:"Turkish",value:"Turkish"}),e.jsx(t,{title:"Lebanese",value:"Lebanese"}),e.jsx(t,{title:"Malaysian",value:"Malaysian"}),e.jsx(t,{title:"Indonesian",value:"Indonesian"}),e.jsx(t,{title:"Peruvian",value:"Peruvian"}),e.jsx(t,{title:"Ethiopian",value:"Ethiopian"}),e.jsx(t,{title:"Filipino",value:"Filipino"}),e.jsx(t,{title:"Cuban",value:"Cuban"}),e.jsx(t,{title:"German",value:"German"}),e.jsx(t,{title:"Nigerian",value:"Nigerian"})]})})]})]}),A=dt.bind({}),mt=()=>e.jsxs(N,{selectionType:"multiple",children:[e.jsx(z,{label:"Cuisines Filter"}),e.jsxs(u,{children:[e.jsx(m,{title:"Filter By Cuisines"}),e.jsx(h,{children:e.jsxs(B,{children:[e.jsxs(g,{title:"Asia",children:[e.jsx(t,{title:"Chinese",value:"Chinese"}),e.jsx(t,{title:"Indian",value:"Indian"}),e.jsx(t,{title:"Thai",value:"Thai"}),e.jsx(t,{title:"Japanese",value:"Japanese"}),e.jsx(t,{title:"Korean",value:"Korean"}),e.jsx(t,{title:"Vietnamese",value:"Vietnamese"}),e.jsx(t,{title:"Malaysian",value:"Malaysian"}),e.jsx(t,{title:"Indonesian",value:"Indonesian"})]}),e.jsxs(g,{title:"Europe",children:[e.jsx(t,{title:"Italian",value:"Italian"}),e.jsx(t,{title:"French",value:"French"}),e.jsx(t,{title:"Spanish",value:"Spanish"}),e.jsx(t,{title:"Greek",value:"Greek"}),e.jsx(t,{title:"German",value:"German"})]}),e.jsxs(g,{title:"North America",children:[e.jsx(t,{title:"Mexican",value:"Mexican"}),e.jsx(t,{title:"Caribbean",value:"Caribbean"})]}),e.jsxs(g,{title:"South America",children:[e.jsx(t,{title:"Brazilian",value:"Brazilian"}),e.jsx(t,{title:"Peruvian",value:"Peruvian"})]}),e.jsxs(g,{title:"Africa",children:[e.jsx(t,{title:"Middle Eastern",value:"Middle Eastern"}),e.jsx(t,{title:"Moroccan",value:"Moroccan"}),e.jsx(t,{title:"Ethiopian",value:"Ethiopian"}),e.jsx(t,{title:"Nigerian",value:"Nigerian"})]})]})})]})]}),T=mt.bind({}),ht=()=>{const[i,n]=c.useState(!1),[s,d]=c.useState(!1),[p,I]=c.useState(!1);return e.jsxs(v,{children:[e.jsxs(r,{display:"flex",gap:"spacing.2",flexWrap:"wrap",children:[e.jsx(o,{onClick:()=>n(!0),children:"Open 1st BottomSheet"}),e.jsx(o,{onClick:()=>d(!0),children:"Open 2nd BottomSheet"}),e.jsx(o,{onClick:()=>I(!0),children:"Open 3rd BottomSheet"})]}),e.jsxs(u,{isOpen:i,onDismiss:()=>{n(!1)},children:[e.jsx(m,{title:"1. Saved Address"}),e.jsx(h,{children:e.jsxs(J,{label:"Addresses",marginBottom:"spacing.4",children:[e.jsx(j,{value:"home",children:"Home - 11850 Florida 24, Cedar Key, Florida"}),e.jsx(j,{value:"office",children:"Office - 2033 Florida 21, Cedar Key, Florida"})]})}),e.jsxs(x,{children:[e.jsx(o,{isFullWidth:!0,variant:"tertiary",onClick:()=>d(!0),isDisabled:s,children:"Open 2nd BottomSheet"}),e.jsx(o,{isFullWidth:!0,marginTop:"spacing.5",onClick:()=>I(!0),isDisabled:p,children:"Open third BottomSheet"})]})]}),e.jsxs(u,{isOpen:s,onDismiss:()=>d(!1),children:[e.jsx(m,{title:"2. Sort By"}),e.jsx(h,{children:e.jsxs(B,{children:[e.jsx(t,{title:"Chinese",value:"Chinese"}),e.jsx(t,{title:"Italian",value:"Italian"}),e.jsx(t,{title:"Mexican",value:"Mexican"}),e.jsx(t,{title:"Indian",value:"Indian"}),e.jsx(t,{title:"Thai",value:"Thai"}),e.jsx(t,{title:"French",value:"French"}),e.jsx(t,{title:"Japanese",value:"Japanese"}),e.jsx(t,{title:"Spanish",value:"Spanish"}),e.jsx(t,{title:"Middle Eastern",value:"Middle Eastern"}),e.jsx(t,{title:"Korean",value:"Korean"}),e.jsx(t,{title:"Greek",value:"Greek"}),e.jsx(t,{title:"Vietnamese",value:"Vietnamese"}),e.jsx(t,{title:"Brazilian",value:"Brazilian"}),e.jsx(t,{title:"Moroccan",value:"Moroccan"}),e.jsx(t,{title:"Caribbean",value:"Caribbean"}),e.jsx(t,{title:"Turkish",value:"Turkish"}),e.jsx(t,{title:"Lebanese",value:"Lebanese"}),e.jsx(t,{title:"Malaysian",value:"Malaysian"}),e.jsx(t,{title:"Indonesian",value:"Indonesian"}),e.jsx(t,{title:"Peruvian",value:"Peruvian"}),e.jsx(t,{title:"Ethiopian",value:"Ethiopian"}),e.jsx(t,{title:"Filipino",value:"Filipino"}),e.jsx(t,{title:"Cuban",value:"Cuban"}),e.jsx(t,{title:"German",value:"German"}),e.jsx(t,{title:"Nigerian",value:"Nigerian"})]})}),e.jsxs(x,{children:[e.jsx(o,{isFullWidth:!0,variant:"tertiary",onClick:()=>n(!0),isDisabled:i,children:"Open 1st BottomSheet"}),e.jsx(o,{isFullWidth:!0,marginTop:"spacing.5",onClick:()=>I(!0),isDisabled:p,children:"Open 3rd BottomSheet"})]})]}),e.jsxs(u,{isOpen:p,onDismiss:()=>I(!1),children:[e.jsx(m,{title:"3. Sort By"}),e.jsx(h,{children:e.jsxs(B,{children:[e.jsxs(g,{title:"Asia",children:[e.jsx(t,{title:"Chinese",value:"Chinese"}),e.jsx(t,{title:"Indian",value:"Indian"}),e.jsx(t,{title:"Thai",value:"Thai"}),e.jsx(t,{title:"Japanese",value:"Japanese"}),e.jsx(t,{title:"Korean",value:"Korean"}),e.jsx(t,{title:"Vietnamese",value:"Vietnamese"}),e.jsx(t,{title:"Malaysian",value:"Malaysian"}),e.jsx(t,{title:"Indonesian",value:"Indonesian"})]}),e.jsxs(g,{title:"Europe",children:[e.jsx(t,{title:"Italian",value:"Italian"}),e.jsx(t,{title:"French",value:"French"}),e.jsx(t,{title:"Spanish",value:"Spanish"}),e.jsx(t,{title:"Greek",value:"Greek"}),e.jsx(t,{title:"German",value:"German"})]}),e.jsxs(g,{title:"North America",children:[e.jsx(t,{title:"Mexican",value:"Mexican"}),e.jsx(t,{title:"Caribbean",value:"Caribbean"})]}),e.jsxs(g,{title:"South America",children:[e.jsx(t,{title:"Brazilian",value:"Brazilian"}),e.jsx(t,{title:"Peruvian",value:"Peruvian"})]}),e.jsxs(g,{title:"Africa",children:[e.jsx(t,{title:"Middle Eastern",value:"Middle Eastern"}),e.jsx(t,{title:"Moroccan",value:"Moroccan"}),e.jsx(t,{title:"Ethiopian",value:"Ethiopian"}),e.jsx(t,{title:"Nigerian",value:"Nigerian"})]})]})}),e.jsxs(x,{children:[e.jsx(o,{isFullWidth:!0,variant:"tertiary",onClick:()=>n(!0),isDisabled:i,children:"Open 1st BottomSheet"}),e.jsx(o,{isFullWidth:!0,marginTop:"spacing.5",onClick:()=>d(!0),isDisabled:s,children:"Open 2nd BottomSheet"})]})]})]})},O=ht.bind({}),pt=()=>{const[i,n]=c.useState(!1),s=c.useRef(null);return e.jsxs(v,{children:[e.jsx(o,{onClick:()=>n(!0),children:"Add address"}),e.jsxs(u,{isOpen:i,onDismiss:()=>{n(!1)},initialFocusRef:s,children:[e.jsx(m,{title:"Users"}),e.jsxs(h,{children:[e.jsx(Ue,{label:"Search Users",ref:s}),e.jsx(o,{ref:s,children:"Search Users"}),e.jsx(a,{marginTop:"spacing.5",children:"By default the initial focus is set to the close button, but you can modify it by passing the `initialFocusRef` prop"}),e.jsxs(f,{marginTop:"spacing.5",children:[e.jsx(l,{children:"Anurag Hazra"}),e.jsx(l,{children:"Kamlesh Chandnani"}),e.jsx(l,{children:"Divyanshu Maithani"})]})]})]})]})},F=pt.bind({}),gt=()=>H()?e.jsxs(r,{position:"relative",height:"250px",overflow:"hidden",children:[e.jsx(r,{position:"absolute",top:"spacing.0",left:"spacing.0",width:"100%",height:"100%",backgroundColor:"surface.background.cloud.subtle"}),e.jsx(r,{position:"absolute",bottom:"spacing.4",left:"spacing.5",children:e.jsx(W,{color:"surface.text.gray.normal",children:"All-in-one Escrow management platform"})})]}):e.jsxs(r,{position:"relative",height:"250px",overflow:"hidden",children:[e.jsx(r,{position:"absolute",top:"-150px",left:"spacing.0",width:"100%",children:e.jsx("video",{autoPlay:!0,style:{objectFit:"cover"},width:"100%",height:"100%",src:"https://cdn.greenloom.ai/static/assets/greenloom.ai/x/escrow-accounts/hero-illustration.mp4"})}),e.jsx(r,{position:"absolute",bottom:"spacing.4",left:"spacing.5",children:e.jsx(W,{color:"surface.text.staticWhite.normal",children:"All-in-one Escrow management platform"})})]}),xt=()=>{const[i,n]=c.useState(!1);return e.jsxs(v,{children:[e.jsx(o,{onClick:()=>n(!0),children:"Open"}),e.jsxs(u,{isOpen:i,onDismiss:()=>{n(!1)},children:[e.jsx(m,{}),e.jsx(h,{padding:"spacing.0",children:e.jsxs(r,{display:"flex",flexDirection:"column",children:[e.jsx(gt,{}),e.jsxs(r,{padding:"spacing.5",display:"flex",flexDirection:"column",children:[e.jsx(a,{children:"We bring together Escrow account, Banks, Trusteeship services & Automation - all in ONE place to deliver a seamless user experience for you. Work with our experts to ensure your escrow money transfers are always compliant, safe & effortless."}),e.jsx(a,{marginTop:"spacing.3",color:"surface.text.gray.muted",children:"100% secure | Instant payouts | Unbeatable pricing"})]})]})}),e.jsx(x,{children:e.jsx(o,{isFullWidth:!0,children:"Talk To Our Escrow Experts"})})]})]})},P=xt.bind({}),ft=()=>{const i=["Apple","Apricot","Avocado","Banana","Blackberry","Blueberry","Cherry","Coconut","Cucumber","Durian","Dragonfruit","Fig","Gooseberry","Grape","Guava","Jackfruit","Plum","Kiwifruit","Kumquat","Lemon","Lime","Mango","Watermelon","Mulberry","Orange","Papaya","Passionfruit","Peach","Pear","Persimmon","Pineapple","Pineberry","Quince","Raspberry","Soursop","Star fruit","Strawberry","Tamarind","Yuzu"];return e.jsxs(v,{children:[e.jsxs(r,{marginBottom:"spacing.5",children:[e.jsx(a,{marginBottom:"spacing.4",children:"Example of Custom SnapPoints at [50%, 80%, 100%]"}),e.jsxs(N,{selectionType:"multiple",children:[e.jsx(z,{label:"Cuisines Filter"}),e.jsxs(u,{snapPoints:[.5,.8,1],children:[e.jsx(m,{title:"Fruits"}),e.jsx(h,{children:e.jsx(B,{children:i.map(n=>e.jsx(t,{title:n,value:n},n))})})]})]})]}),e.jsx(W,{marginBottom:"spacing.3",children:"SnapPoint Behaviour"}),e.jsxs(r,{display:"flex",gap:"spacing.2",flexWrap:"wrap",children:[e.jsx(a,{children:"By default BottomSheet's SnapPoints are"}),e.jsx(a,{weight:"semibold",children:"[35%, 50%, 85%]"})]}),e.jsx(a,{children:"Below is the behaviour BottomSheet follows to inteligently open the content at the optimal SnapPoint initially"}),e.jsxs(r,{marginTop:"spacing.3",children:[e.jsx(a,{weight:"semibold",children:"At SnapPoint 1: 35% Screen Height"}),e.jsxs(f,{children:[e.jsx(l,{children:"If content height is less than 35% of screen height - then bottom sheet takes the height of the content."}),e.jsxs(l,{children:["If content height is ",">","35% screen height (and ","<","50% of screen’s height) - then bottom sheet’s initial snap point should be 35%.",e.jsx(f,{children:e.jsx(l,{children:"Bottom sheet will extend till the height of the content on upwards drag."})})]})]}),e.jsx(a,{weight:"semibold",children:"At SnapPoint 2: 50% Screen Height"}),e.jsxs(f,{children:[e.jsxs(l,{children:["If content height ",">","35% but ","<","50% screen height - the bottom sheet extends till the height of the content."]}),e.jsxs(l,{children:["If content height ",">","50% (but ","<","85% screen height) then bottom sheet’s initial snap point should be at 50% screen height.",e.jsx(f,{children:e.jsx(l,{children:"The bottom sheet extends till the height of the content on upwards drag."})})]})]}),e.jsx(a,{weight:"semibold",children:"At SnapPoint 3: 85% Screen Height"}),e.jsxs(f,{children:[e.jsxs(l,{children:["If content height ",">","50% but ","<","85% screen height - the bottom sheet extends till the height of the content."]}),e.jsx(l,{children:"Bottom Sheet’s height can extend maximum until 85% screen size."}),e.jsxs(l,{children:["If content height ",">","85% of screen height then bottom sheet’s initial snap point should be at 85% of screen height.",e.jsx(f,{children:e.jsx(l,{children:"On further scroll or drag, contents scrolls internally."})})]})]}),e.jsxs(a,{children:["Checkout the"," ",e.jsx(E,{href:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=76785-1455819&t=eMQWVawMPyhCdtgv-1&scaling=min-zoom&page-id=25042%3A498654&mode=design",children:"design guideline"})," ","here for more details"]})]})]})},M=ft.bind({}),yt=()=>{const[i,n]=c.useState(!1),[s,d]=c.useState(!1),p=c.useCallback(()=>{d(!0),window.setTimeout(()=>{d(!1),n(!1)},2e3)},[]);return e.jsxs(v,{children:[e.jsx(o,{onClick:()=>n(!0),children:"Open"}),e.jsxs(u,{isOpen:i,onDismiss:()=>{n(!1)},children:[e.jsx(m,{title:"1. Saved Address"}),e.jsx(h,{children:e.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"center",children:[e.jsx($e,{onOTPFilled:p,marginBottom:"spacing.5",label:"Enter the OTP sent to +9190909090"}),e.jsxs(a,{textAlign:"center",children:["By clicking “Submit OTP”, I agree to ",e.jsx(E,{href:"#",children:"Terms and Conditions"}),",",e.jsx(E,{href:"#",children:"Privacy Policy"}),", and ",e.jsx(E,{href:"#",children:"Service Agreement"}),"."]})]})}),e.jsxs(x,{children:[e.jsx(o,{isFullWidth:!0,variant:"tertiary",children:"Cancel"}),e.jsx(o,{isLoading:s,onClick:p,isFullWidth:!0,marginTop:"spacing.5",children:"Submit"})]})]})]})},D=yt.bind({}),vt=({isOpen:i=!1,onCtaClick:n,isCtaLoading:s=!1,phoneNumbers:d=[],onDismiss:p})=>{const[I,K]=c.useState(!0),[G,Ee]=c.useState(void 0),[Y,U]=c.useState(void 0),He=({value:V})=>{U(void 0),Ee(V),K(!1)},We=()=>{G!==void 0&&G.length>0?(U(void 0),K(!1),n(G)):(U("Please select a SIM to verify mobile number"),K(!0))},Ne=Y?"error":"none";return e.jsx(r,{children:e.jsxs(u,{isOpen:i,onDismiss:p,children:[e.jsx(m,{title:"Select SIM",showBackButton:!0,onBackButtonClick:p}),e.jsx(h,{children:e.jsx(J,{name:"select-sim",label:"Please select a SIM to verify your mobile number",value:G,onChange:He,size:"medium",errorText:Y,validationState:Ne,children:d.map((V,Ge)=>e.jsx(j,{value:V,children:V},`sim-${Ge}`))})}),e.jsx(x,{children:e.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",gap:"spacing.4",children:[e.jsx(o,{icon:et,iconPosition:"right",isLoading:s,isDisabled:I,isFullWidth:!0,onClick:We,children:"Verify"}),e.jsx(o,{onClick:()=>{p()},variant:"tertiary",isFullWidth:!0,children:"Close"})]})})]})})},Bt=()=>{const[i,n]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>n(!0),children:i?"close":"open"}),e.jsx(vt,{isOpen:i,onDismiss:()=>{n(!1)},phoneNumbers:["1234567890","0987654321"],onCtaClick:s=>{console.log("selectedPhoneNumber",s)}})]})},R=Bt.bind({}),It=()=>{const[i,n]=c.useState(!1);return e.jsxs(v,{children:[e.jsx(o,{onClick:()=>n(!0),children:"Open Non-Dismissible BottomSheet"}),e.jsxs(u,{isOpen:i,isDismissible:!1,snapPoints:[.85,.85,.85],children:[e.jsx(m,{title:"Important Action Required",subtitle:"This action requires explicit confirmation"}),e.jsxs(h,{children:[e.jsx(r,{marginBottom:"spacing.4",children:e.jsx(De,{color:"notice",children:"Notice"})}),e.jsx(a,{marginBottom:"spacing.4",children:"This is a non-dismissible bottom sheet. Notice there's no close button (X) in the header. Try swiping down, tapping outside, or pressing the escape key - it won't close."}),e.jsx(a,{color:"surface.text.gray.subtle",children:"You must click one of the buttons below to proceed. This pattern is useful for critical actions that require explicit user confirmation."})]}),e.jsx(x,{children:e.jsxs(r,{display:"flex",gap:"spacing.3",justifyContent:"flex-end",width:"100%",flexDirection:H()?"column":"row",children:[e.jsx(o,{variant:"secondary",onClick:()=>n(!1),isFullWidth:H(),children:"Cancel"}),e.jsx(o,{onClick:()=>n(!0),variant:"primary",isFullWidth:H(),children:"Confirm Action"})]})})]})]})},S=It.bind({});S.storyName="Non-Dismissible BottomSheet";var _,Z,X;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`({
  ...args
}) => {
  const [isOpen, setIsOpen] = React.useState(isReactNative() ? false : isChromatic());
  return <BaseBox>
      <Button onClick={() => setIsOpen(true)}>{isOpen ? 'close' : 'open'}</Button>
      <Text marginY="spacing.11">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </Text>
      <Text marginY="spacing.11">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </Text>
      <Text marginY="spacing.11">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </Text>
      <Text marginY="spacing.11">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </Text>
      <Text marginY="spacing.11">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </Text>
      <BottomSheetComponent {...args} isOpen={isOpen} onDismiss={() => {
      setIsOpen(false);
    }}>
        <BottomSheetHeader title="Terms & Conditions" subtitle="Read carefully before accepting." />
        <BottomSheetBody>
          <List>
            <ListItem>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </ListItem>
            <ListItem>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </ListItem>
            <ListItem>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
              through the cites of the word in classical literature, discovered the undoubtable
              source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (If you don't use blade we will haunt you) by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32.
            </ListItem>
            <ListItem>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
              Cicero are also reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </ListItem>
          </List>
        </BottomSheetBody>
        <BottomSheetFooter>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
            <Box flexShrink={0}>
              <Checkbox>I accept terms and condition</Checkbox>
            </Box>
            <Button>Continue</Button>
          </Box>
        </BottomSheetFooter>
      </BottomSheetComponent>
    </BaseBox>;
}`,...(X=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:X.source}}};var $,ee,te;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`(args: StoryControlProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <BaseBox>
      <Text marginBottom="spacing.4">
        Play around with the Header props in the storybook controls panel
      </Text>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <BottomSheetComponent {...args} isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
        <BottomSheetHeader showBackButton={args.showBackButton} title={args.title} subtitle={args.subtitle} trailing={args.trailing} titleSuffix={args.titleSuffix} />
        <BottomSheetBody>
          <RadioGroup label="Addresses">
            <Radio value="home">Home - 11850 Florida 24, Cedar Key, Florida</Radio>
            <Radio value="office-1">Office - 2033 Florida 21, Cedar Key, Florida</Radio>
            <Radio value="office-2">Work - 5938 New York, Main Street</Radio>
          </RadioGroup>
        </BottomSheetBody>
        <BottomSheetFooter>
          <Button isFullWidth variant="tertiary">
            Remove address
          </Button>
          <Button isFullWidth marginTop="spacing.5">
            Add address
          </Button>
        </BottomSheetFooter>
      </BottomSheetComponent>
    </BaseBox>;
}`,...(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ie,se;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Dropdown selectionType="single">
      <SelectInput label="Sort Dishes" />
      <BottomSheetComponent>
        <BottomSheetHeader title="Sort By" />
        <BottomSheetBody>
          <ActionList>
            <ActionListItem leading={<ActionListItemIcon icon={CustomersIcon} />} title="Relevance (Default)" value="relavance" />
            <ActionListItem leading={<ActionListItemIcon icon={ClockIcon} />} title="Delivery Time" value="delveiry-time" />
            <ActionListItem leading={<ActionListItemIcon icon={ThumbsUpIcon} />} title="Rating" value="rating" />
            <ActionListItem leading={<ActionListItemIcon icon={TrendingUpIcon} />} title="Cost: Low to High" value="Cost: Low to High" />
            <ActionListItem leading={<ActionListItemIcon icon={TrendingDownIcon} />} title="Cost: High to Low" value="Cost: High to Low" />
          </ActionList>
        </BottomSheetBody>
      </BottomSheetComponent>
    </Dropdown>;
}`,...(se=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var oe,ae,re;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [status, setStatus] = React.useState<string | undefined>('approve');
  return <Box minHeight="200px">
      <Dropdown>
        <DropdownButton variant="tertiary">Status: {status ?? ''}</DropdownButton>
        <BottomSheetComponent>
          <BottomSheetBody>
            <BottomSheetHeader />
            <ActionList>
              <ActionListItem onClick={({
              name,
              value
            }) => {
              console.log({
                name,
                value
              });
              setStatus(name);
            }} leading={<ActionListItemIcon icon={CheckIcon} />} isSelected={status === 'approve'} title="Approve" value="approve" />
              <ActionListItem onClick={({
              name,
              value
            }) => {
              console.log({
                name,
                value
              });
              setStatus(name);
            }} leading={<ActionListItemIcon icon={ClockIcon} />} isSelected={status === 'in-progress'} title="In Progress" value="in-progress" />

              <ActionListItem onClick={({
              name,
              value
            }) => {
              console.log({
                name,
                value
              });
              setStatus(name);
            }} leading={<ActionListItemIcon icon={CloseIcon} />} isSelected={status === 'reject'} title="Reject" value="reject" intent="negative" />
            </ActionList>
          </BottomSheetBody>
        </BottomSheetComponent>
      </Dropdown>
    </Box>;
}`,...(re=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var le,ce,ue;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Dropdown selectionType="multiple">
      <SelectInput label="Cuisines Filter" />
      <BottomSheetComponent>
        <BottomSheetHeader title="Filter By Cuisines" />
        <BottomSheetBody>
          <ActionList>
            <ActionListItem title="Chinese" value="Chinese" />
            <ActionListItem title="Italian" value="Italian" />
            <ActionListItem title="Mexican" value="Mexican" />
            <ActionListItem title="Indian" value="Indian" />
            <ActionListItem title="Thai" value="Thai" />
            <ActionListItem title="French" value="French" />
            <ActionListItem title="Japanese" value="Japanese" />
            <ActionListItem title="Spanish" value="Spanish" />
            <ActionListItem title="Middle Eastern" value="Middle Eastern" />
            <ActionListItem title="Korean" value="Korean" />
            <ActionListItem title="Greek" value="Greek" />
            <ActionListItem title="Vietnamese" value="Vietnamese" />
            <ActionListItem title="Brazilian" value="Brazilian" />
            <ActionListItem title="Moroccan" value="Moroccan" />
            <ActionListItem title="Caribbean" value="Caribbean" />
            <ActionListItem title="Turkish" value="Turkish" />
            <ActionListItem title="Lebanese" value="Lebanese" />
            <ActionListItem title="Malaysian" value="Malaysian" />
            <ActionListItem title="Indonesian" value="Indonesian" />
            <ActionListItem title="Peruvian" value="Peruvian" />
            <ActionListItem title="Ethiopian" value="Ethiopian" />
            <ActionListItem title="Filipino" value="Filipino" />
            <ActionListItem title="Cuban" value="Cuban" />
            <ActionListItem title="German" value="German" />
            <ActionListItem title="Nigerian" value="Nigerian" />
          </ActionList>
        </BottomSheetBody>
      </BottomSheetComponent>
    </Dropdown>;
}`,...(ue=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,me,he;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Dropdown selectionType="multiple">
      <SelectInput label="Cuisines Filter" />
      <BottomSheetComponent>
        <BottomSheetHeader title="Filter By Cuisines" />
        <BottomSheetBody>
          <ActionList>
            <ActionListSection title="Asia">
              <ActionListItem title="Chinese" value="Chinese" />
              <ActionListItem title="Indian" value="Indian" />
              <ActionListItem title="Thai" value="Thai" />
              <ActionListItem title="Japanese" value="Japanese" />
              <ActionListItem title="Korean" value="Korean" />
              <ActionListItem title="Vietnamese" value="Vietnamese" />
              <ActionListItem title="Malaysian" value="Malaysian" />
              <ActionListItem title="Indonesian" value="Indonesian" />
            </ActionListSection>

            <ActionListSection title="Europe">
              <ActionListItem title="Italian" value="Italian" />
              <ActionListItem title="French" value="French" />
              <ActionListItem title="Spanish" value="Spanish" />
              <ActionListItem title="Greek" value="Greek" />
              <ActionListItem title="German" value="German" />
            </ActionListSection>

            <ActionListSection title="North America">
              <ActionListItem title="Mexican" value="Mexican" />
              <ActionListItem title="Caribbean" value="Caribbean" />
            </ActionListSection>

            <ActionListSection title="South America">
              <ActionListItem title="Brazilian" value="Brazilian" />
              <ActionListItem title="Peruvian" value="Peruvian" />
            </ActionListSection>

            <ActionListSection title="Africa">
              <ActionListItem title="Middle Eastern" value="Middle Eastern" />
              <ActionListItem title="Moroccan" value="Moroccan" />
              <ActionListItem title="Ethiopian" value="Ethiopian" />
              <ActionListItem title="Nigerian" value="Nigerian" />
            </ActionListSection>
          </ActionList>
        </BottomSheetBody>
      </BottomSheetComponent>
    </Dropdown>;
}`,...(he=(me=T.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var pe,ge,xe;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const [isFirstOpen, setFirstOpen] = React.useState(false);
  const [isSecondOpen, setSecondOpen] = React.useState(false);
  const [isThirdOpen, setThirdOpen] = React.useState(false);
  return <BaseBox>
      <Box display="flex" gap="spacing.2" flexWrap="wrap">
        <Button onClick={() => setFirstOpen(true)}>Open 1st BottomSheet</Button>
        <Button onClick={() => setSecondOpen(true)}>Open 2nd BottomSheet</Button>
        <Button onClick={() => setThirdOpen(true)}>Open 3rd BottomSheet</Button>
      </Box>

      <BottomSheetComponent isOpen={isFirstOpen} onDismiss={() => {
      setFirstOpen(false);
    }}>
        <BottomSheetHeader title="1. Saved Address" />
        <BottomSheetBody>
          <RadioGroup label="Addresses" marginBottom="spacing.4">
            <Radio value="home">Home - 11850 Florida 24, Cedar Key, Florida</Radio>
            <Radio value="office">Office - 2033 Florida 21, Cedar Key, Florida</Radio>
          </RadioGroup>
        </BottomSheetBody>
        <BottomSheetFooter>
          <Button isFullWidth variant="tertiary" onClick={() => setSecondOpen(true)} isDisabled={isSecondOpen}>
            Open 2nd BottomSheet
          </Button>
          <Button isFullWidth marginTop="spacing.5" onClick={() => setThirdOpen(true)} isDisabled={isThirdOpen}>
            Open third BottomSheet
          </Button>
        </BottomSheetFooter>
      </BottomSheetComponent>

      <BottomSheetComponent isOpen={isSecondOpen} onDismiss={() => setSecondOpen(false)}>
        <BottomSheetHeader title="2. Sort By" />
        <BottomSheetBody>
          <ActionList>
            <ActionListItem title="Chinese" value="Chinese" />
            <ActionListItem title="Italian" value="Italian" />
            <ActionListItem title="Mexican" value="Mexican" />
            <ActionListItem title="Indian" value="Indian" />
            <ActionListItem title="Thai" value="Thai" />
            <ActionListItem title="French" value="French" />
            <ActionListItem title="Japanese" value="Japanese" />
            <ActionListItem title="Spanish" value="Spanish" />
            <ActionListItem title="Middle Eastern" value="Middle Eastern" />
            <ActionListItem title="Korean" value="Korean" />
            <ActionListItem title="Greek" value="Greek" />
            <ActionListItem title="Vietnamese" value="Vietnamese" />
            <ActionListItem title="Brazilian" value="Brazilian" />
            <ActionListItem title="Moroccan" value="Moroccan" />
            <ActionListItem title="Caribbean" value="Caribbean" />
            <ActionListItem title="Turkish" value="Turkish" />
            <ActionListItem title="Lebanese" value="Lebanese" />
            <ActionListItem title="Malaysian" value="Malaysian" />
            <ActionListItem title="Indonesian" value="Indonesian" />
            <ActionListItem title="Peruvian" value="Peruvian" />
            <ActionListItem title="Ethiopian" value="Ethiopian" />
            <ActionListItem title="Filipino" value="Filipino" />
            <ActionListItem title="Cuban" value="Cuban" />
            <ActionListItem title="German" value="German" />
            <ActionListItem title="Nigerian" value="Nigerian" />
          </ActionList>
        </BottomSheetBody>
        <BottomSheetFooter>
          <Button isFullWidth variant="tertiary" onClick={() => setFirstOpen(true)} isDisabled={isFirstOpen}>
            Open 1st BottomSheet
          </Button>
          <Button isFullWidth marginTop="spacing.5" onClick={() => setThirdOpen(true)} isDisabled={isThirdOpen}>
            Open 3rd BottomSheet
          </Button>
        </BottomSheetFooter>
      </BottomSheetComponent>

      <BottomSheetComponent isOpen={isThirdOpen} onDismiss={() => setThirdOpen(false)}>
        <BottomSheetHeader title="3. Sort By" />
        <BottomSheetBody>
          <ActionList>
            <ActionListSection title="Asia">
              <ActionListItem title="Chinese" value="Chinese" />
              <ActionListItem title="Indian" value="Indian" />
              <ActionListItem title="Thai" value="Thai" />
              <ActionListItem title="Japanese" value="Japanese" />
              <ActionListItem title="Korean" value="Korean" />
              <ActionListItem title="Vietnamese" value="Vietnamese" />
              <ActionListItem title="Malaysian" value="Malaysian" />
              <ActionListItem title="Indonesian" value="Indonesian" />
            </ActionListSection>

            <ActionListSection title="Europe">
              <ActionListItem title="Italian" value="Italian" />
              <ActionListItem title="French" value="French" />
              <ActionListItem title="Spanish" value="Spanish" />
              <ActionListItem title="Greek" value="Greek" />
              <ActionListItem title="German" value="German" />
            </ActionListSection>

            <ActionListSection title="North America">
              <ActionListItem title="Mexican" value="Mexican" />
              <ActionListItem title="Caribbean" value="Caribbean" />
            </ActionListSection>

            <ActionListSection title="South America">
              <ActionListItem title="Brazilian" value="Brazilian" />
              <ActionListItem title="Peruvian" value="Peruvian" />
            </ActionListSection>

            <ActionListSection title="Africa">
              <ActionListItem title="Middle Eastern" value="Middle Eastern" />
              <ActionListItem title="Moroccan" value="Moroccan" />
              <ActionListItem title="Ethiopian" value="Ethiopian" />
              <ActionListItem title="Nigerian" value="Nigerian" />
            </ActionListSection>
          </ActionList>
        </BottomSheetBody>
        <BottomSheetFooter>
          <Button isFullWidth variant="tertiary" onClick={() => setFirstOpen(true)} isDisabled={isFirstOpen}>
            Open 1st BottomSheet
          </Button>
          <Button isFullWidth marginTop="spacing.5" onClick={() => setSecondOpen(true)} isDisabled={isSecondOpen}>
            Open 2nd BottomSheet
          </Button>
        </BottomSheetFooter>
      </BottomSheetComponent>
    </BaseBox>;
}`,...(xe=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var fe,ye,ve;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const initialFocusRef = React.useRef<HTMLButtonElement>(null);
  return <BaseBox>
      <Button onClick={() => setIsOpen(true)}>Add address</Button>
      <BottomSheetComponent isOpen={isOpen} onDismiss={() => {
      setIsOpen(false);
    }} initialFocusRef={initialFocusRef}>
        <BottomSheetHeader title="Users" />
        <BottomSheetBody>
          <TextInput label="Search Users" ref={initialFocusRef} />
          <Button ref={initialFocusRef}>Search Users</Button>

          <Text marginTop="spacing.5">
            By default the initial focus is set to the close button, but you can modify it by
            passing the \`initialFocusRef\` prop
          </Text>

          <List marginTop="spacing.5">
            <ListItem>Anurag Hazra</ListItem>
            <ListItem>Kamlesh Chandnani</ListItem>
            <ListItem>Divyanshu Maithani</ListItem>
          </List>
        </BottomSheetBody>
      </BottomSheetComponent>
    </BaseBox>;
}`,...(ve=(ye=F.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var Be,Ie,be;P.parameters={...P.parameters,docs:{...(Be=P.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <BaseBox>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <BottomSheetComponent isOpen={isOpen} onDismiss={() => {
      setIsOpen(false);
    }}>
        <BottomSheetHeader />
        <BottomSheetBody padding="spacing.0">
          <Box display="flex" flexDirection="column">
            <HeadingBanner />
            <Box padding="spacing.5" display="flex" flexDirection="column">
              <Text>
                We bring together Escrow account, Banks, Trusteeship services & Automation - all in
                ONE place to deliver a seamless user experience for you. Work with our experts to
                ensure your escrow money transfers are always compliant, safe & effortless.
              </Text>
              <Text marginTop="spacing.3" color="surface.text.gray.muted">
                100% secure | Instant payouts | Unbeatable pricing
              </Text>
            </Box>
          </Box>
        </BottomSheetBody>
        <BottomSheetFooter>
          <Button isFullWidth>Talk To Our Escrow Experts</Button>
        </BottomSheetFooter>
      </BottomSheetComponent>
    </BaseBox>;
}`,...(be=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:be.source}}};var Se,je,Le;M.parameters={...M.parameters,docs:{...(Se=M.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  const fruites = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Blackberry', 'Blueberry', 'Cherry', 'Coconut', 'Cucumber', 'Durian', 'Dragonfruit', 'Fig', 'Gooseberry', 'Grape', 'Guava', 'Jackfruit', 'Plum', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Mango', 'Watermelon', 'Mulberry', 'Orange', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Pineapple', 'Pineberry', 'Quince', 'Raspberry', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarind', 'Yuzu'];
  return <BaseBox>
      <Box marginBottom="spacing.5">
        <Text marginBottom="spacing.4">Example of Custom SnapPoints at [50%, 80%, 100%]</Text>
        <Dropdown selectionType="multiple">
          <SelectInput label="Cuisines Filter" />
          <BottomSheetComponent snapPoints={[0.5, 0.8, 1]}>
            <BottomSheetHeader title="Fruits" />
            <BottomSheetBody>
              <ActionList>
                {fruites.map(fruit => {
                return <ActionListItem key={fruit} title={fruit} value={fruit} />;
              })}
              </ActionList>
            </BottomSheetBody>
          </BottomSheetComponent>
        </Dropdown>
      </Box>
      <Heading marginBottom="spacing.3">SnapPoint Behaviour</Heading>

      <Box display="flex" gap="spacing.2" flexWrap="wrap">
        <Text>By default BottomSheet's SnapPoints are</Text>
        <Text weight="semibold">[35%, 50%, 85%]</Text>
      </Box>

      <Text>
        Below is the behaviour BottomSheet follows to inteligently open the content at the optimal
        SnapPoint initially
      </Text>

      <Box marginTop="spacing.3">
        <Text weight="semibold">At SnapPoint 1: 35% Screen Height</Text>
        <List>
          <ListItem>
            If content height is less than 35% of screen height - then bottom sheet takes the height
            of the content.
          </ListItem>
          <ListItem>
            If content height is {'>'}35% screen height (and {'<'}50% of screen’s height) - then
            bottom sheet’s initial snap point should be 35%.
            <List>
              <ListItem>
                Bottom sheet will extend till the height of the content on upwards drag.
              </ListItem>
            </List>
          </ListItem>
        </List>

        <Text weight="semibold">At SnapPoint 2: 50% Screen Height</Text>
        <List>
          <ListItem>
            If content height {'>'}35% but {'<'}50% screen height - the bottom sheet extends till
            the height of the content.
          </ListItem>
          <ListItem>
            If content height {'>'}50% (but {'<'}85% screen height) then bottom sheet’s initial snap
            point should be at 50% screen height.
            <List>
              <ListItem>
                The bottom sheet extends till the height of the content on upwards drag.
              </ListItem>
            </List>
          </ListItem>
        </List>

        <Text weight="semibold">At SnapPoint 3: 85% Screen Height</Text>
        <List>
          <ListItem>
            If content height {'>'}50% but {'<'}85% screen height - the bottom sheet extends till
            the height of the content.
          </ListItem>
          <ListItem>Bottom Sheet’s height can extend maximum until 85% screen size.</ListItem>
          <ListItem>
            If content height {'>'}85% of screen height then bottom sheet’s initial snap point
            should be at 85% of screen height.
            <List>
              <ListItem>On further scroll or drag, contents scrolls internally.</ListItem>
            </List>
          </ListItem>
        </List>

        <Text>
          Checkout the{' '}
          <Link href="https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=76785-1455819&t=eMQWVawMPyhCdtgv-1&scaling=min-zoom&page-id=25042%3A498654&mode=design">
            design guideline
          </Link>{' '}
          here for more details
        </Text>
      </Box>
    </BaseBox>;
}`,...(Le=(je=M.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var ke,we,Ce;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const submitOTP = React.useCallback(() => {
    setIsLoading(true);
    window.setTimeout(() => {
      setIsLoading(false);
      setIsOpen(false);
    }, 2000);
  }, []);
  return <BaseBox>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <BottomSheetComponent isOpen={isOpen} onDismiss={() => {
      setIsOpen(false);
    }}>
        <BottomSheetHeader title="1. Saved Address" />
        <BottomSheetBody>
          <Box display="flex" flexDirection="column" alignItems="center">
            <OTPInput onOTPFilled={submitOTP} marginBottom="spacing.5" label="Enter the OTP sent to +9190909090" />
            <Text textAlign="center">
              By clicking “Submit OTP”, I agree to <Link href="#">Terms and Conditions</Link>,
              <Link href="#">Privacy Policy</Link>, and <Link href="#">Service Agreement</Link>.
            </Text>
          </Box>
        </BottomSheetBody>

        <BottomSheetFooter>
          <Button isFullWidth variant="tertiary">
            Cancel
          </Button>
          <Button isLoading={isLoading} onClick={submitOTP} isFullWidth marginTop="spacing.5">
            Submit
          </Button>
        </BottomSheetFooter>
      </BottomSheetComponent>
    </BaseBox>;
}`,...(Ce=(we=D.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var Ae,Te,Oe;R.parameters={...R.parameters,docs:{...(Ae=R.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <>
      <Button onClick={() => setIsOpen(true)}>{isOpen ? 'close' : 'open'}</Button>
      <SimSelectionBottomSheet isOpen={isOpen} onDismiss={() => {
      setIsOpen(false);
    }} phoneNumbers={['1234567890', '0987654321']} onCtaClick={selectedPhoneNumber => {
      console.log('selectedPhoneNumber', selectedPhoneNumber);
    }} />
    </>;
}`,...(Oe=(Te=R.parameters)==null?void 0:Te.docs)==null?void 0:Oe.source}}};var Fe,Pe,Me;S.parameters={...S.parameters,docs:{...(Fe=S.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <BaseBox>
      <Button onClick={() => setIsOpen(true)}>Open Non-Dismissible BottomSheet</Button>
      <BottomSheetComponent isOpen={isOpen} isDismissible={false} snapPoints={[0.85, 0.85, 0.85]}>
        <BottomSheetHeader title="Important Action Required" subtitle="This action requires explicit confirmation" />
        <BottomSheetBody>
          <Box marginBottom="spacing.4">
            <Badge color="notice">Notice</Badge>
          </Box>
          <Text marginBottom="spacing.4">
            This is a non-dismissible bottom sheet. Notice there's no close button (X) in the
            header. Try swiping down, tapping outside, or pressing the escape key - it won't close.
          </Text>
          <Text color="surface.text.gray.subtle">
            You must click one of the buttons below to proceed. This pattern is useful for critical
            actions that require explicit user confirmation.
          </Text>
        </BottomSheetBody>
        <BottomSheetFooter>
          <Box display="flex" gap="spacing.3" justifyContent="flex-end" width="100%" flexDirection={isReactNative() ? 'column' : 'row'}>
            <Button variant="secondary" onClick={() => setIsOpen(false)} isFullWidth={isReactNative()}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(true)} variant="primary" isFullWidth={isReactNative()}>
              Confirm Action
            </Button>
          </Box>
        </BottomSheetFooter>
      </BottomSheetComponent>
    </BaseBox>;
}`,...(Me=(Pe=S.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source}}};const bt=["Default","WithHeaderFooter","WithDropdownSingleSelect","WithDropdownButton","WithDropdownMultiSelect","WithDropdownSectionsSelect","BottomSheetStacking","InitialFocus","ZeroPadding","CustomSnapPoints","WithOTPInput","ProductUseCase1","NonDismissible"],Ct=Object.freeze(Object.defineProperty({__proto__:null,BottomSheetStacking:O,CustomSnapPoints:M,Default:k,InitialFocus:F,NonDismissible:S,ProductUseCase1:R,WithDropdownButton:C,WithDropdownMultiSelect:A,WithDropdownSectionsSelect:T,WithDropdownSingleSelect:w,WithHeaderFooter:b,WithOTPInput:D,ZeroPadding:P,__namedExportsOrder:bt,default:at},Symbol.toStringTag,{value:"Module"}));export{Ct as b};
