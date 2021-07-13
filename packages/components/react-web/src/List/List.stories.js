import React from 'react';
import { List } from './List';

export default {
  title: 'Global Design System/List',
  component: List,
  argTypes: {},
};

const BasicTemplate = (args) => {
  return (
    <List {...args}>
      <li>Compassion</li>
      <li>Known</li>
      <li>Loved</li>
      <li>Connected</li>
    </List>
  );
};

export const Basic = BasicTemplate.bind({});
Basic.args = {};

export const Striped = BasicTemplate.bind({});
Striped.args = { striped: true };
