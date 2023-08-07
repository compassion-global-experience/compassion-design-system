import './_textarea.scss';

export default {
  title: 'Components/Forms/TextArea',
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
  },
  decorators: [(Story) => `<div style="width: 360px;">${Story()}</div>`],
};

const TextArea = ({
  label = 'Label Text',
  value = '',
  size = 'medium',
  state = 'default',
  icon = '',
}) => {
  const disabled = state === 'disabled' ? 'disabled' : '';

  return `
    <div class="cds-form__field-row">
        <div class="cds-form__label-wrap">
          <label class="cds-form__label ${
            disabled.length ? 'cds-form--disabled' : ''
          }" for="test-field">
            ${label}
          </label>
          <span class="cds-form__hint ${
            state !== 'default' ? `cds-form--${state}` : ''
          }">0 / 1200</span>
        </div>
        <div class="cds-form__field ${
          state !== 'default' ? `cds-form--${state}` : ''
        } cds-form--${size}">
          <textarea
            id="test-field"
            rows="6"
            class="cds-form__input"
            placeholder="Input Value"
            ${disabled}
          >${value}</textarea>
          ${icon.length ? `<span class="cds-form__icon">${icon}</span>` : ''}
        </div>
    </div>
`;
};

const FORM_ICON = {
  success: `<i class="ph-check ph-lg"></i>`,
  error: `<i class="ph-x ph-lg"></i>`,
};

export const Default = TextArea.bind({});
Default.args = {
  label: 'Label Text',
  value: 'Filled',
  state: 'default',
};

export const Disabled = TextArea.bind({});
Disabled.args = {
  label: 'Label Text',
  value: 'Disabled',
  state: 'disabled',
};

export const Error = TextArea.bind({});
Error.args = {
  label: 'Label Text',
  value: 'Error',
  state: 'error',
  icon: FORM_ICON.error,
};

export const Success = TextArea.bind({});
Success.args = {
  label: 'Label Text',
  value: 'Success',
  state: 'success',
  icon: FORM_ICON.success,
};
