import{b9 as i,j as e,B as r,T as h,at as l,aS as s,aq as a,ar as n,b7 as be,ak as T,F as fe,l as Se,y as Ae,z as we,ad as g,n as P,au as je,ai as Le,al as De,am as Ie,ba as Ce,bb as Be,as as V,X as Oe}from"./iframe-C1qQ09LF.js";import{i as ye}from"./iconMap-BGYDFM5U.js";import{S as Pe}from"./Sandbox.web-B2xP21Qp.js";import{S as Te}from"./StoryPageWrapper-CS0_5maI.js";const o={BASE_PROPS:"Input Base Props",LABEL_PROPS:"Label Props",VALIDATION_PROPS:"Validation Props",LEADING_VISUAL_PROPS:"Leading Visual Props",TRAILING_VISUAL_PROPS:"Trailing Visual Props"},Ve={title:"Components/Dropdown/With AutoComplete/Props Playground",component:i,args:{defaultValue:void 0,placeholder:"Select Option",name:"item",isDisabled:!1,value:void 0,autoFocus:!1,onChange:({name:t,values:c})=>{console.log(`input field ${t} content changed to ${c}`)},onInputValueChange:({name:t,value:c})=>{console.log(`input field ${t} received focus. The value is ${c}`)},label:"Select Item",labelPosition:"top",necessityIndicator:void 0,isRequired:!1,validationState:"none",helpText:void 0,errorText:void 0,successText:void 0,icon:void 0,prefix:"",suffix:""},tags:["autodocs"],argTypes:{defaultValue:{table:{category:o.BASE_PROPS}},onInputValueChange:{table:{category:o.BASE_PROPS}},maxRows:{table:{category:o.BASE_PROPS}},inputValue:{table:{category:o.BASE_PROPS}},filteredValues:{table:{category:o.BASE_PROPS}},placeholder:{table:{category:o.BASE_PROPS}},name:{table:{category:o.BASE_PROPS}},isDisabled:{table:{category:o.BASE_PROPS}},value:{table:{category:o.BASE_PROPS}},autoFocus:{table:{category:o.BASE_PROPS}},onChange:{table:{category:o.BASE_PROPS}},onFocus:{table:{category:o.BASE_PROPS}},onBlur:{table:{category:o.BASE_PROPS}},onClick:{table:{category:o.BASE_PROPS}},testID:{table:{category:o.BASE_PROPS}},label:{table:{category:o.LABEL_PROPS}},accessibilityLabel:{table:{category:o.LABEL_PROPS}},labelPosition:{table:{category:o.LABEL_PROPS}},necessityIndicator:{table:{category:o.VALIDATION_PROPS}},isRequired:{table:{category:o.VALIDATION_PROPS}},validationState:{table:{category:o.VALIDATION_PROPS}},helpText:{table:{category:o.VALIDATION_PROPS}},errorText:{table:{category:o.VALIDATION_PROPS}},successText:{table:{category:o.VALIDATION_PROPS}},icon:{name:"icon",type:"select",options:Object.keys(ye),table:{category:o.LEADING_VISUAL_PROPS}},prefix:{table:{category:o.LEADING_VISUAL_PROPS}},suffix:{table:{category:o.TRAILING_VISUAL_PROPS}}},parameters:{docs:{page:()=>e.jsxs(Te,{componentDescription:"The AutoComplete component is SelectInput-like component where you can type text and search through the list",componentName:"AutoComplete",note:"AutoComplete is meant to be used only inside the Dropdown component. Things will not work as expected if you are using this without Dropdown",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=76077-123374&t=GIOMai1UREfFBA0F-1&scaling=min-zoom&page-id=13590%3A171038&mode=design",children:[e.jsx(Oe,{children:"Usage"}),e.jsx(Pe,{showConsole:!0,children:`
              import { AutoComplete, Dropdown, DropdownOverlay, ActionList, ActionListItem } from '@greenloom/ui/components';

              function App() {
                return (
                  // Only works inside Dropdown component
                  <Dropdown>
                    <AutoComplete 
                      label="City" 
                      name="city"
                      placeholder="Select City" 
                      onChange={(e) => console.log(e)}
                      onInputValueChange={(e) => console.log(e)}
                    />
                    <DropdownOverlay>
                      <ActionList>
                        <ActionListItem title="Mumbai" value="mumbai" />
                        <ActionListItem title="Bengaluru" value="bengaluru" />
                        <ActionListItem title="Pune" value="pune" />
                        <ActionListItem title="Mysuru" value="mysuru" />
                      </ActionList>
                    </DropdownOverlay>
                  </Dropdown>
                )
              }

              export default App;
            `})]})}}},ve=({icon:t,...c})=>e.jsx(r,{minHeight:"150px",padding:"spacing.5",children:e.jsxs(l,{children:[e.jsx(i,{...c,icon:ye[t]}),e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(n,{title:"Mumbai",value:"mumbai"}),e.jsx(n,{title:"Pune",value:"pune"}),e.jsx(n,{title:"Bengaluru",value:"bengaluru"}),e.jsx(n,{title:"Ooty",value:"ooty"})]})})]})}),b=ve.bind({});b.args={label:"City",placeholder:"Select City"};const f=ve.bind({});f.args={label:"City",placeholder:"Select City",isDisabled:!0};const S=()=>e.jsx(r,{maxWidth:"200px",children:e.jsxs(l,{selectionType:"multiple",children:[e.jsx(i,{maxRows:"single",label:"City",size:"large"}),e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(n,{title:"Mumbai",value:"mumbai"}),e.jsx(n,{title:"Pune",value:"pune"}),e.jsx(n,{title:"Bengaluru",value:"bengaluru"}),e.jsx(n,{title:"Ooty",value:"ooty"})]})})]})}),A=()=>{const[t,c]=g.useState();return e.jsxs(e.Fragment,{children:[e.jsx(P,{marginBottom:"spacing.4",onClick:()=>c("bangalore"),children:"Select Bangalore"}),e.jsx(P,{marginBottom:"spacing.4",marginLeft:"spacing.4",onClick:()=>c(""),children:"Clear Selection"}),e.jsxs(l,{selectionType:"single",children:[e.jsx(i,{label:"Select A City",value:t,onChange:p=>{p&&(c(p.values[0]),console.log("onChange triggered"))}}),e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(n,{title:"Mumbai",value:"mumbai"}),e.jsx(n,{title:"Bangalore",value:"bangalore"})]})})]})]})},O=[{title:"Mumbai",value:"mumbai",keywords:["maharashtra"]},{title:"Pune",value:"pune",keywords:["maharashtra"]},{title:"Bengaluru",value:"bengaluru",keywords:["karnataka","bangalore"]},{title:"Ooty",value:"ooty",keywords:["tamil nadu"]}],w=()=>{const t=O.map(m=>m.value),[c,p]=g.useState(t);return e.jsxs(l,{selectionType:"multiple",children:[e.jsx(i,{label:"City",onInputValueChange:({value:m})=>{if(m){const y=O.filter(d=>d.title.toLowerCase().startsWith(m.toLowerCase())||d.keywords.find(x=>x.toLowerCase().includes(m.toLowerCase()))).map(d=>d.value);y.length>0?p(y):p([])}else p(t)},filteredValues:c,helpText:"Try typing 'maharashtra' in input"}),c.length>0?e.jsx(s,{children:e.jsx(a,{children:O.map(m=>e.jsx(n,{title:m.title,value:m.value},m.value))})}):null]})},j=()=>e.jsxs(l,{children:[e.jsx(i,{label:"Select City"}),e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(n,{title:"Mumbai",value:"mumbai"}),e.jsx(n,{title:"Pune",value:"pune"}),e.jsx(n,{title:"Bangalore",value:"bangalore"})]})})]}),L=()=>e.jsxs(l,{selectionType:"multiple",children:[e.jsx(je,{label:"Sort Dishes"}),e.jsxs(Le,{children:[e.jsx(De,{title:"Sort By",children:e.jsx(i,{label:"Sort Dishes",maxRows:"single"})}),e.jsx(Ie,{children:e.jsxs(a,{children:[e.jsx(n,{title:"Relevance (Default)",value:"relavance"}),e.jsx(n,{title:"Delivery Time",value:"delveiry-time"}),e.jsx(n,{title:"Rating",value:"rating"}),e.jsx(n,{title:"Cost: Low to High",value:"Cost: Low to High"}),e.jsx(n,{title:"Cost: High to Low",value:"Cost: High to Low"})]})})]})]}),D=()=>{const[t,c]=g.useState(["Mumbai","Pune","Bangalore"]),[p,m]=g.useState(""),y=g.useRef(null);return e.jsx(r,{maxWidth:"500px",children:e.jsxs(l,{children:[e.jsx(i,{ref:y,label:"Select City",inputValue:p,onInputValueChange:({value:d})=>{m(d??"")}}),e.jsxs(s,{children:[e.jsx(a,{children:t.map((d,x)=>e.jsx(n,{title:d,value:d.toLowerCase()},d+String(x)))}),e.jsx(Ce,{children:e.jsxs(P,{icon:Be,isFullWidth:!0,variant:"secondary",iconPosition:"right",onClick:()=>{var d;(d=y.current)==null||d.focus(),m(""),c([...t,p])},children:["Create ",p]})})]})]})})},I=()=>{const[t,c]=g.useState("");return e.jsxs(r,{children:[e.jsx(h,{children:t}),e.jsxs(l,{children:[e.jsx(i,{inputValue:t,onInputValueChange:({value:p})=>{c(p)},label:"Select City"}),e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(n,{title:"Mumbai",value:"mumbai"}),e.jsx(n,{title:"Pune",value:"pune"}),e.jsx(n,{title:"Bangalore",value:"bangalore"})]})})]})]})},C=()=>e.jsx(r,{children:e.jsxs(l,{children:[e.jsx(i,{label:"Select City"}),e.jsx(s,{children:e.jsxs(a,{children:[e.jsxs(V,{title:"Maharashtra",children:[e.jsx(n,{title:"Mumbai",value:"mumbai"}),e.jsx(n,{title:"Pune",value:"pune"})]}),e.jsx(V,{title:"Karnataka",children:e.jsx(n,{title:"Bangalore",value:"bangalore"})})]})})]})}),R=["Mumbai","Pune","Bangalore","Mysore"],B=()=>{const[t,c]=g.useState(!1),[p,m]=g.useState(""),[y,d]=g.useState(!1);return e.jsxs(l,{selectionType:"single",onOpenChange:x=>{x||(console.log("dismiss"),d(!0))},children:[e.jsx(i,{label:"City",placeholder:"Select your City",name:"city",inputValue:p,onInputValueChange:({value:x})=>{t&&c(!1),m(x??"")},onBlur:()=>{y&&(R.includes(p)||c(!0),d(!1))},errorText:"Invalid selection. You can only select items from the list",validationState:t?"error":"none",helpText:"Type something not in the list and click outside"}),e.jsx(s,{children:e.jsx(a,{children:R.map(x=>e.jsx(n,{title:x,value:x},x))})})]})},u=[{title:"Mumbai",value:"mumbai"},{title:"Pune",value:"pune"},{title:"Bengaluru",value:"bengaluru"},{title:"Delhi",value:"delhi"},{title:"Chennai",value:"chennai"},{title:"Hyderabad",value:"hyderabad"}],Re=[{title:"India",value:"india"},{title:"United States",value:"usa"},{title:"United Kingdom",value:"uk"},{title:"Australia",value:"australia"}],v=()=>e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.8",children:[e.jsxs(r,{children:[e.jsx(h,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Basic Variants"}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(l,{children:[e.jsx(i,{label:"Default",placeholder:"Select city",name:"default"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]}),e.jsxs(l,{children:[e.jsx(i,{label:"With Value",defaultValue:"mumbai",name:"withValue"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]}),e.jsxs(l,{children:[e.jsx(i,{label:"With Help Text",placeholder:"Select city",helpText:"This is a helpful message",name:"withHelpText"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]}),e.jsxs(l,{children:[e.jsx(i,{label:"Disabled",placeholder:"Select city",isDisabled:!0,name:"disabled"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]})]})]}),e.jsxs(r,{children:[e.jsx(h,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Validation States"}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(l,{children:[e.jsx(i,{label:"Error State",defaultValue:"invalid",validationState:"error",errorText:"This field has an error",name:"error"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]}),e.jsxs(l,{children:[e.jsx(i,{label:"Success State",defaultValue:"mumbai",validationState:"success",successText:"This field is valid",name:"success"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]})]})]}),e.jsxs(r,{children:[e.jsx(h,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Sizes"}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(l,{children:[e.jsx(i,{label:"Medium Size",placeholder:"Select city",size:"medium",name:"sizeMedium"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]}),e.jsxs(l,{children:[e.jsx(i,{label:"Large Size",placeholder:"Select city",size:"large",name:"sizeLarge"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]})]})]}),e.jsxs(r,{children:[e.jsx(h,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Label Positions"}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(l,{children:[e.jsx(i,{label:"Label Top",placeholder:"Select city",labelPosition:"top",name:"labelTop"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]}),e.jsxs(l,{children:[e.jsx(i,{label:"Label Left",placeholder:"Select city",labelPosition:"left",name:"labelLeft"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]})]})]}),e.jsxs(r,{children:[e.jsx(h,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Necessity Indicators"}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(l,{children:[e.jsx(i,{label:"Required Field",placeholder:"Select city",necessityIndicator:"required",name:"required"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]}),e.jsxs(l,{children:[e.jsx(i,{label:"Optional Field",placeholder:"Select city",necessityIndicator:"optional",name:"optional"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]})]})]}),e.jsxs(r,{children:[e.jsx(h,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Icons"}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(l,{children:[e.jsx(i,{label:"Leading Icon",placeholder:"Select city",icon:be,name:"leadingIcon"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]}),e.jsxs(l,{children:[e.jsx(i,{label:"With Info Icon",placeholder:"Select city",icon:T,name:"infoIcon"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]})]})]}),e.jsxs(r,{children:[e.jsx(h,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Prefix/Suffix"}),e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(l,{children:[e.jsx(i,{label:"With Prefix",placeholder:"Select country",prefix:"🌍",name:"withPrefix"}),e.jsx(s,{children:e.jsx(a,{children:Re.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]}),e.jsxs(l,{children:[e.jsx(i,{label:"With Suffix",placeholder:"Select city",suffix:"City",name:"withSuffix"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]})]})]}),e.jsxs(r,{children:[e.jsx(h,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Elements"}),e.jsx(r,{display:"flex",flexDirection:"column",gap:"spacing.5",children:e.jsxs(l,{children:[e.jsx(i,{label:"Leading Badge",placeholder:"Select city",prefix:e.jsx(fe,{children:"+91"}),name:"leadingBadge"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]})})]}),e.jsxs(r,{children:[e.jsx(h,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"surface.text.gray.subtle",children:"With Label Suffix & Trailing"}),e.jsxs(l,{children:[e.jsx(i,{label:"City",placeholder:"Select city",labelSuffix:e.jsx(Ae,{content:"Select your city for delivery",placement:"right",children:e.jsx(we,{display:"flex",children:e.jsx(T,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(Se,{size:"small",children:"Learn more"}),name:"labelSuffixTrailing"}),e.jsx(s,{children:e.jsx(a,{children:u.map(t=>e.jsx(n,{title:t.title,value:t.value},t.value))})})]})]})]});v.storyName="Showcase - All Variants";v.parameters={docs:{description:{story:"A comprehensive showcase of all AutoComplete variants including basic states, validation states, sizes, label positions, icons, prefix/suffix, and more."}}};var k,E,_;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`({
  icon,
  ...args
}) => {
  return <Box minHeight="150px" padding="spacing.5">
      <Dropdown>
        <AutoComplete {...args} icon={iconMap[icon as unknown as string]} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bengaluru" value="bengaluru" />
            <ActionListItem title="Ooty" value="ooty" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(_=(E=b.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var z,W,M;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`({
  icon,
  ...args
}) => {
  return <Box minHeight="150px" padding="spacing.5">
      <Dropdown>
        <AutoComplete {...args} icon={iconMap[icon as unknown as string]} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bengaluru" value="bengaluru" />
            <ActionListItem title="Ooty" value="ooty" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(M=(W=f.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var F,H,N;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box maxWidth="200px">
      <Dropdown selectionType="multiple">
        <AutoComplete maxRows="single" label="City" size="large" />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bengaluru" value="bengaluru" />
            <ActionListItem title="Ooty" value="ooty" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(N=(H=S.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var U,q,G;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`(): React.ReactElement => {
  const [currentSelection, setCurrentSelection] = React.useState<undefined | string>();
  return <>
      <Button marginBottom="spacing.4" onClick={() => setCurrentSelection('bangalore')}>
        Select Bangalore
      </Button>
      <Button marginBottom="spacing.4" marginLeft="spacing.4" onClick={() => setCurrentSelection('')}>
        Clear Selection
      </Button>
      <Dropdown selectionType="single">
        <AutoComplete label="Select A City" value={currentSelection} onChange={args => {
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
    </>;
}`,...(G=(q=A.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var $,K,Y;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`(): React.ReactElement => {
  const cityValues = cities.map(city => city.value);
  const [filteredValues, setFilteredValues] = React.useState<string[]>(cityValues);
  return <Dropdown selectionType="multiple">
      <AutoComplete label="City" onInputValueChange={({
      value
    }) => {
      if (value) {
        const filteredItems = cities.filter(city => city.title.toLowerCase().startsWith(value.toLowerCase()) || city.keywords.find(keyword => keyword.toLowerCase().includes(value.toLowerCase()))).map(city => city.value);
        if (filteredItems.length > 0) {
          setFilteredValues(filteredItems);
        } else {
          setFilteredValues([]);
        }
      } else {
        setFilteredValues(cityValues);
      }
    }} filteredValues={filteredValues} helpText="Try typing 'maharashtra' in input" />
      {filteredValues.length > 0 ? <DropdownOverlay>
          <ActionList>
            {cities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
          </ActionList>
        </DropdownOverlay> : null}
    </Dropdown>;
}`,...(Y=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var Q,X,Z;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`(): React.ReactElement => {
  return <Dropdown>
      <AutoComplete label="Select City" />
      <DropdownOverlay>
        <ActionList>
          <ActionListItem title="Mumbai" value="mumbai" />
          <ActionListItem title="Pune" value="pune" />
          <ActionListItem title="Bangalore" value="bangalore" />
        </ActionList>
      </DropdownOverlay>
    </Dropdown>;
}`,...(Z=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var J,ee,te;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`(): React.ReactElement => {
  return <Dropdown selectionType="multiple">
      <SelectInput label="Sort Dishes" />
      <BottomSheet>
        <BottomSheetHeader title="Sort By">
          <AutoComplete label="Sort Dishes" maxRows="single" />
        </BottomSheetHeader>
        <BottomSheetBody>
          <ActionList>
            <ActionListItem title="Relevance (Default)" value="relavance" />
            <ActionListItem title="Delivery Time" value="delveiry-time" />
            <ActionListItem title="Rating" value="rating" />
            <ActionListItem title="Cost: Low to High" value="Cost: Low to High" />
            <ActionListItem title="Cost: High to Low" value="Cost: High to Low" />
          </ActionList>
        </BottomSheetBody>
      </BottomSheet>
    </Dropdown>;
}`,...(te=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ie,le;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`(): React.ReactElement => {
  const [items, setItems] = React.useState(['Mumbai', 'Pune', 'Bangalore']);
  const [inputValue, setInputValue] = React.useState('');
  const autoCompleteRef = React.useRef<HTMLInputElement>(null);
  return <Box maxWidth="500px">
      <Dropdown>
        <AutoComplete ref={autoCompleteRef} label="Select City" inputValue={inputValue} onInputValueChange={({
        value
      }) => {
        setInputValue(value ?? '');
      }} />
        <DropdownOverlay>
          <ActionList>
            {items.map((item, index) => <ActionListItem key={item + String(index)} title={item} value={item.toLowerCase()} />)}
          </ActionList>
          <DropdownFooter>
            <Button icon={PlusIcon} isFullWidth variant="secondary" iconPosition="right" onClick={() => {
            autoCompleteRef.current?.focus();
            setInputValue('');
            setItems([...items, inputValue]);
          }}>
              Create {inputValue}
            </Button>
          </DropdownFooter>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(le=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ae,oe,se;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`(): React.ReactElement => {
  const [inputValue, setInputValue] = React.useState<string | undefined>('');
  return <Box>
      <Text>{inputValue}</Text>
      <Dropdown>
        <AutoComplete inputValue={inputValue} onInputValueChange={({
        value
      }) => {
        setInputValue(value);
      }} label="Select City" />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bangalore" value="bangalore" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(se=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,ce,ue;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box>
      <Dropdown>
        <AutoComplete label="Select City" />
        <DropdownOverlay>
          <ActionList>
            <ActionListSection title="Maharashtra">
              <ActionListItem title="Mumbai" value="mumbai" />
              <ActionListItem title="Pune" value="pune" />
            </ActionListSection>
            <ActionListSection title="Karnataka">
              <ActionListItem title="Bangalore" value="bangalore" />
            </ActionListSection>
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(ue=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,me;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`(): React.ReactElement => {
  const [isError, setIsError] = React.useState(false);
  const [currentInputValue, setCurrentInputValue] = React.useState('');
  const [isDismissed, setIsDismissed] = React.useState(false);
  return <Dropdown selectionType="single" onOpenChange={isOpen => {
    if (!isOpen) {
      console.log('dismiss');
      setIsDismissed(true);
    }
  }}>
      <AutoComplete label="City" placeholder="Select your City" name="city" inputValue={currentInputValue} onInputValueChange={({
      value
    }) => {
      if (isError) {
        setIsError(false);
      }
      setCurrentInputValue(value ?? '');
    }} onBlur={() => {
      if (isDismissed) {
        // We validate on blur after dismiss of Dropdown
        if (!errorStatesExampleCities.includes(currentInputValue)) {
          setIsError(true);
        }
        setIsDismissed(false);
      }
    }} errorText="Invalid selection. You can only select items from the list" validationState={isError ? 'error' : 'none'} helpText="Type something not in the list and click outside" />
      <DropdownOverlay>
        <ActionList>
          {errorStatesExampleCities.map(city => <ActionListItem key={city} title={city} value={city} />)}
        </ActionList>
      </DropdownOverlay>
    </Dropdown>;
}`,...(me=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var xe,he,ge;v.parameters={...v.parameters,docs:{...(xe=v.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.8">
      {/* Basic Variants */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Basic Variants
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Dropdown>
            <AutoComplete label="Default" placeholder="Select city" name="default" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
          <Dropdown>
            <AutoComplete label="With Value" defaultValue="mumbai" name="withValue" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
          <Dropdown>
            <AutoComplete label="With Help Text" placeholder="Select city" helpText="This is a helpful message" name="withHelpText" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
          <Dropdown>
            <AutoComplete label="Disabled" placeholder="Select city" isDisabled name="disabled" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
        </Box>
      </Box>

      {/* Validation States */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Validation States
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Dropdown>
            <AutoComplete label="Error State" defaultValue="invalid" validationState="error" errorText="This field has an error" name="error" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
          <Dropdown>
            <AutoComplete label="Success State" defaultValue="mumbai" validationState="success" successText="This field is valid" name="success" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
        </Box>
      </Box>

      {/* Sizes */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Sizes
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Dropdown>
            <AutoComplete label="Medium Size" placeholder="Select city" size="medium" name="sizeMedium" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
          <Dropdown>
            <AutoComplete label="Large Size" placeholder="Select city" size="large" name="sizeLarge" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
        </Box>
      </Box>

      {/* Label Positions */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Label Positions
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Dropdown>
            <AutoComplete label="Label Top" placeholder="Select city" labelPosition="top" name="labelTop" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
          <Dropdown>
            <AutoComplete label="Label Left" placeholder="Select city" labelPosition="left" name="labelLeft" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
        </Box>
      </Box>

      {/* Necessity Indicators */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Necessity Indicators
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Dropdown>
            <AutoComplete label="Required Field" placeholder="Select city" necessityIndicator="required" name="required" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
          <Dropdown>
            <AutoComplete label="Optional Field" placeholder="Select city" necessityIndicator="optional" name="optional" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
        </Box>
      </Box>

      {/* With Icons */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Icons
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Dropdown>
            <AutoComplete label="Leading Icon" placeholder="Select city" icon={BankIcon} name="leadingIcon" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
          <Dropdown>
            <AutoComplete label="With Info Icon" placeholder="Select city" icon={InfoIcon} name="infoIcon" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
        </Box>
      </Box>

      {/* With Prefix/Suffix */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Prefix/Suffix
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Dropdown>
            <AutoComplete label="With Prefix" placeholder="Select country" prefix="🌍" name="withPrefix" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCountries.map(country => <ActionListItem key={country.value} title={country.title} value={country.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
          <Dropdown>
            <AutoComplete label="With Suffix" placeholder="Select city" suffix="City" name="withSuffix" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
        </Box>
      </Box>

      {/* With Elements */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Elements
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Dropdown>
            <AutoComplete label="Leading Badge" placeholder="Select city" prefix={<Badge>+91</Badge>} name="leadingBadge" />
            <DropdownOverlay>
              <ActionList>
                {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
        </Box>
      </Box>

      {/* With Label Suffix & Trailing */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="surface.text.gray.subtle">
          With Label Suffix & Trailing
        </Text>
        <Dropdown>
          <AutoComplete label="City" placeholder="Select city" labelSuffix={<Tooltip content="Select your city for delivery" placement="right">
                <TooltipInteractiveWrapper display="flex">
                  <InfoIcon size="small" color="surface.icon.gray.muted" />
                </TooltipInteractiveWrapper>
              </Tooltip>} labelTrailing={<Link size="small">Learn more</Link>} name="labelSuffixTrailing" />
          <DropdownOverlay>
            <ActionList>
              {showcaseCities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
    </Box>;
}`,...(ge=(he=v.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const ke=["Default","Disabled","InternalAutoCompleteUncontrolled","InternalAutoCompleteControlledSelection","InternalAutoCompleteControlled","InternalAutoCompleteUncontrolledSingleSelect","InternalAutoCompleteWithBottomSheet","InternalCreatableItem","InternalControlledInputValue","InternalWithSectionFiltering","InternalWithValidations","AutoCompleteShowcase"],Me=Object.freeze(Object.defineProperty({__proto__:null,AutoCompleteShowcase:v,Default:b,Disabled:f,InternalAutoCompleteControlled:w,InternalAutoCompleteControlledSelection:A,InternalAutoCompleteUncontrolled:S,InternalAutoCompleteUncontrolledSingleSelect:j,InternalAutoCompleteWithBottomSheet:L,InternalControlledInputValue:I,InternalCreatableItem:D,InternalWithSectionFiltering:C,InternalWithValidations:B,__namedExportsOrder:ke,default:Ve},Symbol.toStringTag,{value:"Module"}));export{Me as a};
