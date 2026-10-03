import{j as e,M as s}from"./iframe-C1qQ09LF.js";import{useMDXComponents as i}from"./index-Au6382uh.js";import"./preload-helper-Dp1pzeXC.js";function o(t){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Utils/makeMotionTime"}),`
`,e.jsx(n.h2,{id:"makemotiontime",children:e.jsx(n.code,{children:"makeMotionTime"})}),`
`,e.jsxs(n.p,{children:[`Motion duration & delay tokens in our theme are stored as plain numbers but they need to be converted into platform specific units before we can use them.
`,e.jsx(n.code,{children:"makeMotionTime"})," converts duration & delay tokens into ",e.jsx(n.code,{children:"ms"})," units for web and keeps them as numerical units for react native."]}),`
`,e.jsxs(n.p,{children:["For example, ",e.jsx(n.code,{children:"makeMotionTime(1000)"})," returns ",e.jsx(n.code,{children:"'1000ms'"})," for web and ",e.jsx(n.code,{children:"1000"})," for react native."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Should be used with Loom UI ",e.jsx(n.a,{href:"?path=/story/tokens-motion--docs",children:"Motion duration & delay tokens"})]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Motion easing tokens do not require any conversion to platform specific units. They can be used directly."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Web:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const makeMotionTime = (size: number) => string;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"React Native:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const makeMotionTime = (size: number) => number;
`})}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Web:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { makeMotionTime } from '@greenloom/ui/utils';
import styled from 'styled-components';

const CustomComponent = styled.div\`
  transition-duration: \${({ theme }) =>
    makeMotionTime(theme.motion.duration.gentle)}; // '400ms' for web
\`;
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"React Native:"})}),`
`,e.jsxs(n.p,{children:["Usage with ",e.jsx(n.a,{href:"https://docs.swmansion.com/react-native-reanimated/",rel:"nofollow",children:"React Native Reanimated"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button } from '@greenloom/ui/components';
import { makeMotionTime } from '@greenloom/ui/utils';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

function App() {
  const { theme } = useTheme();
  const width = useSharedValue(50);

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: makeMotionTime(theme.motion.duration.gentle), // 400 for native
        easing: theme.motion.easing.standard.attentive,
      }),
    };
  });

  return (
    <View>
      <Animated.View style={[styles.box, style]} />
      <Button onPress={() => (width.value = Math.random() * 300)}>Animate</Button>
    </View>
  );
}
`})})]})}function c(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{c as default};
