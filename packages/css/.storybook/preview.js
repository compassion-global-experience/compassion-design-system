import '../reset.css'

import light from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/theme/light.css'
import dark from '!!style-loader?injectType=lazyStyleTag!css-loader!../src/theme/dark.css'

import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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
        value: '#E3E4E2',
      },
      {
        name: 'white',
        value: '#FFFFFF',
      },
    ],
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
