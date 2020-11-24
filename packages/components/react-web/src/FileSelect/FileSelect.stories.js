import React from 'react';
import '../global.css';

import { FileSelect } from './FileSelect';

export default {
  title: 'Global Design System/FileSelect',
  component: FileSelect,
  argTypes: {
  },
};

const Template = (args) => <FileSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
