import{k as o,j as e,X as C,u as T,x as t,T as c}from"./iframe-C1qQ09LF.js";import{S as w}from"./Sandbox.web-B2xP21Qp.js";import{S as k}from"./StoryPageWrapper-CS0_5maI.js";import{g as y}from"./storybookArgTypes-DFfQV31s.js";const z=()=>e.jsxs(k,{componentDescription:"A spinner is an element with a looping animation that indicates loading is in process.",componentName:"Spinner",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74864-85575&t=493DSapGGbdA42Lb-1&scaling=min-zoom&page-id=14825%3A203537&mode=design",children:[e.jsx(C,{children:"Usage"}),e.jsx(w,{children:`
          import { useEffect, useState } from 'react';
          import { Spinner, Text } from '@greenloom/ui/components';

          function App() {
            const [isLoading, setIsLoading] = useState(true);

            useEffect(() => {
              setTimeout(() => {
                setIsLoading(false)
              }, 5000)
            }, [])

            return (
              isLoading ? <Spinner /> : <Text>Tadaa 🥳 Reload sandbox to see spinner again</Text>
            )
          }

          export default App;
        `})]}),L={title:"Components/Spinner",component:o,parameters:{docs:{page:z}},tags:["autodocs"],argTypes:y()},N=({...r})=>e.jsx(o,{...r}),a=N.bind({});a.storyName="Default";const v=({...r})=>e.jsxs(t,{children:[e.jsxs(t,{marginBottom:"spacing.3",children:[e.jsx(c,{children:"Medium"}),e.jsx(t,{marginBottom:"spacing.2"}),e.jsx(o,{...r,size:"medium"})]}),e.jsxs(t,{marginBottom:"spacing.3",children:[e.jsx(c,{children:"Large"}),e.jsx(t,{marginBottom:"spacing.2"}),e.jsx(o,{...r,size:"large"})]}),e.jsxs(t,{marginBottom:"spacing.3",children:[e.jsx(c,{children:"Extra Large"}),e.jsx(t,{marginBottom:"spacing.2"}),e.jsx(o,{...r,size:"xlarge"})]})]}),s=v.bind({});s.storyName="Sizes";const l=({title:r,description:n,backgroundColor:f,textColor:p,children:j})=>e.jsxs(t,{marginBottom:"spacing.4",paddingTop:"spacing.5",paddingBottom:"spacing.5",paddingLeft:"spacing.5",paddingRight:"spacing.5",borderRadius:"medium",backgroundColor:f,children:[e.jsx(c,{color:p,weight:"medium",children:r}),e.jsx(c,{color:p,size:"small",children:n}),e.jsx(t,{marginBottom:"spacing.4"}),j]}),_=({...r})=>{const{theme:n}=T();return e.jsxs(t,{children:[e.jsx(l,{title:"neutral",description:"The default. Tracks the page surface, so it stays readable in both color schemes.",backgroundColor:n.colors.surface.background.gray.subtle,children:e.jsx(o,{...r,color:"neutral"})}),e.jsx(l,{title:"primary",description:"For a spinner that should carry the brand color.",backgroundColor:n.colors.surface.background.gray.subtle,children:e.jsx(o,{...r,color:"primary"})}),e.jsx(l,{title:"white",description:"Static white. Use it on a surface that is dark in both color schemes.",backgroundColor:n.colors.interactive.background.staticBlack.default,textColor:"surface.text.staticWhite.normal",children:e.jsx(o,{...r,color:"white"})}),e.jsx(l,{title:"onNeutral",description:"For a filled neutral surface. It inverts with the theme — switch the toolbar between light and dark to see the surface and the spinner flip together.",backgroundColor:n.colors.interactive.background.neutral.default,textColor:"interactive.text.onNeutral.normal",children:e.jsx(o,{...r,color:"onNeutral"})})]})},i=_.bind({});i.storyName="Colors";var m,d,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`({
  ...args
}) => {
  return <SpinnerComponent {...args} />;
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,h,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`({
  ...args
}) => {
  return <BaseBox>
      <BaseBox marginBottom="spacing.3">
        <Text>Medium</Text>
        <BaseBox marginBottom="spacing.2" />
        <SpinnerComponent {...args} size="medium" />
      </BaseBox>
      <BaseBox marginBottom="spacing.3">
        <Text>Large</Text>
        <BaseBox marginBottom="spacing.2" />
        <SpinnerComponent {...args} size="large" />
      </BaseBox>
      <BaseBox marginBottom="spacing.3">
        <Text>Extra Large</Text>
        <BaseBox marginBottom="spacing.2" />
        <SpinnerComponent {...args} size="xlarge" />
      </BaseBox>
    </BaseBox>;
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,B,b;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`({
  ...args
}) => {
  const {
    theme
  } = useTheme();
  return <BaseBox>
      <ColorSwatch title="neutral" description="The default. Tracks the page surface, so it stays readable in both color schemes." backgroundColor={theme.colors.surface.background.gray.subtle}>
        <SpinnerComponent {...args} color="neutral" />
      </ColorSwatch>
      <ColorSwatch title="primary" description="For a spinner that should carry the brand color." backgroundColor={theme.colors.surface.background.gray.subtle}>
        <SpinnerComponent {...args} color="primary" />
      </ColorSwatch>
      <ColorSwatch title="white" description="Static white. Use it on a surface that is dark in both color schemes." backgroundColor={theme.colors.interactive.background.staticBlack.default} textColor="surface.text.staticWhite.normal">
        <SpinnerComponent {...args} color="white" />
      </ColorSwatch>
      <ColorSwatch title="onNeutral" description="For a filled neutral surface. It inverts with the theme — switch the toolbar between light and dark to see the surface and the spinner flip together." backgroundColor={theme.colors.interactive.background.neutral.default} textColor="interactive.text.onNeutral.normal">
        <SpinnerComponent {...args} color="onNeutral" />
      </ColorSwatch>
    </BaseBox>;
}`,...(b=(B=i.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const A=["Spinner","SpinnerSizes","SpinnerContrasts"],F=Object.freeze(Object.defineProperty({__proto__:null,Spinner:a,SpinnerContrasts:i,SpinnerSizes:s,__namedExportsOrder:A,default:L},Symbol.toStringTag,{value:"Module"}));export{F as s};
