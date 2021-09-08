import React from 'react';
import { Menu } from './Menu';
import { List } from '../List';

import MenuDocumentation from './Menu.documentation.mdx';

export default {
  title: 'Layouts/Menu',
  component: Menu,
  argTypes: { triggerOnHover: { control: 'boolean' } },
  parameters: {
    docs: {
      page: MenuDocumentation,
    },
  },
};

export const Basic = (args) => (
  <Menu {...args}>
    {/* eslint-disable react/button-has-type */}
    {/* 👆 This rule is disabled because the Menu component
          decorates the button with the appropriate `type`
          attribute. */}
    <button>Trigger</button>
    {/* eslint-enable react/button-has-type */}
    <List itemPadding="medium">
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <li>
        <a href="#">Item 1</a>
      </li>
      <li>
        <a href="#">Item 2</a>
      </li>
      <li>
        <a href="#">Item 3</a>
      </li>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
    </List>
  </Menu>
);

export const TriggerOnHover = (args) => (
  <Menu triggerOnHover {...args}>
    {/* eslint-disable react/button-has-type */}
    <button>Trigger</button>
    {/* eslint-enable react/button-has-type */}
    <List itemPadding="medium">
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <li>
        <a href="#">Item 1</a>
      </li>
      <li>
        <a href="#">Item 2</a>
      </li>
      <li>
        <a href="#">Item 3</a>
      </li>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
    </List>
  </Menu>
);

export const OpenTowardTop = (args) => (
  <Menu expanded openToward="top" {...args}>
    {/* eslint-disable react/button-has-type */}
    <button>openToward=&quot;top&quot;</button>
    {/* eslint-enable react/button-has-type */}
    <List itemPadding="medium">
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <li>
        <a href="#">Item 1</a>
        </li>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
    </List>
  </Menu>
);

export const OpenTowardRight = (args) => (
  <Menu expanded openToward="right" {...args}>
    {/* eslint-disable react/button-has-type */}
    <button>openToward=&quot;right&quot;</button>
    {/* eslint-enable react/button-has-type */}
    <List itemPadding="medium">
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <li>
        <a href="#">Item 1</a>
      </li>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
    </List>
  </Menu>
);

export const OpenTowardLeft = (args) => (
  <Menu expanded openToward="left" {...args}>
    {/* eslint-disable react/button-has-type */}
    <button>openToward=&quot;left&quot;</button>
    {/* eslint-enable react/button-has-type */}
    <List itemPadding="medium">
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <li>
        <a href="#">Item 1</a>
      </li>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
    </List>
  </Menu>
);
