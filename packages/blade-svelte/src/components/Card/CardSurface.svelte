<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getCardSurfaceClasses } from '@greenloom/loom-core/styles';
  import type { CardSurfaceVariants, CardType } from '@greenloom/loom-core/styles';
  import { cx } from '@greenloom/loom-core/utils';

  type OverflowValue = 'visible' | 'hidden' | 'scroll' | 'auto' | 'clip';

  let {
    children,
    type = 'primary',
    backgroundColor,
    padding = 'spacing.7',
    borderRadius = 'medium',
    height,
    minHeight,
    overflow,
    overflowX,
    overflowY,
    styleOverrideSurface,
  }: {
    children: Snippet;
    type?: CardType;
    backgroundColor?: CardSurfaceVariants['backgroundColor'];
    padding?: CardSurfaceVariants['padding'];
    borderRadius?: CardSurfaceVariants['borderRadius'];
    height?: string;
    minHeight?: string;
    overflow?: OverflowValue;
    overflowX?: OverflowValue;
    overflowY?: OverflowValue;
    styleOverrideSurface?: string;
  } = $props();

  const surfaceClasses = $derived(
    cx(
      getCardSurfaceClasses({
        type,
        backgroundColor,
        padding,
        borderRadius,
      }),
      styleOverrideSurface,
    ),
  );
</script>

<div
  class={surfaceClasses}
  style:height={height}
  style:min-height={minHeight}
  style:overflow={overflow}
  style:overflow-x={overflowX}
  style:overflow-y={overflowY}
>
  {@render children()}
</div>
