import styled from 'styled-components';
import { create } from 'storybook/theming';
import { themeConfig } from './storybook-theme';
import { BladeProvider } from '../../src/components';
import { bladeTheme } from '../../src/tokens/theme';
import { createTheme } from '../../src/tokens/theme/createTheme';
import ErrorBoundary from './ErrorBoundary';
import { INTERNAL_STORY_ADDON_PARAM } from './constants';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import React from 'react';
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';
import './global.css';
import { domMax, LazyMotion } from 'framer-motion';

const theme = create(themeConfig);

export const parameters = {
  // disable snapshot by default and then enable it only for kitchen sink
  chromatic: {
    disableSnapshot: true,
    pauseAnimationAtEnd: true,
  },
  previewTabs: {
    'storybook/docs/panel': { index: 0 },
    canvas: { title: 'Stories', index: 1 },
  },
  backgrounds: {
    grid: {
      disable: true,
    },
    disabled: true,
  },
  viewport: {
    options: {
      ...MINIMAL_VIEWPORTS,
      iPhone6: {
        name: 'iPhone 6',
        styles: {
          height: '667px',
          width: '375px',
        },
        type: 'mobile',
      },
    },
  },
  // on development setting it to undefined so that on 'live reload' it won't switch
  // to docs panel while developing the component
  viewMode: process.env.NODE_ENV === 'development' ? undefined : 'docs',
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Guides',
        ['Intro', 'Installation', 'Contributing', 'How to use?'],
        'Tokens',
        [
          'Colors',
          'Typography',
          'Elevation',
          'Border',
          'Spacing',
          'Breakpoints',
          'Motion',
          'CSS Variables',
        ],
        'Utils',
        [
          'makeBorderSize',
          'makeMotionTime',
          'makeSize',
          'makeSpace',
          'makeTypographySize',
          'useTheme',
        ],
        'Components',
        ['*', 'Interaction Tests', 'KitchenSink'],
        'Patterns',
        ['ListView'],
        'Motion',
        [
          'Introduction to Motion',
          'Fade',
          'Move',
          'Slide',
          '*',
          'AnimateInteractions',
          'Stagger',
          'Recipes',
        ],
        'Recipes',
      ],
    },
  },
  docs: {
    container: ({ children, context, ...rest }) => {
      const globals = context.store.userGlobals?.globals ?? {};

      const getThemeTokens = () => {
        if (globals.brandColor) {
          return createTheme({ brandColor: globals.brandColor }).theme;
        }
        return bladeTheme;
      };

      return (
        <DocsContainer context={context} {...rest}>
          <LazyMotion strict features={domMax}>
            <BladeProvider
              key={`${globals.themeTokenName}-${globals.colorScheme}`}
              themeTokens={getThemeTokens()}
              colorScheme={globals.colorScheme}
            >
              {children}
            </BladeProvider>
          </LazyMotion>
        </DocsContainer>
      );
    },
    theme,
    components: {
      summary: styled.summary`
        font-family: ${theme.fontBase};
        color: ${theme.textColor};
        font-size: 14px;
        cursor: pointer;
      `,
      a: styled.a`
        color: ${theme.colorPrimary};
        font-weight: 500;
      `,
      // Setting font-weight back to 600 in headings since storybook tries to override it
      ...(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).reduce<Record<`h${number}`, string>>(
        (headingOverride, headingLevel) => {
          headingOverride[headingLevel] = styled[headingLevel]`
            & a {
              font-weight: 600;
            }
          `;

          return headingOverride;
        },
        {},
      ),
    },
  },
};

const hasFullPageExampleStories = (context) =>
  context.kind.includes('/Dropdown/With Select') ||
  context.kind.includes('/Dropdown/With Button') ||
  context.kind.includes('/Dropdown/With AutoComplete') ||
  context.kind.includes('/Carousel') ||
  context.kind.includes('/TopNav') ||
  context.kind.includes('/Examples') ||
  context.kind.includes('/SideNav') ||
  context.kind.includes('/Recipes');

const StoryCanvas = styled.div<{ context }>(
  ({ theme, context }) =>
    `
      width: 100%;
      height: ${context.viewMode === 'story' ? '100vh' : '100%'};
      overflow: auto;
      padding: ${hasFullPageExampleStories(context) ? '0rem' : '2rem'};
      background-color: ${theme.colors.surface.background.gray.intense};
      border-radius: ${
        context.viewMode === 'story'
          ? `${theme.border.radius.none}px`
          : `${theme.border.radius.medium}px`
      };
      
      @media (max-width: 768px) {
        padding: ${hasFullPageExampleStories(context) ? '0rem' : '12px'};
      }
    `,
);

export const decorators = [
  (Story, context) => {
    const getThemeTokens = () => {
      if (context.globals.brandColor) {
        return createTheme({ brandColor: context.globals.brandColor }).theme;
      }
      return bladeTheme;
    };

    return (
      <ErrorBoundary>
        <LazyMotion strict features={domMax}>
          <BladeProvider
            key={`${context.globals.themeTokenName}-${context.globals.colorScheme}`}
            themeTokens={getThemeTokens()}
            colorScheme={context.globals.colorScheme}
          >
            <StoryCanvas context={context}>
              <Story />
            </StoryCanvas>
          </BladeProvider>
        </LazyMotion>
      </ErrorBoundary>
    );
  },
];

export const globalTypes = {
  colorScheme: {
    name: 'Color Scheme',
    description: 'Color Scheme for Green Loom UI',
    defaultValue: 'light',
    toolbar: {
      icon: 'eye',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
        { value: 'system', title: 'System' },
      ],
      showName: true,
    },
  },
  brandColor: {
    name: 'Brand Color',
    description: 'Green Loom Brand Accents',
    defaultValue: undefined,
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: undefined, title: 'Powder Green (Default)' },
        { value: '#059669', title: 'Emerald' },
        { value: '#10B981', title: 'Mint' },
        { value: '#C6B8FF', title: 'Powder Lilac' },
        { value: '#83E4FA', title: 'Powder Blue' },
      ],
      showName: true,
    },
  },
};

export const initialGlobals = {
  [INTERNAL_STORY_ADDON_PARAM]: false,
};
