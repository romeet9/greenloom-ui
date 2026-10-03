import{j as e,B as a,m,s as d,H as x,T as r,hT as i,$ as p}from"./iframe-C1qQ09LF.js";import"./preload-helper-Dp1pzeXC.js";const u=["light","dark"],g=["center","left"],n=()=>e.jsx(a,{display:"flex",flexDirection:"column",gap:"spacing.8",children:u.map(o=>e.jsx(m,{themeTokens:d,colorScheme:o,children:e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.6",padding:"spacing.6",backgroundColor:"surface.background.gray.subtle",children:[e.jsx(x,{size:"medium",children:`colorScheme="${o}"`}),g.map(t=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"spacing.3",children:[e.jsx(r,{size:"small",weight:"semibold",color:"surface.text.gray.muted",children:`alignment="${t}"`}),e.jsx(i,{icon:p,alignment:t,children:"Enter promotional text here"}),e.jsx(r,{size:"small",weight:"semibold",color:"surface.text.gray.muted",children:"Without icon"}),e.jsx(i,{alignment:t,children:"Enter promotional text here"})]},`${o}-${t}`))]})},o))}),B={title:"Components/KitchenSink/AnnouncementBanner",component:n,parameters:{chromatic:{disableSnapshot:!1},options:{showPanel:!1}}};var c,s,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`(): JSX.Element => {
  return <Box display="flex" flexDirection="column" gap="spacing.8">
      {colorSchemes.map(colorScheme => <BladeProvider key={colorScheme} themeTokens={bladeTheme} colorScheme={colorScheme}>
          <Box display="flex" flexDirection="column" gap="spacing.6" padding="spacing.6" backgroundColor="surface.background.gray.subtle">
            <Heading size="medium">{\`colorScheme="\${colorScheme}"\`}</Heading>
            {alignments.map(alignment => <Box key={\`\${colorScheme}-\${alignment}\`} display="flex" flexDirection="column" gap="spacing.3">
                <Text size="small" weight="semibold" color="surface.text.gray.muted">
                  {\`alignment="\${alignment}"\`}
                </Text>
                <AnnouncementBanner icon={AnnouncementIcon} alignment={alignment}>
                  Enter promotional text here
                </AnnouncementBanner>
                <Text size="small" weight="semibold" color="surface.text.gray.muted">
                  Without icon
                </Text>
                <AnnouncementBanner alignment={alignment}>
                  Enter promotional text here
                </AnnouncementBanner>
              </Box>)}
          </Box>
        </BladeProvider>)}
    </Box>;
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const y=["AnnouncementBannerKitchenSink"];export{n as AnnouncementBannerKitchenSink,y as __namedExportsOrder,B as default};
