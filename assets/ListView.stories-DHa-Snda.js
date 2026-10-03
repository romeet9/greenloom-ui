import{kx as O,j as e,H as Ue,r as y,ip as be,x as J,jF as H,ky as Z,jp as X,at as I,hZ as B,aS as M,aq as Q,ar as L,h_ as ee,B as E,jR as te,jS as ae,aj as le,iV as ie,iW as re,iX as ne,iY as k,iZ as oe,i_ as se,i$ as x,C as de,j$ as ce,l as z,F as ue,n as K,hX as P,N as Ce,O as Te,k0 as he,k1 as De,k2 as C,a8 as ge,k3 as ve,ia as Ge,y as xe,e1 as _e,b1 as $e,cR as Ye,jG as Je,jH as Ze,g0 as Xe,c3 as et,h$ as pe,b8 as tt}from"./iframe-C1qQ09LF.js";import{s as at}from"./StoryRouter-CDfSoprG.js";import{S as lt}from"./Sandbox.web-B2xP21Qp.js";import{S as it}from"./StoryPageWrapper-CS0_5maI.js";import{g as rt}from"./storybookArgTypes-DFfQV31s.js";const nt=()=>e.jsxs(it,{componentName:"ListView",componentDescription:"List View is a pattern",apiDecisionLink:null,figmaURL:"https://www.figma.com/design/jubmQL9Z8V7881ayUD95ps/Blade-DSL?node-id=100413-32686&t=n9A7LztwEkIsly3v-0",children:[e.jsx(Ue,{size:"large",children:"Usage"}),e.jsx(lt,{showConsole:!0,children:`
      import { useState } from 'react';
      import {
        Amount,
        ListView,
        ListViewFilters,
        Box,
        QuickFilterGroup,
        QuickFilter,
        FilterChipGroup,
        Dropdown,
        DropdownOverlay,
        Counter,
        FilterChipSelectInput,
        ActionList,
        ActionListItem,
        FilterChipDatePicker,
        Table,
        TableHeader,
        TableCell,
        TableRow,
        TableHeaderRow,
        TableHeaderCell,
        TableBody,
        TableFooter,
        TableFooterRow,
        TableFooterCell,
        TableEditableCell,
        Button,
        IconButton,
        CheckIcon,
        CloseIcon,
        Code,
        Badge,
      } from '@greenloom/ui/components';
      import type {
        DatesRangeValue,
        TableData,
        CounterProps,
      } from '@greenloom/ui/components';
      
      type Item = {
        id: string;
        paymentId: string;
        amount: number;
        status: string;
        date: Date;
        type: string;
        method: {
          key: string;
          title: string;
        };
        bank: string;
        account: string;
        name: string;
      };
      
      const MethodFilterValues = [
        { key: 'bank-transfer', title: 'Bank Transfer' },
        { key: 'credit-card', title: 'Credit Card' },
        { key: 'paypal', title: 'PayPal' },
      ];
      
      const nodes = [
        ...Array.from({ length: 30 }, (_, i) => ({
          id: (i + 1).toString(),
          paymentId: Math.floor(Math.random() * 1000000),
          amount: Number((Math.random() * 10000).toFixed(2)),
          status: ['Completed', 'Pending', 'Failed'][Math.floor(Math.random() * 3)],
          date: new Date(
            2025,
            Math.floor(Math.random() * 12),
            Math.floor(Math.random() * 28) + 1
          ),
          type: ['Payout', 'Refund'][Math.floor(Math.random() * 2)],
          method: MethodFilterValues[Math.floor(Math.random() * 3)],
          bank: ['HDFC', 'ICICI', 'SBI'][Math.floor(Math.random() * 3)],
          account: Math.floor(Math.random() * 1000000000).toString(),
          name: [
            'John Doe',
            'Jane Doe',
            'Bob Smith',
            'Alice Smith',
            'John Smith',
            'Jane Smith',
            'Bob Doe',
            'Alice Doe',
          ][Math.floor(Math.random() * 8)],
        })),
      ];
      const quickFilters = ['All', 'Pending', 'Failed', 'Completed'];
      const filterChipQuickFilters = ['Pending', 'Failed', 'Completed'];
     
      const data: TableData<Item> = {
        nodes,
      };
      
      function App() {
        const [listViewTableData, setListViewTableData] = useState(data);
        const [selectedQuickFilter, setSelectedQuickFilter] = useState<string>('All');
        const [searchValue, setSearchValue] = useState<string | undefined>('');
        const [methodFilter, setMethodFilter] = useState<string | undefined>('');
        const [filterDateRange, setFilterDateRange] = useState<
          DatesRangeValue | undefined
        >(undefined);
      
        const getQuickFilterValueCount = (value: string): number => {
          if (value === 'All') {
            return data.nodes.length;
          }
          return data.nodes.filter((node) => node.status === value).length;
        };
        const getQuickFilterData = (
          data: TableData<Item>,
          value?: string
        ): TableData<Item> => {
          if (!value || value === 'All') {
            return { nodes: data.nodes };
          }
          return { nodes: data.nodes.filter((node) => node.status === value) };
        };
        const getSearchedData = (
          data: TableData<Item>,
          value?: string
        ): TableData<Item> => {
          if (!value) {
            return { nodes: data.nodes };
          }
          return {
            nodes: data.nodes.filter((node) => node.paymentId.includes(value)),
          };
        };
        const getMethodFilterData = (
          data: TableData<Item>,
          value?: string
        ): TableData<Item> => {
          if (!value) {
            return { nodes: data.nodes };
          }
          return { nodes: data.nodes.filter((node) => node.method.key === value) };
        };
      
        const getFilterRangeData = (
          data: TableData<Item>,
          value?: DatesRangeValue
        ): TableData<Item> => {
          if (!value?.[0]) {
            return { nodes: data.nodes };
          }
          return {
            nodes: data.nodes.filter((node) => {
              if (!value?.[0] || !value?.[1]) return false;
              return node.date >= value[0] && node.date <= value[1];
            }),
          };
        };
        return (
          <Box height="100%">
            <ListView>
              <ListViewFilters
                quickFilters={
                  <QuickFilterGroup
                    selectionType="single"
                    onChange={({ values }) => {
                      const value = values[0];
                      const quickFilterData = getQuickFilterData(data, value);
                      const searchValueData = getSearchedData(
                        quickFilterData,
                        searchValue
                      );
                      const methodFilterData = getMethodFilterData(
                        searchValueData,
                        methodFilter
                      );
                      const dateRangeFilterData = getFilterRangeData(
                        methodFilterData,
                        filterDateRange
                      );
      
                      setListViewTableData(dateRangeFilterData);
                      setSelectedQuickFilter(value);
                    }}
                    defaultValue="All"
                    value={selectedQuickFilter}
                  >
                    {quickFilters.map((status, index) => (
                      <QuickFilter
                        title={status}
                        value={status}
                        trailing={
                          <Counter
                            value={getQuickFilterValueCount(status)}
                            color="neutral"
                          />
                        }
                        key={status}
                      />
                    ))}
                  </QuickFilterGroup>
                }
                onSearchChange={({ value }) => {
                  const quickFilterData = getQuickFilterData(
                    data,
                    selectedQuickFilter
                  );
                  const searchValueData = getSearchedData(quickFilterData, value);
                  const methodFilterData = getMethodFilterData(
                    searchValueData,
                    methodFilter
                  );
                  const dateRangeFilterData = getFilterRangeData(
                    methodFilterData,
                    filterDateRange
                  );
                  setListViewTableData(dateRangeFilterData);
                  setSearchValue(value);
                }}
                onSearchClear={() => {
                  const quickFilterData = getQuickFilterData(
                    data,
                    selectedQuickFilter
                  );
                  const methodFilterData = getMethodFilterData(
                    quickFilterData,
                    methodFilter
                  );
                  const dateRangeFilterData = getFilterRangeData(
                    methodFilterData,
                    filterDateRange
                  );
                  setListViewTableData(dateRangeFilterData);
                  setSearchValue('');
                }}
                searchValuePlaceholder="Search for Payment Id"
                selectedFiltersCount={
                  (methodFilter ? 1 : 0) +
                  (Array.isArray(filterDateRange) && filterDateRange[0] ? 1 : 0) +
                  (selectedQuickFilter !== 'All' ? 1 : 0)
                }
              >
                <FilterChipGroup
                  onClearButtonClick={() => {
                    const quickFilterData = getQuickFilterData(data, 'All');
                    const searchValueData = getSearchedData(
                      quickFilterData,
                      searchValue
                    );
                    const methodFilterData = getMethodFilterData(searchValueData, '');
                    const dateRangeFilterData = getFilterRangeData(
                      methodFilterData,
                      undefined
                    );
                    setListViewTableData(dateRangeFilterData);
                    setMethodFilter(undefined);
                    setFilterDateRange(undefined);
                    setSelectedQuickFilter('All');
                  }}
                >
                  <Dropdown selectionType="single">
                    <FilterChipSelectInput
                      label="Method"
                      onChange={({ values }) => {
                        const value = values[0];
                        const quickFilterData = getQuickFilterData(
                          data,
                          selectedQuickFilter
                        );
                        const searchValueData = getSearchedData(
                          quickFilterData,
                          searchValue
                        );
                        const methodFilterData = getMethodFilterData(
                          searchValueData,
                          value
                        );
                        const dateRangeFilterData = getFilterRangeData(
                          methodFilterData,
                          filterDateRange
                        );
      
                        setListViewTableData(dateRangeFilterData);
                        setMethodFilter(value);
                      }}
                    />
                    <DropdownOverlay>
                      <ActionList>
                        {MethodFilterValues.map((method, index) => (
                          <ActionListItem
                            key={index}
                            title={method.title}
                            value={method.key}
                          />
                        ))}
                      </ActionList>
                    </DropdownOverlay>
                  </Dropdown>
                  <FilterChipDatePicker
                    label="Date Range"
                    selectionType="range"
                    onChange={(value) => {
                      const quickFilterData = getQuickFilterData(
                        data,
                        selectedQuickFilter
                      );
                      const searchValueData = getSearchedData(
                        quickFilterData,
                        searchValue
                      );
                      const methodFilterData = getMethodFilterData(
                        searchValueData,
                        methodFilter
                      );
                      const dateRangeFilterData = getFilterRangeData(
                        methodFilterData,
                        Array.isArray(value) ? value : undefined
                      );
                      setListViewTableData(dateRangeFilterData);
                      setFilterDateRange(value as DatesRangeValue);
                    }}
                  />
                  <Dropdown selectionType="single">
                    <FilterChipSelectInput
                      label="Status"
                      value={
                        selectedQuickFilter !== 'All'
                          ? selectedQuickFilter
                          : undefined
                      }
                      onChange={({ values }) => {
                        const value = values[0];
                        const quickFilterData = getQuickFilterData(data, value);
                        const searchValueData = getSearchedData(
                          quickFilterData,
                          searchValue
                        );
                        const methodFilterData = getMethodFilterData(
                          searchValueData,
                          methodFilter
                        );
                        const dateRangeFilterData = getFilterRangeData(
                          methodFilterData,
                          filterDateRange
                        );
                        setListViewTableData(dateRangeFilterData);
                        setSelectedQuickFilter(value ? value : 'All');
                      }}
                      onClearButtonClick={() => {
                        const quickFilterData = getQuickFilterData(data, 'All');
                        const searchValueData = getSearchedData(
                          quickFilterData,
                          searchValue
                        );
                        const methodFilterData = getMethodFilterData(
                          searchValueData,
                          methodFilter
                        );
                        const dateRangeFilterData = getFilterRangeData(
                          methodFilterData,
                          filterDateRange
                        );
                        setListViewTableData(dateRangeFilterData);
                        setSelectedQuickFilter('All');
                      }}
                    />
                    <DropdownOverlay>
                      <ActionList>
                        {filterChipQuickFilters.map((method, index) => (
                          <ActionListItem
                            key={index}
                            title={method}
                            value={method}
                            isSelected={selectedQuickFilter === method}
                          />
                        ))}
                      </ActionList>
                    </DropdownOverlay>
                  </Dropdown>
                </FilterChipGroup>
              </ListViewFilters>
              <Table
                data={listViewTableData}
                defaultSelectedIds={['1', '3']}
                onSelectionChange={console.log}
                isFirstColumnSticky
                selectionType="single"
              >
                {(tableData) => (
                  <>
                    <TableHeader>
                      <TableHeaderRow>
                        <TableHeaderCell headerKey="PAYMENT_ID">ID</TableHeaderCell>
                        <TableHeaderCell headerKey="AMOUNT">Amount</TableHeaderCell>
                        <TableHeaderCell headerKey="ACCOUNT">Account</TableHeaderCell>
                        <TableHeaderCell headerKey="DATE">Date</TableHeaderCell>
                        <TableHeaderCell headerKey="METHOD">Method</TableHeaderCell>
                        <TableHeaderCell headerKey="STATUS">Status</TableHeaderCell>
                      </TableHeaderRow>
                    </TableHeader>
                    <TableBody>
                      {tableData.map((tableItem, index) => (
                        <TableRow
                          key={index}
                          item={tableItem}
                          hoverActions={
                            <>
                              <Button variant="tertiary" size="xsmall">
                                View Details
                              </Button>
                              <IconButton
                                icon={CheckIcon}
                                isHighlighted
                                accessibilityLabel="Approve"
                                onClick={() => {
                                  console.log('Approved', tableItem.id);
                                }}
                              />
                              <IconButton
                                icon={CloseIcon}
                                isHighlighted
                                accessibilityLabel="Reject"
                                onClick={() => {
                                  console.log('Rejected', tableItem.id);
                                }}
                              />
                            </>
                          }
                          onClick={() => {
                            console.log('where');
                          }}
                        >
                          <TableCell>
                            <Code size="medium">{tableItem.paymentId}</Code>
                          </TableCell>
                          <TableEditableCell
                            accessibilityLabel="Amount"
                            placeholder="Enter text"
                            successText="Amount is valid"
                          />
                          <TableCell>{tableItem.account}</TableCell>
                          <TableCell>
                            {tableItem.date?.toLocaleDateString('en-IN', {
                              year: 'numeric',
                              month: '2-digit',
                              day: '2-digit',
                            })}
                          </TableCell>
                          <TableCell>{tableItem.method.title}</TableCell>
                          <TableCell>
                            <Badge
                              size="medium"
                              color={
                                tableItem.status === 'Completed'
                                  ? 'positive'
                                  : tableItem.status === 'Pending'
                                  ? 'notice'
                                  : tableItem.status === 'Failed'
                                  ? 'negative'
                                  : 'primary'
                              }
                            >
                              {tableItem.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    <TableFooter>
                      <TableFooterRow>
                        <TableFooterCell>Total</TableFooterCell>
                        <TableFooterCell>-</TableFooterCell>
                        <TableFooterCell>-</TableFooterCell>
                        <TableFooterCell>-</TableFooterCell>
                        <TableFooterCell>-</TableFooterCell>
                        <TableFooterCell>
                          <Amount value={10} />
                        </TableFooterCell>
                      </TableFooterRow>
                    </TableFooter>
                  </>
                )}
              </Table>
            </ListView>
          </Box>
        );
      }
      
      export default App;

      `})]}),ot={title:"Patterns/ListView",component:O,tags:["autodocs"],argTypes:{...rt()},parameters:{docs:{page:nt},decorators:[at(void 0,{initialEntries:["/"]})]}},N=[{key:"bank-transfer",title:"Bank Transfer"},{key:"credit-card",title:"Credit Card"},{key:"paypal",title:"PayPal"}],st=[...Array.from({length:20},(q,w)=>({id:(w+1).toString(),paymentId:`rzp${Math.floor(Math.random()*1e6)}`,amount:Number((Math.random()*1e4).toFixed(2)),status:["Completed","Pending","Failed"][Math.floor(Math.random()*3)],date:new Date(2025,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1),type:["Payout","Refund"][Math.floor(Math.random()*2)],method:N[Math.floor(Math.random()*3)],bank:["HDFC","ICICI","SBI"][Math.floor(Math.random()*3)],account:Math.floor(Math.random()*1e9).toString(),name:["John Doe","Jane Doe","Bob Smith","Alice Smith","John Smith","Jane Smith","Bob Doe","Alice Doe"][Math.floor(Math.random()*8)]})),{id:"21",paymentId:"rzp123456",amount:1e3,status:"Pending",date:new Date(new Date().setDate(new Date().getDate()-4)),type:"Payout",method:{key:"bank-transfer",title:"Bank Transfer"},bank:"HDFC",account:"1234567890",name:"John Doe"}],s={nodes:st},Y=["All","Pending","Failed","Completed"],ke=["Pending","Failed","Completed"],Se=["Pending","Failed","Completed","Processing","Authorized","Captured","Refunded","Disputed","LastWeek","Cancelled","Expired","Rejected","Waiting","Review","Hold"],dt=q=>{const[w,u]=y.useState(s),[h,b]=y.useState("All"),[D,v]=y.useState(""),[m,R]=y.useState(""),[g,S]=y.useState(void 0),A=i=>i==="All"?s.nodes.length:s.nodes.filter(a=>a.status===i).length,F=(i,a)=>!a||a==="All"?{nodes:i.nodes}:{nodes:i.nodes.filter(t=>t.status===a)},o=(i,a)=>a?{nodes:i.nodes.filter(t=>t.paymentId.includes(a))}:{nodes:i.nodes},r=(i,a)=>a?{nodes:i.nodes.filter(t=>t.method.key===a)}:{nodes:i.nodes},d=(i,a)=>a!=null&&a[0]?{nodes:i.nodes.filter(t=>!(a!=null&&a[0])||!(a!=null&&a[1])?!1:t.date>=a[0]&&t.date<=a[1])}:{nodes:i.nodes},p=i=>{const a=F(s,h),t=o(a,i),l=r(t,m),n=d(l,g);u(n),v(i)},f=()=>{const i=F(s,h),a=r(i,m),t=d(a,g);u(t),v("")},j=be();return e.jsxs(J,{height:"100%",children:[j&&e.jsx(H,{label:"",value:D,placeholder:"Search for Payment Id",onChange:({value:i})=>p(i),onClearButtonClick:f}),e.jsxs(O,{children:[e.jsx(Z,{quickFilters:e.jsx(te,{selectionType:"single",onChange:({values:i})=>{const a=i[0],t=F(s,a),l=o(t,D),n=r(l,m),c=d(n,g);u(c),b(a)},defaultValue:"All",value:h,children:Y.map((i,a)=>e.jsx(ae,{title:i,value:i,trailing:e.jsx(le,{value:A(i),color:"neutral"})},`${a}-${i}`))}),selectedFiltersCount:(m?1:0)+(Array.isArray(g)&&g[0]?1:0)+(h!=="All"?1:0),actions:!j&&e.jsx(E,{width:"208px",children:e.jsx(H,{label:"",value:D,placeholder:"Search for Payment Id",onChange:({value:i})=>p(i),onClearButtonClick:f})}),children:e.jsxs(X,{onClearButtonClick:()=>{const i=F(s,"All"),a=o(i,D),t=r(a,""),l=d(t,void 0);u(l),R(void 0),S(void 0),b("All")},children:[e.jsxs(I,{selectionType:"single",children:[e.jsx(B,{label:"Method",onChange:({values:i})=>{const a=i[0],t=F(s,h),l=o(t,D),n=r(l,a),c=d(n,g);u(c),R(a)}}),e.jsx(M,{children:e.jsx(Q,{children:N.map((i,a)=>e.jsx(L,{title:i.title,value:i.key},a))})})]}),e.jsx(ee,{label:"Date Range",selectionType:"range",onChange:i=>{const a=F(s,h),t=o(a,D),l=r(t,m),n=d(l,Array.isArray(i)?i:void 0);u(n),S(i)}}),e.jsxs(I,{selectionType:"single",children:[e.jsx(B,{label:"Status",value:h!=="All"?h:void 0,onChange:({values:i})=>{const a=i[0],t=F(s,a),l=o(t,D),n=r(l,m),c=d(n,g);u(c),b(a||"All")},onClearButtonClick:()=>{const i=F(s,"All"),a=o(i,D),t=r(a,m),l=d(t,g);u(l),b("All")}}),e.jsx(M,{children:e.jsx(Q,{children:ke.map((i,a)=>e.jsx(L,{title:i,value:i,isSelected:h===i},a))})})]})]})}),e.jsx(ie,{...q,data:w,defaultSelectedIds:["1","3"],onSelectionChange:console.log,isFirstColumnSticky:!0,selectionType:"single",rowDensity:"compact",pagination:e.jsx(ve,{onPageChange:console.log,defaultPageSize:10,onPageSizeChange:console.log,showPageSizePicker:!0,showPageNumberSelector:!0}),children:i=>e.jsxs(e.Fragment,{children:[e.jsx(re,{children:e.jsxs(ne,{children:[e.jsx(k,{headerKey:"PAYMENT_ID",children:"ID"}),e.jsx(k,{headerKey:"AMOUNT",children:"Amount"}),e.jsx(k,{headerKey:"ACCOUNT",children:"Account"}),e.jsx(k,{headerKey:"DATE",children:"Date"}),e.jsx(k,{headerKey:"METHOD",children:"Method"}),e.jsx(k,{headerKey:"STATUS",children:"Status"})]})}),e.jsx(oe,{children:i.map((a,t)=>{var l;return e.jsxs(se,{item:a,hoverActions:e.jsxs(e.Fragment,{children:[e.jsx(K,{variant:"tertiary",size:"xsmall",children:"View Details"}),e.jsx(P,{icon:Ce,isHighlighted:!0,accessibilityLabel:"Approve",onClick:()=>{console.log("Approved",a.id)}}),e.jsx(P,{icon:Te,isHighlighted:!0,accessibilityLabel:"Reject",onClick:()=>{console.log("Rejected",a.id)}})]}),onClick:()=>{console.log("where")},children:[e.jsx(x,{children:e.jsx(de,{size:"small",children:a.paymentId})}),e.jsx(ce,{accessibilityLabel:"Amount",placeholder:"Enter text",successText:"Amount is valid"}),e.jsx(x,{children:e.jsx(z,{size:"small",color:"neutral",target:"_blank",href:"/",children:a.account})}),e.jsx(x,{children:(l=a.date)==null?void 0:l.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(x,{children:a.method.title}),e.jsx(x,{children:e.jsx(ue,{size:"xsmall",color:a.status==="Completed"?"positive":a.status==="Pending"?"notice":a.status==="Failed"?"negative":"primary",children:a.status})})]},t)})}),e.jsx(he,{children:e.jsxs(De,{children:[e.jsx(C,{children:"Total"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:e.jsx(ge,{value:10})})]})})]})})]})]})},W=dt.bind({});W.storyName="Default";const ct=q=>{const w=i=>i==="All"?s.nodes.length:s.nodes.filter(a=>a.status===i).length,u=(i,a)=>!a||a==="All"?{nodes:i.nodes}:{nodes:i.nodes.filter(t=>t.status===a)},h=(i,a)=>a?{nodes:i.nodes.filter(t=>t.paymentId.includes(a))}:{nodes:i.nodes},b=(i,a)=>a?{nodes:i.nodes.filter(t=>t.method.key===a)}:{nodes:i.nodes},D=(i,a)=>a!=null&&a[0]?{nodes:i.nodes.filter(t=>!(a!=null&&a[0])||!(a!=null&&a[1])?!1:t.date>=a[0]&&t.date<=a[1])}:{nodes:i.nodes},[v,m]=y.useState("Completed"),[R,g]=y.useState(""),[S,A]=y.useState("paypal"),[F,o]=y.useState(void 0),[r,d]=y.useState(()=>{const i=u(s,v);return b(i,S)}),p=i=>{const a=u(s,v),t=h(a,i),l=b(t,S),n=D(l,F);d(n),g(i)},f=()=>{const i=u(s,v),a=b(i,S),t=D(a,F);d(t),g("")},j=be();return e.jsxs(J,{height:"100%",children:[j&&e.jsx(H,{label:"",value:R,placeholder:"Search for Payment Id",onChange:({value:i})=>p(i),onClearButtonClick:f}),e.jsxs(O,{children:[e.jsx(Z,{selectedFiltersCount:(S?1:0)+(Array.isArray(F)&&F[0]?1:0)+(v!=="All"?1:0),quickFilters:e.jsx(te,{selectionType:"single",onChange:({values:i})=>{const a=i[0],t=u(s,a),l=h(t,R),n=b(l,S),c=D(n,F);d(c),m(a)},defaultValue:"All",value:v,children:Y.map((i,a)=>e.jsx(ae,{title:i,value:i,trailing:e.jsx(le,{value:w(i),color:"neutral"})},`${a}-${i}`))}),actions:!j&&e.jsx(E,{width:"208px",children:e.jsx(H,{label:"",value:R,placeholder:"Search for Payment Id",onChange:({value:i})=>p(i),onClearButtonClick:f})}),children:e.jsxs(X,{onClearButtonClick:()=>{const i=u(s,"All"),a=h(i,R),t=b(a,void 0),l=D(t,void 0);d(l),A(void 0),o(void 0),m("All")},children:[e.jsxs(I,{selectionType:"single",children:[e.jsx(B,{label:"Method",value:S,onChange:({values:i})=>{const a=i[0],t=u(s,v),l=h(t,R),n=b(l,a),c=D(n,F);d(c),A(a)},onClearButtonClick:()=>{const i=u(s,v),a=h(i,R),t=D(a,F);d(t),A(void 0)}}),e.jsx(M,{children:e.jsx(Q,{children:N.map((i,a)=>e.jsx(L,{title:i.title,value:i.key},a))})})]}),e.jsx(ee,{label:"Date Range",selectionType:"range",value:F,onChange:i=>{const a=u(s,v),t=h(a,R),l=b(t,S),n=D(l,Array.isArray(i)?i:void 0);d(n),o(i)}}),e.jsxs(I,{selectionType:"single",children:[e.jsx(B,{label:"Status",value:v!=="All"?v:void 0,onChange:({values:i})=>{const a=i[0],t=u(s,a),l=h(t,R),n=b(l,S),c=D(n,F);d(c),m(a||"All")},onClearButtonClick:()=>{const i=u(s,"All"),a=h(i,R),t=b(a,S),l=D(t,F);d(l),m("All")}}),e.jsx(M,{children:e.jsx(Q,{children:ke.map((i,a)=>e.jsx(L,{title:i,value:i,isSelected:v===i},a))})})]})]})}),e.jsx(ie,{...q,data:r,defaultSelectedIds:["1","3"],onSelectionChange:console.log,isFirstColumnSticky:!0,selectionType:"single",rowDensity:"compact",children:i=>e.jsxs(e.Fragment,{children:[e.jsx(re,{children:e.jsxs(ne,{children:[e.jsx(k,{headerKey:"PAYMENT_ID",children:"ID"}),e.jsx(k,{headerKey:"AMOUNT",children:"Amount"}),e.jsx(k,{headerKey:"ACCOUNT",children:"Account"}),e.jsx(k,{headerKey:"DATE",children:"Date"}),e.jsx(k,{headerKey:"METHOD",children:"Method"}),e.jsx(k,{headerKey:"STATUS",children:"Status"})]})}),e.jsx(oe,{children:i.map((a,t)=>{var l;return e.jsxs(se,{item:a,hoverActions:e.jsxs(e.Fragment,{children:[e.jsx(K,{variant:"tertiary",size:"xsmall",children:"View Details"}),e.jsx(P,{icon:Ce,isHighlighted:!0,accessibilityLabel:"Approve",onClick:()=>{console.log("Approved",a.id)}}),e.jsx(P,{icon:Te,isHighlighted:!0,accessibilityLabel:"Reject",onClick:()=>{console.log("Rejected",a.id)}})]}),children:[e.jsx(x,{children:e.jsx(de,{size:"small",children:a.paymentId})}),e.jsx(ce,{accessibilityLabel:"Amount",placeholder:"Enter text",successText:"Amount is valid"}),e.jsx(x,{children:a.account}),e.jsx(x,{children:(l=a.date)==null?void 0:l.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(x,{children:e.jsx(z,{size:"small",color:"neutral",target:"_blank",href:"/",children:a.account})}),e.jsx(x,{children:e.jsx(ue,{size:"xsmall",color:a.status==="Completed"?"positive":a.status==="Pending"?"notice":a.status==="Failed"?"negative":"primary",children:a.status})})]},t)})}),e.jsx(he,{children:e.jsxs(De,{children:[e.jsx(C,{children:"Total"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:e.jsx(ge,{value:10})})]})})]})})]})]})},U=ct.bind({});U.storyName="Controlled";const Ne=q=>{const[w,u]=y.useState(s),[h,b]=y.useState("All"),[D,v]=y.useState(""),[m,R]=y.useState(""),[g,S]=y.useState(void 0),[A,F]=y.useState([]),o=t=>t==="All"?s.nodes.length:s.nodes.filter(l=>l.status===t).length,r=(t,l)=>!l||l==="All"?{nodes:t.nodes}:{nodes:t.nodes.filter(n=>n.status===l)},d=(t,l)=>l?{nodes:t.nodes.filter(n=>n.paymentId.includes(l))}:{nodes:t.nodes},p=(t,l)=>l?{nodes:t.nodes.filter(n=>n.method.key===l)}:{nodes:t.nodes},f=(t,l)=>l!=null&&l[0]?{nodes:t.nodes.filter(n=>!(l!=null&&l[0])||!(l!=null&&l[1])?!1:n.date>=l[0]&&n.date<=l[1])}:{nodes:t.nodes},j=t=>{const l=r(s,h),n=d(l,t),c=p(n,m),T=f(c,g);u(T),v(t)},i=()=>{const t=r(s,h),l=p(t,m),n=f(l,g);u(n),v("")},a=be();return e.jsxs(J,{backgroundColor:"surface.background.gray.moderate",padding:"spacing.8",height:"100vh",children:[a&&e.jsx(H,{label:"",value:D,placeholder:"Search for Payment Id",onChange:({value:t})=>j(t),onClearButtonClick:i}),e.jsxs(O,{children:[e.jsx(Z,{quickFilters:e.jsx(te,{selectionType:"single",onChange:({values:t})=>{const l=t[0],n=r(s,l),c=d(n,D),T=p(c,m),V=f(T,g);u(V),b(l)},defaultValue:"All",value:h,children:Y.map((t,l)=>e.jsx(ae,{title:t,value:t,trailing:e.jsx(le,{value:o(t),color:"neutral"})},`${l}-${t}`))}),selectedFiltersCount:(m?1:0)+(Array.isArray(g)&&g[0]?1:0)+(h!=="All"?1:0),actions:e.jsxs(E,{display:"flex",gap:"spacing.4",alignItems:"center",children:[!a&&e.jsx(E,{width:"208px",children:e.jsx(H,{label:"",accessibilityLabel:"Search for Payment Id",value:D,placeholder:"Search for Payment Id",onChange:({value:t})=>j(t),onClearButtonClick:i})}),e.jsxs(Ge,{variant:"tertiary",children:[e.jsx(xe,{content:"More options",children:e.jsx(K,{icon:_e,accessibilityLabel:"More options"})}),e.jsx(xe,{content:"Download data",children:e.jsx(K,{icon:$e,accessibilityLabel:"Download data"})}),e.jsx(xe,{content:"Share",children:e.jsx(K,{icon:Ye,accessibilityLabel:"Share"})})]})]}),children:e.jsxs(X,{onClearButtonClick:()=>{const t=r(s,"All"),l=d(t,D),n=p(l,""),c=f(n,void 0);u(c),R(void 0),S(void 0),b("All")},children:[e.jsxs(I,{selectionType:"single",children:[e.jsx(B,{label:"Method",onChange:({values:t})=>{const l=t[0],n=r(s,h),c=d(n,D),T=p(c,l),V=f(T,g);u(V),R(l)}}),e.jsx(M,{children:e.jsx(Q,{children:N.map((t,l)=>e.jsx(L,{title:t.title,value:t.key},l))})})]}),e.jsx(ee,{label:"Date Range",selectionType:"range",onChange:t=>{const l=r(s,h),n=d(l,D),c=p(n,m),T=f(c,Array.isArray(t)?t:void 0);u(T),S(t)}}),e.jsxs(I,{selectionType:"single",children:[e.jsx(B,{label:"Status",value:h!=="All"?h:void 0,onChange:({values:t})=>{const l=t[0],n=r(s,l),c=d(n,D),T=p(c,m),V=f(T,g);u(V),b(l||"All")},onClearButtonClick:()=>{const t=r(s,"All"),l=d(t,D),n=p(l,m),c=f(n,g);u(c),b("All")}}),e.jsx(M,{children:e.jsx(Q,{children:ke.map((t,l)=>e.jsx(L,{title:t,value:t,isSelected:h===t},l))})})]})]})}),e.jsx(ie,{...q,data:w,onSelectionChange:({selectedIds:t})=>{console.log("Selected ids:",t),F(t)},isFirstColumnSticky:!0,selectionType:"multiple",rowDensity:"compact",pagination:e.jsx(ve,{onPageChange:console.log,defaultPageSize:10,onPageSizeChange:console.log,showPageSizePicker:!0,showPageNumberSelector:!0}),toolbar:A.length>0?e.jsx(Je,{placement:"overlay",title:`${A.length} selected`,children:e.jsx(Ze,{children:e.jsxs(E,{width:"100%",justifyContent:"end",display:"flex",alignItems:"center",gap:"spacing.4",children:[e.jsx(z,{size:"small",icon:Xe,children:"Copy"}),e.jsx(z,{size:"small",icon:et,children:"Delete"})]})})}):void 0,children:t=>e.jsxs(e.Fragment,{children:[e.jsx(re,{children:e.jsxs(ne,{children:[e.jsx(k,{headerKey:"PAYMENT_ID",children:"ID"}),e.jsx(k,{headerKey:"AMOUNT",children:"Amount"}),e.jsx(k,{headerKey:"ACCOUNT",children:"Account"}),e.jsx(k,{headerKey:"DATE",children:"Date"}),e.jsx(k,{headerKey:"METHOD",children:"Method"}),e.jsx(k,{headerKey:"STATUS",children:"Status"})]})}),e.jsx(oe,{children:t.map((l,n)=>{var c;return e.jsxs(se,{item:l,onClick:()=>{console.log("where")},children:[e.jsx(x,{children:e.jsx(de,{size:"small",children:l.paymentId})}),e.jsx(ce,{accessibilityLabel:"Amount",placeholder:"Enter text",successText:"Amount is valid"}),e.jsx(x,{children:e.jsx(z,{size:"small",color:"neutral",target:"_blank",href:"/",children:l.account})}),e.jsx(x,{children:(c=l.date)==null?void 0:c.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(x,{children:l.method.title}),e.jsx(x,{children:e.jsx(ue,{size:"xsmall",color:l.status==="Completed"?"positive":l.status==="Pending"?"notice":l.status==="Failed"?"negative":"primary",children:l.status})})]},n)})}),e.jsx(he,{children:e.jsxs(De,{children:[e.jsx(C,{children:"Total"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:e.jsx(ge,{value:10})})]})})]})})]})]})},me=Ne.bind({});Ne.storyName="With Bulk Action";const ut=q=>{const[w,u]=y.useState(s),[h,b]=y.useState([]),[D,v]=y.useState(""),[m,R]=y.useState(""),[g,S]=y.useState(void 0),A=t=>{if(t==="All")return s.nodes.length;const n={Pending:["Pending"],Failed:["Failed"],Completed:["Completed"],Processing:["Pending"],Authorized:["Completed"],Captured:["Completed"],Refunded:["Failed"],Disputed:["Failed"],Cancelled:["Failed"],Expired:["Failed"],Rejected:["Failed"],Waiting:["Pending"],Review:["Pending"],Hold:["Pending"]}[t]||[t];return s.nodes.filter(c=>n.includes(c.status)).length},F=(t,l)=>{if(!(l!=null&&l.length))return{nodes:t.nodes};const n={Pending:["Pending"],Failed:["Failed"],Completed:["Completed"],Processing:["Pending"],Authorized:["Completed"],Captured:["Completed"],Refunded:["Failed"],Disputed:["Failed"],Cancelled:["Failed"],Expired:["Failed"],Rejected:["Failed"],Waiting:["Pending"],Review:["Pending"],Hold:["Pending"]},c=l.flatMap(T=>n[T]||[T]);return{nodes:t.nodes.filter(T=>c.includes(T.status))}},o=(t,l)=>l?{nodes:t.nodes.filter(n=>n.paymentId.includes(l))}:{nodes:t.nodes},r=(t,l)=>l?{nodes:t.nodes.filter(n=>n.method.key===l)}:{nodes:t.nodes},d=(t,l)=>l!=null&&l[0]?{nodes:t.nodes.filter(n=>!(l!=null&&l[0])||!(l!=null&&l[1])?!1:n.date>=l[0]&&n.date<=l[1])}:{nodes:t.nodes},p=()=>{const t=new Date;return t.setDate(t.getDate()-7),[t,new Date]},f=(t,l)=>!(t!=null&&t[0])||!(l!=null&&l[0])?!1:pe(t[0]).isSame(pe(l[0]),"day")&&pe(t[1]).isSame(pe(l[1]),"day"),j=t=>{const l=F(s,h),n=o(l,t),c=r(n,m),T=d(c,g);u(T),v(t)},i=()=>{const t=F(s,h),l=r(t,m),n=d(l,g);u(n),v("")},a=be();return e.jsxs(J,{backgroundColor:"surface.background.gray.moderate",padding:"spacing.8",height:"100vh",children:[a&&e.jsx(H,{label:"",value:D,placeholder:"Search for Payment Id",onChange:({value:t})=>j(t),onClearButtonClick:i}),e.jsxs(O,{children:[e.jsx(Z,{selectedFiltersCount:(m?1:0)+(Array.isArray(g)&&g[0]?1:0)+(h.filter(t=>t!=="LastWeek").length!==0?1:0),quickFilters:e.jsx(E,{display:"flex",gap:"spacing.3",children:e.jsx(te,{selectionType:"multiple",onChange:({values:t})=>{const l=p();if(t.includes("LastWeek")){const c=F(s,t.filter(ye=>ye!=="LastWeek")),T=o(c,D),V=r(T,m),Fe=d(V,l);S(l),b(t),u(Fe)}else{const c=F(s,t),T=o(c,D),V=r(T,m),Fe=f(l,g)?void 0:g,ye=d(V,Fe);u(ye),S(void 0),b(t.filter(We=>We!=="LastWeek"))}},value:h,children:Se.map((t,l)=>e.jsx(ae,{title:t,value:t,trailing:e.jsx(le,{value:A(t),color:"neutral"})},`${l}-${t}`))})}),actions:!a&&e.jsx(E,{width:"208px",children:e.jsx(H,{label:"",value:D,placeholder:"Search for Payment Id",onChange:({value:t})=>j(t),onClearButtonClick:i})}),children:e.jsxs(X,{onClearButtonClick:()=>{R(void 0),S(void 0),b([]);const t=o(s,D);u(t)},children:[e.jsxs(I,{selectionType:"single",children:[e.jsx(B,{label:"Method",onChange:({values:t})=>{const l=t[0],n=F(s,h),c=o(n,D),T=r(c,l),V=d(T,g);u(V),R(l)}}),e.jsx(M,{children:e.jsx(Q,{children:N.map((t,l)=>e.jsx(L,{title:t.title,value:t.key},l))})})]}),e.jsx(ee,{label:"Date Range",selectionType:"range",value:g,onChange:t=>{const l=F(s,h),n=o(l,D),c=r(n,m),T=d(c,Array.isArray(t)?t:void 0);u(T),S(t)},onClearButtonClick:()=>{const t=h.filter(V=>V!=="LastWeek"),l=F(s,t),n=o(l,D),c=r(n,m),T=d(c,void 0);u(T),b(t)}}),e.jsxs(I,{selectionType:"multiple",children:[e.jsx(B,{label:"Status",value:h.filter(t=>t!=="LastWeek"),onChange:({values:t})=>{const l=F(s,t),n=o(l,D),c=r(n,m),T=d(c,g);u(T),b(V=>[...V.filter(Fe=>Fe==="LastWeek"),...t])},onClearButtonClick:()=>{const t=F(s,[]),l=o(t,D),n=r(l,m),c=d(n,g);u(c),b(T=>T.filter(V=>V==="LastWeek"))}}),e.jsx(M,{children:e.jsx(Q,{children:Se.map((t,l)=>e.jsx(L,{title:t,value:t,isSelected:h.includes(t)},l))})})]})]})}),e.jsx(ie,{...q,data:w,defaultSelectedIds:["1","3"],onSelectionChange:console.log,isFirstColumnSticky:!0,selectionType:"single",pagination:e.jsx(ve,{onPageChange:console.log,defaultPageSize:10,onPageSizeChange:console.log,showPageSizePicker:!0,showPageNumberSelector:!0}),children:t=>e.jsxs(e.Fragment,{children:[e.jsx(re,{children:e.jsxs(ne,{children:[e.jsx(k,{headerKey:"PAYMENT_ID",children:"ID"}),e.jsx(k,{headerKey:"AMOUNT",children:"Amount"}),e.jsx(k,{headerKey:"ACCOUNT",children:"Account"}),e.jsx(k,{headerKey:"DATE",children:"Date"}),e.jsx(k,{headerKey:"METHOD",children:"Method"}),e.jsx(k,{headerKey:"STATUS",children:"Status"})]})}),e.jsx(oe,{children:t.map((l,n)=>{var c;return e.jsxs(se,{item:l,hoverActions:e.jsxs(e.Fragment,{children:[e.jsx(K,{variant:"tertiary",size:"xsmall",children:"View Details"}),e.jsx(P,{icon:Ce,isHighlighted:!0,accessibilityLabel:"Approve",onClick:()=>{console.log("Approved",l.id)}}),e.jsx(P,{icon:Te,isHighlighted:!0,accessibilityLabel:"Reject",onClick:()=>{console.log("Rejected",l.id)}})]}),children:[e.jsx(x,{children:e.jsx(de,{size:"small",children:l.paymentId})}),e.jsx(ce,{accessibilityLabel:"Amount",placeholder:"Enter text",successText:"Amount is valid"}),e.jsx(x,{children:e.jsx(z,{size:"small",color:"neutral",target:"_blank",href:"/",children:l.account})}),e.jsx(x,{children:(c=l.date)==null?void 0:c.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(x,{children:l.method.title}),e.jsx(x,{children:e.jsx(ue,{size:"xsmall",color:l.status==="Completed"?"positive":l.status==="Pending"?"notice":l.status==="Failed"?"negative":"primary",children:l.status})})]},n)})}),e.jsx(he,{children:e.jsxs(De,{children:[e.jsx(C,{children:"Total"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:e.jsx(ge,{value:10})})]})})]})})]})]})},G=ut.bind({});G.storyName="Multi Select Quick Filter";const ht=q=>{const w=o=>o==="All"?s.nodes.length:s.nodes.filter(r=>r.status===o).length,u=(o,r)=>!r||r==="All"?{nodes:o.nodes}:{nodes:o.nodes.filter(d=>d.status===r)},h=(o,r)=>r?{nodes:o.nodes.filter(d=>d.method.key===r)}:{nodes:o.nodes},b=(o,r)=>r!=null&&r[0]?{nodes:o.nodes.filter(d=>!(r!=null&&r[0])||!(r!=null&&r[1])?!1:d.date>=r[0]&&d.date<=r[1])}:{nodes:o.nodes},[D,v]=y.useState("Completed"),[m,R]=y.useState("paypal"),[g,S]=y.useState(void 0),[A,F]=y.useState(()=>{const o=u(s,D);return h(o,m)});return e.jsx(J,{height:"100%",children:e.jsxs(O,{children:[e.jsx(Z,{selectedFiltersCount:(m?1:0)+(Array.isArray(g)&&g[0]?1:0)+(D!=="All"?1:0),quickFilters:e.jsx(te,{selectionType:"single",onChange:({values:o})=>{const r=o[0],d=u(s,r),p=h(d,m),f=b(p,g);F(f),v(r)},defaultValue:"All",value:D,children:Y.map((o,r)=>e.jsx(ae,{title:o,value:o,trailing:e.jsx(le,{value:w(o),color:"neutral"})},`${r}-${o}`))}),children:e.jsxs(X,{onClearButtonClick:()=>{const o=u(s,"All"),r=h(o,void 0),d=b(r,void 0);F(d),R(void 0),S(void 0),v("All")},children:[e.jsxs(I,{selectionType:"single",children:[e.jsx(B,{label:"Method",value:m,onChange:({values:o})=>{const r=o[0],d=u(s,D),p=h(d,r),f=b(p,g);F(f),R(r)},onClearButtonClick:()=>{const o=u(s,D),r=b(o,g);F(r),R(void 0)}}),e.jsx(M,{children:e.jsx(Q,{children:N.map((o,r)=>e.jsx(L,{title:o.title,value:o.key},r))})})]}),e.jsx(ee,{label:"Date Range",selectionType:"range",value:g,onChange:o=>{const r=u(s,D),d=h(r,m),p=b(d,Array.isArray(o)?o:void 0);F(p),S(o)}}),e.jsxs(I,{selectionType:"single",children:[e.jsx(B,{label:"Status",value:D!=="All"?D:void 0,onChange:({values:o})=>{const r=o[0],d=u(s,r),p=h(d,m),f=b(p,g);F(f),v(r||"All")},onClearButtonClick:()=>{const o=u(s,"All"),r=h(o,m),d=b(r,g);F(d),v("All")}}),e.jsx(M,{children:e.jsx(Q,{children:ke.map((o,r)=>e.jsx(L,{title:o,value:o,isSelected:D===o},r))})})]})]})}),e.jsx(ie,{...q,data:A,defaultSelectedIds:["1","3"],onSelectionChange:console.log,isFirstColumnSticky:!0,selectionType:"single",rowDensity:"normal",children:o=>e.jsxs(e.Fragment,{children:[e.jsx(re,{children:e.jsxs(ne,{children:[e.jsx(k,{headerKey:"PAYMENT_ID",children:"ID"}),e.jsx(k,{headerKey:"AMOUNT",children:"Amount"}),e.jsx(k,{headerKey:"ACCOUNT",children:"Account"}),e.jsx(k,{headerKey:"DATE",children:"Date"}),e.jsx(k,{headerKey:"METHOD",children:"Method"}),e.jsx(k,{headerKey:"STATUS",children:"Status"})]})}),e.jsx(oe,{children:o.map((r,d)=>{var p;return e.jsxs(se,{item:r,hoverActions:e.jsxs(e.Fragment,{children:[e.jsx(K,{variant:"tertiary",size:"xsmall",children:"View Details"}),e.jsx(P,{icon:Ce,isHighlighted:!0,accessibilityLabel:"Approve",onClick:()=>{console.log("Approved",r.id)}}),e.jsx(P,{icon:Te,isHighlighted:!0,accessibilityLabel:"Reject",onClick:()=>{console.log("Rejected",r.id)}})]}),children:[e.jsx(x,{children:e.jsx(de,{size:"small",children:r.paymentId})}),e.jsx(ce,{accessibilityLabel:"Amount",placeholder:"Enter text",successText:"Amount is valid"}),e.jsx(x,{children:e.jsx(z,{size:"small",color:"neutral",target:"_blank",href:"/",children:r.account})}),e.jsx(x,{children:(p=r.date)==null?void 0:p.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(x,{children:r.method.title}),e.jsx(x,{children:e.jsx(ue,{size:"xsmall",color:r.status==="Completed"?"positive":r.status==="Pending"?"notice":r.status==="Failed"?"negative":"primary",children:r.status})})]},d)})}),e.jsx(he,{children:e.jsxs(De,{children:[e.jsx(C,{children:"Total"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:e.jsx(ge,{value:10})})]})})]})})]})})},_=ht.bind({});_.storyName="Without Search Example";const Dt=q=>{const[w,u]=y.useState(s),[h,b]=y.useState("All"),[D,v]=y.useState(""),[m,R]=y.useState(""),[g,S]=y.useState(void 0),A=a=>a==="All"?s.nodes.length:s.nodes.filter(t=>t.status===a).length,F=(a,t)=>!t||t==="All"?{nodes:a.nodes}:{nodes:a.nodes.filter(l=>l.status===t)},o=(a,t)=>t?{nodes:a.nodes.filter(l=>l.paymentId.includes(t))}:{nodes:a.nodes},r=(a,t)=>t?{nodes:a.nodes.filter(l=>l.method.key===t)}:{nodes:a.nodes},d=(a,t)=>t!=null&&t[0]?{nodes:a.nodes.filter(l=>!(t!=null&&t[0])||!(t!=null&&t[1])?!1:l.date>=t[0]&&l.date<=t[1])}:{nodes:a.nodes},p=a=>{const t=F(s,h),l=o(t,a),n=r(l,m),c=d(n,g);u(c),v(a)},f=()=>{const a=F(s,h),t=r(a,m),l=d(t,g);u(l),v("")},j=be(),i=e.jsxs(I,{children:[e.jsx(tt,{value:h,onChange:({value:a})=>{const t=F(s,a),l=o(t,D),n=d(l,g);u(n),b(a)}}),e.jsx(M,{children:e.jsx(Q,{children:Y.map((a,t)=>e.jsx(L,{title:a,value:a,isSelected:h===a},t))})})]});return e.jsxs(J,{height:"100%",children:[j&&e.jsx(H,{label:"",value:D,placeholder:"Search for Payment Id",onChange:({value:a})=>p(a),onClearButtonClick:f,trailing:i}),e.jsxs(O,{children:[e.jsx(Z,{quickFilters:e.jsx(te,{selectionType:"single",onChange:({values:a})=>{const t=a[0],l=F(s,t),n=o(l,D),c=r(n,m),T=d(c,g);u(T),b(t)},defaultValue:"All",value:h,children:Y.map((a,t)=>e.jsx(ae,{title:a,value:a,trailing:e.jsx(le,{value:A(a),color:"neutral"})},`${t}-${a}`))}),selectedFiltersCount:(m?1:0)+(Array.isArray(g)&&g[0]?1:0)+(h!=="All"?1:0),actions:!j&&e.jsx(E,{width:"280px",children:e.jsx(H,{label:"",value:D,placeholder:"Search for Payment Id",onChange:({value:a})=>p(a),onClearButtonClick:f,trailing:i})}),children:e.jsxs(X,{onClearButtonClick:()=>{const a=F(s,"All"),t=o(a,D),l=r(t,""),n=d(l,void 0);u(n),R(void 0),S(void 0),b("All")},children:[e.jsxs(I,{selectionType:"single",children:[e.jsx(B,{label:"Method",onChange:({values:a})=>{const t=a[0],l=F(s,h),n=o(l,D),c=r(n,t),T=d(c,g);u(T),R(t)}}),e.jsx(M,{children:e.jsx(Q,{children:N.map((a,t)=>e.jsx(L,{title:a.title,value:a.key},t))})})]}),e.jsx(ee,{label:"Date Range",selectionType:"range",onChange:a=>{const t=F(s,h),l=o(t,D),n=r(l,m),c=d(n,Array.isArray(a)?a:void 0);u(c),S(a)}}),e.jsxs(I,{selectionType:"single",children:[e.jsx(B,{label:"Status",value:h!=="All"?h:void 0,onChange:({values:a})=>{const t=a[0],l=F(s,t),n=o(l,D),c=r(n,m),T=d(c,g);u(T),b(t||"All")},onClearButtonClick:()=>{const a=F(s,"All"),t=o(a,D),l=r(t,m),n=d(l,g);u(n),b("All")}}),e.jsx(M,{children:e.jsx(Q,{children:ke.map((a,t)=>e.jsx(L,{title:a,value:a,isSelected:h===a},t))})})]})]})}),e.jsx(ie,{...q,data:w,defaultSelectedIds:["1","3"],onSelectionChange:console.log,isFirstColumnSticky:!0,selectionType:"single",rowDensity:"normal",children:a=>e.jsxs(e.Fragment,{children:[e.jsx(re,{children:e.jsxs(ne,{children:[e.jsx(k,{headerKey:"PAYMENT_ID",children:"ID"}),e.jsx(k,{headerKey:"AMOUNT",children:"Amount"}),e.jsx(k,{headerKey:"ACCOUNT",children:"Account"}),e.jsx(k,{headerKey:"DATE",children:"Date"}),e.jsx(k,{headerKey:"METHOD",children:"Method"}),e.jsx(k,{headerKey:"STATUS",children:"Status"})]})}),e.jsx(oe,{children:a.map((t,l)=>{var n;return e.jsxs(se,{item:t,hoverActions:e.jsxs(e.Fragment,{children:[e.jsx(K,{variant:"tertiary",size:"xsmall",children:"View Details"}),e.jsx(P,{icon:Ce,isHighlighted:!0,accessibilityLabel:"Approve",onClick:()=>{console.log("Approved",t.id)}}),e.jsx(P,{icon:Te,isHighlighted:!0,accessibilityLabel:"Reject",onClick:()=>{console.log("Rejected",t.id)}})]}),onClick:()=>{console.log("where")},children:[e.jsx(x,{children:e.jsx(de,{size:"small",children:t.paymentId})}),e.jsx(ce,{accessibilityLabel:"Amount",placeholder:"Enter text",successText:"Amount is valid"}),e.jsx(x,{children:e.jsx(z,{size:"small",color:"neutral",target:"_blank",href:"/",children:t.account})}),e.jsx(x,{children:(n=t.date)==null?void 0:n.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(x,{children:t.method.title}),e.jsx(x,{children:e.jsx(ue,{size:"xsmall",color:t.status==="Completed"?"positive":t.status==="Pending"?"notice":t.status==="Failed"?"negative":"primary",children:t.status})})]},l)})}),e.jsx(he,{children:e.jsxs(De,{children:[e.jsx(C,{children:"Total"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:e.jsx(ge,{value:10})})]})})]})})]})]})},$=Dt.bind({});$.storyName="With Dropdown in Search Example";var Re,fe,Ve;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`args => {
  const [listViewTableData, setListViewTableData] = useState(data);
  const [selectedQuickFilter, setSelectedQuickFilter] = useState<string>('All');
  const [searchValue, setSearchValue] = useState<string | undefined>('');
  const [methodFilter, setMethodFilter] = useState<string | undefined>('');
  const [filterDateRange, setFilterDateRange] = useState<DatesRangeValue | undefined>(undefined);
  const getQuickFilterValueCount = (value: string): number => {
    if (value === 'All') {
      return data.nodes.length;
    }
    return data.nodes.filter(node => node.status === value).length;
  };
  const getQuickFilterData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value || value === 'All') {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.status === value)
    };
  };
  const getSearchedData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.paymentId.includes(value))
    };
  };
  const getMethodFilterData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.method.key === value)
    };
  };
  const getFilterRangeData = (data: TableData<Item>, value?: DatesRangeValue): TableData<Item> => {
    if (!value?.[0]) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => {
        if (!value?.[0] || !value?.[1]) return false;
        return node.date >= value[0] && node.date <= value[1];
      })
    };
  };
  const handleSearchChange = (value?: string): void => {
    const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
    const searchValueData = getSearchedData(quickFilterData, value);
    const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
    const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
    setListViewTableData(dateRangeFilterData);
    setSearchValue(value);
  };
  const handleSearchClear = (): void => {
    const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
    const methodFilterData = getMethodFilterData(quickFilterData, methodFilter);
    const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
    setListViewTableData(dateRangeFilterData);
    setSearchValue('');
  };
  const isMobile = useIsMobile();
  return <BaseBox height="100%">
      {isMobile && <SearchInput label="" value={searchValue} placeholder="Search for Payment Id" onChange={({
      value
    }) => handleSearchChange(value)} onClearButtonClick={handleSearchClear} />}
      <ListView>
        <ListViewFilters quickFilters={<QuickFilterGroup selectionType="single" onChange={({
        values
      }) => {
        const value = values[0];
        const quickFilterData = getQuickFilterData(data, value);
        const searchValueData = getSearchedData(quickFilterData, searchValue);
        const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
        const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
        setListViewTableData(dateRangeFilterData);
        setSelectedQuickFilter(value);
      }} defaultValue="All" value={selectedQuickFilter}>
              {quickFilters.map((status, index) => <QuickFilter title={status} value={status} trailing={<Counter value={getQuickFilterValueCount(status)} color="neutral" />} key={\`\${index}-\${status}\`} />)}
            </QuickFilterGroup>} selectedFiltersCount={(methodFilter ? 1 : 0) + (Array.isArray(filterDateRange) && filterDateRange[0] ? 1 : 0) + (selectedQuickFilter !== 'All' ? 1 : 0)} actions={!isMobile && <Box width="208px">
                <SearchInput label="" value={searchValue} placeholder="Search for Payment Id" onChange={({
          value
        }) => handleSearchChange(value)} onClearButtonClick={handleSearchClear} />
              </Box>}>
          <FilterChipGroup onClearButtonClick={() => {
          const quickFilterData = getQuickFilterData(data, 'All');
          const searchValueData = getSearchedData(quickFilterData, searchValue);
          const methodFilterData = getMethodFilterData(searchValueData, '');
          const dateRangeFilterData = getFilterRangeData(methodFilterData, undefined);
          setListViewTableData(dateRangeFilterData);
          setMethodFilter(undefined);
          setFilterDateRange(undefined);
          setSelectedQuickFilter('All');
        }}>
            <Dropdown selectionType="single">
              <FilterChipSelectInput label="Method" onChange={({
              values
            }) => {
              const value = values[0];
              const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const methodFilterData = getMethodFilterData(searchValueData, value);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setMethodFilter(value);
            }} />
              <DropdownOverlay>
                <ActionList>
                  {MethodFilterValues.map((method, index) => <ActionListItem key={index} title={method.title} value={method.key} />)}
                </ActionList>
              </DropdownOverlay>
            </Dropdown>
            <FilterChipDatePicker label="Date Range" selectionType="range" onChange={value => {
            const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
            const searchValueData = getSearchedData(quickFilterData, searchValue);
            const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
            const dateRangeFilterData = getFilterRangeData(methodFilterData, Array.isArray(value) ? value : undefined);
            setListViewTableData(dateRangeFilterData);
            setFilterDateRange(value as DatesRangeValue);
          }} />
            <Dropdown selectionType="single">
              <FilterChipSelectInput label="Status" value={selectedQuickFilter !== 'All' ? selectedQuickFilter : undefined} onChange={({
              values
            }) => {
              const value = values[0];
              const quickFilterData = getQuickFilterData(data, value);
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setSelectedQuickFilter(value ? value : 'All');
            }} onClearButtonClick={() => {
              const quickFilterData = getQuickFilterData(data, 'All');
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setSelectedQuickFilter('All');
            }} />
              <DropdownOverlay>
                <ActionList>
                  {filterChipQuickFilters.map((method, index) => <ActionListItem key={index} title={method} value={method} isSelected={selectedQuickFilter === method} />)}
                </ActionList>
              </DropdownOverlay>
            </Dropdown>
          </FilterChipGroup>
        </ListViewFilters>
        <Table {...args} data={listViewTableData} defaultSelectedIds={['1', '3']} onSelectionChange={console.log} isFirstColumnSticky selectionType="single" rowDensity="compact" pagination={<TablePagination onPageChange={console.log} defaultPageSize={10} onPageSizeChange={console.log} showPageSizePicker showPageNumberSelector />}>
          {tableData => <>
              <TableHeader>
                <TableHeaderRow>
                  <TableHeaderCell headerKey="PAYMENT_ID">ID</TableHeaderCell>
                  <TableHeaderCell headerKey="AMOUNT">Amount</TableHeaderCell>
                  <TableHeaderCell headerKey="ACCOUNT">Account</TableHeaderCell>
                  <TableHeaderCell headerKey="DATE">Date</TableHeaderCell>
                  <TableHeaderCell headerKey="METHOD">Method</TableHeaderCell>
                  <TableHeaderCell headerKey="STATUS">Status</TableHeaderCell>
                </TableHeaderRow>
              </TableHeader>
              <TableBody>
                {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem} hoverActions={<>
                        <Button variant="tertiary" size="xsmall">
                          View Details
                        </Button>
                        <IconButton icon={CheckIcon} isHighlighted accessibilityLabel="Approve" onClick={() => {
                console.log('Approved', tableItem.id);
              }} />
                        <IconButton icon={CloseIcon} isHighlighted accessibilityLabel="Reject" onClick={() => {
                console.log('Rejected', tableItem.id);
              }} />
                      </>} onClick={() => {
              console.log('where');
            }}>
                    <TableCell>
                      <Code size="small">{tableItem.paymentId}</Code>
                    </TableCell>
                    <TableEditableCell accessibilityLabel="Amount" placeholder="Enter text" successText="Amount is valid" />
                    <TableCell>
                      <Link size="small" color="neutral" target="_blank" href="/">
                        {tableItem.account}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {tableItem.date?.toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                })}
                    </TableCell>
                    <TableCell>{tableItem.method.title}</TableCell>
                    <TableCell>
                      <Badge size="xsmall" color={tableItem.status === 'Completed' ? 'positive' : tableItem.status === 'Pending' ? 'notice' : tableItem.status === 'Failed' ? 'negative' : 'primary'}>
                        {tableItem.status}
                      </Badge>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
              <TableFooter>
                <TableFooterRow>
                  <TableFooterCell>Total</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>
                    <Amount value={10} />
                  </TableFooterCell>
                </TableFooterRow>
              </TableFooter>
            </>}
        </Table>
      </ListView>
    </BaseBox>;
}`,...(Ve=(fe=W.parameters)==null?void 0:fe.docs)==null?void 0:Ve.source}}};var Ae,je,we;U.parameters={...U.parameters,docs:{...(Ae=U.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => {
  const getQuickFilterValueCount = (value: string): number => {
    if (value === 'All') {
      return data.nodes.length;
    }
    return data.nodes.filter(node => node.status === value).length;
  };
  const getQuickFilterData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value || value === 'All') {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.status === value)
    };
  };
  const getSearchedData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.paymentId.includes(value))
    };
  };
  const getMethodFilterData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.method.key === value)
    };
  };
  const getFilterRangeData = (data: TableData<Item>, value?: DatesRangeValue): TableData<Item> => {
    if (!value?.[0]) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => {
        if (!value?.[0] || !value?.[1]) return false;
        return node.date >= value[0] && node.date <= value[1];
      })
    };
  };
  const [selectedQuickFilter, setSelectedQuickFilter] = useState<string>('Completed');
  const [searchValue, setSearchValue] = useState<string | undefined>('');
  const [methodFilter, setMethodFilter] = useState<string | undefined>('paypal');
  const [filterDateRange, setFilterDateRange] = useState<DatesRangeValue | undefined>(undefined);
  const [listViewTableData, setListViewTableData] = useState(() => {
    const filteredQuickFilterData = getQuickFilterData(data, selectedQuickFilter);
    const methodFilterData = getMethodFilterData(filteredQuickFilterData, methodFilter);
    return methodFilterData;
  });
  const handleSearchChange = (value?: string): void => {
    const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
    const searchValueData = getSearchedData(quickFilterData, value);
    const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
    const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
    setListViewTableData(dateRangeFilterData);
    setSearchValue(value);
  };
  const handleSearchClear = (): void => {
    const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
    const methodFilterData = getMethodFilterData(quickFilterData, methodFilter);
    const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
    setListViewTableData(dateRangeFilterData);
    setSearchValue('');
  };
  const isMobile = useIsMobile();
  return <BaseBox height="100%">
      {isMobile && <SearchInput label="" value={searchValue} placeholder="Search for Payment Id" onChange={({
      value
    }) => handleSearchChange(value)} onClearButtonClick={handleSearchClear} />}
      <ListView>
        <ListViewFilters selectedFiltersCount={(methodFilter ? 1 : 0) + (Array.isArray(filterDateRange) && filterDateRange[0] ? 1 : 0) + (selectedQuickFilter !== 'All' ? 1 : 0)} quickFilters={<QuickFilterGroup selectionType="single" onChange={({
        values
      }) => {
        const value = values[0];
        const quickFilterData = getQuickFilterData(data, value);
        const searchValueData = getSearchedData(quickFilterData, searchValue);
        const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
        const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
        setListViewTableData(dateRangeFilterData);
        setSelectedQuickFilter(value);
      }} defaultValue="All" value={selectedQuickFilter}>
              {quickFilters.map((status, index) => <QuickFilter title={status} value={status} trailing={<Counter value={getQuickFilterValueCount(status)} color="neutral" />} key={\`\${index}-\${status}\`} />)}
            </QuickFilterGroup>} actions={!isMobile && <Box width="208px">
                <SearchInput label="" value={searchValue} placeholder="Search for Payment Id" onChange={({
          value
        }) => handleSearchChange(value)} onClearButtonClick={handleSearchClear} />
              </Box>}>
          <FilterChipGroup onClearButtonClick={() => {
          const quickFilterData = getQuickFilterData(data, 'All');
          const searchValueData = getSearchedData(quickFilterData, searchValue);
          const methodFilterData = getMethodFilterData(searchValueData, undefined);
          const dateRangeFilterData = getFilterRangeData(methodFilterData, undefined);
          setListViewTableData(dateRangeFilterData);
          setMethodFilter(undefined);
          setFilterDateRange(undefined);
          setSelectedQuickFilter('All');
        }}>
            <Dropdown selectionType="single">
              <FilterChipSelectInput label="Method" value={methodFilter} onChange={({
              values
            }) => {
              const value = values[0];
              const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const methodFilterData = getMethodFilterData(searchValueData, value);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setMethodFilter(value);
            }} onClearButtonClick={() => {
              const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const dateRangeFilterData = getFilterRangeData(searchValueData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setMethodFilter(undefined);
            }} />
              <DropdownOverlay>
                <ActionList>
                  {MethodFilterValues.map((method, index) => <ActionListItem key={index} title={method.title} value={method.key} />)}
                </ActionList>
              </DropdownOverlay>
            </Dropdown>
            <FilterChipDatePicker label="Date Range" selectionType="range" value={filterDateRange} onChange={value => {
            const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
            const searchValueData = getSearchedData(quickFilterData, searchValue);
            const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
            const dateRangeFilterData = getFilterRangeData(methodFilterData, Array.isArray(value) ? value : undefined);
            setListViewTableData(dateRangeFilterData);
            setFilterDateRange(value as DatesRangeValue);
          }} />
            <Dropdown selectionType="single">
              <FilterChipSelectInput label="Status" value={selectedQuickFilter !== 'All' ? selectedQuickFilter : undefined} onChange={({
              values
            }) => {
              const value = values[0];
              const quickFilterData = getQuickFilterData(data, value);
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setSelectedQuickFilter(value ? value : 'All');
            }} onClearButtonClick={() => {
              const quickFilterData = getQuickFilterData(data, 'All');
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setSelectedQuickFilter('All');
            }} />
              <DropdownOverlay>
                <ActionList>
                  {filterChipQuickFilters.map((method, index) => <ActionListItem key={index} title={method} value={method} isSelected={selectedQuickFilter === method} />)}
                </ActionList>
              </DropdownOverlay>
            </Dropdown>
          </FilterChipGroup>
        </ListViewFilters>
        <Table {...args} data={listViewTableData} defaultSelectedIds={['1', '3']} onSelectionChange={console.log} isFirstColumnSticky selectionType="single" rowDensity="compact">
          {tableData => <>
              <TableHeader>
                <TableHeaderRow>
                  <TableHeaderCell headerKey="PAYMENT_ID">ID</TableHeaderCell>
                  <TableHeaderCell headerKey="AMOUNT">Amount</TableHeaderCell>
                  <TableHeaderCell headerKey="ACCOUNT">Account</TableHeaderCell>
                  <TableHeaderCell headerKey="DATE">Date</TableHeaderCell>
                  <TableHeaderCell headerKey="METHOD">Method</TableHeaderCell>
                  <TableHeaderCell headerKey="STATUS">Status</TableHeaderCell>
                </TableHeaderRow>
              </TableHeader>
              <TableBody>
                {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem} hoverActions={<>
                        <Button variant="tertiary" size="xsmall">
                          View Details
                        </Button>
                        <IconButton icon={CheckIcon} isHighlighted accessibilityLabel="Approve" onClick={() => {
                console.log('Approved', tableItem.id);
              }} />
                        <IconButton icon={CloseIcon} isHighlighted accessibilityLabel="Reject" onClick={() => {
                console.log('Rejected', tableItem.id);
              }} />
                      </>}>
                    <TableCell>
                      <Code size="small">{tableItem.paymentId}</Code>
                    </TableCell>
                    <TableEditableCell accessibilityLabel="Amount" placeholder="Enter text" successText="Amount is valid" />
                    <TableCell>{tableItem.account}</TableCell>
                    <TableCell>
                      {tableItem.date?.toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                })}
                    </TableCell>
                    <TableCell>
                      <Link size="small" color="neutral" target="_blank" href="/">
                        {tableItem.account}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Badge size="xsmall" color={tableItem.status === 'Completed' ? 'positive' : tableItem.status === 'Pending' ? 'notice' : tableItem.status === 'Failed' ? 'negative' : 'primary'}>
                        {tableItem.status}
                      </Badge>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
              <TableFooter>
                <TableFooterRow>
                  <TableFooterCell>Total</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>
                    <Amount value={10} />
                  </TableFooterCell>
                </TableFooterRow>
              </TableFooter>
            </>}
        </Table>
      </ListView>
    </BaseBox>;
}`,...(we=(je=U.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};var Ie,Me,Qe;me.parameters={...me.parameters,docs:{...(Ie=me.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => {
  const [listViewTableData, setListViewTableData] = useState(data);
  const [selectedQuickFilter, setSelectedQuickFilter] = useState<string>('All');
  const [searchValue, setSearchValue] = useState<string | undefined>('');
  const [methodFilter, setMethodFilter] = useState<string | undefined>('');
  const [filterDateRange, setFilterDateRange] = useState<DatesRangeValue | undefined>(undefined);
  const [selectedIds, setSelectedIds] = useState<Identifier[]>([]);
  const getQuickFilterValueCount = (value: string): number => {
    if (value === 'All') {
      return data.nodes.length;
    }
    return data.nodes.filter(node => node.status === value).length;
  };
  const getQuickFilterData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value || value === 'All') {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.status === value)
    };
  };
  const getSearchedData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.paymentId.includes(value))
    };
  };
  const getMethodFilterData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.method.key === value)
    };
  };
  const getFilterRangeData = (data: TableData<Item>, value?: DatesRangeValue): TableData<Item> => {
    if (!value?.[0]) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => {
        if (!value?.[0] || !value?.[1]) return false;
        return node.date >= value[0] && node.date <= value[1];
      })
    };
  };
  const handleSearchChange = (value?: string): void => {
    const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
    const searchValueData = getSearchedData(quickFilterData, value);
    const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
    const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
    setListViewTableData(dateRangeFilterData);
    setSearchValue(value);
  };
  const handleSearchClear = (): void => {
    const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
    const methodFilterData = getMethodFilterData(quickFilterData, methodFilter);
    const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
    setListViewTableData(dateRangeFilterData);
    setSearchValue('');
  };
  const isMobile = useIsMobile();
  return <BaseBox backgroundColor="surface.background.gray.moderate" padding="spacing.8" height="100vh">
      {isMobile && <SearchInput label="" value={searchValue} placeholder="Search for Payment Id" onChange={({
      value
    }) => handleSearchChange(value)} onClearButtonClick={handleSearchClear} />}
      <ListView>
        <ListViewFilters quickFilters={<QuickFilterGroup selectionType="single" onChange={({
        values
      }) => {
        const value = values[0];
        const quickFilterData = getQuickFilterData(data, value);
        const searchValueData = getSearchedData(quickFilterData, searchValue);
        const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
        const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
        setListViewTableData(dateRangeFilterData);
        setSelectedQuickFilter(value);
      }} defaultValue="All" value={selectedQuickFilter}>
              {quickFilters.map((status, index) => <QuickFilter title={status} value={status} trailing={<Counter value={getQuickFilterValueCount(status)} color="neutral" />} key={\`\${index}-\${status}\`} />)}
            </QuickFilterGroup>} selectedFiltersCount={(methodFilter ? 1 : 0) + (Array.isArray(filterDateRange) && filterDateRange[0] ? 1 : 0) + (selectedQuickFilter !== 'All' ? 1 : 0)} actions={<Box display="flex" gap="spacing.4" alignItems="center">
              {!isMobile && <Box width="208px">
                  <SearchInput label="" accessibilityLabel="Search for Payment Id" value={searchValue} placeholder="Search for Payment Id" onChange={({
            value
          }) => handleSearchChange(value)} onClearButtonClick={handleSearchClear} />
                </Box>}
              <ButtonGroup variant="tertiary">
                <Tooltip content="More options">
                  <Button icon={MoreVerticalIcon} accessibilityLabel="More options" />
                </Tooltip>
                <Tooltip content="Download data">
                  <Button icon={DownloadIcon} accessibilityLabel="Download data" />
                </Tooltip>
                <Tooltip content="Share">
                  <Button icon={ShareIcon} accessibilityLabel="Share" />
                </Tooltip>
              </ButtonGroup>
            </Box>}>
          <FilterChipGroup onClearButtonClick={() => {
          const quickFilterData = getQuickFilterData(data, 'All');
          const searchValueData = getSearchedData(quickFilterData, searchValue);
          const methodFilterData = getMethodFilterData(searchValueData, '');
          const dateRangeFilterData = getFilterRangeData(methodFilterData, undefined);
          setListViewTableData(dateRangeFilterData);
          setMethodFilter(undefined);
          setFilterDateRange(undefined);
          setSelectedQuickFilter('All');
        }}>
            <Dropdown selectionType="single">
              <FilterChipSelectInput label="Method" onChange={({
              values
            }) => {
              const value = values[0];
              const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const methodFilterData = getMethodFilterData(searchValueData, value);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setMethodFilter(value);
            }} />
              <DropdownOverlay>
                <ActionList>
                  {MethodFilterValues.map((method, index) => <ActionListItem key={index} title={method.title} value={method.key} />)}
                </ActionList>
              </DropdownOverlay>
            </Dropdown>
            <FilterChipDatePicker label="Date Range" selectionType="range" onChange={value => {
            const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
            const searchValueData = getSearchedData(quickFilterData, searchValue);
            const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
            const dateRangeFilterData = getFilterRangeData(methodFilterData, Array.isArray(value) ? value : undefined);
            setListViewTableData(dateRangeFilterData);
            setFilterDateRange(value as DatesRangeValue);
          }} />
            <Dropdown selectionType="single">
              <FilterChipSelectInput label="Status" value={selectedQuickFilter !== 'All' ? selectedQuickFilter : undefined} onChange={({
              values
            }) => {
              const value = values[0];
              const quickFilterData = getQuickFilterData(data, value);
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setSelectedQuickFilter(value ? value : 'All');
            }} onClearButtonClick={() => {
              const quickFilterData = getQuickFilterData(data, 'All');
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setSelectedQuickFilter('All');
            }} />
              <DropdownOverlay>
                <ActionList>
                  {filterChipQuickFilters.map((method, index) => <ActionListItem key={index} title={method} value={method} isSelected={selectedQuickFilter === method} />)}
                </ActionList>
              </DropdownOverlay>
            </Dropdown>
          </FilterChipGroup>
        </ListViewFilters>
        <Table {...args} data={listViewTableData} onSelectionChange={({
        selectedIds
      }) => {
        console.log('Selected ids:', selectedIds);
        setSelectedIds(selectedIds);
      }} isFirstColumnSticky selectionType="multiple" rowDensity="compact" pagination={<TablePagination onPageChange={console.log} defaultPageSize={10} onPageSizeChange={console.log} showPageSizePicker showPageNumberSelector />} toolbar={selectedIds.length > 0 ? <TableToolbar placement="overlay" title={\`\${selectedIds.length} selected\`}>
                <TableToolbarActions>
                  <Box width="100%" justifyContent="end" display="flex" alignItems="center" gap="spacing.4">
                    <Link size="small" icon={CopyIcon}>
                      Copy
                    </Link>
                    <Link size="small" icon={TrashIcon}>
                      Delete
                    </Link>
                  </Box>
                </TableToolbarActions>
              </TableToolbar> : undefined}>
          {tableData => <>
              <TableHeader>
                <TableHeaderRow>
                  <TableHeaderCell headerKey="PAYMENT_ID">ID</TableHeaderCell>
                  <TableHeaderCell headerKey="AMOUNT">Amount</TableHeaderCell>
                  <TableHeaderCell headerKey="ACCOUNT">Account</TableHeaderCell>
                  <TableHeaderCell headerKey="DATE">Date</TableHeaderCell>
                  <TableHeaderCell headerKey="METHOD">Method</TableHeaderCell>
                  <TableHeaderCell headerKey="STATUS">Status</TableHeaderCell>
                </TableHeaderRow>
              </TableHeader>
              <TableBody>
                {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem} onClick={() => {
              console.log('where');
            }}>
                    <TableCell>
                      <Code size="small">{tableItem.paymentId}</Code>
                    </TableCell>
                    <TableEditableCell accessibilityLabel="Amount" placeholder="Enter text" successText="Amount is valid" />
                    <TableCell>
                      <Link size="small" color="neutral" target="_blank" href="/">
                        {tableItem.account}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {tableItem.date?.toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                })}
                    </TableCell>
                    <TableCell>{tableItem.method.title}</TableCell>
                    <TableCell>
                      <Badge size="xsmall" color={tableItem.status === 'Completed' ? 'positive' : tableItem.status === 'Pending' ? 'notice' : tableItem.status === 'Failed' ? 'negative' : 'primary'}>
                        {tableItem.status}
                      </Badge>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
              <TableFooter>
                <TableFooterRow>
                  <TableFooterCell>Total</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>
                    <Amount value={10} />
                  </TableFooterCell>
                </TableFooterRow>
              </TableFooter>
            </>}
        </Table>
      </ListView>
    </BaseBox>;
}`,...(Qe=(Me=me.parameters)==null?void 0:Me.docs)==null?void 0:Qe.source}}};var Le,qe,Be;G.parameters={...G.parameters,docs:{...(Le=G.parameters)==null?void 0:Le.docs,source:{originalSource:`args => {
  const [listViewTableData, setListViewTableData] = useState(data);
  const [selectedQuickFilter, setSelectedQuickFilter] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string | undefined>('');
  const [methodFilter, setMethodFilter] = useState<string | undefined>('');
  const [filterDateRange, setFilterDateRange] = useState<DatesRangeValue | undefined>(undefined);
  const getQuickFilterValueCount = (value: string): number => {
    if (value === 'All') {
      return data.nodes.length;
    }
    const statusMap: Record<string, string[]> = {
      Pending: ['Pending'],
      Failed: ['Failed'],
      Completed: ['Completed'],
      Processing: ['Pending'],
      Authorized: ['Completed'],
      Captured: ['Completed'],
      Refunded: ['Failed'],
      Disputed: ['Failed'],
      Cancelled: ['Failed'],
      Expired: ['Failed'],
      Rejected: ['Failed'],
      Waiting: ['Pending'],
      Review: ['Pending'],
      Hold: ['Pending']
    };
    const mappedStatuses = statusMap[value] || [value];
    return data.nodes.filter(node => mappedStatuses.includes(node.status)).length;
  };
  const getQuickFilterData = (data: TableData<Item>, values?: string[]): TableData<Item> => {
    if (!values?.length) {
      return {
        nodes: data.nodes
      };
    }
    const statusMap: Record<string, string[]> = {
      Pending: ['Pending'],
      Failed: ['Failed'],
      Completed: ['Completed'],
      Processing: ['Pending'],
      Authorized: ['Completed'],
      Captured: ['Completed'],
      Refunded: ['Failed'],
      Disputed: ['Failed'],
      Cancelled: ['Failed'],
      Expired: ['Failed'],
      Rejected: ['Failed'],
      Waiting: ['Pending'],
      Review: ['Pending'],
      Hold: ['Pending']
    };
    const allMappedStatuses = values.flatMap(value => statusMap[value] || [value]);
    return {
      nodes: data.nodes.filter(node => allMappedStatuses.includes(node.status))
    };
  };
  const getSearchedData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.paymentId.includes(value))
    };
  };
  const getMethodFilterData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.method.key === value)
    };
  };
  const getFilterRangeData = (data: TableData<Item>, value?: DatesRangeValue): TableData<Item> => {
    if (!value?.[0]) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => {
        if (!value?.[0] || !value?.[1]) return false;
        return node.date >= value[0] && node.date <= value[1];
      })
    };
  };
  const getLastWeekDateRange = (): DatesRangeValue => {
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7);
    return [lastWeek, new Date()];
  };
  const compareDateRangeValues = (dateRange1: DatesRangeValue, dateRange2: DatesRangeValue): boolean => {
    if (!dateRange1?.[0] || !dateRange2?.[0]) {
      return false;
    }
    return dayjs(dateRange1[0]).isSame(dayjs(dateRange2[0]), 'day') && dayjs(dateRange1[1]).isSame(dayjs(dateRange2[1]), 'day');
  };
  const handleSearchChange = (value?: string): void => {
    const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
    const searchValueData = getSearchedData(quickFilterData, value);
    const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
    const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
    setListViewTableData(dateRangeFilterData);
    setSearchValue(value);
  };
  const handleSearchClear = (): void => {
    const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
    const methodFilterData = getMethodFilterData(quickFilterData, methodFilter);
    const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
    setListViewTableData(dateRangeFilterData);
    setSearchValue('');
  };
  const isMobile = useIsMobile();
  return <BaseBox backgroundColor="surface.background.gray.moderate" padding="spacing.8" height="100vh">
      {isMobile && <SearchInput label="" value={searchValue} placeholder="Search for Payment Id" onChange={({
      value
    }) => handleSearchChange(value)} onClearButtonClick={handleSearchClear} />}
      <ListView>
        <ListViewFilters selectedFiltersCount={(methodFilter ? 1 : 0) + (Array.isArray(filterDateRange) && filterDateRange[0] ? 1 : 0) + (selectedQuickFilter.filter(filter => filter !== 'LastWeek').length !== 0 ? 1 : 0)} quickFilters={<Box display="flex" gap="spacing.3">
              <QuickFilterGroup selectionType="multiple" onChange={({
          values
        }) => {
          const lastWeekDateRange = getLastWeekDateRange();
          const shouldChangeValue = values.includes('LastWeek');
          if (!shouldChangeValue) {
            const quickFilterData = getQuickFilterData(data, values);
            const searchValueData = getSearchedData(quickFilterData, searchValue);
            const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
            const rangeToUse = compareDateRangeValues(lastWeekDateRange, filterDateRange as DatesRangeValue) ? undefined : filterDateRange;
            const dateRangeFilterData = getFilterRangeData(methodFilterData, rangeToUse);
            setListViewTableData(dateRangeFilterData);
            setFilterDateRange(undefined);
            setSelectedQuickFilter(values.filter(value => value !== 'LastWeek'));
          } else {
            const quickFilterData = getQuickFilterData(data, values.filter(value => value !== 'LastWeek'));
            const searchValueData = getSearchedData(quickFilterData, searchValue);
            const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
            const dateRangeFilterData = getFilterRangeData(methodFilterData, lastWeekDateRange);
            setFilterDateRange(lastWeekDateRange);
            setSelectedQuickFilter(values);
            setListViewTableData(dateRangeFilterData);
          }
        }} value={selectedQuickFilter}>
                {extendedStatusFilters.map((status, index) => <QuickFilter title={status} value={status} trailing={<Counter value={getQuickFilterValueCount(status)} color="neutral" />} key={\`\${index}-\${status}\`} />)}
              </QuickFilterGroup>
            </Box>} actions={!isMobile && <Box width="208px">
                <SearchInput label="" value={searchValue} placeholder="Search for Payment Id" onChange={({
          value
        }) => handleSearchChange(value)} onClearButtonClick={handleSearchClear} />
              </Box>}>
          <FilterChipGroup onClearButtonClick={() => {
          setMethodFilter(undefined);
          setFilterDateRange(undefined);
          setSelectedQuickFilter([]);
          const searchValueData = getSearchedData(data, searchValue);
          setListViewTableData(searchValueData);
        }}>
            <Dropdown selectionType="single">
              <FilterChipSelectInput label="Method" onChange={({
              values
            }) => {
              const value = values[0];
              const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const methodFilterData = getMethodFilterData(searchValueData, value);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setMethodFilter(value);
            }} />
              <DropdownOverlay>
                <ActionList>
                  {MethodFilterValues.map((method, index) => <ActionListItem key={index} title={method.title} value={method.key} />)}
                </ActionList>
              </DropdownOverlay>
            </Dropdown>
            <FilterChipDatePicker label="Date Range" selectionType="range" value={filterDateRange} onChange={value => {
            const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
            const searchValueData = getSearchedData(quickFilterData, searchValue);
            const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
            const dateRangeFilterData = getFilterRangeData(methodFilterData, Array.isArray(value) ? value : undefined);
            setListViewTableData(dateRangeFilterData);
            setFilterDateRange(value as DatesRangeValue);
          }} onClearButtonClick={() => {
            const quickFilters = selectedQuickFilter.filter(value => value !== 'LastWeek');
            const quickFilterData = getQuickFilterData(data, quickFilters);
            const searchValueData = getSearchedData(quickFilterData, searchValue);
            const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
            const dateRangeFilterData = getFilterRangeData(methodFilterData, undefined);
            setListViewTableData(dateRangeFilterData);
            setSelectedQuickFilter(quickFilters);
          }} />
            <Dropdown selectionType="multiple">
              <FilterChipSelectInput label="Status" value={selectedQuickFilter.filter(filters => filters !== 'LastWeek')} onChange={({
              values
            }) => {
              const quickFilterData = getQuickFilterData(data, values);
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setSelectedQuickFilter(prev => [...prev.filter(filter => filter === 'LastWeek'), ...values]);
            }} onClearButtonClick={() => {
              const quickFilterData = getQuickFilterData(data, []);
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setSelectedQuickFilter(prev => prev.filter(filter => filter === 'LastWeek'));
            }} />
              <DropdownOverlay>
                <ActionList>
                  {extendedStatusFilters.map((method, index) => <ActionListItem key={index} title={method} value={method} isSelected={selectedQuickFilter.includes(method)} />)}
                </ActionList>
              </DropdownOverlay>
            </Dropdown>
          </FilterChipGroup>
        </ListViewFilters>
        <Table {...args} data={listViewTableData} defaultSelectedIds={['1', '3']} onSelectionChange={console.log} isFirstColumnSticky selectionType="single" pagination={<TablePagination onPageChange={console.log} defaultPageSize={10} onPageSizeChange={console.log} showPageSizePicker showPageNumberSelector />}>
          {tableData => <>
              <TableHeader>
                <TableHeaderRow>
                  <TableHeaderCell headerKey="PAYMENT_ID">ID</TableHeaderCell>
                  <TableHeaderCell headerKey="AMOUNT">Amount</TableHeaderCell>
                  <TableHeaderCell headerKey="ACCOUNT">Account</TableHeaderCell>
                  <TableHeaderCell headerKey="DATE">Date</TableHeaderCell>
                  <TableHeaderCell headerKey="METHOD">Method</TableHeaderCell>
                  <TableHeaderCell headerKey="STATUS">Status</TableHeaderCell>
                </TableHeaderRow>
              </TableHeader>
              <TableBody>
                {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem} hoverActions={<>
                        <Button variant="tertiary" size="xsmall">
                          View Details
                        </Button>
                        <IconButton icon={CheckIcon} isHighlighted accessibilityLabel="Approve" onClick={() => {
                console.log('Approved', tableItem.id);
              }} />
                        <IconButton icon={CloseIcon} isHighlighted accessibilityLabel="Reject" onClick={() => {
                console.log('Rejected', tableItem.id);
              }} />
                      </>}>
                    <TableCell>
                      <Code size="small">{tableItem.paymentId}</Code>
                    </TableCell>
                    <TableEditableCell accessibilityLabel="Amount" placeholder="Enter text" successText="Amount is valid" />
                    <TableCell>
                      <Link size="small" color="neutral" target="_blank" href="/">
                        {tableItem.account}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {tableItem.date?.toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                })}
                    </TableCell>
                    <TableCell>{tableItem.method.title}</TableCell>
                    <TableCell>
                      <Badge size="xsmall" color={tableItem.status === 'Completed' ? 'positive' : tableItem.status === 'Pending' ? 'notice' : tableItem.status === 'Failed' ? 'negative' : 'primary'}>
                        {tableItem.status}
                      </Badge>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
              <TableFooter>
                <TableFooterRow>
                  <TableFooterCell>Total</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>
                    <Amount value={10} />
                  </TableFooterCell>
                </TableFooterRow>
              </TableFooter>
            </>}
        </Table>
      </ListView>
    </BaseBox>;
}`,...(Be=(qe=G.parameters)==null?void 0:qe.docs)==null?void 0:Be.source}}};var He,Pe,Ee;_.parameters={..._.parameters,docs:{...(He=_.parameters)==null?void 0:He.docs,source:{originalSource:`args => {
  const getQuickFilterValueCount = (value: string): number => {
    if (value === 'All') {
      return data.nodes.length;
    }
    return data.nodes.filter(node => node.status === value).length;
  };
  const getQuickFilterData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value || value === 'All') {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.status === value)
    };
  };
  const getMethodFilterData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.method.key === value)
    };
  };
  const getFilterRangeData = (data: TableData<Item>, value?: DatesRangeValue): TableData<Item> => {
    if (!value?.[0]) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => {
        if (!value?.[0] || !value?.[1]) return false;
        return node.date >= value[0] && node.date <= value[1];
      })
    };
  };
  const [selectedQuickFilter, setSelectedQuickFilter] = useState<string>('Completed');
  const [methodFilter, setMethodFilter] = useState<string | undefined>('paypal');
  const [filterDateRange, setFilterDateRange] = useState<DatesRangeValue | undefined>(undefined);
  const [listViewTableData, setListViewTableData] = useState(() => {
    const filteredQuickFilterData = getQuickFilterData(data, selectedQuickFilter);
    const methodFilterData = getMethodFilterData(filteredQuickFilterData, methodFilter);
    return methodFilterData;
  });
  return <BaseBox height="100%">
      <ListView>
        <ListViewFilters selectedFiltersCount={(methodFilter ? 1 : 0) + (Array.isArray(filterDateRange) && filterDateRange[0] ? 1 : 0) + (selectedQuickFilter !== 'All' ? 1 : 0)} quickFilters={<QuickFilterGroup selectionType="single" onChange={({
        values
      }) => {
        const value = values[0];
        const quickFilterData = getQuickFilterData(data, value);
        const methodFilterData = getMethodFilterData(quickFilterData, methodFilter);
        const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
        setListViewTableData(dateRangeFilterData);
        setSelectedQuickFilter(value);
      }} defaultValue="All" value={selectedQuickFilter}>
              {quickFilters.map((status, index) => <QuickFilter title={status} value={status} trailing={<Counter value={getQuickFilterValueCount(status)} color="neutral" />} key={\`\${index}-\${status}\`} />)}
            </QuickFilterGroup>}>
          <FilterChipGroup onClearButtonClick={() => {
          const quickFilterData = getQuickFilterData(data, 'All');
          const methodFilterData = getMethodFilterData(quickFilterData, undefined);
          const dateRangeFilterData = getFilterRangeData(methodFilterData, undefined);
          setListViewTableData(dateRangeFilterData);
          setMethodFilter(undefined);
          setFilterDateRange(undefined);
          setSelectedQuickFilter('All');
        }}>
            <Dropdown selectionType="single">
              <FilterChipSelectInput label="Method" value={methodFilter} onChange={({
              values
            }) => {
              const value = values[0];
              const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
              const methodFilterData = getMethodFilterData(quickFilterData, value);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setMethodFilter(value);
            }} onClearButtonClick={() => {
              const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
              const dateRangeFilterData = getFilterRangeData(quickFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setMethodFilter(undefined);
            }} />
              <DropdownOverlay>
                <ActionList>
                  {MethodFilterValues.map((method, index) => <ActionListItem key={index} title={method.title} value={method.key} />)}
                </ActionList>
              </DropdownOverlay>
            </Dropdown>
            <FilterChipDatePicker label="Date Range" selectionType="range" value={filterDateRange} onChange={value => {
            const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
            const methodFilterData = getMethodFilterData(quickFilterData, methodFilter);
            const dateRangeFilterData = getFilterRangeData(methodFilterData, Array.isArray(value) ? value : undefined);
            setListViewTableData(dateRangeFilterData);
            setFilterDateRange(value as DatesRangeValue);
          }} />
            <Dropdown selectionType="single">
              <FilterChipSelectInput label="Status" value={selectedQuickFilter !== 'All' ? selectedQuickFilter : undefined} onChange={({
              values
            }) => {
              const value = values[0];
              const quickFilterData = getQuickFilterData(data, value);
              const methodFilterData = getMethodFilterData(quickFilterData, methodFilter);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setSelectedQuickFilter(value ? value : 'All');
            }} onClearButtonClick={() => {
              const quickFilterData = getQuickFilterData(data, 'All');
              const methodFilterData = getMethodFilterData(quickFilterData, methodFilter);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setSelectedQuickFilter('All');
            }} />
              <DropdownOverlay>
                <ActionList>
                  {filterChipQuickFilters.map((method, index) => <ActionListItem key={index} title={method} value={method} isSelected={selectedQuickFilter === method} />)}
                </ActionList>
              </DropdownOverlay>
            </Dropdown>
          </FilterChipGroup>
        </ListViewFilters>
        <Table {...args} data={listViewTableData} defaultSelectedIds={['1', '3']} onSelectionChange={console.log} isFirstColumnSticky selectionType="single" rowDensity="normal">
          {tableData => <>
              <TableHeader>
                <TableHeaderRow>
                  <TableHeaderCell headerKey="PAYMENT_ID">ID</TableHeaderCell>
                  <TableHeaderCell headerKey="AMOUNT">Amount</TableHeaderCell>
                  <TableHeaderCell headerKey="ACCOUNT">Account</TableHeaderCell>
                  <TableHeaderCell headerKey="DATE">Date</TableHeaderCell>
                  <TableHeaderCell headerKey="METHOD">Method</TableHeaderCell>
                  <TableHeaderCell headerKey="STATUS">Status</TableHeaderCell>
                </TableHeaderRow>
              </TableHeader>
              <TableBody>
                {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem} hoverActions={<>
                        <Button variant="tertiary" size="xsmall">
                          View Details
                        </Button>
                        <IconButton icon={CheckIcon} isHighlighted accessibilityLabel="Approve" onClick={() => {
                console.log('Approved', tableItem.id);
              }} />
                        <IconButton icon={CloseIcon} isHighlighted accessibilityLabel="Reject" onClick={() => {
                console.log('Rejected', tableItem.id);
              }} />
                      </>}>
                    <TableCell>
                      <Code size="small">{tableItem.paymentId}</Code>
                    </TableCell>
                    <TableEditableCell accessibilityLabel="Amount" placeholder="Enter text" successText="Amount is valid" />
                    <TableCell>
                      <Link size="small" color="neutral" target="_blank" href="/">
                        {tableItem.account}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {tableItem.date?.toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                })}
                    </TableCell>
                    <TableCell>{tableItem.method.title}</TableCell>
                    <TableCell>
                      <Badge size="xsmall" color={tableItem.status === 'Completed' ? 'positive' : tableItem.status === 'Pending' ? 'notice' : tableItem.status === 'Failed' ? 'negative' : 'primary'}>
                        {tableItem.status}
                      </Badge>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
              <TableFooter>
                <TableFooterRow>
                  <TableFooterCell>Total</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>
                    <Amount value={10} />
                  </TableFooterCell>
                </TableFooterRow>
              </TableFooter>
            </>}
        </Table>
      </ListView>
    </BaseBox>;
}`,...(Ee=(Pe=_.parameters)==null?void 0:Pe.docs)==null?void 0:Ee.source}}};var ze,Ke,Oe;$.parameters={...$.parameters,docs:{...(ze=$.parameters)==null?void 0:ze.docs,source:{originalSource:`args => {
  const [listViewTableData, setListViewTableData] = useState(data);
  const [selectedQuickFilter, setSelectedQuickFilter] = useState<string>('All');
  const [searchValue, setSearchValue] = useState<string | undefined>('');
  const [methodFilter, setMethodFilter] = useState<string | undefined>('');
  const [filterDateRange, setFilterDateRange] = useState<DatesRangeValue | undefined>(undefined);
  const getQuickFilterValueCount = (value: string): number => {
    if (value === 'All') {
      return data.nodes.length;
    }
    return data.nodes.filter(node => node.status === value).length;
  };
  const getQuickFilterData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value || value === 'All') {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.status === value)
    };
  };
  const getSearchedData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.paymentId.includes(value))
    };
  };
  const getMethodFilterData = (data: TableData<Item>, value?: string): TableData<Item> => {
    if (!value) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => node.method.key === value)
    };
  };
  const getFilterRangeData = (data: TableData<Item>, value?: DatesRangeValue): TableData<Item> => {
    if (!value?.[0]) {
      return {
        nodes: data.nodes
      };
    }
    return {
      nodes: data.nodes.filter(node => {
        if (!value?.[0] || !value?.[1]) return false;
        return node.date >= value[0] && node.date <= value[1];
      })
    };
  };
  const handleSearchChange = (value?: string): void => {
    const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
    const searchValueData = getSearchedData(quickFilterData, value);
    const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
    const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
    setListViewTableData(dateRangeFilterData);
    setSearchValue(value);
  };
  const handleSearchClear = (): void => {
    const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
    const methodFilterData = getMethodFilterData(quickFilterData, methodFilter);
    const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
    setListViewTableData(dateRangeFilterData);
    setSearchValue('');
  };
  const isMobile = useIsMobile();
  const searchTrailing = <Dropdown>
      <InputDropdownButton value={selectedQuickFilter} onChange={({
      value
    }) => {
      const quickFilterData = getQuickFilterData(data, value);
      const searchValueData = getSearchedData(quickFilterData, searchValue);
      const dateRangeFilterData = getFilterRangeData(searchValueData, filterDateRange);
      setListViewTableData(dateRangeFilterData);
      setSelectedQuickFilter(value);
    }} />
      <DropdownOverlay>
        <ActionList>
          {quickFilters.map((status, index) => <ActionListItem key={index} title={status} value={status} isSelected={selectedQuickFilter === status} />)}
        </ActionList>
      </DropdownOverlay>
    </Dropdown>;
  return <BaseBox height="100%">
      {isMobile && <SearchInput label="" value={searchValue} placeholder="Search for Payment Id" onChange={({
      value
    }) => handleSearchChange(value)} onClearButtonClick={handleSearchClear} trailing={searchTrailing} />}
      <ListView>
        <ListViewFilters quickFilters={<QuickFilterGroup selectionType="single" onChange={({
        values
      }) => {
        const value = values[0];
        const quickFilterData = getQuickFilterData(data, value);
        const searchValueData = getSearchedData(quickFilterData, searchValue);
        const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
        const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
        setListViewTableData(dateRangeFilterData);
        setSelectedQuickFilter(value);
      }} defaultValue="All" value={selectedQuickFilter}>
              {quickFilters.map((status, index) => <QuickFilter title={status} value={status} trailing={<Counter value={getQuickFilterValueCount(status)} color="neutral" />} key={\`\${index}-\${status}\`} />)}
            </QuickFilterGroup>} selectedFiltersCount={(methodFilter ? 1 : 0) + (Array.isArray(filterDateRange) && filterDateRange[0] ? 1 : 0) + (selectedQuickFilter !== 'All' ? 1 : 0)} actions={!isMobile && <Box width="280px">
                <SearchInput label="" value={searchValue} placeholder="Search for Payment Id" onChange={({
          value
        }) => handleSearchChange(value)} onClearButtonClick={handleSearchClear} trailing={searchTrailing} />
              </Box>}>
          <FilterChipGroup onClearButtonClick={() => {
          const quickFilterData = getQuickFilterData(data, 'All');
          const searchValueData = getSearchedData(quickFilterData, searchValue);
          const methodFilterData = getMethodFilterData(searchValueData, '');
          const dateRangeFilterData = getFilterRangeData(methodFilterData, undefined);
          setListViewTableData(dateRangeFilterData);
          setMethodFilter(undefined);
          setFilterDateRange(undefined);
          setSelectedQuickFilter('All');
        }}>
            <Dropdown selectionType="single">
              <FilterChipSelectInput label="Method" onChange={({
              values
            }) => {
              const value = values[0];
              const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const methodFilterData = getMethodFilterData(searchValueData, value);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setMethodFilter(value);
            }} />
              <DropdownOverlay>
                <ActionList>
                  {MethodFilterValues.map((method, index) => <ActionListItem key={index} title={method.title} value={method.key} />)}
                </ActionList>
              </DropdownOverlay>
            </Dropdown>
            <FilterChipDatePicker label="Date Range" selectionType="range" onChange={value => {
            const quickFilterData = getQuickFilterData(data, selectedQuickFilter);
            const searchValueData = getSearchedData(quickFilterData, searchValue);
            const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
            const dateRangeFilterData = getFilterRangeData(methodFilterData, Array.isArray(value) ? value : undefined);
            setListViewTableData(dateRangeFilterData);
            setFilterDateRange(value as DatesRangeValue);
          }} />
            <Dropdown selectionType="single">
              <FilterChipSelectInput label="Status" value={selectedQuickFilter !== 'All' ? selectedQuickFilter : undefined} onChange={({
              values
            }) => {
              const value = values[0];
              const quickFilterData = getQuickFilterData(data, value);
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setSelectedQuickFilter(value ? value : 'All');
            }} onClearButtonClick={() => {
              const quickFilterData = getQuickFilterData(data, 'All');
              const searchValueData = getSearchedData(quickFilterData, searchValue);
              const methodFilterData = getMethodFilterData(searchValueData, methodFilter);
              const dateRangeFilterData = getFilterRangeData(methodFilterData, filterDateRange);
              setListViewTableData(dateRangeFilterData);
              setSelectedQuickFilter('All');
            }} />
              <DropdownOverlay>
                <ActionList>
                  {filterChipQuickFilters.map((method, index) => <ActionListItem key={index} title={method} value={method} isSelected={selectedQuickFilter === method} />)}
                </ActionList>
              </DropdownOverlay>
            </Dropdown>
          </FilterChipGroup>
        </ListViewFilters>
        <Table {...args} data={listViewTableData} defaultSelectedIds={['1', '3']} onSelectionChange={console.log} isFirstColumnSticky selectionType="single" rowDensity="normal">
          {tableData => <>
              <TableHeader>
                <TableHeaderRow>
                  <TableHeaderCell headerKey="PAYMENT_ID">ID</TableHeaderCell>
                  <TableHeaderCell headerKey="AMOUNT">Amount</TableHeaderCell>
                  <TableHeaderCell headerKey="ACCOUNT">Account</TableHeaderCell>
                  <TableHeaderCell headerKey="DATE">Date</TableHeaderCell>
                  <TableHeaderCell headerKey="METHOD">Method</TableHeaderCell>
                  <TableHeaderCell headerKey="STATUS">Status</TableHeaderCell>
                </TableHeaderRow>
              </TableHeader>
              <TableBody>
                {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem} hoverActions={<>
                        <Button variant="tertiary" size="xsmall">
                          View Details
                        </Button>
                        <IconButton icon={CheckIcon} isHighlighted accessibilityLabel="Approve" onClick={() => {
                console.log('Approved', tableItem.id);
              }} />
                        <IconButton icon={CloseIcon} isHighlighted accessibilityLabel="Reject" onClick={() => {
                console.log('Rejected', tableItem.id);
              }} />
                      </>} onClick={() => {
              console.log('where');
            }}>
                    <TableCell>
                      <Code size="small">{tableItem.paymentId}</Code>
                    </TableCell>
                    <TableEditableCell accessibilityLabel="Amount" placeholder="Enter text" successText="Amount is valid" />
                    <TableCell>
                      <Link size="small" color="neutral" target="_blank" href="/">
                        {tableItem.account}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {tableItem.date?.toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                })}
                    </TableCell>
                    <TableCell>{tableItem.method.title}</TableCell>
                    <TableCell>
                      <Badge size="xsmall" color={tableItem.status === 'Completed' ? 'positive' : tableItem.status === 'Pending' ? 'notice' : tableItem.status === 'Failed' ? 'negative' : 'primary'}>
                        {tableItem.status}
                      </Badge>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
              <TableFooter>
                <TableFooterRow>
                  <TableFooterCell>Total</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>-</TableFooterCell>
                  <TableFooterCell>
                    <Amount value={10} />
                  </TableFooterCell>
                </TableFooterRow>
              </TableFooter>
            </>}
        </Table>
      </ListView>
    </BaseBox>;
}`,...(Oe=(Ke=$.parameters)==null?void 0:Ke.docs)==null?void 0:Oe.source}}};const gt=["Default","Controlled","WithBulkAction","MultiSelectQuickFilterExample","WithoutSearchExampleStory","WithDropDownSearchExampleStory"],kt=Object.freeze(Object.defineProperty({__proto__:null,Controlled:U,Default:W,MultiSelectQuickFilterExample:G,WithBulkAction:me,WithDropDownSearchExampleStory:$,WithoutSearchExampleStory:_,__namedExportsOrder:gt,default:ot},Symbol.toStringTag,{value:"Module"}));export{kt as l};
