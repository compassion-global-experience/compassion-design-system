export default {
  title: 'Components/Forms/InputGroup',
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
    adornmentText: { control: 'text' },
    adornmentPosition: {
      control: { type: 'select' },
      options: ['start', 'end'],
    },
  },
  decorators: [(Story) => `<div style="width: 360px;">${Story()}</div>`],
};

const InputGroup = ({
  label = 'Label Text',
  value = '',
  size = 'medium',
  state = 'default',
  hint = '',
  iconRight = '',
  iconLeft = '',
  adornmentText = '',
  adornmentPosition = 'end',
}) => {
  const disabled = state === 'disabled' ? 'disabled' : '';
  const startPosition = adornmentPosition === 'start';

  return `
    <div class="form-field-row">
        <div class="form-label-wrap">
          <label class="form-label ${disabled}" for="test-field">
            ${label}
          </label>
        </div>
        <div class="input-group">
          ${startPosition ? `
            <div class="input-group-adornment ${size}">
              <i class="ph-info ph-lg"></i>
              ${adornmentText.length ? `<span class="input-group-adornment-text">${adornmentText}</span>` : ''}
            </div>
          ` : ''}
          <div class="form-field ${state} ${size}">
            ${iconLeft.length ? `<span class="form-icon">${iconLeft}</span>` : ''}
            <input
              id="test-field"
              type="text"
              value="${value}"
              class="form-input"
              placeholder="Input Value"
              ${disabled}
            />
            ${iconRight.length ? `<span class="form-icon">${iconRight}</span>` : ''}
          </div>
          ${!startPosition ? `
            <div class="input-group-adornment ${size}">
              <i class="ph-info ph-lg"></i>
              ${adornmentText.length ? `<span class="input-group-adornment-text">${adornmentText}</span>` : ''}
            </div>
          ` : ''}
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

export const Default = InputGroup.bind({});
Default.args = {
  label: 'Label Text',
  value: 'Filled',
  state: 'default',
};

export const Disabled = InputGroup.bind({});
Disabled.args = {
  label: 'Label Text',
  value: 'Disabled',
  state: 'disabled',
};

export const Error = InputGroup.bind({});
Error.args = {
  label: 'Label Text',
  value: 'Error',
  state: 'error',
  hint: 'Hint Text',
  iconRight: FORM_ICON.error,
};

export const Success = InputGroup.bind({});
Success.args = {
  label: 'Label Text',
  value: 'Success',
  state: 'success',
  iconRight: FORM_ICON.success,
};

export const MultipleIcons = InputGroup.bind({});
MultipleIcons.args = {
  label: 'Label Text',
  value: 'Text With Multiple Icons',
  iconLeft: FORM_ICON.info,
  iconRight: FORM_ICON.info,
};

export const StartAdornment = InputGroup.bind({});
StartAdornment.args = {
  label: 'Label Text',
  value: 'With Left Adornment',
  adornmentPosition: 'start',
};

export const WithText = InputGroup.bind({});
WithText.args = {
  label: 'Label Text',
  adornmentText: 'Text',
  adornmentPosition: 'start',
};

export const WithHint = InputGroup.bind({});
WithHint.args = {
  label: 'Label Text',
  value: 'With Hint',
  hint: 'Sample hint',
};
