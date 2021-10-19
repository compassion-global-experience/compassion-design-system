import React from 'react';
import './Box.stories.css';

import { Box } from './Box';

export default {
  title: 'Components/Layout Components/Box',
  component: Box,
};

const BasicTemplate = (args) => (
  <>
    <Box {...args}>Known</Box>
    <Box {...args}>Loved</Box>
    <Box {...args}>Connected</Box>
  </>
);

export const Basic = BasicTemplate.bind({});
Basic.args = { padding: `1rem` };
