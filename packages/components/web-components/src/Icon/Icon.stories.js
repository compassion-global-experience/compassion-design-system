/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';

import './Icon';

export default {
  title: 'Global Design System/Icon',
  args: {
    name: 'add-circle',
  }
}

const Template = ({ name }) => html`<gds-icon .name=${name} />`;

export const IconAdd = Template.bind({});
IconAdd.args = { name: 'add' };

export const IconAddCircle = Template.bind({});
IconAddCircle.args = { name: 'add-circle' };

export const IconSmile = Template.bind({});
IconSmile.args = { name: 'smile' };
