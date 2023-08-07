export default {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  staticDirs: [
    {
      from: '../assets',
      to: '/assets',
    },
  ],
  features: {
    postcss: false,
  },
  docs: {
    autodocs: true,
  },
};
