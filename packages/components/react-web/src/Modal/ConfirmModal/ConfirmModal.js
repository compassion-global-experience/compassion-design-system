import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../BaseModal/Modal';

import * as modalStyles from '../BaseModal/Modal.styles';
import * as confirmModalStyles from './ConfirmModal.styles';

export const ConfirmModal = ({
  cancelLabel,
  close,
  confirmAction,
  confirmLabel,
  confirmType,
  content,
  isDisplayed,
}) => {
  const handleConfirm = () => {
    confirmAction();
    close();
  };

  return (
    <Modal close={close} isDisplayed={isDisplayed}>
      <div css={modalStyles.modalContentStyles}>
        <div css={confirmModalStyles.confirmModal} data-type={confirmType}>
          <p>{content}</p>

          <div css={confirmModalStyles.actions}>
            <button type="button" onClick={close}>
              {cancelLabel}
            </button>
            <button type="button" onClick={handleConfirm}>
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  cancelLabel: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  confirmAction: PropTypes.func.isRequired,
  confirmLabel: PropTypes.string.isRequired,
  confirmType: PropTypes.string.isRequired,
  content: PropTypes.string,
  isDisplayed: PropTypes.bool.isRequired,
};

export default ConfirmModal;
