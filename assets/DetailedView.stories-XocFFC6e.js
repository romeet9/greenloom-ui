import{iV as oe,j as e,H as f,r as y,B as r,aI as N,i7 as L,i8 as E,ii as G,hH as ue,ij as Q,ih as ge,E as pe,aJ as U,jr as p,T as u,js as t,jt as n,ju as a,a8 as d,aK as re,j9 as w,j8 as D,F as v,N as fe,n as m,b1 as k,j7 as B,C as b,l as h,g0 as V,I as se,ac as z,a5 as le,bU as de,id as me,O as ce,j6 as xe,iW as he,iX as ye,iY as T,iZ as be,i_ as je,i$ as H,k0 as Ve,k1 as Te,k2 as C,k3 as He,jG as Ce,jH as we,hX as De,e3 as Be,S as ve,e as F,j_ as O,aT as Pe,aW as Ae,aV as Ke}from"./iframe-C1qQ09LF.js";import{S as Re}from"./StoryPageWrapper-CS0_5maI.js";import{g as Se}from"./storybookArgTypes-DFfQV31s.js";import{S as ze}from"./Sandbox.web-B2xP21Qp.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const ke=`import React from 'react';
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  Box,
  IconButton,
  MoreHorizontalIcon,
  Table as TableComponent,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableToolbar,
  TableToolbarActions,
  TablePagination,
  Code,
  Amount,
  Badge,
  Button,
  StepGroup,
  StepItem,
  StepItemIndicator,
  Collapsible,
  CollapsibleBody,
  CollapsibleLink,
  Divider,
  Link,
  CopyIcon,
  DownloadIcon,
  Text,
} from '@greenloom/loom/components';
import type { TableData, BoxProps } from '@greenloom/loom/components';

const nodes: Item[] = [
  ...Array.from({ length: 20 }, (_, i) => ({
    id: (i + 1).toString(),
    paymentId: \`rzp\${Math.floor(Math.random() * 1000000)}\`,
    amount: Number((Math.random() * 10000).toFixed(2)),
    status: ['Completed', 'Pending', 'Failed'][Math.floor(Math.random() * 3)],
    date: new Date(
      2021,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    ),
    type: ['Payout', 'Refund'][Math.floor(Math.random() * 2)],
    method: ['Bank Transfer', 'Credit Card', 'PayPal'][
      Math.floor(Math.random() * 3)
    ],
    bank: ['HDFC', 'ICICI', 'SBI'][Math.floor(Math.random() * 3)],
    account: Math.floor(Math.random() * 1000000000).toString(),
    name: [
      'Anurag Hazra',
      'Gaurav Tewari',
      'Kamlesh Chandnani',
      'Saurav Rastogi',
      'Rama Krushna Behera',
      'Chaitanya Deorukhkar',
      'Saurabh Daware',
      'Vinay Chopra',
      'Kajol Nigam',
    ][Math.floor(Math.random() * 9)],
  })),
];

type Item = {
  id: string;
  paymentId: string;
  amount: number;
  status: string;
  date: Date;
  type: string;
  method: string;
  bank: string;
  account: string;
  name: string;
};

const data: TableData<Item> = {
  nodes,
};

const TableExample = ({ onRowClick }) => {
  return (
    <TableComponent
      data={data}
      selectionType="none"
      toolbar={
        <TableToolbar
          title="Showing 1-10 [Items]"
          selectedTitle="Showing 1-10 [Items]"
        >
          <TableToolbarActions>
            <Button variant="secondary" marginRight="spacing.2">
              Export
            </Button>
            <Button>Refund</Button>
          </TableToolbarActions>
        </TableToolbar>
      }
      sortFunctions={{
        ID: (array) => array.sort((a, b) => Number(a.id) - Number(b.id)),
        AMOUNT: (array) => array.sort((a, b) => a.amount - b.amount),
        PAYMENT_ID: (array) =>
          array.sort((a, b) => a.paymentId.localeCompare(b.paymentId)),
        DATE: (array) =>
          array.sort((a, b) => a.date.getTime() - b.date.getTime()),
        STATUS: (array) =>
          array.sort((a, b) => a.status.localeCompare(b.status)),
      }}
      pagination={
        <TablePagination
          onPageChange={console.log}
          defaultPageSize={10}
          onPageSizeChange={console.log}
          showPageSizePicker
          showPageNumberSelector
        />
      }
    >
      {(tableData) => (
        <>
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderCell headerKey="PAYMENT_ID">ID</TableHeaderCell>
              <TableHeaderCell headerKey="NAME">Account Holder</TableHeaderCell>
              <TableHeaderCell headerKey="AMOUNT">Amount</TableHeaderCell>
              <TableHeaderCell headerKey="DATE">Date</TableHeaderCell>
              <TableHeaderCell headerKey="METHOD">Method</TableHeaderCell>
              <TableHeaderCell headerKey="STATUS">Status</TableHeaderCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
            {tableData.map((tableItem, index) => (
              <TableRow key={index} item={tableItem} onClick={onRowClick}>
                <TableCell>
                  <Code size="medium">{tableItem.paymentId}</Code>
                </TableCell>
                <TableCell>{tableItem.name}</TableCell>
                <TableCell>
                  <Amount value={tableItem.amount} />
                </TableCell>
                <TableCell>
                  {tableItem.date?.toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </TableCell>
                <TableCell>{tableItem.method}</TableCell>
                <TableCell>
                  <Badge
                    size="medium"
                    color={
                      tableItem.status === 'Completed'
                        ? 'positive'
                        : tableItem.status === 'Pending'
                        ? 'notice'
                        : tableItem.status === 'Failed'
                        ? 'negative'
                        : 'primary'
                    }
                  >
                    {tableItem.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </>
      )}
    </TableComponent>
  );
};

const Timeline = ({ status }: { status: string }): React.ReactElement => {
  return (
    <StepGroup orientation="vertical" size="medium">
      <StepItem
        title="Payment Initiated"
        stepProgress={
          ['Completed', 'Pending', 'Failed'].includes(status) ? 'full' : 'none'
        }
        marker={
          <StepItemIndicator
            color={
              ['Completed', 'Pending', 'Failed'].includes(status)
                ? 'positive'
                : 'neutral'
            }
          />
        }
      />
      <Collapsible direction="top">
        <CollapsibleLink>Show More</CollapsibleLink>
        <CollapsibleBody>
          <StepItem
            title="Payment Processing"
            stepProgress={
              ['Completed', 'Failed'].includes(status) ? 'full' : 'start'
            }
            marker={
              <StepItemIndicator
                color={
                  ['Completed', 'Failed'].includes(status)
                    ? 'positive'
                    : 'notice'
                }
              />
            }
          />
          <StepItem
            title={status === 'Failed' ? 'Payment Failed' : 'Payment Completed'}
            stepProgress={
              ['Completed', 'Failed'].includes(status) ? 'full' : 'none'
            }
            marker={
              <StepItemIndicator
                color={
                  status === 'Failed'
                    ? 'negative'
                    : status === 'Completed'
                    ? 'positive'
                    : 'neutral'
                }
              />
            }
          />
        </CollapsibleBody>
      </Collapsible>
    </StepGroup>
  );
};

type KeyValueGridProps = {
  children: React.ReactNode;
  padding?: BoxProps['padding'];
};

type KeyValueItemProps = {
  label: string;
  children: React.ReactNode;
};

const KeyValueItem = ({
  label,
  children,
}: KeyValueItemProps): React.ReactElement => {
  return (
    <>
      <Text variant="body" size="small" color="surface.text.gray.muted">
        {label}
      </Text>
      <Box textAlign="right">{children}</Box>
    </>
  );
};

const KeyValueGrid = ({
  children,
}: KeyValueGridProps): React.ReactElement => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="160px 1fr"
      gap="spacing.3"
    >
      {children}
    </Box>
  );
};

const DetailedViewHighlight = ({ title, value }) => {
  return (
    <Box display="flex">
      <Divider thickness="thicker" orientation="vertical" />
      <Box paddingX="spacing.3">
        <Text size="xsmall" color="surface.text.gray.muted" weight="semibold">
          {title}
        </Text>
        <Text size="medium">{value}</Text>
      </Box>
    </Box>
  );
};

const DetailedViewDrawerHeaderSlot = ({
  heading,
  badges,
  highlights,
  actions,
}) => {
  return (
    <>
      <Box marginTop="spacing.6" textAlign="center">
        {heading}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        gap="spacing.4"
        marginTop="spacing.4"
      >
        {badges}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="spacing.4"
        marginTop="spacing.6"
        paddingX="spacing.4"
      >
        {highlights}
      </Box>
      <Box
        marginTop="spacing.6"
        display="flex"
        gap="spacing.3"
        textAlign="center"
      >
        {actions}
      </Box>
    </>
  );
};

const DetailedViewDrawer = ({ isOpen, onDismiss, onUnmount, selectedItem }) => {
  return (
    <Drawer isOpen={isOpen} onDismiss={onDismiss} showOverlay={false} onUnmount={onUnmount}>
      <DrawerHeader
        title="Settlements"
        color={
          selectedItem?.status === 'Completed'
            ? 'positive'
            : selectedItem?.status === 'Pending'
            ? 'notice'
            : 'negative'
        }
        trailing={
          <IconButton
            icon={MoreHorizontalIcon}
            accessibilityLabel="Options"
            onClick={() => console.log('Options Clicked')}
            size="large"
          />
        }
      >
        <DetailedViewDrawerHeaderSlot
          heading={
            <Amount
              value={selectedItem?.amount ?? 0}
              currency="INR"
              size="2xlarge"
              type="heading"
              weight="semibold"
              suffix="decimals"
            />
          }
          badges={
            <>
              <Badge
                size="medium"
                color={
                  selectedItem?.status === 'Completed'
                    ? 'positive'
                    : selectedItem?.status === 'Pending'
                    ? 'notice'
                    : 'negative'
                }
                emphasis="intense"
              >
                {selectedItem?.status ?? 'Pending'}
              </Badge>
            </>
          }
          highlights={
            <>
              <DetailedViewHighlight
                title="Payment ID"
                value={selectedItem?.paymentId}
              />
              <DetailedViewHighlight
                title="Date"
                value={selectedItem?.date?.toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              />
            </>
          }
          actions={
            <Button
              variant="secondary"
              color="primary"
              size="small"
              icon={DownloadIcon}
              isFullWidth
            >
              Download Report
            </Button>
          }
        />
      </DrawerHeader>
      <DrawerBody>
        <Box display="flex" flexDirection="column" gap="spacing.6">
          <Box>
            <Text
              variant="body"
              size="medium"
              weight="semibold"
              marginBottom="spacing.4"
            >
              Timeline
            </Text>
            <Timeline status={selectedItem?.status ?? 'Pending'} />
          </Box>
          <Divider />
          <Box>
            <Text
              variant="body"
              size="medium"
              weight="semibold"
              marginBottom="spacing.4"
            >
              Details
            </Text>
            <KeyValueGrid>
              {/* Amount */}
              <KeyValueItem label="Amount">
                <Amount value={selectedItem?.amount ?? 0} />
              </KeyValueItem>

              {/* Amount Paid */}
              <KeyValueItem label="Amount Paid">
                <Amount value={0} />
              </KeyValueItem>

              {/* Payment Link ID */}
              <KeyValueItem label="Payment Link ID">
                <Box
                  display="flex"
                  gap="spacing.2"
                  alignItems="center"
                  justifyContent="right"
                >
                  <Code size="small">{selectedItem?.paymentId ?? 'NA'}</Code>
                  <Link variant="button" size="small" icon={CopyIcon} />
                </Box>
              </KeyValueItem>

              {/* Reference ID */}
              <KeyValueItem label="Reference ID">
                <Text variant="body" size="medium">
                  NA
                </Text>
              </KeyValueItem>

              {/* Payment For */}
              <KeyValueItem label="Payment for">
                <Text variant="body" size="medium">
                  {selectedItem?.type}
                </Text>
              </KeyValueItem>

              {/* Partial Payment */}
              <KeyValueItem label="Partial Payment">
                <Text variant="body" size="medium">
                  Enabled
                </Text>
              </KeyValueItem>

              {/* Reminders */}
              <KeyValueItem label="Reminders">
                <Text variant="body" size="medium">
                  Send auto reminders
                </Text>
              </KeyValueItem>

              {/* Created By */}
              <KeyValueItem label="Created By">
                <Text variant="body" size="medium">
                  {selectedItem?.name}
                </Text>
              </KeyValueItem>
            </KeyValueGrid>
          </Box>
        </Box>
      </DrawerBody>
    </Drawer>
  );
};

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleRowClick = ({ item }) => {
    setSelectedItem(item);
    setIsDrawerOpen(true);
  };

  return (
    <Box>
      <TableExample onRowClick={handleRowClick} />
      <DetailedViewDrawer
        isOpen={isDrawerOpen}
        onDismiss={() => setIsDrawerOpen(false)}
        onUnmount={() => setSelectedItem(null)}
        selectedItem={selectedItem}
      />
    </Box>
  );
};

export default App;
`,$e={title:"Patterns/DetailedView",component:oe,args:{selectionType:"none",rowDensity:"normal"},tags:["autodocs"],argTypes:{...Se(),data:{control:{disable:!0}},sortFunctions:{control:{disable:!0}},toolbar:{control:{disable:!0}},pagination:{control:{disable:!0}}},parameters:{docs:{page:()=>e.jsxs(Re,{componentDescription:"A DetailedView is a pattern that shows details of a transaction / user / entity in drawer in a defined format.",componentName:"DetailedView",children:[e.jsx(f,{size:"large",children:"Usage"}),e.jsx(ze,{editorHeight:500,children:ke})]})}}},Ie=()=>e.jsx(r,{children:e.jsx("svg",{width:"114",height:"114",viewBox:"0 0 114 114",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("g",{id:"svg8822",children:e.jsx("path",{id:"path3093",d:"M4.95654 4.95654V9.91306V14.8696V19.8261V24.7826V29.7392V34.6957V39.6522H9.91306H14.8696H19.8261H24.7826H29.7392H34.6957H39.6522V34.6957V29.7392V24.7826V19.8261V14.8696V9.91306V4.95654H34.6957H29.7392H24.7826H19.8261H14.8696H9.91306H4.95654ZM44.6087 4.95654V9.91306V14.8696H49.5652V9.91306H54.5218V4.95654H49.5652H44.6087ZM54.5218 9.91306V14.8696H59.4783V9.91306H54.5218ZM59.4783 14.8696V19.8261H64.4348H69.3913V14.8696V9.91306V4.95654H64.4348V9.91306V14.8696H59.4783ZM59.4783 19.8261H54.5218H49.5652H44.6087V24.7826H49.5652H54.5218V29.7392H49.5652V34.6957H54.5218V39.6522H59.4783V34.6957H64.4348V39.6522H59.4783V44.6087H54.5218V49.5652H59.4783H64.4348V54.5218H69.3913V49.5652V44.6087V39.6522V34.6957V29.7392H64.4348V24.7826H59.4783V19.8261ZM64.4348 54.5218H59.4783V59.4783H54.5218V64.4348V69.3913H59.4783V74.3479V79.3044H54.5218H49.5652V74.3479H54.5218V69.3913H49.5652V64.4348V59.4783H44.6087V54.5218H49.5652V59.4783H54.5218V54.5218V49.5652H49.5652H44.6087V44.6087H39.6522H34.6957H29.7392V49.5652H24.7826V54.5218H19.8261V49.5652H24.7826V44.6087H19.8261H14.8696V49.5652H9.91306V54.5218V59.4783V64.4348H14.8696V59.4783H19.8261H24.7826H29.7392V54.5218H34.6957V49.5652H39.6522V54.5218H34.6957V59.4783H39.6522V64.4348H34.6957V69.3913H39.6522H44.6087V74.3479V79.3044V84.2609H49.5652V89.2174H54.5218H59.4783H64.4348V94.1739H59.4783H54.5218H49.5652V89.2174H44.6087V94.1739V99.1305H49.5652V104.087H44.6087V109.044H49.5652H54.5218V104.087H59.4783V109.044H64.4348H69.3913H74.3479H79.3044V104.087H84.2609V109.044H89.2174H94.1739H99.1305V104.087H94.1739H89.2174V99.1305H84.2609V94.1739H79.3044V99.1305H74.3479H69.3913V104.087H64.4348V99.1305H69.3913V94.1739V89.2174V84.2609H74.3479V79.3044H69.3913H64.4348V74.3479H69.3913V69.3913V64.4348V59.4783H64.4348V54.5218ZM79.3044 94.1739V89.2174H74.3479V94.1739H79.3044ZM89.2174 99.1305H94.1739H99.1305V94.1739H94.1739H89.2174V99.1305ZM99.1305 94.1739H104.087V89.2174V84.2609V79.3044V74.3479H99.1305H94.1739H89.2174V69.3913H84.2609V74.3479H79.3044V79.3044V84.2609H84.2609V79.3044H89.2174V84.2609V89.2174H94.1739H99.1305V94.1739ZM84.2609 69.3913V64.4348H79.3044H74.3479V69.3913H79.3044H84.2609ZM89.2174 69.3913H94.1739V64.4348V59.4783V54.5218H99.1305V59.4783H104.087V64.4348H109.044V59.4783V54.5218H104.087V49.5652H109.044V44.6087H104.087H99.1305V49.5652H94.1739V44.6087H89.2174V49.5652H84.2609V54.5218H89.2174V59.4783V64.4348V69.3913ZM84.2609 54.5218H79.3044V59.4783H84.2609V54.5218ZM104.087 64.4348H99.1305V69.3913H104.087V64.4348ZM34.6957 64.4348V59.4783H29.7392V64.4348H34.6957ZM29.7392 64.4348H24.7826H19.8261H14.8696V69.3913H19.8261H24.7826H29.7392V64.4348ZM9.91306 64.4348H4.95654V69.3913H9.91306V64.4348ZM9.91306 49.5652V44.6087H4.95654V49.5652H9.91306ZM44.6087 44.6087H49.5652V39.6522V34.6957H44.6087V39.6522V44.6087ZM74.3479 4.95654V9.91306V14.8696V19.8261V24.7826V29.7392V34.6957V39.6522H79.3044H84.2609H89.2174H94.1739H99.1305H104.087H109.044V34.6957V29.7392V24.7826V19.8261V14.8696V9.91306V4.95654H104.087H99.1305H94.1739H89.2174H84.2609H79.3044H74.3479ZM9.91306 9.91306H14.8696H19.8261H24.7826H29.7392H34.6957V14.8696V19.8261V24.7826V29.7392V34.6957H29.7392H24.7826H19.8261H14.8696H9.91306V29.7392V24.7826V19.8261V14.8696V9.91306ZM79.3044 9.91306H84.2609H89.2174H94.1739H99.1305H104.087V14.8696V19.8261V24.7826V29.7392V34.6957H99.1305H94.1739H89.2174H84.2609H79.3044V29.7392V24.7826V19.8261V14.8696V9.91306ZM14.8696 14.8696V19.8261V24.7826V29.7392H19.8261H24.7826H29.7392V24.7826V19.8261V14.8696H24.7826H19.8261H14.8696ZM84.2609 14.8696V19.8261V24.7826V29.7392H89.2174H94.1739H99.1305V24.7826V19.8261V14.8696H94.1739H89.2174H84.2609ZM74.3479 44.6087V49.5652H79.3044V44.6087H74.3479ZM4.95654 74.3479V79.3044V84.2609V89.2174V94.1739V99.1305V104.087V109.044H9.91306H14.8696H19.8261H24.7826H29.7392H34.6957H39.6522V104.087V99.1305V94.1739V89.2174V84.2609V79.3044V74.3479H34.6957H29.7392H24.7826H19.8261H14.8696H9.91306H4.95654ZM9.91306 79.3044H14.8696H19.8261H24.7826H29.7392H34.6957V84.2609V89.2174V94.1739V99.1305V104.087H29.7392H24.7826H19.8261H14.8696H9.91306V99.1305V94.1739V89.2174V84.2609V79.3044ZM14.8696 84.2609V89.2174V94.1739V99.1305H19.8261H24.7826H29.7392V94.1739V89.2174V84.2609H24.7826H19.8261H14.8696ZM104.087 99.1305V104.087H109.044V99.1305H104.087Z",fill:"black"})})})}),M=({status:l})=>e.jsxs(ve,{orientation:"vertical",size:"medium",children:[e.jsx(F,{title:"Payment Initiated",stepProgress:["Completed","Pending","Failed"].includes(l)?"full":"none",marker:e.jsx(O,{color:["Completed","Pending","Failed"].includes(l)?"positive":"neutral"})}),e.jsxs(Pe,{direction:"top",children:[e.jsx(Ae,{children:"Show More"}),e.jsxs(Ke,{children:[e.jsx(F,{title:"Payment Processing",stepProgress:["Completed","Failed"].includes(l)?"full":"start",marker:e.jsx(O,{color:["Completed","Failed"].includes(l)?"positive":"notice"})}),e.jsx(F,{title:l==="Failed"?"Payment Failed":"Payment Completed",stepProgress:["Completed","Failed"].includes(l)?"full":"none",marker:e.jsx(O,{color:l==="Failed"?"negative":l==="Completed"?"positive":"neutral"})})]})]})]}),Me=[...Array.from({length:20},(l,x)=>({id:(x+1).toString(),paymentId:`rzp${Math.floor(Math.random()*1e6)}`,amount:Number((Math.random()*1e4).toFixed(2)),status:["Completed","Pending","Failed"][Math.floor(Math.random()*3)],date:new Date(2021,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1),type:["Payout","Refund"][Math.floor(Math.random()*2)],method:["Bank Transfer","Credit Card","PayPal"][Math.floor(Math.random()*3)],bank:["HDFC","ICICI","SBI"][Math.floor(Math.random()*3)],account:Math.floor(Math.random()*1e9).toString(),name:["Anurag Hazra","Gaurav Tewari","Kamlesh Chandnani","Saurav Rastogi","Rama Krushna Behera","Chaitanya Deorukhkar","Saurabh Daware","Vinay Chopra","Kajol Nigam"][Math.floor(Math.random()*9)]}))],Fe={nodes:Me},Oe=({...l})=>{var P;const[x,I]=y.useState(!1),[o,j]=y.useState(null);return e.jsxs(r,{overflow:"auto",minHeight:"400px",children:[e.jsx(oe,{data:Fe,selectionType:"none",toolbar:e.jsx(Ce,{title:"Showing 1-10 [Items]",selectedTitle:"Showing 1-10 [Items]",children:e.jsxs(we,{children:[e.jsx(m,{variant:"secondary",marginRight:"spacing.2",children:"Export"}),e.jsx(m,{children:"Refund"})]})}),sortFunctions:{ID:c=>c.sort((s,g)=>Number(s.id)-Number(g.id)),AMOUNT:c=>c.sort((s,g)=>s.amount-g.amount),PAYMENT_ID:c=>c.sort((s,g)=>s.paymentId.localeCompare(g.paymentId)),DATE:c=>c.sort((s,g)=>s.date.getTime()-g.date.getTime()),STATUS:c=>c.sort((s,g)=>s.status.localeCompare(g.status))},pagination:e.jsx(He,{onPageChange:console.log,defaultPageSize:10,onPageSizeChange:console.log,showPageSizePicker:!0,showPageNumberSelector:!0}),children:c=>e.jsxs(e.Fragment,{children:[e.jsx(he,{children:e.jsxs(ye,{children:[e.jsx(T,{headerKey:"PAYMENT_ID",children:"ID"}),e.jsx(T,{headerKey:"NAME",children:"Account Holder"}),e.jsx(T,{headerKey:"AMOUNT",children:"Amount"}),e.jsx(T,{headerKey:"DATE",children:"Date"}),e.jsx(T,{headerKey:"METHOD",children:"Method"}),e.jsx(T,{headerKey:"STATUS",children:"Status"})]})}),e.jsx(be,{children:c.map((s,g)=>{var W;return e.jsxs(je,{item:s,onClick:()=>{j(s),I(!0)},children:[e.jsx(H,{children:e.jsx(b,{size:"medium",children:s.paymentId})}),e.jsx(H,{children:s.name}),e.jsx(H,{children:e.jsx(d,{value:s.amount})}),e.jsx(H,{children:(W=s.date)==null?void 0:W.toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"})}),e.jsx(H,{children:s.method}),e.jsx(H,{children:e.jsx(v,{size:"medium",color:s.status==="Completed"?"positive":s.status==="Pending"?"notice":s.status==="Failed"?"negative":"primary",children:s.status})})]},g)})}),e.jsx(Ve,{children:e.jsxs(Te,{children:[e.jsx(C,{children:"Total"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:"-"}),e.jsx(C,{children:e.jsx(d,{value:10})})]})})]})}),e.jsxs(w,{showOverlay:!1,...l,isOpen:x,onDismiss:()=>{I(!1)},onUnmount:()=>{j(null)},children:[e.jsxs(D,{color:(o==null?void 0:o.status)==="Completed"?"positive":(o==null?void 0:o.status)==="Pending"?"notice":"negative",title:"Settlements",trailing:e.jsx(De,{icon:Be,accessibilityLabel:"Options",onClick:()=>console.log("Options Clicked"),size:"large"}),showDivider:!1,children:[e.jsx(r,{marginTop:"spacing.6",textAlign:"center",children:e.jsx(d,{value:(o==null?void 0:o.amount)??0,currency:"INR",size:"2xlarge",type:"heading",weight:"semibold",suffix:"decimals"})}),e.jsx(r,{display:"flex",justifyContent:"center",gap:"spacing.4",marginTop:"spacing.4",children:e.jsx(v,{size:"medium",color:(o==null?void 0:o.status)==="Completed"?"positive":(o==null?void 0:o.status)==="Pending"?"notice":"negative",emphasis:"intense",children:(o==null?void 0:o.status)??"Pending"})}),e.jsx(r,{display:"flex",alignItems:"center",justifyContent:"center",gap:"spacing.4",marginTop:"spacing.6",paddingX:"spacing.4",children:e.jsxs(p,{itemOrientation:"vertical",isHighlighted:!0,children:[e.jsxs(t,{children:[e.jsx(n,{children:"Payment ID"}),e.jsx(a,{children:o==null?void 0:o.paymentId})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Date"}),e.jsx(a,{children:(P=o==null?void 0:o.date)==null?void 0:P.toLocaleDateString("en-IN",{year:"numeric",month:"long",day:"numeric"})})]})]})}),e.jsx(r,{marginTop:"spacing.6",textAlign:"center",children:e.jsx(m,{variant:"secondary",color:"primary",size:"small",icon:k,isFullWidth:!0,children:"Download Report"})})]}),e.jsx(B,{children:e.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing.6",children:[e.jsxs(r,{children:[e.jsx(u,{variant:"body",size:"medium",weight:"semibold",marginBottom:"spacing.4",children:"Timeline"}),e.jsx(M,{status:(o==null?void 0:o.status)??"Pending"})]}),e.jsx(re,{}),e.jsxs(r,{children:[e.jsx(u,{variant:"body",size:"medium",weight:"semibold",marginBottom:"spacing.4",children:"Details"}),e.jsxs(p,{gridTemplateColumns:"1fr 1fr",children:[e.jsxs(t,{children:[e.jsx(n,{children:"Amount"}),e.jsx(a,{children:e.jsx(d,{value:(o==null?void 0:o.amount)??0,weight:"semibold",color:"surface.text.gray.subtle"})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Amount Paid"}),e.jsx(a,{children:e.jsx(d,{value:0,weight:"semibold",color:"surface.text.gray.subtle"})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Payment Link ID"}),e.jsx(a,{trailing:e.jsx(h,{variant:"button",size:"medium",icon:V}),children:e.jsx(b,{size:"medium",weight:"bold",children:(o==null?void 0:o.paymentId)??"NA"})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Reference ID"}),e.jsx(a,{children:"NA"})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Payment for"}),e.jsx(a,{children:o==null?void 0:o.type})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Partial Payment"}),e.jsx(a,{children:"Enabled"})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Reminders"}),e.jsx(a,{children:"Send auto reminders"})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Created By"}),e.jsx(a,{children:o==null?void 0:o.name})]})]})]})]})})]})]})},A=Oe.bind({}),i={amount:3120,amountPaid:3120,paymentId:"pay_MK7DGqwYXEwx9Q",referenceId:"ref_MK7DGqwYXEwx9Q",type:"Settlement",partialPayment:"Enabled",reminders:"Send auto reminders",createdBy:"Saurabh Daware",utr:"UTR123456789",bankAccount:"1234567890",ifsc:"HDFC0001234"},Ne=({...l})=>{const[x,I]=y.useState(!1);return e.jsxs(r,{children:[e.jsxs(N,{width:{base:"100%",m:"500px"},children:[e.jsxs(L,{children:[e.jsx(E,{prefix:e.jsx(G,{icon:ue}),title:"Transaction Details"}),e.jsx(Q,{visual:e.jsx(ge,{variant:"button",onClick:()=>{I(!0)},icon:pe,iconPosition:"right",children:"View Details"})})]}),e.jsx(U,{children:e.jsxs(p,{valueAlign:"right",children:[e.jsx(u,{gridColumn:"span 2",variant:"body",size:"medium",children:"Gross Settlements"}),e.jsxs(t,{children:[e.jsx(n,{children:"Payment"}),e.jsx(a,{children:e.jsx(d,{value:i.amount,currency:"INR",weight:"semibold",color:"surface.text.gray.subtle"})})]}),e.jsx(u,{variant:"body",size:"medium",marginTop:"spacing.4",gridColumn:"span 2",children:"Deductions"}),e.jsxs(t,{children:[e.jsx(n,{children:"Tax"}),e.jsx(a,{children:e.jsx(d,{value:260,currency:"INR",weight:"semibold",color:"surface.text.gray.subtle"})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Fee"}),e.jsx(a,{children:e.jsx(d,{value:260,currency:"INR",weight:"semibold",color:"surface.text.gray.subtle"})})]}),e.jsx(re,{gridColumn:"span 2"}),e.jsxs(t,{children:[e.jsx(n,{children:"Net Settlement amount"}),e.jsx(a,{children:"₹2,600"})]})]})})]}),e.jsxs(w,{...l,isOpen:x,onDismiss:()=>{I(!1)},children:[e.jsxs(D,{color:"positive",title:"Settlements",trailing:e.jsx(m,{size:"medium",icon:k}),showDivider:!1,children:[e.jsx(r,{marginTop:"spacing.6",textAlign:"center",children:e.jsx(d,{value:i==null?void 0:i.amount,currency:"INR",size:"2xlarge",type:"heading",weight:"semibold",color:"surface.text.gray.subtle",suffix:"decimals"})}),e.jsx(r,{display:"flex",justifyContent:"center",gap:"spacing.4",marginTop:"spacing.4",children:e.jsx(v,{icon:fe,size:"medium",color:"positive",emphasis:"intense",children:"Completed"})}),e.jsx(r,{display:"flex",alignItems:"center",justifyContent:"center",gap:"spacing.4",marginTop:"spacing.6",paddingX:"spacing.4",children:e.jsx(p,{itemOrientation:"vertical",isHighlighted:!0,children:e.jsxs(t,{children:[e.jsx(n,{children:"Payment ID"}),e.jsx(a,{children:i==null?void 0:i.paymentId})]})})}),e.jsx(u,{size:"small",marginTop:"spacing.6",textAlign:"center",color:"surface.text.gray.muted",children:"Settlement was completed on 24th April 2025"})]}),e.jsxs(B,{children:[e.jsx(f,{size:"small",weight:"semibold",children:"Timeline"}),e.jsx(M,{status:"Completed"}),e.jsx(f,{marginTop:"spacing.6",marginBottom:"spacing.4",size:"small",weight:"semibold",children:"Transaction Breakdown"}),e.jsxs(p,{gridTemplateColumns:"1fr 1fr",children:[e.jsxs(t,{children:[e.jsx(n,{children:"Amount"}),e.jsx(a,{children:e.jsx(d,{value:i.amount,currency:"INR",weight:"semibold",color:"surface.text.gray.subtle"})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Amount Paid"}),e.jsx(a,{children:e.jsx(d,{value:i.amountPaid,currency:"INR",weight:"semibold",color:"surface.text.gray.subtle"})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Payment Link ID"}),e.jsx(a,{trailing:e.jsx(h,{variant:"button",size:"medium",icon:V}),children:e.jsx(b,{size:"medium",weight:"bold",children:i.paymentId})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Reference ID"}),e.jsx(a,{children:i.referenceId})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Payment for"}),e.jsx(a,{children:i.type})]}),e.jsxs(t,{children:[e.jsx(n,{children:"UTR Number"}),e.jsx(a,{trailing:e.jsx(h,{variant:"button",size:"medium",icon:V}),children:e.jsx(b,{size:"medium",weight:"bold",children:i.utr})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Bank Account"}),e.jsx(a,{children:i.bankAccount})]}),e.jsxs(t,{children:[e.jsx(n,{children:"IFSC"}),e.jsx(a,{children:i.ifsc})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Partial Payment"}),e.jsx(a,{children:i.partialPayment})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Reminders"}),e.jsx(a,{children:i.reminders})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Created By"}),e.jsx(a,{children:i.createdBy})]})]})]})]})]})},K=Ne.bind({}),Le=({...l})=>{const[x,I]=y.useState(!1),[o,j]=y.useState(!1);return e.jsxs(r,{children:[e.jsx(m,{onClick:()=>I(!0),children:"Show QR Details"}),e.jsxs(w,{...l,isOpen:x,onDismiss:()=>{I(!1)},children:[e.jsxs(D,{color:"notice",title:"Payment QR Code",trailing:e.jsx(m,{size:"medium",icon:k}),showDivider:!1,children:[e.jsx(r,{marginTop:"spacing.6",textAlign:"center",children:e.jsx(d,{value:i==null?void 0:i.amount,currency:"INR",size:"2xlarge",type:"heading",weight:"semibold",color:"surface.text.gray.subtle",suffix:"decimals"})}),e.jsx(r,{display:"flex",justifyContent:"center",gap:"spacing.4",marginTop:"spacing.4",children:e.jsx(v,{icon:se,size:"medium",color:"notice",emphasis:"intense",children:"Pending"})}),e.jsx(r,{display:"flex",alignItems:"center",justifyContent:"center",gap:"spacing.4",marginTop:"spacing.6",paddingX:"spacing.4",children:e.jsx(p,{itemOrientation:"vertical",isHighlighted:!0,children:e.jsxs(t,{children:[e.jsx(n,{children:"Payment ID"}),e.jsx(a,{children:i==null?void 0:i.paymentId})]})})}),e.jsx(u,{size:"small",marginTop:"spacing.6",textAlign:"center",color:"surface.text.gray.muted",children:"QR was generated on 24th April 2025"})]}),e.jsxs(B,{children:[e.jsx(f,{marginBottom:"spacing.4",size:"small",weight:"semibold",children:"QR Code"}),e.jsx(r,{textAlign:"center",children:e.jsx(Ie,{})}),e.jsx(m,{marginTop:"spacing.4",variant:"secondary",size:"small",isFullWidth:!0,children:"Download QR Code"}),e.jsx(f,{marginTop:"spacing.6",size:"small",weight:"semibold",children:"Timeline"}),e.jsx(M,{status:"Pending"}),e.jsxs(r,{marginTop:"spacing.6",marginBottom:"spacing.4",display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(f,{size:"small",weight:"semibold",children:"Transaction Details"}),e.jsx(h,{variant:"button",size:"small",icon:z,onClick:()=>j(!0),children:"View More"})]}),e.jsx(le,{color:"positive",isDismissible:!1,isFullWidth:!0,description:e.jsxs(u,{children:["Order of"," ",e.jsx(d,{value:i.amount,isAffixSubtle:!1,currency:"INR",weight:"semibold",color:"surface.text.gray.subtle"})," ","is created successfully. Scan the QR Code to proceed"]})}),e.jsx(r,{marginTop:"spacing.4",children:e.jsxs(N,{elevation:"none",padding:"spacing.4",children:[e.jsxs(L,{children:[e.jsx(E,{title:"UPI",prefix:e.jsx(G,{icon:de})}),e.jsx(Q,{visual:e.jsx(me,{color:"positive",children:"Active"})})]}),e.jsxs(U,{children:[e.jsxs(p,{gridTemplateColumns:"1fr 1fr",children:[e.jsxs(t,{children:[e.jsx(n,{children:"VPA ID"}),e.jsx(a,{children:"example@ybl"})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Transaction ID"}),e.jsx(a,{children:"fa_PEisj2647UW"})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Transaction ID"}),e.jsx(a,{children:"example@ybl"})]})]}),e.jsxs(r,{marginTop:"spacing.4",display:"flex",justifyContent:"space-between",gap:"spacing.3",children:[e.jsx(m,{variant:"primary",icon:z,iconPosition:"left",isFullWidth:!0,children:"Payout"}),e.jsx(m,{variant:"tertiary",icon:ce,iconPosition:"left",isFullWidth:!0,children:"Mark as inactive"})]})]})]})})]})]}),e.jsxs(w,{...l,isOpen:o,onDismiss:()=>{j(!1)},children:[e.jsx(D,{title:"Transaction Breakdown"}),e.jsx(B,{children:e.jsxs(p,{gridTemplateColumns:"1fr 1fr",children:[e.jsxs(t,{children:[e.jsx(n,{children:"Amount"}),e.jsx(a,{children:e.jsx(d,{value:i.amount,currency:"INR",weight:"semibold",color:"surface.text.gray.subtle"})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Amount Paid"}),e.jsx(a,{children:e.jsx(d,{value:i.amountPaid,currency:"INR",weight:"semibold",color:"surface.text.gray.subtle"})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Payment Link ID"}),e.jsx(a,{trailing:e.jsx(h,{variant:"button",size:"medium",icon:V}),children:e.jsx(b,{size:"medium",weight:"bold",children:i.paymentId})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Reference ID"}),e.jsx(a,{children:i.referenceId})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Payment for"}),e.jsx(a,{children:i.type})]}),e.jsxs(t,{children:[e.jsx(n,{children:"UTR Number"}),e.jsx(a,{trailing:e.jsx(h,{variant:"button",size:"medium",icon:V}),children:e.jsx(b,{size:"medium",weight:"bold",children:i.utr})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Bank Account"}),e.jsx(a,{children:i.bankAccount})]}),e.jsxs(t,{children:[e.jsx(n,{children:"IFSC"}),e.jsx(a,{children:i.ifsc})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Partial Payment"}),e.jsx(a,{children:i.partialPayment})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Reminders"}),e.jsx(a,{children:i.reminders})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Created By"}),e.jsx(a,{children:i.createdBy})]})]})})]})]})},R=Le.bind({}),Ee=({...l})=>{const[x,I]=y.useState(!1),[o,j]=y.useState(!0),[P,c]=y.useState(!1);return e.jsxs(r,{children:[e.jsxs(r,{display:"flex",gap:"spacing.4",marginBottom:"spacing.4",children:[e.jsx(m,{onClick:()=>I(!0),children:"Show QR Details with Footer"}),e.jsx(m,{variant:"secondary",onClick:()=>j(!o),children:o?"Hide Footer":"Show Footer"})]}),e.jsxs(w,{...l,isOpen:x,onDismiss:()=>{I(!1)},children:[e.jsxs(D,{color:"notice",title:"Payment QR Code",trailing:e.jsx(m,{size:"medium",icon:k}),showDivider:!1,children:[e.jsx(r,{marginTop:"spacing.6",textAlign:"center",children:e.jsx(d,{value:i==null?void 0:i.amount,currency:"INR",size:"2xlarge",type:"heading",weight:"semibold",color:"surface.text.gray.subtle",suffix:"decimals"})}),e.jsx(r,{display:"flex",justifyContent:"center",gap:"spacing.4",marginTop:"spacing.4",children:e.jsx(v,{icon:se,size:"medium",color:"notice",emphasis:"intense",children:"Pending"})}),e.jsx(r,{display:"flex",alignItems:"center",justifyContent:"center",gap:"spacing.4",marginTop:"spacing.6",paddingX:"spacing.4",children:e.jsx(p,{itemOrientation:"vertical",isHighlighted:!0,children:e.jsxs(t,{children:[e.jsx(n,{children:"Payment ID"}),e.jsx(a,{children:i==null?void 0:i.paymentId})]})})}),e.jsx(u,{size:"small",marginTop:"spacing.6",textAlign:"center",color:"surface.text.gray.muted",children:"QR was generated on 24th April 2025"})]}),e.jsxs(B,{children:[e.jsx(f,{marginBottom:"spacing.4",size:"small",weight:"semibold",children:"QR Code"}),e.jsx(r,{textAlign:"center",children:e.jsx(Ie,{})}),e.jsx(m,{marginTop:"spacing.4",variant:"secondary",size:"small",isFullWidth:!0,children:"Download QR Code"}),e.jsx(f,{marginTop:"spacing.6",size:"small",weight:"semibold",children:"Timeline"}),e.jsx(M,{status:"Pending"}),e.jsxs(r,{marginTop:"spacing.6",marginBottom:"spacing.4",display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(f,{size:"small",weight:"semibold",children:"Transaction Details"}),e.jsx(h,{variant:"button",size:"small",icon:z,onClick:()=>c(!0),children:"View More"})]}),e.jsx(le,{color:"positive",isDismissible:!1,isFullWidth:!0,description:e.jsxs(u,{children:["Order of"," ",e.jsx(d,{value:i.amount,isAffixSubtle:!1,currency:"INR",weight:"semibold",color:"surface.text.gray.subtle"})," ","is created successfully. Scan the QR Code to proceed"]})}),e.jsx(r,{marginTop:"spacing.4",children:e.jsxs(N,{elevation:"none",padding:"spacing.4",children:[e.jsxs(L,{children:[e.jsx(E,{title:"UPI",prefix:e.jsx(G,{icon:de})}),e.jsx(Q,{visual:e.jsx(me,{color:"positive",children:"Active"})})]}),e.jsx(U,{children:e.jsxs(p,{gridTemplateColumns:"1fr 1fr",children:[e.jsxs(t,{children:[e.jsx(n,{children:"VPA ID"}),e.jsx(a,{children:"example@ybl"})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Transaction ID"}),e.jsx(a,{children:"fa_PEisj2647UW"})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Transaction ID"}),e.jsx(a,{children:"example@ybl"})]})]})})]})}),e.jsxs(r,{marginTop:"spacing.6",children:[e.jsx(f,{size:"small",weight:"semibold",marginBottom:"spacing.4",children:"Additional Information"}),e.jsx(u,{marginBottom:"spacing.4",children:"This QR code is valid for 24 hours from the time of generation. Please ensure that the payment is completed within this timeframe to avoid any issues."}),e.jsx(u,{marginBottom:"spacing.4",children:"If you encounter any problems with the QR code, please contact our support team for assistance."}),e.jsx(u,{marginBottom:"spacing.4",children:"The QR code contains encrypted payment information and is secure for transactions."})]})]}),o&&e.jsx(xe,{children:e.jsxs(r,{display:"flex",gap:"spacing.5",children:[e.jsx(m,{variant:"tertiary",icon:ce,iconPosition:"left",isFullWidth:!0,onClick:()=>I(!1),children:"Cancel"}),e.jsx(m,{variant:"primary",icon:z,iconPosition:"right",isFullWidth:!0,children:"Continue"})]})})]}),e.jsxs(w,{...l,isOpen:P,onDismiss:()=>{c(!1)},children:[e.jsx(D,{title:"Transaction Breakdown"}),e.jsx(B,{children:e.jsxs(p,{gridTemplateColumns:"1fr 1fr",children:[e.jsxs(t,{children:[e.jsx(n,{children:"Amount"}),e.jsx(a,{children:e.jsx(d,{value:i.amount,currency:"INR",weight:"semibold",color:"surface.text.gray.subtle"})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Amount Paid"}),e.jsx(a,{children:e.jsx(d,{value:i.amountPaid,currency:"INR",weight:"semibold",color:"surface.text.gray.subtle"})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Payment Link ID"}),e.jsx(a,{trailing:e.jsx(h,{variant:"button",size:"medium",icon:V}),children:e.jsx(b,{size:"medium",weight:"bold",children:i.paymentId})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Reference ID"}),e.jsx(a,{children:i.referenceId})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Payment for"}),e.jsx(a,{children:i.type})]}),e.jsxs(t,{children:[e.jsx(n,{children:"UTR Number"}),e.jsx(a,{trailing:e.jsx(h,{variant:"button",size:"medium",icon:V}),children:e.jsx(b,{size:"medium",weight:"bold",children:i.utr})})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Bank Account"}),e.jsx(a,{children:i.bankAccount})]}),e.jsxs(t,{children:[e.jsx(n,{children:"IFSC"}),e.jsx(a,{children:i.ifsc})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Partial Payment"}),e.jsx(a,{children:i.partialPayment})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Reminders"}),e.jsx(a,{children:i.reminders})]}),e.jsxs(t,{children:[e.jsx(n,{children:"Created By"}),e.jsx(a,{children:i.createdBy})]})]})})]})]})},S=Ee.bind({});var Z,_,X;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`({
  ...args
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  return <Box overflow="auto" minHeight="400px">
      <TableComponent data={data} selectionType="none" toolbar={<TableToolbar title="Showing 1-10 [Items]" selectedTitle="Showing 1-10 [Items]">
            <TableToolbarActions>
              <Button variant="secondary" marginRight="spacing.2">
                Export
              </Button>
              <Button>Refund</Button>
            </TableToolbarActions>
          </TableToolbar>} sortFunctions={{
      ID: array => array.sort((a, b) => Number(a.id) - Number(b.id)),
      AMOUNT: array => array.sort((a, b) => a.amount - b.amount),
      PAYMENT_ID: array => array.sort((a, b) => a.paymentId.localeCompare(b.paymentId)),
      DATE: array => array.sort((a, b) => a.date.getTime() - b.date.getTime()),
      STATUS: array => array.sort((a, b) => a.status.localeCompare(b.status))
    }} pagination={<TablePagination onPageChange={console.log} defaultPageSize={10} onPageSizeChange={console.log} showPageSizePicker showPageNumberSelector />}>
        {tableData => <>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderCell headerKey="PAYMENT_ID">ID</TableHeaderCell>
                <TableHeaderCell headerKey="NAME">Account Holder</TableHeaderCell>
                <TableHeaderCell headerKey="AMOUNT">Amount</TableHeaderCell>
                <TableHeaderCell headerKey="DATE">Date</TableHeaderCell>
                <TableHeaderCell headerKey="METHOD">Method</TableHeaderCell>
                <TableHeaderCell headerKey="STATUS">Status</TableHeaderCell>
              </TableHeaderRow>
            </TableHeader>
            <TableBody>
              {tableData.map((tableItem, index) => <TableRow key={index} item={tableItem} onClick={() => {
            setSelectedItem(tableItem);
            setIsDrawerOpen(true);
          }}>
                  <TableCell>
                    <Code size="medium">{tableItem.paymentId}</Code>
                  </TableCell>
                  <TableCell>{tableItem.name}</TableCell>
                  <TableCell>
                    <Amount value={tableItem.amount} />
                  </TableCell>
                  <TableCell>
                    {tableItem.date?.toLocaleDateString('en-IN', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              })}
                  </TableCell>
                  <TableCell>{tableItem.method}</TableCell>
                  <TableCell>
                    <Badge size="medium" color={tableItem.status === 'Completed' ? 'positive' : tableItem.status === 'Pending' ? 'notice' : tableItem.status === 'Failed' ? 'negative' : 'primary'}>
                      {tableItem.status}
                    </Badge>
                  </TableCell>
                </TableRow>)}
            </TableBody>
            <TableFooter>
              <TableFooterRow>
                <TableFooterCell>Total</TableFooterCell>
                <TableFooterCell>-</TableFooterCell>
                <TableFooterCell>-</TableFooterCell>
                <TableFooterCell>-</TableFooterCell>
                <TableFooterCell>-</TableFooterCell>
                <TableFooterCell>
                  <Amount value={10} />
                </TableFooterCell>
              </TableFooterRow>
            </TableFooter>
          </>}
      </TableComponent>

      <Drawer showOverlay={false} {...args} isOpen={isDrawerOpen} onDismiss={() => {
      setIsDrawerOpen(false);
    }} onUnmount={() => {
      setSelectedItem(null);
    }}>
        <DrawerHeader color={selectedItem?.status === 'Completed' ? 'positive' : selectedItem?.status === 'Pending' ? 'notice' : 'negative'} title="Settlements" trailing={<IconButton icon={MoreHorizontalIcon} accessibilityLabel="Options" onClick={() => console.log('Options Clicked')} size="large" />} showDivider={false}>
          <Box marginTop="spacing.6" textAlign="center">
            <Amount value={selectedItem?.amount ?? 0} currency="INR" size="2xlarge" type="heading" weight="semibold" suffix="decimals" />
          </Box>
          <Box display="flex" justifyContent="center" gap="spacing.4" marginTop="spacing.4">
            <Badge size="medium" color={selectedItem?.status === 'Completed' ? 'positive' : selectedItem?.status === 'Pending' ? 'notice' : 'negative'} emphasis="intense">
              {selectedItem?.status ?? 'Pending'}
            </Badge>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" gap="spacing.4" marginTop="spacing.6" paddingX="spacing.4">
            <InfoGroup itemOrientation="vertical" isHighlighted>
              <InfoItem>
                <InfoItemKey>Payment ID</InfoItemKey>
                <InfoItemValue>{selectedItem?.paymentId}</InfoItemValue>
              </InfoItem>

              <InfoItem>
                <InfoItemKey>Date</InfoItemKey>
                <InfoItemValue>
                  {selectedItem?.date?.toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
                </InfoItemValue>
              </InfoItem>
            </InfoGroup>
          </Box>
          <Box marginTop="spacing.6" textAlign="center">
            <Button variant="secondary" color="primary" size="small" icon={DownloadIcon} isFullWidth>
              Download Report
            </Button>
          </Box>
        </DrawerHeader>
        <DrawerBody>
          <Box display="flex" flexDirection="column" gap="spacing.6">
            <Box>
              <Text variant="body" size="medium" weight="semibold" marginBottom="spacing.4">
                Timeline
              </Text>
              <Timeline status={selectedItem?.status ?? 'Pending'} />
            </Box>
            <Divider />
            <Box>
              <Text variant="body" size="medium" weight="semibold" marginBottom="spacing.4">
                Details
              </Text>
              <InfoGroup gridTemplateColumns="1fr 1fr">
                {/* Amount */}
                <InfoItem>
                  <InfoItemKey>Amount</InfoItemKey>
                  <InfoItemValue>
                    <Amount value={selectedItem?.amount ?? 0} weight="semibold" color="surface.text.gray.subtle" />
                  </InfoItemValue>
                </InfoItem>

                {/* Amount Paid */}
                <InfoItem>
                  <InfoItemKey>Amount Paid</InfoItemKey>
                  <InfoItemValue>
                    <Amount value={0} weight="semibold" color="surface.text.gray.subtle" />
                  </InfoItemValue>
                </InfoItem>

                {/* Payment Link ID */}
                <InfoItem>
                  <InfoItemKey>Payment Link ID</InfoItemKey>
                  <InfoItemValue trailing={<Link variant="button" size="medium" icon={CopyIcon} />}>
                    <Code size="medium" weight="bold">
                      {selectedItem?.paymentId ?? 'NA'}
                    </Code>
                  </InfoItemValue>
                </InfoItem>

                {/* Reference ID */}
                <InfoItem>
                  <InfoItemKey>Reference ID</InfoItemKey>
                  <InfoItemValue>NA</InfoItemValue>
                </InfoItem>

                {/* Payment For */}
                <InfoItem>
                  <InfoItemKey>Payment for</InfoItemKey>
                  <InfoItemValue>{selectedItem?.type}</InfoItemValue>
                </InfoItem>

                {/* Partial Payment */}
                <InfoItem>
                  <InfoItemKey>Partial Payment</InfoItemKey>
                  <InfoItemValue>Enabled</InfoItemValue>
                </InfoItem>

                {/* Reminders */}
                <InfoItem>
                  <InfoItemKey>Reminders</InfoItemKey>
                  <InfoItemValue>Send auto reminders</InfoItemValue>
                </InfoItem>

                {/* Created By */}
                <InfoItem>
                  <InfoItemKey>Created By</InfoItemKey>
                  <InfoItemValue>{selectedItem?.name}</InfoItemValue>
                </InfoItem>
              </InfoGroup>
            </Box>
          </Box>
        </DrawerBody>
      </Drawer>
    </Box>;
}`,...(X=(_=A.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var Y,$,q;K.parameters={...K.parameters,docs:{...(Y=K.parameters)==null?void 0:Y.docs,source:{originalSource:`({
  ...args
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return <Box>
      <Card width={{
      base: '100%',
      m: '500px'
    }}>
        <CardHeader>
          <CardHeaderLeading prefix={<CardHeaderIcon icon={GreenLoomIcon} />} title="Transaction Details" />
          <CardHeaderTrailing visual={<CardHeaderLink variant="button" onClick={() => {
          setIsDrawerOpen(true);
        }} icon={ExternalLinkIcon} iconPosition="right">
                View Details
              </CardHeaderLink>} />
        </CardHeader>
        <CardBody>
          <InfoGroup valueAlign="right">
            {/* Gross Settlements */}
            <Text gridColumn="span 2" variant="body" size="medium">
              Gross Settlements
            </Text>

            <InfoItem>
              <InfoItemKey>Payment</InfoItemKey>
              <InfoItemValue>
                <Amount value={dummyData.amount} currency="INR" weight="semibold" color="surface.text.gray.subtle" />
              </InfoItemValue>
            </InfoItem>

            {/* Deductions - spans full width */}
            <Text variant="body" size="medium" marginTop="spacing.4" gridColumn="span 2">
              Deductions
            </Text>

            <InfoItem>
              <InfoItemKey>Tax</InfoItemKey>
              <InfoItemValue>
                <Amount value={260} currency="INR" weight="semibold" color="surface.text.gray.subtle" />
              </InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Fee</InfoItemKey>
              <InfoItemValue>
                <Amount value={260} currency="INR" weight="semibold" color="surface.text.gray.subtle" />
              </InfoItemValue>
            </InfoItem>

            {/* Net Settlement - with divider */}
            <Divider gridColumn="span 2" />
            <InfoItem>
              <InfoItemKey>Net Settlement amount</InfoItemKey>
              <InfoItemValue>₹2,600</InfoItemValue>
            </InfoItem>
          </InfoGroup>
        </CardBody>
      </Card>

      <Drawer {...args} isOpen={isDrawerOpen} onDismiss={() => {
      setIsDrawerOpen(false);
    }}>
        <DrawerHeader color="positive" title="Settlements" trailing={<Button size="medium" icon={DownloadIcon} />} showDivider={false}>
          <Box marginTop="spacing.6" textAlign="center">
            <Amount value={dummyData?.amount ?? 0} currency="INR" size="2xlarge" type="heading" weight="semibold" color="surface.text.gray.subtle" suffix="decimals" />
          </Box>
          <Box display="flex" justifyContent="center" gap="spacing.4" marginTop="spacing.4">
            <Badge icon={CheckIcon} size="medium" color="positive" emphasis="intense">
              Completed
            </Badge>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" gap="spacing.4" marginTop="spacing.6" paddingX="spacing.4">
            <InfoGroup itemOrientation="vertical" isHighlighted>
              <InfoItem>
                <InfoItemKey>Payment ID</InfoItemKey>
                <InfoItemValue>{dummyData?.paymentId}</InfoItemValue>
              </InfoItem>
            </InfoGroup>
          </Box>

          <Text size="small" marginTop="spacing.6" textAlign="center" color="surface.text.gray.muted">
            Settlement was completed on 24th April 2025
          </Text>
        </DrawerHeader>
        <DrawerBody>
          <Heading size="small" weight="semibold">
            Timeline
          </Heading>
          <Timeline status="Completed" />

          <Heading marginTop="spacing.6" marginBottom="spacing.4" size="small" weight="semibold">
            Transaction Breakdown
          </Heading>

          <InfoGroup gridTemplateColumns="1fr 1fr">
            <InfoItem>
              <InfoItemKey>Amount</InfoItemKey>
              <InfoItemValue>
                <Amount value={dummyData.amount} currency="INR" weight="semibold" color="surface.text.gray.subtle" />
              </InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Amount Paid</InfoItemKey>
              <InfoItemValue>
                <Amount value={dummyData.amountPaid} currency="INR" weight="semibold" color="surface.text.gray.subtle" />
              </InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Payment Link ID</InfoItemKey>
              <InfoItemValue trailing={<Link variant="button" size="medium" icon={CopyIcon} />}>
                <Code size="medium" weight="bold">
                  {dummyData.paymentId}
                </Code>
              </InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Reference ID</InfoItemKey>
              <InfoItemValue>{dummyData.referenceId}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Payment for</InfoItemKey>
              <InfoItemValue>{dummyData.type}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>UTR Number</InfoItemKey>
              <InfoItemValue trailing={<Link variant="button" size="medium" icon={CopyIcon} />}>
                <Code size="medium" weight="bold">
                  {dummyData.utr}
                </Code>
              </InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Bank Account</InfoItemKey>
              <InfoItemValue>{dummyData.bankAccount}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>IFSC</InfoItemKey>
              <InfoItemValue>{dummyData.ifsc}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Partial Payment</InfoItemKey>
              <InfoItemValue>{dummyData.partialPayment}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Reminders</InfoItemKey>
              <InfoItemValue>{dummyData.reminders}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Created By</InfoItemKey>
              <InfoItemValue>{dummyData.createdBy}</InfoItemValue>
            </InfoItem>
          </InfoGroup>
        </DrawerBody>
      </Drawer>
    </Box>;
}`,...(q=($=K.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var J,ee,te;R.parameters={...R.parameters,docs:{...(J=R.parameters)==null?void 0:J.docs,source:{originalSource:`({
  ...args
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTransactionBreakdownOpen, setIsTransactionBreakdownOpen] = useState(false);
  return <Box>
      <Button onClick={() => setIsDrawerOpen(true)}>Show QR Details</Button>
      <Drawer {...args} isOpen={isDrawerOpen} onDismiss={() => {
      setIsDrawerOpen(false);
    }}>
        <DrawerHeader color="notice" title="Payment QR Code" trailing={<Button size="medium" icon={DownloadIcon} />} showDivider={false}>
          <Box marginTop="spacing.6" textAlign="center">
            <Amount value={dummyData?.amount ?? 0} currency="INR" size="2xlarge" type="heading" weight="semibold" color="surface.text.gray.subtle" suffix="decimals" />
          </Box>
          <Box display="flex" justifyContent="center" gap="spacing.4" marginTop="spacing.4">
            <Badge icon={ClockIcon} size="medium" color="notice" emphasis="intense">
              Pending
            </Badge>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" gap="spacing.4" marginTop="spacing.6" paddingX="spacing.4">
            <InfoGroup itemOrientation="vertical" isHighlighted>
              <InfoItem>
                <InfoItemKey>Payment ID</InfoItemKey>
                <InfoItemValue>{dummyData?.paymentId}</InfoItemValue>
              </InfoItem>
            </InfoGroup>
          </Box>

          <Text size="small" marginTop="spacing.6" textAlign="center" color="surface.text.gray.muted">
            QR was generated on 24th April 2025
          </Text>
        </DrawerHeader>
        <DrawerBody>
          <Heading marginBottom="spacing.4" size="small" weight="semibold">
            QR Code
          </Heading>
          <Box textAlign="center">
            <QRCodeImage />
          </Box>
          <Button marginTop="spacing.4" variant="secondary" size="small" isFullWidth>
            Download QR Code
          </Button>

          <Heading marginTop="spacing.6" size="small" weight="semibold">
            Timeline
          </Heading>
          <Timeline status="Pending" />

          <Box marginTop="spacing.6" marginBottom="spacing.4" display="flex" alignItems="center" justifyContent="space-between">
            <Heading size="small" weight="semibold">
              Transaction Details
            </Heading>
            <Link variant="button" size="small" icon={ArrowRightIcon} onClick={() => setIsTransactionBreakdownOpen(true)}>
              View More
            </Link>
          </Box>

          <Alert color="positive" isDismissible={false} isFullWidth description={<Text>
                Order of{' '}
                <Amount value={dummyData.amount} isAffixSubtle={false} currency="INR" weight="semibold" color="surface.text.gray.subtle" />{' '}
                is created successfully. Scan the QR Code to proceed
              </Text>} />

          <Box marginTop="spacing.4">
            <Card elevation="none" padding="spacing.4">
              <CardHeader>
                <CardHeaderLeading title="UPI" prefix={<CardHeaderIcon icon={UpiIcon} />} />
                <CardHeaderTrailing visual={<CardHeaderBadge color="positive">Active</CardHeaderBadge>} />
              </CardHeader>
              <CardBody>
                <InfoGroup gridTemplateColumns="1fr 1fr">
                  <InfoItem>
                    <InfoItemKey>VPA ID</InfoItemKey>
                    <InfoItemValue>example@ybl</InfoItemValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoItemKey>Transaction ID</InfoItemKey>
                    <InfoItemValue>fa_PEisj2647UW</InfoItemValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoItemKey>Transaction ID</InfoItemKey>
                    <InfoItemValue>example@ybl</InfoItemValue>
                  </InfoItem>
                </InfoGroup>
                <Box marginTop="spacing.4" display="flex" justifyContent="space-between" gap="spacing.3">
                  <Button variant="primary" icon={ArrowRightIcon} iconPosition="left" isFullWidth>
                    Payout
                  </Button>
                  <Button variant="tertiary" icon={CloseIcon} iconPosition="left" isFullWidth>
                    Mark as inactive
                  </Button>
                </Box>
              </CardBody>
            </Card>
          </Box>
        </DrawerBody>
      </Drawer>

      <Drawer {...args} isOpen={isTransactionBreakdownOpen} onDismiss={() => {
      setIsTransactionBreakdownOpen(false);
    }}>
        <DrawerHeader title="Transaction Breakdown" />
        <DrawerBody>
          <InfoGroup gridTemplateColumns="1fr 1fr">
            <InfoItem>
              <InfoItemKey>Amount</InfoItemKey>
              <InfoItemValue>
                <Amount value={dummyData.amount} currency="INR" weight="semibold" color="surface.text.gray.subtle" />
              </InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Amount Paid</InfoItemKey>
              <InfoItemValue>
                <Amount value={dummyData.amountPaid} currency="INR" weight="semibold" color="surface.text.gray.subtle" />
              </InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Payment Link ID</InfoItemKey>
              <InfoItemValue trailing={<Link variant="button" size="medium" icon={CopyIcon} />}>
                <Code size="medium" weight="bold">
                  {dummyData.paymentId}
                </Code>
              </InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Reference ID</InfoItemKey>
              <InfoItemValue>{dummyData.referenceId}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Payment for</InfoItemKey>
              <InfoItemValue>{dummyData.type}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>UTR Number</InfoItemKey>
              <InfoItemValue trailing={<Link variant="button" size="medium" icon={CopyIcon} />}>
                <Code size="medium" weight="bold">
                  {dummyData.utr}
                </Code>
              </InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Bank Account</InfoItemKey>
              <InfoItemValue>{dummyData.bankAccount}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>IFSC</InfoItemKey>
              <InfoItemValue>{dummyData.ifsc}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Partial Payment</InfoItemKey>
              <InfoItemValue>{dummyData.partialPayment}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Reminders</InfoItemKey>
              <InfoItemValue>{dummyData.reminders}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Created By</InfoItemKey>
              <InfoItemValue>{dummyData.createdBy}</InfoItemValue>
            </InfoItem>
          </InfoGroup>
        </DrawerBody>
      </Drawer>
    </Box>;
}`,...(te=(ee=R.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,ie;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`({
  ...args
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const [isTransactionBreakdownOpen, setIsTransactionBreakdownOpen] = useState(false);
  return <Box>
      <Box display="flex" gap="spacing.4" marginBottom="spacing.4">
        <Button onClick={() => setIsDrawerOpen(true)}>Show QR Details with Footer</Button>
        <Button variant="secondary" onClick={() => setIsFooterVisible(!isFooterVisible)}>
          {isFooterVisible ? 'Hide Footer' : 'Show Footer'}
        </Button>
      </Box>

      <Drawer {...args} isOpen={isDrawerOpen} onDismiss={() => {
      setIsDrawerOpen(false);
    }}>
        <DrawerHeader color="notice" title="Payment QR Code" trailing={<Button size="medium" icon={DownloadIcon} />} showDivider={false}>
          <Box marginTop="spacing.6" textAlign="center">
            <Amount value={dummyData?.amount ?? 0} currency="INR" size="2xlarge" type="heading" weight="semibold" color="surface.text.gray.subtle" suffix="decimals" />
          </Box>
          <Box display="flex" justifyContent="center" gap="spacing.4" marginTop="spacing.4">
            <Badge icon={ClockIcon} size="medium" color="notice" emphasis="intense">
              Pending
            </Badge>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" gap="spacing.4" marginTop="spacing.6" paddingX="spacing.4">
            <InfoGroup itemOrientation="vertical" isHighlighted>
              <InfoItem>
                <InfoItemKey>Payment ID</InfoItemKey>
                <InfoItemValue>{dummyData?.paymentId}</InfoItemValue>
              </InfoItem>
            </InfoGroup>
          </Box>

          <Text size="small" marginTop="spacing.6" textAlign="center" color="surface.text.gray.muted">
            QR was generated on 24th April 2025
          </Text>
        </DrawerHeader>

        <DrawerBody>
          <Heading marginBottom="spacing.4" size="small" weight="semibold">
            QR Code
          </Heading>
          <Box textAlign="center">
            <QRCodeImage />
          </Box>
          <Button marginTop="spacing.4" variant="secondary" size="small" isFullWidth>
            Download QR Code
          </Button>

          <Heading marginTop="spacing.6" size="small" weight="semibold">
            Timeline
          </Heading>
          <Timeline status="Pending" />

          <Box marginTop="spacing.6" marginBottom="spacing.4" display="flex" alignItems="center" justifyContent="space-between">
            <Heading size="small" weight="semibold">
              Transaction Details
            </Heading>
            <Link variant="button" size="small" icon={ArrowRightIcon} onClick={() => setIsTransactionBreakdownOpen(true)}>
              View More
            </Link>
          </Box>

          <Alert color="positive" isDismissible={false} isFullWidth description={<Text>
                Order of{' '}
                <Amount value={dummyData.amount} isAffixSubtle={false} currency="INR" weight="semibold" color="surface.text.gray.subtle" />{' '}
                is created successfully. Scan the QR Code to proceed
              </Text>} />

          <Box marginTop="spacing.4">
            <Card elevation="none" padding="spacing.4">
              <CardHeader>
                <CardHeaderLeading title="UPI" prefix={<CardHeaderIcon icon={UpiIcon} />} />
                <CardHeaderTrailing visual={<CardHeaderBadge color="positive">Active</CardHeaderBadge>} />
              </CardHeader>
              <CardBody>
                <InfoGroup gridTemplateColumns="1fr 1fr">
                  <InfoItem>
                    <InfoItemKey>VPA ID</InfoItemKey>
                    <InfoItemValue>example@ybl</InfoItemValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoItemKey>Transaction ID</InfoItemKey>
                    <InfoItemValue>fa_PEisj2647UW</InfoItemValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoItemKey>Transaction ID</InfoItemKey>
                    <InfoItemValue>example@ybl</InfoItemValue>
                  </InfoItem>
                </InfoGroup>
              </CardBody>
            </Card>
          </Box>

          {/* Add some extra content to demonstrate scrolling */}
          <Box marginTop="spacing.6">
            <Heading size="small" weight="semibold" marginBottom="spacing.4">
              Additional Information
            </Heading>
            <Text marginBottom="spacing.4">
              This QR code is valid for 24 hours from the time of generation. Please ensure that the
              payment is completed within this timeframe to avoid any issues.
            </Text>
            <Text marginBottom="spacing.4">
              If you encounter any problems with the QR code, please contact our support team for
              assistance.
            </Text>
            <Text marginBottom="spacing.4">
              The QR code contains encrypted payment information and is secure for transactions.
            </Text>
          </Box>
        </DrawerBody>

        {isFooterVisible && <DrawerFooter>
            <Box display="flex" gap="spacing.5">
              <Button variant="tertiary" icon={CloseIcon} iconPosition="left" isFullWidth onClick={() => setIsDrawerOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" icon={ArrowRightIcon} iconPosition="right" isFullWidth>
                Continue
              </Button>
            </Box>
          </DrawerFooter>}
      </Drawer>

      <Drawer {...args} isOpen={isTransactionBreakdownOpen} onDismiss={() => {
      setIsTransactionBreakdownOpen(false);
    }}>
        <DrawerHeader title="Transaction Breakdown" />
        <DrawerBody>
          <InfoGroup gridTemplateColumns="1fr 1fr">
            <InfoItem>
              <InfoItemKey>Amount</InfoItemKey>
              <InfoItemValue>
                <Amount value={dummyData.amount} currency="INR" weight="semibold" color="surface.text.gray.subtle" />
              </InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Amount Paid</InfoItemKey>
              <InfoItemValue>
                <Amount value={dummyData.amountPaid} currency="INR" weight="semibold" color="surface.text.gray.subtle" />
              </InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Payment Link ID</InfoItemKey>
              <InfoItemValue trailing={<Link variant="button" size="medium" icon={CopyIcon} />}>
                <Code size="medium" weight="bold">
                  {dummyData.paymentId}
                </Code>
              </InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Reference ID</InfoItemKey>
              <InfoItemValue>{dummyData.referenceId}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Payment for</InfoItemKey>
              <InfoItemValue>{dummyData.type}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>UTR Number</InfoItemKey>
              <InfoItemValue trailing={<Link variant="button" size="medium" icon={CopyIcon} />}>
                <Code size="medium" weight="bold">
                  {dummyData.utr}
                </Code>
              </InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Bank Account</InfoItemKey>
              <InfoItemValue>{dummyData.bankAccount}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>IFSC</InfoItemKey>
              <InfoItemValue>{dummyData.ifsc}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Partial Payment</InfoItemKey>
              <InfoItemValue>{dummyData.partialPayment}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Reminders</InfoItemKey>
              <InfoItemValue>{dummyData.reminders}</InfoItemValue>
            </InfoItem>

            <InfoItem>
              <InfoItemKey>Created By</InfoItemKey>
              <InfoItemValue>{dummyData.createdBy}</InfoItemValue>
            </InfoItem>
          </InfoGroup>
        </DrawerBody>
      </Drawer>
    </Box>;
}`,...(ie=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const qe=["WithTable","WithCard","WithQRCode","WithQRCodeAndFooter"];export{K as WithCard,R as WithQRCode,S as WithQRCodeAndFooter,A as WithTable,qe as __namedExportsOrder,$e as default};
