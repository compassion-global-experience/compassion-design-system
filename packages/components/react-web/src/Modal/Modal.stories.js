import React from 'react';
import '../global.css';

import { AlertModalButton } from './AlertModal/AlertModalButton/AlertModalButton.js';
import { ConfirmModalButton } from './ConfirmModal/ConfirmModalButton/ConfirmModalButton.js';
import { PhotoModalButton } from './PhotoModal/PhotoModalButton/PhotoModalButton.js';
import { ContentModalButton } from './ContentModal/ContentModalButton/ContentModalButton.js';

export default {
  title: 'Global Design System/Modal',
  component: 'Modal',
  argTypes: {},
};

const AlertTemplate = (args) => (
  <AlertModalButton {...args}> Click Me! </AlertModalButton>
);

const ConfirmTemplate = (args) => (
  <ConfirmModalButton {...args}> Click Me! </ConfirmModalButton>
);
const PhotoTemplate = (args) => (
  <PhotoModalButton {...args}> Click Me! </PhotoModalButton>
);
const ContentTemplate = (args) => (
  <ContentModalButton {...args}> Click Me! </ContentModalButton>
);

export const Alert = AlertTemplate.bind({});
Alert.args = {
  content: 'Alert Message!',
};

export const Confirm = ConfirmTemplate.bind({});
Confirm.args = {
  content: 'Confirmation Message...',
};

export const Photo = PhotoTemplate.bind({});
Confirm.args = {
  content: 'Photo Modal',
};

export const Content = ContentTemplate.bind({});
Confirm.args = {
  content: 'Content Modal' ,
};
