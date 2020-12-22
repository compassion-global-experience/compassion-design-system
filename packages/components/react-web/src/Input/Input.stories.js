import React from 'react';
import '../global.css';

import { Input } from './Input';

export default {
  title: 'Global Design System/Input',
  component: Input,
  argTypes: {},
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: 'First Name',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  type: 'password',
  validator(password) {
    return password.length <= 5 ? 'Must be at least 6 characters' : null;
  },
};

export const Radio = Template.bind({});
Radio.args = {
  label: 'Option',
  type: 'radio',
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'Option',
  type: 'checkbox',
};

export const Currency = Template.bind({});
Currency.args = {
  label: 'Currency',
  type: 'currency',
  min: 0,
  max: 100,
  placeholder: '$100',
  validator(currency) {
    const notNum = /[^0-9]/g;
    return currency.match(notNum) ? 'Must be a number' : null;
  },
};
