import{S as a,ad as N,j as e,e as t,jZ as o,fe as u,a7 as I,aT as he,aW as je,aV as ke,gM as j,F as i,I as b,eU as x,B as S,j_ as s,n as k,hH as D,T as P,X as ve,a5 as be}from"./iframe-C1qQ09LF.js";import{s as Be}from"./StoryRouter-CDfSoprG.js";import{S as De}from"./StoryPageWrapper-CS0_5maI.js";import{S as Pe}from"./Sandbox.web-B2xP21Qp.js";import{g as fe}from"./storybookArgTypes-DFfQV31s.js";import{a as ze,u as Le,R as Ce,m as Te}from"./react-router-CrS3lpF2.js";const Me=()=>e.jsxs(De,{componentName:"StepGroup",componentDescription:"Step Group visualises sequential processes with a consistent structure. It can be interactive, guiding users through steps, or function as a timeline for reference.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=85892-80483&scaling=min-zoom&page-id=83575%3A87543&mode=design&t=QJnz2culisyKAoNz-1",children:[e.jsx(ve,{children:"Usage"}),e.jsx(Pe,{children:`
        import { 
          StepGroup, 
          StepItem, 
          StepItemIcon,
          Badge,
          FileIcon, 
          UserIcon,
          BriefcaseIcon,
          ClockIcon,
          HeartIcon,
        } from '@greenloom/ui/components';

        function App() {
          return (
            // Check console
            <StepGroup orientation="vertical" size="medium">
              <StepItem
                title="Introduction"
                timestamp="Thu, 11th Oct'23 | 12:00pm"
                stepProgress="full"
                marker={<StepItemIcon icon={FileIcon} color="positive" />}
              />
              <StepItem
                title="Personal Details"
                timestamp="Mon, 15th Oct'23 | 12:00pm"
                description="Your Personal Details for onboarding"
                stepProgress="full"
                marker={<StepItemIcon icon={UserIcon} color="positive" />}
              />
              <StepItem
                title="Business Details"
                trailing={
                  <Badge color="positive" size="medium">
                    Received by our team
                  </Badge>
                }
                stepProgress="full"
                marker={<StepItemIcon icon={BriefcaseIcon} color="positive" />}
              />
              <StepItem
                title="Needs Response"
                timestamp="Respond latest by Tue, 23rd Oct'24 | 12:00pm"
                stepProgress="start"
                marker={<StepItemIcon icon={ClockIcon} color="notice" />}
              />
              <StepItem
                title="Complete Onboarding"
                marker={<StepItemIcon icon={HeartIcon} color="neutral" />}
                trailing={
                  <Badge color="neutral" size="medium">
                    Pending
                  </Badge>
                }
              />
            </StepGroup>
          );
        }

        export default App;
      `})]}),He={title:"Components/StepGroup",component:a,tags:["autodocs"],argTypes:{...fe(),_nestingLevel:{table:{disable:!0}}},decorators:[Be(void 0,{initialEntries:["/onboarding/introduction"]})],parameters:{docs:{page:Me}}},y=[{title:"Introduction",timestamp:"Mon, 15th Oct’23 | 12:00pm",description:"Introduction to Green Loom Payment Gateway"},{title:"Personal Details",timestamp:"Mon, 16th Oct’23 | 12:00pm",description:"Fill your Personal Details for onboarding"},{title:"Business Details",timestamp:"Mon, 17th Oct’23 | 12:00pm",description:"Fill your Business Details for onboarding",isDisabled:!0},{title:"Complete Onboarding",timestamp:"Mon, 20th Oct’23 | 12:00pm",description:"Complete your onboarding to start"}],ge=r=>{const[n,m]=N.useState(-1);return e.jsxs(S,{children:[e.jsx(be,{color:"information",isDismissible:!1,isFullWidth:!0,description:"Click Items to interact with the StepGroup",marginBottom:"spacing.8"}),e.jsx(a,{...r,children:y.map((p,c)=>e.jsx(t,{isSelected:n===c,marker:e.jsx(s,{color:n===c?"primary":"neutral"}),onClick:()=>m(c),stepProgress:c===n?"start":c<n?"full":"none",...p},`${p.title}-${c}`))})]})},ue=r=>{const n=r.orientation==="vertical";return e.jsxs(a,{...r,children:[e.jsx(t,{title:"Disputes Raised",timestamp:"Thu, 11th Oct'23 | 12:00pm",stepProgress:"full",marker:e.jsx(s,{color:"positive"})}),e.jsx(t,{title:"Disputes Contested",timestamp:"Mon, 15th Oct'23 | 12:00pm",description:"Disputes contested for Rs 5000",stepProgress:"full",marker:e.jsx(s,{color:"positive"})}),e.jsx(t,{title:"Disputes Under Review",trailing:n?e.jsx(i,{color:"positive",size:r.size,children:"Received by our team"}):void 0,stepProgress:"full",marker:e.jsx(s,{color:"positive"})}),e.jsx(t,{title:"Needs Response",titleColor:"feedback.text.notice.intense",timestamp:"Respond latest by Tue, 23rd Oct'24 | 12:00pm",stepProgress:"start",marker:e.jsx(s,{color:"notice"}),children:e.jsx(k,{size:"medium",variant:"secondary",children:"Submit Documents"})}),e.jsx(t,{title:"Documents Sent to the Bank",description:"Bank might take up to 3 months to review",trailing:n?e.jsx(i,{color:"neutral",size:r.size,children:"Pending"}):void 0}),e.jsx(t,{title:"Decision from the Bank",trailing:n?e.jsx(i,{color:"neutral",size:r.size,children:"Pending"}):void 0})]})},We=r=>{const n=r.orientation==="vertical";return e.jsxs(a,{...r,children:[e.jsx(t,{title:"Disputes Raised",timestamp:"Thu, 11th Oct'23 | 12:00pm",stepProgress:"full",marker:e.jsx(s,{color:"positive"})}),e.jsx(t,{title:"Disputes Under Review",trailing:n?e.jsx(i,{color:"positive",size:r.size,children:"Received by our team"}):void 0,stepProgress:"full",marker:e.jsx(s,{color:"positive"})}),e.jsx(a,{children:e.jsx(t,{title:"Review from Green Loom Team",timestamp:"Fri, 12th Oct'23 | 12:00pm",description:"The dispute is reviewed by Green Loom team",stepProgress:"full",marker:e.jsx(o,{icon:D,color:"positive"})})}),e.jsx(t,{title:"Needs Response",timestamp:"Respond latest by Tue, 23rd Oct'24 | 12:00pm",stepProgress:"start",marker:e.jsx(s,{color:"positive"})}),e.jsxs(a,{children:[e.jsx(t,{title:"Personal Documents Submission",marker:e.jsx(s,{color:"positive"})}),e.jsx(t,{title:"Company Documents Submission",titleColor:"feedback.text.notice.intense",marker:e.jsx(s,{color:"notice"}),children:e.jsx(k,{size:"medium",variant:"secondary",children:"Submit Documents"})}),e.jsx(t,{title:"Documents Approval",trailing:n?e.jsx(i,{color:"neutral",size:r.size,children:"Pending"}):void 0})]}),e.jsx(t,{title:"Decision from the Bank",trailing:n?e.jsx(i,{color:"neutral",size:r.size,children:"Pending"}):void 0})]})},f=ue.bind({});f.args={orientation:"vertical",size:"medium"};const z=ue.bind({});z.args={orientation:"vertical",size:"large"};const L=ge.bind({});L.args={orientation:"vertical",size:"medium"};const C=ge.bind({});C.args={orientation:"horizontal",size:"medium"};const T=We.bind({});T.args={orientation:"vertical",size:"medium"};const M=r=>{const n=r.orientation==="vertical";return e.jsxs(a,{...r,children:[e.jsx(t,{title:"Introduction",timestamp:"Thu, 11th Oct'23 | 12:00pm",stepProgress:"full",marker:e.jsx(o,{icon:u,color:"positive"})}),e.jsx(t,{title:"Personal Details",timestamp:"Mon, 15th Oct'23 | 12:00pm",description:"Your Personal Details for onboarding",stepProgress:"full",marker:e.jsx(o,{icon:I,color:"positive"})}),e.jsx(t,{title:"Business Details",trailing:n?e.jsx(i,{color:"positive",size:r.size,children:"Received by our team"}):void 0,stepProgress:"full",marker:e.jsx(o,{icon:j,color:"positive"})}),e.jsx(t,{title:"Needs Response",timestamp:"Respond latest by Tue, 23rd Oct'24 | 12:00pm",stepProgress:"start",marker:e.jsx(o,{icon:b,color:"notice"})}),e.jsx(t,{title:"Complete Onboarding",marker:e.jsx(o,{icon:x,color:"neutral"}),trailing:n?e.jsx(i,{color:"neutral",size:r.size,children:"Pending"}):void 0})]})},H=r=>{const n=r.orientation==="vertical",[m,p]=N.useState(!1);return e.jsxs(a,{...r,children:[e.jsx(t,{title:"Introduction",timestamp:"Thu, 11th Oct'23 | 12:00pm",stepProgress:"full",marker:e.jsx(o,{icon:u,color:"positive"})}),e.jsx(t,{title:"Personal Details",timestamp:"Mon, 15th Oct'23 | 12:00pm",description:"Your Personal Details for onboarding",stepProgress:"full",marker:e.jsx(o,{icon:I,color:"positive"})}),e.jsxs(he,{onExpandChange:({isExpanded:c})=>p(c),direction:"top",children:[e.jsx(je,{children:m?"Hide":"Show"}),e.jsxs(ke,{children:[e.jsx(t,{title:"Business Details",trailing:n?e.jsx(i,{color:"positive",size:r.size,children:"Received by our team"}):void 0,stepProgress:"full",marker:e.jsx(o,{icon:j,color:"positive"})}),e.jsx(t,{title:"Needs Response",timestamp:"Respond latest by Tue, 23rd Oct'24 | 12:00pm",stepProgress:"start",marker:e.jsx(o,{icon:b,color:"notice"})}),e.jsx(t,{title:"Complete Onboarding",marker:e.jsx(o,{icon:x,color:"neutral"}),trailing:n?e.jsx(i,{color:"neutral",size:r.size,children:"Pending"}):void 0})]})]})]})},Ge=({match:r})=>e.jsxs(P,{weight:"semibold",marginY:"spacing.4",children:["React Router param: ",r.params.id]}),we=r=>{const n=ze(),m=(v,B)=>{v.preventDefault(),n.push(B)},p=Le(),c=v=>`/onboarding/${v.toLowerCase().replace(/ /g,"-")}`,Ie=v=>y.findIndex(B=>Te(v,c(B.title)));return e.jsxs(S,{display:"flex",flexDirection:"row",minHeight:"500px",children:[e.jsx(S,{backgroundColor:"surface.background.gray.intense",padding:"spacing.7",position:"fixed",left:"spacing.0",top:"spacing.0",height:"100%",minWidth:"400px",elevation:"midRaised",children:e.jsx(a,{...r,width:"100%",children:y.map((v,B)=>{const Se=c(v.title),R=Ie(p.pathname),O=B<R,w=B===R;return e.jsx(t,{isSelected:w,marker:e.jsx(s,{color:w?"primary":O?"positive":"neutral"}),onClick:xe=>m(xe,Se),stepProgress:w?"start":O?"full":"none",...v},`${v.title}-${B}`)})})}),e.jsx(S,{marginLeft:"400px",paddingX:"spacing.6",paddingBottom:"spacing.6",children:e.jsx(Ce,{path:"/onboarding/:id",component:Ge})})]})},ye=r=>e.jsx(we,{...r}),W=ye.bind({}),g=({title:r,children:n})=>e.jsxs(S,{marginBottom:"spacing.10",children:[e.jsx(P,{size:"large",weight:"semibold",marginBottom:"spacing.4",children:r}),n]}),h=({children:r})=>e.jsx(S,{display:"flex",flexDirection:"row",gap:"spacing.8",flexWrap:"wrap",children:r}),d=({label:r,children:n})=>e.jsxs(S,{minWidth:"300px",maxWidth:"400px",children:[e.jsx(P,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.3",children:r}),n]}),l=()=>{},G=()=>{const[r,n]=N.useState(1);return e.jsxs(S,{children:[e.jsx(g,{title:"Non-Interactive",children:e.jsxs(h,{children:[e.jsx(d,{label:"Indicators",children:e.jsxs(a,{size:"medium",orientation:"vertical",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"start",marker:e.jsx(s,{color:"notice"}),trailing:e.jsx(i,{color:"notice",children:"Label"}),children:e.jsx(k,{size:"medium",variant:"secondary",children:"Action"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",trailing:e.jsx(i,{color:"neutral",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",trailing:e.jsx(i,{color:"neutral",children:"Label"})})]})}),e.jsx(d,{label:"Icons",children:e.jsxs(a,{size:"medium",orientation:"vertical",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:u,color:"positive"}),trailing:e.jsx(i,{color:"positive",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:I,color:"positive"}),trailing:e.jsx(i,{color:"positive",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"start",marker:e.jsx(o,{icon:b,color:"notice"}),trailing:e.jsx(i,{color:"notice",children:"Label"}),children:e.jsx(k,{size:"medium",variant:"secondary",children:"Action"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",marker:e.jsx(o,{icon:j,color:"neutral"}),trailing:e.jsx(i,{color:"neutral",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",marker:e.jsx(o,{icon:x,color:"neutral"}),trailing:e.jsx(i,{color:"neutral",children:"Label"})})]})})]})}),e.jsx(g,{title:"Non-Interactive — Indented (Nested)",children:e.jsxs(h,{children:[e.jsx(d,{label:"Indicators — Nested",children:e.jsxs(a,{size:"medium",orientation:"vertical",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",children:"Label"})}),e.jsx(t,{title:"Header Title",stepProgress:"full",marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",children:"Label"})}),e.jsx(a,{children:e.jsx(t,{title:"Nested Step 1",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:D,color:"positive"})})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",stepProgress:"start",marker:e.jsx(s,{color:"notice"}),trailing:e.jsx(i,{color:"notice",children:"Label"})}),e.jsxs(a,{children:[e.jsx(t,{title:"Nested Step A",marker:e.jsx(s,{color:"positive"})}),e.jsx(t,{title:"Nested Step B",titleColor:"feedback.text.notice.intense",marker:e.jsx(s,{color:"notice"}),children:e.jsx(k,{size:"medium",variant:"secondary",children:"Submit Documents"})}),e.jsx(t,{title:"Nested Step C",trailing:e.jsx(i,{color:"neutral",children:"Pending"})})]}),e.jsx(t,{title:"Header Title",trailing:e.jsx(i,{color:"neutral",children:"Label"})})]})}),e.jsx(d,{label:"Icons — Nested",children:e.jsxs(a,{size:"medium",orientation:"vertical",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:u,color:"positive"}),trailing:e.jsx(i,{color:"positive",children:"Label"})}),e.jsx(t,{title:"Header Title",stepProgress:"full",marker:e.jsx(o,{icon:I,color:"positive"}),trailing:e.jsx(i,{color:"positive",children:"Label"})}),e.jsx(a,{children:e.jsx(t,{title:"Nested Step 1",timestamp:"Wed, 27th Mar'24 | 12:00pm",stepProgress:"full",marker:e.jsx(o,{icon:D,color:"positive"})})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",stepProgress:"start",marker:e.jsx(o,{icon:b,color:"notice"}),trailing:e.jsx(i,{color:"notice",children:"Label"})}),e.jsx(t,{title:"Header Title",trailing:e.jsx(i,{color:"neutral",children:"Label"}),marker:e.jsx(o,{icon:x,color:"neutral"})})]})})]})}),e.jsx(g,{title:"Interactive — Not Selected",children:e.jsxs(h,{children:[e.jsx(d,{label:"Indicators — onClick, no selection",children:e.jsxs(a,{size:"medium",orientation:"vertical",children:[e.jsx(t,{title:"Introduction",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",onClick:l,marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",children:"Label"})}),e.jsx(t,{title:"Personal Details",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"start",onClick:l,marker:e.jsx(s,{color:"notice"}),trailing:e.jsx(i,{color:"notice",children:"Label"})}),e.jsx(t,{title:"Business Details",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",onClick:l,trailing:e.jsx(i,{color:"neutral",children:"Label"})}),e.jsx(t,{title:"Complete Onboarding",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",onClick:l,trailing:e.jsx(i,{color:"neutral",children:"Label"})})]})}),e.jsx(d,{label:"Icons — onClick, no selection",children:e.jsxs(a,{size:"medium",orientation:"vertical",children:[e.jsx(t,{title:"Introduction",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",onClick:l,marker:e.jsx(o,{icon:u,color:"positive"}),trailing:e.jsx(i,{color:"positive",children:"Label"})}),e.jsx(t,{title:"Personal Details",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"start",onClick:l,marker:e.jsx(o,{icon:I,color:"notice"}),trailing:e.jsx(i,{color:"notice",children:"Label"})}),e.jsx(t,{title:"Business Details",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",onClick:l,marker:e.jsx(o,{icon:j,color:"neutral"}),trailing:e.jsx(i,{color:"neutral",children:"Label"})}),e.jsx(t,{title:"Complete Onboarding",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",onClick:l,marker:e.jsx(o,{icon:x,color:"neutral"}),trailing:e.jsx(i,{color:"neutral",children:"Label"})})]})})]})}),e.jsx(g,{title:"Interactive — Selected",children:e.jsxs(h,{children:[e.jsx(d,{label:"Indicators — isSelected (click to change)",children:e.jsx(a,{size:"medium",orientation:"vertical",children:["Introduction","Personal Details","Business Details","Complete Onboarding"].map((m,p)=>e.jsx(t,{title:m,timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",isSelected:r===p,onClick:()=>n(p),marker:e.jsx(s,{color:p<r?"positive":p===r?"primary":"neutral"}),stepProgress:p<r?"full":p===r?"start":"none",trailing:e.jsx(i,{color:p<r?"positive":p===r?"primary":"neutral",children:"Label"})},m))})}),e.jsx(d,{label:"Icons — isSelected (click to change)",children:e.jsx(a,{size:"medium",orientation:"vertical",children:[{title:"Introduction",icon:u},{title:"Personal Details",icon:I},{title:"Business Details",icon:j},{title:"Complete Onboarding",icon:x}].map(({title:m,icon:p},c)=>e.jsx(t,{title:m,timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",isSelected:r===c,onClick:()=>n(c),marker:e.jsx(o,{icon:p,color:c<r?"positive":c===r?"primary":"neutral"}),stepProgress:c<r?"full":c===r?"start":"none",trailing:e.jsx(i,{color:c<r?"positive":c===r?"primary":"neutral",children:"Label"})},m))})})]})}),e.jsx(g,{title:"Interactive — Indented (Nested), Not Selected",children:e.jsx(d,{label:"Indicators — nested with onClick",children:e.jsxs(a,{size:"medium",orientation:"vertical",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",onClick:l,marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",children:"Label"})}),e.jsx(t,{title:"Header Title",stepProgress:"full",onClick:l,marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",children:"Label"})}),e.jsx(a,{children:e.jsx(t,{title:"Nested Step 1",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:D,color:"positive"})})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",stepProgress:"start",onClick:l,marker:e.jsx(s,{color:"notice"}),trailing:e.jsx(i,{color:"notice",children:"Label"})}),e.jsxs(a,{children:[e.jsx(t,{title:"Nested Step A",marker:e.jsx(s,{color:"positive"})}),e.jsx(t,{title:"Nested Step B",titleColor:"feedback.text.notice.intense",marker:e.jsx(s,{color:"notice"}),children:e.jsx(k,{size:"medium",variant:"secondary",children:"Submit Documents"})}),e.jsx(t,{title:"Nested Step C",trailing:e.jsx(i,{color:"neutral",children:"Pending"})})]}),e.jsx(t,{title:"Header Title",onClick:l,trailing:e.jsx(i,{color:"neutral",children:"Label"})})]})})}),e.jsx(g,{title:"Disabled States",children:e.jsxs(h,{children:[e.jsx(d,{label:"Indicators — Disabled",children:e.jsxs(a,{size:"medium",orientation:"vertical",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",isDisabled:!0,onClick:l,trailing:e.jsx(i,{color:"neutral",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",isDisabled:!0,onClick:l,trailing:e.jsx(i,{color:"neutral",children:"Label"})})]})}),e.jsx(d,{label:"Icons — Disabled",children:e.jsxs(a,{size:"medium",orientation:"vertical",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:u,color:"positive"}),trailing:e.jsx(i,{color:"positive",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",isDisabled:!0,onClick:l,marker:e.jsx(o,{icon:I,color:"neutral",isDisabled:!0}),trailing:e.jsx(i,{color:"neutral",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",isDisabled:!0,onClick:l,marker:e.jsx(o,{icon:j,color:"neutral",isDisabled:!0}),trailing:e.jsx(i,{color:"neutral",children:"Label"})})]})})]})}),e.jsx(g,{title:"Horizontal Orientation",children:e.jsxs(S,{display:"flex",flexDirection:"column",gap:"spacing.8",children:[e.jsxs(S,{children:[e.jsx(P,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.3",children:"Horizontal Medium — Indicators"}),e.jsxs(a,{size:"medium",orientation:"horizontal",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(s,{color:"positive"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(s,{color:"positive"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"start",marker:e.jsx(s,{color:"notice"})}),e.jsx(t,{title:"Header Title",description:"Description",stepProgress:"none"})]})]}),e.jsxs(S,{children:[e.jsx(P,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.3",children:"Horizontal Medium — Icons"}),e.jsxs(a,{size:"medium",orientation:"horizontal",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:u,color:"positive"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:I,color:"positive"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"start",marker:e.jsx(o,{icon:b,color:"notice"})}),e.jsx(t,{title:"Header Title",description:"Description",stepProgress:"none",marker:e.jsx(o,{icon:x,color:"neutral"})})]})]})]})}),e.jsx(g,{title:"Large — Non-Interactive",children:e.jsxs(h,{children:[e.jsx(d,{label:"Large — Indicators",children:e.jsxs(a,{size:"large",orientation:"vertical",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",size:"large",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",size:"large",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"start",marker:e.jsx(s,{color:"notice"}),trailing:e.jsx(i,{color:"notice",size:"large",children:"Label"}),children:e.jsx(k,{size:"medium",variant:"secondary",children:"Action"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",trailing:e.jsx(i,{color:"neutral",size:"large",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",trailing:e.jsx(i,{color:"neutral",size:"large",children:"Label"})})]})}),e.jsx(d,{label:"Large — Icons",children:e.jsxs(a,{size:"large",orientation:"vertical",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:u,color:"positive"}),trailing:e.jsx(i,{color:"positive",size:"large",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:I,color:"positive"}),trailing:e.jsx(i,{color:"positive",size:"large",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"start",marker:e.jsx(o,{icon:b,color:"notice"}),trailing:e.jsx(i,{color:"notice",size:"large",children:"Label"}),children:e.jsx(k,{size:"medium",variant:"secondary",children:"Action"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",marker:e.jsx(o,{icon:j,color:"neutral"}),trailing:e.jsx(i,{color:"neutral",size:"large",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",marker:e.jsx(o,{icon:x,color:"neutral"}),trailing:e.jsx(i,{color:"neutral",size:"large",children:"Label"})})]})})]})}),e.jsx(g,{title:"Large — Non-Interactive — Indented (Nested)",children:e.jsxs(h,{children:[e.jsx(d,{label:"Large — Indicators — Nested",children:e.jsxs(a,{size:"large",orientation:"vertical",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",size:"large",children:"Label"})}),e.jsx(t,{title:"Header Title",stepProgress:"full",marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",size:"large",children:"Label"})}),e.jsx(a,{children:e.jsx(t,{title:"Nested Step 1",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:D,color:"positive"})})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",stepProgress:"start",marker:e.jsx(s,{color:"notice"}),trailing:e.jsx(i,{color:"notice",size:"large",children:"Label"})}),e.jsxs(a,{children:[e.jsx(t,{title:"Nested Step A",marker:e.jsx(s,{color:"positive"})}),e.jsx(t,{title:"Nested Step B",titleColor:"feedback.text.notice.intense",marker:e.jsx(s,{color:"notice"}),children:e.jsx(k,{size:"medium",variant:"secondary",children:"Submit Documents"})}),e.jsx(t,{title:"Nested Step C",trailing:e.jsx(i,{color:"neutral",size:"large",children:"Pending"})})]}),e.jsx(t,{title:"Header Title",trailing:e.jsx(i,{color:"neutral",size:"large",children:"Label"})})]})}),e.jsx(d,{label:"Large — Icons — Nested",children:e.jsxs(a,{size:"large",orientation:"vertical",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:u,color:"positive"}),trailing:e.jsx(i,{color:"positive",size:"large",children:"Label"})}),e.jsx(t,{title:"Header Title",stepProgress:"full",marker:e.jsx(o,{icon:I,color:"positive"}),trailing:e.jsx(i,{color:"positive",size:"large",children:"Label"})}),e.jsx(a,{children:e.jsx(t,{title:"Nested Step 1",timestamp:"Wed, 27th Mar'24 | 12:00pm",stepProgress:"full",marker:e.jsx(o,{icon:D,color:"positive"})})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",stepProgress:"start",marker:e.jsx(o,{icon:b,color:"notice"}),trailing:e.jsx(i,{color:"notice",size:"large",children:"Label"})}),e.jsx(t,{title:"Header Title",trailing:e.jsx(i,{color:"neutral",size:"large",children:"Label"}),marker:e.jsx(o,{icon:x,color:"neutral"})})]})})]})}),e.jsx(g,{title:"Large — Interactive — Not Selected",children:e.jsxs(h,{children:[e.jsx(d,{label:"Large — Indicators — onClick, no selection",children:e.jsxs(a,{size:"large",orientation:"vertical",children:[e.jsx(t,{title:"Introduction",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",onClick:l,marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",size:"large",children:"Label"})}),e.jsx(t,{title:"Personal Details",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"start",onClick:l,marker:e.jsx(s,{color:"notice"}),trailing:e.jsx(i,{color:"notice",size:"large",children:"Label"})}),e.jsx(t,{title:"Business Details",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",onClick:l,trailing:e.jsx(i,{color:"neutral",size:"large",children:"Label"})}),e.jsx(t,{title:"Complete Onboarding",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",onClick:l,trailing:e.jsx(i,{color:"neutral",size:"large",children:"Label"})})]})}),e.jsx(d,{label:"Large — Icons — onClick, no selection",children:e.jsxs(a,{size:"large",orientation:"vertical",children:[e.jsx(t,{title:"Introduction",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",onClick:l,marker:e.jsx(o,{icon:u,color:"positive"}),trailing:e.jsx(i,{color:"positive",size:"large",children:"Label"})}),e.jsx(t,{title:"Personal Details",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"start",onClick:l,marker:e.jsx(o,{icon:I,color:"notice"}),trailing:e.jsx(i,{color:"notice",size:"large",children:"Label"})}),e.jsx(t,{title:"Business Details",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",onClick:l,marker:e.jsx(o,{icon:j,color:"neutral"}),trailing:e.jsx(i,{color:"neutral",size:"large",children:"Label"})}),e.jsx(t,{title:"Complete Onboarding",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",onClick:l,marker:e.jsx(o,{icon:x,color:"neutral"}),trailing:e.jsx(i,{color:"neutral",size:"large",children:"Label"})})]})})]})}),e.jsx(g,{title:"Large — Interactive — Selected",children:e.jsxs(h,{children:[e.jsx(d,{label:"Large — Indicators — isSelected (click to change)",children:e.jsx(a,{size:"large",orientation:"vertical",children:["Introduction","Personal Details","Business Details","Complete Onboarding"].map((m,p)=>e.jsx(t,{title:m,timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",isSelected:r===p,onClick:()=>n(p),marker:e.jsx(s,{color:p<r?"positive":p===r?"primary":"neutral"}),stepProgress:p<r?"full":p===r?"start":"none",trailing:e.jsx(i,{size:"large",color:p<r?"positive":p===r?"primary":"neutral",children:"Label"})},m))})}),e.jsx(d,{label:"Large — Icons — isSelected (click to change)",children:e.jsx(a,{size:"large",orientation:"vertical",children:[{title:"Introduction",icon:u},{title:"Personal Details",icon:I},{title:"Business Details",icon:j},{title:"Complete Onboarding",icon:x}].map(({title:m,icon:p},c)=>e.jsx(t,{title:m,timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",isSelected:r===c,onClick:()=>n(c),marker:e.jsx(o,{icon:p,color:c<r?"positive":c===r?"primary":"neutral"}),stepProgress:c<r?"full":c===r?"start":"none",trailing:e.jsx(i,{size:"large",color:c<r?"positive":c===r?"primary":"neutral",children:"Label"})},m))})})]})}),e.jsx(g,{title:"Large — Interactive — Indented (Nested), Not Selected",children:e.jsx(d,{label:"Large — Indicators — nested with onClick",children:e.jsxs(a,{size:"large",orientation:"vertical",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",onClick:l,marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",size:"large",children:"Label"})}),e.jsx(t,{title:"Header Title",stepProgress:"full",onClick:l,marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",size:"large",children:"Label"})}),e.jsx(a,{children:e.jsx(t,{title:"Nested Step 1",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:D,color:"positive"})})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",stepProgress:"start",onClick:l,marker:e.jsx(s,{color:"notice"}),trailing:e.jsx(i,{color:"notice",size:"large",children:"Label"})}),e.jsxs(a,{children:[e.jsx(t,{title:"Nested Step A",marker:e.jsx(s,{color:"positive"})}),e.jsx(t,{title:"Nested Step B",titleColor:"feedback.text.notice.intense",marker:e.jsx(s,{color:"notice"}),children:e.jsx(k,{size:"medium",variant:"secondary",children:"Submit Documents"})}),e.jsx(t,{title:"Nested Step C",trailing:e.jsx(i,{color:"neutral",size:"large",children:"Pending"})})]}),e.jsx(t,{title:"Header Title",onClick:l,trailing:e.jsx(i,{color:"neutral",size:"large",children:"Label"})})]})})}),e.jsx(g,{title:"Large — Disabled States",children:e.jsxs(h,{children:[e.jsx(d,{label:"Large — Indicators — Disabled",children:e.jsxs(a,{size:"large",orientation:"vertical",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(s,{color:"positive"}),trailing:e.jsx(i,{color:"positive",size:"large",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",isDisabled:!0,onClick:l,trailing:e.jsx(i,{color:"neutral",size:"large",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",isDisabled:!0,onClick:l,trailing:e.jsx(i,{color:"neutral",size:"large",children:"Label"})})]})}),e.jsx(d,{label:"Large — Icons — Disabled",children:e.jsxs(a,{size:"large",orientation:"vertical",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:u,color:"positive"}),trailing:e.jsx(i,{color:"positive",size:"large",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",isDisabled:!0,onClick:l,marker:e.jsx(o,{icon:I,color:"neutral",isDisabled:!0}),trailing:e.jsx(i,{color:"neutral",size:"large",children:"Label"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"none",isDisabled:!0,onClick:l,marker:e.jsx(o,{icon:j,color:"neutral",isDisabled:!0}),trailing:e.jsx(i,{color:"neutral",size:"large",children:"Label"})})]})})]})}),e.jsx(g,{title:"Large — Horizontal Orientation",children:e.jsxs(S,{display:"flex",flexDirection:"column",gap:"spacing.8",children:[e.jsxs(S,{children:[e.jsx(P,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.3",children:"Horizontal Large — Indicators"}),e.jsxs(a,{size:"large",orientation:"horizontal",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(s,{color:"positive"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(s,{color:"positive"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"start",marker:e.jsx(s,{color:"notice"})}),e.jsx(t,{title:"Header Title",description:"Description",stepProgress:"none"})]})]}),e.jsxs(S,{children:[e.jsx(P,{size:"small",color:"surface.text.gray.muted",marginBottom:"spacing.3",children:"Horizontal Large — Icons"}),e.jsxs(a,{size:"large",orientation:"horizontal",children:[e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:u,color:"positive"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"full",marker:e.jsx(o,{icon:I,color:"positive"})}),e.jsx(t,{title:"Header Title",timestamp:"Wed, 27th Mar'24 | 12:00pm",description:"Description",stepProgress:"start",marker:e.jsx(o,{icon:b,color:"notice"})}),e.jsx(t,{title:"Header Title",description:"Description",stepProgress:"none",marker:e.jsx(o,{icon:x,color:"neutral"})})]})]})]})})]})};var U,A,F;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const isVertical = args.orientation === 'vertical';
  return <StepGroup {...args}>
      <StepItem title="Disputes Raised" timestamp="Thu, 11th Oct'23 | 12:00pm" stepProgress="full" marker={<StepItemIndicator color="positive" />} />
      <StepItem title="Disputes Contested" timestamp="Mon, 15th Oct'23 | 12:00pm" description="Disputes contested for Rs 5000" stepProgress="full" marker={<StepItemIndicator color="positive" />} />
      <StepItem title="Disputes Under Review" trailing={isVertical ? <Badge color="positive" size={args.size}>
              Received by our team
            </Badge> : undefined} stepProgress="full" marker={<StepItemIndicator color="positive" />} />
      <StepItem title="Needs Response" titleColor="feedback.text.notice.intense" timestamp="Respond latest by Tue, 23rd Oct'24 | 12:00pm" stepProgress="start" marker={<StepItemIndicator color="notice" />}>
        <Button size="medium" variant="secondary">
          Submit Documents
        </Button>
      </StepItem>
      <StepItem title="Documents Sent to the Bank" description="Bank might take up to 3 months to review" trailing={isVertical ? <Badge color="neutral" size={args.size}>
              Pending
            </Badge> : undefined} />
      <StepItem title="Decision from the Bank" trailing={isVertical ? <Badge color="neutral" size={args.size}>
              Pending
            </Badge> : undefined} />
    </StepGroup>;
}`,...(F=(A=f.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var V,E,_;z.parameters={...z.parameters,docs:{...(V=z.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const isVertical = args.orientation === 'vertical';
  return <StepGroup {...args}>
      <StepItem title="Disputes Raised" timestamp="Thu, 11th Oct'23 | 12:00pm" stepProgress="full" marker={<StepItemIndicator color="positive" />} />
      <StepItem title="Disputes Contested" timestamp="Mon, 15th Oct'23 | 12:00pm" description="Disputes contested for Rs 5000" stepProgress="full" marker={<StepItemIndicator color="positive" />} />
      <StepItem title="Disputes Under Review" trailing={isVertical ? <Badge color="positive" size={args.size}>
              Received by our team
            </Badge> : undefined} stepProgress="full" marker={<StepItemIndicator color="positive" />} />
      <StepItem title="Needs Response" titleColor="feedback.text.notice.intense" timestamp="Respond latest by Tue, 23rd Oct'24 | 12:00pm" stepProgress="start" marker={<StepItemIndicator color="notice" />}>
        <Button size="medium" variant="secondary">
          Submit Documents
        </Button>
      </StepItem>
      <StepItem title="Documents Sent to the Bank" description="Bank might take up to 3 months to review" trailing={isVertical ? <Badge color="neutral" size={args.size}>
              Pending
            </Badge> : undefined} />
      <StepItem title="Decision from the Bank" trailing={isVertical ? <Badge color="neutral" size={args.size}>
              Pending
            </Badge> : undefined} />
    </StepGroup>;
}`,...(_=(E=z.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var $,Y,Q;L.parameters={...L.parameters,docs:{...($=L.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  return <Box>
      <Alert color="information" isDismissible={false} isFullWidth={true} description="Click Items to interact with the StepGroup" marginBottom="spacing.8" />
      <StepGroup {...args}>
        {stepsSampleData.map((stepInfo, index) => <StepItem key={\`\${stepInfo.title}-\${index}\`} isSelected={selectedIndex === index} marker={<StepItemIndicator color={selectedIndex === index ? 'primary' : 'neutral'} />} onClick={() => setSelectedIndex(index)} stepProgress={index === selectedIndex ? 'start' : index < selectedIndex ? 'full' : 'none'} {...stepInfo} />)}
      </StepGroup>
    </Box>;
}`,...(Q=(Y=L.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var X,Z,q;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  return <Box>
      <Alert color="information" isDismissible={false} isFullWidth={true} description="Click Items to interact with the StepGroup" marginBottom="spacing.8" />
      <StepGroup {...args}>
        {stepsSampleData.map((stepInfo, index) => <StepItem key={\`\${stepInfo.title}-\${index}\`} isSelected={selectedIndex === index} marker={<StepItemIndicator color={selectedIndex === index ? 'primary' : 'neutral'} />} onClick={() => setSelectedIndex(index)} stepProgress={index === selectedIndex ? 'start' : index < selectedIndex ? 'full' : 'none'} {...stepInfo} />)}
      </StepGroup>
    </Box>;
}`,...(q=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var J,K,ee;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const isVertical = args.orientation === 'vertical';
  return <StepGroup {...args}>
      <StepItem title="Disputes Raised" timestamp="Thu, 11th Oct'23 | 12:00pm" stepProgress="full" marker={<StepItemIndicator color="positive" />} />
      <StepItem title="Disputes Under Review" trailing={isVertical ? <Badge color="positive" size={args.size}>
              Received by our team
            </Badge> : undefined} stepProgress="full" marker={<StepItemIndicator color="positive" />} />
      <StepGroup>
        <StepItem title="Review from Green Loom Team" timestamp="Fri, 12th Oct'23 | 12:00pm" description="The dispute is reviewed by Green Loom team" stepProgress="full" marker={<StepItemIcon icon={GreenLoomIcon} color="positive" />} />
      </StepGroup>
      <StepItem title="Needs Response" timestamp="Respond latest by Tue, 23rd Oct'24 | 12:00pm" stepProgress="start" marker={<StepItemIndicator color="positive" />} />
      <StepGroup>
        <StepItem title="Personal Documents Submission" marker={<StepItemIndicator color="positive" />} />
        <StepItem title="Company Documents Submission" titleColor="feedback.text.notice.intense" marker={<StepItemIndicator color="notice" />}>
          <Button size="medium" variant="secondary">
            Submit Documents
          </Button>
        </StepItem>
        <StepItem title="Documents Approval" trailing={isVertical ? <Badge color="neutral" size={args.size}>
                Pending
              </Badge> : undefined} />
      </StepGroup>
      <StepItem title="Decision from the Bank" trailing={isVertical ? <Badge color="neutral" size={args.size}>
              Pending
            </Badge> : undefined} />
    </StepGroup>;
}`,...(ee=(K=T.parameters)==null?void 0:K.docs)==null?void 0:ee.source}}};var te,ie,re;M.parameters={...M.parameters,docs:{...(te=M.parameters)==null?void 0:te.docs,source:{originalSource:`(args: StepGroupProps) => {
  const isVertical = args.orientation === 'vertical';
  return <StepGroup {...args}>
      <StepItem title="Introduction" timestamp="Thu, 11th Oct'23 | 12:00pm" stepProgress="full" marker={<StepItemIcon icon={FileIcon} color="positive" />} />
      <StepItem title="Personal Details" timestamp="Mon, 15th Oct'23 | 12:00pm" description="Your Personal Details for onboarding" stepProgress="full" marker={<StepItemIcon icon={UserIcon} color="positive" />} />
      <StepItem title="Business Details" trailing={isVertical ? <Badge color="positive" size={args.size}>
              Received by our team
            </Badge> : undefined} stepProgress="full" marker={<StepItemIcon icon={BriefcaseIcon} color="positive" />} />
      <StepItem title="Needs Response" timestamp="Respond latest by Tue, 23rd Oct'24 | 12:00pm" stepProgress="start" marker={<StepItemIcon icon={ClockIcon} color="notice" />} />
      <StepItem title="Complete Onboarding" marker={<StepItemIcon icon={HeartIcon} color="neutral" />} trailing={isVertical ? <Badge color="neutral" size={args.size}>
              Pending
            </Badge> : undefined} />
    </StepGroup>;
}`,...(re=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var oe,se,ae;H.parameters={...H.parameters,docs:{...(oe=H.parameters)==null?void 0:oe.docs,source:{originalSource:`(args: StepGroupProps) => {
  const isVertical = args.orientation === 'vertical';
  const [isExpanded, setIsExpanded] = React.useState(false);
  return <StepGroup {...args}>
      <StepItem title="Introduction" timestamp="Thu, 11th Oct'23 | 12:00pm" stepProgress="full" marker={<StepItemIcon icon={FileIcon} color="positive" />} />
      <StepItem title="Personal Details" timestamp="Mon, 15th Oct'23 | 12:00pm" description="Your Personal Details for onboarding" stepProgress="full" marker={<StepItemIcon icon={UserIcon} color="positive" />} />
      <Collapsible onExpandChange={({
      isExpanded: _isExpanded
    }) => setIsExpanded(_isExpanded)} direction="top">
        <CollapsibleLink>{isExpanded ? 'Hide' : 'Show'}</CollapsibleLink>
        <CollapsibleBody>
          <StepItem title="Business Details" trailing={isVertical ? <Badge color="positive" size={args.size}>
                  Received by our team
                </Badge> : undefined} stepProgress="full" marker={<StepItemIcon icon={BriefcaseIcon} color="positive" />} />
          <StepItem title="Needs Response" timestamp="Respond latest by Tue, 23rd Oct'24 | 12:00pm" stepProgress="start" marker={<StepItemIcon icon={ClockIcon} color="notice" />} />
          <StepItem title="Complete Onboarding" marker={<StepItemIcon icon={HeartIcon} color="neutral" />} trailing={isVertical ? <Badge color="neutral" size={args.size}>
                  Pending
                </Badge> : undefined} />
        </CollapsibleBody>
      </Collapsible>
    </StepGroup>;
}`,...(ae=(se=H.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var le,ne,ce;W.parameters={...W.parameters,docs:{...(le=W.parameters)==null?void 0:le.docs,source:{originalSource:`props => {
  return <ReactRouterExample {...props} />;
}`,...(ce=(ne=W.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var pe,de,me;G.parameters={...G.parameters,docs:{...(pe=G.parameters)==null?void 0:pe.docs,source:{originalSource:`(): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  return <Box>
      {/* ── isInteractive=false, isIndented=false, isSelected=false ── */}
      <ShowcaseSection title="Non-Interactive">
        <ShowcaseGrid>
          <ShowcaseColumn label="Indicators">
            <StepGroup size="medium" orientation="vertical">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive">Label</Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive">Label</Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="start" marker={<StepItemIndicator color="notice" />} trailing={<Badge color="notice">Label</Badge>}>
                <Button size="medium" variant="secondary">
                  Action
                </Button>
              </StepItem>
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" trailing={<Badge color="neutral">Label</Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" trailing={<Badge color="neutral">Label</Badge>} />
            </StepGroup>
          </ShowcaseColumn>

          <ShowcaseColumn label="Icons">
            <StepGroup size="medium" orientation="vertical">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={FileIcon} color="positive" />} trailing={<Badge color="positive">Label</Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={UserIcon} color="positive" />} trailing={<Badge color="positive">Label</Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="start" marker={<StepItemIcon icon={ClockIcon} color="notice" />} trailing={<Badge color="notice">Label</Badge>}>
                <Button size="medium" variant="secondary">
                  Action
                </Button>
              </StepItem>
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" marker={<StepItemIcon icon={BriefcaseIcon} color="neutral" />} trailing={<Badge color="neutral">Label</Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" marker={<StepItemIcon icon={HeartIcon} color="neutral" />} trailing={<Badge color="neutral">Label</Badge>} />
            </StepGroup>
          </ShowcaseColumn>
        </ShowcaseGrid>
      </ShowcaseSection>

      {/* ── isInteractive=false, isIndented=true, isSelected=false ── */}
      <ShowcaseSection title="Non-Interactive — Indented (Nested)">
        <ShowcaseGrid>
          <ShowcaseColumn label="Indicators — Nested">
            <StepGroup size="medium" orientation="vertical">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive">Label</Badge>} />
              <StepItem title="Header Title" stepProgress="full" marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive">Label</Badge>} />
              <StepGroup>
                <StepItem title="Nested Step 1" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={GreenLoomIcon} color="positive" />} />
              </StepGroup>
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" stepProgress="start" marker={<StepItemIndicator color="notice" />} trailing={<Badge color="notice">Label</Badge>} />
              <StepGroup>
                <StepItem title="Nested Step A" marker={<StepItemIndicator color="positive" />} />
                <StepItem title="Nested Step B" titleColor="feedback.text.notice.intense" marker={<StepItemIndicator color="notice" />}>
                  <Button size="medium" variant="secondary">
                    Submit Documents
                  </Button>
                </StepItem>
                <StepItem title="Nested Step C" trailing={<Badge color="neutral">Pending</Badge>} />
              </StepGroup>
              <StepItem title="Header Title" trailing={<Badge color="neutral">Label</Badge>} />
            </StepGroup>
          </ShowcaseColumn>

          <ShowcaseColumn label="Icons — Nested">
            <StepGroup size="medium" orientation="vertical">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={FileIcon} color="positive" />} trailing={<Badge color="positive">Label</Badge>} />
              <StepItem title="Header Title" stepProgress="full" marker={<StepItemIcon icon={UserIcon} color="positive" />} trailing={<Badge color="positive">Label</Badge>} />
              <StepGroup>
                <StepItem title="Nested Step 1" timestamp="Wed, 27th Mar'24 | 12:00pm" stepProgress="full" marker={<StepItemIcon icon={GreenLoomIcon} color="positive" />} />
              </StepGroup>
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" stepProgress="start" marker={<StepItemIcon icon={ClockIcon} color="notice" />} trailing={<Badge color="notice">Label</Badge>} />
              <StepItem title="Header Title" trailing={<Badge color="neutral">Label</Badge>} marker={<StepItemIcon icon={HeartIcon} color="neutral" />} />
            </StepGroup>
          </ShowcaseColumn>
        </ShowcaseGrid>
      </ShowcaseSection>

      {/* ── isInteractive=true, isIndented=false, isSelected=false ── */}
      <ShowcaseSection title="Interactive — Not Selected">
        <ShowcaseGrid>
          <ShowcaseColumn label="Indicators — onClick, no selection">
            <StepGroup size="medium" orientation="vertical">
              <StepItem title="Introduction" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" onClick={noop} marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive">Label</Badge>} />
              <StepItem title="Personal Details" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="start" onClick={noop} marker={<StepItemIndicator color="notice" />} trailing={<Badge color="notice">Label</Badge>} />
              <StepItem title="Business Details" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" onClick={noop} trailing={<Badge color="neutral">Label</Badge>} />
              <StepItem title="Complete Onboarding" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" onClick={noop} trailing={<Badge color="neutral">Label</Badge>} />
            </StepGroup>
          </ShowcaseColumn>

          <ShowcaseColumn label="Icons — onClick, no selection">
            <StepGroup size="medium" orientation="vertical">
              <StepItem title="Introduction" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" onClick={noop} marker={<StepItemIcon icon={FileIcon} color="positive" />} trailing={<Badge color="positive">Label</Badge>} />
              <StepItem title="Personal Details" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="start" onClick={noop} marker={<StepItemIcon icon={UserIcon} color="notice" />} trailing={<Badge color="notice">Label</Badge>} />
              <StepItem title="Business Details" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" onClick={noop} marker={<StepItemIcon icon={BriefcaseIcon} color="neutral" />} trailing={<Badge color="neutral">Label</Badge>} />
              <StepItem title="Complete Onboarding" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" onClick={noop} marker={<StepItemIcon icon={HeartIcon} color="neutral" />} trailing={<Badge color="neutral">Label</Badge>} />
            </StepGroup>
          </ShowcaseColumn>
        </ShowcaseGrid>
      </ShowcaseSection>

      {/* ── isInteractive=true, isIndented=false, isSelected=true ── */}
      <ShowcaseSection title="Interactive — Selected">
        <ShowcaseGrid>
          <ShowcaseColumn label="Indicators — isSelected (click to change)">
            <StepGroup size="medium" orientation="vertical">
              {['Introduction', 'Personal Details', 'Business Details', 'Complete Onboarding'].map((title, index) => <StepItem key={title} title={title} timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" isSelected={selectedIndex === index} onClick={() => setSelectedIndex(index)} marker={<StepItemIndicator color={index < selectedIndex ? 'positive' : index === selectedIndex ? 'primary' : 'neutral'} />} stepProgress={index < selectedIndex ? 'full' : index === selectedIndex ? 'start' : 'none'} trailing={<Badge color={index < selectedIndex ? 'positive' : index === selectedIndex ? 'primary' : 'neutral'}>
                        Label
                      </Badge>} />)}
            </StepGroup>
          </ShowcaseColumn>

          <ShowcaseColumn label="Icons — isSelected (click to change)">
            <StepGroup size="medium" orientation="vertical">
              {([{
              title: 'Introduction',
              icon: FileIcon
            }, {
              title: 'Personal Details',
              icon: UserIcon
            }, {
              title: 'Business Details',
              icon: BriefcaseIcon
            }, {
              title: 'Complete Onboarding',
              icon: HeartIcon
            }] as const).map(({
              title,
              icon
            }, index) => <StepItem key={title} title={title} timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" isSelected={selectedIndex === index} onClick={() => setSelectedIndex(index)} marker={<StepItemIcon icon={icon} color={index < selectedIndex ? 'positive' : index === selectedIndex ? 'primary' : 'neutral'} />} stepProgress={index < selectedIndex ? 'full' : index === selectedIndex ? 'start' : 'none'} trailing={<Badge color={index < selectedIndex ? 'positive' : index === selectedIndex ? 'primary' : 'neutral'}>
                      Label
                    </Badge>} />)}
            </StepGroup>
          </ShowcaseColumn>
        </ShowcaseGrid>
      </ShowcaseSection>

      {/* ── isInteractive=true, isIndented=true, isSelected=false ── */}
      <ShowcaseSection title="Interactive — Indented (Nested), Not Selected">
        <ShowcaseColumn label="Indicators — nested with onClick">
          <StepGroup size="medium" orientation="vertical">
            <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" onClick={noop} marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive">Label</Badge>} />
            <StepItem title="Header Title" stepProgress="full" onClick={noop} marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive">Label</Badge>} />
            <StepGroup>
              <StepItem title="Nested Step 1" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={GreenLoomIcon} color="positive" />} />
            </StepGroup>
            <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" stepProgress="start" onClick={noop} marker={<StepItemIndicator color="notice" />} trailing={<Badge color="notice">Label</Badge>} />
            <StepGroup>
              <StepItem title="Nested Step A" marker={<StepItemIndicator color="positive" />} />
              <StepItem title="Nested Step B" titleColor="feedback.text.notice.intense" marker={<StepItemIndicator color="notice" />}>
                <Button size="medium" variant="secondary">
                  Submit Documents
                </Button>
              </StepItem>
              <StepItem title="Nested Step C" trailing={<Badge color="neutral">Pending</Badge>} />
            </StepGroup>
            <StepItem title="Header Title" onClick={noop} trailing={<Badge color="neutral">Label</Badge>} />
          </StepGroup>
        </ShowcaseColumn>
      </ShowcaseSection>

      {/* ── Disabled States ── */}
      <ShowcaseSection title="Disabled States">
        <ShowcaseGrid>
          <ShowcaseColumn label="Indicators — Disabled">
            <StepGroup size="medium" orientation="vertical">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive">Label</Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" isDisabled onClick={noop} trailing={<Badge color="neutral">Label</Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" isDisabled onClick={noop} trailing={<Badge color="neutral">Label</Badge>} />
            </StepGroup>
          </ShowcaseColumn>

          <ShowcaseColumn label="Icons — Disabled">
            <StepGroup size="medium" orientation="vertical">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={FileIcon} color="positive" />} trailing={<Badge color="positive">Label</Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" isDisabled onClick={noop} marker={<StepItemIcon icon={UserIcon} color="neutral" isDisabled />} trailing={<Badge color="neutral">Label</Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" isDisabled onClick={noop} marker={<StepItemIcon icon={BriefcaseIcon} color="neutral" isDisabled />} trailing={<Badge color="neutral">Label</Badge>} />
            </StepGroup>
          </ShowcaseColumn>
        </ShowcaseGrid>
      </ShowcaseSection>

      {/* ── Horizontal Orientation ── */}
      <ShowcaseSection title="Horizontal Orientation">
        <Box display="flex" flexDirection="column" gap="spacing.8">
          <Box>
            <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.3">
              Horizontal Medium — Indicators
            </Text>
            <StepGroup size="medium" orientation="horizontal">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIndicator color="positive" />} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIndicator color="positive" />} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="start" marker={<StepItemIndicator color="notice" />} />
              <StepItem title="Header Title" description="Description" stepProgress="none" />
            </StepGroup>
          </Box>

          <Box>
            <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.3">
              Horizontal Medium — Icons
            </Text>
            <StepGroup size="medium" orientation="horizontal">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={FileIcon} color="positive" />} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={UserIcon} color="positive" />} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="start" marker={<StepItemIcon icon={ClockIcon} color="notice" />} />
              <StepItem title="Header Title" description="Description" stepProgress="none" marker={<StepItemIcon icon={HeartIcon} color="neutral" />} />
            </StepGroup>
          </Box>
        </Box>
      </ShowcaseSection>

      {/* ── Large: isInteractive=false, isIndented=false, isSelected=false ── */}
      <ShowcaseSection title="Large — Non-Interactive">
        <ShowcaseGrid>
          <ShowcaseColumn label="Large — Indicators">
            <StepGroup size="large" orientation="vertical">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="start" marker={<StepItemIndicator color="notice" />} trailing={<Badge color="notice" size="large">
                    Label
                  </Badge>}>
                <Button size="medium" variant="secondary">
                  Action
                </Button>
              </StepItem>
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" trailing={<Badge color="neutral" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" trailing={<Badge color="neutral" size="large">
                    Label
                  </Badge>} />
            </StepGroup>
          </ShowcaseColumn>

          <ShowcaseColumn label="Large — Icons">
            <StepGroup size="large" orientation="vertical">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={FileIcon} color="positive" />} trailing={<Badge color="positive" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={UserIcon} color="positive" />} trailing={<Badge color="positive" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="start" marker={<StepItemIcon icon={ClockIcon} color="notice" />} trailing={<Badge color="notice" size="large">
                    Label
                  </Badge>}>
                <Button size="medium" variant="secondary">
                  Action
                </Button>
              </StepItem>
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" marker={<StepItemIcon icon={BriefcaseIcon} color="neutral" />} trailing={<Badge color="neutral" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" marker={<StepItemIcon icon={HeartIcon} color="neutral" />} trailing={<Badge color="neutral" size="large">
                    Label
                  </Badge>} />
            </StepGroup>
          </ShowcaseColumn>
        </ShowcaseGrid>
      </ShowcaseSection>

      {/* ── Large: isInteractive=false, isIndented=true, isSelected=false ── */}
      <ShowcaseSection title="Large — Non-Interactive — Indented (Nested)">
        <ShowcaseGrid>
          <ShowcaseColumn label="Large — Indicators — Nested">
            <StepGroup size="large" orientation="vertical">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Header Title" stepProgress="full" marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive" size="large">
                    Label
                  </Badge>} />
              <StepGroup>
                <StepItem title="Nested Step 1" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={GreenLoomIcon} color="positive" />} />
              </StepGroup>
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" stepProgress="start" marker={<StepItemIndicator color="notice" />} trailing={<Badge color="notice" size="large">
                    Label
                  </Badge>} />
              <StepGroup>
                <StepItem title="Nested Step A" marker={<StepItemIndicator color="positive" />} />
                <StepItem title="Nested Step B" titleColor="feedback.text.notice.intense" marker={<StepItemIndicator color="notice" />}>
                  <Button size="medium" variant="secondary">
                    Submit Documents
                  </Button>
                </StepItem>
                <StepItem title="Nested Step C" trailing={<Badge color="neutral" size="large">
                      Pending
                    </Badge>} />
              </StepGroup>
              <StepItem title="Header Title" trailing={<Badge color="neutral" size="large">
                    Label
                  </Badge>} />
            </StepGroup>
          </ShowcaseColumn>

          <ShowcaseColumn label="Large — Icons — Nested">
            <StepGroup size="large" orientation="vertical">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={FileIcon} color="positive" />} trailing={<Badge color="positive" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Header Title" stepProgress="full" marker={<StepItemIcon icon={UserIcon} color="positive" />} trailing={<Badge color="positive" size="large">
                    Label
                  </Badge>} />
              <StepGroup>
                <StepItem title="Nested Step 1" timestamp="Wed, 27th Mar'24 | 12:00pm" stepProgress="full" marker={<StepItemIcon icon={GreenLoomIcon} color="positive" />} />
              </StepGroup>
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" stepProgress="start" marker={<StepItemIcon icon={ClockIcon} color="notice" />} trailing={<Badge color="notice" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Header Title" trailing={<Badge color="neutral" size="large">
                    Label
                  </Badge>} marker={<StepItemIcon icon={HeartIcon} color="neutral" />} />
            </StepGroup>
          </ShowcaseColumn>
        </ShowcaseGrid>
      </ShowcaseSection>

      {/* ── Large: isInteractive=true, isIndented=false, isSelected=false ── */}
      <ShowcaseSection title="Large — Interactive — Not Selected">
        <ShowcaseGrid>
          <ShowcaseColumn label="Large — Indicators — onClick, no selection">
            <StepGroup size="large" orientation="vertical">
              <StepItem title="Introduction" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" onClick={noop} marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Personal Details" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="start" onClick={noop} marker={<StepItemIndicator color="notice" />} trailing={<Badge color="notice" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Business Details" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" onClick={noop} trailing={<Badge color="neutral" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Complete Onboarding" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" onClick={noop} trailing={<Badge color="neutral" size="large">
                    Label
                  </Badge>} />
            </StepGroup>
          </ShowcaseColumn>

          <ShowcaseColumn label="Large — Icons — onClick, no selection">
            <StepGroup size="large" orientation="vertical">
              <StepItem title="Introduction" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" onClick={noop} marker={<StepItemIcon icon={FileIcon} color="positive" />} trailing={<Badge color="positive" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Personal Details" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="start" onClick={noop} marker={<StepItemIcon icon={UserIcon} color="notice" />} trailing={<Badge color="notice" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Business Details" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" onClick={noop} marker={<StepItemIcon icon={BriefcaseIcon} color="neutral" />} trailing={<Badge color="neutral" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Complete Onboarding" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" onClick={noop} marker={<StepItemIcon icon={HeartIcon} color="neutral" />} trailing={<Badge color="neutral" size="large">
                    Label
                  </Badge>} />
            </StepGroup>
          </ShowcaseColumn>
        </ShowcaseGrid>
      </ShowcaseSection>

      {/* ── Large: isInteractive=true, isIndented=false, isSelected=true ── */}
      <ShowcaseSection title="Large — Interactive — Selected">
        <ShowcaseGrid>
          <ShowcaseColumn label="Large — Indicators — isSelected (click to change)">
            <StepGroup size="large" orientation="vertical">
              {['Introduction', 'Personal Details', 'Business Details', 'Complete Onboarding'].map((title, index) => <StepItem key={title} title={title} timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" isSelected={selectedIndex === index} onClick={() => setSelectedIndex(index)} marker={<StepItemIndicator color={index < selectedIndex ? 'positive' : index === selectedIndex ? 'primary' : 'neutral'} />} stepProgress={index < selectedIndex ? 'full' : index === selectedIndex ? 'start' : 'none'} trailing={<Badge size="large" color={index < selectedIndex ? 'positive' : index === selectedIndex ? 'primary' : 'neutral'}>
                        Label
                      </Badge>} />)}
            </StepGroup>
          </ShowcaseColumn>

          <ShowcaseColumn label="Large — Icons — isSelected (click to change)">
            <StepGroup size="large" orientation="vertical">
              {([{
              title: 'Introduction',
              icon: FileIcon
            }, {
              title: 'Personal Details',
              icon: UserIcon
            }, {
              title: 'Business Details',
              icon: BriefcaseIcon
            }, {
              title: 'Complete Onboarding',
              icon: HeartIcon
            }] as const).map(({
              title,
              icon
            }, index) => <StepItem key={title} title={title} timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" isSelected={selectedIndex === index} onClick={() => setSelectedIndex(index)} marker={<StepItemIcon icon={icon} color={index < selectedIndex ? 'positive' : index === selectedIndex ? 'primary' : 'neutral'} />} stepProgress={index < selectedIndex ? 'full' : index === selectedIndex ? 'start' : 'none'} trailing={<Badge size="large" color={index < selectedIndex ? 'positive' : index === selectedIndex ? 'primary' : 'neutral'}>
                      Label
                    </Badge>} />)}
            </StepGroup>
          </ShowcaseColumn>
        </ShowcaseGrid>
      </ShowcaseSection>

      {/* ── Large: isInteractive=true, isIndented=true, isSelected=false ── */}
      <ShowcaseSection title="Large — Interactive — Indented (Nested), Not Selected">
        <ShowcaseColumn label="Large — Indicators — nested with onClick">
          <StepGroup size="large" orientation="vertical">
            <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" onClick={noop} marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive" size="large">
                  Label
                </Badge>} />
            <StepItem title="Header Title" stepProgress="full" onClick={noop} marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive" size="large">
                  Label
                </Badge>} />
            <StepGroup>
              <StepItem title="Nested Step 1" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={GreenLoomIcon} color="positive" />} />
            </StepGroup>
            <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" stepProgress="start" onClick={noop} marker={<StepItemIndicator color="notice" />} trailing={<Badge color="notice" size="large">
                  Label
                </Badge>} />
            <StepGroup>
              <StepItem title="Nested Step A" marker={<StepItemIndicator color="positive" />} />
              <StepItem title="Nested Step B" titleColor="feedback.text.notice.intense" marker={<StepItemIndicator color="notice" />}>
                <Button size="medium" variant="secondary">
                  Submit Documents
                </Button>
              </StepItem>
              <StepItem title="Nested Step C" trailing={<Badge color="neutral" size="large">
                    Pending
                  </Badge>} />
            </StepGroup>
            <StepItem title="Header Title" onClick={noop} trailing={<Badge color="neutral" size="large">
                  Label
                </Badge>} />
          </StepGroup>
        </ShowcaseColumn>
      </ShowcaseSection>

      {/* ── Large: Disabled States ── */}
      <ShowcaseSection title="Large — Disabled States">
        <ShowcaseGrid>
          <ShowcaseColumn label="Large — Indicators — Disabled">
            <StepGroup size="large" orientation="vertical">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIndicator color="positive" />} trailing={<Badge color="positive" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" isDisabled onClick={noop} trailing={<Badge color="neutral" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" isDisabled onClick={noop} trailing={<Badge color="neutral" size="large">
                    Label
                  </Badge>} />
            </StepGroup>
          </ShowcaseColumn>

          <ShowcaseColumn label="Large — Icons — Disabled">
            <StepGroup size="large" orientation="vertical">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={FileIcon} color="positive" />} trailing={<Badge color="positive" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" isDisabled onClick={noop} marker={<StepItemIcon icon={UserIcon} color="neutral" isDisabled />} trailing={<Badge color="neutral" size="large">
                    Label
                  </Badge>} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="none" isDisabled onClick={noop} marker={<StepItemIcon icon={BriefcaseIcon} color="neutral" isDisabled />} trailing={<Badge color="neutral" size="large">
                    Label
                  </Badge>} />
            </StepGroup>
          </ShowcaseColumn>
        </ShowcaseGrid>
      </ShowcaseSection>

      {/* ── Large: Horizontal Orientation ── */}
      <ShowcaseSection title="Large — Horizontal Orientation">
        <Box display="flex" flexDirection="column" gap="spacing.8">
          <Box>
            <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.3">
              Horizontal Large — Indicators
            </Text>
            <StepGroup size="large" orientation="horizontal">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIndicator color="positive" />} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIndicator color="positive" />} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="start" marker={<StepItemIndicator color="notice" />} />
              <StepItem title="Header Title" description="Description" stepProgress="none" />
            </StepGroup>
          </Box>

          <Box>
            <Text size="small" color="surface.text.gray.muted" marginBottom="spacing.3">
              Horizontal Large — Icons
            </Text>
            <StepGroup size="large" orientation="horizontal">
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={FileIcon} color="positive" />} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="full" marker={<StepItemIcon icon={UserIcon} color="positive" />} />
              <StepItem title="Header Title" timestamp="Wed, 27th Mar'24 | 12:00pm" description="Description" stepProgress="start" marker={<StepItemIcon icon={ClockIcon} color="notice" />} />
              <StepItem title="Header Title" description="Description" stepProgress="none" marker={<StepItemIcon icon={HeartIcon} color="neutral" />} />
            </StepGroup>
          </Box>
        </Box>
      </ShowcaseSection>
    </Box>;
}`,...(me=(de=G.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const Ne=["StepGroupDefault","StepGroupLarge","StepGroupInteractive","StepGroupInteractiveHorizontal","StepGroupNested","StepGroupWithIcons","CollapsibleStepGroup","StepGroupWithReactRouter","StepGroupShowcase"],Ee=Object.freeze(Object.defineProperty({__proto__:null,CollapsibleStepGroup:H,StepGroupDefault:f,StepGroupInteractive:L,StepGroupInteractiveHorizontal:C,StepGroupLarge:z,StepGroupNested:T,StepGroupShowcase:G,StepGroupWithIcons:M,StepGroupWithReactRouter:W,__namedExportsOrder:Ne,default:He},Symbol.toStringTag,{value:"Module"}));export{Ee as s};
