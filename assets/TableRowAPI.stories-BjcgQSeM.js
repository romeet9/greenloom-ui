import{i_ as u,j as e,B as r,iV as T,iW as C,iX as x,iY as t,iZ as y,i$ as i,C as j,a8 as D,l as s,g0 as c,c3 as d,hX as b}from"./iframe-C1qQ09LF.js";import{S as f}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const v={title:"Components/Table/API",component:u,args:{},argTypes:{children:{control:{disable:!0}},item:{control:{disable:!0}}},parameters:{docs:{page:()=>e.jsx(f,{componentDescription:"You can find a complete list of TableRow props here",componentName:"TableRow",apiDecisionComponentName:"Table"})}}},I=[...Array.from({length:5},(l,n)=>({id:(n+1).toString(),paymentId:`rzp${Math.floor(Math.random()*1e6)}`,amount:Number((Math.random()*1e4).toFixed(2)),status:["Completed","Pending","Failed"][Math.floor(Math.random()*3)],date:new Date(2021,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1),type:["Payout","Refund"][Math.floor(Math.random()*2)],method:["Bank Transfer","Credit Card","PayPal"][Math.floor(Math.random()*3)],bank:["HDFC","ICICI","SBI"][Math.floor(Math.random()*3)],account:Math.floor(Math.random()*1e9).toString(),name:["John Doe","Jane Doe","Bob Smith","Alice Smith","John Smith","Jane Smith","Bob Doe","Alice Doe"][Math.floor(Math.random()*8)]}))],k={nodes:I},H=({...l})=>e.jsx(r,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",minHeight:"400px",children:e.jsx(T,{data:k,selectionType:"multiple",children:n=>e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsxs(x,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Amount"}),e.jsx(t,{children:"Action"})]})}),e.jsx(y,{children:n.map((o,g)=>e.jsxs(u,{...l,item:o,hoverActions:e.jsxs(e.Fragment,{children:[e.jsx(b,{accessibilityLabel:"Copy",isHighlighted:!0,icon:c,onClick:()=>console.log("copy",o)}),e.jsx(b,{accessibilityLabel:"Delete",isHighlighted:!0,icon:d,onClick:()=>console.log("delete",o)})]}),children:[e.jsx(i,{children:e.jsx(j,{size:"medium",children:o.paymentId})}),e.jsx(i,{children:e.jsx(D,{value:o.amount})}),e.jsx(i,{children:e.jsxs(r,{display:"flex",gap:"spacing.3",children:[e.jsx(s,{onClick:()=>console.log("copy"),isDisabled:l.isDisabled,variant:"button",icon:c,children:"Copy"}),e.jsx(s,{onClick:()=>console.log("delete"),isDisabled:l.isDisabled,variant:"button",icon:d,children:"Delete"})]})})]},g))})]})})}),a=H.bind({});a.storyName="TableRow";var m,p,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`({
  ...args
}) => {
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto" minHeight="400px">
      <TableComponent data={data} selectionType="multiple">
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell>Action</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              {tableData.map((tableItem, index) => {
            return <TableRow key={index} {...args} item={tableItem} hoverActions={<>
                        <IconButton accessibilityLabel="Copy" isHighlighted icon={CopyIcon} onClick={() => console.log('copy', tableItem)} />
                        <IconButton accessibilityLabel="Delete" isHighlighted icon={TrashIcon} onClick={() => console.log('delete', tableItem)} />
                      </>}>
                    <TableCell>
                      <Code size="medium">{tableItem.paymentId}</Code>
                    </TableCell>
                    <TableCell>
                      <Amount value={tableItem.amount} />
                    </TableCell>

                    <TableCell>
                      <Box display="flex" gap="spacing.3">
                        <Link onClick={() => console.log('copy')} isDisabled={args.isDisabled} variant="button" icon={CopyIcon}>
                          Copy
                        </Link>
                        <Link onClick={() => console.log('delete')} isDisabled={args.isDisabled} variant="button" icon={TrashIcon}>
                          Delete
                        </Link>
                      </Box>
                    </TableCell>
                  </TableRow>;
          })}
            </TableBody>
          </>}
      </TableComponent>
    </Box>;
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const L=["TableRowStory"];export{a as TableRowStory,L as __namedExportsOrder,v as default};
