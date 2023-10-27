import { Meta } from '@storybook/react';
import Badge from './Badge';
import { cdsIconMap } from '../Icon/Icon';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
};

export default meta;

export const Default = {
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    showLabel: {
      control: { type: 'boolean' },
    },
    status: {
      control: { type: 'select' },
    },
    borderRadius: {
      control: { type: 'select' },
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(cdsIconMap).sort(),
    },
    iconPosition: {
      control: { type: 'select' },
    },
  },
  args: {
    label: 'Badge',
  },
};
