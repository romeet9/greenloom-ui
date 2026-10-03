import{j4 as i,j as e,X as c,j5 as l,bf as L,bg as z,bh as v,x as n,T as D}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const w=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsx(l,{children:"This is the DotLoader internal component. It is the shared indefinite loading indicator — three dots that lift and settle in a staggered wave. It is not exported publicly; use it from other Loom UI components via `~components/DotLoader`."}),e.jsx("a",{href:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=125319-2211",target:"_blank",rel:"noreferrer noopener",children:"View in Figma"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(c,{children:"Example"}),e.jsx(l,{children:"By default the loader is hidden from assistive tech, on the assumption that the surrounding component announces its own loading state. Pass `accessibilityLabel` when it is the only thing communicating that something is loading."}),e.jsx(L,{}),e.jsx(c,{children:"Properties"}),e.jsx(z,{}),e.jsx(v,{})]}),A={title:"Components/DotLoader (Internal)",component:i,parameters:{docs:{page:w}},tags:["autodocs"]},T=({...s})=>e.jsx(i,{...s}),a=T.bind({});a.storyName="Default";const S=["interactive.icon.gray.muted","interactive.icon.primary.subtle","interactive.icon.positive.subtle","interactive.icon.negative.subtle","interactive.icon.notice.subtle","interactive.icon.information.subtle"],C=()=>e.jsx(n,{display:"flex",flexDirection:"column",gap:"spacing.4",children:S.map(s=>e.jsxs(n,{display:"flex",flexDirection:"row",alignItems:"center",gap:"spacing.4",children:[e.jsx(n,{width:"220px",children:e.jsx(D,{size:"small",color:"surface.text.gray.muted",children:s})}),e.jsx(i,{color:s})]},s))}),r=C.bind({});r.storyName="Colors";const I=["medium","large"],k=()=>e.jsx(n,{display:"flex",flexDirection:"row",alignItems:"center",gap:"spacing.7",children:I.map(s=>e.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"spacing.3",children:[e.jsx(i,{size:s}),e.jsx(D,{size:"small",color:"surface.text.gray.muted",children:s})]},s))}),t=k.bind({});t.storyName="Sizes";t.parameters={docs:{description:{story:'`large` is `medium` scaled 1.5x. `Button` picks it automatically for `size="large"`, whose 48px height makes the default loader read as undersized; every shorter button size keeps `medium`.'}}};const N=()=>e.jsx(i,{accessibilityLabel:"Loading results"}),o=N.bind({});o.storyName="With accessibility label";o.parameters={docs:{description:{story:"When `accessibilityLabel` is passed the loader is exposed as a `status` region. Leave it unset inside components that already announce loading, like `Button`, to avoid duplicate screen reader output."}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
  ...args
}) => {
  return <DotLoaderComponent {...args} />;
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,x,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <BaseBox display="flex" flexDirection="column" gap="spacing.4">
      {colors.map(color => <BaseBox key={color} display="flex" flexDirection="row" alignItems="center" gap="spacing.4">
          <BaseBox width="220px">
            <Text size="small" color="surface.text.gray.muted">
              {color}
            </Text>
          </BaseBox>
          <DotLoaderComponent color={color} />
        </BaseBox>)}
    </BaseBox>;
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,f,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <BaseBox display="flex" flexDirection="row" alignItems="center" gap="spacing.7">
      {sizes.map(size => <BaseBox key={size} display="flex" flexDirection="column" alignItems="center" gap="spacing.3">
          <DotLoaderComponent size={size} />
          <Text size="small" color="surface.text.gray.muted">
            {size}
          </Text>
        </BaseBox>)}
    </BaseBox>;
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,j,B;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <DotLoaderComponent accessibilityLabel="Loading results" />;
}`,...(B=(j=o.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const E=["DotLoader","Colors","Sizes","Announced"];export{o as Announced,r as Colors,a as DotLoader,t as Sizes,E as __namedExportsOrder,A as default};
