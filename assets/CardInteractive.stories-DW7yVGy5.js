import{aI as l,ad as m,j as e,B as s,T as t,C as p,i7 as z,i8 as H,aJ as c,n as R,b3 as ge,l as he,ab as le,aL as xe,hH as L,av as ye,an as ce,ao as de,H as be,io as Ce,ii as ue,c$ as Se,ij as je,id as fe,ik as ve,il as Be,im as Te,a8 as g,aK as ke,L as we,f as Pe,h as He,hO as Le}from"./iframe-C1qQ09LF.js";import{S as ze}from"./StoryPageWrapper-CS0_5maI.js";import{S as Re}from"./Sandbox.web-B2xP21Qp.js";const Oe=()=>e.jsxs(ze,{componentName:"Interactive Card",componentDescription:"Enhancing the Card component to add additional interactions and behaviour. This includes making the card clickable, hoverable, linkable, selectable and more.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=75857-127700&t=qZx2sCUVp8UPW4qj-1&scaling=min-zoom&page-id=21248%3A307966&mode=design",children:[e.jsx(be,{size:"large",children:"Usage"}),e.jsx(s,{marginY:"spacing.6",children:e.jsx(Re,{children:`
        import React from 'react';
        import { Card, CardBody, Box, Text, Amount, VisuallyHidden } from '@greenloom/ui/components';

        type HiddenInputProps = {
          onChange: (value: string) => void;
          value: string;
          name: string;
          type?: string;
        }
        const HiddenInput = ({
          onChange,
          value,
          name,
          type,
        }: HiddenInputProps): React.ReactElement => {
          return (
            <VisuallyHidden>
              <input
                type={type ?? 'radio'}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                name={name}
                value={value}
              />
            </VisuallyHidden>
          );
        };

        const App = () => {
          const [selected, setSelected] = React.useState('free');

          return (
            <Box display="flex" gap="spacing.5">
              <Card
                as="label"
                accessibilityLabel="Free Tier"
                shouldScaleOnHover
                isSelected={selected === 'free'}
              >
                <CardBody>
                  <HiddenInput
                    onChange={(value) => setSelected(value)}
                    value="free"
                    name="pricing-card"
                  />
                  <Amount marginBottom="spacing.1" value={0} currency="USD" size="large" />
                  <Box paddingX="spacing.2">
                    <Text marginBottom="spacing.3" size="large" color="surface.text.gray.subtle">
                      Free
                    </Text>
                    <Text>
                      For individuals or teams just getting started with payments. No setup fees, no
                      monthly or annual fees.
                    </Text>
                  </Box>
                </CardBody>
              </Card>
              <Card
                as="label"
                accessibilityLabel="Standard Tier"
                shouldScaleOnHover
                isSelected={selected === 'standard'}
              >
                <CardBody>
                  <HiddenInput
                    onChange={(value) => setSelected(value)}
                    value="standard"
                    name="pricing-card"
                  />
                  <Amount marginBottom="spacing.1" value={10} currency="USD" size="large" />
                  <Box paddingX="spacing.2">
                    <Text marginBottom="spacing.3" size="large" color="surface.text.gray.subtle">
                      Standard
                    </Text>
                    <Text>
                      For teams that are scaling up and need advanced features like payment failure.
                    </Text>
                  </Box>
                </CardBody>
              </Card>
              <Card
                as="label"
                accessibilityLabel="Premium Tier"
                shouldScaleOnHover
                isSelected={selected === 'premium'}
                height="100%"
              >
                <CardBody>
                  <HiddenInput
                    onChange={(value) => setSelected(value)}
                    value="premium"
                    name="pricing-card"
                  />
                  <Amount marginBottom="spacing.1" value={20} currency="USD" size="large" />
                  <Box paddingX="spacing.2">
                    <Text marginBottom="spacing.3" size="large" color="surface.text.gray.subtle">
                      Premium
                    </Text>
                    <Text>
                      Best suited for businesses that need a dedicated account manager and 24x7 support.
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </Box>
          );
        };

        export default App;
        `})})]}),o={table:{disable:!0}},h={category:"Supports All Card Props Plus:"},Ie={title:"Components/Card/Interactive",component:l,tags:["autodocs"],argTypes:{width:o,height:o,alignSelf:o,bottom:o,display:o,children:o,gridArea:o,margin:o,top:o,left:o,right:o,marginLeft:o,marginRight:o,marginTop:o,marginBottom:o,testID:o,marginX:o,marginY:o,as:o,target:{control:{type:"text"},table:h},onClick:{control:{type:"function"},table:h},onHover:{control:{type:"function"},table:h},accessibilityLabel:{control:{type:"text"},table:h},isSelected:{control:{type:"boolean"},table:h},shouldScaleOnHover:{control:{type:"boolean"},table:h},href:{control:{type:"text"},table:h},rel:{control:{type:"text"},table:h},surfaceLevel:{control:{type:"number"},table:h},elevation:{table:h},padding:{table:h}},args:{accessibilityLabel:"Payment Pages Card",isSelected:!1,shouldScaleOnHover:!0,surfaceLevel:2,elevation:"midRaised",padding:"spacing.7"},parameters:{docs:{page:Oe}}},De=a=>e.jsxs(l,{onHover:()=>{console.log("Hovered")},isSelected:a.isSelected,shouldScaleOnHover:a.shouldScaleOnHover,href:a.href,target:a.target,accessibilityLabel:a.accessibilityLabel,backgroundColor:a.backgroundColor,elevation:a.elevation,padding:a.padding,width:{s:"100%",m:"400px"},children:[e.jsxs(z,{children:[e.jsx(H,{title:"Payment Pages",subtitle:"Card Header Subtitle",prefix:e.jsx(ue,{icon:Se}),suffix:e.jsx(Ce,{value:12})}),e.jsx(je,{visual:e.jsx(fe,{color:"positive",children:"NEW"})})]}),e.jsx(c,{children:e.jsx(t,{children:"Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately. Accepting payments from customers is now just a link away."})}),e.jsxs(ve,{children:[e.jsx(Be,{title:"Footer",subtitle:"Footer Subtitle"}),e.jsx(Te,{actions:{primary:{text:"Primary",onClick:()=>console.log("Primary")},secondary:{text:"Secondary",onClick:()=>console.log("Secondary")}}})]})]}),C=De.bind({}),S=()=>{const[a,i]=m.useState(0),[r,n]=m.useState(0),[u,y]=m.useState(0);return e.jsxs(s,{children:[e.jsxs(s,{marginBottom:"spacing.6",children:[e.jsxs(t,{children:["Cards can be made clickable by passing the ",e.jsx(p,{size:"medium",children:"onClick"})," prop."]}),e.jsxs(t,{children:["You will also need to pass the ",e.jsx(p,{size:"medium",children:"accessibilityLabel"})," to make the card accessible to screen readers."]})]}),e.jsxs(l,{accessibilityLabel:"Payment Pages Card",onClick:()=>i(d=>d+1),width:{s:"100%",m:"400px"},children:[e.jsx(z,{children:e.jsx(H,{title:"Payment Pages"})}),e.jsxs(c,{children:[e.jsx(t,{children:"Take your store online instantly with zero coding. Accept international & domestic payments."}),e.jsxs(t,{marginY:"spacing.2",children:["Card Clicked:"," ",e.jsx(t,{as:"span",weight:"semibold",children:a})]}),e.jsxs(t,{marginY:"spacing.2",children:["Button Clicked:"," ",e.jsx(t,{as:"span",weight:"semibold",children:r})]}),e.jsxs(t,{marginY:"spacing.2",children:["Switch Toggled:"," ",e.jsx(t,{as:"span",weight:"semibold",children:u})]}),e.jsx(R,{size:"small",marginTop:"spacing.5",onClick:()=>{n(d=>d+1)},children:"Get Demo"}),e.jsx(ge,{accessibilityLabel:"switch",size:"small",onChange:()=>{y(d=>d+1)}})]})]})]})},j=()=>e.jsxs(s,{children:[e.jsxs(t,{marginBottom:"spacing.6",children:["By passing the ",e.jsx(p,{size:"medium",children:"shouldScaleOnHover"})," prop, the card will scale up on hover. (on mobile devices the interaction will happen on press and the card will scale down instead)"]}),e.jsxs(l,{shouldScaleOnHover:!0,width:{s:"100%",m:"400px"},children:[e.jsx(z,{children:e.jsx(H,{title:"Payment Links",subtitle:"Collect faster payments on UPI Payment Links with upto 50% lower fees"})}),e.jsx(c,{children:e.jsx(t,{children:"Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately. Accepting payments from customers is now just a link away."})})]})]}),f=()=>e.jsxs(s,{children:[e.jsxs(s,{marginBottom:"spacing.6",children:[e.jsxs(t,{children:["Cards can be made linkable by passing the ",e.jsx(p,{size:"medium",children:"href"})," prop,"]}),e.jsxs(t,{children:["You will also need to pass the ",e.jsx(p,{size:"medium",children:"accessibilityLabel"})," to make the link accessible to screen readers."]})]}),e.jsxs(l,{href:"https://greenloom.ai/payment-links",accessibilityLabel:"Payment Links",shouldScaleOnHover:!0,width:{s:"100%",m:"400px"},children:[e.jsx(z,{children:e.jsx(H,{title:"Payment Links",subtitle:"Collect faster payments on UPI Payment Links with upto 50% lower fees"})}),e.jsxs(c,{children:[e.jsx(t,{children:"Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately. Accepting payments from customers is now just a link away."}),e.jsx(he,{marginTop:"spacing.4",href:"https://greenloom.ai/payment-links/#overview",children:"Get Demo"})]})]})]}),b=({onChange:a,value:i,name:r,type:n})=>e.jsx(Le,{children:e.jsx("input",{type:n??"radio",onChange:u=>{a(u.target.value)},name:r,value:i})}),Fe=()=>{const[a,i]=m.useState("free");return e.jsxs(s,{children:[e.jsxs(t,{marginBottom:"spacing.6",children:["To make a group of cards behave like radio buttons, you can put a hidden radio input inside the ",e.jsx(p,{size:"medium",children:"CardBody"})," and pass ",e.jsx(p,{size:"medium",children:'as="label"'})," prop to the ",e.jsx(p,{size:"medium",children:"Card"}),"."]}),e.jsxs(s,{display:"flex",gap:"spacing.5",flexDirection:{xs:"column",m:"row"},alignItems:"stretch",children:[e.jsx(l,{as:"label",accessibilityLabel:"Free Tier",shouldScaleOnHover:!0,isSelected:a==="free",minHeight:"100%",children:e.jsxs(c,{children:[e.jsx(b,{onChange:r=>i(r),value:"free",name:"pricing-card"}),e.jsx(g,{marginBottom:"spacing.1",value:0,currency:"USD",size:"large"}),e.jsxs(s,{paddingX:"spacing.2",children:[e.jsx(t,{marginBottom:"spacing.3",size:"large",color:"surface.text.gray.subtle",children:"Free"}),e.jsx(t,{children:"For individuals or teams just getting started with payments. No setup fees, no monthly or annual fees."})]})]})}),e.jsx(l,{as:"label",accessibilityLabel:"Standard Tier",shouldScaleOnHover:!0,isSelected:a==="standard",minHeight:"100%",children:e.jsxs(c,{children:[e.jsx(b,{onChange:r=>i(r),value:"standard",name:"pricing-card"}),e.jsx(g,{marginBottom:"spacing.1",value:10,currency:"USD",size:"large"}),e.jsxs(s,{paddingX:"spacing.2",children:[e.jsx(t,{marginBottom:"spacing.3",size:"large",color:"surface.text.gray.subtle",children:"Standard"}),e.jsx(t,{children:"For teams that are scaling up and need advanced features like payment failure."})]})]})}),e.jsx(l,{as:"label",accessibilityLabel:"Premium Tier",shouldScaleOnHover:!0,isSelected:a==="premium",minHeight:"100%",children:e.jsxs(c,{children:[e.jsx(b,{onChange:r=>i(r),value:"premium",name:"pricing-card"}),e.jsx(g,{marginBottom:"spacing.1",value:20,currency:"USD",size:"large"}),e.jsxs(s,{paddingX:"spacing.2",children:[e.jsx(t,{marginBottom:"spacing.3",size:"large",color:"surface.text.gray.subtle",children:"Premium"}),e.jsx(t,{children:"Best suited for businesses that need a dedicated account manager and 24x7 support."})]})]})})]})]})},Ee=()=>{const[a,i]=m.useState(["free"]),r=n=>{a.includes(n)?i(a.filter(u=>u!==n)):i([...a,n])};return e.jsxs(s,{children:[e.jsxs(t,{marginBottom:"spacing.6",children:["To make a group of cards behave like checkboxes, you can put a hidden checkbox input inside the ",e.jsx(p,{size:"medium",children:"CardBody"})," and pass ",e.jsx(p,{size:"medium",children:'as="label"'})," prop to the ",e.jsx(p,{size:"medium",children:"Card"}),"."]}),e.jsxs(s,{display:"flex",gap:"spacing.5",flexDirection:{xs:"column",m:"row"},alignItems:"stretch",children:[e.jsx(l,{as:"label",shouldScaleOnHover:!0,isSelected:a.includes("free"),minHeight:"100%",children:e.jsxs(c,{children:[e.jsx(b,{type:"checkbox",onChange:n=>r(n),value:"free",name:"pricing-card"}),e.jsx(g,{marginBottom:"spacing.1",value:0,currency:"USD",size:"large"}),e.jsxs(s,{paddingX:"spacing.2",children:[e.jsx(t,{marginBottom:"spacing.3",size:"large",color:"surface.text.gray.subtle",children:"Free"}),e.jsx(t,{children:"For individuals or teams just getting started with payments. No setup fees, no monthly or annual fees."})]})]})}),e.jsx(l,{as:"label",shouldScaleOnHover:!0,isSelected:a.includes("standard"),minHeight:"100%",children:e.jsxs(c,{children:[e.jsx(b,{type:"checkbox",onChange:n=>r(n),value:"standard",name:"pricing-card"}),e.jsx(g,{marginBottom:"spacing.1",value:10,currency:"USD",size:"large"}),e.jsxs(s,{paddingX:"spacing.2",children:[e.jsx(t,{marginBottom:"spacing.3",size:"large",color:"surface.text.gray.subtle",children:"Standard"}),e.jsx(t,{children:"For teams that are scaling up and need advanced features like payment failure."})]})]})}),e.jsx(l,{as:"label",shouldScaleOnHover:!0,isSelected:a.includes("premium"),minHeight:"100%",children:e.jsxs(c,{children:[e.jsx(b,{type:"checkbox",onChange:n=>r(n),value:"premium",name:"pricing-card"}),e.jsx(g,{marginBottom:"spacing.1",value:20,currency:"USD",size:"large"}),e.jsxs(s,{paddingX:"spacing.2",children:[e.jsx(t,{marginBottom:"spacing.3",size:"large",color:"surface.text.gray.subtle",children:"Premium"}),e.jsx(t,{children:"Best suited for businesses that need a dedicated account manager and 24x7 support."})]})]})})]})]})},Me=()=>{const[a,i]=m.useState("free");return e.jsxs(s,{children:[e.jsxs(t,{marginBottom:"spacing.6",children:["On ReactNative, to make a group of cards behave like radio buttons, you can manage your own state for selected card and use the ",e.jsx(p,{size:"medium",children:"isSelected"})," &"," ",e.jsx(p,{size:"medium",children:"onClick"})," prop to highlight the selected card."]}),e.jsxs(s,{display:"flex",gap:"spacing.5",children:[e.jsx(l,{onClick:()=>i("free"),accessibilityLabel:"Free Tier",shouldScaleOnHover:!0,isSelected:a==="free",children:e.jsxs(c,{children:[e.jsx(g,{marginBottom:"spacing.1",value:0,currency:"USD",size:"large"}),e.jsxs(s,{paddingX:"spacing.2",children:[e.jsx(t,{marginBottom:"spacing.3",size:"large",color:"surface.text.gray.subtle",children:"Free"}),e.jsx(t,{children:"For individuals or teams just getting started with payments. No setup fees, no monthly or annual fees."})]})]})}),e.jsx(l,{onClick:()=>i("standard"),accessibilityLabel:"Standard Tier",shouldScaleOnHover:!0,isSelected:a==="standard",children:e.jsxs(c,{children:[e.jsx(g,{marginBottom:"spacing.1",value:10,currency:"USD",size:"large"}),e.jsxs(s,{paddingX:"spacing.2",children:[e.jsx(t,{marginBottom:"spacing.3",size:"large",color:"surface.text.gray.subtle",children:"Standard"}),e.jsx(t,{children:"For teams that are scaling up and need advanced features like payment failure."})]})]})}),e.jsx(l,{onClick:()=>i("premium"),accessibilityLabel:"Premium Tier",shouldScaleOnHover:!0,isSelected:a==="premium",children:e.jsxs(c,{children:[e.jsx(g,{marginBottom:"spacing.1",value:20,currency:"USD",size:"large"}),e.jsxs(s,{paddingX:"spacing.2",children:[e.jsx(t,{marginBottom:"spacing.3",size:"large",color:"surface.text.gray.subtle",children:"Premium"}),e.jsx(t,{children:"Best suited for businesses that need a dedicated account manager and 24x7 support."})]})]})})]})]})},Ue=()=>{const[a,i]=m.useState(["free"]),r=n=>{a.includes(n)?i(a.filter(u=>u!==n)):i([...a,n])};return e.jsxs(s,{children:[e.jsxs(t,{marginBottom:"spacing.6",children:["On ReactNative, to make a group of cards behave like checkboxes, you can manage your own state for selected card and use the ",e.jsx(p,{size:"medium",children:"isSelected"})," &"," ",e.jsx(p,{size:"medium",children:"onClick"})," prop to highlight the selected card."]}),e.jsxs(s,{display:"flex",gap:"spacing.5",children:[e.jsx(l,{onClick:()=>r("free"),isSelected:a.includes("free"),accessibilityLabel:"Free Tier",shouldScaleOnHover:!0,children:e.jsxs(c,{children:[e.jsx(g,{marginBottom:"spacing.1",value:0,currency:"USD",size:"large"}),e.jsxs(s,{paddingX:"spacing.2",children:[e.jsx(t,{marginBottom:"spacing.3",size:"large",color:"surface.text.gray.subtle",children:"Free"}),e.jsx(t,{children:"For individuals or teams just getting started with payments. No setup fees, no monthly or annual fees."})]})]})}),e.jsx(l,{onClick:()=>r("standard"),isSelected:a.includes("standard"),accessibilityLabel:"Standard Tier",shouldScaleOnHover:!0,children:e.jsxs(c,{children:[e.jsx(g,{marginBottom:"spacing.1",value:10,currency:"USD",size:"large"}),e.jsxs(s,{paddingX:"spacing.2",children:[e.jsx(t,{marginBottom:"spacing.3",size:"large",color:"surface.text.gray.subtle",children:"Standard"}),e.jsx(t,{children:"For teams that are scaling up and need advanced features like payment failure."})]})]})}),e.jsx(l,{onClick:()=>r("premium"),isSelected:a.includes("premium"),accessibilityLabel:"Premium Tier",shouldScaleOnHover:!0,children:e.jsxs(c,{children:[e.jsx(g,{marginBottom:"spacing.1",value:20,currency:"USD",size:"large"}),e.jsxs(s,{paddingX:"spacing.2",children:[e.jsx(t,{marginBottom:"spacing.3",size:"large",color:"surface.text.gray.subtle",children:"Premium"}),e.jsx(t,{children:"Best suited for businesses that need a dedicated account manager and 24x7 support."})]})]})})]})]})},P=[{value:"payment-gateway",title:"Payment Gateway",subtitle:"Accept online payments",icon:L,features:["100+ payment methods","UPI, Cards, Netbanking, Wallets","Industry-leading success rates","Real-time payment tracking"]},{value:"payment-links",title:"Payment Links",subtitle:"Share & collect payments",icon:L,features:["No coding required","Share via SMS, email, WhatsApp","Instant payment collection","Custom branding options"]},{value:"payment-pages",title:"Payment Pages",subtitle:"Create online store",icon:L,features:["Ready-to-use online store","Product catalog management","Inventory tracking","Mobile-optimized checkout"]},{value:"pos",title:"Point of Sale (POS)",subtitle:"In-store payments",icon:L,features:["Accept card & UPI payments","Contactless payments","Inventory management","Sales analytics & reports"]}],O=({option:a,isSelected:i,children:r})=>e.jsx(l,{as:"label",isSelected:i,marginBottom:"spacing.3",width:{s:"100%",m:"400px"},children:e.jsxs(c,{children:[e.jsxs(s,{display:"flex",flexDirection:"row",gap:"spacing.3",justifyContent:"space-between",children:[e.jsx(H,{title:a.title,subtitle:a.subtitle,prefix:e.jsx(ue,{icon:a.icon})}),r]}),e.jsx(ke,{marginTop:"spacing.2"}),e.jsx(we,{variant:"unordered",marginTop:"spacing.2",children:a.features.map((n,u)=>e.jsx(Pe,{children:e.jsx(He,{children:n})},u))})]})}),v=()=>{var y;const[a,i]=m.useState(""),[r,n]=m.useState(!1),u=r&&!a;return e.jsx(s,{display:"flex",gap:"spacing.6",flexDirection:"column",children:e.jsxs(s,{children:[e.jsx(t,{marginBottom:"spacing.4",weight:"semibold",size:"large",children:"Merchant Onboarding - Primary Product Selection"}),e.jsx(t,{marginBottom:"spacing.4",children:"Choose your primary Green Loom product to get started. You can add more products later from your dashboard."}),e.jsx(ce,{value:a,onChange:({value:d})=>i(d),label:"Select Product",necessityIndicator:"required",validationState:u?"error":"none",errorText:u?"Please select a product to continue":void 0,helpText:"Select one primary product for your initial setup",orientation:"horizontal",flexWrap:"wrap",children:P.map(d=>e.jsx(O,{option:d,isSelected:a===d.value,children:e.jsx(de,{value:d.value})},d.value))}),e.jsxs(s,{display:"flex",justifyContent:"space-between",children:[e.jsx(R,{marginTop:"spacing.4",onClick:()=>n(!0),variant:"primary",children:"Continue Setup"}),a&&e.jsx(s,{marginTop:"spacing.3",backgroundColor:"surface.background.gray.intense",padding:"spacing.3",borderRadius:"medium",children:e.jsxs(t,{color:"surface.text.gray.subtle",children:["Selected:"," ",(y=P.find(d=>d.value===a))==null?void 0:y.title]})})]})]})})},B=()=>{const[a,i]=m.useState([]),[r,n]=m.useState(!1),u=r&&a.length===0,y=a.length>3,d=u||y?"error":"none",pe=u?"Please select at least one Green Loom product to get started":y?"You can select maximum 3 products during initial setup":void 0;return e.jsx(s,{display:"flex",gap:"spacing.6",flexDirection:"column",children:e.jsxs(s,{children:[e.jsx(t,{marginBottom:"spacing.4",weight:"semibold",size:"large",children:"Merchant Onboarding - Multiple Product Selection"}),e.jsx(t,{marginBottom:"spacing.4",children:"Choose multiple Green Loom products you want to integrate. You can always add more products later from your dashboard."}),e.jsx(xe,{value:a,onChange:({values:x})=>i(x),label:"Which products do you want to use?",necessityIndicator:"required",validationState:d,errorText:pe,helpText:"Select 1-3 products to start with. Additional products can be enabled later.",orientation:"horizontal",flexWrap:"wrap",children:P.map(x=>e.jsx(O,{option:x,isSelected:a.includes(x.value),children:e.jsx(ye,{value:x.value})},x.value))}),e.jsxs(s,{display:"flex",justifyContent:"space-between",children:[e.jsx(R,{marginTop:"spacing.4",onClick:()=>n(!0),variant:"primary",children:"Continue Setup"}),a.length>0&&e.jsx(s,{marginTop:"spacing.3",backgroundColor:"surface.background.gray.intense",padding:"spacing.3",borderRadius:"medium",children:e.jsxs(t,{color:"surface.text.gray.subtle",children:["Selected products (",a.length,"/3):"," ",a.map(x=>{var I;return(I=P.find(me=>me.value===x))==null?void 0:I.title}).join(", ")]})})]})]})})},T=()=>{const[a,i]=m.useState("");return e.jsx(s,{display:"flex",gap:"spacing.6",flexDirection:"column",children:e.jsxs(s,{children:[e.jsx(t,{marginBottom:"spacing.4",weight:"semibold",size:"large",children:"Label Position Left Example"}),e.jsx(t,{marginBottom:"spacing.4",children:"RadioGroup with label positioned on the left side of the cards."}),e.jsx(ce,{value:a,onChange:({value:r})=>i(r),label:"Select Product",orientation:"horizontal",labelPosition:"left",flexWrap:"wrap",helpText:"Select one primary product for your initial setup",children:P.slice(0,2).map(r=>e.jsx(O,{option:r,isSelected:a===r.value,children:e.jsx(de,{value:r.value})},r.value))})]})})},k=()=>le()?e.jsx(Me,{}):e.jsx(Fe,{}),w=()=>le()?e.jsx(Ue,{}):e.jsx(Ee,{});var D,F,E;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`(args): React.ReactElement => {
  return <Card onHover={() => {
    console.log('Hovered');
  }} isSelected={args.isSelected} shouldScaleOnHover={args.shouldScaleOnHover} href={args.href} target={args.target} accessibilityLabel={args.accessibilityLabel} backgroundColor={args.backgroundColor} elevation={args.elevation} padding={args.padding} width={{
    s: '100%',
    m: '400px'
  }}>
      <CardHeader>
        <CardHeaderLeading title="Payment Pages" subtitle="Card Header Subtitle" prefix={<CardHeaderIcon icon={RupeeIcon} />} suffix={<CardHeaderCounter value={12} />} />
        <CardHeaderTrailing visual={<CardHeaderBadge color="positive">NEW</CardHeaderBadge>} />
      </CardHeader>
      <CardBody>
        <Text>
          Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately.
          Accepting payments from customers is now just a link away.
        </Text>
      </CardBody>
      <CardFooter>
        <CardFooterLeading title="Footer" subtitle="Footer Subtitle" />
        <CardFooterTrailing actions={{
        primary: {
          text: 'Primary',
          onClick: () => console.log('Primary')
        },
        secondary: {
          text: 'Secondary',
          onClick: () => console.log('Secondary')
        }
      }} />
      </CardFooter>
    </Card>;
}`,...(E=(F=C.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var M,U,W;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`(): React.ReactElement => {
  const [cardClickCount, setCardClickCount] = React.useState(0);
  const [buttonClickCount, setButtonClickCount] = React.useState(0);
  const [switchToggleCounter, setSwitchToggleCounter] = React.useState(0);
  return <Box>
      <Box marginBottom="spacing.6">
        <Text>
          Cards can be made clickable by passing the <Code size="medium">onClick</Code> prop.
        </Text>
        <Text>
          You will also need to pass the <Code size="medium">accessibilityLabel</Code> to make the
          card accessible to screen readers.
        </Text>
      </Box>
      <Card accessibilityLabel="Payment Pages Card" onClick={() => setCardClickCount(prev => prev + 1)} width={{
      s: '100%',
      m: '400px'
    }}>
        <CardHeader>
          <CardHeaderLeading title="Payment Pages" />
        </CardHeader>
        <CardBody>
          <Text>
            Take your store online instantly with zero coding. Accept international & domestic
            payments.
          </Text>
          <Text marginY="spacing.2">
            Card Clicked:{' '}
            <Text as="span" weight="semibold">
              {cardClickCount}
            </Text>
          </Text>
          <Text marginY="spacing.2">
            Button Clicked:{' '}
            <Text as="span" weight="semibold">
              {buttonClickCount}
            </Text>
          </Text>
          <Text marginY="spacing.2">
            Switch Toggled:{' '}
            <Text as="span" weight="semibold">
              {switchToggleCounter}
            </Text>
          </Text>
          <Button size="small" marginTop="spacing.5" onClick={() => {
          setButtonClickCount(prev => prev + 1);
        }}>
            Get Demo
          </Button>
          <Switch accessibilityLabel="switch" size="small" onChange={() => {
          setSwitchToggleCounter(prev => prev + 1);
        }} />
        </CardBody>
      </Card>
    </Box>;
}`,...(W=(U=S.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var A,G,N;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box>
      <Text marginBottom="spacing.6">
        By passing the <Code size="medium">shouldScaleOnHover</Code> prop, the card will scale up on
        hover. (on mobile devices the interaction will happen on press and the card will scale down
        instead)
      </Text>
      <Card shouldScaleOnHover width={{
      s: '100%',
      m: '400px'
    }}>
        <CardHeader>
          <CardHeaderLeading title="Payment Links" subtitle="Collect faster payments on UPI Payment Links with upto 50% lower fees" />
        </CardHeader>
        <CardBody>
          <Text>
            Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately.
            Accepting payments from customers is now just a link away.
          </Text>
        </CardBody>
      </Card>
    </Box>;
}`,...(N=(G=j.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var Y,X,V;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box>
      <Box marginBottom="spacing.6">
        <Text>
          Cards can be made linkable by passing the <Code size="medium">href</Code> prop,
        </Text>
        <Text>
          You will also need to pass the <Code size="medium">accessibilityLabel</Code> to make the
          link accessible to screen readers.
        </Text>
      </Box>
      <Card href="https://greenloom.ai/payment-links" accessibilityLabel="Payment Links" shouldScaleOnHover width={{
      s: '100%',
      m: '400px'
    }}>
        <CardHeader>
          <CardHeaderLeading title="Payment Links" subtitle="Collect faster payments on UPI Payment Links with upto 50% lower fees" />
        </CardHeader>
        <CardBody>
          <Text>
            Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately.
            Accepting payments from customers is now just a link away.
          </Text>
          <Link marginTop="spacing.4" href="https://greenloom.ai/payment-links/#overview">
            Get Demo
          </Link>
        </CardBody>
      </Card>
    </Box>;
}`,...(V=(X=f.parameters)==null?void 0:X.docs)==null?void 0:V.source}}};var q,_,Z;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`(): React.ReactElement => {
  const [selectedBusinessType, setSelectedBusinessType] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const hasError = isSubmitted && !selectedBusinessType;
  return <Box display="flex" gap="spacing.6" flexDirection="column">
      <Box>
        <Text marginBottom="spacing.4" weight="semibold" size="large">
          Merchant Onboarding - Primary Product Selection
        </Text>
        <Text marginBottom="spacing.4">
          Choose your primary Green Loom product to get started. You can add more products later
          from your dashboard.
        </Text>

        <RadioGroup value={selectedBusinessType} onChange={({
        value
      }) => setSelectedBusinessType(value)} label="Select Product" necessityIndicator="required" validationState={hasError ? 'error' : 'none'} errorText={hasError ? 'Please select a product to continue' : undefined} helpText="Select one primary product for your initial setup" orientation="horizontal" flexWrap="wrap">
          {merchantOnboardingOptions.map(option => <OptionCard key={option.value} option={option} isSelected={selectedBusinessType === option.value}>
              <Radio value={option.value} />
            </OptionCard>)}
        </RadioGroup>

        <Box display="flex" justifyContent="space-between">
          <Button marginTop="spacing.4" onClick={() => setIsSubmitted(true)} variant="primary">
            Continue Setup
          </Button>
          {selectedBusinessType && <Box marginTop="spacing.3" backgroundColor="surface.background.gray.intense" padding="spacing.3" borderRadius="medium">
              <Text color="surface.text.gray.subtle">
                Selected:{' '}
                {merchantOnboardingOptions.find(option => option.value === selectedBusinessType)?.title}
              </Text>
            </Box>}
        </Box>
      </Box>
    </Box>;
}`,...(Z=(_=v.parameters)==null?void 0:_.docs)==null?void 0:Z.source}}};var J,K,Q;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`(): React.ReactElement => {
  const [selectedProducts, setSelectedProducts] = React.useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const hasError = isSubmitted && selectedProducts.length === 0;
  const hasMaxError = selectedProducts.length > 3;
  const validationState = hasError || hasMaxError ? 'error' : 'none';
  const errorText = hasError ? 'Please select at least one Green Loom product to get started' : hasMaxError ? 'You can select maximum 3 products during initial setup' : undefined;
  return <Box display="flex" gap="spacing.6" flexDirection="column">
      <Box>
        <Text marginBottom="spacing.4" weight="semibold" size="large">
          Merchant Onboarding - Multiple Product Selection
        </Text>
        <Text marginBottom="spacing.4">
          Choose multiple Green Loom products you want to integrate. You can always add more
          products later from your dashboard.
        </Text>

        <CheckboxGroup value={selectedProducts} onChange={({
        values
      }) => setSelectedProducts(values)} label="Which products do you want to use?" necessityIndicator="required" validationState={validationState} errorText={errorText} helpText="Select 1-3 products to start with. Additional products can be enabled later." orientation="horizontal" flexWrap="wrap">
          {merchantOnboardingOptions.map(option => <OptionCard key={option.value} option={option} isSelected={selectedProducts.includes(option.value)}>
              <Checkbox value={option.value} />
            </OptionCard>)}
        </CheckboxGroup>

        <Box display="flex" justifyContent="space-between">
          <Button marginTop="spacing.4" onClick={() => setIsSubmitted(true)} variant="primary">
            Continue Setup
          </Button>

          {selectedProducts.length > 0 && <Box marginTop="spacing.3" backgroundColor="surface.background.gray.intense" padding="spacing.3" borderRadius="medium">
              <Text color="surface.text.gray.subtle">
                Selected products ({selectedProducts.length}/3):{' '}
                {selectedProducts.map(productValue => merchantOnboardingOptions.find(option => option.value === productValue)?.title).join(', ')}
              </Text>
            </Box>}
        </Box>
      </Box>
    </Box>;
}`,...(Q=(K=B.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var $,ee,ae;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`(): React.ReactElement => {
  const [selectedBusinessType, setSelectedBusinessType] = React.useState('');
  return <Box display="flex" gap="spacing.6" flexDirection="column">
      <Box>
        <Text marginBottom="spacing.4" weight="semibold" size="large">
          Label Position Left Example
        </Text>
        <Text marginBottom="spacing.4">
          RadioGroup with label positioned on the left side of the cards.
        </Text>

        <RadioGroup value={selectedBusinessType} onChange={({
        value
      }) => setSelectedBusinessType(value)} label="Select Product" orientation="horizontal" labelPosition="left" flexWrap="wrap" helpText="Select one primary product for your initial setup">
          {merchantOnboardingOptions.slice(0, 2).map(option => <OptionCard key={option.value} option={option} isSelected={selectedBusinessType === option.value}>
              <Radio value={option.value} />
            </OptionCard>)}
        </RadioGroup>
      </Box>
    </Box>;
}`,...(ae=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,re;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`(): React.ReactElement => {
  if (isReactNative()) {
    return <SingleSelectCardReactNative />;
  }
  return <SingleSelectCardWeb />;
}`,...(re=(se=k.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,ne,oe;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`(): React.ReactElement => {
  if (isReactNative()) {
    return <MultiSelectCardReactNative />;
  }
  return <MultiSelectCardWeb />;
}`,...(oe=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const We=["Default","ClickableCard","HoverableCard","LinkableCard","SingleSelectableCardWithRadio","MultiSelectableCardWithCheckbox","SelectableCardWithLabelLeft","SingleSelectableCard","MultiSelectableCard"],Ye=Object.freeze(Object.defineProperty({__proto__:null,ClickableCard:S,Default:C,HoverableCard:j,LinkableCard:f,MultiSelectableCard:w,MultiSelectableCardWithCheckbox:B,SelectableCardWithLabelLeft:T,SingleSelectableCard:k,SingleSelectableCardWithRadio:v,__namedExportsOrder:We,default:Ie},Symbol.toStringTag,{value:"Module"}));export{Ye as i};
