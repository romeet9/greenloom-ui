# loom-core — Agent Context

Core utilities and shared functionality for Loom UI. Contains shared logic consumed by `@greenloom/loom`, `@greenloom/loom-svelte`, and other Loom packages.

Important: This package provides tokens and styles for `@greenloom/loom-svelte` and core tokens for `@greenloom/loom`.

## Package Structure

```
src/   # Core utilities and shared code
  tokens/   # Core theme tokens of blade
  styles/   # Shared styles
  utils/    # Shared utilities
  types/    # Shared types
  index.ts  # Entry point
```

## Quick Commands

> **Note:** Run these commands from the `packages/blade-core` directory.

| Task          | Command            |
| ------------- | ------------------ |
| Build         | `yarn build`       |
| Build (watch) | `yarn build:watch` |
| Type check    | `yarn typecheck`   |
| Run tests     | `yarn test`        |
