import React from 'react';
import '../global.css';

import { Image } from './Image';

export default {
  title: 'Global Design System/Image',
  component: Image,
  argTypes: {},
};

const Template = (args) => <Image {...args} />;

export const Preview = Template.bind({});
Preview.args = {
  label: 'Preview',
  type: 'preview',
};
