import{a2 as c,j as a,H as C,B as t,a3 as k}from"./iframe-C1qQ09LF.js";import{S as z}from"./Sandbox.web-B2xP21Qp.js";import{S as D}from"./StoryPageWrapper-CS0_5maI.js";import{g as K}from"./storybookArgTypes-DFfQV31s.js";const G=()=>a.jsxs(D,{componentName:"AvatarGroup",componentDescription:"The AvatarGroup component is used to group Avatars together.",apiDecisionLink:null,figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=88229-1519025&m=dev",children:[a.jsx(C,{size:"large",children:"Usage"}),a.jsx(z,{showConsole:!0,children:`
        import { Avatar, AvatarGroup } from '@greenloom/ui/components';
        
        function App() {
          return (
            <AvatarGroup>
              <Avatar color="primary" name="Kamlesh Chandnani" />
              <Avatar color="positive" name="Rama Krushna Behera" />
              <Avatar color="negative" name="Chaitanya Vikas Deorukhkar" />
              <Avatar color="notice" name="Anurag Hazra" />
              <Avatar color="information" name="Nitin Kumar" />
            </AvatarGroup>
          )
        }

        export default App;
      `})]}),S={title:"Components/Avatar/AvatarGroup",component:c,tags:["autodocs"],argTypes:{...K()},parameters:{docs:{page:G}}},j=i=>{const m=["Anurag Hazra","Kamlesh Chandnani","Rama Krushna Behera","Nitin Kumar","Chaitanya Vikas Deorukhkar"],p=["primary","positive","negative","information","notice"];return a.jsx(t,{display:"flex",flexDirection:"column",gap:"spacing.5",children:a.jsx(c,{...i,children:m.map((s,n)=>a.jsx(k,{name:s,color:p[n]},s))})})},r=j.bind({});r.storyName="Default";const e=j.bind({});e.storyName="Max Count";e.args={maxCount:3,size:"medium"};const w=i=>{const m=["Anurag Hazra","Kamlesh Chandnani","Rama Krushna Behera","Nitin Kumar","Chaitanya Vikas Deorukhkar"],p=["primary","positive","negative","information","notice"],s=["xsmall","small","medium","large","xlarge"];return a.jsx(t,{display:"flex",flexDirection:"column",gap:"spacing.5",children:s.map(n=>a.jsxs(t,{display:"flex",flex:"1 1 auto",alignItems:"center",justifyItems:"center",alignContent:"center",gap:"spacing.5",flexWrap:"nowrap",width:"250px",children:[a.jsx(t,{width:"50px",children:a.jsx(C,{children:n})}),a.jsx(t,{display:"flex",flex:"1 1 auto",justifyContent:"center",children:a.jsx(c,{...i,size:n,children:m.map((l,B)=>a.jsx(k,{name:l,color:p[B]},l))})})]},n))})},o=w.bind({});o.storyName="All Sizes";var u,d,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const names = ['Anurag Hazra', 'Kamlesh Chandnani', 'Rama Krushna Behera', 'Nitin Kumar', 'Chaitanya Vikas Deorukhkar'] as const;
  const colors = ['primary', 'positive', 'negative', 'information', 'notice'] as const;
  return <Box display="flex" flexDirection="column" gap="spacing.5">
      <AvatarGroupComponent {...args}>
        {names.map((name, index) => <AvatarComponent key={name} name={name} color={colors[index]} />)}
      </AvatarGroupComponent>
    </Box>;
}`,...(x=(d=r.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,f;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const names = ['Anurag Hazra', 'Kamlesh Chandnani', 'Rama Krushna Behera', 'Nitin Kumar', 'Chaitanya Vikas Deorukhkar'] as const;
  const colors = ['primary', 'positive', 'negative', 'information', 'notice'] as const;
  return <Box display="flex" flexDirection="column" gap="spacing.5">
      <AvatarGroupComponent {...args}>
        {names.map((name, index) => <AvatarComponent key={name} name={name} color={colors[index]} />)}
      </AvatarGroupComponent>
    </Box>;
}`,...(f=(h=e.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,A,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const names = ['Anurag Hazra', 'Kamlesh Chandnani', 'Rama Krushna Behera', 'Nitin Kumar', 'Chaitanya Vikas Deorukhkar'] as const;
  const colors = ['primary', 'positive', 'negative', 'information', 'notice'] as const;
  const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'] as const;
  return <Box display="flex" flexDirection="column" gap="spacing.5">
      {sizes.map(size => <Box key={size} display="flex" flex="1 1 auto" alignItems="center" justifyItems="center" alignContent="center" gap="spacing.5" flexWrap="nowrap" width="250px">
          <Box width="50px">
            <Heading>{size}</Heading>
          </Box>
          <Box display="flex" flex="1 1 auto" justifyContent="center">
            <AvatarGroupComponent {...args} size={size}>
              {names.map((name, index) => <AvatarComponent key={name} name={name} color={colors[index]} />)}
            </AvatarGroupComponent>
          </Box>
        </Box>)}
    </Box>;
}`,...(y=(A=o.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};const H=["Default","MaxCount","AllSizes"],_=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:o,Default:r,MaxCount:e,__namedExportsOrder:H,default:S},Symbol.toStringTag,{value:"Module"}));export{_ as a};
