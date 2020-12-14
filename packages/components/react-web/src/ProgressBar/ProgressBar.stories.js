import React from 'react';
import '../global.css';

import { ProgressBar } from './ProgressBar';

export default {
  title: 'Global Design System/Progress Bar',
  component: ProgressBar,
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    color: {
      control: 'color',
    },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 35,
};
