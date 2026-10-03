import{iV as d,j as e,iW as c,iX as b,iY as t,iZ as T,i_ as u,i$ as n,ad as R,u as I,C,a8 as h,F as H,jG as f,jH as B,n as p,B as g,T as _,H as V,an as Pe,ao as Y,k0 as Me,k1 as ze,k2 as D,y as $e,hX as Ne,ak as Ue,l as G,g0 as Ke,c3 as Oe,j$ as Z,k4 as _e,b9 as Ye,aS as Ze,aq as Ge,ar as E,k3 as Ve}from"./iframe-C1qQ09LF.js";import{f as j,g as y,c as m}from"./exampleData-CbFas6Xk.js";import"./preload-helper-Dp1pzeXC.js";const ba={title:"Components/Table/Examples",component:d,parameters:{viewMode:"story",options:{showPanel:!1},previewTabs:{"storybook/docs/panel":{hidden:!0}},chromatic:{disableSnapshot:!0}}},x=({title:s,description:a,children:l})=>e.jsxs(g,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",minHeight:"400px",children:[e.jsxs(g,{paddingBottom:"spacing.4",children:[e.jsx(V,{children:s}),a?e.jsx(_,{children:a}):null]}),l]}),Xe=m(5),v=()=>e.jsx(x,{title:"Basic Table",children:e.jsx(d,{data:Xe,children:s=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(b,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Amount"}),e.jsx(t,{children:"Date"}),e.jsx(t,{children:"Method"})]})}),e.jsx(T,{children:s.map((a,l)=>e.jsxs(u,{item:a,children:[e.jsx(n,{children:a.paymentId}),e.jsx(n,{children:`₹${a.amount.toString()}`}),e.jsx(n,{children:j(a.date)}),e.jsx(n,{children:a.method})]},l))})]})})}),qe=m(5),F=()=>{const s=[{title:"ID",tooltip:"Payment ID of the transaction"},{title:"Amount",tooltip:"Amount transacted"},{title:"Date",tooltip:"Creation date of the transaction"},{title:"Status",tooltip:"Current status of the transaction"}];return e.jsx(x,{title:"Table with Custom Cell Components",children:e.jsx(d,{data:qe,children:a=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx(b,{children:s.map(l=>e.jsx(t,{children:e.jsxs(g,{display:"flex",flexDirection:"row",flex:1,justifyContent:"space-between",alignItems:"center",children:[e.jsx(_,{weight:"semibold",children:l.title}),e.jsx($e,{content:l.tooltip,children:e.jsx(Ne,{onClick:()=>console.log("info clicked"),accessibilityLabel:"info",icon:Ue})})]})},l.title))})}),e.jsx(T,{children:a.map((l,r)=>e.jsxs(u,{item:l,children:[e.jsx(n,{children:e.jsx(C,{size:"medium",children:l.paymentId})}),e.jsx(n,{children:e.jsx(h,{value:l.amount})}),e.jsx(n,{children:j(l.date)}),e.jsx(n,{children:e.jsx(H,{size:"medium",color:y(l.status),children:l.status})})]},r))})]})})})},Je=m(5),k=()=>e.jsx(x,{title:"Sortable Table",children:e.jsx(d,{data:Je,sortFunctions:{PAYMENT_ID:s=>s.sort((a,l)=>a.paymentId.localeCompare(l.paymentId)),AMOUNT:s=>s.sort((a,l)=>a.amount-l.amount),DATE:s=>s.sort((a,l)=>a.date.getTime()-l.date.getTime()),STATUS:s=>s.sort((a,l)=>a.status.localeCompare(l.status))},children:s=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(b,{children:[e.jsx(t,{headerKey:"PAYMENT_ID",children:"ID"}),e.jsx(t,{headerKey:"AMOUNT",children:"Amount"}),e.jsx(t,{headerKey:"DATE",children:"Date"}),e.jsx(t,{headerKey:"STATUS",children:"Status"})]})}),e.jsx(T,{children:s.map((a,l)=>e.jsxs(u,{item:a,children:[e.jsx(n,{children:e.jsx(C,{size:"medium",children:a.paymentId})}),e.jsx(n,{children:e.jsx(h,{value:a.amount})}),e.jsx(n,{children:j(a.date)}),e.jsx(n,{children:e.jsx(H,{size:"medium",color:y(a.status),children:a.status})})]},l))})]})})}),X=m(20),W=()=>{const s=X.nodes.reduce((a,l)=>a+l.amount,0);return e.jsx(x,{title:"Table with Sticky Header & Sticky Footer",children:e.jsx(d,{data:X,isHeaderSticky:!0,isFooterSticky:!0,height:"500px",children:a=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(b,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Date"}),e.jsx(t,{children:"Status"}),e.jsx(t,{children:"Amount"})]})}),e.jsx(T,{children:a.map((l,r)=>e.jsxs(u,{item:l,children:[e.jsx(n,{children:e.jsx(C,{size:"medium",children:l.paymentId})}),e.jsx(n,{children:j(l.date)}),e.jsx(n,{children:e.jsx(H,{size:"medium",color:y(l.status),children:l.status})}),e.jsx(n,{children:e.jsx(h,{value:l.amount})})]},r))}),e.jsx(Me,{children:e.jsxs(ze,{children:[e.jsx(D,{children:"Total"}),e.jsx(D,{children:"-"}),e.jsx(D,{children:"-"}),e.jsx(D,{children:e.jsx(h,{value:s})})]})})]})})})},Qe=m(20),M=()=>e.jsx(x,{title:"Table with Sticky First Column",children:e.jsx(d,{data:Qe,isFirstColumnSticky:!0,height:"500px",children:s=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(b,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Name"}),e.jsx(t,{children:"Account"}),e.jsx(t,{children:"Method"}),e.jsx(t,{children:"Date"}),e.jsx(t,{children:"Status"}),e.jsx(t,{children:"Amount"})]})}),e.jsx(T,{children:s.map((a,l)=>e.jsxs(u,{item:a,children:[e.jsx(n,{children:e.jsx(C,{size:"medium",children:a.paymentId})}),e.jsx(n,{children:a.name}),e.jsx(n,{children:a.account}),e.jsx(n,{children:a.method}),e.jsx(n,{children:j(a.date)}),e.jsx(n,{children:e.jsx(H,{size:"medium",color:y(a.status),children:a.status})}),e.jsx(n,{children:e.jsx(h,{value:a.amount})})]},l))})]})})}),ea=m(5),z=()=>{const[s,a]=R.useState(void 0);return e.jsxs(x,{title:"Single Selectable Table",children:[e.jsx(d,{data:ea,selectionType:"single",onSelectionChange:({values:l})=>a(l[0]),children:l=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(b,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Amount"}),e.jsx(t,{children:"Date"}),e.jsx(t,{children:"Status"})]})}),e.jsx(T,{children:l.map((r,i)=>e.jsxs(u,{item:r,children:[e.jsx(n,{children:e.jsx(C,{size:"medium",children:r.paymentId})}),e.jsx(n,{children:e.jsx(h,{value:r.amount})}),e.jsx(n,{children:j(r.date)}),e.jsx(n,{children:e.jsx(H,{size:"medium",color:y(r.status),children:r.status})})]},i))})]})}),e.jsxs(g,{marginTop:"spacing.3",display:"flex",flexDirection:"row",gap:"spacing.2",children:[e.jsx(_,{weight:"semibold",children:"Selected Row ID:"}),e.jsx(_,{children:s==null?void 0:s.paymentId})]})]})},aa=m(5),L=()=>{const[s,a]=R.useState(0),{platform:l}=I(),r=l==="onMobile";return e.jsx(x,{title:"Multi Selectable Table with Toolbar",description:"(Tip: Expand screen width to see layout changes in toolbar)",children:e.jsx(d,{data:aa,selectionType:"multiple",onSelectionChange:({selectedIds:i})=>a(i.length),toolbar:e.jsx(f,{title:"Showing Recent Transactions",selectedTitle:`${s} Transaction${s>1?"s":""} Selected`,children:e.jsxs(B,{children:[e.jsx(p,{variant:"secondary",marginRight:"spacing.3",isFullWidth:r,children:"Export"}),e.jsx(p,{isFullWidth:r,children:"Refund"})]})}),children:i=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(b,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Amount"}),e.jsx(t,{children:"Date"}),e.jsx(t,{children:"Status"})]})}),e.jsx(T,{children:i.map((o,w)=>e.jsxs(u,{item:o,children:[e.jsx(n,{children:e.jsx(C,{size:"medium",children:o.paymentId})}),e.jsx(n,{children:e.jsx(h,{value:o.amount})}),e.jsx(n,{children:j(o.date)}),e.jsx(n,{children:e.jsx(H,{size:"medium",color:y(o.status),children:o.status})})]},w))})]})})})},la=m(5),P=()=>{const{platform:s}=I(),a=s==="onMobile";return e.jsx(x,{title:"Multi Selectable Table with Zebra Stripes",children:e.jsx(d,{data:la,selectionType:"multiple",showStripedRows:!0,toolbar:e.jsx(f,{title:"Showing Recent Transactions",children:e.jsxs(B,{children:[e.jsx(p,{variant:"secondary",marginRight:"spacing.3",isFullWidth:a,children:"Export"}),e.jsx(p,{isFullWidth:a,children:"Refund"})]})}),children:l=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(b,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Amount"}),e.jsx(t,{children:"Date"}),e.jsx(t,{children:"Status"})]})}),e.jsx(T,{children:l.map((r,i)=>e.jsxs(u,{item:r,children:[e.jsx(n,{children:e.jsx(C,{size:"medium",children:r.paymentId})}),e.jsx(n,{children:e.jsx(h,{value:r.amount})}),e.jsx(n,{children:j(r.date)}),e.jsx(n,{children:e.jsx(H,{size:"medium",color:y(r.status),children:r.status})})]},i))})]})})})},ta=m(10),$=()=>{const{platform:s}=I(),a=s==="onMobile";return e.jsx(x,{title:"Table with Disabled Rows",children:e.jsx(d,{data:ta,selectionType:"multiple",showStripedRows:!0,toolbar:e.jsx(f,{children:e.jsxs(B,{children:[e.jsx(p,{variant:"secondary",marginRight:"spacing.3",isFullWidth:a,children:"Export"}),e.jsx(p,{isFullWidth:a,children:"Refund"})]})}),children:l=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(b,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Amount"}),e.jsx(t,{children:"Action"})]})}),e.jsx(T,{children:l.map((r,i)=>{const o=["1","5","10"].includes(r.id);return e.jsxs(u,{item:r,isDisabled:o,children:[e.jsx(n,{children:e.jsx(C,{size:"medium",children:r.paymentId})}),e.jsx(n,{children:e.jsx(h,{value:r.amount})}),e.jsx(n,{children:e.jsxs(g,{display:"flex",gap:"spacing.3",children:[e.jsx(G,{isDisabled:o,variant:"button",icon:Ke,children:"Copy"}),e.jsx(G,{isDisabled:o,variant:"button",icon:Oe,children:"Delete"})]})})]},i)})})]})})})},na=m(5),N=()=>{const[s,a]=R.useState("subtle");return e.jsxs(g,{backgroundColor:`surface.background.gray.${s}`,padding:"spacing.5",overflow:"auto",minHeight:"400px",children:[e.jsxs(g,{marginBottom:"spacing.4",children:[e.jsx(V,{marginBottom:"spacing.3",children:"Table on various background colors"}),e.jsxs(Pe,{label:"Select Emphasis Level",onChange:({value:l})=>a(l),value:s,children:[e.jsx(Y,{value:"subtle",children:"subtle"}),e.jsx(Y,{value:"moderate",children:"moderate"}),e.jsx(Y,{value:"intense",children:"intense"})]})]}),e.jsx(d,{selectionType:"multiple",showStripedRows:!0,data:na,backgroundColor:`surface.background.gray.${s}`,children:l=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(b,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Amount"}),e.jsx(t,{children:"Date"}),e.jsx(t,{children:"Method"})]})}),e.jsx(T,{children:l.map((r,i)=>e.jsxs(u,{item:r,children:[e.jsx(n,{children:r.paymentId}),e.jsx(n,{children:`₹${r.amount.toString()}`}),e.jsx(n,{children:j(r.date)}),e.jsx(n,{children:r.method})]},i))}),e.jsx(Me,{children:e.jsxs(ze,{children:[e.jsx(D,{children:"-"}),e.jsx(D,{children:"-"}),e.jsx(D,{children:"-"}),e.jsx(D,{children:"-"})]})})]})})]})},sa=m(100),U=()=>{const{platform:s}=I(),[a,l]=R.useState(!1),r=s==="onMobile";return R.useEffect(()=>{if(a)return;const i=setTimeout(()=>l(!0),2e3);return()=>clearTimeout(i)},[a]),e.jsxs(g,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",minHeight:"400px",children:[e.jsx(V,{children:"Table with initial isLoading state"}),e.jsx(G,{variant:"button",onClick:()=>l(!1),children:"Refresh to show loader again"}),e.jsx(g,{marginTop:"spacing.4",display:"flex",children:e.jsx(d,{data:sa,selectionType:"multiple",showStripedRows:!0,height:"400px",isLoading:!a,toolbar:e.jsx(f,{children:e.jsxs(B,{children:[e.jsx(p,{variant:"secondary",marginRight:"spacing.3",isFullWidth:r,children:"Export"}),e.jsx(p,{isFullWidth:r,children:"Refund"})]})}),children:i=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(b,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Amount"}),e.jsx(t,{children:"Status"})]})}),e.jsx(T,{children:i.map((o,w)=>e.jsxs(u,{item:o,children:[e.jsx(n,{children:e.jsx(C,{size:"medium",children:o.paymentId})}),e.jsx(n,{children:e.jsx(h,{value:o.amount})}),e.jsx(n,{children:e.jsx(H,{size:"medium",color:y(o.status),children:o.status})})]},w))})]})})})]})},ra=m(100),K=()=>{const{platform:s}=I(),[a,l]=R.useState(0),[r,i]=R.useState(!1),o=s==="onMobile",w=({page:A})=>{a!==A&&(i(!0),setTimeout(()=>{l(A),i(!1)},2e3))};return e.jsx(x,{title:"Table with isRefreshing state",description:"(Tip: Navigate to next page using the pagination buttons to see an isRefreshing state.)",children:e.jsx(d,{data:ra,isRefreshing:r,selectionType:"multiple",showStripedRows:!0,toolbar:e.jsx(f,{children:e.jsxs(B,{children:[e.jsx(p,{variant:"secondary",marginRight:"spacing.3",isFullWidth:o,children:"Export"}),e.jsx(p,{isFullWidth:o,children:"Refund"})]})}),pagination:e.jsx(Ve,{onPageChange:w,defaultPageSize:10,onPageSizeChange:console.log,showPageSizePicker:!0,showPageNumberSelector:!0,currentPage:a}),children:A=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(b,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Amount"}),e.jsx(t,{children:"Date"}),e.jsx(t,{children:"Status"})]})}),e.jsx(T,{children:A.map((S,Le)=>e.jsxs(u,{item:S,children:[e.jsx(n,{children:e.jsx(C,{size:"medium",children:S.paymentId})}),e.jsx(n,{children:e.jsx(h,{value:S.amount})}),e.jsx(n,{children:j(S.date)}),e.jsx(n,{children:e.jsx(H,{size:"medium",color:y(S.status),children:S.status})})]},Le))})]})})})},oa=m(5),O=()=>e.jsx(x,{title:"Table with Editable Cells",children:e.jsx(d,{data:oa,showBorderedCells:!0,children:s=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(b,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Date"}),e.jsx(t,{children:"Amount"}),e.jsx(t,{children:"Method"})]})}),e.jsx(T,{children:s.map((a,l)=>e.jsxs(u,{item:a,children:[e.jsx(Z,{placeholder:"Enter ID",accessibilityLabel:"ID",validationState:"error",errorText:"ID Cannot be empty"}),e.jsx(Z,{placeholder:"Enter Date",accessibilityLabel:"Date"}),e.jsx(Z,{placeholder:"Enter Amount",accessibilityLabel:"Amount",defaultValue:`${a.amount}`,validationState:"success",successText:"Amount is valid"}),e.jsxs(_e,{children:[e.jsx(Ye,{accessibilityLabel:"Method"}),e.jsx(Ze,{children:e.jsxs(Ge,{children:[e.jsx(E,{title:"UPI",value:"upi"}),e.jsx(E,{title:"Credit Card",value:"credit"}),e.jsx(E,{title:"Debit Card",value:"debit"}),e.jsx(E,{title:"Cash",value:"cash"})]})})]})]},l))})]})})});var q,J,Q;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`(): React.ReactElement => {
  return <ExampleWrapper title="Basic Table">
      <Table data={basicTableData}>
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Method</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem}>
                  <TableCell>{tableItem.paymentId}</TableCell>
                  <TableCell>{\`₹\${tableItem.amount.toString()}\`}</TableCell>
                  <TableCell>{formatDate(tableItem.date)}</TableCell>
                  <TableCell>{tableItem.method}</TableCell>
                </TableRow>)}
            </TableBody>
          </>}
      </Table>
    </ExampleWrapper>;
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,ae,le;F.parameters={...F.parameters,docs:{...(ee=F.parameters)==null?void 0:ee.docs,source:{originalSource:`(): React.ReactElement => {
  const headerCells = [{
    title: 'ID',
    tooltip: 'Payment ID of the transaction'
  }, {
    title: 'Amount',
    tooltip: 'Amount transacted'
  }, {
    title: 'Date',
    tooltip: 'Creation date of the transaction'
  }, {
    title: 'Status',
    tooltip: 'Current status of the transaction'
  }];
  return <ExampleWrapper title="Table with Custom Cell Components">
      <Table data={customCellTableData}>
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                {headerCells.map(headerCell => <TableHeaderCell key={headerCell.title}>
                    <Box display="flex" flexDirection="row" flex={1} justifyContent="space-between" alignItems="center">
                      <Text weight="semibold">{headerCell.title}</Text>
                      <Tooltip content={headerCell.tooltip}>
                        <IconButton onClick={() => console.log('info clicked')} accessibilityLabel="info" icon={InfoIcon} />
                      </Tooltip>
                    </Box>
                  </TableHeaderCell>)}
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
                  <TableCell>{formatDate(tableItem.date)}</TableCell>
                  <TableCell>
                    <Badge size="medium" color={getStatusColor(tableItem.status)}>
                      {tableItem.status}
                    </Badge>
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </>}
      </Table>
    </ExampleWrapper>;
}`,...(le=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var te,ne,se;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`(): React.ReactElement => {
  return <ExampleWrapper title="Sortable Table">
      <Table data={sortableTableData} sortFunctions={{
      PAYMENT_ID: array => array.sort((first, second) => first.paymentId.localeCompare(second.paymentId)),
      AMOUNT: array => array.sort((first, second) => first.amount - second.amount),
      DATE: array => array.sort((first, second) => first.date.getTime() - second.date.getTime()),
      STATUS: array => array.sort((first, second) => first.status.localeCompare(second.status))
    }}>
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell headerKey="PAYMENT_ID">ID</TableHeaderCell>
                <TableHeaderCell headerKey="AMOUNT">Amount</TableHeaderCell>
                <TableHeaderCell headerKey="DATE">Date</TableHeaderCell>
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
                  <TableCell>{formatDate(tableItem.date)}</TableCell>
                  <TableCell>
                    <Badge size="medium" color={getStatusColor(tableItem.status)}>
                      {tableItem.status}
                    </Badge>
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </>}
      </Table>
    </ExampleWrapper>;
}`,...(se=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,oe,ie;W.parameters={...W.parameters,docs:{...(re=W.parameters)==null?void 0:re.docs,source:{originalSource:`(): React.ReactElement => {
  const totalAmount = stickyHeaderFooterTableData.nodes.reduce((accumulator, node) => accumulator + node.amount, 0);
  return <ExampleWrapper title="Table with Sticky Header & Sticky Footer">
      <Table data={stickyHeaderFooterTableData} isHeaderSticky isFooterSticky height="500px">
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem}>
                  <TableCell>
                    <Code size="medium">{tableItem.paymentId}</Code>
                  </TableCell>
                  <TableCell>{formatDate(tableItem.date)}</TableCell>
                  <TableCell>
                    <Badge size="medium" color={getStatusColor(tableItem.status)}>
                      {tableItem.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Amount value={tableItem.amount} />
                  </TableCell>
                </TableRow>)}
            </TableBody>
            <TableFooter>
              <TableFooterRow>
                <TableFooterCell>Total</TableFooterCell>
                <TableFooterCell>-</TableFooterCell>
                <TableFooterCell>-</TableFooterCell>
                <TableFooterCell>
                  <Amount value={totalAmount} />
                </TableFooterCell>
              </TableFooterRow>
            </TableFooter>
          </>}
      </Table>
    </ExampleWrapper>;
}`,...(ie=(oe=W.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var de,ce,be;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`(): React.ReactElement => {
  return <ExampleWrapper title="Table with Sticky First Column">
      <Table data={stickyFirstColumnTableData} isFirstColumnSticky height="500px">
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Account</TableHeaderCell>
                <TableHeaderCell>Method</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem}>
                  <TableCell>
                    <Code size="medium">{tableItem.paymentId}</Code>
                  </TableCell>
                  <TableCell>{tableItem.name}</TableCell>
                  <TableCell>{tableItem.account}</TableCell>
                  <TableCell>{tableItem.method}</TableCell>
                  <TableCell>{formatDate(tableItem.date)}</TableCell>
                  <TableCell>
                    <Badge size="medium" color={getStatusColor(tableItem.status)}>
                      {tableItem.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Amount value={tableItem.amount} />
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </>}
      </Table>
    </ExampleWrapper>;
}`,...(be=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:be.source}}};var Te,ue,me;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`(): React.ReactElement => {
  const [selectedItem, setSelectedItem] = React.useState<TableExampleItem | undefined>(undefined);
  return <ExampleWrapper title="Single Selectable Table">
      <Table data={singleSelectableTableData} selectionType="single" onSelectionChange={({
      values
    }) => setSelectedItem(values[0])}>
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
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
                  <TableCell>{formatDate(tableItem.date)}</TableCell>
                  <TableCell>
                    <Badge size="medium" color={getStatusColor(tableItem.status)}>
                      {tableItem.status}
                    </Badge>
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </>}
      </Table>
      <Box marginTop="spacing.3" display="flex" flexDirection="row" gap="spacing.2">
        <Text weight="semibold">Selected Row ID:</Text>
        <Text>{selectedItem?.paymentId}</Text>
      </Box>
    </ExampleWrapper>;
}`,...(me=(ue=z.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var he,xe,pe;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`(): React.ReactElement => {
  const [selectedItemsCount, setSelectedItemsCount] = React.useState(0);
  const {
    platform
  } = useTheme();
  const onMobile = platform === 'onMobile';
  return <ExampleWrapper title="Multi Selectable Table with Toolbar" description="(Tip: Expand screen width to see layout changes in toolbar)">
      <Table data={multiSelectableTableData} selectionType="multiple" onSelectionChange={({
      selectedIds
    }) => setSelectedItemsCount(selectedIds.length)} toolbar={<TableToolbar title="Showing Recent Transactions" selectedTitle={\`\${selectedItemsCount} Transaction\${selectedItemsCount > 1 ? 's' : ''} Selected\`}>
            <TableToolbarActions>
              <Button variant="secondary" marginRight="spacing.3" isFullWidth={onMobile}>
                Export
              </Button>
              <Button isFullWidth={onMobile}>Refund</Button>
            </TableToolbarActions>
          </TableToolbar>}>
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
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
                  <TableCell>{formatDate(tableItem.date)}</TableCell>
                  <TableCell>
                    <Badge size="medium" color={getStatusColor(tableItem.status)}>
                      {tableItem.status}
                    </Badge>
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </>}
      </Table>
    </ExampleWrapper>;
}`,...(pe=(xe=L.parameters)==null?void 0:xe.docs)==null?void 0:pe.source}}};var Ce,je,ge;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`(): React.ReactElement => {
  const {
    platform
  } = useTheme();
  const onMobile = platform === 'onMobile';
  return <ExampleWrapper title="Multi Selectable Table with Zebra Stripes">
      <Table data={zebraStripesTableData} selectionType="multiple" showStripedRows={true} toolbar={<TableToolbar title="Showing Recent Transactions">
            <TableToolbarActions>
              <Button variant="secondary" marginRight="spacing.3" isFullWidth={onMobile}>
                Export
              </Button>
              <Button isFullWidth={onMobile}>Refund</Button>
            </TableToolbarActions>
          </TableToolbar>}>
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
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
                  <TableCell>{formatDate(tableItem.date)}</TableCell>
                  <TableCell>
                    <Badge size="medium" color={getStatusColor(tableItem.status)}>
                      {tableItem.status}
                    </Badge>
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </>}
      </Table>
    </ExampleWrapper>;
}`,...(ge=(je=P.parameters)==null?void 0:je.docs)==null?void 0:ge.source}}};var He,ye,De;$.parameters={...$.parameters,docs:{...(He=$.parameters)==null?void 0:He.docs,source:{originalSource:`(): React.ReactElement => {
  const {
    platform
  } = useTheme();
  const onMobile = platform === 'onMobile';
  return <ExampleWrapper title="Table with Disabled Rows">
      <Table data={disabledRowsTableData} selectionType="multiple" showStripedRows={true} toolbar={<TableToolbar>
            <TableToolbarActions>
              <Button variant="secondary" marginRight="spacing.3" isFullWidth={onMobile}>
                Export
              </Button>
              <Button isFullWidth={onMobile}>Refund</Button>
            </TableToolbarActions>
          </TableToolbar>}>
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
            const isDisabled = ['1', '5', '10'].includes(tableItem.id);
            return <TableRow key={index} item={tableItem} isDisabled={isDisabled}>
                    <TableCell>
                      <Code size="medium">{tableItem.paymentId}</Code>
                    </TableCell>
                    <TableCell>
                      <Amount value={tableItem.amount} />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" gap="spacing.3">
                        <Link isDisabled={isDisabled} variant="button" icon={CopyIcon}>
                          Copy
                        </Link>
                        <Link isDisabled={isDisabled} variant="button" icon={TrashIcon}>
                          Delete
                        </Link>
                      </Box>
                    </TableCell>
                  </TableRow>;
          })}
            </TableBody>
          </>}
      </Table>
    </ExampleWrapper>;
}`,...(De=(ye=$.parameters)==null?void 0:ye.docs)==null?void 0:De.source}}};var Re,Se,we;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`(): React.ReactElement => {
  const [emphasis, setEmphasis] = React.useState<BackgroundEmphasis>('subtle');
  return <Box backgroundColor={\`surface.background.gray.\${emphasis}\`} padding="spacing.5" overflow="auto" minHeight="400px">
      <Box marginBottom="spacing.4">
        <Heading marginBottom="spacing.3">Table on various background colors</Heading>
        <RadioGroup label="Select Emphasis Level" onChange={({
        value
      }) => setEmphasis(value as BackgroundEmphasis)} value={emphasis}>
          <Radio value="subtle">subtle</Radio>
          <Radio value="moderate">moderate</Radio>
          <Radio value="intense">intense</Radio>
        </RadioGroup>
      </Box>
      <Table selectionType="multiple" showStripedRows={true} data={backgroundColorTableData} backgroundColor={\`surface.background.gray.\${emphasis}\`}>
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Method</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem}>
                  <TableCell>{tableItem.paymentId}</TableCell>
                  <TableCell>{\`₹\${tableItem.amount.toString()}\`}</TableCell>
                  <TableCell>{formatDate(tableItem.date)}</TableCell>
                  <TableCell>{tableItem.method}</TableCell>
                </TableRow>)}
            </TableBody>
            <TableFooter>
              <TableFooterRow>
                <TableFooterCell>-</TableFooterCell>
                <TableFooterCell>-</TableFooterCell>
                <TableFooterCell>-</TableFooterCell>
                <TableFooterCell>-</TableFooterCell>
              </TableFooterRow>
            </TableFooter>
          </>}
      </Table>
    </Box>;
}`,...(we=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var Ie,fe,Be;U.parameters={...U.parameters,docs:{...(Ie=U.parameters)==null?void 0:Ie.docs,source:{originalSource:`(): React.ReactElement => {
  const {
    platform
  } = useTheme();
  const [showData, setShowData] = React.useState(false);
  const onMobile = platform === 'onMobile';
  React.useEffect(() => {
    if (showData) return undefined;
    const timeoutId = setTimeout(() => setShowData(true), 2000);
    return () => clearTimeout(timeoutId);
  }, [showData]);
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" minHeight="400px">
      <Heading>Table with initial isLoading state</Heading>
      <Link variant="button" onClick={() => setShowData(false)}>
        Refresh to show loader again
      </Link>
      <Box marginTop="spacing.4" display="flex">
        <Table data={isLoadingTableData} selectionType="multiple" showStripedRows={true} height="400px" isLoading={!showData} toolbar={<TableToolbar>
              <TableToolbarActions>
                <Button variant="secondary" marginRight="spacing.3" isFullWidth={onMobile}>
                  Export
                </Button>
                <Button isFullWidth={onMobile}>Refund</Button>
              </TableToolbarActions>
            </TableToolbar>}>
          {tableData => <>
              <TableHeader>
                <TableHeaderRow>
                  <TableHeaderCell>ID</TableHeaderCell>
                  <TableHeaderCell>Amount</TableHeaderCell>
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
                    <TableCell>
                      <Badge size="medium" color={getStatusColor(tableItem.status)}>
                        {tableItem.status}
                      </Badge>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </>}
        </Table>
      </Box>
    </Box>;
}`,...(Be=(fe=U.parameters)==null?void 0:fe.docs)==null?void 0:Be.source}}};var Ae,Ee,ve;K.parameters={...K.parameters,docs:{...(Ae=K.parameters)==null?void 0:Ae.docs,source:{originalSource:`(): React.ReactElement => {
  const {
    platform
  } = useTheme();
  const [currentPage, setCurrentPage] = React.useState(0);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const onMobile = platform === 'onMobile';
  const handlePageChange = ({
    page
  }: {
    page: number;
  }): void => {
    if (currentPage === page) return;
    setIsRefreshing(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsRefreshing(false);
    }, 2000);
  };
  return <ExampleWrapper title="Table with isRefreshing state" description="(Tip: Navigate to next page using the pagination buttons to see an isRefreshing state.)">
      <Table data={isRefreshingTableData} isRefreshing={isRefreshing} selectionType="multiple" showStripedRows={true} toolbar={<TableToolbar>
            <TableToolbarActions>
              <Button variant="secondary" marginRight="spacing.3" isFullWidth={onMobile}>
                Export
              </Button>
              <Button isFullWidth={onMobile}>Refund</Button>
            </TableToolbarActions>
          </TableToolbar>} pagination={<TablePagination onPageChange={handlePageChange} defaultPageSize={10} onPageSizeChange={console.log} showPageSizePicker showPageNumberSelector currentPage={currentPage} />}>
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
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
                  <TableCell>{formatDate(tableItem.date)}</TableCell>
                  <TableCell>
                    <Badge size="medium" color={getStatusColor(tableItem.status)}>
                      {tableItem.status}
                    </Badge>
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </>}
      </Table>
    </ExampleWrapper>;
}`,...(ve=(Ee=K.parameters)==null?void 0:Ee.docs)==null?void 0:ve.source}}};var Fe,ke,We;O.parameters={...O.parameters,docs:{...(Fe=O.parameters)==null?void 0:Fe.docs,source:{originalSource:`(): React.ReactElement => {
  return <ExampleWrapper title="Table with Editable Cells">
      <Table data={editableCellsTableData} showBorderedCells>
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell>Method</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem}>
                  <TableEditableCell placeholder="Enter ID" accessibilityLabel="ID" validationState="error" errorText="ID Cannot be empty" />
                  <TableEditableCell placeholder="Enter Date" accessibilityLabel="Date" />
                  <TableEditableCell placeholder="Enter Amount" accessibilityLabel="Amount" defaultValue={\`\${tableItem.amount}\`} validationState="success" successText="Amount is valid" />
                  <TableEditableDropdownCell>
                    <AutoComplete accessibilityLabel="Method" />
                    <DropdownOverlay>
                      <ActionList>
                        <ActionListItem title="UPI" value="upi" />
                        <ActionListItem title="Credit Card" value="credit" />
                        <ActionListItem title="Debit Card" value="debit" />
                        <ActionListItem title="Cash" value="cash" />
                      </ActionList>
                    </DropdownOverlay>
                  </TableEditableDropdownCell>
                </TableRow>)}
            </TableBody>
          </>}
      </Table>
    </ExampleWrapper>;
}`,...(We=(ke=O.parameters)==null?void 0:ke.docs)==null?void 0:We.source}}};const Ta=["BasicTable","TableWithCustomCellComponents","SortableTable","TableWithStickyHeaderAndFooter","TableWithStickyFirstColumn","SingleSelectableTable","MultiSelectableTableWithToolbar","MultiSelectableWithZebraStripes","TableWithDisabledRows","TableWithBackgroundColor","TableWithIsLoading","TableWithIsRefreshing","TableWithEditableCells"];export{v as BasicTable,L as MultiSelectableTableWithToolbar,P as MultiSelectableWithZebraStripes,z as SingleSelectableTable,k as SortableTable,N as TableWithBackgroundColor,F as TableWithCustomCellComponents,$ as TableWithDisabledRows,O as TableWithEditableCells,U as TableWithIsLoading,K as TableWithIsRefreshing,M as TableWithStickyFirstColumn,W as TableWithStickyHeaderAndFooter,Ta as __namedExportsOrder,ba as default};
