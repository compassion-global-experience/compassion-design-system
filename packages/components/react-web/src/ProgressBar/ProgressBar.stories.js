import React from 'react';
import '../global.css';

import { ProgressBar } from './ProgressBar';

export default {
  title: 'Global Design System/Progress Bar',
  component: ProgressBar,
  argTypes: {},
};

const Template = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
