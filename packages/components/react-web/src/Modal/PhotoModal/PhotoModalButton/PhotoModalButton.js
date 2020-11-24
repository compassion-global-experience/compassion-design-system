import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import PhotoModal from '../PhotoModal';
import useToggleDisplay from '../../hooks/useToggleDisplay';

export const PhotoModalButton = ({ photo, children, ...props }) => {
  const [isDisplayed, setIsDisplayed] = useToggleDisplay();

  return (
    <Fragment>
      <button
        aria-label="View Photo"
        onClick={setIsDisplayed}
        type="button"
        {...props}
      >
        {children}
      </button>

      <PhotoModal
        photo={photo}
        isDisplayed={isDisplayed}
        close={setIsDisplayed}
      />
    </Fragment>
  );
};

PhotoModalButton.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default PhotoModalButton;
