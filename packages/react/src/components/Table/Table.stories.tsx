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
    columns: [
      { title: 'Heading 1', key: 'column1' },
      { title: 'Heading 2', key: 'column2' },
      { title: 'Heading 3', key: 'column3' },
    ],
    rows: [
      { column1: 'Cell 1', column2: 'Cell 2', column3: 'Cell 3' },
      { column1: 'Cell 1', column2: 'Cell 2', column3: 'Cell 3' },
      { column1: 'Cell 1', column2: 'Cell 2', column3: 'Cell 3' },
    ],
    stickyHeader: false,
  },
};

export const WithLinks = {
  args: {
    columns: [
      { title: 'Heading 1', key: 'column1' },
      {
        title: 'Heading 2',
        key: 'column2',
        headerRenderFn: (key, title) => <th key={key} className="table-cell"><a href="https://title-link.com">{title}</a></th>,
        cellRenderFn: (key, value) => <td key={key} className="table-cell"><a href="https://cell-link.com">{value}</a></td>,
      },
      { title: 'Heading 3', key: 'column3' },
    ],
    rows: [
      { column1: 'Cell 1', column2: 'Cell 2', column3: 'Cell 3' },
      { column1: 'Cell 1', column2: 'Cell 2', column3: 'Cell 3' },
      { column1: 'Cell 1', column2: 'Cell 2', column3: 'Cell 3' },
    ],
    stickyHeader: false,
  },
};

export const CustomCells = {
  args: {
    columns: [
      { title: 'Heading 1', key: 'column1' },
      {
        title: 'Heading 2',
        key: 'column2',
        cellRenderFn: (key, { label, link, disabled }) => (
          <td key={key} className={`table-cell ${disabled ? 'disabled' : ''}`}>
            {link ? <a href={link}>{label}</a> : label}
          </td>
        ),
      },
      { title: 'Heading 3', key: 'column3' },
    ],
    rows: [
      {
        column1: 'Cell 1',
        column2: { label: 'Link', link: 'https://link-1.com', disabled: false },
        column3: 'Cell 3',
      },
      {
        column1: 'Cell 1',
        column2: { label: 'Disabled', link: '', disabled: true },
        column3: 'Cell 3',
      },
      {
        column1: 'Cell 1',
        column2: { label: 'Link', link: 'https://link-2.com', disabled: false },
        column3: 'Cell 3',
      },
    ],
    stickyHeader: false,
  },
};

export const WithStickyHeaderAndScroll = {
  args: {
    containerStyle: { height: 150, width: 400 },
    tableStyle: { width: 500 },
    columns: [
      { title: 'Heading 1', key: 'column1' },
      { title: 'Heading 2', key: 'column2'},
      { title: 'Heading 3', key: 'column3' },
    ],
    rows: [
      { column1: 'Cell 1', column2: 'Cell 2', column3: 'Cell 3' },
      { column1: 'Cell 1', column2: 'Cell 2', column3: 'Cell 3' },
      { column1: 'Cell 1', column2: 'Cell 2', column3: 'Cell 3' },
    ],
    stickyHeader: true,
  },
};
