import './radio-checkbox.scss';

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

  const storyId = `use-a-more-meaningful-id__d:${
    disabled.length > 0 ? 'true' : 'false'
  }__e:${hasError}__c:${checked.toString()}`;
  console.dir(storyId);

  return `
    <div class="cds-form__field-row">
      <div class="cds-form__control">
        <div class="cds-form__control__inner">
          <input
            id="${storyId}"
            type="checkbox"
            name="checkbox"
            class="${hasError ? 'cds-form--error' : ''} ${
    disabled ? 'cds-form--disabled' : ''
  }"
            ${checkedAttr}
            ${disabled}
          />
          <span class="cds-form__control__icon"><i class="ph-check"></i></span>
        </div>
        <label for="${storyId}" class="cds-form__label ${disabled}">
          ${label}
        </label>
      </div>
      ${
        hasError
          ? `<span class="cds-form__hint cds-form--error">Error</span>`
          : ''
      }
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
