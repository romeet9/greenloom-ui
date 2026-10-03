import{j as e,B as u,bc as h,H as p,T as t,C as T,r as m}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const S=(r,i)=>{const s=parseFloat(r),o=parseFloat(i);return isNaN(s)||isNaN(o)||o===0?"0%":`${(s/o*100).toFixed(1)}%`},H=r=>{const i=parseFloat(r);return Math.abs(i- -3.3)<.5?"token: 25":Math.abs(i- -1.3)<.5?"token: 50":Math.abs(i)<.5?"token: 100":""},b=r=>{if(!r)return null;const i=window.getComputedStyle(r),s=i.fontSize,o=i.letterSpacing,a=S(o,s),g=H(a);return{fontSize:s,lineHeight:i.lineHeight,fontWeight:i.fontWeight,letterSpacing:`${o} (${a})${g?` [${g}]`:""}`,fontFamily:i.fontFamily.split(",")[0].replace(/['"]/g,"")}},l={typestyle:500,font:120,size:70,lineHeight:100,weight:70,letterSpacing:220},d=(r,i=!1)=>({width:r,minWidth:r,flexShrink:0,...i&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}),c=({width:r,children:i})=>e.jsx("div",{style:d(r),children:e.jsx(t,{size:"small",children:i})}),n=({children:r})=>{const i=m.useRef(null),[s,o]=m.useState(null),a=m.useRef(null);return m.useEffect(()=>{const g=()=>{var w;const j=(w=i.current)==null?void 0:w.querySelector("h1, h2, h3, h4, h5, h6, p, span, code");j&&o(b(j))},x=()=>{a.current&&cancelAnimationFrame(a.current),a.current=requestAnimationFrame(()=>{a.current=requestAnimationFrame(g)})};return x(),window.addEventListener("resize",x),()=>{a.current&&cancelAnimationFrame(a.current),window.removeEventListener("resize",x)}},[r]),e.jsxs(u,{display:"flex",flexDirection:"row",alignItems:"center",paddingY:"spacing.4",borderBottomWidth:"thin",borderBottomColor:"surface.border.gray.subtle",children:[e.jsx("div",{ref:i,style:d(l.typestyle),children:r}),s&&e.jsxs(e.Fragment,{children:[e.jsx(c,{width:l.font,children:s.fontFamily}),e.jsx(c,{width:l.size,children:s.fontSize}),e.jsx(c,{width:l.lineHeight,children:s.lineHeight}),e.jsx(c,{width:l.weight,children:s.fontWeight}),e.jsx(c,{width:l.letterSpacing,children:s.letterSpacing})]})]})},D=()=>e.jsxs(u,{display:"flex",flexDirection:"row",alignItems:"center",paddingY:"spacing.3",borderBottomWidth:"thin",borderBottomColor:"surface.border.gray.muted",backgroundColor:"surface.background.gray.subtle",children:[e.jsx("div",{style:d(l.typestyle),children:e.jsx(t,{size:"small",weight:"semibold",color:"surface.text.gray.muted",children:"Typestyle"})}),e.jsx("div",{style:d(l.font),children:e.jsx(t,{size:"small",weight:"semibold",color:"surface.text.gray.muted",children:"Font"})}),e.jsx("div",{style:d(l.size),children:e.jsx(t,{size:"small",weight:"semibold",color:"surface.text.gray.muted",children:"Size"})}),e.jsx("div",{style:d(l.lineHeight),children:e.jsx(t,{size:"small",weight:"semibold",color:"surface.text.gray.muted",children:"Line Height"})}),e.jsx("div",{style:d(l.weight),children:e.jsx(t,{size:"small",weight:"semibold",color:"surface.text.gray.muted",children:"Weight"})}),e.jsx("div",{style:d(l.letterSpacing),children:e.jsx(t,{size:"small",weight:"semibold",color:"surface.text.gray.muted",children:"Letter Spacing"})})]}),B={title:"Components/Typography",parameters:{docs:{description:{component:"An overview of all typography styles available in Loom UI."}}}},C=()=>e.jsxs(u,{display:"flex",flexDirection:"column",children:[e.jsx(D,{}),e.jsx(n,{children:e.jsx(h,{size:"xlarge",children:"DisplayXLarge"})}),e.jsx(n,{children:e.jsx(h,{size:"large",children:"DisplayLarge"})}),e.jsx(n,{children:e.jsx(h,{size:"medium",children:"DisplayMedium"})}),e.jsx(n,{children:e.jsx(h,{size:"small",children:"DisplaySmall"})}),e.jsx(n,{children:e.jsx(p,{size:"2xlarge",children:"Heading2XLarge"})}),e.jsx(n,{children:e.jsx(p,{size:"xlarge",children:"HeadingXLarge"})}),e.jsx(n,{children:e.jsx(p,{size:"large",children:"HeadingLarge"})}),e.jsx(n,{children:e.jsx(p,{size:"medium",children:"HeadingMedium"})}),e.jsx(n,{children:e.jsx(p,{size:"small",children:"HeadingSmall"})}),e.jsx(n,{children:e.jsx(t,{size:"large",children:"BodyLarge"})}),e.jsx(n,{children:e.jsx(t,{size:"medium",children:"BodyMedium"})}),e.jsx(n,{children:e.jsx(t,{size:"small",children:"BodySmall"})}),e.jsx(n,{children:e.jsx(t,{size:"xsmall",children:"BodyXSmall"})}),e.jsx(n,{children:e.jsx(t,{variant:"caption",size:"medium",children:"CaptionMedium"})}),e.jsx(n,{children:e.jsx(T,{size:"medium",children:"CodeMedium"})}),e.jsx(n,{children:e.jsx(T,{size:"small",children:"CodeSmall"})})]}),y=C.bind({});y.storyName="All Typography";var f,z,R;y.parameters={...y.parameters,docs:{...(f=y.parameters)==null?void 0:f.docs,source:{originalSource:`(): ReactElement => {
  return <Box display="flex" flexDirection="column">
      <TableHeader />

      {/* Display */}
      <TypographyRow>
        <Display size="xlarge">DisplayXLarge</Display>
      </TypographyRow>
      <TypographyRow>
        <Display size="large">DisplayLarge</Display>
      </TypographyRow>
      <TypographyRow>
        <Display size="medium">DisplayMedium</Display>
      </TypographyRow>
      <TypographyRow>
        <Display size="small">DisplaySmall</Display>
      </TypographyRow>

      {/* Heading */}
      <TypographyRow>
        <Heading size="2xlarge">Heading2XLarge</Heading>
      </TypographyRow>
      <TypographyRow>
        <Heading size="xlarge">HeadingXLarge</Heading>
      </TypographyRow>
      <TypographyRow>
        <Heading size="large">HeadingLarge</Heading>
      </TypographyRow>
      <TypographyRow>
        <Heading size="medium">HeadingMedium</Heading>
      </TypographyRow>
      <TypographyRow>
        <Heading size="small">HeadingSmall</Heading>
      </TypographyRow>

      {/* Body (Text) */}
      <TypographyRow>
        <Text size="large">BodyLarge</Text>
      </TypographyRow>
      <TypographyRow>
        <Text size="medium">BodyMedium</Text>
      </TypographyRow>
      <TypographyRow>
        <Text size="small">BodySmall</Text>
      </TypographyRow>
      <TypographyRow>
        <Text size="xsmall">BodyXSmall</Text>
      </TypographyRow>

      {/* Caption */}
      <TypographyRow>
        <Text variant="caption" size="medium">
          CaptionMedium
        </Text>
      </TypographyRow>

      {/* Code */}
      <TypographyRow>
        <Code size="medium">CodeMedium</Code>
      </TypographyRow>
      <TypographyRow>
        <Code size="small">CodeSmall</Code>
      </TypographyRow>
    </Box>;
}`,...(R=(z=y.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const M=["AllTypography"];export{y as AllTypography,M as __namedExportsOrder,B as default};
