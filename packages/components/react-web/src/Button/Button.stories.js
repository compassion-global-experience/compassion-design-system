import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
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

export const AsLink = Template.bind({});
AsLink.args = {
  primary: false,
  asLink: true,
  label: "I'm actually a link",
  href: 'https://compassion.com',
  target: '_blank',
};
