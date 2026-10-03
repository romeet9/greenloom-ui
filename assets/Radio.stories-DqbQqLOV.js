import{an as a,ad as M,j as e,ao as o,T as p,x as Be,F as w,X as Pe,n as Ie,B as j,l as Le,y as Ne,z as ke,ak as De}from"./iframe-C1qQ09LF.js";import{S as He}from"./Sandbox.web-B2xP21Qp.js";import{S as We}from"./StoryPageWrapper-CS0_5maI.js";import{g as Ee}from"./storybookArgTypes-DFfQV31s.js";const Ve=()=>e.jsxs(We,{componentDescription:"Radio & RadioGroup can be used in forms when a user needs to single value from several options.",componentName:"Radio",imports:`import { Radio, RadioGroup } from '@greenloom/ui/components';
import type { RadioProps, RadioGroupProps } from '@greenloom/ui/components';`,figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=75857-146071&t=8df9lRjFiAYVTKc4-1&scaling=min-zoom&page-id=13133%3A160667&mode=design",children:[e.jsx(Pe,{children:"Usage"}),e.jsx(He,{showConsole:!0,editorHeight:400,children:`
          import { RadioGroup, Radio } from '@greenloom/ui/components';

          function App() {
            return (
              <RadioGroup
                helpText="Select only one"
                label="Where do you want to collect payments?"
                name="payment-collection" 
                onChange={({name, value}) => console.log({name, value})}
                defaultValue="website"
              >
                <Radio value="website">Website</Radio>
                <Radio value="android">Android App</Radio>
                <Radio value="ios">iOS App</Radio>
                <Radio 
                  value="social-media" 
                  helpText="Like WhatsApp, Facebook, Instagram"
                >
                  Social Media
                </Radio>
                <Radio value="offline-store">Offline Store</Radio>
              </RadioGroup>
            )
          }

          export default App;
        `})]}),qe={title:"Components/Radio & RadioGroup",component:a,args:{label:"Radio example",helpText:void 0,isDisabled:!1,isRequired:!1,necessityIndicator:"none",labelPosition:void 0,validationState:void 0,errorText:void 0,name:void 0,defaultValue:void 0,onChange:void 0,value:void 0,size:"medium"},tags:["autodocs"],argTypes:{value:{options:["apple","mango","orange"],control:{type:"select"}},defaultValue:{options:["apple","mango","orange"],control:{type:"select"}},...Ee()},parameters:{docs:{page:Ve}}},n=({children:r,...i})=>e.jsxs(a,{...i,children:[e.jsx(o,{value:"apple",children:"Apple"}),e.jsx(o,{value:"mango",children:"Mango"}),e.jsx(o,{value:"orange",children:"Orange"})]}),G=n.bind({});G.storyName="Default";const s=n.bind({});s.storyName="RadioGroup Orientation";s.args={orientation:"vertical"};const d=n.bind({});d.storyName="RadioGroup Orientation Horizontal";d.args={orientation:"horizontal"};const m=n.bind({});m.storyName="HelpText";m.args={helpText:"RadioGroup help text"};const c=n.bind({});c.storyName="HorizontalRadioGroupWithHelpText";c.args={orientation:"horizontal",helpText:"RadioGroup help text"};const u=n.bind({});u.storyName="ErrorText";u.args={validationState:"error",errorText:"RadioGroup help text"};const g=n.bind({});g.storyName="RadioGroup Orientation Horizontal With ErrorText";g.args={orientation:"horizontal",validationState:"error",errorText:"RadioGroup error text"};const R=n.bind({});R.storyName="Disabled";R.args={isDisabled:!0};const C=n.bind({});C.storyName="Optional";C.args={necessityIndicator:"optional"};const h=n.bind({});h.storyName="Required";h.args={necessityIndicator:"required"};const x=n.bind({});x.storyName="Small";x.args={size:"small"};const v=n.bind({});v.storyName="Large";v.args={size:"large"};const f=n.bind({});f.storyName="LabelPositionLeft";f.args={labelPosition:"left"};const y=()=>{const[r,i]=M.useState("orange");return e.jsxs(e.Fragment,{children:[e.jsxs(a,{helpText:"Select atleast one",label:"Medium",defaultValue:"orange",onChange:l=>console.log(l),size:"medium",children:[e.jsx(o,{value:"apple",children:"Apple"}),e.jsx(o,{value:"mango",children:"Mango"}),e.jsx(o,{value:"orange",children:"Orange"})]}),e.jsx(p,{children:" "}),e.jsxs(a,{size:"small",helpText:"Select atleast one",label:"Small",defaultValue:"orange",onChange:l=>console.log(l),children:[e.jsx(o,{helpText:"Apples are good",value:"apple",children:"Apple"}),e.jsx(o,{value:"mango",children:"Mango"}),e.jsx(o,{value:"orange",children:"Orange"})]}),e.jsx(p,{children:" "}),e.jsxs(a,{errorText:"Selected atleast one item",helpText:`You selected ${r}`,label:"Controlled",value:r,onChange:({value:l,name:t})=>{i(l),console.log(t,l)},children:[e.jsx(o,{helpText:"Apples Are 25% Air",value:"apple",children:"Apple"}),e.jsx(o,{helpText:"The name “mango” originated in India",value:"mango",children:"Mango"}),e.jsx(o,{helpText:"There are over 600 varieties of oranges.",value:"orange",children:"Orange"})]}),e.jsx(p,{children:" "}),e.jsxs(a,{necessityIndicator:"required",errorText:"Atleast one has to be selected",helpText:"Select atleast one",label:"Select your fruit",children:[e.jsx(o,{value:"apple",children:"Apple"}),e.jsx(o,{value:"mango",children:"Mango"}),e.jsx(o,{value:"orange",children:"Orange"})]}),e.jsx(p,{children:" "}),e.jsxs(a,{validationState:"error",necessityIndicator:"optional",errorText:"Atleast one has to be selected",helpText:"Select atleast one",label:"Select your fruit",children:[e.jsx(o,{value:"apple",children:"Apple"}),e.jsx(o,{value:"mango",children:"Mango"}),e.jsx(o,{value:"orange",children:"Orange"})]}),e.jsx(p,{children:" "}),e.jsxs(a,{labelPosition:"left",necessityIndicator:"optional",validationState:"error",errorText:"This is invalid",helpText:"Select atleast one",label:"Select your fruit",children:[e.jsx(o,{value:"apple",children:"Apple"}),e.jsx(o,{value:"mango",children:"Mango"}),e.jsx(o,{value:"orange",children:"Orange"})]}),e.jsx(Be,{height:"50px",overflow:"scroll",marginTop:"spacing.4",children:e.jsxs(a,{labelPosition:"left",necessityIndicator:"optional",validationState:"error",errorText:"This is invalid",helpText:"Select atleast one",label:"Overflow Scroll",children:[e.jsx(o,{value:"apple",children:"Apple"}),e.jsx(o,{value:"mango",children:"Mango"}),e.jsx(o,{value:"orange",children:"Orange"})]})})]})},S=n.bind({});S.storyName="RadioGroup with Label Suffix & Trailing";S.args={label:"Select your fruit",labelPosition:"top",labelSuffix:e.jsx(Ne,{content:"Select your fruit",placement:"right",children:e.jsx(ke,{display:"flex",children:e.jsx(De,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(Le,{size:"small",children:"Learn more"})};const b=()=>{const r=M.useRef(null);return e.jsxs(Be,{gap:"spacing.3",display:"flex",alignItems:"center",children:[e.jsx(a,{label:"Radio ref example",children:e.jsx(o,{ref:r,value:"1",children:"Radio"})}),e.jsx(Ie,{onClick:()=>{var i;return(i=r==null?void 0:r.current)==null?void 0:i.focus()},children:"Click to focus the Radio"})]})};b.storyName="Radio Ref";b.parameters={docs:{description:{story:"Radio component exposes the `ref` prop. The `ref` exposes two methods `focus` & `scrollIntoView` which can be used to programatically control the DOM element"}}};const z=[{id:"unchecked",label:"Unchecked",groupProps:{}},{id:"checked",label:"Checked",groupProps:{defaultValue:"option"}}],_e=[{id:"default",label:"Default",rowProps:{}},{id:"disabled",label:"Disabled",rowProps:{isDisabled:!0}},{id:"error",label:"Error",rowProps:{validationState:"error"}}],$e=[{id:"small",label:"Size Small",size:"small"},{id:"medium",label:"Size Medium",size:"medium"},{id:"large",label:"Size Large",size:"large"}],Fe=()=>e.jsx(j,{display:"flex",flexDirection:"column",gap:"spacing.7",children:$e.map(({id:r,label:i,size:l})=>e.jsxs(j,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(p,{weight:"semibold",children:i}),e.jsxs(j,{display:"grid",gridTemplateColumns:"140px repeat(2, minmax(160px, 1fr))",rowGap:"spacing.4",columnGap:"spacing.4",alignItems:"center",justifyItems:"center",children:[e.jsx(j,{}),z.map(t=>e.jsx(p,{size:"small",textAlign:"center",weight:"medium",children:t.label},t.id)),_e.map(t=>e.jsxs(M.Fragment,{children:[e.jsx(j,{display:"flex",justifyContent:"flex-end",width:"100%",children:e.jsx(p,{size:"small",weight:"medium",children:t.label})}),z.map(O=>e.jsx(j,{padding:"spacing.3",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(a,{label:"",name:`showcase-${r}-${t.id}-${O.id}`,size:l,...O.groupProps,...t.rowProps,children:e.jsx(o,{value:"option",children:"Option"})})},`${t.id}-${O.id}`))]},t.id))]})]},r))}),A=()=>e.jsx(Fe,{}),T=()=>e.jsxs(a,{label:"Select your plan",defaultValue:"pro",children:[e.jsx(o,{value:"basic",children:"Basic"}),e.jsx(o,{value:"pro",trailing:e.jsx(w,{color:"primary",children:"Recommended"}),children:"Pro"}),e.jsx(o,{value:"enterprise",trailing:e.jsx(w,{color:"positive",children:"New"}),children:"Enterprise"})]});T.storyName="With Badge";T.parameters={docs:{description:{story:"Use the `trailing` prop to display a `<Badge>` alongside a radio label. Only works in vertical `orientation` (the default)."}}};var B,P,I;G.parameters={...G.parameters,docs:{...(B=G.parameters)==null?void 0:B.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <RadioGroupComponent {...args}>
      <RadioComponent value="apple">Apple</RadioComponent>
      <RadioComponent value="mango">Mango</RadioComponent>
      <RadioComponent value="orange">Orange</RadioComponent>
    </RadioGroupComponent>;
}`,...(I=(P=G.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var L,N,k;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <RadioGroupComponent {...args}>
      <RadioComponent value="apple">Apple</RadioComponent>
      <RadioComponent value="mango">Mango</RadioComponent>
      <RadioComponent value="orange">Orange</RadioComponent>
    </RadioGroupComponent>;
}`,...(k=(N=s.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var D,H,W;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <RadioGroupComponent {...args}>
      <RadioComponent value="apple">Apple</RadioComponent>
      <RadioComponent value="mango">Mango</RadioComponent>
      <RadioComponent value="orange">Orange</RadioComponent>
    </RadioGroupComponent>;
}`,...(W=(H=d.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var E,V,q;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <RadioGroupComponent {...args}>
      <RadioComponent value="apple">Apple</RadioComponent>
      <RadioComponent value="mango">Mango</RadioComponent>
      <RadioComponent value="orange">Orange</RadioComponent>
    </RadioGroupComponent>;
}`,...(q=(V=m.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var _,$,F;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <RadioGroupComponent {...args}>
      <RadioComponent value="apple">Apple</RadioComponent>
      <RadioComponent value="mango">Mango</RadioComponent>
      <RadioComponent value="orange">Orange</RadioComponent>
    </RadioGroupComponent>;
}`,...(F=($=c.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var U,K,Y;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <RadioGroupComponent {...args}>
      <RadioComponent value="apple">Apple</RadioComponent>
      <RadioComponent value="mango">Mango</RadioComponent>
      <RadioComponent value="orange">Orange</RadioComponent>
    </RadioGroupComponent>;
}`,...(Y=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var Q,X,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <RadioGroupComponent {...args}>
      <RadioComponent value="apple">Apple</RadioComponent>
      <RadioComponent value="mango">Mango</RadioComponent>
      <RadioComponent value="orange">Orange</RadioComponent>
    </RadioGroupComponent>;
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var J,ee,oe;R.parameters={...R.parameters,docs:{...(J=R.parameters)==null?void 0:J.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <RadioGroupComponent {...args}>
      <RadioComponent value="apple">Apple</RadioComponent>
      <RadioComponent value="mango">Mango</RadioComponent>
      <RadioComponent value="orange">Orange</RadioComponent>
    </RadioGroupComponent>;
}`,...(oe=(ee=R.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var ne,ae,re;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <RadioGroupComponent {...args}>
      <RadioComponent value="apple">Apple</RadioComponent>
      <RadioComponent value="mango">Mango</RadioComponent>
      <RadioComponent value="orange">Orange</RadioComponent>
    </RadioGroupComponent>;
}`,...(re=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ie,le;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <RadioGroupComponent {...args}>
      <RadioComponent value="apple">Apple</RadioComponent>
      <RadioComponent value="mango">Mango</RadioComponent>
      <RadioComponent value="orange">Orange</RadioComponent>
    </RadioGroupComponent>;
}`,...(le=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var pe,se,de;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <RadioGroupComponent {...args}>
      <RadioComponent value="apple">Apple</RadioComponent>
      <RadioComponent value="mango">Mango</RadioComponent>
      <RadioComponent value="orange">Orange</RadioComponent>
    </RadioGroupComponent>;
}`,...(de=(se=x.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var me,ce,ue;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <RadioGroupComponent {...args}>
      <RadioComponent value="apple">Apple</RadioComponent>
      <RadioComponent value="mango">Mango</RadioComponent>
      <RadioComponent value="orange">Orange</RadioComponent>
    </RadioGroupComponent>;
}`,...(ue=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var ge,Re,Ce;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <RadioGroupComponent {...args}>
      <RadioComponent value="apple">Apple</RadioComponent>
      <RadioComponent value="mango">Mango</RadioComponent>
      <RadioComponent value="orange">Orange</RadioComponent>
    </RadioGroupComponent>;
}`,...(Ce=(Re=f.parameters)==null?void 0:Re.docs)==null?void 0:Ce.source}}};var he,xe,ve;y.parameters={...y.parameters,docs:{...(he=y.parameters)==null?void 0:he.docs,source:{originalSource:`(): React.ReactElement => {
  const [selected, setSelected] = React.useState('orange');
  return <>
      <RadioGroupComponent helpText="Select atleast one" label="Medium" defaultValue="orange" onChange={e => console.log(e)} size="medium">
        <RadioComponent value="apple">Apple</RadioComponent>
        <RadioComponent value="mango">Mango</RadioComponent>
        <RadioComponent value="orange">Orange</RadioComponent>
      </RadioGroupComponent>
      <Text>&nbsp;</Text>
      <RadioGroupComponent size="small" helpText="Select atleast one" label="Small" defaultValue="orange" onChange={e => console.log(e)}>
        <RadioComponent helpText="Apples are good" value="apple">
          Apple
        </RadioComponent>
        <RadioComponent value="mango">Mango</RadioComponent>
        <RadioComponent value="orange">Orange</RadioComponent>
      </RadioGroupComponent>
      <Text>&nbsp;</Text>
      <RadioGroupComponent errorText="Selected atleast one item" helpText={\`You selected \${selected}\`} label="Controlled" value={selected} onChange={({
      value,
      name
    }) => {
      setSelected(value);
      console.log(name, value);
    }}>
        <RadioComponent helpText="Apples Are 25% Air" value="apple">
          Apple
        </RadioComponent>
        <RadioComponent helpText="The name “mango” originated in India" value="mango">
          Mango
        </RadioComponent>
        <RadioComponent helpText="There are over 600 varieties of oranges." value="orange">
          Orange
        </RadioComponent>
      </RadioGroupComponent>
      <Text>&nbsp;</Text>
      <RadioGroupComponent necessityIndicator="required" errorText="Atleast one has to be selected" helpText="Select atleast one" label="Select your fruit">
        <RadioComponent value="apple">Apple</RadioComponent>
        <RadioComponent value="mango">Mango</RadioComponent>
        <RadioComponent value="orange">Orange</RadioComponent>
      </RadioGroupComponent>
      <Text>&nbsp;</Text>
      <RadioGroupComponent validationState="error" necessityIndicator="optional" errorText="Atleast one has to be selected" helpText="Select atleast one" label="Select your fruit">
        <RadioComponent value="apple">Apple</RadioComponent>
        <RadioComponent value="mango">Mango</RadioComponent>
        <RadioComponent value="orange">Orange</RadioComponent>
      </RadioGroupComponent>
      <Text>&nbsp;</Text>
      <RadioGroupComponent labelPosition="left" necessityIndicator="optional" validationState="error" errorText="This is invalid" helpText="Select atleast one" label="Select your fruit">
        <RadioComponent value="apple">Apple</RadioComponent>
        <RadioComponent value="mango">Mango</RadioComponent>
        <RadioComponent value="orange">Orange</RadioComponent>
      </RadioGroupComponent>
      <BaseBox height="50px" overflow="scroll" marginTop="spacing.4">
        <RadioGroupComponent labelPosition="left" necessityIndicator="optional" validationState="error" errorText="This is invalid" helpText="Select atleast one" label="Overflow Scroll">
          <RadioComponent value="apple">Apple</RadioComponent>
          <RadioComponent value="mango">Mango</RadioComponent>
          <RadioComponent value="orange">Orange</RadioComponent>
        </RadioGroupComponent>
      </BaseBox>
    </>;
}`,...(ve=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var fe,Se,be;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <RadioGroupComponent {...args}>
      <RadioComponent value="apple">Apple</RadioComponent>
      <RadioComponent value="mango">Mango</RadioComponent>
      <RadioComponent value="orange">Orange</RadioComponent>
    </RadioGroupComponent>;
}`,...(be=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};var Te,je,Ge;b.parameters={...b.parameters,docs:{...(Te=b.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const radioRef = React.useRef<HTMLInputElement>(null);
  return <BaseBox gap="spacing.3" display="flex" alignItems="center">
      <RadioGroupComponent label="Radio ref example">
        <RadioComponent ref={radioRef} value="1">
          Radio
        </RadioComponent>
      </RadioGroupComponent>
      <Button onClick={() => radioRef?.current?.focus()}>Click to focus the Radio</Button>
    </BaseBox>;
}`,...(Ge=(je=b.parameters)==null?void 0:je.docs)==null?void 0:Ge.source}}};var ye,Ae,Oe;A.parameters={...A.parameters,docs:{...(ye=A.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <RadioShowcase />;
}`,...(Oe=(Ae=A.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var Me,we,ze;T.parameters={...T.parameters,docs:{...(Me=T.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <RadioGroupComponent label="Select your plan" defaultValue="pro">
      <RadioComponent value="basic">Basic</RadioComponent>
      <RadioComponent value="pro" trailing={<Badge color="primary">Recommended</Badge>}>
        Pro
      </RadioComponent>
      <RadioComponent value="enterprise" trailing={<Badge color="positive">New</Badge>}>
        Enterprise
      </RadioComponent>
    </RadioGroupComponent>;
}`,...(ze=(we=T.parameters)==null?void 0:we.docs)==null?void 0:ze.source}}};const Ue=["Default","RadioGroupOrientation","RadioGroupOrientationHorizontal","HelpText","HorizontalRadioGroupWithHelpText","ErrorText","RadioGroupOrientationHorizontalWithErrorText","Disabled","Optional","RequiredRadio","Small","Large","LabelPositionLeft","KitchenSink","RadioGroupWithLabelSuffixTrailing","radioRef","Showcase","WithBadge"],Ze=Object.freeze(Object.defineProperty({__proto__:null,Default:G,Disabled:R,ErrorText:u,HelpText:m,HorizontalRadioGroupWithHelpText:c,KitchenSink:y,LabelPositionLeft:f,Large:v,Optional:C,RadioGroupOrientation:s,RadioGroupOrientationHorizontal:d,RadioGroupOrientationHorizontalWithErrorText:g,RadioGroupWithLabelSuffixTrailing:S,RequiredRadio:h,Showcase:A,Small:x,WithBadge:T,__namedExportsOrder:Ue,default:qe,radioRef:b},Symbol.toStringTag,{value:"Module"}));export{Ze as r};
