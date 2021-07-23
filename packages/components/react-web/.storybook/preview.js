import React from 'react';
import { ThemeProvider } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { grid: { cellSize: 16, opacity: 0.25 } },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
