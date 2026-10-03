import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import {
  createNewLoomProjectToolName,
  createNewLoomProjectToolDescription,
  createNewLoomProjectToolSchema,
  createNewLoomProjectToolCallback,
  createNewBladeProjectToolName,
  createNewBladeProjectToolDescription,
  createNewBladeProjectToolSchema,
  createNewBladeProjectToolCallback,
} from './tools/createNewBladeProject.js';
import {
  createLoomSkillToolName,
  createLoomSkillToolDescription,
  createLoomSkillToolSchema,
  createLoomSkillStdioCallback,
  createLoomSkillHttpCallback,
  createBladeSkillToolName,
  createBladeSkillToolDescription,
  createBladeSkillToolSchema,
  createBladeSkillStdioCallback,
  createBladeSkillHttpCallback,
} from './tools/createBladeSkill.js';
import {
  getLoomComponentDocsToolName,
  getLoomComponentDocsToolDescription,
  getLoomComponentDocsHttpSchema,
  getLoomComponentDocsStdioSchema,
  getLoomComponentDocsStdioCallback,
  getLoomComponentDocsHttpCallback,
  getBladeComponentDocsToolName,
  getBladeComponentDocsToolDescription,
  getBladeComponentDocsHttpSchema,
  getBladeComponentDocsStdioSchema,
  getBladeComponentDocsStdioCallback,
  getBladeComponentDocsHttpCallback,
} from './tools/getBladeComponentDocs.js';
import {
  hiLoomToolName,
  hiLoomToolDescription,
  hiLoomToolSchema,
  hiLoomToolCallback,
  hiBladeToolName,
  hiBladeToolDescription,
  hiBladeToolSchema,
  hiBladeToolCallback,
} from './tools/hiBlade.js';
import { getPackageJSONVersion } from './utils/generalUtils.js';
import {
  getLoomPatternDocsToolName,
  getLoomPatternDocsToolDescription,
  getLoomPatternDocsHttpSchema,
  getLoomPatternDocsHttpCallback,
  getLoomPatternDocsStdioSchema,
  getLoomPatternDocsStdioCallback,
  getBladePatternDocsToolName,
  getBladePatternDocsToolDescription,
  getBladePatternDocsHttpSchema,
  getBladePatternDocsHttpCallback,
  getBladePatternDocsStdioSchema,
  getBladePatternDocsStdioCallback,
} from './tools/getBladePatternDocs.js';
import {
  getLoomGeneralDocsToolName,
  getLoomGeneralDocsToolDescription,
  getLoomGeneralDocsHttpCallback,
  getLoomGeneralDocsHttpSchema,
  getLoomGeneralDocsStdioSchema,
  getLoomGeneralDocsStdioCallback,
  getBladeGeneralDocsToolName,
  getBladeGeneralDocsToolDescription,
  getBladeGeneralDocsHttpCallback,
  getBladeGeneralDocsHttpSchema,
  getBladeGeneralDocsStdioSchema,
  getBladeGeneralDocsStdioCallback,
} from './tools/getBladeGeneralDocs.js';
import {
  getFigmaToCodeToolName,
  getFigmaToCodeToolDescription,
  getFigmaToCodeToolSchema,
  getFigmaToCodeToolCallback,
} from './tools/getFigmaToCode.js';
import {
  getLoomChangelogToolName,
  getLoomChangelogToolDescription,
  getLoomChangelogToolSchema,
  getLoomChangelogToolCallback,
  getChangelogToolName,
  getChangelogToolDescription,
  getChangelogToolSchema,
  getChangelogToolCallback,
} from './tools/getChangelog.js';
import {
  publishLinesOfCodeMetricToolName,
  publishLinesOfCodeMetricToolDescription,
  publishLinesOfCodeMetricToolSchema,
  publishLinesOfCodeMetricToolCallback,
} from './tools/publishLinesOfCodeMetric.js';
import { setMcpSseAnalyticsContext } from './utils/analyticsUtils.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const httpsServerTools = (server: McpServer): void => {
  server.tool(
    createLoomSkillToolName,
    createLoomSkillToolDescription,
    createLoomSkillToolSchema,
    createLoomSkillHttpCallback,
  );

  server.tool(
    getLoomComponentDocsToolName,
    getLoomComponentDocsToolDescription,
    getLoomComponentDocsHttpSchema,
    getLoomComponentDocsHttpCallback,
  );

  server.tool(
    getLoomPatternDocsToolName,
    getLoomPatternDocsToolDescription,
    getLoomPatternDocsHttpSchema,
    getLoomPatternDocsHttpCallback,
  );

  server.tool(
    getLoomGeneralDocsToolName,
    getLoomGeneralDocsToolDescription,
    getLoomGeneralDocsHttpSchema,
    getLoomGeneralDocsHttpCallback,
  );
};

const stdioServerTools = (server: McpServer): void => {
  server.tool(
    createLoomSkillToolName,
    createLoomSkillToolDescription,
    createLoomSkillToolSchema,
    createLoomSkillStdioCallback,
  );

  server.tool(
    getLoomComponentDocsToolName,
    getLoomComponentDocsToolDescription,
    getLoomComponentDocsStdioSchema,
    getLoomComponentDocsStdioCallback,
  );

  server.tool(
    getLoomPatternDocsToolName,
    getLoomPatternDocsToolDescription,
    getLoomPatternDocsStdioSchema,
    getLoomPatternDocsStdioCallback,
  );

  server.tool(
    getLoomGeneralDocsToolName,
    getLoomGeneralDocsToolDescription,
    getLoomGeneralDocsStdioSchema,
    getLoomGeneralDocsStdioCallback,
  );
};
export const createServer = ({
  transportType = 'stdio',
}: {
  transportType?: 'stdio' | 'http';
}): McpServer => {
  const server = new McpServer({
    name: 'Loom UI MCP',
    version: getPackageJSONVersion(),
  });

  setMcpSseAnalyticsContext({ protocol: transportType });

  if (transportType === 'http') {
    httpsServerTools(server);
  } else {
    stdioServerTools(server);
  }

  server.tool(hiLoomToolName, hiLoomToolDescription, hiLoomToolSchema, hiLoomToolCallback);

  server.tool(
    createNewLoomProjectToolName,
    createNewLoomProjectToolDescription,
    createNewLoomProjectToolSchema,
    createNewLoomProjectToolCallback,
  );

  server.tool(
    getFigmaToCodeToolName,
    getFigmaToCodeToolDescription,
    getFigmaToCodeToolSchema,
    getFigmaToCodeToolCallback,
  );

  server.tool(
    getLoomChangelogToolName,
    getLoomChangelogToolDescription,
    getLoomChangelogToolSchema,
    getLoomChangelogToolCallback,
  );

  server.tool(
    publishLinesOfCodeMetricToolName,
    publishLinesOfCodeMetricToolDescription,
    publishLinesOfCodeMetricToolSchema,
    publishLinesOfCodeMetricToolCallback,
  );

  return server;
};
