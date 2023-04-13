import { Meta } from '@storybook/react';
import { Info } from 'phosphor-react';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
};

export default meta;

export const DefaultIcon: typeof meta = {
  args: {
    icon: Info,
  },
};

export const PrimaryIcon: typeof meta = {
  args: {
    icon: Info,
    mode: 'primary',
  },
};

export const MutedIcon: typeof meta = {
  args: {
    icon: Info,
    mode: 'muted',
  },
};

export const BigIcon: typeof meta = {
  args: {
    icon: Info,
    size: '4em',
    mode: 'primary',
  },
};
