import{jF as a,j as e,B as l,T as d,at as g,b8 as A,aS as x,aq as p,ar as o,b5 as Te,l as xe,y as Se,z as be,ak as fe,X as Le,ad as h,cT as W,a7 as ye,c5 as _,eT as we,cS as V,gI as je,x as O,as as P,ax as v,k as Ie,iV as Be,iW as Ce,iX as Ae,iY as z,iZ as De,i_ as Pe,i$ as R,C as ve,a8 as ze,jG as Re,jH as Oe}from"./iframe-C1qQ09LF.js";import{S as ke}from"./Sandbox.web-B2xP21Qp.js";import{S as We}from"./StoryPageWrapper-CS0_5maI.js";import{g as _e}from"./storybookArgTypes-DFfQV31s.js";const n={BASE_PROPS:"Search Input Props",LABEL_PROPS:"Label Props",TRAILING_VISUAL_PROPS:"Trailing Visual Props",KEYBOARD_PROPS:"Keyboard Props"},Ve={title:"Components/Input/SearchInput",component:a,args:{defaultValue:void 0,placeholder:"Search payment products, settings, and more",name:"search",isDisabled:!1,value:void 0,autoFocus:!1,size:"medium",onChange:({name:s,value:i})=>{console.log(`input field ${s} content changed to ${i}`)},onFocus:({name:s,value:i})=>{console.log(`input field ${s} received focus. The value is ${i}`)},onBlur:({name:s,value:i})=>{console.log(`input field ${s} content lost focus. The value is ${i}`)},label:"Search here",labelPosition:"top",helpText:void 0,showHelpTextOnFocus:!1,autoCapitalize:void 0},tags:["autodocs"],argTypes:{defaultValue:{table:{category:n.BASE_PROPS}},testID:{table:{category:n.BASE_PROPS}},size:{table:{category:n.BASE_PROPS}},placeholder:{table:{category:n.BASE_PROPS}},name:{table:{category:n.BASE_PROPS}},isDisabled:{table:{category:n.BASE_PROPS}},value:{table:{category:n.BASE_PROPS}},autoFocus:{table:{category:n.BASE_PROPS}},onSubmit:{control:{disable:!0},table:{category:n.BASE_PROPS}},onClick:{control:{disable:!0},table:{category:n.BASE_PROPS}},onChange:{table:{category:n.BASE_PROPS}},onFocus:{control:{disable:!0},table:{category:n.BASE_PROPS}},onBlur:{control:{disable:!0},table:{category:n.BASE_PROPS}},label:{table:{category:n.LABEL_PROPS}},accessibilityLabel:{table:{category:n.LABEL_PROPS}},labelPosition:{table:{category:n.LABEL_PROPS}},labelSuffix:{table:{category:n.LABEL_PROPS}},labelTrailing:{table:{category:n.LABEL_PROPS}},helpText:{table:{category:n.BASE_PROPS}},showHelpTextOnFocus:{table:{category:n.BASE_PROPS}},onClearButtonClick:{table:{category:n.TRAILING_VISUAL_PROPS}},isLoading:{table:{category:n.TRAILING_VISUAL_PROPS}},autoCapitalize:{table:{category:n.KEYBOARD_PROPS}},..._e()},parameters:{docs:{page:()=>e.jsxs(We,{componentDescription:"The SearchInput component is a component that can be used to input name, email, telephone, url, search or plain text.",componentName:"SearchInput",apiDecisionLink:"https://github.com/razorpay/blade/blob/master/packages/blade/src/components/Input/SearchInput/_decisions/decisions.md",figmaURL:"https://www.figma.com/file/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=85072%3A160345&mode=design&t=Pv93G8LK6OtL4wwk-1",children:[e.jsx(Le,{children:"Usage"}),e.jsx(ke,{children:`
              import { SearchInput } from '@greenloom/ui/components';

              function App() {
                return (
                  <SearchInput 
                    label="Name" 
                    placeholder="Enter Name" 
                    onChange={(e) => console.log(e)} 
                  />
                )
              }

              export default App;
            `})]})}}},M=[{title:"Account & Settings",icon:W},{title:"Profile",icon:ye},{title:"Transactions",icon:_},{title:"Help",icon:we},{title:"Settlements",icon:V},{title:"Payouts",icon:je}],k=s=>{const[i,u]=h.useState(""),m=M.filter(r=>r.title.toLowerCase().includes(i.toLowerCase()));return e.jsxs(O,{children:[e.jsx(a,{...s,onChange:({value:r})=>u(r)}),e.jsx(p,{children:e.jsx(P,{title:`${m.length} items found`,children:m.map((r,c)=>e.jsx(o,{title:r.title,value:r.title,leading:e.jsx(v,{icon:r.icon})},c))})})]})},y=k.bind({});y.storyName="Default";const f=k.bind({});f.storyName="SearchInput with Help Text";f.args={helpText:"Please enter an item to search"};const I=k.bind({});I.storyName="SearchInput without label";I.args={defaultValue:"Transactions",label:void 0,accessibilityLabel:"Search payment products, settings, and more."};const Me=({...s})=>e.jsxs(l,{display:"flex",flexDirection:"column",children:[e.jsx(d,{size:"large",marginBottom:"spacing.4",children:"Medium Size:"}),e.jsx(a,{...s,size:"medium"}),e.jsx(d,{size:"large",marginTop:"spacing.4",marginBottom:"spacing.4",children:"Large Size:"}),e.jsx(a,{...s,size:"large"})]}),D=Me.bind({}),Ee=s=>{const[i,u]=h.useState(""),[m,r]=h.useState(!1);h.useEffect(()=>{i.length>0&&(r(!0),setTimeout(()=>{r(!1)},1e3))},[i]);const c=[{title:"Transactions",icon:_},{title:"Settlements",icon:V},{title:"Account & Settings",icon:W}],S=M.filter(t=>t.title.toLowerCase().includes(i.toLowerCase()));return e.jsxs(g,{children:[e.jsx(a,{label:"Search",placeholder:"Search here",...s,onChange:({value:t})=>u(t),trailing:e.jsxs(g,{children:[e.jsx(A,{defaultValue:"home"}),e.jsx(x,{children:e.jsxs(p,{children:[e.jsx(o,{title:"Home",value:"home"}),e.jsx(o,{title:"Pricing",value:"pricing"})]})})]})}),e.jsx(x,{children:m?e.jsx(O,{display:"flex",justifyContent:"center",padding:"spacing.4",children:e.jsx(Ie,{accessibilityLabel:"Fetching data"})}):e.jsx(p,{children:i.length===0?e.jsx(P,{title:"Popular Searches",children:c.map((t,b)=>e.jsx(o,{title:t.title,value:t.title,leading:e.jsx(v,{icon:t.icon})},b))}):e.jsx(P,{title:`${S.length} items found`,children:S.map((t,b)=>e.jsx(o,{title:t.title,value:t.title,leading:e.jsx(v,{icon:t.icon})},b))})})})]})},w=Ee.bind({});w.storyName="With Dropdown";const He=s=>{const[i,u]=h.useState(""),[m,r]=h.useState(!1);h.useEffect(()=>{i.length>0&&(r(!0),setTimeout(()=>{r(!1)},1e3))},[i]);const c=[{title:"Transactions",icon:_},{title:"Settlements",icon:V},{title:"Account & Settings",icon:W}],S=M.filter(t=>t.title.toLowerCase().includes(i.toLowerCase()));return e.jsxs(g,{children:[e.jsx(a,{label:"Search",placeholder:"Search here",...s,onChange:({value:t})=>u(t),trailing:e.jsxs(g,{children:[e.jsx(A,{isDisabled:!0,defaultValue:"home"}),e.jsx(x,{children:e.jsxs(p,{children:[e.jsx(o,{title:"Home",value:"home"}),e.jsx(o,{title:"Pricing",value:"pricing"})]})})]})}),e.jsx(x,{children:m?e.jsx(O,{display:"flex",justifyContent:"center",padding:"spacing.4",children:e.jsx(Ie,{accessibilityLabel:"Fetching data"})}):e.jsx(p,{children:i.length===0?e.jsx(P,{title:"Popular Searches",children:c.map((t,b)=>e.jsx(o,{title:t.title,value:t.title,leading:e.jsx(v,{icon:t.icon})},b))}):e.jsx(P,{title:`${S.length} items found`,children:S.map((t,b)=>e.jsx(o,{title:t.title,value:t.title,leading:e.jsx(v,{icon:t.icon})},b))})})})]})},Fe=s=>{const[i,u]=h.useState("payment-products");return e.jsx(l,{display:"flex",flexDirection:"column",children:e.jsx(a,{label:"Search",placeholder:"Search here",...s,trailing:e.jsxs(g,{children:[e.jsx(A,{value:i,onChange:({value:m})=>u(m)}),e.jsx(x,{children:e.jsxs(p,{children:[e.jsx(o,{title:"Payment Products",value:"payment-products"}),e.jsx(o,{title:"Business Credit Card",value:"business-credit-card"}),e.jsx(o,{title:"Lending Tech Stack",value:"lending-tech-stack"})]})})]})})})},j=Fe.bind({});j.storyName="With Controlled Dropdown";const B=He.bind({});B.storyName="With Dropdown Disabled";const Ne=()=>{const[s,i]=h.useState(""),m={nodes:[...Array.from({length:10},(r,c)=>({id:(c+1).toString(),paymentId:`rzp${Math.floor(Math.random()*1e6)}`,amount:Number((Math.random()*1e4).toFixed(2)),date:new Date(2021,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1),method:["Bank Transfer","Credit Card","UPI","PayPal"][Math.floor(c/4)],account:Math.floor(Math.random()*1e9).toString()}))]};return e.jsx(Be,{data:m,toolbar:e.jsx(Re,{children:e.jsx(Oe,{children:e.jsx(O,{width:"300px",children:e.jsx(a,{label:"Search Transaction",onChange:({value:r})=>i(r),placeholder:"Transaction method",helpText:'Search by "Credit Card", "UPI", "Paypal", etc.'})})})}),children:r=>e.jsxs(e.Fragment,{children:[e.jsx(Ce,{children:e.jsxs(Ae,{children:[e.jsx(z,{children:"ID"}),e.jsx(z,{children:"Amount"}),e.jsx(z,{children:"Date"}),e.jsx(z,{children:"Method"})]})}),e.jsx(De,{children:r.filter(c=>c.method.toLowerCase().includes(s.toLowerCase())).map((c,S)=>{var t;return e.jsxs(Pe,{item:c,children:[e.jsx(R,{children:e.jsx(ve,{size:"medium",children:c.paymentId})}),e.jsx(R,{children:e.jsx(ze,{value:c.amount})}),e.jsx(R,{children:(t=c.date)==null?void 0:t.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(R,{children:c.method})]},S)})})]})})},C=Ne.bind({});C.storyName="With Table";const T=k.bind({});T.storyName="SearchInput with Label Suffix & Trailing";T.args={label:"Search here",placeholder:"Search here",labelSuffix:e.jsx(Se,{content:"Search for payment products, settings, and more",placement:"right",children:e.jsx(be,{display:"flex",children:e.jsx(fe,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(xe,{size:"small",children:"Learn more"})};const L=()=>e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.8",children:[e.jsxs(l,{children:[e.jsx(d,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Basic Variants"}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(a,{label:"Default",placeholder:"Search payment products, settings, and more",name:"default"}),e.jsx(a,{label:"With Value",defaultValue:"Transactions",name:"withValue"}),e.jsx(a,{label:"With Help Text",placeholder:"Search payment products, settings, and more",helpText:"This is a helpful message",name:"withHelpText"}),e.jsx(a,{label:"Disabled",placeholder:"Search payment products, settings, and more",isDisabled:!0,name:"disabled"})]})]}),e.jsxs(l,{children:[e.jsx(d,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Sizes"}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(a,{label:"Medium Size",placeholder:"Medium size search input",size:"medium",name:"sizeMedium"}),e.jsx(a,{label:"Large Size",placeholder:"Large size search input",size:"large",name:"sizeLarge"})]})]}),e.jsxs(l,{children:[e.jsx(d,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Label Positions"}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsx(a,{label:"Label Top",placeholder:"Label on top",labelPosition:"top",name:"labelTop"}),e.jsx(a,{label:"Label Left",placeholder:"Label on left",labelPosition:"left",name:"labelLeft"})]})]}),e.jsxs(l,{children:[e.jsx(d,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Without Label"}),e.jsx(a,{placeholder:"Search payment products, settings, and more",accessibilityLabel:"Search payment products, settings, and more",defaultValue:"Transactions",name:"withoutLabel"})]}),e.jsxs(l,{children:[e.jsx(d,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Trailing Dropdown"}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[e.jsxs(l,{children:[e.jsx(d,{weight:"semibold",marginBottom:"spacing.3",children:"Medium Size"}),e.jsx(a,{label:"Search",placeholder:"Search here",size:"medium",trailing:e.jsxs(g,{children:[e.jsx(A,{defaultValue:"payment-products"}),e.jsx(x,{children:e.jsxs(p,{children:[e.jsx(o,{title:"Payment Products",value:"payment-products"}),e.jsx(o,{title:"Business Credit Card",value:"business-credit-card"}),e.jsx(o,{title:"Lending Tech Stack",value:"lending-tech-stack"})]})})]}),name:"trailingDropdownMedium"})]}),e.jsxs(l,{children:[e.jsx(d,{weight:"semibold",marginBottom:"spacing.3",children:"Large Size"}),e.jsx(a,{label:"Search",placeholder:"Search here",size:"large",trailing:e.jsxs(g,{children:[e.jsx(A,{defaultValue:"payment-products"}),e.jsx(x,{children:e.jsxs(p,{children:[e.jsx(o,{title:"Payment Products",value:"payment-products"}),e.jsx(o,{title:"Business Credit Card",value:"business-credit-card"}),e.jsx(o,{title:"Lending Tech Stack",value:"lending-tech-stack"})]})})]}),name:"trailingDropdownLarge"})]}),e.jsxs(l,{children:[e.jsx(d,{weight:"semibold",marginBottom:"spacing.3",children:"With Icon in Dropdown"}),e.jsx(a,{label:"Search",placeholder:"Search here",trailing:e.jsxs(g,{children:[e.jsx(A,{defaultValue:"www",icon:Te}),e.jsx(x,{children:e.jsxs(p,{children:[e.jsx(o,{title:"www.",value:"www"}),e.jsx(o,{title:"blog.",value:"blog"}),e.jsx(o,{title:"shop.",value:"shop"})]})})]}),name:"trailingDropdownWithIcon"})]})]})]}),e.jsxs(l,{children:[e.jsx(d,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Loading State"}),e.jsx(a,{label:"Loading",placeholder:"Search payment products, settings, and more",isLoading:!0,name:"loading"})]}),e.jsxs(l,{children:[e.jsx(d,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Clear Button"}),e.jsx(a,{label:"With Clear Button",defaultValue:"Clear me",name:"clearButton"})]}),e.jsxs(l,{children:[e.jsx(d,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"surface.text.gray.subtle",children:"With Label Suffix & Trailing"}),e.jsx(a,{label:"Search",placeholder:"Search payment products, settings, and more",labelSuffix:e.jsx(Se,{content:"Search for payment products, settings, and more",placement:"right",children:e.jsx(be,{display:"flex",children:e.jsx(fe,{size:"small",color:"surface.icon.gray.muted"})})}),labelTrailing:e.jsx(xe,{size:"small",children:"Learn more"}),name:"labelSuffixTrailing"})]})]});L.storyName="Showcase - All Variants";L.parameters={docs:{description:{story:"A comprehensive showcase of all SearchInput variants including basic states, sizes, label positions, dropdowns, loading states, and more."}}};var E,H,F;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const filteredItems = menuItems.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return <BaseBox>
      <SearchInputComponent {...args} onChange={({
      value
    }) => setSearchTerm(value as string)} />
      <ActionList>
        <ActionListSection title={\`\${filteredItems.length} items found\`}>
          {filteredItems.map((item, index) => <ActionListItem key={index} title={item.title} value={item.title} leading={<ActionListItemIcon icon={item.icon} />} />)}
        </ActionListSection>
      </ActionList>
    </BaseBox>;
}`,...(F=(H=y.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var N,$,U;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const filteredItems = menuItems.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return <BaseBox>
      <SearchInputComponent {...args} onChange={({
      value
    }) => setSearchTerm(value as string)} />
      <ActionList>
        <ActionListSection title={\`\${filteredItems.length} items found\`}>
          {filteredItems.map((item, index) => <ActionListItem key={index} title={item.title} value={item.title} leading={<ActionListItemIcon icon={item.icon} />} />)}
        </ActionListSection>
      </ActionList>
    </BaseBox>;
}`,...(U=($=f.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var G,K,Y;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const filteredItems = menuItems.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return <BaseBox>
      <SearchInputComponent {...args} onChange={({
      value
    }) => setSearchTerm(value as string)} />
      <ActionList>
        <ActionListSection title={\`\${filteredItems.length} items found\`}>
          {filteredItems.map((item, index) => <ActionListItem key={index} title={item.title} value={item.title} leading={<ActionListItemIcon icon={item.icon} />} />)}
        </ActionListSection>
      </ActionList>
    </BaseBox>;
}`,...(Y=(K=I.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var X,Z,q;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`({
  ...args
}) => {
  return <Box display="flex" flexDirection="column">
      <Text size="large" marginBottom="spacing.4">
        Medium Size:
      </Text>
      <SearchInputComponent {...args} size="medium" />
      <Text size="large" marginTop="spacing.4" marginBottom="spacing.4">
        Large Size:
      </Text>
      <SearchInputComponent {...args} size="large" />
    </Box>;
}`,...(q=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var Q,J,ee;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isFetching, setIsFetching] = React.useState(false);

  // Set a timeout to simulate fetching data
  React.useEffect(() => {
    if (searchTerm.length > 0) {
      setIsFetching(true);
      setTimeout(() => {
        setIsFetching(false);
      }, 1000);
    }
  }, [searchTerm]);
  const popularItems = [{
    title: 'Transactions',
    icon: TransactionsIcon
  }, {
    title: 'Settlements',
    icon: SettlementsIcon
  }, {
    title: 'Account & Settings',
    icon: SettingsIcon
  }];
  const filteredItems = menuItems.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return <Dropdown>
      <SearchInputComponent label="Search" placeholder="Search here" {...args} onChange={({
      value
    }) => setSearchTerm(value as string)} trailing={<Dropdown>
            <InputDropdownButton defaultValue="home" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Home" value="home" />
                <ActionListItem title="Pricing" value="pricing" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>} />

      <DropdownOverlay>
        {isFetching ? <BaseBox display="flex" justifyContent="center" padding="spacing.4">
            <Spinner accessibilityLabel="Fetching data" />
          </BaseBox> : <ActionList>
            {searchTerm.length === 0 ? <ActionListSection title="Popular Searches">
                {popularItems.map((item, index) => <ActionListItem key={index} title={item.title} value={item.title} leading={<ActionListItemIcon icon={item.icon} />} />)}
              </ActionListSection> : <ActionListSection title={\`\${filteredItems.length} items found\`}>
                {filteredItems.map((item, index) => <ActionListItem key={index} title={item.title} value={item.title} leading={<ActionListItemIcon icon={item.icon} />} />)}
              </ActionListSection>}
          </ActionList>}
      </DropdownOverlay>
    </Dropdown>;
}`,...(ee=(J=w.parameters)==null?void 0:J.docs)==null?void 0:ee.source}}};var te,ne,ae;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  const [inputDropdownValue, setInputDropdownValue] = React.useState('payment-products');
  return <Box display="flex" flexDirection="column">
      <SearchInputComponent label="Search" placeholder="Search here" {...args} trailing={<Dropdown>
            <InputDropdownButton value={inputDropdownValue} onChange={({
        value
      }) => setInputDropdownValue(value)} />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Payment Products" value="payment-products" />
                <ActionListItem title="Business Credit Card" value="business-credit-card" />
                <ActionListItem title="Lending Tech Stack" value="lending-tech-stack" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>} />
    </Box>;
}`,...(ae=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ie,oe,se;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isFetching, setIsFetching] = React.useState(false);

  // Set a timeout to simulate fetching data
  React.useEffect(() => {
    if (searchTerm.length > 0) {
      setIsFetching(true);
      setTimeout(() => {
        setIsFetching(false);
      }, 1000);
    }
  }, [searchTerm]);
  const popularItems = [{
    title: 'Transactions',
    icon: TransactionsIcon
  }, {
    title: 'Settlements',
    icon: SettlementsIcon
  }, {
    title: 'Account & Settings',
    icon: SettingsIcon
  }];
  const filteredItems = menuItems.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return <Dropdown>
      <SearchInputComponent label="Search" placeholder="Search here" {...args} onChange={({
      value
    }) => setSearchTerm(value as string)} trailing={<Dropdown>
            <InputDropdownButton isDisabled defaultValue="home" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem title="Home" value="home" />
                <ActionListItem title="Pricing" value="pricing" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>} />

      <DropdownOverlay>
        {isFetching ? <BaseBox display="flex" justifyContent="center" padding="spacing.4">
            <Spinner accessibilityLabel="Fetching data" />
          </BaseBox> : <ActionList>
            {searchTerm.length === 0 ? <ActionListSection title="Popular Searches">
                {popularItems.map((item, index) => <ActionListItem key={index} title={item.title} value={item.title} leading={<ActionListItemIcon icon={item.icon} />} />)}
              </ActionListSection> : <ActionListSection title={\`\${filteredItems.length} items found\`}>
                {filteredItems.map((item, index) => <ActionListItem key={index} title={item.title} value={item.title} leading={<ActionListItemIcon icon={item.icon} />} />)}
              </ActionListSection>}
          </ActionList>}
      </DropdownOverlay>
    </Dropdown>;
}`,...(se=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,le,ce;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const [searchTerm, setSearchTerm] = React.useState('');
  type Item = {
    id: string;
    paymentId: string;
    amount: number;
    date: Date;
    method: string;
  };
  const nodes: Item[] = [...Array.from({
    length: 10
  }, (_, i) => ({
    id: (i + 1).toString(),
    paymentId: \`rzp\${Math.floor(Math.random() * 1000000)}\`,
    amount: Number((Math.random() * 10000).toFixed(2)),
    date: new Date(2021, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
    method: ['Bank Transfer', 'Credit Card', 'UPI', 'PayPal'][Math.floor(i / 4)],
    account: Math.floor(Math.random() * 1000000000).toString()
  }))];
  const data: TableData<Item> = {
    nodes
  };
  return <Table data={data} toolbar={<TableToolbar>
          <TableToolbarActions>
            <BaseBox width="300px">
              <SearchInputComponent label="Search Transaction" onChange={({
          value
        }) => setSearchTerm(value as string)} placeholder="Transaction method" helpText='Search by "Credit Card", "UPI", "Paypal", etc.' />
            </BaseBox>
          </TableToolbarActions>
        </TableToolbar>}>
      {(tableData: Item[]) => <>
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Method</TableHeaderCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
            {tableData
        // Filter item based on the search input value
        .filter(tableItem => tableItem.method.toLowerCase().includes(searchTerm.toLowerCase())).map((tableItem, index) => <TableRow key={index} item={tableItem}>
                  <TableCell>
                    <Code size="medium">{tableItem.paymentId}</Code>
                  </TableCell>
                  <TableCell>
                    <Amount value={tableItem.amount} />
                  </TableCell>
                  <TableCell>
                    {tableItem.date?.toLocaleDateString('en-IN', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit'
            })}
                  </TableCell>
                  <TableCell>{tableItem.method}</TableCell>
                </TableRow>)}
          </TableBody>
        </>}
    </Table>;
}`,...(ce=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,me,pe;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`args => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const filteredItems = menuItems.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return <BaseBox>
      <SearchInputComponent {...args} onChange={({
      value
    }) => setSearchTerm(value as string)} />
      <ActionList>
        <ActionListSection title={\`\${filteredItems.length} items found\`}>
          {filteredItems.map((item, index) => <ActionListItem key={index} title={item.title} value={item.title} leading={<ActionListItemIcon icon={item.icon} />} />)}
        </ActionListSection>
      </ActionList>
    </BaseBox>;
}`,...(pe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var he,ue,ge;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <Box display="flex" flexDirection="column" gap="spacing.8">
      {/* Basic Variants */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Basic Variants
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <SearchInputComponent label="Default" placeholder="Search payment products, settings, and more" name="default" />
          <SearchInputComponent label="With Value" defaultValue="Transactions" name="withValue" />
          <SearchInputComponent label="With Help Text" placeholder="Search payment products, settings, and more" helpText="This is a helpful message" name="withHelpText" />
          <SearchInputComponent label="Disabled" placeholder="Search payment products, settings, and more" isDisabled name="disabled" />
        </Box>
      </Box>

      {/* Sizes */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Sizes
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <SearchInputComponent label="Medium Size" placeholder="Medium size search input" size="medium" name="sizeMedium" />
          <SearchInputComponent label="Large Size" placeholder="Large size search input" size="large" name="sizeLarge" />
        </Box>
      </Box>

      {/* Label Positions */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Label Positions
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <SearchInputComponent label="Label Top" placeholder="Label on top" labelPosition="top" name="labelTop" />
          <SearchInputComponent label="Label Left" placeholder="Label on left" labelPosition="left" name="labelLeft" />
        </Box>
      </Box>

      {/* Without Label */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Without Label
        </Text>
        <SearchInputComponent placeholder="Search payment products, settings, and more" accessibilityLabel="Search payment products, settings, and more" defaultValue="Transactions" name="withoutLabel" />
      </Box>

      {/* With Dropdowns */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Trailing Dropdown
        </Text>
        <Box display="flex" flexDirection="column" gap="spacing.5">
          <Box>
            <Text weight="semibold" marginBottom="spacing.3">
              Medium Size
            </Text>
            <SearchInputComponent label="Search" placeholder="Search here" size="medium" trailing={<Dropdown>
                  <InputDropdownButton defaultValue="payment-products" />
                  <DropdownOverlay>
                    <ActionList>
                      <ActionListItem title="Payment Products" value="payment-products" />
                      <ActionListItem title="Business Credit Card" value="business-credit-card" />
                      <ActionListItem title="Lending Tech Stack" value="lending-tech-stack" />
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>} name="trailingDropdownMedium" />
          </Box>

          <Box>
            <Text weight="semibold" marginBottom="spacing.3">
              Large Size
            </Text>
            <SearchInputComponent label="Search" placeholder="Search here" size="large" trailing={<Dropdown>
                  <InputDropdownButton defaultValue="payment-products" />
                  <DropdownOverlay>
                    <ActionList>
                      <ActionListItem title="Payment Products" value="payment-products" />
                      <ActionListItem title="Business Credit Card" value="business-credit-card" />
                      <ActionListItem title="Lending Tech Stack" value="lending-tech-stack" />
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>} name="trailingDropdownLarge" />
          </Box>

          <Box>
            <Text weight="semibold" marginBottom="spacing.3">
              With Icon in Dropdown
            </Text>
            <SearchInputComponent label="Search" placeholder="Search here" trailing={<Dropdown>
                  <InputDropdownButton defaultValue="www" icon={GlobeIcon} />
                  <DropdownOverlay>
                    <ActionList>
                      <ActionListItem title="www." value="www" />
                      <ActionListItem title="blog." value="blog" />
                      <ActionListItem title="shop." value="shop" />
                    </ActionList>
                  </DropdownOverlay>
                </Dropdown>} name="trailingDropdownWithIcon" />
          </Box>
        </Box>
      </Box>

      {/* Loading State */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          Loading State
        </Text>
        <SearchInputComponent label="Loading" placeholder="Search payment products, settings, and more" isLoading name="loading" />
      </Box>

      {/* With Clear Button */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
          With Clear Button
        </Text>
        <SearchInputComponent label="With Clear Button" defaultValue="Clear me" name="clearButton" />
      </Box>

      {/* With Label Suffix & Trailing */}
      <Box>
        <Text size="large" weight="semibold" marginBottom="spacing.4" color="surface.text.gray.subtle">
          With Label Suffix & Trailing
        </Text>
        <SearchInputComponent label="Search" placeholder="Search payment products, settings, and more" labelSuffix={<Tooltip content="Search for payment products, settings, and more" placement="right">
              <TooltipInteractiveWrapper display="flex">
                <InfoIcon size="small" color="surface.icon.gray.muted" />
              </TooltipInteractiveWrapper>
            </Tooltip>} labelTrailing={<Link size="small">Learn more</Link>} name="labelSuffixTrailing" />
      </Box>
    </Box>;
}`,...(ge=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};const $e=["Default","SearchInputHelpText","SearchInputWithoutLabel","SearchInputSizes","SearchInputWithDropdown","SearchInputWithControlledDropdown","SearchInputWithDisabledDropdown","SearchInputWithTable","SearchInputWithLabelSuffixTrailing","SearchInputShowcase"],Xe=Object.freeze(Object.defineProperty({__proto__:null,Default:y,SearchInputHelpText:f,SearchInputShowcase:L,SearchInputSizes:D,SearchInputWithControlledDropdown:j,SearchInputWithDisabledDropdown:B,SearchInputWithDropdown:w,SearchInputWithLabelSuffixTrailing:T,SearchInputWithTable:C,SearchInputWithoutLabel:I,__namedExportsOrder:$e,default:Ve},Symbol.toStringTag,{value:"Module"}));export{Xe as s};
