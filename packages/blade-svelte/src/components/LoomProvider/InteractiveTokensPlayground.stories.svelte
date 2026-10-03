<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import InteractiveTokensPlayground from './InteractiveTokensPlayground.svelte';

  const { Story } = defineMeta({
    title: 'Playground/Interactive Tokens',
    component: InteractiveTokensPlayground,
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
      docs: {
        description: {
          component:
            "Every Blade Svelte component that consumes `interactive.*` color tokens, rendered together. Pick a brand color to run it through Blade's real `createTheme` pipeline and feed `LoomProvider` — exactly like a themed app. The full `interactive.primary.*` state scale is derived by `createTheme` (positive / negative / notice / neutral / gray / static* are fixed Blade tokens with no app-facing override).",
        },
      },
    },
  });
</script>

<!-- Self-contained playground: owns its own LoomProvider, so the global decorator is skipped. -->
<Story
  name="Playground"
  asChild
  parameters={{
    controls: { disable: true },
    skipLoomProviderDecorator: true,
  }}
>
  <InteractiveTokensPlayground />
</Story>
