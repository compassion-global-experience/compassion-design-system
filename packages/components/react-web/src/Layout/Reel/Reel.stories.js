import React from 'react';
import './Reel.stories.css';

import { Reel } from './Reel';

export default {
  title: 'Components/Layout Components/Reel',
  component: Reel,
  argTypes: {
    trackColor: { control: 'color' },
    thumbColor: { control: 'color' },
  },
};

const BasicTemplate = (args) => (
  <Reel {...args}>
    <img src="https://source.unsplash.com/erxoxRcdMQA/300x300" />
    <img src="https://source.unsplash.com/K1hq1atFeYs/300x300" />
    <img src="https://source.unsplash.com/5v2eickpK3s/300x300" />
    <img src="https://source.unsplash.com/KkC5ELYv21c/300x300" />
    <img src="https://source.unsplash.com/IVxEfB-yuwA/300x300" />
    <img src="https://source.unsplash.com/xMnUx3T201g/300x300" />
    <img src="https://source.unsplash.com/CoqJGsFVJtM/300x300" />
  </Reel>
);

export const Basic = BasicTemplate.bind({});
Basic.args = {};
