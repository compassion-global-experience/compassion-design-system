import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import AlertModal from '../AlertModal.js';
import useToggleDisplay from '../../hooks/useToggleDisplay';

export const AlertModalButton = ({
  closeLabel = 'Close',
  content,
  children,
  ...props
}) => {
  const [isDisplayed, setIsDisplayed] = useToggleDisplay();

  return (
    <Fragment>
      <button
        aria-label={closeLabel}
        onClick={setIsDisplayed}
        type="button"
        {...props}
      >
        {children}
      </button>

      <AlertModal
        closeLabel={closeLabel}
        close={setIsDisplayed}
        content={content}
        isDisplayed={isDisplayed}
      />
    </Fragment>
  );
};

AlertModalButton.propTypes = {
  closeLabel: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default AlertModalButton;
