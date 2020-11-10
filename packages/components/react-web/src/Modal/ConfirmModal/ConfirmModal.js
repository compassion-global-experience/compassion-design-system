import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal.jsx';

import styles from './ConfirmModal.module.css';
import globalStyles from '../Modal.module.css';

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
      <div className={globalStyles['modal-content']}>
        <div className={styles['confirm-modal']} data-type={confirmType}>
          <p>{content}</p>

          <div className={styles.actions}>
            <button type="button" onClick={close} className={styles.cancel}>
              {cancelLabel}
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className={styles.submit}
            >
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
