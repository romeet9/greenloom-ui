import{aD as re,j as i,ad as R,B as se,T as ie,n as le}from"./iframe-C1qQ09LF.js";import{C as ce}from"./Carousel.stories-DiaV_f1E.js";import"./preload-helper-Dp1pzeXC.js";import"./StoryPageWrapper-CS0_5maI.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";import"./Sandbox.web-B2xP21Qp.js";const{within:c,userEvent:l,expect:s,fn:u}=__STORYBOOK_MODULE_TEST__,n=t=>new Promise(a=>setTimeout(a,t));let e=null;const d=t=>i.jsx(se,{margin:"auto",width:{base:"100%",m:"100%"},padding:"spacing.4",children:i.jsx(ce,{...t})}),C=t=>(e=u(),i.jsx(d,{...t,onChange:e}));C.play=async({canvasElement:t})=>{var k,f,E;const{getByRole:a,getByLabelText:o}=c(t);e==null||e.mockClear();const r=a("button",{name:"Next Slide"}),p=a("button",{name:"Previous Slide"});await l.click(r),await n(1e3);const b=(k=e==null?void 0:e.mock.lastCall)==null?void 0:k[0];await s(b).toBe(1),await l.click(p),await n(1e3);const h=(f=e==null?void 0:e.mock.lastCall)==null?void 0:f[0];await s(h).toBe(0);const oe=o("Slide 4");await l.click(oe),await n(1e3);const ne=(E=e==null?void 0:e.mock.lastCall)==null?void 0:E[0];await s(ne).toBe(3)};const B=t=>(e=u(),i.jsx(d,{...t,visibleItems:1,onChange:e}));B.play=async({canvasElement:t})=>{const{getByLabelText:a}=c(t);e==null||e.mockClear();const o=a("Slide 7");await l.click(o),await n(1e3),await s(e).toBeCalledWith(6),await s(e).toBeCalledTimes(1)};const w=t=>(e=u(),i.jsx(d,{...t,visibleItems:1,onChange:e}));w.play=async({canvasElement:t})=>{const{getByRole:a}=c(t);e==null||e.mockClear();const o=a("button",{name:"Next Slide"}),r=a("button",{name:"Previous Slide"});await l.click(r),await n(1e3),await s(e).toBeCalledWith(6),await l.click(o),await n(1e3),await s(e).toBeCalledWith(0),await s(e).toBeCalledTimes(2)};const x=t=>(e=u(),i.jsx(d,{...t,autoPlay:!0,visibleItems:2,onChange:e}));x.play=async({canvasElement:t})=>{const{getByRole:a}=c(t);e==null||e.mockClear(),await n(8e3),await s(e).toBeCalledWith(1),await s(a("tab",{selected:!0})).toHaveAccessibleName("Slide 3"),await s(e).toBeCalledTimes(1)};const v=t=>(e=u(),i.jsx(d,{...t,visibleItems:"autofit",navigationButtonPosition:"side",showIndicators:!0,onChange:e,shouldAddStartEndSpacing:!0,carouselItemWidth:"300px"}));v.play=async({canvasElement:t})=>{await n(1e3);const{getByLabelText:a,queryByRole:o}=c(t);e==null||e.mockClear();const r=a("Slide 7");await l.click(r),await n(1e3);const p=o("button",{name:"Next Slide"});await s(p).toBeNull();const b=a("Slide 1");await l.click(b),await n(1e3);const h=o("button",{name:"Previous Slide"});await s(h).toBeNull(),await s(e).toBeCalledTimes(2)};const g=t=>(e=u(),i.jsx(d,{...t,autoPlay:!0,visibleItems:2,onChange:e}));g.play=async({canvasElement:t})=>{const{getByText:a}=c(t);e==null||e.mockClear();const o=a(/Acquire Customers From New Customer Segments/);await l.hover(o),await n(7e3),await s(e).not.toHaveBeenCalled()};const m=t=>(e=u(),i.jsx(d,{...t,visibleItems:3,onChange:e}));m.parameters={viewport:{defaultViewport:"iPhone6"}};m.play=async({canvasElement:t})=>{e==null||e.mockClear();const{getByRole:a}=c(t),o=a("button",{name:"Next Slide"});await l.click(o),await n(1e3),await s(e).toBeCalledWith(1)};const I=u(),S=t=>{const[,a]=R.useState(0);return R.useEffect(()=>{const o=setInterval(()=>{a(r=>r++)},100);return()=>clearInterval(o)},[]),i.jsx(d,{...t,onChange:I})};S.play=async({canvasElement:t})=>{const{getByRole:a}=c(t);e==null||e.mockClear(),await s(I).not.toBeCalled();const o=a("button",{name:"Next Slide"}),r=a("button",{name:"Previous Slide"});await l.click(o),await n(1e3),await s(I).toBeCalledWith(1),await l.click(r),await n(1e3),await s(I).toBeCalledWith(0),await s(I).toBeCalledTimes(2)};const y=u(),T=t=>{const[a,o]=R.useState(3);return i.jsxs(se,{children:[i.jsxs(ie,{children:["Current slide: ",a]}),i.jsx(le,{onClick:()=>{o(5)},children:"Change slide"}),i.jsx(d,{...t,visibleItems:1,activeSlide:a,onChange:r=>{console.log("index",r),o(r),y(r)}})]})};T.play=async({canvasElement:t})=>{const{getByText:a,getByRole:o}=c(t);e==null||e.mockClear(),await n(1e3),await s(a("Current slide: 3")).toBeInTheDocument();const r=o("button",{name:"Change slide"});await l.click(r),await s(a("Current slide: 5")).toBeInTheDocument(),await n(1e3),await s(y).not.toBeCalled();const p=o("button",{name:"Next Slide"});await l.click(p),await n(1e3),await s(y).toBeCalledWith(6),await s(y).toBeCalledTimes(1)};const ve={title:"Components/Interaction Tests/Carousel",component:re,parameters:{controls:{disable:!0},a11y:{disable:!0},essentials:{disable:!0}}};var P,A,O;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`(props): React.ReactElement => {
  onChange = fn();
  return <BasicCarousel {...props} onChange={onChange} />;
}`,...(O=(A=C.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var j,N,W;B.parameters={...B.parameters,docs:{...(j=B.parameters)==null?void 0:j.docs,source:{originalSource:`(props): React.ReactElement => {
  onChange = fn();
  return <BasicCarousel {...props} visibleItems={1} onChange={onChange} />;
}`,...(W=(N=B.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var _,D,L;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`(props): React.ReactElement => {
  onChange = fn();
  return <BasicCarousel {...props} visibleItems={1} onChange={onChange} />;
}`,...(L=(D=w.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var M,U,V;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`(props): React.ReactElement => {
  onChange = fn();
  return <BasicCarousel {...props} autoPlay visibleItems={2} onChange={onChange} />;
}`,...(V=(U=x.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var q,H,F;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`(props): React.ReactElement => {
  onChange = fn();
  return <BasicCarousel {...props} visibleItems="autofit" navigationButtonPosition="side" showIndicators={true} onChange={onChange} shouldAddStartEndSpacing carouselItemWidth="300px" />;
}`,...(F=(H=v.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var K,Y,z;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`(props): React.ReactElement => {
  onChange = fn();
  return <BasicCarousel {...props} autoPlay visibleItems={2} onChange={onChange} />;
}`,...(z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var G,J,Q;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`(props): React.ReactElement => {
  onChange = fn();
  return <BasicCarousel {...props} visibleItems={3} onChange={onChange} />;
}`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`(props): React.ReactElement => {
  const [, setCount] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prev => prev++);
    }, 100);
    return () => clearInterval(intervalId);
  }, []);
  return <BasicCarousel {...props} onChange={multipleOnChange} />;
}`,...($=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ae;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`(props): React.ReactElement => {
  const [activeIndex, setActiveIndex] = React.useState(3);
  return <Box>
      <Text>Current slide: {activeIndex}</Text>
      <Button onClick={() => {
      setActiveIndex(5);
    }}>
        Change slide
      </Button>
      <BasicCarousel {...props} visibleItems={1} activeSlide={activeIndex} onChange={index => {
      console.log('index', index);
      setActiveIndex(index);
      controlledOnChange(index);
    }} />
    </Box>;
}`,...(ae=(te=T.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const ge=["TestCarouselOnChange","TestIndicatorButton","TestStartOverAfterStartEnd","TestAutoPlay","TestAutofit","TestAutoPlayPause","TestVisibleItemsOnMobile","TestOnChangeParentUpdate","TestControlledCarousel"];export{x as TestAutoPlay,g as TestAutoPlayPause,v as TestAutofit,C as TestCarouselOnChange,T as TestControlledCarousel,B as TestIndicatorButton,S as TestOnChangeParentUpdate,w as TestStartOverAfterStartEnd,m as TestVisibleItemsOnMobile,ge as __namedExportsOrder,ve as default};
