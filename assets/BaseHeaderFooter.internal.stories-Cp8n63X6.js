import{i0 as t,j as e,B as o,i1 as u,n as s,av as b,a8 as d,F as a,Y as n,l as r,ab as j,b1 as h,$ as x,T}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const i=({children:S})=>e.jsx(o,{padding:{base:"spacing.0",m:"spacing.2"},children:S}),l=()=>e.jsxs(o,{backgroundColor:"surface.background.gray.intense",maxWidth:{base:"100%",m:"500px"},children:[e.jsx(i,{children:e.jsx(t,{title:"Simple BaseHeader",subtitle:"Subtitle",showCloseButton:!1,showBackButton:!1})}),e.jsx(i,{children:e.jsx(t,{leading:e.jsx(n,{color:"surface.icon.gray.normal",size:"large"}),title:"When The Title small",subtitle:"Header Subtitle",titleSuffix:e.jsx(a,{color:"positive",children:"New"}),trailing:e.jsx(d,{value:1e3}),showCloseButton:!1,showBackButton:!1})}),e.jsx(i,{children:e.jsx(t,{title:"With Close and Back Button",subtitle:"Header Subtitle",trailing:e.jsx(d,{value:1e3}),showCloseButton:!0,showBackButton:!0})}),e.jsx(i,{children:e.jsx(t,{leading:e.jsx(n,{color:"surface.icon.gray.normal",size:"large"}),title:"When The Title is So Large That It Goes On Next Line",subtitle:"When The Subtitle of this BaseHeader is So Largeeeee That It Goes On Next Line",titleSuffix:e.jsx(a,{color:"positive",children:"New"}),trailing:e.jsx(r,{children:"Apply"}),showCloseButton:!0,showBackButton:!0})}),e.jsx(i,{children:e.jsx(t,{leading:e.jsx(n,{color:"surface.icon.gray.normal",size:"large"}),title:"When_Title_Does_Not_Break_Word_And_Goes_On_Next_Line",subtitle:"When The Subtitle of this BaseHeader is So Largeeeee That It Goes On Next Line",titleSuffix:e.jsx(a,{color:"positive",children:"New"}),trailing:e.jsx(r,{children:"Apply"}),showCloseButton:!0,showBackButton:!0})}),e.jsx(i,{children:e.jsx(t,{leading:j()?void 0:e.jsx("img",{src:"https://flagcdn.com/w20/in.png",srcSet:"https://flagcdn.com/w40/in.png 2x",width:"20",alt:"India"}),title:"When The Title is So Large That It Goes On Next Line",subtitle:"When The Subtitle of this BaseHeader is So Largeeeee That It Goes On Next Line",titleSuffix:e.jsx(a,{color:"positive",children:"New"}),trailing:e.jsx(d,{value:1e3}),showCloseButton:!0,showBackButton:!0})}),e.jsx(i,{children:e.jsx(t,{leading:e.jsx(x,{color:"surface.icon.gray.normal",size:"large"}),title:"Announcements",subtitle:"This is an announcement",titleSuffix:e.jsx(a,{size:"small",color:"positive",children:"New"}),trailing:e.jsx(s,{icon:h,accessibilityLabel:"Download"})})}),e.jsx(i,{children:e.jsx(t,{leading:e.jsx(x,{color:"surface.icon.gray.normal",size:"medium"}),title:"Announcements",subtitle:"This is an announcement",size:"medium",titleSuffix:e.jsx(a,{size:"small",color:"positive",children:"New"}),trailing:e.jsx(s,{icon:h,accessibilityLabel:"Download"})})}),e.jsx(i,{children:e.jsx(t,{leading:e.jsx(n,{color:"surface.icon.gray.normal",size:"medium"}),title:"When The Title is So Large That It Goes On Next Line",subtitle:"When The Subtitle of this BaseHeader is So Largeeeee That It Goes On Next Line",titleSuffix:e.jsx(a,{size:"small",color:"positive",children:"New"}),trailing:e.jsx(r,{children:"Apply"}),showCloseButton:!0,showBackButton:!1,size:"medium"})}),e.jsx(i,{children:e.jsx(t,{leading:e.jsx(n,{color:"surface.icon.gray.normal",size:"medium"}),title:"When The Title is So Large That It Goes On Next Line",subtitle:"When The Subtitle of this BaseHeader is So Largeeeee That It Goes On Next Line",titleSuffix:e.jsx(a,{size:"small",color:"positive",children:"New"}),trailing:e.jsx(r,{children:"Apply"}),showCloseButton:!0,showBackButton:!1,size:"large"})}),e.jsx(i,{children:e.jsx(t,{showCloseButton:!0,showBackButton:!1,children:e.jsx(T,{children:"Custom Header"})})})]}),c=()=>e.jsxs(o,{backgroundColor:"surface.background.gray.intense",maxWidth:{base:"100%",m:"500px"},width:"100%",children:[e.jsx(u,{children:e.jsx(s,{isFullWidth:!0,children:"Submit"})}),e.jsx(u,{children:e.jsxs(o,{display:"flex",flexDirection:"row",alignItems:"center",children:[e.jsx(o,{flex:"1",children:e.jsx(b,{children:"I agree terms and conditions"})}),e.jsxs(o,{display:"flex",flexDirection:"row",children:[e.jsx(s,{variant:"secondary",children:"Sign Up"}),e.jsx(s,{marginLeft:"spacing.4",children:"Sign In"})]})]})})]}),L={title:"Components/BaseHeaderFooter",component:t,args:{},parameters:{viewMode:"story",options:{showPanel:!1},previewTabs:{"storybook/docs/panel":{hidden:!0}}}};var B,g,m;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box backgroundColor="surface.background.gray.intense" maxWidth={{
    base: '100%',
    m: '500px'
  }}>
      <HeaderContainer>
        <BaseHeader title="Simple BaseHeader" subtitle="Subtitle" showCloseButton={false} showBackButton={false} />
      </HeaderContainer>
      <HeaderContainer>
        <BaseHeader leading={<StarIcon color="surface.icon.gray.normal" size="large" />} title="When The Title small" subtitle="Header Subtitle" titleSuffix={<Badge color="positive">New</Badge>} trailing={<Amount value={1000} />} showCloseButton={false} showBackButton={false} />
      </HeaderContainer>
      <HeaderContainer>
        <BaseHeader title="With Close and Back Button" subtitle="Header Subtitle" trailing={<Amount value={1000} />} showCloseButton={true} showBackButton={true} />
      </HeaderContainer>
      <HeaderContainer>
        <BaseHeader leading={<StarIcon color="surface.icon.gray.normal" size="large" />} title="When The Title is So Large That It Goes On Next Line" subtitle="When The Subtitle of this BaseHeader is So Largeeeee That It Goes On Next Line" titleSuffix={<Badge color="positive">New</Badge>} trailing={<Link>Apply</Link>} showCloseButton={true} showBackButton={true} />
      </HeaderContainer>
      <HeaderContainer>
        <BaseHeader leading={<StarIcon color="surface.icon.gray.normal" size="large" />} title="When_Title_Does_Not_Break_Word_And_Goes_On_Next_Line" subtitle="When The Subtitle of this BaseHeader is So Largeeeee That It Goes On Next Line" titleSuffix={<Badge color="positive">New</Badge>} trailing={<Link>Apply</Link>} showCloseButton={true} showBackButton={true} />
      </HeaderContainer>
      <HeaderContainer>
        <BaseHeader leading={isReactNative() ? undefined : <img src="https://flagcdn.com/w20/in.png" srcSet="https://flagcdn.com/w40/in.png 2x" width="20" alt="India" />} title="When The Title is So Large That It Goes On Next Line" subtitle="When The Subtitle of this BaseHeader is So Largeeeee That It Goes On Next Line" titleSuffix={<Badge color="positive">New</Badge>} trailing={<Amount value={1000} />} showCloseButton={true} showBackButton={true} />
      </HeaderContainer>
      <HeaderContainer>
        <BaseHeader leading={<AnnouncementIcon color="surface.icon.gray.normal" size="large" />} title="Announcements" subtitle="This is an announcement" titleSuffix={<Badge size="small" color="positive">
              New
            </Badge>} trailing={<Button icon={DownloadIcon} accessibilityLabel="Download" />} />
      </HeaderContainer>
      <HeaderContainer>
        <BaseHeader leading={<AnnouncementIcon color="surface.icon.gray.normal" size="medium" />} title="Announcements" subtitle="This is an announcement" size="medium" titleSuffix={<Badge size="small" color="positive">
              New
            </Badge>} trailing={<Button icon={DownloadIcon} accessibilityLabel="Download" />} />
      </HeaderContainer>
      <HeaderContainer>
        <BaseHeader leading={<StarIcon color="surface.icon.gray.normal" size="medium" />} title="When The Title is So Large That It Goes On Next Line" subtitle="When The Subtitle of this BaseHeader is So Largeeeee That It Goes On Next Line" titleSuffix={<Badge size="small" color="positive">
              New
            </Badge>} trailing={<Link>Apply</Link>} showCloseButton={true} showBackButton={false} size="medium" />
      </HeaderContainer>
      <HeaderContainer>
        <BaseHeader leading={<StarIcon color="surface.icon.gray.normal" size="medium" />} title="When The Title is So Large That It Goes On Next Line" subtitle="When The Subtitle of this BaseHeader is So Largeeeee That It Goes On Next Line" titleSuffix={<Badge size="small" color="positive">
              New
            </Badge>} trailing={<Link>Apply</Link>} showCloseButton={true} showBackButton={false} size="large" />
      </HeaderContainer>
      <HeaderContainer>
        <BaseHeader showCloseButton={true} showBackButton={false}>
          <Text>Custom Header</Text>
        </BaseHeader>
      </HeaderContainer>
    </Box>;
}`,...(m=(g=l.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var f,p,w;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`(): React.ReactElement => {
  return <Box backgroundColor="surface.background.gray.intense" maxWidth={{
    base: '100%',
    m: '500px'
  }} width="100%">
      <BaseFooter>
        <Button isFullWidth>Submit</Button>
      </BaseFooter>
      <BaseFooter>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box flex="1">
            <Checkbox>I agree terms and conditions</Checkbox>
          </Box>
          <Box display="flex" flexDirection="row">
            <Button variant="secondary">Sign Up</Button>
            <Button marginLeft="spacing.4">Sign In</Button>
          </Box>
        </Box>
      </BaseFooter>
    </Box>;
}`,...(w=(p=c.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};const k=["BaseHeaderKitchenSink","BaseFooterSink"];export{c as BaseFooterSink,l as BaseHeaderKitchenSink,k as __namedExportsOrder,L as default};
