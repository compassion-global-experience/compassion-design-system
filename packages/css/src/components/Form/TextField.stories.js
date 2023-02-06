export default {
  title: 'Components/Forms/TextField',
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'active', 'error', 'success'],
    },
    hint: { control: 'text' },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
  },
  decorators: [(Story) => `<div style="width: 360px;">${Story()}</div>`],
};

const TextField = ({
  label = 'Label Text',
  value = '',
  size = 'medium',
  state = 'default',
  hint = '',
  icon = '',
  iconPosition = 'right',
}) => {
  const disabled = state === 'disabled' ? 'disabled' : '';
  const iconClassName = icon.length ? `icon-${iconPosition}` : '';

  return `
    <div class="form-field-container">
        <div class="form-label-wrap">
          <label class="form-label ${disabled}" for="test-field">
            ${label}
          </label>
        </div>
        <div class="form-field ${state} ${size} ${iconClassName}">
          <input
            id="test-field"
            type="text"
            value="${value}"
            class="form-input"
            placeholder="Input Value"
            ${disabled}
          />
          ${icon.length ? `<span class="form-icon">${icon}</span>` : ''}
        </div>
        ${hint.length ? `<span class="form-hint ${state}">${hint}</span>` : ''}
    </div>
`;
};

const FORM_ICON = {
  success: `<i class="ph-check ph-lg"></i>`,
  error: `<i class="ph-x ph-lg"></i>`,
  info: `<i class="ph-info"></i>`,
};

export const Default = TextField.bind({});
Default.args = {
  label: 'Label Text',
  value: 'Filled',
  state: 'default',
};

export const Disabled = TextField.bind({});
Disabled.args = {
  label: 'Label Text',
  value: 'Disabled',
  state: 'disabled',
};

export const Error = TextField.bind({});
Error.args = {
  label: 'Label Text',
  value: 'Error',
  state: 'error',
  hint: 'Hint Text',
  icon: FORM_ICON.error,
};

export const Success = TextField.bind({});
Success.args = {
  label: 'Label Text',
  value: 'Success',
  state: 'success',
  icon: FORM_ICON.success,
};

export const Info = TextField.bind({});
Info.args = {
  label: 'Label Text',
  icon: FORM_ICON.info,
};

export const IconLeft = TextField.bind({});
IconLeft.args = {
  label: 'Label Text',
  icon: FORM_ICON.info,
  iconPosition: 'left',
};

export const Placeholder = TextField.bind({});
Placeholder.args = {
  label: 'Label Text',
  value: '',
};

export const WithHint = TextField.bind({});
WithHint.args = {
  label: 'Label Text',
  value: 'With Hint',
  hint: 'Sample hint',
};
