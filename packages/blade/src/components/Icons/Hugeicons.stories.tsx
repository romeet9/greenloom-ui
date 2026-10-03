import React from 'react';
import type { StoryFn, Meta } from '@storybook/react-vite';
import {
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
  Analytics01Icon,
  Brain02Icon,
  CpuIcon,
  Database01Icon,
  File01Icon,
  FilterIcon,
  HelpCircleIcon,
  Home01Icon,
  Layers01Icon,
  LockIcon,
  Menu01Icon,
  Search01Icon,
  Settings01Icon,
  ShieldCheckIcon,
  SparklesIcon,
  Tag01Icon,
  UserIcon,
  Wallet01Icon,
  Coins01Icon,
  CreditCardIcon,
  Invoice01Icon,
  Receipt01Icon,
  TableIcon,
  Exchange01Icon,
  Notification01Icon,
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
  { name: 'Brain02Icon', Icon: Brain02Icon, category: 'Finance & AI' },
  { name: 'SparklesIcon', Icon: SparklesIcon, category: 'Finance & AI' },
  { name: 'CpuIcon', Icon: CpuIcon, category: 'Finance & AI' },
  { name: 'Coins01Icon', Icon: Coins01Icon, category: 'Reconciliation' },
  { name: 'CreditCardIcon', Icon: CreditCardIcon, category: 'Reconciliation' },
  { name: 'Invoice01Icon', Icon: Invoice01Icon, category: 'Reconciliation' },
  { name: 'Receipt01Icon', Icon: Receipt01Icon, category: 'Reconciliation' },
  { name: 'Exchange01Icon', Icon: Exchange01Icon, category: 'Reconciliation' },
  { name: 'TableIcon', Icon: TableIcon, category: 'Data & Tables' },
  { name: 'Database01Icon', Icon: Database01Icon, category: 'Data & Tables' },
  { name: 'File01Icon', Icon: File01Icon, category: 'Data & Tables' },
  { name: 'FilterIcon', Icon: FilterIcon, category: 'Controls' },
  { name: 'Search01Icon', Icon: Search01Icon, category: 'Controls' },
  { name: 'Settings01Icon', Icon: Settings01Icon, category: 'Controls' },
  { name: 'Menu01Icon', Icon: Menu01Icon, category: 'Controls' },
  { name: 'ArrowRight01Icon', Icon: ArrowRight01Icon, category: 'Navigation' },
  { name: 'Home01Icon', Icon: Home01Icon, category: 'Navigation' },
  { name: 'Layers01Icon', Icon: Layers01Icon, category: 'Navigation' },
  { name: 'Notification01Icon', Icon: Notification01Icon, category: 'Navigation' },
  { name: 'CheckmarkCircle01Icon', Icon: CheckmarkCircle01Icon, category: 'Status' },
  { name: 'ShieldCheckIcon', Icon: ShieldCheckIcon, category: 'Status' },
  { name: 'LockIcon', Icon: LockIcon, category: 'Status' },
  { name: 'Tag01Icon', Icon: Tag01Icon, category: 'Status' },
  { name: 'UserIcon', Icon: UserIcon, category: 'General' },
  { name: 'Wallet01Icon', Icon: Wallet01Icon, category: 'General' },
  { name: 'HelpCircleIcon', Icon: HelpCircleIcon, category: 'General' },
];

export const StrokeIconsGallery: StoryFn = () => {
  return (
    <BaseBox padding="spacing.6">
      <Heading size="xlarge" marginBottom="spacing.3">
        Hugeicons Stroke Standard Icons
      </Heading>
      <Text marginBottom="spacing.6" color="surface.text.gray.muted">
        Standard 24x24 stroke icons imported from <code>hugeicons-react</code>. All icons render
        with crisp stroke lines, uniform 1.5px/2px weight, and inherit theme colors.
      </Text>

      <BaseBox
        display="grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '16px',
        }}
      >
        {featuredHugeicons.map(({ name, Icon, category }) => (
          <BaseBox
            key={name}
            padding="spacing.5"
            borderRadius="medium"
            borderWidth="thin"
            borderColor="surface.border.gray.subtle"
            backgroundColor="surface.background.gray.intense"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="spacing.3"
            style={{
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <BaseBox
              display="flex"
              alignItems="center"
              justifyContent="center"
              padding="spacing.3"
              borderRadius="round"
              backgroundColor="surface.background.primary.subtle"
              color="surface.text.primary.normal"
            >
              <Icon size={24} strokeWidth={1.75} />
            </BaseBox>
            <Text weight="medium" size="small" textAlign="center">
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
