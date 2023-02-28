import React from 'react';
import { Meta } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Button',
  component: Button,
};

export default meta;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    mode: 'primary',
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    mode: 'secondary',
    label: 'Button',
  },
};

export const Tertiary = {
  args: {
    mode: 'tertiary',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Medium = {
  args: {
    size: 'medium',
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    label: 'Button',
  },
};
