import{j as e,M as t}from"./iframe-C1qQ09LF.js";import{useMDXComponents as i}from"./index-Au6382uh.js";import"./preload-helper-Dp1pzeXC.js";function s(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Guides/Chart Color Themes"}),`
`,e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"24px"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.05))",border:"1px solid rgba(16, 185, 129, 0.3)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"#10B981",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),e.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),e.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"14"}),e.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"2",fill:"rgba(16, 185, 129, 0.08)",stroke:"none"})]})}),e.jsxs("div",{children:[e.jsx("h1",{style:{margin:0,fontSize:"28px",fontWeight:700},children:"Chart Color Themes"}),e.jsx("p",{style:{margin:"4px 0 0",color:"#6B7280",fontSize:"14px"},children:e.jsx(n.p,{children:"Color token sequences, intensities, and data visualization guidelines for Loom UI."})})]})]}),`
`,e.jsx(n.p,{children:"Loom UI's chart components use a sophisticated color theming system that automatically assigns colors to data series based on chart type, data indicators, and predefined color sequences. This guide explains how the color theming works and how to use it effectively."}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["Loom UI currently supports ",e.jsx(n.strong,{children:"categorical"})," color themes for all chart types. The color system is designed to:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Provide consistent, accessible colors across all chart types"}),`
`,e.jsx(n.li,{children:"Automatically handle color assignment based on chart type and data"}),`
`,e.jsx(n.li,{children:"Support different intensity levels for optimal visual hierarchy"}),`
`,e.jsx(n.li,{children:"Handle special cases like single data points and donut charts"}),`
`]}),`
`,e.jsx(n.h2,{id:"color-system-architecture",children:"Color System Architecture"}),`
`,e.jsx(n.h3,{id:"color-categories",children:"Color Categories"}),`
`,e.jsx(n.p,{children:"Blade uses the following color categories for charts:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ColorName = 
  | 'blue'      // Primary blue
  | 'green'     // Success/positive green  
  | 'red'       // Error/negative red
  | 'orange'    // Warning orange
  | 'skyBlue'   // Light blue variant
  | 'purple'    // Purple accent
  | 'pink'      // Pink accent
  | 'gold'      // Gold/yellow accent
  | 'gray';     // Neutral gray
`})}),`
`,e.jsx(n.h3,{id:"color-intensities",children:"Color Intensities"}),`
`,e.jsx(n.p,{children:"Each color category supports five intensity levels:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type ColorIntensity = 
  | 'faint'     // Lightest intensity
  | 'subtle'    // Light intensity  
  | 'moderate'  // Medium intensity
  | 'intense'   // High intensity
  | 'strong';   // Highest intensity
`})}),`
`,e.jsx(n.h2,{id:"color-sequences",children:"Color Sequences"}),`
`,e.jsx(n.h3,{id:"base-color-sequence",children:"Base Color Sequence"}),`
`,e.jsx(n.p,{children:"The primary color sequence used across all charts:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const colorSequence = [
  'blue',      // 1st priority
  'green',     // 2nd priority  
  'gold',      // 3rd priority
  'purple',    // 4th priority
  'orange',    // 5th priority
  'pink',      // 6th priority
  'skyBlue',   // 7th priority
  'red',       // 8th priority
  'gray',      // 9th priority
];
`})}),`
`,e.jsx(n.h3,{id:"intensity-sequences-by-chart-type",children:"Intensity Sequences by Chart Type"}),`
`,e.jsx(n.p,{children:"Different chart types use different intensity sequences to optimize visual hierarchy:"}),`
`,e.jsx(n.h4,{id:"bar-charts--donut-charts",children:"Bar Charts & Donut Charts"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Default sequence: faint → strong
['faint', 'subtle', 'moderate', 'intense', 'strong']
`})}),`
`,e.jsx(n.h4,{id:"line-charts--area-charts",children:"Line Charts & Area Charts"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Reverse sequence: strong → faint
['strong', 'intense', 'moderate', 'subtle', 'faint']
`})}),`
`,e.jsx(n.h2,{id:"how-colors-are-generated",children:"How Colors Are Generated"}),`
`,e.jsx(n.p,{children:"The color generation algorithm works as follows:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"For each intensity level"})," in the sequence"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"For each color"})," in the color sequence"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Generate a color token"})," in the format: ",e.jsx(n.code,{children:"data.background.categorical.{colorName}.{intensity}"})]}),`
`]}),`
`,e.jsx(n.p,{children:"This creates a comprehensive palette that ensures:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Consistent color assignment across chart types"}),`
`,e.jsx(n.li,{children:"Optimal contrast and accessibility"}),`
`,e.jsx(n.li,{children:"Visual hierarchy through intensity variations"}),`
`]}),`
`,e.jsx(n.h2,{id:"special-cases",children:"Special Cases"}),`
`,e.jsx(n.h3,{id:"single-data-point",children:"Single Data Point"}),`
`,e.jsx(n.p,{children:"When a chart has only one data indicator (except donut charts), it automatically uses:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`'data.background.categorical.gray.moderate'
`})}),`
`,e.jsx(n.h3,{id:"donut-charts",children:"Donut Charts"}),`
`,e.jsx(n.p,{children:"Donut charts follow the same color sequence but use different intensity mapping logic for optimal visual distinction between segments."}),`
`,e.jsx(n.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,e.jsx(n.h3,{id:"basic-chart-with-automatic-colors",children:"Basic Chart with Automatic Colors"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ChartBarWrapper, ChartBar, ChartXAxis, ChartYAxis } from '@greenloom/ui/components';

function MyChart() {
  const data = [
    { name: 'Jan', sales: 4000, profit: 2400 },
    { name: 'Feb', sales: 3000, profit: 1398 },
    { name: 'Mar', sales: 2000, profit: 9800 },
  ];

  return (
    <ChartBarWrapper data={data}>
      <ChartXAxis dataKey="name" />
      <ChartYAxis />
      <ChartBar dataKey="sales" name="Sales" />
      <ChartBar dataKey="profit" name="Profit" />
    </ChartBarWrapper>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"explicit-color-theme",children:"Explicit Color Theme"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ChartBarWrapper data={data} colorTheme="categorical">
  <ChartXAxis dataKey="name" />
  <ChartYAxis />
  <ChartBar dataKey="sales" name="Sales" />
  <ChartBar dataKey="profit" name="Profit" />
</ChartBarWrapper>
`})}),`
`,e.jsx(n.h2,{id:"color-token-format",children:"Color Token Format"}),`
`,e.jsx(n.p,{children:"All chart colors follow this token format:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`data.background.categorical.{colorName}.{intensity}
`})}),`
`,e.jsx(n.p,{children:"Examples:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"data.background.categorical.blue.faint"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"data.background.categorical.green.strong"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"data.background.categorical.purple.moderate"})}),`
`]}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsx(n.h3,{id:"1-let-blade-handle-color-assignment",children:"1. Let Blade Handle Color Assignment"}),`
`,e.jsx(n.p,{children:"Don't manually assign colors unless you have specific branding requirements. Loom UI's automatic color assignment ensures:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Consistent visual hierarchy"}),`
`,e.jsx(n.li,{children:"Optimal accessibility"}),`
`,e.jsx(n.li,{children:"Proper contrast ratios"}),`
`]}),`
`,e.jsx(n.h3,{id:"2-use-appropriate-chart-types",children:"2. Use Appropriate Chart Types"}),`
`,e.jsx(n.p,{children:"Different chart types are optimized for different data visualizations:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bar Charts"}),": Best for comparing categories"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Line Charts"}),": Best for showing trends over time"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Donut Charts"}),": Best for showing proportions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Area Charts"}),": Best for showing cumulative data"]}),`
`]}),`
`,e.jsx(n.h3,{id:"3-consider-data-density",children:"3. Consider Data Density"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"For charts with many data series, the color system will cycle through the sequence"}),`
`,e.jsx(n.li,{children:"Consider grouping related data to reduce visual complexity"}),`
`,e.jsx(n.li,{children:"Use legends effectively to help users distinguish between series"}),`
`]}),`
`,e.jsx(n.h2,{id:"future-enhancements",children:"Future Enhancements"}),`
`,e.jsx(n.p,{children:"While Blade currently supports only categorical color themes, future versions may include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sequential color themes for data with inherent ordering"}),`
`,e.jsx(n.li,{children:"Diverging color themes for data with meaningful center points"}),`
`,e.jsx(n.li,{children:"Custom color palette support for brand-specific requirements"}),`
`]}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(n.h3,{id:"colors-not-appearing",children:"Colors Not Appearing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure you're using the latest version of Blade"}),`
`,e.jsx(n.li,{children:"Check that your chart data is properly formatted"}),`
`,e.jsx(n.li,{children:"Verify that you're not overriding colors with custom props"}),`
`]}),`
`,e.jsx(n.h3,{id:"inconsistent-colors-across-charts",children:"Inconsistent Colors Across Charts"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Blade automatically manages color consistency"}),`
`,e.jsx(n.li,{children:"Avoid manually setting colors unless necessary"}),`
`,e.jsxs(n.li,{children:["Use the same ",e.jsx(n.code,{children:"colorTheme"})," prop across related charts"]}),`
`]}),`
`,e.jsx(n.h3,{id:"single-data-point-issues",children:"Single Data Point Issues"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Single data points automatically use gray color"}),`
`,e.jsx(n.li,{children:"This is intentional for visual clarity"}),`
`,e.jsx(n.li,{children:"Donut charts are an exception and will use the full color sequence"}),`
`]}),`
`,e.jsx(n.h2,{id:"related-documentation",children:"Related Documentation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://ui.greenloom.ai/?path=/docs/components-charts-linechart--docs",rel:"nofollow",children:"Chart Components"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://ui.greenloom.ai/?path=/docs/tokens-theme--docs",rel:"nofollow",children:"Design Tokens"})}),`
`]})]})}function c(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{c as default};
