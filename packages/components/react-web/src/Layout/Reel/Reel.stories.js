import React from 'react';
import '../../global.css';
import './Reel.stories.css';

import { Reel } from './Reel';

export default {
  title: 'Global Design System/Layout/Reel',
  component: Reel,
  argTypes: {
    trackColor: { control: 'color' },
    thumbColor: { control: 'color' },
  },
};

const BasicTemplate = (args) => (
  <Reel {...args}>
    <img src="https://source.unsplash.com/240x240/?bow+mar+colorado" />
    <img src="https://source.unsplash.com/360x240/?arriba+colorado" />
    <img src="https://source.unsplash.com/240x240/?castle+rock" />
    <img src="https://source.unsplash.com/360x240/?del+norte+colorado" />
    <img src="https://source.unsplash.com/240x240/?dinosaur+colorado" />
    <img src="https://source.unsplash.com/360x240/?fairplay+colorado" />
    <img src="https://source.unsplash.com/240x240/?manzanola+colorado" />
  </Reel>
);

export const Basic = BasicTemplate.bind({});
Basic.args = {};
