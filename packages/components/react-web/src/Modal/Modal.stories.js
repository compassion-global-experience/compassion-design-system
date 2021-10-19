import React from 'react';
import { Modal } from './Modal';
import image from './assets/photo.jpg';

export default {
  title: 'Layouts/Modal',
  component: Modal,
  argTypes: {},
};

const Template = (args) => <Modal {...args}>Click Me!</Modal>;

export const Alert = Template.bind({});
Alert.args = {
  type: 'alert',
  content: 'Your Message Here',
};

export const Confirmation = Template.bind({});
Confirmation.args = {
  type: 'confirmation',
  content: 'Confirm?',
  confirmAction() {},
  confirmType: 'proceed',
};

export const Content = Template.bind({});
Content.args = {
  type: 'content',
  content: 'Your Content Here',
  title: 'Your Title Here',
};

export const Photo = Template.bind({});
Photo.args = {
  type: 'photo',
  photo: image,
};
