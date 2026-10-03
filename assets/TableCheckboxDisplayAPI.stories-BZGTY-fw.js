import{iV as m,j as e,B as h,iW as C,iX as p,iY as o,iZ as u,i_ as x,i$ as t,C as g,a8 as j,F as y,k0 as F,k1 as H,k2 as l}from"./iframe-C1qQ09LF.js";import{S as k}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const S={title:"Components/Table/API",component:m,args:{},argTypes:{children:{control:{disable:!0}}},parameters:{docs:{page:()=>e.jsx(k,{componentDescription:"Controls when row-level selection checkboxes are visible. Use checkboxDisplay='on-hover' to reduce visual weight — checkboxes appear only on hover and remain visible once a row is selected.",componentName:"Table",apiDecisionComponentName:"Table"})}}},D=[...Array.from({length:5},(s,n)=>({id:(n+1).toString(),paymentId:`rzp${Math.floor(Math.random()*1e6)}`,amount:Number((Math.random()*1e4).toFixed(2)),status:["Completed","Pending","Failed"][Math.floor(Math.random()*3)],date:new Date(2021,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1),method:["Bank Transfer","Credit Card","PayPal"][Math.floor(Math.random()*3)],account:Math.floor(Math.random()*1e9).toString()}))],f={nodes:D},v=({...s})=>e.jsx(h,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",minHeight:"400px",children:e.jsx(m,{data:f,selectionType:"multiple",checkboxDisplay:"on-hover",...s,children:n=>e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsxs(p,{children:[e.jsx(o,{children:"ID"}),e.jsx(o,{children:"Amount"}),e.jsx(o,{children:"Account"}),e.jsx(o,{children:"Date"}),e.jsx(o,{children:"Method"}),e.jsx(o,{children:"Status"})]})}),e.jsx(u,{children:n.map((a,T)=>{var i;return e.jsxs(x,{item:a,children:[e.jsx(t,{children:e.jsx(g,{size:"medium",children:a.paymentId})}),e.jsx(t,{children:e.jsx(j,{value:a.amount})}),e.jsx(t,{children:a.account}),e.jsx(t,{children:(i=a.date)==null?void 0:i.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(t,{children:a.method}),e.jsx(t,{children:e.jsx(y,{size:"medium",color:a.status==="Completed"?"positive":a.status==="Pending"?"notice":a.status==="Failed"?"negative":"default",children:a.status})})]},T)})}),e.jsx(F,{children:e.jsxs(H,{children:[e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"}),e.jsx(l,{children:"-"})]})})]})})}),r=v.bind({});r.storyName="TableCheckboxDisplay";var d,c,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`({
  ...args
}) => {
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto" minHeight="400px">
      <TableComponent data={data} selectionType="multiple" checkboxDisplay="on-hover" {...args}>
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
}`,...(b=(c=r.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const P=["TableCheckboxDisplay"];export{r as TableCheckboxDisplay,P as __namedExportsOrder,S as default};
