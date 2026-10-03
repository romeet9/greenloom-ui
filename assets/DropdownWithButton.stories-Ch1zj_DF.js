import{aw as u,at as r,j as e,B as a,d_ as De,aS as d,aq as p,as as we,ar as o,ad as g,jg as pe,b9 as Ie,y as ue,z as ge,jh as y,gN as C,T as xe,ji as me,gr as ve,gv as he,a8 as Le,F as fe,Y as Be,ax as v,N as Ae,I as je,O as Se,ba as ye,av as Ce,n as Oe,jf as ke}from"./iframe-C1qQ09LF.js";const be={title:"Components/Dropdown/With Button and Link",component:r,subcomponents:{DropdownButton:u},args:{},parameters:{viewMode:"story",options:{showPanel:!1},previewTabs:{"storybook/docs/panel":{hidden:!0}},chromatic:{disableSnapshot:!0}}},h=()=>e.jsx(a,{minHeight:"200px",width:{base:"100%",m:"500px"},padding:"spacing.5",children:e.jsxs(r,{children:[e.jsx(u,{icon:De,variant:"secondary",children:"My Account"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsxs(we,{title:"Account @saurabh",children:[e.jsx(o,{title:"My Profile",value:"profile",href:"https://youtu.be/4qRZmFYdozY?t=33",target:"_blank"}),e.jsx(o,{title:"Dashboard",value:"dashboard",href:"https://dashboard.greenloom.ai/"}),e.jsx(o,{title:"Settings",value:"settings",href:"https://memezila.com/Me-changing-the-phone-language-just-for-fun-Couldnt-find-language-setting-now-meme-5150"})]}),e.jsx(o,{intent:"negative",title:"Log Out",value:"logout",onClick:()=>{console.log("Logging out")}})]})})]})}),A=()=>{const[n,l]=g.useState("latest-added"),[t,s]=g.useState(!1);return e.jsxs(a,{padding:"spacing.10",display:"flex",alignItems:"center",gap:"spacing.2",children:[e.jsx(xe,{children:"Sort By"}),e.jsx(a,{flex:"1",children:e.jsxs(r,{isOpen:t,onOpenChange:s,children:[e.jsx(me,{icon:t?ve:he,iconPosition:"right",children:n??""}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{onClick:({name:i,value:c})=>{console.log({name:i,value:c}),l(i)},isSelected:n==="latest-added",title:"Latest Added",value:"latest-added"}),e.jsx(o,{onClick:({name:i,value:c})=>{console.log({name:i,value:c}),l(i)},isSelected:n==="latest-invoice",title:"Latest Invoice",value:"latest-invoice"}),e.jsx(o,{onClick:({name:i,value:c})=>{console.log({name:i,value:c}),l(i)},isSelected:n==="oldest-due-date",title:"Oldest Due Date",value:"oldest-due-date"})]})})]})})]})},j=()=>{const[n,l]=g.useState("latest-added");return e.jsx(a,{padding:"spacing.10",children:e.jsxs(r,{children:[e.jsx(y,{icon:C,accessibilityLabel:"Set Status"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{onClick:({name:t,value:s})=>{console.log({name:t,value:s}),l(t)},isSelected:n==="latest-added",title:"Latest Added",value:"latest-added"}),e.jsx(o,{onClick:({name:t,value:s})=>{console.log({name:t,value:s}),l(t)},isSelected:n==="latest-invoice",title:"Latest Invoice",value:"latest-invoice"}),e.jsx(o,{onClick:({name:t,value:s})=>{console.log({name:t,value:s}),l(t)},isSelected:n==="oldest-due-date",title:"Oldest Due Date",value:"oldest-due-date"})]})})]})})},S=()=>e.jsxs(a,{children:[e.jsx(a,{display:"inline-flex",position:"fixed",left:"spacing.5",top:"spacing.5",children:e.jsxs(r,{children:[e.jsx(u,{children:"Top Left Menu"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:"Apples",value:"Apples"}),e.jsx(o,{title:"Appricots",value:"Appricots"})]})})]})}),e.jsx(a,{display:"inline-flex",position:"fixed",right:"spacing.5",top:"spacing.5",children:e.jsxs(r,{children:[e.jsx(u,{children:"Top Right Menu"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:"Apples",value:"Apples"}),e.jsx(o,{title:"Appricots",value:"Appricots"})]})})]})}),e.jsx(a,{display:"inline-flex",position:"fixed",right:"spacing.5",bottom:"spacing.5",children:e.jsxs(r,{children:[e.jsx(u,{children:"Bottom Right Menu"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:"Apples",value:"Apples"}),e.jsx(o,{title:"Appricots",value:"Appricots"})]})})]})}),e.jsx(a,{display:"inline-flex",position:"fixed",left:"spacing.5",bottom:"spacing.5",children:e.jsxs(r,{children:[e.jsx(u,{children:"Bottom Left Menu"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:"Apples",value:"Apples"}),e.jsx(o,{title:"Appricots",value:"Appricots"})]})})]})})]}),D=()=>{const[n,l]=g.useState();return e.jsx(a,{minHeight:"200px",padding:"spacing.5",children:e.jsxs(r,{children:[e.jsxs(u,{variant:"tertiary",children:["Status: ",n??""]}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{onClick:({name:t,value:s})=>{console.log({name:t,value:s}),l(t)},leading:e.jsx(v,{icon:Ae}),isSelected:n==="approve",title:"Approve",value:"approve"}),e.jsx(o,{onClick:({name:t,value:s})=>{console.log({name:t,value:s}),l(t)},leading:e.jsx(v,{icon:je}),isSelected:n==="in-progress",title:"In Progress",value:"in-progress"}),e.jsx(o,{onClick:({name:t,value:s})=>{console.log({name:t,value:s}),l(t)},leading:e.jsx(v,{icon:Se}),isSelected:n==="reject",title:"Reject",value:"reject",intent:"negative"})]})})]})})},w=()=>{const[n,l]=g.useState([]),t=({name:s,value:i})=>{if(i){const c=n.indexOf(s);l([...n.slice(0,c),...n.slice(c+1)])}else l([...n,s])};return e.jsxs(a,{minHeight:"200px",padding:"spacing.5",children:[e.jsx(a,{display:"flex",alignItems:"center",flexWrap:"wrap",paddingBottom:"spacing.5",minHeight:"spacing.10",children:n.map(s=>e.jsx(ke,{marginRight:"spacing.3",onDismiss:()=>{t({name:s,value:!0})},children:s},s))}),e.jsxs(r,{selectionType:"multiple",children:[e.jsxs(u,{variant:"tertiary",children:["Filters: ",n.length," Applied"]}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{onClick:({name:s,value:i})=>{console.log({name:s,value:i}),t({name:s,value:i})},isSelected:n.includes("< 3 months"),title:"Last 3 months",value:"< 3 months"}),e.jsx(o,{onClick:({name:s,value:i})=>{console.log({name:s,value:i}),t({name:s,value:i})},isSelected:n.includes("> 1000rs"),title:"More than 1000rs",value:"> 1000rs"}),e.jsx(o,{onClick:({name:s,value:i})=>{console.log({name:s,value:i}),t({name:s,value:i})},isSelected:n.includes("failed"),title:"Failed Transactions",value:"failed"})]})})]})]})},I=()=>{const[n,l]=g.useState("latest-added");return e.jsx(a,{padding:"spacing.10",children:e.jsx(ue,{content:"Change Status",children:e.jsx(ge,{children:e.jsxs(r,{children:[e.jsx(y,{icon:C,accessibilityLabel:"Set Status"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{onClick:({name:t,value:s})=>{console.log({name:t,value:s}),l(t)},isSelected:n==="latest-added",title:"Latest Added",value:"latest-added"}),e.jsx(o,{onClick:({name:t,value:s})=>{console.log({name:t,value:s}),l(t)},isSelected:n==="latest-invoice",title:"Latest Invoice",value:"latest-invoice"}),e.jsx(o,{onClick:({name:t,value:s})=>{console.log({name:t,value:s}),l(t)},isSelected:n==="oldest-due-date",title:"Oldest Due Date",value:"oldest-due-date"})]})})]})})})})},x=()=>{const[n,l]=g.useState();return e.jsx(a,{minHeight:"200px",padding:"spacing.10",children:e.jsxs(r,{children:[e.jsxs(u,{variant:"tertiary",children:["Status: ",n??""]}),e.jsxs(d,{children:[e.jsx(pe,{leading:e.jsx(Be,{color:"surface.icon.gray.normal",size:"large"}),title:"Header Title Header Title Header Title Header Title Header Title",subtitle:"Header Subtitle",titleSuffix:e.jsx(fe,{color:"positive",children:"New"}),trailing:e.jsx(Le,{value:1e3})}),e.jsxs(p,{children:[e.jsx(o,{onClick:({name:t,value:s})=>{console.log({name:t,value:s}),l(t)},leading:e.jsx(v,{icon:Ae}),isSelected:n==="approve",title:"Approve",value:"approve"}),e.jsx(o,{onClick:({name:t,value:s})=>{console.log({name:t,value:s}),l(t)},leading:e.jsx(v,{icon:je}),isSelected:n==="in-progress",title:"In Progress",value:"in-progress"}),e.jsx(o,{onClick:({name:t,value:s})=>{console.log({name:t,value:s}),l(t)},leading:e.jsx(v,{icon:Se}),isSelected:n==="reject",title:"Reject",value:"reject",intent:"negative"})]}),e.jsx(ye,{children:e.jsxs(a,{display:"flex",alignItems:"center",justifyContent:"center",minWidth:"300px",children:[e.jsx(a,{flex:"5",display:"flex",children:e.jsx(Ce,{children:"I agree terms and conditions"})}),e.jsx(a,{flex:"2",children:e.jsx(Oe,{isFullWidth:!0,children:"Apply"})})]})})]})]})})};x.parameters={chromatic:{disableSnapshot:!1}};const L=()=>e.jsxs(a,{children:[e.jsx(a,{display:"inline-flex",position:"fixed",left:"spacing.5",top:"spacing.5",children:e.jsxs(r,{children:[e.jsx(u,{children:"Top Left Menu"}),e.jsx(d,{width:"70%",children:e.jsxs(p,{children:[e.jsx(o,{title:"Apples",value:"Apples"}),e.jsx(o,{title:"Appricots",value:"Appricots"})]})})]})}),e.jsx(a,{display:"inline-flex",position:"fixed",right:"spacing.5",top:"spacing.5",children:e.jsxs(r,{children:[e.jsx(u,{children:"Top Right Menu"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:"Apples",value:"Apples"}),e.jsx(o,{title:"Appricots",value:"Appricots"})]})})]})}),e.jsx(a,{display:"inline-flex",position:"fixed",right:"spacing.5",bottom:"spacing.5",children:e.jsxs(r,{children:[e.jsx(u,{children:"Bottom Right Menu"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:"Apples",value:"Apples"}),e.jsx(o,{title:"Appricots",value:"Appricots"})]})})]})}),e.jsx(a,{display:"inline-flex",position:"fixed",left:"spacing.5",bottom:"spacing.5",children:e.jsxs(r,{children:[e.jsx(u,{children:"Bottom Left Menu"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{title:"Apples",value:"Apples"}),e.jsx(o,{title:"Appricots",value:"Appricots"})]})})]})})]}),Re=["Apples","Appricots","Cherries","Crab apples","Jambolan"],f=()=>{const[n,l]=g.useState([]);return e.jsxs(r,{selectionType:"multiple",margin:"spacing.4",children:[e.jsxs(u,{variant:"tertiary",children:["Fruits: ",n.length]}),e.jsxs(d,{width:"500px",maxWidth:"500px",children:[e.jsx(pe,{children:e.jsx(Ie,{label:"Search Fruits"})}),e.jsx(p,{children:Re.map(t=>e.jsx(o,{title:t,value:t,onClick:()=>l(Array.from(new Set([...n,t]))),isSelected:n.includes(t)},t))})]})]})},m=()=>{const[n,l]=g.useState("latest-added"),[t,s]=g.useState(!1);return e.jsxs(a,{padding:"spacing.10",display:"flex",alignItems:"center",gap:"spacing.2",children:[e.jsx(xe,{children:"Sort By"}),e.jsx(a,{flex:"1",children:e.jsxs(r,{onOpenChange:s,isOpen:t,children:[e.jsx(me,{icon:t?ve:he,iconPosition:"right",children:n??""}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{onClick:({name:i,value:c})=>{console.log({name:i,value:c}),l(i)},isSelected:n==="latest-added",title:"Latest Added",value:"latest-added"}),e.jsx(o,{onClick:({name:i,value:c})=>{console.log({name:i,value:c}),l(i)},isSelected:n==="latest-invoice",title:"Latest Invoice",value:"latest-invoice"}),e.jsx(o,{onClick:({name:i,value:c})=>{console.log({name:i,value:c}),l(i)},isSelected:n==="oldest-due-date",title:"Oldest Due Date",value:"oldest-due-date"})]})})]})})]})};m.parameters={chromatic:{disableSnapshot:!1}};const B=()=>{const[n,l]=g.useState("latest-added"),[t,s]=g.useState(!1);return e.jsx(a,{padding:"spacing.10",children:e.jsx(ue,{content:"Check Status",children:e.jsx(ge,{children:e.jsxs(r,{onOpenChange:s,isOpen:t,children:[e.jsx(y,{icon:C,accessibilityLabel:"Status Dropdown"}),e.jsx(d,{children:e.jsxs(p,{children:[e.jsx(o,{onClick:({name:i,value:c})=>{console.log({name:i,value:c}),l(i)},isSelected:n==="latest-added",title:"Latest Added",value:"latest-added"}),e.jsx(o,{onClick:({name:i,value:c})=>{console.log({name:i,value:c}),l(i)},isSelected:n==="latest-invoice",title:"Latest Invoice",value:"latest-invoice"}),e.jsx(o,{onClick:({name:i,value:c})=>{console.log({name:i,value:c}),l(i)},isSelected:n==="oldest-due-date",title:"Oldest Due Date",value:"oldest-due-date"})]})})]})})})})};var O,k,b;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box minHeight="200px" width={{
    base: '100%',
    m: '500px'
  }} padding="spacing.5">
      <Dropdown>
        <DropdownButton icon={MyAccountIcon} variant="secondary">
          My Account
        </DropdownButton>
        <DropdownOverlay>
          <ActionList>
            <ActionListSection title="Account @saurabh">
              <ActionListItem title="My Profile" value="profile" href="https://youtu.be/4qRZmFYdozY?t=33" target="_blank" />
              <ActionListItem title="Dashboard" value="dashboard" href="https://dashboard.greenloom.ai/" />
              <ActionListItem title="Settings" value="settings" href="https://memezila.com/Me-changing-the-phone-language-just-for-fun-Couldnt-find-language-setting-now-meme-5150" />
            </ActionListSection>
            <ActionListItem intent="negative" title="Log Out" value="logout" onClick={() => {
            console.log('Logging out');
          }} />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(b=(k=h.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var R,T,M;A.parameters={...A.parameters,docs:{...(R=A.parameters)==null?void 0:R.docs,source:{originalSource:`(): React.ReactElement => {
  const [status, setStatus] = React.useState<string | undefined>('latest-added');
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  return <Box padding="spacing.10" display="flex" alignItems="center" gap="spacing.2">
      <Text>Sort By</Text>
      <Box flex="1">
        <Dropdown isOpen={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownLink icon={isDropdownOpen ? ChevronUpIcon : ChevronDownIcon} iconPosition="right">
            {status ?? ''}
          </DropdownLink>
          <DropdownOverlay>
            <ActionList>
              <ActionListItem onClick={({
              name,
              value
            }) => {
              console.log({
                name,
                value
              });
              setStatus(name);
            }} isSelected={status === 'latest-added'} title="Latest Added" value="latest-added" />
              <ActionListItem onClick={({
              name,
              value
            }) => {
              console.log({
                name,
                value
              });
              setStatus(name);
            }} isSelected={status === 'latest-invoice'} title="Latest Invoice" value="latest-invoice" />
              <ActionListItem onClick={({
              name,
              value
            }) => {
              console.log({
                name,
                value
              });
              setStatus(name);
            }} isSelected={status === 'oldest-due-date'} title="Oldest Due Date" value="oldest-due-date" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
    </Box>;
}`,...(M=(T=A.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var W,H,F;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`(): React.ReactElement => {
  const [status, setStatus] = React.useState<string | undefined>('latest-added');
  return <Box padding="spacing.10">
      <Dropdown>
        <DropdownIconButton icon={BoxIcon} accessibilityLabel="Set Status" />
        <DropdownOverlay>
          <ActionList>
            <ActionListItem onClick={({
            name,
            value
          }) => {
            console.log({
              name,
              value
            });
            setStatus(name);
          }} isSelected={status === 'latest-added'} title="Latest Added" value="latest-added" />
            <ActionListItem onClick={({
            name,
            value
          }) => {
            console.log({
              name,
              value
            });
            setStatus(name);
          }} isSelected={status === 'latest-invoice'} title="Latest Invoice" value="latest-invoice" />
            <ActionListItem onClick={({
            name,
            value
          }) => {
            console.log({
              name,
              value
            });
            setStatus(name);
          }} isSelected={status === 'oldest-due-date'} title="Oldest Due Date" value="oldest-due-date" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(F=(H=j.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var P,E,_;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box>
      <Box display="inline-flex" position="fixed" left="spacing.5" top="spacing.5">
        <Dropdown>
          <DropdownButton>Top Left Menu</DropdownButton>
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Apples" value="Apples" />
              <ActionListItem title="Appricots" value="Appricots" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
      <Box display="inline-flex" position="fixed" right="spacing.5" top="spacing.5">
        <Dropdown>
          <DropdownButton>Top Right Menu</DropdownButton>
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Apples" value="Apples" />
              <ActionListItem title="Appricots" value="Appricots" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
      <Box display="inline-flex" position="fixed" right="spacing.5" bottom="spacing.5">
        <Dropdown>
          <DropdownButton>Bottom Right Menu</DropdownButton>
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Apples" value="Apples" />
              <ActionListItem title="Appricots" value="Appricots" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
      <Box display="inline-flex" position="fixed" left="spacing.5" bottom="spacing.5">
        <Dropdown>
          <DropdownButton>Bottom Left Menu</DropdownButton>
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Apples" value="Apples" />
              <ActionListItem title="Appricots" value="Appricots" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
    </Box>;
}`,...(_=(E=S.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var z,Y,N;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`(): React.ReactElement => {
  const [status, setStatus] = React.useState<string | undefined>();
  return <Box minHeight="200px" padding="spacing.5">
      <Dropdown>
        <DropdownButton variant="tertiary">Status: {status ?? ''}</DropdownButton>
        <DropdownOverlay>
          <ActionList>
            <ActionListItem onClick={({
            name,
            value
          }) => {
            console.log({
              name,
              value
            });
            setStatus(name);
          }} leading={<ActionListItemIcon icon={CheckIcon} />} isSelected={status === 'approve'} title="Approve" value="approve" />
            <ActionListItem onClick={({
            name,
            value
          }) => {
            console.log({
              name,
              value
            });
            setStatus(name);
          }} leading={<ActionListItemIcon icon={ClockIcon} />} isSelected={status === 'in-progress'} title="In Progress" value="in-progress" />
            <ActionListItem onClick={({
            name,
            value
          }) => {
            console.log({
              name,
              value
            });
            setStatus(name);
          }} leading={<ActionListItemIcon icon={CloseIcon} />} isSelected={status === 'reject'} title="Reject" value="reject" intent="negative" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(N=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:N.source}}};var q,U,Z;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`(): React.ReactElement => {
  const [filters, setFilters] = React.useState<string[]>([]);
  const toggleSelection = ({
    name,
    value
  }: {
    name: string;
    value?: boolean;
  }): void => {
    if (value) {
      // Value is true which means it is selected. Then we deselect it.
      const existingItemIndex = filters.indexOf(name);
      setFilters([...filters.slice(0, existingItemIndex), ...filters.slice(existingItemIndex + 1)]);
    } else {
      setFilters([...filters, name]);
    }
  };
  return <Box minHeight="200px" padding="spacing.5">
      <Box display="flex" alignItems="center" flexWrap="wrap" paddingBottom="spacing.5" minHeight="spacing.10">
        {filters.map(filter => <Tag key={filter} marginRight="spacing.3" onDismiss={() => {
        toggleSelection({
          name: filter,
          value: true
        });
      }}>
            {filter}
          </Tag>)}
      </Box>
      <Dropdown selectionType="multiple">
        <DropdownButton variant="tertiary">Filters: {filters.length} Applied</DropdownButton>
        <DropdownOverlay>
          <ActionList>
            <ActionListItem onClick={({
            name,
            value
          }) => {
            console.log({
              name,
              value
            });
            toggleSelection({
              name,
              value
            });
          }} isSelected={filters.includes('< 3 months')} title="Last 3 months" value="< 3 months" />
            <ActionListItem onClick={({
            name,
            value
          }) => {
            console.log({
              name,
              value
            });
            toggleSelection({
              name,
              value
            });
          }} isSelected={filters.includes('> 1000rs')} title="More than 1000rs" value="> 1000rs" />
            <ActionListItem onClick={({
            name,
            value
          }) => {
            console.log({
              name,
              value
            });
            toggleSelection({
              name,
              value
            });
          }} isSelected={filters.includes('failed')} title="Failed Transactions" value="failed" />
          </ActionList>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(Z=(U=w.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var J,V,G;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`(): React.ReactElement => {
  const [status, setStatus] = React.useState<string | undefined>('latest-added');
  return <Box padding="spacing.10">
      <Tooltip content="Change Status">
        <TooltipInteractiveWrapper>
          <Dropdown>
            <DropdownIconButton icon={BoxIcon} accessibilityLabel="Set Status" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem onClick={({
                name,
                value
              }) => {
                console.log({
                  name,
                  value
                });
                setStatus(name);
              }} isSelected={status === 'latest-added'} title="Latest Added" value="latest-added" />
                <ActionListItem onClick={({
                name,
                value
              }) => {
                console.log({
                  name,
                  value
                });
                setStatus(name);
              }} isSelected={status === 'latest-invoice'} title="Latest Invoice" value="latest-invoice" />
                <ActionListItem onClick={({
                name,
                value
              }) => {
                console.log({
                  name,
                  value
                });
                setStatus(name);
              }} isSelected={status === 'oldest-due-date'} title="Oldest Due Date" value="oldest-due-date" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
        </TooltipInteractiveWrapper>
      </Tooltip>
    </Box>;
}`,...(G=(V=I.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var K,Q,X;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`(): React.ReactElement => {
  const [status, setStatus] = React.useState<string | undefined>();
  return <Box minHeight="200px" padding="spacing.10">
      <Dropdown>
        <DropdownButton variant="tertiary">Status: {status ?? ''}</DropdownButton>
        <DropdownOverlay>
          <DropdownHeader leading={<StarIcon color="surface.icon.gray.normal" size="large" />} title="Header Title Header Title Header Title Header Title Header Title" subtitle="Header Subtitle" titleSuffix={<Badge color="positive">New</Badge>} trailing={<Amount value={1000} />} />
          <ActionList>
            <ActionListItem onClick={({
            name,
            value
          }) => {
            console.log({
              name,
              value
            });
            setStatus(name);
          }} leading={<ActionListItemIcon icon={CheckIcon} />} isSelected={status === 'approve'} title="Approve" value="approve" />
            <ActionListItem onClick={({
            name,
            value
          }) => {
            console.log({
              name,
              value
            });
            setStatus(name);
          }} leading={<ActionListItemIcon icon={ClockIcon} />} isSelected={status === 'in-progress'} title="In Progress" value="in-progress" />

            <ActionListItem onClick={({
            name,
            value
          }) => {
            console.log({
              name,
              value
            });
            setStatus(name);
          }} leading={<ActionListItemIcon icon={CloseIcon} />} isSelected={status === 'reject'} title="Reject" value="reject" intent="negative" />
          </ActionList>
          <DropdownFooter>
            <Box display="flex" alignItems="center" justifyContent="center" minWidth="300px">
              <Box flex="5" display="flex">
                <Checkbox>I agree terms and conditions</Checkbox>
              </Box>
              <Box flex="2">
                <Button isFullWidth>Apply</Button>
              </Box>
            </Box>
          </DropdownFooter>
        </DropdownOverlay>
      </Dropdown>
    </Box>;
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var $,ee,te;L.parameters={...L.parameters,docs:{...($=L.parameters)==null?void 0:$.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box>
      <Box display="inline-flex" position="fixed" left="spacing.5" top="spacing.5">
        <Dropdown>
          <DropdownButton>Top Left Menu</DropdownButton>
          <DropdownOverlay width="70%">
            <ActionList>
              <ActionListItem title="Apples" value="Apples" />
              <ActionListItem title="Appricots" value="Appricots" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
      <Box display="inline-flex" position="fixed" right="spacing.5" top="spacing.5">
        <Dropdown>
          <DropdownButton>Top Right Menu</DropdownButton>
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Apples" value="Apples" />
              <ActionListItem title="Appricots" value="Appricots" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
      <Box display="inline-flex" position="fixed" right="spacing.5" bottom="spacing.5">
        <Dropdown>
          <DropdownButton>Bottom Right Menu</DropdownButton>
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Apples" value="Apples" />
              <ActionListItem title="Appricots" value="Appricots" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
      <Box display="inline-flex" position="fixed" left="spacing.5" bottom="spacing.5">
        <Dropdown>
          <DropdownButton>Bottom Left Menu</DropdownButton>
          <DropdownOverlay>
            <ActionList>
              <ActionListItem title="Apples" value="Apples" />
              <ActionListItem title="Appricots" value="Appricots" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
    </Box>;
}`,...(te=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,se,oe;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`(): React.ReactElement => {
  const [selected, setSelected] = React.useState<string[]>([]);
  return <Dropdown selectionType="multiple" margin="spacing.4">
      <DropdownButton variant="tertiary">Fruits: {selected.length}</DropdownButton>
      <DropdownOverlay width="500px" maxWidth="500px">
        <DropdownHeader>
          <AutoComplete label="Search Fruits" />
        </DropdownHeader>
        <ActionList>
          {items.map(item => <ActionListItem key={item} title={item} value={item} onClick={() => setSelected(Array.from(new Set([...selected, item])))} isSelected={selected.includes(item)} />)}
        </ActionList>
      </DropdownOverlay>
    </Dropdown>;
}`,...(oe=(se=f.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,le,ae;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`(): React.ReactElement => {
  const [status, setStatus] = React.useState<string | undefined>('latest-added');
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  return <Box padding="spacing.10" display="flex" alignItems="center" gap="spacing.2">
      <Text>Sort By</Text>
      <Box flex="1">
        <Dropdown onOpenChange={setIsDropdownOpen} isOpen={isDropdownOpen}>
          <DropdownLink icon={isDropdownOpen ? ChevronUpIcon : ChevronDownIcon} iconPosition="right">
            {status ?? ''}
          </DropdownLink>
          <DropdownOverlay>
            <ActionList>
              <ActionListItem onClick={({
              name,
              value
            }) => {
              console.log({
                name,
                value
              });
              setStatus(name);
            }} isSelected={status === 'latest-added'} title="Latest Added" value="latest-added" />
              <ActionListItem onClick={({
              name,
              value
            }) => {
              console.log({
                name,
                value
              });
              setStatus(name);
            }} isSelected={status === 'latest-invoice'} title="Latest Invoice" value="latest-invoice" />

              <ActionListItem onClick={({
              name,
              value
            }) => {
              console.log({
                name,
                value
              });
              setStatus(name);
            }} isSelected={status === 'oldest-due-date'} title="Oldest Due Date" value="oldest-due-date" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </Box>
    </Box>;
}`,...(ae=(le=m.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ce,re,de;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`(): React.ReactElement => {
  const [status, setStatus] = React.useState<string | undefined>('latest-added');
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  return <Box padding="spacing.10">
      <Tooltip content="Check Status">
        <TooltipInteractiveWrapper>
          <Dropdown onOpenChange={setIsDropdownOpen} isOpen={isDropdownOpen}>
            <DropdownIconButton icon={BoxIcon} accessibilityLabel="Status Dropdown" />
            <DropdownOverlay>
              <ActionList>
                <ActionListItem onClick={({
                name,
                value
              }) => {
                console.log({
                  name,
                  value
                });
                setStatus(name);
              }} isSelected={status === 'latest-added'} title="Latest Added" value="latest-added" />
                <ActionListItem onClick={({
                name,
                value
              }) => {
                console.log({
                  name,
                  value
                });
                setStatus(name);
              }} isSelected={status === 'latest-invoice'} title="Latest Invoice" value="latest-invoice" />

                <ActionListItem onClick={({
                name,
                value
              }) => {
                console.log({
                  name,
                  value
                });
                setStatus(name);
              }} isSelected={status === 'oldest-due-date'} title="Oldest Due Date" value="oldest-due-date" />
              </ActionList>
            </DropdownOverlay>
          </Dropdown>
        </TooltipInteractiveWrapper>
      </Tooltip>
    </Box>;
}`,...(de=(re=B.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};const Te=["Default","WithLink","WithIconButton","WithAutoPositioning","WithControlledMenu","WithControlledMultiSelect","WithTooltip","InternalMenu","InternalAutoPositioning","InternalDropdownWithSearch","InternalLinkDropdown","InternalIconButtonDropdown"],We=Object.freeze(Object.defineProperty({__proto__:null,Default:h,InternalAutoPositioning:L,InternalDropdownWithSearch:f,InternalIconButtonDropdown:B,InternalLinkDropdown:m,InternalMenu:x,WithAutoPositioning:S,WithControlledMenu:D,WithControlledMultiSelect:w,WithIconButton:j,WithLink:A,WithTooltip:I,__namedExportsOrder:Te,default:be},Symbol.toStringTag,{value:"Module"}));export{We as d};
