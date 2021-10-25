/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Select } from './Select';

export default {
  title: 'Components/Form Components/Select',
  component: Select,
  args: {
    options: [
      { value: 1, label: 'Option 1' },
      { value: { obj: 2 }, label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      { value: [4], label: 'Option 4' },
    ],
    onChange: action('On select change'),
  },
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label Text',
  placeholder: 'Placeholder Text',
};
