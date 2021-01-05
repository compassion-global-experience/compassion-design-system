import React from 'react';
import '../global.css';

import { Button } from './Button';

export default {
  title: 'Global Design System/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: true,
  disabled: true,
  label: 'Button',
  onClick: undefined,
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

export const ReadMore = Template.bind({});
ReadMore.args = {
  label: 'Read More',
  type: 'readmore',
};
