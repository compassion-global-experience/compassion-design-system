import React from 'react';
import './Parallel.stories.css';

import { Parallel } from './Parallel';
import { Box } from '../Box/Box';

export default {
  title: 'Components/Layout Components/Parallel',
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
