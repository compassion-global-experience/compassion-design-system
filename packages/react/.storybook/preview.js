import '@compassion-gds/css/reset.css';

export const parameters = {
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
        value: '#F8F8F8',
      },
      {
        name: 'white',
        value: '#FFFFFF',
      },
    ],
  },
};
