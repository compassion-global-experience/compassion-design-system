import { Meta } from '@storybook/react';
import SelectGroup from './SelectGroup';
import { Info, Plus } from '../icons';

const meta: Meta<typeof SelectGroup> = {
  title: 'Components/Form/SelectGroup',
  component: SelectGroup,
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
  args: {
    label: 'Label',
    options: [
      { value: 'option_1', label: 'Option 1' },
      { value: 'option_2', label: 'Option 2' },
      { value: 'option_3', label: 'Option 3' },
      { value: 'option_4', label: 'Option 4' },
      { value: 'option_5', label: 'Option 5' },
    ],
  },
  decorators: [(Story) => <div style={{ width: 360 }}>{Story()}</div>],
};

export default meta;

export const Default = {
  args: {},
};

export const Error = {
  args: {
    state: 'error',
    hint: 'Error text',
  },
};

export const Success = {
  args: {
    state: 'success',
  },
};

export const Disabled = {
  args: {
    state: 'disabled',
  },
};

export const WithMultipleIcons = {
  args: {
    icon: <Info color="black" />,
    adornmentIcon: <Plus size={22} />,
  },
};

export const StartAdornmentWithText = {
  args: {
    adornmentPosition: 'start',
    adornmentText: 'Text',
  },
};
