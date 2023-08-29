import { Meta } from '@storybook/react';
import Icon, { cdsIconMap } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
};

export default meta;

const iconDescriptionArgType = { control: 'text' };
const iconArgTypes = {
  control: { type: 'select' },
  options: Object.keys(cdsIconMap).sort(),
};
const sizeArgType = {
  control: { type: 'select' },
  options: ['xs', 'sm', 'md', 'lg'],
};
const colorArgType = {
  control: { type: 'select' },
  options: ['default', 'primary', 'muted', 'white'],
};

export const Default = {
  args: {
    description: 'check mark',
    icon: 'check',
    color: 'default',
    size: 'md',
  },
  argTypes: {
    icon: iconArgTypes,
    description: iconDescriptionArgType,
    size: sizeArgType,
    color: colorArgType,
  },
};
