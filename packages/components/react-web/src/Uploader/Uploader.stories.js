import React from 'react';
import '../global.css';

import { Uploader } from './Uploader';

export default {
  title: 'Global Design System/Uploader',
  component: Uploader,
  argTypes: {},
};

const Template = (args) => <Uploader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};
