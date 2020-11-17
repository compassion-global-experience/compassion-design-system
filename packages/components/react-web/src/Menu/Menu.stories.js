import React from 'react';
import '../global.css';

import { Menu } from './Menu';

export default {
  title: 'Global Design System/Menu',
  component: Menu,
  argTypes: {},
};

const Template = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Menu',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Menu',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Menu',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Menu',
};
