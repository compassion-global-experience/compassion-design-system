import React from 'react';
import '../global.css';

import { Thumbnail } from './Thumbnail';

export default {
  title: 'Global Design System/Thumbnail',
  component: Thumbnail,
  argTypes: {},
};

const Template = (args) => <Thumbnail {...args} />;

export const Preview = Template.bind({});
Preview.args = {
  label: 'Preview',
  type: 'preview',
};
