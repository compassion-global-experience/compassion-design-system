import React from 'react';
import '../global.css';

import { Cell } from './Cell';

export default {
  title: 'Global Design System/Cell',
  component: Cell,
  argTypes: {},
};

const Template = (args) => <Cell {...args} />;

// export const Basic = Template.bind({});
// Basic.args = {};
