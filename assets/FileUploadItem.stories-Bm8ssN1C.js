import{jo as x,j as a,r as Z,B as v,T as K,H as f}from"./iframe-C1qQ09LF.js";import{S as Q}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,V=()=>a.jsx(Q,{componentName:"FileUploadItem",componentDescription:"FileUploadItem is a sub-component of FileUpload that displays individual file items with their upload status, actions, and progress.",apiDecisionLink:null,figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=78670-22400&t=iCPjenOx6kthCZaE-1&scaling=min-zoom&page-id=74796%3A315549&mode=design"}),o=(e,i,S)=>({id:`file-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:e,size:i,type:"application/octet-stream",...S}),se={title:"Components/FileUpload/FileUploadItem",component:x,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["medium","large"]},onPreview:{action:"preview clicked"},onRemove:{action:"remove clicked"},onReupload:{action:"reupload clicked"},onDismiss:{action:"dismiss clicked"}},parameters:{docs:{page:V}}},r=e=>a.jsx(v,{maxWidth:"400px",children:a.jsx(x,{...e})}),n=r.bind({});n.storyName="Success State";n.args={file:o("document.pdf",1024*500,{status:"success"}),size:"medium",onRemove:({file:e})=>s("onRemove")(e.name),onPreview:({file:e})=>s("onPreview")(e.name)};const l=r.bind({});l.storyName="Success State with Preview";l.args={file:o("image.png",1024*1024*1.5,{status:"success"}),size:"medium",onPreview:({file:e})=>s("onPreview")(e.name),onRemove:({file:e})=>s("onRemove")(e.name)};const m=r.bind({});m.storyName="Uploading State";m.args={file:o("large-file.zip",1024*1024*10,{status:"uploading",uploadPercent:45}),size:"medium",onDismiss:({file:e})=>s("onDismiss")(e.name)};const d=r.bind({});d.storyName="Uploading State (Indeterminate)";d.args={file:o("uploading-file.docx",1024*1024*2,{status:"uploading"}),size:"medium",onDismiss:({file:e})=>s("onDismiss")(e.name)};const c=r.bind({});c.storyName="Error State";c.args={file:o("failed-upload.xlsx",1024*1024*5,{status:"error",errorText:"Upload failed. Please try again."}),size:"medium",onReupload:({file:e})=>s("onReupload")(e.name),onRemove:({file:e})=>s("onRemove")(e.name)};const p=r.bind({});p.storyName="Error State (Re-upload only)";p.args={file:o("failed-upload.xlsx",1024*1024*5,{status:"error",errorText:"Upload failed. Please try again."}),size:"medium",onReupload:({file:e})=>s("onReupload")(e.name),onRemove:void 0};const u=r.bind({});u.storyName="Large Size";u.args={file:o("report.pdf",1024*1024*3.5,{status:"success"}),size:"large",onPreview:({file:e})=>s("onPreview")(e.name),onRemove:({file:e})=>s("onRemove")(e.name)};const Y=()=>{const[e,i]=Z.useState(""),S=o("document.pdf",1024*500,{status:"success"}),H=o("uploading.zip",1024*1024*10,{status:"uploading",uploadPercent:65}),C=o("failed.xlsx",1024*1024*5,{status:"error",errorText:"File size exceeded. Maximum allowed is 2MB."});return a.jsxs(v,{maxWidth:"400px",display:"flex",flexDirection:"column",gap:"spacing.4",children:[a.jsx(v,{padding:"spacing.3",backgroundColor:"surface.background.gray.moderate",borderRadius:"medium",children:a.jsxs(K,{weight:"semibold",children:["Last Action: ",e]})}),a.jsx(f,{size:"small",children:"Success State"}),a.jsx(x,{file:S,size:"medium",onPreview:({file:t})=>i(`onPreview: ${t.name}`),onRemove:({file:t})=>i(`onRemove: ${t.name}`)}),a.jsx(f,{size:"small",children:"Uploading State"}),a.jsx(x,{file:H,size:"medium",onDismiss:({file:t})=>i(`onDismiss: ${t.name}`)}),a.jsx(f,{size:"small",children:"Error State"}),a.jsx(x,{file:C,size:"medium",onReupload:({file:t})=>i(`onReupload: ${t.name}`),onRemove:({file:t})=>i(`onRemove: ${t.name}`)})]})},g=Y.bind({});g.storyName="All States";var R,F,U;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <Box maxWidth="400px">
      <FileUploadItem {...args} />
    </Box>;
}`,...(U=(F=n.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var z,h,w;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <Box maxWidth="400px">
      <FileUploadItem {...args} />
    </Box>;
}`,...(w=(h=l.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var y,B,P;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <Box maxWidth="400px">
      <FileUploadItem {...args} />
    </Box>;
}`,...(P=(B=m.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var I,b,A;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <Box maxWidth="400px">
      <FileUploadItem {...args} />
    </Box>;
}`,...(A=(b=d.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var j,D,L;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <Box maxWidth="400px">
      <FileUploadItem {...args} />
    </Box>;
}`,...(L=(D=c.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var k,E,T;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <Box maxWidth="400px">
      <FileUploadItem {...args} />
    </Box>;
}`,...(T=(E=p.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var W,$,M;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  return <Box maxWidth="400px">
      <FileUploadItem {...args} />
    </Box>;
}`,...(M=($=u.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var N,O,_;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [lastAction, setLastAction] = useState<string>('');
  const successFile = createMockFile('document.pdf', 1024 * 500, {
    status: 'success'
  });
  const uploadingFile = createMockFile('uploading.zip', 1024 * 1024 * 10, {
    status: 'uploading',
    uploadPercent: 65
  });
  const errorFile = createMockFile('failed.xlsx', 1024 * 1024 * 5, {
    status: 'error',
    errorText: 'File size exceeded. Maximum allowed is 2MB.'
  });
  return <Box maxWidth="400px" display="flex" flexDirection="column" gap="spacing.4">
      <Box padding="spacing.3" backgroundColor="surface.background.gray.moderate" borderRadius="medium">
        <Text weight="semibold">Last Action: {lastAction}</Text>
      </Box>

      <Heading size="small">Success State</Heading>
      <FileUploadItem file={successFile} size="medium" onPreview={({
      file
    }) => setLastAction(\`onPreview: \${file.name}\`)} onRemove={({
      file
    }) => setLastAction(\`onRemove: \${file.name}\`)} />

      <Heading size="small">Uploading State</Heading>
      <FileUploadItem file={uploadingFile} size="medium" onDismiss={({
      file
    }) => setLastAction(\`onDismiss: \${file.name}\`)} />

      <Heading size="small">Error State</Heading>
      <FileUploadItem file={errorFile} size="medium" onReupload={({
      file
    }) => setLastAction(\`onReupload: \${file.name}\`)} onRemove={({
      file
    }) => setLastAction(\`onRemove: \${file.name}\`)} />
    </Box>;
}`,...(_=(O=g.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const oe=["SuccessState","SuccessWithPreview","UploadingState","UploadingIndeterminate","ErrorState","ErrorStateReuploadOnly","LargeSize","AllStates"];export{g as AllStates,c as ErrorState,p as ErrorStateReuploadOnly,u as LargeSize,n as SuccessState,l as SuccessWithPreview,d as UploadingIndeterminate,m as UploadingState,oe as __namedExportsOrder,se as default};
