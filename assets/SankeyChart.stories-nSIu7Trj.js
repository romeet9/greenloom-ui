import{iN as p,j as e,B as c,iO as k,H as de}from"./iframe-C1qQ09LF.js";import{S as ue}from"./Sandbox.web-B2xP21Qp.js";import{S as pe}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./baseCode-DnWYDQ6N.js";import"./Sandbox.web-C7diOxlu.js";import"./componentStatusData-8pChZ-5h.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,he=()=>e.jsxs(pe,{componentName:"SankeyChart",componentDescription:"A Sankey flow diagram for visualising how a quantity is distributed across multiple stages. Built with Recharts for layout and React SVG for rendering. Suitable for payment routing, funnel analysis, and budget allocation.",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Charts/_decisions/decisions.md",children:[e.jsx(de,{size:"large",children:"Usage"}),e.jsx(ue,{showConsole:!0,children:`
        import { ChartSankeyWrapper, ChartSankey } from '@greenloom/ui/components';

        function App() {
          return (
            <Box width="100%" height="320px">
              <ChartSankeyWrapper showTooltip>
                <ChartSankey
                  data={{
                    nodes: [
                      { id: 'total',   name: 'Total' },
                      { id: 'upi',     name: 'UPI' },
                      { id: 'card',    name: 'Card' },
                      { id: 'success', name: 'Successful' },
                      { id: 'failed',  name: 'Failed' },
                    ],
                    links: [
                      { source: 'total', target: 'upi',     value: 4000 },
                      { source: 'total', target: 'card',    value: 3200 },
                      { source: 'upi',   target: 'success', value: 3500 },
                      { source: 'upi',   target: 'failed',  value: 500  },
                      { source: 'card',  target: 'success', value: 2800 },
                      { source: 'card',  target: 'failed',  value: 400  },
                    ],
                  }}
                  labelUnit="txn"
                />
              </ChartSankeyWrapper>
            </Box>
          );
        }

        export default App;
      `})]}),O=["data.background.categorical.green.subtle","data.background.categorical.green.moderate","data.background.categorical.red.subtle","data.background.categorical.red.moderate","data.background.categorical.blue.moderate","data.background.categorical.gold.moderate","data.background.categorical.purple.moderate","data.background.categorical.orange.moderate","data.background.categorical.pink.moderate","data.background.categorical.skyBlue.moderate","data.background.categorical.gray.moderate"],U=O.reduce((n,a)=>(n[a]=a.replace("data.background.categorical.",""),n),{}),Le={title:"Components/Charts/SankeyChart",component:p,tags:["autodocs"],argTypes:{height:{control:{type:"number",min:200,max:800,step:20},description:'Chart height. Passed as a BoxProp — the story uses this to set the height of the outer container Box (e.g. "420px").'},showTooltip:{control:{type:"boolean"},description:"Show a tooltip on node/link hover."},showLabels:{control:{type:"boolean"},description:"Show labels to the right of each node bar."},showLabelChip:{control:{type:"boolean"},description:"When true (default), labels render as Blade-styled chips with value + percentage. When false, renders the same info (name + value + percentage) as plain SVG text without chip background — cleaner for dense charts or static exports."},showPercentage:{control:{type:"boolean"},description:"When true (default), shows the percentage of total flow alongside the value in each label. When false, only the humanized value (and optional unit) is shown."},labelUnit:{control:{type:"text"},description:'Unit appended to node value in label chip, e.g. "txn" or "₹".'},numLevels:{control:{type:"select"},options:[2,3,4],description:"Number of node columns in the chart.",defaultValue:4},nodesL1:{control:{type:"number",min:1,max:6},description:"Nodes in column 1.",defaultValue:1},nodesL2:{control:{type:"number",min:1,max:6},description:"Nodes in column 2.",defaultValue:4},nodesL3:{control:{type:"number",min:1,max:6},description:"Nodes in column 3.",defaultValue:3,if:{arg:"numLevels",gt:2}},nodesL4:{control:{type:"number",min:1,max:6},description:"Nodes in column 4.",defaultValue:2,if:{arg:"numLevels",eq:4}},width:{control:{type:"text"},description:'Chart width. Accepts a pixel number or any valid CSS width string (e.g. "100%", "600px"). Default: "100%".'},successColor:{control:{type:"select",labels:U},options:O,description:'Per-node color override for the "Successful" outcome node, applied via `SankeyDataNode.color`. Demonstrates node-level color control.'},failedColor:{control:{type:"select",labels:U},options:O,description:'Per-node color override for the "Failed" outcome node, applied via `SankeyDataNode.color`. Demonstrates node-level color control.'},data:{table:{disable:!0}},children:{table:{disable:!0}},formatValue:{table:{disable:!0}},nodeColorOverride:{table:{disable:!0}},linkColorOverride:{table:{disable:!0}},testID:{table:{disable:!0}},onNodeClick:{table:{disable:!0}},onLinkClick:{table:{disable:!0}}},parameters:{docs:{page:he}}},m=({children:n,padding:a="spacing.8"})=>e.jsx(c,{width:"100%",backgroundColor:"surface.background.gray.intense",display:"flex",justifyContent:"center",alignItems:"center",padding:a,borderRadius:"medium",children:n}),ge=[["Total"],["UPI","Card","Wallet","Netbanking","BNPL","EMI"],["Green Loom","PayU","Billdesk","Stripe","CCAvenue","PayTM"],["Successful","Failed","Pending","Refunded","Disputed","Expired"]],_={Successful:"data.background.categorical.green.subtle",Failed:"data.background.categorical.red.subtle"},be=[[1],[.44,.28,.17,.11,.07,.04],[.52,.27,.21,.14,.09,.06],[.87,.13,.05,.03,.02,.01]],Ce=1e4;function ie(n){const a=n.map((r,s)=>Array.from({length:r},(l,o)=>{var g;const h=((g=ge[s])==null?void 0:g[o])??`Col${s+1} Node ${o+1}`;return{id:`l${s}-n${o}`,name:h,..._[h]?{color:_[h]}:{}}})),d={};d[a[0][0].id]=Ce;const y=[];for(let r=0;r<a.length-1;r++){const s=a[r],l=a[r+1],o=(be[r+1]??[]).slice(0,l.length);for(;o.length<l.length;)o.push(.05);const h=o.reduce((t,i)=>t+i,0),g=o.map(t=>t/h),B=s.reduce((t,i)=>t+(d[i.id]??0),0);l.forEach((t,i)=>{d[t.id]=Math.round(B*g[i])});for(const t of s){const i=d[t.id]??0;l.forEach((P,D)=>{y.push({source:t.id,target:P.id,value:Math.round(i*g[D])})})}}return{nodes:a.flat(),links:y}}const{nodes:W,links:T}=ie([1,4,3,2]),v=({height:n=480,showTooltip:a=!0,showLabels:d=!0,showLabelChip:y=!0,showPercentage:j=!0,labelUnit:r="txn",numLevels:s=4,nodesL1:l=1,nodesL2:o=4,nodesL3:h=3,nodesL4:g=2,successColor:B="data.background.categorical.green.subtle",failedColor:t="data.background.categorical.red.subtle"})=>{const i=[l,o,h,g].slice(0,s),{nodes:P,links:D}=ie(i),ce=P.map(N=>N.name==="Successful"?{...N,color:B}:N.name==="Failed"?{...N,color:t}:N);return e.jsx(m,{padding:"spacing.0",children:e.jsx(c,{width:"100%",height:`${n}px`,children:e.jsx(p,{showTooltip:a,children:e.jsx(k,{data:{nodes:ce,links:D},showLabels:d,showLabelChip:y,showPercentage:j,labelUnit:r,onNodeClick:u("onNodeClick"),onLinkClick:u("onLinkClick")})})})})},E={nodes:[{id:"total",name:"Total"},{id:"upi",name:"UPI"},{id:"card",name:"Card"},{id:"wallet",name:"Wallet"},{id:"success",name:"Successful"},{id:"failed",name:"Failed"}],links:[{source:"total",target:"upi",value:5e3},{source:"total",target:"card",value:3e3},{source:"total",target:"wallet",value:2e3},{source:"upi",target:"success",value:4200},{source:"upi",target:"failed",value:800},{source:"card",target:"success",value:2500},{source:"card",target:"failed",value:500},{source:"wallet",target:"success",value:1600},{source:"wallet",target:"failed",value:400}]},x=({totalColor:n,upiColor:a,cardColor:d,walletColor:y,successColor:j,failedColor:r})=>{const s={Total:n,UPI:a,Card:d,Wallet:y,Successful:j,Failed:r},l=E.nodes.map(o=>({...o,color:s[o.name]??o.color}));return e.jsx(m,{padding:"spacing.0",children:e.jsx(c,{width:"100%",height:"480px",children:e.jsx(p,{showTooltip:!0,children:e.jsx(k,{data:{nodes:l,links:E.links},labelUnit:"txn",onNodeClick:u("onNodeClick"),onLinkClick:u("onLinkClick")})})})})},w={control:{type:"select",labels:U},options:O};x.argTypes={totalColor:{...w,description:'Color for the "Total" node.'},upiColor:{...w,description:'Color for the "UPI" node.'},cardColor:{...w,description:'Color for the "Card" node.'},walletColor:{...w,description:'Color for the "Wallet" node.'},successColor:{...w,description:'Color for the "Successful" node.'},failedColor:{...w,description:'Color for the "Failed" node.'},height:{table:{disable:!0}},showTooltip:{table:{disable:!0}},showLabels:{table:{disable:!0}},showLabelChip:{table:{disable:!0}},showPercentage:{table:{disable:!0}},labelUnit:{table:{disable:!0}},numLevels:{table:{disable:!0}},nodesL1:{table:{disable:!0}},nodesL2:{table:{disable:!0}},nodesL3:{table:{disable:!0}},nodesL4:{table:{disable:!0}},width:{table:{disable:!0}}};x.args={totalColor:"data.background.categorical.blue.moderate",upiColor:"data.background.categorical.purple.moderate",cardColor:"data.background.categorical.gold.moderate",walletColor:"data.background.categorical.orange.moderate",successColor:"data.background.categorical.green.subtle",failedColor:"data.background.categorical.red.subtle"};const b=()=>e.jsx(m,{padding:"spacing.0",children:e.jsx(c,{width:"100%",height:"640px",children:e.jsx(p,{showTooltip:!0,orientation:"vertical",children:e.jsx(k,{data:{nodes:W,links:T},showLabels:!0,labelUnit:"txn",onNodeClick:u("onNodeClick"),onLinkClick:u("onLinkClick")})})})});b.parameters={controls:{disable:!0}};const C=()=>e.jsx(m,{padding:"spacing.0",children:e.jsx(c,{width:"100%",height:"640px",children:e.jsx(p,{showTooltip:!0,orientation:"vertical",children:e.jsx(k,{data:{nodes:W,links:T},showLabels:!1,onNodeClick:u("onNodeClick"),onLinkClick:u("onLinkClick")})})})});C.parameters={controls:{disable:!0}};const f=()=>e.jsx(m,{children:e.jsx(c,{width:"100%",display:"flex",flexDirection:"column",gap:"spacing.4",children:e.jsx(c,{width:"100%",height:"420px",children:e.jsx(p,{nodeColorOverride:"data.background.categorical.blue.intense",linkColorOverride:"data.background.categorical.blue.subtle",showTooltip:!0,children:e.jsx(k,{data:{nodes:W,links:T},showLabels:!0,labelUnit:"txn"})})})})});f.parameters={controls:{disable:!0}};const S=()=>e.jsx(m,{children:e.jsx(c,{width:"100%",height:"420px",children:e.jsx(p,{nodeColorOverride:"data.background.categorical.blue.intense",linkColorOverride:"data.background.categorical.blue.subtle",showTooltip:!0,children:e.jsx(k,{data:{nodes:W,links:T},showLabels:!1})})})});S.parameters={controls:{disable:!0}};const L=()=>e.jsx(m,{children:e.jsx(c,{width:"100%",height:"420px",children:e.jsx(p,{showTooltip:!0,children:e.jsx(k,{data:{nodes:W,links:T},showLabels:!0,showLabelChip:!1,labelUnit:"txn"})})})});L.parameters={controls:{disable:!0}};v.storyName="Default Sankey Chart";b.storyName="Vertical Sankey Chart (native only)";C.storyName="Vertical Sankey Chart without Labels (native only)";f.storyName="Single Color Sankey Chart";S.storyName="Sankey Chart without Labels";L.storyName="Sankey Chart with Plain Text Labels";var V,A,R;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`({
  height = 480,
  showTooltip = true,
  showLabels = true,
  showLabelChip = true,
  showPercentage = true,
  labelUnit = 'txn',
  numLevels = 4,
  nodesL1 = 1,
  nodesL2 = 4,
  nodesL3 = 3,
  nodesL4 = 2,
  successColor = 'data.background.categorical.green.subtle',
  failedColor = 'data.background.categorical.red.subtle'
}: StoryProps) => {
  const counts = ([nodesL1, nodesL2, nodesL3, nodesL4] as number[]).slice(0, numLevels);
  const {
    nodes: generatedNodes,
    links
  } = generateChartData(counts);
  // Apply the per-node color controls to the semantic outcome nodes.
  const nodes = generatedNodes.map(node => {
    if (node.name === 'Successful') return {
      ...node,
      color: successColor
    };
    if (node.name === 'Failed') return {
      ...node,
      color: failedColor
    };
    return node;
  });
  return <ChartsWrapper padding="spacing.0">
      <Box width="100%" height={\`\${height}px\`}>
        <ChartSankeyWrapper showTooltip={showTooltip}>
          <ChartSankey data={{
          nodes,
          links
        }} showLabels={showLabels} showLabelChip={showLabelChip} showPercentage={showPercentage} labelUnit={labelUnit} onNodeClick={action('onNodeClick')} onLinkClick={action('onLinkClick')} />
        </ChartSankeyWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(R=(A=v.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var F,I,M;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`({
  totalColor,
  upiColor,
  cardColor,
  walletColor,
  successColor,
  failedColor
}) => {
  const colorByName: Record<string, SankeyDataNode['color']> = {
    Total: totalColor,
    UPI: upiColor,
    Card: cardColor,
    Wallet: walletColor,
    Successful: successColor,
    Failed: failedColor
  };
  const nodes = PER_NODE_DATA.nodes.map(node => ({
    ...node,
    color: colorByName[node.name] ?? node.color
  }));
  return <ChartsWrapper padding="spacing.0">
      <Box width="100%" height="480px">
        <ChartSankeyWrapper showTooltip>
          <ChartSankey data={{
          nodes,
          links: PER_NODE_DATA.links
        }} labelUnit="txn" onNodeClick={action('onNodeClick')} onLinkClick={action('onLinkClick')} />
        </ChartSankeyWrapper>
      </Box>
    </ChartsWrapper>;
}`,...(M=(I=x.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var $,G,z,H,q;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`() => <ChartsWrapper padding="spacing.0">
    <Box width="100%" height="640px">
      <ChartSankeyWrapper showTooltip orientation="vertical">
        <ChartSankey data={{
        nodes: paymentNodes,
        links: paymentLinks
      }} showLabels labelUnit="txn" onNodeClick={action('onNodeClick')} onLinkClick={action('onLinkClick')} />
      </ChartSankeyWrapper>
    </Box>
  </ChartsWrapper>`,...(z=(G=b.parameters)==null?void 0:G.docs)==null?void 0:z.source},description:{story:`Vertical (top-to-bottom) flow — **native-only**. The web SankeyChart ignores
\`orientation\` and always renders horizontally; on native the layout is
transposed so stages stack down the screen, which reads better on tall phones.
Given plenty of height and full width so the stacked stages and their labels
have room to breathe.`,...(q=(H=b.parameters)==null?void 0:H.docs)==null?void 0:q.description}}};var K,Y,J,Q,X;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`() => <ChartsWrapper padding="spacing.0">
    <Box width="100%" height="640px">
      <ChartSankeyWrapper showTooltip orientation="vertical">
        <ChartSankey data={{
        nodes: paymentNodes,
        links: paymentLinks
      }} showLabels={false} onNodeClick={action('onNodeClick')} onLinkClick={action('onLinkClick')} />
      </ChartSankeyWrapper>
    </Box>
  </ChartsWrapper>`,...(J=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"Vertical flow with labels disabled (**native-only** orientation). Hiding the node\nlabels (`showLabels={false}`) surfaces the pure ribbon flow without any label\ncrowding — useful for dense multi-node stages on a narrow phone width.",...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,ee,ae;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`() => <ChartsWrapper>
    <Box width="100%" display="flex" flexDirection="column" gap="spacing.4">
      <Box width="100%" height="420px">
        <ChartSankeyWrapper nodeColorOverride="data.background.categorical.blue.intense" linkColorOverride="data.background.categorical.blue.subtle" showTooltip={true}>
          <ChartSankey data={{
          nodes: paymentNodes,
          links: paymentLinks
        }} showLabels={true} labelUnit="txn" />
        </ChartSankeyWrapper>
      </Box>
    </Box>
  </ChartsWrapper>`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var oe,te,re;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`() => <ChartsWrapper>
    <Box width="100%" height="420px">
      <ChartSankeyWrapper nodeColorOverride="data.background.categorical.blue.intense" linkColorOverride="data.background.categorical.blue.subtle" showTooltip={true}>
        <ChartSankey data={{
        nodes: paymentNodes,
        links: paymentLinks
      }} showLabels={false} />
      </ChartSankeyWrapper>
    </Box>
  </ChartsWrapper>`,...(re=(te=S.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,se,le;L.parameters={...L.parameters,docs:{...(ne=L.parameters)==null?void 0:ne.docs,source:{originalSource:`() => <ChartsWrapper>
    <Box width="100%" height="420px">
      <ChartSankeyWrapper showTooltip={true}>
        <ChartSankey data={{
        nodes: paymentNodes,
        links: paymentLinks
      }} showLabels={true} showLabelChip={false} labelUnit="txn" />
      </ChartSankeyWrapper>
    </Box>
  </ChartsWrapper>`,...(le=(se=L.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};const Ne=["DefaultSankeyChart","CustomNodeColorsSankeyChart","VerticalSankeyChart","VerticalSankeyChartWithoutLabels","SingleColorSankeyChart","SankeyChartWithoutLabels","SankeyChartWithPlainTextLabels"];export{x as CustomNodeColorsSankeyChart,v as DefaultSankeyChart,L as SankeyChartWithPlainTextLabels,S as SankeyChartWithoutLabels,f as SingleColorSankeyChart,b as VerticalSankeyChart,C as VerticalSankeyChartWithoutLabels,Ne as __namedExportsOrder,Le as default};
