const path = require('path');

module.exports = {
  stories: [
    '../src/_docsPages/Intro.stories.mdx',
    '../src/_docsPages/**/*.stories.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
};
