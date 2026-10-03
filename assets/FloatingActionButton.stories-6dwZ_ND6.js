import{bb as S,jq as t,j as o,B as i,T as I,K as m,ef as p,X as E,a5 as L}from"./iframe-C1qQ09LF.js";import{S as R}from"./Sandbox.web-B2xP21Qp.js";import{S as T}from"./StoryPageWrapper-CS0_5maI.js";import{g as k}from"./storybookArgTypes-DFfQV31s.js";const V=()=>o.jsxs(T,{componentName:"FloatingActionButton",componentDescription:"A persistent, elevated button anchored to the bottom of the viewport, used for the single most important action on a screen. Use it for one action only — it is not a replacement for Button.",figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=125809-2463",children:[o.jsx(E,{children:"Usage"}),o.jsx(L,{color:"information",title:"Positioning",description:"FloatingActionButton anchors itself to the viewport, so it does not need a wrapper to position it. On React Native it is absolutely positioned and automatically clears the bottom safe area, so mount it inside a parent that fills the screen. The stories below are pinned inside a demo surface so they stay next to their labels.",isFullWidth:!0,isDismissible:!1}),o.jsx(R,{children:`
          import { FloatingActionButton, PlusIcon } from '@greenloom/ui/components';

          function App() {
            return (
              <FloatingActionButton
                icon={PlusIcon}
                onClick={() => console.log('Create payment')}
              >
                Create payment
              </FloatingActionButton>
            )
          }

          export default App;
        `})]}),O={title:"Components/FloatingActionButton",component:t,tags:["autodocs"],argTypes:{...k(),icon:{control:{disable:!0}}},args:{icon:S,children:"Create payment"},parameters:{docs:{page:V}}},l={position:"relative",top:"spacing.0",right:"spacing.0",bottom:"spacing.0",left:"spacing.0"},P=({children:e})=>o.jsx(i,{height:"160px",borderRadius:"medium",backgroundColor:"surface.background.gray.moderate",overflow:"hidden",position:"relative",children:e}),v=e=>o.jsx(P,{children:o.jsx(t,{...e,position:"absolute"})}),a=v.bind({});a.storyName="Default";const n=v.bind({});n.storyName="Icon Only";n.args={children:void 0,accessibilityLabel:"Create payment"};const s=()=>o.jsx(i,{display:"flex",flexDirection:"column",gap:"spacing.5",children:["primary","white","neutral"].map(e=>o.jsxs(i,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[o.jsx(I,{weight:"semibold",children:e}),o.jsxs(i,{padding:"spacing.5",borderRadius:"medium",backgroundColor:e==="white"?"surface.background.primary.intense":"surface.background.gray.moderate",display:"flex",flexDirection:"row",gap:"spacing.5",alignItems:"center",children:[o.jsx(t,{icon:m,color:e,...l,children:"Edit invoice"}),o.jsx(t,{icon:m,color:e,accessibilityLabel:"Edit invoice",...l})]})]},e))}),r=()=>o.jsxs(i,{display:"flex",flexDirection:"row",gap:"spacing.5",alignItems:"center",flexWrap:"wrap",children:[o.jsx(t,{icon:p,...l,children:"Default"}),o.jsx(t,{icon:p,isLoading:!0,...l,children:"Loading"}),o.jsx(t,{icon:p,isDisabled:!0,...l,children:"Disabled"})]}),c=()=>o.jsx(i,{display:"flex",flexDirection:"column",gap:"spacing.5",children:["bottom-start","bottom","bottom-end"].map(e=>o.jsxs(i,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[o.jsx(I,{weight:"semibold",children:e}),o.jsx(P,{children:o.jsx(t,{icon:S,placement:e,accessibilityLabel:"Create payment",position:"absolute"})})]},e))});var d,g,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => <DemoViewport>
    <FloatingActionButtonComponent {...args} position="absolute" />
  </DemoViewport>`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,f,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => <DemoViewport>
    <FloatingActionButtonComponent {...args} position="absolute" />
  </DemoViewport>`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,h,B;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`(): React.ReactElement => <Box display="flex" flexDirection="column" gap="spacing.5">
    {(['primary', 'white', 'neutral'] as const).map(color => <Box key={color} display="flex" flexDirection="column" gap="spacing.3">
        <Text weight="semibold">{color}</Text>
        <Box padding="spacing.5" borderRadius="medium" backgroundColor={color === 'white' ? 'surface.background.primary.intense' : 'surface.background.gray.moderate'} display="flex" flexDirection="row" gap="spacing.5" alignItems="center">
          <FloatingActionButtonComponent icon={EditIcon} color={color} {...inlineDemoProps}>
            Edit invoice
          </FloatingActionButtonComponent>
          <FloatingActionButtonComponent icon={EditIcon} color={color} accessibilityLabel="Edit invoice" {...inlineDemoProps} />
        </Box>
      </Box>)}
  </Box>`,...(B=(h=s.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var D,w,j;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`(): React.ReactElement => <Box display="flex" flexDirection="row" gap="spacing.5" alignItems="center" flexWrap="wrap">
    <FloatingActionButtonComponent icon={MessageSquareIcon} {...inlineDemoProps}>
      Default
    </FloatingActionButtonComponent>
    <FloatingActionButtonComponent icon={MessageSquareIcon} isLoading {...inlineDemoProps}>
      Loading
    </FloatingActionButtonComponent>
    <FloatingActionButtonComponent icon={MessageSquareIcon} isDisabled {...inlineDemoProps}>
      Disabled
    </FloatingActionButtonComponent>
  </Box>`,...(j=(w=r.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var A,C,F;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`(): React.ReactElement => <Box display="flex" flexDirection="column" gap="spacing.5">
    {(['bottom-start', 'bottom', 'bottom-end'] as const).map(placement => <Box key={placement} display="flex" flexDirection="column" gap="spacing.3">
        <Text weight="semibold">{placement}</Text>
        <DemoViewport>
          <FloatingActionButtonComponent icon={PlusIcon} placement={placement} accessibilityLabel="Create payment" position="absolute" />
        </DemoViewport>
      </Box>)}
  </Box>`,...(F=(C=c.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const _=["Default","IconOnly","Colors","States","Placement"],W=Object.freeze(Object.defineProperty({__proto__:null,Colors:s,Default:a,IconOnly:n,Placement:c,States:r,__namedExportsOrder:_,default:O},Symbol.toStringTag,{value:"Module"}));export{W as f};
