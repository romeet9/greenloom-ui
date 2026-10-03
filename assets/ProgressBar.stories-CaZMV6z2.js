import{b2 as d,j as e,X,r as x,x as p,H as f}from"./iframe-C1qQ09LF.js";import{S as F}from"./Sandbox.web-B2xP21Qp.js";import{S as G}from"./StoryPageWrapper-CS0_5maI.js";import{g as J}from"./storybookArgTypes-DFfQV31s.js";const Y=()=>e.jsxs(G,{componentDescription:"A Progress bar is generally a branded element that indicates progress of process or task",componentName:"ProgressBar",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=74864-85253&t=MTEDDZK78jmAqDmQ-1&scaling=min-zoom&page-id=16430%3A256331&mode=design",children:[e.jsx(X,{children:"Usage"}),e.jsx(F,{children:`
          import { ProgressBar } from '@greenloom/ui/components';

          function App() {
            return (
              <ProgressBar 
                label="Label" 
                value={30} 
                type="progress" 
                size="medium" 
              />
            )
          }

          export default App;
        `})]}),$={title:"Components/ProgressBar",component:d,parameters:{docs:{page:Y}},tags:["autodocs"],argTypes:J()},P=({...s})=>e.jsx(d,{...s}),o=P.bind({});o.storyName="Default";o.args={label:"Label",value:20};const n=P.bind({});n.storyName="Circular Progress";n.args={label:"Label",value:25,variant:"circular",size:"large"};const b=({...s})=>{const[a,B]=x.useState(10);return x.useEffect(()=>{const v=setInterval(()=>{a>=100?B(0):B(a+30)},2e3);return()=>{clearInterval(v)}},[a]),e.jsxs(p,{display:"flex",flexDirection:"column",marginTop:"spacing.3",marginBottom:"spacing.5",children:[s.size!=="large"?e.jsxs(p,{marginBottom:"spacing.5",children:[e.jsx(f,{size:"medium",marginBottom:"spacing.3",children:"Linear"}),e.jsx(d,{...s,value:a})]}):null,e.jsx(f,{size:"medium",marginBottom:"spacing.3",children:"Circular"}),e.jsx(d,{...s,value:a,variant:"circular"})]})},ee=({...s})=>{const[a,B]=x.useState(10);x.useEffect(()=>{const r=setInterval(()=>{a>=100?B(0):B(a+30)},2e3);return()=>{clearInterval(r)}},[a]);const v=["positive","negative","notice","information","neutral"];return e.jsxs(p,{display:"flex",flexDirection:"column",marginTop:"spacing.3",marginBottom:"spacing.5",width:"100%",children:[e.jsx(f,{size:"medium",marginBottom:"spacing.3",children:"Linear"}),v.map(r=>e.jsx(p,{paddingTop:"spacing.4",children:e.jsx(d,{label:r,...s,color:r,value:a,variant:"linear"})},r)),e.jsx(f,{size:"medium",marginBottom:"spacing.3",marginTop:"spacing.5",children:"Circular"}),e.jsx(p,{display:"flex",flexDirection:{base:"column",m:"row"},alignItems:"center",gap:"spacing.6",children:v.map(r=>e.jsx(p,{paddingTop:"spacing.4",children:e.jsx(d,{label:r,...s,color:r,value:a,variant:"circular"})},r))})]})},t=b.bind({});t.storyName="Without Label & Percentage";t.args={showPercentage:!1};const i=b.bind({});i.storyName="Small Size";i.args={label:"Label",size:"small"};const l=b.bind({});l.storyName="Medium Size";l.args={label:"Label",size:"medium"};const c=b.bind({});c.storyName="Large Size";c.args={label:"Label",size:"large",variant:"circular"};const g=ee.bind({});g.storyName="Colors";g.args={size:"medium"};const m=P.bind({});m.storyName="Meter Type";m.args={type:"meter",variant:"linear",size:"medium",value:10,label:"Balance: ₹10,000",color:"notice"};const u=P.bind({});u.storyName="Indeterminate Progress Bar";u.args={isIndeterminate:!0,label:"Checking"};var z,S,y;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`({
  ...args
}) => {
  return <ProgressBarComponent {...args} />;
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var C,h,j;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`({
  ...args
}) => {
  return <ProgressBarComponent {...args} />;
}`,...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var H,L,T;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`({
  ...args
}) => {
  const [value, setValue] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      if (value >= 100) {
        setValue(0);
      } else {
        setValue(value + 30);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [value]);
  return <BaseBox display="flex" flexDirection="column" marginTop="spacing.3" marginBottom="spacing.5">
      {args.size !== 'large' ? <BaseBox marginBottom="spacing.5">
          <Heading size="medium" marginBottom="spacing.3">
            Linear
          </Heading>
          <ProgressBarComponent {...args} value={value} />
        </BaseBox> : null}
      <Heading size="medium" marginBottom="spacing.3">
        Circular
      </Heading>
      <ProgressBarComponent {...args} value={value} variant="circular" />
    </BaseBox>;
}`,...(T=(L=t.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,I,D;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`({
  ...args
}) => {
  const [value, setValue] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      if (value >= 100) {
        setValue(0);
      } else {
        setValue(value + 30);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [value]);
  return <BaseBox display="flex" flexDirection="column" marginTop="spacing.3" marginBottom="spacing.5">
      {args.size !== 'large' ? <BaseBox marginBottom="spacing.5">
          <Heading size="medium" marginBottom="spacing.3">
            Linear
          </Heading>
          <ProgressBarComponent {...args} value={value} />
        </BaseBox> : null}
      <Heading size="medium" marginBottom="spacing.3">
        Circular
      </Heading>
      <ProgressBarComponent {...args} value={value} variant="circular" />
    </BaseBox>;
}`,...(D=(I=i.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var E,N,w;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`({
  ...args
}) => {
  const [value, setValue] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      if (value >= 100) {
        setValue(0);
      } else {
        setValue(value + 30);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [value]);
  return <BaseBox display="flex" flexDirection="column" marginTop="spacing.3" marginBottom="spacing.5">
      {args.size !== 'large' ? <BaseBox marginBottom="spacing.5">
          <Heading size="medium" marginBottom="spacing.3">
            Linear
          </Heading>
          <ProgressBarComponent {...args} value={value} />
        </BaseBox> : null}
      <Heading size="medium" marginBottom="spacing.3">
        Circular
      </Heading>
      <ProgressBarComponent {...args} value={value} variant="circular" />
    </BaseBox>;
}`,...(w=(N=l.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var A,M,W;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`({
  ...args
}) => {
  const [value, setValue] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      if (value >= 100) {
        setValue(0);
      } else {
        setValue(value + 30);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [value]);
  return <BaseBox display="flex" flexDirection="column" marginTop="spacing.3" marginBottom="spacing.5">
      {args.size !== 'large' ? <BaseBox marginBottom="spacing.5">
          <Heading size="medium" marginBottom="spacing.3">
            Linear
          </Heading>
          <ProgressBarComponent {...args} value={value} />
        </BaseBox> : null}
      <Heading size="medium" marginBottom="spacing.3">
        Circular
      </Heading>
      <ProgressBarComponent {...args} value={value} variant="circular" />
    </BaseBox>;
}`,...(W=(M=c.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var _,k,U;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`({
  ...args
}) => {
  const [value, setValue] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      if (value >= 100) {
        setValue(0);
      } else {
        setValue(value + 30);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [value]);
  const colors = ['positive', 'negative', 'notice', 'information', 'neutral'] as const;
  return <BaseBox display="flex" flexDirection="column" marginTop="spacing.3" marginBottom="spacing.5" width="100%">
      <Heading size="medium" marginBottom="spacing.3">
        Linear
      </Heading>
      {colors.map(color => <BaseBox key={color} paddingTop="spacing.4">
          <ProgressBarComponent label={color} {...args} color={color} value={value} variant="linear" />
        </BaseBox>)}
      <Heading size="medium" marginBottom="spacing.3" marginTop="spacing.5">
        Circular
      </Heading>
      <BaseBox display="flex" flexDirection={{
      base: 'column',
      m: 'row'
    }} alignItems="center" gap="spacing.6">
        {colors.map(color => <BaseBox key={color} paddingTop="spacing.4">
            <ProgressBarComponent label={color} {...args} color={color} value={value} variant="circular" />
          </BaseBox>)}
      </BaseBox>
    </BaseBox>;
}`,...(U=(k=g.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var O,Q,R;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`({
  ...args
}) => {
  return <ProgressBarComponent {...args} />;
}`,...(R=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var Z,q,K;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`({
  ...args
}) => {
  return <ProgressBarComponent {...args} />;
}`,...(K=(q=u.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};const ae=["Default","CircularProgress","ProgressBarWithoutLabelAndPercentage","ProgressBarSmallSize","ProgressBarMediumSize","ProgressBarLargeSize","ProgressBarWithColor","ProgressBarMeterVariant","ProgressBarIndeterminate"],te=Object.freeze(Object.defineProperty({__proto__:null,CircularProgress:n,Default:o,ProgressBarIndeterminate:u,ProgressBarLargeSize:c,ProgressBarMediumSize:l,ProgressBarMeterVariant:m,ProgressBarSmallSize:i,ProgressBarWithColor:g,ProgressBarWithoutLabelAndPercentage:t,__namedExportsOrder:ae,default:$},Symbol.toStringTag,{value:"Module"}));export{te as p};
