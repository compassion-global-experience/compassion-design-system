import React from 'react';
import { ThemeProvider } from '../src';

import '!style-loader!css-loader!../../../reset.css';

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
