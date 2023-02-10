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
export const HelloWorld = {
  args: {
    label: 'Hello world!',
  },
};

export const ClickMe = {
  args: {
    label: 'Click me!',
  },
};
