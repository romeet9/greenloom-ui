import{iZ as c,j as e,B as h,iV as C,iW as u,iX as p,iY as l,i_ as x,i$ as o,C as g,a8 as j,F as y,k0 as F,k1 as f,k2 as t}from"./iframe-C1qQ09LF.js";import{S as H}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const P={title:"Components/Table/API",component:c,args:{},argTypes:{},parameters:{docs:{page:()=>e.jsx(H,{componentDescription:"You can find a complete list of TableBody props here",componentName:"TableBody",apiDecisionComponentName:"Table"})}}},M=[...Array.from({length:5},(n,d)=>({id:(d+1).toString(),paymentId:`rzp${Math.floor(Math.random()*1e6)}`,amount:Number((Math.random()*1e4).toFixed(2)),status:["Completed","Pending","Failed"][Math.floor(Math.random()*3)],date:new Date(2021,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1),type:["Payout","Refund"][Math.floor(Math.random()*2)],method:["Bank Transfer","Credit Card","PayPal"][Math.floor(Math.random()*3)],bank:["HDFC","ICICI","SBI"][Math.floor(Math.random()*3)],account:Math.floor(Math.random()*1e9).toString(),name:["John Doe","Jane Doe","Bob Smith","Alice Smith","John Smith","Jane Smith","Bob Doe","Alice Doe"][Math.floor(Math.random()*8)]}))],B={nodes:M},D=({...n})=>e.jsx(h,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",minHeight:"400px",children:e.jsx(C,{data:B,children:d=>e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsxs(p,{children:[e.jsx(l,{children:"ID"}),e.jsx(l,{children:"Amount"}),e.jsx(l,{children:"Account"}),e.jsx(l,{children:"Date"}),e.jsx(l,{children:"Method"}),e.jsx(l,{children:"Status"})]})}),e.jsx(c,{...n,children:d.map((a,T)=>{var s;return e.jsxs(x,{item:a,children:[e.jsx(o,{children:e.jsx(g,{size:"medium",children:a.paymentId})}),e.jsx(o,{children:e.jsx(j,{value:a.amount})}),e.jsx(o,{children:a.account}),e.jsx(o,{children:(s=a.date)==null?void 0:s.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(o,{children:a.method}),e.jsx(o,{children:e.jsx(y,{size:"medium",color:a.status==="Completed"?"positive":a.status==="Pending"?"notice":a.status==="Failed"?"negative":"default",children:a.status})})]},T)})}),e.jsx(F,{children:e.jsxs(f,{children:[e.jsx(t,{children:"-"}),e.jsx(t,{children:"-"}),e.jsx(t,{children:"-"}),e.jsx(t,{children:"-"}),e.jsx(t,{children:"-"}),e.jsx(t,{children:"-"})]})})]})})}),r=D.bind({});r.storyName="TableBody";var i,b,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
            <TableBody {...args}>
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
}`,...(m=(b=r.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const v=["TableBodyStory"];export{r as TableBodyStory,v as __namedExportsOrder,P as default};
