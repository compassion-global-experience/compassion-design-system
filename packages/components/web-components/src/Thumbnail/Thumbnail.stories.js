/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';

import './Thumbnail';

export default {
  title: 'Global Design System/Thumbnail',
  args: {
    type: 'preview',
    size: 'medium',
    label: 'Thumbnail',
    validator: val => !val ? 'Need value' : null,
    id: 'thumbnail-id',
    required: true,
    disabled: false,
    name: 'thumbnail-name',
    onChange: action('On change handler'),
  },
  argTypes: {
    type: {
      options: ['preview'],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'inline-radio' }
    },
  }
}

export const Basic = ({
  type,
  size,
  label,
  validator,
  id,
  required,
  disabled,
  name,
  onChange,
}) => html`<gds-thumbnail 
  .type=${type}
  .size=${size}
  .label=${label}
  .validator=${validator}
  id=${id}
  .required=${required}
  .disabled=${disabled}
  .name=${name}
  .onChange=${onChange}
/>`
