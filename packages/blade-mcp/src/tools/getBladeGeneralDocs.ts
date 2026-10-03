import { readFileSync } from 'fs';
import { join, basename } from 'path';
import { z } from 'zod';
import type { ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';
import { analyticsToolCallEventName, GENERAL_KNOWLEDGEBASE_DIRECTORY } from '../utils/tokens.js';
import {
  commonBladeMCPToolSchema,
  httpTransportSkillVersionSchema,
} from '../utils/getCommonSchema.js';

import { getBladeDocsList } from '../utils/generalUtils.js';
import { handleError, sendAnalytics } from '../utils/analyticsUtils.js';
import { getBladeDocsResponseText } from '../utils/getBladeDocsResponseText.js';
import { shouldCreateOrUpdateSkill } from '../utils/skillUtils.js';
import type { McpToolResponse } from '../utils/types.js';

const bladeGeneralDocsList = getBladeDocsList('general');

const getLoomGeneralDocsToolName = 'get_loom_general_docs';
const getBladeGeneralDocsToolName = getLoomGeneralDocsToolName;

const whichGeneralDocsToUse = readFileSync(
  join(GENERAL_KNOWLEDGEBASE_DIRECTORY, 'index.md'),
  'utf8',
);

const getLoomGeneralDocsToolDescription = `Fetch general Loom UI Design System documentation. Use this to get information about setup, installation, theming, tokens, and general guidelines.`;
const getBladeGeneralDocsToolDescription = getLoomGeneralDocsToolDescription;

// Schema for stdio transport
const getLoomGeneralDocsStdioSchema = {
  topicsList: z
    .string()
    .describe(
      `Comma separated list of general documentation topics. E.g. "Installation, Theming". Possible values: ${bladeGeneralDocsList.join(
        ', ',
      )}. Here is guide on how to decide which general docs you might need:\n ${whichGeneralDocsToUse}`,
    ),
  ...commonBladeMCPToolSchema,
};
const getBladeGeneralDocsStdioSchema = getLoomGeneralDocsStdioSchema;

// Schema for HTTP transport
const getLoomGeneralDocsHttpSchema = {
  ...getLoomGeneralDocsStdioSchema,
  ...httpTransportSkillVersionSchema,
};
const getBladeGeneralDocsHttpSchema = getLoomGeneralDocsHttpSchema;

// Core business logic function
const getBladeGeneralDocsCore = ({
  topicsList,
  currentProjectRootDirectory,
  skipLocalSkillChecks = false,
  skillVersion = '0',
  clientName,
}: {
  topicsList: string;
  currentProjectRootDirectory?: string;
  skipLocalSkillChecks?: boolean;
  skillVersion?: string;
  clientName: 'claude' | 'cursor' | 'unknown';
}): McpToolResponse => {
  const topics = topicsList.split(',').map((s) => s.trim());
  const invalidTopics = topics.filter((topic) => !bladeGeneralDocsList.includes(topic));
  if (invalidTopics.length > 0) {
    return handleError({
      toolName: getBladeGeneralDocsToolName,
      mcpErrorMessage: `Invalid argument topicsList. Invalid values: ${invalidTopics.join(
        ', ',
      )}. Valid general docs values: ${bladeGeneralDocsList.join(', ')}`,
    });
  }

  // Check skill using shouldCreateOrUpdateSkill which handles both file system and version checks
  if (currentProjectRootDirectory) {
    const createOrUpdateSkill = shouldCreateOrUpdateSkill(
      skillVersion,
      currentProjectRootDirectory,
      skipLocalSkillChecks,
      getBladeGeneralDocsToolName,
    );
    if (createOrUpdateSkill) {
      return createOrUpdateSkill;
    }
  }

  try {
    const responseText = getBladeDocsResponseText({
      docsList: topicsList,
      documentationType: 'general',
    });

    sendAnalytics({
      eventName: analyticsToolCallEventName,
      properties: {
        toolName: getBladeGeneralDocsToolName,
        topicsList,
        rootDirectoryName: currentProjectRootDirectory
          ? basename(currentProjectRootDirectory)
          : undefined,
        skillVersion,
        clientName,
      },
    });

    return {
      content: [
        {
          type: 'text',
          text: responseText.trim(),
        },
      ],
    };
  } catch (error: unknown) {
    return handleError({
      toolName: getBladeGeneralDocsToolName,
      errorObject: error,
    });
  }
};

// Callback for stdio transport
const getLoomGeneralDocsStdioCallback: ToolCallback<typeof getLoomGeneralDocsStdioSchema> = ({
  topicsList,
  currentProjectRootDirectory,
  clientName,
}) => {
  return getBladeGeneralDocsCore({
    topicsList,
    currentProjectRootDirectory,
    skipLocalSkillChecks: false, // Perform skill checks for stdio
    clientName,
  });
};
const getBladeGeneralDocsStdioCallback = getLoomGeneralDocsStdioCallback;

// Callback for HTTP transport
const getLoomGeneralDocsHttpCallback: ToolCallback<typeof getLoomGeneralDocsHttpSchema> = ({
  topicsList,
  skillVersion,
  clientName,
  currentProjectRootDirectory,
}) => {
  return getBladeGeneralDocsCore({
    topicsList,
    currentProjectRootDirectory,
    skipLocalSkillChecks: true, // Skip local skill checks for HTTP
    skillVersion,
    clientName,
  });
};
const getBladeGeneralDocsHttpCallback = getLoomGeneralDocsHttpCallback;

export {
  getLoomGeneralDocsToolName,
  getBladeGeneralDocsToolName,
  getLoomGeneralDocsToolDescription,
  getBladeGeneralDocsToolDescription,
  getLoomGeneralDocsHttpCallback,
  getBladeGeneralDocsHttpCallback,
  getLoomGeneralDocsStdioCallback,
  getBladeGeneralDocsStdioCallback,
  getLoomGeneralDocsHttpSchema,
  getBladeGeneralDocsHttpSchema,
  getLoomGeneralDocsStdioSchema,
  getBladeGeneralDocsStdioSchema,
};
