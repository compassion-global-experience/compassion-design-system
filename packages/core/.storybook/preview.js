import '@compassion-design-system/core/reset.css';

import prettier from 'prettier/standalone';
import htmlParser from 'prettier/parser-html';

export default {
  parameters: {
    docs: {
      toc: {
        title: 'Contents',
        headingSelector: 'h2, h3, h4',
        ignoreSelector:
          '.sbdocs-preview h1, .sbdocs-preview h2, .sbdocs-preview h3, .sbdocs-preview h4, .sbdocs-preview h5',
      },
      transformSource: (input) => {
        return prettier.format(input, {
          parser: 'html',
          plugins: [htmlParser],
          tabWidth: 2,
          htmlWhitespaceSensitivity: 'ignore',
        });
      },
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'grey',
    values: [
      {
        name: 'grey',
        value: '#E5E5E5',
      },
      {
        name: 'white',
        value: '#FFFFFF',
      },
    ],
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

/**
 * A crude way to change the theme
 * Intended just for our Storybook usage
 * Library Users should load their preferred theme using a stylesheet ref tag
 * @param name
 */
const loadTheme = async (name) => {
  switch (name) {
    case 'light':
      import('@compassion-design-system/core/light.css');
      break;
    case 'dark':
      import('@compassion-design-system/core/dark.css');
      break;
    default:
      // console.error(`Unknown theme name: "${name}"`);
      import('@compassion-design-system/core/light.css');
  }
};

export const decorators = [
  (Story, context) => {
    loadTheme(context.globals.theme).catch(console.error);
    return Story();
  },
];
