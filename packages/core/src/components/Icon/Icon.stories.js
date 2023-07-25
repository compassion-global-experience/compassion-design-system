export default {
  title: 'Components/Icon',
  decorators: [],
};

const iconDescriptionArgType = { control: 'text' };
const phosphorIconClassesArgType = { control: 'text' };
const sizeArgType = {
  control: { type: 'select' },
  options: ['xs', 'sm', 'md', 'lg'],
};
const colorArgType = {
  control: { type: 'select' },
  options: ['default', 'primary', 'muted'],
};

// Story Template - Includes the component code that receives args

const iconClassPrefix = 'c-icon-';

const Template = ({
  phosphorIconClasses = 'ph-church',
  size = 'md',
  color = 'default',
  iconDescription = 'icon',
}) => {
  // Create CSS classes in the .module.css file and add them as needed
  const classNames = [
    phosphorIconClasses,
    `c-icon__svg--${size}`,
    `c-icon__svg--${color}`,
  ].join(' ');

  // Add component html to the return statement below
  return `
  <div class=".c-icon__container ">
    <i class="${classNames}" aria-hidden="true"></i>
    <span class="c-icon__description">${iconDescription}</span>
  </div>
  `;
};

// Stories to caputure different UI states based on args

export const Default = Template.bind({});
Default.argTypes = {
  iconDescription: iconDescriptionArgType,
  phosphorIconClasses: phosphorIconClassesArgType,
  size: sizeArgType,
  color: colorArgType,
};
Default.args = {
  iconDescription: 'Compass',
  phosphorIconClasses: 'ph-compass',
  size: 'md',
  color: 'default',
};

export const Size = Template.bind({});
Size.argTypes = {
  iconDescription: iconDescriptionArgType,
  phosphorIconClasses: phosphorIconClassesArgType,
  size: sizeArgType,
};
Size.args = {
  iconDescription: 'Confetti',
  phosphorIconClasses: 'ph-confetti',
  size: 'md',
};

export const Color = Template.bind({});
Color.argTypes = {
  iconDescription: iconDescriptionArgType,
  phosphorIconClasses: phosphorIconClassesArgType,
  color: colorArgType,
};
Color.args = {
  iconDescription: 'Confetti',
  phosphorIconClasses: 'ph-confetti',
  color: 'default',
};
