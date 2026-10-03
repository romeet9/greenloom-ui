import{aI as i,j as e,X as Be,ic as Te,id as H,ie as ue,c3 as me,ig as ve,ih as xe,i7 as d,i8 as l,ii as k,bM as we,ij as B,aJ as n,x as s,a9 as c,ik as I,il as L,im as R,B as a,io as A,T as o,m as je,s as ke,H as w,ab as T,ip as Ie,ac as Le,gx as he,a8 as j,iq as Re,ir as He,is as Ae,hk as De}from"./iframe-C1qQ09LF.js";import{S as Se}from"./Sandbox.web-B2xP21Qp.js";import{S as Pe}from"./StoryPageWrapper-CS0_5maI.js";import{i as D}from"./iconMap-BGYDFM5U.js";import{g as Ee}from"./storybookArgTypes-DFfQV31s.js";import{S}from"./StoryScrollView-CPRIWs7O.js";const Fe=()=>e.jsxs(Pe,{componentName:"Card",componentDescription:"Cards are used to group similar concepts and tasks together to make easier for merchants to scan, read, and get things done. In simpler words Cards help seprates content into sections. They are the surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=75857-127700&t=228BuziDJiPsRuIh-1&scaling=min-zoom&page-id=21248%3A307966&mode=design",children:[e.jsx(Be,{children:"Usage"}),e.jsx(Se,{editorHeight:500,children:`
        import {
          Card,
          CardBody,
          CardFooter,
          CardFooterLeading,
          CardFooterTrailing,
          CardHeader,
          CardHeaderLeading,
          CardHeaderTrailing,
          CardHeaderIcon,
          CardHeaderCounter,
          CardHeaderBadge,
          CardHeaderIconButton,
          InfoIcon,
          Text
        } from '@greenloom/ui/components';

        function App() {
          return (
            <Card>
              <CardHeader>
                <CardHeaderLeading
                  title="Card Header"
                  subtitle="Subtitle"
                  prefix={<CardHeaderIcon icon={InfoIcon} />}
                  suffix={<CardHeaderCounter value={12} />}
                />
                <CardHeaderTrailing visual={<CardHeaderBadge color="positive">NEW</CardHeaderBadge>} />
              </CardHeader>
              <CardBody>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen book. It has survived not only
                  five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum.
                </Text>
              </CardBody>
              <CardFooter>
                <CardFooterLeading title="Card footer title" subtitle="Subtitle" />
                <CardFooterTrailing
                  actions={{
                    primary: {
                      onClick: () => console.log("Primary action clicked"),
                      text: 'Accept',
                    },
                    secondary: {
                      onClick: () => console.log("Secondary action clicked"),
                      text: 'Cancel',
                    },
                  }}
                />
              </CardFooter>
            </Card>
          )
        }

        export default App;
        `})]}),t={CARD:"Card Props",CARD_HEADER:"Header Props",CARD_HEADER_LEADING:"Header Leading Props",CARD_FOOTER:"Footer Props",CARD_FOOTER_LEADING:"Footer Leading Props",CARD_FOOTER_TRAILING:"Footer Trailing Props"},v=["spacing.0","spacing.3","spacing.4","spacing.5","spacing.7"],P={Link:e.jsx(xe,{href:"/",children:"Learn more"}),Text:e.jsx(ve,{children:"$100"}),IconButton:e.jsx(ue,{icon:me}),Badge:e.jsx(H,{color:"positive",children:"NEW"}),Amount:e.jsx(Te,{value:1e3})},Me={title:"Components/Card",component:i,args:{backgroundColor:"surface.background.gray.intense",borderRadius:"medium",elevation:"lowRaised",padding:"spacing.7",headerTitle:"Payment Links",headerSubtitle:"Share payment link via an email, SMS, messenger, chatbot etc.",headerPaddingBottom:"spacing.4",headerMarginBottom:"spacing.4",footerTitle:"Built for Developers",footerSubtitle:"By Developers.",footerMarginTop:"spacing.4",footerPaddingTop:"spacing.4",body:"Create Green Loom Payments Links and share them with your customers from the Green Loom Dashboard or using APIs and start accepting payments. Check the advantages, payment methods, international currency support and more.",footerPrimaryAction:{text:"Learn More",onClick:()=>{console.log("Primary Action Clicked")},isDisabled:!1,icon:void 0,accessibilityLabel:void 0,iconPosition:void 0,isLoading:!1,type:void 0},footerSecondaryAction:{text:"Try Demo",onClick:()=>{console.log("Secondary Action Clicked")},isDisabled:!1,icon:void 0,accessibilityLabel:void 0,iconPosition:void 0,isLoading:!1,type:void 0},prefix:"LinkIcon",suffix:12,visual:"Badge"},tags:["autodocs"],argTypes:{backgroundColor:{table:{category:t.CARD}},borderRadius:{table:{category:t.CARD}},elevation:{table:{category:t.CARD}},padding:{table:{category:t.CARD}},headerTitle:{table:{category:t.CARD_HEADER_LEADING}},headerSubtitle:{table:{category:t.CARD_HEADER_LEADING}},headerMarginBottom:{table:{category:t.CARD_HEADER},control:{type:"radio",options:v}},headerPaddingBottom:{table:{category:t.CARD_HEADER},control:{type:"radio",options:v}},prefix:{control:{type:"select"},mapping:D,options:Object.keys(D),table:{category:t.CARD_HEADER_LEADING}},suffix:{control:{type:"number"},table:{category:t.CARD_HEADER_LEADING}},visual:{control:{type:"select"},mapping:P,options:Object.keys(P),table:{category:t.CARD_HEADER_LEADING}},footerTitle:{table:{category:t.CARD_FOOTER_LEADING}},footerSubtitle:{table:{category:t.CARD_FOOTER_LEADING}},footerMarginTop:{table:{category:t.CARD_FOOTER},control:{type:"radio",options:v}},footerPaddingTop:{table:{category:t.CARD_FOOTER},control:{type:"radio",options:v}},footerPrimaryAction:{table:{category:t.CARD_FOOTER_TRAILING}},footerSecondaryAction:{table:{category:t.CARD_FOOTER_TRAILING}},...Ee()},parameters:{docs:{page:Fe}}},fe=({...r})=>e.jsxs(a,{display:"flex",children:[e.jsx(a,{backgroundColor:"surface.background.gray.moderate",padding:"spacing.8",children:e.jsxs(i,{borderRadius:r.borderRadius,backgroundColor:r.backgroundColor,elevation:"none",padding:r.padding,children:[e.jsxs(d,{paddingBottom:r.headerPaddingBottom,marginBottom:r.headerMarginBottom,children:[e.jsx(l,{title:r.headerTitle,subtitle:r.headerSubtitle,prefix:r.prefix&&e.jsx(k,{icon:r.prefix}),suffix:r.suffix&&e.jsx(A,{value:r.suffix})}),e.jsx(B,{visual:r.visual})]}),e.jsx(n,{children:e.jsx(o,{children:r.body})}),e.jsxs(I,{paddingTop:r.footerPaddingTop,marginTop:r.footerMarginTop,children:[e.jsx(L,{title:r.footerTitle,subtitle:r.footerSubtitle}),e.jsx(R,{actions:{primary:r.footerPrimaryAction,secondary:r.footerSecondaryAction}})]})]})}),e.jsx(je,{themeTokens:ke,colorScheme:"dark",children:e.jsx(a,{backgroundColor:"surface.background.gray.moderate",padding:"spacing.8",children:e.jsxs(i,{borderRadius:r.borderRadius,backgroundColor:r.backgroundColor,elevation:"highRaised",padding:r.padding,children:[e.jsxs(d,{paddingBottom:r.headerPaddingBottom,marginBottom:r.headerMarginBottom,children:[e.jsx(l,{title:r.headerTitle,subtitle:r.headerSubtitle,prefix:r.prefix&&e.jsx(k,{icon:r.prefix}),suffix:r.suffix&&e.jsx(A,{value:r.suffix})}),e.jsx(B,{visual:r.visual})]}),e.jsx(n,{children:e.jsx(o,{children:r.body})}),e.jsxs(I,{paddingTop:r.footerPaddingTop,marginTop:r.footerMarginTop,children:[e.jsx(L,{title:r.footerTitle,subtitle:r.footerSubtitle}),e.jsx(R,{actions:{primary:r.footerPrimaryAction,secondary:r.footerSecondaryAction}})]})]})})})]}),x=fe.bind({}),g=fe.bind({});g.args={headerTitle:"Header Title",headerSubtitle:"Header Subtitle",prefix:he,footerTitle:"Footer Title",footerSubtitle:"Footer Subtitle"};const _e=({...r})=>e.jsxs(i,{backgroundColor:r.backgroundColor,children:[e.jsxs(d,{children:[e.jsx(l,{title:"Profile Information",subtitle:"We will use this information to keep your account updated",prefix:e.jsx(k,{icon:we})}),e.jsx(B,{visual:e.jsx(ue,{icon:me})})]}),e.jsxs(n,{children:[e.jsxs(s,{display:"flex",flexDirection:"row",gap:"spacing.5",children:[e.jsx(s,{flex:1,children:e.jsx(c,{label:"First Name",isRequired:!0,necessityIndicator:"required",placeholder:"Enter your first name"})}),e.jsx(s,{flex:1,children:e.jsx(c,{label:"Last Name",isRequired:!0,necessityIndicator:"required",placeholder:"Enter your last name"})})]}),e.jsx(s,{marginTop:"spacing.5"}),e.jsx(c,{label:"Address Line 1",isRequired:!0,placeholder:"Apartment name, number, suite, etc.",necessityIndicator:"required"}),e.jsx(s,{marginTop:"spacing.5"}),e.jsx(c,{label:"Address Line 2",isRequired:!0,placeholder:"Area, Locality, etc."}),e.jsx(s,{marginTop:"spacing.5"}),e.jsxs(s,{display:"flex",flexDirection:"row",gap:"spacing.5",children:[e.jsx(s,{flex:1,children:e.jsx(c,{label:"Postal Code",isRequired:!0,necessityIndicator:"required",placeholder:"Zipcode"})}),e.jsx(s,{flex:1,children:e.jsx(c,{label:"Country",isRequired:!0,necessityIndicator:"required",placeholder:"Country"})})]}),e.jsx(s,{marginTop:"spacing.5"}),e.jsx(c,{label:"Mobile Number",necessityIndicator:"optional",placeholder:"Area, Locality, etc."})]}),e.jsxs(I,{children:[e.jsx(L,{subtitle:"Last updated on 20th Sep 2022"}),e.jsx(R,{actions:{primary:{text:"Save Details",onClick:()=>console.log("Saved")},secondary:{text:"Reset",onClick:()=>console.log("Reset")}}})]})]}),h=_e.bind({}),ye=r=>e.jsx(i,{...r,children:e.jsx(n,{children:e.jsxs(a,{display:"flex",flexDirection:"row",children:[e.jsx("img",{width:"300",height:"auto",src:"https://d6xcmfyh68wv8.cloudfront.net/assets/case-studies/common-card/pg_breathingroom.png",alt:"Breathing Room",style:{borderTopLeftRadius:"12px",borderBottomLeftRadius:"12px"}}),e.jsxs(a,{padding:"spacing.7",display:"flex",flexDirection:"column",children:[e.jsx(w,{size:"large",children:"Breathing Room"}),e.jsx(o,{marginTop:"spacing.5",children:"Popular in the startup ecosystem, BreathingRoom.co offers short-term workspaces conference rooms, training rooms, cabins & hotdesks to individuals and enterprises on an hourly & monthly basis. BreathingRoom is perfect for a wide range of professional needs like training sessions, recruitment drives, team offsites, and client meetings in addition to cost effective office space rentals; great for setting up remote offices. With a network of over 450 office spaces spread across Mumbai, Delhi, Bangalore, Pune, Hyderabad and Chennai, BreathingRoom offers convenient, flexible rental options that can be easily booked through the website or mobile app."})]})]})})}),p=ye.bind({});p.parameters={controls:{disable:!0}};p.args={elevation:"highRaised",padding:"spacing.0"};const u=ye.bind({});u.args={maxWidth:"800px",padding:"spacing.0"};const E=()=>e.jsx(a,{width:"100%",height:"100%",display:"flex",alignItems:"center",children:e.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 546 139",preserveAspectRatio:"xMidYMid meet",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{opacity:"0.09",d:"M32.9065 100.629L2 98.949V138.237H544V40.7617L510.041 42.2896C508.598 42.3545 507.171 42.6144 505.798 43.0623L475.74 52.867C473.114 53.7237 470.31 53.8858 467.603 53.3377L436.728 47.0865C435.977 46.9345 435.216 46.8366 434.451 46.7936L402.384 44.9901C400.455 44.8816 398.522 45.1234 396.68 45.7038L367.358 54.9386C364.72 55.7694 361.912 55.9023 359.207 55.3243L330.544 49.1985C328.34 48.7274 326.06 48.7274 323.856 49.1985L291.067 56.2061L257.144 68.0347C255.678 68.5458 254.146 68.8408 252.595 68.9106L222.608 70.2598C220.104 70.3724 217.609 69.8954 215.324 68.8671L192.115 58.4249C186.366 55.8383 179.634 56.8685 174.922 61.0558L150.475 82.7792C147.915 85.0541 144.692 86.4476 141.281 86.7545L113.756 89.2313C111.543 89.4305 109.313 89.1664 107.207 88.4558L81.6226 79.8226C76.9776 78.2552 71.8704 78.9037 67.7646 81.5823L42.5174 98.0533C39.669 99.9116 36.3025 100.814 32.9065 100.629Z",fill:"#305EFF"}),e.jsx("path",{d:"M2 98.949L32.9065 100.629C36.3025 100.814 39.669 99.9116 42.5174 98.0533L67.7646 81.5823C71.8704 78.9037 76.9776 78.2552 81.6226 79.8226L107.207 88.4558C109.313 89.1664 111.543 89.4305 113.756 89.2313L141.281 86.7545C144.692 86.4476 147.915 85.0541 150.475 82.7792L174.922 61.0558C179.634 56.8685 186.366 55.8383 192.115 58.4249L215.324 68.8671C217.609 69.8954 220.104 70.3724 222.608 70.2598L252.595 68.9106C254.146 68.8408 255.678 68.5458 257.144 68.0347L291.067 56.2061L323.856 49.1985C326.06 48.7274 328.34 48.7274 330.544 49.1985L359.207 55.3243C361.912 55.9023 364.72 55.7694 367.358 54.9386L396.679 45.7038C398.522 45.1234 400.455 44.8816 402.384 44.9901L434.451 46.7936C435.216 46.8366 435.977 46.9345 436.728 47.0865L467.603 53.3377C470.31 53.8858 473.114 53.7237 475.74 52.867L505.798 43.0623C507.171 42.6144 508.598 42.3545 510.041 42.2896L544 40.7617",stroke:"#305EFF",strokeWidth:"3",strokeLinecap:"round"})]})}),F=()=>e.jsxs(a,{display:"flex",flexDirection:"row",gap:"spacing.3",alignItems:"center",children:[e.jsx(j,{value:1e3,color:"surface.text.gray.normal",weight:"semibold",size:"2xlarge",type:"heading"}),e.jsxs(a,{display:"flex",flexDirection:"row",gap:"spacing.1",alignItems:"center",justifyContent:"center",children:[e.jsx(De,{color:"interactive.icon.positive.normal"}),e.jsx(o,{color:"interactive.text.positive.normal",children:"12"})]})]}),We=()=>{const r=Ie();return e.jsxs(i,{backgroundColor:"surface.background.gray.intense",maxWidth:"500px",minWidth:"300px",padding:"spacing.5",size:"medium",children:[e.jsxs(d,{showDivider:!1,children:[e.jsx(l,{title:r?"TPV":"Total Payment Volume",subtitle:r?"TPV for the current month":"Total Payment Volume for the current month"}),e.jsx(B,{visual:r?e.jsx(xe,{href:"/",icon:Le,iconPosition:"right",children:"Chart settings"}):e.jsx(H,{color:"positive",children:" New "})})]}),e.jsx(n,{children:r?e.jsxs(a,{display:"flex",flexDirection:"row",gap:"spacing.5",children:[e.jsx(a,{display:"flex",flexDirection:"column",justifyContent:"flex-end",children:e.jsx(F,{})}),e.jsx(E,{})]}):e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(a,{display:"flex",flexDirection:"column",justifyContent:"flex-end",children:e.jsx(F,{})}),e.jsx(E,{})]})})]})},f=We.bind({}),Ne=()=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(w,{children:'Card with overflow="auto"'}),e.jsxs(i,{height:"200px",overflow:"auto",maxWidth:"400px",children:[e.jsx(d,{children:e.jsx(l,{title:"Scrollable Content"})}),e.jsx(n,{children:e.jsx(a,{height:T()?"120px":void 0,overflow:T()?"hidden":void 0,children:e.jsxs(S,{children:[e.jsx(o,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx(o,{marginTop:"spacing.5",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."})]})})})]}),e.jsx(w,{children:'Card with overflow="hidden"'}),e.jsxs(i,{height:"200px",overflow:"hidden",maxWidth:"400px",children:[e.jsx(d,{children:e.jsx(l,{title:"Hidden Overflow"})}),e.jsx(n,{children:e.jsx(o,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})})]}),e.jsx(w,{children:'Card with overflowY="scroll"'}),e.jsxs(i,{height:"200px",overflowY:"scroll",maxWidth:"400px",children:[e.jsx(d,{children:e.jsx(l,{title:"Vertical Scroll Only"})}),e.jsx(n,{children:e.jsx(a,{height:T()?"120px":void 0,overflow:T()?"hidden":void 0,children:e.jsx(S,{children:e.jsx(o,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})})})})]})]}),y=Ne.bind({}),Oe=()=>e.jsx(i,{variant:"secondary",padding:"spacing.7",children:e.jsxs(n,{children:[e.jsx(o,{weight:"semibold",size:"medium",children:"Secondary Card"}),e.jsx(o,{marginTop:"spacing.3",children:"This is a secondary card variant. It has no border, elevation, or gradient — just a flat surface with a gray moderate background. It only accepts CardBody as children."})]})}),C=Oe.bind({}),Ve=()=>{const r=(Ce,be)=>e.jsxs(Re,{width:"280px",...be,children:[e.jsx(He,{children:e.jsxs(a,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[e.jsx(o,{weight:"semibold",children:"Green Loom Summit 2026"}),e.jsx(o,{size:"small",color:"surface.text.gray.subtle",children:Ce})]})}),e.jsx(Ae,{children:e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(o,{size:"small",color:"surface.text.gray.subtle",children:"Venue"}),e.jsx(o,{weight:"semibold",children:"Jio World Convention Centre, Mumbai"})]})})]});return e.jsxs(a,{display:"flex",flexDirection:"row",gap:"spacing.7",flexWrap:"wrap",children:[r("Default",{}),r("Selected",{isSelected:!0}),r("Disabled",{isDisabled:!0})]})},m=Ve.bind({});m.parameters={controls:{disable:!0}};const qe=()=>e.jsxs(i,{children:[e.jsxs(d,{children:[e.jsx(l,{title:"Payment Summary",subtitle:"Overview of recent transactions",prefix:e.jsx(k,{icon:he})}),e.jsx(B,{visual:e.jsx(H,{color:"positive",children:"Active"})})]}),e.jsx(n,{children:e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(o,{children:"Below are the details of your recent transactions grouped by category."}),e.jsx(i,{variant:"secondary",padding:"spacing.5",children:e.jsxs(n,{children:[e.jsxs(a,{display:"flex",flexDirection:"row",justifyContent:"space-between",children:[e.jsx(o,{weight:"semibold",children:"UPI Payments"}),e.jsx(j,{value:45e3,type:"body",weight:"semibold"})]}),e.jsx(o,{marginTop:"spacing.2",size:"small",color:"surface.text.gray.muted",children:"12 transactions this week"})]})}),e.jsx(i,{variant:"secondary",padding:"spacing.5",children:e.jsxs(n,{children:[e.jsxs(a,{display:"flex",flexDirection:"row",justifyContent:"space-between",children:[e.jsx(o,{weight:"semibold",children:"Card Payments"}),e.jsx(j,{value:12e4,type:"body",weight:"semibold"})]}),e.jsx(o,{marginTop:"spacing.2",size:"small",color:"surface.text.gray.muted",children:"8 transactions this week"})]})}),e.jsx(i,{variant:"secondary",padding:"spacing.5",children:e.jsxs(n,{children:[e.jsxs(a,{display:"flex",flexDirection:"row",justifyContent:"space-between",children:[e.jsx(o,{weight:"semibold",children:"Net Banking"}),e.jsx(j,{value:78e3,type:"body",weight:"semibold"})]}),e.jsx(o,{marginTop:"spacing.2",size:"small",color:"surface.text.gray.muted",children:"5 transactions this week"})]})})]})}),e.jsxs(I,{children:[e.jsx(L,{title:"Total Volume",subtitle:"This week"}),e.jsx(R,{actions:{primary:{text:"View All",onClick:()=>console.log("View All clicked")}}})]})]}),b=qe.bind({});var M,_,W;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`({
  ...args
}: StoryControlProps): React.ReactElement => {
  return <Box display="flex">
      <Box backgroundColor="surface.background.gray.moderate" padding="spacing.8">
        <Card borderRadius={args.borderRadius} backgroundColor={args.backgroundColor} elevation="none" padding={args.padding}>
          <CardHeader paddingBottom={args.headerPaddingBottom} marginBottom={args.headerMarginBottom}>
            <CardHeaderLeading title={args.headerTitle} subtitle={args.headerSubtitle} prefix={args.prefix && <CardHeaderIcon icon={args.prefix} />} suffix={args.suffix && <CardHeaderCounter value={args.suffix} />} />
            <CardHeaderTrailing visual={args.visual} />
          </CardHeader>
          <CardBody>
            <Text>{args.body}</Text>
          </CardBody>
          <CardFooter paddingTop={args.footerPaddingTop} marginTop={args.footerMarginTop}>
            <CardFooterLeading title={args.footerTitle} subtitle={args.footerSubtitle} />
            <CardFooterTrailing actions={{
            primary: args.footerPrimaryAction,
            secondary: args.footerSecondaryAction
          }} />
          </CardFooter>
        </Card>
      </Box>
      <BladeProvider themeTokens={bladeTheme} colorScheme="dark">
        <Box backgroundColor="surface.background.gray.moderate" padding="spacing.8">
          <Card borderRadius={args.borderRadius} backgroundColor={args.backgroundColor} elevation="highRaised" padding={args.padding}>
            <CardHeader paddingBottom={args.headerPaddingBottom} marginBottom={args.headerMarginBottom}>
              <CardHeaderLeading title={args.headerTitle} subtitle={args.headerSubtitle} prefix={args.prefix && <CardHeaderIcon icon={args.prefix} />} suffix={args.suffix && <CardHeaderCounter value={args.suffix} />} />
              <CardHeaderTrailing visual={args.visual} />
            </CardHeader>
            <CardBody>
              <Text>{args.body}</Text>
            </CardBody>
            <CardFooter paddingTop={args.footerPaddingTop} marginTop={args.footerMarginTop}>
              <CardFooterLeading title={args.footerTitle} subtitle={args.footerSubtitle} />
              <CardFooterTrailing actions={{
              primary: args.footerPrimaryAction,
              secondary: args.footerSecondaryAction
            }} />
            </CardFooter>
          </Card>
        </Box>
      </BladeProvider>
    </Box>;
}`,...(W=(_=x.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var N,O,V;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`({
  ...args
}: StoryControlProps): React.ReactElement => {
  return <Box display="flex">
      <Box backgroundColor="surface.background.gray.moderate" padding="spacing.8">
        <Card borderRadius={args.borderRadius} backgroundColor={args.backgroundColor} elevation="none" padding={args.padding}>
          <CardHeader paddingBottom={args.headerPaddingBottom} marginBottom={args.headerMarginBottom}>
            <CardHeaderLeading title={args.headerTitle} subtitle={args.headerSubtitle} prefix={args.prefix && <CardHeaderIcon icon={args.prefix} />} suffix={args.suffix && <CardHeaderCounter value={args.suffix} />} />
            <CardHeaderTrailing visual={args.visual} />
          </CardHeader>
          <CardBody>
            <Text>{args.body}</Text>
          </CardBody>
          <CardFooter paddingTop={args.footerPaddingTop} marginTop={args.footerMarginTop}>
            <CardFooterLeading title={args.footerTitle} subtitle={args.footerSubtitle} />
            <CardFooterTrailing actions={{
            primary: args.footerPrimaryAction,
            secondary: args.footerSecondaryAction
          }} />
          </CardFooter>
        </Card>
      </Box>
      <BladeProvider themeTokens={bladeTheme} colorScheme="dark">
        <Box backgroundColor="surface.background.gray.moderate" padding="spacing.8">
          <Card borderRadius={args.borderRadius} backgroundColor={args.backgroundColor} elevation="highRaised" padding={args.padding}>
            <CardHeader paddingBottom={args.headerPaddingBottom} marginBottom={args.headerMarginBottom}>
              <CardHeaderLeading title={args.headerTitle} subtitle={args.headerSubtitle} prefix={args.prefix && <CardHeaderIcon icon={args.prefix} />} suffix={args.suffix && <CardHeaderCounter value={args.suffix} />} />
              <CardHeaderTrailing visual={args.visual} />
            </CardHeader>
            <CardBody>
              <Text>{args.body}</Text>
            </CardBody>
            <CardFooter paddingTop={args.footerPaddingTop} marginTop={args.footerMarginTop}>
              <CardFooterLeading title={args.footerTitle} subtitle={args.footerSubtitle} />
              <CardFooterTrailing actions={{
              primary: args.footerPrimaryAction,
              secondary: args.footerSecondaryAction
            }} />
            </CardFooter>
          </Card>
        </Box>
      </BladeProvider>
    </Box>;
}`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var q,G,z;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`({
  ...args
}: StoryControlProps): React.ReactElement => {
  return <Card backgroundColor={args.backgroundColor}>
      <CardHeader>
        <CardHeaderLeading title="Profile Information" subtitle="We will use this information to keep your account updated" prefix={<CardHeaderIcon icon={UsersIcon} />} />
        <CardHeaderTrailing visual={<CardHeaderIconButton icon={TrashIcon} />} />
      </CardHeader>
      <CardBody>
        <BaseBox display="flex" flexDirection="row" gap="spacing.5">
          <BaseBox flex={1}>
            <TextInput label="First Name" isRequired necessityIndicator="required" placeholder="Enter your first name" />
          </BaseBox>
          <BaseBox flex={1}>
            <TextInput label="Last Name" isRequired necessityIndicator="required" placeholder="Enter your last name" />
          </BaseBox>
        </BaseBox>
        <BaseBox marginTop="spacing.5" />
        <TextInput label="Address Line 1" isRequired placeholder="Apartment name, number, suite, etc." necessityIndicator="required" />
        <BaseBox marginTop="spacing.5" />
        <TextInput label="Address Line 2" isRequired placeholder="Area, Locality, etc." />
        <BaseBox marginTop="spacing.5" />
        <BaseBox display="flex" flexDirection="row" gap="spacing.5">
          <BaseBox flex={1}>
            <TextInput label="Postal Code" isRequired necessityIndicator="required" placeholder="Zipcode" />
          </BaseBox>
          <BaseBox flex={1}>
            <TextInput label="Country" isRequired necessityIndicator="required" placeholder="Country" />
          </BaseBox>
        </BaseBox>
        <BaseBox marginTop="spacing.5" />
        <TextInput label="Mobile Number" necessityIndicator="optional" placeholder="Area, Locality, etc." />
      </CardBody>
      <CardFooter>
        <CardFooterLeading subtitle="Last updated on 20th Sep 2022" />
        <CardFooterTrailing actions={{
        primary: {
          text: 'Save Details',
          onClick: () => console.log('Saved')
        },
        secondary: {
          text: 'Reset',
          onClick: () => console.log('Reset')
        }
      }} />
      </CardFooter>
    </Card>;
}`,...(z=(G=h.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var U,Y,J;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`(args): React.ReactElement => {
  return <Card {...args}>
      <CardBody>
        <Box display="flex" flexDirection="row">
          <img width="300" height="auto" src="https://d6xcmfyh68wv8.cloudfront.net/assets/case-studies/common-card/pg_breathingroom.png" alt="Breathing Room" style={{
          borderTopLeftRadius: '12px',
          borderBottomLeftRadius: '12px'
        }} />
          <Box padding="spacing.7" display="flex" flexDirection="column">
            <Heading size="large">Breathing Room</Heading>
            <Text marginTop="spacing.5">
              Popular in the startup ecosystem, BreathingRoom.co offers short-term workspaces
              conference rooms, training rooms, cabins & hotdesks to individuals and enterprises on
              an hourly & monthly basis. BreathingRoom is perfect for a wide range of professional
              needs like training sessions, recruitment drives, team offsites, and client meetings
              in addition to cost effective office space rentals; great for setting up remote
              offices. With a network of over 450 office spaces spread across Mumbai, Delhi,
              Bangalore, Pune, Hyderabad and Chennai, BreathingRoom offers convenient, flexible
              rental options that can be easily booked through the website or mobile app.
            </Text>
          </Box>
        </Box>
      </CardBody>
    </Card>;
}`,...(J=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Z,$,Q;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`(args): React.ReactElement => {
  return <Card {...args}>
      <CardBody>
        <Box display="flex" flexDirection="row">
          <img width="300" height="auto" src="https://d6xcmfyh68wv8.cloudfront.net/assets/case-studies/common-card/pg_breathingroom.png" alt="Breathing Room" style={{
          borderTopLeftRadius: '12px',
          borderBottomLeftRadius: '12px'
        }} />
          <Box padding="spacing.7" display="flex" flexDirection="column">
            <Heading size="large">Breathing Room</Heading>
            <Text marginTop="spacing.5">
              Popular in the startup ecosystem, BreathingRoom.co offers short-term workspaces
              conference rooms, training rooms, cabins & hotdesks to individuals and enterprises on
              an hourly & monthly basis. BreathingRoom is perfect for a wide range of professional
              needs like training sessions, recruitment drives, team offsites, and client meetings
              in addition to cost effective office space rentals; great for setting up remote
              offices. With a network of over 450 office spaces spread across Mumbai, Delhi,
              Bangalore, Pune, Hyderabad and Chennai, BreathingRoom offers convenient, flexible
              rental options that can be easily booked through the website or mobile app.
            </Text>
          </Box>
        </Box>
      </CardBody>
    </Card>;
}`,...(Q=($=u.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var X,K,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`(): React.ReactElement => {
  const isMobile = useIsMobile();
  return <Card backgroundColor="surface.background.gray.intense" maxWidth="500px" minWidth="300px" padding="spacing.5" size="medium">
      <CardHeader showDivider={false}>
        <CardHeaderLeading title={isMobile ? 'TPV' : 'Total Payment Volume'} subtitle={isMobile ? 'TPV for the current month' : 'Total Payment Volume for the current month'} />
        <CardHeaderTrailing visual={isMobile ? <CardHeaderLink href="/" icon={ArrowRightIcon} iconPosition="right">
                Chart settings
              </CardHeaderLink> : <CardHeaderBadge color="positive"> New </CardHeaderBadge>} />
      </CardHeader>
      <CardBody>
        {isMobile ? <Box display="flex" flexDirection="row" gap="spacing.5">
            <Box display="flex" flexDirection="column" justifyContent="flex-end">
              <MetricInfo />
            </Box>
            <GraphSVG />
          </Box> : <Box display="flex" flexDirection="column" gap="spacing.5">
            <Box display="flex" flexDirection="column" justifyContent="flex-end">
              <MetricInfo />
            </Box>
            <GraphSVG />
          </Box>}
      </CardBody>
    </Card>;
}`,...(ee=(K=f.parameters)==null?void 0:K.docs)==null?void 0:ee.source}}};var re,ae,oe;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box display="flex" flexDirection="column" gap="spacing.5">
      <Heading>Card with overflow="auto"</Heading>
      <Card height="200px" overflow="auto" maxWidth="400px">
        <CardHeader>
          <CardHeaderLeading title="Scrollable Content" />
        </CardHeader>
        <CardBody>
          <Box height={isReactNative() ? '120px' : undefined} overflow={isReactNative() ? 'hidden' : undefined}>
            <StoryScrollView>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </Text>
              <Text marginTop="spacing.5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s.
              </Text>
            </StoryScrollView>
          </Box>
        </CardBody>
      </Card>

      <Heading>Card with overflow="hidden"</Heading>
      <Card height="200px" overflow="hidden" maxWidth="400px">
        <CardHeader>
          <CardHeaderLeading title="Hidden Overflow" />
        </CardHeader>
        <CardBody>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </CardBody>
      </Card>

      <Heading>Card with overflowY="scroll"</Heading>
      <Card height="200px" overflowY="scroll" maxWidth="400px">
        <CardHeader>
          <CardHeaderLeading title="Vertical Scroll Only" />
        </CardHeader>
        <CardBody>
          <Box height={isReactNative() ? '120px' : undefined} overflow={isReactNative() ? 'hidden' : undefined}>
            <StoryScrollView>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </Text>
            </StoryScrollView>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(oe=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var te,ie,ne;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`(): React.ReactElement => {
  return <Card variant="secondary" padding="spacing.7">
      <CardBody>
        <Text weight="semibold" size="medium">
          Secondary Card
        </Text>
        <Text marginTop="spacing.3">
          This is a secondary card variant. It has no border, elevation, or gradient — just a flat
          surface with a gray moderate background. It only accepts CardBody as children.
        </Text>
      </CardBody>
    </Card>;
}`,...(ne=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var se,de,le;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`(): React.ReactElement => {
  const renderInfoCard = (label: string, stateProps: {
    isSelected?: boolean;
    isDisabled?: boolean;
  }): React.ReactElement => <InfoCardComponent width="280px" {...stateProps}>
      <InfoCardBody>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Text weight="semibold">Green Loom Summit 2026</Text>
          <Text size="small" color="surface.text.gray.subtle">
            {label}
          </Text>
        </Box>
      </InfoCardBody>
      <InfoCardFooter>
        <Box display="flex" flexDirection="column" gap="spacing.2">
          <Text size="small" color="surface.text.gray.subtle">
            Venue
          </Text>
          <Text weight="semibold">Jio World Convention Centre, Mumbai</Text>
        </Box>
      </InfoCardFooter>
    </InfoCardComponent>;
  return <Box display="flex" flexDirection="row" gap="spacing.7" flexWrap="wrap">
      {renderInfoCard('Default', {})}
      {renderInfoCard('Selected', {
      isSelected: true
    })}
      {renderInfoCard('Disabled', {
      isDisabled: true
    })}
    </Box>;
}`,...(le=(de=m.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ce,pe,ge;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`(): React.ReactElement => {
  return <Card>
      <CardHeader>
        <CardHeaderLeading title="Payment Summary" subtitle="Overview of recent transactions" prefix={<CardHeaderIcon icon={CheckCircleIcon} />} />
        <CardHeaderTrailing visual={<CardHeaderBadge color="positive">Active</CardHeaderBadge>} />
      </CardHeader>
      <CardBody>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Text>Below are the details of your recent transactions grouped by category.</Text>
          <Card variant="secondary" padding="spacing.5">
            <CardBody>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Text weight="semibold">UPI Payments</Text>
                <Amount value={45000} type="body" weight="semibold" />
              </Box>
              <Text marginTop="spacing.2" size="small" color="surface.text.gray.muted">
                12 transactions this week
              </Text>
            </CardBody>
          </Card>
          <Card variant="secondary" padding="spacing.5">
            <CardBody>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Text weight="semibold">Card Payments</Text>
                <Amount value={120000} type="body" weight="semibold" />
              </Box>
              <Text marginTop="spacing.2" size="small" color="surface.text.gray.muted">
                8 transactions this week
              </Text>
            </CardBody>
          </Card>
          <Card variant="secondary" padding="spacing.5">
            <CardBody>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Text weight="semibold">Net Banking</Text>
                <Amount value={78000} type="body" weight="semibold" />
              </Box>
              <Text marginTop="spacing.2" size="small" color="surface.text.gray.muted">
                5 transactions this week
              </Text>
            </CardBody>
          </Card>
        </Box>
      </CardBody>
      <CardFooter>
        <CardFooterLeading title="Total Volume" subtitle="This week" />
        <CardFooterTrailing actions={{
        primary: {
          text: 'View All',
          onClick: () => console.log('View All clicked')
        }
      }} />
      </CardFooter>
    </Card>;
}`,...(ge=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const Ge=["CardExample","FigmaExample","CardBodyContent","CardWithoutPadding","CardWithMaxWidth","MetricCardVariant","CardWithOverflow","SecondaryCard","InfoCard","NestedSecondaryInsidePrimary"],Qe=Object.freeze(Object.defineProperty({__proto__:null,CardBodyContent:h,CardExample:x,CardWithMaxWidth:u,CardWithOverflow:y,CardWithoutPadding:p,FigmaExample:g,InfoCard:m,MetricCardVariant:f,NestedSecondaryInsidePrimary:b,SecondaryCard:C,__namedExportsOrder:Ge,default:Me},Symbol.toStringTag,{value:"Module"}));export{Qe as c};
