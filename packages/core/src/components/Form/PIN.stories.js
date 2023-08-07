import './_pin.scss';

export default {
  title: 'Components/Forms/PIN',
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'disabled', 'error'],
    },
  },
};

const PinField = ({
  label = 'Label Text',
  size = 'medium',
  state = 'default',
}) => {
  const disabled = state === 'disabled' ? 'disabled' : '';
  const disabledClass = disabled.length ? ' cds-form--disabled' : '';
  const stateClass = state !== 'default' ? ` cds-form--${state}` : '';

  return `
    <div class="cds-form__field-row">
      <div class="cds-form__label-wrap">
        <label class="cds-form__label${disabledClass}" for="test-field">
          ${label}
        </label>
      </div>
      <div class="cds-form__pin-field cds-form--${size}">
        <div class="cds-form__field${stateClass}">
          <input class="cds-form__input" type="password" maxlength=1 ${disabled} />
        </div>
        <div class="cds-form__field${stateClass}">
          <input class="cds-form__input" type="password" maxlength=1 ${disabled} />
        </div>
        <div class="cds-form__field${stateClass}">
          <input class="cds-form__input" type="password" maxlength=1 ${disabled} />
        </div>
        <div class="cds-form__field${stateClass}">
          <input class="cds-form__input" type="password" maxlength=1 ${disabled} />
        </div>
      </div>
    </div>

    <script>
      var inputs = document.querySelectorAll("input");
      inputs.forEach((input, key) => {
        input.autocomplete = 'off';
        input.addEventListener("keyup", function (event) {
          if (event.key === 'Backspace') {
            inputs[key - 1]?.focus();
          }
          else if (event.key?.length === 1 && /\\w/.test(event.key)) {
            inputs[key + 1]?.focus();
          }
        });
      });
    </script>
`;
};

export const Default = PinField.bind({});
Default.args = {
  label: 'Label Text',
};

export const Disabled = PinField.bind({});
Disabled.args = {
  label: 'Label Text',
  state: 'disabled',
};

export const Error = PinField.bind({});
Error.args = {
  label: 'Label Text',
  state: 'error',
};
