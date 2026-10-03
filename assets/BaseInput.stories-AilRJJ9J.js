import{k_ as B,j as a,X as m,j5 as ee,bf as ae,bg as ne,bh as te,ad as y,x as se,k$ as oe,B as re,T as h,l as O,jf as ie}from"./iframe-C1qQ09LF.js";import{i}from"./iconMap-BGYDFM5U.js";import{g as le}from"./storybookArgTypes-DFfQV31s.js";import"./preload-helper-Dp1pzeXC.js";const ce=""+new URL("base-inputfield-layout-7sMIdo0w.png",import.meta.url).href,e={BASE_PROPS:"Base Input Props",HEADER_PROPS:"Header Props",FOOTER_PROPS:"Footer Props",LEADING_VISUAL_PROPS:"Leading Visual Props",TRAILING_VISUAL_PROPS:"Trailing Visual Props",KEYBOARD_PROPS:"Keyboard Props"},Pe={title:"Components/Input/BaseInput (Internal)",component:B,args:{id:"base-input",defaultValue:void 0,placeholder:"Enter your first and last name",name:"fullName",type:"text",isDisabled:!1,value:void 0,maxCharacters:9999,textAlign:"left",autoFocus:!1,onFocus:({name:n,value:t})=>{console.log(`input field ${n} recevied focus. The value is ${t}`)},onChange:({name:n,value:t})=>{console.log(`input field ${n} content changed to ${t}`)},onBlur:({name:n,value:t})=>{console.log(`input field ${n} content lost focus. The value is ${t}`)},label:"Enter Name",labelPosition:"top",trailingHeaderSlot:void 0,necessityIndicator:void 0,isRequired:!1,validationState:"none",helpText:void 0,errorText:void 0,successText:void 0,trailingFooterSlot:void 0,leadingIcon:void 0,prefix:"",interactionElement:void 0,suffix:"",trailingIcon:void 0,keyboardReturnKeyType:void 0,autoCompleteSuggestionType:void 0,autoCapitalize:void 0},tags:["autodocs"],argTypes:{id:{table:{category:e.BASE_PROPS}},size:{table:{category:e.BASE_PROPS}},defaultValue:{table:{category:e.BASE_PROPS}},placeholder:{table:{category:e.BASE_PROPS}},name:{table:{category:e.BASE_PROPS}},type:{table:{category:e.BASE_PROPS}},isDisabled:{table:{category:e.BASE_PROPS}},value:{table:{category:e.BASE_PROPS}},maxCharacters:{control:{type:"number"},table:{category:e.BASE_PROPS}},textAlign:{table:{category:e.BASE_PROPS}},autoFocus:{table:{category:e.BASE_PROPS}},onFocus:{table:{category:e.BASE_PROPS}},onChange:{table:{category:e.BASE_PROPS}},onBlur:{table:{category:e.BASE_PROPS}},onSubmit:{table:{category:e.BASE_PROPS}},label:{table:{category:e.HEADER_PROPS}},labelPosition:{table:{category:e.HEADER_PROPS}},necessityIndicator:{table:{category:e.HEADER_PROPS}},trailingHeaderSlot:{table:{category:e.HEADER_PROPS}},isRequired:{table:{category:e.FOOTER_PROPS}},validationState:{table:{category:e.FOOTER_PROPS}},helpText:{table:{category:e.FOOTER_PROPS}},errorText:{table:{category:e.FOOTER_PROPS}},successText:{table:{category:e.FOOTER_PROPS}},trailingFooterSlot:{table:{category:e.FOOTER_PROPS}},leadingIcon:{name:"leadingIcon",type:"select",options:Object.keys(i),table:{category:e.LEADING_VISUAL_PROPS}},prefix:{table:{category:e.LEADING_VISUAL_PROPS}},interactionElement:{table:{category:e.TRAILING_VISUAL_PROPS}},suffix:{table:{category:e.TRAILING_VISUAL_PROPS}},trailingIcon:{name:"trailingIcon",type:"select",options:Object.keys(i),table:{category:e.TRAILING_VISUAL_PROPS}},keyboardReturnKeyType:{table:{category:e.KEYBOARD_PROPS}},keyboardType:{table:{category:e.KEYBOARD_PROPS}},autoCompleteSuggestionType:{table:{category:e.KEYBOARD_PROPS}},autoCapitalize:{table:{category:e.KEYBOARD_PROPS}},...le()},parameters:{docs:{page:()=>a.jsxs(a.Fragment,{children:[a.jsx(m,{}),a.jsx(ee,{children:"The BaseInput component is a component that will be used as a base to build all the other input fields like TextInput, PasswordInput, CardInput, OTPInput"}),a.jsx("img",{src:ce,alt:"Base Input Layout"}),a.jsx(m,{children:"Usage"}),a.jsx("code",{children:`import { BaseInput } from '@greenloom/ui/components' 
import type { BaseInputProps } from '@greenloom/ui/components'`}),a.jsx(m,{children:"Example"}),a.jsx(ae,{}),a.jsx(m,{children:"Properties"}),a.jsx(ne,{}),a.jsx(te,{})]})}}},b=({leadingIcon:n,trailingIcon:t,...s})=>a.jsx(B,{...s,leadingIcon:i[n],trailingIcon:i[t]}),r=b.bind({});r.storyName="BaseInput";const g=b.bind({});g.storyName="BaseInput with Help Text";g.args={helpText:"Please enter first and last name"};const p=b.bind({});p.storyName="BaseInput with error";p.args={validationState:"error",errorText:"Name is not valid"};const d=b.bind({});d.storyName="BaseInput with success";d.args={defaultValue:"John Ives",validationState:"success",successText:"Name validated"};const ue=({maxCharacters:n,size:t})=>a.jsx(r,{id:"base-input",label:"First Name",defaultValue:"John Ives",name:"fullName",maxCharacters:n,size:t,trailingFooterSlot:s=>a.jsx(se,{marginTop:t==="medium"?"spacing.2":"spacing.3",children:a.jsx(oe,{size:t,currentCount:(s==null?void 0:s.length)??0,maxCount:n??0})}),helpText:"Help Text",onChange:({name:s,value:o})=>console.log({name:s,value:o})}),I=ue.bind({}),ge=()=>a.jsx(r,{id:"base-input",label:"First Name",defaultValue:"John Ives",name:"fullName",onChange:({name:n,value:t})=>console.log({name:n,value:t})}),S=ge.bind({}),pe=()=>{const[n,t]=y.useState("");return a.jsx(r,{id:"base-input",label:"First Name",value:n,name:"fullName",onChange:({name:s,value:o})=>{console.log(`sending ${s}:${o} to analytics service`),t(o??"")}})},T=pe.bind({}),de=()=>{const[n,t]=y.useState(""),[s,o]=y.useState(-1),[l,R]=y.useState([]),Z=()=>l.map((u,c)=>a.jsx(ie,{_isVirtuallyFocused:c===s,_isTagInsideInput:!0,marginRight:"spacing.3",marginY:"spacing.2",onDismiss:()=>{R([...l.slice(0,c),...l.slice(c+1)])},children:u},c));return a.jsx(r,{id:"base-input",label:"First Name",as:"textarea",maxTagRows:"multiple",value:n,autoCompleteSuggestionType:"none",tags:Z(),activeTagIndex:s,showAllTags:!0,isDropdownTrigger:!0,setActiveTagIndex:o,name:"fullName",onChange:({name:u,value:c})=>{console.log(`sending ${u}:${c} to analytics service`),t(c??"")},onKeyDown:u=>{u.key==="Enter"&&(R([...l,n]),t(""),o(-1)),u.key==="Backspace"&&!n&&s<0&&R(l.slice(0,-1))}})},x=de.bind({}),me=({leadingIcon:n,trailingIcon:t,...s})=>{const o=i[n],l=i[t];return a.jsxs(re,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[a.jsx(h,{size:"large",marginBottom:"spacing.1",children:"Medium Size:"}),a.jsx(B,{...s,leadingIcon:o,trailingIcon:l,size:"medium",trailingButton:a.jsx(O,{onClick:()=>console.log("Clicked Apply"),children:"Apply"})}),a.jsx(h,{size:"large",marginBottom:"spacing.1",children:"Large Size:"}),a.jsx(B,{...s,leadingIcon:i[n],trailingIcon:i[t],size:"large",trailingButton:a.jsx(O,{onClick:()=>console.log("Clicked Apply"),children:"Apply"})})]})},P=me.bind({});var C,v,A;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`({
  leadingIcon,
  trailingIcon,
  ...args
}) => {
  return <BaseInputComponent {...args} leadingIcon={iconMap[leadingIcon as unknown as string]} trailingIcon={iconMap[trailingIcon as unknown as string]} />;
}`,...(A=(v=r.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var _,E,f;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`({
  leadingIcon,
  trailingIcon,
  ...args
}) => {
  return <BaseInputComponent {...args} leadingIcon={iconMap[leadingIcon as unknown as string]} trailingIcon={iconMap[trailingIcon as unknown as string]} />;
}`,...(f=(E=g.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var k,V,j;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`({
  leadingIcon,
  trailingIcon,
  ...args
}) => {
  return <BaseInputComponent {...args} leadingIcon={iconMap[leadingIcon as unknown as string]} trailingIcon={iconMap[trailingIcon as unknown as string]} />;
}`,...(j=(V=p.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var N,L,w;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`({
  leadingIcon,
  trailingIcon,
  ...args
}) => {
  return <BaseInputComponent {...args} leadingIcon={iconMap[leadingIcon as unknown as string]} trailingIcon={iconMap[trailingIcon as unknown as string]} />;
}`,...(w=(L=d.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var F,D,z;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`({
  maxCharacters,
  size
}) => {
  return <BaseInput id="base-input" label="First Name" defaultValue="John Ives" name="fullName" maxCharacters={maxCharacters} size={size} trailingFooterSlot={value => <BaseBox marginTop={size === 'medium' ? 'spacing.2' : 'spacing.3'}>
          <CharacterCounter size={size} currentCount={value?.length ?? 0} maxCount={maxCharacters ?? 0} />
        </BaseBox>} helpText="Help Text" onChange={({
    name,
    value
  }): void => console.log({
    name,
    value
  })} />;
}`,...(z=(D=I.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var M,$,H;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <BaseInput id="base-input" label="First Name" defaultValue="John Ives" name="fullName" onChange={({
    name,
    value
  }): void => console.log({
    name,
    value
  })} />;
}`,...(H=($=S.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var U,K,G;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = React.useState('');
  return <BaseInput id="base-input" label="First Name" value={inputValue} name="fullName" onChange={({
    name,
    value
  }): void => {
    console.log(\`sending \${name}:\${value} to analytics service\`);
    setInputValue(value ?? '');
  }} />;
}`,...(G=(K=T.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var Y,J,W;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = React.useState('');
  const [activeTagIndex, setActiveTagIndex] = React.useState(-1);
  const [currentTags, setCurrentTags] = React.useState<string[]>([]);
  const getTags = (): React.ReactElement[] => {
    return currentTags.map((currentTag, tagIndex) => {
      return <Tag _isVirtuallyFocused={tagIndex === activeTagIndex} _isTagInsideInput={true} key={tagIndex} marginRight="spacing.3" marginY="spacing.2" onDismiss={() => {
        setCurrentTags([...currentTags.slice(0, tagIndex), ...currentTags.slice(tagIndex + 1)]);
      }}>
          {currentTag}
        </Tag>;
    });
  };
  return <BaseInput id="base-input" label="First Name" as="textarea" maxTagRows="multiple" value={inputValue} autoCompleteSuggestionType="none" tags={getTags()} activeTagIndex={activeTagIndex} showAllTags={true} isDropdownTrigger={true} setActiveTagIndex={setActiveTagIndex} name="fullName" onChange={({
    name,
    value
  }): void => {
    console.log(\`sending \${name}:\${value} to analytics service\`);
    setInputValue(value ?? '');
  }} onKeyDown={e => {
    if (e.key === 'Enter') {
      setCurrentTags([...currentTags, inputValue]);
      setInputValue('');
      setActiveTagIndex(-1);
    }
    if (e.key === 'Backspace' && !inputValue && activeTagIndex < 0) {
      setCurrentTags(currentTags.slice(0, -1));
    }
  }} />;
}`,...(W=(J=x.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var q,X,Q;P.parameters={...P.parameters,docs:{...(q=P.parameters)==null?void 0:q.docs,source:{originalSource:`({
  leadingIcon,
  trailingIcon,
  ...args
}) => {
  const LeadingIcon = iconMap[leadingIcon as unknown as string];
  const TrailingIcon = iconMap[trailingIcon as unknown as string];
  return <Box display="flex" flexDirection="column" gap="spacing.5">
      <Text size="large" marginBottom="spacing.1">
        Medium Size:
      </Text>
      <BaseInputComponent {...args} leadingIcon={LeadingIcon} trailingIcon={TrailingIcon} size="medium" trailingButton={<Link onClick={() => console.log('Clicked Apply')}>Apply</Link>} />
      <Text size="large" marginBottom="spacing.1">
        Large Size:
      </Text>
      <BaseInputComponent {...args} leadingIcon={iconMap[leadingIcon as unknown as string]} trailingIcon={iconMap[trailingIcon as unknown as string]} size="large" trailingButton={<Link onClick={() => console.log('Clicked Apply')}>Apply</Link>} />
    </Box>;
}`,...(Q=(X=P.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};const ye=["BaseInput","BaseInputHelpText","BaseInputError","BaseInputSuccess","BaseInputMaxCharacters","BaseInputUncontrolled","BaseInputControlled","BaseInputControlledWithTags","BaseInputSizes"];export{r as BaseInput,T as BaseInputControlled,x as BaseInputControlledWithTags,p as BaseInputError,g as BaseInputHelpText,I as BaseInputMaxCharacters,P as BaseInputSizes,d as BaseInputSuccess,S as BaseInputUncontrolled,ye as __namedExportsOrder,Pe as default};
