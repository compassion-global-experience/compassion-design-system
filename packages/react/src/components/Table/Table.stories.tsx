import React from 'react';
import { Meta } from '@storybook/react';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;

export const Default = {
  args: {
    containerStyle: { height: 150, width: 400 },
    tableStyle: { width: 500 },
    columns: [
      { value: 'Heading 1' },
      { value: 'Heading 2', link: 'https://example.com' },
      { value: 'Heading 3' },
    ],
    rows: [
      {
        data: [
          { value: 'Cell 1' },
          { value: 'Cell 2' },
          { value: 'Cell 3' },
        ],
        disabled: false,
      },
      {
        data: [
          { value: 'Link 1', link: 'https://example.com' },
          { value: 'Link 2', link: 'https://example.com' },
          { value: 'Link 3', link: 'https://example.com' },
        ],
        disabled: false,
      },
      {
        data: [
          { value: 'Cell 1' },
          { value: 'Cell 2' },
          { value: 'Cell 3' },
        ],
        disabled: false,
      },
    ],
    stickyHeader: false,
  },
};
