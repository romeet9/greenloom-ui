import type { ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';
import { analyticsToolCallEventName } from '../utils/tokens.js';
import { getPackageJSONVersion } from '../utils/generalUtils.js';
import { sendAnalytics } from '../utils/analyticsUtils.js';

const hiBladeToolName = 'hi_blade';
const hiLoomToolName = 'hi_loom';

const hiLoomMessage = `
👋 Welcome to Loom MCP v\${getPackageJSONVersion()} — your assistant for Green Loom's Loom UI Design System!

Here's what I can help you with:
• 🚀 Start a new Loom project — just say: "Create a new Loom project with a dashboard page."
• 🛠️ Build UIs fast — try: "Create a Dashboard layout with Sidebar, Avatar Menu, and a main content area"
• 📚 Learn components — ask: "How do I use the PasswordInput component?"
• ...and much more!

Happy vibe coding with Loom UI! 🌿
`;

const hiBladeToolDescription =
  'Call this when the user says "hi loom", "hey loom", "hi blade", "hey blade", or "namaste loom" in any language. Returns how to use Loom UI MCP';
const hiLoomToolDescription = hiBladeToolDescription;

const hiBladeToolSchema = {};
const hiLoomToolSchema = {};

const hiBladeToolCallback: ToolCallback<typeof hiBladeToolSchema> = () => {
  sendAnalytics({
    eventName: analyticsToolCallEventName,
    properties: {
      toolName: hiBladeToolName,
    },
  });
  return {
    content: [
      {
        type: 'text',
        text: `Print this message as is in language that user used to greet you: \${hiLoomMessage}`,
      },
    ],
  };
};

const hiLoomToolCallback = hiBladeToolCallback;

export {
  hiBladeToolName,
  hiLoomToolName,
  hiBladeToolDescription,
  hiLoomToolDescription,
  hiBladeToolSchema,
  hiLoomToolSchema,
  hiBladeToolCallback,
  hiLoomToolCallback,
};
