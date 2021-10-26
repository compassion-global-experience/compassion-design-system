/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';

import './FileSelect';

export default {
  title: 'Global Design System/FileSelect',
};

export const Basic = () => html`<gds-file-select />`;
Basic.args = {};

export const Custom = ({ label, emptyStateLabel }) =>
  html`<gds-file-select label=${label} .emptyStateLabel=${emptyStateLabel} />`;
Custom.args = {
  label: 'Custom',
  emptyStateLabel: 'Custom Empty Label',
  onSelect: action('On File(s) selected'),
};
