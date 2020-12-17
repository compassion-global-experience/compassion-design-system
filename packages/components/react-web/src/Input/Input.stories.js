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

export const Edit = Template.bind({});
Edit.args = {
  label: 'Option',
  disabled: false,
  type: 'edit',
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
