/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';

import './Menu';

export default {
  title: 'Global Design System/Menu',
  args: {
    primary: true,
    label: 'Menu',
  },
};

export const Primary = ({ primary, label }) =>
  html`<gds-menu .label=${label} ?primary=${primary} />`;
