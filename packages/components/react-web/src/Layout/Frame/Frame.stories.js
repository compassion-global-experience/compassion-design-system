import React from 'react';
import '../../global.css';
import './Frame.stories.css';

import { Frame } from './Frame';

export default {
  title: 'Global Design System/Layout/Frame',
  component: Frame,
};

const BasicTemplate = (args) => (
  <Frame {...args}>
    <img
      src="https://source.unsplash.com/800x600/?rocky+mountains"
      alt='A random Unsplash result for "Rocky Mountains"'
    />
  </Frame>
);

export const Basic = BasicTemplate.bind({});
Basic.args = { ratio: '16:9' };

const WithObjectPositionTemplate = (args) => (
  <Frame {...args}>
    <img
      src="https://source.unsplash.com/800x600/?rocky+mountains"
      alt='A random Unsplash result for "Rocky Mountains"'
    />
  </Frame>
);

export const WithObjectPosition = WithObjectPositionTemplate.bind({});
WithObjectPosition.args = { ratio: '1:1', objectPosition: 'bottom right' };
