import{aL as a,ad as de,j as e,av as o,T as v,x as ke,X as ve,l as Se,y as Te,z as fe,ak as Ge}from"./iframe-C1qQ09LF.js";import{S as je}from"./Sandbox.web-B2xP21Qp.js";import{S as ye}from"./StoryPageWrapper-CS0_5maI.js";import{g as Oe}from"./storybookArgTypes-DFfQV31s.js";const Ae=()=>e.jsxs(ye,{componentName:"CheckboxGroup",componentDescription:"CheckboxGroup can be used to group together multiple checkboxes in a forms which provides out of the box state management for the multi-checkboxes and other features.",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Checkbox/_decisions/decisions.md",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=75857-44078&t=PxSB8TobkLzOQOjQ-1&scaling=min-zoom&page-id=13227%3A162974&mode=design",children:[e.jsx(ve,{children:"Usage"}),e.jsx(je,{showConsole:!0,editorHeight:400,children:`
          import { CheckboxGroup, Checkbox } from '@greenloom/ui/components';

          function App() {
            return (
              <CheckboxGroup 
                label="Where do you want to collect payments?"
                name="payment-collection" 
                onChange={({name, values}) => console.log({name, values})}
              >
                <Checkbox value="website">Website</Checkbox>
                <Checkbox value="android">Android App</Checkbox>
                <Checkbox value="ios">iOS App</Checkbox>
                <Checkbox 
                  value="social-media" 
                  helpText="Like WhatsApp, Facebook, Instagram"
                >
                  Social Media
                </Checkbox>
                <Checkbox value="offline-store">Offline Store</Checkbox>
              </CheckboxGroup>
            )
          }

          export default App;
        `})]}),Me={title:"Components/Checkbox/CheckboxGroup",component:a,args:{label:"Checkbox Group",helpText:void 0,isDisabled:!1,isRequired:!1,necessityIndicator:"none",labelPosition:void 0,validationState:void 0,errorText:void 0,name:void 0,defaultValue:void 0,onChange:void 0,value:void 0},tags:["autodocs"],argTypes:{value:{options:["apple","mango","orange"],control:{type:"multi-select"}},defaultValue:{options:["apple","mango","orange"],control:{type:"multi-select"}},...Oe()},parameters:{docs:{page:Ae}}},n=({children:k,...t})=>e.jsxs(a,{...t,children:[e.jsx(o,{value:"apple",children:"Apple"}),e.jsx(o,{value:"mango",children:"Mango"}),e.jsx(o,{value:"orange",children:"Orange"})]}),S=n.bind({});S.storyName="Default";const p=n.bind({});p.storyName="CheckboxGroup Orientation Horizontal";p.args={orientation:"horizontal"};const c=n.bind({});c.storyName="HelpText";c.args={helpText:"CheckboxGroup help text"};const s=n.bind({});s.storyName="CheckboxGroup Orientation Horizontal With HelpText";s.args={orientation:"horizontal",helpText:"CheckboxGroup help text"};const i=n.bind({});i.storyName="ErrorText";i.args={validationState:"error",errorText:"CheckboxGroup help text"};const C=n.bind({});C.storyName="CheckboxGroup Orientation Horizontal With ErrorText";C.args={orientation:"horizontal",validationState:"error",errorText:"CheckboxGroup error text"};const h=n.bind({});h.storyName="Disabled";h.args={isDisabled:!0};const m=n.bind({});m.storyName="Optional";m.args={necessityIndicator:"optional"};const x=n.bind({});x.storyName="Required";x.args={necessityIndicator:"required"};const u=n.bind({});u.storyName="Small";u.args={size:"small"};const b=n.bind({});b.storyName="Large";b.args={size:"large"};const d=n.bind({});d.storyName="LabelPositionLeft";d.args={labelPosition:"left"};const ze=()=>{const k=["apple","mango","orange"],[t,r]=de.useState(["apple","mango"]),G=t.length===3,ge=t.length>0&&!G,j=t.length<1;return e.jsxs(e.Fragment,{children:[e.jsx(o,{isChecked:G,onChange:({isChecked:l})=>{if(l){r(k);return}r([])},validationState:j?"error":"none",isIndeterminate:ge,children:"Select all"}),e.jsx(v,{children:" "}),e.jsx(a,{helpText:"Select your favourite fruits",errorText:"Select atleast one",label:"Select fruits",value:t,validationState:j?"error":"none",onChange:({values:l})=>r(l),children:k.map(l=>e.jsx(o,{value:l,children:l},l))})]})},Ie=()=>e.jsx(ze,{}),T=Ie.bind({}),g=n.bind({});g.storyName="CheckboxGroup with Label Suffix & Trailing";g.args={label:"Select your fruit",labelPosition:"top",labelSuffix:e.jsx(Te,{content:"Select your fruit",placement:"right",children:e.jsx(fe,{display:"flex",children:e.jsx(Ge,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(Se,{size:"small",children:"Learn more"})};const f=()=>{const[k,t]=de.useState(["mango","apple"]);return e.jsxs(e.Fragment,{children:[e.jsxs(a,{helpText:"Select atleast one",label:"Uncontrolled",defaultValue:["apple","orange"],onChange:r=>console.log(r),children:[e.jsx(o,{value:"apple",children:"Apple"}),e.jsx(o,{value:"mango",children:"Mango"}),e.jsx(o,{value:"orange",children:"Orange"})]}),e.jsx(v,{children:" "}),e.jsxs(a,{helpText:"Small sized checkboxes",label:"Small checkboxes",size:"small",defaultValue:["orange"],onChange:r=>console.log(r),children:[e.jsx(o,{value:"apple",children:"Apple"}),e.jsx(o,{value:"mango",children:"Mango"}),e.jsx(o,{value:"orange",children:"Orange"})]}),e.jsx(v,{children:" "}),e.jsxs(a,{errorText:"Selected atleast one item",helpText:`You selected ${k.join(", ")}`,label:"Controlled",value:k,onChange:({values:r})=>t(r),children:[e.jsx(o,{helpText:"Apples Are 25% Air",value:"apple",children:"Apple"}),e.jsx(o,{helpText:"The name “mango” originated in India",value:"mango",children:"Mango"}),e.jsx(o,{helpText:"There are over 600 varieties of oranges.",value:"orange",children:"Orange"})]}),e.jsx(v,{children:" "}),e.jsxs(a,{necessityIndicator:"required",errorText:"Atleast one has to be selected",helpText:"Select atleast one",label:"Select your fruit",children:[e.jsx(o,{value:"apple",children:"Apple"}),e.jsx(o,{value:"mango",children:"Mango"}),e.jsx(o,{value:"orange",children:"Orange"})]}),e.jsx(v,{children:" "}),e.jsxs(a,{validationState:"error",necessityIndicator:"optional",errorText:"Atleast one has to be selected",helpText:"Select atleast one",label:"Select your fruit",children:[e.jsx(o,{value:"apple",children:"Apple"}),e.jsx(o,{value:"mango",children:"Mango"}),e.jsx(o,{value:"orange",children:"Orange"})]}),e.jsx(v,{children:" "}),e.jsxs(a,{labelPosition:"left",necessityIndicator:"optional",validationState:"error",errorText:"This is invalid",helpText:"Select atleast one",label:"Select your fruit",children:[e.jsx(o,{value:"apple",children:"Apple"}),e.jsx(o,{value:"mango",children:"Mango"}),e.jsx(o,{value:"orange",children:"Orange"})]}),e.jsx(ke,{height:"50px",overflow:"scroll",marginTop:"spacing.4",children:e.jsxs(a,{labelPosition:"left",necessityIndicator:"optional",validationState:"error",errorText:"This is invalid",helpText:"Select atleast one",label:"Overflow Scroll",children:[e.jsx(o,{value:"apple",children:"Apple"}),e.jsx(o,{value:"mango",children:"Mango"}),e.jsx(o,{value:"orange",children:"Orange"})]})})]})};var y,O,A;S.parameters={...S.parameters,docs:{...(y=S.parameters)==null?void 0:y.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxGroupComponent {...args}>
      <CheckboxComponent value="apple">Apple</CheckboxComponent>
      <CheckboxComponent value="mango">Mango</CheckboxComponent>
      <CheckboxComponent value="orange">Orange</CheckboxComponent>
    </CheckboxGroupComponent>;
}`,...(A=(O=S.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var M,z,I;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxGroupComponent {...args}>
      <CheckboxComponent value="apple">Apple</CheckboxComponent>
      <CheckboxComponent value="mango">Mango</CheckboxComponent>
      <CheckboxComponent value="orange">Orange</CheckboxComponent>
    </CheckboxGroupComponent>;
}`,...(I=(z=p.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var L,H,P;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxGroupComponent {...args}>
      <CheckboxComponent value="apple">Apple</CheckboxComponent>
      <CheckboxComponent value="mango">Mango</CheckboxComponent>
      <CheckboxComponent value="orange">Orange</CheckboxComponent>
    </CheckboxGroupComponent>;
}`,...(P=(H=c.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var N,W,w;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxGroupComponent {...args}>
      <CheckboxComponent value="apple">Apple</CheckboxComponent>
      <CheckboxComponent value="mango">Mango</CheckboxComponent>
      <CheckboxComponent value="orange">Orange</CheckboxComponent>
    </CheckboxGroupComponent>;
}`,...(w=(W=s.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var D,E,R;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxGroupComponent {...args}>
      <CheckboxComponent value="apple">Apple</CheckboxComponent>
      <CheckboxComponent value="mango">Mango</CheckboxComponent>
      <CheckboxComponent value="orange">Orange</CheckboxComponent>
    </CheckboxGroupComponent>;
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var B,_,q;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxGroupComponent {...args}>
      <CheckboxComponent value="apple">Apple</CheckboxComponent>
      <CheckboxComponent value="mango">Mango</CheckboxComponent>
      <CheckboxComponent value="orange">Orange</CheckboxComponent>
    </CheckboxGroupComponent>;
}`,...(q=(_=C.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var V,U,F;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxGroupComponent {...args}>
      <CheckboxComponent value="apple">Apple</CheckboxComponent>
      <CheckboxComponent value="mango">Mango</CheckboxComponent>
      <CheckboxComponent value="orange">Orange</CheckboxComponent>
    </CheckboxGroupComponent>;
}`,...(F=(U=h.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var Q,K,Y;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxGroupComponent {...args}>
      <CheckboxComponent value="apple">Apple</CheckboxComponent>
      <CheckboxComponent value="mango">Mango</CheckboxComponent>
      <CheckboxComponent value="orange">Orange</CheckboxComponent>
    </CheckboxGroupComponent>;
}`,...(Y=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var $,X,Z;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxGroupComponent {...args}>
      <CheckboxComponent value="apple">Apple</CheckboxComponent>
      <CheckboxComponent value="mango">Mango</CheckboxComponent>
      <CheckboxComponent value="orange">Orange</CheckboxComponent>
    </CheckboxGroupComponent>;
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var J,ee,oe;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxGroupComponent {...args}>
      <CheckboxComponent value="apple">Apple</CheckboxComponent>
      <CheckboxComponent value="mango">Mango</CheckboxComponent>
      <CheckboxComponent value="orange">Orange</CheckboxComponent>
    </CheckboxGroupComponent>;
}`,...(oe=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var ne,ae,re;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxGroupComponent {...args}>
      <CheckboxComponent value="apple">Apple</CheckboxComponent>
      <CheckboxComponent value="mango">Mango</CheckboxComponent>
      <CheckboxComponent value="orange">Orange</CheckboxComponent>
    </CheckboxGroupComponent>;
}`,...(re=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,le,pe;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxGroupComponent {...args}>
      <CheckboxComponent value="apple">Apple</CheckboxComponent>
      <CheckboxComponent value="mango">Mango</CheckboxComponent>
      <CheckboxComponent value="orange">Orange</CheckboxComponent>
    </CheckboxGroupComponent>;
}`,...(pe=(le=d.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ce,se,ie;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <IndeterminateExample />;
}`,...(ie=(se=T.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var Ce,he,me;g.parameters={...g.parameters,docs:{...(Ce=g.parameters)==null?void 0:Ce.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxGroupComponent {...args}>
      <CheckboxComponent value="apple">Apple</CheckboxComponent>
      <CheckboxComponent value="mango">Mango</CheckboxComponent>
      <CheckboxComponent value="orange">Orange</CheckboxComponent>
    </CheckboxGroupComponent>;
}`,...(me=(he=g.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var xe,ue,be;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`(): React.ReactElement => {
  const [selected, setSelected] = React.useState(['mango', 'apple']);
  return <>
      <CheckboxGroupComponent helpText="Select atleast one" label="Uncontrolled" defaultValue={['apple', 'orange']} onChange={e => console.log(e)}>
        <CheckboxComponent value="apple">Apple</CheckboxComponent>
        <CheckboxComponent value="mango">Mango</CheckboxComponent>
        <CheckboxComponent value="orange">Orange</CheckboxComponent>
      </CheckboxGroupComponent>
      <Text>&nbsp;</Text>
      <CheckboxGroupComponent helpText="Small sized checkboxes" label="Small checkboxes" size="small" defaultValue={['orange']} onChange={e => console.log(e)}>
        <CheckboxComponent value="apple">Apple</CheckboxComponent>
        <CheckboxComponent value="mango">Mango</CheckboxComponent>
        <CheckboxComponent value="orange">Orange</CheckboxComponent>
      </CheckboxGroupComponent>
      <Text>&nbsp;</Text>
      <CheckboxGroupComponent errorText="Selected atleast one item" helpText={\`You selected \${selected.join(', ')}\`} label="Controlled" value={selected} onChange={({
      values
    }) => setSelected(values)}>
        <CheckboxComponent helpText="Apples Are 25% Air" value="apple">
          Apple
        </CheckboxComponent>
        <CheckboxComponent helpText="The name “mango” originated in India" value="mango">
          Mango
        </CheckboxComponent>
        <CheckboxComponent helpText="There are over 600 varieties of oranges." value="orange">
          Orange
        </CheckboxComponent>
      </CheckboxGroupComponent>
      <Text>&nbsp;</Text>
      <CheckboxGroupComponent necessityIndicator="required" errorText="Atleast one has to be selected" helpText="Select atleast one" label="Select your fruit">
        <CheckboxComponent value="apple">Apple</CheckboxComponent>
        <CheckboxComponent value="mango">Mango</CheckboxComponent>
        <CheckboxComponent value="orange">Orange</CheckboxComponent>
      </CheckboxGroupComponent>
      <Text>&nbsp;</Text>
      <CheckboxGroupComponent validationState="error" necessityIndicator="optional" errorText="Atleast one has to be selected" helpText="Select atleast one" label="Select your fruit">
        <CheckboxComponent value="apple">Apple</CheckboxComponent>
        <CheckboxComponent value="mango">Mango</CheckboxComponent>
        <CheckboxComponent value="orange">Orange</CheckboxComponent>
      </CheckboxGroupComponent>
      <Text>&nbsp;</Text>
      <CheckboxGroupComponent labelPosition="left" necessityIndicator="optional" validationState="error" errorText="This is invalid" helpText="Select atleast one" label="Select your fruit">
        <CheckboxComponent value="apple">Apple</CheckboxComponent>
        <CheckboxComponent value="mango">Mango</CheckboxComponent>
        <CheckboxComponent value="orange">Orange</CheckboxComponent>
      </CheckboxGroupComponent>
      <BaseBox height="50px" overflow="scroll" marginTop="spacing.4">
        <CheckboxGroupComponent labelPosition="left" necessityIndicator="optional" validationState="error" errorText="This is invalid" helpText="Select atleast one" label="Overflow Scroll">
          <CheckboxComponent value="apple">Apple</CheckboxComponent>
          <CheckboxComponent value="mango">Mango</CheckboxComponent>
          <CheckboxComponent value="orange">Orange</CheckboxComponent>
        </CheckboxGroupComponent>
      </BaseBox>
    </>;
}`,...(be=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};const Le=["Default","CheckboxGroupOrientationHorizontal","HelpTextCheckbox","CheckboxGroupOrientationHorizontalWithHelpText","ErrorText","CheckboxGroupOrientationHorizontalWithErrorText","Disabled","Optional","Required","Small","Large","LabelPositionLeft","Indeterminate","CheckboxGroupWithLabelSuffixTrailing","KitchenSink"],we=Object.freeze(Object.defineProperty({__proto__:null,CheckboxGroupOrientationHorizontal:p,CheckboxGroupOrientationHorizontalWithErrorText:C,CheckboxGroupOrientationHorizontalWithHelpText:s,CheckboxGroupWithLabelSuffixTrailing:g,Default:S,Disabled:h,ErrorText:i,HelpTextCheckbox:c,Indeterminate:T,KitchenSink:f,LabelPositionLeft:d,Large:b,Optional:m,Required:x,Small:u,__namedExportsOrder:Le,default:Me},Symbol.toStringTag,{value:"Module"}));export{we as c};
