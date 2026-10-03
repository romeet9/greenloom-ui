import{n,j as e,x as r,H as W,B as d,T as s,ac as P,a7 as N,ad as je,ae as ze,X as Se,af as ve,ag as Ie,r as Pe,o as D,P as De,ah as We}from"./iframe-C1qQ09LF.js";import{i as k}from"./iconMap-BGYDFM5U.js";import{S as Le}from"./Sandbox.web-B2xP21Qp.js";import{S as Ne}from"./StoryPageWrapper-CS0_5maI.js";import{g as ke,a as Re}from"./storybookArgTypes-DFfQV31s.js";const Ae=()=>e.jsxs(Ne,{componentDescription:"This is the Button component which can be used for various CTAs. It is available in 3 different variants.",componentName:"Button",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74881-74603&t=2pKzbmnd3phWhn1M-1&scaling=min-zoom&page-id=614%3A1&mode=design",children:[e.jsx(Se,{children:"Usage"}),e.jsx(Le,{showConsole:!0,children:`
        import { Button } from '@greenloom/ui/components'
        
        function App() {
          return (
            // Try changing variant here to secondary
            <Button 
              variant="primary" 
              onClick={() => console.log('Tadaaaa')}
            >
              Click Me!
            </Button>
          )
        }

        export default App;
      `}),e.jsx(ve,{children:"Usage with Icon"}),e.jsx(Ie,{markdown:"`icon` prop accepts an `IconComponent` of Blade which should be used as:"}),e.jsx("code",{children:`import { Button, CreditCardIcon } from '@greenloom/ui/components'; 

<Button icon={CreditCardIcon}>Pay Now</Button>`}),e.jsx("br",{}),e.jsx("br",{})]}),Oe={title:"Components/Button",component:n,args:{variant:"primary",color:"primary",children:"Pay Now",onClick:()=>{console.log("clicked")},isDisabled:!1,size:"medium",iconPosition:"left",isFullWidth:!1,type:"button"},tags:["autodocs"],argTypes:{...ke(),...Re(),icon:{name:"icon",type:"select",options:Object.keys(k),mapping:k}},parameters:{docs:{page:Ae}}},be=({children:a="Button",...t})=>e.jsx(n,{...t,children:a}),C=De(We)({padding:"8px 0px"}),L=({children:a="Button",...t})=>e.jsxs(e.Fragment,{children:[e.jsx(C,{fontWeight:"bold",children:"xsmall"}),e.jsx(n,{...t,size:"xsmall",children:a}),e.jsx(C,{fontWeight:"bold",children:"small"}),e.jsx(n,{...t,size:"small",children:a}),e.jsx(C,{fontWeight:"bold",children:"medium"}),e.jsx(n,{...t,size:"medium",children:a}),e.jsx(C,{fontWeight:"bold",children:"large"}),e.jsx(n,{...t,size:"large",children:a})]}),I=({children:a="Button",...t})=>e.jsxs(e.Fragment,{children:[e.jsx(C,{fontWeight:"bold",children:"Primary"}),e.jsx(n,{...t,variant:"primary",children:a}),e.jsx(C,{fontWeight:"bold",children:"Secondary"}),e.jsx(n,{...t,variant:"secondary",children:a}),e.jsx(C,{fontWeight:"bold",children:"Tertiary"}),e.jsx(n,{...t,variant:"tertiary",children:a})]}),Fe=({children:a="Button",...t})=>{const v=["primary","white","positive","negative"];return e.jsx(e.Fragment,{children:v.map(l=>{const o=l==="white"?"surface.text.staticWhite.normal":"surface.text.staticBlack.normal";return e.jsxs(r,{display:"flex",flexDirection:"row",gap:"spacing.5",backgroundColor:l==="white"?"surface.background.cloud.intense":"transparent",margin:"spacing.4",padding:"spacing.5",children:[e.jsx(r,{width:"100px",margin:"spacing.2",display:"flex",justifyContent:"center",alignItems:"center",children:e.jsx(W,{marginBottom:"spacing.3",color:o,size:"medium",children:l})}),e.jsxs(r,{margin:"spacing.2",children:[e.jsx(s,{marginBottom:"spacing.3",color:o,children:"Primary"}),e.jsx(n,{...t,color:l,variant:"primary",children:a}),e.jsx(n,{marginLeft:"spacing.4",...t,color:l,variant:"primary",isDisabled:!0,children:a})]}),e.jsxs(r,{margin:"spacing.2",children:[e.jsx(s,{marginBottom:"spacing.3",color:o,children:"Secondary"}),e.jsx(n,{...t,color:l,variant:"secondary",children:a}),e.jsx(n,{marginLeft:"spacing.4",...t,color:l,variant:"secondary",isDisabled:!0,children:a})]}),(l=="primary"||l=="white")&&e.jsxs(r,{margin:"spacing.2",children:[e.jsx(s,{marginBottom:"spacing.3",color:o,children:"Tertiary"}),e.jsx(n,{...t,color:l,variant:"tertiary",children:a}),e.jsx(n,{marginLeft:"spacing.4",...t,color:l,variant:"tertiary",isDisabled:!0,children:a})]})]},l)})})},T=be.bind({});T.storyName="Default";const b=Fe.bind({});b.storyName="Button with colors";const p=L.bind({});p.storyName="Primary";p.args={variant:"primary"};p.parameters={docs:{description:{story:"Primary Button in different sizes"}}};const u=L.bind({});u.storyName="Secondary";u.args={variant:"secondary"};u.parameters={docs:{description:{story:"Secondary Button in different sizes"}}};const x=L.bind({});x.storyName="Tertiary";x.args={variant:"tertiary"};x.parameters={docs:{description:{story:"Tertiary Button in different sizes"}}};const j=be.bind({});j.args={variant:"primary",children:"I am Link!",href:"https://greenloom.ai/",target:"_blank",rel:"noopener noreferrer"};const g=I.bind({});g.storyName="Disabled";g.args={isDisabled:!0};g.parameters={docs:{description:{story:"Primary, Secondary & Tertiary buttons in disabled states"}}};const B=I.bind({});B.storyName="Left Icon";B.args={icon:D,iconPosition:"left"};B.parameters={docs:{description:{story:"Primary, Secondary & Tertiary buttons with an Icon on Left"},source:{code:`<Button variant='primary' icon={CreditCardIcon} iconPosition='left'>Pay Now</Button>
      
<Button variant='secondary' icon={CreditCardIcon} iconPosition='left'>Pay Now</Button>
      
<Button variant='tertiary' icon={CreditCardIcon} iconPosition='left'>Pay Now</Button>`,language:"jsx",type:"code"}}};const y=I.bind({});y.storyName="Right Icon";y.args={icon:D,iconPosition:"right"};y.parameters={docs:{description:{story:"Primary, Secondary & Tertiary buttons with an Icon on Right"},source:{code:`<Button variant='primary' icon={CreditCardIcon} iconPosition='right'>Pay Now</Button>
      
<Button variant='secondary' icon={CreditCardIcon} iconPosition='right'>Pay Now</Button>
      
<Button variant='tertiary' icon={CreditCardIcon} iconPosition='right'>Pay Now</Button>`,language:"jsx",type:"code"}}};const h=I.bind({});h.storyName="Icon Only";h.args={icon:D,children:""};h.parameters={docs:{description:{story:"Primary, Secondary & Tertiary buttons with only an Icon"},source:{code:`<Button variant='primary' icon={CreditCardIcon}  />
      
<Button variant='secondary' icon={CreditCardIcon} />
      
<Button variant='tertiary' icon={CreditCardIcon} />`,language:"jsx",type:"code"}}};const He=["xsmall","small","medium","large"],Ve=a=>{const[t,v]=Pe.useState(!1),l=()=>v(o=>!o);return e.jsxs(e.Fragment,{children:[e.jsx(n,{...a,isLoading:t}),e.jsx(r,{marginTop:"spacing.3"}),e.jsx(s,{children:"Open voice over (fn+⌘+F5) to hear loading state being announced"}),e.jsx(r,{marginTop:"spacing.3"}),e.jsx(n,{size:"small",variant:"secondary",onClick:l,children:"Toggle loading"}),e.jsx(r,{marginTop:"spacing.7"}),e.jsx(s,{weight:"semibold",children:"Icon only"}),e.jsx(r,{marginTop:"spacing.3"}),e.jsx(r,{display:"flex",flexDirection:"row",alignItems:"center",gap:"spacing.6",children:He.map(o=>e.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing.2",children:[e.jsx(n,{size:o,icon:D,isLoading:t,accessibilityLabel:"Pay now"}),e.jsx(s,{size:"small",color:"surface.text.gray.muted",children:o})]},o))})]})},Ee=({children:a="Button",...t})=>e.jsx(Ve,{...t,children:a}),z=Ee.bind({});z.parameters={docs:{description:{story:'Loading state for the button with live announce accessibility support. The indicator is a 3-dot loader; the dots are hidden from assistive tech since the button already announces start/stop. The icon-only row shows the same state on square buttons, where the loader steps up to its large size on `size="large"`.'}}};const f=I.bind({});f.storyName="Full Width";f.args={isFullWidth:!0};f.parameters={docs:{description:{story:"Primary, Secondary & Tertiary buttons with full width"}}};const w=()=>{const a=je.useRef(null);return e.jsxs(r,{gap:"spacing.3",display:"flex",children:[e.jsx(n,{ref:a,children:"Button"}),e.jsx(n,{onClick:()=>{var t;return(t=ze(a==null?void 0:a.current))==null?void 0:t.focus()},children:"Click to focus other button"})]})};w.storyName="Button Ref";w.parameters={docs:{description:{story:"Button component exposes the `ref` prop. The `ref` exposes two methods `focus` & `scrollIntoView` which can be used to programatically control the DOM element"}}};const S=()=>{const a=["primary","secondary","tertiary"],t=["xsmall","small","medium","large"],v=["primary","secondary"],l=[{color:"white",label:"White"},{color:"positive",label:"Positive"},{color:"negative",label:"Negative"}];return e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.7",children:[a.map(o=>e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(W,{size:"medium",textTransform:"capitalize",children:o}),e.jsxs(r,{display:"flex",flexDirection:"row",gap:"spacing.5",alignItems:"center",children:[e.jsx(d,{width:"60px",children:e.jsx(s,{size:"small",color:"surface.text.gray.muted",children:"Default"})}),t.map(i=>e.jsx(n,{variant:o,size:i,children:"Pay Now"},i))]}),e.jsxs(r,{display:"flex",flexDirection:"row",gap:"spacing.5",alignItems:"center",children:[e.jsx(d,{width:"60px",children:e.jsx(s,{size:"small",color:"surface.text.gray.muted",children:"Disabled"})}),t.map(i=>e.jsx(n,{variant:o,size:i,isDisabled:!0,children:"Pay Now"},i))]}),e.jsxs(r,{display:"flex",flexDirection:"row",gap:"spacing.5",alignItems:"center",children:[e.jsx(d,{width:"60px",children:e.jsx(s,{size:"small",color:"surface.text.gray.muted",children:"Loading"})}),t.map(i=>e.jsx(n,{variant:o,size:i,isLoading:!0,children:"Pay Now"},i))]}),e.jsxs(r,{display:"flex",flexDirection:"row",gap:"spacing.5",alignItems:"center",children:[e.jsx(d,{width:"60px",children:e.jsx(s,{size:"small",color:"surface.text.gray.muted",children:"Icon Left"})}),t.map(i=>e.jsx(n,{variant:o,size:i,icon:P,iconPosition:"left",children:"Pay Now"},i))]}),e.jsxs(r,{display:"flex",flexDirection:"row",gap:"spacing.5",alignItems:"center",children:[e.jsx(d,{width:"60px",children:e.jsx(s,{size:"small",color:"surface.text.gray.muted",children:"Icon Right"})}),t.map(i=>e.jsx(n,{variant:o,size:i,icon:P,iconPosition:"right",children:"Pay Now"},i))]}),e.jsxs(r,{display:"flex",flexDirection:"row",gap:"spacing.5",alignItems:"center",children:[e.jsx(d,{width:"60px",children:e.jsx(s,{size:"small",color:"surface.text.gray.muted",children:"Icon Only"})}),t.map(i=>e.jsx(n,{variant:o,size:i,icon:N},i))]})]},o)),l.map(({color:o,label:i})=>e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.4",padding:o==="white"?"spacing.5":void 0,backgroundColor:o==="white"?"surface.background.primary.intense":void 0,borderRadius:o==="white"?"medium":void 0,children:[e.jsx(W,{size:"medium",color:o==="white"?"surface.text.staticWhite.normal":void 0,children:i}),v.map(m=>e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(s,{size:"small",color:o==="white"?"surface.text.staticWhite.muted":"surface.text.gray.muted",textTransform:"capitalize",children:m}),e.jsxs(r,{display:"flex",flexDirection:"row",gap:"spacing.5",alignItems:"center",children:[e.jsx(d,{width:"60px",children:e.jsx(s,{size:"small",color:o==="white"?"surface.text.staticWhite.muted":"surface.text.gray.muted",children:"Default"})}),t.map(c=>e.jsx(n,{variant:m,color:o,size:c,children:"Pay Now"},c))]}),e.jsxs(r,{display:"flex",flexDirection:"row",gap:"spacing.5",alignItems:"center",children:[e.jsx(d,{width:"60px",children:e.jsx(s,{size:"small",color:o==="white"?"surface.text.staticWhite.muted":"surface.text.gray.muted",children:"Disabled"})}),t.map(c=>e.jsx(n,{variant:m,color:o,size:c,isDisabled:!0,children:"Pay Now"},c))]}),e.jsxs(r,{display:"flex",flexDirection:"row",gap:"spacing.5",alignItems:"center",children:[e.jsx(d,{width:"60px",children:e.jsx(s,{size:"small",color:o==="white"?"surface.text.staticWhite.muted":"surface.text.gray.muted",children:"Loading"})}),t.map(c=>e.jsx(n,{variant:m,color:o,size:c,isLoading:!0,children:"Pay Now"},c))]}),e.jsxs(r,{display:"flex",flexDirection:"row",gap:"spacing.5",alignItems:"center",children:[e.jsx(d,{width:"60px",children:e.jsx(s,{size:"small",color:o==="white"?"surface.text.staticWhite.muted":"surface.text.gray.muted",children:"Icon Left"})}),t.map(c=>e.jsx(n,{variant:m,color:o,size:c,icon:P,iconPosition:"left",children:"Pay Now"},c))]}),e.jsxs(r,{display:"flex",flexDirection:"row",gap:"spacing.5",alignItems:"center",children:[e.jsx(d,{width:"60px",children:e.jsx(s,{size:"small",color:o==="white"?"surface.text.staticWhite.muted":"surface.text.gray.muted",children:"Icon Right"})}),t.map(c=>e.jsx(n,{variant:m,color:o,size:c,icon:P,iconPosition:"right",children:"Pay Now"},c))]}),e.jsxs(r,{display:"flex",flexDirection:"row",gap:"spacing.5",alignItems:"center",children:[e.jsx(d,{width:"60px",children:e.jsx(s,{size:"small",color:o==="white"?"surface.text.staticWhite.muted":"surface.text.gray.muted",children:"Icon Only"})}),t.map(c=>e.jsx(n,{variant:m,color:o,size:c,icon:N},c))]})]},m))]},o))]})};S.storyName="All Variants & Sizes";var R,A,O;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`({
  children = 'Button',
  ...args
}) => {
  return <ButtonComponent {...args}>{children}</ButtonComponent>;
}`,...(O=(A=T.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var F,H,V;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`({
  children = 'Button',
  ...args
}) => {
  const colors: ButtonProps['color'][] = ['primary', 'white', 'positive', 'negative'];
  return <>
      {colors.map(color => {
      const textColor = color === 'white' ? 'surface.text.staticWhite.normal' : 'surface.text.staticBlack.normal';
      return <BaseBox key={color} display="flex" flexDirection="row" gap="spacing.5" backgroundColor={color === 'white' ? 'surface.background.cloud.intense' : 'transparent'} margin="spacing.4" padding="spacing.5">
            <BaseBox width="100px" margin="spacing.2" display="flex" justifyContent="center" alignItems="center">
              <HeadingComponent marginBottom="spacing.3" color={textColor} size="medium">
                {color}
              </HeadingComponent>
            </BaseBox>
            <BaseBox margin="spacing.2">
              <Text marginBottom="spacing.3" color={textColor}>
                Primary
              </Text>
              <ButtonComponent {...args} color={color} variant="primary">
                {children}
              </ButtonComponent>

              <ButtonComponent marginLeft="spacing.4" {...args} color={color} variant="primary" isDisabled>
                {children}
              </ButtonComponent>
            </BaseBox>

            <BaseBox margin="spacing.2">
              <Text marginBottom="spacing.3" color={textColor}>
                Secondary
              </Text>
              <ButtonComponent {...args} color={color} variant="secondary">
                {children}
              </ButtonComponent>

              <ButtonComponent marginLeft="spacing.4" {...args} color={color} variant="secondary" isDisabled>
                {children}
              </ButtonComponent>
            </BaseBox>

            {(color == 'primary' || color == 'white') && <BaseBox margin="spacing.2">
                <Text marginBottom="spacing.3" color={textColor}>
                  Tertiary
                </Text>
                <ButtonComponent {...args} color={color} variant="tertiary">
                  {children}
                </ButtonComponent>

                <ButtonComponent marginLeft="spacing.4" {...args} color={color} variant="tertiary" isDisabled>
                  {children}
                </ButtonComponent>
              </BaseBox>}
          </BaseBox>;
    })}
    </>;
}`,...(V=(H=b.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var E,_,U;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`({
  children = 'Button',
  ...args
}) => {
  return <>
      <StyledBaseText fontWeight="bold">xsmall</StyledBaseText>
      <ButtonComponent {...args} size="xsmall">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">small</StyledBaseText>
      <ButtonComponent {...args} size="small">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">medium</StyledBaseText>
      <ButtonComponent {...args} size="medium">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">large</StyledBaseText>
      <ButtonComponent {...args} size="large">
        {children}
      </ButtonComponent>
    </>;
}`,...(U=(_=p.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var M,q,K;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`({
  children = 'Button',
  ...args
}) => {
  return <>
      <StyledBaseText fontWeight="bold">xsmall</StyledBaseText>
      <ButtonComponent {...args} size="xsmall">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">small</StyledBaseText>
      <ButtonComponent {...args} size="small">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">medium</StyledBaseText>
      <ButtonComponent {...args} size="medium">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">large</StyledBaseText>
      <ButtonComponent {...args} size="large">
        {children}
      </ButtonComponent>
    </>;
}`,...(K=(q=u.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,X,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`({
  children = 'Button',
  ...args
}) => {
  return <>
      <StyledBaseText fontWeight="bold">xsmall</StyledBaseText>
      <ButtonComponent {...args} size="xsmall">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">small</StyledBaseText>
      <ButtonComponent {...args} size="small">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">medium</StyledBaseText>
      <ButtonComponent {...args} size="medium">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">large</StyledBaseText>
      <ButtonComponent {...args} size="large">
        {children}
      </ButtonComponent>
    </>;
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var G,J,Y;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`({
  children = 'Button',
  ...args
}) => {
  return <ButtonComponent {...args}>{children}</ButtonComponent>;
}`,...(Y=(J=j.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var $,ee,te;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`({
  children = 'Button',
  ...args
}) => {
  return <>
      <StyledBaseText fontWeight="bold">Primary</StyledBaseText>
      <ButtonComponent {...args} variant="primary">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">Secondary</StyledBaseText>
      <ButtonComponent {...args} variant="secondary">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">Tertiary</StyledBaseText>
      <ButtonComponent {...args} variant="tertiary">
        {children}
      </ButtonComponent>
    </>;
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ne,ae;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`({
  children = 'Button',
  ...args
}) => {
  return <>
      <StyledBaseText fontWeight="bold">Primary</StyledBaseText>
      <ButtonComponent {...args} variant="primary">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">Secondary</StyledBaseText>
      <ButtonComponent {...args} variant="secondary">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">Tertiary</StyledBaseText>
      <ButtonComponent {...args} variant="tertiary">
        {children}
      </ButtonComponent>
    </>;
}`,...(ae=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,ie,se;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`({
  children = 'Button',
  ...args
}) => {
  return <>
      <StyledBaseText fontWeight="bold">Primary</StyledBaseText>
      <ButtonComponent {...args} variant="primary">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">Secondary</StyledBaseText>
      <ButtonComponent {...args} variant="secondary">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">Tertiary</StyledBaseText>
      <ButtonComponent {...args} variant="tertiary">
        {children}
      </ButtonComponent>
    </>;
}`,...(se=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ce,le,de;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`({
  children = 'Button',
  ...args
}) => {
  return <>
      <StyledBaseText fontWeight="bold">Primary</StyledBaseText>
      <ButtonComponent {...args} variant="primary">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">Secondary</StyledBaseText>
      <ButtonComponent {...args} variant="secondary">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">Tertiary</StyledBaseText>
      <ButtonComponent {...args} variant="tertiary">
        {children}
      </ButtonComponent>
    </>;
}`,...(de=(le=h.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var me,pe,ue;z.parameters={...z.parameters,docs:{...(me=z.parameters)==null?void 0:me.docs,source:{originalSource:`({
  children = 'Button',
  ...args
}) => {
  return <ButtonLoadingExample {...args}>{children}</ButtonLoadingExample>;
}`,...(ue=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var xe,ge,Be;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`({
  children = 'Button',
  ...args
}) => {
  return <>
      <StyledBaseText fontWeight="bold">Primary</StyledBaseText>
      <ButtonComponent {...args} variant="primary">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">Secondary</StyledBaseText>
      <ButtonComponent {...args} variant="secondary">
        {children}
      </ButtonComponent>

      <StyledBaseText fontWeight="bold">Tertiary</StyledBaseText>
      <ButtonComponent {...args} variant="tertiary">
        {children}
      </ButtonComponent>
    </>;
}`,...(Be=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:Be.source}}};var ye,he,fe;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  const buttonRef = React.useRef<BladeElementRef>(null);
  return <BaseBox gap="spacing.3" display="flex">
      <ButtonComponent ref={buttonRef}>Button</ButtonComponent>
      <ButtonComponent onClick={() => castWebType(buttonRef?.current)?.focus()}>
        Click to focus other button
      </ButtonComponent>
    </BaseBox>;
}`,...(fe=(he=w.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var Ce,we,Te;S.parameters={...S.parameters,docs:{...(Ce=S.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  const variants: ButtonProps['variant'][] = ['primary', 'secondary', 'tertiary'];
  const sizes: ButtonProps['size'][] = ['xsmall', 'small', 'medium', 'large'];
  // positive/negative colors only support primary and secondary variants
  const colorVariants: ButtonProps['variant'][] = ['primary', 'secondary'];
  const colors: Array<{
    color: ButtonProps['color'];
    label: string;
  }> = [{
    color: 'white',
    label: 'White'
  }, {
    color: 'positive',
    label: 'Positive'
  }, {
    color: 'negative',
    label: 'Negative'
  }];
  return <BaseBox display="flex" flexDirection="column" gap="spacing.7">
      {variants.map(variant => <BaseBox key={variant} display="flex" flexDirection="column" gap="spacing.4">
          <HeadingComponent size="medium" textTransform="capitalize">
            {variant}
          </HeadingComponent>
          {/* Default */}
          <BaseBox display="flex" flexDirection="row" gap="spacing.5" alignItems="center">
            <Box width="60px">
              <Text size="small" color="surface.text.gray.muted">
                Default
              </Text>
            </Box>
            {sizes.map(size => <ButtonComponent key={size} variant={variant} size={size}>
                Pay Now
              </ButtonComponent>)}
          </BaseBox>
          {/* Disabled */}
          <BaseBox display="flex" flexDirection="row" gap="spacing.5" alignItems="center">
            <Box width="60px">
              <Text size="small" color="surface.text.gray.muted">
                Disabled
              </Text>
            </Box>
            {sizes.map(size => <ButtonComponent key={size} variant={variant} size={size} isDisabled>
                Pay Now
              </ButtonComponent>)}
          </BaseBox>
          {/* Loading */}
          <BaseBox display="flex" flexDirection="row" gap="spacing.5" alignItems="center">
            <Box width="60px">
              <Text size="small" color="surface.text.gray.muted">
                Loading
              </Text>
            </Box>
            {sizes.map(size => <ButtonComponent key={size} variant={variant} size={size} isLoading>
                Pay Now
              </ButtonComponent>)}
          </BaseBox>
          {/* Icon Left */}
          <BaseBox display="flex" flexDirection="row" gap="spacing.5" alignItems="center">
            <Box width="60px">
              <Text size="small" color="surface.text.gray.muted">
                Icon Left
              </Text>
            </Box>
            {sizes.map(size => <ButtonComponent key={size} variant={variant} size={size} icon={ArrowRightIcon} iconPosition="left">
                Pay Now
              </ButtonComponent>)}
          </BaseBox>
          {/* Icon Right */}
          <BaseBox display="flex" flexDirection="row" gap="spacing.5" alignItems="center">
            <Box width="60px">
              <Text size="small" color="surface.text.gray.muted">
                Icon Right
              </Text>
            </Box>
            {sizes.map(size => <ButtonComponent key={size} variant={variant} size={size} icon={ArrowRightIcon} iconPosition="right">
                Pay Now
              </ButtonComponent>)}
          </BaseBox>
          {/* Icon only */}
          <BaseBox display="flex" flexDirection="row" gap="spacing.5" alignItems="center">
            <Box width="60px">
              <Text size="small" color="surface.text.gray.muted">
                Icon Only
              </Text>
            </Box>
            {sizes.map(size => <ButtonComponent key={size} variant={variant} size={size} icon={UserIcon} />)}
          </BaseBox>
        </BaseBox>)}

      {/* Positive and Negative color buttons */}
      {colors.map(({
      color,
      label
    }) => <BaseBox key={color} display="flex" flexDirection="column" gap="spacing.4" padding={color === 'white' ? 'spacing.5' : undefined} backgroundColor={color === 'white' ? 'surface.background.primary.intense' : undefined} borderRadius={color === 'white' ? 'medium' : undefined}>
          <HeadingComponent size="medium" color={color === 'white' ? 'surface.text.staticWhite.normal' : undefined}>
            {label}
          </HeadingComponent>
          {colorVariants.map(variant => <BaseBox key={variant} display="flex" flexDirection="column" gap="spacing.3">
              <Text size="small" color={color === 'white' ? 'surface.text.staticWhite.muted' : 'surface.text.gray.muted'} textTransform="capitalize">
                {variant}
              </Text>
              {/* Default */}
              <BaseBox display="flex" flexDirection="row" gap="spacing.5" alignItems="center">
                <Box width="60px">
                  <Text size="small" color={color === 'white' ? 'surface.text.staticWhite.muted' : 'surface.text.gray.muted'}>
                    Default
                  </Text>
                </Box>
                {sizes.map(size => <ButtonComponent key={size} variant={variant} color={color} size={size}>
                    Pay Now
                  </ButtonComponent>)}
              </BaseBox>
              {/* Disabled */}
              <BaseBox display="flex" flexDirection="row" gap="spacing.5" alignItems="center">
                <Box width="60px">
                  <Text size="small" color={color === 'white' ? 'surface.text.staticWhite.muted' : 'surface.text.gray.muted'}>
                    Disabled
                  </Text>
                </Box>
                {sizes.map(size => <ButtonComponent key={size} variant={variant} color={color} size={size} isDisabled>
                    Pay Now
                  </ButtonComponent>)}
              </BaseBox>
              {/* Loading */}
              <BaseBox display="flex" flexDirection="row" gap="spacing.5" alignItems="center">
                <Box width="60px">
                  <Text size="small" color={color === 'white' ? 'surface.text.staticWhite.muted' : 'surface.text.gray.muted'}>
                    Loading
                  </Text>
                </Box>
                {sizes.map(size => <ButtonComponent key={size} variant={variant} color={color} size={size} isLoading>
                    Pay Now
                  </ButtonComponent>)}
              </BaseBox>
              {/* Icon Left */}
              <BaseBox display="flex" flexDirection="row" gap="spacing.5" alignItems="center">
                <Box width="60px">
                  <Text size="small" color={color === 'white' ? 'surface.text.staticWhite.muted' : 'surface.text.gray.muted'}>
                    Icon Left
                  </Text>
                </Box>
                {sizes.map(size => <ButtonComponent key={size} variant={variant} color={color} size={size} icon={ArrowRightIcon} iconPosition="left">
                    Pay Now
                  </ButtonComponent>)}
              </BaseBox>
              {/* Icon Right */}
              <BaseBox display="flex" flexDirection="row" gap="spacing.5" alignItems="center">
                <Box width="60px">
                  <Text size="small" color={color === 'white' ? 'surface.text.staticWhite.muted' : 'surface.text.gray.muted'}>
                    Icon Right
                  </Text>
                </Box>
                {sizes.map(size => <ButtonComponent key={size} variant={variant} color={color} size={size} icon={ArrowRightIcon} iconPosition="right">
                    Pay Now
                  </ButtonComponent>)}
              </BaseBox>
              {/* Icon only */}
              <BaseBox display="flex" flexDirection="row" gap="spacing.5" alignItems="center">
                <Box width="60px">
                  <Text size="small" color={color === 'white' ? 'surface.text.staticWhite.muted' : 'surface.text.gray.muted'}>
                    Icon Only
                  </Text>
                </Box>
                {sizes.map(size => <ButtonComponent key={size} variant={variant} color={color} size={size} icon={UserIcon} />)}
              </BaseBox>
            </BaseBox>)}
        </BaseBox>)}
    </BaseBox>;
}`,...(Te=(we=S.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};const _e=["Default","ButtonWithColors","PrimaryButton","SecondaryButton","TertiaryButton","ButtonAsLink","DisabledButton","IconLeftButton","IconRightButton","IconOnlyButton","ButtonLoading","FullWidthButton","ButtonRef","AllVariantsAndSizes"],Xe=Object.freeze(Object.defineProperty({__proto__:null,AllVariantsAndSizes:S,ButtonAsLink:j,ButtonLoading:z,ButtonRef:w,ButtonWithColors:b,Default:T,DisabledButton:g,FullWidthButton:f,IconLeftButton:B,IconOnlyButton:h,IconRightButton:y,PrimaryButton:p,SecondaryButton:u,TertiaryButton:x,__namedExportsOrder:_e,default:Oe},Symbol.toStringTag,{value:"Module"}));export{Xe as b};
