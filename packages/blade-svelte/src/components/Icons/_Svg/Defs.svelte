<script lang="ts">
  import type { Snippet } from 'svelte';
  import { metaAttribute } from '@greenloom/loom-core/utils';

  type DefsProps = {
    children: Snippet;
  };

  let { children }: DefsProps = $props();

  const metaAttrs = metaAttribute({ name: 'svg-defs' });
</script>

<defs {...metaAttrs}>
  {@render children()}
</defs>
