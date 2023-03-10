import { Meta } from '@storybook/react';
import TextArea from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/Form/TextArea',
  component: TextArea,
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
    rows: 6,
  },
};

export const Error = {
  args: {
    label: 'Label',
    state: 'error',
    placeholder: 'Error',
    rows: 6,
  },
};

export const Success = {
  args: {
    label: 'Label',
    state: 'success',
    placeholder: 'Success',
    rows: 6,
  },
};

export const Disabled = {
  args: {
    label: 'Label',
    state: 'disabled',
    placeholder: 'Disabled',
    rows: 6,
  },
};

export const WithoutLabel = {
  args: {
    placeholder: 'Input Value',
    rows: 6,
  },
};

export const WithCounter = {
  args: {
    label: 'Label',
    placeholder: 'Input Value',
    rows: 6,
    maxLength: 100,
    showCounter: true,
  },
};
