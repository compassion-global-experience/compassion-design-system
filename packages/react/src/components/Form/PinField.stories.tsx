import { Meta } from '@storybook/react';
import PinField from './PinField';

const meta: Meta<typeof PinField> = {
  title: 'Components/Form/PinField',
  component: PinField,
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'error', 'success'],
    },
    secret: { control: 'boolean' },
  },
  args: {
    label: 'Label',
    secret: false,
    length: 4,
    size: 'medium',
  },
};

export default meta;

export const Default = {
  args: {
    value: 1234,
  },
};

export const Secret = {
  args: {
    value: 1234,
    secret: true,
  },
};

export const Longer = {
  args: {
    label: 'Label',
    value: 'ABCD',
    length: 8,
  },
};

export const EmptyAndSmall = {
  args: {
    size: 'small',
  },
};

export const Error = {
  args: {
    state: 'error',
  },
};

export const Disabled = {
  args: {
    state: 'disabled',
  },
};

export const AutoFocus = {
  args: {
    autoFocus: true,
  },
};
