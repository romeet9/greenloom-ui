<script lang="ts">
  import { getActionListTemplateClasses } from '@greenloom/loom-core/styles';
  import type { ActionListItemBadgeGroupProps } from './types';

  // Call template getter so the CVA/template class isn't tree-shaken.
  const templateClasses = getActionListTemplateClasses();

  let { children }: ActionListItemBadgeGroupProps = $props();
</script>

<div class={templateClasses.itemBadgeGroup}>
  {@render children()}
</div>
