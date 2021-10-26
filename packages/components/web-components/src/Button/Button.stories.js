/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';

import './Button';

export default {
  title: 'Global Design System/Button',
  args: {
    label: 'Button',
    onClick: action('click handler'),
  },
};

const Template = ({ primary, disabled, label, onClick, size }) =>
  html`<gds-button
    primary=${primary || ''}
    .label=${label}
    disabled=${disabled || ''}
    @click=${onClick}
    size=${size || ''}
  />`;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: true,
  disabled: true,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
