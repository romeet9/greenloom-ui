import{k5 as m,j as e,B as b,iV as T,iW as u,iX as h,iY as l,iZ as p,i_ as C,i$ as t,C as x,a8 as g,F as j,jG as y,jH as f,n as i}from"./iframe-C1qQ09LF.js";import{S as H}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const V={title:"Components/Table/API",component:m,args:{},argTypes:{children:{control:{disable:!0}}},parameters:{docs:{page:()=>e.jsx(H,{componentDescription:"You can find a complete list of TableVirtulized props here",componentName:"TableVirtulized",apiDecisionComponentName:"Table"})}}},M=[...Array.from({length:5e3},(a,r)=>({id:(r+1).toString(),paymentId:`rzp${Math.floor(Math.random()*1e6)}`,amount:Number((Math.random()*1e4).toFixed(2)),status:["Completed","Pending","Failed"][Math.floor(Math.random()*3)],date:new Date(2021,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1),type:["Payout","Refund"][Math.floor(Math.random()*2)],method:["Bank Transfer","Credit Card","PayPal"][Math.floor(Math.random()*3)],bank:["HDFC","ICICI","SBI"][Math.floor(Math.random()*3)],account:Math.floor(Math.random()*1e9).toString(),name:["John Doe","Jane Doe","Bob Smith","Alice Smith","John Smith","Jane Smith","Bob Doe","Alice Doe"][Math.floor(Math.random()*8)]}))],B={nodes:M},D=()=>e.jsx(b,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",minHeight:"700px",children:e.jsx(T,{data:B,height:"500px",rowDensity:"comfortable",selectionType:"multiple",toolbar:e.jsx(y,{children:e.jsxs(f,{children:[e.jsx(i,{variant:"secondary",marginRight:"spacing.3",children:"Export"}),e.jsx(i,{children:"Payout"})]})}),children:()=>e.jsxs(m,{children:[e.jsx(u,{children:e.jsxs(h,{children:[e.jsx(l,{children:"ID"}),e.jsx(l,{children:"Amount"}),e.jsx(l,{children:"Account"}),e.jsx(l,{children:"Date"}),e.jsx(l,{children:"Method"}),e.jsx(l,{children:"Status"})]})}),e.jsx(p,{children:(a,r)=>{var n;return e.jsxs(C,{item:a,children:[e.jsx(t,{children:e.jsx(x,{size:"medium",children:a.paymentId})}),e.jsx(t,{children:e.jsx(g,{value:a.amount})}),e.jsx(t,{children:a.account}),e.jsx(t,{children:(n=a.date)==null?void 0:n.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(t,{children:a.method}),e.jsx(t,{children:e.jsx(j,{size:"medium",color:a.status==="Completed"?"positive":a.status==="Pending"?"notice":a.status==="Failed"?"negative":"default",children:a.status})})]},r)}})]})})}),o=D.bind({});o.storyName="VirtualizedTable";var d,s,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" minHeight="700px">
      <TableComponent data={data} height="500px" rowDensity="comfortable" selectionType="multiple" toolbar={<TableToolbar>
            <TableToolbarActions>
              <Button variant="secondary" marginRight="spacing.3">
                Export
              </Button>
              <Button>Payout</Button>
            </TableToolbarActions>
          </TableToolbar>}>
        {() => <TableVirtualizedWrapper>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell>Account</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Method</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              {(tableItem: Item, index) => <TableRow key={index} item={tableItem}>
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
                </TableRow>}
            </TableBody>
          </TableVirtualizedWrapper>}
      </TableComponent>
    </Box>;
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const w=["VirtualizedTable"];export{o as VirtualizedTable,w as __namedExportsOrder,V as default};
