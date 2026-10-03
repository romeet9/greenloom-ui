import{iV as r,j as e,B as c,iW as m,iX as u,iY as l,iZ as b,i_ as T,i$ as t,C as g,a8 as h,F as p,hX as x,g0 as z,c3 as R,k3 as k,jG as A,jH as f,n as j}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const M={title:"Components/Table/API",component:r,args:{showStripedRows:!0,selectionType:"multiple",rowDensity:"normal"},argTypes:{showStripedRows:{control:"boolean",description:"Show striped/zebra rows"},selectionType:{control:"select",options:["none","single","multiple"]},rowDensity:{control:"select",options:["compact","normal","comfortable"]}}},N=[{id:"1",paymentId:"rzp001",amount:1e3,status:"Completed",date:new Date(2024,0,15),method:"Bank Transfer",account:"1234567890"},{id:"2",paymentId:"rzp002",amount:2500,status:"Pending",date:new Date(2024,0,16),method:"Credit Card",account:"0987654321"},{id:"3",paymentId:"rzp003",amount:500,status:"Failed",date:new Date(2024,0,17),method:"PayPal",account:"1122334455"},{id:"4",paymentId:"rzp004",amount:3e3,status:"Completed",date:new Date(2024,0,18),method:"Bank Transfer",account:"5566778899"},{id:"5",paymentId:"rzp005",amount:750,status:"Pending",date:new Date(2024,0,19),method:"Credit Card",account:"9988776655"},{id:"6",paymentId:"rzp006",amount:1200,status:"Completed",date:new Date(2024,0,20),method:"PayPal",account:"4433221100"},{id:"7",paymentId:"rzp007",amount:800,status:"Failed",date:new Date(2024,0,21),method:"Bank Transfer",account:"1357924680"},{id:"8",paymentId:"rzp008",amount:1500,status:"Completed",date:new Date(2024,0,22),method:"Credit Card",account:"2468013579"}],C={nodes:N},d=()=>e.jsx(c,{backgroundColor:"surface.background.gray.moderate",padding:"spacing.8",overflow:"auto",minHeight:"400px",children:e.jsx(r,{data:C,showStripedRows:!0,selectionType:"multiple",onSelectionChange:({selectedIds:o})=>console.log("Selected:",o),toolbar:e.jsx(A,{title:"Showing 1-8 Items",children:e.jsxs(f,{children:[e.jsx(j,{variant:"secondary",marginRight:"spacing.3",children:"Export"}),e.jsx(j,{children:"Payout"})]})}),pagination:e.jsx(k,{onPageChange:console.log,defaultPageSize:10,onPageSizeChange:console.log,showPageSizePicker:!0,showPageNumberSelector:!0}),children:o=>e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsxs(u,{children:[e.jsx(l,{children:"Payment ID"}),e.jsx(l,{children:"Amount"}),e.jsx(l,{children:"Account"}),e.jsx(l,{children:"Date"}),e.jsx(l,{children:"Method"}),e.jsx(l,{children:"Status"})]})}),e.jsx(b,{children:o.map(a=>{var n;return e.jsxs(T,{item:a,children:[e.jsx(t,{children:e.jsx(g,{size:"medium",children:a.paymentId})}),e.jsx(t,{children:e.jsx(h,{value:a.amount})}),e.jsx(t,{children:a.account}),e.jsx(t,{children:(n=a.date)==null?void 0:n.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(t,{children:a.method}),e.jsx(t,{children:e.jsx(p,{size:"medium",color:a.status==="Completed"?"positive":a.status==="Pending"?"notice":a.status==="Failed"?"negative":"neutral",children:a.status})})]},a.id)})})]})})});d.storyName="TableStripedSelection";const i=()=>e.jsx(c,{backgroundColor:"surface.background.gray.moderate",padding:"spacing.8",overflow:"auto",minHeight:"400px",children:e.jsx(r,{data:C,showStripedRows:!0,selectionType:"multiple",onSelectionChange:({selectedIds:o})=>console.log("Selected:",o),children:o=>e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsxs(u,{children:[e.jsx(l,{children:"Payment ID"}),e.jsx(l,{children:"Amount"}),e.jsx(l,{children:"Account"}),e.jsx(l,{children:"Date"}),e.jsx(l,{children:"Method"}),e.jsx(l,{children:"Status"})]})}),e.jsx(b,{children:o.map(a=>{var n;return e.jsxs(T,{item:a,children:[e.jsx(t,{children:e.jsx(g,{size:"medium",children:a.paymentId})}),e.jsx(t,{children:e.jsx(h,{value:a.amount})}),e.jsx(t,{children:a.account}),e.jsx(t,{children:(n=a.date)==null?void 0:n.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(t,{children:a.method}),e.jsx(t,{children:e.jsx(p,{size:"medium",color:a.status==="Completed"?"positive":a.status==="Pending"?"notice":a.status==="Failed"?"negative":"neutral",children:a.status})})]},a.id)})})]})})});i.storyName="TableStripedSelectionNoToolbarNoPagination";const s=()=>e.jsx(c,{backgroundColor:"surface.background.gray.moderate",padding:"spacing.8",overflow:"auto",minHeight:"400px",children:e.jsx(r,{data:C,showStripedRows:!0,selectionType:"multiple",onSelectionChange:({selectedIds:o})=>console.log("Selected:",o),children:o=>e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsxs(u,{children:[e.jsx(l,{children:"Payment ID"}),e.jsx(l,{children:"Amount"}),e.jsx(l,{children:"Account"}),e.jsx(l,{children:"Date"}),e.jsx(l,{children:"Method"}),e.jsx(l,{children:"Status"})]})}),e.jsx(b,{children:o.map(a=>{var n;return e.jsxs(T,{item:a,hoverActions:e.jsxs(e.Fragment,{children:[e.jsx(x,{accessibilityLabel:"Copy",isHighlighted:!0,icon:z,onClick:()=>console.log("copy",a)}),e.jsx(x,{accessibilityLabel:"Delete",isHighlighted:!0,icon:R,onClick:()=>console.log("delete",a)})]}),children:[e.jsx(t,{children:e.jsx(g,{size:"medium",children:a.paymentId})}),e.jsx(t,{children:e.jsx(h,{value:a.amount})}),e.jsx(t,{children:a.account}),e.jsx(t,{children:(n=a.date)==null?void 0:n.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(t,{children:a.method}),e.jsx(t,{children:e.jsx(p,{size:"medium",color:a.status==="Completed"?"positive":a.status==="Pending"?"notice":a.status==="Failed"?"negative":"neutral",children:a.status})})]},a.id)})})]})})});s.storyName="TableStripedHoverWithSelection";var y,H,S;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Box backgroundColor="surface.background.gray.moderate" padding="spacing.8" overflow="auto" minHeight="400px">
    <TableComponent data={data} showStripedRows selectionType="multiple" onSelectionChange={({
    selectedIds
  }) => console.log('Selected:', selectedIds)} toolbar={<TableToolbar title="Showing 1-8 Items">
          <TableToolbarActions>
            <Button variant="secondary" marginRight="spacing.3">
              Export
            </Button>
            <Button>Payout</Button>
          </TableToolbarActions>
        </TableToolbar>} pagination={<TablePagination onPageChange={console.log} defaultPageSize={10} onPageSizeChange={console.log} showPageSizePicker showPageNumberSelector />}>
      {tableData => <>
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderCell>Payment ID</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Account</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Method</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
            {tableData.map(tableItem => <TableRow key={tableItem.id} item={tableItem}>
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
                  <Badge size="medium" color={tableItem.status === 'Completed' ? 'positive' : tableItem.status === 'Pending' ? 'notice' : tableItem.status === 'Failed' ? 'negative' : 'neutral'}>
                    {tableItem.status}
                  </Badge>
                </TableCell>
              </TableRow>)}
          </TableBody>
        </>}
    </TableComponent>
  </Box>`,...(S=(H=d.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var w,I,P;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Box backgroundColor="surface.background.gray.moderate" padding="spacing.8" overflow="auto" minHeight="400px">
    <TableComponent data={data} showStripedRows selectionType="multiple" onSelectionChange={({
    selectedIds
  }) => console.log('Selected:', selectedIds)}>
      {tableData => <>
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderCell>Payment ID</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Account</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Method</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
            {tableData.map(tableItem => <TableRow key={tableItem.id} item={tableItem}>
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
                  <Badge size="medium" color={tableItem.status === 'Completed' ? 'positive' : tableItem.status === 'Pending' ? 'notice' : tableItem.status === 'Failed' ? 'negative' : 'neutral'}>
                    {tableItem.status}
                  </Badge>
                </TableCell>
              </TableRow>)}
          </TableBody>
        </>}
    </TableComponent>
  </Box>`,...(P=(I=i.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var D,B,v;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`() => <Box backgroundColor="surface.background.gray.moderate" padding="spacing.8" overflow="auto" minHeight="400px">
    <TableComponent data={data} showStripedRows selectionType="multiple" onSelectionChange={({
    selectedIds
  }) => console.log('Selected:', selectedIds)}>
      {tableData => <>
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderCell>Payment ID</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Account</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Method</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
            {tableData.map(tableItem => <TableRow key={tableItem.id} item={tableItem} hoverActions={<>
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
                  <Badge size="medium" color={tableItem.status === 'Completed' ? 'positive' : tableItem.status === 'Pending' ? 'notice' : tableItem.status === 'Failed' ? 'negative' : 'neutral'}>
                    {tableItem.status}
                  </Badge>
                </TableCell>
              </TableRow>)}
          </TableBody>
        </>}
    </TableComponent>
  </Box>`,...(v=(B=s.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};const E=["TableStripedSelection","TableStripedSelectionNoToolbarNoPagination","TableStripedHoverNoSelection"];export{s as TableStripedHoverNoSelection,d as TableStripedSelection,i as TableStripedSelectionNoToolbarNoPagination,E as __namedExportsOrder,M as default};
