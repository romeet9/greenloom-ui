import{iE as a,j as e,B as t,iF as o,iy as d,iz as l,iA as h,iB as p,iC as Ae,iG as fe,T as g,H as Be,F as Se,a4 as Ke,hp as we,aK as ke}from"./iframe-C1qQ09LF.js";import{S as We}from"./Sandbox.web-B2xP21Qp.js";import{S as ve}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./baseCode-DnWYDQ6N.js";import"./Sandbox.web-C7diOxlu.js";import"./componentStatusData-8pChZ-5h.js";const De=()=>e.jsxs(ve,{componentName:"BarChart",componentDescription:"A Bar Chart component built on top of Recharts with Loom UI design system styling.",figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=92678-188719&p=f&m=dev",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Charts/_decisions/decisions.md",children:[e.jsx(Be,{size:"large",children:"Usage"}),e.jsx(We,{showConsole:!0,children:`
            import {
             ChartBar,
             ChartBarWrapper,
             ChartXAxis,
             ChartYAxis,
             ChartCartesianGrid,
             ChartTooltip,
             ChartLegend,
             Box,
           } from '@greenloom/ui/components';
           
           function App() {
             const data = [
               { name: 'Jan', sales: 4000 },
               { name: 'Feb', sales: 3000 },
               { name: 'Mar', sales: 2000 },
             ];
           
             return (
               <Box width="400px" height="400px">
                 <ChartBarWrapper data={data}>
                   <ChartCartesianGrid />
                   <ChartXAxis dataKey="name" />
                   <ChartYAxis />
                   <ChartTooltip />
                   <ChartLegend />
                   <ChartBar dataKey="sales" name="Sales" />
                 </ChartBarWrapper>
               </Box>
             );
           }
           
           export default App;

      `})]}),D={CHART_BAR_PROPS:"ChartBar Props"},ze={title:"Components/Charts/BarChart",component:a,tags:["autodocs"],argTypes:{dataKey:{control:{type:"text"},table:{category:D.CHART_BAR_PROPS}},name:{control:{type:"text"},table:{category:D.CHART_BAR_PROPS}},color:{control:{type:"text"},table:{category:D.CHART_BAR_PROPS}},stackId:{control:{type:"text"},table:{category:D.CHART_BAR_PROPS}},_index:{table:{disable:!0}},_colorTheme:{table:{disable:!0}}},parameters:{docs:{page:De}}},m=[{name:"Jan",seriesA:4e3,seriesB:2400,seriesC:1200},{name:"Feb",seriesA:3e3,seriesB:1398,seriesC:900},{name:"Mar",seriesA:2e3,seriesB:9800,seriesC:1600},{name:"Apr",seriesA:2780,seriesB:3908,seriesC:2200},{name:"May",seriesA:1890,seriesB:4800,seriesC:1700},{name:"Jun",seriesA:2390,seriesB:3800,seriesC:2100},{name:"Jul",seriesA:2390,seriesB:3800,seriesC:2100},{name:"Aug",seriesA:3e3,seriesB:4800,seriesC:3e3},{name:"Sep",seriesA:3500,seriesB:3400,seriesC:5300},{name:"Oct",seriesA:2e3,seriesB:1400,seriesC:3300},{name:"Nov",seriesA:1400,seriesB:5400,seriesC:1300},{name:"Dec",seriesA:1200,seriesB:4600,seriesC:2e3}],c=({children:r})=>e.jsxs(t,{width:"100%",height:"100%",backgroundColor:"surface.background.gray.intense",display:"flex",justifyContent:"center",alignItems:"center",padding:"spacing.8",borderRadius:"medium",children:[" ",r," "]}),k=({dataKey:r="seriesA",name:n="Series A",...i})=>e.jsx(c,{children:e.jsx(t,{width:"100%",height:"400px",children:e.jsxs(o,{data:m.slice(0,6),children:[e.jsx(d,{dataKey:"name"}),e.jsx(l,{}),e.jsx(h,{}),e.jsx(p,{}),e.jsx(a,{dataKey:r,name:n,...i})]})})}),y=()=>e.jsx(c,{children:e.jsx(t,{width:"100px",height:"50px",children:e.jsx(o,{data:m.slice(0,6),children:e.jsx(a,{dataKey:"seriesA",color:"data.background.categorical.blue.moderate"})})})});y.parameters={controls:{disable:!0}};const B=()=>e.jsx(c,{children:e.jsx(t,{width:"100%",height:"400px",children:e.jsxs(o,{data:m.slice(0,6),children:[e.jsx(d,{dataKey:"name"}),e.jsx(l,{}),e.jsx(h,{}),e.jsx(p,{}),e.jsx(a,{dataKey:"seriesA",name:"Series A",color:"data.background.categorical.blue.faint"}),e.jsx(a,{dataKey:"seriesB",name:"Series B",color:"data.background.categorical.purple.faint"})]})})});B.parameters={controls:{disable:!0}};const j=()=>e.jsx(c,{children:e.jsx(t,{width:"100%",height:"400px",children:e.jsxs(o,{data:m,children:[e.jsx(d,{dataKey:"name"}),e.jsx(l,{}),e.jsx(h,{}),e.jsx(p,{}),e.jsx(a,{dataKey:"seriesA",name:"Series A",stackId:"stack-1"}),e.jsx(a,{dataKey:"seriesB",name:"Series B",stackId:"stack-1"}),e.jsx(a,{dataKey:"seriesC",name:"Series C",stackId:"stack-1"})]})})});j.parameters={controls:{disable:!0}};const W=()=>e.jsx(c,{children:e.jsx(t,{width:"100%",height:"400px",children:e.jsxs(o,{data:m.slice(0,5),children:[e.jsx(d,{dataKey:"name"}),e.jsx(l,{}),e.jsx(h,{}),e.jsx(p,{}),e.jsx(a,{dataKey:"seriesA",name:"Series A"}),e.jsx(a,{dataKey:"seriesB",name:"Series B"}),e.jsx(a,{dataKey:"seriesC",name:"Series C"})]})})});W.parameters={controls:{disable:!0}};const je=[{period:"Apr 1",successRate:45,industryLow:38,industryHigh:58},{period:"Apr 2",successRate:52,industryLow:42,industryHigh:64},{period:"Apr 3",successRate:62,industryLow:48,industryHigh:70},{period:"Apr 4",successRate:70,industryLow:52,industryHigh:73},{period:"Apr 5",successRate:73,industryLow:55,industryHigh:75},{period:"Apr 6",successRate:71,industryLow:54,industryHigh:74},{period:"Apr 7",successRate:78,industryLow:56,industryHigh:76}],v=()=>e.jsx(c,{children:e.jsx(t,{width:"100%",height:"400px",children:e.jsxs(o,{data:je,children:[e.jsx(fe,{lowerDataKey:"industryLow",upperDataKey:"industryHigh",name:"Industry range"}),e.jsx(d,{dataKey:"period"}),e.jsx(l,{label:"Success rate (%)"}),e.jsx(h,{}),e.jsx(p,{}),e.jsx(a,{dataKey:"successRate",name:"Success rate",barSize:24})]})})});v.parameters={controls:{disable:!0}};const be=[{key:"card",name:"Card",palette:"purple"},{key:"upi",name:"UPI",palette:"blue"},{key:"netbanking",name:"Netbanking",palette:"green"},{key:"wallet",name:"Wallet",palette:"orange"},{key:"emi",name:"EMI",palette:"gold"}],Re={card:[54,57,50,59,40,32,56],upi:[76,79,72,81,62,54,78],netbanking:[39,42,35,44,25,17,41],wallet:[48,51,45,53,34,27,50],emi:[61,64,58,66,47,39,63]},Ie=je.map((r,n)=>{const i={period:r.period};return be.forEach(s=>{const u=Re[s.key][n];i[s.key]=u,i[`${s.key}Low`]=Math.max(0,u-12),i[`${s.key}High`]=Math.min(100,u+10)}),i}),C=({numberOfBars:r,showReferenceBand:n})=>{const i=be.slice(0,r);return e.jsx(c,{children:e.jsx(t,{width:"100%",height:"400px",children:e.jsxs(o,{data:Ie,children:[e.jsx(d,{dataKey:"period"}),e.jsx(l,{label:"Success rate (%)"}),e.jsx(h,{}),e.jsx(p,{}),i.map(s=>e.jsx(a,{dataKey:s.key,name:s.name,color:`data.background.categorical.${s.palette}.moderate`,barSize:i.length>4?10:16,...n?{rangeLowerDataKey:`${s.key}Low`,rangeUpperDataKey:`${s.key}High`,rangeName:"Industry range"}:{}},s.key))]})})})};C.args={numberOfBars:3,showReferenceBand:!0};C.argTypes={numberOfBars:{control:{type:"range",min:1,max:5,step:1},description:"Number of bar series to plot (1–5)."},showReferenceBand:{control:{type:"boolean"},description:"Give each bar its own industry reference band."}};const Le=({title:r,percentage:n,value:i,change:s,showDivider:u=!0})=>e.jsxs(t,{display:"flex",flexDirection:"row",flex:"1",children:[e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"spacing.2",paddingY:"spacing.4",paddingX:"spacing.5",flex:"1",children:[e.jsx(g,{size:"small",color:"surface.text.gray.muted",textDecorationLine:"underline",children:r}),e.jsxs(t,{display:"flex",flexDirection:"row",gap:"spacing.3",alignItems:"center",children:[e.jsxs(t,{display:"flex",flexDirection:"row",gap:"spacing.2",alignItems:"baseline",children:[e.jsx(g,{size:"medium",weight:"semibold",color:"surface.text.gray.normal",children:n}),e.jsx(g,{size:"medium",color:"surface.text.gray.muted",children:i})]}),e.jsx(t,{display:"flex",flexDirection:"row",gap:"spacing.1",alignItems:"center",paddingY:"spacing.1",paddingX:"spacing.2",borderRadius:"small",children:e.jsxs(t,{display:"flex",flexDirection:"row",gap:"spacing.1",alignItems:"center",justifyContent:"center",children:[e.jsx(we,{color:"interactive.icon.negative.normal"}),e.jsxs(g,{color:"interactive.text.negative.normal",children:[s,"%"]})]})})]})]}),u&&e.jsx(t,{height:"100%",display:"flex",alignItems:"center",children:e.jsx(ke,{orientation:"vertical"})})]}),R=[{title:"Checkout initiated",percentage:"100%",value:"1.3K",change:12},{title:"Address step reached",percentage:"86%",value:"1.2K",change:12},{title:"Payment step reached",percentage:"66%",value:"900",change:12},{title:"Payment attempted",percentage:"36%",value:"530",change:12},{title:"Sessions converted",percentage:"20%",value:"230",change:12}],Te=[{name:"Checkout",current:1300,previous:1500},{name:"Address",current:1200,previous:1300},{name:"Payment",current:900,previous:960},{name:"Attempted",current:530,previous:600},{name:"Converted",current:230,previous:300}],b=()=>e.jsx(c,{children:e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.4",children:[e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.2",paddingX:"spacing.5",children:[e.jsx(g,{size:"medium",weight:"medium",color:"surface.text.gray.normal",textDecorationLine:"underline",children:"Checkout conversion funnel"}),e.jsxs(t,{display:"flex",flexDirection:"row",gap:"spacing.3",alignItems:"center",children:[e.jsx(Be,{size:"xlarge",weight:"semibold",children:"20%"}),e.jsx(Se,{color:"negative",size:"small",icon:Ke,children:"12%"})]}),e.jsx(g,{size:"small",color:"surface.text.gray.muted",children:"Checkout conversion decreased from 22% to 20%"})]}),e.jsx(t,{display:"flex",flexDirection:"row",width:"100%",children:R.map((r,n)=>e.jsx(Le,{title:r.title,percentage:r.percentage,value:r.value,change:r.change,showDivider:n<R.length-1},r.title))}),e.jsx(t,{width:"100%",height:"320px",children:e.jsxs(o,{data:Te,children:[e.jsx(d,{dataKey:"name",hide:!0}),e.jsx(l,{hide:!0}),e.jsx(h,{}),e.jsx(p,{}),e.jsx(a,{dataKey:"current",name:"Oct 28, 2025",color:"data.background.sequential.blue.400",label:{position:"top",content:r=>{const{value:n}=r,i=Number(r.x)||0,s=Number(r.y)||0,u=Number(r.width)||0,x=typeof n=="number"?n:0;return e.jsx("text",{x:i+u/2,y:s-8,fill:"#768EA7",fontSize:12,textAnchor:"middle",style:{pointerEvents:"none"},children:x>=1e3?`${(x/1e3).toFixed(1)}K`:x})}}}),e.jsx(a,{dataKey:"previous",name:"Oct 25, 2025",color:"data.background.sequential.blue.100",label:{position:"top",content:r=>{const{value:n}=r,i=Number(r.x)||0,s=Number(r.y)||0,u=Number(r.width)||0,x=typeof n=="number"?n:0;return e.jsx("text",{x:i+u/2,y:s-8,fill:"#768EA7",fontSize:12,textAnchor:"middle",style:{pointerEvents:"none"},children:x>=1e3?`${(x/1e3).toFixed(1)}K`:x})}}})]})})]})});b.storyName="Grouped Bar Chart With Metrics";b.parameters={controls:{disable:!0}};const A=()=>e.jsx(c,{children:e.jsx(t,{width:"100%",height:"500px",children:e.jsxs(o,{data:m.slice(0,5),layout:"vertical",children:[e.jsx(d,{type:"number"}),e.jsx(l,{type:"category",dataKey:"name"}),e.jsx(h,{}),e.jsx(p,{}),e.jsx(a,{dataKey:"seriesA",name:"Series A",stackId:"2"}),e.jsx(a,{dataKey:"seriesB",name:"Series B",stackId:"2"}),e.jsx(a,{dataKey:"seriesC",name:"Series C",stackId:"2"})]})})});A.parameters={controls:{disable:!0}};const f=()=>e.jsx(c,{children:e.jsx(t,{width:"100%",height:"500px",children:e.jsxs(o,{data:m.slice(0,5),layout:"vertical",colorTheme:"categorical",children:[e.jsx(d,{type:"number"}),e.jsx(l,{type:"category",dataKey:"name"}),e.jsx(h,{}),e.jsx(p,{}),e.jsx(a,{dataKey:"seriesA",name:"Series A",stackId:"2"}),e.jsx(a,{dataKey:"seriesB",name:"Series B",stackId:"2"}),e.jsx(a,{dataKey:"seriesC",name:"Series C",stackId:"2"})]})})});f.parameters={controls:{disable:!0}};const S=()=>e.jsx(c,{children:e.jsx(t,{width:"100%",height:"400px",children:e.jsxs(o,{data:m.slice(0,6),children:[e.jsx(Ae,{}),e.jsx(d,{dataKey:"name"}),e.jsx(l,{}),e.jsx(h,{}),e.jsx(p,{}),e.jsx(a,{dataKey:"seriesA",name:"Series A"}),e.jsx(a,{dataKey:"seriesB",name:"Series B"})]})})});S.parameters={controls:{disable:!0}};const K=()=>e.jsx(c,{children:e.jsx(t,{width:"100%",height:"400px",children:e.jsxs(o,{data:m.slice(0,6),children:[e.jsx(d,{dataKey:"name"}),e.jsx(l,{}),e.jsx(h,{}),e.jsx(p,{}),e.jsx(a,{dataKey:"seriesA",name:"Series A",color:"data.background.sequential.blue.500",stackId:1}),e.jsx(a,{dataKey:"seriesB",name:"Series B",color:"data.background.sequential.blue.200",stackId:1}),e.jsx(a,{dataKey:"seriesC",name:"Series C",color:"data.background.sequential.blue.100",stackId:1})]})})});K.parameters={controls:{disable:!0}};const Ne=[{category:"Premium Enterprise Solutions",quarterlyRevenue:125e3,operationalExpenses:85e3},{category:"Small Business Subscriptions",quarterlyRevenue:98e3,operationalExpenses:62e3},{category:"Individual Professional Plans",quarterlyRevenue:75e3,operationalExpenses:45e3},{category:"Government & Non-Profit Contracts",quarterlyRevenue:156e3,operationalExpenses:98e3},{category:"Educational Institution Licenses",quarterlyRevenue:67e3,operationalExpenses:38e3},{category:"Healthcare Sector Partnerships",quarterlyRevenue:189e3,operationalExpenses:112e3}],w=()=>e.jsx(c,{children:e.jsx(t,{width:"100%",height:"500px",children:e.jsxs(o,{data:Ne,colorTheme:"categorical",children:[e.jsx(d,{dataKey:"category"}),e.jsx(l,{label:"Amount in USD ($)"}),e.jsx(h,{}),e.jsx(p,{}),e.jsx(a,{dataKey:"quarterlyRevenue",name:"Quarterly Revenue from All Sources"})]})})});w.parameters={controls:{disable:!0}};k.storyName="Default Bar Chart";y.storyName="Tiny Bar Chart";B.storyName="Simple Bar Chart";j.storyName="Stacked Bar Chart";A.storyName="Vertical Bar Chart";f.storyName="Bar Chart With Default Color Theme";S.storyName="Bar Chart With Grid";K.storyName="Bar Chart with sequential colors";w.storyName="Bar Chart with Large Labels";var I,L,T;k.parameters={...k.parameters,docs:{...(I=k.parameters)==null?void 0:I.docs,source:{originalSource:`({
  dataKey = 'seriesA',
  name = 'Series A',
  ...props
}) => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartBarWrapper data={chartData.slice(0, 6)}>
          <ChartXAxis dataKey="name" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartBar dataKey={dataKey} name={name} {...props} />
        </ChartBarWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(T=(L=k.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var N,E,H;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100px" height="50px">
        <ChartBarWrapper data={chartData.slice(0, 6)}>
          <ChartBar dataKey="seriesA" color="data.background.categorical.blue.moderate" />
        </ChartBarWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(H=(E=y.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var P,X,Y;B.parameters={...B.parameters,docs:{...(P=B.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartBarWrapper data={chartData.slice(0, 6)}>
          <ChartXAxis dataKey="name" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartBar dataKey="seriesA" name="Series A" color="data.background.categorical.blue.faint" />
          <ChartBar dataKey="seriesB" name="Series B" color="data.background.categorical.purple.faint" />
        </ChartBarWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var M,q,z;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartBarWrapper data={chartData}>
          <ChartXAxis dataKey="name" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartBar dataKey="seriesA" name="Series A" stackId="stack-1" />
          <ChartBar dataKey="seriesB" name="Series B" stackId="stack-1" />
          <ChartBar dataKey="seriesC" name="Series C" stackId="stack-1" />
        </ChartBarWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(z=(q=j.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var _,G,O;W.parameters={...W.parameters,docs:{...(_=W.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartBarWrapper data={chartData.slice(0, 5)}>
          <ChartXAxis dataKey="name" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartBar dataKey="seriesA" name="Series A" />
          <ChartBar dataKey="seriesB" name="Series B" />
          <ChartBar dataKey="seriesC" name="Series C" />
        </ChartBarWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(O=(G=W.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var V,$,U;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartBarWrapper data={successRateRangeData}>
          {/* Bounds are the industry's 25th and 75th percentile for each day. */}
          <ChartReferenceBand lowerDataKey="industryLow" upperDataKey="industryHigh" name="Industry range" />
          <ChartXAxis dataKey="period" />
          <ChartYAxis label="Success rate (%)" />
          <ChartTooltip />
          <ChartLegend />
          <ChartBar dataKey="successRate" name="Success rate" barSize={24} />
        </ChartBarWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(U=($=v.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var F,J,Q,Z,ee;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`({
  numberOfBars,
  showReferenceBand
}) => {
  const methods = PAYMENT_METHODS.slice(0, numberOfBars);
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartBarWrapper data={groupedSuccessRateData}>
          <ChartXAxis dataKey="period" />
          <ChartYAxis label="Success rate (%)" />
          <ChartTooltip />
          <ChartLegend />
          {methods.map(method => <ChartBar key={method.key} dataKey={method.key} name={method.name} color={\`data.background.categorical.\${method.palette}.moderate\`} barSize={methods.length > 4 ? 10 : 16} {...showReferenceBand ? {
          rangeLowerDataKey: \`\${method.key}Low\`,
          rangeUpperDataKey: \`\${method.key}High\`,
          // Just 'Industry range', not '<method> industry range'. In the tooltip this row
          // sits directly under its own series name and colour swatch, so repeating the
          // method name reads as noise.
          rangeName: 'Industry range'
        } : {}} />)}
        </ChartBarWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(Q=(J=C.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:`Grouped bars where each bar declares its own min–max range. The bands are revealed on hover —
one at a time — so several ranges can coexist without overlapping into an unreadable wash.
Hover any bar to see its range, the other series fade, and the hovered period is shaded.`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ae,re,te;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box display="flex" flexDirection="column" gap="spacing.4">
        {/* Header Section */}
        <Box display="flex" flexDirection="column" gap="spacing.2" paddingX="spacing.5">
          {/* Title with dotted underline */}
          <Text size="medium" weight="medium" color="surface.text.gray.normal" textDecorationLine="underline">
            Checkout conversion funnel
          </Text>
          {/* Main metric row */}
          <Box display="flex" flexDirection="row" gap="spacing.3" alignItems="center">
            <Heading size="xlarge" weight="semibold">
              20%
            </Heading>
            <Badge color="negative" size="small" icon={ArrowUpIcon}>
              12%
            </Badge>
          </Box>
          {/* Subtitle */}
          <Text size="small" color="surface.text.gray.muted">
            Checkout conversion decreased from 22% to 20%
          </Text>
        </Box>

        {/* Metric cards row positioned above the chart */}
        <Box display="flex" flexDirection="row" width="100%">
          {funnelMetricsData.map((item, index) => <MetricCard key={item.title} title={item.title} percentage={item.percentage} value={item.value} change={item.change} showDivider={index < funnelMetricsData.length - 1} />)}
        </Box>

        {/* Bar Chart */}
        <Box width="100%" height="320px">
          <ChartBarWrapper data={funnelChartData}>
            <ChartXAxis dataKey="name" hide />
            <ChartYAxis hide />
            <ChartTooltip />
            <ChartLegend />
            <ChartBar dataKey="current" name="Oct 28, 2025" color="data.background.sequential.blue.400" label={{
            position: 'top',
            content: (props: ChartLabelContentProps) => {
              const {
                value
              } = props;
              const numX = Number(props.x) || 0;
              const numY = Number(props.y) || 0;
              const numWidth = Number(props.width) || 0;
              const numValue = typeof value === 'number' ? value : 0;
              return <text x={numX + numWidth / 2} y={numY - 8} fill="#768EA7" fontSize={12} textAnchor="middle" style={{
                pointerEvents: 'none'
              }}>
                      {numValue >= 1000 ? \`\${(numValue / 1000).toFixed(1)}K\` : numValue}
                    </text>;
            }
          }} />
            <ChartBar dataKey="previous" name="Oct 25, 2025" color="data.background.sequential.blue.100" label={{
            position: 'top',
            content: (props: ChartLabelContentProps) => {
              const {
                value
              } = props;
              const numX = Number(props.x) || 0;
              const numY = Number(props.y) || 0;
              const numWidth = Number(props.width) || 0;
              const numValue = typeof value === 'number' ? value : 0;
              return <text x={numX + numWidth / 2} y={numY - 8} fill="#768EA7" fontSize={12} textAnchor="middle" style={{
                pointerEvents: 'none'
              }}>
                      {numValue >= 1000 ? \`\${(numValue / 1000).toFixed(1)}K\` : numValue}
                    </text>;
            }
          }} />
          </ChartBarWrapper>
        </Box>
      </Box>
    </ChartsWrapper>;
}`,...(te=(re=b.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var se,ne,ie;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="500px">
        <ChartBarWrapper data={chartData.slice(0, 5)} layout="vertical">
          <ChartXAxis type="number" />
          <ChartYAxis type="category" dataKey="name" />
          <ChartTooltip />
          <ChartLegend />
          <ChartBar dataKey="seriesA" name="Series A" stackId="2" />
          <ChartBar dataKey="seriesB" name="Series B" stackId="2" />
          <ChartBar dataKey="seriesC" name="Series C" stackId="2" />
        </ChartBarWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(ie=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,ce,de;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="500px">
        <ChartBarWrapper data={chartData.slice(0, 5)} layout="vertical" colorTheme="categorical">
          <ChartXAxis type="number" />
          <ChartYAxis type="category" dataKey="name" />
          <ChartTooltip />
          <ChartLegend />
          <ChartBar dataKey="seriesA" name="Series A" stackId="2" />
          <ChartBar dataKey="seriesB" name="Series B" stackId="2" />
          <ChartBar dataKey="seriesC" name="Series C" stackId="2" />
        </ChartBarWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(de=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var le,he,pe;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartBarWrapper data={chartData.slice(0, 6)}>
          <ChartCartesianGrid />
          <ChartXAxis dataKey="name" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartBar dataKey="seriesA" name="Series A" />
          <ChartBar dataKey="seriesB" name="Series B" />
        </ChartBarWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(pe=(he=S.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var ue,me,xe;K.parameters={...K.parameters,docs:{...(ue=K.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartBarWrapper data={chartData.slice(0, 6)}>
          <ChartXAxis dataKey="name" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartBar dataKey="seriesA" name="Series A" color="data.background.sequential.blue.500" stackId={1} />
          <ChartBar dataKey="seriesB" name="Series B" color="data.background.sequential.blue.200" stackId={1} />
          <ChartBar dataKey="seriesC" name="Series C" color="data.background.sequential.blue.100" stackId={1} />
        </ChartBarWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(xe=(me=K.parameters)==null?void 0:me.docs)==null?void 0:xe.source}}};var Ce,ge,ye;w.parameters={...w.parameters,docs:{...(Ce=w.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="500px">
        <ChartBarWrapper data={largeLabelsData} colorTheme="categorical">
          <ChartXAxis dataKey="category" />
          <ChartYAxis label="Amount in USD ($)" />
          <ChartTooltip />
          <ChartLegend />
          <ChartBar dataKey="quarterlyRevenue" name="Quarterly Revenue from All Sources" />
        </ChartBarWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(ye=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};const _e=["DefaultChart","TinyBarChart","SimpleBarChart","StackedBarChart","GroupedBarChart","BarChartWithReferenceBand","GroupedBarChartWithMultipleReferenceBands","GroupedBarChartWithMetrics","VerticalBarChart","BarChartWithDefaultColorTheme","BarChartWithGrid","BarChartWithSequentialColors","BarChartWithLargeLabels"];export{f as BarChartWithDefaultColorTheme,S as BarChartWithGrid,w as BarChartWithLargeLabels,v as BarChartWithReferenceBand,K as BarChartWithSequentialColors,k as DefaultChart,W as GroupedBarChart,b as GroupedBarChartWithMetrics,C as GroupedBarChartWithMultipleReferenceBands,B as SimpleBarChart,j as StackedBarChart,y as TinyBarChart,A as VerticalBarChart,_e as __namedExportsOrder,ze as default};
