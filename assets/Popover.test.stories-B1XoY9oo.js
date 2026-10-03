import{ib as u,j as n,T as m,ad as T,n as p,B as v,jP as M,F as U,x as K}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const{within:B,userEvent:c,expect:e,fn:L}=__STORYBOOK_MODULE_TEST__,r=L(),Y=t=>n.jsx(u,{...t,children:n.jsx(p,{children:"Show Popover"})}),i=t=>new Promise(o=>setTimeout(o,t)),d=t=>(r.mockReset(),n.jsx(Y,{...t,onOpenChange:r}));d.args={title:"Hello World",content:n.jsx(m,{children:"Some text"})};d.play=async()=>{const{getByRole:t,queryByText:o}=B(document.body);await e(o("Hello World")).not.toBeInTheDocument();const a=t("button",{name:"Show Popover"});await c.click(a),await i(400),await e(r).toBeCalledWith({isOpen:!0}),await e(o("Hello World")).toBeVisible();const s=t("button",{name:"Close"});await e(s).toHaveFocus(),await c.click(s),await i(400),await e(r).toBeCalledWith({isOpen:!1}),await e(o("Hello World")).not.toBeInTheDocument(),await e(a).toHaveFocus(),await e(r).toBeCalledTimes(2)};const w=()=>{const[t,o]=T.useState(!0),a=()=>{o(s=>!s)};return n.jsxs(v,{children:[n.jsx(u,{content:n.jsxs(v,{children:[n.jsx(m,{children:"Hello World"}),n.jsx(p,{onClick:a,children:"Internal Click"})]}),isOpen:t,onOpenChange:({isOpen:s})=>o(s),children:n.jsx(p,{onClick:()=>o(!0),children:"Open Button"})}),n.jsx(p,{onClick:a,children:"Controlled Show"})]})};w.play=async()=>{const{getByRole:t,queryByText:o}=B(document.body),a="Hello World",s=t("button",{name:"Controlled Show",hidden:!0}),l=t("button",{name:"Internal Click",hidden:!0});await i(1e3),await e(o(a)).toBeVisible(),await c.click(l),await i(1e3),await e(o(a)).not.toBeInTheDocument(),await c.click(s),await i(400),await e(o(a)).toBeVisible();const O=t("button",{name:"Close"});await e(O).toHaveFocus(),await c.click(O),await i(400),await e(o(a)).not.toBeInTheDocument(),await e(s).toHaveFocus()};const h=()=>n.jsx(v,{children:n.jsx(u,{content:n.jsx(m,{children:"Hello World"}),defaultIsOpen:!0,onOpenChange:r,children:n.jsx(p,{children:"Show Popover"})})});h.play=async()=>{r.mockReset();const{getByRole:t,queryByText:o}=B(document.body),a="Hello World",s=t("button",{name:"Show Popover",hidden:!0});await e(r).not.toBeCalled(),await i(600),await e(o(a)).toBeVisible(),await c.click(s),await i(400),await e(o(a)).not.toBeInTheDocument(),await e(r).toBeCalledWith({isOpen:!1}),await c.click(s),await i(400),await e(o(a)).toBeVisible(),await e(r).toBeCalledWith({isOpen:!0}),await e(r).toBeCalledTimes(2)};const C=()=>(r.mockReset(),n.jsx(u,{content:n.jsx(m,{children:"New Badge Content"}),onOpenChange:r,children:n.jsx(M,{children:n.jsx(U,{children:"NEW"})})}));C.play=async()=>{const{getByRole:t,queryByText:o}=B(document.body),a="New Badge Content";await e(o(a)).not.toBeInTheDocument();const s=t("button",{name:"NEW"});await c.click(s),await i(400),await e(r).toBeCalledWith({isOpen:!0}),await e(o(a)).toBeVisible();const l=t("button",{name:"Close"});await e(l).toHaveFocus(),await c.click(l),await i(400),await e(r).toBeCalledWith({isOpen:!1}),await e(o(a)).not.toBeInTheDocument(),await e(s).toHaveFocus(),await e(r).toBeCalledTimes(2)};const z=T.forwardRef(({children:t,onTouchEnd:o,...a},s)=>n.jsx(K,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",borderRadius:"medium",role:"button",tabIndex:0,ref:s,style:{cursor:"pointer"},...a,children:t})),g=()=>(r.mockReset(),n.jsx(u,{content:n.jsx(m,{children:"Hello Custom Trigger"}),onOpenChange:r,children:n.jsx(z,{children:"Show Popover"})}));g.play=async()=>{const{getByRole:t,queryByText:o}=B(document.body),a="Hello Custom Trigger";await e(o(a)).not.toBeInTheDocument();const s=t("button",{name:"Show Popover"});await c.click(s),await i(400),await e(r).toBeCalledWith({isOpen:!0}),await e(o(a)).toBeVisible();const l=t("button",{name:"Close"});await e(l).toHaveFocus(),await c.click(l),await i(400),await e(r).toBeCalledWith({isOpen:!1}),await e(o(a)).not.toBeInTheDocument(),await e(s).toHaveFocus(),await e(r).toBeCalledTimes(2)};const x=()=>{r.mockReset();const t=T.useRef(null);return n.jsx(u,{initialFocusRef:t,defaultIsOpen:!0,content:n.jsxs(v,{children:[n.jsx(m,{children:"Hello Initial Focus"}),n.jsx(p,{ref:t,children:"Focus on me"})]}),children:n.jsx(p,{children:"Show Popover"})})};x.play=async()=>{const{getByRole:t,queryByText:o}=B(document.body),a="Hello Initial Focus";await i(600),await e(o(a)).toBeVisible();const s=t("button",{name:"Focus on me"});await e(s).toHaveFocus()};const J={title:"Components/Interaction Tests/Popover",component:u,parameters:{controls:{disable:!0},a11y:{disable:!0},essentials:{disable:!0}}};var y,R,P;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`(props): React.ReactElement => {
  onOpenChange.mockReset();
  return <PopoverExample {...props} onOpenChange={onOpenChange} />;
}`,...(P=(R=d.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var b,I,j;w.parameters={...w.parameters,docs:{...(b=w.parameters)==null?void 0:b.docs,source:{originalSource:`(): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggle = () => {
    setIsOpen(prev => !prev);
  };
  return <Box>
      <PopoverComponent content={<Box>
            <Text>Hello World</Text>
            <Button onClick={toggle}>Internal Click</Button>
          </Box>} isOpen={isOpen} onOpenChange={({
      isOpen
    }) => setIsOpen(isOpen)}>
        <Button onClick={() => setIsOpen(true)}>Open Button</Button>
      </PopoverComponent>
      <Button onClick={toggle}>Controlled Show</Button>
    </Box>;
}`,...(j=(I=w.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var k,W,f;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box>
      <PopoverComponent content={<Text>Hello World</Text>} defaultIsOpen={true} onOpenChange={onOpenChange}>
        <Button>Show Popover</Button>
      </PopoverComponent>
    </Box>;
}`,...(f=(W=h.parameters)==null?void 0:W.docs)==null?void 0:f.source}}};var H,S,F;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`(): React.ReactElement => {
  onOpenChange.mockReset();
  return <PopoverComponent content={<Text>New Badge Content</Text>} onOpenChange={onOpenChange}>
      <PopoverInteractiveWrapper>
        <Badge>NEW</Badge>
      </PopoverInteractiveWrapper>
    </PopoverComponent>;
}`,...(F=(S=C.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var E,D,_;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`(): React.ReactElement => {
  onOpenChange.mockReset();
  return <PopoverComponent content={<Text>Hello Custom Trigger</Text>} onOpenChange={onOpenChange}>
      <MyCustomTriggerButton>Show Popover</MyCustomTriggerButton>
    </PopoverComponent>;
}`,...(_=(D=g.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var V,q,N;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`(): React.ReactElement => {
  onOpenChange.mockReset();
  const initialRef = React.useRef(null);
  return <PopoverComponent initialFocusRef={initialRef} defaultIsOpen content={<Box>
          <Text>Hello Initial Focus</Text>
          <Button ref={initialRef}>Focus on me</Button>
        </Box>}>
      <Button>Show Popover</Button>
    </PopoverComponent>;
}`,...(N=(q=x.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const Q=["TestPopoverOpenClose","TestPopoverControlled","TestPopoverUncontrolled","TestPopoverInteractiveWrapper","TestCustomTrigger","TestInitialFocus"];export{g as TestCustomTrigger,x as TestInitialFocus,w as TestPopoverControlled,C as TestPopoverInteractiveWrapper,d as TestPopoverOpenClose,h as TestPopoverUncontrolled,Q as __namedExportsOrder,J as default};
