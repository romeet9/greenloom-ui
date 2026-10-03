import{j as p,B as u,jm as m,r as te,ad as ae,n as ie}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const{within:g,userEvent:d,expect:a}=__STORYBOOK_MODULE_TEST__,ee=r=>new Promise(e=>setTimeout(e,r)),y="data:image/png;base64,R0lGODlhDwAPAKECAAAAzMzM/////wAAACwAAAAADwAPAAACIISPeQHsrZ5ModrLlN48CXF8m2iQ3YmmKqVlRtW4MLwWACH+H09wdGltaXplZCBieSBVbGVhZCBTbWFydFNhdmVyIQAAOw==",oe="data:application/pdf;base64,R0lGODlhDwAPAKECAAAAzMzM/////wAAACwAAAAADwAPAAACIISPeQHsrZ5ModrLlN48CXF8m2iQ3YmmKqVlRtW4MLwWACH+H09wdGltaXplZCBieSBVbGVhZCBTbWFydFNhdmVyIQAAOw==",f=()=>p.jsx(u,{maxWidth:"400px",children:p.jsx(m,{uploadType:"single",label:"Upload GST certificate",helpText:" .jpg, .jpeg, or .png file only",accept:"image/*",isRequired:!0,necessityIndicator:"required",name:"single-file-upload-input"})});f.play=async({canvasElement:r})=>{var l;const{getByText:e}=g(r),s=new Blob([""]),n="my-image.png",t=new File([s],n,{type:"image/png"}),i=(l=e("Drag files here or").closest("div"))==null?void 0:l.querySelector("input");await a(i).not.toHaveAttribute("multiple"),await a(i).toHaveAttribute("name","single-file-upload-input"),await d.upload(i,t),await a(e(n)).toBeVisible()};const x=()=>p.jsx(u,{maxWidth:"400px",children:p.jsx(m,{uploadType:"multiple",label:"Upload GST certificate",helpText:" .jpg, .jpeg, or .png file only",accept:"image/*",isRequired:!0,necessityIndicator:"required",name:"multiple-file-upload-input"})});x.play=async({canvasElement:r})=>{var l;const{getByText:e}=g(r),s=new Blob([y]),n=new File([s],"my-image.png",{type:"image/png"}),t=new File([s],"my-image2.png",{type:"image/png"}),i=(l=e("Drag files here or").closest("div"))==null?void 0:l.querySelector("input");await a(i).toHaveAttribute("multiple"),await d.upload(i,[n,t]),await a(e("my-image.png")).toBeInTheDocument(),await a(e("my-image2.png")).toBeInTheDocument()};const T=()=>p.jsx(u,{maxWidth:"400px",children:p.jsx(m,{uploadType:"single",label:"Upload GST certificate",helpText:" .jpg, .jpeg, or .png file only",accept:"image/*",isRequired:!0,necessityIndicator:"required",name:"single-file-upload-input"})});T.play=async({canvasElement:r})=>{var R;const{getByText:e,getByRole:s,queryByText:n}=g(r),t=new Blob([y]),i="my-image.png",l=new File([t],i,{type:"image/png"}),o=(R=e("Drag files here or").closest("div"))==null?void 0:R.querySelector("input");await a(o).not.toHaveAttribute("multiple"),await a(o).toHaveAttribute("name","single-file-upload-input"),await d.upload(o,l),await a(e(i)).toBeVisible();const c=s("button",{name:`Remove ${i}`});await d.click(c),await a(n(i)).not.toBeInTheDocument()};const h=()=>p.jsx(u,{maxWidth:"400px",children:p.jsx(m,{uploadType:"multiple",label:"Upload GST certificate",helpText:" .jpg, .jpeg, or .png file only",accept:"image/*",isRequired:!0,necessityIndicator:"required",name:"multiple-file-upload-input"})});h.play=async({canvasElement:r})=>{var A;const{getByText:e,getByRole:s,queryByText:n}=g(r),t=new Blob([y]),i=new File([t],"my-image.png",{type:"image/png"}),l=new File([t],"my-image2.png",{type:"image/png"}),o=(A=e("Drag files here or").closest("div"))==null?void 0:A.querySelector("input");await a(o).toHaveAttribute("multiple"),await a(o).toHaveAttribute("type","file"),await d.upload(o,[i,l]),await a(e("my-image.png")).toBeInTheDocument(),await a(e("my-image2.png")).toBeInTheDocument();const c=s("button",{name:"Remove my-image.png"}),R=s("button",{name:"Remove my-image2.png"});await d.click(R),await a(n("my-image.png")).toBeInTheDocument(),await a(n("my-image2.png")).not.toBeInTheDocument(),await d.click(c),await a(n("my-image.png")).not.toBeInTheDocument()};const w=()=>p.jsx(u,{maxWidth:"400px",children:p.jsx(m,{uploadType:"multiple",label:"Upload GST certificate",helpText:" .jpg, .jpeg, or .png file only",accept:"image/*",isRequired:!0,maxCount:2,necessityIndicator:"required"})});w.play=async({canvasElement:r})=>{var c;const{getByText:e,queryByText:s}=g(r),n=new Blob([y]),t=new File([n],"my-image.png",{type:"image/png"}),i=new File([n],"my-image2.png",{type:"image/png"}),l=new File([n],"my-image3.png",{type:"image/png"}),o=(c=e("Drag files here or").closest("div"))==null?void 0:c.querySelector("input");await a(o).toHaveAttribute("multiple"),await d.upload(o,[t,i,l]),await a(e("You can't upload more than 2 files.")).toBeInTheDocument(),await a(s("my-image.png")).not.toBeInTheDocument(),await a(s("my-image2.png")).not.toBeInTheDocument()};const B=()=>p.jsx(u,{maxWidth:"400px",children:p.jsx(m,{uploadType:"single",label:"Upload GST certificate",helpText:" .jpg, .jpeg, or .png file only",accept:"image/*",isRequired:!0,maxSize:10,necessityIndicator:"required"})});B.play=async({canvasElement:r})=>{var l;const{getByText:e}=g(r),s=new Blob([y]),n="my-image.png",t=new File([s],n,{type:"image/png"}),i=(l=e("Drag files here or").closest("div"))==null?void 0:l.querySelector("input");await a(i).not.toHaveAttribute("multiple"),await d.upload(i,t),await a(e("File size exceeded.")).toBeInTheDocument()};const b=()=>p.jsx(u,{maxWidth:"400px",children:p.jsx(m,{uploadType:"single",label:"Upload GST certificate",helpText:" .jpg, .jpeg, or .png file only",accept:"image/*",isRequired:!0,necessityIndicator:"required"})});b.play=async({canvasElement:r})=>{var o;const{getByText:e,queryByText:s}=g(r),n=new Blob([oe]),t="my-pdf.pdf",i=new File([n],t,{type:"application/pdf"}),l=(o=e("Drag files here or").closest("div"))==null?void 0:o.querySelector("input");await a(l).not.toHaveAttribute("multiple"),await d.upload(l,i),await a(s(t)).not.toBeInTheDocument()};const F=()=>{const[r,e]=te.useState([]),s=async(t,i)=>{e(i.map(o=>(o.id===t.id&&(o.status="uploading"),t)));const l=new FormData;return l.append("file",t),l.append("upload_preset","blade-file-upload-demo"),l.append("cloud_name","snitin315"),await ee(2e3),fetch("https://api.cloudinary.com/v1_1/snitin315invalid/image/upload",{method:"POST",body:l}).then(o=>(e(i.map(c=>(c.id===t.id&&(c.status="success"),t))),o.json())).then(o=>(o.error&&e(i.map(c=>(c.id===t.id&&(c.status="error",c.errorText=`Oops! Something went wrong. ${o.error.message}`),t))),o)).catch(o=>{e(i.map(c=>(c.id===t.id&&(c.status="error",c.errorText=`Oops! Something went wrong. ${o.message}`),t)))})},n=async({fileList:t})=>{await s(t[0],t)};return p.jsx(u,{maxWidth:"400px",children:p.jsx(m,{uploadType:"single",label:"Upload GST certificate",helpText:" .jpg, .jpeg, or .png file only",accept:"image/*",isRequired:!0,necessityIndicator:"required",onChange:n,fileList:r})})};F.play=async({canvasElement:r})=>{var o;const{getByText:e,getByRole:s}=g(r),n=new Blob([y]),t="my-image.png",i=new File([n],t,{type:"image/png"}),l=(o=e("Drag files here or").closest("div"))==null?void 0:o.querySelector("input");await a(l).not.toHaveAttribute("multiple"),await d.upload(l,i),await a(s("progressbar")).toBeInTheDocument(),await ee(5e3),await a(e(t)).toBeVisible(),await a(e("Oops! Something went wrong. Unknown API key")).toBeInTheDocument()};const j=()=>{const r=ae.useRef(null);return p.jsxs(u,{maxWidth:"400px",children:[p.jsx(m,{uploadType:"single",label:"Upload GST certificate",helpText:" .jpg, .jpeg, or .png file only",accept:"image/*",isRequired:!0,necessityIndicator:"required",ref:r}),p.jsx(ie,{onClick:()=>{var e;(e=r.current)==null||e.focus()},children:"Focus"})]})};j.play=async({canvasElement:r})=>{var i;const{getByText:e,getByRole:s}=g(r),n=(i=e("Drag files here or").closest("div"))==null?void 0:i.querySelector("input"),t=s("button",{name:"Focus"});await a(n).not.toHaveFocus(),await a(n).toHaveAttribute("type","file"),await d.click(t),await a(n).toHaveFocus()};const re={title:"Components/Interaction Tests/FileUpload",parameters:{controls:{disable:!0},a11y:{disable:!0},essentials:{disable:!0},actions:{disable:!1}}};var S,q,U;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box maxWidth="400px">
      <FileUpload uploadType="single" label="Upload GST certificate" helpText=" .jpg, .jpeg, or .png file only" accept="image/*" isRequired necessityIndicator="required" name="single-file-upload-input" />
    </Box>;
}`,...(U=(q=f.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var I,v,D;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box maxWidth="400px">
      <FileUpload uploadType="multiple" label="Upload GST certificate" helpText=" .jpg, .jpeg, or .png file only" accept="image/*" isRequired necessityIndicator="required" name="multiple-file-upload-input" />
    </Box>;
}`,...(D=(v=x.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var C,W,G;T.parameters={...T.parameters,docs:{...(C=T.parameters)==null?void 0:C.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box maxWidth="400px">
      <FileUpload uploadType="single" label="Upload GST certificate" helpText=" .jpg, .jpeg, or .png file only" accept="image/*" isRequired necessityIndicator="required" name="single-file-upload-input" />
    </Box>;
}`,...(G=(W=T.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var H,E,O;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box maxWidth="400px">
      <FileUpload uploadType="multiple" label="Upload GST certificate" helpText=" .jpg, .jpeg, or .png file only" accept="image/*" isRequired necessityIndicator="required" name="multiple-file-upload-input" />
    </Box>;
}`,...(O=(E=h.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var M,P,_;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box maxWidth="400px">
      <FileUpload uploadType="multiple" label="Upload GST certificate" helpText=" .jpg, .jpeg, or .png file only" accept="image/*" isRequired maxCount={2} necessityIndicator="required" />
    </Box>;
}`,...(_=(P=w.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var L,V,z;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box maxWidth="400px">
      <FileUpload uploadType="single" label="Upload GST certificate" helpText=" .jpg, .jpeg, or .png file only" accept="image/*" isRequired
    // 10 bytes for testing purpose
    maxSize={10} necessityIndicator="required" />
    </Box>;
}`,...(z=(V=B.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var k,Q,Z;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box maxWidth="400px">
      <FileUpload uploadType="single" label="Upload GST certificate" helpText=" .jpg, .jpeg, or .png file only" accept="image/*" isRequired necessityIndicator="required" />
    </Box>;
}`,...(Z=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var K,$,N;F.parameters={...F.parameters,docs:{...(K=F.parameters)==null?void 0:K.docs,source:{originalSource:`(): React.ReactElement => {
  const [uploadedFiles, setUploadedFiles] = useState<BladeFileList>([]);
  const uploadFile = async (file: BladeFile, fileList: BladeFileList): Promise<Response> => {
    setUploadedFiles(fileList.map(f => {
      if (f.id === file.id) {
        f.status = 'uploading';
      }
      return file;
    }));
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'blade-file-upload-demo');
    data.append('cloud_name', 'snitin315');

    // Wait for 2 seconds to simulate the file upload progress
    await sleep(2000);
    return fetch('https://api.cloudinary.com/v1_1/snitin315invalid/image/upload', {
      method: 'POST',
      body: data
    }).then(res => {
      setUploadedFiles(fileList.map(f => {
        if (f.id === file.id) {
          f.status = 'success';
        }
        return file;
      }));
      return res.json();
    }).then(data => {
      if (data.error) {
        setUploadedFiles(fileList.map(f => {
          if (f.id === file.id) {
            f.status = 'error';
            f.errorText = \`Oops! Something went wrong. \${data.error.message}\`;
          }
          return file;
        }));
      }
      return data;
    }).catch(error => {
      setUploadedFiles(fileList.map(f => {
        if (f.id === file.id) {
          f.status = 'error';
          f.errorText = \`Oops! Something went wrong. \${error.message}\`;
        }
        return file;
      }));
    });
  };
  const handleFileChange: FileUploadProps['onChange'] = async ({
    fileList
  }) => {
    await uploadFile(fileList[0], fileList);
  };
  return <Box maxWidth="400px">
      <FileUpload uploadType="single" label="Upload GST certificate" helpText=" .jpg, .jpeg, or .png file only" accept="image/*" isRequired necessityIndicator="required" onChange={handleFileChange} fileList={uploadedFiles} />
    </Box>;
}`,...(N=($=F.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var X,Y,J;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`(): React.ReactElement => {
  const ref = React.useRef<HTMLInputElement>(null);
  return <Box maxWidth="400px">
      <FileUpload uploadType="single" label="Upload GST certificate" helpText=" .jpg, .jpeg, or .png file only" accept="image/*" isRequired necessityIndicator="required" ref={ref} />
      <Button onClick={() => {
      ref.current?.focus();
    }}>
        Focus
      </Button>
    </Box>;
}`,...(J=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};const se=["TestSingleFileUpload","TestMultipleFileUpload","TestOnRemove","TestOnRemoveWithMultipleFiles","TestMaxCountFileUpload","TestMaxSizeFileUpload","TestAcceptProp","TestFileUploadError","TestRefProp"];export{b as TestAcceptProp,F as TestFileUploadError,w as TestMaxCountFileUpload,B as TestMaxSizeFileUpload,x as TestMultipleFileUpload,T as TestOnRemove,h as TestOnRemoveWithMultipleFiles,j as TestRefProp,f as TestSingleFileUpload,se as __namedExportsOrder,re as default};
