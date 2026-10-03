import{b3 as n,ad as _,j as e,x as F,n as G,X as V,B as s,T as i,a5 as Q,l as Z,aI as $,aJ as H,b4 as q,b5 as J,b6 as X}from"./iframe-C1qQ09LF.js";import{S as K}from"./StoryPageWrapper-CS0_5maI.js";import{S as Y}from"./Sandbox.web-B2xP21Qp.js";import{g as ee}from"./storybookArgTypes-DFfQV31s.js";const se=()=>e.jsxs(K,{componentName:"Switch",componentDescription:"A switch component is used to quickly switch between two possible states. These are only used for binary actions that occur immediately after the user turn the switch on/off.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74864-85736&t=k8yrOO74u7fLzkIE-1&scaling=min-zoom&page-id=30100%3A565839&mode=design",children:[e.jsx(V,{children:"Usage"}),e.jsx(Y,{children:`
        import { Switch } from '@greenloom/ui/components';

        function App() {
          return (
            // Check console
            <Switch
              onChange={(e) => console.log(e.isChecked)}
              accessibilityLabel="Toggle DarkMode"
            />
          );
        }
        
        export default App;        
      `})]}),ae={title:"Components/Switch",component:n,args:{defaultChecked:void 0,isChecked:void 0,isDisabled:void 0,name:void 0,onChange:void 0,value:void 0,size:"medium",accessibilityLabel:"Toggle DarkMode"},tags:["autodocs"],argTypes:ee(),parameters:{docs:{page:se}}},h=({...a})=>e.jsx(n,{...a}),m=h.bind({});m.storyName="Default";const l=h.bind({});l.storyName="Checked";l.args={isChecked:!0};const r=h.bind({});r.storyName="DefaultChecked";r.args={defaultChecked:!0};const c=h.bind({});c.storyName="Small Size";c.args={size:"small"};const ie=()=>e.jsxs(s,{children:[e.jsx(Q,{marginBottom:"spacing.6",isFullWidth:!0,color:"notice",title:"Note",description:e.jsxs(e.Fragment,{children:["Switch doesn't come with a label out of the box, consumers can create custom label if needed, see the switch"," ",e.jsx(Z,{href:"https://www.figma.com/file/jubmQL9Z8V7881ayUD95ps/Blade---Payment-Light?type=design&node-id=31919-629519&t=9TijeCLrhExSrH1z-0",children:"guidelines for more details"})," ","on how to use labels."]})}),e.jsx(i,{marginBottom:"spacing.3",children:"Right position:"}),e.jsxs(s,{as:"label",display:"flex",alignItems:"center",gap:"spacing.2",children:[e.jsx(n,{accessibilityLabel:"Toggle Darkmode",size:"small"}),e.jsx(i,{weight:"regular",variant:"body",size:"medium",children:"Toggle Darkmode"})]}),e.jsx(i,{marginTop:"spacing.7",marginBottom:"spacing.3",children:"Left position:"}),e.jsxs(s,{as:"label",display:"flex",alignItems:"center",gap:"spacing.2",children:[e.jsx(i,{weight:"regular",variant:"body",size:"medium",children:"Toggle Darkmode"}),e.jsx(n,{accessibilityLabel:"Toggle Darkmode",size:"small"})]}),e.jsx(i,{marginTop:"spacing.7",marginBottom:"spacing.3",children:"Multiple Groups:"}),e.jsx(s,{width:"350px",children:e.jsx($,{children:e.jsxs(H,{children:[e.jsx(i,{size:"small",weight:"semibold",marginBottom:"spacing.4",children:"Activate/lock the below methods for card transactions"}),e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsxs(s,{as:"label",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"spacing.2",children:[e.jsxs(s,{display:"flex",alignItems:"center",gap:"spacing.2",children:[e.jsx(q,{color:"surface.icon.gray.subtle",size:"small"}),e.jsx(i,{weight:"regular",variant:"body",size:"medium",children:"International transaction"})]}),e.jsx(n,{accessibilityLabel:"International transaction",size:"small"})]}),e.jsxs(s,{as:"label",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"spacing.2",children:[e.jsxs(s,{display:"flex",alignItems:"center",gap:"spacing.2",children:[e.jsx(J,{color:"surface.icon.gray.muted",size:"small"}),e.jsx(i,{weight:"regular",variant:"body",size:"medium",children:"Online transaction"})]}),e.jsx(n,{accessibilityLabel:"Online transaction",size:"small"})]}),e.jsxs(s,{as:"label",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"spacing.2",children:[e.jsxs(s,{display:"flex",alignItems:"center",gap:"spacing.2",children:[e.jsx(X,{color:"surface.icon.gray.muted",size:"small"}),e.jsx(i,{weight:"regular",variant:"body",size:"medium",children:"Contactless Transaction"})]}),e.jsx(n,{accessibilityLabel:"Contactless Transaction",size:"small"})]})]})]})})})]}),p=ie.bind({}),te=()=>{const[a,t]=_.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(s,{as:"label",display:"flex",alignItems:"center",gap:"spacing.2",children:[e.jsx(n,{accessibilityLabel:"Toggle darkmode",defaultChecked:!0,onChange:o=>console.log(o)}),e.jsx(i,{weight:"regular",variant:"body",size:"medium",children:"Uncontrolled"})]}),e.jsxs(s,{as:"label",display:"flex",alignItems:"center",gap:"spacing.2",children:[e.jsx(n,{accessibilityLabel:"Toggle darkmode",isChecked:a,onChange:o=>t(o.isChecked)}),e.jsxs(i,{weight:"regular",variant:"body",size:"medium",children:["Controlled - Checked: ",a?"True":"False"]})]})]})},ne=()=>e.jsx(te,{}),x=ne.bind({}),d=()=>{const a=_.useRef(null);return e.jsxs(F,{gap:"spacing.3",display:"flex",alignItems:"center",children:[e.jsx(n,{accessibilityLabel:"Toggle darkmode",ref:a}),e.jsx(G,{onClick:()=>{var t;return(t=a==null?void 0:a.current)==null?void 0:t.focus()},children:"Click to focus the switch"})]})};d.storyName="Switch Ref";d.parameters={docs:{description:{story:"Switch component exposes the `ref` prop. The `ref` exposes two methods `focus` & `scrollIntoView` which can be used to programatically control the DOM element"}}};const oe=["medium","small"],le=[!1,!0],re=[{label:"Default",isDisabled:!1},{label:"Disabled",isDisabled:!0}],ce=a=>a.charAt(0).toUpperCase()+a.slice(1),de=({size:a,isChecked:t,isDisabled:o})=>e.jsx(n,{size:a,isChecked:t,isDisabled:o,accessibilityLabel:`Switch ${a} ${t?"checked":"unchecked"} ${o?"disabled":"default"}`,onChange:()=>{console.log("onChange")}}),me=()=>e.jsx(s,{display:"flex",flexDirection:"column",gap:"spacing.11",children:oe.map(a=>e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.7",children:[e.jsxs(i,{size:"large",weight:"semibold",children:["Size: ",ce(a)]}),e.jsx(s,{display:"flex",flexDirection:"row",gap:"spacing.11",children:le.map(t=>e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.7",children:[e.jsxs(i,{size:"medium",weight:"semibold",color:"surface.text.gray.subtle",children:["isChecked: ",String(t)]}),e.jsx(s,{display:"flex",flexDirection:"column",gap:"spacing.7",children:re.map(({label:o,isDisabled:E})=>e.jsxs(s,{display:"flex",flexDirection:"row",alignItems:"center",gap:"spacing.5",children:[e.jsx(s,{width:"80px",children:e.jsx(i,{size:"small",color:"surface.text.gray.muted",children:o})}),e.jsx(de,{size:a,isChecked:t,isDisabled:E})]},o))})]},String(t)))})]},a))}),g=me.bind({});g.storyName="Showcase";var u,f,b;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`({
  ...args
}) => {
  return <SwitchComponent {...args} />;
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,w,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`({
  ...args
}) => {
  return <SwitchComponent {...args} />;
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var C,S,B;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`({
  ...args
}) => {
  return <SwitchComponent {...args} />;
}`,...(B=(S=r.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var T,k,z;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`({
  ...args
}) => {
  return <SwitchComponent {...args} />;
}`,...(z=(k=c.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var D,I,L;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Box>
      <Alert marginBottom="spacing.6" isFullWidth color="notice" title="Note" description={<>
            Switch doesn't come with a label out of the box, consumers can create custom label if
            needed, see the switch{' '}
            <Link href="https://www.figma.com/file/jubmQL9Z8V7881ayUD95ps/Blade---Payment-Light?type=design&node-id=31919-629519&t=9TijeCLrhExSrH1z-0">
              guidelines for more details
            </Link>{' '}
            on how to use labels.
          </>} />
      <Text marginBottom="spacing.3">Right position:</Text>
      <Box as="label" display="flex" alignItems="center" gap="spacing.2">
        <SwitchComponent accessibilityLabel="Toggle Darkmode" size="small" />
        <Text weight="regular" variant="body" size="medium">
          Toggle Darkmode
        </Text>
      </Box>
      <Text marginTop="spacing.7" marginBottom="spacing.3">
        Left position:
      </Text>
      <Box as="label" display="flex" alignItems="center" gap="spacing.2">
        <Text weight="regular" variant="body" size="medium">
          Toggle Darkmode
        </Text>
        <SwitchComponent accessibilityLabel="Toggle Darkmode" size="small" />
      </Box>

      <Text marginTop="spacing.7" marginBottom="spacing.3">
        Multiple Groups:
      </Text>
      <Box width="350px">
        <Card>
          <CardBody>
            <Text size="small" weight="semibold" marginBottom="spacing.4">
              Activate/lock the below methods for card transactions
            </Text>
            <Box display="flex" flexDirection="column" gap="spacing.3">
              <Box as="label" display="flex" alignItems="center" justifyContent="space-between" gap="spacing.2">
                <Box display="flex" alignItems="center" gap="spacing.2">
                  <MapPinIcon color="surface.icon.gray.subtle" size="small" />
                  <Text weight="regular" variant="body" size="medium">
                    International transaction
                  </Text>
                </Box>
                <SwitchComponent accessibilityLabel="International transaction" size="small" />
              </Box>
              <Box as="label" display="flex" alignItems="center" justifyContent="space-between" gap="spacing.2">
                <Box display="flex" alignItems="center" gap="spacing.2">
                  <GlobeIcon color="surface.icon.gray.muted" size="small" />
                  <Text weight="regular" variant="body" size="medium">
                    Online transaction
                  </Text>
                </Box>
                <SwitchComponent accessibilityLabel="Online transaction" size="small" />
              </Box>
              <Box as="label" display="flex" alignItems="center" justifyContent="space-between" gap="spacing.2">
                <Box display="flex" alignItems="center" gap="spacing.2">
                  <WifiIcon color="surface.icon.gray.muted" size="small" />
                  <Text weight="regular" variant="body" size="medium">
                    Contactless Transaction
                  </Text>
                </Box>
                <SwitchComponent accessibilityLabel="Contactless Transaction" size="small" />
              </Box>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </Box>;
}`,...(L=(I=p.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var v,A,R;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <ControlledAndUncontrolledComp />;
}`,...(R=(A=x.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var U,O,N;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const switchRef = React.useRef<BladeElementRef>(null);
  return <BaseBox gap="spacing.3" display="flex" alignItems="center">
      <SwitchComponent accessibilityLabel="Toggle darkmode" ref={switchRef} />
      <Button onClick={() => switchRef?.current?.focus()}>Click to focus the switch</Button>
    </BaseBox>;
}`,...(N=(O=d.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var M,P,W;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.11">
      {showcaseSizes.map(size => <Box key={size} display="flex" flexDirection="column" gap="spacing.7">
          <Text size="large" weight="semibold">
            Size: {capitalize(size)}
          </Text>

          <Box display="flex" flexDirection="row" gap="spacing.11">
            {showcaseCheckedStates.map(isChecked => <Box key={String(isChecked)} display="flex" flexDirection="column" gap="spacing.7">
                <Text size="medium" weight="semibold" color="surface.text.gray.subtle">
                  isChecked: {String(isChecked)}
                </Text>

                <Box display="flex" flexDirection="column" gap="spacing.7">
                  {showcaseStates.map(({
              label,
              isDisabled
            }) => <Box key={label} display="flex" flexDirection="row" alignItems="center" gap="spacing.5">
                      <Box width="80px">
                        <Text size="small" color="surface.text.gray.muted">
                          {label}
                        </Text>
                      </Box>
                      <ShowcaseSwitchInstance size={size} isChecked={isChecked} isDisabled={isDisabled} />
                    </Box>)}
                </Box>
              </Box>)}
          </Box>
        </Box>)}
    </Box>;
}`,...(W=(P=g.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};const ge=["Default","Checked","DefaultCheckedSwitch","Small","WithLabel","ControlledAndUncontrolled","SwitchRef","Showcase"],fe=Object.freeze(Object.defineProperty({__proto__:null,Checked:l,ControlledAndUncontrolled:x,Default:m,DefaultCheckedSwitch:r,Showcase:g,Small:c,SwitchRef:d,WithLabel:p,__namedExportsOrder:ge,default:ae},Symbol.toStringTag,{value:"Module"}));export{fe as s};
