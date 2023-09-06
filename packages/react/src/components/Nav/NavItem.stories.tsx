import { Meta } from '@storybook/react';
import NavItem from './NavItem';

const meta: Meta<typeof NavItem> = {
  title: 'Components/Nav/NavItem',
  component: NavItem,
  argTypes: {
    text: { control: 'text' },
    href: { control: 'text' },
    icon: { control: 'text' },
    iconDescription: { control: 'text' },
    target: {
      control: { type: 'select' },
      options: ['_blank', '_parent', '_self', '_top'],
    },
    isDisabled: {
      control: { type: 'select' },
      options: [true, false],
    },
    isActive: {
      control: { type: 'select' },
      options: [true, false],
    },
    isContained: {
      control: { type: 'select' },
      options: [true, false],
    },
    openSubNav: {
      control: { type: 'select' },
      options: [true, false],
    },
    disableAutoCloseOnClick: {
      control: { type: 'select' },
      options: [true, false],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#fff', padding: '50px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const SingleNavItem = {
  args: {
    text: 'Hello World',
    href: '#',
    icon: 'house',
    iconDescription: 'Website home',
  },
};

export const NavItemWithSubnav = {
  args: {
    text: 'Hello World',
    href: '#',
    icon: 'house',
    iconDescription: 'Website home',
    subItems: [
      {
        text: 'Sub Nav Item 1',
        href: '#',
        icon: 'envelope',
        iconDescription: 'Starred',
      },
      { text: 'Sub Nav Item 2', href: '#' },
      { text: 'Sub Nav Item 3', href: '#' },
    ],
  },
};

export const ContainedNavItem = {
  args: {
    text: 'Hello World',
    href: '#',
    icon: 'house',
    iconDescription: 'Website home',
    isContained: true,
    subItems: [
      {
        text: 'Sub Nav Item 1',
        href: '#',
        icon: 'envelope',
        iconDescription: 'Starred',
      },
      { text: 'Sub Nav Item 2', href: '#' },
      { text: 'Sub Nav Item 3', href: '#' },
    ],
  },
};
