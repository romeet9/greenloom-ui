import React from 'react';
import type { TrustBadgeProps } from './types';
import BaseBox from '~components/Box/BaseBox';
import { GreenLoomIcon } from '~components/Icons';
import { Text } from '~components/Typography';
import { makeAccessible } from '~utils/makeAccessible';
import { makeAnalyticsAttribute } from '~utils/makeAnalyticsAttribute';
import { metaAttribute, MetaConstants } from '~utils/metaAttribute';
import { getStyledProps } from '~components/Box/styledProps';
import { assignWithoutSideEffects } from '~utils/assignWithoutSideEffects';

const DEFAULT_LABEL = 'Green Loom Verified';

/**
 * ### TrustBadge
 *
 * A generic trust badge — a brand shield paired with a subtle pill that displays
 * a configurable trust label (default: "Green Loom Verified").
 */
const _TrustBadge = ({
  variant = 'default',
  label = DEFAULT_LABEL,
  testID,
  ...rest
}: TrustBadgeProps): React.ReactElement => {
  const isIconOnly = variant === 'icon-only';

  return (
    <BaseBox
      display="inline-flex"
      flexDirection="row"
      alignItems="center"
      flexShrink={0}
      gap={isIconOnly ? undefined : 'spacing.2'}
      height={isIconOnly ? undefined : '24px'}
      padding={isIconOnly ? 'spacing.2' : ['spacing.2', 'spacing.3']}
      borderRadius={isIconOnly ? undefined : 'max'}
      backgroundColor={isIconOnly ? undefined : 'surface.background.sea.subtle'}
      {...metaAttribute({ name: MetaConstants.TrustBadge, testID })}
      {...getStyledProps(rest)}
      {...makeAnalyticsAttribute(rest)}
    >
      <BaseBox
        display="flex"
        alignItems="center"
        flexShrink={0}
        {...(isIconOnly ? makeAccessible({ role: 'img', label }) : { 'aria-hidden': true })}
      >
        <GreenLoomIcon size="medium" />
      </BaseBox>
      {isIconOnly ? null : (
        <Text size="xsmall" weight="regular" color="surface.text.gray.subtle">
          {label}
        </Text>
      )}
    </BaseBox>
  );
};

const TrustBadge = assignWithoutSideEffects(_TrustBadge, {
  componentId: 'TrustBadge',
});

export { TrustBadge };
export type { TrustBadgeProps };
