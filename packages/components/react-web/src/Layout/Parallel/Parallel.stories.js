import React from 'react';
import './Parallel.stories.css';

import { Parallel } from './Parallel';
import { Box } from '../Box/Box';

export default {
  title: 'Global Design System/Layout/Parallel',
  component: Parallel,
};

const BasicTemplate = (args) => (
  <Parallel {...args}>
    <div>
      <Box>Navigation</Box>
      <Box>Main Content</Box>
    </div>
  </Parallel>
);

export const Basic = BasicTemplate.bind({});
Basic.args = {};
