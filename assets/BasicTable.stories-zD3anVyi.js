import{iV as g,j as e,B as u,iW as p,iX as C,iY as r,iZ as y,i_ as x,i$ as n,C as j,j$ as A,F as S,n as d,hX as b,N as I,O as F,k0 as D,k1 as f,k2 as l,a8 as M,k3 as w,jG as H,jH as B}from"./iframe-C1qQ09LF.js";import{S as P}from"./StoryPageWrapper-CS0_5maI.js";import{g as N}from"./storybookArgTypes-DFfQV31s.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const Y={title:"Components/Table",component:g,args:{selectionType:"none",rowDensity:"normal"},tags:["autodocs"],argTypes:{...N(),data:{control:{disable:!0}},sortFunctions:{control:{disable:!0}},toolbar:{control:{disable:!0}},pagination:{control:{disable:!0}}},parameters:{docs:{page:()=>e.jsx(P,{componentDescription:"A table component helps in displaying data in a grid format, through rows and columns of cells. Table facilitates data organisation and allow users to: scan, sort, compare, and take action on large amounts of data.",componentName:"Table",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=76359-131223&t=pHgtavW20B3SIqfo-1&scaling=min-zoom&page-id=64177%3A996&mode=design"})}}},v=[...Array.from({length:100},(s,o)=>({id:(o+1).toString(),paymentId:`rzp${Math.floor(Math.random()*1e6)}`,amount:Number((Math.random()*1e4).toFixed(2)),status:["Completed","Pending","Failed"][Math.floor(Math.random()*3)],date:new Date(2021,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1),type:["Payout","Refund"][Math.floor(Math.random()*2)],method:["Bank Transfer","Credit Card","PayPal"][Math.floor(Math.random()*3)],bank:["HDFC","ICICI","SBI"][Math.floor(Math.random()*3)],account:Math.floor(Math.random()*1e9).toString(),name:["John Doe","Jane Doe","Bob Smith","Alice Smith","John Smith","Jane Smith","Bob Doe","Alice Doe"][Math.floor(Math.random()*8)]}))],k={nodes:v},R=({...s})=>e.jsx(u,{padding:"spacing.5",overflow:"auto",minHeight:"400px",children:e.jsx(g,{...s,data:k,defaultSelectedIds:["1","3"],onSelectionChange:console.log,isFirstColumnSticky:!0,selectionType:"single",toolbar:e.jsx(H,{title:"Showing 1-10 [Items]",selectedTitle:"Showing 1-10 [Items]",children:e.jsxs(B,{children:[e.jsx(d,{variant:"secondary",marginRight:"spacing.2",children:"Export"}),e.jsx(d,{children:"Refund"})]})}),sortFunctions:{ID:o=>o.sort((a,t)=>Number(a.id)-Number(t.id)),AMOUNT:o=>o.sort((a,t)=>a.amount-t.amount),PAYMENT_ID:o=>o.sort((a,t)=>a.paymentId.localeCompare(t.paymentId)),DATE:o=>o.sort((a,t)=>a.date.getTime()-t.date.getTime()),STATUS:o=>o.sort((a,t)=>a.status.localeCompare(t.status))},pagination:e.jsx(w,{onPageChange:console.log,defaultPageSize:10,onPageSizeChange:console.log,showPageSizePicker:!0,showPageNumberSelector:!0}),children:o=>e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsxs(C,{children:[e.jsx(r,{headerKey:"PAYMENT_ID",children:"ID"}),e.jsx(r,{headerKey:"AMOUNT",children:"Amount"}),e.jsx(r,{headerKey:"ACCOUNT",children:"Account"}),e.jsx(r,{headerKey:"DATE",children:"Date"}),e.jsx(r,{headerKey:"METHOD",children:"Method"}),e.jsx(r,{headerKey:"STATUS",children:"Status"})]})}),e.jsx(y,{children:o.map((a,t)=>{var c;return e.jsxs(x,{item:a,hoverActions:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"tertiary",size:"xsmall",children:"View Details"}),e.jsx(b,{icon:I,isHighlighted:!0,accessibilityLabel:"Approve",onClick:()=>{console.log("Approved",a.id)}}),e.jsx(b,{icon:F,isHighlighted:!0,accessibilityLabel:"Reject",onClick:()=>{console.log("Rejected",a.id)}})]}),onClick:()=>{console.log("where")},children:[e.jsx(n,{children:e.jsx(j,{size:"medium",children:a.paymentId})}),e.jsx(A,{accessibilityLabel:"Amount",placeholder:"Enter text",successText:"Amount is valid"}),e.jsx(n,{children:a.account}),e.jsx(n,{children:(c=a.date)==null?void 0:c.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(n,{children:a.method}),e.jsx(n,{children:e.jsx(S,{size:"medium",color:a.status==="Completed"?"positive":a.status==="Pending"?"notice":a.status==="Failed"?"negative":"primary",children:a.status})})]},t)})}),e.jsx(D,{children:e.jsxs(f,{children:[e.jsx(l,{children:"Total"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),s.selectionType==="multiple"?e.jsx(l,{children:"-"}):null,e.jsx(l,{children:e.jsx(M,{value:10})})]})})]})})}),i=R.bind({});i.storyName="Basic Table";var m,T,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`({
  ...args
}) => {
  return <Box padding="spacing.5" overflow="auto" minHeight="400px">
      <TableComponent {...args} data={data} defaultSelectedIds={['1', '3']} onSelectionChange={console.log} isFirstColumnSticky selectionType="single" toolbar={<TableToolbar title="Showing 1-10 [Items]" selectedTitle="Showing 1-10 [Items]">
            <TableToolbarActions>
              <Button variant="secondary" marginRight="spacing.2">
                Export
              </Button>
              <Button>Refund</Button>
            </TableToolbarActions>
          </TableToolbar>} sortFunctions={{
      ID: array => array.sort((a, b) => Number(a.id) - Number(b.id)),
      AMOUNT: array => array.sort((a, b) => a.amount - b.amount),
      PAYMENT_ID: array => array.sort((a, b) => a.paymentId.localeCompare(b.paymentId)),
      DATE: array => array.sort((a, b) => a.date.getTime() - b.date.getTime()),
      STATUS: array => array.sort((a, b) => a.status.localeCompare(b.status))
    }} pagination={<TablePagination onPageChange={console.log} defaultPageSize={10} onPageSizeChange={console.log} showPageSizePicker showPageNumberSelector />}>
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
                    <Code size="medium">{tableItem.paymentId}</Code>
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
                  <TableCell>{tableItem.method}</TableCell>
                  <TableCell>
                    <Badge size="medium" color={tableItem.status === 'Completed' ? 'positive' : tableItem.status === 'Pending' ? 'notice' : tableItem.status === 'Failed' ? 'negative' : 'primary'}>
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
                {args.selectionType === 'multiple' ? <TableFooterCell>-</TableFooterCell> : null}
                <TableFooterCell>
                  <Amount value={10} />
                </TableFooterCell>
              </TableFooterRow>
            </TableFooter>
          </>}
      </TableComponent>
    </Box>;
}`,...(h=(T=i.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const J=["Table"];export{i as Table,J as __namedExportsOrder,Y as default};
