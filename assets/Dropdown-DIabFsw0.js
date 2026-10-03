import{j as e,B as h,H as t,x as s,T as r,L as u,f as i,g as o,C as l,l as p,M as w}from"./iframe-C1qQ09LF.js";import{useMDXComponents as x}from"./index-Au6382uh.js";import{S as A}from"./StoryPageWrapper-CS0_5maI.js";import{a as L,V as c}from"./Sandbox.web-C7diOxlu.js";import{A as d}from"./ArgsTable-B4Tlgeta.js";import"./preload-helper-Dp1pzeXC.js";import"./componentStatusData-8pChZ-5h.js";import"./baseCode-DnWYDQ6N.js";const I=`
  import { 
    Dropdown, 
    DropdownOverlay,
    DropdownHeader,
    DropdownFooter,
    SelectInput,
    ActionList,
    ActionListItem,
    ActionListItemIcon,
    ActionListItemBadge,
    ActionListItemBadgeGroup,
    ActionListSection,
    HistoryIcon,
    HomeIcon,
    ArrowRightIcon,
    SettingsIcon,
    DownloadIcon,
    InfoIcon,
    FileTextIcon,
    Button
  } from '@greenloom/loom/components';

  function App() {
    return (
      <Dropdown 
        // Uncomment next line to make it multiselectable
        // selectionType="multiple"
      >
        <SelectInput
          label="Select Action"
          placeholder="Select Option"
          name="action"
          onChange={({ name, values }) => {
            console.log(name, values);
          }}
        />
        <DropdownOverlay>
          <DropdownHeader
            title="Header Title"
            subtitle="Header Subtitle"
          />
          <ActionList>
            <ActionListItem
              leading={<ActionListItemIcon icon={HomeIcon} />}
              titleSuffix={
                <ActionListItemBadgeGroup>
                  <ActionListItemBadge>as: Option</ActionListItemBadge>
                  <ActionListItemBadge>as: Main</ActionListItemBadge>
                </ActionListItemBadgeGroup>
              }
              trailing={<ActionListItemIcon icon={ArrowRightIcon} />}
              title="Home"
              value="home"
              description="Home sweet home it is"
            />
            <ActionListSection title="Options">
              <ActionListItem
                leading={<ActionListItemIcon icon={SettingsIcon} />}
                title="Settings"
                value="settings"
              />
              <ActionListItem
                leading={<ActionListItemIcon icon={DownloadIcon} />}
                title="Download"
                value="download"
              />
            </ActionListSection>
          </ActionList>
          <DropdownFooter>
            <Button isFullWidth onClick={console.log}>Apply</Button>
          </DropdownFooter>
        </DropdownOverlay>
      </Dropdown>
    )
  }

  export default App;
`,D=n=>`
  import { 
    Dropdown, 
    DropdownOverlay,
    SelectInput,
    ActionList,
    ActionListItem,
  } from '@greenloom/loom/components';

  function App() {
    return (
      <Dropdown 
        selectionType="${n}"
      >
        <SelectInput
          label="City"
          placeholder="Select your City"
          name="action"
          onChange={({ name, values }) => {
            console.log({ name, values });
          }}
        />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bangalore" value="bangalore" />
            <ActionListItem title="Mysore" value="mysore" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    )
  }

  export default App;
`,j=`
  import React from 'react';
  import {
    Dropdown,
    DropdownOverlay,
    SelectInput,
    ActionList,
    ActionListItem,
    Button,
  } from '@greenloom/loom/components';

  function App(args): React.ReactElement {
    const [currentSelection, setCurrentSelection] = React.useState<undefined | string>();
  
    return (
      <>
        <Button marginBottom="spacing.4" onClick={() => setCurrentSelection('bangalore')}>Select Bangalore</Button>
        <Button marginBottom="spacing.4" marginLeft="spacing.4" onClick={() => setCurrentSelection('')}>Clear Selection</Button>
        <Dropdown selectionType="single">
          <SelectInput
            label="Select City"
            value={currentSelection}
            onChange={(args) => {
              if (args) {
                setCurrentSelection(args.values[0]);
                console.log('onChange triggered');
              }
            }}
          />
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Mumbai" value="mumbai" />
              <ActionListItem title="Bangalore" value="bangalore" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </>
    );
  };

  export default App;
`,S=`
  import {
    Dropdown,
    DropdownOverlay,
    DropdownButton,
    ActionList,
    ActionListItem,
    ActionListSection,
    MyAccountIcon,
    Box,
  } from '@greenloom/loom/components';

  function App (): React.ReactElement {
    return (
      <Box minHeight="200px" width={{ base: '100%', m: '500px' }}>
        <Dropdown>
          <DropdownButton icon={MyAccountIcon} variant="secondary">
            My Account
          </DropdownButton>
          <DropdownOverlay>
            <ActionList>
              <ActionListSection title="Account @saurabh">
                <ActionListItem
                  title="My Profile"
                  value="profile"
                  href="https://youtu.be/4qRZmFYdozY?t=33"
                  target="_blank"
                />
                <ActionListItem
                  title="Dashboard"
                  value="dashboard"
                  href="https://dashboard.razorpay.com/"
                />
                <ActionListItem
                  title="Settings"
                  value="settings"
                  href="https://memezila.com/Me-changing-the-phone-language-just-for-fun-Couldnt-find-language-setting-now-meme-5150"
                />
              </ActionListSection>
              <ActionListItem
                intent="negative"
                title="Log Out"
                value="logout"
                onClick={() => {
                  // eslint-disable-next-line no-alert
                  alert('Logging out');
                }}
              />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
    );
  };

  export default App;
`,f=`
  import React from 'react';
  import {
    Dropdown,
    DropdownOverlay,
    DropdownButton,
    ActionList,
    ActionListItem,
    ActionListItemIcon,
    ActionListSection,
    Box,
    CheckIcon,
    ClockIcon,
    CloseIcon
  } from '@greenloom/loom/components';

  function App() {
    const [status, setStatus] = React.useState<string | undefined>();

    return (
      <Box minHeight="200px">
        <Dropdown>
          <DropdownButton variant="tertiary">Status: {status ?? ''}</DropdownButton>
          <DropdownOverlay>
            <ActionList>
              <ActionListItem
                onClick={({ name, value }) => {
                  console.log({ name, value });
                  setStatus(name);
                }}
                leading={<ActionListItemIcon icon={CheckIcon} />}
                isSelected={status === 'approve'}
                title="Approve"
                value="approve"
              />
              <ActionListItem
                onClick={({ name, value }) => {
                  console.log({ name, value });
                  setStatus(name);
                }}
                leading={<ActionListItemIcon icon={ClockIcon} />}
                isSelected={status === 'in-progress'}
                title="In Progress"
                value="in-progress"
              />

              <ActionListItem
                onClick={({ name, value }) => {
                  console.log({ name, value });
                  setStatus(name);
                }}
                leading={<ActionListItemIcon icon={CloseIcon} />}
                isSelected={status === 'reject'}
                title="Reject"
                value="reject"
                intent="negative"
              />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
    );
  };

  export default App;
`,a=(n="single")=>`
  import { 
    Dropdown, 
    DropdownOverlay,
    AutoComplete,
    ActionList,
    ActionListItem,
  } from '@greenloom/loom/components';

  function App() {
    return (
      <Dropdown 
        selectionType="${n}"
      >
        <AutoComplete
          label="City"
          placeholder="Select your City"
          name="action"
          onChange={({ name, values }) => {
            console.log({ name, values });
          }}
          onInputValueChange={({ name, value }) => {
            console.log({ name, value });
          }}
        />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem title="Mumbai" value="mumbai" />
            <ActionListItem title="Pune" value="pune" />
            <ActionListItem title="Bangalore" value="bangalore" />
            <ActionListItem title="Mysore" value="mysore" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    )
  }

  export default App;
`;try{a.displayName="getSimpleAutoComplete",a.__docgenInfo={description:"",displayName:"getSimpleAutoComplete",props:{}}}catch{}const y=()=>e.jsxs(A,{componentName:"Dropdown",componentDescription:"Dropdown component to help you create select menu or action menu. To create a menu, you would have to use this component + Trigger (SelectInput, AutoComplete, DropdownButton, DropdownLink) + ActionList",imports:"",showStorybookControls:!1,figmaURL:"https://www.figma.com/proto/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=76148-112797&t=52JyBlYu2aTTWc8p-1&scaling=min-zoom&page-id=21342%3A380660&mode=design",children:[e.jsxs(h,{as:"section",children:[e.jsx(t,{size:"xlarge",children:"Playground"}),e.jsx(L,{editorHeight:400,children:I})]}),e.jsxs(s,{id:"dropdown",as:"section",children:[e.jsx(t,{size:"xlarge",marginBottom:"spacing.4",children:"Dropdown"}),e.jsx(r,{children:"A Dropdown in Blade is usually a composite of 3 elements -"}),e.jsxs(u,{variant:"ordered-filled",marginY:"spacing.5",children:[e.jsxs(i,{children:[e.jsx(o,{href:"/?path=/docs/components-dropdown-dropdown--docs",children:"Dropdown"})," ","- Handles opening / closing of Dropdown"]}),e.jsxs(i,{children:["A Trigger - Can be"," ",e.jsx(o,{href:"/?path=/docs/components-dropdown-with-select-stories--props-playground",children:"SelectInput"}),","," ",e.jsx(o,{href:"/?path=/docs/components-dropdown-with-autocomplete-stories--props-playground",children:"AutoComplete"}),", DropdownButton (Has same props as"," ",e.jsx(o,{href:"/?path=/docs/components-button--default",children:"Button"}),"), or DropdownLink (Has same props as"," ",e.jsx(o,{href:"/?path=/docs/components-link--link-button",children:"Link"}),")"]}),e.jsxs(i,{children:[e.jsx(o,{href:"/?path=/docs/components-dropdown-actionlist-docs--docs",children:"ActionList"})," ","- List of Actionable items inside Dropdown. It can also be a"," ",e.jsx(o,{href:"/?path=/docs/components-treeview--docs",children:"TreeView"})," when the options are hierarchical"]})]}),e.jsx(d,{marginBottom:"spacing.3",marginTop:"spacing.8",data:{selectionType:"'single' | 'multiple'",children:e.jsxs(r,{children:["[",e.jsx(l,{children:"<SelectInput />"})," | ",e.jsx(l,{children:"<DropdownButton />"})," |"," ",e.jsx(l,{children:"<DropdownLink />"}),", ",e.jsx(l,{children:"<DropdownOverlay />"}),"]"]})}}),e.jsx(r,{children:"Also, Check out"}),e.jsxs(u,{marginBottom:"spacing.8",children:[e.jsx(i,{children:e.jsx(o,{target:"_blank",href:"/?path=/docs/components-dropdown-with-select-stories--props-playground",children:"SelectInput Props"})}),e.jsx(i,{children:e.jsx(o,{target:"_blank",href:"/?path=/docs/components-dropdown-with-autocomplete-stories--props-playground",children:"AutoComplete Props"})}),e.jsx(i,{children:e.jsx(o,{target:"_blank",href:"?path=/docs/components-dropdown-actionlist-docs--docs",children:"ActionList Props"})}),e.jsxs(i,{children:["DropdownButton (Has same props as"," ",e.jsx(o,{href:"/?path=/docs/components-button--default",children:"Button"}),")"]}),e.jsxs(i,{children:["DropdownLink (Has same props as"," ",e.jsx(o,{href:"/?path=/docs/components-link--link-button",children:"Link"}),")"]})]})]}),e.jsxs(s,{as:"section",id:"dropdownheader",children:[e.jsx(t,{size:"xlarge",children:"DropdownHeader"}),e.jsx(d,{data:{title:"string",subtitle:"string",leading:"ReactNode",titleSuffix:"ReactNode",trailing:"ReactNode"}})]}),e.jsxs(s,{as:"section",id:"dropdownfooter",children:[e.jsx(t,{size:"xlarge",children:"DropdownFooter"}),e.jsx(d,{data:{children:"ReactNode"}})]}),e.jsxs(s,{as:"section",children:[e.jsx(t,{size:"large",children:"With SelectInput"}),e.jsxs(r,{marginY:"spacing.3",children:["Check out more Select examples at"," ",e.jsx(p,{href:"/?path=/docs/components-dropdown-with-select--with-single-select",children:"Dropdown with SelectInput Stories"})]}),e.jsx(t,{size:"large",marginBottom:"spacing.3",children:"Simple Select"}),e.jsx(c,{minHeight:"250px",code:D("single")}),e.jsx(t,{size:"large",marginBottom:"spacing.3",children:"Controlled Select"}),e.jsx(c,{minHeight:"250px",code:j})]}),e.jsxs(s,{as:"section",children:[e.jsx(t,{size:"large",children:"With AutoComplete"}),e.jsxs(r,{marginY:"spacing.3",children:["Check out more AutoComplete examples at"," ",e.jsx(p,{href:"/?path=/docs/components-dropdown-with-autocomplete--with-single-select",children:"Dropdown with AutoComplete Stories"})]}),e.jsx(t,{size:"large",marginBottom:"spacing.3",children:"Simple Single Select"}),e.jsx(c,{minHeight:"250px",code:a("single")}),e.jsx(t,{size:"large",marginBottom:"spacing.3",children:"Simple Multi Select"}),e.jsx(c,{minHeight:"250px",code:a("multiple")})]}),e.jsxs(s,{as:"section",children:[e.jsx(t,{size:"large",marginBottom:"spacing.3",children:"With Button"}),e.jsxs(r,{marginY:"spacing.3",children:["Check out more Menu examples at"," ",e.jsx(p,{href:"/?path=/docs/components-dropdown-with-button-and-link--default",children:"Dropdown with Button Stories"})]}),e.jsx(t,{size:"large",marginBottom:"spacing.3",children:"Action Menu"}),e.jsx(c,{minHeight:"300px",code:S}),e.jsx(t,{size:"large",marginBottom:"spacing.3",children:"Selectable Menu"}),e.jsx(c,{minHeight:"250px",code:f})]})]});function g(n){return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Components/Dropdown/Dropdown"}),`
`,e.jsx(y,{})]})}function R(n={}){const{wrapper:m}={...x(),...n.components};return m?e.jsx(m,{...n,children:e.jsx(g,{...n})}):g()}export{R as default};
