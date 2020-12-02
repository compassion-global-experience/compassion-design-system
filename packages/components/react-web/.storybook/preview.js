import React from 'react';
import { ThemeProvider } from 'emotion-theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const theme = {};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
