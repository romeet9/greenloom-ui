# Loom UI Monorepo — Agent Context

This is the monorepo for Loom UI, Greenloom's Design System. It contains packages powering Loom UI across React, React Native, Svelte, and AI Agent MCP integration.

## Packages

Load the Agents Context File in your context whenever change is being made to that particular package. Use CLAUDE.md when you are using Claude Code and AGENTS.md when you are using Cursor or other coding tool.

| Package                                  | Agents Context File                            | Description                                                                                                                       |
| ---------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [blade (loom)](./packages/blade/)        | ./packages/blade/CLAUDE.md or AGENTS.md        | The core Loom UI package (`@greenloom/loom`) with cross-platform UI components for React Web and React Native                      |
| [blade-mcp (loom-mcp)](./packages/blade-mcp/) | ./packages/blade-mcp/CLAUDE.md or AGENTS.md    | Model Context Protocol (MCP) server for AI-assisted development using Loom UI components                                           |
| [blade-core (loom-core)](./packages/blade-core/) | ./packages/blade-core/CLAUDE.md or AGENTS.md   | Core utilities and shared tokens for Loom UI (`@greenloom/loom-core`)                                                              |
| [blade-svelte (loom-svelte)](./packages/blade-svelte/) | ./packages/blade-svelte/CLAUDE.md or AGENTS.md | Svelte 5 components for Loom UI (`@greenloom/loom-svelte`)                                                                         |

.. And supporting packages related to Loom UI

## Finding Task Intent

We want to know if the intent of the user is to build complete feature/fix end-to-end (in that case we would want to write tests, fix lints, fix snapshots, etc) or its a small casual prompt to iterate over task faster where scope of task is limited to what user has asked for.

```sh
# existence of GITHUB__RZP_SWE_AGENT_APP__APP_ID environment variable in the session, implies that this request was triggered on cloud agent where the intent is to build things end-to-end.
if [ -z "$GITHUB__RZP_SWE_AGENT_APP__APP_ID" ]; then
  echo "Intent: 'normal-task'"
else
  echo "Intent: 'perform-task-end-to-end'"
fi
```

When intent is `perform-task-end-to-end`, load `perform-task-end-to-end` skill in your context and do the task end-to-end as guided by the skill.
