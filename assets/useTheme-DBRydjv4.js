import{j as e,M as c}from"./iframe-C1qQ09LF.js";import{useMDXComponents as s}from"./index-Au6382uh.js";import"./preload-helper-Dp1pzeXC.js";function r(o){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Utils/useTheme"}),`
`,e.jsx(n.h2,{id:"usetheme",children:"useTheme"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#types",children:"Types"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#theme",children:e.jsx(n.code,{children:"Theme"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#colorscheme",children:e.jsx(n.code,{children:"ColorScheme"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#platform",children:e.jsx(n.code,{children:"Platform"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#colorschemeinput",children:e.jsx(n.code,{children:"ColorSchemeInput"})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useTheme"})," is a custom React hook provided by the ",e.jsx(n.code,{children:"@greenloom/ui/utils"}),"  that allows you to access the current theme and color scheme of your application."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useTheme"})," hook returns a ",e.jsx(n.code,{children:"ThemeContext"})," object that contains the following properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ThemeContext = {
  /**
   * The current theme object, which contains the values for various design tokens such as colors, typography, and spacing.
   */
  theme: Theme;
  /**
   * The current color scheme of the application, which can be either 'light' or 'dark'.
   */
  colorScheme: ColorSchemeNames;
  /**
   * The current platform of the application, which can be either 'onDesktop' or 'onMobile'.
   */
  platform: Platform;
  /**
   * A function that allows you to set the color scheme of the application.
   */
  setColorScheme: (colorScheme: ColorSchemeInput) => void;
}
`})}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"useTheme"})," hook, you must first wrap your application with a ",e.jsx(n.code,{children:"BladeProvider"})," component, which provides the theme context to all child components. Here's an example of how to use the ",e.jsx(n.code,{children:"useTheme"})," hook in a React component:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from 'react';
import { useTheme, Heading, Text, Button } from '@greenloom/ui/components';

const MyComponent = () => {
  const { theme, colorScheme, platform, setColorScheme } = useTheme();

  return (
    <>
      <Heading>Hello, world!</Heading>
      <Text>The current color scheme is: {colorScheme}</Text>
      <Text>The current platform is: {platform}</Text>
      <Button onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}>
        Toggle color scheme
      </Button>
    </>
  );
};

export default MyComponent;
`})}),`
`,e.jsx(n.h3,{id:"types",children:"Types"}),`
`,e.jsx(n.h4,{id:"theme",children:e.jsx(n.code,{children:"Theme"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`type Theme = {
  name: 'bladeTheme';
  border: Border;
  breakpoints: Breakpoints;
  colors: Colors;
  spacing: Spacing;
  motion: Motion;
  elevation: Elevation;
  typography: Typography;
};
`})}),`
`,e.jsx(n.p,{children:"To further explore the tokens in Theme, you can navigate to their respective documentations:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/story/tokens-border--docs",children:"Border"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/story/tokens-breakpoints--docs",children:"Breakpoints"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/story/tokens-colors--docs",children:"Colors"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/story/tokens-spacing--docs",children:"Spacing"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/story/tokens-motion--docs",children:"Motion"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/story/tokens-elevation--docs",children:"Elevation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/story/tokens-typography--docs",children:"Typography"})}),`
`]}),`
`,e.jsx(n.h4,{id:"colorschemenames",children:e.jsx(n.code,{children:"ColorSchemeNames"})}),`
`,e.jsxs(n.p,{children:["The current color scheme of the application. Can be either ",e.jsx(n.code,{children:"'dark'"})," or ",e.jsx(n.code,{children:"'light'"}),`.
If color scheme is set to 'system' using `,e.jsx(n.code,{children:"setColorScheme"}),", the colorScheme property will return ",e.jsx(n.code,{children:"'dark'"})," or ",e.jsx(n.code,{children:"'light'"})," based on the user's system preferences."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`type ColorSchemeNames = 'dark' | 'light';
`})}),`
`,e.jsx(n.h4,{id:"platform",children:e.jsx(n.code,{children:"Platform"})}),`
`,e.jsxs(n.p,{children:["The current platform of the application. Can be either ",e.jsx(n.code,{children:"'onDesktop'"})," or ",e.jsx(n.code,{children:"'onMobile'"}),`.
Platform will be set to `,e.jsx(n.code,{children:"'onDesktop'"})," or ",e.jsx(n.code,{children:"'onMobile'"})," based on the ",e.jsx(n.a,{href:"?path=/story/tokens-breakpoints--docs&globals=measureEnabled:false",children:"breakpoints"})," defined in the theme."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: Platform will always be ",e.jsx(n.code,{children:"'onMobile'"})," for React Native"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`type Platform = 'onDesktop' | 'onMobile';
`})}),`
`,e.jsx(n.h4,{id:"colorschemeinput",children:e.jsx(n.code,{children:"ColorSchemeInput"})}),`
`,e.jsxs(n.p,{children:["You can set the color scheme of your application to either ",e.jsx(n.code,{children:"'dark'"}),", ",e.jsx(n.code,{children:"'light'"})," or ",e.jsx(n.code,{children:"'system'"})," using ",e.jsx(n.code,{children:"setColorScheme"}),`.
Selecting `,e.jsx(n.code,{children:"system"})," will set the color scheme of your application based on the user's system preferences."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`type ColorSchemeInput = 'dark' | 'light' | 'system';
`})})]})}function i(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{i as default};
