import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';

import styles from './AlertModal.module.css';
// import globalStyles from '../Modal.module.css';

export const AlertModal = ({ close, closeLabel, content, isDisplayed }) => {
  return (
    <Modal close={close} isDisplayed={isDisplayed}>
      <div>
        <div className={styles['alert-modal']}>
          <div>{content}</div>

          <div className={styles.close}>
            <button onClick={close} type="button">
              {closeLabel}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

AlertModal.propTypes = {
  close: PropTypes.func.isRequired,
  closeLabel: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
};

export default AlertModal;
