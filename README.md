<br/>
<p align="center">
  <img width="84px" height="92px" alt="Loom UI Emblem" src="https://raw.githubusercontent.com/romeet9/greenloom-ui/master/branding/logo.svg">
</p>

<h1 align="center">Loom UI</h1>

<p align="center">
  The Enterprise Design System and Accessible Component Foundation for <strong>Green Loom</strong>
</p>

<p align="center">
  <span style="display: inline-block; padding: 2px 8px; border-radius: 6px; background-color: rgba(16,185,129,0.1); color: #059669; font-weight: bold; border: 1px solid rgba(16,185,129,0.2);">v1.0.0</span> &nbsp;
  <span style="display: inline-block; padding: 2px 8px; border-radius: 6px; background-color: rgba(16,185,129,0.1); color: #059669; font-weight: bold; border: 1px solid rgba(16,185,129,0.2);">WCAG AAA Compliant</span> &nbsp;
  <span style="display: inline-block; padding: 2px 8px; border-radius: 6px; background-color: rgba(16,185,129,0.1); color: #059669; font-weight: bold; border: 1px solid rgba(16,185,129,0.2);">Zero A11y Violations</span> &nbsp;
  <span style="display: inline-block; padding: 2px 8px; border-radius: 6px; background-color: rgba(16,185,129,0.1); color: #059669; font-weight: bold; border: 1px solid rgba(16,185,129,0.2);">TypeScript Native</span>
</p>

<br/>

## ✨ Key Features

- **Dense Data Ergonomics**: Engineered for high-density tables, multi-tier filters, financial workflows, and enterprise dashboards.
- **Strict Accessibility (WCAG AAA)**: Full keyboard navigation, automated axe-core zero violation score, and high-contrast dark theme surfaces (`#0D1117`).
- **Powder Green Design Tokens**: Harmonic natural palette paired with Geist typography and Hugeicons stroke iconography.
- **AI-Native MCP Server**: Integrated `@greenloom/mcp` Model Context Protocol server for Claude Code, Cursor, and IDE coding agents.
- **Cross-Platform**: Unified component APIs across React Web and React Native.

---

## 🚀 Getting Started for Developers

### 1. Clone & Install

```bash
git clone https://github.com/romeet9/greenloom-ui.git
cd greenloom-ui
yarn install
```

### 2. Run Storybook Locally

```bash
yarn react:storybook
```
Open **[http://localhost:9009](http://localhost:9009)** in your browser to view all 80+ components, interactive docs, and theme playgrounds.

### 3. Build Monorepo & MCP Server

```bash
# Build core Loom UI packages
yarn build

# Build Loom UI MCP server
yarn mcp:build

# Build production static Storybook site for sharing
yarn storybook:build
```

---

## 🌐 Sharing Storybook with Developers

You have two simple ways to share Storybook with team members and external developers:

### Option A: Direct Local Run (Recommended for Contributors)
Share the repository URL:
```bash
git clone https://github.com/romeet9/greenloom-ui.git
cd greenloom-ui && yarn && yarn react:storybook
```

### Option B: Host Static Storybook (Online Web Link)
Build the standalone static website bundle:
```bash
yarn storybook:build
```
This generates the complete self-contained HTML/JS bundle in `packages/blade/storybook-site/`. You can deploy this folder directly to **GitHub Pages**, **Vercel**, **Netlify**, or **Chromatic** to get a shareable public URL (e.g. `https://romeet9.github.io/greenloom-ui`).

---

## 📦 Monorepo Packages

| Package | Directory | Description |
| :--- | :--- | :--- |
| **`@greenloom/loom`** | [`./packages/blade`](./packages/blade/) | The core Loom UI component library, tokens, and theme providers. |
| **`@greenloom/loom-mcp`** | [`./packages/blade-mcp`](./packages/blade-mcp/) | Model Context Protocol (MCP) server for AI assistants building Loom UI code. |
| **`@greenloom/loom-core`** | [`./packages/blade-core`](./packages/blade-core/) | Core design tokens, shared utilities, and typography systems. |
| **`@greenloom/loom-svelte`** | [`./packages/blade-svelte`](./packages/blade-svelte/) | Svelte 5 components for Loom UI. |

---

## 🤖 Connecting AI Assistants (Loom UI MCP)

To enable AI assistant pair programming with Loom UI in Cursor, Claude Code, Windsurf, or Antigravity, add the MCP server configuration:

```json
{
  "mcpServers": {
    "loom-ui": {
      "command": "node",
      "args": ["packages/blade-mcp/dist/server.js"]
    }
  }
}
```

Once connected, ask your AI assistant:
- *"Create a new Loom project with a dense data table layout"*
- *"Show me how to configure the PasswordInput component in Loom UI"*

---

## 📝 License

Licensed under the [MIT License](./LICENSE.md).
