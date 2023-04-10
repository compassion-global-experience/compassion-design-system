export default {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
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
