import React from 'react';
import '../global.css';

import IconSkippy from './icons/IconSkippy';

export default {
  title: 'Global Design System/Icon',
  component: IconSkippy,
  argTypes: {},
};

const Template = (args) => <IconSkippy {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
