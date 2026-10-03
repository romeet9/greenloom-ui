import{T as t,j as e,B as j,y as P,z as I,ib as C,jP as w,X as i}from"./iframe-C1qQ09LF.js";import{S as c}from"./Sandbox.web-B2xP21Qp.js";import{S}from"./StoryPageWrapper-CS0_5maI.js";import{g as A}from"./storybookArgTypes-DFfQV31s.js";const D=()=>e.jsxs(S,{componentDescription:"The Text component is used to display main content of the page. It is often clubbed with Title or Heading to display content in a hierarchical structure. It applies responsive styles automatically based on the device it is being rendered on.",componentName:"Text",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Typography/_decisions/decisions.md",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=71123-52773&t=DaKuYvkYnno4qVsq-1&scaling=min-zoom&page-id=3%3A0&mode=design",children:[e.jsx(i,{children:"Usage"}),e.jsx(c,{children:`
          import { Text } from '@greenloom/ui/components';

          function App() {
            return (
              <Text>Lorem Ipsum</Text>
            )
          }

          export default App;
        `}),e.jsx(i,{children:"Dotted Underline"}),e.jsx(c,{children:`
          import {
            Box,
            Popover,
            PopoverInteractiveWrapper,
            Text,
            Tooltip,
            TooltipInteractiveWrapper,
          } from '@greenloom/ui/components';

          function App() {
            return (
              <Box display="flex" gap="spacing.6" alignItems="center">
                <Tooltip content="Acceptance ratio calculated by NPCI">
                  <TooltipInteractiveWrapper>
                    <Text as="span" textDecorationLine="dotted">
                      75.00%
                    </Text>
                  </TooltipInteractiveWrapper>
                </Tooltip>

                <Popover
                  openInteraction="hover"
                  content={
                    <Text size="small">
                      Success rate is calculated from attempted mandates and accepted mandates.
                    </Text>
                  }
                >
                  <PopoverInteractiveWrapper accessibilityLabel="View success rate breakdown">
                    <Text as="span" textDecorationLine="dotted">
                      SR%
                    </Text>
                  </PopoverInteractiveWrapper>
                </Popover>
              </Box>
            )
          }

          export default App;
        `}),e.jsx(t,{children:"Use dotted underline text only when the text reveals additional context. Use it with Tooltip for short explanatory content and Popover for richer contextual breakdowns. Do not use dotted underline for visual emphasis only, and do not use Link unless the text navigates."})]}),L={title:"Components/Typography/Text",component:t,args:{variant:"body",weight:"regular",size:"medium",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",truncateAfterLines:3,as:void 0},parameters:{docs:{page:()=>e.jsx(D,{})}},tags:["autodocs"],argTypes:A()},y=n=>e.jsx(t,{...n,children:n.children}),s=y.bind({}),o=y.bind({});o.args={color:"surface.text.primary.normal"};const q=n=>e.jsxs(t,{...n,as:"p",children:["Power your"," ",e.jsx(t,{...n,color:"surface.text.primary.normal",as:"span",weight:"semibold",children:"finance"}),", grow your"," ",e.jsx(t,{...n,as:"span",weight:"semibold",children:"business"})]}),a=q.bind({});a.args={truncateAfterLines:void 0};const W=()=>e.jsxs(j,{display:"flex",gap:"spacing.6",alignItems:"center",children:[e.jsx(P,{content:"Acceptance ratio calculated by NPCI",children:e.jsx(I,{children:e.jsx(t,{as:"span",textDecorationLine:"dotted",children:"75.00%"})})}),e.jsx(C,{openInteraction:"hover",content:e.jsx(t,{size:"small",children:"Success rate is calculated from attempted mandates and accepted mandates."}),children:e.jsx(w,{accessibilityLabel:"View success rate breakdown",children:e.jsx(t,{as:"span",textDecorationLine:"dotted",children:"SR%"})})})]}),r=W.bind({});r.args={truncateAfterLines:void 0};var p,l,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <TextComponent {...args}>{args.children}</TextComponent>;
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,m,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <TextComponent {...args}>{args.children}</TextComponent>;
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,T,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <TextComponent {...args} as="p">
      Power your{' '}
      <TextComponent {...args} color="surface.text.primary.normal" as="span" weight="semibold">
        finance
      </TextComponent>
      , grow your{' '}
      <TextComponent {...args} as="span" weight="semibold">
        business
      </TextComponent>
    </TextComponent>;
}`,...(v=(T=a.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var h,b,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Box display="flex" gap="spacing.6" alignItems="center">
      <Tooltip content="Acceptance ratio calculated by NPCI">
        <TooltipInteractiveWrapper>
          <TextComponent as="span" textDecorationLine="dotted">
            75.00%
          </TextComponent>
        </TooltipInteractiveWrapper>
      </Tooltip>
      <Popover openInteraction="hover" content={<TextComponent size="small">
            Success rate is calculated from attempted mandates and accepted mandates.
          </TextComponent>}>
        <PopoverInteractiveWrapper accessibilityLabel="View success rate breakdown">
          <TextComponent as="span" textDecorationLine="dotted">
            SR%
          </TextComponent>
        </PopoverInteractiveWrapper>
      </Popover>
    </Box>;
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const N=["Text","WithColor","AsProp","DottedUnderline"],_=Object.freeze(Object.defineProperty({__proto__:null,AsProp:a,DottedUnderline:r,Text:s,WithColor:o,__namedExportsOrder:N,default:L},Symbol.toStringTag,{value:"Module"}));export{_ as t};
