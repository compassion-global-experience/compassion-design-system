import React from 'react';
import '../global.css';

import { Checkbox } from './Checkbox';

export default {
  title: 'Global Design System/Checkbox',
  component: Checkbox,
  argTypes: {},
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Select',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Select',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Select',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Select',
};
