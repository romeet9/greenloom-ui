<script lang="ts">
  import { metaAttribute, MetaConstants } from '@greenloom/loom-core/utils';
  import { makeAnalyticsAttribute } from '@greenloom/loom-core/utils';
  import { getCardHeaderClasses } from '@greenloom/loom-core/styles';
  import Divider from '../Divider/Divider.svelte';
  import { useCardContext } from './CardContext';
  import type { CardHeaderProps } from './types';

  // Verify inside Card
  useCardContext('CardHeader');

  let {
    children: headerContent,
    marginBottom = 'spacing.4',
    paddingBottom = 'spacing.4',
    showDivider = true,
    testID,
    ...rest
  }: CardHeaderProps = $props();

  const headerClasses = $derived(
    getCardHeaderClasses({ paddingBottom, marginBottom })
  );

  const metaAttrs = $derived(metaAttribute({ name: MetaConstants.CardHeader, testID }));
  const analyticsAttrs = $derived(makeAnalyticsAttribute(rest));
</script>

<div class={headerClasses.wrapper} {...metaAttrs} {...analyticsAttrs}>
  <div class={headerClasses.content}>
    {#if headerContent}
      {@render headerContent()}
    {/if}
  </div>
  {#if showDivider}
    <Divider />
  {/if}
</div>
