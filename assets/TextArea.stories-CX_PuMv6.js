import{jJ as t,ad as p,j as e,B as s,T as c,l as _e,y as Ne,z as ke,ak as Me,jx as qe,X as Fe,x as V,n as He}from"./iframe-C1qQ09LF.js";import{S as Ue}from"./Sandbox.web-B2xP21Qp.js";import{S as Ke}from"./StoryPageWrapper-CS0_5maI.js";import{g as Ge}from"./storybookArgTypes-DFfQV31s.js";import{u as Ze}from"./useToast.web-DG48GqLd.js";const n={BASE_PROPS:"TextArea Props",LABEL_PROPS:"Label Props",VALIDATION_PROPS:"Validation Props",TRAILING_VISUAL_PROPS:"Trailing Visual Props"},Ye={title:"Components/Input/TextArea",component:t,args:{defaultValue:void 0,placeholder:"Enter Description",name:"description",isDisabled:!1,value:void 0,maxCharacters:void 0,autoFocus:!1,onChange:({name:a,value:r})=>{console.log(`input field ${a} content changed to ${r}`)},onFocus:({name:a,value:r})=>{console.log(`input field ${a} received focus. The value is ${r}`)},onBlur:({name:a,value:r})=>{console.log(`input field ${a} content lost focus. The value is ${r}`)},label:"Description",labelPosition:"top",necessityIndicator:void 0,isRequired:!1,validationState:"none",helpText:void 0,showHelpTextOnFocus:!1,errorText:void 0,successText:void 0,showClearButton:void 0,numberOfLines:2},tags:["autodocs"],argTypes:{defaultValue:{table:{category:n.BASE_PROPS}},size:{table:{category:n.BASE_PROPS}},placeholder:{table:{category:n.BASE_PROPS}},name:{table:{category:n.BASE_PROPS}},isDisabled:{table:{category:n.BASE_PROPS}},value:{table:{category:n.BASE_PROPS}},maxCharacters:{control:{type:"number"},table:{category:n.BASE_PROPS}},numberOfLines:{control:{type:"range",min:2,max:5,step:1},table:{category:n.BASE_PROPS}},autoFocus:{table:{category:n.BASE_PROPS}},testID:{table:{category:n.BASE_PROPS}},onSubmit:{control:{disable:!0},table:{category:n.BASE_PROPS}},onChange:{table:{category:n.BASE_PROPS}},onFocus:{table:{category:n.BASE_PROPS}},onBlur:{table:{category:n.BASE_PROPS}},label:{table:{category:n.LABEL_PROPS}},labelSuffix:{table:{category:n.LABEL_PROPS}},labelTrailing:{table:{category:n.LABEL_PROPS}},accessibilityLabel:{table:{category:n.LABEL_PROPS}},labelPosition:{table:{category:n.LABEL_PROPS}},necessityIndicator:{table:{category:n.VALIDATION_PROPS}},isRequired:{table:{category:n.VALIDATION_PROPS}},validationState:{table:{category:n.VALIDATION_PROPS}},helpText:{table:{category:n.VALIDATION_PROPS}},showHelpTextOnFocus:{table:{category:n.VALIDATION_PROPS}},errorText:{table:{category:n.VALIDATION_PROPS}},successText:{table:{category:n.VALIDATION_PROPS}},showClearButton:{table:{category:n.TRAILING_VISUAL_PROPS}},onClearButtonClick:{table:{category:n.TRAILING_VISUAL_PROPS}},...Ge()},parameters:{docs:{page:()=>e.jsxs(Ke,{componentDescription:"The TextArea component lets you enter long form text which spans over multiple lines.",componentName:"TextArea",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Input/TextArea/_decisions/decisions.md",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=76077-93900&t=2ZLEEt6A65Rona3N-1&scaling=min-zoom&page-id=11115%3A166743&mode=design",children:[e.jsx(Fe,{children:"Usage"}),e.jsx(Ue,{children:`
              import { TextArea } from '@greenloom/ui/components';

              function App() {
                return (
                  <TextArea 
                    label="Description" 
                    placeholder="Enter Description"
                    helpText="Enter Text Here" 
                    maxCharacters={100} 
                  />
                )
              }

              export default App;
            `})]})}}},b=({...a})=>e.jsx(t,{...a}),i=b.bind({});i.storyName="TextArea";const d=b.bind({});d.storyName="TextArea with Help Text";d.args={helpText:"Add a message here"};const x=b.bind({});x.storyName="TextArea with error";x.args={validationState:"error",errorText:"Invalid message"};const m=b.bind({});m.storyName="TextArea with success";m.args={defaultValue:"TextArea content",validationState:"success",successText:"Validated"};const u=b.bind({});u.storyName="TextArea without Label";u.args={label:void 0,accessibilityLabel:"Description",helpText:"Add a message here"};const g=b.bind({});g.storyName="TextArea number of lines";g.args={numberOfLines:4};const Je=()=>e.jsx(i,{label:"Description",defaultValue:"Textarea content",name:"description",maxCharacters:10,onChange:({name:a,value:r})=>console.log({name:a,value:r})}),C=Je.bind({}),Qe=({...a})=>e.jsxs(s,{display:"flex",flexDirection:"column",children:[e.jsx(c,{size:"large",marginBottom:"spacing.2",children:"Medium Size:"}),e.jsx(t,{...a,size:"medium"}),e.jsx(c,{size:"large",marginTop:"spacing.4",marginBottom:"spacing.2",children:"Large Size:"}),e.jsx(t,{...a,size:"large"})]}),D=Qe.bind({}),Xe=()=>e.jsx(i,{label:"Description",placeholder:"Enter description",defaultValue:"Textarea content",name:"description",onChange:({name:a,value:r})=>console.log({name:a,value:r})}),j=Xe.bind({}),ea=()=>{const[a,r]=p.useState("");return e.jsx(i,{label:"Description",placeholder:"Enter Description",value:a,name:"description",onChange:({name:o,value:l})=>{console.log(`sending ${o}:${l} to analytics service`),r(l??"")}})},E=ea.bind({}),aa=()=>e.jsxs(e.Fragment,{children:[e.jsxs(V,{display:"flex",gap:"spacing.5",children:[e.jsx(i,{showClearButton:!0,label:"Description",placeholder:"Enter Description",name:"description"}),e.jsx(i,{label:"Description",placeholder:"Enter Description",name:"description",defaultValue:"Anurag"}),e.jsx(i,{validationState:"error",label:"Description",placeholder:"Enter Description",name:"description",defaultValue:"Anurag",errorText:"Name is invalid"}),e.jsx(i,{validationState:"success",label:"Description",placeholder:"Enter Description",name:"description",defaultValue:"Anurag",successText:"Name is valid"})]}),e.jsxs(V,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(i,{label:"Description",placeholder:"Enter Description",name:"description",maxCharacters:100}),e.jsx(i,{label:"Description",placeholder:"Enter Description",name:"description",numberOfLines:4}),e.jsx(i,{label:"Description",placeholder:"Enter Description",name:"description",labelPosition:"left"}),e.jsx(i,{necessityIndicator:"optional",label:"Description",placeholder:"Enter Description",name:"description",labelPosition:"left",maxCharacters:100}),e.jsx(i,{necessityIndicator:"required",label:"Description",placeholder:"Enter Description",name:"description",labelPosition:"left",numberOfLines:3,maxCharacters:100,validationState:"none",helpText:"Write your message"}),e.jsx(i,{necessityIndicator:"required",accessibilityLabel:"Description",placeholder:"Enter Description",name:"description",labelPosition:"left",numberOfLines:3,maxCharacters:100,validationState:"none",helpText:"Write your message"})]})]}),L=aa.bind({}),h=()=>{const a=p.useRef(null);return e.jsxs(V,{gap:"spacing.3",display:"flex",alignItems:"end",children:[e.jsx(t,{ref:a,label:"Message"}),e.jsx(He,{onClick:()=>{var r;(r=a==null?void 0:a.current)==null||r.focus(),console.log(a)},children:"Click to focus the input"})]})};h.storyName="Text Area Ref";h.parameters={docs:{description:{story:"TextArea component exposes the `ref` prop. The `ref` exposes two methods `focus` & `scrollIntoView` which can be used to programatically control the DOM element"}}};const P=({...a})=>{const[r,o]=p.useState([]);return e.jsx(s,{display:"flex",flexDirection:"column",children:e.jsx(t,{...a,numberOfLines:3,isTaggedInput:!0,tags:r,onTagChange:({tags:l})=>{o(l)}})})},v=({...a})=>{const r=Ze();return e.jsxs(s,{display:"flex",flexDirection:"column",children:[e.jsx(qe,{}),e.jsx(t,{...a,numberOfLines:3,placeholder:"Press Shift + Enter for next line and Enter for submit",onKeyDown:({event:o,value:l})=>{!o.shiftKey&&o.key==="Enter"&&(o.preventDefault(),r.show({content:`Submit: ${l}`,color:"positive",type:"informational"}))}})]})},A=({...a})=>{const[r,o]=p.useState([]);return e.jsx(s,{display:"flex",flexDirection:"column",children:e.jsx(t,{...a,tags:r,onTagChange:({tags:l})=>{o(l)}})})};A.args={isTaggedInput:!0,showClearButton:!1};const S=({...a})=>{const[r,o]=p.useState([]);return e.jsxs(s,{display:"flex",flexDirection:"column",children:[e.jsx(t,{...a,onTagChange:({tags:l})=>{console.log("new tags",l),o(l)}}),e.jsx(s,{children:e.jsx(c,{children:r.join(", ")})})]})};S.args={isTaggedInput:!0,showClearButton:!0};const ta=a=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a),B=({...a})=>{const[r,o]=p.useState([]),[l,$e]=p.useState(""),[R,w]=p.useState(""),I=p.useRef(!1);return e.jsx(s,{display:"flex",flexDirection:"column",children:e.jsx(t,{...a,value:l,onChange:({value:y})=>{I.current||($e(y??""),w("")),I.current=!1},tags:r,onTagChange:({tags:y})=>{if(y.length<r.length){o(y);return}ta(l)?o(y):(I.current=!0,w(`Invalid email ${l}. Try with different email`))},errorText:R,validationState:R?"error":void 0})})};B.args={isTaggedInput:!0,showClearButton:!1};const T=b.bind({});T.storyName="TextArea with Label Suffix & Trailing";T.args={label:"Enter GSTIN",placeholder:"Enter GSTIN",labelSuffix:e.jsx(Ne,{content:"Your GSTIN is used to generate invoices and receipts",placement:"right",children:e.jsx(ke,{display:"flex",children:e.jsx(Me,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(_e,{size:"small",children:"Learn more"})};const f=()=>{const[a,r]=p.useState(["john@example.com","jane@example.com"]);return e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.8",children:[e.jsxs(s,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Basic Variants"}),e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Default",placeholder:"Enter description",name:"default"}),e.jsx(t,{label:"With Value",defaultValue:"This is a sample description text that spans multiple lines.",name:"withValue"}),e.jsx(t,{label:"With Help Text",placeholder:"Enter description",helpText:"This is a helpful message",name:"withHelpText"}),e.jsx(t,{label:"Disabled",placeholder:"Enter description",isDisabled:!0,name:"disabled"})]})]}),e.jsxs(s,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Validation States"}),e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Error State",defaultValue:"Invalid description",validationState:"error",errorText:"This field has an error",name:"error"}),e.jsx(t,{label:"Success State",defaultValue:"Valid description",validationState:"success",successText:"This field is valid",name:"success"})]})]}),e.jsxs(s,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Sizes"}),e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Medium Size",placeholder:"Medium size textarea",size:"medium",name:"sizeMedium"}),e.jsx(t,{label:"Large Size",placeholder:"Large size textarea",size:"large",name:"sizeLarge"})]})]}),e.jsxs(s,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Label Positions"}),e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Label Top",placeholder:"Label on top",labelPosition:"top",name:"labelTop"}),e.jsx(t,{label:"Label Left",placeholder:"Label on left",labelPosition:"left",name:"labelLeft"})]})]}),e.jsxs(s,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Necessity Indicators"}),e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Required Field",placeholder:"Enter description",necessityIndicator:"required",name:"required"}),e.jsx(t,{label:"Optional Field",placeholder:"Enter description",necessityIndicator:"optional",name:"optional"})]})]}),e.jsxs(s,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Number of Lines"}),e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"2 Lines (Default)",placeholder:"Enter description",numberOfLines:2,name:"lines2"}),e.jsx(t,{label:"3 Lines",placeholder:"Enter description",numberOfLines:3,name:"lines3"}),e.jsx(t,{label:"4 Lines",placeholder:"Enter description",numberOfLines:4,name:"lines4"}),e.jsx(t,{label:"5 Lines",placeholder:"Enter description",numberOfLines:5,name:"lines5"})]})]}),e.jsxs(s,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Max Characters"}),e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Max 50 Characters",placeholder:"Max 50 characters",maxCharacters:50,name:"maxCharacters50"}),e.jsx(t,{label:"Max 100 Characters",placeholder:"Max 100 characters",maxCharacters:100,name:"maxCharacters100"}),e.jsx(t,{label:"Max 200 Characters",defaultValue:"This is a sample text that demonstrates the character limit functionality.",maxCharacters:200,name:"maxCharacters200"})]})]}),e.jsxs(s,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Clear Button"}),e.jsx(t,{label:"With Clear Button",defaultValue:"Clear me",showClearButton:!0,name:"clearButton"})]}),e.jsxs(s,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"surface.text.gray.subtle",children:"With Label Suffix & Trailing"}),e.jsx(t,{label:"Description",placeholder:"Enter description",labelSuffix:e.jsx(Ne,{content:"Your description is used to provide additional context",placement:"right",children:e.jsx(ke,{display:"flex",children:e.jsx(Me,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(_e,{size:"small",children:"Learn more"}),name:"labelSuffixTrailing"})]}),e.jsxs(s,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"surface.text.gray.subtle",children:"With Tags (Tagged Input)"}),e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Email Addresses",placeholder:"Enter email and press Enter",isTaggedInput:!0,tags:a,onTagChange:({tags:o})=>r(o),name:"withTags"}),e.jsx(t,{label:"Email Addresses (No Tags)",placeholder:"Enter email and press Enter",isTaggedInput:!0,name:"withoutTags"})]})]})]})};f.storyName="Showcase - All Variants";f.parameters={docs:{description:{story:"A comprehensive showcase of all TextArea variants including basic states, validation states, sizes, label positions, number of lines, max characters, and more."}}};var O,z,W;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`({
  ...args
}) => {
  return <TextAreaComponent {...args} />;
}`,...(W=(z=i.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var _,N,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`({
  ...args
}) => {
  return <TextAreaComponent {...args} />;
}`,...(k=(N=d.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var M,$,q;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`({
  ...args
}) => {
  return <TextAreaComponent {...args} />;
}`,...(q=($=x.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var F,H,U;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`({
  ...args
}) => {
  return <TextAreaComponent {...args} />;
}`,...(U=(H=m.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var K,G,Z;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`({
  ...args
}) => {
  return <TextAreaComponent {...args} />;
}`,...(Z=(G=u.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};var Y,J,Q;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`({
  ...args
}) => {
  return <TextAreaComponent {...args} />;
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,ee,ae;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <TextArea label="Description" defaultValue="Textarea content" name="description" maxCharacters={10} onChange={({
    name,
    value
  }): void => console.log({
    name,
    value
  })} />;
}`,...(ae=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,ne;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`({
  ...args
}) => {
  return <Box display="flex" flexDirection="column">
      <Text size="large" marginBottom="spacing.2">
        Medium Size:
      </Text>
      <TextAreaComponent {...args} size="medium" />
      <Text size="large" marginTop="spacing.4" marginBottom="spacing.2">
        Large Size:
      </Text>
      <TextAreaComponent {...args} size="large" />
    </Box>;
}`,...(ne=(re=D.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,ie,oe;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <TextArea label="Description" placeholder="Enter description" defaultValue="Textarea content" name="description" onChange={({
    name,
    value
  }): void => console.log({
    name,
    value
  })} />;
}`,...(oe=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,ce,pe;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = React.useState('');
  return <TextArea label="Description" placeholder="Enter Description" value={inputValue} name="description" onChange={({
    name,
    value
  }): void => {
    console.log(\`sending \${name}:\${value} to analytics service\`);
    setInputValue(value ?? '');
  }} />;
}`,...(pe=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,xe,me;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <>
      <BaseBox display="flex" gap="spacing.5">
        <TextArea showClearButton label="Description" placeholder="Enter Description" name="description" />

        <TextArea label="Description" placeholder="Enter Description" name="description" defaultValue="Anurag" />

        <TextArea validationState="error" label="Description" placeholder="Enter Description" name="description" defaultValue="Anurag" errorText="Name is invalid" />

        <TextArea validationState="success" label="Description" placeholder="Enter Description" name="description" defaultValue="Anurag" successText="Name is valid" />
      </BaseBox>
      <BaseBox display="flex" flexDirection="column" gap="spacing.5">
        <TextArea label="Description" placeholder="Enter Description" name="description" maxCharacters={100} />

        <TextArea label="Description" placeholder="Enter Description" name="description" numberOfLines={4} />

        <TextArea label="Description" placeholder="Enter Description" name="description" labelPosition="left" />

        <TextArea necessityIndicator="optional" label="Description" placeholder="Enter Description" name="description" labelPosition="left" maxCharacters={100} />

        <TextArea necessityIndicator="required" label="Description" placeholder="Enter Description" name="description" labelPosition="left" numberOfLines={3} maxCharacters={100} validationState="none" helpText="Write your message" />
        <TextArea necessityIndicator="required" accessibilityLabel="Description" placeholder="Enter Description" name="description" labelPosition="left" numberOfLines={3} maxCharacters={100} validationState="none" helpText="Write your message" />
      </BaseBox>
    </>;
}`,...(me=(xe=L.parameters)==null?void 0:xe.docs)==null?void 0:me.source}}};var ue,ge,he;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  return <BaseBox gap="spacing.3" display="flex" alignItems="end">
      <TextAreaComponent ref={inputRef} label="Message" />
      <Button onClick={() => {
      inputRef?.current?.focus();
      console.log(inputRef);
    }}>
        Click to focus the input
      </Button>
    </BaseBox>;
}`,...(he=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var Te,fe,be;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`({
  ...args
}) => {
  const [tags, setTags] = React.useState<string[]>([]);
  return <Box display="flex" flexDirection="column">
      <TextAreaComponent {...args} numberOfLines={3} isTaggedInput={true} tags={tags} onTagChange={({
      tags
    }) => {
      setTags(tags);
    }} />
    </Box>;
}`,...(be=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var Ae,Se,Be;v.parameters={...v.parameters,docs:{...(Ae=v.parameters)==null?void 0:Ae.docs,source:{originalSource:`({
  ...args
}) => {
  const toast = useToast();
  return <Box display="flex" flexDirection="column">
      <ToastContainer />
      <TextAreaComponent {...args} numberOfLines={3} placeholder="Press Shift + Enter for next line and Enter for submit" onKeyDown={({
      event,
      value
    }) => {
      if (!event.shiftKey && event.key === 'Enter') {
        event.preventDefault();
        toast.show({
          content: \`Submit: \${value}\`,
          color: 'positive',
          type: 'informational'
        });
      }
    }} />
    </Box>;
}`,...(Be=(Se=v.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var ye,Ce,De;A.parameters={...A.parameters,docs:{...(ye=A.parameters)==null?void 0:ye.docs,source:{originalSource:`({
  ...args
}) => {
  const [tags, setTags] = React.useState<string[]>([]);
  return <Box display="flex" flexDirection="column">
      <TextAreaComponent {...args} tags={tags} onTagChange={({
      tags
    }) => {
      setTags(tags);
    }} />
    </Box>;
}`,...(De=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:De.source}}};var je,Ee,Le;S.parameters={...S.parameters,docs:{...(je=S.parameters)==null?void 0:je.docs,source:{originalSource:`({
  ...args
}) => {
  const [tagValues, setTagValues] = React.useState<string[]>([]);
  return <Box display="flex" flexDirection="column">
      <TextAreaComponent {...args} onTagChange={({
      tags
    }) => {
      console.log('new tags', tags);
      setTagValues(tags);
    }} />
      <Box>
        <Text>{tagValues.join(', ')}</Text>
      </Box>
    </Box>;
}`,...(Le=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var Pe,ve,Ie;B.parameters={...B.parameters,docs:{...(Pe=B.parameters)==null?void 0:Pe.docs,source:{originalSource:`({
  ...args
}) => {
  const [tags, setTags] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState('');
  const [errorText, setErrorText] = React.useState('');
  // we use ref because onTagChange and onChange is called in same render
  // So if we want to set error in onTagChange, and use its value in onChange, its not possible with useState
  const isErrorRef = React.useRef(false);
  return <Box display="flex" flexDirection="column">
      <TextAreaComponent {...args} value={inputValue} onChange={({
      value
    }) => {
      if (!isErrorRef.current) {
        setInputValue(value ?? '');
        setErrorText('');
      }
      isErrorRef.current = false;
    }} tags={tags} onTagChange={({
      tags: newTags
    }) => {
      const isTagRemoved = newTags.length < tags.length;
      if (isTagRemoved) {
        // we don't validate while removing tags
        setTags(newTags);
        return;
      }
      if (isValidEmail(inputValue)) {
        setTags(newTags);
      } else {
        isErrorRef.current = true;
        setErrorText(\`Invalid email \${inputValue}. Try with different email\`);
      }
    }} errorText={errorText} validationState={errorText ? 'error' : undefined} />
    </Box>;
}`,...(Ie=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:Ie.source}}};var Ve,Re,we;T.parameters={...T.parameters,docs:{...(Ve=T.parameters)==null?void 0:Ve.docs,source:{originalSource:`({
  ...args
}) => {
  return <TextAreaComponent {...args} />;
}`,...(we=(Re=T.parameters)==null?void 0:Re.docs)==null?void 0:we.source}}};var Oe,ze,We;f.parameters={...f.parameters,docs:{...(Oe=f.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  const [tagsWithInitial, setTagsWithInitial] = React.useState<string[]>(['john@example.com', 'jane@example.com']);
  return <Box display="flex" flexDirection="column" gap="spacing.8">
      {/* Basic Variants */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Basic Variants
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextAreaComponent label="Default" placeholder="Enter description" name="default" />
          <TextAreaComponent label="With Value" defaultValue="This is a sample description text that spans multiple lines." name="withValue" />
          <TextAreaComponent label="With Help Text" placeholder="Enter description" helpText="This is a helpful message" name="withHelpText" />
          <TextAreaComponent label="Disabled" placeholder="Enter description" isDisabled name="disabled" />
        </Box>
      </Box>

      {/* Validation States */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Validation States
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextAreaComponent label="Error State" defaultValue="Invalid description" validationState="error" errorText="This field has an error" name="error" />
          <TextAreaComponent label="Success State" defaultValue="Valid description" validationState="success" successText="This field is valid" name="success" />
        </Box>
      </Box>

      {/* Sizes */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Sizes
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextAreaComponent label="Medium Size" placeholder="Medium size textarea" size="medium" name="sizeMedium" />
          <TextAreaComponent label="Large Size" placeholder="Large size textarea" size="large" name="sizeLarge" />
        </Box>
      </Box>

      {/* Label Positions */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Label Positions
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextAreaComponent label="Label Top" placeholder="Label on top" labelPosition="top" name="labelTop" />
          <TextAreaComponent label="Label Left" placeholder="Label on left" labelPosition="left" name="labelLeft" />
        </Box>
      </Box>

      {/* Necessity Indicators */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Necessity Indicators
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextAreaComponent label="Required Field" placeholder="Enter description" necessityIndicator="required" name="required" />
          <TextAreaComponent label="Optional Field" placeholder="Enter description" necessityIndicator="optional" name="optional" />
        </Box>
      </Box>

      {/* Number of Lines */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Number of Lines
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextAreaComponent label="2 Lines (Default)" placeholder="Enter description" numberOfLines={2} name="lines2" />
          <TextAreaComponent label="3 Lines" placeholder="Enter description" numberOfLines={3} name="lines3" />
          <TextAreaComponent label="4 Lines" placeholder="Enter description" numberOfLines={4} name="lines4" />
          <TextAreaComponent label="5 Lines" placeholder="Enter description" numberOfLines={5} name="lines5" />
        </Box>
      </Box>

      {/* With Max Characters */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Max Characters
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextAreaComponent label="Max 50 Characters" placeholder="Max 50 characters" maxCharacters={50} name="maxCharacters50" />
          <TextAreaComponent label="Max 100 Characters" placeholder="Max 100 characters" maxCharacters={100} name="maxCharacters100" />
          <TextAreaComponent label="Max 200 Characters" defaultValue="This is a sample text that demonstrates the character limit functionality." maxCharacters={200} name="maxCharacters200" />
        </Box>
      </Box>

      {/* With Clear Button */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Clear Button
        </Text>
        <TextAreaComponent label="With Clear Button" defaultValue="Clear me" showClearButton name="clearButton" />
      </Box>

      {/* With Label Suffix & Trailing */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="surface.text.gray.subtle">
          With Label Suffix & Trailing
        </Text>
        <TextAreaComponent label="Description" placeholder="Enter description" labelSuffix={<Tooltip content="Your description is used to provide additional context" placement="right">
              <TooltipInteractiveWrapper display="flex">
                <InfoIcon size="small" color="surface.icon.gray.muted" />
              </TooltipInteractiveWrapper>
            </Tooltip>} labelTrailing={<Link size="small">Learn more</Link>} name="labelSuffixTrailing" />
      </Box>

      {/* With Tags */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="surface.text.gray.subtle">
          With Tags (Tagged Input)
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextAreaComponent label="Email Addresses" placeholder="Enter email and press Enter" isTaggedInput tags={tagsWithInitial} onTagChange={({
          tags
        }) => setTagsWithInitial(tags)} name="withTags" />
          <TextAreaComponent label="Email Addresses (No Tags)" placeholder="Enter email and press Enter" isTaggedInput name="withoutTags" />
        </Box>
      </Box>
    </Box>;
}`,...(We=(ze=f.parameters)==null?void 0:ze.docs)==null?void 0:We.source}}};const ra=["TextArea","TextAreaHelpText","TextAreaError","TextAreaSuccess","TextAreaWithoutLabel","TextAreaNumberOfLines","TextAreaMaxCharacters","TextAreaSizes","TextAreaUncontrolled","TextAreaControlled","TextAreaKitchenSink","inputRef","TextAreaWithTags","TextAreaWithEnterSubmit","TextAreaWithControlledTags","TextAreaWithUncontrolledTags","TextAreaWithTagsValidation","TextAreaWithLabelSuffixTrailing","TextAreaShowcase"],pa=Object.freeze(Object.defineProperty({__proto__:null,TextArea:i,TextAreaControlled:E,TextAreaError:x,TextAreaHelpText:d,TextAreaKitchenSink:L,TextAreaMaxCharacters:C,TextAreaNumberOfLines:g,TextAreaShowcase:f,TextAreaSizes:D,TextAreaSuccess:m,TextAreaUncontrolled:j,TextAreaWithControlledTags:A,TextAreaWithEnterSubmit:v,TextAreaWithLabelSuffixTrailing:T,TextAreaWithTags:P,TextAreaWithTagsValidation:B,TextAreaWithUncontrolledTags:S,TextAreaWithoutLabel:u,__namedExportsOrder:ra,default:Ye,inputRef:h},Symbol.toStringTag,{value:"Module"}));export{pa as t};
