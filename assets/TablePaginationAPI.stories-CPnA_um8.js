import{k3 as g,j as e,u as C,B as p,iV as y,iW as x,iX as S,iY as r,iZ as j,i_ as M,i$ as n,C as P,a8 as A,F,k0 as D,k1 as f,k2 as l,jG as N,jH as H,n as T}from"./iframe-C1qQ09LF.js";import{S as I}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const z={title:"Components/Table/API",component:g,parameters:{docs:{page:()=>e.jsx(I,{componentDescription:"You can find a complete list of TablePagination props here",componentName:"TablePagination",apiDecisionComponentName:"Table"})}}},B=[...Array.from({length:100},(i,d)=>({id:(d+1).toString(),paymentId:`rzp${Math.floor(Math.random()*1e6)}`,amount:Number((Math.random()*1e4).toFixed(2)),status:["Completed","Pending","Failed"][Math.floor(Math.random()*3)],date:new Date(2021,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1),type:["Payout","Refund"][Math.floor(Math.random()*2)],method:["Bank Transfer","Credit Card","PayPal"][Math.floor(Math.random()*3)],bank:["HDFC","ICICI","SBI"][Math.floor(Math.random()*3)],account:Math.floor(Math.random()*1e9).toString(),name:["John Doe","Jane Doe","Bob Smith","Alice Smith","John Smith","Jane Smith","Bob Doe","Alice Doe"][Math.floor(Math.random()*8)]}))],R={nodes:B},w=({...i})=>{const{platform:d}=C(),b=d==="onMobile";return e.jsx(p,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",minHeight:"400px",children:e.jsx(y,{height:"400px",data:R,onSelectionChange:({values:o})=>console.log("Selected Rows:",o),sortFunctions:{ID:o=>o.sort((a,t)=>Number(a.id)-Number(t.id)),AMOUNT:o=>o.sort((a,t)=>a.amount-t.amount),ACCOUNT:o=>o.sort((a,t)=>Number(a.account)-Number(t.account)),PAYMENT_ID:o=>o.sort((a,t)=>a.paymentId.localeCompare(t.paymentId)),DATE:o=>o.sort((a,t)=>a.date.getTime()-t.date.getTime()),METHOD:o=>o.sort((a,t)=>a.method.localeCompare(t.method)),STATUS:o=>o.sort((a,t)=>a.status.localeCompare(t.status))},onSortChange:({sortKey:o,isSortReversed:a})=>console.log("Sort Key:",o,"Sort Reversed:",a),toolbar:e.jsx(N,{children:e.jsxs(H,{children:[e.jsx(T,{variant:"secondary",marginRight:"spacing.3",isFullWidth:b,children:"Export"}),e.jsx(T,{isFullWidth:b,children:"Payout"})]})}),pagination:e.jsx(g,{onPageChange:console.log,defaultPageSize:10,onPageSizeChange:console.log,showPageSizePicker:!0,showPageNumberSelector:!0,...i}),children:o=>e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsxs(S,{children:[e.jsx(r,{headerKey:"PAYMENT_ID",children:"ID"}),e.jsx(r,{headerKey:"AMOUNT",children:"Amount"}),e.jsx(r,{headerKey:"ACCOUNT",children:"Account"}),e.jsx(r,{headerKey:"DATE",children:"Date"}),e.jsx(r,{headerKey:"METHOD",children:"Method"}),e.jsx(r,{headerKey:"STATUS",children:"Status"})]})}),e.jsx(j,{children:o.map((a,t)=>{var c;return e.jsxs(M,{item:a,children:[e.jsx(n,{children:e.jsx(P,{size:"medium",children:a.paymentId})}),e.jsx(n,{children:e.jsx(A,{value:a.amount})}),e.jsx(n,{children:a.account}),e.jsx(n,{children:(c=a.date)==null?void 0:c.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(n,{children:a.method}),e.jsx(n,{children:e.jsx(F,{size:"medium",color:a.status==="Completed"?"positive":a.status==="Pending"?"notice":a.status==="Failed"?"negative":"default",children:a.status})})]},t)})}),e.jsx(D,{children:e.jsxs(f,{children:[i.selectionType==="multiple"&&e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"})]})})]})})})},s=w.bind({});s.storyName="TablePagination";var m,h,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`({
  ...args
}) => {
  const {
    platform
  } = useTheme();
  const onMobile = platform === 'onMobile';
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto" minHeight="400px">
      <TableComponent height="400px" data={data} onSelectionChange={({
      values
    }) => console.log('Selected Rows:', values)} sortFunctions={{
      ID: array => array.sort((a, b) => Number(a.id) - Number(b.id)),
      AMOUNT: array => array.sort((a, b) => a.amount - b.amount),
      ACCOUNT: array => array.sort((a, b) => Number(a.account) - Number(b.account)),
      PAYMENT_ID: array => array.sort((a, b) => a.paymentId.localeCompare(b.paymentId)),
      DATE: array => array.sort((a, b) => a.date.getTime() - b.date.getTime()),
      METHOD: array => array.sort((a, b) => a.method.localeCompare(b.method)),
      STATUS: array => array.sort((a, b) => a.status.localeCompare(b.status))
    }} onSortChange={({
      sortKey,
      isSortReversed
    }) => console.log('Sort Key:', sortKey, 'Sort Reversed:', isSortReversed)} toolbar={<TableToolbar>
            <TableToolbarActions>
              <Button variant="secondary" marginRight="spacing.3" isFullWidth={onMobile}>
                Export
              </Button>
              <Button isFullWidth={onMobile}>Payout</Button>
            </TableToolbarActions>
          </TableToolbar>} pagination={<TablePagination onPageChange={console.log} defaultPageSize={10} onPageSizeChange={console.log} showPageSizePicker showPageNumberSelector {...args} />}>
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
              {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem}>
                  <TableCell>
                    <Code size="medium">{tableItem.paymentId}</Code>
                  </TableCell>
                  <TableCell>
                    <Amount value={tableItem.amount} />
                  </TableCell>
                  <TableCell>{tableItem.account}</TableCell>
                  <TableCell>
                    {tableItem.date?.toLocaleDateString('en-IN', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              })}
                  </TableCell>
                  <TableCell>{tableItem.method}</TableCell>
                  <TableCell>
                    <Badge size="medium" color={tableItem.status === 'Completed' ? 'positive' : tableItem.status === 'Pending' ? 'notice' : tableItem.status === 'Failed' ? 'negative' : 'default'}>
                      {tableItem.status}
                    </Badge>
                  </TableCell>
                </TableRow>)}
            </TableBody>
            <TableFooter>
              <TableFooterRow>
                {args.selectionType === 'multiple' && <TableFooterCell>-</TableFooterCell>}
                <TableFooterCell>-</TableFooterCell>
                <TableFooterCell>-</TableFooterCell>
                <TableFooterCell>-</TableFooterCell>
                <TableFooterCell>-</TableFooterCell>
                <TableFooterCell>-</TableFooterCell>
                <TableFooterCell>-</TableFooterCell>
              </TableFooterRow>
            </TableFooter>
          </>}
      </TableComponent>
    </Box>;
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const _=["TablePaginationStory"];export{s as TablePaginationStory,_ as __namedExportsOrder,z as default};
