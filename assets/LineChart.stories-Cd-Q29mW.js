import{iK as a,ad as U,j as e,B as s,iL as o,iy as l,iz as c,iA as d,iB as h,H as V,iM as X,iC as _,aM as ua,aN as y,iG as ya,iD as H,x as Ca}from"./iframe-C1qQ09LF.js";import{S as ga}from"./Sandbox.web-B2xP21Qp.js";import{S as La}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./baseCode-DnWYDQ6N.js";import"./Sandbox.web-C7diOxlu.js";import"./componentStatusData-8pChZ-5h.js";const Aa=()=>e.jsxs(La,{componentName:"LineChart",componentDescription:"A Line Chart component built on top of Recharts with Loom UI design system styling.",figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=93596-46375&m=dev",apiDecisionLink:"https://github.com/razorpay/blade/blob/5920fbd32c70793454f8c8c6ff544b2a7413afb5/packages/blade/src/components/Charts/_decisions/decisions.md",children:[e.jsx(V,{size:"large",children:"Usage"}),e.jsx(ga,{showConsole:!0,children:`
          import {
           ChartLine,
           ChartLineWrapper,
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
             { name: 'Jan', sales: 4000 },
             { name: 'Feb', sales: 3000 },
             { name: 'Mar', sales: 2000 },
           ];
         
           return (
             <Box width="400px" height="400px">
               <ChartLineWrapper data={data}>
                 <ChartCartesianGrid />
                 <ChartXAxis dataKey="name" />
                 <ChartYAxis />
                 <ChartTooltip />
                 <ChartLegend />
                 <ChartLine dataKey="sales" name="Sales" />
               </ChartLineWrapper>
             </Box>
           );
         }
         
         export default App;

      `})]}),u={CHAT_LINE_PROPS:"ChartLine Props"},Ua={title:"Components/Charts/LineChart",component:a,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["step","stepAfter","stepBefore","linear","monotone"],table:{category:u.CHAT_LINE_PROPS}},connectNulls:{control:{type:"boolean"},table:{category:u.CHAT_LINE_PROPS}},showLegend:{control:{type:"boolean"},table:{category:u.CHAT_LINE_PROPS}},strokeStyle:{control:{type:"select"},options:["dotted","dashed","solid"],table:{category:u.CHAT_LINE_PROPS}},dataKey:{control:{type:"text"},table:{category:u.CHAT_LINE_PROPS}},name:{control:{type:"text"},table:{category:u.CHAT_LINE_PROPS}},color:{control:{type:"text"},table:{category:u.CHAT_LINE_PROPS}},dot:{control:{disable:!0},table:{category:u.CHAT_LINE_PROPS}},activeDot:{control:{disable:!0},table:{category:u.CHAT_LINE_PROPS}},_index:{table:{disable:!0}},_colorTheme:{table:{disable:!0}}},parameters:{docs:{page:Aa},layout:"fullscreen"}},E=[{month:"Jan",teamA:4e3,teamB:2400},{month:"Feb",teamA:3e3,teamB:1398},{month:"Mar",teamA:2e3,teamB:9800},{month:"Apr",teamA:2780,teamB:3908},{month:"May",teamA:1890,teamB:4800},{month:"Jun",teamA:2390,teamB:3800}],ba=[{month:"Jan",activeUsers:1180,min:800,max:1720},{month:"Feb",activeUsers:1120,min:820,max:1780},{month:"Mar",activeUsers:1360,min:900,max:1880},{month:"Apr",activeUsers:1300,min:900,max:1840},{month:"May",activeUsers:1320,min:940,max:1900},{month:"Jun",activeUsers:1420,min:980,max:1960},{month:"Jul",activeUsers:1540,min:1020,max:2020},{month:"Aug",activeUsers:1500,min:1040,max:2040},{month:"Sep",activeUsers:1580,min:1080,max:2080},{month:"Oct",activeUsers:1660,min:1100,max:2140},{month:"Nov",activeUsers:1720,min:1140,max:2220},{month:"Dec",activeUsers:1600,min:1120,max:2180},{month:"Jan ’25",activeUsers:1780,min:1160,max:2260},{month:"Feb ’25",activeUsers:1840,min:1180,max:2160},{month:"Mar ’25",activeUsers:1720,min:1160,max:2120},{month:"Apr ’25",activeUsers:1700,min:1140,max:2200},{month:"May ’25",activeUsers:1860,min:1180,max:2260},{month:"Jun ’25",activeUsers:1900,min:1080,max:2280}],ja=[{date:"Jan",historical:4e3,forecast:null},{date:"Feb",historical:3e3,forecast:null},{date:"Mar",historical:2e3,forecast:null},{date:"Apr",historical:2500,forecast:2500},{date:"May",historical:null,forecast:4e3},{date:"Jun",historical:null,forecast:2390}],F=[{month:"Jan",sales:4e3},{month:"Feb",sales:3e3},{month:"Mar",sales:5e3},{month:"Apr",sales:null},{month:"May",sales:1890},{month:"Jun",sales:2390}],Ka=[{month:"Jan",value:100},{month:"Feb",value:150},{month:"Mar",value:120},{month:"Apr",value:200},{month:"May",value:180},{month:"Jun",value:250}],Sa=[{period:"Jan",revenue:4500,expenses:2800},{period:"Feb",revenue:5200,expenses:3100},{period:"Mar",revenue:4800,expenses:2900},{period:"Apr",revenue:6100,expenses:3500},{period:"May",revenue:5800,expenses:3200},{period:"Jun",revenue:6500,expenses:3800}],va=[{period:"2019",revenue:45e3,expenses:28e3},{period:"2020",revenue:52e3,expenses:31e3},{period:"2021",revenue:61e3,expenses:35e3},{period:"2022",revenue:72e3,expenses:42e3},{period:"2023",revenue:85e3,expenses:48e3},{period:"2024",revenue:96e3,expenses:52e3}],fa=[{period:"0:00",revenue:120,expenses:85},{period:"0:15",revenue:135,expenses:92},{period:"0:30",revenue:148,expenses:98},{period:"0:45",revenue:162,expenses:105},{period:"1:00",revenue:178,expenses:112},{period:"1:15",revenue:195,expenses:125}],q=[{month:"Jan",northAmerica:4200,southAmerica:2800,europe:3500,asia:5200,africa:1800,oceania:2100,middleEast:2400,centralAsia:1900,eastAsia:4800,southEastAsia:3200,caribbean:1500,scandinavia:2600},{month:"Feb",northAmerica:4500,southAmerica:3100,europe:3800,asia:5500,africa:2100,oceania:2300,middleEast:2700,centralAsia:2200,eastAsia:5100,southEastAsia:3500,caribbean:1700,scandinavia:2900},{month:"Mar",northAmerica:4800,southAmerica:3400,europe:4100,asia:5800,africa:2400,oceania:2500,middleEast:3e3,centralAsia:2500,eastAsia:5400,southEastAsia:3800,caribbean:1900,scandinavia:3200},{month:"Apr",northAmerica:5200,southAmerica:3700,europe:4500,asia:6200,africa:2700,oceania:2800,middleEast:3300,centralAsia:2800,eastAsia:5800,southEastAsia:4100,caribbean:2200,scandinavia:3500},{month:"May",northAmerica:5500,southAmerica:4e3,europe:4800,asia:6600,africa:3e3,oceania:3100,middleEast:3600,centralAsia:3100,eastAsia:6200,southEastAsia:4400,caribbean:2500,scandinavia:3800},{month:"Jun",northAmerica:5900,southAmerica:4300,europe:5200,asia:7e3,africa:3300,oceania:3400,middleEast:3900,centralAsia:3400,eastAsia:6600,southEastAsia:4700,caribbean:2800,scandinavia:4100}],m=({children:r,fullWidth:t=!1})=>e.jsx(Ca,{height:"100%",backgroundColor:"surface.background.gray.intense",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",paddingY:"spacing.3",borderRadius:"medium",style:t?{width:"100%",alignSelf:"center"}:{width:"70%",alignSelf:"center",maxWidth:"70%"},children:r}),M=({dataKey:r="teamA",name:t="Team A",...n})=>e.jsx(m,{children:e.jsx(s,{width:"100%",height:"400px",children:e.jsxs(o,{data:E,children:[e.jsx(l,{dataKey:"month"}),e.jsx(c,{}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:r,name:t,strokeStyle:"solid",color:"data.background.categorical.blue.moderate",...n}),e.jsx(H,{y:1500,label:"Avg: 1200"})]})})}),g=()=>e.jsx(m,{children:e.jsx(s,{width:"100%",height:"400px",children:e.jsxs(o,{data:ba,children:[e.jsx(ya,{lowerDataKey:"min",upperDataKey:"max",name:"Reference band"}),e.jsx(l,{dataKey:"month"}),e.jsx(c,{label:"Active users"}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:"activeUsers",name:"Active users",strokeStyle:"solid",color:"data.background.categorical.gray.intense"}),e.jsx(H,{y:1200,label:"Avg: 1,200"})]})})});g.parameters={controls:{disable:!0}};const xa=[{key:"payments",name:"Payments",color:"data.background.categorical.blue.moderate"},{key:"refunds",name:"Refunds",color:"data.background.categorical.green.moderate"},{key:"payouts",name:"Payouts",color:"data.background.categorical.gray.moderate"},{key:"settlements",name:"Settlements",color:"data.background.categorical.orange.moderate"},{key:"disputes",name:"Disputes",color:"data.background.categorical.purple.moderate"}],Wa=["Jan","Feb","Mar","Apr","May","Jun","Jul"],Da={payments:[62,58,66,70,68,74,78],refunds:[50,54,52,58,60,62,64],payouts:[40,44,46,48,50,52,52],settlements:[28,30,33,31,34,36,33],disputes:[44,46,45,48,47,50,47]},ka=Wa.map((r,t)=>{const n={month:r};return xa.forEach(i=>{const p=Da[i.key][t];n[i.key]=p,n[`${i.key}Min`]=Math.max(0,p-12),n[`${i.key}Max`]=p+12}),n}),C=({numberOfLines:r,showReferenceBand:t})=>{const n=xa.slice(0,r);return e.jsx(m,{children:e.jsx(s,{width:"100%",height:"400px",children:e.jsxs(o,{data:ka,children:[e.jsx(l,{dataKey:"month"}),e.jsx(c,{label:"Success rate (%)"}),e.jsx(d,{}),e.jsx(h,{}),n.map(i=>e.jsx(a,{dataKey:i.key,name:i.name,color:i.color,...t?{rangeLowerDataKey:`${i.key}Min`,rangeUpperDataKey:`${i.key}Max`,rangeName:`${i.name} industry range`}:{}},i.key))]})})})};C.args={numberOfLines:3,showReferenceBand:!0};C.argTypes={numberOfLines:{control:{type:"range",min:1,max:5,step:1},description:"Number of trend lines to plot (1–5)."},showReferenceBand:{control:{type:"boolean"},description:"Show each line’s industry reference band."}};const O=({dataKey:r="teamA",name:t="Team A",...n})=>e.jsx(m,{children:e.jsx(s,{width:"100%",height:"400px",children:e.jsxs(o,{data:E,children:[e.jsx(l,{dataKey:"month"}),e.jsx(c,{}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:r,name:t,strokeStyle:"solid",color:"data.background.categorical.blue.moderate",...n}),e.jsx(H,{x:"Apr",label:"Avg: 1200"})]})})}),R=({dataKey:r="teamA",name:t="Team A",...n})=>e.jsx(m,{children:e.jsx(s,{width:"200px",height:"100px",children:e.jsx(o,{data:E,children:e.jsx(a,{dataKey:r,name:t,strokeStyle:"solid",color:"data.background.categorical.blue.strong",dot:!1,activeDot:!1,...n})})})}),L=()=>{const[r,t]=U.useState(["historical","forecast"]),n=({dataKey:i,selectedKeysArray:p})=>{i==="historical"&&p.includes("forecast")?t(p.filter(x=>x!=="forecast")):t([...p,"forecast"])};return e.jsx(m,{children:e.jsx(s,{width:"100%",height:"400px",children:e.jsxs(o,{data:ja,children:[e.jsx(l,{dataKey:"date"}),e.jsx(c,{}),e.jsx(d,{}),e.jsx(h,{selectedDataKeys:r,onSelectedDataKeysChange:n}),e.jsx(a,{dataKey:"historical",name:"Historical Data",connectNulls:!0,color:"data.background.categorical.blue.moderate"}),e.jsx(a,{dataKey:"forecast",name:"Forecasted Data",strokeStyle:"dashed",connectNulls:!0,showLegend:!1,color:"data.background.categorical.blue.moderate"})]})})})};L.parameters={controls:{disable:!0}};const A=()=>e.jsx(m,{children:e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.8",width:"100%",children:[e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.3",width:"100%",children:[e.jsx(V,{size:"small",children:"Hard gap for outages (connectNulls={false}, default)"}),e.jsx(s,{width:"100%",height:"220px",children:e.jsxs(o,{data:F,children:[e.jsx(l,{dataKey:"month"}),e.jsx(c,{}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:"sales",name:"Sales (Gap on no-data)",color:"data.background.categorical.gray.strong"})]})})]}),e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.3",width:"100%",children:[e.jsx(V,{size:"small",children:'Solid bridge across nulls (connectNullsStyle="solid")'}),e.jsx(s,{width:"100%",height:"220px",children:e.jsxs(o,{data:F,children:[e.jsx(l,{dataKey:"month"}),e.jsx(c,{}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:"sales",name:"Sales (Solid across no-data)",connectNulls:!0,connectNullsStyle:"solid",color:"data.background.categorical.blue.moderate"})]})})]}),e.jsxs(s,{display:"flex",flexDirection:"column",gap:"spacing.3",width:"100%",children:[e.jsx(V,{size:"small",children:'Dashed bridge across nulls (connectNullsStyle="dashed")'}),e.jsx(s,{width:"100%",height:"220px",children:e.jsxs(o,{data:F,children:[e.jsx(l,{dataKey:"month"}),e.jsx(c,{}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:"sales",name:"Sales (Dashed across no-data)",connectNulls:!0,connectNullsStyle:"dashed",color:"data.background.categorical.green.moderate"})]})})]})]})});A.parameters={controls:{disable:!0},layout:"fullscreen"};const b=()=>e.jsx(m,{children:e.jsx(s,{width:"100%",height:"400px",children:e.jsxs(o,{data:Ka,children:[e.jsx(l,{dataKey:"month"}),e.jsx(c,{}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:"value",name:"Stepped Line",type:"step",color:"data.background.categorical.blue.moderate"})]})})});b.parameters={controls:{disable:!0}};const j=()=>e.jsx(m,{children:e.jsx(s,{width:"100%",height:"400px",children:e.jsxs(o,{data:E,colorTheme:"categorical",children:[e.jsx(l,{dataKey:"month"}),e.jsx(c,{}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:"teamA",name:"value 2"}),e.jsx(a,{dataKey:"teamB",name:"Value 1"})]})})});j.parameters={controls:{disable:!0}};const P=({dataKey:r="teamA",name:t="Team A",...n})=>e.jsx(m,{children:e.jsx(s,{width:"100%",height:"400px",children:e.jsxs(o,{data:E,children:[e.jsx(l,{dataKey:"month",label:"Month"}),e.jsx(c,{label:"Sales"}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:r,name:t,color:"data.background.categorical.green.moderate",...n})]})})}),K=()=>{const[r,t]=U.useState("month"),i={month:{data:Sa,label:"Month"},year:{data:va,label:"Year"},minute:{data:fa,label:"Time (Minutes)"}}[r];return e.jsx(m,{children:e.jsxs(s,{display:"flex",flexDirection:"column",width:"100%",height:"100%",children:[e.jsx(s,{marginBottom:"spacing.5",children:e.jsxs(ua,{accessibilityLabel:"Select time period",selectionType:"single",value:r,onChange:({values:p})=>t(p[0]),children:[e.jsx(y,{value:"month",children:"Monthly"}),e.jsx(y,{value:"year",children:"Yearly"}),e.jsx(y,{value:"minute",children:"Per Minute"})]})}),e.jsx(s,{width:"100%",height:"400px",children:e.jsxs(o,{data:i.data,colorTheme:"categorical",children:[e.jsx(l,{dataKey:"period",label:i.label}),e.jsx(c,{label:"Amount ($)"}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:"revenue",name:"Revenue",color:"data.background.categorical.blue.strong"}),e.jsx(a,{dataKey:"expenses",name:"Expenses",color:"data.background.categorical.red.strong"})]})})]})})};K.parameters={controls:{disable:!0}};const S=()=>e.jsx(m,{children:e.jsx(s,{width:"100%",height:"500px",children:e.jsxs(o,{data:q,colorTheme:"categorical",children:[e.jsx(l,{dataKey:"month",label:"Month"}),e.jsx(c,{label:"Sales ($)"}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:"northAmerica",name:"North America"}),e.jsx(a,{dataKey:"southAmerica",name:"South America"}),e.jsx(a,{dataKey:"europe",name:"Europe"}),e.jsx(a,{dataKey:"asia",name:"Asia"}),e.jsx(a,{dataKey:"africa",name:"Africa"}),e.jsx(a,{dataKey:"oceania",name:"Oceania"}),e.jsx(a,{dataKey:"middleEast",name:"Middle East"}),e.jsx(a,{dataKey:"centralAsia",name:"Central Asia"}),e.jsx(a,{dataKey:"eastAsia",name:"East Asia"}),e.jsx(a,{dataKey:"southEastAsia",name:"South East Asia"}),e.jsx(a,{dataKey:"caribbean",name:"Caribbean"}),e.jsx(a,{dataKey:"scandinavia",name:"Scandinavia"})]})})});S.parameters={controls:{disable:!0}};const $=()=>e.jsx(m,{children:e.jsx(s,{width:"100%",height:"500px",children:e.jsxs(o,{data:q,colorTheme:"categorical",children:[e.jsx(l,{dataKey:"month",label:"Month"}),e.jsx(c,{label:"Sales ($)"}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:"northAmerica",name:"North America"}),e.jsx(a,{dataKey:"southAmerica",name:"South America"}),e.jsx(a,{dataKey:"europe",name:"Europe"}),e.jsx(a,{dataKey:"asia",name:"Asia"}),e.jsx(_,{})]})})});$.parameters={controls:{disable:!0}};const Ta=[{time:"10:00",day:"Mon",revenue:4500,orders:120},{time:"11:00",day:"Mon",revenue:5200,orders:145},{time:"12:00",day:"Mon",revenue:6100,orders:180},{time:"13:00",day:"Tue",revenue:4800,orders:135},{time:"14:00",day:"Tue",revenue:5500,orders:160},{time:"15:00",day:"Tue",revenue:5900,orders:170}],v=()=>e.jsx(m,{children:e.jsx(s,{width:"100%",height:"400px",children:e.jsxs(o,{data:Ta,colorTheme:"categorical",children:[e.jsx(l,{dataKey:"time",secondaryDataKey:"day",label:"Time / Day"}),e.jsx(c,{label:"Revenue ($)"}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:"revenue",name:"Revenue"}),e.jsx(a,{dataKey:"orders",name:"Orders"})]})})});v.parameters={controls:{disable:!0}};const Ba=[{category:"Premium Enterprise Solutions",quarterlyRevenue:1250,operationalExpenses:8500},{category:"Small Business Subscriptions",quarterlyRevenue:9800,operationalExpenses:6200},{category:"Individual Professional Plans",quarterlyRevenue:7500,operationalExpenses:4500},{category:"Government & Non-Profit Contracts",quarterlyRevenue:1560,operationalExpenses:9800},{category:"Educational Institution Licenses",quarterlyRevenue:6700,operationalExpenses:3800},{category:"Healthcare Sector Partnerships",quarterlyRevenue:1890,operationalExpenses:1120}],f=()=>e.jsx(m,{fullWidth:!0,children:e.jsx(s,{width:"100%",height:"500px",children:e.jsxs(o,{data:Ba,colorTheme:"categorical",children:[e.jsx(l,{dataKey:"category"}),e.jsx(c,{label:"Amount in USD ($)"}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:"quarterlyRevenue",name:"All Sources"}),e.jsx(a,{dataKey:"operationalExpenses",name:"Operational Expenses "})]})})});f.parameters={controls:{disable:!0}};const wa=[{category:"Premium Enterprise Solutions Package",quarter:"Q1 2024",revenue:1250,orders:3200},{category:"Small Business Growth Subscriptions",quarter:"Q2 2024",revenue:9800,orders:2800},{category:"Individual Professional Development Plans",quarter:"Q3 2024",revenue:7500,orders:1900},{category:"Government & Non-Profit Organization Contracts",quarter:"Q4 2024",revenue:1560,orders:4100},{category:"Educational Institution Site Licenses",quarter:"Q1 2025",revenue:6700,orders:1500}],W=()=>e.jsx(m,{fullWidth:!0,children:e.jsx(s,{width:"100%",height:"500px",children:e.jsxs(o,{data:wa,colorTheme:"categorical",children:[e.jsx(l,{dataKey:"category",secondaryDataKey:"quarter"}),e.jsx(c,{label:"Amount ($)"}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:"revenue",name:"Revenue"}),e.jsx(a,{dataKey:"orders",name:"Orders"})]})})});W.parameters={controls:{disable:!0}};const D=()=>{const r=X();return e.jsx(m,{children:e.jsx(s,{width:"100%",height:"500px",children:e.jsxs(o,{data:q,colorTheme:"categorical",children:[e.jsx(l,{dataKey:"month",label:"Month"}),e.jsx(c,{label:"Sales ($)"}),e.jsx(d,{cursor:{stroke:r.colors.surface.border.gray.subtle,strokeWidth:1}}),e.jsx(h,{onSelectedDataKeysChange:({dataKey:t,selectedKeysArray:n})=>{console.log(`Clicked: ${t}, selectedKeysArray: ${n}`)}}),e.jsx(a,{dataKey:"northAmerica",name:"North America"}),e.jsx(a,{dataKey:"southAmerica",name:"South America"}),e.jsx(a,{dataKey:"europe",name:"Europe"}),e.jsx(a,{dataKey:"asia",name:"Asia"}),e.jsx(_,{})]})})})},k=()=>{const r=X();return e.jsx(m,{children:e.jsx(s,{width:"100%",height:"500px",children:e.jsxs(o,{data:q,colorTheme:"categorical",children:[e.jsx(l,{dataKey:"month",label:"Month"}),e.jsx(c,{label:"Sales ($)"}),e.jsx(d,{cursor:{stroke:r.colors.surface.border.gray.subtle,strokeWidth:1}}),e.jsx(h,{defaultSelectedDataKeys:["northAmerica","europe"],onSelectedDataKeysChange:({dataKey:t,selectedKeysArray:n})=>{const i=n.includes(t);console.log(`Selection changed: ${t}, isSelected: ${i}`)}}),e.jsx(a,{dataKey:"northAmerica",name:"North America"}),e.jsx(a,{dataKey:"southAmerica",name:"South America"}),e.jsx(a,{dataKey:"europe",name:"Europe"}),e.jsx(a,{dataKey:"asia",name:"Asia"}),e.jsx(_,{})]})})})},T=()=>{const r=X(),[t,n]=U.useState(["northAmerica","asia"]),i=({selectedKeysArray:p})=>{n(p)};return e.jsx(m,{children:e.jsxs(s,{display:"flex",flexDirection:"column",width:"100%",height:"100%",children:[e.jsx(s,{marginBottom:"spacing.5",children:e.jsxs(ua,{accessibilityLabel:"Select regions",selectionType:"multiple",value:t,onChange:({values:p})=>n(p),children:[e.jsx(y,{value:"northAmerica",children:"North America"}),e.jsx(y,{value:"southAmerica",children:"South America"}),e.jsx(y,{value:"europe",children:"Europe"}),e.jsx(y,{value:"asia",children:"Asia"})]})}),e.jsx(s,{width:"100%",height:"400px",children:e.jsxs(o,{data:q,colorTheme:"categorical",children:[e.jsx(l,{dataKey:"month",label:"Month"}),e.jsx(c,{label:"Sales ($)"}),e.jsx(d,{cursor:{stroke:r.colors.surface.border.gray.subtle,strokeWidth:1}}),e.jsx(h,{selectedDataKeys:t,onSelectedDataKeysChange:i}),e.jsx(a,{dataKey:"northAmerica",name:"North America"}),e.jsx(a,{dataKey:"southAmerica",name:"South America"}),e.jsx(a,{dataKey:"europe",name:"Europe"}),e.jsx(a,{dataKey:"asia",name:"Asia"}),e.jsx(_,{})]})})]})})},B=()=>{const r=X(),[t,n]=U.useState(null),i=[{timestamp:1767292200,date:"Jan 2",AOV:2172},{timestamp:1767378600,date:"Jan 3",AOV:2872},{timestamp:1767465e3,date:"Jan 4",AOV:2611},{timestamp:1767551400,date:"Jan 5",AOV:3742},{timestamp:1767637800,date:"Jan 6",AOV:3926},{timestamp:1767724200,date:"Jan 7",AOV:2232},{timestamp:1767810600,date:"Jan 8",AOV:3231},{timestamp:1767897e3,date:"Jan 9",AOV:3645},{timestamp:1767983400,date:"Jan 10",AOV:2941},{timestamp:1768069800,date:"Jan 11",AOV:2071},{timestamp:1768156200,date:"Jan 12",AOV:3089},{timestamp:1768242600,date:"Jan 13",AOV:3267}];return e.jsx(m,{children:e.jsxs(s,{display:"flex",flexDirection:"column",width:"100%",height:"100%",children:[e.jsx(s,{marginBottom:"spacing.5",children:e.jsxs(V,{size:"small",children:["Last clicked: ",t?`${t}`:"None"]})}),e.jsx(s,{width:"100%",height:"400px",children:e.jsxs(o,{data:i,colorTheme:"categorical",children:[e.jsx(l,{dataKey:"date",interval:2}),e.jsx(c,{}),e.jsx(d,{cursor:{stroke:r.colors.surface.border.gray.subtle,strokeWidth:1}}),e.jsx(h,{onSelectedDataKeysChange:({dataKey:p,selectedKeysArray:x})=>{const I=x.includes(p);console.log({dataKey:p,selectedKeysArray:x,isSelected:I}),n(`${p} (${I?"selected":"deselected"})`)}}),e.jsx(a,{dataKey:"AOV",name:"AOV"}),e.jsx(_,{})]})})]})})};D.parameters={controls:{disable:!0}};k.parameters={controls:{disable:!0}};T.parameters={controls:{disable:!0}};B.parameters={controls:{disable:!0}};const Na=[{timestamp:17040672e5,sales:4500},{timestamp:17041536e5,sales:5200},{timestamp:170424e7,sales:4800},{timestamp:17043264e5,sales:6100},{timestamp:17044128e5,sales:5800},{timestamp:17044992e5,sales:6500}],J=()=>{const r=t=>new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric"});return e.jsx(m,{children:e.jsx(s,{width:"100%",height:"400px",children:e.jsxs(o,{data:Na,colorTheme:"categorical",children:[e.jsx(l,{dataKey:"timestamp",label:"Date",tickFormatter:t=>r(Number(t))}),e.jsx(c,{label:"Sales ($)"}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:"sales",name:"Daily Sales"})]})})})};J.parameters={controls:{disable:!0}};const Ea=[{month:"Jan",revenue:125e3},{month:"Feb",revenue:98500},{month:"Mar",revenue:145200},{month:"Apr",revenue:178900},{month:"May",revenue:156700},{month:"Jun",revenue:192400}],Y=()=>{const r=t=>t>=1e3?`$${(t/1e3).toFixed(0)}K`:`$${t}`;return e.jsx(m,{children:e.jsx(s,{width:"100%",height:"400px",children:e.jsxs(o,{data:Ea,colorTheme:"categorical",children:[e.jsx(l,{dataKey:"month"}),e.jsx(c,{label:"Revenue",tickFormatter:r}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:"revenue",name:"Monthly Revenue"})]})})})};Y.parameters={controls:{disable:!0}};const Ma=[{date:"Oct 01",sales:4e3},{date:"Oct 02",sales:3e3},{date:"Oct 03",sales:2e3},{date:"Oct 04",sales:2780},{date:"Oct 05",sales:1890},{date:"Oct 06",sales:2390},{date:"Oct 07",sales:3490},{date:"Oct 08",sales:4e3},{date:"Oct 09",sales:3e3},{date:"Oct 10",sales:2e3},{date:"Oct 11",sales:2780},{date:"Oct 12",sales:1890},{date:"Oct 13",sales:2390},{date:"Oct 14",sales:3490},{date:"Oct 15",sales:4100},{date:"Oct 16",sales:3800}],w=()=>{const r=X(),t=3200,n="Oct 10",i=4500,p=U.useMemo(()=>Ma.map(x=>({...x,benchmarkLine:t,specialEvent:x.date===n?i:null})),[]);return e.jsx(m,{children:e.jsx(s,{width:"100%",height:"450px",children:e.jsxs(o,{data:p,children:[e.jsx(l,{dataKey:"date"}),e.jsx(c,{}),e.jsx(d,{cursor:{stroke:r.colors.surface.border.gray.subtle,strokeWidth:1}}),e.jsx(h,{}),e.jsx(a,{dataKey:"sales",name:"Daily Sales",type:"monotone",color:"data.background.categorical.blue.moderate"}),e.jsx(a,{dataKey:"specialEvent",name:"Special Event",connectNulls:!1,color:"data.background.categorical.red.intense",dot:{r:6,fill:r.colors.data.background.categorical.red.intense,stroke:r.colors.data.background.categorical.red.intense,strokeWidth:2},activeDot:{r:8,fill:r.colors.data.background.categorical.red.intense,stroke:r.colors.data.background.categorical.red.intense,strokeWidth:3}})]})})})};w.parameters={controls:{disable:!0}};const N=()=>e.jsx(m,{children:e.jsx(s,{width:"100%",height:"400px",children:e.jsxs(o,{data:E,children:[e.jsx(l,{dataKey:"month"}),e.jsx(c,{}),e.jsx(d,{}),e.jsx(h,{}),e.jsx(a,{dataKey:"teamA",name:"Team A",color:"data.background.sequential.blue.500"}),e.jsx(a,{dataKey:"teamB",name:"Team B",color:"data.background.sequential.blue.200"})]})})});N.parameters={controls:{disable:!0}};M.storyName="Simple Line Chart";g.storyName="Line Chart with Reference Band";C.storyName="Line Chart with Multiple Reference Bands";O.storyName="Simple Line Chart with vertical line";R.storyName="Tiny Line Chart";L.storyName="Forecast Line Chart";A.storyName="Line Chart (Connect Nulls)";b.storyName="Stepped Line Chart";j.storyName="Line Chart with Color Theme";P.storyName="Line Chart with X and Y axis labels";K.storyName="Line Chart with Switchable Time Periods";S.storyName="Line Chart with many lines";v.storyName="Line Chart with Multi-line X-Axis Labels";f.storyName="Line Chart with Large Labels";W.storyName="Line Chart with Large Labels and Secondary Labels";D.storyName="Line Chart with custom cursor";k.storyName="Legend with Default Selected Keys (Uncontrolled)";T.storyName="Legend with Controlled Selection";B.storyName="Legend with Selection Change Callback";w.storyName="Line Chart with Benchmark Line and Single Point";N.storyName="Line Chart with Sequential Colors";var G,z,Q;M.parameters={...M.parameters,docs:{...(G=M.parameters)==null?void 0:G.docs,source:{originalSource:`({
  dataKey = 'teamA',
  name = 'Team A',
  ...args
}) => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartLineWrapper data={chartData}>
          <ChartXAxis dataKey="month" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartLine dataKey={dataKey} name={name} strokeStyle="solid" color="data.background.categorical.blue.moderate" {...args} />
          <ChartReferenceLine y={1500} label="Avg: 1200" />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(Q=(z=M.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var Z,ee,ae;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartLineWrapper data={activeUsersRangeData}>
          <ChartReferenceBand lowerDataKey="min" upperDataKey="max" name="Reference band" />
          <ChartXAxis dataKey="month" />
          <ChartYAxis label="Active users" />
          <ChartTooltip />
          <ChartLegend />
          <ChartLine dataKey="activeUsers" name="Active users" strokeStyle="solid" color="data.background.categorical.gray.intense" />
          <ChartReferenceLine y={1200} label="Avg: 1,200" />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,se;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`({
  numberOfLines,
  showReferenceBand
}) => {
  const metrics = INDUSTRY_METRICS.slice(0, numberOfLines);
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartLineWrapper data={industryComparisonData}>
          <ChartXAxis dataKey="month" />
          <ChartYAxis label="Success rate (%)" />
          <ChartTooltip />
          <ChartLegend />
          {metrics.map(metric => <ChartLine key={metric.key} dataKey={metric.key} name={metric.name} color={metric.color} {...showReferenceBand ? {
          rangeLowerDataKey: \`\${metric.key}Min\`,
          rangeUpperDataKey: \`\${metric.key}Max\`,
          rangeName: \`\${metric.name} industry range\`
        } : {}} />)}
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(se=(re=C.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,oe,ie;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`({
  dataKey = 'teamA',
  name = 'Team A',
  ...args
}) => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartLineWrapper data={chartData}>
          <ChartXAxis dataKey="month" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartLine dataKey={dataKey} name={name} strokeStyle="solid" color="data.background.categorical.blue.moderate" {...args} />
          <ChartReferenceLine x="Apr" label="Avg: 1200" />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(ie=(oe=O.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`({
  dataKey = 'teamA',
  name = 'Team A',
  ...args
}) => {
  return <ChartsWrapper>
      <Box width="200px" height="100px">
        <ChartLineWrapper data={chartData}>
          <ChartLine dataKey={dataKey} name={name} strokeStyle="solid" color="data.background.categorical.blue.strong" dot={false} activeDot={false} {...args} />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(de=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var he,me,pe;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const [selectedDataKeys, setSelectedDataKeys] = React.useState(['historical', 'forecast']);
  const handleSelectionChange = ({
    dataKey,
    selectedKeysArray
  }: {
    dataKey: string;
    selectedKeysArray: string[];
  }): void => {
    if (dataKey === 'historical' && selectedKeysArray.includes('forecast')) {
      setSelectedDataKeys(selectedKeysArray.filter(key => key !== 'forecast'));
    } else {
      setSelectedDataKeys([...selectedKeysArray, 'forecast']);
    }
  };
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartLineWrapper data={forecastData}>
          <ChartXAxis dataKey="date" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend selectedDataKeys={selectedDataKeys} onSelectedDataKeysChange={handleSelectionChange} />
          <ChartLine dataKey="historical" name="Historical Data" connectNulls={true} color="data.background.categorical.blue.moderate" />
          <ChartLine dataKey="forecast" name="Forecasted Data" strokeStyle="dashed" connectNulls={true} showLegend={false} color="data.background.categorical.blue.moderate" />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(pe=(me=L.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,xe,ye;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box display="flex" flexDirection="column" gap="spacing.8" width="100%">
        <Box display="flex" flexDirection="column" gap="spacing.3" width="100%">
          <Heading size="small">
            Hard gap for outages (connectNulls=&#123;false&#125;, default)
          </Heading>
          <Box width="100%" height="220px">
            <ChartLineWrapper data={dataWithNulls}>
              <ChartXAxis dataKey="month" />
              <ChartYAxis />
              <ChartTooltip />
              <ChartLegend />
              <ChartLine dataKey="sales" name="Sales (Gap on no-data)" color="data.background.categorical.gray.strong" />
            </ChartLineWrapper>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="spacing.3" width="100%">
          <Heading size="small">
            Solid bridge across nulls (connectNullsStyle=&quot;solid&quot;)
          </Heading>
          <Box width="100%" height="220px">
            <ChartLineWrapper data={dataWithNulls}>
              <ChartXAxis dataKey="month" />
              <ChartYAxis />
              <ChartTooltip />
              <ChartLegend />
              <ChartLine dataKey="sales" name="Sales (Solid across no-data)" connectNulls={true} connectNullsStyle="solid" color="data.background.categorical.blue.moderate" />
            </ChartLineWrapper>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="spacing.3" width="100%">
          <Heading size="small">
            Dashed bridge across nulls (connectNullsStyle=&quot;dashed&quot;)
          </Heading>
          <Box width="100%" height="220px">
            <ChartLineWrapper data={dataWithNulls}>
              <ChartXAxis dataKey="month" />
              <ChartYAxis />
              <ChartTooltip />
              <ChartLegend />
              <ChartLine dataKey="sales" name="Sales (Dashed across no-data)" connectNulls={true} connectNullsStyle="dashed" color="data.background.categorical.green.moderate" />
            </ChartLineWrapper>
          </Box>
        </Box>
      </Box>
    </ChartsWrapper>;
}`,...(ye=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var Ce,ge,Le;b.parameters={...b.parameters,docs:{...(Ce=b.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartLineWrapper data={steppedData}>
          <ChartXAxis dataKey="month" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartLine dataKey="value" name="Stepped Line" type="step" color="data.background.categorical.blue.moderate" />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(Le=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:Le.source}}};var Ae,be,je;j.parameters={...j.parameters,docs:{...(Ae=j.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartLineWrapper data={chartData} colorTheme="categorical">
          <ChartXAxis dataKey="month" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartLine dataKey="teamA" name="value 2" />
          <ChartLine dataKey="teamB" name="Value 1" />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(je=(be=j.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};var Ke,Se,ve;P.parameters={...P.parameters,docs:{...(Ke=P.parameters)==null?void 0:Ke.docs,source:{originalSource:`({
  dataKey = 'teamA',
  name = 'Team A',
  ...args
}) => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartLineWrapper data={chartData}>
          <ChartXAxis dataKey="month" label="Month" />
          <ChartYAxis label="Sales" />
          <ChartTooltip />
          <ChartLegend />
          <ChartLine dataKey={dataKey} name={name} color="data.background.categorical.green.moderate" {...args} />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(ve=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};var fe,We,De;K.parameters={...K.parameters,docs:{...(fe=K.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const [timePeriod, setTimePeriod] = React.useState<'month' | 'year' | 'minute'>('month');
  const dataMap = {
    month: {
      data: monthlyData,
      label: 'Month'
    },
    year: {
      data: yearlyData,
      label: 'Year'
    },
    minute: {
      data: minuteData,
      label: 'Time (Minutes)'
    }
  };
  const currentData = dataMap[timePeriod];
  return <ChartsWrapper>
      <Box display="flex" flexDirection="column" width="100%" height="100%">
        <Box marginBottom="spacing.5">
          <ChipGroup accessibilityLabel="Select time period" selectionType="single" value={timePeriod} onChange={({
          values
        }) => setTimePeriod(values[0] as 'month' | 'year' | 'minute')}>
            <Chip value="month">Monthly</Chip>
            <Chip value="year">Yearly</Chip>
            <Chip value="minute">Per Minute</Chip>
          </ChipGroup>
        </Box>

        <Box width="100%" height="400px">
          <ChartLineWrapper data={currentData.data} colorTheme="categorical">
            <ChartXAxis dataKey="period" label={currentData.label} />
            <ChartYAxis label="Amount ($)" />
            <ChartTooltip />
            <ChartLegend />
            <ChartLine dataKey="revenue" name="Revenue" color="data.background.categorical.blue.strong" />
            <ChartLine dataKey="expenses" name="Expenses" color="data.background.categorical.red.strong" />
          </ChartLineWrapper>
        </Box>
      </Box>
    </ChartsWrapper>;
}`,...(De=(We=K.parameters)==null?void 0:We.docs)==null?void 0:De.source}}};var ke,Te,Be;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="500px">
        <ChartLineWrapper data={regionalSalesData} colorTheme="categorical">
          <ChartXAxis dataKey="month" label="Month" />
          <ChartYAxis label="Sales ($)" />
          <ChartTooltip />
          <ChartLegend />
          <ChartLine dataKey="northAmerica" name="North America" />
          <ChartLine dataKey="southAmerica" name="South America" />
          <ChartLine dataKey="europe" name="Europe" />
          <ChartLine dataKey="asia" name="Asia" />
          <ChartLine dataKey="africa" name="Africa" />
          <ChartLine dataKey="oceania" name="Oceania" />
          <ChartLine dataKey="middleEast" name="Middle East" />
          <ChartLine dataKey="centralAsia" name="Central Asia" />
          <ChartLine dataKey="eastAsia" name="East Asia" />
          <ChartLine dataKey="southEastAsia" name="South East Asia" />
          <ChartLine dataKey="caribbean" name="Caribbean" />
          <ChartLine dataKey="scandinavia" name="Scandinavia" />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(Be=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:Be.source}}};var we,Ne,Ee;$.parameters={...$.parameters,docs:{...(we=$.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="500px">
        <ChartLineWrapper data={regionalSalesData} colorTheme="categorical">
          <ChartXAxis dataKey="month" label="Month" />
          <ChartYAxis label="Sales ($)" />
          <ChartTooltip />
          <ChartLegend />
          <ChartLine dataKey="northAmerica" name="North America" />
          <ChartLine dataKey="southAmerica" name="South America" />
          <ChartLine dataKey="europe" name="Europe" />
          <ChartLine dataKey="asia" name="Asia" />
          <ChartCartesianGrid />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(Ee=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:Ee.source}}};var Me,Oe,Re;v.parameters={...v.parameters,docs:{...(Me=v.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartLineWrapper data={multiLineAxisData} colorTheme="categorical">
          <ChartXAxis dataKey="time" secondaryDataKey="day" label="Time / Day" />
          <ChartYAxis label="Revenue ($)" />
          <ChartTooltip />
          <ChartLegend />
          <ChartLine dataKey="revenue" name="Revenue" />
          <ChartLine dataKey="orders" name="Orders" />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(Re=(Oe=v.parameters)==null?void 0:Oe.docs)==null?void 0:Re.source}}};var Pe,$e,Je;f.parameters={...f.parameters,docs:{...(Pe=f.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <ChartsWrapper fullWidth>
      <Box width="100%" height="500px">
        <ChartLineWrapper data={largeLabelsData} colorTheme="categorical">
          <ChartXAxis dataKey="category" />
          <ChartYAxis label="Amount in USD ($)" />
          <ChartTooltip />
          <ChartLegend />
          <ChartLine dataKey="quarterlyRevenue" name="All Sources" />
          <ChartLine dataKey="operationalExpenses" name="Operational Expenses " />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(Je=($e=f.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Ye,Ve,Ue;W.parameters={...W.parameters,docs:{...(Ye=W.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <ChartsWrapper fullWidth>
      <Box width="100%" height="500px">
        <ChartLineWrapper data={largeLabelsWithSecondaryData} colorTheme="categorical">
          <ChartXAxis dataKey="category" secondaryDataKey="quarter" />
          <ChartYAxis label="Amount ($)" />
          <ChartTooltip />
          <ChartLegend />
          <ChartLine dataKey="revenue" name="Revenue" />
          <ChartLine dataKey="orders" name="Orders" />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(Ue=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:Ue.source}}};var Xe,_e,qe;D.parameters={...D.parameters,docs:{...(Xe=D.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return <ChartsWrapper>
      <Box width="100%" height="500px">
        <ChartLineWrapper data={regionalSalesData} colorTheme="categorical">
          <ChartXAxis dataKey="month" label="Month" />
          <ChartYAxis label="Sales ($)" />
          <ChartTooltip cursor={{
          stroke: theme.colors.surface.border.gray.subtle,
          strokeWidth: 1
        }} />
          <ChartLegend onSelectedDataKeysChange={({
          dataKey,
          selectedKeysArray
        }) => {
          console.log(\`Clicked: \${dataKey}, selectedKeysArray: \${selectedKeysArray}\`);
        }} />
          <ChartLine dataKey="northAmerica" name="North America" />
          <ChartLine dataKey="southAmerica" name="South America" />
          <ChartLine dataKey="europe" name="Europe" />
          <ChartLine dataKey="asia" name="Asia" />
          <ChartCartesianGrid />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(qe=(_e=D.parameters)==null?void 0:_e.docs)==null?void 0:qe.source}}};var Fe,He,Ie;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  const theme = useTheme();
  return <ChartsWrapper>
      <Box width="100%" height="500px">
        <ChartLineWrapper data={regionalSalesData} colorTheme="categorical">
          <ChartXAxis dataKey="month" label="Month" />
          <ChartYAxis label="Sales ($)" />
          <ChartTooltip cursor={{
          stroke: theme.colors.surface.border.gray.subtle,
          strokeWidth: 1
        }} />
          <ChartLegend defaultSelectedDataKeys={['northAmerica', 'europe']} onSelectedDataKeysChange={({
          dataKey,
          selectedKeysArray
        }) => {
          const isSelected = selectedKeysArray.includes(dataKey);
          console.log(\`Selection changed: \${dataKey}, isSelected: \${isSelected}\`);
        }} />
          <ChartLine dataKey="northAmerica" name="North America" />
          <ChartLine dataKey="southAmerica" name="South America" />
          <ChartLine dataKey="europe" name="Europe" />
          <ChartLine dataKey="asia" name="Asia" />
          <ChartCartesianGrid />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(Ie=(He=k.parameters)==null?void 0:He.docs)==null?void 0:Ie.source}}};var Ge,ze,Qe;T.parameters={...T.parameters,docs:{...(Ge=T.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  const theme = useTheme();
  const [selectedDataKeys, setSelectedDataKeys] = React.useState(['northAmerica', 'asia']);
  const handleSelectionChange = ({
    selectedKeysArray
  }: {
    dataKey: string;
    selectedKeysArray: string[];
  }): void => {
    setSelectedDataKeys(selectedKeysArray);
  };
  return <ChartsWrapper>
      <Box display="flex" flexDirection="column" width="100%" height="100%">
        <Box marginBottom="spacing.5">
          <ChipGroup accessibilityLabel="Select regions" selectionType="multiple" value={selectedDataKeys} onChange={({
          values
        }) => setSelectedDataKeys(values)}>
            <Chip value="northAmerica">North America</Chip>
            <Chip value="southAmerica">South America</Chip>
            <Chip value="europe">Europe</Chip>
            <Chip value="asia">Asia</Chip>
          </ChipGroup>
        </Box>

        <Box width="100%" height="400px">
          <ChartLineWrapper data={regionalSalesData} colorTheme="categorical">
            <ChartXAxis dataKey="month" label="Month" />
            <ChartYAxis label="Sales ($)" />
            <ChartTooltip cursor={{
            stroke: theme.colors.surface.border.gray.subtle,
            strokeWidth: 1
          }} />
            <ChartLegend selectedDataKeys={selectedDataKeys} onSelectedDataKeysChange={handleSelectionChange} />
            <ChartLine dataKey="northAmerica" name="North America" />
            <ChartLine dataKey="southAmerica" name="South America" />
            <ChartLine dataKey="europe" name="Europe" />
            <ChartLine dataKey="asia" name="Asia" />
            <ChartCartesianGrid />
          </ChartLineWrapper>
        </Box>
      </Box>
    </ChartsWrapper>;
}`,...(Qe=(ze=T.parameters)==null?void 0:ze.docs)==null?void 0:Qe.source}}};var Ze,ea,aa;B.parameters={...B.parameters,docs:{...(Ze=B.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  const theme = useTheme();
  const [lastClicked, setLastClicked] = React.useState<string | null>(null);
  const dummyData = [{
    timestamp: 1767292200,
    date: 'Jan 2',
    AOV: 2172
  }, {
    timestamp: 1767378600,
    date: 'Jan 3',
    AOV: 2872
  }, {
    timestamp: 1767465000,
    date: 'Jan 4',
    AOV: 2611
  }, {
    timestamp: 1767551400,
    date: 'Jan 5',
    AOV: 3742
  }, {
    timestamp: 1767637800,
    date: 'Jan 6',
    AOV: 3926
  }, {
    timestamp: 1767724200,
    date: 'Jan 7',
    AOV: 2232
  }, {
    timestamp: 1767810600,
    date: 'Jan 8',
    AOV: 3231
  }, {
    timestamp: 1767897000,
    date: 'Jan 9',
    AOV: 3645
  }, {
    timestamp: 1767983400,
    date: 'Jan 10',
    AOV: 2941
  }, {
    timestamp: 1768069800,
    date: 'Jan 11',
    AOV: 2071
  }, {
    timestamp: 1768156200,
    date: 'Jan 12',
    AOV: 3089
  }, {
    timestamp: 1768242600,
    date: 'Jan 13',
    AOV: 3267
  }];
  return <ChartsWrapper>
      <Box display="flex" flexDirection="column" width="100%" height="100%">
        <Box marginBottom="spacing.5">
          <Heading size="small">Last clicked: {lastClicked ? \`\${lastClicked}\` : 'None'}</Heading>
        </Box>

        <Box width="100%" height="400px">
          <ChartLineWrapper data={dummyData} colorTheme="categorical">
            <ChartXAxis dataKey="date" interval={2} />
            <ChartYAxis />
            <ChartTooltip cursor={{
            stroke: theme.colors.surface.border.gray.subtle,
            strokeWidth: 1
          }} />
            <ChartLegend onSelectedDataKeysChange={({
            dataKey,
            selectedKeysArray
          }) => {
            const isSelected = selectedKeysArray.includes(dataKey);
            console.log({
              dataKey,
              selectedKeysArray,
              isSelected
            });
            setLastClicked(\`\${dataKey} (\${isSelected ? 'selected' : 'deselected'})\`);
          }} />
            <ChartLine dataKey="AOV" name="AOV" />

            <ChartCartesianGrid />
          </ChartLineWrapper>
        </Box>
      </Box>
    </ChartsWrapper>;
}`,...(aa=(ea=B.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ta,ra,sa;J.parameters={...J.parameters,docs:{...(ta=J.parameters)==null?void 0:ta.docs,source:{originalSource:`() => {
  // Custom formatter to convert timestamp to readable date
  const formatTimestamp = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartLineWrapper data={timestampData} colorTheme="categorical">
          <ChartXAxis dataKey="timestamp" label="Date" tickFormatter={(value: string) => formatTimestamp(Number(value))} />
          <ChartYAxis label="Sales ($)" />
          <ChartTooltip />
          <ChartLegend />
          <ChartLine dataKey="sales" name="Daily Sales" />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(sa=(ra=J.parameters)==null?void 0:ra.docs)==null?void 0:sa.source}}};var na,oa,ia;Y.parameters={...Y.parameters,docs:{...(na=Y.parameters)==null?void 0:na.docs,source:{originalSource:`() => {
  // Custom formatter to display values in K format with currency
  const formatCurrency = (value: number): string => {
    if (value >= 1000) {
      return \`$\${(value / 1000).toFixed(0)}K\`;
    }
    return \`$\${value}\`;
  };
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartLineWrapper data={revenueData} colorTheme="categorical">
          <ChartXAxis dataKey="month" />
          <ChartYAxis label="Revenue" tickFormatter={formatCurrency} />
          <ChartTooltip />
          <ChartLegend />
          <ChartLine dataKey="revenue" name="Monthly Revenue" />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(ia=(oa=Y.parameters)==null?void 0:oa.docs)==null?void 0:ia.source}}};var la,ca,da;w.parameters={...w.parameters,docs:{...(la=w.parameters)==null?void 0:la.docs,source:{originalSource:`() => {
  const theme = useTheme();
  const benchmarkValue = 3200;
  const specialEventDate = 'Oct 10';
  const specialEventValue = 4500;

  // Prepare chart data with benchmark line and single point
  const chartDataWithExtras = React.useMemo(() => {
    return salesAnalysisData.map(item => ({
      ...item,
      benchmarkLine: benchmarkValue,
      specialEvent: item.date === specialEventDate ? specialEventValue : null
    }));
  }, []);
  return <ChartsWrapper>
      <Box width="100%" height="450px">
        <ChartLineWrapper data={chartDataWithExtras}>
          <ChartXAxis dataKey="date" />
          <ChartYAxis />
          <ChartTooltip cursor={{
          stroke: theme.colors.surface.border.gray.subtle,
          strokeWidth: 1
        }} />
          <ChartLegend />

          {/* Main Sales Line - Blue solid line with dots */}
          <ChartLine dataKey="sales" name="Daily Sales" type="monotone" color="data.background.categorical.blue.moderate" />

          {/* Special Event - Single point only (all other values are null) */}
          {/* Remove hide={true} to show in tooltip. Use showLegend={false} to hide from legend */}
          <ChartLine dataKey="specialEvent" name="Special Event" connectNulls={false} color="data.background.categorical.red.intense" dot={{
          r: 6,
          fill: theme.colors.data.background.categorical.red.intense,
          stroke: theme.colors.data.background.categorical.red.intense,
          strokeWidth: 2
        }} activeDot={{
          r: 8,
          fill: theme.colors.data.background.categorical.red.intense,
          stroke: theme.colors.data.background.categorical.red.intense,
          strokeWidth: 3
        }} />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(da=(ca=w.parameters)==null?void 0:ca.docs)==null?void 0:da.source}}};var ha,ma,pa;N.parameters={...N.parameters,docs:{...(ha=N.parameters)==null?void 0:ha.docs,source:{originalSource:`() => {
  return <ChartsWrapper>
      <Box width="100%" height="400px">
        <ChartLineWrapper data={chartData}>
          <ChartXAxis dataKey="month" />
          <ChartYAxis />
          <ChartTooltip />
          <ChartLegend />
          <ChartLine dataKey="teamA" name="Team A" color="data.background.sequential.blue.500" />
          <ChartLine dataKey="teamB" name="Team B" color="data.background.sequential.blue.200" />
        </ChartLineWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(pa=(ma=N.parameters)==null?void 0:ma.docs)==null?void 0:pa.source}}};const Xa=["SimpleLineChart","LineChartWithReferenceBand","LineChartIndustrySRKitchenSink","SimpleLineChartWithVerticalLine","TinyLineChart","ForecastLineChart","LineChartNullBridge","SteppedLineChart","LineChartWithDefaultColorTheme","LineChartWithXAndYAxisLabels","LineChartWithSwitchableTimePeriods","LineChartWithManyLines","LineChartWithCartesianGrid","LineChartWithMultiLineXAxis","LineChartWithLargeLabels","LineChartWithLargeLabelsAndSecondary","LineChartWithCustomCursor","LineChartWithDefaultSelectedDataKeys","LineChartWithControlledSelection","LineChartWithLegendClickCallback","LineChartWithCustomTickFormatter","LineChartWithCurrencyFormatter","LineChartWithBenchmarkAndSinglePoint","LineChartWithSequentialColors"];export{L as ForecastLineChart,C as LineChartIndustrySRKitchenSink,A as LineChartNullBridge,w as LineChartWithBenchmarkAndSinglePoint,$ as LineChartWithCartesianGrid,T as LineChartWithControlledSelection,Y as LineChartWithCurrencyFormatter,D as LineChartWithCustomCursor,J as LineChartWithCustomTickFormatter,j as LineChartWithDefaultColorTheme,k as LineChartWithDefaultSelectedDataKeys,f as LineChartWithLargeLabels,W as LineChartWithLargeLabelsAndSecondary,B as LineChartWithLegendClickCallback,S as LineChartWithManyLines,v as LineChartWithMultiLineXAxis,g as LineChartWithReferenceBand,N as LineChartWithSequentialColors,K as LineChartWithSwitchableTimePeriods,P as LineChartWithXAndYAxisLabels,M as SimpleLineChart,O as SimpleLineChartWithVerticalLine,b as SteppedLineChart,R as TinyLineChart,Xa as __namedExportsOrder,Ua as default};
