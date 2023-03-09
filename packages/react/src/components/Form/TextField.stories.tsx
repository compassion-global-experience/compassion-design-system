import { Meta } from '@storybook/react';
import TextField from './TextField';
import { Info } from '../icons';

const meta: Meta<typeof TextField> = {
  title: 'Components/Form/TextField',
  component: TextField,
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
    hint: { control: 'text' },
    onBlur: { action: 'blur' },
    onChange: { action: 'change' },
    onFocus: { action: 'focus' },
  },
  decorators: [(Story) => <div style={{ width: 360 }}>{Story()}</div>],
};

export default meta;

export const Default = {
  args: {
    label: 'Label',
    placeholder: 'Input Value',
  },
};

export const WithHelperText = {
  args: {
    label: 'Label',
    placeholder: 'Input Value',
    hint: 'Helper Text',
  },
};

export const Error = {
  args: {
    label: 'Label',
    state: 'error',
    hint: 'Error text',
    placeholder: 'Error',
  },
};

export const Success = {
  args: {
    label: 'Label',
    state: 'success',
    placeholder: 'Success',
  },
};

export const SuccessWithLeftIcon = {
  args: {
    label: 'Label',
    state: 'success',
    placeholder: 'Success',
    iconLeft:  <Info color="black" />,
  },
};

export const Disabled = {
  args: {
    label: 'Label',
    state: 'disabled',
    placeholder: 'Disabled',
  },
};

export const WithoutLabel = {
  args: {
    placeholder: 'Input Value',
  },
};
