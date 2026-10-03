import{aT as x,j as e,X as L,r as G,aU as k,aV as p,B as i,T as n,a8 as c,aW as W,aX as F}from"./iframe-C1qQ09LF.js";import{S as V}from"./Sandbox.web-B2xP21Qp.js";import{S as _}from"./StoryPageWrapper-CS0_5maI.js";import{g as U}from"./storybookArgTypes-DFfQV31s.js";const H=()=>e.jsxs(_,{componentName:"Collapsible",componentDescription:"Collapsible is used to allow users to toggle the visibility of hidden content within a container.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74858-52005&t=A9ZHVM0ITdF8gCYw-1&scaling=min-zoom&page-id=37282%3A578130&mode=design",children:[e.jsx(L,{children:"Usage"}),e.jsx(V,{editorHeight:500,children:`
        import { Collapsible, CollapsibleButton, CollapsibleBody, Text, Amount, Box } from '@greenloom/ui/components';

        function App() {
          return (
            <Collapsible>
              <CollapsibleButton>View Price Breakdown</CollapsibleButton>
              <CollapsibleBody>
                <Box display="flex" flexDirection="column" minWidth="200px">
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="baseline"
                  >
                    <Text>Actual amount</Text>
                    <Amount value={1000} color="positive" />
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="baseline"
                  >
                    <Text marginTop="spacing.2">Green Loom Platform Fees</Text>
                    <Text>2%</Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="baseline"
                  >
                    <Text marginTop="spacing.2">GST</Text>
                    <Text>18%</Text>
                  </Box>
                </Box>
              </CollapsibleBody>
            </Collapsible>
          )
        }

        export default App;
        `})]}),O={title:"Components/Collapsible",component:x,args:{},tags:["autodocs"],argTypes:{...U()},parameters:{docs:{page:H}}},z=({...o})=>e.jsxs(x,{...o,children:[e.jsx(k,{children:"View Price Breakdown"}),e.jsx(p,{children:e.jsxs(i,{display:"flex",flexDirection:"column",minWidth:"200px",children:[e.jsxs(i,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"baseline",children:[e.jsx(n,{children:"Actual amount"}),e.jsx(c,{value:1e3,color:"feedback.text.positive.intense"})]}),e.jsxs(i,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"baseline",children:[e.jsx(n,{marginTop:"spacing.2",children:"Green Loom Platform Fees"}),e.jsx(n,{children:"2%"})]}),e.jsxs(i,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"baseline",children:[e.jsx(n,{marginTop:"spacing.2",children:"GST"}),e.jsx(n,{children:"18%"})]})]})})]}),r=z.bind({}),S=({...o})=>e.jsxs(x,{...o,children:[e.jsx(W,{children:"View Price Breakdown"}),e.jsx(p,{children:e.jsxs(i,{display:"flex",flexDirection:"column",minWidth:"200px",children:[e.jsxs(i,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"baseline",children:[e.jsx(n,{children:"Actual amount"}),e.jsx(c,{value:1e3,color:"feedback.text.positive.intense"})]}),e.jsxs(i,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"baseline",children:[e.jsx(n,{marginTop:"spacing.2",children:"Green Loom Platform Fees"}),e.jsx(n,{children:"2%"})]}),e.jsxs(i,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"baseline",children:[e.jsx(n,{marginTop:"spacing.2",children:"GST"}),e.jsx(n,{children:"18%"})]})]})})]}),l=S.bind({}),M=({...o})=>e.jsxs(x,{...o,children:[e.jsx(F,{children:"View Price Breakdown"}),e.jsx(p,{children:e.jsxs(i,{display:"flex",flexDirection:"column",minWidth:"200px",children:[e.jsxs(i,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"baseline",children:[e.jsx(n,{children:"Actual amount"}),e.jsx(c,{value:1e3,color:"feedback.text.positive.intense"})]}),e.jsxs(i,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"baseline",children:[e.jsx(n,{marginTop:"spacing.2",children:"Green Loom Platform Fees"}),e.jsx(n,{children:"2%"})]}),e.jsxs(i,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"baseline",children:[e.jsx(n,{marginTop:"spacing.2",children:"GST"}),e.jsx(n,{children:"18%"})]})]})})]}),s=M.bind({});s.parameters={docs:{description:{story:"Compose `Collapsible` with `CollapsibleText` and `CollapsibleBody` for a lightweight text trigger with a chevron icon"}}};l.parameters={docs:{description:{story:"Compose `Collapsible` with `CollapsibleLink` and `CollapsibleBody`"}}};const t=S.bind({});t.args={direction:"top"};t.parameters={docs:{description:{story:"Use `direction` prop to control in which direction the `Collapsible` expands in"}}};const R=({isExpanded:o,onExpandChange:Z,defaultIsExpanded:N,...v})=>{const[d,P]=G.useState(!0);return e.jsxs(x,{...v,isExpanded:d,onExpandChange:({isExpanded:A})=>P(A),children:[e.jsxs(k,{children:[d?"Hide":"Show"," Price Breakdown"]}),e.jsx(p,{children:e.jsxs(i,{display:"flex",flexDirection:"column",minWidth:"200px",children:[e.jsxs(i,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"baseline",children:[e.jsx(n,{children:"Actual amount"}),e.jsx(c,{value:1e3,color:"feedback.text.positive.intense"})]}),e.jsxs(i,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"baseline",children:[e.jsx(n,{marginTop:"spacing.2",children:"Green Loom Platform Fees"}),e.jsx(n,{children:"2%"})]}),e.jsxs(i,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"baseline",children:[e.jsx(n,{marginTop:"spacing.2",children:"GST"}),e.jsx(n,{children:"18%"})]})]})})]})},a=R.bind({});a.parameters={docs:{description:{story:"Use in combination with `isExpanded`: `boolean` and `onExpandChange`: `({ isExpanded }) => void`"}}};var m,b,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`({
  ...args
}) => {
  return <CollapsibleComponent {...args}>
      <CollapsibleButton>View Price Breakdown</CollapsibleButton>
      <CollapsibleBody>
        <Box display="flex" flexDirection="column" minWidth="200px">
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline">
            <Text>Actual amount</Text>
            <Amount value={1000} color="feedback.text.positive.intense" />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline">
            <Text marginTop="spacing.2">Green Loom Platform Fees</Text>
            <Text>2%</Text>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline">
            <Text marginTop="spacing.2">GST</Text>
            <Text>18%</Text>
          </Box>
        </Box>
      </CollapsibleBody>
    </CollapsibleComponent>;
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var u,g,C;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`({
  ...args
}) => {
  return <CollapsibleComponent {...args}>
      <CollapsibleLink>View Price Breakdown</CollapsibleLink>
      <CollapsibleBody>
        <Box display="flex" flexDirection="column" minWidth="200px">
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline">
            <Text>Actual amount</Text>
            <Amount value={1000} color="feedback.text.positive.intense" />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline">
            <Text marginTop="spacing.2">Green Loom Platform Fees</Text>
            <Text>2%</Text>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline">
            <Text marginTop="spacing.2">GST</Text>
            <Text>18%</Text>
          </Box>
        </Box>
      </CollapsibleBody>
    </CollapsibleComponent>;
}`,...(C=(g=l.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var T,y,w;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`({
  ...args
}) => {
  return <CollapsibleComponent {...args}>
      <CollapsibleText>View Price Breakdown</CollapsibleText>
      <CollapsibleBody>
        <Box display="flex" flexDirection="column" minWidth="200px">
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline">
            <Text>Actual amount</Text>
            <Amount value={1000} color="feedback.text.positive.intense" />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline">
            <Text marginTop="spacing.2">Green Loom Platform Fees</Text>
            <Text>2%</Text>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline">
            <Text marginTop="spacing.2">GST</Text>
            <Text>18%</Text>
          </Box>
        </Box>
      </CollapsibleBody>
    </CollapsibleComponent>;
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var h,j,B;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`({
  ...args
}) => {
  return <CollapsibleComponent {...args}>
      <CollapsibleLink>View Price Breakdown</CollapsibleLink>
      <CollapsibleBody>
        <Box display="flex" flexDirection="column" minWidth="200px">
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline">
            <Text>Actual amount</Text>
            <Amount value={1000} color="feedback.text.positive.intense" />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline">
            <Text marginTop="spacing.2">Green Loom Platform Fees</Text>
            <Text>2%</Text>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline">
            <Text marginTop="spacing.2">GST</Text>
            <Text>18%</Text>
          </Box>
        </Box>
      </CollapsibleBody>
    </CollapsibleComponent>;
}`,...(B=(j=t.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var D,I,E;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`({
  isExpanded: _isExpanded,
  onExpandChange,
  defaultIsExpanded,
  ...rest
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return <CollapsibleComponent {...rest} isExpanded={isExpanded} onExpandChange={({
    isExpanded
  }) => setIsExpanded(isExpanded)}>
      <CollapsibleButton>{isExpanded ? 'Hide' : 'Show'} Price Breakdown</CollapsibleButton>
      <CollapsibleBody>
        <Box display="flex" flexDirection="column" minWidth="200px">
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline">
            <Text>Actual amount</Text>
            <Amount value={1000} color="feedback.text.positive.intense" />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline">
            <Text marginTop="spacing.2">Green Loom Platform Fees</Text>
            <Text>2%</Text>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="baseline">
            <Text marginTop="spacing.2">GST</Text>
            <Text>18%</Text>
          </Box>
        </Box>
      </CollapsibleBody>
    </CollapsibleComponent>;
}`,...(E=(I=a.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const X=["WithCollapsibleButton","WithCollapsibleLink","WithCollapsibleText","WithDirection","ControlledExample"],K=Object.freeze(Object.defineProperty({__proto__:null,ControlledExample:a,WithCollapsibleButton:r,WithCollapsibleLink:l,WithCollapsibleText:s,WithDirection:t,__namedExportsOrder:X,default:O},Symbol.toStringTag,{value:"Module"}));export{K as c};
