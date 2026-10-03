import{k2 as l,j as e,B as T,iV as h,iW as C,iX as u,iY as o,iZ as p,i_ as x,i$ as t,C as g,a8 as j,F,k0 as f,k1 as y}from"./iframe-C1qQ09LF.js";import{S as H}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const P={title:"Components/Table/API",component:l,args:{},argTypes:{children:{control:{disable:!0}}},parameters:{docs:{page:()=>e.jsx(H,{componentDescription:"You can find a complete list of TableFooterCell props here",componentName:"TableFooterCell",apiDecisionComponentName:"Table"})}}},M=[...Array.from({length:5},(d,n)=>({id:(n+1).toString(),paymentId:`rzp${Math.floor(Math.random()*1e6)}`,amount:Number((Math.random()*1e4).toFixed(2)),status:["Completed","Pending","Failed"][Math.floor(Math.random()*3)],date:new Date(2021,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1),type:["Payout","Refund"][Math.floor(Math.random()*2)],method:["Bank Transfer","Credit Card","PayPal"][Math.floor(Math.random()*3)],bank:["HDFC","ICICI","SBI"][Math.floor(Math.random()*3)],account:Math.floor(Math.random()*1e9).toString(),name:["John Doe","Jane Doe","Bob Smith","Alice Smith","John Smith","Jane Smith","Bob Doe","Alice Doe"][Math.floor(Math.random()*8)]}))],D={nodes:M},S=({...d})=>e.jsx(T,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",minHeight:"400px",children:e.jsx(h,{data:D,children:n=>e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsxs(u,{children:[e.jsx(o,{children:"ID"}),e.jsx(o,{children:"Amount"}),e.jsx(o,{children:"Account"}),e.jsx(o,{children:"Date"}),e.jsx(o,{children:"Method"}),e.jsx(o,{children:"Status"})]})}),e.jsx(p,{children:n.map((a,c)=>{var s;return e.jsxs(x,{item:a,children:[e.jsx(t,{children:e.jsx(g,{size:"medium",children:a.paymentId})}),e.jsx(t,{children:e.jsx(j,{value:a.amount})}),e.jsx(t,{children:a.account}),e.jsx(t,{children:(s=a.date)==null?void 0:s.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(t,{children:a.method}),e.jsx(t,{children:e.jsx(F,{size:"medium",color:a.status==="Completed"?"positive":a.status==="Pending"?"notice":a.status==="Failed"?"negative":"default",children:a.status})})]},c)})}),e.jsx(f,{children:e.jsxs(y,{children:[e.jsx(l,{...d,children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"})]})})]})})}),r=S.bind({});r.storyName="TableFooterCell";var i,b,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`({
  ...args
}) => {
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto" minHeight="400px">
      <TableComponent data={data}>
        {tableData => <>
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
                <TableFooterCell {...args}>-</TableFooterCell>
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
}`,...(m=(b=r.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const v=["TableFooterCellStory"];export{r as TableFooterCellStory,v as __namedExportsOrder,P as default};
