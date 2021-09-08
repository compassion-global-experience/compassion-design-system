import React from 'react';
import { Thumbnail } from './Thumbnail';

export default {
  title: 'Layouts/Thumbnail',
  component: Thumbnail,
  argTypes: {},
};

const Template = (args) => <Thumbnail {...args} />;

export const Preview = Template.bind({});
Preview.args = {
  label: 'Preview',
  type: 'preview',
};
