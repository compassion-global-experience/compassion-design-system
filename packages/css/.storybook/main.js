module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@etchteam/storybook-addon-css-variables-theme"
  ],
  "framework": "@storybook/html",
  "staticDirs": [{ from: '../src/fonts', to: '/fonts' }],
}
