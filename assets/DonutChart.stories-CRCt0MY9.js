import{iH as s,j as a,B as b,iI as p,iB as h,iA as u,iJ as r,a8 as T,H as xa}from"./iframe-C1qQ09LF.js";import{S as ga}from"./Sandbox.web-B2xP21Qp.js";import{S as ya}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./baseCode-DnWYDQ6N.js";import"./Sandbox.web-C7diOxlu.js";import"./componentStatusData-8pChZ-5h.js";const Da=()=>a.jsxs(ya,{componentName:"DonutChart",componentDescription:"A Donut component built on top of Recharts with Loom UI design system styling.",figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=93596-50164&m=dev",apiDecisionLink:"https://github.com/razorpay/blade/tree/master/packages/blade/src/components/Charts/_decisions",children:[a.jsx(xa,{size:"large",children:"Usage"}),a.jsx(ga,{showConsole:!0,children:`
        import {
         ChartDonut,
         ChartDonutWrapper,
         ChartTooltip,
         ChartLegend,
         Box,
       } from '@greenloom/ui/components';
       
       const chartData = [
         { name: 'Group A', value: 400 },
         { name: 'Group B', value: 300 },
         { name: 'Group C', value: 300 },
         { name: 'Group D', value: 200 },
         { name: 'Group E', value: 100 },
       ];
       
       function App() {
         return (
           <Box width="400px" height="400px">
             <Box width="100%" height="400px">
               <ChartDonutWrapper
                 content={{
                   label: 'Total',
                   value: '1300',
                 }}
               >
                 <ChartDonut dataKey="value" nameKey="name" data={chartData} />
                 <ChartLegend />
                 <ChartTooltip />
               </ChartDonutWrapper>
             </Box>
           </Box>
         );
       }
       
       export default App;

      `})]}),d={CHART_DONUT_PROPS:"ChartDonut Props",CHART_DONUT_WRAPPER_PROPS:"ChartDonutWrapper Props"},Ra={title:"Components/Charts/DonutChart",component:s,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["circle","semicircle"],table:{category:d.CHART_DONUT_PROPS}},radius:{control:{type:"select"},options:["small","medium","large"],table:{category:d.CHART_DONUT_PROPS}},content:{control:{type:"object"},table:{category:d.CHART_DONUT_WRAPPER_PROPS}},colorTheme:{control:{type:"select"},options:["categorical"],table:{category:d.CHART_DONUT_WRAPPER_PROPS}}},parameters:{docs:{page:Da},controls:{exclude:["dataKey","nameKey","cx","cy","children","data"]}}},c=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200},{name:"Group E",value:100}],l=({children:e})=>a.jsx(b,{width:"100%",height:"100%",backgroundColor:"surface.background.gray.intense",display:"flex",justifyContent:"center",alignItems:"center",padding:"spacing.8",borderRadius:"medium",children:e}),ja=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200},{name:"Group E",value:100},{name:"Group F",value:100},{name:"Group G",value:100},{name:"Group H",value:100}],Wa=[{category:"Electronics",code:"ELEC",shortName:"Electronics",revenue:45e3,orders:120},{category:"Clothing",code:"CLTH",shortName:"Clothing",revenue:32e3,orders:280},{category:"Home & Garden",code:"HOME",shortName:"Home & Garden",revenue:28e3,orders:95},{category:"Sports",code:"SPRT",shortName:"Sports",revenue:18e3,orders:150},{category:"Books",code:"BOOK",shortName:"Books",revenue:12e3,orders:320}],C=e=>{const{type:t,radius:o,dataKey:n,nameKey:S,data:R,...ma}=e;return a.jsx(l,{children:a.jsx(b,{width:"100%",height:"400px",children:a.jsxs(p,{content:{label:"Total",value:"1300"},...ma,children:[a.jsx(s,{type:t,radius:o,data:c}),a.jsx(h,{}),a.jsx(u,{})]})})})},i=e=>{const{type:t,radius:o,dataKey:n="revenue",nameKey:S="category",...R}=e;return a.jsx(l,{children:a.jsx(b,{width:"100%",height:"400px",children:a.jsxs(p,{...R,children:[a.jsx(s,{type:t,radius:o,dataKey:n,nameKey:S,data:Wa}),a.jsx(h,{}),a.jsx(u,{})]})})})};i.argTypes={dataKey:{control:{type:"select"},options:["revenue","orders"],defaultValue:"revenue",description:"Field to use for segment values",table:{category:d.CHART_DONUT_PROPS}},nameKey:{control:{type:"select"},options:["category","code","shortName"],defaultValue:"category",description:"Field to use for segment labels",table:{category:d.CHART_DONUT_PROPS}}};i.parameters={controls:{exclude:["cx","cy","children","data"]}};const m=e=>{const{type:t,radius:o,...n}=e;return a.jsx(l,{children:a.jsxs(p,{content:{label:"Total",value:"1300"},width:"500px",height:"300px",...n,children:[a.jsx(s,{dataKey:"value",nameKey:"name",data:c,radius:o||"medium",type:t}),a.jsx(h,{}),a.jsx(u,{})]})})},x=e=>{const{type:t,radius:o,...n}=e;return a.jsx(l,{children:a.jsxs(p,{width:"500px",height:"500px",...n,children:[a.jsxs(s,{dataKey:"value",nameKey:"name",data:c,radius:o||"small",type:t,children:[a.jsx(r,{}),a.jsx(r,{}),a.jsx(r,{}),a.jsx(r,{}),a.jsx(r,{})]}),a.jsx(u,{})]})})},g=e=>{const{type:t,radius:o,...n}=e;return a.jsx(l,{children:a.jsxs(p,{width:"500px",height:"400px",...n,children:[a.jsxs(s,{dataKey:"value",nameKey:"name",data:c,radius:o||"large",type:t,children:[a.jsx(r,{}),a.jsx(r,{}),a.jsx(r,{}),a.jsx(r,{}),a.jsx(r,{})]}),a.jsx(u,{}),a.jsx(h,{})]})})},y=e=>{const{type:t,radius:o,...n}=e;return a.jsx(l,{children:a.jsxs(p,{width:"500px",height:"300px",...n,children:[a.jsx(s,{dataKey:"value",nameKey:"name",data:c,colorTheme:"categorical",radius:o,type:t}),a.jsx(u,{}),a.jsx(h,{})]})})},D=e=>{const{type:t,radius:o,...n}=e;return a.jsx(l,{children:a.jsxs(p,{width:"500px",height:"300px",...n,children:[a.jsxs(s,{dataKey:"value",nameKey:"name",data:c,radius:o,type:t||"semicircle",children:[a.jsx(r,{}),a.jsx(r,{}),a.jsx(r,{}),a.jsx(r,{}),a.jsx(r,{})]}),a.jsx(u,{})]})})},w=e=>{const{type:t,radius:o,...n}=e;return a.jsx(l,{children:a.jsxs(p,{width:"500px",height:"300px",content:a.jsx(T,{value:200,size:"2xlarge",type:"heading"}),...n,children:[a.jsxs(s,{dataKey:"value",nameKey:"name",data:c,type:t,radius:o,children:[a.jsx(r,{}),a.jsx(r,{}),a.jsx(r,{}),a.jsx(r,{}),a.jsx(r,{})]}),a.jsx(h,{}),a.jsx(u,{})]})})},v=e=>{const{type:t,radius:o,...n}=e;return a.jsx(l,{children:a.jsxs(p,{width:"500px",height:"300px",content:a.jsx(T,{value:200,size:"2xlarge",type:"heading"}),...n,children:[a.jsxs(s,{dataKey:"value",nameKey:"name",data:c,type:t,radius:o,children:[a.jsx(r,{}),a.jsx(r,{}),a.jsx(r,{}),a.jsx(r,{}),a.jsx(r,{})]}),a.jsx(h,{layout:"vertical",align:"right"}),a.jsx(u,{})]})})},j=e=>{const{type:t,radius:o,...n}=e;return a.jsx(l,{children:a.jsxs(p,{content:{value:"1300"},width:"500px",height:"300px",...n,children:[a.jsxs(s,{dataKey:"value",nameKey:"name",data:c,type:t,radius:o,children:[a.jsx(r,{color:"data.background.categorical.gold.faint"}),a.jsx(r,{color:"data.background.categorical.blue.faint"}),a.jsx(r,{color:"data.background.categorical.orange.faint"}),a.jsx(r,{color:"data.background.categorical.red.faint"}),a.jsx(r,{color:"data.background.categorical.purple.faint"})]}),a.jsx(h,{}),a.jsx(u,{})]})})},K=e=>{const{type:t,radius:o,...n}=e;return a.jsx(l,{children:a.jsxs(p,{width:"500px",height:"500px",...n,children:[a.jsx(s,{dataKey:"value",nameKey:"name",data:ja,type:t,radius:o}),a.jsx(h,{}),a.jsx(u,{})]})})},P=e=>{const{type:t,radius:o,...n}=e;return a.jsx(l,{children:a.jsxs(p,{width:"500px",height:"300px",content:a.jsx(T,{value:200,size:"2xlarge",type:"heading"}),...n,children:[a.jsxs(s,{dataKey:"value",nameKey:"name",data:c,type:t,radius:o,children:[a.jsx(r,{color:"data.background.sequential.blue.500"}),a.jsx(r,{color:"data.background.sequential.blue.400"}),a.jsx(r,{color:"data.background.sequential.blue.300"}),a.jsx(r,{color:"data.background.sequential.blue.200"}),a.jsx(r,{color:"data.background.sequential.blue.100"})]}),a.jsx(h,{}),a.jsx(u,{})]})})},W=e=>{const{type:t,radius:o,...n}=e;return a.jsx(l,{children:a.jsxs(p,{width:"500px",height:"400px",content:{label:"Total",value:"1300"},...n,children:[a.jsx(s,{dataKey:"value",nameKey:"name",data:c,type:t,radius:o}),a.jsx(h,{defaultSelectedDataKeys:["Group D","Group E"]}),a.jsx(u,{})]})})};C.storyName="Default Donut Chart";i.storyName="Donut Chart with Custom dataKey and nameKey";m.storyName="Donut Chart with Center Text";x.storyName="Small Radius Donut Chart";g.storyName="Extra Large Radius Donut Chart";y.storyName="Donut Chart with Color theme";D.storyName="SemiCircle Donut Chart";j.storyName="Donut Chart with Custom colors";W.storyName="Donut Chart with Selected Slices";var f,L,k;C.parameters={...C.parameters,docs:{...(f=C.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  // Extract ChartDonut props and ChartDonutWrapper props
  const {
    type,
    radius,
    dataKey,
    nameKey,
    data,
    ...wrapperProps
  } = args;
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartDonutWrapper content={{
        label: 'Total',
        value: '1300'
      }} {...wrapperProps}>
          <ChartDonut type={type} radius={radius} data={chartData} />
          <ChartLegend />
          <ChartTooltip />
        </ChartDonutWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(k=(L=C.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var G,A,N;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const {
    type,
    radius,
    dataKey = 'revenue',
    nameKey = 'category',
    ...wrapperProps
  } = args;
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartDonutWrapper {...wrapperProps}>
          <ChartDonut type={type} radius={radius} dataKey={dataKey} nameKey={nameKey} data={salesByCategory} />
          <ChartLegend />
          <ChartTooltip />
        </ChartDonutWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(N=(A=i.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var B,_,E;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  // Extract ChartDonut props and ChartDonutWrapper props
  const {
    type,
    radius,
    ...wrapperProps
  } = args;
  return <ChartsWrapper>
      <ChartDonutWrapper content={{
      label: 'Total',
      value: '1300'
    }} width="500px" height="300px" {...wrapperProps}>
        <ChartDonut dataKey="value" nameKey="name" data={chartData} radius={radius || 'medium'} type={type} />

        <ChartLegend />
        <ChartTooltip />
      </ChartDonutWrapper>
    </ChartsWrapper>;
}`,...(E=(_=m.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var O,H,q;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const {
    type,
    radius,
    ...wrapperProps
  } = args;
  return <ChartsWrapper>
      <ChartDonutWrapper width="500px" height="500px" {...wrapperProps}>
        <ChartDonut dataKey="value" nameKey="name" data={chartData} radius={radius || 'small'} type={type}>
          <ChartDonutCell />
          <ChartDonutCell />
          <ChartDonutCell />
          <ChartDonutCell />
          <ChartDonutCell />
        </ChartDonut>
        <ChartTooltip />
      </ChartDonutWrapper>
    </ChartsWrapper>;
}`,...(q=(H=x.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var U,z,V;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const {
    type,
    radius,
    ...wrapperProps
  } = args;
  return <ChartsWrapper>
      <ChartDonutWrapper width="500px" height="400px" {...wrapperProps}>
        <ChartDonut dataKey="value" nameKey="name" data={chartData} radius={radius || 'large'} type={type}>
          <ChartDonutCell />
          <ChartDonutCell />
          <ChartDonutCell />
          <ChartDonutCell />
          <ChartDonutCell />
        </ChartDonut>
        <ChartTooltip />
        <ChartLegend />
      </ChartDonutWrapper>
    </ChartsWrapper>;
}`,...(V=(z=g.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var F,I,J;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const {
    type,
    radius,
    ...wrapperProps
  } = args;
  return <ChartsWrapper>
      <ChartDonutWrapper width="500px" height="300px" {...wrapperProps}>
        <ChartDonut dataKey="value" nameKey="name" data={chartData} colorTheme="categorical" radius={radius} type={type} />
        <ChartTooltip />
        <ChartLegend />
      </ChartDonutWrapper>
    </ChartsWrapper>;
}`,...(J=(I=y.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var M,Q,Z;D.parameters={...D.parameters,docs:{...(M=D.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const {
    type,
    radius,
    ...wrapperProps
  } = args;
  return <ChartsWrapper>
      <ChartDonutWrapper width="500px" height="300px" {...wrapperProps}>
        <ChartDonut dataKey="value" nameKey="name" data={chartData} radius={radius} type={type || 'semicircle'}>
          <ChartDonutCell />
          <ChartDonutCell />
          <ChartDonutCell />
          <ChartDonutCell />
          <ChartDonutCell />
        </ChartDonut>
        <ChartTooltip />
      </ChartDonutWrapper>
    </ChartsWrapper>;
}`,...(Z=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var X,Y,$;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const {
    type,
    radius,
    ...wrapperProps
  } = args;
  return <ChartsWrapper>
      <ChartDonutWrapper width="500px" height="300px" content={<Amount value={200} size="2xlarge" type="heading" />} {...wrapperProps}>
        <ChartDonut dataKey="value" nameKey="name" data={chartData} type={type} radius={radius}>
          <ChartDonutCell />
          <ChartDonutCell />
          <ChartDonutCell />
          <ChartDonutCell />
          <ChartDonutCell />
        </ChartDonut>
        <ChartLegend />
        <ChartTooltip />
      </ChartDonutWrapper>
    </ChartsWrapper>;
}`,...($=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var aa,ra,ea;v.parameters={...v.parameters,docs:{...(aa=v.parameters)==null?void 0:aa.docs,source:{originalSource:`args => {
  const {
    type,
    radius,
    ...wrapperProps
  } = args;
  return <ChartsWrapper>
      <ChartDonutWrapper width="500px" height="300px" content={<Amount value={200} size="2xlarge" type="heading" />} {...wrapperProps}>
        <ChartDonut dataKey="value" nameKey="name" data={chartData} type={type} radius={radius}>
          <ChartDonutCell />
          <ChartDonutCell />
          <ChartDonutCell />
          <ChartDonutCell />
          <ChartDonutCell />
        </ChartDonut>
        <ChartLegend layout="vertical" align="right" />
        <ChartTooltip />
      </ChartDonutWrapper>
    </ChartsWrapper>;
}`,...(ea=(ra=v.parameters)==null?void 0:ra.docs)==null?void 0:ea.source}}};var ta,oa,na;j.parameters={...j.parameters,docs:{...(ta=j.parameters)==null?void 0:ta.docs,source:{originalSource:`args => {
  const {
    type,
    radius,
    ...wrapperProps
  } = args;
  return <ChartsWrapper>
      <ChartDonutWrapper content={{
      value: '1300'
    }} width="500px" height="300px" {...wrapperProps}>
        <ChartDonut dataKey="value" nameKey="name" data={chartData} type={type} radius={radius}>
          <ChartDonutCell color="data.background.categorical.gold.faint" />
          <ChartDonutCell color="data.background.categorical.blue.faint" />
          <ChartDonutCell color="data.background.categorical.orange.faint" />
          <ChartDonutCell color="data.background.categorical.red.faint" />
          <ChartDonutCell color="data.background.categorical.purple.faint" />
        </ChartDonut>
        <ChartLegend />
        <ChartTooltip />
      </ChartDonutWrapper>
    </ChartsWrapper>;
}`,...(na=(oa=j.parameters)==null?void 0:oa.docs)==null?void 0:na.source}}};var sa,pa,ua;K.parameters={...K.parameters,docs:{...(sa=K.parameters)==null?void 0:sa.docs,source:{originalSource:`args => {
  const {
    type,
    radius,
    ...wrapperProps
  } = args;
  return <ChartsWrapper>
      <ChartDonutWrapper width="500px" height="500px" {...wrapperProps}>
        <ChartDonut dataKey="value" nameKey="name" data={chartsLargeData} type={type} radius={radius} />
        <ChartLegend />
        <ChartTooltip />
      </ChartDonutWrapper>
    </ChartsWrapper>;
}`,...(ua=(pa=K.parameters)==null?void 0:pa.docs)==null?void 0:ua.source}}};var la,ha,ca;P.parameters={...P.parameters,docs:{...(la=P.parameters)==null?void 0:la.docs,source:{originalSource:`args => {
  const {
    type,
    radius,
    ...wrapperProps
  } = args;
  return <ChartsWrapper>
      <ChartDonutWrapper width="500px" height="300px" content={<Amount value={200} size="2xlarge" type="heading" />} {...wrapperProps}>
        <ChartDonut dataKey="value" nameKey="name" data={chartData} type={type} radius={radius}>
          <ChartDonutCell color="data.background.sequential.blue.500" />
          <ChartDonutCell color="data.background.sequential.blue.400" />
          <ChartDonutCell color="data.background.sequential.blue.300" />
          <ChartDonutCell color="data.background.sequential.blue.200" />
          <ChartDonutCell color="data.background.sequential.blue.100" />
        </ChartDonut>
        <ChartLegend />
        <ChartTooltip />
      </ChartDonutWrapper>
    </ChartsWrapper>;
}`,...(ca=(ha=P.parameters)==null?void 0:ha.docs)==null?void 0:ca.source}}};var ia,da,Ca;W.parameters={...W.parameters,docs:{...(ia=W.parameters)==null?void 0:ia.docs,source:{originalSource:`args => {
  const {
    type,
    radius,
    ...wrapperProps
  } = args;
  return <ChartsWrapper>
      <ChartDonutWrapper width="500px" height="400px" content={{
      label: 'Total',
      value: '1300'
    }} {...wrapperProps}>
        <ChartDonut dataKey="value" nameKey="name" data={chartData} type={type} radius={radius} />
        <ChartLegend defaultSelectedDataKeys={['Group D', 'Group E']} />
        <ChartTooltip />
      </ChartDonutWrapper>
    </ChartsWrapper>;
}`,...(Ca=(da=W.parameters)==null?void 0:da.docs)==null?void 0:Ca.source}}};const fa=["BasicDonutChart","DonutChartWithCustomKeys","DonutChartWithCenterText","SmallRadiusDonutChart","ExtraLargeRadiusDonutChart","DonutChartWithColorTheme","SemiCircleDonutChart","DonutChartWithAmount","DonutChartWithVerticalLegend","DonutChartWithCustomColor","DonutChartWithLargeData","DonutChartWithSequentialColors","DonutChartWithSelectedSlices"];export{C as BasicDonutChart,w as DonutChartWithAmount,m as DonutChartWithCenterText,y as DonutChartWithColorTheme,j as DonutChartWithCustomColor,i as DonutChartWithCustomKeys,K as DonutChartWithLargeData,W as DonutChartWithSelectedSlices,P as DonutChartWithSequentialColors,v as DonutChartWithVerticalLegend,g as ExtraLargeRadiusDonutChart,D as SemiCircleDonutChart,x as SmallRadiusDonutChart,fa as __namedExportsOrder,Ra as default};
