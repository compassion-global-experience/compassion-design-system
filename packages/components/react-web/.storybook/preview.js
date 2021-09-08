import React from 'react';
import { ThemeProvider } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { grid: { cellSize: 16, opacity: 0.25 } },
  options: {
    storySort: {
      order: [
        'Intro',
        'Getting Started',
        ['Getting Started', 'For Developers', 'For Designers'],
        'Elements',
        'Components',
        'Layouts',
        '*',
      ],
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
