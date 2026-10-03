import{a8 as o,j as e,X as de,x as n,T as j,B as D,hP as xe,bc as fe,hQ as ge,hR as ye,hS as Be,r as he,aK as S,at as C,au as v,aS as z,aq as I,ar as N}from"./iframe-C1qQ09LF.js";import{g as je}from"./storybookArgTypes-DFfQV31s.js";import{S as Ae}from"./Sandbox.web-B2xP21Qp.js";import{S as be}from"./StoryPageWrapper-CS0_5maI.js";const Te=()=>e.jsxs(be,{componentName:"Amount",componentDescription:"Amounts are used to show small amount of color coded metadata, which are ideal for getting user attention.",note:"This component only displays the provided value in the specified currency with the formatting capabilities enabled by @razorpay/i18nify-react, it does not perform any currency conversion.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=73923-3993&t=BlKhwBm0KrrsRDPF-1&scaling=min-zoom&page-id=27439%3A575440&mode=design",propsDescription:`The Amount component automatically formats numbers based on the user's browser locale enabled by @razorpay/i18nify-react. To adjust the locale according to your page, utilise its hooks for updating the locale. For more details, please refer to
      the documentation of @razorpay/i18nify-react library.`,children:[e.jsx(de,{children:"Usage"}),e.jsx(Ae,{children:`
        import { Amount } from '@greenloom/ui/components';
        
        function App() {
          return <Amount value={10000} />;
        }
        export default App;
        `})]}),De={title:"Components/Amount",component:o,tags:["autodocs"],argTypes:{...je()},parameters:{docs:{page:Te}}},b=a=>e.jsx(o,{...a}),c=b.bind({});c.args={value:12500.45};c.storyName="Default";const Se=a=>e.jsxs(n,{display:"flex",flexDirection:"row",flexWrap:"wrap",children:[e.jsx(j,{children:"Total Amount is"}),e.jsx(o,{...a}),e.jsx(j,{children:"only."})]}),l=Se.bind({});l.args={value:1e3,type:"body",size:"medium"};l.storyName="With Text";const Ce=a=>{const t={body:["xsmall","small","medium","large"],heading:["small","medium","large","xlarge","2xlarge"],display:["small","medium","large","xlarge"]};return e.jsx(D,{justifyContent:"center",children:xe(t).map(s=>e.jsxs(D,{children:[e.jsxs(fe,{size:"small",marginTop:"spacing.8",marginBottom:"spacing.4",children:["Type ",s]}),t[s].map(A=>e.jsxs(D,{marginBottom:"spacing.4",children:[e.jsx(j,{children:A}),e.jsx(n,{marginBottom:"spacing.1"}),e.jsx(o,{...a,type:s,size:A})]},A))]},s))})},r={value:123456.789,size:"medium"},m=Ce.bind({});m.args={...r};m.storyName="Sizes";const ve=a=>{const t=["positive","negative","notice","information"];return e.jsx(n,{justifyContent:"flex-start",children:t.map(s=>e.jsxs(n,{display:"flex",alignItems:"baseline",paddingRight:"spacing.3",paddingTop:"spacing.3",flexDirection:"column",children:[e.jsx(j,{marginBottom:"spacing.1",children:s}),e.jsx(o,{...a,color:`feedback.text.${s}.intense`})]},s))})},p=ve.bind({});p.args={...r};p.storyName="All Intents";const u=b.bind({});u.args={...r,suffix:"none"};u.storyName="No Suffix";const ze=a=>{const t=[1234,12345,123456,1234567,12345678];return e.jsx(n,{justifyContent:"flex-start",children:t.map(s=>e.jsx(n,{paddingBottom:"spacing.3",children:e.jsx(o,{...a,value:s})},s))})},g=ze.bind({});g.args={...r,suffix:"humanize"};g.storyName="Humanize Suffix";const Ie=a=>{const t=Object.keys(ge());return e.jsx(n,{justifyContent:"flex-start",maxHeight:"300px",overflowY:"auto",children:t.map(s=>e.jsxs(n,{display:"flex",alignItems:"baseline",paddingRight:"spacing.3",paddingTop:"spacing.3",flexDirection:"column",children:[e.jsx(j,{marginBottom:"spacing.1",children:s}),e.jsx(o,{...a,currency:s})]},s))})},d=Ie.bind({});d.args={...r,suffix:"humanize"};d.storyName="Currency";const x=b.bind({});x.args={...r,isAffixSubtle:!1};x.storyName="Affix Subtle Off";const f=b.bind({});f.args={...r,isStrikethrough:!0};f.storyName="Strike Through";const Ne=a=>{const t=[0,1,2,3,4,5];return e.jsx(n,{justifyContent:"flex-start",children:t.map(s=>e.jsxs(n,{display:"flex",alignItems:"baseline",paddingRight:"spacing.3",paddingBottom:"spacing.3",flexDirection:"column",children:[e.jsx(j,{marginBottom:"spacing.1",children:`fractionDigits: ${s}`}),e.jsx(o,{...a,fractionDigits:s})]},s))})},y=Ne.bind({});y.args={...r,value:123.456789};y.storyName="Custom Fraction Digits";const ke=[{currency:"INR",label:"INR (Indian Rupee) — 2 decimals"},{currency:"JPY",label:"JPY (Japanese Yen) — 0 decimals"},{currency:"KWD",label:"KWD (Kuwaiti Dinar) — 3 decimals"},{currency:"USD",label:"USD (US Dollar) — 2 decimals"},{currency:"BHD",label:"BHD (Bahraini Dinar) — 3 decimals"}],we=a=>e.jsx(n,{justifyContent:"flex-start",children:ke.map(({currency:t,label:s})=>e.jsxs(n,{display:"flex",alignItems:"baseline",paddingRight:"spacing.3",paddingBottom:"spacing.3",flexDirection:"column",children:[e.jsx(j,{marginBottom:"spacing.2",size:"small",color:"surface.text.gray.subtle",children:s}),e.jsx(o,{...a,currency:t})]},t))}),B=we.bind({});B.args={value:12500,fractionDigits:"auto"};B.storyName="Auto Fraction Digits";const Re=[{country:"India",locale:"en-IN"},{country:"USA",locale:"en-US"},{country:"Malaysia",locale:"ms-MY"},{country:"France",locale:"fr-FR"},{country:"Germany",locale:"de-DE"}],Pe=a=>{const{setI18nState:t}=Be(),[s,A]=he.useState("INR");return e.jsxs(e.Fragment,{children:[e.jsx(o,{...a,currency:s}),e.jsx(S,{marginY:"spacing.4",marginTop:"spacing.8"}),e.jsxs(C,{selectionType:"single",children:[e.jsx(v,{label:"Select currency"}),e.jsx(z,{children:e.jsx(I,{children:Object.keys(ge()).map(i=>e.jsx(N,{title:i,value:i,onClick:({name:T})=>{A(T)}},i))})})]}),e.jsx(S,{marginY:"spacing.4"}),e.jsxs(C,{selectionType:"single",children:[e.jsx(v,{label:"Select locale"}),e.jsx(z,{children:e.jsx(I,{children:Re.map(i=>e.jsx(N,{title:`${i.country}(${i.locale})`,value:i.locale,onClick:({name:T})=>{t==null||t({locale:T})}},i.locale))})})]})]})},Fe=a=>e.jsx(ye,{children:e.jsx(n,{justifyContent:"flex-start",minHeight:"300px",overflowY:"auto",children:e.jsx(n,{display:"flex",alignItems:"baseline",paddingRight:"spacing.3",paddingTop:"spacing.3",flexDirection:"column",children:e.jsx(Pe,{...a})})})}),h=Fe.bind({});h.args={...r};h.storyName="Amount in diff locales";var k,w,R;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <AmountComponent {...args} />;
}`,...(R=(w=c.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var P,F,W;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  return <BaseBox display="flex" flexDirection="row" flexWrap="wrap">
      <Text>Total Amount is</Text>
      <AmountComponent {...args} />
      <Text>only.</Text>
    </BaseBox>;
}`,...(W=(F=l.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var H,L,O;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const sizes: {
    heading: AmountHeadingProps['size'][];
    body: AmountBodyProps['size'][];
    display: AmountDisplayProps['size'][];
  } = {
    body: ['xsmall', 'small', 'medium', 'large'],
    heading: ['small', 'medium', 'large', 'xlarge', '2xlarge'],
    display: ['small', 'medium', 'large', 'xlarge']
  };
  return <Box justifyContent="center">
      {objectKeysWithType(sizes).map(amountTypeProp => <Box key={amountTypeProp}>
          <Display size="small" marginTop="spacing.8" marginBottom="spacing.4">
            Type {amountTypeProp}
          </Display>
          {sizes[amountTypeProp].map(size => <Box key={size} marginBottom="spacing.4">
              <Text>{size}</Text>
              <BaseBox marginBottom="spacing.1" />
              {/* @ts-expect-error */}
              <AmountComponent {...args} type={amountTypeProp} size={size} />
            </Box>)}
        </Box>)}
    </Box>;
}`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var Y,K,U;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const colors = ['positive', 'negative', 'notice', 'information'] as const;
  return <BaseBox justifyContent="flex-start">
      {colors.map(color => <BaseBox display="flex" key={color} alignItems="baseline" paddingRight="spacing.3" paddingTop="spacing.3" flexDirection="column">
          <Text marginBottom="spacing.1">{color}</Text>
          <AmountComponent {...args} color={\`feedback.text.\${color}.intense\`} />
        </BaseBox>)}
    </BaseBox>;
}`,...(U=(K=p.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var $,_,E;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return <AmountComponent {...args} />;
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var J,M,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const values = [1234, 12345, 123456, 1234567, 12345678] as const;
  return <BaseBox justifyContent="flex-start">
      {values.map(value => <BaseBox paddingBottom="spacing.3" key={value}>
          <AmountComponent {...args} value={value} />
        </BaseBox>)}
    </BaseBox>;
}`,...(Q=(M=g.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var q,G,V;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const values = Object.keys(getCurrencyList());
  return <BaseBox justifyContent="flex-start" maxHeight="300px" overflowY="auto">
      {values.map(value => <BaseBox display="flex" key={value} alignItems="baseline" paddingRight="spacing.3" paddingTop="spacing.3" flexDirection="column">
          <Text marginBottom="spacing.1">{value}</Text>
          <AmountComponent {...args} currency={value as AmountProps['currency']} />
        </BaseBox>)}
    </BaseBox>;
}`,...(V=(G=d.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var X,Z,ee;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  return <AmountComponent {...args} />;
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,ae,te;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  return <AmountComponent {...args} />;
}`,...(te=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,oe,re;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  const fractionDigitsList = [0, 1, 2, 3, 4, 5];
  return <BaseBox justifyContent="flex-start">
      {fractionDigitsList.map(digits => <BaseBox display="flex" key={digits} alignItems="baseline" paddingRight="spacing.3" paddingBottom="spacing.3" flexDirection="column">
          <Text marginBottom="spacing.1">{\`fractionDigits: \${digits}\`}</Text>
          <AmountComponent {...args} fractionDigits={digits} />
        </BaseBox>)}
    </BaseBox>;
}`,...(re=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,ce,le;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
  return <BaseBox justifyContent="flex-start">
      {AutoFractionDigitsCurrencies.map(({
      currency,
      label
    }) => <BaseBox display="flex" key={currency} alignItems="baseline" paddingRight="spacing.3" paddingBottom="spacing.3" flexDirection="column">
          <Text marginBottom="spacing.2" size="small" color="surface.text.gray.subtle">
            {label}
          </Text>
          <AmountComponent {...args} currency={currency} />
        </BaseBox>)}
    </BaseBox>;
}`,...(le=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var me,pe,ue;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`args => {
  return <I18nProvider>
      <BaseBox justifyContent="flex-start" minHeight="300px" overflowY="auto">
        <BaseBox display="flex" alignItems="baseline" paddingRight="spacing.3" paddingTop="spacing.3" flexDirection="column">
          <I18nAmountWrapper {...args} />
        </BaseBox>
      </BaseBox>
    </I18nProvider>;
}`,...(ue=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const We=["Amount","AmountWithText","AmountSizes","AllIntents","NoSuffix","HumanizeSuffix","Currency","AffixSubtleOff","StrikeThrough","CustomFractionDigits","AutoFractionDigits","I18nAmount"],Ke=Object.freeze(Object.defineProperty({__proto__:null,AffixSubtleOff:x,AllIntents:p,Amount:c,AmountSizes:m,AmountWithText:l,AutoFractionDigits:B,Currency:d,CustomFractionDigits:y,HumanizeSuffix:g,I18nAmount:h,NoSuffix:u,StrikeThrough:f,__namedExportsOrder:We,default:De},Symbol.toStringTag,{value:"Module"}));export{Ke as a};
