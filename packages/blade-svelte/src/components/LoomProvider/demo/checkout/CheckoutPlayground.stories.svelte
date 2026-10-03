<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CheckoutPlayground from './CheckoutPlayground.svelte';

  const { Story } = defineMeta({
    title: 'Guides/Theming/Checkout Playground',
    component: CheckoutPlayground,
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component:
            'Studio-style checkout editor: the canvas renders a live checkout in a device frame, and the right properties panel configures `createTheme` global tokens (Foundations) plus `styleOverride` slots for every component in the provider registry (Widgets), applied through `LoomProvider` `componentConfig`. Studio chrome stays on the default theme so only the canvas reflects the configured theme.',
        },
      },
      layout: 'fullscreen',
    },
  });
</script>

<Story
  name="Playground"
  parameters={{
    controls: { disable: true },
    skipLoomProviderDecorator: true,
    docs: { canvas: { sourceState: 'none' } },
  }}
>
  <CheckoutPlayground />
</Story>
