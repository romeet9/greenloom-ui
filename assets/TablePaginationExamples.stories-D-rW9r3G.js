import{iV as T,u as I,j as e,B as g,H as P,T as W,iW as H,iX as R,iY as t,iZ as y,i_ as B,i$ as l,C as z,F as E,a8 as A,k3 as v,jG as M,jH as F,n as m,ad as r}from"./iframe-C1qQ09LF.js";import{f as N,g as O,c as _}from"./exampleData-CbFas6Xk.js";import"./preload-helper-Dp1pzeXC.js";const Z={title:"Components/Table/Examples/Pagination",component:T,parameters:{viewMode:"story",options:{showPanel:!1},previewTabs:{"storybook/docs/panel":{hidden:!0}},chromatic:{disableSnapshot:!0}}},G=_(100),d=()=>{const{platform:i}=I(),o=i==="onMobile";return e.jsxs(g,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",minHeight:"400px",children:[e.jsxs(g,{paddingBottom:"spacing.4",children:[e.jsx(P,{children:"Table with Client Side Pagination"}),e.jsx(W,{children:"(Tip: Expand the window width. It shows a minimalistic version of pagination on mWeb and a full fledged version on dWeb.)"})]}),e.jsx(T,{data:G,selectionType:"multiple",showStripedRows:!0,toolbar:e.jsx(M,{children:e.jsxs(F,{children:[e.jsx(m,{variant:"secondary",marginRight:"spacing.3",isFullWidth:o,children:"Export"}),e.jsx(m,{isFullWidth:o,children:"Refund"})]})}),pagination:e.jsx(v,{onPageChange:console.log,defaultPageSize:10,onPageSizeChange:console.log,showPageSizePicker:!0,showPageNumberSelector:!0}),children:b=>e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsxs(R,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Date"}),e.jsx(t,{children:"Status"}),e.jsx(t,{children:"Amount"})]})}),e.jsx(y,{children:b.map((a,u)=>e.jsxs(B,{item:a,children:[e.jsx(l,{children:e.jsx(z,{size:"medium",children:a.paymentId})}),e.jsx(l,{children:N(a.date)}),e.jsx(l,{children:e.jsx(E,{size:"medium",color:O(a.status),children:a.status})}),e.jsx(l,{children:e.jsx(A,{value:a.amount})})]},u))})]})})]})},$=async({page:i})=>await(await fetch(`https://rickandmortyapi.com/api/character?page=${i}`,{method:"GET",redirect:"follow"})).json(),c=()=>{const[i,o]=r.useState({nodes:[]}),[b,a]=r.useState(0),[u,p]=r.useState(!1),h=r.useCallback(s=>$({page:s}).then(n=>{o({nodes:n.results.slice(0,10)}),a(n.info.count/2)}),[]);r.useEffect(()=>{h(1)},[h]);const D=({page:s})=>{p(!0),h(s+1).finally(()=>p(!1))};return e.jsxs(g,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",minHeight:"400px",children:[e.jsx(g,{paddingBottom:"spacing.4",children:e.jsx(P,{children:"Table with Server Side Pagination"})}),e.jsx(T,{data:i,isRefreshing:u,pagination:e.jsx(v,{showPageNumberSelector:!0,showPageSizePicker:!1,paginationType:"server",onPageChange:D,totalItemCount:b}),children:s=>e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsxs(R,{children:[e.jsx(t,{children:"Name"}),e.jsx(t,{children:"Origin"}),e.jsx(t,{children:"Species"}),e.jsx(t,{children:"Status"})]})}),e.jsx(y,{children:s.map((n,k)=>e.jsxs(B,{item:n,children:[e.jsx(l,{children:n.name}),e.jsx(l,{children:n.origin.name}),e.jsx(l,{children:n.species}),e.jsx(l,{children:n.status})]},k))})]})})]})};var x,C,f;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`(): React.ReactElement => {
  const {
    platform
  } = useTheme();
  const onMobile = platform === 'onMobile';
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto" minHeight="400px">
      <Box paddingBottom="spacing.4">
        <Heading>Table with Client Side Pagination</Heading>
        <Text>
          (Tip: Expand the window width. It shows a minimalistic version of pagination on mWeb and a
          full fledged version on dWeb.)
        </Text>
      </Box>
      <Table data={clientSidePaginationTableData} selectionType="multiple" showStripedRows={true} toolbar={<TableToolbar>
            <TableToolbarActions>
              <Button variant="secondary" marginRight="spacing.3" isFullWidth={onMobile}>
                Export
              </Button>
              <Button isFullWidth={onMobile}>Refund</Button>
            </TableToolbarActions>
          </TableToolbar>} pagination={<TablePagination onPageChange={console.log} defaultPageSize={10} onPageSizeChange={console.log} showPageSizePicker showPageNumberSelector />}>
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
          </>}
      </Table>
    </Box>;
}`,...(f=(C=d.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var j,w,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`(): React.ReactElement => {
  const [apiData, setApiData] = React.useState<TableData<Character>>({
    nodes: []
  });
  const [dataCount, setDataCount] = React.useState(0);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  // The rick & morty api always returns 20 items per page and that is not configurable. We slice the
  // response to 10 items (and halve the count) to simulate an API with \`limit\` & \`offset\` support.
  const loadPage = React.useCallback((page: number) => {
    return fetchCharacters({
      page
    }).then(result => {
      setApiData({
        nodes: result.results.slice(0, 10)
      });
      setDataCount(result.info.count / 2);
    });
  }, []);
  React.useEffect(() => {
    void loadPage(1);
  }, [loadPage]);
  const handlePageChange = ({
    page
  }: {
    page: number;
  }): void => {
    setIsRefreshing(true);
    void loadPage(page + 1).finally(() => setIsRefreshing(false));
  };
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto" minHeight="400px">
      <Box paddingBottom="spacing.4">
        <Heading>Table with Server Side Pagination</Heading>
      </Box>
      <Table data={apiData} isRefreshing={isRefreshing} pagination={<TablePagination showPageNumberSelector={true} showPageSizePicker={false} paginationType="server" onPageChange={handlePageChange} totalItemCount={dataCount} />}>
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Origin</TableHeaderCell>
                <TableHeaderCell>Species</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem}>
                  <TableCell>{tableItem.name}</TableCell>
                  <TableCell>{tableItem.origin.name}</TableCell>
                  <TableCell>{tableItem.species}</TableCell>
                  <TableCell>{tableItem.status}</TableCell>
                </TableRow>)}
            </TableBody>
          </>}
      </Table>
    </Box>;
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const q=["TableWithClientSidePagination","TableWithServerSidePagination"];export{d as TableWithClientSidePagination,c as TableWithServerSidePagination,q as __namedExportsOrder,Z as default};
