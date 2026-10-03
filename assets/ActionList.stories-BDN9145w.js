import{aq as r,j as t,X as P,x as l,B as m,ar as e,as as C,ja as W,a7 as d,ax as i,jb as T,jc as u,hJ as O,er as D,cT as E,b1 as w,jd as U,c5 as H,b7 as _,je as N,ac as z}from"./iframe-C1qQ09LF.js";import{S as G}from"./Sandbox.web-B2xP21Qp.js";import{S as R}from"./StoryPageWrapper-CS0_5maI.js";const q=()=>t.jsxs(R,{componentName:"ActionList",componentDescription:"ActionList contains list of ActionList Items with or without in sections to perform particular actions.",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=76148-71527&t=Omk4hcIEm7PBLJAr-1&scaling=min-zoom&page-id=18766%3A294914&mode=design",children:[t.jsx(P,{children:"Usage"}),t.jsx(G,{editorHeight:500,children:`
          import { 
              Box, 
              ActionList, 
              ActionListItem,
              ActionListSection,
              ActionListItemIcon,
              ActionListItemAsset,
              ActionListItemText,
              LogOutIcon,
              SettingsIcon,
              DownloadIcon,
              Button 
          } from '@greenloom/ui/components';

          function App() {
              return (
                  <Box backgroundColor="surface.background.gray.intense">
                  <ActionList>
                    <ActionListItem
                      title="Profile"
                      value="profile"
                    />
                    <ActionListSection title="Help">
                    <ActionListItem
                      leading={<ActionListItemIcon icon={SettingsIcon} />}
                      title="Settings"
                      value="settings"
                      isDisabled={true}
                    />
                    <ActionListItem
                      leading={<ActionListItemIcon icon={DownloadIcon} />}
                      title="Download"
                      value="download"
                    />
                    
                    </ActionListSection>
                    <ActionListItem
                      leading={<ActionListItemAsset src="https://flagcdn.com/w20/in.png" alt="india" />}
                      title="Pricing"
                      value="pricing"
                    />
                    <ActionListItem
                      leading={<ActionListItemIcon icon={LogOutIcon} />}
                      title="Log Out"
                      value="logout"
                      intent="negative"
                    />
                  </ActionList>
                  </Box>
              )
          }

          export default App;
        `})]}),Q={title:"Components/Dropdown/ActionList/Stories",component:r,parameters:{docs:{page:q}}},F=()=>t.jsx(l,{display:"flex",flexDirection:"column",children:t.jsx(m,{backgroundColor:"surface.background.gray.intense",children:t.jsxs(r,{children:[t.jsx(e,{title:"Item 1",value:"item1"}),t.jsx(e,{title:"Item 2",value:"item2"})]})})}),n=F.bind({});n.storyName="Default";n.parameters={docs:{description:{story:"Action List has Items inside as a list"}}};const J=()=>t.jsx(l,{display:"flex",flexDirection:"column",children:t.jsx(m,{backgroundColor:"surface.background.gray.intense",children:t.jsxs(r,{children:[t.jsx(e,{leading:t.jsx(i,{icon:E}),title:"Settings",value:"settings"}),t.jsx(e,{leading:t.jsx(i,{icon:w}),title:"Download",value:"download"}),t.jsx(e,{leading:t.jsx(U,{src:"https://flagcdn.com/w20/in.png",alt:"india"}),title:"Pricing",value:"pricing"})]})})}),o=J.bind({});o.storyName="Leading icons/images on Items";o.parameters={docs:{description:{story:"Items in Action List can have leading components for better look"}}};const M=()=>t.jsx(l,{display:"flex",flexDirection:"column",children:t.jsx(m,{backgroundColor:"surface.background.gray.intense",children:t.jsxs(r,{children:[t.jsx(e,{title:"Bank Settings",value:"bank_settings",trailing:t.jsx(i,{icon:_})}),t.jsx(e,{title:"FAQs, Live Chat",value:"faqs",trailing:t.jsx(N,{children:"⌘ + H"})}),t.jsx(e,{title:"Create a Payout",description:"Pay a single beneficiary",value:"create_payout",leading:t.jsx(i,{icon:w}),trailing:t.jsx(i,{icon:z})})]})})}),s=M.bind({});s.storyName="Trailing icons/texts on Items";s.parameters={docs:{description:{story:"Items in Action List can have trailing icons and texts"}}};const V=()=>t.jsx(l,{display:"flex",flexDirection:"column",children:t.jsx(m,{backgroundColor:"surface.background.gray.intense",children:t.jsxs(r,{children:[t.jsx(e,{title:"Profile",value:"profile",leading:t.jsx(i,{icon:d})}),t.jsxs(C,{title:"Account @profile",children:[t.jsx(e,{title:"Transactions",value:"transactions",leading:t.jsx(i,{icon:H})}),t.jsx(e,{title:"Banks",value:"banks",leading:t.jsx(i,{icon:_})})]}),t.jsx(e,{title:"Logout",value:"logout",intent:"negative",leading:t.jsx(i,{icon:D})})]})})}),a=V.bind({});a.storyName="With Sections";a.parameters={docs:{description:{story:"Items in Action List can be within a section"}}};const X=()=>t.jsx(l,{display:"flex",flexDirection:"column",children:t.jsx(m,{backgroundColor:"surface.background.gray.intense",maxWidth:"300px",children:t.jsxs(r,{children:[t.jsxs(C,{title:"Account",children:[t.jsx(e,{title:"Profile",value:"profile",leading:t.jsx(W,{icon:d,color:"primary",name:"Saurabh Daware"})}),t.jsx(e,{title:"Credit",value:"credit",leading:t.jsx(i,{icon:d}),description:"check your credit here!"}),t.jsx(e,{title:"Disabled",value:"disabled",isDisabled:!0})]}),t.jsx(e,{title:"Go to Home",value:"home",href:"https://greenloom.ai",target:"_blank"}),t.jsx(e,{title:"Alert user",value:"alert_user",onClick:()=>{alert("Alert user is clicked!")}}),t.jsx(e,{title:"Systems",value:"systems",href:"https://greenloom.ai/careers",target:"_blank",titleSuffix:t.jsxs(T,{children:[t.jsx(u,{icon:O,color:"information",children:"unstable"}),t.jsx(u,{children:"last updated: 2hr ago"})]})}),t.jsx(e,{leading:t.jsx(i,{icon:d}),title:"saurabhdaware.razorpay@gmail.com",value:"email"}),t.jsx(e,{leading:t.jsx(i,{icon:D}),title:"Log Out",value:"logout",intent:"negative"})]})})}),c=X.bind({});c.storyName="Custom Items";c.parameters={docs:{description:{story:"Items in Action List can be customized based on various ways"}}};var g,A,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => <BaseBox display="flex" flexDirection="column">
    <Box backgroundColor="surface.background.gray.intense">
      <ActionListComponent>
        <ActionListItem title="Item 1" value="item1" />
        <ActionListItem title="Item 2" value="item2" />
      </ActionListComponent>
    </Box>
  </BaseBox>`,...(p=(A=n.parameters)==null?void 0:A.docs)==null?void 0:p.source}}};var L,x,I;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <BaseBox display="flex" flexDirection="column">
      <Box backgroundColor="surface.background.gray.intense">
        <ActionListComponent>
          <ActionListItem leading={<ActionListItemIcon icon={SettingsIcon} />} title="Settings" value="settings" />
          <ActionListItem leading={<ActionListItemIcon icon={DownloadIcon} />} title="Download" value="download" />
          <ActionListItem leading={<ActionListItemAsset src="https://flagcdn.com/w20/in.png" alt="india" />} title="Pricing" value="pricing" />
        </ActionListComponent>
      </Box>
    </BaseBox>;
}`,...(I=(x=o.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var h,f,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <BaseBox display="flex" flexDirection="column">
      <Box backgroundColor="surface.background.gray.intense">
        <ActionListComponent>
          <ActionListItem title="Bank Settings" value="bank_settings" trailing={<ActionListItemIcon icon={BankIcon} />} />
          <ActionListItem title="FAQs, Live Chat" value="faqs" trailing={<ActionListItemText>⌘ + H</ActionListItemText>} />
          <ActionListItem title="Create a Payout" description="Pay a single beneficiary" value="create_payout" leading={<ActionListItemIcon icon={DownloadIcon} />} trailing={<ActionListItemIcon icon={ArrowRightIcon} />} />
        </ActionListComponent>
      </Box>
    </BaseBox>;
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var b,v,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <BaseBox display="flex" flexDirection="column">
      <Box backgroundColor="surface.background.gray.intense">
        <ActionListComponent>
          <ActionListItem title="Profile" value="profile" leading={<ActionListItemIcon icon={UserIcon} />} />
          <ActionListSection title="Account @profile">
            <ActionListItem title="Transactions" value="transactions" leading={<ActionListItemIcon icon={TransactionsIcon} />} />
            <ActionListItem title="Banks" value="banks" leading={<ActionListItemIcon icon={BankIcon} />} />
          </ActionListSection>
          <ActionListItem title="Logout" value="logout" intent="negative" leading={<ActionListItemIcon icon={LogOutIcon} />} />
        </ActionListComponent>
      </Box>
    </BaseBox>;
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var B,k,S;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <BaseBox display="flex" flexDirection="column">
      <Box backgroundColor="surface.background.gray.intense" maxWidth="300px">
        <ActionListComponent>
          <ActionListSection title="Account">
            <ActionListItem title="Profile" value="profile" leading={<ActionListItemAvatar icon={UserIcon} color="primary" name="Saurabh Daware" />} />
            <ActionListItem title="Credit" value="credit" leading={<ActionListItemIcon icon={UserIcon} />} description="check your credit here!" />
            <ActionListItem title="Disabled" value="disabled" isDisabled />
          </ActionListSection>
          <ActionListItem title="Go to Home" value="home" href="https://greenloom.ai" target="_blank" />
          <ActionListItem title="Alert user" value="alert_user" onClick={() => {
          // eslint-disable-next-line no-alert
          alert('Alert user is clicked!');
        }} />
          <ActionListItem title="Systems" value="systems" href="https://greenloom.ai/careers" target="_blank" titleSuffix={<ActionListItemBadgeGroup>
                <ActionListItemBadge icon={ActivityIcon} color="information">
                  unstable
                </ActionListItemBadge>
                <ActionListItemBadge>last updated: 2hr ago</ActionListItemBadge>
              </ActionListItemBadgeGroup>} />
          <ActionListItem leading={<ActionListItemIcon icon={UserIcon} />} title="saurabhdaware.razorpay@gmail.com" value="email" />
          <ActionListItem leading={<ActionListItemIcon icon={LogOutIcon} />} title="Log Out" value="logout" intent="negative" />
        </ActionListComponent>
      </Box>
    </BaseBox>;
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const Z=["ActionList","ActionListWithLeadingComponents","ActionListWithTrailingComponents","ActionListWithSections","ActionListWithCustomItems"],tt=Object.freeze(Object.defineProperty({__proto__:null,ActionList:n,ActionListWithCustomItems:c,ActionListWithLeadingComponents:o,ActionListWithSections:a,ActionListWithTrailingComponents:s,__namedExportsOrder:Z,default:Q},Symbol.toStringTag,{value:"Module"}));export{tt as a};
