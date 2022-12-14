import light from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/vars/_cds-light.css'
import dark from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/vars/_cds-dark.css'

import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  cssVariables: {
    files: {
      'Light Theme': light,
      'Dark Theme': dark,
    },
    defaultTheme: 'Light Theme'
  }
}

export const decorators = [
  cssVariablesTheme,
];
