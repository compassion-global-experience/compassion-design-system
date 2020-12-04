import React from 'react';
import { ThemeProvider } from 'emotion-theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { grid: { cellSize: 16, opacity: 0.25 } },
};

const theme = require('@compassion-gds/tokens');

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
