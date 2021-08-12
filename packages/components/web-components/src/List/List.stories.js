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

// TODO: Decide how to handle children: https://github.com/compassion-gds/compassion-gds/issues/68
const BasicTemplate =  ({ ordered, itemPadding, fullWidth, striped }) => html`
    <gds-list .ordered=${ordered} .itemPadding=${itemPadding} .fullWidth=${fullWidth} .striped=${striped} />
  `;

export const Basic = BasicTemplate.bind({});
Basic.args = {};

export const Striped = BasicTemplate.bind({});
Striped.args = { striped: true };
