import{lk as X,r as O,j as c,B as h,ll as _,T as D,l as Q,g0 as je,b1 as xe}from"./iframe-C1qQ09LF.js";import{b as Pe}from"./storybookArgTypes-DFfQV31s.js";import"./preload-helper-Dp1pzeXC.js";class C extends Error{constructor(e,o){super(`${e} at position ${o}`),this.position=o}}const Ne=32,_e=10,be=9,Ae=13,Ye=160,Ge=8192,Fe=8202,He=8239,We=8287,Ke=12288;function ze(n){return/^[0-9A-Fa-f]$/.test(n)}function N(n){return n>="0"&&n<="9"}function Ve(n){return n>=" "}function J(n){return`,:[]/{}()
+`.includes(n)}function q(n){return n>="a"&&n<="z"||n>="A"&&n<="Z"||n==="_"||n==="$"}function ee(n){return n>="a"&&n<="z"||n>="A"&&n<="Z"||n==="_"||n==="$"||n>="0"&&n<="9"}const ne=/^(http|https|ftp|mailto|file|data|irc):\/\/$/,oe=/^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;function te(n){return`,[]/{}
+`.includes(n)}function re(n){return P(n)||$e.test(n)}const $e=/^[[{\w-]$/;function Ze(n){return n===`
`||n==="\r"||n==="	"||n==="\b"||n==="\f"}function b(n,e){const o=n.charCodeAt(e);return o===Ne||o===_e||o===be||o===Ae}function Qe(n,e){const o=n.charCodeAt(e);return o===Ne||o===be||o===Ae}function qe(n,e){const o=n.charCodeAt(e);return o===Ye||o>=Ge&&o<=Fe||o===He||o===We||o===Ke}function P(n){return Ee(n)||H(n)}function Ee(n){return n==='"'||n==="“"||n==="”"}function ae(n){return n==='"'}function H(n){return n==="'"||n==="‘"||n==="’"||n==="`"||n==="´"}function ie(n){return n==="'"}function I(n,e){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;const m=n.lastIndexOf(e);return m!==-1?n.substring(0,m)+(o?"":n.substring(m+1)):n}function d(n,e){let o=n.length;if(!b(n,o-1))return n+e;for(;b(n,o-1);)o--;return n.substring(0,o)+e+n.substring(o)}function en(n,e,o){return n.substring(0,e)+n.substring(e+o)}function nn(n){return/[,\n][ \t\r]*$/.test(n)}const on={"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},tn={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"};function Ce(n){let e=0,o="";B(["```","[```","{```"]),f()||Le(),B(["```","```]","```}"]);const T=y(",");for(T&&i(),re(n[e])&&nn(o)?(T||(o=d(o,",")),Ie()):T&&(o=I(o,","));n[e]==="}"||n[e]==="]";)e++,i();if(e>=n.length)return o;Ue();function f(){i();const t=Oe()||Re()||A()||De()||Xe()||z(!1)||Be();return i(),t}function i(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const r=e;let a=u(t);do a=l(),a&&(a=u(t));while(a);return e>r}function u(t){const r=t?b:Qe;let a="";for(;;)if(r(n,e))a+=n[e],e++;else if(qe(n,e))a+=" ",e++;else break;return a.length>0?(o+=a,!0):!1}function l(){if(n[e]==="/"&&n[e+1]==="*"){for(;e<n.length&&!rn(n,e);)e++;return e+=2,!0}if(n[e]==="/"&&n[e+1]==="/"){for(;e<n.length&&n[e]!==`
`;)e++;return!0}return!1}function B(t){if(M(t)){if(q(n[e]))for(;e<n.length&&ee(n[e]);)e++;return i(),!0}return!1}function M(t){u(!0);for(const r of t){const a=e+r.length;if(n.slice(e,a)===r)return e=a,!0}return!1}function y(t){return n[e]===t?(o+=n[e],e++,!0):!1}function g(t){return n[e]===t?(e++,!0):!1}function we(){return g("\\")}function W(){return i(),n[e]==="."&&n[e+1]==="."&&n[e+2]==="."?(e+=3,i(),g(","),!0):!1}function Oe(){if(n[e]==="{"){o+="{",e++,i(),g(",")&&i();let t=!0;for(;e<n.length&&n[e]!=="}";){let r;if(t?(r=!0,t=!1):(r=y(","),r||(o=d(o,",")),i()),W(),!(A()||z(!0))){n[e]==="}"||n[e]==="{"||n[e]==="]"||n[e]==="["||n[e]===void 0?o=I(o,","):Je();break}i();const L=y(":"),S=e>=n.length;L||(re(n[e])||S?o=d(o,":"):$()),f()||(L||S?o+="null":$())}return n[e]==="}"?(o+="}",e++):o=d(o,"}"),!0}return!1}function Re(){if(n[e]==="["){o+="[",e++,i(),g(",")&&i();let t=!0;for(;e<n.length&&n[e]!=="]";)if(t?t=!1:y(",")||(o=d(o,",")),W(),!f()){o=I(o,",");break}return n[e]==="]"?(o+="]",e++):o=d(o,"]"),!0}return!1}function Ie(){let t=!0,r=!0;for(;r;)t?t=!1:y(",")||(o=d(o,",")),r=f();r||(o=I(o,",")),o=`[
${o}
]`}function A(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,a=n[e]==="\\";if(a&&(e++,a=!0),P(n[e])){const L=ae(n[e])?ae:ie(n[e])?ie:H(n[e])?H:Ee,S=e,R=o.length;let s='"';for(e++;;){if(e>=n.length){const p=V(e-1);return!t&&J(n.charAt(p))?(e=S,o=o.substring(0,R),A(!0)):(s=d(s,'"'),o+=s,!0)}if(e===r)return s=d(s,'"'),o+=s,!0;if(L(n[e])){const p=e,F=s.length;if(s+='"',e++,o+=s,i(!1),t||e>=n.length||J(n[e])||P(n[e])||N(n[e]))return K(),!0;const v=V(p-1),Z=n.charAt(v);if(Z===",")return e=S,o=o.substring(0,R),A(!1,v);if(J(Z))return e=S,o=o.substring(0,R),A(!0);o=o.substring(0,R),e=p+1,s=`${s.substring(0,F)}\\${s.substring(F)}`}else if(t&&te(n[e])){if(n[e-1]===":"&&ne.test(n.substring(S+1,e+2)))for(;e<n.length&&oe.test(n[e]);)s+=n[e],e++;return s=d(s,'"'),o+=s,K(),!0}else if(n[e]==="\\"){const p=n.charAt(e+1);if(tn[p]!==void 0)s+=n.slice(e,e+2),e+=2;else if(p==="u"){let v=2;for(;v<6&&ze(n[e+v]);)v++;v===6?(s+=n.slice(e,e+6),e+=6):e+v>=n.length?e=n.length:ke()}else s+=p,e+=2}else{const p=n.charAt(e);p==='"'&&n[e-1]!=="\\"?(s+=`\\${p}`,e++):Ze(p)?(s+=on[p],e++):(Ve(p)||Me(p),s+=p,e++)}a&&we()}}return!1}function K(){let t=!1;for(i();n[e]==="+";){t=!0,e++,i(),o=I(o,'"',!0);const r=o.length;A()?o=en(o,r,1):o=d(o,'"')}return t}function De(){const t=e;if(n[e]==="-"){if(e++,U())return G(t),!0;if(!N(n[e]))return e=t,!1}for(;N(n[e]);)e++;if(n[e]==="."){if(e++,U())return G(t),!0;if(!N(n[e]))return e=t,!1;for(;N(n[e]);)e++}if(n[e]==="e"||n[e]==="E"){if(e++,(n[e]==="-"||n[e]==="+")&&e++,U())return G(t),!0;if(!N(n[e]))return e=t,!1;for(;N(n[e]);)e++}if(!U())return e=t,!1;if(e>t){const r=n.slice(t,e),a=/^0\d/.test(r);return o+=a?`"${r}"`:r,!0}return!1}function Xe(){return E("true","true")||E("false","false")||E("null","null")||E("True","true")||E("False","false")||E("None","null")}function E(t,r){return n.slice(e,e+t.length)===t?(o+=r,e+=t.length,!0):!1}function z(t){const r=e;if(q(n[e])){for(;e<n.length&&ee(n[e]);)e++;let a=e;for(;b(n,a);)a++;if(n[a]==="(")return e=a+1,f(),n[e]===")"&&(e++,n[e]===";"&&e++),!0}for(;e<n.length&&!te(n[e])&&!P(n[e])&&(!t||n[e]!==":");)e++;if(n[e-1]===":"&&ne.test(n.substring(r,e+2)))for(;e<n.length&&oe.test(n[e]);)e++;if(e>r){for(;b(n,e-1)&&e>0;)e--;const a=n.slice(r,e);return o+=a==="undefined"?"null":JSON.stringify(a),n[e]==='"'&&e++,!0}}function Be(){if(n[e]==="/"){const t=e;for(e++;e<n.length&&(n[e]!=="/"||n[e-1]==="\\");)e++;return e++,o+=JSON.stringify(n.substring(t,e)),!0}}function V(t){let r=t;for(;r>0&&b(n,r);)r--;return r}function U(){return e>=n.length||J(n[e])||b(n,e)}function G(t){o+=`${n.slice(t,e)}0`}function Me(t){throw new C(`Invalid character ${JSON.stringify(t)}`,e)}function Ue(){throw new C(`Unexpected character ${JSON.stringify(n[e])}`,e)}function Le(){throw new C("Unexpected end of json string",n.length)}function Je(){throw new C("Object key expected",e)}function $(){throw new C("Colon expected",e)}function ke(){const t=n.slice(e,e+6);throw new C(`Invalid unicode character "${t}"`,e)}}function rn(n,e){return n[e]==="*"&&n[e+1]==="/"}const vn={title:"Patterns/GenUI",component:X,args:{},tags:["autodocs"],argTypes:Pe()},ce={components:[{component:"TEXT",content:"# Example of All UI Components"},{component:"TEXT",content:"This template demonstrates various UI components including charts, tables, alerts, and cards. Each component is tailored to specific data types and user intents."},{component:"TEXT",content:`### Features

- **Bold text** and *italic text* support
- \`Inline code\` and code blocks
- [Links](https://greenloom.ai) to external resources
- Ordered and unordered lists`},{component:"TEXT",content:`### Numbered List

1. First item
2. Second item
3. Third item with **bold** and *italic*
4. Fourth item with \`code\``},{component:"TEXT",content:`### Amount Component
`},{component:"AMOUNT",value:1e4,currency:"INR"},{component:"STACK",direction:"vertical",gap:"medium",children:[{component:"STACK",direction:"horizontal",gap:"medium",children:[{component:"CARD",title:"Line Chart Example",description:"Visualizing trends over time.",children:[{component:"CHART",chartType:"line",variant:"full",valueFormatter:{type:"number"},xAxis:"month",data:[{month:"January",value:100},{month:"February",value:150},{month:"March",value:200}]}]},{component:"CARD",title:"Bar Chart Example",description:"Comparing categories.",children:[{component:"CHART",chartType:"bar",variant:"full",valueFormatter:{type:"number"},xAxis:"category",data:[{category:"A",value:300},{category:"B",value:450},{category:"C",value:120}]}]}]},{component:"CARD",title:"Pie Chart Example",description:"Part-to-whole relationships.",children:[{component:"CHART",chartType:"pie",variant:"full",valueFormatter:{type:"percentage"},xAxis:"segment",data:[{segment:"Segment 1",value:40},{segment:"Segment 2",value:35},{segment:"Segment 3",value:25}]}]},{component:"CARD",children:[{component:"TEXT",content:"This card demonstrates optional title/subtitle. It only contains body content without a CardHeader."},{component:"BADGE",text:"No Header",color:"notice"}]},{component:"TABLE",headers:["Transaction ID","Customer","Status","Amount","Date","Details"],rowActions:[{type:"ICON_BUTTON",icon:"view",accessibilityLabel:"View transaction",action:{type:"TABLE_ROW_ACTION",eventName:"view_transaction"}},{type:"ICON_BUTTON",icon:"edit",accessibilityLabel:"Edit transaction",action:{type:"TABLE_ROW_ACTION",eventName:"edit_transaction"}},{type:"ICON_BUTTON",icon:"delete",accessibilityLabel:"Delete transaction",action:{type:"TABLE_ROW_ACTION",eventName:"delete_transaction"}}],rows:[[{component:"TEXT",value:"pay_NxGT5fK8mZ2abc",copyable:!0},{component:"TEXT",value:"Alice Johnson"},{component:"BADGE",value:"Captured",color:"positive"},{component:"AMOUNT",value:5e5,currency:"INR"},{component:"DATE",value:"2024-01-15T14:30:00Z",dateFormat:"DD MMM YYYY, HH:mm"},{component:"LINK",text:"View Details",action:{type:"CLICK",eventName:"link_click",data:{url:"https://dashboard.greenloom.ai/payments/pay_NxGT5fK8mZ2abc"}}}],[{component:"TEXT",value:"pay_MwFS4eJ7lY1xyz",copyable:!0},{component:"TEXT",value:"Bob Smith"},{component:"INDICATOR",value:"Processing",color:"notice"},{component:"AMOUNT",value:7500,currency:"USD"},{component:"DATE",value:"2024-01-14T09:15:00Z",dateFormat:"DD MMM YYYY, HH:mm"},{component:"LINK",text:"View Details",action:{type:"CLICK",eventName:"link_click",data:{url:"https://dashboard.greenloom.ai/payments/pay_MwFS4eJ7lY1xyz"}}}],[{component:"TEXT",value:"pay_LvER3dI6kX0def",copyable:!0},{component:"TEXT",value:"Charlie Brown"},{component:"BADGE",value:"Failed",color:"negative"},{component:"AMOUNT",value:25e3,currency:"MYR"},{component:"DATE",value:"2024-01-13T16:45:00Z",dateFormat:"DD MMM YYYY, HH:mm"},{component:"LINK",text:"View Details",action:{type:"CLICK",eventName:"link_click",data:{url:"https://dashboard.greenloom.ai/payments/pay_LvER3dI6kX0def"}}}],[{component:"TEXT",value:"pay_KuDQ2cH5jW9ghi",copyable:!0},{component:"TEXT",value:"Diana Ross"},{component:"INDICATOR",value:"Refunded",color:"information"},{component:"AMOUNT",value:15e4,currency:"INR"},{component:"DATE",value:"2024-01-12T11:20:00Z",dateFormat:"DD MMM YYYY, HH:mm"},{component:"LINK",text:"View Details",action:{type:"CLICK",eventName:"link_click",data:{url:"https://dashboard.greenloom.ai/payments/pay_KuDQ2cH5jW9ghi"}}}]]},{component:"ALERT",title:"Important Notice",description:"Ensure all data is reviewed before submission.",color:"notice",actions:{primary:{text:"Review Data",action:{type:"CLICK",eventName:"review_data",data:{message:"Review the data"}}},secondary:{text:"Dismiss",action:{type:"CLICK",eventName:"dismiss_alert",data:{message:"Dismiss the alert"}}}}},{component:"CARD",title:"Payment Link Created",description:"Your new payment link is ready",footer:null,children:[{component:"STACK",direction:"vertical",gap:"medium",children:[{component:"INFO_GROUP",items:[{key:{children:"Amount"},value:{children:{component:"AMOUNT",value:100,currency:"INR"}}},{key:{children:"Status"},value:{children:{component:"BADGE",text:"Created",color:"positive"}}},{key:{children:"Link ID"},value:{children:"plink_SP2rJtPRhJ5gZu"}}]},{component:"LINK",text:"Open Payment Link",action:{type:"CLICK",eventName:"link_click",data:{url:"https://rzp.io/rzp/8nMpkJZ"}}}]}]},{component:"STACK",direction:"horizontal",gap:"medium",children:[{component:"CARD",title:"Summary Card 1",children:[{component:"TEXT",content:"Key metric: 75%"}]},{component:"CARD",title:"Summary Card 2",children:[{component:"TEXT",content:"Revenue: $50,000"}]}]}]}]},an=()=>{const n=JSON.stringify(ce,null,2),e=n.length,[o,m]=O.useState(7200),T=O.useRef(ce.components),f=n.slice(0,o);let i=T.current;try{const u=Ce(f),l=JSON.parse(u);l.components&&Array.isArray(l.components)&&(T.current=l.components,i=l.components)}catch{}return c.jsxs(h,{children:[c.jsx(_,{children:i&&i.length>0?c.jsx(X,{isAnimating:!1,animateOptions:{duration:300,sep:"word"},components:i}):c.jsx(h,{padding:"spacing.5",children:c.jsx(D,{color:"surface.text.gray.muted",children:"Move the slider to start rendering components from the JSON schema..."})})}),c.jsx(h,{position:"fixed",bottom:"spacing.5",left:"spacing.0",right:"spacing.0",display:"flex",justifyContent:"center",zIndex:1e3,children:c.jsxs(h,{width:"400px",padding:"spacing.5",backgroundColor:"surface.background.gray.intense",borderWidth:"thin",borderColor:"surface.border.gray.muted",borderRadius:"medium",elevation:"highRaised",children:[c.jsxs(D,{size:"medium",weight:"semibold",marginBottom:"spacing.2",children:["JSON Progress: ",o.toLocaleString()," / ",e.toLocaleString()," ","characters (",Math.round(o/e*100),"%)"]}),c.jsx("input",{type:"range",min:0,max:e,value:o,onChange:u=>m(Number(u.target.value)),style:{width:"100%",cursor:"pointer"}})]})})]})},k=an.bind({}),cn=({content:n})=>c.jsx(_,{children:c.jsx(X,{isAnimating:!1,components:[{component:"TEXT",content:n}]})}),w=cn.bind({});w.args={content:["# Heading 1","## Heading 2","### Heading 3","#### Heading 4","##### Heading 5","###### Heading 6","","This is a regular paragraph with **bold text**, *italic text*, ***bold and italic***, and `inline code`.","","Here is a [hyperlink](https://greenloom.ai) inside a sentence.","","### Unordered List","","- First item","- Second item with **bold**","- Third item with *italic*","  - Nested item A","  - Nested item B","- Fourth item","","### Ordered List","","1. Step one","2. Step two with `code`","3. Step three","   1. Sub-step A","   2. Sub-step B","4. Step four","","### Blockquote","","> This is a blockquote with **bold** and *italic* inside it.","> It can span multiple lines.","","### Code Block","","```js",'const greeting = "Hello, Blade!";',"console.log(greeting);","```","","### Mixed Emphasis","","You can combine *italic and **bold inside italic*** or **bold with *italic inside bold***.","","---","","*Footer note in italics.*"].join(`
`)};w.argTypes={content:{control:"text"}};const Y=[{type:"ICON_BUTTON",icon:"view",accessibilityLabel:"View details",action:{type:"TABLE_ROW_ACTION",eventName:"view_row"}},{type:"ICON_BUTTON",icon:"edit",accessibilityLabel:"Edit row",action:{type:"TABLE_ROW_ACTION",eventName:"edit_row"}},{type:"ICON_BUTTON",icon:"delete",accessibilityLabel:"Delete row",action:{type:"TABLE_ROW_ACTION",eventName:"delete_row"}}],sn={components:[{component:"TEXT",content:"# Wide Table Example"},{component:"TEXT",content:"This example demonstrates a table with many columns. The table is horizontally scrollable when it overflows."},{component:"TABLE",headers:["Transaction ID","Customer Name","Email","Phone","Status","Amount","Currency","Payment Method","Date","Region","Notes"],rowActions:Y,rows:[[{component:"TEXT",value:"pay_NxGT5fK8mZ2abc",copyable:!0},{component:"TEXT",value:"Alice Johnson"},{component:"TEXT",value:"alice.johnson@example.com",copyable:!0},{component:"TEXT",value:"+91 98765 43210"},{component:"BADGE",value:"Captured",color:"positive"},{component:"AMOUNT",value:5e5,currency:"INR"},{component:"TEXT",value:"INR"},{component:"TEXT",value:"Credit Card"},{component:"DATE",value:"2024-01-15T14:30:00Z",dateFormat:"DD MMM YYYY, HH:mm"},{component:"TEXT",value:"Asia Pacific"},{component:"TEXT",value:"Premium customer"}],[{component:"TEXT",value:"pay_MwFS4eJ7lY1xyz",copyable:!0},{component:"TEXT",value:"Bob Smith"},{component:"TEXT",value:"bob.smith@company.org",copyable:!0},{component:"TEXT",value:"+1 555 123 4567"},{component:"BADGE",value:"Processing",color:"notice"},{component:"AMOUNT",value:7500,currency:"USD"},{component:"TEXT",value:"USD"},{component:"TEXT",value:"Debit Card"},{component:"DATE",value:"2024-01-14T09:15:00Z",dateFormat:"DD MMM YYYY, HH:mm"},{component:"TEXT",value:"North America"},{component:"TEXT",value:"First-time buyer"}],[{component:"TEXT",value:"pay_LvER3dI6kX0def",copyable:!0},{component:"TEXT",value:"Charlie Brown"},{component:"TEXT",value:"charlie.b@email.net",copyable:!0},{component:"TEXT",value:"+60 12 345 6789"},{component:"BADGE",value:"Failed",color:"negative"},{component:"AMOUNT",value:25e3,currency:"MYR"},{component:"TEXT",value:"MYR"},{component:"TEXT",value:"Bank Transfer"},{component:"DATE",value:"2024-01-13T16:45:00Z",dateFormat:"DD MMM YYYY, HH:mm"},{component:"TEXT",value:"Southeast Asia"},{component:"TEXT",value:"Insufficient funds"}],[{component:"TEXT",value:"pay_KuDQ2cH5jW9ghi",copyable:!0},{component:"TEXT",value:"Diana Ross"},{component:"TEXT",value:"diana.ross@music.com",copyable:!0},{component:"TEXT",value:"+44 20 7946 0958"},{component:"BADGE",value:"Refunded",color:"information"},{component:"AMOUNT",value:15e4,currency:"INR"},{component:"TEXT",value:"INR"},{component:"TEXT",value:"UPI"},{component:"DATE",value:"2024-01-12T11:20:00Z",dateFormat:"DD MMM YYYY, HH:mm"},{component:"TEXT",value:"Europe"},{component:"TEXT",value:"Customer requested refund"}]]}]},ln={components:[{component:"TEXT",content:"## Simple Table"},{component:"TEXT",content:"A basic table with minimal columns that fits within the viewport."},{component:"TABLE",headers:["Name","Role","Status"],rowActions:Y,rows:[[{component:"TEXT",value:"John Doe"},{component:"TEXT",value:"Engineer"},{component:"BADGE",value:"Active",color:"positive"}],[{component:"TEXT",value:"Jane Smith"},{component:"TEXT",value:"Designer"},{component:"BADGE",value:"Active",color:"positive"}],[{component:"TEXT",value:"Bob Wilson"},{component:"TEXT",value:"Manager"},{component:"BADGE",value:"Away",color:"notice"}]]}]},un={components:[{component:"TEXT",content:"## Invoice Items Table"},{component:"TEXT",content:"A table showing invoice line items with amounts and quantities."},{component:"TABLE",headers:["Item","Description","Qty","Unit Price","Total"],rowActions:Y,rows:[[{component:"TEXT",value:"SKU-001"},{component:"TEXT",value:"Premium Widget Pro"},{component:"TEXT",value:"5"},{component:"AMOUNT",value:2500,currency:"INR"},{component:"AMOUNT",value:12500,currency:"INR"}],[{component:"TEXT",value:"SKU-002"},{component:"TEXT",value:"Standard Gadget"},{component:"TEXT",value:"10"},{component:"AMOUNT",value:1e3,currency:"INR"},{component:"AMOUNT",value:1e4,currency:"INR"}],[{component:"TEXT",value:"SKU-003"},{component:"TEXT",value:"Service Fee"},{component:"TEXT",value:"1"},{component:"AMOUNT",value:500,currency:"INR"},{component:"AMOUNT",value:500,currency:"INR"}]]}]},pn={components:[{component:"TEXT",content:"## Settlement Report"},{component:"TEXT",content:"Settlement details with UTR numbers and bank information."},{component:"TABLE",headers:["Settlement ID","UTR","Bank Account","Amount","Fee","Net Amount","Date","Status"],rowActions:Y,rows:[[{component:"TEXT",value:"setl_ABC123XYZ",copyable:!0},{component:"TEXT",value:"UTIB0002345678901234",copyable:!0},{component:"TEXT",value:"HDFC ****4521"},{component:"AMOUNT",value:1e5,currency:"INR"},{component:"AMOUNT",value:236,currency:"INR"},{component:"AMOUNT",value:99764,currency:"INR"},{component:"DATE",value:"2024-01-15T10:00:00Z",dateFormat:"DD MMM YYYY"},{component:"BADGE",value:"Processed",color:"positive"}],[{component:"TEXT",value:"setl_DEF456UVW",copyable:!0},{component:"TEXT",value:"UTIB0009876543210987",copyable:!0},{component:"TEXT",value:"HDFC ****4521"},{component:"AMOUNT",value:25e4,currency:"INR"},{component:"AMOUNT",value:590,currency:"INR"},{component:"AMOUNT",value:249410,currency:"INR"},{component:"DATE",value:"2024-01-14T10:00:00Z",dateFormat:"DD MMM YYYY"},{component:"BADGE",value:"Processed",color:"positive"}],[{component:"TEXT",value:"setl_GHI789RST",copyable:!0},{component:"TEXT",value:"UTIB0001122334455667",copyable:!0},{component:"TEXT",value:"ICICI ****8832"},{component:"AMOUNT",value:75e3,currency:"INR"},{component:"AMOUNT",value:177,currency:"INR"},{component:"AMOUNT",value:74823,currency:"INR"},{component:"DATE",value:"2024-01-13T10:00:00Z",dateFormat:"DD MMM YYYY"},{component:"BADGE",value:"Pending",color:"notice"}]]}]},se={components:[{component:"TEXT",content:"# Table Examples"},{component:"TEXT",content:"This page showcases various table configurations - from simple tables that fit within the viewport to wide tables that require horizontal scrolling."},...ln.components,{component:"SPACER",size:"large"},...un.components,{component:"SPACER",size:"large"},...pn.components,{component:"SPACER",size:"large"},...sn.components]},mn=()=>{const n=JSON.stringify(se,null,2),e=n.length,[o,m]=O.useState(e),T=O.useRef(se.components),f=n.slice(0,o);let i=T.current;try{const u=Ce(f),l=JSON.parse(u);l.components&&Array.isArray(l.components)&&(T.current=l.components,i=l.components)}catch{}return c.jsxs(h,{children:[c.jsx(h,{maxWidth:"900px",children:c.jsx(_,{children:i&&i.length>0?c.jsx(X,{isAnimating:!1,animateOptions:{duration:300,sep:"word"},components:i}):c.jsx(h,{padding:"spacing.5",children:c.jsx(D,{color:"surface.text.gray.muted",children:"Move the slider to start rendering components from the JSON schema..."})})})}),c.jsx(h,{position:"fixed",bottom:"spacing.5",left:"spacing.0",right:"spacing.0",display:"flex",justifyContent:"center",zIndex:1e3,children:c.jsxs(h,{width:"400px",padding:"spacing.5",backgroundColor:"surface.background.gray.intense",borderWidth:"thin",borderColor:"surface.border.gray.muted",borderRadius:"medium",elevation:"highRaised",children:[c.jsxs(D,{size:"medium",weight:"semibold",marginBottom:"spacing.2",children:["JSON Progress: ",o.toLocaleString()," / ",e.toLocaleString()," ","characters (",Math.round(o/e*100),"%)"]}),c.jsx("input",{type:"range",min:0,max:e,value:o,onChange:u=>m(Number(u.target.value)),style:{width:"100%",cursor:"pointer"}})]})})]})},j=mn.bind({}),dn={components:[{component:"CARD",title:"Payment Link Created",description:"Your new payment link is ready",children:[{component:"INFO_GROUP",items:[{key:{children:"Amount"},value:{children:{component:"AMOUNT",value:100,currency:"INR"}}},{key:{children:"Status"},value:{children:{component:"BADGE",text:"Created",color:"positive"}}},{key:{children:"Link ID"},value:{children:"plink_SP2rJtPRhJ5gZu"}}]}]},{component:"TABLE",headers:["Transaction ID","Customer","Status","Amount"],rows:[[{component:"TEXT",value:"pay_NxGT5fK8mZ2abc",copyable:!0},{component:"TEXT",value:"alice.johnson@example.com"},{component:"BADGE",value:"Captured",color:"positive"},{component:"AMOUNT",value:1200,currency:"INR"}],[{component:"TEXT",value:"pay_MwFS4eJ7lY1xyz",copyable:!0},{component:"TEXT",value:"bob.smith@company.org"},{component:"BADGE",value:"Refunded",color:"information"},{component:"AMOUNT",value:850,currency:"INR"}]]}]},hn=()=>{const[n,e]=O.useState(""),[o,m]=O.useState(!1),i={CARD:({componentRef:u})=>c.jsx(Q,{variant:"button",icon:xe,size:"medium",onClick:()=>{const l=u.current;e(l?`${l.tagName.toLowerCase()} (${l.offsetWidth}px wide)`:"no node")},children:"Download as PNG"}),TABLE:({data:u})=>c.jsx(Q,{variant:"button",icon:je,size:"medium",onClick:()=>{var M;const l=(u.headers??[]).join(","),B=(u.rows??[]).map(y=>y.map(g=>String("value"in g?g.value:g.text??"")).join(",")).join(`
`);(M=navigator.clipboard)==null||M.writeText(`${l}
${B}`),m(!0),setTimeout(()=>m(!1),2e3)},children:o?"Copied!":"Copy as CSV"})};return c.jsxs(h,{maxWidth:"900px",children:[c.jsx(_,{config:{componentActions:i},children:c.jsx(X,{components:dn.components})}),n?c.jsx(h,{marginTop:"spacing.4",children:c.jsxs(D,{size:"small",color:"surface.text.gray.muted",children:["CARD action read componentRef.current → ",n]})}):null]})},x=hn.bind({});var le,ue,pe;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`(): JSX.Element => {
  const fullJSONString = JSON.stringify(schema, null, 2);
  const totalJSONLength = fullJSONString.length;
  const [jsonPosition, setJsonPosition] = useState(7200);
  const lastValidComponentsRef = useRef(schema.components);

  // Try to parse the partial JSON and update last valid components if successful
  const partialJSONString = fullJSONString.slice(0, jsonPosition);
  let componentsToRender = lastValidComponentsRef.current;
  try {
    // Try to repair and parse the incomplete JSON using jsonrepair
    const repairedJSON = jsonrepair(partialJSONString);
    const partialSchema = JSON.parse(repairedJSON);
    // If parsing succeeds and we have components, update the ref and use them
    if (partialSchema.components && Array.isArray(partialSchema.components)) {
      lastValidComponentsRef.current = partialSchema.components;
      componentsToRender = partialSchema.components;
    }
  } catch {
    // If parsing fails, use the last valid components from ref
  }
  return <Box>
      <GenUIProvider>
        {componentsToRender && componentsToRender.length > 0 ? <GenUISchemaRenderer isAnimating={false} animateOptions={{
        duration: 300,
        sep: 'word'
      }} components={componentsToRender} /> : <Box padding="spacing.5">
            <Text color="surface.text.gray.muted">
              Move the slider to start rendering components from the JSON schema...
            </Text>
          </Box>}
      </GenUIProvider>
      <Box position="fixed" bottom="spacing.5" left="spacing.0" right="spacing.0" display="flex" justifyContent="center" zIndex={1000}>
        <Box width="400px" padding="spacing.5" backgroundColor="surface.background.gray.intense" borderWidth="thin" borderColor="surface.border.gray.muted" borderRadius="medium" elevation="highRaised">
          <Text size="medium" weight="semibold" marginBottom="spacing.2">
            JSON Progress: {jsonPosition.toLocaleString()} / {totalJSONLength.toLocaleString()}{' '}
            characters ({Math.round(jsonPosition / totalJSONLength * 100)}%)
          </Text>
          <input type="range" min={0} max={totalJSONLength} value={jsonPosition} onChange={e => setJsonPosition(Number(e.target.value))} style={{
          width: '100%',
          cursor: 'pointer'
        }} />
        </Box>
      </Box>
    </Box>;
}`,...(pe=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,de,he;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`({
  content
}): JSX.Element => {
  return <GenUIProvider>
      <GenUISchemaRenderer isAnimating={false} components={[{
      component: 'TEXT',
      content
    }]} />
    </GenUIProvider>;
}`,...(he=(de=w.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};var Te,fe,ge;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:`(): JSX.Element => {
  const fullJSONString = JSON.stringify(tableExamplesSchema, null, 2);
  const totalJSONLength = fullJSONString.length;
  const [jsonPosition, setJsonPosition] = useState(totalJSONLength);
  const lastValidComponentsRef = useRef(tableExamplesSchema.components);
  const partialJSONString = fullJSONString.slice(0, jsonPosition);
  let componentsToRender = lastValidComponentsRef.current;
  try {
    const repairedJSON = jsonrepair(partialJSONString);
    const partialSchema = JSON.parse(repairedJSON);
    if (partialSchema.components && Array.isArray(partialSchema.components)) {
      lastValidComponentsRef.current = partialSchema.components;
      componentsToRender = partialSchema.components;
    }
  } catch {
    // If parsing fails, use the last valid components from ref
  }
  return <Box>
      <Box maxWidth="900px">
        <GenUIProvider>
          {componentsToRender && componentsToRender.length > 0 ? <GenUISchemaRenderer isAnimating={false} animateOptions={{
          duration: 300,
          sep: 'word'
        }} components={componentsToRender} /> : <Box padding="spacing.5">
              <Text color="surface.text.gray.muted">
                Move the slider to start rendering components from the JSON schema...
              </Text>
            </Box>}
        </GenUIProvider>
      </Box>
      <Box position="fixed" bottom="spacing.5" left="spacing.0" right="spacing.0" display="flex" justifyContent="center" zIndex={1000}>
        <Box width="400px" padding="spacing.5" backgroundColor="surface.background.gray.intense" borderWidth="thin" borderColor="surface.border.gray.muted" borderRadius="medium" elevation="highRaised">
          <Text size="medium" weight="semibold" marginBottom="spacing.2">
            JSON Progress: {jsonPosition.toLocaleString()} / {totalJSONLength.toLocaleString()}{' '}
            characters ({Math.round(jsonPosition / totalJSONLength * 100)}%)
          </Text>
          <input type="range" min={0} max={totalJSONLength} value={jsonPosition} onChange={e => setJsonPosition(Number(e.target.value))} style={{
          width: '100%',
          cursor: 'pointer'
        }} />
        </Box>
      </Box>
    </Box>;
}`,...(ge=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var ve,ye,Se;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:`(): JSX.Element => {
  const [downloadedNodeTag, setDownloadedNodeTag] = useState<string>('');
  const [copied, setCopied] = useState(false);

  // CARD action slot: reads the component's DOM node via componentRef (for PNG capture, etc.)
  const cardActions: GenUIActionSlotRenderer = ({
    componentRef
  }) => <Link variant="button" icon={DownloadIcon} size="medium" onClick={() => {
    const node = componentRef.current;
    setDownloadedNodeTag(node ? \`\${node.tagName.toLowerCase()} (\${node.offsetWidth}px wide)\` : 'no node');
  }}>
      Download as PNG
    </Link>;

  // TABLE action slot: reads the component's schema (rows/headers) via data (for CSV export, etc.)
  const tableActions: GenUIActionSlotRenderer<TableComponent> = ({
    data
  }) => <Link variant="button" icon={CopyIcon} size="medium" onClick={() => {
    const headers = (data.headers ?? []).join(',');
    const rows = (data.rows ?? []).map(row =>
    // LINK cells carry \`text\`; all other cell types carry \`value\`
    row.map(cell => String('value' in cell ? cell.value : cell.text ?? '')).join(',')).join('\\n');
    void navigator.clipboard?.writeText(\`\${headers}\\n\${rows}\`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }}>
      {copied ? 'Copied!' : 'Copy as CSV'}
    </Link>;
  const componentActions: GenUIComponentActionsRegistry = {
    CARD: cardActions,
    TABLE: tableActions
  };
  return <Box maxWidth="900px">
      <GenUIProvider config={{
      componentActions
    }}>
        {/* Cast needed: the demo schema is a plain object literal — in real usage the schema
            comes from the LLM as JSON and is validated/typed at the consumer boundary */}
        <GenUISchemaRenderer components={componentActionsSchema.components as unknown as GenUIComponent[]} />
      </GenUIProvider>
      {downloadedNodeTag ? <Box marginTop="spacing.4">
          <Text size="small" color="surface.text.gray.muted">
            CARD action read componentRef.current → {downloadedNodeTag}
          </Text>
        </Box> : null}
    </Box>;
}`,...(Se=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};const yn=["SimpleGenUI","TextString","TableExamples","WithComponentActions"];export{k as SimpleGenUI,j as TableExamples,w as TextString,x as WithComponentActions,yn as __namedExportsOrder,vn as default};
