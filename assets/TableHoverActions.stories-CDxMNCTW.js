import{iX as T,j as e,B as C,iV as u,iW as p,iY as o,iZ as g,i_ as x,i$ as t,C as j,a8 as y,F as H,hX as c,g0 as F,c3 as f,k0 as I,k1 as M,k2 as l}from"./iframe-C1qQ09LF.js";import{S as D}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const N={title:"Components/Table/API",component:T,args:{},argTypes:{children:{control:{disable:!0}}},parameters:{docs:{page:()=>e.jsx(D,{componentDescription:"You can find a complete list of TableHeaderRow props here",componentName:"TableHeaderRow",apiDecisionComponentName:"Table"})}}},B=[...Array.from({length:5},(i,n)=>({id:(n+1).toString(),paymentId:`rzp${Math.floor(Math.random()*1e6)}`,amount:Number((Math.random()*1e4).toFixed(2)),status:["Completed","Pending","Failed"][Math.floor(Math.random()*3)],date:new Date(2021,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1),type:["Payout","Refund"][Math.floor(Math.random()*2)],method:["Bank Transfer","Credit Card","PayPal"][Math.floor(Math.random()*3)],bank:["HDFC","ICICI","SBI"][Math.floor(Math.random()*3)],account:Math.floor(Math.random()*1e9).toString(),name:["John Doe","Jane Doe","Bob Smith","Alice Smith","John Smith","Jane Smith","Bob Doe","Alice Doe"][Math.floor(Math.random()*8)]}))],A={nodes:B},k=({...i})=>e.jsx(C,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",minHeight:"400px",children:e.jsx(u,{data:A,selectionType:"multiple",children:n=>e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsxs(T,{...i,children:[e.jsx(o,{children:"ID"}),e.jsx(o,{children:"Amount"}),e.jsx(o,{children:"Account"}),e.jsx(o,{children:"Date"}),e.jsx(o,{children:"Method"}),e.jsx(o,{children:"Status"})]})}),e.jsx(g,{children:n.map((a,s)=>{var d;return e.jsxs(x,{item:a,isDisabled:s===3,hoverActions:e.jsxs(e.Fragment,{children:[e.jsx(c,{accessibilityLabel:"Copy",isHighlighted:!0,icon:F,onClick:()=>console.log("copy",a)}),e.jsx(c,{accessibilityLabel:"Delete",isHighlighted:!0,icon:f,onClick:()=>console.log("delete",a)})]}),children:[e.jsx(t,{children:e.jsx(j,{size:"medium",children:a.paymentId})}),e.jsx(t,{children:e.jsx(y,{value:a.amount})}),e.jsx(t,{children:a.account}),e.jsx(t,{children:(d=a.date)==null?void 0:d.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(t,{children:a.method}),e.jsx(t,{children:e.jsx(H,{size:"medium",color:a.status==="Completed"?"positive":a.status==="Pending"?"notice":a.status==="Failed"?"negative":"default",children:a.status})})]},s)})}),e.jsx(I,{children:e.jsxs(M,{children:[e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"})]})})]})})}),r=k.bind({});r.storyName="TableHoverActions";var b,m,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`({
  ...args
}) => {
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto" minHeight="400px">
      <TableComponent data={data} selectionType="multiple">
        {tableData => <>
            <TableHeader>
              <TableHeaderRow {...args}>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell>Account</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Method</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem} isDisabled={index === 3} hoverActions={<>
                      <IconButton accessibilityLabel="Copy" isHighlighted icon={CopyIcon} onClick={() => console.log('copy', tableItem)} />
                      <IconButton accessibilityLabel="Delete" isHighlighted icon={TrashIcon} onClick={() => console.log('delete', tableItem)} />
                    </>}>
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
                <TableFooterCell>-</TableFooterCell>
              </TableFooterRow>
            </TableFooter>
          </>}
      </TableComponent>
    </Box>;
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const z=["TableHoverActions"];export{r as TableHoverActions,z as __namedExportsOrder,N as default};
