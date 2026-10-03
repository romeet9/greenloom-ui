import{lo as s,j as e,B as t,H as a,fu as Q,n as o,l as c,ak as Z,T as $}from"./iframe-C1qQ09LF.js";import{S as ee}from"./StoryPageWrapper-CS0_5maI.js";import{S as te}from"./Sandbox.web-B2xP21Qp.js";import{g as ie}from"./storybookArgTypes-DFfQV31s.js";import"./preload-helper-Dp1pzeXC.js";import"./Sandbox.web-C7diOxlu.js";import"./baseCode-DnWYDQ6N.js";import"./componentStatusData-8pChZ-5h.js";const F=""+new URL("list-view-m9t6g2__.png",import.meta.url).href,S=""+new URL("no-data-DQcZYKid.png",import.meta.url).href,B=""+new URL("error-BNuIrvtj.png",import.meta.url).href,r=""+new URL("no-notification-Bccv1yTu.png",import.meta.url).href,J=""+new URL("access-denied-DErf3Y-h.png",import.meta.url).href,se=`import React, { useState } from 'react';
import {
  EmptyState,
  Box,
  Button,
  Link,
  Heading,
  Text,
  Icon,
} from '@greenloom/loom/components';

const EmptyStateExample = () => {
  return (
    <EmptyState
      asset={<img src="https://shorturl.at/qvgcJ" alt="Error" width="90px" height="90px" />}
      title="Something went wrong"
      description="Please try again later"
    >
      <Button>Reload</Button>
      <Link href="/help">Need help?</Link>
    </EmptyState>
  );
};

export default EmptyStateExample;
`,ae=()=>({size:{control:{type:"select",options:["small","medium","large","xlarge"]},description:"Size variant that controls spacing and text sizes"},title:{control:"text",description:"Main heading text for the empty state"},description:{control:"text",description:"Descriptive text explaining the empty state"},asset:{control:!1,description:"React element to display as the main visual asset"},children:{control:!1,description:"Action buttons or links to display below the text content"},...ie()}),ge={title:"Components/EmptyState",component:s,tags:["autodocs"],argTypes:ae(),parameters:{docs:{page:()=>e.jsxs(ee,{componentDescription:"EmptyState component provides a consistent way to show empty states with optional assets, titles, descriptions, and actions across the application.",componentName:"EmptyState",figmaURL:"https://www.figma.com/design/UTlH5NpDte6c9L7o8z93vd/-Research--Empty-States?node-id=582-85262&m=dev",children:[e.jsx(a,{size:"large",children:"Usage"}),e.jsx(te,{editorHeight:500,children:se})]})}}},i=(f,K)=>e.jsx("img",{src:f,alt:K,width:"100%",style:{aspectRatio:"1/1",objectFit:"contain"}}),n=f=>e.jsx(s,{...f}),d=n.bind({});d.args={asset:i(B,"Page not found"),title:"We couldn't find the page you're looking for",description:"The page you are looking for does not exist, or has been moved.",children:e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.5",alignItems:"center",children:[e.jsxs(t,{display:"flex",flexDirection:"row",gap:"spacing.4",children:[e.jsx(o,{onClick:()=>console.log("Navigate to home"),children:"Go to Home"}),e.jsx(o,{variant:"secondary",onClick:()=>console.log("Navigate to docs"),children:"Go to Blade Docs"})]}),e.jsxs(t,{display:"flex",flexDirection:"row",gap:"spacing.2",alignItems:"center",children:[e.jsx(Z,{size:"small",color:"surface.icon.gray.muted"}),e.jsx($,{variant:"body",size:"small",color:"surface.text.gray.muted",children:"Need help?"}),e.jsx(c,{href:"/",children:"Contact Support"})]})]})};const m=n.bind({});m.args={asset:i(S,"No data"),title:"No content available",description:"Please try again later"};const l=n.bind({});l.args={asset:i(J,"Access denied")};const u=()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.10",children:[e.jsxs(t,{children:[e.jsx(a,{size:"small",marginBottom:"spacing.4",children:"Small Size"}),e.jsx(s,{size:"small",asset:i(r,"No notifications"),title:"Small Empty State",description:"This is a small empty state with reduced spacing and text sizes."})]}),e.jsxs(t,{children:[e.jsx(a,{size:"medium",marginBottom:"spacing.4",children:"Medium Size"}),e.jsx(s,{size:"medium",asset:i(r,"No notifications"),title:"Medium Empty State",description:"This is a medium empty state with default spacing and text sizes."})]}),e.jsxs(t,{children:[e.jsx(a,{size:"large",marginBottom:"spacing.4",children:"Large Size"}),e.jsx(s,{size:"large",asset:i(r,"No notifications"),title:"Large Empty State",description:"This is a large empty state with increased spacing and text sizes."})]}),e.jsxs(t,{children:[e.jsx(a,{size:"xlarge",marginBottom:"spacing.4",children:"XLarge Size"}),e.jsx(s,{size:"xlarge",asset:i(r,"No notifications"),title:"XLarge Empty State",description:"This is an xlarge empty state with maximum spacing and text sizes."})]})]}),p=n.bind({});p.args={asset:i(F,"List view"),title:"No payment links found",description:"Create your first payment link to start accepting payments from customers.",children:e.jsx(o,{children:"Create Payment Link"})};const g=n.bind({});g.args={asset:i(S,"No data"),title:"No data available",description:"Get started by importing your data or creating new records.",children:e.jsxs(t,{display:"flex",flexDirection:"row",gap:"spacing.4",alignItems:"center",children:[e.jsx(o,{children:"Import Data"}),e.jsx(o,{variant:"secondary",children:"Create New Record"})]})};const x=n.bind({});x.args={asset:i(B,"Error"),title:"Something went wrong",description:"We encountered an error while loading your data. Please try again.",children:e.jsxs(t,{display:"flex",flexDirection:"row",gap:"spacing.4",alignItems:"center",children:[e.jsx(o,{children:"Try Again"}),e.jsx(c,{href:"/support",children:"Contact Support"})]})};const h=n.bind({});h.args={asset:i(r,"No notifications"),title:"No notifications",description:"You're all caught up! Check back later for new notifications.",children:e.jsx(c,{href:"/settings",children:"Manage Notification Settings"})};const y=()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.10",children:[e.jsxs(t,{children:[e.jsx(a,{size:"medium",marginBottom:"spacing.4",children:"With Blade Icon Component"}),e.jsx(s,{asset:e.jsx(Q,{size:"2xlarge"}),title:"Empty Cart",description:"You haven't added any items to your cart yet."})]}),e.jsxs(t,{children:[e.jsx(a,{size:"medium",marginBottom:"spacing.4",children:"List View Asset"}),e.jsx(s,{asset:i(F,"List view"),title:"No items in list",description:"Add items to see them appear in your list view.",children:e.jsx(o,{children:"Add Item"})})]}),e.jsxs(t,{children:[e.jsx(a,{size:"medium",marginBottom:"spacing.4",children:"No Data Asset"}),e.jsx(s,{asset:i(S,"No data"),title:"No data available",description:"Import or create data to get started with your dashboard.",children:e.jsx(o,{children:"Import Data"})})]}),e.jsxs(t,{children:[e.jsx(a,{size:"medium",marginBottom:"spacing.4",children:"Error Asset"}),e.jsx(s,{asset:i(B,"Error"),title:"Failed to load data",description:"We couldn't retrieve your data. Please check your connection and try again.",children:e.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.5",alignItems:"center",children:[e.jsx(o,{children:"Retry"}),e.jsx(c,{href:"/",children:"Get Help"})]})})]}),e.jsxs(t,{children:[e.jsx(a,{size:"medium",marginBottom:"spacing.4",children:"No Notifications Asset"}),e.jsx(s,{asset:i(r,"No notifications"),title:"No notifications",description:"You're all caught up! New notifications will appear here.",children:e.jsx(c,{href:"/",children:"Notification Settings"})})]}),e.jsxs(t,{children:[e.jsx(a,{size:"medium",marginBottom:"spacing.4",children:"Access Denied Asset"}),e.jsx(s,{asset:i(J,"Access denied"),title:"Access denied",description:"You don't have permission to view this content. Contact your administrator for access.",children:e.jsx(c,{href:"/",children:"Request Access"})})]})]});var j,E,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:"args => <EmptyState {...args} />",...(z=(E=d.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var A,w,N;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:"args => <EmptyState {...args} />",...(N=(w=m.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var L,v,D;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:"args => <EmptyState {...args} />",...(D=(v=l.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var I,H,k;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`(): React.ReactElement => <Box display="flex" flexDirection="column" gap="spacing.10">
    <Box>
      <Heading size="small" marginBottom="spacing.4">
        Small Size
      </Heading>
      <EmptyState size="small" asset={createImageAsset(noNotification, 'No notifications')} title="Small Empty State" description="This is a small empty state with reduced spacing and text sizes." />
    </Box>

    <Box>
      <Heading size="medium" marginBottom="spacing.4">
        Medium Size
      </Heading>
      <EmptyState size="medium" asset={createImageAsset(noNotification, 'No notifications')} title="Medium Empty State" description="This is a medium empty state with default spacing and text sizes." />
    </Box>

    <Box>
      <Heading size="large" marginBottom="spacing.4">
        Large Size
      </Heading>
      <EmptyState size="large" asset={createImageAsset(noNotification, 'No notifications')} title="Large Empty State" description="This is a large empty state with increased spacing and text sizes." />
    </Box>

    <Box>
      <Heading size="xlarge" marginBottom="spacing.4">
        XLarge Size
      </Heading>
      <EmptyState size="xlarge" asset={createImageAsset(noNotification, 'No notifications')} title="XLarge Empty State" description="This is an xlarge empty state with maximum spacing and text sizes." />
    </Box>
  </Box>`,...(k=(H=u.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var b,R,T;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:"args => <EmptyState {...args} />",...(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,C,P;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:"args => <EmptyState {...args} />",...(P=(C=g.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var Y,M,U;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:"args => <EmptyState {...args} />",...(U=(M=x.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var G,O,_;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:"args => <EmptyState {...args} />",...(_=(O=h.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var V,X,q;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`(): React.ReactElement => <Box display="flex" flexDirection="column" gap="spacing.10">
    <Box>
      <Heading size="medium" marginBottom="spacing.4">
        With Blade Icon Component
      </Heading>
      <EmptyState asset={<EcommerceIcon size="2xlarge" />} title="Empty Cart" description="You haven't added any items to your cart yet." />
    </Box>
    <Box>
      <Heading size="medium" marginBottom="spacing.4">
        List View Asset
      </Heading>
      <EmptyState asset={createImageAsset(listView, 'List view')} title="No items in list" description="Add items to see them appear in your list view.">
        <Button>Add Item</Button>
      </EmptyState>
    </Box>

    <Box>
      <Heading size="medium" marginBottom="spacing.4">
        No Data Asset
      </Heading>
      <EmptyState asset={createImageAsset(noData, 'No data')} title="No data available" description="Import or create data to get started with your dashboard.">
        <Button>Import Data</Button>
      </EmptyState>
    </Box>

    <Box>
      <Heading size="medium" marginBottom="spacing.4">
        Error Asset
      </Heading>
      <EmptyState asset={createImageAsset(error, 'Error')} title="Failed to load data" description="We couldn't retrieve your data. Please check your connection and try again.">
        <Box display="flex" flexDirection="column" gap="spacing.5" alignItems="center">
          <Button>Retry</Button>
          <Link href="/">Get Help</Link>
        </Box>
      </EmptyState>
    </Box>

    <Box>
      <Heading size="medium" marginBottom="spacing.4">
        No Notifications Asset
      </Heading>
      <EmptyState asset={createImageAsset(noNotification, 'No notifications')} title="No notifications" description="You're all caught up! New notifications will appear here.">
        <Link href="/">Notification Settings</Link>
      </EmptyState>
    </Box>

    <Box>
      <Heading size="medium" marginBottom="spacing.4">
        Access Denied Asset
      </Heading>
      <EmptyState asset={createImageAsset(accessDenied, 'Access denied')} title="Access denied" description="You don't have permission to view this content. Contact your administrator for access.">
        <Link href="/">Request Access</Link>
      </EmptyState>
    </Box>
  </Box>`,...(q=(X=y.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};const xe=["Basic","WithTitleAndDescription","OnlyAsset","AllSizes","WithSingleAction","WithMultipleActions","WithActionAndLink","WithLinkOnly","DifferentAssets"];export{u as AllSizes,d as Basic,y as DifferentAssets,l as OnlyAsset,x as WithActionAndLink,h as WithLinkOnly,g as WithMultipleActions,p as WithSingleAction,m as WithTitleAndDescription,xe as __namedExportsOrder,ge as default};
