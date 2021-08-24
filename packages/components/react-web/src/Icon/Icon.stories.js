import React from 'react';
import { icons } from '@compassion-gds/elements';

import IconSkippy from './icons/IconSkippy';
import * as Icons from './index';

export default {
  title: 'Global Design System/Icon',
  component: IconSkippy,
  args: {
    sampleIcons: Object.keys(icons),
    color: '#005EB8',
  },
  argTypes: {
      color: {
          control: 'color',
      }
  }
};

export const SampleVariants = (args) => (
  <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none' }}>
    {args.sampleIcons.map(name => {
      const iconName = `Icon${name[0].toUpperCase()}${name.substr(1)}`;
      const Icon = Icons[iconName];

      return (
          <li key="name" style={{ width: 222, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon width="2em" height="2em" fill={args.color} /> <span>{name}</span>
          </li>
      );
    })}
  </ul>
);
