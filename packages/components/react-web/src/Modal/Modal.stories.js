import React from 'react';
import '../global.css';

import { Modal } from './Modal';
import { AlertModal } from './AlertModal';

export default {
  title: 'Global Design System/Modal',
  component: Modal,
  argTypes: {},
};

const Template = (args) => <Modal {...args} />;

export const Content = Template.bind({});
Content.args = {
  // close: false,
  // isDisplayed: false,
  label: 'Content Modal',
  type: 'content',
  title: 'this is the title',
  content: 'this is the content',
};

// export const Alert = Template.bind({});
// Alert.args = {
//   label: 'Alert Modal',
//   children: 'Content Modal - children',
//   type: 'alert',
// };

// export const Confirm = Template.bind({});
// Confirm.args = {
//   size: 'large',
//   label: 'Confirm Modal',
//   children: 'Content Modal - children'',
//   type: 'confirm',
// };

// export const Photo = Template.bind({});
// Photo.args = {
//   size: 'small',
//   label: 'Photo Modal',
//   children: 'Content Modal - children'',
//   type: 'photo',
// };
