import{au as l,j as e,B as o,T as c,at as n,aS as a,aq as s,ar as t,b7 as B,F as I,jc as A,l as P,y as T,z,ak as k,X as R,m as _,s as V}from"./iframe-C1qQ09LF.js";import{i as D}from"./iconMap-BGYDFM5U.js";import{S as E}from"./Sandbox.web-B2xP21Qp.js";import{S as W}from"./StoryPageWrapper-CS0_5maI.js";const i={BASE_PROPS:"Select Input Props",LABEL_PROPS:"Label Props",VALIDATION_PROPS:"Validation Props",LEADING_VISUAL_PROPS:"Leading Visual Props",TRAILING_VISUAL_PROPS:"Trailing Visual Props"},N={title:"Components/Dropdown/With Select/Props Playground",component:l,args:{defaultValue:void 0,placeholder:"Select Option",name:"item",isDisabled:!1,value:void 0,autoFocus:!1,onChange:({name:r,values:p})=>{console.log(`input field ${r} content changed to ${p}`)},onFocus:({name:r,value:p})=>{console.log(`input field ${r} received focus. The value is ${p}`)},onBlur:({name:r,value:p})=>{console.log(`input field ${r} content lost focus. The value is ${p}`)},label:"Select Item",labelPosition:"top",necessityIndicator:void 0,isRequired:!1,validationState:"none",helpText:void 0,errorText:void 0,successText:void 0,icon:void 0,prefix:"",suffix:""},tags:["autodocs"],argTypes:{size:{table:{category:i.BASE_PROPS}},defaultValue:{table:{category:i.BASE_PROPS}},placeholder:{table:{category:i.BASE_PROPS}},name:{table:{category:i.BASE_PROPS}},isDisabled:{table:{category:i.BASE_PROPS}},value:{table:{category:i.BASE_PROPS}},autoFocus:{table:{category:i.BASE_PROPS}},onChange:{table:{category:i.BASE_PROPS}},onFocus:{table:{category:i.BASE_PROPS}},onBlur:{table:{category:i.BASE_PROPS}},onClick:{table:{category:i.BASE_PROPS}},testID:{table:{category:i.BASE_PROPS}},label:{table:{category:i.LABEL_PROPS}},accessibilityLabel:{table:{category:i.LABEL_PROPS}},labelPosition:{table:{category:i.LABEL_PROPS}},necessityIndicator:{table:{category:i.VALIDATION_PROPS}},isRequired:{table:{category:i.VALIDATION_PROPS}},validationState:{table:{category:i.VALIDATION_PROPS}},helpText:{table:{category:i.VALIDATION_PROPS}},errorText:{table:{category:i.VALIDATION_PROPS}},successText:{table:{category:i.VALIDATION_PROPS}},icon:{name:"icon",type:"select",options:Object.keys(D),table:{category:i.LEADING_VISUAL_PROPS}},prefix:{table:{category:i.LEADING_VISUAL_PROPS}},suffix:{table:{category:i.TRAILING_VISUAL_PROPS}}},parameters:{docs:{page:()=>e.jsxs(W,{componentDescription:"The SelectInput component is a component that can be used inside Dropdown component to create a Select Menu",componentName:"SelectInput",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Dropdown/_decisions/decisions.md",note:"SelectInput is meant to be used only inside the Dropdown component. Things will not work as expected if you are using this without Dropdown",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=76077-123374&t=GIOMai1UREfFBA0F-1&scaling=min-zoom&page-id=13590%3A171038&mode=design",children:[e.jsx(R,{children:"Usage"}),e.jsx(E,{showConsole:!0,children:`
              import { SelectInput, Dropdown, DropdownOverlay, ActionList, ActionListItem } from '@greenloom/ui/components';

              function App() {
                return (
                  // Only works inside Dropdown component
                  <Dropdown>
                    <SelectInput 
                      label="City" 
                      name="city"
                      placeholder="Select City" 
                      onChange={(e) => console.log(e)}
                    />
                    <DropdownOverlay>
                      <ActionList>
                        <ActionListItem title="Mumbai" value="mumbai" />
                        <ActionListItem title="Bangalore" value="bangalore" />
                      </ActionList>
                    </DropdownOverlay>
                  </Dropdown>
                )
              }

              export default App;
            `})]})}}},w=({icon:r,...p})=>e.jsxs(o,{minHeight:"150px",padding:"spacing.5",children:[e.jsxs(n,{children:[e.jsx(l,{...p,onChange:({name:m,values:y})=>{console.log(m,y)},icon:D[r],valueSuffix:({values:m})=>m[0]==="item-1"?e.jsx(I,{color:"positive",children:"20% Off"}):null}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"Item 1",value:"item-1",titleSuffix:e.jsx(A,{color:"positive",children:"20% Off"})}),e.jsx(t,{title:"Item 2",value:"item-2"}),e.jsx(t,{title:"Item 3",value:"item-3"})]})})]}),e.jsx(_,{themeTokens:V,colorScheme:"dark",children:e.jsx(o,{marginTop:"spacing.11",marginLeft:"-12px",backgroundColor:"surface.background.gray.intense",height:"100px",width:"100px"})})]}),x=w.bind({}),u=w.bind({});u.args={isDisabled:!0,defaultValue:["item-1","item-2"]};const d=()=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.8",children:[e.jsxs(o,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Basic Variants"}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(n,{children:[e.jsx(l,{label:"Default",placeholder:"Select option",name:"default"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"Option 1",value:"option-1"}),e.jsx(t,{title:"Option 2",value:"option-2"}),e.jsx(t,{title:"Option 3",value:"option-3"})]})})]}),e.jsxs(n,{children:[e.jsx(l,{label:"With Value",defaultValue:"option-2",name:"withValue"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"Option 1",value:"option-1"}),e.jsx(t,{title:"Option 2",value:"option-2"}),e.jsx(t,{title:"Option 3",value:"option-3"})]})})]}),e.jsxs(n,{children:[e.jsx(l,{label:"With Help Text",placeholder:"Select option",helpText:"This is a helpful message",name:"withHelpText"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"Option 1",value:"option-1"}),e.jsx(t,{title:"Option 2",value:"option-2"}),e.jsx(t,{title:"Option 3",value:"option-3"})]})})]}),e.jsxs(n,{children:[e.jsx(l,{label:"Disabled",placeholder:"Select option",isDisabled:!0,name:"disabled"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"Option 1",value:"option-1"}),e.jsx(t,{title:"Option 2",value:"option-2"}),e.jsx(t,{title:"Option 3",value:"option-3"})]})})]})]})]}),e.jsxs(o,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Validation States"}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(n,{children:[e.jsx(l,{label:"Error State",defaultValue:"invalid-option",validationState:"error",errorText:"This field has an error",name:"error"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"Option 1",value:"option-1"}),e.jsx(t,{title:"Option 2",value:"option-2"}),e.jsx(t,{title:"Option 3",value:"option-3"})]})})]}),e.jsxs(n,{children:[e.jsx(l,{label:"Success State",defaultValue:"option-2",validationState:"success",successText:"This field is valid",name:"success"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"Option 1",value:"option-1"}),e.jsx(t,{title:"Option 2",value:"option-2"}),e.jsx(t,{title:"Option 3",value:"option-3"})]})})]})]})]}),e.jsxs(o,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Sizes"}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(n,{children:[e.jsx(l,{label:"Medium Size",placeholder:"Medium size select",size:"medium",name:"sizeMedium"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"Option 1",value:"option-1"}),e.jsx(t,{title:"Option 2",value:"option-2"}),e.jsx(t,{title:"Option 3",value:"option-3"})]})})]}),e.jsxs(n,{children:[e.jsx(l,{label:"Large Size",placeholder:"Large size select",size:"large",name:"sizeLarge"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"Option 1",value:"option-1"}),e.jsx(t,{title:"Option 2",value:"option-2"}),e.jsx(t,{title:"Option 3",value:"option-3"})]})})]})]})]}),e.jsxs(o,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Label Positions"}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(n,{children:[e.jsx(l,{label:"Label Top",placeholder:"Label on top",labelPosition:"top",name:"labelTop"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"Option 1",value:"option-1"}),e.jsx(t,{title:"Option 2",value:"option-2"}),e.jsx(t,{title:"Option 3",value:"option-3"})]})})]}),e.jsxs(n,{children:[e.jsx(l,{label:"Label Left",placeholder:"Label on left",labelPosition:"left",name:"labelLeft"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"Option 1",value:"option-1"}),e.jsx(t,{title:"Option 2",value:"option-2"}),e.jsx(t,{title:"Option 3",value:"option-3"})]})})]})]})]}),e.jsxs(o,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Necessity Indicators"}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(n,{children:[e.jsx(l,{label:"Required Field",placeholder:"Select option",necessityIndicator:"required",name:"required"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"Option 1",value:"option-1"}),e.jsx(t,{title:"Option 2",value:"option-2"}),e.jsx(t,{title:"Option 3",value:"option-3"})]})})]}),e.jsxs(n,{children:[e.jsx(l,{label:"Optional Field",placeholder:"Select option",necessityIndicator:"optional",name:"optional"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"Option 1",value:"option-1"}),e.jsx(t,{title:"Option 2",value:"option-2"}),e.jsx(t,{title:"Option 3",value:"option-3"})]})})]})]})]}),e.jsxs(o,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Icons"}),e.jsx(o,{display:"flex",flexDirection:"column",gap:"spacing.5",children:e.jsxs(n,{children:[e.jsx(l,{label:"Leading Icon",placeholder:"Select option",icon:B,name:"leadingIcon"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"Option 1",value:"option-1"}),e.jsx(t,{title:"Option 2",value:"option-2"}),e.jsx(t,{title:"Option 3",value:"option-3"})]})})]})})]}),e.jsxs(o,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Prefix/Suffix"}),e.jsxs(o,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(n,{children:[e.jsx(l,{label:"With Prefix",placeholder:"Select currency",prefix:"₹",name:"withPrefix"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"INR",value:"inr"}),e.jsx(t,{title:"USD",value:"usd"}),e.jsx(t,{title:"EUR",value:"eur"})]})})]}),e.jsxs(n,{children:[e.jsx(l,{label:"With Suffix",placeholder:"Select weight",suffix:"kg",name:"withSuffix"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"10",value:"10"}),e.jsx(t,{title:"20",value:"20"}),e.jsx(t,{title:"30",value:"30"})]})})]})]})]}),e.jsxs(o,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Value Suffix"}),e.jsx(o,{display:"flex",flexDirection:"column",gap:"spacing.5",children:e.jsxs(n,{children:[e.jsx(l,{label:"Product with Discount",placeholder:"Select product",defaultValue:"product-1",valueSuffix:({values:r})=>r[0]==="product-1"?e.jsx(I,{color:"positive",children:"20% Off"}):null,name:"valueSuffix"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"Product 1",value:"product-1",titleSuffix:e.jsx(A,{color:"positive",children:"20% Off"})}),e.jsx(t,{title:"Product 2",value:"product-2"}),e.jsx(t,{title:"Product 3",value:"product-3"})]})})]})})]}),e.jsxs(o,{children:[e.jsx(c,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"surface.text.gray.subtle",children:"With Label Suffix & Trailing"}),e.jsxs(n,{children:[e.jsx(l,{label:"Country",placeholder:"Select country",labelSuffix:e.jsx(T,{content:"Select your country for tax purposes",placement:"right",children:e.jsx(z,{display:"flex",children:e.jsx(k,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(P,{size:"small",children:"Learn more"}),name:"labelSuffixTrailing"}),e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(t,{title:"India",value:"india"}),e.jsx(t,{title:"USA",value:"usa"}),e.jsx(t,{title:"UK",value:"uk"})]})})]})]})]});d.storyName="Showcase - All Variants";d.parameters={docs:{description:{story:"A comprehensive showcase of all SelectInput variants including basic states, validation states, sizes, label positions, icons, prefix/suffix, value suffix, and more."}}};var g,f,h;x.parameters={...x.parameters,docs:{...(g=x.parameters)==null?void 0:g.docs,source:{originalSource:`({
  icon,
  ...args
}) => {
  return <Box minHeight="150px" padding="spacing.5">
      <Dropdown>
        <SelectInput {...args} onChange={({
        name,
        values
      }) => {
        console.log(name, values);
      }} icon={iconMap[icon as unknown as string]} valueSuffix={({
        values
      }) => {
        if (values[0] === 'item-1') {
          return <Badge color="positive">20% Off</Badge>;
        }
        return null;
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Item 1" value="item-1" titleSuffix={<ActionListItemBadge color="positive">20% Off</ActionListItemBadge>} />
            <ActionListItem title="Item 2" value="item-2" />
            <ActionListItem title="Item 3" value="item-3" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
      <BladeProvider themeTokens={bladeTheme} colorScheme="dark">
        <Box marginTop="spacing.11" marginLeft="-12px" backgroundColor="surface.background.gray.intense" height="100px" width="100px" />
      </BladeProvider>
    </Box>;
}`,...(h=(f=x.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,S,L;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`({
  icon,
  ...args
}) => {
  return <Box minHeight="150px" padding="spacing.5">
      <Dropdown>
        <SelectInput {...args} onChange={({
        name,
        values
      }) => {
        console.log(name, values);
      }} icon={iconMap[icon as unknown as string]} valueSuffix={({
        values
      }) => {
        if (values[0] === 'item-1') {
          return <Badge color="positive">20% Off</Badge>;
        }
        return null;
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Item 1" value="item-1" titleSuffix={<ActionListItemBadge color="positive">20% Off</ActionListItemBadge>} />
            <ActionListItem title="Item 2" value="item-2" />
            <ActionListItem title="Item 3" value="item-3" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
      <BladeProvider themeTokens={bladeTheme} colorScheme="dark">
        <Box marginTop="spacing.11" marginLeft="-12px" backgroundColor="surface.background.gray.intense" height="100px" width="100px" />
      </BladeProvider>
    </Box>;
}`,...(L=(S=u.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var O,j,b;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.8">
      {/* Basic Variants */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Basic Variants
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Dropdown>
            <SelectInput label="Default" placeholder="Select option" name="default" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Option 1" value="option-1" />
                <ActionListItem title="Option 2" value="option-2" />
                <ActionListItem title="Option 3" value="option-3" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>

          <Dropdown>
            <SelectInput label="With Value" defaultValue="option-2" name="withValue" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Option 1" value="option-1" />
                <ActionListItem title="Option 2" value="option-2" />
                <ActionListItem title="Option 3" value="option-3" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>

          <Dropdown>
            <SelectInput label="With Help Text" placeholder="Select option" helpText="This is a helpful message" name="withHelpText" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Option 1" value="option-1" />
                <ActionListItem title="Option 2" value="option-2" />
                <ActionListItem title="Option 3" value="option-3" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>

          <Dropdown>
            <SelectInput label="Disabled" placeholder="Select option" isDisabled name="disabled" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Option 1" value="option-1" />
                <ActionListItem title="Option 2" value="option-2" />
                <ActionListItem title="Option 3" value="option-3" />
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
            <SelectInput label="Error State" defaultValue="invalid-option" validationState="error" errorText="This field has an error" name="error" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Option 1" value="option-1" />
                <ActionListItem title="Option 2" value="option-2" />
                <ActionListItem title="Option 3" value="option-3" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>

          <Dropdown>
            <SelectInput label="Success State" defaultValue="option-2" validationState="success" successText="This field is valid" name="success" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Option 1" value="option-1" />
                <ActionListItem title="Option 2" value="option-2" />
                <ActionListItem title="Option 3" value="option-3" />
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
            <SelectInput label="Medium Size" placeholder="Medium size select" size="medium" name="sizeMedium" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Option 1" value="option-1" />
                <ActionListItem title="Option 2" value="option-2" />
                <ActionListItem title="Option 3" value="option-3" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>

          <Dropdown>
            <SelectInput label="Large Size" placeholder="Large size select" size="large" name="sizeLarge" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Option 1" value="option-1" />
                <ActionListItem title="Option 2" value="option-2" />
                <ActionListItem title="Option 3" value="option-3" />
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
            <SelectInput label="Label Top" placeholder="Label on top" labelPosition="top" name="labelTop" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Option 1" value="option-1" />
                <ActionListItem title="Option 2" value="option-2" />
                <ActionListItem title="Option 3" value="option-3" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>

          <Dropdown>
            <SelectInput label="Label Left" placeholder="Label on left" labelPosition="left" name="labelLeft" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Option 1" value="option-1" />
                <ActionListItem title="Option 2" value="option-2" />
                <ActionListItem title="Option 3" value="option-3" />
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
            <SelectInput label="Required Field" placeholder="Select option" necessityIndicator="required" name="required" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Option 1" value="option-1" />
                <ActionListItem title="Option 2" value="option-2" />
                <ActionListItem title="Option 3" value="option-3" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>

          <Dropdown>
            <SelectInput label="Optional Field" placeholder="Select option" necessityIndicator="optional" name="optional" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Option 1" value="option-1" />
                <ActionListItem title="Option 2" value="option-2" />
                <ActionListItem title="Option 3" value="option-3" />
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
            <SelectInput label="Leading Icon" placeholder="Select option" icon={BankIcon} name="leadingIcon" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Option 1" value="option-1" />
                <ActionListItem title="Option 2" value="option-2" />
                <ActionListItem title="Option 3" value="option-3" />
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
            <SelectInput label="With Prefix" placeholder="Select currency" prefix="₹" name="withPrefix" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="INR" value="inr" />
                <ActionListItem title="USD" value="usd" />
                <ActionListItem title="EUR" value="eur" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>

          <Dropdown>
            <SelectInput label="With Suffix" placeholder="Select weight" suffix="kg" name="withSuffix" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="10" value="10" />
                <ActionListItem title="20" value="20" />
                <ActionListItem title="30" value="30" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
        </Box>
      </Box>

      {/* With Value Suffix */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Value Suffix
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Dropdown>
            <SelectInput label="Product with Discount" placeholder="Select product" defaultValue="product-1" valueSuffix={({
            values
          }) => {
            if (values[0] === 'product-1') {
              return <Badge color="positive">20% Off</Badge>;
            }
            return null;
          }} name="valueSuffix" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Product 1" value="product-1" titleSuffix={<ActionListItemBadge color="positive">20% Off</ActionListItemBadge>} />
                <ActionListItem title="Product 2" value="product-2" />
                <ActionListItem title="Product 3" value="product-3" />
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
          <SelectInput label="Country" placeholder="Select country" labelSuffix={<Tooltip content="Select your country for tax purposes" placement="right">
                <TooltipInteractiveWrapper display="flex">
                  <InfoIcon size="small" color="surface.icon.gray.muted" />
                </TooltipInteractiveWrapper>
              </Tooltip>} labelTrailing={<Link size="small">Learn more</Link>} name="labelSuffixTrailing" />
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="India" value="india" />
              <ActionListItem title="USA" value="usa" />
              <ActionListItem title="UK" value="uk" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
    </Box>;
}`,...(b=(j=d.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const C=["Default","Disabled","SelectInputShowcase"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:x,Disabled:u,SelectInputShowcase:d,__namedExportsOrder:C,default:N},Symbol.toStringTag,{value:"Module"}));export{H as s};
