import React from 'react';
import '../global.css';

import { TextField } from './TextField';

export default {
  title: 'Global Design System/TextField',
  component: TextField,
  argTypes: {
  },
};

const Template = (args) => <TextField {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: 'First Name',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  type: 'password',
}

export const Email = Template.bind({});
Email.args = {
  label: 'Email',
  type: 'email',
}

export const Small = Template.bind({});
Small.args = {
  label: 'Last Name',
  size: 'small',
}

