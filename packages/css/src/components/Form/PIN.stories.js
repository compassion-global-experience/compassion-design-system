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

    return `
    <div class="form-field-row">
      <div class="form-label-wrap">
        <label class="form-label ${disabled}" for="test-field">
          ${label}
        </label>
      </div>
      <div class="pin-field ${size}">
        <div class="form-field ${state} ${disabled}">
          <input class="form-input" type="password" maxlength=1 ${disabled} />
        </div>
        <div class="form-field ${state} ${disabled}">
          <input class="form-input" type="password" maxlength=1 ${disabled} />
        </div>
        <div class="form-field ${state} ${disabled}">
          <input class="form-input" type="password" maxlength=1 ${disabled} />
        </div>
        <div class="form-field ${state} ${disabled}">
          <input class="form-input" type="password" maxlength=1 ${disabled} />
        </div>
      </div>
    </div>
    
    <script>
      var inputs = document.querySelectorAll("input");
      inputs.forEach((input, key) => {
        if (key !== 0) {
          input.addEventListener("click", function () {
            inputs[0].focus();
          });
        }
        input.addEventListener("keyup", function () {
          if (input.value) {
            inputs[key + 1].focus();
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
