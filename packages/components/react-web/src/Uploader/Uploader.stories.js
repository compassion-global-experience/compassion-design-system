import React from 'react';
import { Uploader } from './Uploader';

export default {
  title: 'Layouts/Uploader',
  component: Uploader,
  argTypes: {},
};

const Template = (args) => <Uploader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
