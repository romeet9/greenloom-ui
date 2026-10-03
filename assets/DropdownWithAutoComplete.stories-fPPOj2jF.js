import{at as l,ad as g,j as e,B as d,b9 as r,aS as m,aq as u,ar as t,T as v,jb as fe,jc as Ie,au as D,ai as ye,al as xe,am as ve,ba as je,n as Ce,bb as be,ax as Le,eR as Ae,je as Be,ip as Se,C as T,jf as De,H as V}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const Me={title:"Components/Dropdown/With AutoComplete",component:l,parameters:{viewMode:"story",options:{showPanel:!1},previewTabs:{"storybook/docs/panel":{hidden:!0}},chromatic:{disableSnapshot:!0}}},y=[{title:"Mumbai",value:"mumbai",keywords:["Maharashtra"]},{title:"Pune",value:"pune",keywords:["Maharashtra"]},{title:"Bengaluru",value:"bengaluru",keywords:["Karnataka"]},{title:"Ooty",value:"ooty",keywords:["Tamil Nadu"]}],we=({selectionType:n="single"})=>e.jsx(d,{minHeight:"300px",padding:"spacing.5",children:e.jsxs(l,{selectionType:n,children:[e.jsx(r,{label:"City",placeholder:"Select your City",name:"action",onChange:({name:i,values:a})=>{console.log({name:i,values:a})},onInputValueChange:({name:i,value:a})=>{console.log({name:i,value:a})}}),e.jsx(m,{children:e.jsxs(u,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Bangalore",value:"bangalore"}),e.jsx(t,{title:"Mysore",value:"mysore"})]})})]})}),w=we.bind({}),h=we.bind({});h.args={selectionType:"multiple"};h.parameters={docs:{description:{story:'Add `selectionType="multiple"` to `<Dropdown />` component to make it multi-selectable'}}};const f=()=>{const n=y.map(s=>s.value),[i,a]=g.useState(n);return e.jsxs(d,{minHeight:"300px",padding:"spacing.5",children:[e.jsx(v,{marginBottom:"spacing.4",children:"In certain cases, you might want to change the filtering logic from default startsWith filtering. In this example we update the filtering logic to show name of cities when name of state is typed"}),e.jsxs(l,{selectionType:"multiple",children:[e.jsx(r,{label:"City",onInputValueChange:({value:s})=>{if(s){const c=y.filter(o=>o.title.toLowerCase().startsWith(s.toLowerCase())||o.keywords.find(p=>p.toLowerCase().includes(s.toLowerCase()))).map(o=>o.value);c.length>0?a(c):a([])}else a(n)},filteredValues:i,helpText:"Try typing 'maharashtra' in input"}),e.jsx(m,{children:i.length>0?e.jsx(u,{children:y.map(s=>e.jsx(t,{title:s.title,value:s.value,titleSuffix:e.jsx(fe,{children:s.keywords.map(c=>e.jsxs(Ie,{children:["in:",c]},c))})},s.value))}):e.jsx(d,{padding:"spacing.4",children:e.jsx(v,{children:"Custom No Results Found Message!"})})})]})]})},I=()=>{const n=y.map(s=>s.value),[i,a]=g.useState(n);return e.jsxs(d,{minHeight:"300px",padding:"spacing.5",children:[e.jsx(v,{marginBottom:"spacing.4",children:"In certain cases, you might want to change the filtering logic from default startsWith filtering. In this example we update the filtering logic to show name of cities when name of state is typed"}),e.jsxs(l,{selectionType:"multiple",children:[e.jsx(D,{label:"City"}),e.jsxs(ye,{children:[e.jsx(xe,{children:e.jsx(r,{label:"City",onInputValueChange:({value:s})=>{if(s){const c=y.filter(o=>o.title.toLowerCase().startsWith(s.toLowerCase())||o.keywords.find(p=>p.toLowerCase().includes(s.toLowerCase()))).map(o=>o.value);c.length>0?a(c):a([])}else a(n)},filteredValues:i,helpText:"Try typing 'maharashtra' in input"})}),e.jsx(ve,{children:i.length>0?e.jsx(u,{children:y.map(s=>e.jsx(t,{title:s.title,value:s.value},s.value))}):e.jsx(d,{children:e.jsx(v,{children:"Custom No Results Found Message!"})})})]})]})]})},j=()=>{const[n,i]=g.useState([]);return e.jsxs(d,{padding:"spacing.5",children:[e.jsxs(l,{selectionType:"multiple",children:[e.jsx(r,{label:"Filters",labelPosition:"inside-input",placeholder:"Select your Filters",name:"filters",value:n,onChange:({values:a})=>{i(a)}}),e.jsx(m,{children:e.jsxs(u,{children:[e.jsx(t,{title:"Mumbai",value:"Mumbai"}),e.jsx(t,{title:"Pune",value:"Pune"}),e.jsx(t,{title:"Bangalore",value:"Bangalore"}),e.jsx(t,{title:"Mysore",value:"Mysore"})]})})]}),e.jsx(d,{marginTop:"300px",display:"flex",gap:"spacing.3",children:n.map(a=>e.jsx(De,{onDismiss:()=>{i(n.filter(s=>s!==a))},children:a},a))})]})},M=()=>e.jsxs(u,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Bangalore",value:"bangalore"}),e.jsx(t,{title:"Mysore",value:"mysore"})]}),C=()=>{const n=Se(),i={label:"City",placeholder:"Select your City",name:"city"};return e.jsxs(d,{minHeight:"300px",padding:"spacing.5",children:[e.jsxs(v,{textAlign:"center",marginBottom:"spacing.8",children:["Resize the window to mobile width to see the ",e.jsx(T,{size:"medium",children:"DropdownOverlay"})," turn into a ",e.jsx(T,{size:"medium",children:"BottomSheet"})]}),e.jsxs(l,{selectionType:"multiple",children:[n?e.jsx(D,{...i}):e.jsx(r,{...i}),n?e.jsxs(ye,{children:[e.jsx(xe,{children:e.jsx(r,{...i})}),e.jsx(ve,{children:e.jsx(M,{})})]}):e.jsx(m,{children:e.jsx(M,{})})]})]})},b=()=>{const[n,i]=g.useState(["Mumbai","Pune","Bangalore"]),[a,s]=g.useState(""),c=g.useRef(null);return e.jsx(d,{maxWidth:"500px",minHeight:"300px",padding:"spacing.5",children:e.jsxs(l,{children:[e.jsx(r,{ref:c,label:"Select City",inputValue:a,onInputValueChange:({value:o})=>{s(o??"")}}),e.jsxs(m,{children:[e.jsx(u,{children:n.map((o,p)=>e.jsx(t,{title:o,value:o.toLowerCase()},o+String(p)))}),e.jsx(je,{children:e.jsxs(Ce,{icon:be,isFullWidth:!0,variant:"secondary",iconPosition:"right",isDisabled:!a.trim()||n.includes(a),onClick:()=>{var o;a.trim()&&!n.includes(a)&&((o=c.current)==null||o.focus(),s(""),i([...n,a]))},children:["Create ",a]})})]})]})})},L=()=>{const[n,i]=g.useState("");return e.jsx(d,{maxWidth:"500px",minHeight:"300px",padding:"spacing.5",children:e.jsxs(l,{selectionType:"multiple",onOpenChange:a=>{a||i("")},children:[e.jsx(r,{label:"Select City",inputValue:n,onInputValueChange:({value:a})=>{i(a??"")}}),e.jsx(m,{children:e.jsxs(u,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Bengaluru",value:"bengaluru"})]})})]})})},A=()=>e.jsxs(d,{maxWidth:"300px",padding:"spacing.5",paddingBottom:"400px",display:"flex",flexDirection:"column",gap:"300px",children:[e.jsxs(l,{selectionType:"multiple",children:[e.jsx(r,{label:"Select City",maxRows:"single",helpText:"Try selecting more than 4 items"}),e.jsx(m,{children:e.jsxs(u,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Bengaluru",value:"bengaluru"}),e.jsx(t,{title:"Mysuru",value:"mysuru"}),e.jsx(t,{title:"Ooty",value:"ooty"})]})})]}),e.jsxs(l,{selectionType:"multiple",children:[e.jsx(r,{label:"Select City",maxRows:"multiple",helpText:"Try selecting multiple items to see the input grow"}),e.jsx(m,{children:e.jsxs(u,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Bengaluru",value:"bengaluru"}),e.jsx(t,{title:"Mysuru",value:"mysuru"}),e.jsx(t,{title:"Ooty",value:"ooty"}),e.jsx(t,{title:"Coorg",value:"coorg"}),e.jsx(t,{title:"Kolhapur",value:"kolhapur"}),e.jsx(t,{title:"Munnar",value:"munnar"}),e.jsx(t,{title:"New York",value:"new-york"}),e.jsx(t,{title:"Lagos",value:"lagos"}),e.jsx(t,{title:"Indore",value:"indore"}),e.jsx(t,{title:"New Delhi",value:"new-delhi"})]})})]}),e.jsxs(l,{selectionType:"multiple",children:[e.jsx(r,{label:"Select City",maxRows:"expandable",helpText:"Try selecting multiple items to see the input grow in active state"}),e.jsx(m,{children:e.jsxs(u,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Bengaluru",value:"bengaluru"}),e.jsx(t,{title:"Mysuru",value:"mysuru"}),e.jsx(t,{title:"Ooty",value:"ooty"}),e.jsx(t,{title:"Coorg",value:"coorg"}),e.jsx(t,{title:"Kolhapur",value:"kolhapur"}),e.jsx(t,{title:"Munnar",value:"munnar"})]})})]})]}),R=["Mumbai","Pune","Bangalore","Mysore"],B=()=>{const[n,i]=g.useState(!1),[a,s]=g.useState(""),[c,o]=g.useState(!1);return e.jsx(d,{minHeight:"300px",padding:"spacing.5",children:e.jsxs(l,{selectionType:"single",onOpenChange:p=>{p||o(!0)},children:[e.jsx(r,{label:"City",placeholder:"Select your City",name:"city",inputValue:a,onInputValueChange:({value:p})=>{n&&i(!1),s(p??"")},onBlur:()=>{c&&(R.includes(a)||i(!0),o(!1))},errorText:"Invalid selection. You can only select items from the list",validationState:n?"error":"none",helpText:"Type something not in the list and click outside"}),e.jsx(m,{children:e.jsx(u,{children:R.map(p=>e.jsx(t,{title:p,value:p},p))})})]})})},S=()=>e.jsxs(d,{minHeight:"400px",padding:"spacing.5",children:[e.jsx(V,{size:"medium",marginBottom:"spacing.3",children:"Medium:"}),e.jsxs(l,{selectionType:"multiple",children:[e.jsx(r,{label:"City",placeholder:"Select your City",name:"action",onChange:({name:n,values:i})=>{console.log({name:n,values:i})},onInputValueChange:({name:n,value:i})=>{console.log({name:n,value:i})}}),e.jsx(m,{children:e.jsxs(u,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Bangalore",value:"bangalore"}),e.jsx(t,{title:"Mysore",value:"mysore"})]})})]}),e.jsx(V,{size:"medium",marginTop:"spacing.5",marginBottom:"spacing.3",children:"Large:"}),e.jsxs(l,{selectionType:"multiple",children:[e.jsx(r,{label:"City",placeholder:"Select your City",name:"action",size:"large",onChange:({name:n,values:i})=>{console.log({name:n,values:i})},onInputValueChange:({name:n,value:i})=>{console.log({name:n,value:i})}}),e.jsx(m,{children:e.jsxs(u,{children:[e.jsx(t,{title:"Mumbai",value:"mumbai"}),e.jsx(t,{title:"Pune",value:"pune"}),e.jsx(t,{title:"Bangalore",value:"bangalore"}),e.jsx(t,{title:"Mysore",value:"mysore"})]})})]})]}),x=()=>{const n=["Apples","Apricots",{name:"Avocados",description:"Avocados description"},"Bananas","Boysenberries","Blueberries","Bing Cherry","Cherries","Cantaloupe","Crab apples",{name:"Clementine",description:"Clementine description"},"Cucumbers","Damson plum","Dinosaur Eggs","Dates","Dewberries","Dragon","Elderberry","Eggfruit","Evergreen","Huckleberry","Entawak","Fig","Farkleberry","Finger Lime","Grapefruit","Grapes","Gooseberries","Guava","Honeydew melon","Hackberry","Honeycrisp Apples","Indian Prune","Indonesian Lime","Imbe","Indian Fig","Jackfruit","Java Apple","Jambolan",{name:"Kaffir Lime",description:"Kaffir description"},"Kumquat","Lime","Longan","Lychee","Loquat","Mango","Mandarin","Orange","Mulberry"];return e.jsxs(l,{selectionType:"multiple",children:[e.jsx(D,{label:"Select fruits"}),e.jsx(m,{children:e.jsx(u,{children:n.map(i=>typeof i=="string"?e.jsx(t,{title:i,value:i},i):e.jsx(t,{trailing:e.jsx(Be,{children:"⌘ + S"}),leading:e.jsx(Le,{icon:Ae}),description:i.description,title:i.name,value:i.name},i.name))})})]})};x.parameters={chromatic:{disableSnapshot:!1}};var O,k,P;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`({
  selectionType = 'single'
}) => {
  return <Box minHeight="300px" padding="spacing.5">
      <Dropdown selectionType={selectionType}>
        <AutoComplete label="City" placeholder="Select your City" name="action" onChange={({
        name,
        values
      }) => {
        console.log({
          name,
          values
        });
      }} onInputValueChange={({
        name,
        value
      }) => {
        console.log({
          name,
          value
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
}`,...(P=(k=w.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var H,F,E;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`({
  selectionType = 'single'
}) => {
  return <Box minHeight="300px" padding="spacing.5">
      <Dropdown selectionType={selectionType}>
        <AutoComplete label="City" placeholder="Select your City" name="action" onChange={({
        name,
        values
      }) => {
        console.log({
          name,
          values
        });
      }} onInputValueChange={({
        name,
        value
      }) => {
        console.log({
          name,
          value
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
}`,...(E=(F=h.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var W,z,G;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`(): React.ReactElement => {
  const cityValues = cities.map(city => city.value);
  const [filteredValues, setFilteredValues] = React.useState<string[]>(cityValues);
  return <Box minHeight="300px" padding="spacing.5">
      <Text marginBottom="spacing.4">
        In certain cases, you might want to change the filtering logic from default startsWith
        filtering. In this example we update the filtering logic to show name of cities when name of
        state is typed
      </Text>
      <Dropdown selectionType="multiple">
        <AutoComplete label="City" onInputValueChange={({
        value
      }) => {
        if (value) {
          const filteredItems = cities.filter(city => city.title.toLowerCase().startsWith(value.toLowerCase()) || city.keywords.find(keyword => keyword.toLowerCase().includes(value.toLowerCase()))).map(city => city.value);

          // If we find valid filtered items, we apply filter by setting state
          if (filteredItems.length > 0) {
            setFilteredValues(filteredItems);
          } else {
            // if we don't find anything, we filter nothing
            setFilteredValues([]);
          }
        } else {
          // If inputValue is empty, we set all options as filtered items
          setFilteredValues(cityValues);
        }
      }} filteredValues={filteredValues} helpText="Try typing 'maharashtra' in input" />
        <DropdownOverlay>
          {filteredValues.length > 0 ? <ActionList>
              {cities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} titleSuffix={<ActionListItemBadgeGroup>
                      {city.keywords.map(keyword => <ActionListItemBadge key={keyword}>in:{keyword}</ActionListItemBadge>)}
                    </ActionListItemBadgeGroup>} />)}
            </ActionList> : <Box padding="spacing.4">
              <Text>Custom No Results Found Message!</Text>
            </Box>}
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(G=(z=f.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var K,N,J;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`(): React.ReactElement => {
  const cityValues = cities.map(city => city.value);
  const [filteredValues, setFilteredValues] = React.useState<string[]>(cityValues);
  return <Box minHeight="300px" padding="spacing.5">
      <Text marginBottom="spacing.4">
        In certain cases, you might want to change the filtering logic from default startsWith
        filtering. In this example we update the filtering logic to show name of cities when name of
        state is typed
      </Text>
      <Dropdown selectionType="multiple">
        <SelectInput label="City" />
        <BottomSheet>
          <BottomSheetHeader>
            <AutoComplete label="City" onInputValueChange={({
            value
          }) => {
            if (value) {
              const filteredItems = cities.filter(city => city.title.toLowerCase().startsWith(value.toLowerCase()) || city.keywords.find(keyword => keyword.toLowerCase().includes(value.toLowerCase()))).map(city => city.value);

              // If we find valid filtered items, we apply filter by setting state
              if (filteredItems.length > 0) {
                setFilteredValues(filteredItems);
              } else {
                // if we don't find anything, we filter nothing
                setFilteredValues([]);
              }
            } else {
              // If inputValue is empty, we set all options as filtered items
              setFilteredValues(cityValues);
            }
          }} filteredValues={filteredValues} helpText="Try typing 'maharashtra' in input" />
          </BottomSheetHeader>
          <BottomSheetBody>
            {filteredValues.length > 0 ? <ActionList>
                {cities.map(city => <ActionListItem key={city.value} title={city.title} value={city.value} />)}
              </ActionList> : <Box>
                <Text>Custom No Results Found Message!</Text>
              </Box>}
          </BottomSheetBody>
        </BottomSheet>
      </Dropdown>
    </Box>;
}`,...(J=(N=I.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var q,Y,_;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`(): React.ReactElement => {
  const [selections, setSelections] = React.useState<string[]>([]);
  return <Box padding="spacing.5">
      <Dropdown selectionType="multiple">
        <AutoComplete label="Filters" labelPosition="inside-input" placeholder="Select your Filters" name="filters" value={selections} onChange={({
        values
      }) => {
        setSelections(values);
      }} />
        <DropdownOverlay>
          {/*
            We are setting value same as title so we can just show value in Tag.
            If you want value to be different, you can create an object and map value to title while creating tags
           */}
          <ActionList>
            <ActionListItem title="Mumbai" value="Mumbai" />
            <ActionListItem title="Pune" value="Pune" />
            <ActionListItem title="Bangalore" value="Bangalore" />
            <ActionListItem title="Mysore" value="Mysore" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
      <Box marginTop="300px" display="flex" gap="spacing.3">
        {selections.map(filterValue => <Tag key={filterValue} onDismiss={() => {
        setSelections(selections.filter(selectionValue => selectionValue !== filterValue));
      }}>
            {filterValue}
          </Tag>)}
      </Box>
    </Box>;
}`,...(_=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var Q,U,X;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`(): React.ReactElement => {
  const isMobile = useIsMobile();
  const triggerProps = {
    label: 'City',
    placeholder: 'Select your City',
    name: 'city'
  };
  return <Box minHeight="300px" padding="spacing.5">
      <Text textAlign="center" marginBottom="spacing.8">
        Resize the window to mobile width to see the <Code size="medium">DropdownOverlay</Code> turn
        into a <Code size="medium">BottomSheet</Code>
      </Text>
      <Dropdown selectionType="multiple">
        {isMobile ? <SelectInput {...triggerProps} /> : <AutoComplete {...triggerProps} />}
        {isMobile ? <BottomSheet>
            <BottomSheetHeader>
              <AutoComplete {...triggerProps} />
            </BottomSheetHeader>
            <BottomSheetBody>
              <ResponsiveCityList />
            </BottomSheetBody>
          </BottomSheet> : <DropdownOverlay>
            <ResponsiveCityList />
          </DropdownOverlay>}
      </Dropdown>
    </Box>;
}`,...(X=(U=C.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`(): React.ReactElement => {
  const [items, setItems] = React.useState(['Mumbai', 'Pune', 'Bangalore']);
  const [inputValue, setInputValue] = React.useState('');
  const autoCompleteRef = React.useRef<BladeElementRef>(null);
  return <Box maxWidth="500px" minHeight="300px" padding="spacing.5">
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
            <Button icon={PlusIcon} isFullWidth variant="secondary" iconPosition="right" isDisabled={!inputValue.trim() || items.includes(inputValue)} onClick={() => {
            if (inputValue.trim() && !items.includes(inputValue)) {
              autoCompleteRef.current?.focus();
              setInputValue('');
              setItems([...items, inputValue]);
            }
          }}>
              Create {inputValue}
            </Button>
          </DropdownFooter>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ie,ne;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`(): React.ReactElement => {
  const [inputValue, setInputValue] = React.useState('');
  return <Box maxWidth="500px" minHeight="300px" padding="spacing.5">
      <Dropdown selectionType="multiple" onOpenChange={isOpen => {
      if (!isOpen) {
        setInputValue('');
      }
    }}>
        <AutoComplete label="Select City" inputValue={inputValue} onInputValueChange={({
        value
      }) => {
        setInputValue(value ?? '');
      }} />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bengaluru" value="bengaluru" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(ne=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var ae,se,oe;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box maxWidth="300px" padding="spacing.5" paddingBottom="400px" display="flex" flexDirection="column" gap="300px">
      <Dropdown selectionType="multiple">
        <AutoComplete label="Select City" maxRows="single" helpText="Try selecting more than 4 items" />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bengaluru" value="bengaluru" />
            <ActionListItem title="Mysuru" value="mysuru" />
            <ActionListItem title="Ooty" value="ooty" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>

      <Dropdown selectionType="multiple">
        <AutoComplete label="Select City" maxRows="multiple" helpText="Try selecting multiple items to see the input grow" />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bengaluru" value="bengaluru" />
            <ActionListItem title="Mysuru" value="mysuru" />
            <ActionListItem title="Ooty" value="ooty" />
            <ActionListItem title="Coorg" value="coorg" />
            <ActionListItem title="Kolhapur" value="kolhapur" />
            <ActionListItem title="Munnar" value="munnar" />
            <ActionListItem title="New York" value="new-york" />
            <ActionListItem title="Lagos" value="lagos" />
            <ActionListItem title="Indore" value="indore" />
            <ActionListItem title="New Delhi" value="new-delhi" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>

      <Dropdown selectionType="multiple">
        <AutoComplete label="Select City" maxRows="expandable" helpText="Try selecting multiple items to see the input grow in active state" />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bengaluru" value="bengaluru" />
            <ActionListItem title="Mysuru" value="mysuru" />
            <ActionListItem title="Ooty" value="ooty" />
            <ActionListItem title="Coorg" value="coorg" />
            <ActionListItem title="Kolhapur" value="kolhapur" />
            <ActionListItem title="Munnar" value="munnar" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(oe=(se=A.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,re,ue;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`(): React.ReactElement => {
  const [isError, setIsError] = React.useState(false);
  const [currentInputValue, setCurrentInputValue] = React.useState('');
  const [isDismissed, setIsDismissed] = React.useState(false);
  return <Box minHeight="300px" padding="spacing.5">
      <Dropdown selectionType="single" onOpenChange={isOpen => {
      if (!isOpen) {
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
          if (!errorStateCities.includes(currentInputValue)) {
            setIsError(true);
          }
          setIsDismissed(false);
        }
      }} errorText="Invalid selection. You can only select items from the list" validationState={isError ? 'error' : 'none'} helpText="Type something not in the list and click outside" />
        <DropdownOverlay>
          <ActionList>
            {errorStateCities.map(city => <ActionListItem key={city} title={city} value={city} />)}
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(ue=(re=B.parameters)==null?void 0:re.docs)==null?void 0:ue.source}}};var ce,pe,me;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box minHeight="400px" padding="spacing.5">
      <Heading size="medium" marginBottom="spacing.3">
        Medium:
      </Heading>
      <Dropdown selectionType="multiple">
        <AutoComplete label="City" placeholder="Select your City" name="action" onChange={({
        name,
        values
      }) => {
        console.log({
          name,
          values
        });
      }} onInputValueChange={({
        name,
        value
      }) => {
        console.log({
          name,
          value
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
      <Heading size="medium" marginTop="spacing.5" marginBottom="spacing.3">
        Large:
      </Heading>
      <Dropdown selectionType="multiple">
        <AutoComplete label="City" placeholder="Select your City" name="action" size="large" onChange={({
        name,
        values
      }) => {
        console.log({
          name,
          values
        });
      }} onInputValueChange={({
        name,
        value
      }) => {
        console.log({
          name,
          value
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
}`,...(me=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var de,ge,he;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`(): React.ReactElement => {
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
      <SelectInput label="Select fruits" />
      <DropdownOverlay>
        <ActionList>
          {fruits.map(fruit => {
          if (typeof fruit === 'string') {
            return <ActionListItem key={fruit} title={fruit} value={fruit} />;
          }
          return <ActionListItem trailing={<ActionListItemText>⌘ + S</ActionListItemText>} leading={<ActionListItemIcon icon={HomeIcon} />} description={fruit.description} key={fruit.name} title={fruit.name} value={fruit.name} />;
        })}
        </ActionList>
      </DropdownOverlay>
    </Dropdown>;
}`,...(he=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};const Re=["WithSingleSelect","WithMultiSelect","ControlledFiltering","ControlledFilteringWithBottomSheet","TagsOutside","ResponsiveBottomSheet","CreatableItems","ClearInputOnDismiss","MaxRowsStates","WithErrorState","WithSizes","InternalDropdownPerformance"];export{L as ClearInputOnDismiss,f as ControlledFiltering,I as ControlledFilteringWithBottomSheet,b as CreatableItems,x as InternalDropdownPerformance,A as MaxRowsStates,C as ResponsiveBottomSheet,j as TagsOutside,B as WithErrorState,h as WithMultiSelect,w as WithSingleSelect,S as WithSizes,Re as __namedExportsOrder,Me as default};
