import{A as n,j as e,X as ae,i as o,Y as de,Z as ee,_ as oe,B as a,T as i,$ as h,H as ue,a0 as t,a1 as s,l as te,F as j,a2 as le,a3 as B,a4 as me,r as se,n as d,a5 as S,a6 as he,a7 as pe,a8 as xe,C as Ie,a9 as k,aa as ye,ab as Ae}from"./iframe-C1qQ09LF.js";import{S as ge}from"./Sandbox.web-B2xP21Qp.js";import{S as fe}from"./StoryPageWrapper-CS0_5maI.js";import{g as be}from"./storybookArgTypes-DFfQV31s.js";const je=()=>e.jsxs(fe,{componentName:"Accordion",componentDescription:"An accordion is used to allow users to toggle between different content sections in a compact vertical stack.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74858-50167&t=Kp8hYSNEvkkPXfFF-1&mode=design",children:[e.jsx(ae,{children:"Usage"}),e.jsx(ge,{editorHeight:500,children:`
        import { Accordion, AccordionItem, AccordionItemHeader, AccordionItemBody } from '@greenloom/ui/components';

        function App() {
          return (
            <Accordion>
              <AccordionItem>
                <AccordionItemHeader title="How can I setup Route?" />
                <AccordionItemBody>
                  You can use Green Loom Route from the Dashboard or using APIs to transfer money to
                  customers. You may also check our docs for detailed instructions.
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeader title="How can I setup QR Codes?" />
                <AccordionItemBody>
                  Just use Green Loom. You may also check our docs for detailed instructions. Please use the
                  search functionality to ask your queries.
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeader title="How can I setup Subscriptions?" />
                <AccordionItemBody>
                  Just use Green Loom. You may also check our docs for detailed instructions. Please use the
                  search functionality to ask your queries.
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
          )
        }

        export default App;
        `})]}),Be={title:"Components/Accordion",component:n,args:{},tags:["autodocs"],argTypes:{minWidth:{description:'**CSS property `min-width`**\n\n<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/min-width">MDN Docs for min-width</a><br/><br/>',control:{type:"object"},table:{category:"StyledProps",type:{summary:"MakeValueResponsive<CSSObject['minWidth']>"}}},maxWidth:{description:'**CSS property `max-width`**\n\n<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/max-width">MDN Docs for max-width</a><br/><br/>',control:{type:"object"},table:{category:"StyledProps",type:{summary:"MakeValueResponsive<CSSObject['maxWidth']>"}}},...be()},parameters:{docs:{page:je}}},re=({...r})=>e.jsxs(n,{...r,children:[e.jsxs(o,{children:[e.jsx(t,{title:"How can I setup Route?"}),e.jsx(s,{children:"You can use Green Loom Route from the Dashboard or using APIs to transfer money to customers. You may also check our docs for detailed instructions."})]}),e.jsxs(o,{children:[e.jsx(t,{title:"How can I setup QR Codes?"}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]}),e.jsxs(o,{children:[e.jsx(t,{title:"How can I setup Subscriptions?"}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]})]}),ke=({...r})=>e.jsxs(n,{...r,children:[e.jsxs(o,{children:[e.jsx(t,{leading:e.jsx(oe,{size:"large"}),title:"How can I setup Route?",subtitle:"Subtitle of how to setup route",titleSuffix:e.jsx(j,{children:"New"}),trailing:e.jsx(te,{variant:"button",onClick:m=>{m.stopPropagation()},children:"Apply"})}),e.jsx(s,{children:"You can use Green Loom Route from the Dashboard or using APIs to transfer money to customers. You may also check our docs for detailed instructions."})]}),e.jsxs(o,{children:[e.jsx(t,{leading:e.jsx(ee,{size:"large"}),title:"How can I setup QR Codes?"}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]}),e.jsxs(o,{children:[e.jsx(t,{leading:e.jsx(ye,{size:"large"}),title:"How can I setup Subscriptions?"}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]})]}),b=re.bind({}),u=re.bind({});u.args={showNumberPrefix:!0};u.parameters={docs:{description:{story:"Use the `showNumberPrefix` prop to automatically add numeric indexes. **Note:** this should not be used with `icon` prop in `AccordionItem`"}}};const p=ke.bind({});p.parameters={docs:{description:{story:"Use the `icon` prop in `AccordionItem` to pass blade icons. **Note:** this should not be used with `showNumberPrefix` on `Accordion`."}}};const Ce=({expandedIndex:r,onExpandChange:m,defaultExpandedIndex:C,...ne})=>{const[ie,f]=se.useState(-1),c=Ae()?"spacing.1":"spacing.0";return e.jsxs(e.Fragment,{children:[e.jsxs(a,{display:"flex",flexDirection:"row",gap:"spacing.4",marginBottom:"spacing.6",flexWrap:"wrap",children:[e.jsx(d,{marginX:c,marginY:c,onClick:()=>f(0),children:"Expand First"}),e.jsx(d,{marginX:c,marginY:c,onClick:()=>f(1),children:"Expand Second"}),e.jsx(d,{marginX:c,marginY:c,onClick:()=>f(2),children:"Expand Third"}),e.jsx(d,{marginX:c,marginY:c,onClick:()=>f(-1),children:"Collapse"})]}),e.jsxs(n,{...ne,expandedIndex:ie,onExpandChange:({expandedIndex:ce})=>f(ce),children:[e.jsxs(o,{children:[e.jsx(t,{title:"How can I setup Route?"}),e.jsx(s,{children:"You can use Green Loom Route from the Dashboard or using APIs to transfer money to customers. You may also check our docs for detailed instructions."})]}),e.jsxs(o,{children:[e.jsx(t,{title:"How can I setup QR Codes?"}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]}),e.jsxs(o,{children:[e.jsx(t,{title:"How can I setup Subscriptions?"}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]})]})]})},l=Ce.bind({});l.parameters={docs:{description:{story:"Use `expandedIndex`: `number` and `onExpandChange`: `({ expandedIndex }) => void` to build controlled behavior. **Note:** a `-1` value signifies no expanded items."}}};l.args={showNumberPrefix:!0};const Se=({...r})=>{const[m,C]=se.useState(!0);return e.jsxs(n,{...r,children:[e.jsxs(o,{children:[e.jsx(t,{title:"How can I setup Route?"}),e.jsxs(s,{children:[e.jsx(i,{color:"surface.text.gray.subtle",marginBottom:"spacing.0",children:"You can use Green Loom Route from the Dashboard or using APIs to transfer money to customers. You may also check our docs for detailed instructions."}),m&&e.jsx(S,{title:"Custom slot",description:"You can render anything here along with description",onDismiss:()=>C(!1),isFullWidth:!0})]})]}),e.jsxs(o,{children:[e.jsx(t,{children:e.jsx(i,{color:"surface.text.primary.normal",children:"CUSTOM SLOT HEADER"})}),e.jsx(s,{children:e.jsx(S,{title:"Custom Slot Body",description:"Or you can skip description altogether and just render a custom component here",isDismissible:!1,isFullWidth:!0})})]}),e.jsxs(o,{children:[e.jsx(t,{title:"How can I setup Subscriptions?"}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]})]})},x=Se.bind({});x.parameters={docs:{description:{story:"Pass a custom slot component / JSX as `children` in `AccordionItemHeader` and `AccordionItemBody`."}}};const we=({...r})=>e.jsxs(a,{maxWidth:{base:"100%",s:"480px"},children:[e.jsx(n,{...r,children:e.jsxs(o,{children:[e.jsx(t,{title:"PhonePe Wallet",subtitle:"+ ₹50 Extra Charge"}),e.jsxs(s,{children:[e.jsx(k,{label:"Phone Number",type:"telephone",placeholder:"Enter Phone Number"}),e.jsx(d,{children:"Continue"})]})]})}),e.jsx(n,{marginTop:"spacing.5",...r,children:e.jsxs(o,{children:[e.jsx(t,{title:"HDFC Credit Card",subtitle:"No EMI Cost Avaliable",titleSuffix:e.jsx(j,{color:"positive",children:"Upto ₹500 off"})}),e.jsxs(s,{children:[e.jsx(k,{label:"Card Number",type:"number",placeholder:"Enter Card Number"}),e.jsx(d,{children:"Continue"})]})]})}),e.jsx(n,{marginTop:"spacing.5",...r,children:e.jsxs(o,{children:[e.jsx(t,{title:"Google Pay",titleSuffix:e.jsx(j,{color:"positive",children:"5% Cashback"})}),e.jsxs(s,{children:[e.jsx(k,{label:"Google Pay UPI ID",type:"number",placeholder:"xyz@okhdfcbank"}),e.jsx(d,{isFullWidth:!0,children:"Continue"})]})]})})]}),I=we.bind({});I.args={variant:"filled"};const Pe=({...r})=>e.jsx(a,{maxWidth:{base:"100%",s:"480px"},children:e.jsx(n,{...r,children:e.jsxs(o,{children:[e.jsxs(t,{children:[e.jsx(i,{size:"medium",color:"surface.text.gray.muted",children:"#8218851"}),e.jsx(i,{marginY:"spacing.2",size:"large",weight:"semibold",children:"Transactions and settlement related"}),e.jsxs(a,{display:"flex",flexDirection:"row",gap:"spacing.3",children:[e.jsx(he,{size:"medium",color:"information",children:"In Progress"}),e.jsxs(a,{display:"flex",alignItems:"center",flexDirection:"row",gap:"spacing.2",children:[e.jsx(pe,{size:"medium",color:"surface.icon.gray.subtle"}),e.jsx(i,{size:"medium",color:"surface.text.gray.subtle",children:"Merchant Risk"})]})]})]}),e.jsx(s,{children:e.jsxs(i,{color:"surface.text.gray.subtle",children:["Green Loom please verify a payment of"," ",e.jsx(xe,{color:"surface.text.gray.subtle",value:5e3})," done by me to Razer for reloading gold as it seem they haven't received it. Payment Id :"," ",e.jsx(Ie,{children:"pay_LlI3slkdirf234"})]})})]})})}),y=Pe.bind({});y.args={variant:"filled"};const He=({...r})=>e.jsxs(e.Fragment,{children:[e.jsx(ue,{size:"xlarge",marginBottom:"spacing.4",children:"Accordion Header Types"}),e.jsxs(n,{...r,children:[e.jsxs(o,{children:[e.jsx(t,{title:"Simple Title & Text Item"}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]}),e.jsxs(o,{children:[e.jsx(t,{title:"Title Text of Accordion",subtitle:"Subtitle Text"}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]}),e.jsxs(o,{children:[e.jsx(t,{leading:e.jsx(h,{size:"large"}),title:"Item with Icon and subtitle",subtitle:"Subtitle Text"}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]}),e.jsxs(o,{children:[e.jsx(t,{leading:e.jsx(h,{size:"large"}),title:"Item with Trailing",subtitle:"Subtitle Text",trailing:e.jsx(te,{variant:"button",onClick:m=>{m.stopPropagation()},children:"Apply"})}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]}),e.jsxs(o,{children:[e.jsx(t,{leading:e.jsx(h,{size:"large"}),title:"Item with Badge",titleSuffix:e.jsx(j,{children:"New"})}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]}),e.jsxs(o,{children:[e.jsx(t,{leading:e.jsx(h,{size:"large"}),title:"Item with AvatarGroup",titleSuffix:e.jsxs(le,{size:"xsmall",density:"comfortable",children:[e.jsx(B,{name:"John Doe",src:"https://i.pravatar.cc/150?img=1"}),e.jsx(B,{name:"Jane Smith",src:"https://i.pravatar.cc/150?img=2"}),e.jsx(B,{name:"Bob Wilson",src:"https://i.pravatar.cc/150?img=3"})]})}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]}),e.jsxs(o,{children:[e.jsx(t,{leading:e.jsx(me,{size:"large"}),title:"Item without subtitle"}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]}),e.jsxs(o,{children:[e.jsx(t,{leading:e.jsx("img",{src:"https://picsum.photos/200/300",height:20,width:20,style:{borderRadius:"4px"},alt:"Random placeholder"}),title:"Slot item with subtitle",subtitle:"Subtitle Text"}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]}),e.jsxs(o,{children:[e.jsx(t,{leading:e.jsx("img",{src:"https://picsum.photos/200/300",height:20,width:20,style:{borderRadius:"4px"},alt:"Random placeholder"}),title:"Slot item without subtitle"}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]}),e.jsxs(o,{children:[e.jsx(t,{children:e.jsx(a,{children:e.jsx(i,{children:"Custom Slot Header"})})}),e.jsx(s,{children:e.jsx(a,{children:e.jsx(i,{children:"Custom Slot BODY"})})})]}),e.jsxs(o,{isDisabled:!0,children:[e.jsx(t,{leading:e.jsx(h,{size:"large",color:"surface.icon.gray.disabled"}),title:"Item with Badge",subtitle:"Subtitle Text",titleSuffix:e.jsx(j,{children:"New"})}),e.jsx(s,{children:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."})]})]})]}),A=He.bind({});A.args={variant:"filled"};const Ye=({...r})=>e.jsxs(n,{...r,children:[e.jsx(o,{icon:de,title:"How can I setup Subscriptions?",description:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."}),e.jsx(o,{icon:ee,title:"How can I setup QR Codes?",description:"Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries."}),e.jsx(o,{icon:oe,title:"How can I setup Routes?",children:e.jsxs(a,{children:[e.jsx(i,{children:"Deprecated slot"}),e.jsx(i,{children:"Deprecated slot"})]})}),e.jsx(o,{icon:h,title:"How can I setup Payouts?",description:"Use Green Loom Payouts to send money to bank accounts, UPI IDs, or wallets instantly. You can automate bulk payouts via APIs or manage them from the dashboard."})]}),g=Ye.bind({});g.args={variant:"transparent",size:"large"};var w,P,H;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`({
  ...args
}) => {
  return <AccordionComponent {...args}>
      <AccordionItem>
        <AccordionItemHeader title="How can I setup Route?" />
        <AccordionItemBody>
          You can use Green Loom Route from the Dashboard or using APIs to transfer money to
          customers. You may also check our docs for detailed instructions.
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeader title="How can I setup QR Codes?" />
        <AccordionItemBody>
          Just use Green Loom. You may also check our docs for detailed instructions. Please use the
          search functionality to ask your queries.
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeader title="How can I setup Subscriptions?" />
        <AccordionItemBody>
          Just use Green Loom. You may also check our docs for detailed instructions. Please use the
          search functionality to ask your queries.
        </AccordionItemBody>
      </AccordionItem>
    </AccordionComponent>;
}`,...(H=(P=b.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var Y,T,L;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`({
  ...args
}) => {
  return <AccordionComponent {...args}>
      <AccordionItem>
        <AccordionItemHeader title="How can I setup Route?" />
        <AccordionItemBody>
          You can use Green Loom Route from the Dashboard or using APIs to transfer money to
          customers. You may also check our docs for detailed instructions.
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeader title="How can I setup QR Codes?" />
        <AccordionItemBody>
          Just use Green Loom. You may also check our docs for detailed instructions. Please use the
          search functionality to ask your queries.
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeader title="How can I setup Subscriptions?" />
        <AccordionItemBody>
          Just use Green Loom. You may also check our docs for detailed instructions. Please use the
          search functionality to ask your queries.
        </AccordionItemBody>
      </AccordionItem>
    </AccordionComponent>;
}`,...(L=(T=u.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var G,R,v;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`({
  ...args
}) => {
  return <AccordionComponent {...args}>
      <AccordionItem>
        <AccordionItemHeader leading={<RoutesIcon size="large" />} title="How can I setup Route?" subtitle="Subtitle of how to setup route" titleSuffix={<Badge>New</Badge>} trailing={<Link variant="button" onClick={e => {
        e.stopPropagation();
      }}>
              Apply
            </Link>} />
        <AccordionItemBody>
          You can use Green Loom Route from the Dashboard or using APIs to transfer money to
          customers. You may also check our docs for detailed instructions.
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeader leading={<QRCodeIcon size="large" />} title="How can I setup QR Codes?" />
        <AccordionItemBody>
          Just use Green Loom. You may also check our docs for detailed instructions. Please use the
          search functionality to ask your queries.
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeader leading={<SubscriptionsIcon size="large" />} title="How can I setup Subscriptions?" />
        <AccordionItemBody>
          Just use Green Loom. You may also check our docs for detailed instructions. Please use the
          search functionality to ask your queries.
        </AccordionItemBody>
      </AccordionItem>
    </AccordionComponent>;
}`,...(v=(R=p.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var D,J,q;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`({
  expandedIndex: _expandedIndex,
  onExpandChange,
  defaultExpandedIndex,
  ...rest
}) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const gap = isReactNative() ? 'spacing.1' : 'spacing.0';
  return <>
      <Box display="flex" flexDirection="row" gap="spacing.4" marginBottom="spacing.6" flexWrap="wrap">
        <Button marginX={gap} marginY={gap} onClick={() => setExpandedIndex(0)}>
          Expand First
        </Button>
        <Button marginX={gap} marginY={gap} onClick={() => setExpandedIndex(1)}>
          Expand Second
        </Button>
        <Button marginX={gap} marginY={gap} onClick={() => setExpandedIndex(2)}>
          Expand Third
        </Button>
        <Button marginX={gap} marginY={gap} onClick={() => setExpandedIndex(-1)}>
          Collapse
        </Button>
      </Box>
      <AccordionComponent {...rest} expandedIndex={expandedIndex} onExpandChange={({
      expandedIndex
    }) => setExpandedIndex(expandedIndex)}>
        <AccordionItem>
          <AccordionItemHeader title="How can I setup Route?" />
          <AccordionItemBody>
            You can use Green Loom Route from the Dashboard or using APIs to transfer money to
            customers. You may also check our docs for detailed instructions.
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeader title="How can I setup QR Codes?" />
          <AccordionItemBody>
            Just use Green Loom. You may also check our docs for detailed instructions. Please use
            the search functionality to ask your queries.
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeader title="How can I setup Subscriptions?" />
          <AccordionItemBody>
            Just use Green Loom. You may also check our docs for detailed instructions. Please use
            the search functionality to ask your queries.
          </AccordionItemBody>
        </AccordionItem>
      </AccordionComponent>
    </>;
}`,...(q=(J=l.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var z,E,N;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`({
  ...args
}) => {
  const [isVisible, setIsVisible] = useState(true);
  return <AccordionComponent {...args}>
      <AccordionItem>
        <AccordionItemHeader title="How can I setup Route?" />
        <AccordionItemBody>
          <Text color="surface.text.gray.subtle" marginBottom="spacing.0">
            You can use Green Loom Route from the Dashboard or using APIs to transfer money to
            customers. You may also check our docs for detailed instructions.
          </Text>
          {isVisible && <Alert title="Custom slot" description="You can render anything here along with description" onDismiss={() => setIsVisible(false)} isFullWidth />}
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeader>
          <Text color="surface.text.primary.normal">CUSTOM SLOT HEADER</Text>
        </AccordionItemHeader>
        <AccordionItemBody>
          <Alert title="Custom Slot Body" description="Or you can skip description altogether and just render a custom component here" isDismissible={false} isFullWidth />
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeader title="How can I setup Subscriptions?" />
        <AccordionItemBody>
          Just use Green Loom. You may also check our docs for detailed instructions. Please use the
          search functionality to ask your queries.
        </AccordionItemBody>
      </AccordionItem>
    </AccordionComponent>;
}`,...(N=(E=x.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var W,U,F;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`({
  ...args
}) => {
  return <Box maxWidth={{
    base: '100%',
    s: '480px'
  }}>
      <AccordionComponent {...args}>
        <AccordionItem>
          <AccordionItemHeader title="PhonePe Wallet" subtitle="+ ₹50 Extra Charge" />
          <AccordionItemBody>
            <TextInput label="Phone Number" type="telephone" placeholder="Enter Phone Number" />
            <Button>Continue</Button>
          </AccordionItemBody>
        </AccordionItem>
      </AccordionComponent>
      <AccordionComponent marginTop="spacing.5" {...args}>
        <AccordionItem>
          <AccordionItemHeader title="HDFC Credit Card" subtitle="No EMI Cost Avaliable" titleSuffix={<Badge color="positive">Upto ₹500 off</Badge>} />
          <AccordionItemBody>
            <TextInput label="Card Number" type="number" placeholder="Enter Card Number" />
            <Button>Continue</Button>
          </AccordionItemBody>
        </AccordionItem>
      </AccordionComponent>
      <AccordionComponent marginTop="spacing.5" {...args}>
        <AccordionItem>
          <AccordionItemHeader title="Google Pay" titleSuffix={<Badge color="positive">5% Cashback</Badge>} />
          <AccordionItemBody>
            <TextInput label="Google Pay UPI ID" type="number" placeholder="xyz@okhdfcbank" />
            <Button isFullWidth>Continue</Button>
          </AccordionItemBody>
        </AccordionItem>
      </AccordionComponent>
    </Box>;
}`,...(F=(U=I.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var M,Q,O;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`({
  ...args
}) => {
  return <Box maxWidth={{
    base: '100%',
    s: '480px'
  }}>
      <AccordionComponent {...args}>
        <AccordionItem>
          <AccordionItemHeader>
            <Text size="medium" color="surface.text.gray.muted">
              #8218851
            </Text>
            <Text marginY="spacing.2" size="large" weight="semibold">
              Transactions and settlement related
            </Text>
            <Box display="flex" flexDirection="row" gap="spacing.3">
              <Indicator size="medium" color="information">
                In Progress
              </Indicator>
              <Box display="flex" alignItems="center" flexDirection="row" gap="spacing.2">
                <UserIcon size="medium" color="surface.icon.gray.subtle" />
                <Text size="medium" color="surface.text.gray.subtle">
                  Merchant Risk
                </Text>
              </Box>
            </Box>
          </AccordionItemHeader>
          <AccordionItemBody>
            <Text color="surface.text.gray.subtle">
              Green Loom please verify a payment of{' '}
              <Amount color="surface.text.gray.subtle" value={5000} /> done by me to Razer for
              reloading gold as it seem they haven't received it. Payment Id :{' '}
              <Code>pay_LlI3slkdirf234</Code>
            </Text>
          </AccordionItemBody>
        </AccordionItem>
      </AccordionComponent>
    </Box>;
}`,...(O=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:O.source}}};var _,V,X;A.parameters={...A.parameters,docs:{...(_=A.parameters)==null?void 0:_.docs,source:{originalSource:`({
  ...args
}) => {
  return <>
      <Heading size="xlarge" marginBottom="spacing.4">
        Accordion Header Types
      </Heading>
      <AccordionComponent {...args}>
        <AccordionItem>
          <AccordionItemHeader title="Simple Title & Text Item" />
          <AccordionItemBody>
            Just use Green Loom. You may also check our docs for detailed instructions. Please use
            the search functionality to ask your queries.
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeader title="Title Text of Accordion" subtitle="Subtitle Text" />
          <AccordionItemBody>
            Just use Green Loom. You may also check our docs for detailed instructions. Please use
            the search functionality to ask your queries.
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeader leading={<AnnouncementIcon size="large" />} title="Item with Icon and subtitle" subtitle="Subtitle Text" />
          <AccordionItemBody>
            Just use Green Loom. You may also check our docs for detailed instructions. Please use
            the search functionality to ask your queries.
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeader leading={<AnnouncementIcon size="large" />} title="Item with Trailing" subtitle="Subtitle Text" trailing={<Link variant="button" onClick={e => {
          e.stopPropagation();
        }}>
                Apply
              </Link>} />
          <AccordionItemBody>
            Just use Green Loom. You may also check our docs for detailed instructions. Please use
            the search functionality to ask your queries.
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeader leading={<AnnouncementIcon size="large" />} title="Item with Badge" titleSuffix={<Badge>New</Badge>} />
          <AccordionItemBody>
            Just use Green Loom. You may also check our docs for detailed instructions. Please use
            the search functionality to ask your queries.
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeader leading={<AnnouncementIcon size="large" />} title="Item with AvatarGroup" titleSuffix={<AvatarGroup size="xsmall" density="comfortable">
                <Avatar name="John Doe" src="https://i.pravatar.cc/150?img=1" />
                <Avatar name="Jane Smith" src="https://i.pravatar.cc/150?img=2" />
                <Avatar name="Bob Wilson" src="https://i.pravatar.cc/150?img=3" />
              </AvatarGroup>} />
          <AccordionItemBody>
            Just use Green Loom. You may also check our docs for detailed instructions. Please use
            the search functionality to ask your queries.
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeader leading={<ArrowUpIcon size="large" />} title="Item without subtitle" />
          <AccordionItemBody>
            Just use Green Loom. You may also check our docs for detailed instructions. Please use
            the search functionality to ask your queries.
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeader leading={<img src="https://picsum.photos/200/300" height={20} width={20} style={{
          borderRadius: '4px'
        }} alt="Random placeholder" />} title="Slot item with subtitle" subtitle="Subtitle Text" />
          <AccordionItemBody>
            Just use Green Loom. You may also check our docs for detailed instructions. Please use
            the search functionality to ask your queries.
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeader leading={<img src="https://picsum.photos/200/300" height={20} width={20} style={{
          borderRadius: '4px'
        }} alt="Random placeholder" />} title="Slot item without subtitle" />
          <AccordionItemBody>
            Just use Green Loom. You may also check our docs for detailed instructions. Please use
            the search functionality to ask your queries.
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeader>
            <Box>
              <Text>Custom Slot Header</Text>
            </Box>
          </AccordionItemHeader>
          <AccordionItemBody>
            <Box>
              <Text>Custom Slot BODY</Text>
            </Box>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem isDisabled={true}>
          <AccordionItemHeader leading={<AnnouncementIcon size="large" color="surface.icon.gray.disabled" />} title="Item with Badge" subtitle="Subtitle Text" titleSuffix={<Badge>New</Badge>} />
          <AccordionItemBody>
            Just use Green Loom. You may also check our docs for detailed instructions. Please use
            the search functionality to ask your queries.
          </AccordionItemBody>
        </AccordionItem>
      </AccordionComponent>
    </>;
}`,...(X=(V=A.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Z,K,$;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`({
  ...args
}) => {
  return <AccordionComponent {...args}>
      <AccordionItem icon={StarIcon} title="How can I setup Subscriptions?" description="Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries." />
      <AccordionItem icon={QRCodeIcon} title="How can I setup QR Codes?" description="Just use Green Loom. You may also check our docs for detailed instructions. Please use the search functionality to ask your queries." />
      <AccordionItem icon={RoutesIcon} title="How can I setup Routes?">
        <Box>
          <Text>Deprecated slot</Text>
          <Text>Deprecated slot</Text>
        </Box>
      </AccordionItem>
      <AccordionItem icon={AnnouncementIcon} title="How can I setup Payouts?" description="Use Green Loom Payouts to send money to bank accounts, UPI IDs, or wallets instantly. You can automate bulk payouts via APIs or manage them from the dashboard." />
    </AccordionComponent>;
}`,...($=(K=g.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};const Te=["BasicExample","WithShowNumberPrefix","WithIcons","ControlledExample","CustomHeaderBody","MultipleAccordionComposition","IndividualAccordionItem","AccordionItemHeaderVariants","AccordionDeprecatedAPI"],De=Object.freeze(Object.defineProperty({__proto__:null,AccordionDeprecatedAPI:g,AccordionItemHeaderVariants:A,BasicExample:b,ControlledExample:l,CustomHeaderBody:x,IndividualAccordionItem:y,MultipleAccordionComposition:I,WithIcons:p,WithShowNumberPrefix:u,__namedExportsOrder:Te,default:Be},Symbol.toStringTag,{value:"Module"}));export{De as a};
