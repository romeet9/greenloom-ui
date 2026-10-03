import{F as m,j as e,X as P,x as o,T as u,ak as V,r as h}from"./iframe-C1qQ09LF.js";import{i as y}from"./iconMap-BGYDFM5U.js";import{S as U}from"./Sandbox.web-B2xP21Qp.js";import{S as H}from"./StoryPageWrapper-CS0_5maI.js";import{g as F}from"./storybookArgTypes-DFfQV31s.js";const J=()=>e.jsxs(H,{componentName:"Badge",componentDescription:"Badges are used to show small amount of color coded metadata, which are ideal for getting user attention.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=73941-78445&t=pjKzaOWOoMI2J9jb-1&scaling=min-zoom&page-id=8110%3A0&mode=design",children:[e.jsx(P,{children:"Usage"}),e.jsx(U,{children:`
        import { Badge, InfoIcon } from '@greenloom/ui/components';
        
        function App() {
          return (
            <Badge color="neutral" icon={InfoIcon}>
              Boop
            </Badge>
          )
        }

        export default App;
        `})]}),K={title:"Components/Badge",component:m,tags:["autodocs"],argTypes:{...F(),icon:{name:"icon",type:"select",options:Object.keys(y),mapping:y}},parameters:{docs:{page:J}}},Q=({children:a,...i})=>e.jsx(m,{...i,children:a}),p=Q.bind({});p.args={children:"Label",color:"neutral",size:"small"};p.storyName="Default";const f=({...a})=>{const i=["positive","negative","notice","information","neutral","primary"];return e.jsxs(o,{display:"flex",flexDirection:"column",children:[e.jsx(u,{children:"Subtle Emphasis"}),e.jsx(o,{display:"flex",flexDirection:"row",paddingTop:"spacing.3",paddingBottom:"spacing.5",flexWrap:"wrap",children:i.map(n=>h.createElement(m,{...a,color:n,key:n,emphasis:"subtle",marginRight:"spacing.3",marginTop:"spacing.2"},n))}),e.jsx(u,{children:"Intense Emphasis"}),e.jsx(o,{display:"flex",flexDirection:"row",paddingTop:"spacing.3",paddingBottom:"spacing.5",flexWrap:"wrap",children:i.map(n=>h.createElement(m,{...a,color:n,key:n,emphasis:"intense",marginRight:"spacing.3",marginTop:"spacing.2"},n))})]})},c=f.bind({});c.args={size:"small"};c.storyName="Small Size";const l=f.bind({});l.args={size:"medium"};l.storyName="Medium Size";const g=f.bind({});g.args={size:"large"};g.storyName="Large Size";const s=f.bind({});s.args={icon:V};s.parameters={docs:{source:{code:`<Badge variant='positive' icon={InfoIcon}>Positive</Badge>
      
<Badge variant='negative' icon={InfoIcon}>Negative</Badge>
      
<Badge variant='notice' icon={InfoIcon}>Notice</Badge>
      
<Badge variant='information' icon={InfoIcon}>Information</Badge>
      
<Badge variant='neutral' icon={InfoIcon}>Neutral</Badge>`,language:"jsx",type:"code"}}};s.storyName="With Icon";const X=()=>{const a=["positive","negative","notice","information","neutral","primary"],i=["xsmall","small","medium","large"],n=["subtle","intense"];return e.jsx(o,{display:"flex",flexDirection:"column",gap:"spacing.6",children:n.map(r=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(u,{weight:"semibold",size:"large",children:[r.charAt(0).toUpperCase()+r.slice(1)," Emphasis"]}),i.map(x=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsxs(u,{size:"small",color:"surface.text.gray.muted",children:["Size: ",x]}),e.jsx(o,{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"spacing.3",children:a.map(t=>e.jsx(m,{color:t,size:x,emphasis:r,icon:V,children:t},`${r}-${x}-${t}-icon`))}),e.jsx(o,{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"spacing.3",children:a.map(t=>e.jsx(m,{color:t,size:x,emphasis:r,children:t},`${r}-${x}-${t}-no-icon`))})]},x))]},r))})},B=X.bind({});B.storyName="All Variants";const Z=({children:a,...i})=>e.jsxs(o,{maxWidth:"spacing.40",display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(u,{size:"small",color:"surface.text.gray.muted",children:"Hover over the truncated badge text to see the tooltip with full text. The container below is constrained to a max width."}),e.jsx(m,{...i,children:a})]}),d=Z.bind({});d.args={children:"This is a very long badge label that will get truncated",color:"neutral",size:"medium"};d.storyName="Text Truncation Tooltip";var v,T,w;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <BadgeComponent {...args}>{children}</BadgeComponent>;
}`,...(w=(T=p.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var b,S,z;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`({
  ...args
}) => {
  const variants = ['positive', 'negative', 'notice', 'information', 'neutral', 'primary'] as const;
  return <BaseBox display="flex" flexDirection="column">
      <BladeText>Subtle Emphasis</BladeText>
      <BaseBox display="flex" flexDirection="row" paddingTop="spacing.3" paddingBottom="spacing.5" flexWrap="wrap">
        {variants.map(variant => <BadgeComponent {...args} color={variant} key={variant} emphasis="subtle" marginRight="spacing.3" marginTop="spacing.2">
            {variant}
          </BadgeComponent>)}
      </BaseBox>
      <BladeText>Intense Emphasis</BladeText>
      <BaseBox display="flex" flexDirection="row" paddingTop="spacing.3" paddingBottom="spacing.5" flexWrap="wrap">
        {variants.map(variant => <BadgeComponent {...args} color={variant} key={variant} emphasis="intense" marginRight="spacing.3" marginTop="spacing.2">
            {variant}
          </BadgeComponent>)}
      </BaseBox>
    </BaseBox>;
}`,...(z=(S=c.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var D,j,I;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`({
  ...args
}) => {
  const variants = ['positive', 'negative', 'notice', 'information', 'neutral', 'primary'] as const;
  return <BaseBox display="flex" flexDirection="column">
      <BladeText>Subtle Emphasis</BladeText>
      <BaseBox display="flex" flexDirection="row" paddingTop="spacing.3" paddingBottom="spacing.5" flexWrap="wrap">
        {variants.map(variant => <BadgeComponent {...args} color={variant} key={variant} emphasis="subtle" marginRight="spacing.3" marginTop="spacing.2">
            {variant}
          </BadgeComponent>)}
      </BaseBox>
      <BladeText>Intense Emphasis</BladeText>
      <BaseBox display="flex" flexDirection="row" paddingTop="spacing.3" paddingBottom="spacing.5" flexWrap="wrap">
        {variants.map(variant => <BadgeComponent {...args} color={variant} key={variant} emphasis="intense" marginRight="spacing.3" marginTop="spacing.2">
            {variant}
          </BadgeComponent>)}
      </BaseBox>
    </BaseBox>;
}`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var C,W,E;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`({
  ...args
}) => {
  const variants = ['positive', 'negative', 'notice', 'information', 'neutral', 'primary'] as const;
  return <BaseBox display="flex" flexDirection="column">
      <BladeText>Subtle Emphasis</BladeText>
      <BaseBox display="flex" flexDirection="row" paddingTop="spacing.3" paddingBottom="spacing.5" flexWrap="wrap">
        {variants.map(variant => <BadgeComponent {...args} color={variant} key={variant} emphasis="subtle" marginRight="spacing.3" marginTop="spacing.2">
            {variant}
          </BadgeComponent>)}
      </BaseBox>
      <BladeText>Intense Emphasis</BladeText>
      <BaseBox display="flex" flexDirection="row" paddingTop="spacing.3" paddingBottom="spacing.5" flexWrap="wrap">
        {variants.map(variant => <BadgeComponent {...args} color={variant} key={variant} emphasis="intense" marginRight="spacing.3" marginTop="spacing.2">
            {variant}
          </BadgeComponent>)}
      </BaseBox>
    </BaseBox>;
}`,...(E=(W=g.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var k,$,R;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`({
  ...args
}) => {
  const variants = ['positive', 'negative', 'notice', 'information', 'neutral', 'primary'] as const;
  return <BaseBox display="flex" flexDirection="column">
      <BladeText>Subtle Emphasis</BladeText>
      <BaseBox display="flex" flexDirection="row" paddingTop="spacing.3" paddingBottom="spacing.5" flexWrap="wrap">
        {variants.map(variant => <BadgeComponent {...args} color={variant} key={variant} emphasis="subtle" marginRight="spacing.3" marginTop="spacing.2">
            {variant}
          </BadgeComponent>)}
      </BaseBox>
      <BladeText>Intense Emphasis</BladeText>
      <BaseBox display="flex" flexDirection="row" paddingTop="spacing.3" paddingBottom="spacing.5" flexWrap="wrap">
        {variants.map(variant => <BadgeComponent {...args} color={variant} key={variant} emphasis="intense" marginRight="spacing.3" marginTop="spacing.2">
            {variant}
          </BadgeComponent>)}
      </BaseBox>
    </BaseBox>;
}`,...(R=($=s.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var N,A,L;B.parameters={...B.parameters,docs:{...(N=B.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const colors = ['positive', 'negative', 'notice', 'information', 'neutral', 'primary'] as const;
  const sizes = ['xsmall', 'small', 'medium', 'large'] as const;
  const emphases = ['subtle', 'intense'] as const;
  return <BaseBox display="flex" flexDirection="column" gap="spacing.6">
      {emphases.map(emphasis => <BaseBox key={emphasis} display="flex" flexDirection="column" gap="spacing.4">
          <BladeText weight="semibold" size="large">
            {emphasis.charAt(0).toUpperCase() + emphasis.slice(1)} Emphasis
          </BladeText>
          {sizes.map(size => <BaseBox key={size} display="flex" flexDirection="column" gap="spacing.3">
              <BladeText size="small" color="surface.text.gray.muted">
                Size: {size}
              </BladeText>
              <BaseBox display="flex" flexDirection="row" flexWrap="wrap" gap="spacing.3">
                {colors.map(color => <BadgeComponent key={\`\${emphasis}-\${size}-\${color}-icon\`} color={color} size={size} emphasis={emphasis} icon={InfoIcon}>
                    {color}
                  </BadgeComponent>)}
              </BaseBox>
              <BaseBox display="flex" flexDirection="row" flexWrap="wrap" gap="spacing.3">
                {colors.map(color => <BadgeComponent key={\`\${emphasis}-\${size}-\${color}-no-icon\`} color={color} size={size} emphasis={emphasis}>
                    {color}
                  </BadgeComponent>)}
              </BaseBox>
            </BaseBox>)}
        </BaseBox>)}
    </BaseBox>;
}`,...(L=(A=B.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var _,M,O;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <BaseBox maxWidth="spacing.40" display="flex" flexDirection="column" gap="spacing.4">
      <BladeText size="small" color="surface.text.gray.muted">
        Hover over the truncated badge text to see the tooltip with full text. The container below
        is constrained to a max width.
      </BladeText>
      <BadgeComponent {...args}>{children}</BadgeComponent>
    </BaseBox>;
}`,...(O=(M=d.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const q=["Badge","BadgeSmallSize","BadgeMediumSize","BadgeLargeSize","BadgeWithIcon","AllVariants","BadgeTextTruncation"],oe=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:B,Badge:p,BadgeLargeSize:g,BadgeMediumSize:l,BadgeSmallSize:c,BadgeTextTruncation:d,BadgeWithIcon:s,__namedExportsOrder:q,default:K},Symbol.toStringTag,{value:"Module"}));export{oe as b};
