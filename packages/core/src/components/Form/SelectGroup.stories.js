export default {
  title: 'Components/Forms/SelectGroup',
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

const SelectGroup = ({
  label = 'Label Text',
  size = 'medium',
  state = 'default',
  hint = '',
  icon = '',
  adornmentText = '',
  adornmentPosition = 'end',
}) => {
  const disabled = state === 'disabled' ? 'disabled' : '';
  const startPosition = adornmentPosition === 'start';

  return `
    <div class="form-field-row">
        <label class="form-label ${disabled}" for="test-field">
          ${label}
        </label>
        <div class="input-group">
          ${startPosition ? `
            <div class="input-group-adornment ${size}">
              <i class="ph-info ph-lg"></i>
              ${adornmentText.length ? `<span class="input-group-adornment-text">${adornmentText}</span>` : ''}
            </div>
          ` : ''}
          <div class="form-field ${state} ${size}">
          <select id="test-field" class="form-input" ${disabled}>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </select>
          ${icon.length ? `<span class="form-icon">${icon}</span>` : ''}
          <span class="form-icon select-icon"><i class="ph-caret-down"></i></span>
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
};

export const Default = SelectGroup.bind({});
Default.args = {
  label: 'Label Text',
  state: 'default',
};

export const Disabled = SelectGroup.bind({});
Disabled.args = {
  label: 'Label Text',
  state: 'disabled',
};

export const Error = SelectGroup.bind({});
Error.args = {
  label: 'Label Text',
  state: 'error',
  hint: 'Hint Text',
  icon: FORM_ICON.error,
};

export const Success = SelectGroup.bind({});
Success.args = {
  label: 'Label Text',
  state: 'success',
  icon: FORM_ICON.success,
};

export const StartAdornment = SelectGroup.bind({});
StartAdornment.args = {
  label: 'Label Text',
  value: 'With Left Adornment',
  adornmentPosition: 'start',
};

export const WithText = SelectGroup.bind({});
WithText.args = {
  label: 'Label Text',
  adornmentText: 'Text',
  adornmentPosition: 'start',
};
