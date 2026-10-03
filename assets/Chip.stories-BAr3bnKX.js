import{j as e,T as b,l as T,C as p,B as x,aM as S,aN as v,ad as d,r as G}from"./iframe-C1qQ09LF.js";import{S as U}from"./StoryPageWrapper-CS0_5maI.js";import{g as w}from"./storybookArgTypes-DFfQV31s.js";import{i as u}from"./iconMap-BGYDFM5U.js";const k=()=>e.jsx(U,{componentDescription:"The Chip component is inherently tied to the ChipGroup and cannot be utilized outside its context.",componentName:"Chip",note:e.jsxs(b,{children:["This story is only meant to demonstrate the props of the Chip component. For complete usage refer to the ChipGroup story"," ",e.jsx(T,{target:"_blank",href:"https://ui.greenloom.ai/?path=/docs/components-chip-chipgroup",children:"here."}),e.jsx("br",{}),"Use ",e.jsx(p,{size:"medium",children:"icon"})," for Blade icons and ",e.jsx(p,{size:"medium",children:"leading"})," ","for custom leading elements like flags or avatars. They are mutually exclusive and should not be used together."]}),figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=75272-53870&t=TGcKiXJiozSRKwOG-1&scaling=min-zoom&page-id=52377%3A23885&mode=design"}),a={CHIP:"Chip Props",CHIP_GROUP:"ChipGroup Props"},B={title:"Components/Chip/Chip",args:{isDisabled:!1},tags:["autodocs"],argTypes:{isDisabled:{description:"Disables or enables `Chip`",control:{type:"boolean"},table:{category:a.CHIP,type:{summary:"boolean"}}},value:{description:"The value to be used in the Chip input.",table:{category:a.CHIP,type:{summary:"string"}}},icon:{name:"icon",description:"Displays a Blade Icon component within the Chip. Mutually exclusive with `leading`.",type:"select",options:Object.keys(u),mapping:u,table:{category:a.CHIP,type:{summary:"IconComponent"}}},leading:{description:"Custom leading element rendered before the label, such as a flag, avatar, logo, or SVG asset. Mutually exclusive with `icon`.",control:!1,table:{category:a.CHIP,type:{summary:"React.ReactNode"}}},color:{description:"Sets the color of the Chip. This overwrites the color set by the parent `ChipGroup` component",table:{category:a.CHIP,type:{summary:'"primary" | "positive" | "negative"'}},options:["primary","positive","negative"],control:{type:"radio"}},...w()},parameters:{docs:{page:k}}},R=({children:n,...t})=>e.jsx(x,{children:e.jsx(S,{selectionType:"multiple",defaultValue:["Automated Payment Links"],accessibilityLabel:"Select other capabilities you are looking for from the options below",children:e.jsx(v,{value:"Automated Payment Links",...t,children:"Automated Payment Links"})})}),s=R.bind({});s.storyName="Default";s.args={color:"primary"};const l={IN:{label:"India",alt:"India",src:"https://flagcdn.com/w40/in.png"},US:{label:"United States",alt:"US",src:"https://flagcdn.com/w40/us.png"},GB:{label:"United Kingdom",alt:"UK",src:"https://flagcdn.com/w40/gb.png"}},r=n=>{const t=l[n];return e.jsx("img",{src:t.src,width:16,height:12,alt:t.alt,style:{borderRadius:2}})},D=({size:n,value:t="IN",leading:P,...j})=>{const[I,c]=d.useState(t);return d.useEffect(()=>{c(t)},[t]),e.jsxs(x,{children:[e.jsx(b,{marginBottom:"spacing.4",children:"Chip with leading element (e.g., country flags):"}),e.jsx(S,{selectionType:"single",accessibilityLabel:"Select country",label:"Country",size:n,value:I,onChange:({values:i})=>c(i[0]),children:Object.entries(l).map(([i,L])=>G.createElement(v,{...j,key:i,value:i,leading:P??r(i)},L.label))})]})},o=D.bind({});o.storyName="With Leading (Flags)";o.args={color:"primary",size:"small",value:"IN"};o.argTypes={icon:{table:{disable:!0}},size:{description:"Specifies the size of the rendered Chips.",options:["xsmall","small","medium","large"],control:{type:"radio"},table:{category:a.CHIP_GROUP,type:{summary:'"xsmall" | "small" | "medium" | "large"'}}},value:{description:"Selected country value for the ChipGroup.",options:Object.keys(l),control:{type:"select"},table:{category:a.CHIP_GROUP,type:{summary:'"IN" | "US" | "GB"'}}},leading:{description:'Overrides the leading element for all chips. Select "Default flags" to render each country-specific flag.',options:["Default flags","India flag","US flag","UK flag"],mapping:{"Default flags":void 0,"India flag":r("IN"),"US flag":r("US"),"UK flag":r("GB")},control:{type:"select"},table:{category:a.CHIP,type:{summary:"React.ReactNode"}}}};var m,g,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <Box>
      <ChipGroupComponent selectionType="multiple" defaultValue={['Automated Payment Links']} accessibilityLabel="Select other capabilities you are looking for from the options below">
        <ChipComponent value="Automated Payment Links" {...args}>
          Automated Payment Links
        </ChipComponent>
      </ChipGroupComponent>
    </Box>;
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,C,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`({
  size,
  value = 'IN',
  leading,
  ...args
}) => {
  const [selectedValue, setSelectedValue] = React.useState<CountryCode>(value);
  React.useEffect(() => {
    setSelectedValue(value);
  }, [value]);
  return <Box>
      <Text marginBottom="spacing.4">Chip with leading element (e.g., country flags):</Text>
      <ChipGroupComponent selectionType="single" accessibilityLabel="Select country" label="Country" size={size} value={selectedValue} onChange={({
      values
    }) => setSelectedValue(values[0] as CountryCode)}>
        {Object.entries(countryFlags).map(([countryCode, country]) => <ChipComponent {...args} key={countryCode} value={countryCode} leading={leading ?? getFlagLeading(countryCode as CountryCode)}>
            {country.label}
          </ChipComponent>)}
      </ChipGroupComponent>
    </Box>;
}`,...(f=(C=o.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const z=["Default","WithLeading"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithLeading:o,__namedExportsOrder:z,default:B},Symbol.toStringTag,{value:"Module"}));export{H as c};
