import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal.jsx';

import styles from './PhotoModal.module.css';
import globalStyles from '../Modal.module.css';

const PhotoModal = ({ close, isDisplayed, photo }) => {
  return (
    <Modal close={close} isDisplayed={isDisplayed}>
      <div className={globalStyles['modal-content']}>
        <div className={styles['photo-modal']}>
          <button onClick={close} aria-label="Close" type="button" />
          <img src={photo} alt="Photo" />
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
