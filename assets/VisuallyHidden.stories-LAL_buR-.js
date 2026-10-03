import{hO as t,j as e,T as i,av as l,X as d}from"./iframe-C1qQ09LF.js";import{S as c}from"./Sandbox.web-B2xP21Qp.js";import{S as u}from"./StoryPageWrapper-CS0_5maI.js";const h=()=>e.jsxs(u,{componentDescription:"The VisuallyHidden component makes content hidden from sighted users but available for screen reader users.",componentName:"VisuallyHidden",apiDecisionLink:null,children:[e.jsx("a",{href:"https://github.com/razorpay/blade/blob/anu/a11y-rfc/rfcs/2022-04-09-accessibility.md#hidden-content",target:"_blank",rel:"noreferrer noopener",children:"See Hidden Content RFC"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(d,{children:"Usage"}),e.jsx(c,{children:`
          import { VisuallyHidden, Checkbox, Text, Box } from '@greenloom/ui/components';

          function App() {
            return (
              <Box>
                <Text>If you focus on checkbox below with voice over enabled, you will hear "Hidden Label" announcement</Text>
                <Checkbox><VisuallyHidden>Hidden Label</VisuallyHidden></Checkbox>
              </Box>
            )
          }

          export default App;
        `})]}),b={title:"Components/Accessibility/VisuallyHidden",component:t,tags:["autodocs"],args:{children:"Toggle dark mode"},parameters:{docs:{page:()=>e.jsx(h,{})}}},x=a=>e.jsxs(e.Fragment,{children:[e.jsx(i,{children:'Enable voiceover and focus on the checkbox to hear its invisible label. You should be able to hear "Toggle dark mode" when focused on the checkbox.'}),e.jsx(l,{children:e.jsx(t,{children:a.children})})]}),o=x.bind({});var n,r,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return <>
      <Text>
        Enable voiceover and focus on the checkbox to hear its invisible label. You should be able
        to hear "Toggle dark mode" when focused on the checkbox.
      </Text>
      <Checkbox>
        {/* @ts-expect-error checkbox label only accepts string, this is just for demo */}
        <VisuallyHiddenComponent>{args.children}</VisuallyHiddenComponent>
      </Checkbox>
    </>;
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const p=["VisuallyHidden"],f=Object.freeze(Object.defineProperty({__proto__:null,VisuallyHidden:o,__namedExportsOrder:p,default:b},Symbol.toStringTag,{value:"Module"}));export{f as v};
