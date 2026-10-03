import{bb as L,j as e,x as n,hH as M,X as g,ag as c}from"./iframe-C1qQ09LF.js";import{i as r}from"./iconMap-BGYDFM5U.js";import{S as F}from"./StoryPageWrapper-CS0_5maI.js";import{S as P}from"./Sandbox.web-B2xP21Qp.js";import{g as R}from"./storybookArgTypes-DFfQV31s.js";const T=()=>e.jsxs(F,{componentDescription:"Green Loom provides a comprehensive set of stroke standard icons powered by Hugeicons and brand glyphs in 6 different sizes. You can choose the size & color that fits best for your use case using the color & size props.",componentName:"Icon",apiDecisionLink:"",note:"Built on stroke-standard 24x24 specifications. Fully compatible with Hugeicons stroke standard.",imports:`// Replace IconName with actual Icon's name that you would like to use 
import { IconName } from '@greenloom/ui/components' 
// IconProps are generic Icon props for all icons, don't replace it with your IconName 
import type { IconProps } from '@greenloom/ui/components'`,figmaURL:"",children:[e.jsx(g,{children:"Usage"}),e.jsx(P,{children:`
        import { Button, ArrowRightIcon } from '@greenloom/ui/components';

        function App() {
          // Icon component is meant to be used inside \`icon\` prop 
          // along with other components like \`Button\`, \`Badge\`, etc
          return (
            <Button 
              icon={ArrowRightIcon}
              iconPosition="right"
            >
              Button with Icon
            </Button>
          )
        }

        export default App;
        `}),e.jsx(g,{children:"Adding icons"}),e.jsx(c,{children:"1. Please validate in the all icons story below in case the icon you wish to add is already present. Steps for adding a new icon from Figma:"}),e.jsx(c,{children:"2. Visit the [icons figma file](https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=59-177&t=asW4d8ea1ARhVt6g-1&scaling=min-zoom&page-id=57%3A0&mode=design)"}),e.jsx(c,{children:"3. Click the icon you wish to add on Figma. Select the root icon element instead of the layer within. Copy this root icon as SVG. **Note**: Generally the root svgs have a viewbox of `0 0 24 24`."}),e.jsx(c,{children:"![](https://user-images.githubusercontent.com/24487274/203279145-1e0b0540-467d-4901-97c8-014f98b3cfca.png)"}),e.jsx(c,{children:"4. Replace the native HTML elements with Loom UI's components (eg. `svg` becomes `Svg`). You may use a tool such as [SVGR](https://react-svgr.com/playground/?native=true) for the initial transformation. Some properties may still need to be adjusted. Follow an existing icon as a reference."}),e.jsx(c,{children:"5. Once you're done making changes, run the storybook to verify how the new icon looks and if it is inline with rest of the icons. Once you're happy with the results run the tests for web and native to update the snapshots."}),e.jsx(c,{children:"6. See [this reference PR](https://github.com/razorpay/blade/pull/872)."})]}),_={title:"Components/Icons",component:L,args:{color:"surface.icon.gray.normal",size:"medium"},tags:["autodocs"],argTypes:{icon:{name:"icon",type:"select",options:Object.keys(r)},size:{options:["small","medium","large","xlarge","2xlarge"],control:{type:"select"}},...R()},parameters:{docs:{page:()=>e.jsx(T,{})}}},G=({icon:s,...t})=>{const o=r[s];return e.jsx(o,{...t})},l=G.bind({});l.args={icon:"CreditCardIcon"};const d=({...s})=>{const t=Object.keys(r).filter(o=>o.includes("FilledIcon"));return e.jsx(n,{children:t.map((o,i)=>{const p=r[o];return e.jsxs(n,{height:"95px",width:"125px",display:"inline-flex",flexDirection:"column",alignItems:"center",gap:"spacing.6",children:[e.jsx(p,{...s}),e.jsx(n,{style:{fontSize:12,width:"90%",overflow:"hidden",textOverflow:"ellipsis",textAlign:"center"},children:o})]},i)})})},m=({...s})=>{const t=Object.keys(r).filter(o=>!o.includes("FilledIcon"));return e.jsx(n,{children:t.map((o,i)=>{const p=r[o];return e.jsxs(n,{height:"95px",width:"125px",display:"inline-flex",flexDirection:"column",alignItems:"center",gap:"spacing.6",children:[e.jsx(p,{...s}),e.jsx(n,{style:{fontSize:12,width:"90%",overflow:"hidden",textOverflow:"ellipsis",textAlign:"center"},children:o})]},i)})})},a=({color:s,...t})=>{const o={GreenLoomIcon:M};return e.jsx(n,{children:Object.entries(o).map(([i,p])=>e.jsxs(n,{height:"95px",width:"125px",display:"inline-flex",flexDirection:"column",alignItems:"center",gap:"spacing.6",children:[e.jsx(p,{...t}),e.jsx(n,{style:{fontSize:12,width:"90%",overflow:"hidden",textOverflow:"ellipsis",textAlign:"center"},children:i})]},i))})},h=({...s})=>e.jsx(n,{children:Object.keys(r).map((t,o)=>{const i=r[t];return e.jsxs(n,{height:"95px",width:"125px",display:"inline-flex",flexDirection:"column",alignItems:"center",gap:"spacing.6",children:[e.jsx(i,{...s}),e.jsx(n,{style:{fontSize:12,width:"90%",overflow:"hidden",textOverflow:"ellipsis",textAlign:"center"},children:t})]},o)})});var x,u,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`({
  icon,
  ...args
}) => {
  const IconComponent = iconMap[icon];
  return <IconComponent {...args} />;
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,I,B;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`({
  ...args
}) => {
  const filledIcons = Object.keys(iconMap).filter(icon => icon.includes('FilledIcon'));
  return <BaseBox>
      {filledIcons.map((icon, key) => {
      const IconComponent = iconMap[icon];
      return <BaseBox height="95px" width="125px" display="inline-flex" flexDirection="column" alignItems="center" gap="spacing.6" key={key}>
            <IconComponent {...args} />
            <BaseBox style={{
          fontSize: 12,
          width: '90%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textAlign: 'center'
        }}>
              {icon}
            </BaseBox>
          </BaseBox>;
    })}
    </BaseBox>;
}`,...(B=(I=d.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var w,j,b;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`({
  ...args
}) => {
  const outLinedIcons = Object.keys(iconMap).filter(icon => !icon.includes('FilledIcon'));
  return <BaseBox>
      {outLinedIcons.map((icon, key) => {
      const IconComponent = iconMap[icon];
      return <BaseBox height="95px" width="125px" display="inline-flex" flexDirection="column" alignItems="center" gap="spacing.6" key={key}>
            <IconComponent {...args} />
            <BaseBox style={{
          fontSize: 12,
          width: '90%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textAlign: 'center'
        }}>
              {icon}
            </BaseBox>
          </BaseBox>;
    })}
    </BaseBox>;
}`,...(b=(j=m.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var k,S,v,O,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`({
  color,
  ...args
}) => {
  const brandedIcons = {
    GreenLoomIcon
  };
  return <BaseBox>
      {Object.entries(brandedIcons).map(([name, IconComponent]) => {
      return <BaseBox height="95px" width="125px" display="inline-flex" flexDirection="column" alignItems="center" gap="spacing.6" key={name}>
            <IconComponent {...args} />
            <BaseBox style={{
          fontSize: 12,
          width: '90%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textAlign: 'center'
        }}>
              {name}
            </BaseBox>
          </BaseBox>;
    })}
    </BaseBox>;
}`,...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source},description:{story:"Branded icons keep their own colors/gradients and intentionally ignore the `color` prop.\nThey are not part of the generic `iconMap` icon picker.",...(C=(O=a.parameters)==null?void 0:O.docs)==null?void 0:C.description}}};var A,z,D;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`({
  ...args
}) => {
  return <BaseBox>
      {Object.keys(iconMap).map((icon, key) => {
      const IconComponent = iconMap[icon];
      return <BaseBox height="95px" width="125px" display="inline-flex" flexDirection="column" alignItems="center" gap="spacing.6" key={key}>
            <IconComponent {...args} />
            <BaseBox style={{
          fontSize: 12,
          width: '90%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textAlign: 'center'
        }}>
              {icon}
            </BaseBox>
          </BaseBox>;
    })}
    </BaseBox>;
}`,...(D=(z=h.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const N=["Icon","FilledIcons","StrokedIcons","BrandedIcons","AllIcons"],Y=Object.freeze(Object.defineProperty({__proto__:null,AllIcons:h,BrandedIcons:a,FilledIcons:d,Icon:l,StrokedIcons:m,__namedExportsOrder:N,default:_},Symbol.toStringTag,{value:"Module"}));export{Y as i};
