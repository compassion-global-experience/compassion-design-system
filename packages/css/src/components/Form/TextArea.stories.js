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
      options: ['default', 'disabled', 'active', 'error', 'success'],
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
          <span class="form-hint ${state}">0/1200</span>
        </div>
        <div class="form-field ${state} ${size} ${iconClassName}">
          <textarea
            id="test-field"
            rows="6"
            class="form-input"
            placeholder="Input Value"
            ${disabled}
          >${value}</textarea>
          ${icon.length ? `<span class="form-icon">${icon}</span>` : ''}
        </div>
    </div>
`;
};

const FORM_ICON = {
  success: `
    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8536 4.14676C14.0488 4.34203 14.0488 4.65861 13.8535 4.85387L6.85355 11.8536C6.65829 12.0488 6.34172 12.0488 6.14646 11.8536L2.64646 8.35387C2.45119 8.15862 2.45118 7.84204 2.64643 7.64677C2.84168 7.4515 3.15827 7.45148 3.35354 7.64674L6.49999 10.7929L13.1465 4.14674C13.3417 3.95149 13.6583 3.95149 13.8536 4.14676Z" fill="black"/>
    </svg>
  `,
  error: `
    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8536 3.14645C13.0488 3.34171 13.0488 3.65829 12.8536 3.85355L3.85355 12.8536C3.65829 13.0488 3.34171 13.0488 3.14645 12.8536C2.95118 12.6583 2.95118 12.3417 3.14645 12.1464L12.1464 3.14645C12.3417 2.95118 12.6583 2.95118 12.8536 3.14645Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.14645 3.14645C3.34171 2.95118 3.65829 2.95118 3.85355 3.14645L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L3.14645 3.85355C2.95118 3.65829 2.95118 3.34171 3.14645 3.14645Z" fill="black"/>
    </svg>
  `,
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
