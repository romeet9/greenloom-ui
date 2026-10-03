import{jI as t,j as e,B as s,T as de,ad as B,a9 as ue}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const me={title:"Components/Input/SliderInput",component:t,args:{label:"Volume",labelPosition:"top",min:0,max:100,step:1,showMarkers:!1,showScale:!1,showScaleValues:!0,showValueIndicator:!0,isDisabled:!1},argTypes:{labelPosition:{control:{type:"select"},options:["top","left"]},validationState:{control:{type:"select"},options:["none","error","success"]},necessityIndicator:{control:{type:"select"},options:["none","required","optional"]}}},n=a=>e.jsx(s,{maxWidth:"400px",children:e.jsx(t,{...a})}),h=n.bind({}),d=n.bind({});d.args={step:25,showMarkers:!0,defaultValue:50};const u=n.bind({});u.args={step:25,showMarkers:!0,showScale:!0,defaultValue:50};const p=n.bind({});p.args={labelPosition:"left",step:20,showMarkers:!0,showScale:!0};const x=n.bind({});x.args={isDisabled:!0,defaultValue:40,step:20,showMarkers:!0,showScale:!0};const o=n.bind({});o.args={step:30,showMarkers:!0,showScale:!0,defaultValue:60};const g=()=>e.jsx(s,{display:"flex",flexDirection:"column",gap:"spacing.7",maxWidth:"400px",children:[void 0,33.33,25,10].map((a,m)=>e.jsx(t,{label:a?`${Math.round(100/a)+1} steps`:"Continuous",step:a,showMarkers:!!a,showScale:!!a,defaultValue:50},m))}),f=()=>e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.7",maxWidth:"400px",children:[e.jsx(t,{label:"With help text",helpText:"Drag to adjust the output level"}),e.jsx(t,{label:"With error",validationState:"error",errorText:"Value is too high"}),e.jsx(t,{label:"With success",validationState:"success",successText:"Looks good"})]}),i=()=>e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.7",maxWidth:"400px",children:[e.jsx(t,{label:"Budget",min:0,max:5e3,step:1e3,defaultValue:2e3,showMarkers:!0,showScale:!0,formatValue:a=>`₹${a/1e3}k`}),e.jsx(t,{label:"Discount",min:0,max:100,step:20,defaultValue:40,showMarkers:!0,showScale:!0,formatValue:a=>`${a}%`})]}),l=()=>{const[a,m]=B.useState(8),[b,S]=B.useState("8"),ce=()=>{const r=Number(b),w=Number.isFinite(r)?Math.min(Math.max(r,0),40):a;m(w),S(String(w))};return e.jsxs(s,{display:"flex",alignItems:"center",gap:"spacing.5",maxWidth:"600px",children:[e.jsx(s,{flex:"1",children:e.jsx(t,{label:"Corner Radius",labelPosition:"left",min:0,max:40,step:8,showMarkers:!0,value:a,onChange:({value:r})=>{m(r),S(String(r))}})}),e.jsx(s,{width:"80px",flexShrink:0,children:e.jsx(ue,{accessibilityLabel:"Corner radius in pixels",suffix:"px",size:"small",value:b,onChange:({value:r})=>S(r??""),onBlur:ce})})]})},c=()=>e.jsx(s,{display:"flex",flexDirection:"column",gap:"spacing.7",children:["400px","240px","140px"].map(a=>e.jsxs(s,{width:a,children:[e.jsx(de,{size:"xsmall",marginBottom:"spacing.2",children:a}),e.jsx(t,{label:"Volume",step:10,showMarkers:!0,showScale:!0,defaultValue:50,accessibilityLabel:`Volume at ${a}`})]},a))});var y,v,k;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <Box maxWidth="400px">
      <SliderInput {...args} />
    </Box>;
}`,...(k=(v=h.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var V,W,I;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  return <Box maxWidth="400px">
      <SliderInput {...args} />
    </Box>;
}`,...(I=(W=d.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var j,D,M;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <Box maxWidth="400px">
      <SliderInput {...args} />
    </Box>;
}`,...(M=(D=u.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var T,C,L;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return <Box maxWidth="400px">
      <SliderInput {...args} />
    </Box>;
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var P,R,$;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  return <Box maxWidth="400px">
      <SliderInput {...args} />
    </Box>;
}`,...($=(R=x.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var N,z,F,E,_;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <Box maxWidth="400px">
      <SliderInput {...args} />
    </Box>;
}`,...(F=(z=o.parameters)==null?void 0:z.docs)==null?void 0:F.source},description:{story:"`max` is always reachable even when the range is not a whole number of steps, so this\nslider stops at 0, 30, 60, 90 and 100.",...(_=(E=o.parameters)==null?void 0:E.docs)==null?void 0:_.description}}};var U,q,O;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.7" maxWidth="400px">
      {[undefined, 33.33, 25, 10].map((step, index) => <SliderInput key={index} label={step ? \`\${Math.round(100 / step) + 1} steps\` : 'Continuous'} step={step} showMarkers={Boolean(step)} showScale={Boolean(step)} defaultValue={50} />)}
    </Box>;
}`,...(O=(q=g.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var A,G,H;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.7" maxWidth="400px">
      <SliderInput label="With help text" helpText="Drag to adjust the output level" />
      <SliderInput label="With error" validationState="error" errorText="Value is too high" />
      <SliderInput label="With success" validationState="success" successText="Looks good" />
    </Box>;
}`,...(H=(G=f.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q,X,Y;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:'() => {\n  return <Box display="flex" flexDirection="column" gap="spacing.7" maxWidth="400px">\n      <SliderInput label="Budget" min={0} max={5000} step={1000} defaultValue={2000} showMarkers showScale formatValue={value => `₹${value / 1000}k`} />\n      <SliderInput label="Discount" min={0} max={100} step={20} defaultValue={40} showMarkers showScale formatValue={value => `${value}%`} />\n    </Box>;\n}',...(Q=(K=i.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"`formatValue` is applied everywhere the value is shown: the scale, the indicator above the\nthumb and the value announced to a screen reader.",...(Y=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,ae,te,se;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [radius, setRadius] = React.useState(8);
  const [draft, setDraft] = React.useState('8');
  const commitDraft = (): void => {
    const parsed = Number(draft);
    // Typing 37 against a step of 8 puts the thumb on 40, so the field is reconciled back to
    // the value the slider actually settled on rather than being left disagreeing with it.
    const next = Number.isFinite(parsed) ? Math.min(Math.max(parsed, 0), 40) : radius;
    setRadius(next);
    setDraft(String(next));
  };
  return <Box display="flex" alignItems="center" gap="spacing.5" maxWidth="600px">
      {/* The slider sizes to its content in a flex row, so it has to be told to take the rest. */}
      <Box flex="1">
        <SliderInput label="Corner Radius" labelPosition="left" min={0} max={40} step={8} showMarkers value={radius} onChange={({
        value
      }) => {
        setRadius(value);
        setDraft(String(value));
      }} />
      </Box>
      <Box width="80px" flexShrink={0}>
        <TextInput accessibilityLabel="Corner radius in pixels" suffix="px" size="small" value={draft} onChange={({
        value
      }) => setDraft(value ?? '')} onBlur={commitDraft} />
      </Box>
    </Box>;
}`,...(ae=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:`The slider does not bundle a text field. Pair them by holding the value in your own state
and passing it to both, which keeps you free to decide how the two reconcile.

Note the two callbacks do different jobs: \`onChange\` fires on every pointer move so the
field tracks the drag live, while \`onChangeEnd\` fires once on release and is where
anything expensive belongs.`,...(se=(te=l.parameters)==null?void 0:te.docs)==null?void 0:se.description}}};var re,oe,ne,ie,le;c.parameters={...c.parameters,docs:{...(re=c.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.7">
      {['400px', '240px', '140px'].map(width => <Box key={width} width={width}>
          <Text size="xsmall" marginBottom="spacing.2">
            {width}
          </Text>
          <SliderInput label="Volume" step={10} showMarkers showScale defaultValue={50} accessibilityLabel={\`Volume at \${width}\`} />
        </Box>)}
    </Box>;
}`,...(ne=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:ne.source},description:{story:`Markers and scale labels are dropped independently once they would collide, so a narrow
slider degrades to a plain track instead of rendering a smear of overlapping dots.`,...(le=(ie=c.parameters)==null?void 0:ie.docs)==null?void 0:le.description}}};const he=["Default","WithMarkers","WithScale","LabelPositionLeft","Disabled","UnevenSteps","Steps","ValidationStates","FormattedValue","PairedWithTextInput","NarrowWidths"];export{h as Default,x as Disabled,i as FormattedValue,p as LabelPositionLeft,c as NarrowWidths,l as PairedWithTextInput,g as Steps,o as UnevenSteps,f as ValidationStates,d as WithMarkers,u as WithScale,he as __namedExportsOrder,me as default};
