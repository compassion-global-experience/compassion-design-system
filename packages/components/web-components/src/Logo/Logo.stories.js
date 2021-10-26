/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';

import './Logo';

export default {
  title: 'Global Design System/Logo',
  args: {
    color: 'brand',
    type: 'full',
  },
  argTypes: {
    color: {
      options: ['brand', 'dark', 'light'],
      control: { type: 'inline-radio' },
    },
    type: {
      options: ['full', 'minimal'],
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
      ],
    },
  },
};

const Template = ({ color, width, type }) =>
  html`<gds-logo .color=${color} .width=${width} .type=${type} />`;

export const Default = Template.bind({});
Default.args = {};

export const ViewportBasedSizing = Template.bind({});
ViewportBasedSizing.args = { color: `dark`, width: `10vw` };
