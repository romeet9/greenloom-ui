import{j as e,M as t}from"./iframe-C1qQ09LF.js";import{useMDXComponents as r}from"./index-Au6382uh.js";import"./preload-helper-Dp1pzeXC.js";function o(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Utils/Loom Coverage"}),`
`,e.jsx(n.h1,{id:"loom-coverage-utils",children:"Loom Coverage Utils"}),`
`,e.jsx(n.p,{children:"Loom coverage measures the percentage of a page built with Loom UI. It does so by calculating the DOM nodes built with Loom UI vs standard unstyled HTML elements."}),`
`,e.jsx(n.p,{children:"You can utilize the following utils to measure the coverage in different stages of your app development workflow."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"These functions are designed for web applications and should be used in a browser environment."}),`
`]}),`
`,e.jsx(n.h2,{id:"assertbladecoverage",children:e.jsx(n.code,{children:"assertBladeCoverage"})}),`
`,e.jsx(n.p,{children:"This utility function asserts that the calculated blade coverage meets a specified threshold."}),`
`,e.jsx(n.p,{children:"Parameters:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"page"}),":"]})," Playwright page object."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"expect"}),":"]})," The ",e.jsx(n.code,{children:"expect"})," function from ",e.jsx(n.code,{children:"@playwright/test"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"threshold"})," (optional):"]})," Minimum threshold for blade coverage (default is 70)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Ensure that you are using Blade v10.22.0 or above and playwright is properly set up."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Import and use ",e.jsx(n.code,{children:"assertBladeCoverage"})," in your test files. Adjust the threshold based on your coverage requirements."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { test, expect } from '@playwright/test';
import { assertBladeCoverage } from '@greenloom/ui/coverageUtils';

test.describe.parallel('Test Home @flow=home', () => {
  test('should have blade coverage more than 70% @priority=normal', async ({ page }) => {
    await page.goto('/');

    await assertBladeCoverage({ page, expect, threshold: 70 });
  });
});
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Execute your tests using the Playwright Test runner."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx playwright test
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Once your tests are passing and blade coverage is meeting expectations, you're good to go!"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"getbladecoverage",children:e.jsx(n.code,{children:"getBladeCoverage"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Consider installing the ",e.jsx(n.a,{href:"https://chromewebstore.google.com/detail/blade-coverage-extension/cpmmcebielcknjffelmpbcbgkcjapipp",rel:"nofollow",children:"Blade Coverage Chrome Extension"}),". This extension provides a convenient way to visualize and analyze the blade coverage directly in the Chrome browser. We internally use the below utility function."]}),`
`]}),`
`,e.jsx(n.p,{children:"This utility function calculates the blade usage coverage in percentage of the DOM elements on a web page."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { getBladeCoverage } from '@greenloom/ui/coverageUtils';

const { bladeCoverage, totalNodes, bladeNodes } = getBladeCoverage();
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"bladeCoverage"}),":"]})," The percentage of blade nodes in the total nodes."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"totalNodes"}),":"]})," Total number of DOM nodes."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"bladeNodes"}),":"]})," Number of blade nodes."]}),`
`]})]})}function d(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{d as default};
