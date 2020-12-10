import React from 'react';
import '../global.css';

import { Checkbox } from './Checkbox';

export default {
  title: 'Global Design System/Checkbox',
  component: Checkbox,
  argTypes: {},
};

const Template = (args) => <Checkbox {...args} />;
const DisabledTemplate = (args) => (
  <>
    <Checkbox disabled checked {...args} />
    <Checkbox disabled {...args} />
  </>
);

export const Check = Template.bind({});
Check.args = { label: 'Click Me!' };

export const Disabled = DisabledTemplate.bind({});
Disabled.args = { label: 'Disabled Label', disabled: true };
