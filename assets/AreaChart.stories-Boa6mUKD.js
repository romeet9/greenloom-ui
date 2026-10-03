import{iw as r,j as a,B as e,aI as w,i7 as S,i8 as R,aJ as k,a8 as ma,T as v,ix as n,H as W,iy as i,iz as d,iA as c,iB as h,iC as pa,iD as la}from"./iframe-C1qQ09LF.js";import{S as xa}from"./Sandbox.web-B2xP21Qp.js";import{S as ga}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./baseCode-DnWYDQ6N.js";import"./Sandbox.web-C7diOxlu.js";import"./componentStatusData-8pChZ-5h.js";const Ca=()=>a.jsxs(ga,{componentName:"AreaChart",componentDescription:"An Area Chart component built on top of Recharts with Loom UI design system styling.",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Charts/_decisions/decisions.md",figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=92678-188717&p=f&m=dev",children:[a.jsx(W,{size:"large",children:"Usage"}),a.jsx(xa,{showConsole:!0,children:`
          import {
          ChartAreaWrapper,
          ChartArea,
          ChartXAxis,
          ChartYAxis,
          ChartCartesianGrid,
          ChartTooltip,
          ChartLegend,
          ChartReferenceLine,
          Box,
        } from '@greenloom/ui/components';
        
        function App() {
          const data = [
            { month: 'Jan', teamA: 4000 },
            { month: 'Feb', teamA: 3000 },
            { month: 'Mar', teamA: 2000 },
            { month: 'Apr', teamA: 2780 },
            { month: 'May', teamA: 1890 },
            { month: 'Jun', teamA: 2390 },
          ];
        
          return (
            <Box width="400px" height="400px">
              <ChartAreaWrapper data={data}>
                <ChartCartesianGrid />
                <ChartXAxis dataKey="month" />
                <ChartYAxis />
                <ChartTooltip />
                <ChartArea dataKey="teamA" name="Team A" />
              </ChartAreaWrapper>
            </Box>
          );
        }
        
        export default App;

      `})]}),l={CHART_AREA_PROPS:"ChartArea Props"},Ka={title:"Components/Charts/AreaChart",component:r,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["step","stepAfter","stepBefore","linear","monotone"],table:{category:l.CHART_AREA_PROPS}},connectNulls:{control:{type:"boolean"},table:{category:l.CHART_AREA_PROPS}},showLegend:{control:{type:"boolean"},table:{category:l.CHART_AREA_PROPS}},dataKey:{control:{type:"text"},table:{category:l.CHART_AREA_PROPS}},name:{control:{type:"text"},table:{category:l.CHART_AREA_PROPS}},stackId:{control:{type:"text"},table:{category:l.CHART_AREA_PROPS}},color:{control:{type:"text"},table:{category:l.CHART_AREA_PROPS}},dot:{control:{disable:!0},table:{category:l.CHART_AREA_PROPS}},activeDot:{control:{disable:!0},table:{category:l.CHART_AREA_PROPS}},_index:{table:{disable:!0}},_colorTheme:{table:{disable:!0}}},parameters:{docs:{page:Ca}}},p=[{month:"Jan",teamA:4e3,teamB:2400,teamC:1800},{month:"Feb",teamA:3e3,teamB:1398,teamC:2200},{month:"Mar",teamA:2e3,teamB:9800,teamC:1500},{month:"Apr",teamA:2780,teamB:3908,teamC:2800},{month:"May",teamA:1890,teamB:4800,teamC:2100},{month:"Jun",teamA:2390,teamB:3800,teamC:2500}],K=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",pv:3908,amt:2e3,uv:null},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],ua=[{month:"Jan",revenue:12500},{month:"Feb",revenue:15200},{month:"Mar",revenue:14800},{month:"Apr",revenue:18100},{month:"May",revenue:19500},{month:"Jun",revenue:22300}],Aa=[{day:"Mon",visitors:2400},{day:"Tue",visitors:1398},{day:"Wed",visitors:3800},{day:"Thu",visitors:3908},{day:"Fri",visitors:4800},{day:"Sat",visitors:3800},{day:"Sun",visitors:4300}],m=({children:t})=>a.jsx(e,{width:"100%",height:"100%",backgroundColor:"surface.background.gray.intense",display:"flex",justifyContent:"center",alignItems:"center",padding:"spacing.8",borderRadius:"medium",children:t}),C=({dataKey:t="teamA",name:s="Team A",...o})=>a.jsx(m,{children:a.jsx(e,{width:"100%",height:"500px",children:a.jsxs(n,{data:p,children:[a.jsx(i,{dataKey:"month"}),a.jsx(d,{}),a.jsx(c,{}),a.jsx(r,{dataKey:t,name:s,type:"monotone",color:"data.background.categorical.blue.intense",...o}),a.jsx(h,{})]})})}),u=({dataKey:t="teamA",name:s="Team A",...o})=>a.jsx(m,{children:a.jsx(e,{width:"100%",height:"500px",children:a.jsxs(n,{data:p,children:[a.jsx(i,{dataKey:"month"}),a.jsx(d,{}),a.jsx(c,{}),a.jsx(h,{}),a.jsx(r,{dataKey:t,name:s,type:"monotone",stackId:"1",color:"data.background.categorical.blue.moderate",...o}),a.jsx(r,{dataKey:"teamB",name:"teamB",type:"monotone",stackId:"1",color:"data.background.categorical.red.moderate",...o})]})})}),x=()=>a.jsx(m,{children:a.jsxs(e,{display:"flex",flexDirection:"column",gap:"spacing.8",width:"100%",children:[a.jsxs(e,{display:"flex",flexDirection:"column",gap:"spacing.3",width:"100%",children:[a.jsx(W,{size:"small",children:"Hard gap for outages (connectNulls={false}, default)"}),a.jsx(e,{width:"100%",height:"220px",children:a.jsxs(n,{data:K,children:[a.jsx(i,{dataKey:"name"}),a.jsx(d,{}),a.jsx(c,{}),a.jsx(h,{}),a.jsx(r,{type:"monotone",dataKey:"uv",name:"Visitors (Gap on no-data)",color:"data.background.categorical.orange.moderate"})]})})]}),a.jsxs(e,{display:"flex",flexDirection:"column",gap:"spacing.3",width:"100%",children:[a.jsx(W,{size:"small",children:'Solid bridge across nulls (connectNullsStyle="solid")'}),a.jsx(e,{width:"100%",height:"220px",children:a.jsxs(n,{data:K,children:[a.jsx(i,{dataKey:"name"}),a.jsx(d,{}),a.jsx(c,{}),a.jsx(h,{}),a.jsx(r,{type:"monotone",dataKey:"uv",name:"Visitors (Solid across no-data)",connectNulls:!0,connectNullsStyle:"solid",color:"data.background.categorical.blue.moderate"})]})})]}),a.jsxs(e,{display:"flex",flexDirection:"column",gap:"spacing.3",width:"100%",children:[a.jsx(W,{size:"small",children:'Dashed bridge across nulls (connectNullsStyle="dashed")'}),a.jsx(e,{width:"100%",height:"220px",children:a.jsxs(n,{data:K,children:[a.jsx(i,{dataKey:"name"}),a.jsx(d,{}),a.jsx(c,{}),a.jsx(h,{}),a.jsx(r,{type:"monotone",dataKey:"uv",name:"Visitors (Dashed across no-data)",connectNulls:!0,connectNullsStyle:"dashed",color:"data.background.categorical.green.moderate"})]})})]})]})});x.parameters={controls:{disable:!0}};const A=({dataKey:t="uv",name:s="Page A",...o})=>a.jsx(m,{children:a.jsx(e,{width:"100px",height:"50px",children:a.jsx(n,{data:K,children:a.jsx(r,{dataKey:t,name:s,type:"monotone",color:"data.background.categorical.blue.intense",connectNulls:!0,...o})})})}),y=({dataKey:t="teamA",name:s="Team A",...o})=>a.jsx(m,{children:a.jsx(e,{width:"100%",height:"400px",children:a.jsxs(n,{data:p,children:[a.jsx(i,{dataKey:"month"}),a.jsx(d,{}),a.jsx(c,{}),a.jsx(h,{}),a.jsx(r,{dataKey:t,name:s,type:"monotone",color:"data.background.categorical.blue.moderate",...o}),a.jsx(la,{y:3e3,label:"Target"})]})})}),j=({dataKey:t="teamA",name:s="Team A",...o})=>a.jsx(m,{children:a.jsx(e,{width:"100%",height:"400px",children:a.jsxs(n,{data:p,children:[a.jsx(i,{dataKey:"month"}),a.jsx(d,{}),a.jsx(c,{}),a.jsx(h,{}),a.jsx(r,{dataKey:t,name:s,type:"monotone",color:"data.background.categorical.blue.moderate",...o}),a.jsx(la,{x:"Apr",label:"Target"})]})})}),b=({dataKey:t="teamA",name:s="Success",...o})=>a.jsx(m,{children:a.jsx(e,{width:"100%",height:"400px",children:a.jsxs(n,{data:p,colorTheme:"categorical",children:[a.jsx(i,{dataKey:"month"}),a.jsx(d,{}),a.jsx(c,{}),a.jsx(h,{}),a.jsx(r,{dataKey:t,name:s,...o})]})})}),B=()=>a.jsx(m,{children:a.jsx(e,{width:"100%",height:"400px",children:a.jsxs(n,{data:p,colorTheme:"categorical",children:[a.jsx(i,{dataKey:"month"}),a.jsx(d,{}),a.jsx(c,{}),a.jsx(h,{}),a.jsx(r,{dataKey:"teamA",name:"value1"}),a.jsx(r,{dataKey:"teamB",name:"value2"})]})})}),f=({dataKey:t="teamA",name:s="Success",...o})=>a.jsx(m,{children:a.jsx(e,{width:"100%",height:"400px",children:a.jsxs(n,{data:p,colorTheme:"categorical",children:[a.jsx(i,{dataKey:"month"}),a.jsx(d,{}),a.jsx(c,{}),a.jsx(h,{}),a.jsx(r,{dataKey:t,name:s,...o}),a.jsx(r,{dataKey:"teamB",name:"Team B",color:"data.background.categorical.orange.strong",...o})]})})}),g=()=>a.jsxs(e,{display:"flex",gap:"spacing.5",flexWrap:"wrap",children:[a.jsxs(w,{width:"320px",children:[a.jsx(S,{children:a.jsx(R,{title:"Monthly Revenue",subtitle:"Last 6 months"})}),a.jsxs(k,{children:[a.jsxs(e,{marginBottom:"spacing.4",children:[a.jsx(ma,{value:22300,size:"large",color:"surface.text.gray.normal"}),a.jsx(v,{size:"small",color:"feedback.text.positive.intense",children:"+18% from last month"})]}),a.jsx(e,{height:"120px",children:a.jsx(n,{data:ua,children:a.jsx(r,{dataKey:"revenue",name:"Revenue",type:"monotone",color:"data.background.categorical.green.moderate"})})})]})]}),a.jsxs(w,{width:"320px",children:[a.jsx(S,{children:a.jsx(R,{title:"Website Traffic",subtitle:"This week"})}),a.jsxs(k,{children:[a.jsxs(e,{marginBottom:"spacing.4",children:[a.jsx(v,{size:"large",weight:"semibold",color:"surface.text.gray.normal",children:"23,194 visitors"}),a.jsx(v,{size:"small",color:"feedback.text.negative.intense",children:"-5% from last week"})]}),a.jsx(e,{height:"120px",children:a.jsx(n,{data:Aa,children:a.jsx(r,{dataKey:"visitors",name:"Visitors",type:"monotone",color:"data.background.categorical.blue.moderate"})})})]})]})]});g.parameters={controls:{disable:!0}};const T=()=>a.jsx(e,{width:"100%",height:"400px",children:a.jsxs(n,{data:p,colorTheme:"categorical",children:[a.jsx(i,{dataKey:"month"}),a.jsx(d,{}),a.jsx(c,{}),a.jsx(h,{}),a.jsx(pa,{}),a.jsx(r,{dataKey:"teamA",name:"Team A"}),a.jsx(r,{name:"Team B",color:"data.background.categorical.orange.strong",dataKey:"teamB"})]})});b.storyName="Single Area Chart with Color Theme";C.storyName="Simple Area Chart";u.storyName="Stacked Area Chart";x.storyName="Area Chart (Connect Nulls)";A.storyName="Tiny Area Chart /  Chart ";y.storyName="Area Chart with Reference Line";j.storyName="Area Chart with Reference Line (Vertical)";g.storyName="Area Chart / Spark Chart in Card (Dashboard Widget)";var D,L,P;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`({
  dataKey = 'teamA',
  name = 'Team A',
  ...args
}) => {
  return <ChartsWrapper>
      <Box width="100%" height="500px">
        <ChartAreaWrapper data={chartData}>
          <ChartXAxis dataKey="month" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartArea dataKey={dataKey} name={name} type="monotone" color="data.background.categorical.blue.intense" {...args} />
          <ChartLegend />
        </ChartAreaWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(P=(L=C.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var N,H,_;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`({
  dataKey = 'teamA',
  name = 'Team A',
  ...args
}) => {
  return <ChartsWrapper>
      <Box width="100%" height="500px">
        <ChartAreaWrapper data={chartData}>
          <ChartXAxis dataKey="month" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartArea dataKey={dataKey} name={name} type="monotone" stackId="1" color="data.background.categorical.blue.moderate" {...args} />
          <ChartArea dataKey="teamB" name="teamB" type="monotone" stackId="1" color="data.background.categorical.red.moderate" {...args} />
        </ChartAreaWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(_=(H=u.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var z,X,Y;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box display="flex" flexDirection="column" gap="spacing.8" width="100%">
        <Box display="flex" flexDirection="column" gap="spacing.3" width="100%">
          <Heading size="small">
            Hard gap for outages (connectNulls=&#123;false&#125;, default)
          </Heading>
          <Box width="100%" height="220px">
            <ChartAreaWrapper data={data}>
              <ChartXAxis dataKey="name" />
              <ChartYAxis />
              <ChartTooltip />
              <ChartLegend />
              <ChartArea type="monotone" dataKey="uv" name="Visitors (Gap on no-data)" color="data.background.categorical.orange.moderate" />
            </ChartAreaWrapper>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="spacing.3" width="100%">
          <Heading size="small">
            Solid bridge across nulls (connectNullsStyle=&quot;solid&quot;)
          </Heading>
          <Box width="100%" height="220px">
            <ChartAreaWrapper data={data}>
              <ChartXAxis dataKey="name" />
              <ChartYAxis />
              <ChartTooltip />
              <ChartLegend />
              <ChartArea type="monotone" dataKey="uv" name="Visitors (Solid across no-data)" connectNulls={true} connectNullsStyle="solid" color="data.background.categorical.blue.moderate" />
            </ChartAreaWrapper>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="spacing.3" width="100%">
          <Heading size="small">
            Dashed bridge across nulls (connectNullsStyle=&quot;dashed&quot;)
          </Heading>
          <Box width="100%" height="220px">
            <ChartAreaWrapper data={data}>
              <ChartXAxis dataKey="name" />
              <ChartYAxis />
              <ChartTooltip />
              <ChartLegend />
              <ChartArea type="monotone" dataKey="uv" name="Visitors (Dashed across no-data)" connectNulls={true} connectNullsStyle="dashed" color="data.background.categorical.green.moderate" />
            </ChartAreaWrapper>
          </Box>
        </Box>
      </Box>
    </ChartsWrapper>;
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var E,V,M;A.parameters={...A.parameters,docs:{...(E=A.parameters)==null?void 0:E.docs,source:{originalSource:`({
  dataKey = 'uv',
  name = 'Page A',
  ...args
}) => {
  return <ChartsWrapper>
      <Box width="100px" height="50px">
        <ChartAreaWrapper data={data}>
          <ChartArea dataKey={dataKey} name={name} type="monotone" color="data.background.categorical.blue.intense" connectNulls {...args} />
        </ChartAreaWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(M=(V=A.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var O,I,G;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`({
  dataKey = 'teamA',
  name = 'Team A',
  ...args
}) => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartAreaWrapper data={chartData}>
          <ChartXAxis dataKey="month" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartArea dataKey={dataKey} name={name} type="monotone" color="data.background.categorical.blue.moderate" {...args} />
          <ChartReferenceLine y={3000} label="Target" />
        </ChartAreaWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(G=(I=y.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var J,F,q;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`({
  dataKey = 'teamA',
  name = 'Team A',
  ...args
}) => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartAreaWrapper data={chartData}>
          <ChartXAxis dataKey="month" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartArea dataKey={dataKey} name={name} type="monotone" color="data.background.categorical.blue.moderate" {...args} />
          <ChartReferenceLine x="Apr" label="Target" />
        </ChartAreaWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(q=(F=j.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var U,Q,Z;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`({
  dataKey = 'teamA',
  name = 'Success',
  ...args
}) => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartAreaWrapper data={chartData} colorTheme="categorical">
          <ChartXAxis dataKey="month" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartArea dataKey={dataKey} name={name} {...args} />
        </ChartAreaWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(Z=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,aa,ea;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartAreaWrapper data={chartData} colorTheme="categorical">
          <ChartXAxis dataKey="month" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartArea dataKey="teamA" name="value1" />
          <ChartArea dataKey="teamB" name="value2" />
        </ChartAreaWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(ea=(aa=B.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var ra,ta,oa;f.parameters={...f.parameters,docs:{...(ra=f.parameters)==null?void 0:ra.docs,source:{originalSource:`({
  dataKey = 'teamA',
  name = 'Success',
  ...args
}) => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartAreaWrapper data={chartData} colorTheme="categorical">
          <ChartXAxis dataKey="month" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartArea dataKey={dataKey} name={name} {...args} />
          <ChartArea dataKey="teamB" name="Team B" color="data.background.categorical.orange.strong" {...args} />
        </ChartAreaWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(oa=(ta=f.parameters)==null?void 0:ta.docs)==null?void 0:oa.source}}};var na,sa,ia;g.parameters={...g.parameters,docs:{...(na=g.parameters)==null?void 0:na.docs,source:{originalSource:`() => {
  return <Box display="flex" gap="spacing.5" flexWrap="wrap">
      {/* Revenue Card */}
      <Card width="320px">
        <CardHeader>
          <CardHeaderLeading title="Monthly Revenue" subtitle="Last 6 months" />
        </CardHeader>
        <CardBody>
          <Box marginBottom="spacing.4">
            <Amount value={22300} size="large" color="surface.text.gray.normal" />
            <Text size="small" color="feedback.text.positive.intense">
              +18% from last month
            </Text>
          </Box>
          <Box height="120px">
            <ChartAreaWrapper data={revenueData}>
              <ChartArea dataKey="revenue" name="Revenue" type="monotone" color="data.background.categorical.green.moderate" />
            </ChartAreaWrapper>
          </Box>
        </CardBody>
      </Card>

      {/* Website Traffic Card */}
      <Card width="320px">
        <CardHeader>
          <CardHeaderLeading title="Website Traffic" subtitle="This week" />
        </CardHeader>
        <CardBody>
          <Box marginBottom="spacing.4">
            <Text size="large" weight="semibold" color="surface.text.gray.normal">
              23,194 visitors
            </Text>
            <Text size="small" color="feedback.text.negative.intense">
              -5% from last week
            </Text>
          </Box>
          <Box height="120px">
            <ChartAreaWrapper data={trafficData}>
              <ChartArea dataKey="visitors" name="Visitors" type="monotone" color="data.background.categorical.blue.moderate" />
            </ChartAreaWrapper>
          </Box>
        </CardBody>
      </Card>
    </Box>;
}`,...(ia=(sa=g.parameters)==null?void 0:sa.docs)==null?void 0:ia.source}}};var da,ca,ha;T.parameters={...T.parameters,docs:{...(da=T.parameters)==null?void 0:da.docs,source:{originalSource:`() => {
  return <Box width="100%" height="400px">
      <ChartAreaWrapper data={chartData} colorTheme="categorical">
        <ChartXAxis dataKey="month" />
        <ChartYAxis />
        <ChartTooltip />
        <ChartLegend />
        <ChartCartesianGrid />
        <ChartArea dataKey="teamA" name="Team A" />
        <ChartArea name="Team B" color="data.background.categorical.orange.strong" dataKey="teamB" />
      </ChartAreaWrapper>
    </Box>;
}`,...(ha=(ca=T.parameters)==null?void 0:ca.docs)==null?void 0:ha.source}}};const va=["SimpleAreaChart","StackedAreaChart","AreaChartNullBridge","TinyAreaChart","AreaChartWithReferenceLine","AreaChartWithReferenceLineVertical","AreaChartWithDefaultColorTheme","MultipleAreaChartWithDefaultColorTheme","AreaChartWithDefaultColorAndCustomColor","AreaChartInCard","AreaChartWithCartesianGrid"];export{g as AreaChartInCard,x as AreaChartNullBridge,T as AreaChartWithCartesianGrid,f as AreaChartWithDefaultColorAndCustomColor,b as AreaChartWithDefaultColorTheme,y as AreaChartWithReferenceLine,j as AreaChartWithReferenceLineVertical,B as MultipleAreaChartWithDefaultColorTheme,C as SimpleAreaChart,u as StackedAreaChart,A as TinyAreaChart,va as __namedExportsOrder,Ka as default};
