import{j as t,C as A,B as l,H as e,x as o,T as d,l as m,M as p}from"./iframe-C1qQ09LF.js";import{useMDXComponents as L}from"./index-Au6382uh.js";import{S as i}from"./ScrollLink-CHOtCgGV.js";import{S as x}from"./StoryPageWrapper-CS0_5maI.js";import{a as u,V as c}from"./Sandbox.web-C7diOxlu.js";import{A as n}from"./ArgsTable-B4Tlgeta.js";import"./preload-helper-Dp1pzeXC.js";import"./componentStatusData-8pChZ-5h.js";import"./baseCode-DnWYDQ6N.js";const I=`
  import { 
    Box, 
    ActionList, 
    ActionListItem,
    ActionListSection,
    ActionListItemIcon,
    ActionListItemAsset,
    ActionListItemText,
    // Icons
    LogOutIcon,
    UserIcon,
    MyAccountIcon,
    SettingsIcon,
    DownloadIcon,
    FileTextIcon,
    Button 
  } from '@greenloom/loom/components';

  function App() {
    return (
    <Box backgroundColor="surface.background.gray.intense">
      <ActionList>
        <ActionListItem
          leading={<ActionListItemIcon icon={UserIcon} />}
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
`,h=`
  import { Box, ActionList, ActionListItem } from '@greenloom/loom/components';

  function App() {
    return (
    <Box backgroundColor="surface.background.gray.intense">
      <ActionList>
        <ActionListItem title="Mumbai" value="mumbai" />
        <ActionListItem title="Bangalore" value="bangalore" />
      </ActionList>
    </Box>
    )
  }

  export default App;
`,f=`
  import { 
    Box, 
    ActionList, 
    ActionListItem, 
    ActionListItemIcon, 
    ActionListItemText, 
    ActionListItemBadgeGroup,
    ActionListItemBadge,
    HomeIcon 
  } from '@greenloom/loom/components';

  function App() {
    return (
    <Box backgroundColor="surface.background.gray.intense">
      <ActionList>
        <ActionListItem 
          title="Title"
          titleSuffix={(
            <ActionListItemBadgeGroup>
              <ActionListItemBadge>as: Keyword</ActionListItemBadge>
              <ActionListItemBadge>in: Something</ActionListItemBadge>
            </ActionListItemBadgeGroup>
          )}
          value="actionlist-value" 
          description="Description of the ActionListItem" 
          leading={<ActionListItemIcon icon={HomeIcon} />} 
          trailing={<ActionListItemText>⌘ + H</ActionListItemText>}
        />
      </ActionList>
    </Box>
    )
  }

  export default App;
`,j=`
  import { 
    Box, 
    ActionList, 
    ActionListItem, 
    ActionListSection,
  } from '@greenloom/loom/components';

  function App() {
    return (
    <Box backgroundColor="surface.background.gray.intense">
      <ActionList>
        {/* You can multiple sections like this 👇🏼 */}
        <ActionListSection title="Account @blade">
          <ActionListItem 
            title="Your Profile"
            value="your-profile" 
          />
          <ActionListItem 
            title="Settings"
            value="settings" 
          />
        </ActionListSection>
        <ActionListItem 
          title="Log Out"
          value="logout"
          intent="negative"
        />
      </ActionList>
    </Box>
    )
  }

  export default App;
`,r={ActionList:{children:t.jsxs(t.Fragment,{children:[t.jsx(i,{href:"#actionlistitem",children:"<ActionListItem[] />"})," |"," ",t.jsx(i,{href:"#actionlistsection",children:"<ActionListSection[] />"})]}),isVirtualized:{note:"Currently only works with ActionList and ActionListSection",type:"boolean"}},ActionListItem:{title:"string",description:"string",value:"string",titleSuffix:t.jsxs(t.Fragment,{children:[t.jsx(i,{href:"#actionlistitembadge",children:"<ActionListItemBadge />"})," |"," ",t.jsx(i,{href:"#actionlistitembadgegroup",children:"<ActionListItemBadgeGroup />"})]}),leading:t.jsxs(t.Fragment,{children:[t.jsx(i,{href:"#actionlistitemicon",children:"<ActionListItemIcon />"})," |"," ",t.jsx(i,{href:"#actionlistitemasset",children:"<ActionListItemAsset />"})]}),trailing:t.jsxs(t.Fragment,{children:[t.jsx(i,{href:"#actionlistitemicon",children:"<ActionListItemIcon />"})," |"," ",t.jsx(i,{href:"#actionlistitemtext",children:"<ActionListItemText />"})]}),isDisabled:"boolean",intent:{note:"For non-select menu triggers",type:"undefined | 'negative'"},href:{note:"For non-select menu triggers",type:"string"},target:"string",onClick:{note:"For controlled menu",type:t.jsx(A,{children:"({name, value}) => {}"})},isSelected:{note:"For controlled menu",type:"boolean"}},ActionListSection:{title:"string",children:t.jsx(i,{href:"#actionlistitem",children:"<ActionListItem[] />"})}},B=()=>t.jsxs(x,{componentDescription:"A list of action items that can be rendered inside Dropdown. Composite of multiple components like ActionList, ActionListItem, ActionListSection, and more",componentName:"ActionList",showStorybookControls:!1,imports:"",note:"ActionList is meant to be used only inside the Dropdown component. Things will not work as expected if you are using this without Dropdown",figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=76148-71527&t=pCEvzWr2vHxFBqwa-1&scaling=min-zoom&page-id=18766%3A294914&mode=design",children:[t.jsxs(l,{as:"section",children:[t.jsx(e,{size:"xlarge",children:"Playground"}),t.jsx(u,{editorHeight:400,children:I})]}),t.jsxs(l,{as:"section",paddingBottom:"spacing.9",children:[t.jsx(e,{size:"xlarge",children:"ActionList"}),t.jsx(c,{code:h}),t.jsx(n,{data:r.ActionList})]}),t.jsxs(o,{as:"section",paddingBottom:"spacing.9",id:"actionlistitem",children:[t.jsx(e,{size:"large",children:"ActionListItem"}),t.jsx(c,{code:f}),t.jsx(n,{data:r.ActionListItem}),t.jsxs(o,{id:"actionlistitemicon",children:[t.jsx(e,{size:"large",children:"ActionListItemIcon"}),t.jsx(n,{data:{icon:t.jsx(A,{children:"IconComponent"})}})]}),t.jsxs(o,{id:"actionlistitemtext",children:[t.jsx(e,{size:"large",children:"ActionListItemText"}),t.jsx(n,{data:{children:"string"}})]}),t.jsxs(o,{id:"actionlistitemasset",children:[t.jsx(e,{size:"large",children:"ActionListItemAsset"}),t.jsx(n,{data:{href:"string",alt:"string"}})]}),t.jsxs(o,{id:"actionlistitembadgegroup",children:[t.jsx(e,{size:"large",children:"ActionListItemBadgeGroup"}),t.jsx(n,{data:{children:t.jsx(i,{href:"#actionlistitembadge",children:"<ActionListItemBadge />[]"})}})]}),t.jsxs(o,{id:"actionlistitembadge",children:[t.jsx(e,{size:"large",children:"ActionListItemBadge"}),t.jsxs(d,{marginTop:"spacing.3",children:["Shares same props as ",t.jsx(m,{href:"/?path=/docs/components-badge--badge",children:"Badge"})]}),t.jsxs(d,{marginTop:"spacing.3",children:["Checkout"," ",t.jsx(m,{href:"/?path=/story/components-dropdown-with-autocomplete--controlled-filtering",children:"Custom Filtering with AutoComplete"})," ","for usage of ActionListItemBadge"]})]})]}),t.jsxs(o,{as:"section",id:"actionlistsection",children:[t.jsx(e,{size:"xlarge",children:"ActionListSection"}),t.jsx(c,{minHeight:"250px",code:j}),t.jsx(n,{data:r.ActionListSection})]})]});function g(s){return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Components/Dropdown/ActionList/Docs"}),`
`,t.jsx(B,{})]})}function z(s={}){const{wrapper:a}={...L(),...s.components};return a?t.jsx(a,{...s,children:t.jsx(g,{...s})}):g()}export{z as default};
