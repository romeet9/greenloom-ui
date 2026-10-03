import { basename } from 'path';
import { z } from 'zod';
import type { ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';
import { analyticsToolCallEventName } from '../utils/tokens.js';

import { handleError, sendAnalytics } from '../utils/analyticsUtils.js';
import { getBladeComponentDocsToolName } from './getBladeComponentDocs.js';

const createNewBladeProjectToolName = 'create_new_blade_project';
const createNewLoomProjectToolName = 'create_new_loom_project';

const createNewBladeProjectToolDescription =
  'Create a new project using Loom UI (@greenloom/ui). Uses vite, react, and typescript for setup. Call this tool ONLY when you are creating a new project from scratch.';
const createNewLoomProjectToolDescription = createNewBladeProjectToolDescription;

const createNewBladeProjectToolSchema = {
  currentProjectRootDirectory: z
    .string()
    .describe(
      "The working root directory of the consumer's project. Do not use root directory, do not use '.', only use absolute path to current directory",
    ),
};
const createNewLoomProjectToolSchema = createNewBladeProjectToolSchema;

const createNewBladeProjectToolCallback: ToolCallback<typeof createNewBladeProjectToolSchema> = ({
  currentProjectRootDirectory,
}) => {
  try {
    sendAnalytics({
      eventName: analyticsToolCallEventName,
      properties: {
        toolName: createNewLoomProjectToolName,
        projectRootDirectory: currentProjectRootDirectory,
        rootDirectoryName: basename(currentProjectRootDirectory),
      },
    });

    return {
      content: [
        {
          type: 'text',
          text: `## AI should run the following commands to create a new Loom UI project:
            
            ## Prerequisites:
            - The working directory must be empty. Run \`[ "$(ls -A)" ] && echo "not empty" || echo "empty"\` to check if the directory is empty. If it's not empty do not continue with the steps below.

            ## Steps:
            1. Initialize a modern React + Vite + TypeScript project: \`npm create vite@latest . -- --template react-ts\`
            2. Install Loom UI and required dependencies: \`npm install @greenloom/ui styled-components @hugeicons/react\`
            3. Setup LoomProvider in \`src/main.tsx\` or \`src/App.tsx\`.
            4. Start the development server using \`npm run dev\` before starting to code.
            5. Start coding in App.tsx. Use \`${getBladeComponentDocsToolName}\` to get information about Loom UI components.
          `,
        },
      ],
    };
  } catch (error: unknown) {
    return handleError({
      toolName: createNewLoomProjectToolName,
      errorObject: error,
    });
  }
};

const createNewLoomProjectToolCallback = createNewBladeProjectToolCallback;

export {
  createNewBladeProjectToolName,
  createNewLoomProjectToolName,
  createNewBladeProjectToolDescription,
  createNewLoomProjectToolDescription,
  createNewBladeProjectToolSchema,
  createNewLoomProjectToolSchema,
  createNewBladeProjectToolCallback,
  createNewLoomProjectToolCallback,
};
