import React from 'react';
import { Logo } from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {},
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ViewportBasedSizing = Template.bind({});
ViewportBasedSizing.args = { color: `dark`, width: `10vw` };
