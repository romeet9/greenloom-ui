import{l as i,j as e,x as o,H as L,T as b,ah as c,b1 as r,X as re,ag as se,jn as ae,ak as y}from"./iframe-C1qQ09LF.js";import{i as v}from"./iconMap-BGYDFM5U.js";import{S as ce}from"./Sandbox.web-B2xP21Qp.js";import{S as le}from"./StoryPageWrapper-CS0_5maI.js";import{g as de,a as pe}from"./storybookArgTypes-DFfQV31s.js";const me=()=>e.jsxs(le,{componentName:"Link",componentDescription:"This is the Link component which can be used for showing external or internal Links to the user. The Link component can also be used as an inline button in certain cases with the `button` variant",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=80952-9051&t=ozxGdqCDqI9hRYY8-1&scaling=min-zoom&page-id=614%3A1&mode=design",children:[e.jsx(re,{children:"Usage"}),e.jsx(ce,{children:`
          import { Link } from '@greenloom/ui/components';

          function App() {
            return (
              <Link 
                href="https://greenloom.ai" 
                target="_blank" 
                rel="noopener noreferer"
              >
                Go to Green Loom.com
              </Link>
            )
          }

          export default App;
        `}),e.jsx(se,{markdown:"> **Note** <br/>While using the `Link` component with React Native, please ensure you have gone through platform-specific prerequisites like adding `LSApplicationQueriesSchemes` in `Info.plist` for iOS and adding `intent` queries in `AndroidManifest.xml` for Android. For a detailed guide, follow React Native's [Linking Documentation](https://reactnative.dev/docs/linking#canopenurl)."})]}),ge={title:"Components/Link",component:i,args:{children:"Learn More"},tags:["autodocs"],argTypes:{icon:{name:"icon",type:"select",options:Object.keys(v),mapping:v},...de(),...pe()},parameters:{docs:{page:me}}},C=({children:a="Link",...t})=>e.jsx(i,{...t,children:a}),h=C.bind({});h.storyName="Default";h.args={variant:"anchor",children:"Learn More",onClick:a=>{console.log("clicked",a)},href:"https://github.com/razorpay/blade",target:"_blank",rel:"noreferrer noopener"};const xe=({icon:a,children:t="",...n})=>ae()==="react-native"?e.jsxs(o,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsx(b,{children:"Find more details at the "}),e.jsx(i,{...n,children:t})]}):e.jsxs(b,{children:["Find more details at the ",e.jsx(i,{...n,children:t})]}),l=xe.bind({});l.storyName="Link - Inline";l.args={variant:"anchor",href:"https://github.com/razorpay/blade/",target:"_blank",rel:"noreferrer noopener",children:"Loom UI's Github"};l.parameters={docs:{description:{story:"Inline Link within a Text component"}}};const d=C.bind({});d.storyName="Link Button";d.args={variant:"button"};d.parameters={docs:{description:{story:"Link as an inline button"}}};const ue=({icon:a,children:t="",...n})=>ae()==="react-native"?e.jsxs(o,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsx(b,{children:"Forgot Password? "}),e.jsx(i,{...n,children:t})]}):e.jsxs(b,{children:["Forgot Password? ",e.jsx(i,{...n,children:t})]}),p=ue.bind({});p.storyName="Link Button - Inline";p.args={variant:"button",children:"Reset Password"};p.parameters={docs:{description:{story:"Inline Link Button within a Text component"}}};const he=({icon:a,children:t="",...n})=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(o,{padding:"spacing.2",children:e.jsx(i,{...n,color:"primary",children:t})}),e.jsx(o,{padding:"spacing.2",backgroundColor:"surface.background.cloud.intense",children:e.jsx(i,{...n,color:"white",children:t})}),e.jsx(o,{padding:"spacing.2",children:e.jsx(i,{...n,color:"neutral",children:t})}),e.jsx(o,{padding:"spacing.2",children:e.jsx(i,{...n,color:"negative",children:t})}),e.jsx(o,{padding:"spacing.2",children:e.jsx(i,{...n,color:"positive",children:t})})]}),k=he.bind({});k.storyName="Link - With Color";k.args={variant:"anchor",children:"Learn More",href:"https://github.com/razorpay/blade"};const m=C.bind({});m.storyName="Link Button - Disabled";m.args={variant:"button",isDisabled:!0};m.parameters={docs:{description:{story:"Link Button in a disabled state"}}};const B=()=>{const a="https://www.youtube.com/watch?v=dQw4w9WgXcQ",t=()=>console.log("Never gonna give you up");return e.jsxs(o,{display:"flex",flexDirection:"row",children:[e.jsxs(o,{display:"flex",flexDirection:"column",marginRight:"spacing.5",children:[e.jsx(o,{marginBottom:"spacing.3",children:e.jsx(L,{children:"Anchor variant"})}),e.jsx(i,{variant:"anchor",href:a,target:"_blank",rel:"noopener noreferrer",size:"xsmall",icon:r,children:"XSmall anchor link"}),e.jsx(i,{variant:"anchor",href:a,target:"_blank",rel:"noopener noreferrer",size:"small",icon:r,children:"Small anchor link"}),e.jsx(i,{variant:"anchor",href:a,target:"_blank",rel:"noopener noreferrer",size:"medium",icon:r,children:"Medium anchor link"}),e.jsx(i,{variant:"anchor",href:a,target:"_blank",rel:"noopener noreferrer",size:"large",icon:r,children:"Large anchor link"})]}),e.jsxs(o,{display:"flex",flexDirection:"column",children:[e.jsx(o,{marginBottom:"spacing.3",children:e.jsx(L,{children:"Button variant"})}),e.jsx(i,{size:"xsmall",variant:"button",onClick:t,icon:r,children:"XSmall link button"}),e.jsx(i,{size:"small",variant:"button",onClick:t,icon:r,children:"Small link button"}),e.jsx(i,{size:"medium",variant:"button",onClick:t,icon:r,children:"Medium link button"}),e.jsx(i,{size:"large",variant:"button",onClick:t,icon:r,children:"Large link button"})]})]})};B.parameters={docs:{description:{story:"`size` prop can be used to render a `small` or `medium` (default) sized Link component"}}};const w=({children:a="Link",icon:t,iconPosition:n})=>e.jsxs(e.Fragment,{children:[e.jsx(o,{paddingBottom:"spacing.3",children:e.jsx(c,{fontWeight:"bold",children:"Anchor"})}),e.jsx(i,{icon:t,iconPosition:n,variant:"anchor",href:"https://github.com/razorpay/blade",target:"_blank",rel:"noreferrer noopener",children:a}),e.jsx(o,{paddingTop:"spacing.4",paddingBottom:"spacing.3",children:e.jsx(c,{fontWeight:"bold",children:"Button"})}),e.jsx(i,{icon:t,iconPosition:n,variant:"button",children:a})]}),g=w.bind({});g.storyName="Left Icon";g.args={iconPosition:"left",icon:y};g.parameters={docs:{description:{story:"`anchor` & `button` variants of Link with an Icon on Left"}}};const x=w.bind({});x.storyName="Right Icon";x.args={icon:y,iconPosition:"right"};x.parameters={docs:{description:{story:"`anchor` & `button` variants of Link with an Icon on Right"}}};const u=w.bind({});u.storyName="Icon Only";u.args={icon:y,children:""};u.parameters={docs:{description:{story:"`anchor` & `button` variants of Link with only an Icon"}}};const f=()=>{const a=["primary","white","neutral","positive","negative"],t=["large","medium","small","xsmall"];return e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.8",children:[e.jsxs(o,{children:[e.jsx(L,{size:"large",marginBottom:"spacing.4",children:"Anchor Variant"}),e.jsx(o,{display:"flex",flexDirection:"column",gap:"spacing.6",children:a.map(n=>e.jsxs(o,{padding:"spacing.5",borderRadius:"medium",backgroundColor:n==="white"?"surface.background.cloud.intense":void 0,children:[e.jsxs(b,{size:"small",weight:"semibold",marginBottom:"spacing.3",color:n==="white"?"surface.text.staticWhite.normal":void 0,children:["Color: ",n]}),e.jsxs(o,{display:"flex",flexDirection:"row",gap:"spacing.6",alignItems:"center",children:[t.map(s=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(c,{fontSize:75,color:n==="white"?"surface.text.staticWhite.muted":"surface.text.gray.subtle",children:s}),e.jsx(i,{variant:"anchor",color:n,size:s,href:"https://greenloom.ai",target:"_blank",rel:"noreferrer noopener",children:"Link"})]},s)),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(c,{fontSize:75,color:n==="white"?"surface.text.staticWhite.muted":"surface.text.gray.subtle",children:"with icon"}),e.jsx(i,{variant:"anchor",color:n,size:"medium",href:"https://greenloom.ai",target:"_blank",rel:"noreferrer noopener",icon:r,children:"Link"})]}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(c,{fontSize:75,color:n==="white"?"surface.text.staticWhite.muted":"surface.text.gray.subtle",children:"icon only"}),e.jsx(i,{variant:"anchor",color:n,size:"medium",href:"https://greenloom.ai",target:"_blank",rel:"noreferrer noopener",icon:r,accessibilityLabel:"Download"})]})]})]},n))})]}),e.jsxs(o,{children:[e.jsx(L,{size:"large",marginBottom:"spacing.4",children:"Button Variant"}),e.jsx(o,{display:"flex",flexDirection:"column",gap:"spacing.6",children:a.map(n=>e.jsxs(o,{padding:"spacing.5",borderRadius:"medium",backgroundColor:n==="white"?"surface.background.cloud.intense":void 0,children:[e.jsxs(b,{size:"small",weight:"semibold",marginBottom:"spacing.3",color:n==="white"?"surface.text.staticWhite.normal":void 0,children:["Color: ",n]}),e.jsxs(o,{display:"flex",flexDirection:"row",gap:"spacing.6",alignItems:"center",children:[t.map(s=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(c,{fontSize:75,color:n==="white"?"surface.text.staticWhite.muted":"surface.text.gray.subtle",children:s}),e.jsx(i,{variant:"button",color:n,size:s,onClick:()=>console.log("clicked"),children:"Link"})]},s)),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(c,{fontSize:75,color:n==="white"?"surface.text.staticWhite.muted":"surface.text.gray.subtle",children:"with icon"}),e.jsx(i,{variant:"button",color:n,size:"medium",onClick:()=>console.log("clicked"),icon:r,children:"Link"})]}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(c,{fontSize:75,color:n==="white"?"surface.text.staticWhite.muted":"surface.text.gray.subtle",children:"icon only"}),e.jsx(i,{variant:"button",color:n,size:"medium",onClick:()=>console.log("clicked"),icon:r,accessibilityLabel:"Download"})]}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.2",children:[e.jsx(c,{fontSize:75,color:n==="white"?"surface.text.staticWhite.muted":"surface.text.gray.subtle",children:"disabled"}),e.jsx(i,{variant:"button",color:n,size:"medium",onClick:()=>console.log("clicked"),isDisabled:!0,children:"Link"})]})]})]},n))})]})]})};f.storyName="Showcase";f.parameters={docs:{description:{story:"A comprehensive showcase of all Link variants, colors, and sizes."}}};var j,z,D;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`({
  children = 'Link',
  ...args
}) => {
  return <LinkComponent {...args}>{children}</LinkComponent>;
}`,...(D=(z=h.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var T,I,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`({
  icon,
  children = '',
  ...args
}) => {
  const isReactNative = getPlatformType() === 'react-native';
  return isReactNative ? <BaseBox display="flex" flexDirection="row" alignItems="center">
      <Text>Find more details at the </Text>
      <LinkComponent {...args}>{children}</LinkComponent>
    </BaseBox> : <Text>
      Find more details at the <LinkComponent {...args}>{children}</LinkComponent>
    </Text>;
}`,...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var W,P,_;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`({
  children = 'Link',
  ...args
}) => {
  return <LinkComponent {...args}>{children}</LinkComponent>;
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var N,R,A;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`({
  icon,
  children = '',
  ...args
}) => {
  const isReactNative = getPlatformType() === 'react-native';
  return isReactNative ? <BaseBox display="flex" flexDirection="row" alignItems="center">
      <Text>Forgot Password? </Text>
      <LinkComponent {...args}>{children}</LinkComponent>
    </BaseBox> : <Text>
      Forgot Password? <LinkComponent {...args}>{children}</LinkComponent>
    </Text>;
}`,...(A=(R=p.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var F,H,M;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`({
  icon,
  children = '',
  ...args
}) => {
  return <BaseBox display="flex" flexDirection="column" gap="spacing.2">
      <BaseBox padding="spacing.2">
        <LinkComponent {...args} color="primary">
          {children}
        </LinkComponent>
      </BaseBox>
      <BaseBox padding="spacing.2" backgroundColor="surface.background.cloud.intense">
        <LinkComponent {...args} color="white">
          {children}
        </LinkComponent>
      </BaseBox>
      <BaseBox padding="spacing.2">
        <LinkComponent {...args} color="neutral">
          {children}
        </LinkComponent>
      </BaseBox>
      <BaseBox padding="spacing.2">
        <LinkComponent {...args} color="negative">
          {children}
        </LinkComponent>
      </BaseBox>
      <BaseBox padding="spacing.2">
        <LinkComponent {...args} color="positive">
          {children}
        </LinkComponent>
      </BaseBox>
    </BaseBox>;
}`,...(M=(H=k.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var O,V,X;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`({
  children = 'Link',
  ...args
}) => {
  return <LinkComponent {...args}>{children}</LinkComponent>;
}`,...(X=(V=m.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Q,q,G;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const onClick = (): void => console.log('Never gonna give you up');
  return <BaseBox display="flex" flexDirection="row">
      <BaseBox display="flex" flexDirection="column" marginRight="spacing.5">
        <BaseBox marginBottom="spacing.3">
          <Heading>Anchor variant</Heading>
        </BaseBox>

        <LinkComponent variant="anchor" href={href} target="_blank" rel="noopener noreferrer" size="xsmall" icon={DownloadIcon}>
          XSmall anchor link
        </LinkComponent>
        <LinkComponent variant="anchor" href={href} target="_blank" rel="noopener noreferrer" size="small" icon={DownloadIcon}>
          Small anchor link
        </LinkComponent>
        <LinkComponent variant="anchor" href={href} target="_blank" rel="noopener noreferrer" size="medium" icon={DownloadIcon}>
          Medium anchor link
        </LinkComponent>
        <LinkComponent variant="anchor" href={href} target="_blank" rel="noopener noreferrer" size="large" icon={DownloadIcon}>
          Large anchor link
        </LinkComponent>
      </BaseBox>
      <BaseBox display="flex" flexDirection="column">
        <BaseBox marginBottom="spacing.3">
          <Heading>Button variant</Heading>
        </BaseBox>
        <LinkComponent size="xsmall" variant="button" onClick={onClick} icon={DownloadIcon}>
          XSmall link button
        </LinkComponent>
        <LinkComponent size="small" variant="button" onClick={onClick} icon={DownloadIcon}>
          Small link button
        </LinkComponent>
        <LinkComponent size="medium" variant="button" onClick={onClick} icon={DownloadIcon}>
          Medium link button
        </LinkComponent>
        <LinkComponent size="large" variant="button" onClick={onClick} icon={DownloadIcon}>
          Large link button
        </LinkComponent>
      </BaseBox>
    </BaseBox>;
}`,...(G=(q=B.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var U,E,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`({
  children = 'Link',
  icon,
  iconPosition
}) => {
  return <>
      <BaseBox paddingBottom="spacing.3">
        <BaseText fontWeight="bold">Anchor</BaseText>
      </BaseBox>
      <LinkComponent icon={icon} iconPosition={iconPosition} variant="anchor" href="https://github.com/razorpay/blade" target="_blank" rel="noreferrer noopener">
        {children}
      </LinkComponent>
      <BaseBox paddingTop="spacing.4" paddingBottom="spacing.3">
        <BaseText fontWeight="bold">Button</BaseText>
      </BaseBox>
      <LinkComponent icon={icon} iconPosition={iconPosition} variant="button">
        {children}
      </LinkComponent>
    </>;
}`,...(Y=(E=g.parameters)==null?void 0:E.docs)==null?void 0:Y.source}}};var Z,J,K;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`({
  children = 'Link',
  icon,
  iconPosition
}) => {
  return <>
      <BaseBox paddingBottom="spacing.3">
        <BaseText fontWeight="bold">Anchor</BaseText>
      </BaseBox>
      <LinkComponent icon={icon} iconPosition={iconPosition} variant="anchor" href="https://github.com/razorpay/blade" target="_blank" rel="noreferrer noopener">
        {children}
      </LinkComponent>
      <BaseBox paddingTop="spacing.4" paddingBottom="spacing.3">
        <BaseText fontWeight="bold">Button</BaseText>
      </BaseBox>
      <LinkComponent icon={icon} iconPosition={iconPosition} variant="button">
        {children}
      </LinkComponent>
    </>;
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var $,ee,ne;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`({
  children = 'Link',
  icon,
  iconPosition
}) => {
  return <>
      <BaseBox paddingBottom="spacing.3">
        <BaseText fontWeight="bold">Anchor</BaseText>
      </BaseBox>
      <LinkComponent icon={icon} iconPosition={iconPosition} variant="anchor" href="https://github.com/razorpay/blade" target="_blank" rel="noreferrer noopener">
        {children}
      </LinkComponent>
      <BaseBox paddingTop="spacing.4" paddingBottom="spacing.3">
        <BaseText fontWeight="bold">Button</BaseText>
      </BaseBox>
      <LinkComponent icon={icon} iconPosition={iconPosition} variant="button">
        {children}
      </LinkComponent>
    </>;
}`,...(ne=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,ie,te;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const colors = ['primary', 'white', 'neutral', 'positive', 'negative'] as const;
  const sizes = ['large', 'medium', 'small', 'xsmall'] as const;
  return <BaseBox display="flex" flexDirection="column" gap="spacing.8">
      {/* Anchor Variant Section */}
      <BaseBox>
        <Heading size="large" marginBottom="spacing.4">
          Anchor Variant
        </Heading>
        <BaseBox display="flex" flexDirection="column" gap="spacing.6">
          {colors.map(color => <BaseBox key={color} padding="spacing.5" borderRadius="medium" backgroundColor={color === 'white' ? 'surface.background.cloud.intense' : undefined}>
              <Text size="small" weight="semibold" marginBottom="spacing.3" color={color === 'white' ? 'surface.text.staticWhite.normal' : undefined}>
                Color: {color}
              </Text>
              <BaseBox display="flex" flexDirection="row" gap="spacing.6" alignItems="center">
                {sizes.map(size => <BaseBox key={size} display="flex" flexDirection="column" gap="spacing.2">
                    <BaseText fontSize={75} color={color === 'white' ? 'surface.text.staticWhite.muted' : 'surface.text.gray.subtle'}>
                      {size}
                    </BaseText>
                    <LinkComponent variant="anchor" color={color} size={size} href="https://greenloom.ai" target="_blank" rel="noreferrer noopener">
                      Link
                    </LinkComponent>
                  </BaseBox>)}
                {/* With Icon */}
                <BaseBox display="flex" flexDirection="column" gap="spacing.2">
                  <BaseText fontSize={75} color={color === 'white' ? 'surface.text.staticWhite.muted' : 'surface.text.gray.subtle'}>
                    with icon
                  </BaseText>
                  <LinkComponent variant="anchor" color={color} size="medium" href="https://greenloom.ai" target="_blank" rel="noreferrer noopener" icon={DownloadIcon}>
                    Link
                  </LinkComponent>
                </BaseBox>
                {/* Icon Only */}
                <BaseBox display="flex" flexDirection="column" gap="spacing.2">
                  <BaseText fontSize={75} color={color === 'white' ? 'surface.text.staticWhite.muted' : 'surface.text.gray.subtle'}>
                    icon only
                  </BaseText>
                  <LinkComponent variant="anchor" color={color} size="medium" href="https://greenloom.ai" target="_blank" rel="noreferrer noopener" icon={DownloadIcon} accessibilityLabel="Download" />
                </BaseBox>
              </BaseBox>
            </BaseBox>)}
        </BaseBox>
      </BaseBox>

      {/* Button Variant Section */}
      <BaseBox>
        <Heading size="large" marginBottom="spacing.4">
          Button Variant
        </Heading>
        <BaseBox display="flex" flexDirection="column" gap="spacing.6">
          {colors.map(color => <BaseBox key={color} padding="spacing.5" borderRadius="medium" backgroundColor={color === 'white' ? 'surface.background.cloud.intense' : undefined}>
              <Text size="small" weight="semibold" marginBottom="spacing.3" color={color === 'white' ? 'surface.text.staticWhite.normal' : undefined}>
                Color: {color}
              </Text>
              <BaseBox display="flex" flexDirection="row" gap="spacing.6" alignItems="center">
                {sizes.map(size => <BaseBox key={size} display="flex" flexDirection="column" gap="spacing.2">
                    <BaseText fontSize={75} color={color === 'white' ? 'surface.text.staticWhite.muted' : 'surface.text.gray.subtle'}>
                      {size}
                    </BaseText>
                    <LinkComponent variant="button" color={color} size={size} onClick={() => console.log('clicked')}>
                      Link
                    </LinkComponent>
                  </BaseBox>)}
                {/* With Icon */}
                <BaseBox display="flex" flexDirection="column" gap="spacing.2">
                  <BaseText fontSize={75} color={color === 'white' ? 'surface.text.staticWhite.muted' : 'surface.text.gray.subtle'}>
                    with icon
                  </BaseText>
                  <LinkComponent variant="button" color={color} size="medium" onClick={() => console.log('clicked')} icon={DownloadIcon}>
                    Link
                  </LinkComponent>
                </BaseBox>
                {/* Icon Only */}
                <BaseBox display="flex" flexDirection="column" gap="spacing.2">
                  <BaseText fontSize={75} color={color === 'white' ? 'surface.text.staticWhite.muted' : 'surface.text.gray.subtle'}>
                    icon only
                  </BaseText>
                  <LinkComponent variant="button" color={color} size="medium" onClick={() => console.log('clicked')} icon={DownloadIcon} accessibilityLabel="Download" />
                </BaseBox>
                {/* Disabled */}
                <BaseBox display="flex" flexDirection="column" gap="spacing.2">
                  <BaseText fontSize={75} color={color === 'white' ? 'surface.text.staticWhite.muted' : 'surface.text.gray.subtle'}>
                    disabled
                  </BaseText>
                  <LinkComponent variant="button" color={color} size="medium" onClick={() => console.log('clicked')} isDisabled>
                    Link
                  </LinkComponent>
                </BaseBox>
              </BaseBox>
            </BaseBox>)}
        </BaseBox>
      </BaseBox>
    </BaseBox>;
}`,...(te=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};const ke=["Default","LinkInline","LinkButton","LinkButtonInline","LinkWithColor","DisabledLinkButton","LinkSizes","IconLeftLinkButton","IconRightLinkButton","IconOnlyLinkButton","LinkShowcase"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Default:h,DisabledLinkButton:m,IconLeftLinkButton:g,IconOnlyLinkButton:u,IconRightLinkButton:x,LinkButton:d,LinkButtonInline:p,LinkInline:l,LinkShowcase:f,LinkSizes:B,LinkWithColor:k,__namedExportsOrder:ke,default:ge},Symbol.toStringTag,{value:"Module"}));export{Ce as l};
