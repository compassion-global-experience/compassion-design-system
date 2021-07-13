import React from 'react';
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
