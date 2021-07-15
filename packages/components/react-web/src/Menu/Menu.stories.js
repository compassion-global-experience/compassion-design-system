import React from 'react';
import { Menu } from './Menu';
import { List } from '../List';

export default {
  title: 'Global Design System/Menu',
  component: Menu,
  argTypes: {},
};

const Template = (args) => (
  <Menu {...args}>
    <button>Trigger</button>
    <List>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <li>
        <a href="#">foo</a>
      </li>
      <li>
        <a href="#">bar</a>
      </li>
      <li>
        <a href="#">baz</a>
      </li>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
    </List>
  </Menu>
);

export const Primary = Template.bind({});
Primary.args = {};
