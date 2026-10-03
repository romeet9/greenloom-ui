import{j as e,M as a,H as s,C as c,L as l,f as m,h as p}from"./iframe-C1qQ09LF.js";import{useMDXComponents as i}from"./index-Au6382uh.js";import"./preload-helper-Dp1pzeXC.js";const h=[{name:"hi_loom",description:"Provides a welcome message and interactive overview of Loom UI components, tokens, and design guidelines."},{name:"create_new_loom_project",description:"Scaffolds a new Green Loom web application with Vite, React 18, TypeScript, and Loom UI pre-configured."},{name:"create_loom_cursor_rules",description:"Generates workspace rules and system prompts to guide AI models to write valid, accessible Loom UI code."},{name:"get_loom_component_docs",description:"Fetches official documentation, accessible prop definitions, and TypeScript interfaces for specific Loom UI components."},{name:"get_loom_pattern_docs",description:"Retrieves full dashboard patterns, split buttons, data tables, filter toolbars, and responsive navigation recipes."},{name:"get_figma_to_code",description:"Translates Figma component parameters into production-ready Loom UI JSX structures."}];function r(o){const n={a:"a",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Guides/Loom MCP"}),`
`,e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"20px"},children:[e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",backgroundColor:"rgba(16,185,129,0.12)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#10B981",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),e.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),e.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]})}),e.jsxs("div",{children:[e.jsx("h1",{style:{margin:0,fontSize:"28px",fontWeight:700},children:"Loom MCP"}),e.jsx("p",{style:{margin:0,fontSize:"14px",opacity:.75},children:"Model Context Protocol server for Green Loom & Loom UI"})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Loom MCP"})," is an official ",e.jsx(n.a,{href:"https://modelcontextprotocol.io/introduction",rel:"nofollow",children:"Model Context Protocol (MCP)"})," server that equips AI assistants (such as Antigravity, Cursor, Windsurf, Claude Desktop, and Copilot) with deep knowledge of ",e.jsx(n.strong,{children:"Green Loom"})," design guidelines, accessible component patterns, design tokens, and TypeScript contracts."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(s,{size:"large",children:"Available Tools"}),`
`,`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",margin:"1.5rem 0"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"rgba(128,128,128,0.08)",borderBottom:"2px solid rgba(128,128,128,0.2)"},children:[e.jsx("th",{style:{padding:"0.85rem 1rem",textAlign:"left",fontWeight:"600"},children:"Tool Name"}),e.jsx("th",{style:{padding:"0.85rem 1rem",textAlign:"left",fontWeight:"600"},children:"Description"})]})}),e.jsx("tbody",{children:h.map((t,d)=>e.jsxs("tr",{style:{borderBottom:"1px solid rgba(128,128,128,0.15)"},children:[e.jsx("td",{style:{padding:"0.85rem 1rem"},children:e.jsx(c,{size:"small",children:t.name})}),e.jsx("td",{style:{padding:"0.85rem 1rem",fontSize:"14px",lineHeight:1.6},children:t.description})]},d))})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(s,{size:"large",children:"Prerequisites"}),`
`,e.jsx(l,{marginBottom:"spacing.5",children:e.jsx(m,{children:e.jsx(p,{children:"Node.js version >= 18.18.0"})})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(s,{size:"large",children:"Integration Setup"}),`
`,e.jsx(n.h3,{id:"cursor-or-vs-code",children:"Cursor or VS Code"}),`
`,e.jsxs(n.p,{children:["Add to your ",e.jsx(n.code,{children:".cursor/mcp.json"})," or VS Code MCP configuration:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "mcpServers": {
    "loom-mcp": {
      "command": "npx",
      "args": ["-y", "@greenloom/mcp@latest"]
    }
  }
}
`})}),`
`,e.jsx(n.h3,{id:"claude-desktop",children:"Claude Desktop"}),`
`,e.jsxs(n.p,{children:["Add to ",e.jsx(n.code,{children:"claude_desktop_config.json"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "mcpServers": {
    "loom-mcp": {
      "command": "npx",
      "args": ["-y", "@greenloom/mcp@latest"]
    }
  }
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(s,{size:"large",children:"Prompting & Usage Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Can you build a reconciliation dashboard with SideNav, data table filters, and a summary card using Loom UI?
`})}),`
`,e.jsxs(n.p,{children:["The AI agent will call ",e.jsx(n.code,{children:"get_loom_component_docs"})," and ",e.jsx(n.code,{children:"get_loom_pattern_docs"})," through Loom MCP to write verified, accessible code with the Powder Green palette."]})]})}function u(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{u as default,h as toolsData};
