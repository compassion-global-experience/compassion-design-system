import React from 'react';
import { Select } from './Select';

export default {
  title: 'Components/Forms/Select',
  component: Select,
  argTypes: {},
};

const Template = (args) => (
  <Select {...args}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </Select>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label text',
  onClick: undefined,
};
