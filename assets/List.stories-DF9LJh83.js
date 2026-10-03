import{L as i,j as e,X as E,f as t,x as a,H as x,k6 as j,gO as Z,g as o,h as g}from"./iframe-C1qQ09LF.js";import{i as v}from"./iconMap-BGYDFM5U.js";import{S as V}from"./Sandbox.web-B2xP21Qp.js";import{S as X}from"./StoryPageWrapper-CS0_5maI.js";import{g as q}from"./storybookArgTypes-DFfQV31s.js";const u=s=>s.charAt(0).toUpperCase()+s.slice(1),p=["small","medium","large"],J=()=>e.jsxs(X,{componentDescription:"List displays a set of related items that are composed of text/links.",componentName:"List",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74881-74522&t=8BTDBesZFpcSIj8v-1&scaling=min-zoom&page-id=22049%3A455845&mode=design",children:[e.jsx(E,{children:"Usage"}),e.jsx(V,{children:`
          import { List, ListItem } from '@greenloom/ui/components';

          function App() {
            return (
              <List>
                <ListItem>
                  Level 1
                  <List>
                    <ListItem>
                      Level 2
                      <List>
                        <ListItem>
                          Level 3
                        </ListItem>
                      </List>
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            )
          }

          export default App;
        `})]}),K={title:"Components/List",component:i,args:{size:"large",variant:"unordered"},tags:["autodocs"],argTypes:{icon:{name:"icon",options:Object.keys(v),mapping:v},...q()},parameters:{docs:{page:J}}},$=({...s})=>e.jsxs(i,{variant:"unordered",...s,children:[e.jsxs(t,{children:["Debit Card",e.jsx(i,{variant:"unordered",...s,children:e.jsxs(t,{children:["HDFC",e.jsxs(i,{variant:"unordered",...s,children:[e.jsx(t,{children:"Domestic"}),e.jsx(t,{children:"International"})]})]})})]}),e.jsxs(t,{children:["Credit Card",e.jsx(i,{variant:"unordered",...s,children:e.jsxs(t,{children:["ICICI",e.jsxs(i,{variant:"unordered",...s,children:[e.jsx(t,{children:"Domestic"}),e.jsx(t,{children:"International"})]})]})})]}),e.jsxs(t,{children:["Netbanking",e.jsxs(i,{variant:"unordered",...s,children:[e.jsx(t,{children:"HDFC"}),e.jsx(t,{children:"ICICI"})]})]})]}),d=$.bind({});d.storyName="Default";d.args={};const ee=()=>e.jsxs(i,{variant:"ordered",children:[e.jsxs(t,{children:["Debit Card",e.jsx(i,{variant:"unordered",children:e.jsxs(t,{children:["HDFC",e.jsxs(i,{variant:"ordered",children:[e.jsx(t,{children:"Domestic"}),e.jsx(t,{children:"International"})]})]})})]}),e.jsxs(t,{children:["Credit Card",e.jsx(i,{variant:"unordered",children:e.jsxs(t,{children:["ICICI",e.jsxs(i,{variant:"ordered",children:[e.jsx(t,{children:"Domestic"}),e.jsx(t,{children:"International"})]})]})})]}),e.jsxs(t,{children:["Netbanking",e.jsxs(i,{variant:"unordered",children:[e.jsx(t,{children:"HDFC"}),e.jsx(t,{children:"ICICI"})]})]})]}),m=ee.bind({});m.storyName="Unordered & Ordered Mix";const Q=({...s})=>e.jsx(a,{children:p.map(h=>e.jsxs(a,{children:[e.jsxs(x,{children:[u(h)," Size:"]}),e.jsx(i,{...s,size:h,children:e.jsxs(t,{children:["Level 1",e.jsx(i,{...s,size:h,children:e.jsxs(t,{children:["Level 2",e.jsx(i,{...s,size:h,children:e.jsx(t,{children:"Level 3"})})]})})]})})]},h))}),n=Q.bind({});n.storyName="Unordered - Sizes";n.parameters={controls:{disable:!0}};n.args={variant:"unordered"};const r=Q.bind({});r.storyName="Ordered - Sizes";r.parameters={controls:{disable:!0}};r.args={variant:"ordered"};const te=()=>e.jsx(a,{children:p.map(s=>e.jsxs(a,{children:[e.jsxs(x,{children:[u(s)," Size:"]}),e.jsxs(i,{variant:"ordered-filled",size:s,children:[e.jsxs(t,{children:[e.jsx(o,{children:"Build Integration:"})," Use the sample codes to integrate the Green Loom Web Standard Checkout on your website."]}),e.jsxs(t,{children:[e.jsx(o,{children:"Test Integration:"})," Test the integration to ensure it was successful."]}),e.jsxs(t,{children:[e.jsx(o,{children:"Go-live Checklist:"})," Check the go-live checklist before taking the integration live."]})]})]},s))}),c=te.bind({});c.storyName="OrderedFilled - Sizes";const se=()=>e.jsxs(i,{variant:"unordered",icon:Z,iconColor:"interactive.icon.staticWhite.subtle",children:[e.jsx(t,{children:e.jsx(o,{children:"Troubleshooting and FAQs"})}),e.jsx(t,{children:e.jsx(o,{children:"Payment Methods"})}),e.jsx(t,{children:e.jsx(o,{children:"International Currency Support"})}),e.jsx(t,{children:e.jsx(o,{children:"Bank Downtime"})})]}),L=se.bind({});L.storyName="Link & Icon";const ie=()=>e.jsx(a,{children:p.map(s=>e.jsxs(a,{children:[e.jsxs(x,{children:[u(s)," Size:"]}),e.jsxs(i,{variant:"ordered",size:s,children:[e.jsxs(t,{children:["Bump blade version to ",e.jsx(j,{children:"v6.0.0"})]}),e.jsxs(t,{children:["Run ",e.jsx(j,{children:"yarn install"})]}),e.jsxs(t,{children:["Run ",e.jsx(j,{children:"yarn start"})]})]})]},s))}),l=ie.bind({});l.storyName="With Inline Code";const ne=()=>e.jsx(a,{children:p.map(s=>e.jsxs(a,{children:[e.jsxs(x,{children:[u(s)," Size:"]}),e.jsxs(i,{variant:"ordered",size:s,children:[e.jsx(t,{children:e.jsxs(g,{children:["You will receive an invoice after a",e.jsx(g,{as:"span",weight:"semibold",color:"feedback.text.positive.intense",children:" successful "}),"payment"]})}),e.jsxs(t,{children:["You will receive a mail with further instruction after a",e.jsx(g,{as:"span",weight:"semibold",color:"feedback.text.negative.intense",children:" failed "})," ","payment"]})]})]},s))}),I=ne.bind({});I.storyName="With ListItemText";var C,z,B;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`({
  ...args
}) => {
  return <List variant="unordered" {...args}>
      <ListItem>
        Debit Card
        <List variant="unordered" {...args}>
          <ListItem>
            HDFC
            <List variant="unordered" {...args}>
              <ListItem>Domestic</ListItem>
              <ListItem>International</ListItem>
            </List>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Credit Card
        <List variant="unordered" {...args}>
          <ListItem>
            ICICI
            <List variant="unordered" {...args}>
              <ListItem>Domestic</ListItem>
              <ListItem>International</ListItem>
            </List>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Netbanking
        <List variant="unordered" {...args}>
          <ListItem>HDFC</ListItem>
          <ListItem>ICICI</ListItem>
        </List>
      </ListItem>
    </List>;
}`,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var k,S,b;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <List variant="ordered">
      <ListItem>
        Debit Card
        <List variant="unordered">
          <ListItem>
            HDFC
            <List variant="ordered">
              <ListItem>Domestic</ListItem>
              <ListItem>International</ListItem>
            </List>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Credit Card
        <List variant="unordered">
          <ListItem>
            ICICI
            <List variant="ordered">
              <ListItem>Domestic</ListItem>
              <ListItem>International</ListItem>
            </List>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Netbanking
        <List variant="unordered">
          <ListItem>HDFC</ListItem>
          <ListItem>ICICI</ListItem>
        </List>
      </ListItem>
    </List>;
}`,...(b=(S=m.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var f,y,D;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`({
  ...args
}) => {
  return <BaseBox>
      {listSizes.map(size => <BaseBox key={size}>
          <Heading>{capitalize(size)} Size:</Heading>
          <List {...args} size={size}>
            <ListItem>
              Level 1
              <List {...args} size={size}>
                <ListItem>
                  Level 2
                  <List {...args} size={size}>
                    <ListItem>Level 3</ListItem>
                  </List>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </BaseBox>)}
    </BaseBox>;
}`,...(D=(y=n.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var T,W,H;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`({
  ...args
}) => {
  return <BaseBox>
      {listSizes.map(size => <BaseBox key={size}>
          <Heading>{capitalize(size)} Size:</Heading>
          <List {...args} size={size}>
            <ListItem>
              Level 1
              <List {...args} size={size}>
                <ListItem>
                  Level 2
                  <List {...args} size={size}>
                    <ListItem>Level 3</ListItem>
                  </List>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </BaseBox>)}
    </BaseBox>;
}`,...(H=(W=r.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var w,N,F;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <BaseBox>
      {listSizes.map(size => <BaseBox key={size}>
          <Heading>{capitalize(size)} Size:</Heading>
          <List variant="ordered-filled" size={size}>
            <ListItem>
              <ListItemLink>Build Integration:</ListItemLink> Use the sample codes to integrate the
              Green Loom Web Standard Checkout on your website.
            </ListItem>
            <ListItem>
              <ListItemLink>Test Integration:</ListItemLink> Test the integration to ensure it was
              successful.
            </ListItem>
            <ListItem>
              <ListItemLink>Go-live Checklist:</ListItemLink> Check the go-live checklist before
              taking the integration live.
            </ListItem>
          </List>
        </BaseBox>)}
    </BaseBox>;
}`,...(F=(N=c.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var O,A,U;L.parameters={...L.parameters,docs:{...(O=L.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <List variant="unordered" icon={BookmarkIcon} iconColor="interactive.icon.staticWhite.subtle">
      <ListItem>
        <ListItemLink>Troubleshooting and FAQs</ListItemLink>
      </ListItem>
      <ListItem>
        <ListItemLink>Payment Methods</ListItemLink>
      </ListItem>
      <ListItem>
        <ListItemLink>International Currency Support</ListItemLink>
      </ListItem>
      <ListItem>
        <ListItemLink>Bank Downtime</ListItemLink>
      </ListItem>
    </List>;
}`,...(U=(A=L.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var M,_,P;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <BaseBox>
      {listSizes.map(size => <BaseBox key={size}>
          <Heading>{capitalize(size)} Size:</Heading>
          <List variant="ordered" size={size}>
            <ListItem>
              Bump blade version to <ListItemCode>v6.0.0</ListItemCode>
            </ListItem>
            <ListItem>
              Run <ListItemCode>yarn install</ListItemCode>
            </ListItem>

            <ListItem>
              Run <ListItemCode>yarn start</ListItemCode>
            </ListItem>
          </List>
        </BaseBox>)}
    </BaseBox>;
}`,...(P=(_=l.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var R,G,Y;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <BaseBox>
      {listSizes.map(size => <BaseBox key={size}>
          <Heading>{capitalize(size)} Size:</Heading>
          <List variant="ordered" size={size}>
            <ListItem>
              <ListItemText>
                You will receive an invoice after a
                <ListItemText as="span" weight="semibold" color="feedback.text.positive.intense">
                  {' successful '}
                </ListItemText>
                payment
              </ListItemText>
            </ListItem>
            <ListItem>
              You will receive a mail with further instruction after a
              <ListItemText as="span" weight="semibold" color="feedback.text.negative.intense">
                {' failed '}
              </ListItemText>{' '}
              payment
            </ListItem>
          </List>
        </BaseBox>)}
    </BaseBox>;
}`,...(Y=(G=I.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};const re=["Default","ListMixNested","UnorderedListWithSizes","OrderedListWithSizes","OrderedFilledListWithSizes","ListWithLinkAndIcon","ListWithCodeAndIcon","ListWithListItemText"],Le=Object.freeze(Object.defineProperty({__proto__:null,Default:d,ListMixNested:m,ListWithCodeAndIcon:l,ListWithLinkAndIcon:L,ListWithListItemText:I,OrderedFilledListWithSizes:c,OrderedListWithSizes:r,UnorderedListWithSizes:n,__namedExportsOrder:re,default:K},Symbol.toStringTag,{value:"Module"}));export{Le as l};
