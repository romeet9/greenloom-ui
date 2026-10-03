<script lang="ts">
  import {
    metaAttribute,
    MetaConstants,
    makeAnalyticsAttribute,
  } from '@greenloom/loom-core/utils';
  import {
    modalFooterClass,
    modalFooterDividerClass,
    modalFooterInnerClass,
  } from '@greenloom/loom-core/styles';
  import type { ModalFooterProps } from './types';

  let { children, testID, ...rest }: ModalFooterProps = $props();

  const metaAttrs = metaAttribute({ name: MetaConstants.ModalFooter, testID });
  const analyticsAttrs = $derived(makeAnalyticsAttribute(rest));
</script>

<div class={modalFooterClass} {...metaAttrs} {...analyticsAttrs}>
  <div class={modalFooterDividerClass} role="separator"></div>
  <div class={modalFooterInnerClass}>
    {@render children()}
  </div>
</div>
