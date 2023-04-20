import { Meta } from '@storybook/react';
import { Info, Plus } from 'phosphor-react';
import InputGroup from './InputGroup';

const meta: Meta<typeof InputGroup> = {
  title: 'Components/Form/InputGroup',
  component: InputGroup,
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

export const Disabled = {
  args: {
    label: 'Label',
    state: 'disabled',
    placeholder: 'Disabled',
  },
};

export const WithMultipleIcons = {
  args: {
    label: 'Label',
    placeholder: 'Input Value',
    iconLeft: <Info color="black" />,
    iconRight: <Info color="black" />,
    adornmentIcon: <Plus size={22} />,
  },
};

export const StartAdornmentWithText = {
  args: {
    label: 'Label Text',
    placeholder: 'With Left Adornment',
    adornmentPosition: 'start',
    adornmentText: 'Text',
  },
};
