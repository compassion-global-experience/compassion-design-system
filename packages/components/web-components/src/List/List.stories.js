/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';

import './List';

export default {
  title: 'Global Design System/List',
  args: {
    ordered: true,
    itemPadding: 'medium',
    fullWidth: false,
    striped: false,
  },
  argTypes: {
    itemPadding: {
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' }
    },
  },
};

const BasicTemplate =  ({ ordered, itemPadding, fullWidth, striped }) => html`
    <gds-list .ordered=${ordered} .itemPadding=${itemPadding} .fullWidth=${fullWidth} .striped=${striped} />
  `;

export const Basic = BasicTemplate.bind({});
Basic.args = {};

export const Striped = BasicTemplate.bind({});
Striped.args = { striped: true };
