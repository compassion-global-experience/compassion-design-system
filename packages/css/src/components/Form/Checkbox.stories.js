export default {
  title: 'Components/Forms/Checkbox',
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'error'],
    },
    hint: { control: 'text' },
  },
};

const Checkbox = ({
  label = 'Label Text',
  state = 'default',
  checked = false,
}) => {
  const disabled = state === 'disabled' ? 'disabled' : '';
  const hasError = state === 'error';
  const checkedAttr = checked ? 'checked' : '';

  return `
    <div class="form-field-row">
        <div class="form-control">
          <input
            id="test-checkbox"
            type="checkbox"
            name="checkbox"
            class="${hasError ? 'error' : ''}"
            ${checkedAttr}
            ${disabled}
          />
          <label for="test-checkbox" class="form-label ${disabled}">
            ${label}
          </label>
        </div>
        ${hasError ? `<span class="form-hint error">Error</span>` : ''}
    </div>
`;
};

export const Default = Checkbox.bind({});
Default.args = {
  label: 'Label Text',
  state: 'default',
};

export const Disabled = Checkbox.bind({});
Disabled.args = {
    label: 'Label Text',
    state: 'disabled',
};

export const Error = Checkbox.bind({});
Error.args = {
    label: 'Label Text',
    state: 'error',
};
