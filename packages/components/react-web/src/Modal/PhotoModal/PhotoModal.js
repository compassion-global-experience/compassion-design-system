import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal.jsx';
import image from '../../assets/photo.jpg';
import styles from './PhotoModal.module.css';
import globalStyles from '../Modal.module.css';

const PhotoModal = ({ close, closeLabel, isDisplayed, photo }) => {
  return (
    <Modal close={close} isDisplayed={isDisplayed}>
      <div className={globalStyles['modal-content']}>
        <div className={styles['photo-modal']}>
          <img src={image} alt="This is a boy." className={styles.photo} />
          <button onClick={close} aria-label="Close" type="button">
            {closeLabel}
          </button>
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
