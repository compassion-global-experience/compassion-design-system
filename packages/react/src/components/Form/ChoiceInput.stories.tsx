import { Meta } from '@storybook/react';
import ChoiceInput from './ChoiceInput';

const meta: Meta<typeof ChoiceInput> = {
  title: 'Components/Form/ChoiceInput',
  component: ChoiceInput,
  argTypes: {
    label: { control: 'text' },
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

export const Radio = {
  args: {
    id: 'radio-field',
    label: 'Radio Label',
    type: 'radio',
  },
};

export const RadioError = {
  args: {
    id: 'radio-field',
    label: 'Radio Label',
    type: 'radio',
    state: 'error',
    hint: 'Error',
  },
};

export const Checkbox = {
  args: {
    id: 'checkbox-field',
    label: 'Checkbox Label',
    type: 'checkbox',
  },
};
export const CheckboxError = {
  args: {
    id: 'checkbox-field',
    label: 'Checkbox Label',
    type: 'checkbox',
    state: 'error',
    hint: 'Error',
  },
};

export const
  MultipleRadios = (props) => (
    <>
      <ChoiceInput type="radio" id="option-1" name="option" label="Opiton 1" {...props} />
      <ChoiceInput type="radio" id="option-2" name="option" label="Opiton 2" {...props} />
      <ChoiceInput type="radio" id="option-3" name="option" label="Opiton 3" {...props} />
    </>
);

export const
  MultipleCheckboxes = (props) => (
    <>
      <ChoiceInput type="checkbox" id="option-1" label="Opiton 1" {...props} />
      <ChoiceInput type="checkbox" id="option-2" label="Opiton 2" {...props} />
      <ChoiceInput type="checkbox" id="option-3" label="Opiton 3" {...props} />
    </>
);
