import React from 'react';
import '../global.css';

import { Logo } from './Logo';

export default {
  title: 'Global Design System/Logo',
  component: Logo,
  argTypes: {},
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ViewportBasedSizing = Template.bind({});
ViewportBasedSizing.args = { color: `dark`, width: `10vw` };
