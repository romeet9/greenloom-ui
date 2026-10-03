<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  const { Story } = defineMeta({
    title: 'Guides/Installation',
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component:
            'Installation guide and quick start examples for Blade Svelte. See the README.md for full documentation.',
        },
      },
    },
  });
</script>

<script>
  import { Button, Text, Heading } from '../components';
</script>

<Story name="Quick Start">
  <div style="max-width: 800px; padding: 24px; font-family: system-ui, sans-serif;">
    <Heading size="xlarge">Installation Guide</Heading>

    <div style="margin-top: 24px;">
      <Heading size="large">Step 1: Install Package</Heading>
      <Text size="medium" color="surface.text.gray.muted">Install the Blade Svelte package:</Text>
      <pre
        style="background: #f4f4f5; padding: 16px; border-radius: 8px; margin: 12px 0; overflow-x: auto;"
        ><code>yarn add @greenloom/loom-svelte</code></pre
      >
      <Text size="small" color="surface.text.gray.muted">
        Note: @greenloom/loom-core (design tokens, CSS, fonts) is automatically installed as a
        dependency.
      </Text>
    </div>

    <div style="margin-top: 24px;">
      <Heading size="large">Step 2: Import Theme CSS</Heading>
      <Text size="medium" color="surface.text.gray.muted">Add to your entry file or layout:</Text>
      <pre
        style="background: #f4f4f5; padding: 16px; border-radius: 8px; margin: 12px 0; overflow-x: auto;"
        ><code>import '@greenloom/loom-core/tokens/theme.css';</code></pre
      >
    </div>

    <div style="margin-top: 24px;">
      <Heading size="large">Step 3: Import Fonts</Heading>
      <Text size="medium" color="surface.text.gray.muted">Add Blade fonts:</Text>
      <pre
        style="background: #f4f4f5; padding: 16px; border-radius: 8px; margin: 12px 0; overflow-x: auto;"
        ><code>import '@greenloom/loom-core/fonts.css';</code></pre
      >
    </div>

    <div style="margin-top: 24px;">
      <Heading size="large">Step 4: Wrap App in LoomProvider</Heading>
      <Text size="medium" color="surface.text.gray.muted">
        Pass <code>loomTheme</code> or a custom theme from <code>createTheme</code>:
      </Text>
      <pre
        style="background: #f4f4f5; padding: 16px; border-radius: 8px; margin: 12px 0; overflow-x: auto;"
        ><code
          >{`import { LoomProvider, Button } from '@greenloom/loom-svelte/components';
import { loomTheme, createTheme } from '@greenloom/loom-core/tokens';

const { theme } = createTheme({ brandColor: '#19BEA2', borderRadius: { medium: 16 } });

<LoomProvider themeTokens={loomTheme} colorScheme="light">
  <Button>Pay</Button>
</LoomProvider>`}</code
        ></pre
      >
    </div>

    <div style="margin-top: 24px;">
      <Heading size="large">Step 5: Use Components</Heading>
      <Text size="medium" color="surface.text.gray.muted">Import and use Blade components:</Text>
      <pre
        style="background: #f4f4f5; padding: 16px; border-radius: 8px; margin: 12px 0; overflow-x: auto;"
        ><code
          >{`import { Button, Text, Heading } from '@greenloom/loom-svelte/components';`}</code
        ></pre
      >
    </div>
  </div>
</Story>

<Story name="Dark Mode">
  <div style="padding: 24px; max-width: 600px;">
    <Heading size="large">Theme Switching</Heading>
    <Text size="medium" color="surface.text.gray.muted">
      Pass <code>colorScheme</code> to LoomProvider (<code>light</code>, <code>dark</code>, or
      <code>system</code>). Nested providers can scope dark/light to a subtree via
      <code>data-blade-color-scheme</code>.
    </Text>
    <pre
      style="background: #f4f4f5; padding: 16px; border-radius: 8px; margin: 12px 0; overflow-x: auto;"
      ><code
        >{`<LoomProvider themeTokens={loomTheme} colorScheme="dark">
  <!-- Dark scoped UI -->
</LoomProvider>`}</code
      ></pre
      >
    <Text size="small" color="surface.text.gray.muted">
      Use the theme switcher in the Storybook toolbar to preview dark mode and brand colors.
    </Text>
  </div>
</Story>

<Story name="Live Example">
  <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
    <Heading size="large">Components with LoomProvider</Heading>
    <Text size="medium" color="surface.text.gray.muted">
      This story is wrapped by the Storybook LoomProvider decorator.
    </Text>
    <Button variant="primary">Primary Button</Button>
  </div>
</Story>
