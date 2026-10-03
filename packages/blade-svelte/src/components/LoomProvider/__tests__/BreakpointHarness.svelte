<script lang="ts">
  import { loomTheme } from '@greenloom/loom-core/tokens';
  import LoomProvider from '../LoomProvider.svelte';
  import BreakpointConsumer from './BreakpointConsumer.svelte';
</script>

<LoomProvider themeTokens={loomTheme}>
  <BreakpointConsumer />
</LoomProvider>
