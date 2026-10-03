import{j$ as n,j as e,B as y,iV as j,iW as g,iX as v,iY as a,iZ as S,i_ as A,i$ as c,C as D,k4 as b,b9 as w,aS as m,aq as u,ar as l,au as M,k0 as I,k1 as f,k2 as t}from"./iframe-C1qQ09LF.js";import{S as F}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const O={title:"Components/Table/API",component:n,args:{},argTypes:{children:{control:{disable:!0}},headerKey:{control:{disable:!0}},rowDensity:{options:["comfortable","normal","compact"],control:{type:"radio"},table:{category:"TableProps"}}},parameters:{docs:{page:()=>e.jsx(F,{componentDescription:"You can find a complete list of TableEditableCell props here",componentName:"TableEditableCell",apiDecisionComponentName:"Table"})}}},H=[...Array.from({length:5},(d,r)=>({id:(r+1).toString(),paymentId:`rzp${Math.floor(Math.random()*1e6)}`,amount:Number((Math.random()*1e4).toFixed(2)),status:["Completed","Pending","Failed"][Math.floor(Math.random()*3)],date:new Date(2021,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1),type:["Payout","Refund"][Math.floor(Math.random()*2)],method:["Bank Transfer","Credit Card","PayPal"][Math.floor(Math.random()*3)],bank:["HDFC","ICICI","SBI"][Math.floor(Math.random()*3)],account:Math.floor(Math.random()*1e9).toString(),name:["John Doe","Jane Doe","Bob Smith","Alice Smith","John Smith","Jane Smith","Bob Doe","Alice Doe"][Math.floor(Math.random()*8)]}))],L={nodes:H},E=({rowDensity:d,...r})=>e.jsx(y,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",minHeight:"400px",children:e.jsx(j,{showBorderedCells:!0,data:L,rowDensity:d,children:C=>e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsxs(v,{children:[e.jsx(a,{children:"ID"}),e.jsx(a,{children:"Amount"}),e.jsx(a,{children:"Account"}),e.jsx(a,{children:"Method"}),e.jsx(a,{children:"Date"}),e.jsx(a,{children:"Status"})]})}),e.jsx(S,{children:C.map((i,x)=>{var s;return e.jsxs(A,{item:i,children:[e.jsx(c,{children:e.jsx(D,{size:"medium",children:i.paymentId})}),e.jsx(n,{...r,accessibilityLabel:"Amount",defaultValue:`${i.amount}`}),e.jsx(n,{accessibilityLabel:"Amount",validationState:"error",placeholder:"Account number",errorText:"Account number is invalid"}),e.jsxs(b,{selectionType:"multiple",children:[e.jsx(w,{accessibilityLabel:"Method",validationState:r.validationState,errorText:"Invalid Method",successText:"Valid Method"}),e.jsx(m,{children:e.jsxs(u,{children:[e.jsx(l,{title:"Mumbai",value:"mumbai"}),e.jsx(l,{title:"Pune",value:"pune"}),e.jsx(l,{title:"Bangalore",value:"bangalore"})]})})]}),e.jsx(c,{children:(s=i.date)==null?void 0:s.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsxs(b,{children:[e.jsx(M,{validationState:r.validationState,accessibilityLabel:"Status",errorText:"Invalid Status",successText:"Valid Status"}),e.jsx(m,{children:e.jsxs(u,{children:[e.jsx(l,{title:"Pending",value:"pending"}),e.jsx(l,{title:"Completed",value:"completed"}),e.jsx(l,{title:"Failed",value:"failed"})]})})]})]},x)})}),e.jsx(I,{children:e.jsxs(f,{children:[e.jsx(t,{children:"-"}),e.jsx(t,{children:"-"}),e.jsx(t,{children:"-"}),e.jsx(t,{children:"-"}),e.jsx(t,{children:"-"}),e.jsx(t,{children:"-"})]})})]})})}),o=E.bind({});o.args={rowDensity:"normal"};o.storyName="TableEditableCell";var T,p,h;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`({
  rowDensity,
  ...args
}) => {
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto" minHeight="400px">
      <TableComponent showBorderedCells data={data} rowDensity={rowDensity}>
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell>Account</TableHeaderCell>
                <TableHeaderCell>Method</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem}>
                  <TableCell>
                    <Code size="medium">{tableItem.paymentId}</Code>
                  </TableCell>
                  <TableEditableCell {...args} accessibilityLabel="Amount" defaultValue={\`\${tableItem.amount}\`} />
                  <TableEditableCell accessibilityLabel="Amount" validationState="error" placeholder="Account number" errorText="Account number is invalid" />
                  <TableEditableDropdownCell selectionType="multiple">
                    <AutoComplete accessibilityLabel="Method" validationState={args.validationState} errorText="Invalid Method" successText="Valid Method" />
                    <DropdownOverlay>
                      <ActionList>
                        <ActionListItem title="Mumbai" value="mumbai" />
                        <ActionListItem title="Pune" value="pune" />
                        <ActionListItem title="Bangalore" value="bangalore" />
                      </ActionList>
                    </DropdownOverlay>
                  </TableEditableDropdownCell>
                  <TableCell>
                    {tableItem.date?.toLocaleDateString('en-IN', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              })}
                  </TableCell>
                  <TableEditableDropdownCell>
                    <SelectInput validationState={args.validationState} accessibilityLabel="Status" errorText="Invalid Status" successText="Valid Status" />
                    <DropdownOverlay>
                      <ActionList>
                        <ActionListItem title="Pending" value="pending" />
                        <ActionListItem title="Completed" value="completed" />
                        <ActionListItem title="Failed" value="failed" />
                      </ActionList>
                    </DropdownOverlay>
                  </TableEditableDropdownCell>
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
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const _=["TableEditableCellStory"];export{o as TableEditableCellStory,_ as __namedExportsOrder,O as default};
