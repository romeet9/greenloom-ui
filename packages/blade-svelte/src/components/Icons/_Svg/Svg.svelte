<script lang="ts">
  import type { Snippet } from 'svelte';
  import { metaAttribute, MetaConstants, makeAccessible } from '@greenloom/loom-core/utils';
  import type { StyledPropsBlade } from '@greenloom/loom-core/utils';
  import { getStyledPropsClasses } from '@greenloom/loom-core/utils';

  type SvgProps = {
    width: number;
    height: number;
    viewBox: string;
    fill?: string;
    fillOpacity?: number;
    testID?: string;
    children: Snippet;
  } & StyledPropsBlade;

  let {
    width,
    height,
    viewBox,
    fill = 'none',
    fillOpacity,
    testID,
    children,
    ...rest
  }: SvgProps = $props();

  // Get styled props classes
  const styledProps = $derived(getStyledPropsClasses(rest));

  // Accessibility - hide decorative icons from screen readers
  const accessibilityAttrs = makeAccessible({ hidden: true });

  // Meta attributes for testing
  const metaAttrs = metaAttribute({
    name: MetaConstants.Icon,
    testID,
  });
</script>

<svg
  {...accessibilityAttrs}
  {...metaAttrs}
  {width}
  {height}
  {viewBox}
  {fill}
  fill-opacity={fillOpacity}
  class={styledProps.classes?.join(' ') || undefined}
>
  {@render children()}
</svg>

