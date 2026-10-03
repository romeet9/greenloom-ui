import{at as a,j as e,B as l,au as c,aS as s,aq as r,ar as t,ad as m,n as d,b9 as $,ax as g,eR as ut,je as bt,jg as N,ba as dt,as as S,T as mt,ac as At,cT as J,b1 as G,jd as K,C as jt,H as q,a5 as yt,F as St}from"./iframe-C1qQ09LF.js";const Lt={title:"Components/Dropdown/With Select",component:a,parameters:{viewMode:"story",options:{showPanel:!1},previewTabs:{"storybook/docs/panel":{hidden:!0}},chromatic:{disableSnapshot:!0}}},gt=({selectionType:i="single"})=>e.jsx(l,{minHeight:"300px",padding:"spacing.5",children:e.jsxs(a,{selectionType:i,children:[e.jsx(c,{label:"City",placeholder:"Select your City",name:"action",onChange:({name:n,values:o})=>{console.log({name:n,values:o})}}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Bangalore",value:"bangalore"}),e.jsx(t,{title:"Mysore",value:"mysore"})]})})]})}),w=gt.bind({}),h=gt.bind({});h.args={selectionType:"multiple"};h.parameters={docs:{description:{story:'Add `selectionType="multiple"` to `<Dropdown />` component to make it multi-selectable'}}};const I=()=>{const[i,n]=m.useState(!1);return e.jsx(l,{minHeight:"300px",padding:"spacing.5",children:e.jsxs(a,{isOpen:i,onOpenChange:n,children:[e.jsx(c,{label:"Select Action",onChange:({name:o,values:u})=>{console.log({name:o,values:u})}}),e.jsxs(s,{children:[e.jsx(N,{title:"Header Title"}),e.jsxs(r,{children:[e.jsx(t,{leading:e.jsx(g,{icon:ut}),trailing:e.jsx(g,{icon:At}),title:"Home",description:"This is Home",value:"home"}),e.jsxs(S,{title:"Options",children:[e.jsx(t,{leading:e.jsx(g,{icon:J}),title:"Settings",value:"settings"}),e.jsx(t,{leading:e.jsx(g,{icon:G}),title:"Download",value:"download"})]}),e.jsx(t,{leading:e.jsx(K,{src:"https://flagcdn.com/w20/in.png",alt:"india"}),title:"Pricing",value:"pricing"}),e.jsxs(S,{title:"More Options",children:[e.jsx(t,{leading:e.jsx(g,{icon:J}),title:"Settings",value:"settings-2"}),e.jsx(t,{leading:e.jsx(g,{icon:G}),title:"Download",value:"download-2"})]}),e.jsxs(S,{title:"Even More Options",children:[e.jsx(t,{leading:e.jsx(g,{icon:J}),title:"Settings",value:"settings-3"}),e.jsx(t,{leading:e.jsx(g,{icon:G}),title:"Download",value:"download-3"})]}),e.jsx(t,{leading:e.jsx(K,{src:"https://flagcdn.com/w20/in.png",alt:"india"}),title:"Pricing",value:"pricing-2"}),e.jsx(t,{leading:e.jsx(K,{src:"https://flagcdn.com/w20/in.png",alt:"india"}),title:"Pricing",value:"pricing-3"})]}),e.jsx(dt,{children:e.jsx(d,{isFullWidth:!0,onClick:()=>{n(!1)},children:"Close"})})]})]})})},D=()=>{const[i,n]=m.useState([]);return e.jsxs(l,{minHeight:"300px",padding:"spacing.5",children:[e.jsx(l,{paddingY:"spacing.4",display:"flex",gap:"spacing.4",children:i.map(o=>e.jsx(St,{children:o},o))}),e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{label:"City",placeholder:"Select your City",name:"action",onChange:({values:o})=>{n(o)}}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Bangalore",value:"bangalore"}),e.jsx(t,{title:"Mysore",value:"mysore"})]})})]})]})},C=()=>{const[i,n]=m.useState("");return e.jsx(l,{minHeight:"300px",padding:"spacing.5",children:e.jsxs("form",{onSubmit:o=>{o.preventDefault();const u=new FormData(o.currentTarget),p={};for(const[x,L]of u)p[x]=String(L);n(JSON.stringify(p))},children:[e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{label:"Cities",placeholder:"Select Cities",name:"cities"}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Bangalore",value:"bangalore"}),e.jsx(t,{title:"Mysore",value:"mysore"})]})})]}),e.jsx(d,{marginTop:"spacing.8",marginBottom:"spacing.4",type:"submit",children:"Submit"}),e.jsxs(mt,{children:["Form Submitted with ",i]})]})})},f=()=>{const[i,n]=m.useState("none");return e.jsxs(l,{minHeight:"300px",padding:"spacing.5",children:[e.jsx(yt,{color:"information",description:"Select more than 2 options to see error state",isFullWidth:!0,isDismissible:!1,marginBottom:"spacing.4"}),e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{name:"design-systems",label:"Top 2 design systems",validationState:i,errorText:"You selected more than 2 options",successText:"Yay! Nice choice",helpText:"Select only two",placeholder:"Select Multiple Options",onChange:({values:o})=>{o.length===2?n("success"):o.length>2?n("error"):n("none")}}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Blade",value:"blade"}),e.jsx(t,{title:"Primer",value:"primer"}),e.jsx(t,{title:"Geist",description:"by Vercel",value:"geist"}),e.jsx(t,{title:"Airbnb Design",value:"airbnb"})]})})]})]})},B=()=>{const i=m.useRef(null);return e.jsxs(l,{minHeight:"300px",padding:"spacing.5",children:[e.jsxs(a,{children:[e.jsx(c,{ref:i,label:"City",placeholder:"Select your City",name:"city"}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Bangalore",value:"bangalore"}),e.jsx(t,{title:"Mysore",value:"mysore"})]})})]}),e.jsx(l,{paddingTop:"spacing.3",children:e.jsx(d,{onClick:()=>{var n;(n=i.current)==null||n.focus()},children:"Click to focus"})}),e.jsx(l,{paddingTop:"spacing.3",children:e.jsxs(mt,{children:["We are using ",e.jsx(jt,{size:"medium",children:"selectRef.current.focus()"})," here to focus on input"]})})]})},T=()=>e.jsxs(l,{children:[e.jsx(l,{padding:"spacing.5",backgroundColor:"surface.background.gray.moderate",width:"100%",minHeight:"100px",overflow:"scroll",children:e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{label:"Select fruits",labelPosition:"left"}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Apples",value:"Apples"}),e.jsx(t,{title:"Appricots",value:"Appricots"})]})})]})}),e.jsx(l,{padding:"spacing.5",backgroundColor:"surface.background.gray.moderate",width:"100%",position:"fixed",bottom:"spacing.0",minHeight:"100px",overflow:"scroll",children:e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{label:"Select fruits",labelPosition:"left"}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Apples",value:"Apples"}),e.jsx(t,{title:"Appricots",value:"Appricots"})]})})]})})]}),O=()=>e.jsxs(l,{display:"flex",flexDirection:"row",minHeight:"300px",gap:"spacing.2",padding:"spacing.5",children:[e.jsx(l,{flex:1,children:e.jsxs(a,{children:[e.jsx(c,{label:"Top 2 design systems"}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Primer",value:"primer"}),e.jsx(t,{title:"Geist",description:"by Vercel",value:"geist"}),e.jsx(t,{title:"Airbnb Design",value:"airbnb"})]})})]})}),e.jsx(l,{flex:1,children:e.jsxs(a,{children:[e.jsx(c,{label:"Top 2 Languages"}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"HTML",value:"html"}),e.jsx(t,{title:"CSS",value:"css"}),e.jsx(t,{title:"JavaScript",value:"javascript"})]})})]})})]}),R=()=>{const[i,n]=m.useState();return e.jsxs(l,{minHeight:"300px",padding:"spacing.5",children:[e.jsx(d,{marginBottom:"spacing.4",onClick:()=>n("bangalore"),children:"Select Bangalore"}),e.jsx(d,{marginBottom:"spacing.4",marginLeft:"spacing.4",variant:"secondary",onClick:()=>n(""),children:"Clear Selection"}),e.jsxs(a,{selectionType:"single",children:[e.jsx(c,{label:"Select City",value:i,onChange:o=>{o&&(n(o.values[0]),console.log("onChange triggered"))}}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Bangalore",value:"bangalore"})]})})]})]})},M=()=>{const[i,n]=m.useState([]);return e.jsxs(l,{minHeight:"300px",padding:"spacing.5",children:[e.jsx(d,{marginBottom:"spacing.4",onClick:()=>{i.includes("bangalore")||n([...i,"bangalore"])},children:"Select Bangalore"}),e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{label:"Select City",value:i,onChange:o=>{o&&(n(o.values),console.log("onChange triggered"))}}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Bangalore",value:"bangalore"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Chennai",value:"chennai"})]})})]})]})},k=()=>e.jsxs(l,{minHeight:"400px",padding:"spacing.5",children:[e.jsx(q,{size:"medium",marginBottom:"spacing.3",children:"Medium:"}),e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{label:"City",placeholder:"Select your City",name:"action",onChange:({name:i,values:n})=>{console.log({name:i,values:n})}}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Bangalore",value:"bangalore"}),e.jsx(t,{title:"Mysore",value:"mysore"})]})})]}),e.jsx(q,{size:"medium",marginBottom:"spacing.3",marginTop:"spacing.5",children:"Large:"}),e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{label:"City",placeholder:"Select your City",name:"action",size:"large",onChange:({name:i,values:n})=>{console.log({name:i,values:n})}}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Bangalore",value:"bangalore"}),e.jsx(t,{title:"Mysore",value:"mysore"})]})})]})]}),v=()=>{const[i,n]=m.useState([]);return e.jsxs(e.Fragment,{children:[e.jsx(d,{marginBottom:"spacing.4",onClick:()=>{i.includes("bangalore")||n([...i,"bangalore"])},children:"Select Bangalore"}),e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{label:"Select City",value:i,onChange:o=>{o&&(n(o.values),console.log("onChange triggered"))}}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Bangalore",value:"bangalore"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Chennai",value:"chennai"})]})})]})]})};v.parameters={chromatic:{disableSnapshot:!1}};const H=()=>e.jsxs(l,{padding:"spacing.5",maxWidth:"300px",children:[e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{label:"Select City",maxRows:"single"}),e.jsxs(s,{width:"500px",children:[e.jsx(N,{title:"Header Title",subtitle:"Header subtitle"}),e.jsxs(r,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Navi Mumbai",value:"navi-mumbai"}),e.jsx(t,{title:"Farrukhabad Fatehgarh",value:"farrukhabad-fatehgarh"}),e.jsx(t,{title:"Bangalore",value:"bangalore"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Chennai",value:"chennai"}),e.jsx(t,{title:"Hyderabad",value:"hyderabad"}),e.jsx(t,{title:"Varanasi",value:"varanasi"}),e.jsx(t,{title:"Mysore",value:"mysore"}),e.jsx(t,{title:"New York",value:"new-york"}),e.jsx(t,{title:"Indore",value:"indore"}),e.jsx(t,{title:"Kolhapur",value:"kolhapur"}),e.jsx(t,{title:"Ooty",value:"ooty"})]}),e.jsx(dt,{children:e.jsx(d,{isFullWidth:!0,onClick:()=>console.log("Footer Clicked"),children:"Apply"})})]})]}),e.jsx(d,{marginTop:"spacing.4",children:"Outer Button"})]});v.parameters={chromatic:{disableSnapshot:!1}};const b=()=>{const[i,n]=m.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(d,{marginBottom:"spacing.4",onClick:()=>{n("bangalore")},children:"Select Bangalore"}),e.jsx(d,{variant:"secondary",marginBottom:"spacing.4",marginLeft:"spacing.4",onClick:()=>{n("")},children:"Clear Selection"}),e.jsxs(a,{children:[e.jsx(c,{label:"Select City",value:i,onChange:o=>{o&&(n(o.values[0]),console.log("onChange triggered"))}}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Bangalore",value:"bangalore"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Chennai",value:"chennai"})]})})]})]})};b.parameters={chromatic:{disableSnapshot:!1}};const P=()=>e.jsx(l,{padding:"spacing.5",backgroundColor:"surface.background.gray.moderate",width:"100%",minHeight:"100px",overflow:"scroll",children:e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{label:"Select fruits",labelPosition:"left"}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Apples",value:"Apples"}),e.jsx(t,{title:"Appricots",value:"Appricots"})]})})]})}),W=()=>{const[i,n]=m.useState(!1);return e.jsxs(l,{padding:"spacing.5",maxWidth:"400px",children:[e.jsx(d,{marginBottom:"spacing.4",isFullWidth:!0,onClick:()=>n(!i),children:"Toggle Disabled State"}),e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{label:"Select fruits",isDisabled:i}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Apples",value:"Apples"}),e.jsx(t,{title:"Appricots",value:"Appricots"}),e.jsx(t,{title:"Cherries",value:"Cherries"}),e.jsx(t,{title:"Crab apples",value:"Crab apples"}),e.jsx(t,{title:"Jambolan",value:"Jambolan"})]})})]})]})},F=()=>e.jsxs(l,{children:[e.jsx(l,{padding:"spacing.5",backgroundColor:"surface.background.gray.moderate",width:"100%",minHeight:"100px",overflow:"scroll",children:e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{label:"Select fruits",labelPosition:"left"}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Apples",value:"Apples"}),e.jsx(t,{title:"Appricots",value:"Appricots"})]})})]})}),e.jsx(l,{padding:"spacing.5",backgroundColor:"surface.background.gray.moderate",width:"100%",position:"fixed",bottom:"spacing.0",minHeight:"100px",overflow:"scroll",children:e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{label:"Select fruits",labelPosition:"left"}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Apples",value:"Apples"}),e.jsx(t,{title:"Appricots",value:"Appricots"})]})})]})})]}),A=()=>e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{label:"Select fruits"}),e.jsx(s,{children:e.jsxs(r,{isVirtualized:!0,children:[e.jsx(t,{title:"Apples",value:"Apples"}),e.jsx(t,{title:"Appricots",value:"Appricots"}),e.jsx(t,{title:"Abc",value:"Abc"}),e.jsx(t,{title:"Def",value:"Def"}),e.jsxs(S,{title:"Recent 1",children:[e.jsx(t,{title:"Avocados",value:"Avocados"}),e.jsx(t,{title:"Bananas",value:"Bananas"}),e.jsx(t,{title:"Blueberries",value:"Blueberries"})]}),e.jsxs(S,{title:"Recent 2",children:[e.jsx(t,{title:"Cherries",value:"Cherries"}),e.jsx(t,{title:"Crab apples",value:"Crab apples"}),e.jsx(t,{title:"Jambolan",value:"Jambolan"})]})]})})]});A.parameters={chromatic:{disableSnapshot:!1}};const E=()=>e.jsxs(a,{selectionType:"multiple",children:[e.jsx(c,{label:"Select fruits"}),e.jsxs(s,{children:[e.jsx(N,{children:e.jsx($,{label:"Search Fruits"})}),e.jsxs(r,{children:[e.jsx(t,{title:"Apples",value:"Apples"}),e.jsx(t,{title:"Appricots",value:"Appricots"}),e.jsx(t,{title:"Cherries",value:"Cherries"}),e.jsx(t,{title:"Crab apples",value:"Crab apples"}),e.jsx(t,{title:"Jambolan",value:"Jambolan"})]})]})]}),j=()=>{const i=["Apples","Apricots",{name:"Avocados",description:"Avocados description"},"Bananas","Boysenberries","Blueberries","Bing Cherry","Cherries","Cantaloupe","Crab apples",{name:"Clementine",description:"Clementine description"},"Cucumbers","Damson plum","Dinosaur Eggs","Dates","Dewberries","Dragon","Elderberry","Eggfruit","Evergreen","Huckleberry","Entawak","Fig","Farkleberry","Finger Lime","Grapefruit","Grapes","Gooseberries","Guava","Honeydew melon","Hackberry","Honeycrisp Apples","Indian Prune","Indonesian Lime","Imbe","Indian Fig","Jackfruit","Java Apple","Jambolan",{name:"Kaffir Lime",description:"Kaffir description"},"Kumquat","Lime","Longan","Lychee","Loquat","Mango","Mandarin","Orange","Mulberry"];return e.jsxs(a,{selectionType:"multiple",children:[e.jsx($,{label:"Select fruits"}),e.jsx(s,{children:e.jsx(r,{isVirtualized:!0,children:i.map(n=>typeof n=="string"?e.jsx(t,{title:n,value:n},n):e.jsx(t,{trailing:e.jsx(bt,{children:"⌘ + S"}),leading:e.jsx(g,{icon:ut}),title:n.name,value:n.name},n.name))})})]})},V=()=>{function i(u){const p="abcdefghijklmnopqrstuvwxyz";return Array.from({length:u},()=>p[Math.floor(Math.random()*p.length)]).join("")}function n(u){const p={};for(let x=0;x<u;x++){const L=`${i(Math.floor(Math.random()*5)+5)}ville-1`,xt=`${i(Math.floor(Math.random()*7)+3)}land-2`,ht="GibberishLand",_=[],vt=Math.floor(Math.random()*10);for(let z=0;z<vt;z++){const Y=`Area-${L}-${z}`;_.push({value:`${ht.toLowerCase()}-${xt.toLowerCase()}-${L.toLowerCase()}-${Y.toLowerCase()}`,label:Y})}p[L]=_}return p}const o=n(20);return e.jsxs(l,{padding:"8px",children:[e.jsx(l,{children:" Virtualized with ActionListSection "}),e.jsxs(a,{selectionType:"multiple",children:[e.jsx($,{label:"Hierarchy Level",placeholder:"Select your location",name:"action",maxRows:"multiple"}),e.jsx(s,{children:e.jsx(r,{isVirtualized:!0,children:Object.keys(o).map(u=>{const p=o[u];return e.jsx(S,{title:u,children:p.map(x=>e.jsx(t,{title:x.label,value:x.value},x.value))},u)})})})]}),e.jsx(l,{children:" Virtualized"}),e.jsxs(a,{selectionType:"multiple",children:[e.jsx($,{label:"Hierarchy Level",placeholder:"Select your location",name:"action",maxRows:"multiple"}),e.jsx(s,{children:e.jsx(r,{isVirtualized:!0,children:[...Array(500)].map((u,p)=>e.jsx(t,{title:`Item ${p}`,value:`Item ${p}`},`Item ${p}`))})})]}),e.jsx(l,{children:" Non Virtualized"}),e.jsxs(a,{selectionType:"single",children:[e.jsx($,{label:"Hierarchy Level",placeholder:"Select your location",name:"action",maxRows:"multiple"}),e.jsx(s,{children:e.jsx(r,{children:[...Array(300)].map((u,p)=>e.jsx(t,{title:`Item ${p}`,value:`Item ${p}`},`Item ${p}`))})})]})]})};j.parameters={chromatic:{disableSnapshot:!1}};const y=()=>{const[i,n]=m.useState("mumbai");return e.jsxs(a,{selectionType:"single",children:[e.jsx(c,{label:"Select City",value:i,onChange:o=>{o&&(n(o.values[0]),console.log("onChange triggered"))}}),e.jsx(s,{children:e.jsxs(r,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Bangalore",value:"bangalore"})]})})]})};y.parameters={chromatic:{disableSnapshot:!1}};var U,Q,X;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`({
  selectionType = 'single'
}) => {
  return <Box minHeight="300px" padding="spacing.5">
      <Dropdown selectionType={selectionType}>
        <SelectInput label="City" placeholder="Select your City" name="action" onChange={({
        name,
        values
      }) => {
        console.log({
          name,
          values
        });
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bangalore" value="bangalore" />
            <ActionListItem title="Mysore" value="mysore" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`({
  selectionType = 'single'
}) => {
  return <Box minHeight="300px" padding="spacing.5">
      <Dropdown selectionType={selectionType}>
        <SelectInput label="City" placeholder="Select your City" name="action" onChange={({
        name,
        values
      }) => {
        console.log({
          name,
          values
        });
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bangalore" value="bangalore" />
            <ActionListItem title="Mysore" value="mysore" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ie,oe;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`(): React.ReactElement => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  return <Box minHeight="300px" padding="spacing.5">
      <Dropdown isOpen={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <SelectInput label="Select Action" onChange={({
        name,
        values
      }) => {
        console.log({
          name,
          values
        });
      }} />
        <DropdownOverlay>
          <DropdownHeader title="Header Title" />
          <ActionList>
            <ActionListItem leading={<ActionListItemIcon icon={HomeIcon} />} trailing={<ActionListItemIcon icon={ArrowRightIcon} />} title="Home" description="This is Home" value="home" />
            <ActionListSection title="Options">
              <ActionListItem leading={<ActionListItemIcon icon={SettingsIcon} />} title="Settings" value="settings" />
              <ActionListItem leading={<ActionListItemIcon icon={DownloadIcon} />} title="Download" value="download" />
            </ActionListSection>
            <ActionListItem leading={<ActionListItemAsset src="https://flagcdn.com/w20/in.png" alt="india" />} title="Pricing" value="pricing" />
            <ActionListSection title="More Options">
              <ActionListItem leading={<ActionListItemIcon icon={SettingsIcon} />} title="Settings" value="settings-2" />
              <ActionListItem leading={<ActionListItemIcon icon={DownloadIcon} />} title="Download" value="download-2" />
            </ActionListSection>
            <ActionListSection title="Even More Options">
              <ActionListItem leading={<ActionListItemIcon icon={SettingsIcon} />} title="Settings" value="settings-3" />
              <ActionListItem leading={<ActionListItemIcon icon={DownloadIcon} />} title="Download" value="download-3" />
            </ActionListSection>
            <ActionListItem leading={<ActionListItemAsset src="https://flagcdn.com/w20/in.png" alt="india" />} title="Pricing" value="pricing-2" />
            <ActionListItem leading={<ActionListItemAsset src="https://flagcdn.com/w20/in.png" alt="india" />} title="Pricing" value="pricing-3" />
          </ActionList>
          <DropdownFooter>
            <Button isFullWidth onClick={() => {
            setIsDropdownOpen(false);
          }}>
              Close
            </Button>
          </DropdownFooter>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(oe=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ae,le,se;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`(): React.ReactElement => {
  const [currentSelections, setCurrentSelections] = React.useState<string[]>([]);
  return <Box minHeight="300px" padding="spacing.5">
      <Box paddingY="spacing.4" display="flex" gap="spacing.4">
        {currentSelections.map(currentSelection => <Badge key={currentSelection}>{currentSelection}</Badge>)}
      </Box>
      <Dropdown selectionType="multiple">
        <SelectInput label="City" placeholder="Select your City" name="action" onChange={({
        values
      }) => {
        setCurrentSelections(values);
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bangalore" value="bangalore" />
            <ActionListItem title="Mysore" value="mysore" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(se=(le=D.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var re,ce,pe;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`(): React.ReactElement => {
  const [submissionValues, setSubmissionValues] = React.useState('');
  return <Box minHeight="300px" padding="spacing.5">
      <form onSubmit={e => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const formData: Record<string, string> = {};
      for (const [name, value] of data) {
        formData[name] = String(value);
      }
      setSubmissionValues(JSON.stringify(formData));
    }}>
        <Dropdown selectionType="multiple">
          <SelectInput label="Cities" placeholder="Select Cities" name="cities" />
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Mumbai" value="mumbai" />
              <ActionListItem title="Pune" value="pune" />
              <ActionListItem title="Bangalore" value="bangalore" />
              <ActionListItem title="Mysore" value="mysore" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
        <Button marginTop="spacing.8" marginBottom="spacing.4" type="submit">
          Submit
        </Button>
        <Text>Form Submitted with {submissionValues}</Text>
      </form>
    </Box>;
}`,...(pe=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,de,me;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`(): React.ReactElement => {
  const [validationState, setValidationState] = React.useState<SelectInputProps['validationState']>('none');
  return <Box minHeight="300px" padding="spacing.5">
      <Alert color="information" description="Select more than 2 options to see error state" isFullWidth isDismissible={false} marginBottom="spacing.4" />
      <Dropdown selectionType="multiple">
        <SelectInput name="design-systems" label="Top 2 design systems" validationState={validationState} errorText="You selected more than 2 options" successText="Yay! Nice choice" helpText="Select only two" placeholder="Select Multiple Options" onChange={({
        values
      }) => {
        if (values.length === 2) {
          setValidationState('success');
        } else if (values.length > 2) {
          setValidationState('error');
        } else {
          setValidationState('none');
        }
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Blade" value="blade" />
            <ActionListItem title="Primer" value="primer" />
            <ActionListItem title="Geist" description="by Vercel" value="geist" />
            <ActionListItem title="Airbnb Design" value="airbnb" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(me=(de=f.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ge,xe,he;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`(): React.ReactElement => {
  const selectRef = React.useRef<BladeElementRef>(null);
  return <Box minHeight="300px" padding="spacing.5">
      <Dropdown>
        <SelectInput ref={selectRef} label="City" placeholder="Select your City" name="city" />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bangalore" value="bangalore" />
            <ActionListItem title="Mysore" value="mysore" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
      <Box paddingTop="spacing.3">
        <Button onClick={() => {
        selectRef.current?.focus();
      }}>
          Click to focus
        </Button>
      </Box>
      <Box paddingTop="spacing.3">
        <Text>
          We are using <Code size="medium">selectRef.current.focus()</Code> here to focus on input
        </Text>
      </Box>
    </Box>;
}`,...(he=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var ve,be,Ae;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box>
      <Box padding="spacing.5" backgroundColor="surface.background.gray.moderate" width="100%" minHeight="100px" overflow="scroll">
        <Dropdown selectionType="multiple">
          <SelectInput label="Select fruits" labelPosition="left" />
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Apples" value="Apples" />
              <ActionListItem title="Appricots" value="Appricots" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
      <Box padding="spacing.5" backgroundColor="surface.background.gray.moderate" width="100%" position="fixed" bottom="spacing.0" minHeight="100px" overflow="scroll">
        <Dropdown selectionType="multiple">
          <SelectInput label="Select fruits" labelPosition="left" />
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Apples" value="Apples" />
              <ActionListItem title="Appricots" value="Appricots" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
    </Box>;
}`,...(Ae=(be=T.parameters)==null?void 0:be.docs)==null?void 0:Ae.source}}};var je,ye,Se;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box display="flex" flexDirection="row" minHeight="300px" gap="spacing.2" padding="spacing.5">
      <Box flex={1}>
        <Dropdown>
          <SelectInput label="Top 2 design systems" />
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Primer" value="primer" />
              <ActionListItem title="Geist" description="by Vercel" value="geist" />
              <ActionListItem title="Airbnb Design" value="airbnb" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
      <Box flex={1}>
        <Dropdown>
          <SelectInput label="Top 2 Languages" />
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="HTML" value="html" />
              <ActionListItem title="CSS" value="css" />
              <ActionListItem title="JavaScript" value="javascript" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
    </Box>;
}`,...(Se=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var Le,we,Ie;R.parameters={...R.parameters,docs:{...(Le=R.parameters)==null?void 0:Le.docs,source:{originalSource:`(): React.ReactElement => {
  const [currentSelection, setCurrentSelection] = React.useState<undefined | string>();
  return <Box minHeight="300px" padding="spacing.5">
      <Button marginBottom="spacing.4" onClick={() => setCurrentSelection('bangalore')}>
        Select Bangalore
      </Button>
      <Button marginBottom="spacing.4" marginLeft="spacing.4" variant="secondary" onClick={() => setCurrentSelection('')}>
        Clear Selection
      </Button>
      <Dropdown selectionType="single">
        <SelectInput label="Select City" value={currentSelection} onChange={args => {
        if (args) {
          setCurrentSelection(args.values[0]);
          console.log('onChange triggered');
        }
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Bangalore" value="bangalore" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(Ie=(we=R.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var De,Ce,fe;M.parameters={...M.parameters,docs:{...(De=M.parameters)==null?void 0:De.docs,source:{originalSource:`(): React.ReactElement => {
  const [currentSelection, setCurrentSelection] = React.useState<string[]>([]);
  return <Box minHeight="300px" padding="spacing.5">
      <Button marginBottom="spacing.4" onClick={() => {
      if (!currentSelection.includes('bangalore')) {
        setCurrentSelection([...currentSelection, 'bangalore']);
      }
    }}>
        Select Bangalore
      </Button>
      <Dropdown selectionType="multiple">
        <SelectInput label="Select City" value={currentSelection} onChange={args => {
        if (args) {
          setCurrentSelection(args.values);
          console.log('onChange triggered');
        }
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Bangalore" value="bangalore" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Chennai" value="chennai" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(fe=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:fe.source}}};var Be,Te,Oe;k.parameters={...k.parameters,docs:{...(Be=k.parameters)==null?void 0:Be.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box minHeight="400px" padding="spacing.5">
      <Heading size="medium" marginBottom="spacing.3">
        Medium:
      </Heading>
      <Dropdown selectionType="multiple">
        <SelectInput label="City" placeholder="Select your City" name="action" onChange={({
        name,
        values
      }) => {
        console.log({
          name,
          values
        });
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bangalore" value="bangalore" />
            <ActionListItem title="Mysore" value="mysore" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
      <Heading size="medium" marginBottom="spacing.3" marginTop="spacing.5">
        Large:
      </Heading>
      <Dropdown selectionType="multiple">
        <SelectInput label="City" placeholder="Select your City" name="action" size="large" onChange={({
        name,
        values
      }) => {
        console.log({
          name,
          values
        });
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bangalore" value="bangalore" />
            <ActionListItem title="Mysore" value="mysore" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(Oe=(Te=k.parameters)==null?void 0:Te.docs)==null?void 0:Oe.source}}};var Re,Me,ke;v.parameters={...v.parameters,docs:{...(Re=v.parameters)==null?void 0:Re.docs,source:{originalSource:`(): React.ReactElement => {
  const [currentSelection, setCurrentSelection] = React.useState<string[]>([]);
  return <>
      <Button marginBottom="spacing.4" onClick={() => {
      if (!currentSelection.includes('bangalore')) {
        setCurrentSelection([...currentSelection, 'bangalore']);
      }
    }}>
        Select Bangalore
      </Button>
      <Dropdown selectionType="multiple">
        <SelectInput label="Select City" value={currentSelection} onChange={args => {
        if (args) {
          setCurrentSelection(args.values);
          console.log('onChange triggered');
        }
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Bangalore" value="bangalore" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Chennai" value="chennai" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </>;
}`,...(ke=(Me=v.parameters)==null?void 0:Me.docs)==null?void 0:ke.source}}};var He,Pe,We;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box padding="spacing.5" maxWidth="300px">
      <Dropdown selectionType="multiple">
        <SelectInput label="Select City" maxRows="single" />
        <DropdownOverlay width="500px">
          <DropdownHeader title="Header Title" subtitle="Header subtitle" />
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Navi Mumbai" value="navi-mumbai" />
            <ActionListItem title="Farrukhabad Fatehgarh" value="farrukhabad-fatehgarh" />
            <ActionListItem title="Bangalore" value="bangalore" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Chennai" value="chennai" />
            <ActionListItem title="Hyderabad" value="hyderabad" />
            <ActionListItem title="Varanasi" value="varanasi" />
            <ActionListItem title="Mysore" value="mysore" />
            <ActionListItem title="New York" value="new-york" />
            <ActionListItem title="Indore" value="indore" />
            <ActionListItem title="Kolhapur" value="kolhapur" />
            <ActionListItem title="Ooty" value="ooty" />
          </ActionList>
          <DropdownFooter>
            <Button isFullWidth onClick={() => console.log('Footer Clicked')}>
              Apply
            </Button>
          </DropdownFooter>
        </DropdownOverlay>
      </Dropdown>
      <Button marginTop="spacing.4">Outer Button</Button>
    </Box>;
}`,...(We=(Pe=H.parameters)==null?void 0:Pe.docs)==null?void 0:We.source}}};var Fe,Ee,Ve;b.parameters={...b.parameters,docs:{...(Fe=b.parameters)==null?void 0:Fe.docs,source:{originalSource:`(): React.ReactElement => {
  const [currentSelection, setCurrentSelection] = React.useState<string>('');
  return <>
      <Button marginBottom="spacing.4" onClick={() => {
      setCurrentSelection('bangalore');
    }}>
        Select Bangalore
      </Button>
      <Button variant="secondary" marginBottom="spacing.4" marginLeft="spacing.4" onClick={() => {
      setCurrentSelection('');
    }}>
        Clear Selection
      </Button>
      <Dropdown>
        <SelectInput label="Select City" value={currentSelection} onChange={args => {
        if (args) {
          setCurrentSelection(args.values[0]);
          console.log('onChange triggered');
        }
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Bangalore" value="bangalore" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Chennai" value="chennai" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </>;
}`,...(Ve=(Ee=b.parameters)==null?void 0:Ee.docs)==null?void 0:Ve.source}}};var $e,ze,Je;P.parameters={...P.parameters,docs:{...($e=P.parameters)==null?void 0:$e.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box padding="spacing.5" backgroundColor="surface.background.gray.moderate" width="100%" minHeight="100px" overflow="scroll">
      <Dropdown selectionType="multiple">
        <SelectInput label="Select fruits" labelPosition="left" />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Apples" value="Apples" />
            <ActionListItem title="Appricots" value="Appricots" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(Je=(ze=P.parameters)==null?void 0:ze.docs)==null?void 0:Je.source}}};var Ge,Ke,Ne;W.parameters={...W.parameters,docs:{...(Ge=W.parameters)==null?void 0:Ge.docs,source:{originalSource:`(): React.ReactElement => {
  const [isDisabled, setIsDisabled] = React.useState(false);
  return <Box padding="spacing.5" maxWidth="400px">
      <Button marginBottom="spacing.4" isFullWidth onClick={() => setIsDisabled(!isDisabled)}>
        Toggle Disabled State
      </Button>
      <Dropdown selectionType="multiple">
        <SelectInput label="Select fruits" isDisabled={isDisabled} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Apples" value="Apples" />
            <ActionListItem title="Appricots" value="Appricots" />
            <ActionListItem title="Cherries" value="Cherries" />
            <ActionListItem title="Crab apples" value="Crab apples" />
            <ActionListItem title="Jambolan" value="Jambolan" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(Ne=(Ke=W.parameters)==null?void 0:Ke.docs)==null?void 0:Ne.source}}};var _e,Ye,qe;F.parameters={...F.parameters,docs:{...(_e=F.parameters)==null?void 0:_e.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box>
      <Box padding="spacing.5" backgroundColor="surface.background.gray.moderate" width="100%" minHeight="100px" overflow="scroll">
        <Dropdown selectionType="multiple">
          <SelectInput label="Select fruits" labelPosition="left" />
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Apples" value="Apples" />
              <ActionListItem title="Appricots" value="Appricots" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
      <Box padding="spacing.5" backgroundColor="surface.background.gray.moderate" width="100%" position="fixed" bottom="spacing.0" minHeight="100px" overflow="scroll">
        <Dropdown selectionType="multiple">
          <SelectInput label="Select fruits" labelPosition="left" />
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Apples" value="Apples" />
              <ActionListItem title="Appricots" value="Appricots" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
    </Box>;
}`,...(qe=(Ye=F.parameters)==null?void 0:Ye.docs)==null?void 0:qe.source}}};var Ue,Qe,Xe;A.parameters={...A.parameters,docs:{...(Ue=A.parameters)==null?void 0:Ue.docs,source:{originalSource:`(): React.ReactElement => {
  return <Dropdown selectionType="multiple">
      <SelectInput label="Select fruits" />
      <DropdownOverlay>
        <ActionList isVirtualized>
          <ActionListItem title="Apples" value="Apples" />
          <ActionListItem title="Appricots" value="Appricots" />
          <ActionListItem title="Abc" value="Abc" />
          <ActionListItem title="Def" value="Def" />
          <ActionListSection title="Recent 1">
            <ActionListItem title="Avocados" value="Avocados" />
            <ActionListItem title="Bananas" value="Bananas" />
            <ActionListItem title="Blueberries" value="Blueberries" />
          </ActionListSection>

          <ActionListSection title="Recent 2">
            <ActionListItem title="Cherries" value="Cherries" />
            <ActionListItem title="Crab apples" value="Crab apples" />
            <ActionListItem title="Jambolan" value="Jambolan" />
          </ActionListSection>
        </ActionList>
      </DropdownOverlay>
    </Dropdown>;
}`,...(Xe=(Qe=A.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;E.parameters={...E.parameters,docs:{...(Ze=E.parameters)==null?void 0:Ze.docs,source:{originalSource:`(): React.ReactElement => {
  return <Dropdown selectionType="multiple">
      <SelectInput label="Select fruits" />
      <DropdownOverlay>
        <DropdownHeader>
          <AutoComplete label="Search Fruits" />
        </DropdownHeader>
        <ActionList>
          <ActionListItem title="Apples" value="Apples" />
          <ActionListItem title="Appricots" value="Appricots" />
          <ActionListItem title="Cherries" value="Cherries" />
          <ActionListItem title="Crab apples" value="Crab apples" />
          <ActionListItem title="Jambolan" value="Jambolan" />
        </ActionList>
      </DropdownOverlay>
    </Dropdown>;
}`,...(tt=(et=E.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,it,ot;j.parameters={...j.parameters,docs:{...(nt=j.parameters)==null?void 0:nt.docs,source:{originalSource:`(): React.ReactElement => {
  const fruits = ['Apples', 'Apricots', {
    name: 'Avocados',
    description: 'Avocados description'
  }, 'Bananas', 'Boysenberries', 'Blueberries', 'Bing Cherry', 'Cherries', 'Cantaloupe', 'Crab apples', {
    name: 'Clementine',
    description: 'Clementine description'
  }, 'Cucumbers', 'Damson plum', 'Dinosaur Eggs', 'Dates', 'Dewberries', 'Dragon', 'Elderberry', 'Eggfruit', 'Evergreen', 'Huckleberry', 'Entawak', 'Fig', 'Farkleberry', 'Finger Lime', 'Grapefruit', 'Grapes', 'Gooseberries', 'Guava', 'Honeydew melon', 'Hackberry', 'Honeycrisp Apples', 'Indian Prune', 'Indonesian Lime', 'Imbe', 'Indian Fig', 'Jackfruit', 'Java Apple', 'Jambolan', {
    name: 'Kaffir Lime',
    description: 'Kaffir description'
  }, 'Kumquat', 'Lime', 'Longan', 'Lychee', 'Loquat', 'Mango', 'Mandarin', 'Orange', 'Mulberry'];
  return <Dropdown selectionType="multiple">
      <AutoComplete label="Select fruits" />
      <DropdownOverlay>
        <ActionList isVirtualized>
          {fruits.map(fruit => {
          if (typeof fruit === 'string') {
            return <ActionListItem key={fruit} title={fruit} value={fruit} />;
          }
          return <ActionListItem trailing={<ActionListItemText>⌘ + S</ActionListItemText>} leading={<ActionListItemIcon icon={HomeIcon} />} key={fruit.name} title={fruit.name} value={fruit.name} />;
        })}
        </ActionList>
      </DropdownOverlay>
    </Dropdown>;
}`,...(ot=(it=j.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};var at,lt,st;V.parameters={...V.parameters,docs:{...(at=V.parameters)==null?void 0:at.docs,source:{originalSource:`(): React.ReactElement => {
  function getRandomString(length: number): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({
      length
    }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }
  function generateDropdownData(numEntries: number): Record<string, {
    value: string;
    label: string;
  }[]> {
    const dropdownData: Record<string, {
      value: string;
      label: string;
    }[]> = {};
    for (let i = 0; i < numEntries; i++) {
      const city = \`\${getRandomString(Math.floor(Math.random() * 5) + 5)}ville-\${1}\`; // Random city name
      const state = \`\${getRandomString(Math.floor(Math.random() * 7) + 3)}land-\${2}\`; // Random state name
      const country = 'GibberishLand'; // Random country name

      const areas = [];
      const numAreas = Math.floor(Math.random() * 10);
      for (let j = 0; j < numAreas; j++) {
        const area = \`Area-\${city}-\${j}\`;
        areas.push({
          value: \`\${country.toLowerCase()}-\${state.toLowerCase()}-\${city.toLowerCase()}-\${area.toLowerCase()}\`,
          label: area
        });
      }
      dropdownData[city] = areas;
    }
    return dropdownData;
  }
  const dropdownData = generateDropdownData(20);
  return <Box padding="8px">
      <Box> Virtualized with ActionListSection </Box>
      <Dropdown selectionType="multiple">
        <AutoComplete label="Hierarchy Level" placeholder="Select your location" name="action" maxRows="multiple" />
        <DropdownOverlay>
          <ActionList isVirtualized={true}>
            {Object.keys(dropdownData).map(sectionKey => {
            const section = dropdownData[sectionKey];
            return <ActionListSection title={sectionKey} key={sectionKey}>
                  {section.map(item => <ActionListItem title={item.label} value={item.value} key={item.value} />)}
                </ActionListSection>;
          })}
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
      <Box> Virtualized</Box>
      <Dropdown selectionType="multiple">
        <AutoComplete label="Hierarchy Level" placeholder="Select your location" name="action" maxRows="multiple" />
        <DropdownOverlay>
          <ActionList isVirtualized={true}>
            {[...Array(500)].map((_, index) => <ActionListItem title={\`Item \${index}\`} value={\`Item \${index}\`} key={\`Item \${index}\`} />)}
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
      <Box> Non Virtualized</Box>
      <Dropdown selectionType="single">
        <AutoComplete label="Hierarchy Level" placeholder="Select your location" name="action" maxRows="multiple" />
        <DropdownOverlay>
          <ActionList>
            {[...Array(300)].map((_, index) => <ActionListItem title={\`Item \${index}\`} value={\`Item \${index}\`} key={\`Item \${index}\`} />)}
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(st=(lt=V.parameters)==null?void 0:lt.docs)==null?void 0:st.source}}};var rt,ct,pt;y.parameters={...y.parameters,docs:{...(rt=y.parameters)==null?void 0:rt.docs,source:{originalSource:`(): React.ReactElement => {
  const [currentSelection, setCurrentSelection] = React.useState<undefined | string>('mumbai');
  return <Dropdown selectionType="single">
      <SelectInput label="Select City" value={currentSelection} onChange={args => {
      if (args) {
        setCurrentSelection(args.values[0]);
        console.log('onChange triggered');
      }
    }} />
      <DropdownOverlay>
        <ActionList>
          <ActionListItem title="Mumbai" value="mumbai" />
          <ActionListItem title="Bangalore" value="bangalore" />
        </ActionList>
      </DropdownOverlay>
    </Dropdown>;
}`,...(pt=(ct=y.parameters)==null?void 0:ct.docs)==null?void 0:pt.source}}};const wt=["WithSingleSelect","WithMultiSelect","WithHeaderFooterScrollbar","WithValueDisplay","WithHTMLFormSubmission","WithValidationState","WithRefUsage","WithAutoPositioning","WithMultipleDropdowns","WithControlledSelect","WithControlledMultiSelect","WithSizes","InternalControlledSelect","InternalMultiSelect","InternalControlledSingleSelect","InternalSelect","InternalDisabledSelect","InternalAutoPositioning","InternalSectionListPerformance","InternalDropdownWithSearch","InternalDropdownPerformance","WithVirtualization","WithInputDropDownButton"],Dt=Object.freeze(Object.defineProperty({__proto__:null,InternalAutoPositioning:F,InternalControlledSelect:v,InternalControlledSingleSelect:b,InternalDisabledSelect:W,InternalDropdownPerformance:j,InternalDropdownWithSearch:E,InternalMultiSelect:H,InternalSectionListPerformance:A,InternalSelect:P,WithAutoPositioning:T,WithControlledMultiSelect:M,WithControlledSelect:R,WithHTMLFormSubmission:C,WithHeaderFooterScrollbar:I,WithInputDropDownButton:y,WithMultiSelect:h,WithMultipleDropdowns:O,WithRefUsage:B,WithSingleSelect:w,WithSizes:k,WithValidationState:f,WithValueDisplay:D,WithVirtualization:V,__namedExportsOrder:wt,default:Lt},Symbol.toStringTag,{value:"Module"}));export{Dt as d};
