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
        <label class="form-label ${disabled}" for="test-field">
          ${label}
        </label>
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
  info: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5ZM1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7.5C7 7.22386 7.22386 7 7.5 7H8C8.27614 7 8.5 7.22386 8.5 7.5V10.5C8.77614 10.5 9 10.7239 9 11C9 11.2761 8.77614 11.5 8.5 11.5H8C7.72386 11.5 7.5 11.2761 7.5 11V8C7.22386 8 7 7.77614 7 7.5Z" fill="black"/>
      <path d="M8 6C8.41421 6 8.75 5.66421 8.75 5.25C8.75 4.83579 8.41421 4.5 8 4.5C7.58579 4.5 7.25 4.83579 7.25 5.25C7.25 5.66421 7.58579 6 8 6Z" fill="black"/>
    </svg>
  `,
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
