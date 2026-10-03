import{lb as t,ad as m,j as e,B as o,kA as d,n as h,bc as C,T as p,aI as S,aJ as I,H as T,a5 as A,X as v,a9 as R,l as N}from"./iframe-C1qQ09LF.js";import{S as D}from"./StoryPageWrapper-CS0_5maI.js";import{c as _}from"./codeExamples-BhJLat9R.js";try{AnimatePresence.displayName="AnimatePresence",AnimatePresence.__docgenInfo={description:`\`AnimatePresence\` enables the animation of components that have been removed from the tree.

When adding/removing more than a single child, every child **must** be given a unique \`key\` prop.

Any \`motion\` components that have an \`exit\` property defined will animate out when removed from
the tree.

\`\`\`jsx
import { motion, AnimatePresence } from 'framer-motion'

export const Items = ({ items }) => (
  <AnimatePresence>
    {items.map(item => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    ))}
  </AnimatePresence>
)
\`\`\`

You can sequence exit animations throughout a tree using variants.

If a child contains multiple \`motion\` components with \`exit\` props, it will only unmount the child
once all \`motion\` components have finished animating out. Likewise, any components using
\`usePresence\` all need to call \`safeToRemove\`.`,displayName:"AnimatePresence",props:{}}}catch{}const L=()=>e.jsxs(D,{componentName:"Morph",componentDescription:"Morph component is a abstraction on motion react's layout animations. It allows you to morph between 2 elements",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74864-85897&t=CvaYT53LNc4OYVKa-1&scaling=min-zoom&page-id=21689%3A381614&mode=design",children:[e.jsx(A,{color:"notice",title:"Distortions Note",isFullWidth:!0,isDismissible:!1,description:"Morph animation uses framer-motion's layout animation internally. They work best when you're animating between similar components or animating positions. In case of animating the sizes, you might see distortions in text or children. You can wrap these children in Morph wrapper which might solve it in some cases though it can't completely be avoided in more complex components since Loom UI components internally might have multiple nodes",marginBottom:"spacing.4"}),e.jsx(v,{children:"Usage"}),e.jsx(_,{})]}),H={title:"Motion/Morph",component:t,tags:["autodocs"],parameters:{docs:{page:L}}},E=n=>{const[a,l]=m.useState(!0);return e.jsx(o,{minHeight:"350px",children:e.jsx(d,{children:a?e.jsx(t,{...n,children:e.jsx(h,{onClick:()=>l(!1),children:"Click to Enter Name"})}):e.jsx(t,{...n,children:e.jsx(o,{display:"block",width:"240px",children:e.jsx(R,{autoFocus:!0,accessibilityLabel:"Name",placeholder:"Enter your Name",trailingButton:e.jsx(N,{onClick:()=>l(!0),variant:"button",children:"Submit"})})})})})})},i=E.bind({});i.args={layoutId:"button-to-input-morph"};const s=n=>{const[a,l]=m.useState(!1);return e.jsx(o,{minHeight:"400px",height:"100%",children:e.jsx(d,{children:a?e.jsxs(o,{textAlign:"center",children:[e.jsx(o,{children:e.jsx(t,{...n,children:e.jsx(C,{display:"inline-block",children:"Payment Pages"})})}),e.jsx(t,{layoutId:"subtext",children:e.jsx(p,{marginTop:"spacing.4",display:"inline-block",children:"Welcome to payment pages!"})})]}):e.jsx(o,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:e.jsx(S,{onClick:()=>l(!0),width:"300px",children:e.jsxs(I,{children:[e.jsx(t,{...n,children:e.jsx(T,{display:"inline-block",children:"Payment Pages"})}),e.jsx(t,{layoutId:"subtext",children:e.jsx(p,{marginTop:"spacing.4",display:"inline-block",children:"Payment Pages allow you to build pages without writing any code. Click this card to know more (and see some motion magic)"})})]})})})})})};s.args={layoutId:"card-heading"};const r=()=>{const[n,a]=m.useState(!1);return e.jsxs(o,{minHeight:"400px",height:"100%",children:[e.jsx(h,{marginBottom:"spacing.5",onClick:()=>a(!n),children:"Toggle Morph"}),e.jsx(d,{children:n?e.jsx(t,{layoutId:"box-shape",children:e.jsx(o,{height:"200px",width:"200px",borderRadius:"none",borderWidth:"thick"})}):e.jsx(t,{layoutId:"box-shape",children:e.jsx(o,{height:"200px",width:"200px",borderRadius:"round",backgroundColor:"surface.background.primary.intense"})})})]})},c=()=>{const[n,a]=m.useState(!1);return e.jsx(o,{children:e.jsx(d,{children:n?e.jsx(t,{layoutId:"box-shape",children:e.jsx(h,{color:"negative",onClick:()=>a(!n),children:"Confirm Deletion"})}):e.jsx(t,{layoutId:"box-shape",children:e.jsx(h,{variant:"secondary",onClick:()=>a(!n),children:"Delete This"})})})})};var u,g,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [showNameButton, setShowNameButton] = React.useState(true);
  return <Box minHeight="350px">
      <AnimatePresence>
        {showNameButton ? <Morph {...args}>
            <Button onClick={() => setShowNameButton(false)}>Click to Enter Name</Button>
          </Morph> : <Morph {...args}>
            <Box display="block" width="240px">
              <TextInput
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus accessibilityLabel="Name" placeholder="Enter your Name" trailingButton={<Link onClick={() => setShowNameButton(true)} variant="button">
                    Submit
                  </Link>} />
            </Box>
          </Morph>}
      </AnimatePresence>
    </Box>;
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,b,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`(args: MorphProps): React.ReactElement => {
  const [showPage, setShowPage] = React.useState(false);
  return <Box minHeight="400px" height="100%">
      <AnimatePresence>
        {showPage ? <Box textAlign="center">
            <Box>
              <Morph {...args}>
                <Display display="inline-block">Payment Pages</Display>
              </Morph>
            </Box>

            <Morph layoutId="subtext">
              <Text marginTop="spacing.4" display="inline-block">
                Welcome to payment pages!
              </Text>
            </Morph>
          </Box> : <Box display="flex" alignItems="center" justifyContent="center" height="100%">
            <Card onClick={() => setShowPage(true)} width="300px">
              <CardBody>
                <Morph {...args}>
                  <Heading display="inline-block">Payment Pages</Heading>
                </Morph>

                <Morph layoutId="subtext">
                  <Text marginTop="spacing.4" display="inline-block">
                    Payment Pages allow you to build pages without writing any code. Click this card
                    to know more (and see some motion magic)
                  </Text>
                </Morph>
              </CardBody>
            </Card>
          </Box>}
      </AnimatePresence>
    </Box>;
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var f,j,B;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`(): React.ReactElement => {
  const [showPage, setShowPage] = React.useState(false);
  return <Box minHeight="400px" height="100%">
      <Button marginBottom="spacing.5" onClick={() => setShowPage(!showPage)}>
        Toggle Morph
      </Button>
      <AnimatePresence>
        {showPage ? <Morph layoutId="box-shape">
            <Box height="200px" width="200px" borderRadius="none" borderWidth="thick" />
          </Morph> : <Morph layoutId="box-shape">
            <Box height="200px" width="200px" borderRadius="round" backgroundColor="surface.background.primary.intense" />
          </Morph>}
      </AnimatePresence>
    </Box>;
}`,...(B=(j=r.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var P,k,M;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`(): React.ReactElement => {
  const [shouldConfirm, setShouldConfirm] = React.useState(false);
  return <Box>
      <AnimatePresence>
        {shouldConfirm ? <Morph layoutId="box-shape">
            <Button color="negative" onClick={() => setShouldConfirm(!shouldConfirm)}>
              Confirm Deletion
            </Button>
          </Morph> : <Morph layoutId="box-shape">
            <Button variant="secondary" onClick={() => setShouldConfirm(!shouldConfirm)}>
              Delete This
            </Button>
          </Morph>}
      </AnimatePresence>
    </Box>;
}`,...(M=(k=c.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const W=["Default","MorphOnText","MorphBorderRadius","DangerousButton"],z=Object.freeze(Object.defineProperty({__proto__:null,DangerousButton:c,Default:i,MorphBorderRadius:r,MorphOnText:s,__namedExportsOrder:W,default:H},Symbol.toStringTag,{value:"Module"}));export{i as D,z as M};
