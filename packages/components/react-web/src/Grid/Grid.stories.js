import React from 'react';
import '../global.css';
import './Grid.stories.css';

import { Grid } from './Grid';
import { Cell } from '../Cell';

export default {
  title: 'Global Design System/Grid',
  component: Grid,
  subcomponents: { Cell },
};

const Template = (args) => (
  <Grid {...args}>
    <Cell>A</Cell>
    <Cell>B</Cell>
    <Cell>C</Cell>
    <Cell>D</Cell>
    <Cell>E</Cell>
  </Grid>
);

export const Basic = Template.bind({});
Basic.args = {};
