import{a9 as t,j as e,B as a,T as s,b7 as V,ak as K,at as c,b8 as u,aS as d,aq as p,ar as o,b5 as R,F as J,l as X,y as Nt,z as Rt,ad as b,X as kt,x as Q,n as Wt}from"./iframe-C1qQ09LF.js";import{i as g}from"./iconMap-BGYDFM5U.js";import{S as _t}from"./Sandbox.web-B2xP21Qp.js";import{S as Ft}from"./StoryPageWrapper-CS0_5maI.js";import{g as Mt}from"./storybookArgTypes-DFfQV31s.js";const n={BASE_PROPS:"Text Input Props",LABEL_PROPS:"Label Props",VALIDATION_PROPS:"Validation Props",LEADING_VISUAL_PROPS:"Leading Visual Props",TRAILING_VISUAL_PROPS:"Trailing Visual Props",KEYBOARD_PROPS:"Keyboard Props"},Ut={title:"Components/Input/TextInput",component:t,args:{defaultValue:void 0,placeholder:"Enter your first and last name",name:"fullName",type:"url",isDisabled:!1,value:void 0,maxCharacters:void 0,textAlign:"left",autoFocus:!1,size:"medium",onChange:({name:i,value:l})=>{console.log(`input field ${i} content changed to ${l}`)},onFocus:({name:i,value:l})=>{console.log(`input field ${i} received focus. The value is ${l}`)},onBlur:({name:i,value:l})=>{console.log(`input field ${i} content lost focus. The value is ${l}`)},label:"Enter Name",labelPosition:"top",necessityIndicator:void 0,isRequired:!1,validationState:"none",validationTextPlacement:"outside",helpText:void 0,showHelpTextOnFocus:!1,errorText:void 0,successText:void 0,icon:void 0,prefix:"",showClearButton:!0,suffix:"",keyboardReturnKeyType:void 0,autoCompleteSuggestionType:void 0,autoCapitalize:void 0},tags:["autodocs"],argTypes:{defaultValue:{table:{category:n.BASE_PROPS}},testID:{table:{category:n.BASE_PROPS}},size:{table:{category:n.BASE_PROPS}},placeholder:{table:{category:n.BASE_PROPS}},name:{table:{category:n.BASE_PROPS}},type:{table:{category:n.BASE_PROPS}},isDisabled:{table:{category:n.BASE_PROPS}},value:{table:{category:n.BASE_PROPS}},maxCharacters:{control:{type:"number"},table:{category:n.BASE_PROPS}},textAlign:{table:{category:n.BASE_PROPS}},autoFocus:{table:{category:n.BASE_PROPS}},onSubmit:{control:{disable:!0},table:{category:n.BASE_PROPS}},onClick:{control:{disable:!0},table:{category:n.BASE_PROPS}},onChange:{table:{category:n.BASE_PROPS}},onFocus:{control:{disable:!0},table:{category:n.BASE_PROPS}},onBlur:{control:{disable:!0},table:{category:n.BASE_PROPS}},label:{table:{category:n.LABEL_PROPS}},labelSuffix:{table:{category:n.LABEL_PROPS}},labelTrailing:{table:{category:n.LABEL_PROPS}},accessibilityLabel:{table:{category:n.LABEL_PROPS}},labelPosition:{table:{category:n.LABEL_PROPS}},necessityIndicator:{table:{category:n.VALIDATION_PROPS}},isRequired:{table:{category:n.VALIDATION_PROPS}},validationState:{table:{category:n.VALIDATION_PROPS}},helpText:{table:{category:n.VALIDATION_PROPS}},showHelpTextOnFocus:{table:{category:n.VALIDATION_PROPS}},errorText:{table:{category:n.VALIDATION_PROPS}},successText:{table:{category:n.VALIDATION_PROPS}},validationTextPlacement:{table:{category:n.VALIDATION_PROPS}},icon:{control:{disable:!0},table:{category:n.LEADING_VISUAL_PROPS}},leadingIcon:{name:"leadingIcon",type:"select",options:Object.keys(g),table:{category:n.LEADING_VISUAL_PROPS}},prefix:{table:{category:n.LEADING_VISUAL_PROPS}},suffix:{table:{category:n.TRAILING_VISUAL_PROPS}},trailingIcon:{name:"trailingIcon",type:"select",options:Object.keys(g),table:{category:n.TRAILING_VISUAL_PROPS}},trailingButton:{table:{category:n.TRAILING_VISUAL_PROPS}},showClearButton:{table:{category:n.TRAILING_VISUAL_PROPS}},onClearButtonClick:{table:{category:n.TRAILING_VISUAL_PROPS}},isLoading:{table:{category:n.TRAILING_VISUAL_PROPS}},keyboardReturnKeyType:{table:{category:n.KEYBOARD_PROPS}},autoCompleteSuggestionType:{table:{category:n.KEYBOARD_PROPS}},autoCapitalize:{table:{category:n.KEYBOARD_PROPS}},...Mt()},parameters:{docs:{page:()=>e.jsxs(Ft,{componentDescription:"The TextInput component is a component that can be used to input name, email, telephone, url, search or plain text.",componentName:"TextInput",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Input/TextInput/_decisions/_decisions.md",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=76077-57130&t=icthxu77bIRPBob9-1&scaling=min-zoom&page-id=10953%3A191554&mode=design",children:[e.jsx(kt,{children:"Usage"}),e.jsx(_t,{children:`
              import { TextInput } from '@greenloom/ui/components';

              function App() {
                return (
                  <TextInput 
                    label="Name" 
                    placeholder="Enter Name" 
                    onChange={(e) => console.log(e)} 
                  />
                )
              }

              export default App;
            `})]})}}},f=({leadingIcon:i,trailingIcon:l,...x})=>e.jsx(t,{...x,leadingIcon:g[i],trailingIcon:g[l]}),r=f.bind({});r.storyName="TextInput";const h=f.bind({});h.storyName="TextInput with type number";h.args={type:"number",label:"Enter Number",placeholder:"Enter any random number"};h.parameters={docs:{description:{story:`You might notice that type number allows you to enter other characters as well. That's because instead of setting type number internally, we prefer inputMode numeric. Checkout this article for the reasoning - <b><a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">Why the GOV.UK Design System team changed the input type for numbers</a></b> 

If you have a usecase of only allowing number in field, you can handle that on validations end.`}}};const T=f.bind({});T.storyName="TextInput with Help Text";T.args={helpText:"Please enter first and last name"};const I=f.bind({});I.storyName="TextInput with error";I.args={validationState:"error",errorText:"Name is not valid"};const w=f.bind({});w.storyName="TextInput with success";w.args={defaultValue:"John Ives",validationState:"success",successText:"Name validated"};const Gt=()=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Card Number",defaultValue:"4111 1111 1111 1111",validationState:"success",successText:"Verified",validationTextPlacement:"inside",showClearButton:!1}),e.jsx(t,{label:"Card Number",defaultValue:"4111 1111 1111",validationState:"error",errorText:"Invalid",validationTextPlacement:"inside",showClearButton:!1})]}),L=Gt.bind({});L.storyName="TextInput with validation text inside";const qt=()=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.6",children:[e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.2",children:"Inside"}),e.jsx(t,{label:"Amount",defaultValue:"1000",validationState:"success",successText:"Verified",validationTextPlacement:"inside",showClearButton:!1}),e.jsx(t,{label:"Amount",defaultValue:"10",validationState:"error",errorText:"Too low",validationTextPlacement:"inside",showClearButton:!1})]}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.2",children:"Outside"}),e.jsx(t,{label:"Amount",defaultValue:"1000",validationState:"success",successText:"Verified",validationTextPlacement:"outside",showClearButton:!1}),e.jsx(t,{label:"Amount",defaultValue:"10",validationState:"error",errorText:"Too low",validationTextPlacement:"outside",showClearButton:!1})]})]}),A=qt.bind({});A.storyName="TextInput validation placement (inside vs outside)";const Ht=()=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{size:"small",label:"Label",defaultValue:"Value",validationState:"success",successText:"Success Text",validationTextPlacement:"inside",showClearButton:!1}),e.jsx(t,{size:"medium",label:"Label",defaultValue:"Value",validationState:"success",successText:"Success Text",validationTextPlacement:"inside",showClearButton:!1}),e.jsx(t,{size:"large",label:"Label",defaultValue:"Value",validationState:"success",successText:"Success Text",validationTextPlacement:"inside",showClearButton:!1})]}),C=Ht.bind({});C.storyName="TextInput validation inside - sizes";const y=f.bind({});y.storyName="TextInput without label";y.args={defaultValue:"John Ives",label:void 0,accessibilityLabel:"Enter your name"};const B=f.bind({});B.storyName="TextInput with trailing action button";B.args={defaultValue:"John Ives",label:"Discount Code",trailingButton:e.jsx(X,{children:"Apply"}),showClearButton:!1};const Yt=()=>e.jsx(r,{label:"First Name",defaultValue:"John Ives",name:"fullName",maxCharacters:10,onChange:({name:i,value:l})=>console.log({name:i,value:l})}),O=Yt.bind({}),$t=({leadingIcon:i,trailingIcon:l,...x})=>e.jsxs(a,{display:"flex",flexDirection:"column",children:[e.jsx(s,{size:"large",marginBottom:"spacing.2",children:"Medium Size:"}),e.jsx(t,{...x,leadingIcon:g[i],trailingIcon:g[l],size:"medium"}),e.jsx(s,{size:"large",marginTop:"spacing.4",marginBottom:"spacing.2",children:"Large Size:"}),e.jsx(t,{...x,leadingIcon:g[i],trailingIcon:g[l],size:"large"})]}),k=$t.bind({}),Kt=()=>e.jsx(r,{label:"First Name",placeholder:"Enter your first and last name",defaultValue:"John Ives",name:"fullName",onChange:({name:i,value:l})=>console.log({name:i,value:l})}),W=Kt.bind({}),Jt=()=>{const[i,l]=b.useState("");return e.jsx(r,{label:"First Name",placeholder:"Enter your first and last name",value:i,name:"fullName",onChange:({name:x,value:m})=>{console.log(`sending ${x}:${m} to analytics service`),l(m??"")}})},_=Jt.bind({}),Xt=()=>e.jsxs(e.Fragment,{children:[e.jsxs(Q,{display:"flex",gap:"spacing.5",children:[e.jsx(r,{showClearButton:!0,label:"First Name",placeholder:"Enter your first",name:"fullName"}),e.jsx(r,{label:"First Name",placeholder:"Enter your first",name:"fullName",defaultValue:"Anurag"}),e.jsx(r,{validationState:"error",label:"First Name",placeholder:"Enter your first",name:"fullName",defaultValue:"Anurag",errorText:"Name is invalid"}),e.jsx(r,{validationState:"success",label:"First Name",placeholder:"Enter your first",name:"fullName",defaultValue:"Anurag",successText:"Name is valid"})]}),e.jsxs(Q,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(r,{label:"First Name",placeholder:"Enter your first",name:"fullName",maxCharacters:100}),e.jsx(r,{label:"First Name",placeholder:"Enter your first",name:"fullName"}),e.jsx(r,{label:"First Name",placeholder:"Enter your first",name:"fullName",labelPosition:"left"}),e.jsx(r,{necessityIndicator:"optional",label:"First Name",placeholder:"Enter your first",name:"fullName",labelPosition:"left",maxCharacters:100}),e.jsx(r,{necessityIndicator:"required",label:"First Name",placeholder:"Enter your first",name:"fullName",labelPosition:"left",maxCharacters:100,validationState:"none",helpText:"Write your message"}),e.jsx(r,{necessityIndicator:"required",label:"Enter Your Residential Address",placeholder:"Enter your address",name:"fullName",labelPosition:"left",maxCharacters:100,validationState:"none",helpText:"Write your message"}),e.jsx(r,{accessibilityLabel:"Enter Your Residential Address",necessityIndicator:"required",placeholder:"Enter your address",name:"fullName",labelPosition:"left",maxCharacters:100,validationState:"none",helpText:"Write your message"})]})]}),F=Xt.bind({}),S=()=>{const i=b.useRef(null);return e.jsxs(Q,{gap:"spacing.3",display:"flex",alignItems:"end",children:[e.jsx(t,{ref:i,label:"First Name",name:"fullName"}),e.jsx(Wt,{onClick:()=>{var l;(l=i==null?void 0:i.current)==null||l.focus(),console.log(i)},children:"Click to focus the input"})]})};S.storyName="Text Input Ref";S.parameters={docs:{description:{story:"TextInput component exposes the `ref` prop. The `ref` exposes two methods `focus` & `scrollIntoView` which can be used to programatically control the DOM element"}}};const Zt=i=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(i),D=({...i})=>{const[l,x]=b.useState([]);return e.jsx(a,{display:"flex",flexDirection:"column",children:e.jsx(t,{...i,tags:l,onTagChange:({tags:m})=>{x(m)}})})};D.args={isTaggedInput:!0,showClearButton:!1};const P=({...i})=>{const[l,x]=b.useState([]),[m,Ot]=b.useState(""),[ee,te]=b.useState(""),Z=b.useRef(!1);return e.jsx(a,{display:"flex",flexDirection:"column",children:e.jsx(t,{...i,value:m,onChange:({value:N})=>{Z.current||(Ot(N??""),te("")),Z.current=!1},tags:l,onTagChange:({tags:N})=>{if(N.length<l.length){x(N);return}Zt(m)?x(N):(Z.current=!0,te(`Invalid email ${m}. Try with different email`))},errorText:ee,validationState:ee?"error":void 0})})};P.args={isTaggedInput:!0,showClearButton:!1};const E=({...i})=>e.jsx(a,{display:"flex",flexDirection:"column",children:e.jsx(t,{...i,onTagChange:l=>{console.log("new tags",l)}})});E.args={isTaggedInput:!0,showClearButton:!0};const M=()=>{const i=["xsmall","small","medium","large"];return e.jsx(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:i.map(l=>e.jsx(t,{label:"Enter Website URL (for verification)",size:l,leading:e.jsxs(c,{children:[e.jsx(u,{defaultValue:"www",icon:R}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:"www.",value:"www"}),e.jsx(o,{title:"blog.",value:"blog"}),e.jsx(o,{title:"shop.",value:"shop"}),e.jsx(o,{title:"ecommerce.",value:"ecommerce"})]})})]}),trailing:e.jsxs(c,{children:[e.jsx(u,{defaultValue:"in"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:".in",value:"in"}),e.jsx(o,{title:".com",value:"com"}),e.jsx(o,{title:".biz",value:"biz"}),e.jsx(o,{title:".business",value:"business"}),e.jsx(o,{title:".razorpay",value:"razorpay"})]})})]})},l))})},U=()=>e.jsx(a,{display:"flex",flexDirection:"column",children:e.jsx(t,{label:"Enter your upi id",placeholder:"98000xxxxx",trailing:e.jsxs(c,{children:[e.jsx(u,{defaultValue:"sbi",icon:V}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:"@oksbi",value:"sbi"}),e.jsx(o,{title:"@hdfc",value:"hdfc"}),e.jsx(o,{title:"@razorpay-airtelbank",value:"razorpay"})]})})]})})}),G=()=>e.jsx(a,{display:"flex",flexDirection:"column",children:e.jsx(t,{label:"Select Currency",placeholder:"Select Currency",leading:e.jsxs(c,{children:[e.jsx(u,{defaultValue:"inr",icon:V}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:"INR",value:"inr"}),e.jsx(o,{title:"USD",value:"usd"})]})})]})})}),q=()=>e.jsx(t,{label:"Enter your upi id",placeholder:"98000xxxxx",leading:V}),H=()=>e.jsx(t,{label:"Enter your upi id",placeholder:"98000xxxxx",trailing:V}),Y=()=>e.jsx(t,{label:"Enter your upi id",placeholder:"98000xxxxx",leading:e.jsx(J,{children:"+91"})}),$=()=>e.jsx(t,{label:"Enter your upi id",placeholder:"98000xxxxx",trailing:e.jsx(J,{children:"@oksbi"})}),z=()=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.6",maxWidth:"320px",children:[e.jsx(s,{size:"small",color:"surface.text.gray.muted",children:"Focus each field to compare. The first keeps its help text visible at all times, the second reveals it only while focused so the row below never gets pushed down at rest."}),e.jsx(t,{label:"Account number",placeholder:"0000 0000 0000",helpText:"As printed on your cheque book"}),e.jsx(t,{label:"Account number",placeholder:"0000 0000 0000",helpText:"As printed on your cheque book",showHelpTextOnFocus:!0}),e.jsx(t,{label:"IFSC code",placeholder:"HDFC0000001",helpText:"You won't see this — error text is never gated behind focus",errorText:"Enter a valid 11 character IFSC code",validationState:"error",showHelpTextOnFocus:!0})]});z.storyName="TextInput with Help Text on Focus";const j=f.bind({});j.storyName="TextInput with Label Suffix & Trailing";j.args={label:"Enter GSTIN",placeholder:"Enter GSTIN",labelSuffix:e.jsx(Nt,{content:"Your GSTIN is used to generate invoices and receipts",placement:"right",children:e.jsx(Rt,{display:"flex",children:e.jsx(K,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(X,{size:"small",children:"Learn more"})};const v=()=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.8",children:[e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Basic Variants"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Default",placeholder:"Enter text",name:"default"}),e.jsx(t,{label:"With Value",defaultValue:"John Doe",name:"withValue"}),e.jsx(t,{label:"With Help Text",placeholder:"Enter text",helpText:"This is a helpful message",name:"withHelpText"}),e.jsx(t,{label:"Disabled",placeholder:"Enter text",isDisabled:!0,name:"disabled"})]})]}),e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Validation States"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Error State",defaultValue:"Invalid Input",validationState:"error",errorText:"This field has an error",name:"error"}),e.jsx(t,{label:"Success State",defaultValue:"Valid Input",validationState:"success",successText:"This field is valid",name:"success"})]})]}),e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Sizes"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Medium Size",placeholder:"Medium size input",size:"medium",name:"sizeMedium"}),e.jsx(t,{label:"Large Size",placeholder:"Large size input",size:"large",name:"sizeLarge"})]})]}),e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Label Positions"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Label Top",placeholder:"Label on top",labelPosition:"top",name:"labelTop"}),e.jsx(t,{label:"Label Left",placeholder:"Label on left",labelPosition:"left",name:"labelLeft"})]})]}),e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Necessity Indicators"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Required Field",placeholder:"Enter text",necessityIndicator:"required",name:"required"}),e.jsx(t,{label:"Optional Field",placeholder:"Enter text",necessityIndicator:"optional",name:"optional"})]})]}),e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Icons"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Leading Icon",placeholder:"Enter text",leading:V,name:"leadingIcon"}),e.jsx(t,{label:"Trailing Icon",placeholder:"Enter text",trailing:K,name:"trailingIcon"}),e.jsx(t,{label:"Both Icons",placeholder:"Enter text",leading:V,trailing:K,name:"bothIcons"})]})]}),e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Prefix/Suffix"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"With Prefix",placeholder:"Enter amount",prefix:"₹",name:"withPrefix"}),e.jsx(t,{label:"With Suffix",placeholder:"Enter weight",suffix:"kg",name:"withSuffix"})]})]}),e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Leading & Trailing Dropdowns"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(a,{children:[e.jsx(s,{weight:"semibold",marginBottom:"spacing.3",children:"XSmall Size"}),e.jsx(t,{label:"Website URL",placeholder:"example",size:"xsmall",leading:e.jsxs(c,{children:[e.jsx(u,{defaultValue:"www",icon:R}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:"www.",value:"www"}),e.jsx(o,{title:"blog.",value:"blog"}),e.jsx(o,{title:"shop.",value:"shop"})]})})]}),trailing:e.jsxs(c,{children:[e.jsx(u,{defaultValue:"com"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:".com",value:"com"}),e.jsx(o,{title:".in",value:"in"}),e.jsx(o,{title:".biz",value:"biz"})]})})]}),name:"bothDropdownsXSmall"})]}),e.jsxs(a,{children:[e.jsx(s,{weight:"semibold",marginBottom:"spacing.3",children:"Small Size"}),e.jsx(t,{label:"Website URL",placeholder:"example",size:"small",leading:e.jsxs(c,{children:[e.jsx(u,{defaultValue:"www",icon:R}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:"www.",value:"www"}),e.jsx(o,{title:"blog.",value:"blog"}),e.jsx(o,{title:"shop.",value:"shop"})]})})]}),trailing:e.jsxs(c,{children:[e.jsx(u,{defaultValue:"com"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:".com",value:"com"}),e.jsx(o,{title:".in",value:"in"}),e.jsx(o,{title:".biz",value:"biz"})]})})]}),name:"bothDropdownsSmall"})]}),e.jsxs(a,{children:[e.jsx(s,{weight:"semibold",marginBottom:"spacing.3",children:"Medium Size"}),e.jsx(t,{label:"Website URL",placeholder:"example",size:"medium",leading:e.jsxs(c,{children:[e.jsx(u,{defaultValue:"www",icon:R}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:"www.",value:"www"}),e.jsx(o,{title:"blog.",value:"blog"}),e.jsx(o,{title:"shop.",value:"shop"})]})})]}),trailing:e.jsxs(c,{children:[e.jsx(u,{defaultValue:"com"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:".com",value:"com"}),e.jsx(o,{title:".in",value:"in"}),e.jsx(o,{title:".biz",value:"biz"})]})})]}),name:"bothDropdownsMedium"})]}),e.jsxs(a,{children:[e.jsx(s,{weight:"semibold",marginBottom:"spacing.3",children:"Large Size"}),e.jsx(t,{label:"Website URL",placeholder:"example",size:"large",leading:e.jsxs(c,{children:[e.jsx(u,{defaultValue:"www",icon:R}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:"www.",value:"www"}),e.jsx(o,{title:"blog.",value:"blog"}),e.jsx(o,{title:"shop.",value:"shop"})]})})]}),trailing:e.jsxs(c,{children:[e.jsx(u,{defaultValue:"com"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:".com",value:"com"}),e.jsx(o,{title:".in",value:"in"}),e.jsx(o,{title:".biz",value:"biz"})]})})]}),name:"bothDropdownsLarge"})]})]})]}),e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Elements"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Leading Badge",placeholder:"Enter phone",leading:e.jsx(J,{children:"+91"}),name:"leadingBadge"}),e.jsx(t,{label:"Trailing Badge",placeholder:"Enter UPI",trailing:e.jsx(J,{children:"@oksbi"}),name:"trailingBadge"})]})]}),e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Trailing Button"}),e.jsx(t,{label:"Discount Code",placeholder:"Enter code",trailingButton:e.jsx(X,{children:"Apply"}),showClearButton:!1,name:"trailingButton"})]}),e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Clear Button"}),e.jsx(t,{label:"With Clear Button",defaultValue:"Clear me",showClearButton:!0,name:"clearButton"})]}),e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Loading State"}),e.jsx(t,{label:"Loading",placeholder:"Enter text",isLoading:!0,name:"loading"})]}),e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Max Characters"}),e.jsx(t,{label:"Max Characters",placeholder:"Max 20 characters",maxCharacters:20,name:"maxCharacters"})]}),e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Text Alignment"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Left Aligned",defaultValue:"Left aligned text",textAlign:"left",name:"textAlignLeft"}),e.jsx(t,{label:"Center Aligned",defaultValue:"Center aligned text",textAlign:"center",name:"textAlignCenter"}),e.jsx(t,{label:"Right Aligned",defaultValue:"Right aligned text",textAlign:"right",name:"textAlignRight"})]})]}),e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"surface.text.gray.subtle",children:"With Label Suffix & Trailing"}),e.jsx(t,{label:"GSTIN",placeholder:"Enter GSTIN",labelSuffix:e.jsx(Nt,{content:"Your GSTIN is used to generate invoices",placement:"right",children:e.jsx(Rt,{display:"flex",children:e.jsx(K,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(X,{size:"small",children:"Learn more"}),name:"labelSuffixTrailing"})]}),e.jsxs(a,{children:[e.jsx(s,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"surface.text.gray.subtle",children:"With Tags (Tagged Input)"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(t,{label:"Email Addresses",placeholder:"Enter email and press Enter",isTaggedInput:!0,defaultTags:["john@example.com","jane@example.com"],name:"withTags"}),e.jsx(t,{label:"Email Addresses (No Tags)",placeholder:"Enter email and press Enter",isTaggedInput:!0,name:"withoutTags"})]})]})]});v.storyName="Showcase - All Variants";v.parameters={docs:{description:{story:"A comprehensive showcase of all TextInput variants including basic states, validation states, sizes, label positions, icons, dropdowns, and more."}}};var ae,ne,oe;r.parameters={...r.parameters,docs:{...(ae=r.parameters)==null?void 0:ae.docs,source:{originalSource:`({
  leadingIcon,
  trailingIcon,
  ...args
}) => {
  return <TextInputComponent {...args} leadingIcon={iconMap[leadingIcon as unknown as string]} trailingIcon={iconMap[trailingIcon as unknown as string]} />;
}`,...(oe=(ne=r.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,le,se;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`({
  leadingIcon,
  trailingIcon,
  ...args
}) => {
  return <TextInputComponent {...args} leadingIcon={iconMap[leadingIcon as unknown as string]} trailingIcon={iconMap[trailingIcon as unknown as string]} />;
}`,...(se=(le=h.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var re,ce,ue;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`({
  leadingIcon,
  trailingIcon,
  ...args
}) => {
  return <TextInputComponent {...args} leadingIcon={iconMap[leadingIcon as unknown as string]} trailingIcon={iconMap[trailingIcon as unknown as string]} />;
}`,...(ue=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,xe;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`({
  leadingIcon,
  trailingIcon,
  ...args
}) => {
  return <TextInputComponent {...args} leadingIcon={iconMap[leadingIcon as unknown as string]} trailingIcon={iconMap[trailingIcon as unknown as string]} />;
}`,...(xe=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};var me,ge,he;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`({
  leadingIcon,
  trailingIcon,
  ...args
}) => {
  return <TextInputComponent {...args} leadingIcon={iconMap[leadingIcon as unknown as string]} trailingIcon={iconMap[trailingIcon as unknown as string]} />;
}`,...(he=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var fe,be,Te;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.5">
      <TextInputComponent label="Card Number" defaultValue="4111 1111 1111 1111" validationState="success" successText="Verified" validationTextPlacement="inside" showClearButton={false} />
      <TextInputComponent label="Card Number" defaultValue="4111 1111 1111" validationState="error" errorText="Invalid" validationTextPlacement="inside" showClearButton={false} />
    </Box>;
}`,...(Te=(be=L.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var Ie,we,ye;A.parameters={...A.parameters,docs:{...(Ie=A.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.6">
      <Box display="flex" flexDirection="column" gap="spacing.5">
        <Text size="large" weight="semibold" marginBottom="spacing.2">
          Inside
        </Text>
        <TextInputComponent label="Amount" defaultValue="1000" validationState="success" successText="Verified" validationTextPlacement="inside" showClearButton={false} />
        <TextInputComponent label="Amount" defaultValue="10" validationState="error" errorText="Too low" validationTextPlacement="inside" showClearButton={false} />
      </Box>
      <Box display="flex" flexDirection="column" gap="spacing.5">
        <Text size="large" weight="semibold" marginBottom="spacing.2">
          Outside
        </Text>
        <TextInputComponent label="Amount" defaultValue="1000" validationState="success" successText="Verified" validationTextPlacement="outside" showClearButton={false} />
        <TextInputComponent label="Amount" defaultValue="10" validationState="error" errorText="Too low" validationTextPlacement="outside" showClearButton={false} />
      </Box>
    </Box>;
}`,...(ye=(we=A.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var Be,Se,je;C.parameters={...C.parameters,docs:{...(Be=C.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.5">
      <TextInputComponent size="small" label="Label" defaultValue="Value" validationState="success" successText="Success Text" validationTextPlacement="inside" showClearButton={false} />
      <TextInputComponent size="medium" label="Label" defaultValue="Value" validationState="success" successText="Success Text" validationTextPlacement="inside" showClearButton={false} />
      <TextInputComponent size="large" label="Label" defaultValue="Value" validationState="success" successText="Success Text" validationTextPlacement="inside" showClearButton={false} />
    </Box>;
}`,...(je=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var ve,Le,Ae;y.parameters={...y.parameters,docs:{...(ve=y.parameters)==null?void 0:ve.docs,source:{originalSource:`({
  leadingIcon,
  trailingIcon,
  ...args
}) => {
  return <TextInputComponent {...args} leadingIcon={iconMap[leadingIcon as unknown as string]} trailingIcon={iconMap[trailingIcon as unknown as string]} />;
}`,...(Ae=(Le=y.parameters)==null?void 0:Le.docs)==null?void 0:Ae.source}}};var Ce,De,Pe;B.parameters={...B.parameters,docs:{...(Ce=B.parameters)==null?void 0:Ce.docs,source:{originalSource:`({
  leadingIcon,
  trailingIcon,
  ...args
}) => {
  return <TextInputComponent {...args} leadingIcon={iconMap[leadingIcon as unknown as string]} trailingIcon={iconMap[trailingIcon as unknown as string]} />;
}`,...(Pe=(De=B.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var Ee,ze,Ve;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <TextInput label="First Name" defaultValue="John Ives" name="fullName" maxCharacters={10} onChange={({
    name,
    value
  }): void => console.log({
    name,
    value
  })} />;
}`,...(Ve=(ze=O.parameters)==null?void 0:ze.docs)==null?void 0:Ve.source}}};var Ne,Re,Oe;k.parameters={...k.parameters,docs:{...(Ne=k.parameters)==null?void 0:Ne.docs,source:{originalSource:`({
  leadingIcon,
  trailingIcon,
  ...args
}) => {
  return <Box display="flex" flexDirection="column">
      <Text size="large" marginBottom="spacing.2">
        Medium Size:
      </Text>
      <TextInputComponent {...args} leadingIcon={iconMap[leadingIcon as unknown as string]} trailingIcon={iconMap[trailingIcon as unknown as string]} size="medium" />
      <Text size="large" marginTop="spacing.4" marginBottom="spacing.2">
        Large Size:
      </Text>
      <TextInputComponent {...args} leadingIcon={iconMap[leadingIcon as unknown as string]} trailingIcon={iconMap[trailingIcon as unknown as string]} size="large" />
    </Box>;
}`,...(Oe=(Re=k.parameters)==null?void 0:Re.docs)==null?void 0:Oe.source}}};var ke,We,_e;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <TextInput label="First Name" placeholder="Enter your first and last name" defaultValue="John Ives" name="fullName" onChange={({
    name,
    value
  }): void => console.log({
    name,
    value
  })} />;
}`,...(_e=(We=W.parameters)==null?void 0:We.docs)==null?void 0:_e.source}}};var Fe,Me,Ue;_.parameters={..._.parameters,docs:{...(Fe=_.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = React.useState('');
  return <TextInput label="First Name" placeholder="Enter your first and last name" value={inputValue} name="fullName" onChange={({
    name,
    value
  }): void => {
    console.log(\`sending \${name}:\${value} to analytics service\`);
    setInputValue(value ?? '');
  }} />;
}`,...(Ue=(Me=_.parameters)==null?void 0:Me.docs)==null?void 0:Ue.source}}};var Ge,qe,He;F.parameters={...F.parameters,docs:{...(Ge=F.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <>
      <BaseBox display="flex" gap="spacing.5">
        <TextInput showClearButton label="First Name" placeholder="Enter your first" name="fullName" />

        <TextInput label="First Name" placeholder="Enter your first" name="fullName" defaultValue="Anurag" />

        <TextInput validationState="error" label="First Name" placeholder="Enter your first" name="fullName" defaultValue="Anurag" errorText="Name is invalid" />

        <TextInput validationState="success" label="First Name" placeholder="Enter your first" name="fullName" defaultValue="Anurag" successText="Name is valid" />
      </BaseBox>
      <BaseBox display="flex" flexDirection="column" gap="spacing.5">
        <TextInput label="First Name" placeholder="Enter your first" name="fullName" maxCharacters={100} />

        <TextInput label="First Name" placeholder="Enter your first" name="fullName" />

        <TextInput label="First Name" placeholder="Enter your first" name="fullName" labelPosition="left" />

        <TextInput necessityIndicator="optional" label="First Name" placeholder="Enter your first" name="fullName" labelPosition="left" maxCharacters={100} />

        <TextInput necessityIndicator="required" label="First Name" placeholder="Enter your first" name="fullName" labelPosition="left" maxCharacters={100} validationState="none" helpText="Write your message" />

        <TextInput necessityIndicator="required" label="Enter Your Residential Address" placeholder="Enter your address" name="fullName" labelPosition="left" maxCharacters={100} validationState="none" helpText="Write your message" />

        <TextInput accessibilityLabel="Enter Your Residential Address" necessityIndicator="required" placeholder="Enter your address" name="fullName" labelPosition="left" maxCharacters={100} validationState="none" helpText="Write your message" />
      </BaseBox>
    </>;
}`,...(He=(qe=F.parameters)==null?void 0:qe.docs)==null?void 0:He.source}}};var Ye,$e,Ke;S.parameters={...S.parameters,docs:{...(Ye=S.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputRef = React.useRef<HTMLInputElement>(null);
  return <BaseBox gap="spacing.3" display="flex" alignItems="end">
      <TextInputComponent ref={inputRef} label="First Name" name="fullName" />
      <Button onClick={() => {
      inputRef?.current?.focus();
      console.log(inputRef);
    }}>
        Click to focus the input
      </Button>
    </BaseBox>;
}`,...(Ke=($e=S.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Je,Xe,Ze;D.parameters={...D.parameters,docs:{...(Je=D.parameters)==null?void 0:Je.docs,source:{originalSource:`({
  ...args
}) => {
  const [tags, setTags] = React.useState<string[]>([]);
  return <Box display="flex" flexDirection="column">
      <TextInputComponent {...args} tags={tags} onTagChange={({
      tags
    }) => {
      setTags(tags);
    }} />
    </Box>;
}`,...(Ze=(Xe=D.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var Qe,et,tt;P.parameters={...P.parameters,docs:{...(Qe=P.parameters)==null?void 0:Qe.docs,source:{originalSource:`({
  ...args
}) => {
  const [tags, setTags] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState('');
  const [errorText, setErrorText] = React.useState('');
  // we use ref because onTagChange and onChange is called in same render
  // So if we want to set error in onTagChange, and use its value in onChange, its not possible with useState
  const isErrorRef = React.useRef(false);
  return <Box display="flex" flexDirection="column">
      <TextInputComponent {...args} value={inputValue} onChange={({
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
}`,...(tt=(et=P.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;E.parameters={...E.parameters,docs:{...(at=E.parameters)==null?void 0:at.docs,source:{originalSource:`({
  ...args
}) => {
  return <Box display="flex" flexDirection="column">
      <TextInputComponent {...args} onTagChange={tags => {
      console.log('new tags', tags);
    }} />
    </Box>;
}`,...(ot=(nt=E.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var it,lt,st;M.parameters={...M.parameters,docs:{...(it=M.parameters)==null?void 0:it.docs,source:{originalSource:`() => {
  const sizes = ['xsmall', 'small', 'medium', 'large'] as const;
  return <Box display="flex" flexDirection="column" gap="spacing.5">
      {sizes.map(size => <TextInputComponent key={size} label="Enter Website URL (for verification)" size={size} leading={<Dropdown>
              <InputDropdownButton defaultValue="www" icon={GlobeIcon} />
              <DropdownOverlay>
                <ActionList>
                  <ActionListItem title="www." value="www" />
                  <ActionListItem title="blog." value="blog" />
                  <ActionListItem title="shop." value="shop" />
                  <ActionListItem title="ecommerce." value="ecommerce" />
                </ActionList>
              </DropdownOverlay>
            </Dropdown>} trailing={<Dropdown>
              <InputDropdownButton defaultValue="in" />
              <DropdownOverlay>
                <ActionList>
                  <ActionListItem title=".in" value="in" />
                  <ActionListItem title=".com" value="com" />
                  <ActionListItem title=".biz" value="biz" />
                  <ActionListItem title=".business" value="business" />
                  {/* maybe one day */}
                  <ActionListItem title=".razorpay" value="razorpay" />
                </ActionList>
              </DropdownOverlay>
            </Dropdown>} />)}
    </Box>;
}`,...(st=(lt=M.parameters)==null?void 0:lt.docs)==null?void 0:st.source}}};var rt,ct,ut;U.parameters={...U.parameters,docs:{...(rt=U.parameters)==null?void 0:rt.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column">
      <TextInputComponent label="Enter your upi id" placeholder="98000xxxxx" trailing={<Dropdown>
            <InputDropdownButton defaultValue="sbi" icon={BankIcon} />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="@oksbi" value="sbi" />
                <ActionListItem title="@hdfc" value="hdfc" />
                <ActionListItem title="@razorpay-airtelbank" value="razorpay" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>} />
    </Box>;
}`,...(ut=(ct=U.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};var dt,pt,xt;G.parameters={...G.parameters,docs:{...(dt=G.parameters)==null?void 0:dt.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column">
      <TextInputComponent label="Select Currency" placeholder="Select Currency" leading={<Dropdown>
            <InputDropdownButton defaultValue="inr" icon={BankIcon} />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="INR" value="inr" />
                <ActionListItem title="USD" value="usd" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>} />
    </Box>;
}`,...(xt=(pt=G.parameters)==null?void 0:pt.docs)==null?void 0:xt.source}}};var mt,gt,ht;q.parameters={...q.parameters,docs:{...(mt=q.parameters)==null?void 0:mt.docs,source:{originalSource:`() => {
  return <TextInputComponent label="Enter your upi id" placeholder="98000xxxxx" leading={BankIcon} />;
}`,...(ht=(gt=q.parameters)==null?void 0:gt.docs)==null?void 0:ht.source}}};var ft,bt,Tt;H.parameters={...H.parameters,docs:{...(ft=H.parameters)==null?void 0:ft.docs,source:{originalSource:`() => {
  return <TextInputComponent label="Enter your upi id" placeholder="98000xxxxx" trailing={BankIcon} />;
}`,...(Tt=(bt=H.parameters)==null?void 0:bt.docs)==null?void 0:Tt.source}}};var It,wt,yt;Y.parameters={...Y.parameters,docs:{...(It=Y.parameters)==null?void 0:It.docs,source:{originalSource:`() => {
  return <TextInputComponent label="Enter your upi id" placeholder="98000xxxxx" leading={<Badge>+91</Badge>} />;
}`,...(yt=(wt=Y.parameters)==null?void 0:wt.docs)==null?void 0:yt.source}}};var Bt,St,jt;$.parameters={...$.parameters,docs:{...(Bt=$.parameters)==null?void 0:Bt.docs,source:{originalSource:`() => {
  return <TextInputComponent label="Enter your upi id" placeholder="98000xxxxx" trailing={<Badge>@oksbi</Badge>} />;
}`,...(jt=(St=$.parameters)==null?void 0:St.docs)==null?void 0:jt.source}}};var vt,Lt,At;z.parameters={...z.parameters,docs:{...(vt=z.parameters)==null?void 0:vt.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.6" maxWidth="320px">
      <Text size="small" color="surface.text.gray.muted">
        Focus each field to compare. The first keeps its help text visible at all times, the second
        reveals it only while focused so the row below never gets pushed down at rest.
      </Text>
      <TextInputComponent label="Account number" placeholder="0000 0000 0000" helpText="As printed on your cheque book" />
      <TextInputComponent label="Account number" placeholder="0000 0000 0000" helpText="As printed on your cheque book" showHelpTextOnFocus />
      <TextInputComponent label="IFSC code" placeholder="HDFC0000001" helpText="You won't see this — error text is never gated behind focus" errorText="Enter a valid 11 character IFSC code" validationState="error" showHelpTextOnFocus />
    </Box>;
}`,...(At=(Lt=z.parameters)==null?void 0:Lt.docs)==null?void 0:At.source}}};var Ct,Dt,Pt;j.parameters={...j.parameters,docs:{...(Ct=j.parameters)==null?void 0:Ct.docs,source:{originalSource:`({
  leadingIcon,
  trailingIcon,
  ...args
}) => {
  return <TextInputComponent {...args} leadingIcon={iconMap[leadingIcon as unknown as string]} trailingIcon={iconMap[trailingIcon as unknown as string]} />;
}`,...(Pt=(Dt=j.parameters)==null?void 0:Dt.docs)==null?void 0:Pt.source}}};var Et,zt,Vt;v.parameters={...v.parameters,docs:{...(Et=v.parameters)==null?void 0:Et.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.8">
      {/* Basic Variants */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Basic Variants
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextInputComponent label="Default" placeholder="Enter text" name="default" />
          <TextInputComponent label="With Value" defaultValue="John Doe" name="withValue" />
          <TextInputComponent label="With Help Text" placeholder="Enter text" helpText="This is a helpful message" name="withHelpText" />
          <TextInputComponent label="Disabled" placeholder="Enter text" isDisabled name="disabled" />
        </Box>
      </Box>

      {/* Validation States */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Validation States
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextInputComponent label="Error State" defaultValue="Invalid Input" validationState="error" errorText="This field has an error" name="error" />
          <TextInputComponent label="Success State" defaultValue="Valid Input" validationState="success" successText="This field is valid" name="success" />
        </Box>
      </Box>

      {/* Sizes */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Sizes
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextInputComponent label="Medium Size" placeholder="Medium size input" size="medium" name="sizeMedium" />
          <TextInputComponent label="Large Size" placeholder="Large size input" size="large" name="sizeLarge" />
        </Box>
      </Box>

      {/* Label Positions */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Label Positions
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextInputComponent label="Label Top" placeholder="Label on top" labelPosition="top" name="labelTop" />
          <TextInputComponent label="Label Left" placeholder="Label on left" labelPosition="left" name="labelLeft" />
        </Box>
      </Box>

      {/* Necessity Indicators */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Necessity Indicators
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextInputComponent label="Required Field" placeholder="Enter text" necessityIndicator="required" name="required" />
          <TextInputComponent label="Optional Field" placeholder="Enter text" necessityIndicator="optional" name="optional" />
        </Box>
      </Box>

      {/* With Icons */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Icons
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextInputComponent label="Leading Icon" placeholder="Enter text" leading={BankIcon} name="leadingIcon" />
          <TextInputComponent label="Trailing Icon" placeholder="Enter text" trailing={InfoIcon} name="trailingIcon" />
          <TextInputComponent label="Both Icons" placeholder="Enter text" leading={BankIcon} trailing={InfoIcon} name="bothIcons" />
        </Box>
      </Box>

      {/* With Prefix/Suffix */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Prefix/Suffix
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextInputComponent label="With Prefix" placeholder="Enter amount" prefix="₹" name="withPrefix" />
          <TextInputComponent label="With Suffix" placeholder="Enter weight" suffix="kg" name="withSuffix" />
        </Box>
      </Box>

      {/* With Dropdowns */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Leading & Trailing Dropdowns
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Box>
            <Text weight="semibold" marginBottom="spacing.3">
              XSmall Size
            </Text>
            <TextInputComponent label="Website URL" placeholder="example" size="xsmall" leading={<Dropdown>
                  <InputDropdownButton defaultValue="www" icon={GlobeIcon} />
                  <DropdownOverlay>
                    <ActionList>
                      <ActionListItem title="www." value="www" />
                      <ActionListItem title="blog." value="blog" />
                      <ActionListItem title="shop." value="shop" />
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>} trailing={<Dropdown>
                  <InputDropdownButton defaultValue="com" />
                  <DropdownOverlay>
                    <ActionList>
                      <ActionListItem title=".com" value="com" />
                      <ActionListItem title=".in" value="in" />
                      <ActionListItem title=".biz" value="biz" />
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>} name="bothDropdownsXSmall" />
          </Box>

          <Box>
            <Text weight="semibold" marginBottom="spacing.3">
              Small Size
            </Text>
            <TextInputComponent label="Website URL" placeholder="example" size="small" leading={<Dropdown>
                  <InputDropdownButton defaultValue="www" icon={GlobeIcon} />
                  <DropdownOverlay>
                    <ActionList>
                      <ActionListItem title="www." value="www" />
                      <ActionListItem title="blog." value="blog" />
                      <ActionListItem title="shop." value="shop" />
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>} trailing={<Dropdown>
                  <InputDropdownButton defaultValue="com" />
                  <DropdownOverlay>
                    <ActionList>
                      <ActionListItem title=".com" value="com" />
                      <ActionListItem title=".in" value="in" />
                      <ActionListItem title=".biz" value="biz" />
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>} name="bothDropdownsSmall" />
          </Box>

          <Box>
            <Text weight="semibold" marginBottom="spacing.3">
              Medium Size
            </Text>
            <TextInputComponent label="Website URL" placeholder="example" size="medium" leading={<Dropdown>
                  <InputDropdownButton defaultValue="www" icon={GlobeIcon} />
                  <DropdownOverlay>
                    <ActionList>
                      <ActionListItem title="www." value="www" />
                      <ActionListItem title="blog." value="blog" />
                      <ActionListItem title="shop." value="shop" />
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>} trailing={<Dropdown>
                  <InputDropdownButton defaultValue="com" />
                  <DropdownOverlay>
                    <ActionList>
                      <ActionListItem title=".com" value="com" />
                      <ActionListItem title=".in" value="in" />
                      <ActionListItem title=".biz" value="biz" />
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>} name="bothDropdownsMedium" />
          </Box>

          <Box>
            <Text weight="semibold" marginBottom="spacing.3">
              Large Size
            </Text>
            <TextInputComponent label="Website URL" placeholder="example" size="large" leading={<Dropdown>
                  <InputDropdownButton defaultValue="www" icon={GlobeIcon} />
                  <DropdownOverlay>
                    <ActionList>
                      <ActionListItem title="www." value="www" />
                      <ActionListItem title="blog." value="blog" />
                      <ActionListItem title="shop." value="shop" />
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>} trailing={<Dropdown>
                  <InputDropdownButton defaultValue="com" />
                  <DropdownOverlay>
                    <ActionList>
                      <ActionListItem title=".com" value="com" />
                      <ActionListItem title=".in" value="in" />
                      <ActionListItem title=".biz" value="biz" />
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>} name="bothDropdownsLarge" />
          </Box>
        </Box>
      </Box>

      {/* With Elements */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Elements
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextInputComponent label="Leading Badge" placeholder="Enter phone" leading={<Badge>+91</Badge>} name="leadingBadge" />
          <TextInputComponent label="Trailing Badge" placeholder="Enter UPI" trailing={<Badge>@oksbi</Badge>} name="trailingBadge" />
        </Box>
      </Box>

      {/* With Trailing Button */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Trailing Button
        </Text>
        <TextInputComponent label="Discount Code" placeholder="Enter code" trailingButton={<Link>Apply</Link>} showClearButton={false} name="trailingButton" />
      </Box>

      {/* With Clear Button */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Clear Button
        </Text>
        <TextInputComponent label="With Clear Button" defaultValue="Clear me" showClearButton name="clearButton" />
      </Box>

      {/* With Loading State */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Loading State
        </Text>
        <TextInputComponent label="Loading" placeholder="Enter text" isLoading name="loading" />
      </Box>

      {/* With Max Characters */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Max Characters
        </Text>
        <TextInputComponent label="Max Characters" placeholder="Max 20 characters" maxCharacters={20} name="maxCharacters" />
      </Box>

      {/* Text Alignment */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Text Alignment
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <TextInputComponent label="Left Aligned" defaultValue="Left aligned text" textAlign="left" name="textAlignLeft" />
          <TextInputComponent label="Center Aligned" defaultValue="Center aligned text" textAlign="center" name="textAlignCenter" />
          <TextInputComponent label="Right Aligned" defaultValue="Right aligned text" textAlign="right" name="textAlignRight" />
        </Box>
      </Box>

      {/* With Label Suffix & Trailing */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="surface.text.gray.subtle">
          With Label Suffix & Trailing
        </Text>
        <TextInputComponent label="GSTIN" placeholder="Enter GSTIN" labelSuffix={<Tooltip content="Your GSTIN is used to generate invoices" placement="right">
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
          <TextInputComponent label="Email Addresses" placeholder="Enter email and press Enter" isTaggedInput defaultTags={['john@example.com', 'jane@example.com']} name="withTags" />
          <TextInputComponent label="Email Addresses (No Tags)" placeholder="Enter email and press Enter" isTaggedInput name="withoutTags" />
        </Box>
      </Box>
    </Box>;
}`,...(Vt=(zt=v.parameters)==null?void 0:zt.docs)==null?void 0:Vt.source}}};const Qt=["TextInput","TextInputTypeNumber","TextInputHelpText","TextInputError","TextInputSuccess","TextInputValidationInside","TextInputValidationPlacement","TextInputValidationInsideSizes","TextInputWithoutLabel","TextInputWithTrailingButton","TextInputMaxCharacters","TextInputSizes","TextInputUncontrolled","TextInputControlled","TextInputKitchenSink","inputRef","TextInputWithControlledTags","TextInputWithTagsValidation","TextInputWithUncontrolledTags","TextInputWithTrailingAndLeadingDropdown","TextInputWithTrailingDropdown","TextInputWithLeadingDropdown","TextInputWithLeadingIcon","TextInputWithTrailingIcon","TextInputWithLeadingElement","TextInputWithTrailingElement","TextInputWithHelpTextOnFocus","TextInputWithLabelSuffixTrailing","TextInputShowcase"],la=Object.freeze(Object.defineProperty({__proto__:null,TextInput:r,TextInputControlled:_,TextInputError:I,TextInputHelpText:T,TextInputKitchenSink:F,TextInputMaxCharacters:O,TextInputShowcase:v,TextInputSizes:k,TextInputSuccess:w,TextInputTypeNumber:h,TextInputUncontrolled:W,TextInputValidationInside:L,TextInputValidationInsideSizes:C,TextInputValidationPlacement:A,TextInputWithControlledTags:D,TextInputWithHelpTextOnFocus:z,TextInputWithLabelSuffixTrailing:j,TextInputWithLeadingDropdown:G,TextInputWithLeadingElement:Y,TextInputWithLeadingIcon:q,TextInputWithTagsValidation:P,TextInputWithTrailingAndLeadingDropdown:M,TextInputWithTrailingButton:B,TextInputWithTrailingDropdown:U,TextInputWithTrailingElement:$,TextInputWithTrailingIcon:H,TextInputWithUncontrolledTags:E,TextInputWithoutLabel:y,__namedExportsOrder:Qt,default:Ut,inputRef:S},Symbol.toStringTag,{value:"Module"}));export{la as t};
