import React from 'react';
import './Switcher.stories.css';

import { Switcher } from './Switcher';
import { Box } from '../Box/Box';

export default {
  title: 'Global Design System/Layout/Switcher',
  component: Switcher,
};

const BasicTemplate = (args) => (
  <Switcher {...args}>
    <div>
      <Box padding="2rem" />
      <Box padding="2rem" />
      <Box padding="2rem" />
    </div>
  </Switcher>
);

export const Basic = BasicTemplate.bind({});
Basic.args = { threshold: `30rem` };
