import{ia as e,j as n,H as S,B as t,n as o,d9 as a,cR as r,b1 as s,T as i,c3 as b,y as j,bb as U,at as _,aw as X,gv as E,aS as Z,aq as q,ar as d,ib as Q}from"./iframe-C1qQ09LF.js";import{S as Y}from"./Sandbox.web-B2xP21Qp.js";import{S as J}from"./StoryPageWrapper-CS0_5maI.js";import{g as K}from"./storybookArgTypes-DFfQV31s.js";import{S as $}from"./StoryScrollView-CPRIWs7O.js";const nn=()=>n.jsxs(J,{componentName:"ButtonGroup",componentDescription:"The ButtonGroup component is used to group related buttons together.",apiDecisionLink:null,figmaURL:"https://www.figma.com/file/jubmQL9Z8V7881ayUD95ps/Blade-DSL?type=design&node-id=80753%3A108070&mode=design&t=iGYw4ygZL8cErFIL-1",children:[n.jsx(S,{size:"large",children:"Usage"}),n.jsx(Y,{showConsole:!0,children:`
        import {
          Button,
          ButtonGroup,
          RefreshIcon,
          ShareIcon,
          DownloadIcon,
        } from '@greenloom/ui/components';
        
        function App() {
          return (
            <ButtonGroup>
              <Button icon={RefreshIcon}>Sync</Button>
              <Button icon={ShareIcon}>Share</Button>
              <Button icon={DownloadIcon}>Download</Button>
            </ButtonGroup>
          )
        }

        export default App;
      `})]}),on={title:"Components/ButtonGroup",component:e,tags:["autodocs"],argTypes:K(),parameters:{docs:{page:nn}}},tn=c=>n.jsxs(e,{...c,children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:r,children:"Share"}),n.jsx(o,{icon:s,children:"Download"})]}),m=tn.bind({});m.storyName="Default";const en=c=>n.jsx(t,{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"200px",padding:"spacing.10",children:n.jsxs(e,{...c,children:[n.jsx(j,{content:"Create a new payout",children:n.jsx(o,{icon:U,children:"Payout"})}),n.jsxs(_,{children:[n.jsx(X,{icon:E,accessibilityLabel:"More actions"}),n.jsx(Z,{defaultPlacement:"bottom-end",children:n.jsxs(q,{children:[n.jsx(d,{title:"Bulk Payout",value:"bulk-payout"}),n.jsx(d,{title:"Upload Invoice",value:"upload-invoice"}),n.jsx(d,{title:"Add Contact",value:"add-contact"}),n.jsx(d,{title:"Team Member",value:"team-member"})]})})]})]})}),p=en.bind({});p.storyName="With Dropdown";const an=c=>{const y=["primary","secondary","tertiary"];return n.jsx(n.Fragment,{children:y.map(l=>n.jsxs(t,{marginBottom:"spacing.8",children:[n.jsx(S,{marginBottom:"spacing.3",children:l}),n.jsxs(e,{...c,variant:l,children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:r,children:"Share"}),n.jsx(o,{icon:s,children:"Download"})]})]},l))})},x=an.bind({});x.storyName="All Variants";const rn=c=>{const y=["primary","secondary","tertiary"];return n.jsx(n.Fragment,{children:y.map(l=>n.jsxs(t,{marginBottom:"spacing.8",children:[n.jsx(S,{marginBottom:"spacing.3",children:l}),n.jsxs(e,{...c,variant:l,children:[n.jsx(o,{icon:a,isLoading:!0,children:"Sync"}),n.jsx(o,{icon:r,children:"Share"}),n.jsx(o,{icon:s,children:"Download"})]})]},l))})},B=rn.bind({});B.storyName="All Variants With Loading";const sn=c=>{const y=["xsmall","small","medium","large"];return n.jsx(n.Fragment,{children:y.map(l=>n.jsxs(t,{marginBottom:"spacing.8",children:[n.jsx(S,{marginBottom:"spacing.3",children:l}),n.jsxs(e,{...c,size:l,children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{isLoading:!0,icon:r,children:"Share"}),n.jsx(o,{icon:s,children:"Download"})]})]},l))})},h=sn.bind({});h.storyName="All Sizes";const cn=c=>n.jsxs(e,{...c,children:[n.jsx(o,{icon:a,accessibilityLabel:"Sync"}),n.jsx(o,{icon:r,accessibilityLabel:"Share"}),n.jsx(o,{icon:s,accessibilityLabel:"Download"})]}),g=cn.bind({});g.storyName="Icons Only";const ln=()=>n.jsx($,{children:n.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.8",paddingBottom:"spacing.8",children:[n.jsxs(t,{children:[n.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Variants"}),n.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"Primary"}),n.jsxs(e,{variant:"primary",children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:r,children:"Share"}),n.jsx(o,{icon:s,children:"Download"})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"Secondary"}),n.jsxs(e,{variant:"secondary",children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:r,children:"Share"}),n.jsx(o,{icon:s,children:"Download"})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"Tertiary"}),n.jsxs(e,{variant:"tertiary",children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:r,children:"Share"}),n.jsx(o,{icon:s,children:"Download"})]})]})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Sizes"}),n.jsxs(t,{display:"flex",flexDirection:"row",gap:"spacing.5",flexWrap:"wrap",alignItems:"flex-end",children:[n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"XSmall"}),n.jsxs(e,{size:"xsmall",children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:r,children:"Share"})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"Small"}),n.jsxs(e,{size:"small",children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:r,children:"Share"})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"Medium"}),n.jsxs(e,{size:"medium",children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:r,children:"Share"})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"Large"}),n.jsxs(e,{size:"large",children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:r,children:"Share"})]})]})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Colors"}),n.jsxs(t,{display:"flex",flexDirection:"column",gap:"spacing.5",children:[n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"Primary Color"}),n.jsxs(e,{color:"primary",children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:r,children:"Share"}),n.jsx(o,{icon:s,children:"Download"})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"Positive Color"}),n.jsxs(e,{color:"positive",children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:r,children:"Share"}),n.jsx(o,{icon:s,children:"Download"})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"Negative Color"}),n.jsxs(e,{color:"negative",children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:r,children:"Share"}),n.jsx(o,{icon:s,children:"Download"})]})]}),n.jsxs(t,{padding:"spacing.4",backgroundColor:"surface.background.primary.intense",borderRadius:"medium",children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",color:"surface.text.staticWhite.normal",children:"White Color (on dark background)"}),n.jsxs(e,{color:"white",children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:r,children:"Share"}),n.jsx(o,{icon:s,children:"Download"})]})]})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Disabled State"}),n.jsxs(t,{display:"flex",flexDirection:"row",gap:"spacing.5",flexWrap:"wrap",children:[n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"Primary Disabled"}),n.jsxs(e,{variant:"primary",isDisabled:!0,children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:b,children:"Delete"})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"Secondary Disabled"}),n.jsxs(e,{variant:"secondary",isDisabled:!0,children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:b,children:"Delete"})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"Tertiary Disabled"}),n.jsxs(e,{variant:"tertiary",isDisabled:!0,children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:b,children:"Delete"})]})]})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Icon Only"}),n.jsxs(t,{display:"flex",flexDirection:"row",gap:"spacing.5",flexWrap:"wrap",alignItems:"flex-end",children:[n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"XSmall"}),n.jsxs(e,{size:"xsmall",children:[n.jsx(o,{icon:a,accessibilityLabel:"Sync"}),n.jsx(o,{icon:r,accessibilityLabel:"Share"}),n.jsx(o,{icon:s,accessibilityLabel:"Download"})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"Small"}),n.jsxs(e,{size:"small",children:[n.jsx(o,{icon:a,accessibilityLabel:"Sync"}),n.jsx(o,{icon:r,accessibilityLabel:"Share"}),n.jsx(o,{icon:s,accessibilityLabel:"Download"})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"Medium"}),n.jsxs(e,{size:"medium",children:[n.jsx(o,{icon:a,accessibilityLabel:"Sync"}),n.jsx(o,{icon:r,accessibilityLabel:"Share"}),n.jsx(o,{icon:s,accessibilityLabel:"Download"})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"small",marginBottom:"spacing.2",children:"Large"}),n.jsxs(e,{size:"large",children:[n.jsx(o,{icon:a,accessibilityLabel:"Sync"}),n.jsx(o,{icon:r,accessibilityLabel:"Share"}),n.jsx(o,{icon:s,accessibilityLabel:"Download"})]})]})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"Full Width"}),n.jsxs(e,{isFullWidth:!0,children:[n.jsx(o,{icon:a,children:"Sync"}),n.jsx(o,{icon:r,children:"Share"}),n.jsx(o,{icon:s,children:"Download"})]})]}),n.jsxs(t,{children:[n.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Tooltip"}),n.jsxs(e,{children:[n.jsx(j,{content:"Sync your data",children:n.jsx(o,{icon:a,children:"Sync"})}),n.jsx(j,{content:"Share with others",children:n.jsx(o,{icon:r,children:"Share"})}),n.jsx(j,{content:"Download file",children:n.jsx(o,{icon:s,children:"Download"})})]})]}),n.jsxs(t,{minHeight:"200px",children:[n.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Dropdown (Split Button)"}),n.jsxs(e,{children:[n.jsx(j,{content:"Create a new payout",children:n.jsx(o,{icon:U,children:"Payout"})}),n.jsxs(_,{children:[n.jsx(X,{icon:E,accessibilityLabel:"More actions"}),n.jsx(Z,{children:n.jsxs(q,{children:[n.jsx(d,{title:"Bulk Payout",value:"bulk-payout"}),n.jsx(d,{title:"Upload Invoice",value:"upload-invoice"}),n.jsx(d,{title:"Add Contact",value:"add-contact"})]})})]})]})]}),n.jsxs(t,{minHeight:"220px",children:[n.jsx(i,{size:"large",weight:"semibold",marginBottom:"spacing.4",color:"feedback.text.information.intense",children:"With Popover"}),n.jsxs(e,{children:[n.jsx(Q,{title:"Sync Data",content:n.jsx(i,{children:"Are you sure you want to sync all data?"}),footer:n.jsxs(t,{display:"flex",gap:"spacing.3",justifyContent:"flex-end",children:[n.jsx(o,{variant:"secondary",size:"xsmall",children:"Cancel"}),n.jsx(o,{size:"xsmall",children:"Confirm"})]}),children:n.jsx(o,{icon:a,children:"Sync"})}),n.jsx(o,{icon:r,children:"Share"}),n.jsx(o,{icon:s,children:"Download"})]})]})]})}),u=ln.bind({});u.storyName="Showcase";u.parameters={docs:{description:{story:"A comprehensive showcase of all ButtonGroup variants including variants, sizes, colors, disabled states, icon-only buttons, full width, and integration with Tooltip, Dropdown, and Popover."}}};var w,f,D;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <ButtonGroupComponent {...args}>
      <Button icon={RefreshIcon}>Sync</Button>
      <Button icon={ShareIcon}>Share</Button>
      <Button icon={DownloadIcon}>Download</Button>
    </ButtonGroupComponent>;
}`,...(D=(f=m.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var I,T,z;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return (
    // minHeight gives the absolutely positioned DropdownOverlay room to paint
    // below the trigger on React Native (same pattern as Dropdown InternalMenu).
    <Box display="flex" alignItems="center" justifyContent="center" minHeight="200px" padding="spacing.10">
      <ButtonGroupComponent {...args}>
        <Tooltip content="Create a new payout">
          <Button icon={PlusIcon}>Payout</Button>
        </Tooltip>
        <Dropdown>
          <DropdownButton icon={ChevronDownIcon} accessibilityLabel="More actions" />
          <DropdownOverlay defaultPlacement="bottom-end">
            <ActionList>
              <ActionListItem title="Bulk Payout" value="bulk-payout" />
              <ActionListItem title="Upload Invoice" value="upload-invoice" />
              <ActionListItem title="Add Contact" value="add-contact" />
              <ActionListItem title="Team Member" value="team-member" />
            </ActionList>
          </DropdownOverlay>
        </Dropdown>
      </ButtonGroupComponent>
    </Box>
  );
}`,...(z=(T=p.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var C,v,G;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const variants: ButtonGroupProps['variant'][] = ['primary', 'secondary', 'tertiary'];
  return <>
      {variants.map(variant => <Box key={variant} marginBottom="spacing.8">
          <Heading marginBottom="spacing.3">{variant}</Heading>
          <ButtonGroupComponent {...args} variant={variant}>
            <Button icon={RefreshIcon}>Sync</Button>
            <Button icon={ShareIcon}>Share</Button>
            <Button icon={DownloadIcon}>Download</Button>
          </ButtonGroupComponent>
        </Box>)}
    </>;
}`,...(G=(v=x.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var L,k,P;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const variants: ButtonGroupProps['variant'][] = ['primary', 'secondary', 'tertiary'];
  return <>
      {variants.map(variant => <Box key={variant} marginBottom="spacing.8">
          <Heading marginBottom="spacing.3">{variant}</Heading>
          <ButtonGroupComponent {...args} variant={variant}>
            <Button icon={RefreshIcon} isLoading>
              Sync
            </Button>
            <Button icon={ShareIcon}>Share</Button>
            <Button icon={DownloadIcon}>Download</Button>
          </ButtonGroupComponent>
        </Box>)}
    </>;
}`,...(P=(k=B.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var R,A,W;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const sizes: ButtonGroupProps['size'][] = ['xsmall', 'small', 'medium', 'large'];
  return <>
      {sizes.map(size => <Box key={size} marginBottom="spacing.8">
          <Heading marginBottom="spacing.3">{size}</Heading>
          <ButtonGroupComponent {...args} size={size}>
            <Button icon={RefreshIcon}>Sync</Button>
            <Button isLoading icon={ShareIcon}>
              Share
            </Button>
            <Button icon={DownloadIcon}>Download</Button>
          </ButtonGroupComponent>
        </Box>)}
    </>;
}`,...(W=(A=h.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var O,H,V;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <ButtonGroupComponent {...args}>
      <Button icon={RefreshIcon} accessibilityLabel="Sync" />
      <Button icon={ShareIcon} accessibilityLabel="Share" />
      <Button icon={DownloadIcon} accessibilityLabel="Download" />
    </ButtonGroupComponent>;
}`,...(V=(H=g.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var M,N,F;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <StoryScrollView>
      <Box display="flex" flexDirection="column" gap="spacing.8" paddingBottom="spacing.8">
        {/* Variants */}
        <Box>
          <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
            Variants
          </Text>
          <Box display="flex" flexDirection="column" gap="spacing.5">
            <Box>
              <Text size="small" marginBottom="spacing.2">
                Primary
              </Text>
              <ButtonGroupComponent variant="primary">
                <Button icon={RefreshIcon}>Sync</Button>
                <Button icon={ShareIcon}>Share</Button>
                <Button icon={DownloadIcon}>Download</Button>
              </ButtonGroupComponent>
            </Box>
            <Box>
              <Text size="small" marginBottom="spacing.2">
                Secondary
              </Text>
              <ButtonGroupComponent variant="secondary">
                <Button icon={RefreshIcon}>Sync</Button>
                <Button icon={ShareIcon}>Share</Button>
                <Button icon={DownloadIcon}>Download</Button>
              </ButtonGroupComponent>
            </Box>
            <Box>
              <Text size="small" marginBottom="spacing.2">
                Tertiary
              </Text>
              <ButtonGroupComponent variant="tertiary">
                <Button icon={RefreshIcon}>Sync</Button>
                <Button icon={ShareIcon}>Share</Button>
                <Button icon={DownloadIcon}>Download</Button>
              </ButtonGroupComponent>
            </Box>
          </Box>
        </Box>

        {/* Sizes */}
        <Box>
          <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
            Sizes
          </Text>
          <Box display="flex" flexDirection="row" gap="spacing.5" flexWrap="wrap" alignItems="flex-end">
            <Box>
              <Text size="small" marginBottom="spacing.2">
                XSmall
              </Text>
              <ButtonGroupComponent size="xsmall">
                <Button icon={RefreshIcon}>Sync</Button>
                <Button icon={ShareIcon}>Share</Button>
              </ButtonGroupComponent>
            </Box>
            <Box>
              <Text size="small" marginBottom="spacing.2">
                Small
              </Text>
              <ButtonGroupComponent size="small">
                <Button icon={RefreshIcon}>Sync</Button>
                <Button icon={ShareIcon}>Share</Button>
              </ButtonGroupComponent>
            </Box>
            <Box>
              <Text size="small" marginBottom="spacing.2">
                Medium
              </Text>
              <ButtonGroupComponent size="medium">
                <Button icon={RefreshIcon}>Sync</Button>
                <Button icon={ShareIcon}>Share</Button>
              </ButtonGroupComponent>
            </Box>
            <Box>
              <Text size="small" marginBottom="spacing.2">
                Large
              </Text>
              <ButtonGroupComponent size="large">
                <Button icon={RefreshIcon}>Sync</Button>
                <Button icon={ShareIcon}>Share</Button>
              </ButtonGroupComponent>
            </Box>
          </Box>
        </Box>

        {/* Colors */}
        <Box>
          <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
            Colors
          </Text>
          <Box display="flex" flexDirection="column" gap="spacing.5">
            <Box>
              <Text size="small" marginBottom="spacing.2">
                Primary Color
              </Text>
              <ButtonGroupComponent color="primary">
                <Button icon={RefreshIcon}>Sync</Button>
                <Button icon={ShareIcon}>Share</Button>
                <Button icon={DownloadIcon}>Download</Button>
              </ButtonGroupComponent>
            </Box>
            <Box>
              <Text size="small" marginBottom="spacing.2">
                Positive Color
              </Text>
              <ButtonGroupComponent color="positive">
                <Button icon={RefreshIcon}>Sync</Button>
                <Button icon={ShareIcon}>Share</Button>
                <Button icon={DownloadIcon}>Download</Button>
              </ButtonGroupComponent>
            </Box>
            <Box>
              <Text size="small" marginBottom="spacing.2">
                Negative Color
              </Text>
              <ButtonGroupComponent color="negative">
                <Button icon={RefreshIcon}>Sync</Button>
                <Button icon={ShareIcon}>Share</Button>
                <Button icon={DownloadIcon}>Download</Button>
              </ButtonGroupComponent>
            </Box>
            <Box padding="spacing.4" backgroundColor="surface.background.primary.intense" borderRadius="medium">
              <Text size="small" marginBottom="spacing.2" color="surface.text.staticWhite.normal">
                White Color (on dark background)
              </Text>
              <ButtonGroupComponent color="white">
                <Button icon={RefreshIcon}>Sync</Button>
                <Button icon={ShareIcon}>Share</Button>
                <Button icon={DownloadIcon}>Download</Button>
              </ButtonGroupComponent>
            </Box>
          </Box>
        </Box>

        {/* Disabled State */}
        <Box>
          <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
            Disabled State
          </Text>
          <Box display="flex" flexDirection="row" gap="spacing.5" flexWrap="wrap">
            <Box>
              <Text size="small" marginBottom="spacing.2">
                Primary Disabled
              </Text>
              <ButtonGroupComponent variant="primary" isDisabled>
                <Button icon={RefreshIcon}>Sync</Button>
                <Button icon={TrashIcon}>Delete</Button>
              </ButtonGroupComponent>
            </Box>
            <Box>
              <Text size="small" marginBottom="spacing.2">
                Secondary Disabled
              </Text>
              <ButtonGroupComponent variant="secondary" isDisabled>
                <Button icon={RefreshIcon}>Sync</Button>
                <Button icon={TrashIcon}>Delete</Button>
              </ButtonGroupComponent>
            </Box>
            <Box>
              <Text size="small" marginBottom="spacing.2">
                Tertiary Disabled
              </Text>
              <ButtonGroupComponent variant="tertiary" isDisabled>
                <Button icon={RefreshIcon}>Sync</Button>
                <Button icon={TrashIcon}>Delete</Button>
              </ButtonGroupComponent>
            </Box>
          </Box>
        </Box>

        {/* Icon Only */}
        <Box>
          <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
            Icon Only
          </Text>
          <Box display="flex" flexDirection="row" gap="spacing.5" flexWrap="wrap" alignItems="flex-end">
            <Box>
              <Text size="small" marginBottom="spacing.2">
                XSmall
              </Text>
              <ButtonGroupComponent size="xsmall">
                <Button icon={RefreshIcon} accessibilityLabel="Sync" />
                <Button icon={ShareIcon} accessibilityLabel="Share" />
                <Button icon={DownloadIcon} accessibilityLabel="Download" />
              </ButtonGroupComponent>
            </Box>
            <Box>
              <Text size="small" marginBottom="spacing.2">
                Small
              </Text>
              <ButtonGroupComponent size="small">
                <Button icon={RefreshIcon} accessibilityLabel="Sync" />
                <Button icon={ShareIcon} accessibilityLabel="Share" />
                <Button icon={DownloadIcon} accessibilityLabel="Download" />
              </ButtonGroupComponent>
            </Box>
            <Box>
              <Text size="small" marginBottom="spacing.2">
                Medium
              </Text>
              <ButtonGroupComponent size="medium">
                <Button icon={RefreshIcon} accessibilityLabel="Sync" />
                <Button icon={ShareIcon} accessibilityLabel="Share" />
                <Button icon={DownloadIcon} accessibilityLabel="Download" />
              </ButtonGroupComponent>
            </Box>
            <Box>
              <Text size="small" marginBottom="spacing.2">
                Large
              </Text>
              <ButtonGroupComponent size="large">
                <Button icon={RefreshIcon} accessibilityLabel="Sync" />
                <Button icon={ShareIcon} accessibilityLabel="Share" />
                <Button icon={DownloadIcon} accessibilityLabel="Download" />
              </ButtonGroupComponent>
            </Box>
          </Box>
        </Box>

        {/* Full Width */}
        <Box>
          <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
            Full Width
          </Text>
          <ButtonGroupComponent isFullWidth>
            <Button icon={RefreshIcon}>Sync</Button>
            <Button icon={ShareIcon}>Share</Button>
            <Button icon={DownloadIcon}>Download</Button>
          </ButtonGroupComponent>
        </Box>

        {/* With Tooltip */}
        <Box>
          <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
            With Tooltip
          </Text>
          <ButtonGroupComponent>
            <Tooltip content="Sync your data">
              <Button icon={RefreshIcon}>Sync</Button>
            </Tooltip>
            <Tooltip content="Share with others">
              <Button icon={ShareIcon}>Share</Button>
            </Tooltip>
            <Tooltip content="Download file">
              <Button icon={DownloadIcon}>Download</Button>
            </Tooltip>
          </ButtonGroupComponent>
        </Box>

        {/* With Dropdown */}
        <Box minHeight="200px">
          <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
            With Dropdown (Split Button)
          </Text>
          <ButtonGroupComponent>
            <Tooltip content="Create a new payout">
              <Button icon={PlusIcon}>Payout</Button>
            </Tooltip>
            <Dropdown>
              <DropdownButton icon={ChevronDownIcon} accessibilityLabel="More actions" />
              <DropdownOverlay>
                <ActionList>
                  <ActionListItem title="Bulk Payout" value="bulk-payout" />
                  <ActionListItem title="Upload Invoice" value="upload-invoice" />
                  <ActionListItem title="Add Contact" value="add-contact" />
                </ActionList>
              </DropdownOverlay>
            </Dropdown>
          </ButtonGroupComponent>
        </Box>

        {/* With Popover */}
        <Box minHeight="220px">
          <Text size="large" weight="semibold" marginBottom="spacing.4" color="feedback.text.information.intense">
            With Popover
          </Text>
          <ButtonGroupComponent>
            <Popover title="Sync Data" content={<Text>Are you sure you want to sync all data?</Text>} footer={<Box display="flex" gap="spacing.3" justifyContent="flex-end">
                  <Button variant="secondary" size="xsmall">
                    Cancel
                  </Button>
                  <Button size="xsmall">Confirm</Button>
                </Box>}>
              <Button icon={RefreshIcon}>Sync</Button>
            </Popover>
            <Button icon={ShareIcon}>Share</Button>
            <Button icon={DownloadIcon}>Download</Button>
          </ButtonGroupComponent>
        </Box>
      </Box>
    </StoryScrollView>;
}`,...(F=(N=u.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const dn=["Default","WithDropdown","AllVariants","AllVariantsWithLoading","AllSizes","IconsOnly","Showcase"],hn=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:h,AllVariants:x,AllVariantsWithLoading:B,Default:m,IconsOnly:g,Showcase:u,WithDropdown:p,__namedExportsOrder:dn,default:on},Symbol.toStringTag,{value:"Module"}));export{hn as b};
