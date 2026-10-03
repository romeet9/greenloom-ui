import{j as i,ad as k,B as C,n as l,jx as S}from"./iframe-C1qQ09LF.js";import{u as g}from"./useToast.web-DG48GqLd.js";import"./preload-helper-Dp1pzeXC.js";const{within:x,userEvent:a,expect:t,fn:M}=__STORYBOOK_MODULE_TEST__,y=M(),f=o=>{const e=g();return k.useEffect(()=>{e.dismiss()},[]),i.jsxs(C,{children:[i.jsx(l,{onClick:()=>{e.show({...o})},children:"Show Toast"}),i.jsx(S,{})]})},s=o=>new Promise(e=>setTimeout(e,o)),h=()=>i.jsx(f,{content:"Payment successful"});h.play=async()=>{const{getByRole:o,queryByText:e}=x(document.body);await s(1e3);const n="Payment successful";await t(e(n)).not.toBeInTheDocument();const c=o("button",{name:"Show Toast"});await a.click(c),await s(400),await t(e(n)).toBeVisible(),await s(4e3),await t(e(n)).not.toBeVisible()};const T=()=>(y.mockReset(),i.jsx(f,{content:"Payment successful",onDismissButtonClick:y}));T.play=async()=>{const{getByRole:o,queryByText:e}=x(document.body);await s(1e3);const n="Payment successful";await t(e(n)).not.toBeInTheDocument();const c=o("button",{name:"Show Toast"});await a.click(c),await s(400),await t(e(n)).toBeVisible();const w=o("button",{name:"Dismiss toast"});await a.click(w),await t(y).toBeCalledTimes(1),await s(400),await t(e(n)).not.toBeVisible()};const B=()=>(y.mockReset(),i.jsx(f,{content:"Payment successful",duration:1e3}));B.play=async()=>{const{getByRole:o,queryByText:e,getByTestId:n}=x(document.body);await s(1e3);const c="Payment successful";await t(e(c)).not.toBeInTheDocument();const w=o("button",{name:"Show Toast"});await a.click(w),await s(400),await t(e(c)).toBeVisible();const d=n("toast-mouseover-container");await a.hover(d),await s(2e3),await t(e(c)).toBeVisible(),await a.unhover(d),await s(1e3),await t(e(c)).not.toBeVisible()};const p=()=>{const o=g();return k.useEffect(()=>{o.dismiss()},[]),i.jsxs(C,{children:[i.jsx(l,{onClick:()=>{o.show({content:"Toast 1",autoDismiss:!1})},children:"Show 1"}),i.jsx(l,{onClick:()=>{o.show({content:"Toast 2",autoDismiss:!1})},children:"Show 2"}),i.jsx(l,{onClick:()=>{o.show({content:"Toast 3",autoDismiss:!1})},children:"Show 3"}),i.jsx(l,{onClick:()=>{o.show({content:"Toast 4",autoDismiss:!1})},children:"Show 4"}),i.jsx(l,{onClick:()=>{o.show({type:"promotional",content:"Promo Toast",action:{text:"Okay"}})},children:"Show Promo"}),i.jsx(S,{})]})};p.play=async()=>{const{getByRole:o,getAllByRole:e,queryByText:n,getByTestId:c}=x(document.body);await s(1e3);const w=o("button",{name:"Show 1"}),d=o("button",{name:"Show 2"}),u=o("button",{name:"Show 3"}),r=o("button",{name:"Show 4"}),K=o("button",{name:"Show Promo"});await a.click(w),await a.click(d),await a.click(u),await s(400),await t(n("Toast 1")).toBeVisible(),await t(n("Toast 2")).toBeVisible(),await t(n("Toast 3")).toBeVisible();const m=c("toast-mouseover-container");await t(m.getBoundingClientRect().height).toBeGreaterThan(120),await a.click(r),await s(400),await t(n("Toast 4")).toBeVisible(),await t(m.getBoundingClientRect().height).toBeLessThan(50);const R=n("Toast 4");await a.hover(R),await t(m.getBoundingClientRect().height).toBeGreaterThan(160),await s(400),await a.unhover(R),await t(m.getBoundingClientRect().height).toBeLessThan(50),await a.click(K),await s(400),await t(n("Promo Toast")).toBeVisible(),await t(m.getBoundingClientRect().height).toBeGreaterThan(30);const D=n("Promo Toast");await a.hover(D),await t(m.getBoundingClientRect().height).toBeGreaterThan(30),await a.unhover(D),await s(400),await t(m.getBoundingClientRect().height).toBeGreaterThan(30),await a.click(e("button",{name:"Dismiss toast"})[0]),await a.click(e("button",{name:"Dismiss toast"})[1]),await s(400),await t(n("Toast 3")).not.toBeVisible(),await t(n("Toast 4")).not.toBeVisible(),await t(m.getBoundingClientRect().height).toBeGreaterThan(130)};const b=()=>{const o=g();return k.useEffect(()=>{o.dismiss()},[]),i.jsxs(C,{children:[i.jsx(l,{onClick:()=>{o.show({content:"Toast 1",autoDismiss:!1})},children:"Show Toast 1"}),i.jsx(l,{onClick:()=>{o.show({content:"Toast 2",autoDismiss:!1})},children:"Show Toast 2"}),i.jsx(l,{onClick:()=>{o.show({content:"Toast 3",autoDismiss:!1})},children:"Show Toast 3"}),i.jsx(l,{onClick:()=>{o.dismiss()},children:"Dismiss All"}),i.jsx(S,{zIndex:3e3})]})};b.play=async()=>{const{getByRole:o,queryByText:e}=x(document.body);await s(1e3);const n=o("button",{name:"Show Toast 1"}),c=o("button",{name:"Show Toast 2"}),w=o("button",{name:"Show Toast 3"}),d=o("button",{name:"Dismiss All"}),u=document.querySelector('[data-blade-component="toast-container"]');await t(u).toBeInTheDocument();let r=window.getComputedStyle(u);t(parseInt(r.zIndex,10)).toBe(3e3),await a.click(n),await s(400),await t(e("Toast 1")).toBeVisible(),r=window.getComputedStyle(u),t(parseInt(r.zIndex,10)).toBe(3e3),await a.click(c),await s(400),await t(e("Toast 2")).toBeVisible(),r=window.getComputedStyle(u),t(parseInt(r.zIndex,10)).toBe(3e3),await a.click(w),await s(400),await t(e("Toast 3")).toBeVisible(),r=window.getComputedStyle(u),t(parseInt(r.zIndex,10)).toBe(3e3),await a.click(d),await s(400),await t(e("Toast 1")).not.toBeVisible(),await t(e("Toast 2")).not.toBeVisible(),await t(e("Toast 3")).not.toBeVisible(),r=window.getComputedStyle(u),t(parseInt(r.zIndex,10)).toBe(3e3)};const J={title:"Components/Interaction Tests/Toast",parameters:{controls:{disable:!0},a11y:{disable:!0},essentials:{disable:!0}}};var j,I,E;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`(): React.ReactElement => {
  return <ToastExample content="Payment successful" />;
}`,...(E=(I=h.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var V,v,P;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`(): React.ReactElement => {
  onDismissButtonClick.mockReset();
  return <ToastExample content="Payment successful" onDismissButtonClick={onDismissButtonClick} />;
}`,...(P=(v=T.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var _,z,O;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`(): React.ReactElement => {
  onDismissButtonClick.mockReset();
  return <ToastExample content="Payment successful" duration={1000} />;
}`,...(O=(z=B.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var q,G,A;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`(): React.ReactElement => {
  const toast = useToast();
  React.useEffect(() => {
    toast.dismiss();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Box>
      <Button onClick={() => {
      toast.show({
        content: 'Toast 1',
        autoDismiss: false
      });
    }}>
        Show 1
      </Button>
      <Button onClick={() => {
      toast.show({
        content: 'Toast 2',
        autoDismiss: false
      });
    }}>
        Show 2
      </Button>
      <Button onClick={() => {
      toast.show({
        content: 'Toast 3',
        autoDismiss: false
      });
    }}>
        Show 3
      </Button>

      <Button onClick={() => {
      toast.show({
        content: 'Toast 4',
        autoDismiss: false
      });
    }}>
        Show 4
      </Button>

      <Button onClick={() => {
      toast.show({
        type: 'promotional',
        content: 'Promo Toast',
        action: {
          text: 'Okay'
        }
      });
    }}>
        Show Promo
      </Button>
      <ToastContainer />
    </Box>;
}`,...(A=(G=p.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var L,H,Z;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`(): React.ReactElement => {
  const toast = useToast();
  React.useEffect(() => {
    toast.dismiss();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Box>
      <Button onClick={() => {
      toast.show({
        content: 'Toast 1',
        autoDismiss: false
      });
    }}>
        Show Toast 1
      </Button>
      <Button onClick={() => {
      toast.show({
        content: 'Toast 2',
        autoDismiss: false
      });
    }}>
        Show Toast 2
      </Button>
      <Button onClick={() => {
      toast.show({
        content: 'Toast 3',
        autoDismiss: false
      });
    }}>
        Show Toast 3
      </Button>
      <Button onClick={() => {
      toast.dismiss();
    }}>
        Dismiss All
      </Button>
      <ToastContainer zIndex={3000} />
    </Box>;
}`,...(Z=(H=b.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};const N=["TestToastShow","TestToastDismiss","ToastHover","ToastStacking","ToastZIndex"];export{T as TestToastDismiss,h as TestToastShow,B as ToastHover,p as ToastStacking,b as ToastZIndex,N as __namedExportsOrder,J as default};
