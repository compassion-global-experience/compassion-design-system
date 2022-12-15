module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@etchteam/storybook-addon-css-variables-theme"
  ],
  "framework": "@storybook/html",
  "staticDirs": [{ from: '../assets', to: '/assets' }],
}
