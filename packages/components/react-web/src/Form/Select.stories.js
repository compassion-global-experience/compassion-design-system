import React from 'react';
import '../global.css';

import { Select } from './Select';

export default {
  title: 'Global Design System/Form',
  component: Select,
  argTypes: {},
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
