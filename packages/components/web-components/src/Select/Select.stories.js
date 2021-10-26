/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';

import './Select';

export default {
  title: 'Global Design System/Select',
  args: {
    id: 'select-id',
    label: 'Label Text',
    placeholder: 'Placeholder Text',
    disabled: false,
    required: false,
    name: 'select-name',
    size: 'medium',
    validator: (selected) => (selected % 2 ? 'Select odd number.' : null),
    onChange: action('On change handler'),
    options: [
      { value: 1, label: 'Option 1' },
      { value: { obj: 2 }, label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      { value: [4], label: 'Option 4' },
    ],
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Basic = ({
  size,
  label,
  validator,
  id,
  required,
  disabled,
  name,
  onChange,
  options,
  placeholder,
}) =>
  html`<gds-select
    .size=${size}
    .label=${label}
    .placeholder=${placeholder}
    .validator=${validator}
    id=${id}
    .required=${required}
    .disabled=${disabled}
    .name=${name}
    .onChange=${onChange}
    .options=${options}
  />`;
