import{aK as i,j as e,H as c,aI as d,aJ as l,x as n,B as S,T as o,L as b,f as m,n as x}from"./iframe-C1qQ09LF.js";import{S as L}from"./Sandbox.web-B2xP21Qp.js";import{S as k}from"./StoryPageWrapper-CS0_5maI.js";import{g as A}from"./storybookArgTypes-DFfQV31s.js";const H=()=>e.jsxs(k,{componentName:"Divider",componentDescription:"Divider is a visual element that is used to separate or divide content within a layout",apiDecisionLink:null,figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74864-84931&t=L3B7EoN3ZA9RuSPa-1&scaling=min-zoom&page-id=37369%3A560819&mode=design",children:[e.jsx(c,{size:"large",children:"Usage"}),e.jsx(L,{children:`
          import {
            Divider,
            Box,
            Heading,
            Text,
            Card,
            CardBody
          } from "@greenloom/loom/components";
          
          function App() {
            return (
              <Card>
                <CardBody>
                  <Box display="flex" flexDirection="column">
                    <Heading marginBottom="spacing.2">Explore multiple payment options</Heading>
                    <Divider />
                    <Box display="flex" gap="spacing.4" flexDirection="row">
                      <Text marginTop="spacing.2">
                      Accept payments with a custom-branded online store using Payment Pages.
                      </Text>
                    <Divider orientation="vertical" />
                      <Text marginTop="spacing.2">
                      Create payment links which can be shared via an email, SMS, messenger, chatbot etc.
                      </Text>
                      <Divider orientation="vertical" />
                      <Text marginTop="spacing.2">
                      Accept one time and subscription payments using payment button on your website in less than 5 minutes.
                      </Text>
                    </Box>
                  </Box>
                </CardBody>
              </Card>
            );
          }
          export default App;          
        `})]}),P={title:"Components/Divider",component:i,tags:["autodocs"],argTypes:A(),parameters:{docs:{page:H}}},M=p=>e.jsx(d,{children:e.jsx(l,{children:e.jsxs(n,{display:"flex",flexDirection:p.orientation=="vertical"?"row":"column",children:[e.jsx(c,{margin:"spacing.4",children:"Payment Links"}),e.jsx(i,{...p}),e.jsxs(S,{margin:"spacing.4",children:[e.jsx(o,{children:"Share payment link via:"}),e.jsxs(b,{children:[e.jsx(m,{children:"Email"}),e.jsx(m,{children:"SMS"}),e.jsx(m,{children:"Messenger"})]})]})]})})}),a=M.bind({});a.storyName="Default";const E=()=>e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(c,{marginBottom:"spacing.2",children:"Payment Links"}),e.jsx(i,{}),e.jsx(o,{marginTop:"spacing.3",children:"Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately. Accepting payments from customers is now just a link away."})]})}),t=E.bind({});t.storyName="Horizontal";const I=()=>e.jsx(d,{children:e.jsx(l,{children:e.jsxs(n,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",height:"50px",children:[e.jsx(n,{display:"flex",flex:1,children:e.jsx(x,{variant:"secondary",marginRight:"spacing.4",isFullWidth:!0,children:"Sign up"})}),e.jsx(i,{orientation:"vertical"}),e.jsx(n,{display:"flex",flex:1,children:e.jsx(x,{variant:"primary",marginLeft:"spacing.4",isFullWidth:!0,children:"Login"})})]})})}),r=I.bind({});r.storyName="Vertical";const z=()=>e.jsx(d,{children:e.jsx(l,{children:e.jsxs(n,{display:"flex",flexDirection:"column",children:[e.jsx(c,{marginBottom:"spacing.4",children:"Explore multiple payment options"}),e.jsx(i,{}),e.jsxs(n,{display:"flex",gap:"spacing.6",flexDirection:"row",children:[e.jsx(n,{flex:1,children:e.jsx(o,{margin:"spacing.4",children:"Accept payments with a custom-branded online store using Payment Pages. Accept international and domestic payments with automated payment receipts. Take your store online instantly with zero coding."})}),e.jsx(i,{orientation:"vertical"}),e.jsx(n,{flex:1,children:e.jsx(o,{margin:"spacing.4",children:"Create payment links which can be shared via an email, SMS, messenger, chatbot etc. and get paid immediately. Accepting payments from customers is now just a link away."})}),e.jsx(i,{orientation:"vertical"}),e.jsx(n,{flex:1,children:e.jsx(o,{margin:"spacing.4",children:"Accept one time and subscription payments on your website in less than 5 minutes. Thousands of NGOs, SMEs, and freelancers are collecting payments by adding a payment button to their website on their own."})})]})]})})}),s=z.bind({});s.storyName="Divider with Text columns";var g,y,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <Card>
      <CardBody>
        <BaseBox display="flex" flexDirection={args.orientation == 'vertical' ? 'row' : 'column'}>
          <Heading margin="spacing.4">Payment Links</Heading>
          <DividerComponent {...args} />
          <Box margin="spacing.4">
            <Text>Share payment link via:</Text>
            <List>
              <ListItem>Email</ListItem>
              <ListItem>SMS</ListItem>
              <ListItem>Messenger</ListItem>
            </List>
          </Box>
        </BaseBox>
      </CardBody>
    </Card>;
}`,...(u=(y=a.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var h,B,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Card>
      <CardBody>
        <Heading marginBottom="spacing.2">Payment Links</Heading>
        <DividerComponent />
        <Text marginTop="spacing.3">
          Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately.
          Accepting payments from customers is now just a link away.
        </Text>
      </CardBody>
    </Card>;
}`,...(f=(B=t.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var v,j,D;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Card>
      <CardBody>
        <BaseBox display="flex" alignItems="center" justifyContent="center" flexDirection="row" height="50px">
          <BaseBox display="flex" flex={1}>
            <Button variant="secondary" marginRight="spacing.4" isFullWidth>
              Sign up
            </Button>
          </BaseBox>
          <DividerComponent orientation="vertical" />
          <BaseBox display="flex" flex={1}>
            <Button variant="primary" marginLeft="spacing.4" isFullWidth>
              Login
            </Button>
          </BaseBox>
        </BaseBox>
      </CardBody>
    </Card>;
}`,...(D=(j=r.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var T,w,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Card>
      <CardBody>
        <BaseBox display="flex" flexDirection="column">
          <Heading marginBottom="spacing.4">Explore multiple payment options</Heading>
          <DividerComponent />
          <BaseBox display="flex" gap="spacing.6" flexDirection="row">
            <BaseBox flex={1}>
              <Text margin="spacing.4">
                Accept payments with a custom-branded online store using Payment Pages. Accept
                international and domestic payments with automated payment receipts. Take your store
                online instantly with zero coding.
              </Text>
            </BaseBox>
            <DividerComponent orientation="vertical" />
            <BaseBox flex={1}>
              <Text margin="spacing.4">
                Create payment links which can be shared via an email, SMS, messenger, chatbot etc.
                and get paid immediately. Accepting payments from customers is now just a link away.
              </Text>
            </BaseBox>
            <DividerComponent orientation="vertical" />
            <BaseBox flex={1}>
              <Text margin="spacing.4">
                Accept one time and subscription payments on your website in less than 5 minutes.
                Thousands of NGOs, SMEs, and freelancers are collecting payments by adding a payment
                button to their website on their own.
              </Text>
            </BaseBox>
          </BaseBox>
        </BaseBox>
      </CardBody>
    </Card>;
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const N=["Divider","DividerHorizontal","DividerVertical","DividerWithText"],V=Object.freeze(Object.defineProperty({__proto__:null,Divider:a,DividerHorizontal:t,DividerVertical:r,DividerWithText:s,__namedExportsOrder:N,default:P},Symbol.toStringTag,{value:"Module"}));export{V as d};
