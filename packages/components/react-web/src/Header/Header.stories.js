import React from 'react';
import '../global.css';

import { Header } from './Header';

export default {
  title: 'Global Design System/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
