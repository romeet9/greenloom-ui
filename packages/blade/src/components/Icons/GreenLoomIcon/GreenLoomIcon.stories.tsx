import React from 'react';
import type { StoryFn, Meta } from '@storybook/react-vite';
import GreenLoomIcon from './GreenLoomIcon';
import BaseBox from '~components/Box/BaseBox';
import { Heading, Text } from '~components/Typography';

export default {
  title: 'Components/Icons/GreenLoomIcon',
  component: GreenLoomIcon,
  parameters: {
    docs: {
      description: {
        component:
          'The official Green Loom brand logo icon extracted from https://greenloom.ai/en in pure monochrome black & white.',
      },
    },
  },
} as Meta;

export const Default: StoryFn = () => {
  return (
    <BaseBox padding="spacing.6" display="flex" flexDirection="column" gap="spacing.5">
      <Heading size="large">Green Loom Brand Icon</Heading>
      <Text color="surface.text.gray.subtle">
        Monochrome vector SVG logo matching the official website (https://greenloom.ai/en).
      </Text>

      <BaseBox
        display="flex"
        gap="spacing.7"
        alignItems="center"
        padding="spacing.7"
        borderRadius="medium"
        backgroundColor="surface.background.gray.subtle"
        borderWidth="thin"
        borderColor="surface.border.gray.subtle"
      >
        <BaseBox display="flex" flexDirection="column" alignItems="center" gap="spacing.3">
          <GreenLoomIcon size="small" />
          <Text size="xsmall" color="surface.text.gray.subtle">
            Small (16px)
          </Text>
        </BaseBox>
        <BaseBox display="flex" flexDirection="column" alignItems="center" gap="spacing.3">
          <GreenLoomIcon size="medium" />
          <Text size="xsmall" color="surface.text.gray.subtle">
            Medium (20px)
          </Text>
        </BaseBox>
        <BaseBox display="flex" flexDirection="column" alignItems="center" gap="spacing.3">
          <GreenLoomIcon size="large" />
          <Text size="xsmall" color="surface.text.gray.subtle">
            Large (24px)
          </Text>
        </BaseBox>
        <BaseBox display="flex" flexDirection="column" alignItems="center" gap="spacing.3">
          <GreenLoomIcon size="xlarge" />
          <Text size="xsmall" color="surface.text.gray.subtle">
            XLarge (32px)
          </Text>
        </BaseBox>
        <BaseBox display="flex" flexDirection="column" alignItems="center" gap="spacing.3">
          <GreenLoomIcon size="2xlarge" />
          <Text size="xsmall" color="surface.text.gray.subtle">
            2XLarge (48px)
          </Text>
        </BaseBox>
      </BaseBox>
    </BaseBox>
  );
};
