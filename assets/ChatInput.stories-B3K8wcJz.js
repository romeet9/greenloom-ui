import{iP as x,r as c,j as e,B as l,ab as W,T as p,da as q,iQ as Ge,iR as We,ad as P,H as ze,aI as Ee,aJ as Pe,an as Ne,ao as E,F as Me}from"./iframe-C1qQ09LF.js";import{g as qe}from"./storybookArgTypes-DFfQV31s.js";import{S as Ue}from"./StoryPageWrapper-CS0_5maI.js";import{S as $e}from"./Sandbox.web-B2xP21Qp.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const Ae=s=>({id:`native-mock-${Date.now()}-${s}`,name:`attachment-${s}.pdf`,size:1024,status:"success"}),z=s=>({fileList:t})=>{if(W()){s(i=>[...i,Ae(i.length+1)]);return}s(t)},He=()=>e.jsxs(Ue,{componentName:"ChatInput",componentDescription:"ChatInput is an input component designed for AI chat interfaces. It combines a textarea, file upload, ghost suggestion autocomplete, and a submit action into a single composable input.",apiDecisionLink:null,figmaURL:"https://www.figma.com/design/QjSexUED296OBCwWwhYKQE/agenticSpark?node-id=116756-67218&m=dev",children:[e.jsx(ze,{size:"large",children:"Usage"}),e.jsx($e,{showConsole:!0,children:`
        import { ChatInput } from '@greenloom/ui/components';
        
        function App() {
          return (
            <ChatInput
              placeholder="Ask a question..."
              onSubmit={({ value }) => console.log('Submitted:', value)}
            />
          )
        }

        export default App;
      `})]}),it={title:"Components/ChatInput",component:x,tags:["autodocs"],argTypes:{...qe()},parameters:{docs:{page:He}}},N=s=>e.jsx(l,{maxWidth:"600px",children:e.jsx(x,{...s})}),b=N.bind({});b.storyName="Default";b.args={placeholder:"Ask a question..."};const v=N.bind({});v.storyName="With Placeholder";v.args={placeholder:"Type your message here..."};const T=N.bind({});T.storyName="Disabled";T.args={placeholder:"Ask a question...",isDisabled:!0};const I=()=>e.jsx(l,{maxWidth:"600px",children:e.jsx(x,{placeholder:"Ask a question...",suggestions:["Ask Ray anything related to Green Loom","Show me recent transactions","Help me set up webhooks"],onSuggestionAccept:({suggestion:s})=>{console.log("Accepted suggestion:",s)},onSubmit:({value:s})=>console.log("Submitted:",s)})});I.storyName="With Ghost Suggestions";const w=()=>{const[s,t]=c.useState([]);return e.jsxs(l,{maxWidth:"600px",display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(x,{placeholder:"Ask a question...",fileList:s,onFileChange:z(t),onFileRemove:({file:i})=>t(o=>o.filter(n=>n.id!==i.id)),accept:".jpg,.png,.pdf,.xlsx",onSubmit:({value:i,fileList:o})=>{console.log("Submitted:",i,"Files:",o),t([])}}),e.jsxs(p,{size:"small",color:"surface.text.gray.muted",children:["Attached files: ",s.length,W()?" (native: tap upload to attach a mock file — wire your own picker in app code)":""]})]})};w.storyName="With File Upload";const R=()=>{const[s,t]=c.useState("none"),[i,o]=c.useState("Something went wrong. Please try again.");return e.jsx(l,{maxWidth:"600px",paddingTop:"spacing.8",display:"flex",flexDirection:"column",gap:"spacing.5",children:e.jsx(x,{placeholder:"Ask a question...",validationState:s,errorText:i,onErrorDismiss:()=>t("none"),onSubmit:({value:n})=>{console.log("value",n),o(`"${n}"? What is even that. Ask better questions`),t("error")}})})};R.storyName="With Validation Error";const L=()=>{const[s,t]=c.useState(!1),i=c.useRef(null);return e.jsxs(l,{maxWidth:"600px",display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(x,{placeholder:"Ask a question...",isGenerating:s,onSubmit:({value:o})=>{console.log("Submitted:",o);const n=new AbortController;i.current=n,t(!0),setTimeout(()=>{t(!1)},5e3)},onStop:()=>{var o;console.log("Stopped generation"),(o=i.current)==null||o.abort(),t(!1)}}),e.jsx(p,{size:"small",color:"surface.text.gray.muted",children:s?"Generating... (auto-stops in 5s)":"Ready"})]})};L.storyName="Stop Generation";const A=()=>{const[s,t]=c.useState(""),[i,o]=c.useState([]),[n,u]=c.useState(!1),m=c.useRef(null),d=({value:r,fileList:f})=>{console.log("Submitted:",r,"Files:",f);const y=new AbortController;m.current=y,u(!0),t(""),o([]),setTimeout(()=>{u(!1)},3e3)};return e.jsx(l,{maxWidth:"600px",children:e.jsx(x,{value:s,onChange:({value:r})=>t(r),onSubmit:d,placeholder:"Ask a question...",isGenerating:n,onStop:()=>{var r;(r=m.current)==null||r.abort(),u(!1)},fileList:i,onFileChange:z(o),onFileRemove:({file:r})=>o(f=>f.filter(y=>y.id!==r.id)),accept:".jpg,.png,.pdf,.xlsx",suggestions:["How do I integrate payment gateway?","Show me recent transactions","Help me set up webhooks"],onSuggestionAccept:({suggestion:r})=>{t(r)}})})};A.storyName="Full Featured";const j=()=>{const[s,t]=c.useState([]);return e.jsxs(l,{maxWidth:"600px",display:"flex",flexDirection:"column",gap:"spacing.8",children:[e.jsx(x,{placeholder:"Try pasting an image here...",fileList:s,onFileChange:z(t),onFileRemove:({file:i})=>t(o=>o.filter(n=>n.id!==i.id)),accept:"image/*",onSubmit:({value:i,fileList:o})=>{console.log("Submitted:",i,"Files:",o),t([])}}),!W()&&e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(p,{size:"small",color:"surface.text.gray.muted",children:"Right-click the image below and copy it, then paste (Ctrl/Cmd+V) into the input above."}),e.jsx("img",{src:"https://picsum.photos/300/200",alt:"Sample",style:{width:300,borderRadius:8}})]})]})};j.storyName="Paste Image Upload";const Ve=(s,t,i,o)=>{const n=s.split(" ");let u=0;const m=()=>{t.aborted||(u<n.length?(i(n.slice(0,u+1).join(" ")),u++,setTimeout(m,45)):o())};m()},_e=[{id:"msg-agent-1",senderType:"other",content:"Hello! This is a basic demo with ChatInput and ChatMessage components of Loom UI design system. You can accept the suggestions with tab in input to see different types of responses. Try adding more than 3 files in FileUpload to see error from file upload."}],U=["Analyzing your request...","Fetching relevant details...","Preparing your response...","Almost there..."],Ye=()=>e.jsx(Ee,{children:e.jsx(Pe,{children:e.jsxs(l,{display:"flex",gap:"spacing.4",flexDirection:"column",children:[e.jsx(p,{variant:"body",size:"medium",weight:"semibold",children:"Set up your webhook endpoint"}),e.jsx(p,{variant:"body",size:"small",color:"surface.text.gray.muted",children:"Choose where to receive Green Loom webhook events:"}),e.jsxs(Ne,{label:"Webhook destination",children:[e.jsx(E,{value:"existing",children:"Use an existing server endpoint"}),e.jsx(E,{value:"serverless",children:"Deploy a serverless function"}),e.jsx(E,{value:"ngrok",children:"Use ngrok for local testing"})]}),e.jsx(p,{variant:"body",size:"small",color:"surface.text.gray.muted",children:"After selecting, I'll walk you through the configuration steps."})]})})}),Oe=()=>e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(p,{variant:"body",size:"medium",children:"Here are your last 3 transactions:"}),[{id:"pay_PQR123",amount:"₹2,499",status:"positive",label:"Captured"},{id:"pay_ABC456",amount:"₹750",status:"positive",label:"Captured"},{id:"pay_XYZ789",amount:"₹12,000",status:"negative",label:"Failed"}].map(s=>e.jsxs(l,{display:"flex",justifyContent:"space-between",alignItems:"center",paddingX:"spacing.3",paddingY:"spacing.2",children:[e.jsxs(l,{display:"flex",flexDirection:"column",children:[e.jsx(p,{variant:"body",size:"small",weight:"semibold",children:s.id}),e.jsx(p,{variant:"body",size:"small",color:"surface.text.gray.muted",children:s.amount})]}),e.jsx(Me,{color:s.status,children:s.label})]},s.id))]}),Xe=s=>{const t=s.toLowerCase();return/webhook/i.test(t)?{type:"rich",content:e.jsx(Ye,{})}:/transaction|payment history|recent/i.test(t)?{type:"rich",content:e.jsx(Oe,{})}:/error|fail|broken|not working/i.test(t)?{type:"error"}:/integrate|integration|sdk|api key/i.test(t)?{type:"text",text:"To integrate Green Loom, start by signing up and grabbing your API keys from the Dashboard. Then install the SDK by running npm install razorpay in your project. Next, initialize the SDK with your key_id and key_secret. After that, create an Order using the Orders API, and finally open the Green Loom Checkout on your frontend to accept payments. Would you like a code snippet for a specific language or framework?"}:{type:"text",text:"That's a great question! Green Loom provides comprehensive APIs, SDKs, and a developer dashboard to help you build and manage payments seamlessly. Is there a specific area you'd like to dive deeper into — like subscriptions, refunds, or settlements?"}},$=(s,t,i,o,n,u)=>{if(o.aborted)return;const m=Xe(i);if(m.type==="error"){n(d=>d.filter(r=>r.id!==s).map(r=>r.id===t?{...r,validationState:"error",errorText:"Message failed to send. Tap to retry."}:r)),u(!1);return}if(m.type==="rich"){n(d=>d.map(r=>r.id===s?{...r,isLoading:!1,loadingTexts:void 0,content:m.content}:r)),u(!1);return}n(d=>d.map(r=>r.id===s?{...r,isLoading:!1,loadingTexts:void 0,isStreaming:!0,content:""}:r)),Ve(m.text,o,d=>{n(r=>r.map(f=>f.id===s?{...f,content:d}:f))},()=>{o.aborted||(n(d=>d.map(r=>r.id===s?{...r,isStreaming:!1}:r)),u(!1))})},k=()=>{const[s,t]=c.useState(_e),[i,o]=c.useState(""),[n,u]=c.useState([]),[m,d]=c.useState(!1),[r,f]=c.useState(void 0),y=c.useRef(null),M=c.useRef(null),je=["Set up webhooks","Invalid PAN Number","Show me Error","How do I integrate payments?","Show recent transactions"];c.useEffect(()=>{var a;W()||(a=M.current)==null||a.scrollIntoView({behavior:"smooth"})},[s]);const ke=c.useCallback((a,h)=>{t(S=>S.map(C=>C.id===a?{...C,validationState:"none",errorText:void 0}:C));const g=`msg-response-${Date.now()}`,F=new AbortController;y.current=F,d(!0),t(S=>[...S,{id:g,senderType:"other",isLoading:!0,loadingTexts:U,content:""}]),setTimeout(()=>{$(g,a,h,F.signal,t,d)},1200)},[]),Be=c.useCallback(({value:a,fileList:h})=>{if(a.trim().toLowerCase()==="invalid pan number"){f(`"${a.trim()}" is not a valid PAN number. Please enter a valid 10-character PAN.`);return}else f(void 0);const g=`msg-user-${Date.now()}`,F=`msg-response-${Date.now()+1}`;t(C=>[...C,{id:g,senderType:"self",content:h.length>0?`${a} [+${h.length} file(s)]`:a,messageType:"last",validationState:"none"},{id:F,senderType:"other",isLoading:!0,loadingTexts:U,content:""}]),o(""),u([]);const S=new AbortController;y.current=S,d(!0),setTimeout(()=>{$(F,g,a,S.signal,t,d)},1200)},[]),De=c.useCallback(()=>{var a;(a=y.current)==null||a.abort(),t(h=>h.map(g=>g.isLoading||g.isStreaming?{...g,isLoading:!1,isStreaming:!1,loadingTexts:void 0,content:g.isStreaming?`${g.content} [stopped]`:"Generation was stopped."}:g)),d(!1)},[]);return e.jsxs(l,{display:"flex",flexDirection:"column",height:"640px",width:"720px",marginX:"auto",overflow:"hidden",backgroundColor:"surface.background.gray.intense",children:[e.jsxs(l,{display:"flex",alignItems:"center",gap:"spacing.3",padding:"spacing.4",borderBottomWidth:"thin",borderBottomColor:"surface.border.gray.muted",children:[e.jsx(q,{size:"xlarge",color:"surface.icon.onSea.onSubtle"}),e.jsxs(l,{display:"flex",flexDirection:"column",children:[e.jsx(p,{variant:"body",size:"medium",weight:"semibold",children:"Ray"}),e.jsx(p,{variant:"body",size:"small",color:"surface.text.gray.muted",children:m?"Typing...":"Green Loom AI Assistant"})]})]}),e.jsxs(l,{flex:"1",overflow:"auto",padding:"spacing.5",display:"flex",flexDirection:"column",gap:"spacing.4",children:[s.map(a=>e.jsx(Ge,{isVisible:!0,motionTriggers:["mount"],type:"inout",children:e.jsx(l,{display:"flex",flexDirection:"column",alignItems:a.senderType==="self"?"flex-end":"flex-start",children:e.jsx(We,{senderType:a.senderType,messageType:a.messageType,isLoading:a.isLoading,loadingText:a.loadingTexts,validationState:a.validationState??"none",errorText:a.errorText,onClick:a.validationState==="error"?()=>ke(a.id,a.content):void 0,leading:a.senderType==="other"?e.jsx(q,{size:"xlarge",color:"surface.icon.onSea.onSubtle"}):void 0,children:a.isLoading?void 0:a.content})})},a.id)),e.jsx(l,{ref:M})]}),e.jsx(l,{padding:"spacing.4",children:e.jsx(x,{value:i,onChange:({value:a})=>{o(a)},onSubmit:Be,validationState:r?"error":"none",errorText:r,onErrorDismiss:()=>f(void 0),isGenerating:m,onStop:De,fileList:n,onFileChange:({fileList:a})=>{if(W()){u(h=>h.length>=3?(f("You can attach a maximum of 3 files."),h):[...h,Ae(h.length+1)]);return}if(a.length>3){f("You can attach a maximum of 3 files.");return}u(a)},onFileRemove:({file:a})=>u(h=>h.filter(g=>g.id!==a.id)),accept:".jpg,.jpeg,.png,.pdf",suggestions:je,onSuggestionAccept:({suggestion:a})=>o(a),placeholder:"Ask Ray anything about Green Loom..."})})]})};k.storyName="Product Usecase: Chat Experience";const B=()=>{const[s,t]=P.useState([{name:"report.pdf",size:204800,status:"uploading",uploadPercent:45,id:"file-uploading-1"},{name:"screenshot.png",size:76160,status:"success",id:"file-success-1"}]);return e.jsxs(l,{maxWidth:"600px",display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(x,{placeholder:"Ask a question...",fileList:s,onFileChange:z(t),onFileRemove:({file:i})=>{console.log("onFileRemove (trash icon):",i.name),t(o=>o.filter(n=>n.id!==i.id))},onFileDismiss:({file:i})=>{console.log("onFileDismiss (✕ on uploading file):",i.name),t(o=>o.filter(n=>n.id!==i.id))},onSubmit:({value:i,fileList:o})=>{console.log("Submitted:",i,"Files:",o),t([])}}),e.jsxs(p,{size:"small",color:"surface.text.gray.muted",children:["✕ on the uploading file fires"," ",e.jsx(p,{as:"span",size:"small",weight:"semibold",children:"onFileDismiss"}),". Trash on the success file fires"," ",e.jsx(p,{as:"span",size:"small",weight:"semibold",children:"onFileRemove"}),". Check the console."]})]})};B.storyName="With File Dismiss During Upload";const D=()=>{const[s,t]=P.useState([{name:"screenshot.png",size:76160,status:"error",errorText:"Upload failed",id:"file-1"}]);return e.jsx(l,{maxWidth:"600px",children:e.jsx(x,{placeholder:"Ask a question...",fileList:s,onFocus:()=>console.log("Focus"),onBlur:()=>console.log("Blur"),onFileRemove:({file:i})=>t(o=>o.filter(n=>n.id!==i.id)),onFileReupload:({file:i})=>{console.log("Re-upload clicked for:",i.name),t(o=>o.map(n=>n.id===i.id?{...n,status:"uploading",errorText:void 0}:n)),setTimeout(()=>{t(o=>o.map(n=>n.id===i.id?{...n,status:"success"}:n))},2e3)}})})};D.storyName="With File Reupload";const G=()=>{const[s,t]=P.useState([{name:"document-1.pdf",size:102400,status:"success",id:"file-1"},{name:"report-q1.xlsx",size:204800,status:"success",id:"file-2"},{name:"screenshot.png",size:76160,status:"success",id:"file-3"},{name:"invoice.pdf",size:512e3,status:"success",id:"file-4"},{name:"presentation.pptx",size:1048576,status:"success",id:"file-5"}]);return e.jsxs(l,{maxWidth:"600px",display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(x,{placeholder:"Ask a question...",fileList:s,onFileChange:z(t),onFileRemove:({file:i})=>t(o=>o.filter(n=>n.id!==i.id)),accept:".jpg,.png,.pdf,.xlsx,.pptx",onSubmit:({value:i,fileList:o})=>{console.log("Submitted:",i,"Files:",o),t([])}}),e.jsx(p,{size:"small",color:"surface.text.gray.muted",children:"Each file item is exactly 200px wide. The list autoscrolls to the latest file when a new file is added."})]})};G.storyName="With Many Files (Autoscroll)";var H,V,_;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  return <Box maxWidth="600px">
      <ChatInput {...args} />
    </Box>;
}`,...(_=(V=b.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var Y,O,X;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  return <Box maxWidth="600px">
      <ChatInput {...args} />
    </Box>;
}`,...(X=(O=v.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var K,Q,J;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <Box maxWidth="600px">
      <ChatInput {...args} />
    </Box>;
}`,...(J=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var Z,ee,te;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <Box maxWidth="600px">
      <ChatInput placeholder="Ask a question..." suggestions={['Ask Ray anything related to Green Loom', 'Show me recent transactions', 'Help me set up webhooks']} onSuggestionAccept={({
      suggestion
    }) => {
      console.log('Accepted suggestion:', suggestion);
    }} onSubmit={({
      value
    }) => console.log('Submitted:', value)} />
    </Box>;
}`,...(te=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,oe,ie;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const [files, setFiles] = useState<BladeFileList>([]);
  return <Box maxWidth="600px" display="flex" flexDirection="column" gap="spacing.5">
      <ChatInput placeholder="Ask a question..." fileList={files} onFileChange={handlePlatformFileChange(setFiles)} onFileRemove={({
      file
    }) => setFiles(prev => prev.filter(f => f.id !== file.id))} accept=".jpg,.png,.pdf,.xlsx" onSubmit={({
      value,
      fileList
    }) => {
      console.log('Submitted:', value, 'Files:', fileList);
      setFiles([]);
    }} />
      <Text size="small" color="surface.text.gray.muted">
        Attached files: {files.length}
        {isReactNative() ? ' (native: tap upload to attach a mock file — wire your own picker in app code)' : ''}
      </Text>
    </Box>;
}`,...(ie=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ae,ne,re;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const [validationState, setValidationState] = useState<'error' | 'none'>('none');
  const [errorText, setErrorText] = useState('Something went wrong. Please try again.');
  return <Box maxWidth="600px" paddingTop="spacing.8" display="flex" flexDirection="column" gap="spacing.5">
      <ChatInput placeholder="Ask a question..." validationState={validationState} errorText={errorText} onErrorDismiss={() => setValidationState('none')} onSubmit={({
      value
    }) => {
      console.log('value', value);
      setErrorText(\`"\${value}"? What is even that. Ask better questions\`);
      setValidationState('error');
    }} />
    </Box>;
}`,...(re=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var le,ce,de;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const [isGenerating, setIsGenerating] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  return <Box maxWidth="600px" display="flex" flexDirection="column" gap="spacing.5">
      <ChatInput placeholder="Ask a question..." isGenerating={isGenerating} onSubmit={({
      value
    }) => {
      console.log('Submitted:', value);
      const controller = new AbortController();
      abortRef.current = controller;
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
      }, 5000);
    }} onStop={() => {
      console.log('Stopped generation');
      abortRef.current?.abort();
      setIsGenerating(false);
    }} />
      <Text size="small" color="surface.text.gray.muted">
        {isGenerating ? 'Generating... (auto-stops in 5s)' : 'Ready'}
      </Text>
    </Box>;
}`,...(de=(ce=L.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,ge;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const [text, setText] = useState('');
  const [files, setFiles] = useState<BladeFileList>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const handleSubmit = ({
    value,
    fileList
  }: {
    value: string;
    fileList: BladeFileList;
  }): void => {
    console.log('Submitted:', value, 'Files:', fileList);
    const controller = new AbortController();
    abortRef.current = controller;
    setIsGenerating(true);
    setText('');
    setFiles([]);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };
  return <Box maxWidth="600px">
      <ChatInput value={text} onChange={({
      value
    }) => setText(value)} onSubmit={handleSubmit} placeholder="Ask a question..." isGenerating={isGenerating} onStop={() => {
      abortRef.current?.abort();
      setIsGenerating(false);
    }} fileList={files} onFileChange={handlePlatformFileChange(setFiles)} onFileRemove={({
      file
    }) => setFiles(prev => prev.filter(f => f.id !== file.id))} accept=".jpg,.png,.pdf,.xlsx" suggestions={['How do I integrate payment gateway?', 'Show me recent transactions', 'Help me set up webhooks']} onSuggestionAccept={({
      suggestion
    }) => {
      setText(suggestion);
    }} />
    </Box>;
}`,...(ge=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var me,fe,he;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const [files, setFiles] = useState<BladeFileList>([]);
  return <Box maxWidth="600px" display="flex" flexDirection="column" gap="spacing.8">
      <ChatInput placeholder="Try pasting an image here..." fileList={files} onFileChange={handlePlatformFileChange(setFiles)} onFileRemove={({
      file
    }) => setFiles(prev => prev.filter(f => f.id !== file.id))} accept="image/*" onSubmit={({
      value,
      fileList
    }) => {
      console.log('Submitted:', value, 'Files:', fileList);
      setFiles([]);
    }} />
      {!isReactNative() && <Box display="flex" flexDirection="column" gap="spacing.3">
          <Text size="small" color="surface.text.gray.muted">
            Right-click the image below and copy it, then paste (Ctrl/Cmd+V) into the input above.
          </Text>
          <img src="https://picsum.photos/300/200" alt="Sample" style={{
        width: 300,
        borderRadius: 8
      }} />
        </Box>}
    </Box>;
}`,...(he=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var xe,ye,Se;k.parameters={...k.parameters,docs:{...(xe=k.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const [messages, setMessages] = useState<ChatMsg[]>(INITIAL_MESSAGES);
  const [text, setText] = useState('');
  const [files, setFiles] = useState<BladeFileList>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [inputErrorText, setInputErrorText] = useState<string | undefined>(undefined);
  const abortRef = useRef<AbortController | null>(null);
  const scrollAnchorRef = useRef<HTMLDivElement | null>(null);
  const suggestions = ['Set up webhooks', 'Invalid PAN Number', 'Show me Error', 'How do I integrate payments?', 'Show recent transactions'];
  useEffect(() => {
    if (!isReactNative()) {
      scrollAnchorRef.current?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [messages]);
  const handleRetry = useCallback((failedMsgId: string, originalContent: string) => {
    setMessages(prev => prev.map(msg => msg.id === failedMsgId ? {
      ...msg,
      validationState: 'none',
      errorText: undefined
    } : msg));
    const responseId = \`msg-response-\${Date.now()}\`;
    const controller = new AbortController();
    abortRef.current = controller;
    setIsGenerating(true);
    setMessages(prev => [...prev, {
      id: responseId,
      senderType: 'other',
      isLoading: true,
      loadingTexts: LOADING_TEXTS,
      content: ''
    }]);
    setTimeout(() => {
      startResponse(responseId, failedMsgId, originalContent, controller.signal, setMessages, setIsGenerating);
    }, 1200);
  }, []);
  const handleSubmit = useCallback(({
    value,
    fileList
  }: {
    value: string;
    fileList: BladeFileList;
  }) => {
    if (value.trim().toLowerCase() === 'invalid pan number') {
      setInputErrorText(\`"\${value.trim()}" is not a valid PAN number. Please enter a valid 10-character PAN.\`);
      return;
    } else {
      setInputErrorText(undefined);
    }
    const userMsgId = \`msg-user-\${Date.now()}\`;
    const responseId = \`msg-response-\${Date.now() + 1}\`;
    setMessages(prev => [...prev, {
      id: userMsgId,
      senderType: 'self',
      content: fileList.length > 0 ? \`\${value} [+\${fileList.length} file(s)]\` : value,
      messageType: 'last',
      validationState: 'none'
    }, {
      id: responseId,
      senderType: 'other',
      isLoading: true,
      loadingTexts: LOADING_TEXTS,
      content: ''
    }]);
    setText('');
    setFiles([]);
    const controller = new AbortController();
    abortRef.current = controller;
    setIsGenerating(true);
    setTimeout(() => {
      startResponse(responseId, userMsgId, value, controller.signal, setMessages, setIsGenerating);
    }, 1200);
  }, []);
  const handleStop = useCallback(() => {
    abortRef.current?.abort();
    setMessages(prev => prev.map(msg => msg.isLoading || msg.isStreaming ? {
      ...msg,
      isLoading: false,
      isStreaming: false,
      loadingTexts: undefined,
      content: msg.isStreaming ? \`\${msg.content as string} [stopped]\` : 'Generation was stopped.'
    } : msg));
    setIsGenerating(false);
  }, []);
  return <Box display="flex" flexDirection="column" height="640px" width="720px" marginX="auto" overflow="hidden" backgroundColor="surface.background.gray.intense">
      {/* Header */}
      <Box display="flex" alignItems="center" gap="spacing.3" padding="spacing.4" borderBottomWidth="thin" borderBottomColor="surface.border.gray.muted">
        <RayIcon size="xlarge" color="surface.icon.onSea.onSubtle" />
        <Box display="flex" flexDirection="column">
          <Text variant="body" size="medium" weight="semibold">
            Ray
          </Text>
          <Text variant="body" size="small" color="surface.text.gray.muted">
            {isGenerating ? 'Typing...' : 'Green Loom AI Assistant'}
          </Text>
        </Box>
      </Box>

      {/* Messages area */}
      <Box flex="1" overflow="auto" padding="spacing.5" display="flex" flexDirection="column" gap="spacing.4">
        {messages.map(msg => <Move isVisible motionTriggers={['mount']} type="inout" key={msg.id}>
            <Box display="flex" flexDirection="column" alignItems={msg.senderType === 'self' ? 'flex-end' : 'flex-start'}>
              <ChatMessage senderType={msg.senderType} messageType={msg.messageType} isLoading={msg.isLoading} loadingText={msg.loadingTexts} validationState={msg.validationState ?? 'none'} errorText={msg.errorText} onClick={msg.validationState === 'error' ? () => handleRetry(msg.id, msg.content as string) : undefined} leading={msg.senderType === 'other' ? <RayIcon size="xlarge" color="surface.icon.onSea.onSubtle" /> : undefined}>
                {msg.isLoading ? undefined : msg.content}
              </ChatMessage>
            </Box>
          </Move>)}
        <Box ref={scrollAnchorRef} />
      </Box>

      {/* Input area */}
      <Box padding="spacing.4">
        <ChatInput value={text} onChange={({
        value
      }) => {
        setText(value);
      }} onSubmit={handleSubmit} validationState={inputErrorText ? 'error' : 'none'} errorText={inputErrorText} onErrorDismiss={() => setInputErrorText(undefined)} isGenerating={isGenerating} onStop={handleStop} fileList={files} onFileChange={({
        fileList
      }) => {
        if (isReactNative()) {
          setFiles(prev => {
            if (prev.length >= 3) {
              setInputErrorText('You can attach a maximum of 3 files.');
              return prev;
            }
            return [...prev, createMockNativeAttachment(prev.length + 1)];
          });
          return;
        }
        if (fileList.length > 3) {
          setInputErrorText('You can attach a maximum of 3 files.');
          return;
        }
        setFiles(fileList);
      }} onFileRemove={({
        file
      }) => setFiles(prev => prev.filter(f => f.id !== file.id))} accept=".jpg,.jpeg,.png,.pdf" suggestions={suggestions} onSuggestionAccept={({
        suggestion
      }) => setText(suggestion)} placeholder="Ask Ray anything about Green Loom..." />
      </Box>
    </Box>;
}`,...(Se=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var be,ve,Te;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [files, setFiles] = React.useState<BladeFileList>([{
    name: 'report.pdf',
    size: 204800,
    status: 'uploading',
    uploadPercent: 45,
    id: 'file-uploading-1'
  } as BladeFileList[0], {
    name: 'screenshot.png',
    size: 76160,
    status: 'success',
    id: 'file-success-1'
  } as BladeFileList[0]]);
  return <Box maxWidth="600px" display="flex" flexDirection="column" gap="spacing.5">
      <ChatInput placeholder="Ask a question..." fileList={files} onFileChange={handlePlatformFileChange(setFiles)} onFileRemove={({
      file
    }) => {
      console.log('onFileRemove (trash icon):', file.name);
      setFiles(prev => prev.filter(f => f.id !== file.id));
    }} onFileDismiss={({
      file
    }) => {
      console.log('onFileDismiss (✕ on uploading file):', file.name);
      // Cancel your in-flight upload here, e.g. abortController.abort()
      setFiles(prev => prev.filter(f => f.id !== file.id));
    }} onSubmit={({
      value,
      fileList
    }) => {
      console.log('Submitted:', value, 'Files:', fileList);
      setFiles([]);
    }} />
      <Text size="small" color="surface.text.gray.muted">
        ✕ on the uploading file fires{' '}
        <Text as="span" size="small" weight="semibold">
          onFileDismiss
        </Text>
        . Trash on the success file fires{' '}
        <Text as="span" size="small" weight="semibold">
          onFileRemove
        </Text>
        . Check the console.
      </Text>
    </Box>;
}`,...(Te=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var Fe,Ce,Ie;D.parameters={...D.parameters,docs:{...(Fe=D.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  const [files, setFiles] = React.useState<BladeFileList>([{
    name: 'screenshot.png',
    size: 76160,
    status: 'error',
    errorText: 'Upload failed',
    id: 'file-1'
  } as BladeFileList[0]]);
  return <Box maxWidth="600px">
      <ChatInput placeholder="Ask a question..." fileList={files} onFocus={() => console.log('Focus')} onBlur={() => console.log('Blur')} onFileRemove={({
      file
    }) => setFiles(prev => prev.filter(f => f.id !== file.id))} onFileReupload={({
      file
    }) => {
      console.log('Re-upload clicked for:', file.name);
      setFiles(prev => prev.map(f => f.id === file.id ? {
        ...f,
        status: 'uploading',
        errorText: undefined
      } : f));
      // Simulate re-upload completing after 2s
      setTimeout(() => {
        setFiles(prev => prev.map(f => f.id === file.id ? {
          ...f,
          status: 'success'
        } : f));
      }, 2000);
    }} />
    </Box>;
}`,...(Ie=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};var we,Re,Le;G.parameters={...G.parameters,docs:{...(we=G.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [files, setFiles] = React.useState<BladeFileList>([{
    name: 'document-1.pdf',
    size: 102400,
    status: 'success',
    id: 'file-1'
  } as BladeFileList[0], {
    name: 'report-q1.xlsx',
    size: 204800,
    status: 'success',
    id: 'file-2'
  } as BladeFileList[0], {
    name: 'screenshot.png',
    size: 76160,
    status: 'success',
    id: 'file-3'
  } as BladeFileList[0], {
    name: 'invoice.pdf',
    size: 512000,
    status: 'success',
    id: 'file-4'
  } as BladeFileList[0], {
    name: 'presentation.pptx',
    size: 1048576,
    status: 'success',
    id: 'file-5'
  } as BladeFileList[0]]);
  return <Box maxWidth="600px" display="flex" flexDirection="column" gap="spacing.5">
      <ChatInput placeholder="Ask a question..." fileList={files} onFileChange={handlePlatformFileChange(setFiles)} onFileRemove={({
      file
    }) => setFiles(prev => prev.filter(f => f.id !== file.id))} accept=".jpg,.png,.pdf,.xlsx,.pptx" onSubmit={({
      value,
      fileList
    }) => {
      console.log('Submitted:', value, 'Files:', fileList);
      setFiles([]);
    }} />
      <Text size="small" color="surface.text.gray.muted">
        Each file item is exactly 200px wide. The list autoscrolls to the latest file when a new
        file is added.
      </Text>
    </Box>;
}`,...(Le=(Re=G.parameters)==null?void 0:Re.docs)==null?void 0:Le.source}}};const at=["Default","WithPlaceholder","Disabled","WithGhostSuggestions","WithFileUpload","WithValidationError","StopGeneration","FullFeatured","PasteImageUpload","ProductUsecaseChatExperience","WithFileDismissDuringUpload","WithFileReupload","WithManyFiles"];export{b as Default,T as Disabled,A as FullFeatured,j as PasteImageUpload,k as ProductUsecaseChatExperience,L as StopGeneration,B as WithFileDismissDuringUpload,D as WithFileReupload,w as WithFileUpload,I as WithGhostSuggestions,G as WithManyFiles,v as WithPlaceholder,R as WithValidationError,at as __namedExportsOrder,it as default};
