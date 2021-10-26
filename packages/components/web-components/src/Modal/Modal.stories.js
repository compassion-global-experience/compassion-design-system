/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';

import './Modal';
import image from './assets/photo.jpg';

export default {
  title: 'Global Design System/Modal',
};

const Template = ({
  type,
  cancelLabel,
  closeLabel,
  confirmAction,
  confirmLabel,
  confirmType,
  content,
  onClose,
  onOpen,
  photo,
  contentTitle,
}) =>
  html`<gds-modal
    .type=${type}
    .cancelLabel=${cancelLabel || undefined}
    .closeLabel=${closeLabel}
    .confirmAction=${confirmAction}
    .confirmLabel=${confirmLabel || undefined}
    .confirmType=${confirmType}
    .content=${content}
    .onClose=${onClose}
    .onOpen=${onOpen}
    .photo=${photo}
    .contentTitle=${contentTitle}
  />`;

export const Alert = Template.bind({});
Alert.args = {
  type: 'alert',
  content: 'Your Message Here',
  confirmType: 'proceed',
};

export const Confirmation = Template.bind({});
Confirmation.args = {
  type: 'confirmation',
  cancelLabel: 'Cancel',
  confirmLabel: 'Proceed',
  content: 'Confirm?',
  confirmAction: action('On modal confirm.'),
  confirmType: 'proceed',
};

export const Content = Template.bind({});
Content.args = {
  type: 'content',
  content: 'Your Content Here',
  contentTitle: 'Your Title Here',
  onOpen: action('On modal open.'),
  onClose: action('On modal close.'),
};

export const Photo = Template.bind({});
Photo.args = {
  type: 'photo',
  photo: image,
};
