import{a5 as i,j as e,x as t,T as g,X as V}from"./iframe-C1qQ09LF.js";import{S as X}from"./Sandbox.web-B2xP21Qp.js";import{S as Z}from"./StoryPageWrapper-CS0_5maI.js";import{g as K}from"./storybookArgTypes-DFfQV31s.js";const $=()=>e.jsxs(Z,{componentName:"Alert",componentDescription:"Alerts are messages that communicate information to users about any significant changes or explanations inside the system in a prominent way.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=6824-100&t=G19TEPr7l1vIpcWY-1&scaling=min-zoom&page-id=6824%3A0&mode=design",children:[e.jsx(V,{children:"Usage"}),e.jsx(X,{editorHeight:500,children:`
        import { Alert } from '@greenloom/ui/components';

        function App() {
          return (
            <Alert
              title="Alert Title"
              description="Add your description message here"
              marginTop="spacing.4"
              actions={{
                primary: {
                  onClick: () => {
                    alert('Alert from the alert hehe');
                  },
                  text: 'Primary Action',
                },
                secondary: {
                  href: 'https://greenloom.ai',
                  target: '_blank',
                  text: 'Go to Green Loom.com',
                },
              }}
            />
          );
        }
        
        export default App;        
        `})]}),ee={title:"Components/Alert",component:i,args:{title:"International Payments Only",description:"Currently you can only accept payments in international currencies using PayPal. You cannot accept payments in INR (₹) using PayPal.",isFullWidth:!1,isDismissible:!0,emphasis:"subtle",color:"information",actions:{primary:{text:"Primary Action",onClick:()=>{console.log("Primary action clicked")}},secondary:{text:"Link",onClick:()=>{console.log("Secondary action clicked")},href:"https://greenloom.ai",target:"_blank"}}},tags:["autodocs"],argTypes:{...K(),onDismiss:{action:"Dismissed"}},parameters:{docs:{page:$}}},u=({...o})=>e.jsx(i,{...o}),h=u.bind({}),r=u.bind({});r.args={emphasis:"intense",color:"notice"};r.parameters={docs:{description:{story:"A high emphasis Alert for more prominent look"}}};const s=u.bind({});s.args={actions:void 0};s.parameters={docs:{description:{story:"Alert can also be used without any actions"}}};const n=u.bind({});n.args={isDismissible:!1};n.parameters={docs:{description:{story:"Alert can be made non dismissable"}}};const a=u.bind({});a.args={description:"The payment was made 6 months ago, therefore you can’t issue refund to this merchant.",color:"information",actions:void 0,title:void 0};a.parameters={docs:{description:{story:"Sometimes a description is enough to set the required context"}}};const l=u.bind({});l.args={description:"There was some internal error while fetching the merchants list, this might also be due to the poor internet connection.",color:"negative",actions:{primary:{text:"Try Refetching",onClick:()=>{console.log("Refetch")}}},title:"Unable to fetch merchants"};l.parameters={docs:{description:{story:"Just a primary action can be enough in some cases"}}};const c=({...o})=>e.jsx(t,{height:"200px",position:"relative",children:e.jsx(t,{position:"absolute",width:"100%",children:e.jsx(i,{...o})})});c.args={description:"Currently you can only accept payments in international currencies using PayPal.",color:"notice",actions:void 0,title:void 0,isFullWidth:!0};c.parameters={docs:{description:{story:"A full width Alert can be used to span the entire width of its container. It also makes the Alert borderless and can be used for full-bleed layouts. You can also wrap the alert and adjust layout with absolute positioning if needed."}}};const p=({...o})=>e.jsx(t,{height:"200px",position:"relative",children:e.jsx(t,{position:"absolute",width:"100%",children:e.jsx(i,{...o})})});p.args={description:"Currently you can only accept payments in international currencies using PayPal.",color:"negative",isFullWidth:!0};p.parameters={docs:{description:{story:"A full width Alert with `actions` will render them inline if there is enough space and responsively wrap them to the next line in smaller displays."}}};const te=[{label:"Positive",color:"positive"},{label:"Negative",color:"negative"},{label:"Notice",color:"notice"},{label:"Information",color:"information"},{label:"Neutral",color:"neutral"},{label:"Primary",color:"primary"}],y=({isFullWidth:o})=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.6",children:[e.jsxs(t,{display:"grid",gridTemplateColumns:{base:"1fr",m:"1fr 1fr"},gap:"spacing.4",width:"100%",children:[e.jsx(t,{children:e.jsx(g,{size:"small",weight:"semibold",color:"surface.text.gray.subtle",children:"Subtle"})}),e.jsx(t,{children:e.jsx(g,{size:"small",weight:"semibold",color:"surface.text.gray.subtle",children:"Intense"})})]}),te.map(({label:Q,color:x})=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(g,{size:"small",weight:"semibold",color:"surface.text.gray.subtle",children:Q}),e.jsxs(t,{display:"grid",gridTemplateColumns:{base:"1fr",m:"1fr 1fr"},gap:"spacing.4",width:"100%",children:[e.jsx(t,{children:e.jsx(i,{title:"Alert Title",description:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.",color:x,actions:{primary:{text:"Button",onClick:()=>{console.log("Primary action clicked")}},secondary:{text:"Link",href:"https://greenloom.ai",target:"_blank"}},isFullWidth:o})}),e.jsx(t,{children:e.jsx(i,{title:"Alert Title",description:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.",color:x,emphasis:"intense",actions:{primary:{text:"Button",onClick:()=>{console.log("Primary action clicked")}},secondary:{text:"Link",href:"https://greenloom.ai",target:"_blank"}},isFullWidth:o})})]})]},x))]}),d=()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.8",children:[e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(g,{size:"medium",weight:"semibold",color:"surface.text.gray.subtle",children:"Default Width"}),y({isFullWidth:!1})]}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsx(g,{size:"medium",weight:"semibold",color:"surface.text.gray.subtle",children:"Full Width"}),y({isFullWidth:!0})]})]});d.parameters={docs:{description:{story:"A visual grid to compare Alert intents across subtle and intense emphasis, for both default width and full width layouts."}}};const m=()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.6",children:[e.jsx(i,{title:"Alert Title",description:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.",actions:{primary:{text:"Button",onClick:()=>{console.log("Primary action clicked")}},secondary:{text:"Link",href:"https://greenloom.ai",target:"_blank"}},color:"positive"}),e.jsx(i,{description:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.",actions:{primary:{text:"Button",onClick:()=>{console.log("Primary action clicked")}},secondary:{text:"Link",href:"https://greenloom.ai",target:"_blank"}},color:"positive"}),e.jsx(i,{description:"This is a placeholder text",actions:void 0,color:"positive"}),e.jsx(i,{description:"This is a placeholder text",actions:void 0,color:"positive"}),e.jsx(i,{description:"This is a placeholder text",actions:void 0,color:"positive"}),e.jsx(i,{description:"This is a placeholder text",actions:void 0,color:"positive"}),e.jsx(i,{description:"This is a placeholder text",actions:void 0,color:"positive"}),e.jsx(i,{title:"Alert Title",description:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.",actions:{primary:{text:"Button",onClick:()=>{console.log("Primary action clicked")}},secondary:{text:"Link",href:"https://greenloom.ai",target:"_blank"}},color:"positive"}),e.jsx(i,{description:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.",actions:{primary:{text:"Button",onClick:()=>{console.log("Primary action clicked")}},secondary:{text:"Link",href:"https://greenloom.ai",target:"_blank"}},color:"positive"})]});m.parameters={docs:{description:{story:"A subtle information alert stack to showcase compact layouts and repeated messaging."}}};var f,b,A;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`({
  ...args
}) => {
  return <AlertComponent {...args} />;
}`,...(A=(b=h.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var k,B,j;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`({
  ...args
}) => {
  return <AlertComponent {...args} />;
}`,...(j=(B=r.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var v,C,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`({
  ...args
}) => {
  return <AlertComponent {...args} />;
}`,...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var w,P,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`({
  ...args
}) => {
  return <AlertComponent {...args} />;
}`,...(S=(P=n.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var D,L,W;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`({
  ...args
}) => {
  return <AlertComponent {...args} />;
}`,...(W=(L=a.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var _,F,z;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`({
  ...args
}) => {
  return <AlertComponent {...args} />;
}`,...(z=(F=l.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var O,N,G;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`({
  ...args
}) => {
  return <BaseBox height="200px" position="relative">
      <BaseBox position="absolute" width="100%">
        <AlertComponent {...args} />
      </BaseBox>
    </BaseBox>;
}`,...(G=(N=c.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var I,E,R;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`({
  ...args
}) => {
  return <BaseBox height="200px" position="relative">
      <BaseBox position="absolute" width="100%">
        <AlertComponent {...args} />
      </BaseBox>
    </BaseBox>;
}`,...(R=(E=p.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var U,H,Y;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <BaseBox display="flex" flexDirection="column" gap="spacing.8">
      <BaseBox display="flex" flexDirection="column" gap="spacing.4">
        <Text size="medium" weight="semibold" color="surface.text.gray.subtle">
          Default Width
        </Text>
        {renderAlertGrid({
        isFullWidth: false
      })}
      </BaseBox>
      <BaseBox display="flex" flexDirection="column" gap="spacing.4">
        <Text size="medium" weight="semibold" color="surface.text.gray.subtle">
          Full Width
        </Text>
        {renderAlertGrid({
        isFullWidth: true
      })}
      </BaseBox>
    </BaseBox>;
}`,...(Y=(H=d.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var q,J,M;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <BaseBox display="flex" flexDirection="column" gap="spacing.6">
      <AlertComponent title="Alert Title" description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries." actions={{
      primary: {
        text: 'Button',
        onClick: () => {
          console.log('Primary action clicked');
        }
      },
      secondary: {
        text: 'Link',
        href: 'https://greenloom.ai',
        target: '_blank'
      }
    }} color="positive" />
      <AlertComponent description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries." actions={{
      primary: {
        text: 'Button',
        onClick: () => {
          console.log('Primary action clicked');
        }
      },
      secondary: {
        text: 'Link',
        href: 'https://greenloom.ai',
        target: '_blank'
      }
    }} color="positive" />
      <AlertComponent description="This is a placeholder text" actions={undefined} color="positive" />
      <AlertComponent description="This is a placeholder text" actions={undefined} color="positive" />
      <AlertComponent description="This is a placeholder text" actions={undefined} color="positive" />
      <AlertComponent description="This is a placeholder text" actions={undefined} color="positive" />
      <AlertComponent description="This is a placeholder text" actions={undefined} color="positive" />
      <AlertComponent title="Alert Title" description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries." actions={{
      primary: {
        text: 'Button',
        onClick: () => {
          console.log('Primary action clicked');
        }
      },
      secondary: {
        text: 'Link',
        href: 'https://greenloom.ai',
        target: '_blank'
      }
    }} color="positive" />
      <AlertComponent description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries." actions={{
      primary: {
        text: 'Button',
        onClick: () => {
          console.log('Primary action clicked');
        }
      },
      secondary: {
        text: 'Link',
        href: 'https://greenloom.ai',
        target: '_blank'
      }
    }} color="positive" />
    </BaseBox>;
}`,...(M=(J=m.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};const ie=["Default","HighEmphasis","WithoutActions","NonDismissable","DescriptionOnly","PrimaryActionOnly","FullWidth","FullWidthWithActions","Showcase","SubtleStack"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:h,DescriptionOnly:a,FullWidth:c,FullWidthWithActions:p,HighEmphasis:r,NonDismissable:n,PrimaryActionOnly:l,Showcase:d,SubtleStack:m,WithoutActions:s,__namedExportsOrder:ie,default:ee},Symbol.toStringTag,{value:"Module"}));export{ae as a};
