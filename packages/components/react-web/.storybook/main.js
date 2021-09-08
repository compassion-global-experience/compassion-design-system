const path = require('path');

module.exports = {
  stories: [
    '../src/~DocsPages/Intro.stories.mdx',
    '../src/~DocsPages/**/*.stories.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
  ],
};
