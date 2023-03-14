import { Meta } from '@storybook/react';
import SelectField from './SelectField';
import { Info } from '../icons';

const meta: Meta<typeof SelectField> = {
  title: 'Components/Form/SelectField',
  component: SelectField,
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

export const WithDefaultOption = {
  args: {
    defaultOption: 'Please select an option',
  },
};

export const WithHelperText = {
  args: {
    hint: 'Helper Text',
  },
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
    placeholder: 'Success',
  },
};

export const SuccessWithIcon = {
  args: {
    state: 'success',
    icon:  <Info color="black" />,
  },
};

export const Disabled = {
  args: {
    state: 'disabled',
  },
};

export const WithoutLabel = {
  args: {
    label: undefined,
  },
};
