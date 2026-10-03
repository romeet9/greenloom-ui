import React from 'react';
import type { StoryFn, Meta } from '@storybook/react-vite';
import {
  ArrowRight01Icon,
  CheckmarkBadge01Icon,
  Analytics01Icon,
  AiBrain01Icon,
  CpuIcon,
  Database01Icon,
  HelpCircleIcon,
  Menu01Icon,
  Shield01Icon,
  SparklesIcon,
  Wallet01Icon,
  Invoice01Icon,
  ReceiptDollarIcon,
  GroupLayersIcon,
} from 'hugeicons-react';
import BaseBox from '~components/Box/BaseBox';
import { Heading, Text } from '~components/Typography';
import { Badge } from '~components/Badge';

export default {
  title: 'Components/Icons/Hugeicons',
  parameters: {
    docs: {
      description: {
        component:
          'Green Loom uses Hugeicons standard stroke icons across all components, badges, buttons, navigation bars, and data tables.',
      },
    },
  },
} as Meta;

const featuredHugeicons = [
  { name: 'Analytics01Icon', Icon: Analytics01Icon, category: 'Finance & AI' },
  { name: 'AiBrain01Icon', Icon: AiBrain01Icon, category: 'Finance & AI' },
  { name: 'SparklesIcon', Icon: SparklesIcon, category: 'Finance & AI' },
  { name: 'CpuIcon', Icon: CpuIcon, category: 'Finance & AI' },
  { name: 'Wallet01Icon', Icon: Wallet01Icon, category: 'Reconciliation' },
  { name: 'Invoice01Icon', Icon: Invoice01Icon, category: 'Reconciliation' },
  { name: 'ReceiptDollarIcon', Icon: ReceiptDollarIcon, category: 'Reconciliation' },
  { name: 'Database01Icon', Icon: Database01Icon, category: 'Data & Tables' },
  { name: 'GroupLayersIcon', Icon: GroupLayersIcon, category: 'Data & Tables' },
  { name: 'Shield01Icon', Icon: Shield01Icon, category: 'Security & Auth' },
  { name: 'CheckmarkBadge01Icon', Icon: CheckmarkBadge01Icon, category: 'Navigation & Core' },
  { name: 'ArrowRight01Icon', Icon: ArrowRight01Icon, category: 'Navigation & Core' },
  { name: 'Menu01Icon', Icon: Menu01Icon, category: 'Navigation & Core' },
  { name: 'HelpCircleIcon', Icon: HelpCircleIcon, category: 'Navigation & Core' },
];

export const StrokeIconGallery: StoryFn = () => {
  return (
    <BaseBox padding="spacing.6" display="flex" flexDirection="column" gap="spacing.6">
      <BaseBox>
        <Heading size="large">Hugeicons Stroke Icon System</Heading>
        <Text color="surface.text.gray.muted" marginTop="spacing.2">
          Consistent 2px-stroke geometric iconography engineered for high density interfaces in
          Green Loom.
        </Text>
      </BaseBox>

      <BaseBox
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        gap="spacing.4"
      >
        {featuredHugeicons.map(({ name, Icon, category }) => (
          <BaseBox
            key={name}
            padding="spacing.4"
            borderRadius="medium"
            borderWidth="thin"
            borderColor="surface.border.gray.subtle"
            backgroundColor="surface.background.gray.subtle"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="spacing.3"
          >
            <BaseBox
              padding="spacing.3"
              borderRadius="small"
              backgroundColor="surface.background.gray.intense"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon size={24} color="#10B981" />
            </BaseBox>
            <Text size="small" weight="bold">
              {name}
            </Text>
            <Badge size="small" color="neutral">
              {category}
            </Badge>
          </BaseBox>
        ))}
      </BaseBox>
    </BaseBox>
  );
};
