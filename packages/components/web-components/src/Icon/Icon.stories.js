import { icons } from '@compassion-gds/elements';

/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';

import './Icon';

export default {
  title: 'Global Design System/Icon',
  args: {
    sampleIcons: Object.keys(icons),
    color: '#005EB8',
  },
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

export const SampleVariants = ({ sampleIcons = [], color }) => html`
  <style>
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
    }

    li {
      width: 222px;
    }

    gds-icon {
      color: ${color};
    }
  </style>

  <ul>
    ${sampleIcons.map(
      (name) =>
        html`
          <li><gds-icon .name=${name}></gds-icon> <span>${name}</span></li>
        `
    )}
  </ul>
`;
