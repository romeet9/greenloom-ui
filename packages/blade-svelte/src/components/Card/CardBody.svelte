<script lang="ts">
  import { metaAttribute, MetaConstants } from '@greenloom/loom-core/utils';
  import { makeAnalyticsAttribute } from '@greenloom/loom-core/utils';
  import { getCardTemplateClasses } from '@greenloom/loom-core/styles';
  import { useCardContext } from './CardContext';
  import type { CardBodyProps } from './types';

  // Prevent tree-shaking
  const templateClasses = getCardTemplateClasses();

  // Verify inside Card
  useCardContext('CardBody');

  let {
    children,
    height,
    testID,
    ...rest
  }: CardBodyProps = $props();

  const metaAttrs = $derived(metaAttribute({ name: MetaConstants.CardBody, testID }));
  const analyticsAttrs = $derived(makeAnalyticsAttribute(rest));
</script>

<div
  class={templateClasses.cardBody}
  style:height={height}
  {...metaAttrs}
  {...analyticsAttrs}
>
  {@render children()}
</div>
