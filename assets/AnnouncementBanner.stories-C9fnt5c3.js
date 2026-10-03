import{$ as A,hT as s,j as e,m as k,s as S,B as y,X as T}from"./iframe-C1qQ09LF.js";import{S as j}from"./Sandbox.web-B2xP21Qp.js";import{S as w}from"./StoryPageWrapper-CS0_5maI.js";import{g as C}from"./storybookArgTypes-DFfQV31s.js";import"./preload-helper-Dp1pzeXC.js";import"./baseCode-DnWYDQ6N.js";import"./Sandbox.web-C7diOxlu.js";import"./componentStatusData-8pChZ-5h.js";const P=()=>e.jsxs(w,{componentName:"AnnouncementBanner",componentDescription:"A slim, full-bleed banner used to surface a single short, system-wide promotional or informational message at the top or bottom edge of a page.",figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=123476-17024",children:[e.jsx(T,{children:"Usage"}),e.jsx(j,{editorHeight:400,children:`
        import { AnnouncementBanner, AnnouncementIcon } from '@greenloom/ui/components';

        function App() {
          // The banner's colour treatment follows the app's colorScheme
          // (set on BladeProvider) — dark app renders the dark banner,
          // light app renders the light banner. No theme prop needed.
          return (
            <AnnouncementBanner icon={AnnouncementIcon} alignment="center">
              Enter promotional text here
            </AnnouncementBanner>
          );
        }

        export default App;
        `})]}),O={title:"Components/AnnouncementBanner",component:s,args:{children:"Enter promotional text here",alignment:"center",icon:A},tags:["autodocs"],argTypes:{...C()},parameters:{docs:{page:P}}},c=({...a})=>e.jsx(s,{...a}),o=c.bind({});o.parameters={docs:{description:{story:"In a light-themed app the banner renders a subtle gray background with dark text. The treatment is driven by the app `colorScheme`, not a prop."}}};const t=({...a})=>e.jsx(k,{themeTokens:S,colorScheme:"dark",children:e.jsx(y,{backgroundColor:"surface.background.gray.subtle",padding:"spacing.6",children:e.jsx(s,{...a})})});t.parameters={docs:{description:{story:"When the app `colorScheme` is `dark` (set on `BladeProvider`), the banner automatically renders the dark treatment — a translucent dark background with light text. No prop is required."}}};const n=c.bind({});n.args={alignment:"left",children:"Switch to the new dashboard experience today."};n.parameters={docs:{description:{story:"Content can be left aligned instead of the default center alignment."}}};const r=c.bind({});r.args={icon:void 0};r.parameters={docs:{description:{story:"Omit the `icon` prop to render the banner without a leading icon."}}};var m,i,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`({
  ...args
}) => {
  return <AnnouncementBannerComponent {...args} />;
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,l,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`({
  ...args
}) => {
  return <BladeProvider themeTokens={bladeTheme} colorScheme="dark">
      <Box backgroundColor="surface.background.gray.subtle" padding="spacing.6">
        <AnnouncementBannerComponent {...args} />
      </Box>
    </BladeProvider>;
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`({
  ...args
}) => {
  return <AnnouncementBannerComponent {...args} />;
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,x,B;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`({
  ...args
}) => {
  return <AnnouncementBannerComponent {...args} />;
}`,...(B=(x=r.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const R=["Default","DarkColorScheme","LeftAligned","WithoutIcon"];export{t as DarkColorScheme,o as Default,n as LeftAligned,r as WithoutIcon,R as __namedExportsOrder,O as default};
