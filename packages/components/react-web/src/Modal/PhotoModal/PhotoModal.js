import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../BaseModal/Modal';


import * as modalStyles from '../BaseModal/Modal.styles';
import * as photoModalStyles from './PhotoModal.styles';

const PhotoModal = ({ close, isDisplayed, photo }) => {
  return (
    <Modal close={close} isDisplayed={isDisplayed}>
      <div css={modalStyles.modalContentStyles}>
        <div css={photoModalStyles.photoModal}>
          <button onClick={close} aria-label="Close" type="button" />
          <img src={photo} alt="" css={photoModalStyles.photo} />
        </div>
      </div>
    </Modal>
  );
};

PhotoModal.propTypes = {
  close: PropTypes.func.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
  photo: PropTypes.string.isRequired,
};

export default PhotoModal;
