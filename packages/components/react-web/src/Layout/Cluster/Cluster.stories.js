import React from 'react';
import { Cluster } from './Cluster';
import { Box } from '../Box/Box';
import { Logo } from '../../Logo/Logo';

export default {
  title: 'Global Design System/Layout/Cluster',
  component: Cluster,
};

const BasicTemplate = (args) => (
  <Cluster {...args}>
    <div>
      <Box padding="1rem">A</Box>
      <Box padding="1rem">B</Box>
      <Box padding="1rem">C</Box>
    </div>
  </Cluster>
);

export const Basic = BasicTemplate.bind({});
Basic.args = {};

const SimpleHeaderTemplate = (args) => (
  <Cluster {...args}>
    <div>
      <Logo width="44px" />
      <Cluster space="1rem" alignItems="center">
        <ul>
          <li>My Account</li>
          <li>Contact Us</li>
          <li>Donate Now</li>
        </ul>
      </Cluster>
    </div>
  </Cluster>
);

export const SimpleHeader = SimpleHeaderTemplate.bind({});
SimpleHeader.args = { justifyContent: `space-between`, alignItems: `center` };
