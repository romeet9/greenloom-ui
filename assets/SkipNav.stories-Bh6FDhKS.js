import{hM as s,j as e,l as t,x as n,hN as a,T as l,n as o,X as x}from"./iframe-C1qQ09LF.js";import{S as d}from"./Sandbox.web-B2xP21Qp.js";import{S as h}from"./StoryPageWrapper-CS0_5maI.js";const k=()=>e.jsxs(h,{componentDescription:"The SkipNav component lets users skip the navigation and jump to the main content of the page. Useful when you have navbars at the top and the user wants to jump directly to the main content.",componentName:"SkipNav",imports:"",apiDecisionLink:null,children:[e.jsx(x,{children:"Usage"}),e.jsx(d,{editorHeight:400,children:`
          import { 
            SkipNavLink, 
            SkipNavContent, 
            Text, 
            Link,
            Code,
            Box 
          } from '@greenloom/ui/components';

          function App() {
            return (
              <Box>
                <Text>Click somewhere on the text here to focus on this window and press <Code>TAB</Code> key to see it in action</Text>
                <SkipNavLink>Skip to content</SkipNavLink>
                <nav style={{ marginBottom: '800px' }}>
                  <ul>
                    <li><Link href="#">Nav link 1</Link></li>
                    <li><Link href="#">Nav link 2</Link></li>
                    <li><Link href="#">Nav link 3</Link></li>
                  </ul>
                </nav>
                <main>
                  <SkipNavContent />
                  <Text>Main Content of the Page</Text>
                </main>
              </Box>
            )
          }

          export default App;
        `})]}),m={title:"Components/Accessibility/SkipNav",component:s,args:{},tags:["autodocs"],parameters:{docs:{page:()=>e.jsx(k,{})}}},g=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"Skip to content"}),e.jsx(s,{id:"second",children:"Skip to second content"}),e.jsx("nav",{style:{display:"flex"},children:e.jsxs("ul",{style:{marginLeft:"auto",display:"flex",listStyle:"none",gap:"10px"},children:[e.jsx("li",{children:e.jsx(t,{href:"#1",children:"Home"})}),e.jsx("li",{children:e.jsx(t,{href:"#2",children:"Pricing"})}),e.jsx("li",{children:e.jsx(t,{href:"#3",children:"Login"})}),e.jsx("li",{children:e.jsx(t,{href:"#4",children:"SignUp"})})]})}),e.jsxs(n,{children:[e.jsx(a,{}),e.jsx(l,{children:"Main content of the page"}),e.jsx(n,{marginTop:"spacing.2"}),e.jsxs(n,{gap:"spacing.2",display:"flex",children:[e.jsx(o,{size:"small",children:"Button 1"}),e.jsx(o,{size:"small",children:"Button 2"})]}),e.jsx(a,{id:"second"}),e.jsx(n,{marginTop:"spacing.2"}),e.jsx(l,{children:"Second Main content of the page"}),e.jsx(n,{marginTop:"spacing.2"}),e.jsxs(n,{gap:"spacing.2",display:"flex",children:[e.jsx(o,{size:"small",children:"Button 3"}),e.jsx(o,{size:"small",children:"Button 4"})]})]})]}),i=g.bind({});var r,p,c;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <>
      <SkipNavLink>Skip to content</SkipNavLink>
      <SkipNavLink id="second">Skip to second content</SkipNavLink>
      <nav style={{
      display: 'flex'
    }}>
        <ul style={{
        marginLeft: 'auto',
        display: 'flex',
        listStyle: 'none',
        gap: '10px'
      }}>
          <li>
            <Link href="#1">Home</Link>
          </li>
          <li>
            <Link href="#2">Pricing</Link>
          </li>
          <li>
            <Link href="#3">Login</Link>
          </li>
          <li>
            <Link href="#4">SignUp</Link>
          </li>
        </ul>
      </nav>
      <BaseBox>
        <SkipNavContent />
        <Text>Main content of the page</Text>
        <BaseBox marginTop="spacing.2" />
        <BaseBox gap="spacing.2" display="flex">
          <Button size="small">Button 1</Button>
          <Button size="small">Button 2</Button>
        </BaseBox>
        <SkipNavContent id="second" />
        <BaseBox marginTop="spacing.2" />
        <Text>Second Main content of the page</Text>
        <BaseBox marginTop="spacing.2" />
        <BaseBox gap="spacing.2" display="flex">
          <Button size="small">Button 3</Button>
          <Button size="small">Button 4</Button>
        </BaseBox>
      </BaseBox>
    </>;
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const u=["SkipNavExample"],j=Object.freeze(Object.defineProperty({__proto__:null,SkipNavExample:i,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{j as s};
