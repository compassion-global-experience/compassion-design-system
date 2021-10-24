import React from 'react';
import PropTypes from 'prop-types';


import * as modalStyles from '../BaseModal/Modal.styles';
import * as alertModalStyles from './AlertModal.styles';

import Modal from '../BaseModal/Modal';

export const AlertModal = ({ close, closeLabel, content, isDisplayed }) => {
  return (
    <Modal close={close} isDisplayed={isDisplayed}>
      <div css={modalStyles.modalContentStyles}>
        <div css={alertModalStyles.alertModal}>
          <div>{content}</div>

          <div css={alertModalStyles.close}>
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
  content: PropTypes.string.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
};

export default AlertModal;
