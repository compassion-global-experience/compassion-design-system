import React from 'react';
import { Input } from './Input';

export default {
  title: 'Components/Form Components/Input',
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
  label: 'Edit',
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

export const Date = Template.bind({});
Date.args = {
  label: 'Date',
  type: 'date',
};
