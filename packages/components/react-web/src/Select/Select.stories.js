import React from 'react';
import '../global.css';

import { Select } from './Select';

export default {
  title: 'Global Design System/Select',
  component: Select,
  argTypes: {},
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select',
  onChange: undefined,
  onClick: undefined,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Select',
  onChange: undefined,
  onClick: undefined,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Select',
  onChange: undefined,
  onClick: undefined,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Select',
  onChange: undefined,
  onClick: undefined,
};
