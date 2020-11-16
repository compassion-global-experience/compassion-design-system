import React from 'react';
import PropTypes from 'prop-types';

import AlertModalButton from './AlertModal/AlertModalButton/AlertModalButton';
import ConfirmModalButton from './ConfirmModal/ConfirmModalButton/ConfirmModalButton';
import ContentModalButton from './ContentModal/ContentModalButton/ContentModalButton';
import PhotoModalButton from './PhotoModal/PhotoModalButton/PhotoModalButton';

/**
 * Modal UI component for displaying content in isolation
 */
export const Modal = (props) => {
  switch (props.type) {
    case 'alert':
      return (
        <AlertModalButton content={props.content} closeLabel={props.closeLabel}>
          Click Me!
        </AlertModalButton>
      );
    case 'confirmation':
      return (
        <ConfirmModalButton
          cancelLabel={props.cancelLabel}
          confirmAction={props.confirmAction}
          confirmLabel={props.confirmLabel}
          confirmType={props.confirmType}
          content={props.content}
        >
          Click Me!
        </ConfirmModalButton>
      );
    case 'content':
      return (
        <ContentModalButton
          content={props.content}
          onOpen={props.onOpen}
          onClose={props.onClose}
          title={props.title}
        >
          Click Me!
        </ContentModalButton>
      );
    case 'photo':
      return <PhotoModalButton photo={props.photo}>Click Me!</PhotoModalButton>;
    default:
      return <p>Please provide a valid modal type</p>;
  }
};

Modal.propTypes = {
  /**
   * Type of modal
   */
  type: PropTypes.oneOf(['alert', 'confirmation', 'content', 'photo'])
    .isRequired,
  /**
   * Label to place on cancel button which closes modal
   * This is an optional prop to be used with modals of type 'confirmation'.
   */
  cancelLabel: PropTypes.string,
  /**
   * Label for button used to close window.
   * This is an optional prop to be used with modals of type 'alert'.
   */
  closeLabel: PropTypes.string,
  /**
   * Function to call if user clicks confirm button.
   * This prop is required for modals of type 'confirmation'.
   */
  confirmAction: PropTypes.func,
  /**
   * Label to place on confirm button which calls confirmAction and closes modal.
   * This is an optional prop to be used with modals of type 'confirmation'.
   */
  confirmLabel: PropTypes.string,
  /**
   * Describes the color of the confirm button in a modal of type 'confirmation'.
   * This prop is required for modals of type 'confirmation'.
   */
  confirmType: PropTypes.oneOf(['proceed', 'warning']),
  /**
   * What is to be displayed inside the modal?
   * This prop is required for all modal types except 'photo'.
   */
  content: PropTypes.string,
  /**
   * Function to call when the modal is closed.
   * This is an optional prop to be used with modals of type 'content'.
   */
  onClose: PropTypes.func,
  /**
   * Function to call when the modal is opened.
   * This is an optional prop to be used with modals of type 'content'.
   */
  onOpen: PropTypes.func,
  /**
   * base64 string representation of photo.
   * This prop is required for modals of type 'photo'.
   */
  photo: PropTypes.string,
  /**
   * When provided, results in a title bar with an X in top right hand corner to close modal. If not provided, the title bar is removed and the X close button floats above top right-hand corner of modal.
   * This is an optional prop to be used with modals of type 'content'.
   */
  title: PropTypes.string,
};
