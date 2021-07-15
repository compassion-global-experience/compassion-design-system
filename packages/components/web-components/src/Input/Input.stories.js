/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';

import './Input';

export default {
  title: 'Global Design System/Input',
  args: {
    size: 'medium',
    disabled: false,
    id: 'input-field-unique-id',
    required: false,
    name: 'input-field-name',
    onChange: action('Change handler'),
  },
  argTypes: {
    disabled: {
      name: 'Disabled /After change need to refresh the page/',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' },
    },
  }
}

const Template = ({
  type,
  size,
  label,
  validator,
  id,
  required,
  disabled,
  name,
  onChange
}) => 
  html`<gds-input
    .type=${type}
    .size=${size}
    .label=${label}
    .validator=${validator}
    .id=${id}
    .required=${required}
    .disabled=${disabled}
    .name=${name}
    .onChange=${onChange}
  />`

export const Text = Template.bind({});

Text.args = {
  label: 'First Name',
};

export const Password = Template.bind({});

Password.args = {
  label: 'Password',
  type: 'password',
  validator: pass => pass.length <= 5 ? 'Must be at least 6 characters' : null,
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

export const CreditCard = Template.bind({});

CreditCard.args = {
  label: 'Credit Card',
  type: 'creditcard',
};

export const Date = Template.bind({});

Date.args = {
  label: 'Date',
  type: 'date',
};

export const Currency = Template.bind({});

Currency.args = {
  label: 'Currency',
  type: 'currency',
};