import{j as e,H as i,L as t,f as o,g as r,T as s,l as p,C as n,B as y,ae as b,x as h,k6 as B,l2 as w,l3 as T,M as k}from"./iframe-C1qQ09LF.js";import{useMDXComponents as v}from"./index-Au6382uh.js";import{a as x,S as m,b as C,D as I,g as P,I as u}from"./Sandbox.web-C7diOxlu.js";import{S}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";var j;window.top&&((j=document.getElementById(window.top.location.hash))==null||j.scrollIntoView());const z=({href:a,children:c})=>e.jsx(r,{variant:"button",onClick:()=>{var g;(g=document.querySelector(a))==null||g.scrollIntoView()},children:c}),d=w(z,{componentId:T.ListItemLink}),l=({...a})=>e.jsx(h,{paddingY:"spacing.6",...a});function A(){return e.jsxs(S,{componentName:"Layout Primitives",componentDescription:"Layout Primitives from Blade. Use this for adding spacings, grids, and any of your layout needs",imports:"",showStorybookControls:!1,children:[e.jsx("hr",{}),e.jsx(i,{size:"large",children:"Table of Content"}),e.jsxs(t,{marginY:"spacing.6",marginBottom:"spacing.8",children:[e.jsx(o,{children:e.jsx(d,{href:"#playground",children:"Playground"})}),e.jsxs(o,{children:[e.jsx(d,{href:"#box-usage",children:"Box Usage"}),e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(d,{href:"#adding-margin-and-padding",children:"Adding Margin & Padding"})}),e.jsx(o,{children:e.jsx(d,{href:"#responsive-props",children:"Responsive Props"})})]})]}),e.jsx(o,{children:e.jsx(d,{href:"#styled-props",children:"Styled Props for Blade Components"})}),e.jsxs(o,{children:[e.jsx(d,{href:"#questions-you-might-have",children:"Questions You Might Have"}),e.jsxs(t,{children:[e.jsx(o,{children:e.jsx(d,{href:"#why-is-xyz-prop-not-support",children:"Why is xyz prop not supported?"})}),e.jsx(o,{children:e.jsx(d,{href:"#what-to-do-if-prop-is-not-supported",children:"What to do if prop is not supported?"})})]})]}),e.jsx(o,{children:e.jsx(r,{href:"/?path=/docs/components-layout-primitives-box-box--default&globals=measureEnabled:false#properties-ref",children:"Props Reference"})})]}),e.jsx("hr",{}),e.jsxs(l,{id:"playground",children:[e.jsx(i,{size:"large",children:"Playground"}),e.jsx(x,{padding:"spacing.0",children:`
            import { Box, Text } from '@greenloom/loom/components'

            function App() {
              return (
                <Box 
                  as="section" // renders as <section> tag instead of <div>
                  display="flex"
                  flexDirection={{ base: 'column', m: 'row' }}
                  padding={{ base: ['spacing.1', '9px'], m: 'spacing.3' }}
                >
                  <Box 
                    backgroundColor="surface.background.cloud.intense" 
                    flex="1" 
                  >
                    <Text margin="spacing.4" color="surface.text.onCloud.onIntense">Box1</Text>
                  </Box>
                  <Box 
                    backgroundColor="surface.background.sea.intense" 
                    flex="1" 
                  >
                    <Text margin="spacing.4" color="surface.text.onSea.onIntense">Box2</Text>
                  </Box>
                </Box>
              )
            }

            export default App;
            `}),e.jsxs(s,{marginTop:"spacing.4",children:["Check out our"," ",e.jsx(p,{href:"/?path=/story/recipes-simple-dashboard--simple-dashboard&globals=measureEnabled:false",children:"Simple Dashboard Recipe"})," ","for a real-world example on Box usage."]})]}),e.jsxs(l,{id:"box-usage",children:[e.jsx(i,{size:"large",marginBottom:"spacing.3",children:"📦 Box Usage"}),e.jsxs(s,{children:["Box is a primitive Layout component which can be used for creating different responsive layouts in UI. You might have used ",e.jsx(n,{children:"Box"})," in other component libraries as well such as"," ",e.jsx(p,{target:"_blank",href:"https://chakra-ui.com/docs/components/box",children:"Chakra"}),". Our Box is similar, except it's primarily focused on layout properties and works on all platforms."]}),e.jsx(s,{marginY:"spacing.4",children:"The simplest Box usage would look something like this-"}),e.jsx(m,{children:`
              <Box>Hello</Box>
              // This will translate to:
              // On Web          -> <div>Hello</div> 
              // On React Native -> <View>Hello</View>
            `}),e.jsxs(l,{id:"adding-margin-and-padding",children:[e.jsx(i,{size:"large",marginBottom:"spacing.3",children:"↔️ Adding Margin and Padding"}),e.jsx(s,{children:"Uncomment the commented code below to see things in action ✨"}),e.jsx(x,{padding:["spacing.5","spacing.0","spacing.5"],editorHeight:500,children:`
              import { Box, Text } from '@greenloom/loom/components'

              function App() {
                return (
                  <>
                    <Box 
                      // Uncomment next lines to see padding and margin in action
                      // padding="spacing.4"
                      // marginTop="32px"
                      backgroundColor="surface.background.gray.intense"
                    >
                      <Text>Some Text</Text>
                    </Box>
                    {/*
                      <Box
                        // Uncomment this block to see padding shorthands in action
                        padding={["spacing.3", "35px"]} // We also support padding and margin shorthands similar to CSS
                        marginX="spacing.5" // adds horizontal margin
                        backgroundColor='surface.background.gray.moderate'
                      >
                        <Text>More Text</Text>
                      </Box>
                    */}
                  </>
                )
              }
  
              export default App;
              `}),e.jsxs(s,{children:["Blade supports multiple props like ",e.jsx(n,{children:"padding"}),", ",e.jsx(n,{children:"paddingX"}),","," ",e.jsx(n,{children:"paddingY"}),", ",e.jsx(n,{children:"paddingTop"}),", ",e.jsx(n,{children:"paddingRight"}),","," ",e.jsx(n,{children:"paddingBottom"}),", ",e.jsx(n,{children:"paddingLeft"})," and similar props with"," ",e.jsx(n,{children:"margin"})]}),e.jsxs(s,{children:["These props can have values such as ",e.jsx(n,{children:"spacing.3"})," (Our tokens),"," ",e.jsx(n,{children:"132px"})," (absolute values), ",e.jsx(n,{children:"auto"})]})]}),e.jsxs(l,{id:"responsive-props",children:[e.jsx(i,{size:"large",marginBottom:"spacing.3",children:"Responsive Props 📱 🖥"}),e.jsxs(s,{marginBottom:"spacing.4",children:["Our responsive props allow you do define responsive layouts with ease. Check out how the code renders differently on screens when ",e.jsx(n,{children:"{base: 'column', m: 'row'}"})," is used."]}),e.jsx(C,{code:`
             import { Box, Text } from '@greenloom/loom/components';

             function App() {
               return (
                <>
                  <Box display={{ base: 'none', m: 'block' }}><Text>🖥 Desktop View</Text></Box>
                  <Box display={{ base: 'block', m: 'none' }}><Text>📱 Mobile View</Text></Box>
                  <Box 
                    padding="spacing.4"
                    marginTop="32px"
                    display="flex"
                    // Magic line of code 👇🏼
                    flexDirection={{ base: 'column', m: 'row' }}
                  >
                    <Box
                      flex="1"
                      backgroundColor="surface.background.cloud.intense"
                      padding="spacing.4" 
                    >
                      <Text color="surface.text.onCloud.onIntense">Box1</Text>
                    </Box>
                    <Box 
                      flex="1" 
                      backgroundColor="surface.background.sea.intense" 
                      padding="spacing.4" 
                    >
                      <Text color="surface.text.onSea.onIntense">Box2</Text>
                    </Box>
                  </Box>
                </>
               )
             }
 
             export default App;
            `,children:e.jsxs(I,{children:[e.jsx(P,{}),e.jsx(u,{}),e.jsx(y,{display:b({base:"none",m:"block"}),width:"100%",children:e.jsx(u,{style:{width:"100%"}})})]})}),e.jsxs(s,{marginTop:"spacing.4",children:["All the props of Box component support responsive objects 🕺🏻. For which breakpoint to use, you can check out"," ",e.jsx(p,{href:"/?path=/docs/tokens-breakpoints",children:"Breakpoints documentation"})]})]})]}),e.jsxs(l,{id:"styled-props",paddingBottom:"spacing.0",children:[e.jsx(i,{size:"large",marginBottom:"spacing.3",children:"💅🏼 Styled Props for Blade Components"}),e.jsx(s,{children:"Want to add spacing between 2 elements? add layout props directly on the Blade components ✨"}),e.jsx(m,{decorators:[{className:"highlight",line:16,startColumn:12,endColumn:33}],children:`
                import { Text } from '@greenloom/loom/components'

                function App() {
                  return (
                    <>
                      {/** ❌ No need of Box wrappers */}
                      <Box>
                        <Text>Text Node 1</Text>
                      </Box>
                      <Box marginTop="spacing.4">
                        <Text>Text Node 2</Text>
                      </Box>

                      {/** ✅ Add layout props directly into your favorite components 🥳 */}
                      <Text>Text Node 1</Text>
                      <Text marginTop="spacing.4">Text Node 2</Text>
                    </>
                  )
                };

                export default App;
              `}),e.jsx(s,{marginTop:"spacing.3",children:"Here's another example where we position Alert component to the bottom of the screen"}),e.jsx(x,{children:`
              import { Alert } from '@greenloom/loom/components';

              function App() {
                return (
                  <Alert 
                    description="I am bottom positioned"
                    isFullWidth
                    // styled-props 👇🏼
                    position="fixed"
                    bottom="spacing.10"
                    left="spacing.0"
                  />
                )
              }

              export default App;
              `})]}),e.jsxs(l,{id:"questions-you-might-have",paddingTop:"spacing.0",children:[e.jsx(i,{size:"large",marginBottom:"spacing.3",marginTop:"spacing.6",children:"🧐 Questions you might have"}),e.jsxs(s,{children:["This is a summary and some questions you might have regarding API. You can check out complete API decisions at"," ",e.jsx(p,{href:"https://github.com/razorpay/blade/blob/master/rfcs/2023-01-06-layout.md",children:"Layout Primitives and Components RFC"})]}),e.jsxs(h,{id:"why-is-xyz-prop-not-support",paddingY:"spacing.4",children:[e.jsx(i,{marginTop:"spacing.4",marginBottom:"spacing.2",size:"large",children:"Why is `xyz` prop not supported in Box?"}),e.jsxs(s,{marginY:"spacing.3",children:["To start the ",e.jsx(n,{children:"Box"})," implementation, we primarily focused on supporting props that help you change layouts like - margins, paddings, flex, grids, etc. This is roughly the rule of thumb we have followed so far-"]}),e.jsxs(t,{children:[e.jsxs(o,{children:["Is it layout prop that does not change look and feel?",e.jsxs(t,{children:[e.jsx(o,{children:"E.g. - flex, grid, margins, etc"}),e.jsxs(o,{children:["→"," Available in Box 🥳"]})]})]}),e.jsxs(o,{children:["Is it very commonly used in your codebase and cannot be implemented using alternate components from blade?",e.jsxs(t,{children:[e.jsx(o,{children:"E.g. - backgroundColor"}),e.jsxs(o,{children:["→"," Available in Box 🥳"]})]})]}),e.jsxs(o,{children:["Is there any alternate Blade component that can be used instead?",e.jsxs(t,{children:[e.jsxs(o,{children:["E.g. - We do not support borderRadius, boxShadow because in most cases (with few exceptions) you might be looking for ",e.jsx(B,{children:"Card"})," component instead"]}),e.jsxs(o,{children:["→"," Not Available in Box 😠"]})]})]}),e.jsxs(o,{children:["Do you find yourself creating wrapper around Box for this prop again and again throughout your codebase?",e.jsx(t,{children:e.jsxs(o,{children:[e.jsx(r,{href:"https://github.com/razorpay/blade/issues/new?title=Request+to+add+xyz+prop+to+Box&labels=enhancement",target:"_blank",children:"Create an issue in razorpay/blade repo"})," ","mentioning your use-cases and how frequently is it needed"]})})]}),e.jsxs(o,{children:["Not convinced with the reasonings we had in Layouts RFC?",e.jsx(t,{children:e.jsxs(o,{children:[e.jsx(r,{href:"https://github.com/razorpay/blade/issues/new",target:"_blank",children:"Create an issue in razorpay/blade repo"})," ","and we can discuss"]})})]})]}),e.jsx(s,{children:"We are open for suggestions on this. You can create an issue on blade repo to discuss any of the API decisions. Extra points if you can mention any razorpay-specific issues you are facing with Box or styled-props API."})]}),e.jsxs(h,{id:"what-to-do-if-prop-is-not-supported",paddingTop:"spacing.4",children:[e.jsx(i,{marginBottom:"spacing.2",size:"large",children:"What to do if Box doesn't support the prop you want to use?"}),e.jsxs(s,{marginY:"spacing.3",children:["You can go ahead and create a custom ",e.jsx(n,{children:"styled.div"})," component with your prop to unblock yourself. If it is very specific and rare usecase, creating custom styled component might just be ideal."]}),e.jsx(s,{marginY:"spacing.3",children:"However, if it is for a prop that you see yourself adding multiple times (Lets say 30% of times of all Box occurences), then it might be better to create an issue in our repo and we can look into adding that prop to Box itself."})]}),e.jsxs(h,{id:"how-is-it-different-from-card",paddingTop:"spacing.4",children:[e.jsx(i,{marginBottom:"spacing.2",size:"large",children:"How is it different from Card Component?"}),e.jsx(s,{marginY:"spacing.3",children:"Layout Primitives are empty components meant for creating responsive layouts and don't follow any visual structure. They also don't exist on figma."}),e.jsx(s,{marginY:"spacing.3",children:"Card has a certain visual structure. It follows a standard padding, borderRadius, boxShadow, etc. It is meant for creating cards where you want to add shadows, headers, footers, etc."})]})]}),e.jsxs(l,{id:"references",children:[e.jsx(i,{size:"large",children:"References"}),e.jsxs(t,{marginTop:"spacing.4",children:[e.jsx(o,{children:e.jsx(r,{href:"/?path=/docs/components-layout-primitives-box-box--default&globals=measureEnabled:false",children:"Box Story"})}),e.jsx(o,{children:e.jsx(r,{href:"/?path=/docs/components-layout-primitives-box-box--default&globals=measureEnabled:false#properties-ref",children:"Box Properties Reference"})}),e.jsx(o,{children:e.jsx(r,{href:"/?path=/story/recipes-simple-dashboard--simple-dashboard&globals=measureEnabled:false",children:"Simple Dashboard Recipe Using Box"})}),e.jsx(o,{children:e.jsx(r,{href:"/?path=/docs/components-layout-primitives-box-styled-props--styled-props",children:"Styled Props Story"})}),e.jsx(o,{children:e.jsx(r,{href:"/?path=/docs/components-layout-primitives-box-styled-props--styled-props#properties-ref",children:"Styled Props Properties Reference"})}),e.jsx(o,{children:e.jsx(r,{href:"/?path=/docs/tokens-breakpoints--docs",children:"Breakpoint Tokens Reference"})}),e.jsx(o,{children:e.jsx(r,{href:"https://github.com/razorpay/blade/blob/master/rfcs/2023-01-06-layout.md",children:"Layout Primitives and Components RFC"})})]})]})]})}function f(a){return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"Components/Layout Primitives (Box)/Layout Primitives Tutorial"}),`
`,e.jsx(A,{})]})}function H(a={}){const{wrapper:c}={...v(),...a.components};return c?e.jsx(c,{...a,children:e.jsx(f,{...a})}):f()}export{H as default};
