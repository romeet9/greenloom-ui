import{av as u,j as e,ad as f,x as oe,n as se,X as ne,B as h,T as k}from"./iframe-C1qQ09LF.js";import{S as te}from"./Sandbox.web-B2xP21Qp.js";import{S as ae}from"./StoryPageWrapper-CS0_5maI.js";import{g as ce}from"./storybookArgTypes-DFfQV31s.js";const le=()=>e.jsxs(ae,{componentName:"Checkbox",componentDescription:"Checkbox can be used in forms when a user needs to select multiple values from several options.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=75857-44078&t=ASvqFmFRXILEzPFG-1&scaling=min-zoom&page-id=13227%3A162974&mode=design",children:[e.jsx(ne,{children:"Usage"}),e.jsx(te,{showConsole:!0,children:`
        import { Checkbox } from '@greenloom/ui/components'
        
        function App() {
          return (
            // Check console
            <Checkbox onChange={(e) => console.log(e.isChecked)}>
              Toggle Checkbox
            </Checkbox>
          )
        }

        export default App;
      `})]}),ie={title:"Components/Checkbox/Checkbox",component:u,args:{defaultChecked:void 0,validationState:void 0,isChecked:void 0,isDisabled:void 0,isIndeterminate:void 0,isRequired:void 0,name:void 0,onChange:void 0,value:void 0,helpText:void 0,errorText:void 0,children:"Toggle checkbox",size:"medium"},tags:["autodocs"],argTypes:ce(),parameters:{docs:{page:le}}},s=({children:r,...o})=>e.jsx(u,{...o,children:r}),j=[{id:"unchecked",label:"Unchecked",checkboxProps:{}},{id:"checked",label:"Checked",checkboxProps:{isChecked:!0}},{id:"indeterminate",label:"Indeterminate",checkboxProps:{isIndeterminate:!0}}],de=[{id:"default",label:"Default",rowProps:{}},{id:"helptext",label:"Help Text",rowProps:{helpText:"Help text"}},{id:"disabled",label:"Disabled",rowProps:{isDisabled:!0}},{id:"error",label:"Error",rowProps:{validationState:"error",errorText:"Error text"}}],pe=[{id:"small",label:"Size Small",size:"small"},{id:"medium",label:"Size Medium",size:"medium"},{id:"large",label:"Size Large",size:"large"}],me=()=>e.jsx(h,{display:"flex",flexDirection:"column",gap:"spacing.7",children:pe.map(({id:r,label:o,size:C})=>e.jsxs(h,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(k,{weight:"semibold",children:o}),e.jsxs(h,{display:"grid",gridTemplateColumns:"140px repeat(3, minmax(160px, 1fr))",rowGap:"spacing.4",columnGap:"spacing.4",alignItems:"center",justifyItems:"center",children:[e.jsx(h,{}),j.map(n=>e.jsx(k,{size:"small",textAlign:"center",weight:"medium",children:n.label},n.id)),de.map(n=>e.jsxs(f.Fragment,{children:[e.jsx(h,{display:"flex",justifyContent:"flex-end",width:"100%",children:e.jsx(k,{size:"small",weight:"medium",children:n.label})}),j.map(S=>e.jsx(h,{padding:"spacing.3",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(u,{size:C,...n.rowProps,...S.checkboxProps,children:"Option"})},`${n.id}-${S.id}`))]},n.id))]})]},r))}),x=s.bind({});x.storyName="Default";const t=s.bind({});t.storyName="Checked";t.args={isChecked:!0};const a=s.bind({});a.storyName="DefaultChecked";a.args={defaultChecked:!0};const c=s.bind({});c.storyName="HelpText";c.args={helpText:"Checkbox help text"};const l=s.bind({});l.storyName="ErrorText";l.args={validationState:"error",errorText:"Checkbox error text"};const i=s.bind({});i.storyName="Small";i.args={size:"small"};const d=s.bind({});d.storyName="Large";d.args={size:"large",helpText:"Checkbox help text"};const p=s.bind({});p.storyName="Indeterminate";p.args={isIndeterminate:!0};const he=()=>{const[r,o]=f.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{defaultChecked:!0,onChange:C=>console.log(C),children:"Uncontrolled"}),e.jsx(k,{children:" "}),e.jsx(u,{isChecked:r,onChange:C=>o(C.isChecked),children:"Controlled"}),e.jsxs(k,{children:["Checked: ",r?"True":"False"]})]})},xe=()=>e.jsx(he,{}),g=xe.bind({}),m=()=>{const r=f.useRef(null);return e.jsxs(oe,{gap:"spacing.3",display:"flex",alignItems:"center",children:[e.jsx(u,{ref:r,children:"Checkbox"}),e.jsx(se,{onClick:()=>{var o;return(o=r==null?void 0:r.current)==null?void 0:o.focus()},children:"Click to focus the checkbox"})]})};m.storyName="Checkbox Ref";m.parameters={docs:{description:{story:"Checkbox component exposes the `ref` prop. The `ref` exposes two methods `focus` & `scrollIntoView` which can be used to programatically control the DOM element"}}};const b=()=>e.jsx(me,{});var y,T,w;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxComponent {...args}>{children}</CheckboxComponent>;
}`,...(w=(T=x.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var v,D,z;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxComponent {...args}>{children}</CheckboxComponent>;
}`,...(z=(D=t.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var I,P,R;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxComponent {...args}>{children}</CheckboxComponent>;
}`,...(R=(P=a.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var B,A,N;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxComponent {...args}>{children}</CheckboxComponent>;
}`,...(N=(A=c.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var U,E,L;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxComponent {...args}>{children}</CheckboxComponent>;
}`,...(L=(E=l.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var _,F,H;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxComponent {...args}>{children}</CheckboxComponent>;
}`,...(H=(F=i.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var O,M,G;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxComponent {...args}>{children}</CheckboxComponent>;
}`,...(G=(M=d.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var q,V,X;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <CheckboxComponent {...args}>{children}</CheckboxComponent>;
}`,...(X=(V=p.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var $,Q,W;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <ControlledAndUncontrolledComp />;
}`,...(W=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var Z,J,K;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const checkboxRef = React.useRef<HTMLInputElement>(null);
  return <BaseBox gap="spacing.3" display="flex" alignItems="center">
      <CheckboxComponent ref={checkboxRef}>Checkbox</CheckboxComponent>
      <Button onClick={() => checkboxRef?.current?.focus()}>Click to focus the checkbox</Button>
    </BaseBox>;
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,ee,re;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <CheckboxShowcase />;
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const ue=["Default","Checked","DefaultChecked","HelpText","ErrorText","Small","Large","Indeterminate","ControlledAndUncontrolled","checkboxRef","Showcase"],fe=Object.freeze(Object.defineProperty({__proto__:null,Checked:t,ControlledAndUncontrolled:g,Default:x,DefaultChecked:a,ErrorText:l,HelpText:c,Indeterminate:p,Large:d,Showcase:b,Small:i,__namedExportsOrder:ue,checkboxRef:m,default:ie},Symbol.toStringTag,{value:"Module"}));export{fe as c};
