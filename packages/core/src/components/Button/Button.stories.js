import './button.scss';

import decorateComponents from '../../utils/wrapComponents';

const labelArgTypes = {
  control: { type: 'text' },
  description: 'The button’s text. Short and action-oriented.',
  table: { type: { summary: 'string' } },
};

const emphasisArgTypes = {
  control: { type: 'radio' },
  options: ['primary', 'secondary', 'tertiary'],
  description: 'Visual weight the button should carry.',
  table: { defaultValue: { summary: 'primary' } },
};

const kindArgTypes = {
  control: { type: 'select' },
  options: ['default', 'cta', 'white', 'inverted', 'destructive'],
  description: 'Purpose or intent the button represents.',
  table: { defaultValue: { summary: 'default' } },
};

const sizeArgTypes = {
  control: 'radio',
  options: ['small', 'medium', 'large'],
  description: 'Size of the rendered button.',
  table: { defaultValue: { summary: 'medium' } },
};

const disabledArgTypes = {
  control: { type: 'boolean' },
  description: 'Whether the button should be disabled.',
  table: {
    type: { summary: 'boolean' },
    defaultValue: { summary: 'false' },
  },
};

const iconArgTypes = {
  control: { type: 'text' },
  description:
    'Icon name; see the list of [available Phosphor Icons](https://phosphoricons.com/).',
  table: { type: { summary: 'string' } },
};

const iconPositionArgTypes = {
  control: { type: 'radio' },
  options: ['start', 'end'],
  description: 'Where to position the button’s icon, if applicable.',
  table: {
    defaultValue: {
      summary: 'start',
    },
  },
};

export default {
  title: 'Components/Button',
  argTypes: {
    label: labelArgTypes,
    kind: kindArgTypes,
    emphasis: emphasisArgTypes,
    size: sizeArgTypes,
    disabled: disabledArgTypes,
    icon: iconArgTypes,
    iconPosition: iconPositionArgTypes,
  },
};

const createButton = ({
  emphasis = 'primary',
  size = 'medium',
  disabled = false,
  kind,
  label,
  onClick,
  icon,
  iconPosition = 'start',
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  btn.className = [
    `cds-button--${emphasis}`,
    `cds-button--${size}`,
    kind ? `cds-button--${kind}` : '',
  ]
    .join(' ')
    .trim();
  btn.disabled = disabled;

  if (icon) {
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('cds-icon__container');

    const iconElement = document.createElement('i');
    iconElement.classList.add(icon);
    iconElement.setAttribute('aria-hidden', 'true');

    const iconDescriptionElement = document.createElement('span');
    iconDescriptionElement.classList.add('cds-icon__description');

    iconContainer.appendChild(iconElement);
    iconContainer.appendChild(iconDescriptionElement);
    btn.insertAdjacentElement('afterBegin', iconContainer);

    if (label) {
      if (iconPosition === 'end') {
        iconContainer.classList.add('cds-button__icon--end');
        btn.classList.add('cds-button--reverse-text-icon');
      } else {
        iconContainer.classList.add('cds-button__icon--start');
        btn.classList.remove('cds-button--reverse-text-icon');
      }
    } else {
      btn.appendChild(iconContainer);
    }
  }

  return btn;
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const Default = Template.bind({});
Default.args = { label: 'Button Label' };

export const Playground = Template.bind({});
Playground.args = {
  label: 'Button',
};
Playground.argTypes = {
  label: { control: 'text' },
  onClick: { action: 'onClick' },
  emphasis: emphasisArgTypes,
  kind: kindArgTypes,
  size: sizeArgTypes,
  disabled: disabledArgTypes,
  icon: { control: 'text' },
  iconPosition: iconPositionArgTypes,
};

export const Kinds = Template.bind({});
Kinds.args = {
  label: 'Conrolled button',
};
Kinds.argTypes = { kind: kindArgTypes };
Kinds.decorators = [
  () =>
    decorateComponents([
      createButton({ label: 'Default' }),
      createButton({ label: 'CTA', kind: 'cta' }),
      createButton({ label: 'White', kind: 'white' }),
      createButton({ label: 'Inverted', kind: 'inverted' }),
      createButton({
        label: 'Destructive',
        emphasis: 'primary',
        kind: 'destructive',
      }),
    ]),
];

export const Emphasis = Template.bind({});
Emphasis.args = {
  label: 'Conrolled button',
};
Emphasis.argTypes = { emphasis: emphasisArgTypes };
Emphasis.decorators = [
  () =>
    decorateComponents([
      createButton({ label: 'Primary' }),
      createButton({ label: 'Secondary', emphasis: 'secondary' }),
      createButton({ label: 'Tertiary', emphasis: 'tertiary' }),
    ]),
];

export const Size = Template.bind({});
Size.args = {
  label: 'Conrolled button',
};
Size.argTypes = { size: sizeArgTypes };
Size.decorators = [
  () =>
    decorateComponents([
      createButton({ label: 'Small', size: 'small' }),
      createButton({ label: 'Medium', size: 'medium' }),
      createButton({ label: 'Large', size: 'large' }),
    ]),
];

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};
Disabled.argTypes = { disabled: disabledArgTypes };

export const WithIcon = Template.bind({});
WithIcon.argTypes = {
  iconPosition: iconPositionArgTypes,
};
WithIcon.decorators = [
  () =>
    decorateComponents([
      createButton({ label: 'Icon Start', icon: 'ph-compass' }),
      createButton({ label: 'Icon End', icon: 'ph-arrow-right' }),
      createButton({
        label: 'Confirm choices',
        icon: 'ph-check',
        showLabel: false,
      }),
    ]),
];
