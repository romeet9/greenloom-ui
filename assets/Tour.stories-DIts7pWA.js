import{j as e,l8 as T,ad as p,B as o,T as t,n as h,l9 as d,C as S,l as w,X as j,aI as k,aJ as C,ak as q,a8 as I,la as J}from"./iframe-C1qQ09LF.js";import{i as X}from"./isChromatic-B8jWbKqD.js";import{B as Z}from"./examples-BjCW8kDQ.js";import{S as $}from"./StoryPageWrapper-CS0_5maI.js";import{S as ee}from"./Sandbox.web-B2xP21Qp.js";import{S as te}from"./Sandbox.web-C7diOxlu.js";const B=({children:r})=>e.jsx(e.Fragment,{children:r});try{B.displayName="TourScrollableFrame",B.__docgenInfo={description:`Web passthrough — the document/window already scrolls; tour uses scrollIntoView.
Native uses TourScrollableFrame.native.tsx (ScrollView wrapper).`,displayName:"TourScrollableFrame",props:{}}}catch{}const oe=()=>e.jsxs($,{showDefaultExample:!1,componentName:"SpotlightPopoverTour",componentDescription:"The SpotlightPopoverTour component is used to provide context as well as enable users to take certain actions on it. These are used to highlight a new feature or provide a guided tour to a new user.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74881-74360&t=bARaYRnM1Bbbbn9J-1&scaling=min-zoom&page-id=63871%3A12995&mode=design",children:[e.jsx(j,{children:"Usage"}),e.jsx(ee,{children:Z}),e.jsx(j,{children:"iOS Safari Specific Setup"}),e.jsx(t,{marginTop:"spacing.5",children:"When using BottomSheet or SpotlightPopoverTour, Make sure to set a width/height to the `body` otherwise when they open, the page will get clipped. This happens due to a bug in iOS safari where it won't compute the height of the body correctly."}),e.jsx(te,{showLineNumbers:!1,theme:"light",children:`
          body {
            width: 100%;
            height: 100%;
          }
        `}),e.jsx(j,{children:"Examples"}),e.jsxs(t,{marginY:"spacing.5",children:["To see examples properly, switch to the"," ",e.jsx(t,{as:"span",weight:"semibold",children:"story view"})]})]}),m={TOUR:"Tour Props",TOUR_STEPS:"Single Tour Step Props"},se={title:"Components/SpotlightPopoverTour",component:T,tags:[],argTypes:{tourStepsTitle:{name:"steps[0].title",type:"string",table:{category:m.TOUR_STEPS}},tourStepsContent:{name:"steps[0].content",type:"string",table:{category:m.TOUR_STEPS}},tourStepsPlacement:{name:"steps[0].placement",control:{type:"select",options:["bottom","top","left","right","bottom-start","bottom-end","top-start","top-end","left-start","left-end","right-start","right-end"]},table:{category:m.TOUR_STEPS}},tourStepsName:{name:"steps[0].name",type:"string",control:{disable:!0},table:{category:m.TOUR_STEPS}},tourStepsTitleLeading:{name:"steps[0].titleLeading",control:{disable:!0},table:{category:m.TOUR_STEPS}},tourStepsFooter:{name:"steps[0].footer",control:{disable:!0},table:{category:m.TOUR_STEPS}},children:{control:{disable:!0},table:{category:m.TOUR}},onFinish:{control:{disable:!0},table:{category:m.TOUR}},onOpenChange:{control:{disable:!0},table:{category:m.TOUR}},onStepChange:{control:{disable:!0},table:{category:m.TOUR}},steps:{control:{disable:!0},table:{category:m.TOUR}},isOpen:{control:{disable:!0},table:{category:m.TOUR}},activeStep:{control:{disable:!0},table:{category:m.TOUR}}},args:{tourStepsTitle:"Overview of Refunds",tourStepsContent:"You can  issue refunds for various reasons, like when a customer returns a product or cancels a service.",tourStepsPlacement:"bottom",tourStepsName:"step-1"},parameters:{options:{storySort:{order:["Docs","*"]}},docs:{page:oe}}},K=({children:r})=>e.jsx(o,{width:"100%",height:"70vh",display:"flex",alignItems:"center",justifyContent:"center",children:r}),g=({activeStep:r,totalSteps:i,goToNext:n,goToPrevious:a,stopTour:u})=>{const s=r===i-1,c=r===0;return e.jsx(J,{activeStep:r,totalSteps:i,actions:{primary:s?{text:"Done",onClick:u}:{text:"Next",onClick:n},secondary:c?void 0:{text:"Prev",onClick:a}}})},re=()=>{try{return typeof navigator>"u"||typeof navigator.userAgent!="string"?!1:!!X()}catch{return!1}},ae=r=>{const[i,n]=p.useState(0),[a,u]=p.useState(re()),s=p.useMemo(()=>[{name:"step-1",title:r.tourStepsTitle,content:()=>e.jsxs(o,{children:[e.jsx(t,{color:"surface.text.gray.subtle",children:r.tourStepsContent}),e.jsx(t,{color:"surface.text.gray.subtle",marginTop:"spacing.2",children:"You can also issue partial refunds - for example, if a customer purchased multiple items."})]}),placement:r.tourStepsPlacement,footer:g},{name:"step-2",title:"Overview of Disputes",content:()=>e.jsx(o,{children:e.jsx(t,{color:"surface.text.gray.subtle",children:"Disputes are raised by customers when they have a problem with a transaction."})}),placement:"bottom",footer:g},{name:"step-3",title:"Dispute Statuses",content:()=>e.jsx(t,{color:"surface.text.gray.subtle",children:"Disputes which are open or under review will be shown here. You can also review them by clicking on the button."}),placement:"bottom",footer:g}],[r.tourStepsContent,r.tourStepsPlacement,r.tourStepsTitle]);return e.jsxs(o,{children:[e.jsx(h,{marginBottom:"spacing.9",onClick:()=>{u(c=>!c)},children:a?"Tour In Progress":"Start Tour"}),e.jsx(T,{steps:s,isOpen:a,activeStep:i,onFinish:()=>{console.log("finished"),n(0),u(!1)},onOpenChange:({isOpen:c})=>{console.log("open change",c),u(c)},onStepChange:c=>{console.log("step change",c),n(c)},children:e.jsxs(o,{display:"flex",flexDirection:{base:"column",m:"row"},gap:"spacing.4",alignItems:"stretch",children:[e.jsx(d,{name:"step-1",children:e.jsx(o,{width:"100%",children:e.jsx(k,{width:"100%",children:e.jsx(C,{children:e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsxs(o,{display:"flex",flexDirection:"row",alignItems:"center",gap:"spacing.3",children:[e.jsx(t,{children:"Refunds"}),e.jsx(q,{color:"surface.icon.gray.muted"})]}),e.jsx(I,{value:4e4,type:"heading",size:"large"}),e.jsx(t,{color:"surface.text.gray.muted",children:"3 Processed"})]})})})})}),e.jsx(d,{name:"step-2",children:e.jsx(o,{width:"100%",children:e.jsx(k,{width:"100%",children:e.jsx(C,{children:e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsxs(o,{display:"flex",flexDirection:"row",alignItems:"center",gap:"spacing.3",children:[e.jsx(t,{children:"Disputes"}),e.jsx(q,{color:"interactive.icon.gray.muted"})]}),e.jsx(I,{value:0,type:"heading",size:"large"}),e.jsx(d,{name:"step-3",children:e.jsxs(o,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:"spacing.3",children:[e.jsx(t,{color:"surface.text.gray.muted",children:"0 Open | 0 Under review"}),e.jsx(h,{size:"small",variant:"tertiary",children:"Review"})]})})]})})})})})]})})]})},f=ae.bind({});f.storyName="Basic";f.parameters={docs:{disable:!1},viewMode:"story"};const b=()=>{const[r,i]=p.useState(0),[n,a]=p.useState(!1),u=p.useMemo(()=>[{name:"top",title:"Top",content:()=>e.jsx(o,{children:e.jsx(t,{color:"surface.text.gray.subtle",children:"Top"})}),placement:"top",footer:g},{name:"bottom",content:()=>e.jsx(o,{children:e.jsx(t,{color:"surface.text.gray.subtle",children:"Bottom"})}),placement:"bottom",footer:g},{name:"left",content:()=>e.jsx(o,{children:e.jsx(t,{color:"surface.text.gray.subtle",children:"Left"})}),placement:"left",footer:g},{name:"right",content:()=>e.jsx(o,{children:e.jsx(t,{color:"surface.text.gray.subtle",children:"Right"})}),placement:"right",footer:g}],[]);return e.jsxs(o,{children:[e.jsx(h,{marginBottom:"spacing.5",onClick:()=>{a(s=>!s)},children:n?"Tour In Progress":"Start Tour"}),e.jsxs(T,{steps:u,isOpen:n,activeStep:r,onFinish:()=>{console.log("finished"),i(0),a(!1)},onOpenChange:({isOpen:s})=>{console.log("open change",s),a(s)},onStepChange:s=>{console.log("step change",s),i(s)},children:[e.jsx(t,{children:"You can pass individual placement values to each step in the popover. It supports same placement values as Popover (top, bottom, left, right, top-start, top-end, bottom-start, bottom-end, left-start, left-end, right-start, right-end)"}),e.jsx(K,{children:e.jsxs(o,{display:"flex",gap:"spacing.4",alignItems:"stretch",children:[e.jsx(d,{name:"top",children:e.jsx(o,{padding:"spacing.4",backgroundColor:"surface.background.gray.intense",children:e.jsx(t,{children:"top"})})}),e.jsx(d,{name:"bottom",children:e.jsx(o,{padding:"spacing.4",backgroundColor:"surface.background.gray.intense",children:e.jsx(t,{children:"bottom"})})}),e.jsx(d,{name:"left",children:e.jsx(o,{padding:"spacing.4",backgroundColor:"surface.background.gray.intense",children:e.jsx(t,{children:"left"})})}),e.jsx(d,{name:"right",children:e.jsx(o,{padding:"spacing.4",backgroundColor:"surface.background.gray.intense",children:e.jsx(t,{children:"right"})})})]})})]})]})};b.storyName="Custom Placement";b.parameters={docs:{disable:!0},viewMode:"story"};const y=()=>{const[r,i]=p.useState(0),[n,a]=p.useState(!1),u=p.useMemo(()=>[{name:"razorpay-dashboard",title:"Powerful Dashboard",content:()=>e.jsx(o,{children:e.jsx(t,{color:"surface.text.gray.subtle",children:"Green Loom provides a Powerful Dashboard for you to get reports and detailed statistics on payments, settlements, refunds and much more for you to take better business decisions."})}),placement:"bottom",footer:g},{name:"amazon-aws",title:"Infrastructure At Scale",content:()=>e.jsx(o,{children:e.jsx(t,{color:"surface.text.gray.subtle",children:"With Amazon AWS, we are built for scale. To ensure that products built with Green Loom are always available, we have a highly scalable and reliable infrastructure."})}),placement:"bottom",footer:g},{name:"razorpay-docs",title:"Developer Friendly APIs",content:()=>e.jsx(o,{children:e.jsx(t,{color:"surface.text.gray.subtle",children:"With SDKs and documentation for all major languages and platforms, Green Loom is built for developers."})}),placement:"left",footer:g}],[]);return e.jsxs(o,{children:[e.jsx(h,{marginBottom:"spacing.5",onClick:()=>{a(s=>!s)},children:n?"Tour In Progress":"Start Tour"}),e.jsx(T,{steps:u,isOpen:n,activeStep:r,onFinish:()=>{console.log("finished"),i(0),a(!1)},onOpenChange:({isOpen:s})=>{console.log("open change",s),a(s)},onStepChange:s=>{console.log("step change",s),i(s)},children:e.jsxs(B,{children:[e.jsx(t,{children:"You can pass individual placement values to each step in the popover. It supports same placement values as Popover (top, bottom, left, right, top-start, top-end, bottom-start, bottom-end, left-start, left-end, right-start, right-end)"}),e.jsxs(o,{children:[e.jsxs(o,{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"baseline",marginY:"spacing.9",gap:"spacing.2",children:[e.jsx(t,{children:"A"}),e.jsx(d,{name:"razorpay-dashboard",children:e.jsx(w,{href:"https://dashboard.greenloom.ai",children:"Powerful Dashboard"})}),e.jsx(t,{children:"for you to get reports and detailed statistics on payments, settlements, refunds and much more for you to take better business decisions."})]}),e.jsxs(o,{children:[e.jsx(t,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx(t,{children:'The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" 1914 translation by H. Rackham "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."'}),e.jsx(t,{children:'1914 translation by H. Rackham "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."'})]}),e.jsxs(o,{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"baseline",marginY:"spacing.9",gap:"spacing.2",children:[e.jsx(t,{children:"Over the last couple of years, we have worked hard with our banking partners so you don’t have to. Green Loom's servers are completely hosted on"}),e.jsx(d,{name:"amazon-aws",children:e.jsx(w,{href:"https://aws.amazon.com/",children:"Amazon AWS"})}),e.jsx(t,{children:"with auto-scaling systems that scale up to handle any traffic that you throw at it today or in the future."})]}),e.jsxs(o,{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"baseline",marginY:"spacing.9",gap:"spacing.2",children:[e.jsx(t,{children:"Built for Developers: Robust, clean,"}),e.jsx(d,{name:"razorpay-docs",children:e.jsx(w,{href:"https://greenloom.ai/docs/api/",children:"developer friendly APIs"})}),e.jsx(t,{children:", plugins and libraries for all major languages and platforms that let you focus on building great products."})]}),e.jsx(t,{children:'Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."'})]})]})})]})};y.storyName="With Scrollable Page";y.parameters={docs:{disable:!0},viewMode:"story"};const x=()=>{const[r,i]=p.useState(0),[n,a]=p.useState(!1),u=p.useMemo(()=>[{name:"large-table",title:"Your Transactions",content:()=>e.jsx(o,{children:e.jsx(t,{color:"surface.text.gray.subtle",children:"This step is anchored to a table that is taller than the viewport, reproducing the reported freeze/off-screen-popover issue."})}),placement:"bottom",footer:g},{name:"small-row",title:"A Single Row",content:()=>e.jsx(o,{children:e.jsx(t,{color:"surface.text.gray.subtle",children:"This step is anchored to a single row instead — it should behave normally."})}),placement:"bottom",footer:g}],[]);return e.jsxs(o,{children:[e.jsx(h,{marginBottom:"spacing.5",onClick:()=>{a(s=>!s)},children:n?"Tour In Progress":"Start Tour"}),e.jsxs(T,{steps:u,isOpen:n,activeStep:r,onFinish:()=>{i(0),a(!1)},onOpenChange:({isOpen:s})=>{a(s)},onStepChange:s=>{i(s)},children:[e.jsx(d,{name:"large-table",children:e.jsxs(o,{minHeight:"200vh",padding:"spacing.4",backgroundColor:"surface.background.gray.intense",borderWidth:"thin",borderColor:"surface.border.gray.normal",children:[e.jsx(t,{weight:"semibold",marginBottom:"spacing.4",children:"Large Table (200vh tall — taller than the viewport)"}),Array.from({length:40}).map((s,c)=>e.jsx(o,{paddingY:"spacing.3",borderBottomWidth:"thin",borderColor:"surface.border.gray.muted",children:e.jsxs(t,{children:["Row ",c+1]})},c))]})}),e.jsx(o,{marginTop:"spacing.9",children:e.jsx(d,{name:"small-row",children:e.jsx(o,{padding:"spacing.4",backgroundColor:"surface.background.gray.intense",children:e.jsx(t,{children:"A small row anchor for comparison"})})})})]})]})};x.storyName="With Large Anchor (Bug Repro)";x.parameters={docs:{disable:!0},viewMode:"story"};const P=({activeStep:r,goToNext:i,goToStep:n,stopTour:a,goToPrevious:u,totalSteps:s,setIsTourSkipped:c})=>{const l=r===s-1,Q=r===0;return e.jsxs(o,{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"spacing.7",children:[e.jsxs(t,{size:"small",weight:"semibold",children:[r+1," / ",s]}),e.jsxs(o,{display:"flex",gap:"spacing.4",children:[e.jsx(h,{size:"small",variant:"tertiary",onClick:()=>{c(!0),n(s-1)},children:"Skip Tour"}),Q?null:e.jsx(h,{size:"small",variant:"secondary",onClick:()=>{u()},children:"Prev"}),l?e.jsx(h,{size:"small",onClick:()=>{a()},children:"Done"}):e.jsx(h,{size:"small",onClick:()=>{i()},children:"Next"})]})]})},v=()=>{const[r,i]=p.useState(0),[n,a]=p.useState(!1),[u,s]=p.useState(!1),c=p.useMemo(()=>[{name:"step-1",title:"Step 1",content:()=>e.jsx(o,{children:e.jsx(t,{color:"surface.text.gray.subtle",children:"This is step 1, press skip"})}),placement:"top",footer:l=>e.jsx(P,{...l,setIsTourSkipped:a})},{name:"step-2",title:"Step 2",content:()=>e.jsx(o,{children:e.jsx(t,{color:"surface.text.gray.subtle",children:"This is step 2"})}),placement:"bottom",footer:l=>e.jsx(P,{...l,setIsTourSkipped:a})},n?{name:"start-tour",title:"Tour Incomplete!",content:()=>e.jsx(t,{color:"surface.text.gray.subtle",children:"We reccommend that you complete the tour to make the most of the new features. You can find it here when you want to take it."}),footer:({stopTour:l})=>e.jsx(h,{size:"small",onClick:()=>{l()},children:"Got it"})}:{name:"start-tour",title:"Tour Complete!",content:()=>e.jsx(t,{color:"surface.text.gray.subtle",children:"You have completed the tour. You can find it here when you want to take it."}),footer:({stopTour:l})=>e.jsx(h,{size:"small",onClick:()=>{l()},children:"Thanks."})}],[n]);return e.jsx(o,{children:e.jsxs(T,{steps:c,isOpen:u,activeStep:r,onFinish:()=>{console.log("finished"),s(!1),a(!1),i(0)},onOpenChange:({isOpen:l})=>{console.log("open change",l),s(l)},onStepChange:l=>{console.log("step change",l),i(l)},children:[e.jsx(d,{name:"start-tour",children:e.jsx(h,{marginBottom:"spacing.5",onClick:()=>{s(l=>!l)},children:u?"Tour In Progress":"Start Tour"})}),e.jsx(t,{children:"You can create complex flows like interruptible tours by dynamically modifying the steps array, and changing it's contents."}),e.jsxs(t,{children:["Compose and make use of methods provided by the tour component like"," ",e.jsx(S,{size:"medium",children:"stopTour"}),", ",e.jsx(S,{size:"medium",children:"goToStep"}),","," ",e.jsx(S,{size:"medium",children:"goToNext"})," etc to control the behaviour of the current tour step"]}),e.jsx(K,{children:e.jsxs(o,{display:"flex",gap:"spacing.4",alignItems:"stretch",children:[e.jsx(d,{name:"step-1",children:e.jsx(o,{padding:"spacing.4",backgroundColor:"surface.background.gray.intense",children:e.jsx(t,{children:"Step 1"})})}),e.jsx(d,{name:"step-2",children:e.jsx(o,{padding:"spacing.4",backgroundColor:"surface.background.gray.intense",children:e.jsx(t,{children:"Step 2"})})})]})})]})})};v.storyName="Product Usecase: Interruptible Tour";v.parameters={docs:{disable:!0},viewMode:"story"};var O,A,R;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(safeIsChromatic());
  const steps = React.useMemo<SpotlightPopoverTourSteps>(() => [{
    name: 'step-1',
    title: args.tourStepsTitle,
    content: () => {
      return <Box>
              <Text color="surface.text.gray.subtle">{args.tourStepsContent}</Text>
              <Text color="surface.text.gray.subtle" marginTop="spacing.2">
                You can also issue partial refunds - for example, if a customer purchased multiple
                items.
              </Text>
            </Box>;
    },
    placement: args.tourStepsPlacement,
    footer: CustomTourFooter
  }, {
    name: 'step-2',
    title: 'Overview of Disputes',
    content: () => {
      return <Box>
              <Text color="surface.text.gray.subtle">
                Disputes are raised by customers when they have a problem with a transaction.
              </Text>
            </Box>;
    },
    placement: 'bottom',
    footer: CustomTourFooter
  }, {
    name: 'step-3',
    title: 'Dispute Statuses',
    content: () => {
      return <Text color="surface.text.gray.subtle">
              Disputes which are open or under review will be shown here. You can also review them
              by clicking on the button.
            </Text>;
    },
    placement: 'bottom',
    footer: CustomTourFooter
  }], [args.tourStepsContent, args.tourStepsPlacement, args.tourStepsTitle]);
  return <Box>
      <Button marginBottom="spacing.9" onClick={() => {
      setIsOpen(prev => !prev);
    }}>
        {isOpen ? 'Tour In Progress' : 'Start Tour'}
      </Button>
      <SpotlightPopoverTour steps={steps} isOpen={isOpen} activeStep={activeStep} onFinish={() => {
      console.log('finished');
      setActiveStep(0);
      setIsOpen(false);
    }} onOpenChange={({
      isOpen
    }) => {
      console.log('open change', isOpen);
      setIsOpen(isOpen);
    }} onStepChange={step => {
      console.log('step change', step);
      setActiveStep(step);
    }}>
        <Box display="flex" flexDirection={{
        base: 'column',
        m: 'row'
      }} gap="spacing.4" alignItems="stretch">
          <SpotlightPopoverTourStep name="step-1">
            <Box width="100%">
              {/* No height="100%": RN Storybook StoryView is flex:1 + overflow:hidden and clips siblings. */}
              <Card width="100%">
                <CardBody>
                  <Box display="flex" flexDirection="column" gap="spacing.3">
                    <Box display="flex" flexDirection="row" alignItems="center" gap="spacing.3">
                      <Text>Refunds</Text>
                      <InfoIcon color="surface.icon.gray.muted" />
                    </Box>
                    <Amount value={40000} type="heading" size="large" />
                    <Text color="surface.text.gray.muted">3 Processed</Text>
                  </Box>
                </CardBody>
              </Card>
            </Box>
          </SpotlightPopoverTourStep>
          <SpotlightPopoverTourStep name="step-2">
            <Box width="100%">
              <Card width="100%">
                <CardBody>
                  <Box display="flex" flexDirection="column" gap="spacing.3">
                    <Box display="flex" flexDirection="row" alignItems="center" gap="spacing.3">
                      <Text>Disputes</Text>
                      <InfoIcon color="interactive.icon.gray.muted" />
                    </Box>
                    <Amount value={0} type="heading" size="large" />
                    <SpotlightPopoverTourStep name="step-3">
                      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" gap="spacing.3">
                        <Text color="surface.text.gray.muted">0 Open | 0 Under review</Text>
                        <Button size="small" variant="tertiary">
                          Review
                        </Button>
                      </Box>
                    </SpotlightPopoverTourStep>
                  </Box>
                </CardBody>
              </Card>
            </Box>
          </SpotlightPopoverTourStep>
        </Box>
      </SpotlightPopoverTour>
    </Box>;
}`,...(R=(A=f.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var D,z,F;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const steps = React.useMemo<SpotlightPopoverTourSteps>(() => [{
    name: 'top',
    title: 'Top',
    content: () => {
      return <Box>
              <Text color="surface.text.gray.subtle">Top</Text>
            </Box>;
    },
    placement: 'top',
    footer: CustomTourFooter
  }, {
    name: 'bottom',
    content: () => {
      return <Box>
              <Text color="surface.text.gray.subtle">Bottom</Text>
            </Box>;
    },
    placement: 'bottom',
    footer: CustomTourFooter
  }, {
    name: 'left',
    content: () => {
      return <Box>
              <Text color="surface.text.gray.subtle">Left</Text>
            </Box>;
    },
    placement: 'left',
    footer: CustomTourFooter
  }, {
    name: 'right',
    content: () => {
      return <Box>
              <Text color="surface.text.gray.subtle">Right</Text>
            </Box>;
    },
    placement: 'right',
    footer: CustomTourFooter
  }], []);
  return <Box>
      <Button marginBottom="spacing.5" onClick={() => {
      setIsOpen(prev => !prev);
    }}>
        {isOpen ? 'Tour In Progress' : 'Start Tour'}
      </Button>
      <SpotlightPopoverTour steps={steps} isOpen={isOpen} activeStep={activeStep} onFinish={() => {
      console.log('finished');
      setActiveStep(0);
      setIsOpen(false);
    }} onOpenChange={({
      isOpen
    }) => {
      console.log('open change', isOpen);
      setIsOpen(isOpen);
    }} onStepChange={step => {
      console.log('step change', step);
      setActiveStep(step);
    }}>
        <Text>
          You can pass individual placement values to each step in the popover. It supports same
          placement values as Popover (top, bottom, left, right, top-start, top-end, bottom-start,
          bottom-end, left-start, left-end, right-start, right-end)
        </Text>
        <Center>
          <Box display="flex" gap="spacing.4" alignItems="stretch">
            <SpotlightPopoverTourStep name="top">
              <Box padding="spacing.4" backgroundColor="surface.background.gray.intense">
                <Text>top</Text>
              </Box>
            </SpotlightPopoverTourStep>
            <SpotlightPopoverTourStep name="bottom">
              <Box padding="spacing.4" backgroundColor="surface.background.gray.intense">
                <Text>bottom</Text>
              </Box>
            </SpotlightPopoverTourStep>
            <SpotlightPopoverTourStep name="left">
              <Box padding="spacing.4" backgroundColor="surface.background.gray.intense">
                <Text>left</Text>
              </Box>
            </SpotlightPopoverTourStep>
            <SpotlightPopoverTourStep name="right">
              <Box padding="spacing.4" backgroundColor="surface.background.gray.intense">
                <Text>right</Text>
              </Box>
            </SpotlightPopoverTourStep>
          </Box>
        </Center>
      </SpotlightPopoverTour>
    </Box>;
}`,...(F=(z=b.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var L,N,W;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const steps = React.useMemo<SpotlightPopoverTourSteps>(() => [{
    name: 'razorpay-dashboard',
    title: 'Powerful Dashboard',
    content: () => {
      return <Box>
              <Text color="surface.text.gray.subtle">
                Green Loom provides a Powerful Dashboard for you to get reports and detailed
                statistics on payments, settlements, refunds and much more for you to take better
                business decisions.
              </Text>
            </Box>;
    },
    placement: 'bottom',
    footer: CustomTourFooter
  }, {
    name: 'amazon-aws',
    title: 'Infrastructure At Scale',
    content: () => {
      return <Box>
              <Text color="surface.text.gray.subtle">
                With Amazon AWS, we are built for scale. To ensure that products built with Green
                Loom are always available, we have a highly scalable and reliable infrastructure.
              </Text>
            </Box>;
    },
    placement: 'bottom',
    footer: CustomTourFooter
  }, {
    name: 'razorpay-docs',
    title: 'Developer Friendly APIs',
    content: () => {
      return <Box>
              <Text color="surface.text.gray.subtle">
                With SDKs and documentation for all major languages and platforms, Green Loom is
                built for developers.
              </Text>
            </Box>;
    },
    placement: 'left',
    footer: CustomTourFooter
  }], []);
  return <Box>
      <Button marginBottom="spacing.5" onClick={() => {
      setIsOpen(prev => !prev);
    }}>
        {isOpen ? 'Tour In Progress' : 'Start Tour'}
      </Button>
      <SpotlightPopoverTour steps={steps} isOpen={isOpen} activeStep={activeStep} onFinish={() => {
      console.log('finished');
      setActiveStep(0);
      setIsOpen(false);
    }} onOpenChange={({
      isOpen
    }) => {
      console.log('open change', isOpen);
      setIsOpen(isOpen);
    }} onStepChange={step => {
      console.log('step change', step);
      setActiveStep(step);
    }}>
        <TourScrollableFrame>
          <Text>
            You can pass individual placement values to each step in the popover. It supports same
            placement values as Popover (top, bottom, left, right, top-start, top-end, bottom-start,
            bottom-end, left-start, left-end, right-start, right-end)
          </Text>
          <Box>
            {/*
              Native TourStep wraps children in View — cannot nest inside Typography Text.
              Keep inline flow with Text spans around the step link.
             */}
            <Box display="flex" flexDirection="row" flexWrap="wrap" alignItems="baseline" marginY="spacing.9" gap="spacing.2">
              <Text>A</Text>
              <SpotlightPopoverTourStep name="razorpay-dashboard">
                <Link href="https://dashboard.greenloom.ai">Powerful Dashboard</Link>
              </SpotlightPopoverTourStep>
              <Text>
                for you to get reports and detailed statistics on payments, settlements, refunds and
                much more for you to take better business decisions.
              </Text>
            </Box>
            <Box>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </Text>
              <Text>
                The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum." Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in
                45 BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" 1914 translation by
                H. Rackham "But I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a complete account of the
                system, and expound the actual teachings of the great explorer of the truth, the
                master-builder of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not know how to pursue
                pleasure rationally encounter consequences that are extremely painful. Nor again is
                there anyone who loves or pursues or desires to obtain pain of itself, because it is
                pain, but because occasionally circumstances occur in which toil and pain can
                procure him some great pleasure. To take a trivial example, which of us ever
                undertakes laborious physical exercise, except to obtain some advantage from it? But
                who has any right to find fault with a man who chooses to enjoy a pleasure that has
                no annoying consequences, or one who avoids a pain that produces no resultant
                pleasure?" Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in
                45 BC "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
                tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat."
              </Text>
              <Text>
                1914 translation by H. Rackham "On the other hand, we denounce with righteous
                indignation and dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot foresee the pain and
                trouble that are bound to ensue; and equal blame belongs to those who fail in their
                duty through weakness of will, which is the same as saying through shrinking from
                toil and pain. These cases are perfectly simple and easy to distinguish. In a free
                hour, when our power of choice is untrammelled and when nothing prevents our being
                able to do what we like best, every pleasure is to be welcomed and every pain
                avoided. But in certain circumstances and owing to the claims of duty or the
                obligations of business it will frequently occur that pleasures have to be
                repudiated and annoyances accepted. The wise man therefore always holds in these
                matters to this principle of selection: he rejects pleasures to secure other greater
                pleasures, or else he endures pains to avoid worse pains."
              </Text>
            </Box>
            <Box display="flex" flexDirection="row" flexWrap="wrap" alignItems="baseline" marginY="spacing.9" gap="spacing.2">
              <Text>
                Over the last couple of years, we have worked hard with our banking partners so you
                don’t have to. Green Loom's servers are completely hosted on
              </Text>
              <SpotlightPopoverTourStep name="amazon-aws">
                <Link href="https://aws.amazon.com/">Amazon AWS</Link>
              </SpotlightPopoverTourStep>
              <Text>
                with auto-scaling systems that scale up to handle any traffic that you throw at it
                today or in the future.
              </Text>
            </Box>
            <Box display="flex" flexDirection="row" flexWrap="wrap" alignItems="baseline" marginY="spacing.9" gap="spacing.2">
              <Text>Built for Developers: Robust, clean,</Text>
              <SpotlightPopoverTourStep name="razorpay-docs">
                <Link href="https://greenloom.ai/docs/api/">developer friendly APIs</Link>
              </SpotlightPopoverTourStep>
              <Text>
                , plugins and libraries for all major languages and platforms that let you focus on
                building great products.
              </Text>
            </Box>
            <Text>
              Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "At
              vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
              mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut
              reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
              repellat."
            </Text>
          </Box>
        </TourScrollableFrame>
      </SpotlightPopoverTour>
    </Box>;
}`,...(W=(N=y.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var Y,M,U,_,E;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const steps = React.useMemo<SpotlightPopoverTourSteps>(() => [{
    name: 'large-table',
    title: 'Your Transactions',
    content: () => {
      return <Box>
              <Text color="surface.text.gray.subtle">
                This step is anchored to a table that is taller than the viewport, reproducing the
                reported freeze/off-screen-popover issue.
              </Text>
            </Box>;
    },
    placement: 'bottom',
    footer: CustomTourFooter
  }, {
    name: 'small-row',
    title: 'A Single Row',
    content: () => {
      return <Box>
              <Text color="surface.text.gray.subtle">
                This step is anchored to a single row instead — it should behave normally.
              </Text>
            </Box>;
    },
    placement: 'bottom',
    footer: CustomTourFooter
  }], []);
  return <Box>
      <Button marginBottom="spacing.5" onClick={() => {
      setIsOpen(prev => !prev);
    }}>
        {isOpen ? 'Tour In Progress' : 'Start Tour'}
      </Button>
      <SpotlightPopoverTour steps={steps} isOpen={isOpen} activeStep={activeStep} onFinish={() => {
      setActiveStep(0);
      setIsOpen(false);
    }} onOpenChange={({
      isOpen
    }) => {
      setIsOpen(isOpen);
    }} onStepChange={step => {
      setActiveStep(step);
    }}>
        <SpotlightPopoverTourStep name="large-table">
          {/* Anchor is intentionally taller than any reasonable viewport (200vh) so it can
              never reach 50% visibility, forcing the tour to repeatedly center-scroll it. */}
          <Box minHeight="200vh" padding="spacing.4" backgroundColor="surface.background.gray.intense" borderWidth="thin" borderColor="surface.border.gray.normal">
            <Text weight="semibold" marginBottom="spacing.4">
              Large Table (200vh tall — taller than the viewport)
            </Text>
            {Array.from({
            length: 40
          }).map((_, index) => <Box key={index} paddingY="spacing.3" borderBottomWidth="thin" borderColor="surface.border.gray.muted">
                <Text>Row {index + 1}</Text>
              </Box>)}
          </Box>
        </SpotlightPopoverTourStep>
        <Box marginTop="spacing.9">
          <SpotlightPopoverTourStep name="small-row">
            <Box padding="spacing.4" backgroundColor="surface.background.gray.intense">
              <Text>A small row anchor for comparison</Text>
            </Box>
          </SpotlightPopoverTourStep>
        </Box>
      </SpotlightPopoverTour>
    </Box>;
}`,...(U=(M=x.parameters)==null?void 0:M.docs)==null?void 0:U.source},description:{story:`Reproduction for a reported bug: when the anchor (e.g. a large table) is taller than the
viewport, it can never satisfy the 0.5 intersection threshold used internally by the tour.
That causes the tour to keep calling \`scrollIntoView({ block: 'center' })\`, which can push the
popover itself off-screen, while body scroll is locked and a full-screen mask blocks
interaction — making the page feel frozen.`,...(E=(_=x.parameters)==null?void 0:_.docs)==null?void 0:E.description}}};var G,H,V;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isTourSkipped, setIsTourSkipped] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const steps = React.useMemo<SpotlightPopoverTourSteps>(() => [{
    name: 'step-1',
    title: 'Step 1',
    content: () => {
      return <Box>
              <Text color="surface.text.gray.subtle">This is step 1, press skip</Text>
            </Box>;
    },
    placement: 'top',
    footer: props => <InterruptibleTourFooter {...props} setIsTourSkipped={setIsTourSkipped} />
  }, {
    name: 'step-2',
    title: 'Step 2',
    content: () => {
      return <Box>
              <Text color="surface.text.gray.subtle">This is step 2</Text>
            </Box>;
    },
    placement: 'bottom',
    footer: props => <InterruptibleTourFooter {...props} setIsTourSkipped={setIsTourSkipped} />
  }, isTourSkipped ? {
    name: 'start-tour',
    title: 'Tour Incomplete!',
    content: () => {
      return <Text color="surface.text.gray.subtle">
                  We reccommend that you complete the tour to make the most of the new features. You
                  can find it here when you want to take it.
                </Text>;
    },
    footer: ({
      stopTour
    }) => {
      return <Button size="small" onClick={() => {
        stopTour();
      }}>
                  Got it
                </Button>;
    }
  } : {
    name: 'start-tour',
    title: 'Tour Complete!',
    content: () => {
      return <Text color="surface.text.gray.subtle">
                  You have completed the tour. You can find it here when you want to take it.
                </Text>;
    },
    footer: ({
      stopTour
    }) => {
      return <Button size="small" onClick={() => {
        stopTour();
      }}>
                  Thanks.
                </Button>;
    }
  }], [isTourSkipped]);
  return <Box>
      <SpotlightPopoverTour steps={steps} isOpen={isOpen} activeStep={activeStep} onFinish={() => {
      console.log('finished');
      setIsOpen(false);
      setIsTourSkipped(false);
      setActiveStep(0);
    }} onOpenChange={({
      isOpen
    }) => {
      console.log('open change', isOpen);
      setIsOpen(isOpen);
    }} onStepChange={step => {
      console.log('step change', step);
      setActiveStep(step);
    }}>
        <SpotlightPopoverTourStep name="start-tour">
          <Button marginBottom="spacing.5" onClick={() => {
          setIsOpen(prev => !prev);
        }}>
            {isOpen ? 'Tour In Progress' : 'Start Tour'}
          </Button>
        </SpotlightPopoverTourStep>
        <Text>
          You can create complex flows like interruptible tours by dynamically modifying the steps
          array, and changing it's contents.
        </Text>
        <Text>
          Compose and make use of methods provided by the tour component like{' '}
          <Code size="medium">stopTour</Code>, <Code size="medium">goToStep</Code>,{' '}
          <Code size="medium">goToNext</Code> etc to control the behaviour of the current tour step
        </Text>
        <Center>
          <Box display="flex" gap="spacing.4" alignItems="stretch">
            <SpotlightPopoverTourStep name="step-1">
              <Box padding="spacing.4" backgroundColor="surface.background.gray.intense">
                <Text>Step 1</Text>
              </Box>
            </SpotlightPopoverTourStep>
            <SpotlightPopoverTourStep name="step-2">
              <Box padding="spacing.4" backgroundColor="surface.background.gray.intense">
                <Text>Step 2</Text>
              </Box>
            </SpotlightPopoverTourStep>
          </Box>
        </Center>
      </SpotlightPopoverTour>
    </Box>;
}`,...(V=(H=v.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};const ie=["Basic","CustomPlacement","WithScrollablePage","WithLargeAnchor","InterruptibleTour"],me=Object.freeze(Object.defineProperty({__proto__:null,Basic:f,CustomPlacement:b,InterruptibleTour:v,WithLargeAnchor:x,WithScrollablePage:y,__namedExportsOrder:ie,default:se},Symbol.toStringTag,{value:"Module"}));export{me as t};
