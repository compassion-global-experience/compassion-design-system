import './radio-checkbox.scss';

export default {
  title: 'Components/Forms/Radio',
  argTypes: {
    label: { control: 'text' },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'error'],
    },
    hint: { control: 'text' },
  },
};

const Radio = ({ label = 'Label Text', state = 'default' }) => {
  const disabled = state === 'disabled' ? 'disabled' : '';
  const hasError = state === 'error';

  return `
    <div class="cds-form__field-row">
        <div class="cds-form__control">
          <input
            id="test-radio"
            type="radio"
            name="radio"
            checked
            ${disabled}
          />
          <label for="test-radio" class="cds-form__label ${
            disabled.length ? 'cds-form--disabled' : ''
          }">
            ${label} 1
          </label>
        </div>
    </div>
    <div class="cds-form__field-row">
        <div class="cds-form__control">
          <input
            id="test-radio-2"
            type="radio"
            name="radio"
            class="${hasError ? 'cds-form--error' : ''}"
            ${disabled}
          />
          <label for="test-radio-2" class="cds-form__label ${
            disabled.length ? 'cds-form--disabled' : ''
          }">
            ${label} 2
          </label>
        </div>
        ${
          hasError
            ? `<span class="cds-form__hint cds-form--error">Error 2</span>`
            : ''
        }
    </div>
`;
};

export const Default = Radio.bind({});
Default.args = {
  label: 'Label Text',
  state: 'default',
};

export const Disabled = Radio.bind({});
Disabled.args = {
  label: 'Label Text',
  state: 'disabled',
};

export const Error = Radio.bind({});
Error.args = {
  label: 'Label Text',
  state: 'error',
};
