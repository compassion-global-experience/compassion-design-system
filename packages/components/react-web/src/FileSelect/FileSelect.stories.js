import React from 'react';
import { FileSelect } from './FileSelect';

export default {
  title: 'Global Design System/FileSelect',
  component: FileSelect,
  argTypes: {},
};

const Template = (args) => <FileSelect {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
