import './button.scss';

export default {
  title: 'Components/Button',
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

// STORY DECORATORS - https://storybook.js.org/docs/html/writing-stories/decorators#decorator-parameters

const wrapperDiv = (story, decoratorDiv) => {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('style', 'display:grid; gap: 1rem');

  const componentDiv = document.createElement('div');
  componentDiv.appendChild(story());

  wrapper.appendChild(decoratorDiv);
  wrapper.appendChild(componentDiv);

  return wrapper;
};

const buttonKindsDecorator = (story) => {
  const decoratorDiv = document.createElement('div');
  decoratorDiv.setAttribute(
    'style',
    'display:flex; gap: 1rem; align-items: start',
  );

  decoratorDiv.appendChild(createButton({ label: 'Default' }));
  decoratorDiv.appendChild(createButton({ label: 'CTA', kind: 'cta' }));
  decoratorDiv.appendChild(createButton({ label: 'White', kind: 'white' }));
  decoratorDiv.appendChild(
    createButton({ label: 'Inverted', kind: 'inverted' }),
  );
  decoratorDiv.appendChild(
    createButton({
      label: 'Destructive',
      emphasis: 'primary',
      kind: 'destructive',
    }),
  );

  return decoratorDiv;
};

const buttonEmphasisDecorator = (story) => {
  const decoratorDiv = document.createElement('div');
  decoratorDiv.setAttribute('style', 'display:flex; gap: 16px');

  decoratorDiv.appendChild(createButton({ label: 'Primary' }));
  decoratorDiv.appendChild(
    createButton({ label: 'Secondary', emphasis: 'secondary' }),
  );
  decoratorDiv.appendChild(
    createButton({ label: 'Tertiary', emphasis: 'tertiary' }),
  );

  return decoratorDiv;
};

const buttonSizeDecorator = (story) => {
  const decoratorDiv = document.createElement('div');
  decoratorDiv.setAttribute(
    'style',
    'display:flex; gap: 16px; align-items: start',
  );

  decoratorDiv.appendChild(createButton({ label: 'Small', size: 'small' }));
  decoratorDiv.appendChild(createButton({ label: 'Medium', size: 'medium' }));
  decoratorDiv.appendChild(createButton({ label: 'Large', size: 'large' }));

  return decoratorDiv;
};

// STORY ARGTYPES - https://storybook.js.org/docs/html/api/argtypes

const emphasisArgTypes = {
  control: { type: 'select' },
  options: ['primary', 'secondary', 'tertiary'],
};

const kindArgTypes = {
  control: { type: 'select' },
  options: ['default', 'cta', 'white', 'inverted', 'destructive'],
};

const sizeArgTypes = {
  control: { type: 'select' },
  options: ['small', 'medium', 'large'],
};

const disabledArgTypes = {
  control: { type: 'select' },
  options: [true, false],
};

const iconPositionArgTypes = {
  control: { type: 'select' },
  options: ['start', 'end'],
};

// STORIES - https://storybook.js.org/docs/react/writing-stories/introduction

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
Kinds.decorators = [buttonKindsDecorator];

export const Emphasis = Template.bind({});
Emphasis.args = {
  label: 'Conrolled button',
};
Emphasis.argTypes = { emphasis: emphasisArgTypes };
Emphasis.decorators = [buttonEmphasisDecorator];

export const Size = Template.bind({});
Size.args = {
  label: 'Conrolled button',
};
Size.argTypes = { size: sizeArgTypes };
Size.decorators = [buttonSizeDecorator];

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};
Disabled.argTypes = { disabled: disabledArgTypes };

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button with icon',
  icon: 'ph-compass',
  iconPosition: 'start',
};
WithIcon.argTypes = {
  iconPosition: iconPositionArgTypes,
};
