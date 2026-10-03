import{j as n,M as s}from"./iframe-C1qQ09LF.js";import{useMDXComponents as r}from"./index-Au6382uh.js";import"./preload-helper-Dp1pzeXC.js";function o(t){const e={blockquote:"blockquote",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Guides/Generative UI"}),`
`,n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"24px"},children:[n.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",backgroundColor:"rgba(16,185,129,0.12)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#10B981",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),n.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),n.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]})}),n.jsxs("div",{children:[n.jsx("h1",{style:{margin:0,fontSize:"28px",fontWeight:700},children:"Loom GenUI SDK"}),n.jsx("p",{style:{margin:0,fontSize:"14px",opacity:.75},children:"Schema-driven Generative UI for Green Loom AI workflows"})]})]}),`
`,n.jsx(e.h2,{id:"quick-start",children:"Quick Start"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { GenUIProvider, GenUISchemaRenderer } from './sdk';

function App() {
  const components = [
    // Note TEXT can have markdown content, the SDK will handle the rendering of markdown
    { component: 'TEXT', content: '# Hello World' },
    { component: 'BADGE', text: 'New', color: 'positive' },
  ];

  return (
    <GenUIProvider>
      <GenUISchemaRenderer components={components} />
    </GenUIProvider>
  );
}
`})}),`
`,n.jsx(e.h2,{id:"built-in-components",children:"Built-in Components"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"TEXT"}),n.jsx(e.br,{}),`
`,"Markdown text with Loom UI typography"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"CHART"}),n.jsx(e.br,{}),`
`,"Bar, line, area, pie charts"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"TABLE"}),n.jsx(e.br,{}),`
`,"Data table with typed cells"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"CARD"}),n.jsx(e.br,{}),`
`,"Card container with header/footer"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"BADGE"}),n.jsx(e.br,{}),`
`,"Status badge"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"STACK"}),n.jsx(e.br,{}),`
`,"Vertical / horizontal flex layout"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"GRID"}),n.jsx(e.br,{}),`
`,"CSS grid layout"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"INFO_GROUP"}),n.jsx(e.br,{}),`
`,"Key-value pairs display"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"BUTTON"}),n.jsx(e.br,{}),`
`,"Action button"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"LINK"}),n.jsx(e.br,{}),`
`,"External link"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"ALERT"}),n.jsx(e.br,{}),`
`,"Alert / notification box"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"DIVIDER"}),n.jsx(e.br,{}),`
`,"Horizontal / vertical divider"]}),`
`,n.jsx(e.h2,{id:"defining-custom-components",children:"Defining Custom Components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { GenUIProvider, type CustomComponent } from './sdk';

// Step 1: Define the custom component
type MyWidgetComponentProps = CustomComponent<'MY_WIDGET', {
  title: string;
  value: number;
}>;

const MyComponent = ({ title, value }: MyWidgetComponentProps) => (
  <div>{title}: {value}</div>
);

// Step 2: Register it in the GenUIProvider
<GenUIProvider
  config={{
    components: {
      MY_WIDGET: { renderer: MyComponent },
    },
  }}
>
  // Step 3: Render the JSON which includes the custom component
  <GenUISchemaRenderer components={[{ component: 'MY_WIDGET', title: 'My Widget', value: 123 }]} />
</GenUIProvider>
`})}),`
`,n.jsx(e.h2,{id:"handling-streaming-in-custom-components",children:"Handling Streaming in Custom Components"}),`
`,n.jsxs(e.p,{children:["During streaming, components receive ",n.jsx(e.strong,{children:"partial/incomplete data"})," as the LLM generates JSON token-by-token. Your custom components must handle these gracefully to avoid runtime errors."]}),`
`,n.jsx(e.p,{children:"Let's take an example of a custom component that renders a metric card with a title, value, trend, and history."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Summary:"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Early return with skeleton"})," — Check required props, show loading state until data is complete"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Validate string values"})," — Partial strings like ",n.jsx(e.code,{children:'"ac"'})," arrive before ",n.jsx(e.code,{children:'"active"'})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Filter arrays"})," — Remove incomplete items before rendering lists"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Optional chaining"})," — Safe access for nested/optional properties"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Custom memo"})," — Prevent unnecessary re-renders during streaming"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`type MetricCardProps = CustomComponent<'METRIC_CARD', {
  title?: string;
  value?: number;
  status?: 'positive' | 'negative' | 'notice' | 'neutral' | 'primary' | 'information';
  meta?: { updatedAt?: string; author?: string };
  text?: string;
  history?: Array<{ date?: string; value?: number }>;
}>;

const MetricCard = memo(
  ({ title, value, status, meta, color, history }: MetricCardProps) => {
    // Tip 1: Early return with skeleton for missing required props
    // During streaming, props arrive incrementally - show loading state until ready
    if (!title || value === undefined) {
      return <Skeleton width="200px" height="100px" />;
    }

    // Tip 2: Validate enum-like string values before using
    // During streaming "active" might arrive as: "ac" -> "act" -> "activ" ... -> "active"
    const validStatuses = ['active', 'inactive', 'pending'];
    const safeStatus = status && validStatuses.includes(status) ? status : undefined;

    // Tip 3: Filter incomplete items from arrays
    // Array items stream one-by-one and may have missing fields
    const validHistory = history?.filter(h => h.date && h.value !== undefined) ?? [];

    return (
      <Card>
        <Text>{title}</Text>
        <Amount value={value} />
        {safeStatus && <Indicator color={safeStatus} />}
        {validHistory.length > 0 && <Sparkline data={validHistory} />}
        {/* Tip 4: Use optional chaining for nested objects */}
        {meta?.updatedAt && <Text size="small">Updated: {meta.updatedAt}</Text>}
        {meta?.author && <Text size="small">Author: {meta.author}</Text>}
      </Card>
    );
  },
  // Tip 5: Custom memo comparison to reduce re-renders during streaming
  // Only re-render when data actually changes, not on every stream chunk
  // This is only required if data that is streamed is complex or nested
  (prevProps, nextProps) => {
    return (
      prevProps.status === nextProps.status &&
      prevProps.history?.length === nextProps.history?.length
    );
  }
);
`})}),`
`,n.jsx(e.h2,{id:"action-handling",children:"Action Handling"}),`
`,n.jsxs(e.p,{children:["Handle button/alert actions via ",n.jsx(e.code,{children:"onActionClick"}),":"]}),`
`,n.jsxs(e.p,{children:["Clicking on any built-in GenUI components like ",n.jsx(e.code,{children:"BUTTON"})," and ",n.jsx(e.code,{children:"ALERT"}),"'s action buttons will trigger the ",n.jsx(e.code,{children:"onActionClick"})," callback with the action data."]}),`
`,n.jsx(e.p,{children:"Built-in Click Action Schema:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const ClickActionSchema = z.object({
  type: z.literal('CLICK'),
  data: z.object({
    message: z.string().describe('The message to be sent to the LLM when the button is clicked'),
  }),
}).describe('A natural language action to be performed when the button is clicked, this will be executed as a further query to LLM')
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<GenUIProvider
  config={{
    onActionClick: (action) => {
      console.log(action.type, action.data);
      // TODO: Send another message to the LLM
      // send({ role: 'human', content: action.data.message })
      // -> 'Say hello' sent to LLM
    },
  }}
>
  <GenUISchemaRenderer
    components={[
      {
        component: 'BUTTON',
        text: 'Click me',
        action: { type: 'CLICK', data: { message: 'Say hello' } },
      },
    ]}
  />
</GenUIProvider>
`})}),`
`,n.jsx(e.h2,{id:"consumer-action-slots",children:"Consumer Action Slots"}),`
`,n.jsxs(e.p,{children:["Block-level components (",n.jsx(e.strong,{children:"CARD"}),", ",n.jsx(e.strong,{children:"TABLE"}),") support consumer-registered action slots — a render prop that GenUI renders ",n.jsx(e.strong,{children:"below"})," the component (outside the gradient ring). GenUI hands your render prop the component's schema (",n.jsx(e.code,{children:"data"}),") and a ",n.jsx(e.code,{children:"componentRef"})," to its DOM node, so you fully own the action UI and logic (CSV export, PNG capture, copy, ...) without GenUI prescribing any buttons."]}),`
`,n.jsx(e.p,{children:"The render prop receives:"}),`
`,n.jsxs(e.p,{children:[`| Prop | Type | Description |
| --- | --- | --- |
| `,n.jsx(e.code,{children:"data"})," | ",n.jsx(e.code,{children:"GenUIBaseComponent"})," (the component's schema) | Use this for data-driven actions like CSV export from a TABLE's ",n.jsx(e.code,{children:"headers"}),"/",n.jsx(e.code,{children:"rows"}),` |
| `,n.jsx(e.code,{children:"componentRef"})," | ",n.jsx(e.code,{children:"React.RefObject<HTMLDivElement>"}),` | DOM node of the component's content container (excludes the gradient-ring animation overlays). Use this for capture actions like PNG export |
| `,n.jsx(e.code,{children:"componentType"})," | ",n.jsx(e.code,{children:"string"})," | The resolved component type (e.g. ",n.jsx(e.code,{children:"'CARD'"}),", ",n.jsx(e.code,{children:"'TABLE'"}),") |"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { GenUIProvider, GenUISchemaRenderer, type TableComponent } from '@greenloom/ui/components';

<GenUIProvider
  config={{
    componentActions: {
      // TABLE action slot: reads the component's schema via \`data\`
      TABLE: ({ data }: { data: TableComponent }) => (
        <Link
          variant="button"
          icon={CopyIcon}
          onClick={() => {
            const csv = [
              (data.headers ?? []).join(','),
              ...(data.rows ?? []).map((row) =>
                row.map((cell) => String('value' in cell ? cell.value : cell.text ?? '')).join(','),
              ),
            ].join('\\n');
            void navigator.clipboard?.writeText(csv);
          }}
        >
          Copy as CSV
        </Link>
      ),
      // CARD action slot: reads the component's DOM node via \`componentRef\`
      CARD: ({ componentRef }) => (
        <Link
          variant="button"
          icon={DownloadIcon}
          onClick={() => exportPng(componentRef.current)}
        >
          Download as PNG
        </Link>
      ),
    },
  }}
>
  <GenUISchemaRenderer components={components} />
</GenUIProvider>
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note:"})," Action slots only render for block-level components (",n.jsx(e.code,{children:"CARD"}),", ",n.jsx(e.code,{children:"TABLE"}),", and custom components registered with ",n.jsx(e.code,{children:"animation.name: 'gradient-ring-entry'"}),"). Registering an action for inline components like ",n.jsx(e.code,{children:"TEXT"}),", ",n.jsx(e.code,{children:"BADGE"}),", or ",n.jsx(e.code,{children:"AMOUNT"})," has no effect — and the ",n.jsx(e.code,{children:"GenUIComponentActionsRegistry"})," type will reject those keys at compile time."]}),`
`]})]})}function l(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{l as default};
