import{iS as g,j as e,H as S,r as a,B as c,n as l,iT as f,iU as p,jK as k,jL as F,jM as E,hq as M,T as U,ac as R,ad as G}from"./iframe-C1qQ09LF.js";import{D as V,P as W,_ as N,a as z}from"./TextLayer-DHG_rVSn.js";import{S as H}from"./Sandbox.web-B2xP21Qp.js";import{S as K}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./baseCode-DnWYDQ6N.js";import"./Sandbox.web-C7diOxlu.js";import"./componentStatusData-8pChZ-5h.js";z.workerSrc=new URL(""+new URL("pdf.worker.min-GB3t0DcA.mjs",import.meta.url).href,import.meta.url).toString();const L=[{src:"https://picsum.photos/seed/lightbox1/1200/800",alt:"Document 1"},{src:"https://picsum.photos/seed/lightbox2/1200/800",alt:"Document 2"},{src:"https://picsum.photos/seed/lightbox3/1200/800",alt:"Document 3"}],D="https://cdn.greenloom.ai/traditional-banks-vs-razorpayx.pdf",q="https://picsum.photos/seed/pdfthumb/400/300",Y="https://www.w3schools.com/html/mov_bbb.mp4",$="https://picsum.photos/seed/lightbox-video-thumb/400/300",J=o=>{const[n,r]=a.useState();return G.useEffect(()=>{let s=!0;const t=N(o);return(async()=>{try{const i=await(await t.promise).getPage(1),I=i.getViewport({scale:.25}),u=document.createElement("canvas"),b=u.getContext("2d");if(!b)return;u.width=I.width,u.height=I.height,await i.render({canvasContext:b,viewport:I}).promise,s&&r(u.toDataURL("image/jpeg",.8))}catch{}})(),()=>{s=!1,t.destroy()}},[o]),n},Q=()=>e.jsxs(K,{componentName:"LightBox",componentDescription:"LightBox is a full-screen overlay component for viewing media items — images, videos, documents, or any custom content — in an immersive gallery experience. It provides prev/next navigation and a thumbnail strip for quick item access.",apiDecisionLink:null,figmaURL:"",children:[e.jsx(S,{size:"large",children:"Usage"}),e.jsx(H,{showConsole:!0,children:`
import { useState } from 'react';
import { LightBox, LightBoxBody, LightBoxItem, Button, Box } from '@greenloom/ui/components';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const documents = [
    { src: 'https://picsum.photos/seed/doc1/1200/800', alt: 'Document 1' },
    { src: 'https://picsum.photos/seed/doc2/1200/800', alt: 'Document 2' },
    { src: 'https://picsum.photos/seed/doc3/1200/800', alt: 'Document 3' },
  ];

  return (
    <Box>
      <Button onClick={() => setIsOpen(true)}>Open Gallery</Button>
      <LightBox
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        activeIndex={activeIndex}
        onIndexChange={({ index }) => setActiveIndex(index)}
      >
        <LightBoxBody>
          {documents.map((doc) => (
            <LightBoxItem key={doc.src} src={doc.src} alt={doc.alt} />
          ))}
        </LightBoxBody>
      </LightBox>
    </Box>
  );
}

export default App;
        `})]}),de={title:"Components/LightBox",component:g,tags:["autodocs"],parameters:{docs:{page:Q}}},X=()=>{const[o,n]=a.useState(!1),[r,s]=a.useState(0);return e.jsxs(c,{children:[e.jsx(l,{onClick:()=>n(!0),children:"Open Gallery"}),e.jsx(g,{isOpen:o,onDismiss:()=>n(!1),activeIndex:r,onIndexChange:({index:t})=>s(t),children:e.jsx(f,{children:L.map(t=>e.jsx(p,{src:t.src,alt:t.alt},t.src))})})]})},x=X.bind({});x.storyName="Default";const B=8,Z=()=>{const[o,n]=a.useState(!1),[r,s]=a.useState(0),[t,d]=a.useState(1),v=J(D);return e.jsxs(c,{children:[e.jsx(l,{onClick:()=>n(!0),children:"Open Mixed Gallery (Image + PDF + Video)"}),e.jsx(g,{isOpen:o,onDismiss:()=>n(!1),activeIndex:r,onIndexChange:({index:i})=>s(i),children:e.jsxs(f,{children:[e.jsx(p,{src:"https://picsum.photos/seed/lightbox-horizontal/1200/800",alt:"Horizontal Image"}),e.jsx(p,{src:"https://picsum.photos/seed/lightbox-vertical/800/1200",alt:"Vertical Image"}),e.jsx(p,{thumbnail:v??q,alt:"PDF File",children:e.jsxs(k,{children:[e.jsx(F,{children:e.jsx(V,{file:D,children:e.jsx(W,{pageNumber:t,width:600})})}),e.jsx(E,{trailing:e.jsxs(c,{display:"flex",alignItems:"center",gap:"spacing.4",borderColor:"surface.border.gray.muted",borderWidth:"thin",padding:"spacing.2",backgroundColor:"surface.background.gray.intense",borderRadius:"medium",children:[e.jsx(l,{icon:M,onClick:()=>d(i=>Math.max(1,i-1)),variant:"tertiary","aria-label":"Previous page",isDisabled:t<=1}),e.jsxs(U,{size:"medium",margin:"spacing.2",children:[t," / ",B]}),e.jsx(l,{icon:R,onClick:()=>d(i=>Math.min(B,i+1)),variant:"tertiary","aria-label":"Next page",isDisabled:t>=B})]})})]})}),e.jsx(p,{thumbnail:$,alt:"Video File",children:e.jsx(c,{width:"100%",maxWidth:"1000px",children:e.jsxs("video",{controls:!0,width:"100%",children:[e.jsx("source",{src:Y,type:"video/mp4"}),e.jsx("track",{kind:"captions",srcLang:"en",label:"English captions",src:"data:text/vtt,WEBVTT"}),"Your browser does not support the video tag."]})})})]})})]})},m=Z.bind({});m.storyName="Mixed Content (Horizontal + Vertical + PDF + Video)";const ee=()=>{const[o,n]=a.useState(!1),[r,s]=a.useState(0);return e.jsxs(c,{children:[e.jsx(c,{display:"flex",gap:"spacing.3",flexWrap:"wrap",children:L.map((t,d)=>e.jsxs(l,{onClick:()=>{s(d),n(!0)},children:["Open item ",d+1]},t.src))}),e.jsx(c,{marginTop:"spacing.5",children:e.jsx(l,{onClick:()=>n(!0),children:"Open Gallery"})}),e.jsx(g,{isOpen:o,onDismiss:()=>n(!1),activeIndex:r,onIndexChange:({index:t})=>s(t),children:e.jsx(f,{children:L.map(t=>e.jsx(p,{src:t.src,alt:t.alt},t.src))})})]})},h=ee.bind({});h.storyName="Controlled";var P,O,y;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return <Box>
      <Button onClick={() => setIsOpen(true)}>Open Gallery</Button>
      <LightBox isOpen={isOpen} onDismiss={() => setIsOpen(false)} activeIndex={activeIndex} onIndexChange={({
      index
    }) => setActiveIndex(index)}>
        <LightBoxBody>
          {DEFAULT_IMAGES.map(img => <LightBoxItem key={img.src} src={img.src} alt={img.alt} />)}
        </LightBoxBody>
      </LightBox>
    </Box>;
}`,...(y=(O=x.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var _,j,A;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pdfPage, setPdfPage] = useState(1);
  const pdfThumbnail = usePdfThumbnail(PDF_FILE_URL);
  return <Box>
      <Button onClick={() => setIsOpen(true)}>Open Mixed Gallery (Image + PDF + Video)</Button>
      <LightBox isOpen={isOpen} onDismiss={() => setIsOpen(false)} activeIndex={activeIndex} onIndexChange={({
      index
    }) => setActiveIndex(index)}>
        <LightBoxBody>
          <LightBoxItem src="https://picsum.photos/seed/lightbox-horizontal/1200/800" alt="Horizontal Image" />
          <LightBoxItem src="https://picsum.photos/seed/lightbox-vertical/800/1200" alt="Vertical Image" />
          <LightBoxItem thumbnail={pdfThumbnail ?? FALLBACK_PDF_THUMBNAIL} alt="PDF File">
            <Preview>
              <PreviewBody>
                <Document file={PDF_FILE_URL}>
                  <ReactPdfPage pageNumber={pdfPage} width={600} />
                </Document>
              </PreviewBody>
              <PreviewFooter trailing={<Box display="flex" alignItems="center" gap="spacing.4" borderColor="surface.border.gray.muted" borderWidth="thin" padding="spacing.2" backgroundColor="surface.background.gray.intense" borderRadius="medium">
                    <Button icon={ArrowLeftIcon} onClick={() => setPdfPage(p => Math.max(1, p - 1))} variant="tertiary" aria-label="Previous page" isDisabled={pdfPage <= 1} />
                    <Text size="medium" margin="spacing.2">
                      {pdfPage} / {PDF_TOTAL_PAGES}
                    </Text>
                    <Button icon={ArrowRightIcon} onClick={() => setPdfPage(p => Math.min(PDF_TOTAL_PAGES, p + 1))} variant="tertiary" aria-label="Next page" isDisabled={pdfPage >= PDF_TOTAL_PAGES} />
                  </Box>} />
            </Preview>
          </LightBoxItem>
          <LightBoxItem thumbnail={VIDEO_THUMBNAIL_URL} alt="Video File">
            <Box width="100%" maxWidth="1000px">
              <video controls width="100%">
                <source src={VIDEO_FILE_URL} type="video/mp4" />
                <track kind="captions" srcLang="en" label="English captions" src="data:text/vtt,WEBVTT" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </LightBoxItem>
        </LightBoxBody>
      </LightBox>
    </Box>;
}`,...(A=(j=m.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var w,T,C;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return <Box>
      <Box display="flex" gap="spacing.3" flexWrap="wrap">
        {DEFAULT_IMAGES.map((img, i) => <Button key={img.src} onClick={() => {
        setActiveIndex(i);
        setIsOpen(true);
      }}>
            Open item {i + 1}
          </Button>)}
      </Box>
      <Box marginTop="spacing.5">
        <Button onClick={() => setIsOpen(true)}>Open Gallery</Button>
      </Box>
      <LightBox isOpen={isOpen} onDismiss={() => setIsOpen(false)} activeIndex={activeIndex} onIndexChange={({
      index
    }) => setActiveIndex(index)}>
        <LightBoxBody>
          {DEFAULT_IMAGES.map(img => <LightBoxItem key={img.src} src={img.src} alt={img.alt} />)}
        </LightBoxBody>
      </LightBox>
    </Box>;
}`,...(C=(T=h.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const pe=["Default","MixedContentWithPDF","Controlled"];export{h as Controlled,x as Default,m as MixedContentWithPDF,pe as __namedExportsOrder,de as default};
