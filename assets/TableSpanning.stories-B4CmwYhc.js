import{iV as b,j as e,B as m,iZ as f,i_ as c,i$ as r,a8 as t,k0 as v,k1 as F,k2 as i,T as h,iW as ne,iX as re,iY as u}from"./iframe-C1qQ09LF.js";import{S as de}from"./StoryPageWrapper-CS0_5maI.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const xe={title:"Components/Table/Spanning",component:b,parameters:{docs:{page:()=>e.jsx(de,{componentDescription:"Table with rowspan and colspan support.",componentName:"Table Spanning"})}}},o={nodes:[{id:"txn_001",merchant:"Flipkart",method:"UPI",amount:2500,fee:12.5,gst:2.25,settlement:2485.25},{id:"txn_002",merchant:"Flipkart",method:"Card",amount:1200,fee:24,gst:4.32,settlement:1171.68},{id:"txn_003",merchant:"Swiggy",method:"UPI",amount:850,fee:4.25,gst:.77,settlement:844.98},{id:"txn_004",merchant:"Swiggy",method:"Wallet",amount:450,fee:9,gst:1.62,settlement:439.38}]};function te(s,l){return s.reduce((a,n)=>{const d=String(n[l]);return a[d]||(a[d]=[]),a[d].push(n),a},{})}function k(s,l){const a=te(s,l),n=[];return s.forEach(d=>{const oe=String(d[l]),R=a[oe],se=R[0]===d;n.push({item:d,shouldSpan:se&&R.length>1,rowSpan:R.length})}),n}const x=e.jsx(ne,{children:e.jsxs(re,{children:[e.jsx(u,{children:"Merchant"}),e.jsx(u,{children:"Method"}),e.jsx(u,{children:"Amount"}),e.jsx(u,{children:"Fee"}),e.jsx(u,{children:"GST"}),e.jsx(u,{children:"Settlement"})]})}),C=()=>{const s=k(o.nodes,"merchant");return e.jsx(m,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",children:e.jsx(b,{data:o,showBorderedCells:!0,children:l=>e.jsxs(e.Fragment,{children:[x,e.jsx(f,{children:l.map((a,n)=>{const d=s[n];return e.jsxs(c,{item:a,children:[d.shouldSpan&&e.jsx(r,{gridRowStart:n+2,gridRowEnd:n+2+d.rowSpan,children:a.merchant}),e.jsx(r,{children:a.method}),e.jsx(r,{children:e.jsx(t,{value:a.amount,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:a.fee,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:a.gst,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:a.settlement,isAffixSubtle:!1})})]},a.id)})})]})})})},p=()=>e.jsx(m,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",children:e.jsx(b,{data:o,showBorderedCells:!0,children:s=>e.jsxs(e.Fragment,{children:[x,e.jsxs(f,{children:[e.jsx(c,{item:s[0],children:e.jsxs(r,{gridColumnStart:1,gridColumnEnd:7,children:["Transaction Summary - Total: ",o.nodes.length," transactions processed"]})}),s.map((l,a)=>e.jsxs(c,{item:l,children:[e.jsx(r,{children:l==null?void 0:l.merchant}),e.jsx(r,{children:l==null?void 0:l.method}),e.jsx(r,{children:e.jsx(t,{value:l==null?void 0:l.amount,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:l==null?void 0:l.fee,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:l==null?void 0:l.gst,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:l==null?void 0:l.settlement,isAffixSubtle:!1})})]},a))]})]})})}),T=()=>e.jsx(m,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",children:e.jsx(b,{data:o,showBorderedCells:!0,children:s=>e.jsxs(e.Fragment,{children:[e.jsx(ne,{children:e.jsxs(re,{children:[e.jsx(u,{children:"Merchant"}),e.jsx(u,{children:"Method"}),e.jsx(u,{children:"Amount"}),e.jsx(u,{gridColumnStart:4,gridColumnEnd:7,children:"Charge Breakup"})]})}),e.jsx(f,{children:s.map((l,a)=>e.jsxs(c,{item:l,children:[e.jsx(r,{children:l==null?void 0:l.merchant}),e.jsx(r,{children:l==null?void 0:l.method}),e.jsx(r,{children:e.jsx(t,{value:l==null?void 0:l.amount,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:l==null?void 0:l.fee,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:l==null?void 0:l.gst,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:l==null?void 0:l.settlement,isAffixSubtle:!1})})]},a))})]})})}),g=()=>{const s=te(o.nodes,"merchant"),l=o.nodes.reduce((a,n)=>a+n.settlement,0);return e.jsx(m,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",children:e.jsx(b,{data:o,showBorderedCells:!0,children:a=>e.jsxs(e.Fragment,{children:[x,e.jsx(f,{children:a.map((n,d)=>e.jsxs(c,{item:n,children:[e.jsx(r,{children:n==null?void 0:n.merchant}),e.jsx(r,{children:n==null?void 0:n.method}),e.jsx(r,{children:e.jsx(t,{value:n==null?void 0:n.amount,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:n==null?void 0:n.fee,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:n==null?void 0:n.gst,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:n==null?void 0:n.settlement,isAffixSubtle:!1})})]},d))}),e.jsx(v,{children:e.jsxs(F,{children:[e.jsx(i,{gridColumnStart:1,gridColumnEnd:6,children:e.jsxs(h,{weight:"regular",children:["Total Summary (",Object.keys(s).length," merchants,"," ",o.nodes.length," transactions)"]})}),e.jsx(i,{children:e.jsx(t,{value:l,isAffixSubtle:!1})})]})})]})})})},S=()=>{const s=k(o.nodes,"merchant");return e.jsx(m,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",children:e.jsx(b,{data:o,showBorderedCells:!0,children:l=>e.jsxs(e.Fragment,{children:[x,e.jsx(f,{children:l.map((a,n)=>{const d=s[n];return e.jsxs(c,{item:a,children:[d.shouldSpan&&e.jsx(r,{gridRowStart:n+2,gridRowEnd:n+2+d.rowSpan,gridColumnStart:n<2?1:void 0,gridColumnEnd:n<2?3:void 0,children:a.merchant}),n>=2&&e.jsx(r,{children:a==null?void 0:a.method}),e.jsx(r,{gridColumnStart:d.shouldSpan?3:1,children:e.jsx(t,{value:a.amount,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:a.fee,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:a.gst,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:a.settlement,isAffixSubtle:!1})})]},a.id)})})]})})})},j=()=>e.jsx(m,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",children:e.jsx(b,{data:o,showBorderedCells:!0,selectionType:"multiple",onSelectionChange:({selectedIds:s})=>console.log("Selected:",s),children:s=>e.jsxs(e.Fragment,{children:[x,e.jsx(f,{children:s.map((l,a)=>e.jsxs(c,{item:l,children:[e.jsx(r,{children:l.merchant}),e.jsx(r,{children:l.method}),e.jsx(r,{children:e.jsx(t,{value:l.amount,isAffixSubtle:!1})}),e.jsx(r,{gridColumnStart:5,gridColumnEnd:7,children:e.jsx(t,{value:Number(l.fee)+Number(l.gst),isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:Number(l.settlement),isAffixSubtle:!1})})]},a))}),e.jsx(v,{children:e.jsxs(F,{children:[e.jsx(i,{gridColumnStart:1,gridColumnEnd:7,children:e.jsx(h,{weight:"regular",children:"Summary"})}),e.jsx(i,{children:e.jsx(t,{value:o.nodes.reduce((l,a)=>l+a.settlement,0),isAffixSubtle:!1})})]})})]})})}),A=()=>e.jsx(m,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",children:e.jsx(b,{data:o,showBorderedCells:!0,isHeaderSticky:!0,isFooterSticky:!0,isFirstColumnSticky:!0,height:"400px",children:s=>e.jsxs(e.Fragment,{children:[x,e.jsx(f,{children:s.map((l,a)=>e.jsxs(c,{item:l,children:[e.jsx(r,{children:l.merchant}),e.jsx(r,{children:l.method}),e.jsx(r,{children:e.jsx(t,{value:l.amount,isAffixSubtle:!1})}),e.jsx(r,{gridColumnStart:4,gridColumnEnd:6,children:e.jsx(t,{value:Number(l.fee)+Number(l.gst),isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:Number(l.settlement),isAffixSubtle:!1})})]},a))}),e.jsx(v,{children:e.jsxs(F,{children:[e.jsx(i,{gridColumnStart:1,gridColumnEnd:3,children:e.jsx(h,{weight:"regular",children:"Summary"})}),e.jsx(i,{children:e.jsx(t,{value:o.nodes.reduce((l,a)=>l+a.amount,0),isAffixSubtle:!1})}),e.jsx(i,{gridColumnStart:4,gridColumnEnd:6,children:e.jsx(t,{value:o.nodes.reduce((l,a)=>l+a.fee,0),isAffixSubtle:!1})}),e.jsx(i,{children:e.jsx(t,{value:o.nodes.reduce((l,a)=>l+a.settlement,0),isAffixSubtle:!1})})]})})]})})}),w=()=>{const s=k(o.nodes,"merchant");return e.jsx(m,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",children:e.jsx(b,{data:o,showBorderedCells:!0,isHeaderSticky:!0,isFooterSticky:!0,isFirstColumnSticky:!0,height:"400px",children:l=>e.jsxs(e.Fragment,{children:[x,e.jsx(f,{children:l.map((a,n)=>{const d=s[n];return e.jsxs(c,{item:a,children:[d.shouldSpan&&e.jsx(r,{gridRowStart:n+2,gridRowEnd:n+2+d.rowSpan,children:a.merchant}),e.jsx(r,{children:a.method}),e.jsx(r,{children:e.jsx(t,{value:a.amount,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:a.fee,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:a.gst,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:a.settlement,isAffixSubtle:!1})})]},a.id)})}),e.jsx(v,{children:e.jsxs(F,{children:[e.jsx(i,{children:e.jsx(h,{weight:"regular",children:"Summary"})}),e.jsx(i,{children:e.jsxs(h,{weight:"regular",children:["Items: ",o.nodes.length]})}),e.jsx(i,{children:e.jsx(t,{value:o.nodes.reduce((a,n)=>a+n.amount,0),isAffixSubtle:!1})}),e.jsx(i,{children:e.jsx(t,{value:o.nodes.reduce((a,n)=>a+n.fee,0),isAffixSubtle:!1})}),e.jsx(i,{children:e.jsx(t,{value:o.nodes.reduce((a,n)=>a+n.gst,0),isAffixSubtle:!1})}),e.jsx(i,{children:e.jsx(t,{value:o.nodes.reduce((a,n)=>a+n.settlement,0),isAffixSubtle:!1})})]})})]})})})},y=()=>{const s=k(o.nodes,"merchant");return e.jsx(m,{backgroundColor:"surface.background.gray.intense",padding:"spacing.5",overflow:"auto",children:e.jsx(b,{data:o,showBorderedCells:!0,isFirstColumnSticky:!0,isHeaderSticky:!0,isFooterSticky:!0,children:l=>e.jsxs(e.Fragment,{children:[x,e.jsx(f,{children:l.map((a,n)=>{const d=s[n];return e.jsxs(c,{item:a,children:[d.shouldSpan&&e.jsx(r,{gridRowStart:n+2,gridRowEnd:n+2+d.rowSpan,gridColumnStart:n<2?1:void 0,gridColumnEnd:n<2?3:void 0,children:a.merchant}),n>=2&&e.jsx(r,{children:a==null?void 0:a.method}),e.jsx(r,{gridColumnStart:d.shouldSpan?3:1,children:e.jsx(t,{value:a.amount,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:a.fee,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:a.gst,isAffixSubtle:!1})}),e.jsx(r,{children:e.jsx(t,{value:a.settlement,isAffixSubtle:!1})})]},a.id)})})]})})})};var B,D,E;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const rowSpans = calculateRowSpans(razorpayData.nodes, 'merchant');
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto">
      <TableComponent data={razorpayData} showBorderedCells>
        {tableData => <>
            {headers}
            <TableBody>
              {tableData.map((item, index) => {
            const spanInfo = rowSpans[index];
            return <TableRow key={item.id} item={item}>
                    {spanInfo.shouldSpan && <TableCell gridRowStart={index + 2} gridRowEnd={index + 2 + spanInfo.rowSpan}>
                        {item.merchant}
                      </TableCell>}
                    <TableCell>{item.method}</TableCell>
                    <TableCell>
                      <Amount value={item.amount} isAffixSubtle={false} />
                    </TableCell>
                    <TableCell>
                      <Amount value={item.fee} isAffixSubtle={false} />
                    </TableCell>
                    <TableCell>
                      <Amount value={item.gst} isAffixSubtle={false} />
                    </TableCell>
                    <TableCell>
                      <Amount value={item.settlement} isAffixSubtle={false} />
                    </TableCell>
                  </TableRow>;
          })}
            </TableBody>
          </>}
      </TableComponent>
    </Box>;
}`,...(E=(D=C.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var z,I,H;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto">
      <TableComponent data={razorpayData} showBorderedCells>
        {tableData => <>
            {headers}
            <TableBody>
              <TableRow item={tableData[0]}>
                <TableCell gridColumnStart={1} gridColumnEnd={7}>
                  Transaction Summary - Total: {razorpayData.nodes.length} transactions processed
                </TableCell>
              </TableRow>
              {tableData.map((item, index) => <TableRow key={index} item={item}>
                  <TableCell>{item?.merchant}</TableCell>
                  <TableCell>{item?.method}</TableCell>
                  <TableCell>
                    <Amount value={item?.amount} isAffixSubtle={false} />
                  </TableCell>
                  <TableCell>
                    <Amount value={item?.fee} isAffixSubtle={false} />
                  </TableCell>
                  <TableCell>
                    <Amount value={item?.gst} isAffixSubtle={false} />
                  </TableCell>
                  <TableCell>
                    <Amount value={item?.settlement} isAffixSubtle={false} />
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </>}
      </TableComponent>
    </Box>;
}`,...(H=(I=p.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var N,W,_;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto">
      <TableComponent data={razorpayData} showBorderedCells>
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell>Merchant</TableHeaderCell>
                <TableHeaderCell>Method</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell gridColumnStart={4} gridColumnEnd={7}>
                  Charge Breakup
                </TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              {tableData.map((item, index) => <TableRow key={index} item={item}>
                  <TableCell>{item?.merchant}</TableCell>
                  <TableCell>{item?.method}</TableCell>
                  <TableCell>
                    <Amount value={item?.amount} isAffixSubtle={false} />
                  </TableCell>
                  <TableCell>
                    <Amount value={item?.fee} isAffixSubtle={false} />
                  </TableCell>
                  <TableCell>
                    <Amount value={item?.gst} isAffixSubtle={false} />
                  </TableCell>
                  <TableCell>
                    <Amount value={item?.settlement} isAffixSubtle={false} />
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </>}
      </TableComponent>
    </Box>;
}`,...(_=(W=T.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var M,O,P;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const grouped = groupBy(razorpayData.nodes, 'merchant');
  const totalSettlement = razorpayData.nodes.reduce((sum, item) => sum + item.settlement, 0);
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto">
      <TableComponent data={razorpayData} showBorderedCells>
        {tableData => <>
            {headers}
            <TableBody>
              {tableData.map((item, index) => <TableRow key={index} item={item}>
                  <TableCell>{item?.merchant}</TableCell>
                  <TableCell>{item?.method}</TableCell>
                  <TableCell>
                    <Amount value={item?.amount} isAffixSubtle={false} />
                  </TableCell>
                  <TableCell>
                    <Amount value={item?.fee} isAffixSubtle={false} />
                  </TableCell>
                  <TableCell>
                    <Amount value={item?.gst} isAffixSubtle={false} />
                  </TableCell>
                  <TableCell>
                    <Amount value={item?.settlement} isAffixSubtle={false} />
                  </TableCell>
                </TableRow>)}
            </TableBody>
            <TableFooter>
              <TableFooterRow>
                <TableFooterCell gridColumnStart={1} gridColumnEnd={6}>
                  <Text weight="regular">
                    Total Summary ({Object.keys(grouped).length} merchants,{' '}
                    {razorpayData.nodes.length} transactions)
                  </Text>
                </TableFooterCell>
                <TableFooterCell>
                  <Amount value={totalSettlement} isAffixSubtle={false} />
                </TableFooterCell>
              </TableFooterRow>
            </TableFooter>
          </>}
      </TableComponent>
    </Box>;
}`,...(P=(O=g.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var G,U,V;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const merchantSpans = calculateRowSpans(razorpayData.nodes, 'merchant');
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto">
      <TableComponent data={razorpayData} showBorderedCells>
        {tableData => <>
            {headers}
            <TableBody>
              {tableData.map((item, index) => {
            const spanInfo = merchantSpans[index];
            return <TableRow key={item.id} item={item}>
                    {spanInfo.shouldSpan && <TableCell gridRowStart={index + 2} gridRowEnd={index + 2 + spanInfo.rowSpan} gridColumnStart={index < 2 ? 1 : undefined} gridColumnEnd={index < 2 ? 3 : undefined}>
                        {item.merchant}
                      </TableCell>}
                    {index >= 2 && <TableCell>{item?.method}</TableCell>}
                    <TableCell gridColumnStart={spanInfo.shouldSpan ? 3 : 1}>
                      <Amount value={item.amount} isAffixSubtle={false} />
                    </TableCell>
                    <TableCell>
                      <Amount value={item.fee} isAffixSubtle={false} />
                    </TableCell>
                    <TableCell>
                      <Amount value={item.gst} isAffixSubtle={false} />
                    </TableCell>
                    <TableCell>
                      <Amount value={item.settlement} isAffixSubtle={false} />
                    </TableCell>
                  </TableRow>;
          })}
            </TableBody>
          </>}
      </TableComponent>
    </Box>;
}`,...(V=(U=S.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto">
      <TableComponent data={razorpayData} showBorderedCells selectionType="multiple" onSelectionChange={({
      selectedIds
    }) => console.log('Selected:', selectedIds)}>
        {tableData => <>
            {headers}
            <TableBody>
              {tableData.map((item, index) => <TableRow key={index} item={item}>
                  <TableCell>{item.merchant}</TableCell>
                  <TableCell>{item.method}</TableCell>
                  <TableCell>
                    <Amount value={item.amount} isAffixSubtle={false} />
                  </TableCell>
                  <TableCell gridColumnStart={5} gridColumnEnd={7}>
                    <Amount value={Number(item.fee) + Number(item.gst)} isAffixSubtle={false} />
                  </TableCell>
                  <TableCell>
                    <Amount value={Number(item.settlement)} isAffixSubtle={false} />
                  </TableCell>
                </TableRow>)}
            </TableBody>
            <TableFooter>
              <TableFooterRow>
                <TableFooterCell gridColumnStart={1} gridColumnEnd={7}>
                  <Text weight="regular">Summary</Text>
                </TableFooterCell>
                <TableFooterCell>
                  <Amount value={razorpayData.nodes.reduce((sum, item) => sum + item.settlement, 0)} isAffixSubtle={false} />
                </TableFooterCell>
              </TableFooterRow>
            </TableFooter>
          </>}
      </TableComponent>
    </Box>;
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,q,J;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto">
      <TableComponent data={razorpayData} showBorderedCells isHeaderSticky isFooterSticky isFirstColumnSticky height="400px">
        {tableData => <>
            {headers}
            <TableBody>
              {tableData.map((item, index) => <TableRow key={index} item={item}>
                  <TableCell>{item.merchant}</TableCell>
                  <TableCell>{item.method}</TableCell>
                  <TableCell>
                    <Amount value={item.amount} isAffixSubtle={false} />
                  </TableCell>
                  <TableCell gridColumnStart={4} gridColumnEnd={6}>
                    <Amount value={Number(item.fee) + Number(item.gst)} isAffixSubtle={false} />
                  </TableCell>
                  <TableCell>
                    <Amount value={Number(item.settlement)} isAffixSubtle={false} />
                  </TableCell>
                </TableRow>)}
            </TableBody>
            <TableFooter>
              <TableFooterRow>
                <TableFooterCell gridColumnStart={1} gridColumnEnd={3}>
                  <Text weight="regular">Summary</Text>
                </TableFooterCell>
                <TableFooterCell>
                  <Amount value={razorpayData.nodes.reduce((sum, item) => sum + item.amount, 0)} isAffixSubtle={false} />
                </TableFooterCell>
                <TableFooterCell gridColumnStart={4} gridColumnEnd={6}>
                  <Amount value={razorpayData.nodes.reduce((sum, item) => sum + item.fee, 0)} isAffixSubtle={false} />
                </TableFooterCell>
                <TableFooterCell>
                  <Amount value={razorpayData.nodes.reduce((sum, item) => sum + item.settlement, 0)} isAffixSubtle={false} />
                </TableFooterCell>
              </TableFooterRow>
            </TableFooter>
          </>}
      </TableComponent>
    </Box>;
}`,...(J=(q=A.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var L,Q,K;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const merchantSpans = calculateRowSpans(razorpayData.nodes, 'merchant');
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto">
      <TableComponent data={razorpayData} showBorderedCells isHeaderSticky isFooterSticky isFirstColumnSticky height="400px">
        {tableData => <>
            {headers}
            <TableBody>
              {tableData.map((item, index) => {
            const spanInfo = merchantSpans[index];
            return <TableRow key={item.id} item={item}>
                    {spanInfo.shouldSpan && <TableCell gridRowStart={index + 2} gridRowEnd={index + 2 + spanInfo.rowSpan}>
                        {item.merchant}
                      </TableCell>}
                    <TableCell>{item.method}</TableCell>
                    <TableCell>
                      <Amount value={item.amount} isAffixSubtle={false} />
                    </TableCell>
                    <TableCell>
                      <Amount value={item.fee} isAffixSubtle={false} />
                    </TableCell>
                    <TableCell>
                      <Amount value={item.gst} isAffixSubtle={false} />
                    </TableCell>
                    <TableCell>
                      <Amount value={item.settlement} isAffixSubtle={false} />
                    </TableCell>
                  </TableRow>;
          })}
            </TableBody>
            <TableFooter>
              <TableFooterRow>
                <TableFooterCell>
                  <Text weight="regular">Summary</Text>
                </TableFooterCell>
                <TableFooterCell>
                  <Text weight="regular">Items: {razorpayData.nodes.length}</Text>
                </TableFooterCell>
                <TableFooterCell>
                  <Amount value={razorpayData.nodes.reduce((sum, item) => sum + item.amount, 0)} isAffixSubtle={false} />
                </TableFooterCell>
                <TableFooterCell>
                  <Amount value={razorpayData.nodes.reduce((sum, item) => sum + item.fee, 0)} isAffixSubtle={false} />
                </TableFooterCell>
                <TableFooterCell>
                  <Amount value={razorpayData.nodes.reduce((sum, item) => sum + item.gst, 0)} isAffixSubtle={false} />
                </TableFooterCell>
                <TableFooterCell>
                  <Amount value={razorpayData.nodes.reduce((sum, item) => sum + item.settlement, 0)} isAffixSubtle={false} />
                </TableFooterCell>
              </TableFooterRow>
            </TableFooter>
          </>}
      </TableComponent>
    </Box>;
}`,...(K=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};var ee,le,ae;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const merchantSpans = calculateRowSpans(razorpayData.nodes, 'merchant');
  return <Box backgroundColor="surface.background.gray.intense" padding="spacing.5" overflow="auto">
      <TableComponent data={razorpayData} showBorderedCells isFirstColumnSticky isHeaderSticky isFooterSticky>
        {tableData => <>
            {headers}
            <TableBody>
              {tableData.map((item, index) => {
            const spanInfo = merchantSpans[index];
            return <TableRow key={item.id} item={item}>
                    {spanInfo.shouldSpan && <TableCell gridRowStart={index + 2} gridRowEnd={index + 2 + spanInfo.rowSpan} gridColumnStart={index < 2 ? 1 : undefined} gridColumnEnd={index < 2 ? 3 : undefined}>
                        {item.merchant}
                      </TableCell>}
                    {index >= 2 && <TableCell>{item?.method}</TableCell>}
                    <TableCell gridColumnStart={spanInfo.shouldSpan ? 3 : 1}>
                      <Amount value={item.amount} isAffixSubtle={false} />
                    </TableCell>
                    <TableCell>
                      <Amount value={item.fee} isAffixSubtle={false} />
                    </TableCell>
                    <TableCell>
                      <Amount value={item.gst} isAffixSubtle={false} />
                    </TableCell>
                    <TableCell>
                      <Amount value={item.settlement} isAffixSubtle={false} />
                    </TableCell>
                  </TableRow>;
          })}
            </TableBody>
          </>}
      </TableComponent>
    </Box>;
}`,...(ae=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};const he=["RowSpan","ColumnSpan","HeaderSpan","FooterSpan","ColumnRowSpan","ColumnSpanWithSelection","ColumnSpanWithStickyFirstColumn","RowSpanWithStickyFirstColumn","RowColumnSpanWithStickyFirstColumn"];export{S as ColumnRowSpan,p as ColumnSpan,j as ColumnSpanWithSelection,A as ColumnSpanWithStickyFirstColumn,g as FooterSpan,T as HeaderSpan,y as RowColumnSpanWithStickyFirstColumn,C as RowSpan,w as RowSpanWithStickyFirstColumn,he as __namedExportsOrder,xe as default};
