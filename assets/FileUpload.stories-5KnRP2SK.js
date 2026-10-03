import{jm as j,j as e,B as n,H as b,r as u,a9 as k,jn as D,n as H,T as F,aK as _,ai as q,al as E,am as W,aY as $,aZ as G,a_ as Y}from"./iframe-C1qQ09LF.js";import{S as V}from"./stories-B5ZQVLcY.js";import{S as Z}from"./Sandbox.web-B2xP21Qp.js";import{S as J}from"./StoryPageWrapper-CS0_5maI.js";import{g as K}from"./storybookArgTypes-DFfQV31s.js";const Q=()=>e.jsxs(J,{componentName:"FileUpload",componentDescription:"The FileUpload component is used to handle file attachments, including the drag-and-drop interaction. It can be used in both controlled and uncontrolled forms. Primarily, it is used to upload files to a server or to display a list of uploaded files.",apiDecisionLink:null,figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=78670-22400&t=iCPjenOx6kthCZaE-1&scaling=min-zoom&page-id=74796%3A315549&mode=design",children:[e.jsx(b,{size:"large",children:"Usage"}),e.jsx(Z,{children:V})]}),X={title:"Components/FileUpload",component:j,tags:["autodocs"],argTypes:K(),parameters:{docs:{page:Q}}},ee=i=>{const[d,x]=u.useState(),[h,p]=u.useState([]),[f,y]=u.useState([]),[T,M]=u.useState(!1),[v,w]=u.useState(!1),[U,P]=u.useState(),B=D()==="react-native",N=(a,r)=>{p(r.map(t=>(t.id===a.id&&(t.status="uploading"),t)));const o=new FormData;return o.append("file",a),o.append("upload_preset","blade-file-upload-demo"),o.append("cloud_name","snitin315"),fetch("https://api.cloudinary.com/v1_1/snitin315/image/upload",{method:"POST",body:o}).then(t=>(p(r.map(s=>(s.id===a.id&&(s.status="success"),s))),t.json())).then(t=>(t.error&&p(r.map(s=>(s.id===a.id&&(s.status="error",s.errorText=`Oops! Something went wrong. ${t.error.message}`),s))),t)).catch(t=>{p(r.map(s=>(s.id===a.id&&(s.status="error",s.errorText=`Oops! Something went wrong. ${t.message}`),s)))})},z=({fileList:a})=>{const r=a.filter(o=>!o.status);Promise.all(r.map(o=>N(o,a))).then(o=>{y(t=>[...t,...o])}).catch(o=>{console.error(o)})};return e.jsxs(n,{display:"flex",flexDirection:"column",padding:"spacing.10",backgroundColor:"surface.background.gray.intense",children:[e.jsx(n,{children:T?e.jsxs(n,{children:[e.jsxs(b,{marginBottom:"spacing.4",children:["Product: ",d]}),e.jsx(b,{children:"Images:"}),f.map((a,r)=>e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[B?e.jsxs(F,{children:["Image ",r+1,": ",(a==null?void 0:a.url)??"uploaded"]}):e.jsx("img",{src:a.url,height:"30%",width:"30%",alt:`Your product ${r}`}),e.jsx(_,{thickness:"thicker",variant:"normal"})]},r))]}):e.jsxs(n,{maxWidth:i.labelPosition==="left"?"500px":"400px",display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(b,{marginBottom:"spacing.4",children:"Add New Product"}),e.jsx(k,{label:"Product Name",placeholder:"Add product name",isRequired:!0,necessityIndicator:"required",onChange:({value:a})=>x(a),size:i.size==="variable"?"large":i.size,labelPosition:i.labelPosition}),e.jsx(j,{...i,fileList:h,onChange:({fileList:a})=>z({fileList:a}),onDrop:({fileList:a})=>z({fileList:a}),onPreview:({file:a})=>{w(!0),D()==="react-native"?P(a.name):P(URL.createObjectURL(a))}}),e.jsx(H,{type:"submit",variant:"primary",onClick:()=>{M(!0)},children:"Submit"})]})}),B?e.jsxs(q,{isOpen:v,onDismiss:()=>w(!1),children:[e.jsx(E,{title:"Image Preview"}),e.jsx(W,{children:e.jsx(n,{width:"100%",children:e.jsxs(F,{children:["Preview: ",U]})})})]}):e.jsxs($,{isOpen:v,onDismiss:()=>w(!1),size:"medium",children:[e.jsx(G,{title:"Image Preview"}),e.jsx(Y,{children:e.jsx(n,{width:"100%",children:e.jsx("img",{src:U,alt:"Preview",width:"50%",height:"50%"})})})]})]})},m=ee.bind({});m.storyName="Basic File Upload with Preview";m.args={label:"Upload Product Images",helpText:"Upload .jpg, .jpeg, or .png file only. You can upload upto 5 files with a maximum size of 2MB each.",accept:".jpg, .jpeg, .png",uploadType:"multiple",maxCount:5,maxSize:2*1024*1024,isRequired:!0,necessityIndicator:"required"};const c=(i,d,x,h)=>({id:i,name:d,size:x,type:"application/octet-stream",...h}),l=({initialFiles:i=[],...d})=>{const[x,h]=u.useState(i),p=({file:f})=>h(y=>y.filter(({id:T})=>T!==f.id));return e.jsx(j,{...d,fileList:x,onChange:({fileList:f})=>h(f),onRemove:p,onDismiss:p,onReupload:p})},S=({title:i,children:d})=>e.jsxs(n,{children:[e.jsx(F,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:i}),e.jsx(n,{display:"flex",flexDirection:"column",gap:"spacing.7",maxWidth:"480px",children:d})]}),g=()=>e.jsxs(n,{display:"flex",flexDirection:"column",gap:"spacing.10",children:[e.jsxs(S,{title:"Sizes",children:[e.jsx(l,{label:'size="small"',size:"small",uploadType:"single"}),e.jsx(l,{label:'size="medium" (default)',size:"medium",uploadType:"single"}),e.jsx(l,{label:'size="large"',size:"large",uploadType:"single"}),e.jsx(l,{label:'size="variable"',size:"variable",height:"160px",uploadType:"single"}),e.jsx(l,{label:'size="variable" with custom text',size:"variable",height:"160px",actionButtonText:"Choose a file",dropAreaText:"Drop your invoice here",accept:".pdf",uploadType:"single"})]}),e.jsxs(S,{title:"Drop Area Text",children:[e.jsx(l,{label:"Default text",uploadType:"single"}),e.jsx(l,{label:'Custom text: dropAreaText="Drop your logo here or"',dropAreaText:"Drop your logo here or",uploadType:"single"}),["small","medium","large"].map(i=>e.jsx(l,{label:`Hidden: dropAreaText="", size="${i}"`,size:i,dropAreaText:"",uploadType:"single"},i))]}),e.jsxs(S,{title:"Label Position",children:[e.jsx(l,{label:"Label on top (default)",uploadType:"single"}),e.jsx(l,{label:"Label on left",labelPosition:"left",uploadType:"single"}),e.jsx(l,{label:"Label on left, small",labelPosition:"left",size:"small",dropAreaText:"",helpText:"SVG, PNG or JPEG up to 1MB",uploadType:"single"}),e.jsx(l,{accessibilityLabel:"Upload document (no visible label)",uploadType:"single"})]}),e.jsxs(S,{title:"States",children:[e.jsx(l,{label:"With help text",helpText:"Upload .jpg, .jpeg, or .png file only",uploadType:"single"}),e.jsx(l,{label:"Required",isRequired:!0,necessityIndicator:"required",uploadType:"single"}),e.jsx(l,{label:"Optional",necessityIndicator:"optional",uploadType:"single"}),e.jsx(l,{label:"Error",validationState:"error",errorText:"Please upload a file to continue",uploadType:"single"}),e.jsx(l,{label:"Disabled",isDisabled:!0,helpText:"Uploads are turned off for this field",uploadType:"single"})]}),e.jsxs(S,{title:"With Files",children:[e.jsx(l,{label:'Single upload with a file (uploadType="single")',uploadType:"single",initialFiles:[c("single-1","gst-certificate.pdf",512*1024,{status:"success"})]}),e.jsx(l,{label:"Single upload with a failed file (re-upload or remove it)",uploadType:"single",initialFiles:[c("single-error-1","pan-card.png",4*1024*1024,{status:"error",errorText:"File is larger than 2MB"})]}),e.jsx(l,{label:'Multiple upload in every file state (uploadType="multiple")',uploadType:"multiple",helpText:"You can upload up to 5 files",initialFiles:[c("multi-1","invoice-march.pdf",1.2*1024*1024,{status:"success"}),c("multi-2","invoice-april.pdf",800*1024,{status:"uploading",uploadPercent:60}),c("multi-3","invoice-may.pdf",3*1024*1024,{status:"error",errorText:"File is larger than 2MB"})]}),e.jsx(l,{label:'Multiple upload with files, size="small"',size:"small",dropAreaText:"",uploadType:"multiple",initialFiles:[c("small-1","logo.svg",24*1024,{status:"success"}),c("small-2","logo-dark.svg",26*1024,{status:"success"})]})]})]});g.storyName="Showcase - All Variants";g.parameters={docs:{description:{story:"Every FileUpload variant in one place: sizes, drop area text, label positions, states, and single or multiple uploads with files in each upload state."}}};var L,I,R;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [productName, setProductName] = useState();
  const [uploadedFiles, setUploadedFiles] = useState<BladeFileList>([]);
  const [responseData, setResponseData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imageFileSource, setImageFileSource] = useState<string | undefined>();
  const isReactNative = getPlatformType() === 'react-native';
  const uploadFile = (file: BladeFile, fileList: BladeFileList): Promise<Response> => {
    setUploadedFiles(fileList.map(f => {
      if (f.id === file.id) {
        f.status = 'uploading';
      }
      return f;
    }));
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'blade-file-upload-demo');
    data.append('cloud_name', 'snitin315');
    return fetch('https://api.cloudinary.com/v1_1/snitin315/image/upload', {
      method: 'POST',
      body: data
    }).then(res => {
      setUploadedFiles(fileList.map(f => {
        if (f.id === file.id) {
          f.status = 'success';
        }
        return f;
      }));
      return res.json();
    }).then(data => {
      if (data.error) {
        setUploadedFiles(fileList.map(f => {
          if (f.id === file.id) {
            f.status = 'error';
            f.errorText = \`Oops! Something went wrong. \${data.error.message}\`;
          }
          return f;
        }));
      }
      return data;
    }).catch(error => {
      setUploadedFiles(fileList.map(f => {
        if (f.id === file.id) {
          f.status = 'error';
          f.errorText = \`Oops! Something went wrong. \${error.message}\`;
        }
        return f;
      }));
    });
  };
  const handleFileChange: FileUploadProps['onChange'] = ({
    fileList
  }) => {
    const unUploadedFiles = fileList.filter(file => !file.status);
    Promise.all(unUploadedFiles.map(file => uploadFile(file, fileList))).then(resData => {
      setResponseData(prevResponseData => [...prevResponseData, ...resData]);
    }).catch(error => {
      console.error(error);
    });
  };
  return <Box display="flex" flexDirection="column" padding="spacing.10" backgroundColor="surface.background.gray.intense">
      <Box>
        {!isSubmitted ? <Box maxWidth={args.labelPosition === 'left' ? '500px' : '400px'} display="flex" flexDirection="column" gap="spacing.5">
            <Heading marginBottom="spacing.4">Add New Product</Heading>
            <TextInput label="Product Name" placeholder="Add product name" isRequired necessityIndicator="required" onChange={({
          value
        }) => setProductName(value)} size={args.size === 'variable' ? 'large' : args.size} labelPosition={args.labelPosition} />
            <FileUploadComponent {...args} fileList={uploadedFiles} onChange={({
          fileList
        }) => handleFileChange({
          fileList
        })} onDrop={({
          fileList
        }) => handleFileChange({
          fileList
        })} onPreview={({
          file
        }) => {
          setIsOpen(true);
          // URL.createObjectURL is web-only; on native use the file name as a placeholder source.
          if (getPlatformType() === 'react-native') {
            setImageFileSource(file.name);
          } else {
            setImageFileSource(URL.createObjectURL(file as File));
          }
        }} />
            <Button type="submit" variant="primary" onClick={() => {
          setIsSubmitted(true);
        }}>
              Submit
            </Button>
          </Box> : <Box>
            <Heading marginBottom="spacing.4">Product: {productName}</Heading>

            <Heading>Images:</Heading>
            {responseData.map((res, index) => {
          return <Box key={index} display="flex" flexDirection="column" gap="spacing.5">
                  {isReactNative ? <Text>
                      Image {index + 1}: {res?.url ?? 'uploaded'}
                    </Text> : <img src={res.url} height="30%" width="30%" alt={\`Your product \${index}\`} />}
                  <Divider thickness="thicker" variant="normal" />
                </Box>;
        })}
          </Box>}
      </Box>
      {isReactNative ? <BottomSheet isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
          <BottomSheetHeader title="Image Preview" />
          <BottomSheetBody>
            <Box width="100%">
              <Text>Preview: {imageFileSource}</Text>
            </Box>
          </BottomSheetBody>
        </BottomSheet> : <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)} size="medium">
          <ModalHeader title="Image Preview" />
          <ModalBody>
            <Box width="100%">
              <img src={imageFileSource} alt="Preview" width="50%" height="50%" />
            </Box>
          </ModalBody>
        </Modal>}
    </Box>;
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var C,O,A;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.10">
      <ShowcaseSection title="Sizes">
        <ShowcaseFileUpload label='size="small"' size="small" uploadType="single" />
        <ShowcaseFileUpload label='size="medium" (default)' size="medium" uploadType="single" />
        <ShowcaseFileUpload label='size="large"' size="large" uploadType="single" />
        <ShowcaseFileUpload label='size="variable"' size="variable" height="160px" uploadType="single" />
        <ShowcaseFileUpload label='size="variable" with custom text' size="variable" height="160px" actionButtonText="Choose a file" dropAreaText="Drop your invoice here" accept=".pdf" uploadType="single" />
      </ShowcaseSection>

      <ShowcaseSection title="Drop Area Text">
        <ShowcaseFileUpload label="Default text" uploadType="single" />
        <ShowcaseFileUpload label='Custom text: dropAreaText="Drop your logo here or"' dropAreaText="Drop your logo here or" uploadType="single" />
        {(['small', 'medium', 'large'] as const).map(size => <ShowcaseFileUpload key={size} label={\`Hidden: dropAreaText="", size="\${size}"\`} size={size} dropAreaText="" uploadType="single" />)}
      </ShowcaseSection>

      <ShowcaseSection title="Label Position">
        <ShowcaseFileUpload label="Label on top (default)" uploadType="single" />
        <ShowcaseFileUpload label="Label on left" labelPosition="left" uploadType="single" />
        <ShowcaseFileUpload label="Label on left, small" labelPosition="left" size="small" dropAreaText="" helpText="SVG, PNG or JPEG up to 1MB" uploadType="single" />
        <ShowcaseFileUpload accessibilityLabel="Upload document (no visible label)" uploadType="single" />
      </ShowcaseSection>

      <ShowcaseSection title="States">
        <ShowcaseFileUpload label="With help text" helpText="Upload .jpg, .jpeg, or .png file only" uploadType="single" />
        <ShowcaseFileUpload label="Required" isRequired necessityIndicator="required" uploadType="single" />
        <ShowcaseFileUpload label="Optional" necessityIndicator="optional" uploadType="single" />
        <ShowcaseFileUpload label="Error" validationState="error" errorText="Please upload a file to continue" uploadType="single" />
        <ShowcaseFileUpload label="Disabled" isDisabled helpText="Uploads are turned off for this field" uploadType="single" />
      </ShowcaseSection>

      <ShowcaseSection title="With Files">
        <ShowcaseFileUpload label='Single upload with a file (uploadType="single")' uploadType="single" initialFiles={[createShowcaseFile('single-1', 'gst-certificate.pdf', 512 * 1024, {
        status: 'success'
      })]} />
        <ShowcaseFileUpload label="Single upload with a failed file (re-upload or remove it)" uploadType="single" initialFiles={[createShowcaseFile('single-error-1', 'pan-card.png', 4 * 1024 * 1024, {
        status: 'error',
        errorText: 'File is larger than 2MB'
      })]} />
        <ShowcaseFileUpload label='Multiple upload in every file state (uploadType="multiple")' uploadType="multiple" helpText="You can upload up to 5 files" initialFiles={[createShowcaseFile('multi-1', 'invoice-march.pdf', 1.2 * 1024 * 1024, {
        status: 'success'
      }), createShowcaseFile('multi-2', 'invoice-april.pdf', 800 * 1024, {
        status: 'uploading',
        uploadPercent: 60
      }), createShowcaseFile('multi-3', 'invoice-may.pdf', 3 * 1024 * 1024, {
        status: 'error',
        errorText: 'File is larger than 2MB'
      })]} />
        <ShowcaseFileUpload label='Multiple upload with files, size="small"' size="small" dropAreaText="" uploadType="multiple" initialFiles={[createShowcaseFile('small-1', 'logo.svg', 24 * 1024, {
        status: 'success'
      }), createShowcaseFile('small-2', 'logo-dark.svg', 26 * 1024, {
        status: 'success'
      })]} />
      </ShowcaseSection>
    </Box>;
}`,...(A=(O=g.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const ae=["CustomPreview","FileUploadShowcase"],re=Object.freeze(Object.defineProperty({__proto__:null,CustomPreview:m,FileUploadShowcase:g,__namedExportsOrder:ae,default:X},Symbol.toStringTag,{value:"Module"}));export{re as f};
