import React from 'react';
import '../../global.css';
import './Stack.stories.css';

import { Stack } from './Stack';
import { Box } from '../Box/Box';

export default {
  title: 'Global Design System/Layout/Stack',
  component: Stack,
};

const BasicTemplate = (args) => (
  <Stack space="1rem" splitAfter={2} {...args}>
    <Box padding="1rem">A</Box>
    <Box padding="1rem">B</Box>
    <Box padding="1rem">C</Box>
  </Stack>
);

export const Basic = BasicTemplate.bind({});
Basic.args = {};

const NestedTemplate = (args) => (
  <Stack space="1rem" splitAfter={2} {...args}>
    <Box padding="1rem">A</Box>
    <Box padding="1rem">B</Box>
    <Stack>
      <Box padding="1rem">C</Box>
      <Box padding="1rem">D</Box>
    </Stack>
  </Stack>
);

export const Nested = NestedTemplate.bind({});
Nested.args = {};

const SplitTemplate = (args) => (
  <Stack space="1rem" splitAfter={1} {...args}>
    <Box padding="1rem">A</Box>
    <Box padding="1rem">B</Box>
    <Box padding="1rem">C</Box>
  </Stack>
);

export const Split = SplitTemplate.bind({});
Split.args = {};

const LastTemplate = (args) => (
  <Stack space="1rem" splitAfter={-1} {...args}>
    <Box padding="1rem">A</Box>
    <Box padding="1rem">B</Box>
    <Box padding="1rem">C</Box>
  </Stack>
);

export const Last = LastTemplate.bind({});
Last.args = {};
