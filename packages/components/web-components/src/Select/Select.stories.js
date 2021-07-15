/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';

import './Select';

export default {
  title: 'Global Design System/Select',
  args: {
    id: 'select-id',
    label: 'Select',
    disabled: false,
    required: false,
    name: 'select-name',
    size: 'medium',
    validator: selected => selected % 2 ? 'Select odd number.' : null,
    onChange: action('On change handler'),
    onClick: action('On click handler'),
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' }
    },
  }
}

export const Basic = ({
  size,
  label,
  onClick,
  validator,
  id,
  required,
  disabled,
  name,
  onChange,
 }) => 
  html`<gds-select
    .size=${size}
    .label=${label}
    .onClick=${onClick}
    .validator=${validator}
    id=${id}
    .required=${required}
    .disabled=${disabled}
    .name=${name}
    .onChange=${onChange}
  />`
