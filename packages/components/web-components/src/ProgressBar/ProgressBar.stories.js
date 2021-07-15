/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';

import './ProgressBar';

export default {
  title: 'Global Design System/ProgressBar',
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' }
    },
  },
}

const Template = ({ value, size }) => {
  return html`<gds-progress-bar .size=${size} .value=${value} />`;
}

export const Primary = Template.bind({});
Primary.args = {
  value: 35,
  size: 'medium'
};