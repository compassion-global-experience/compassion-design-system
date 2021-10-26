import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { AlertModal } from '../AlertModal';
import useToggleDisplay from '../../hooks/useToggleDisplay';

export const AlertModalButton = ({
  closeLabel,
  content,
  children,
  ...props
}) => {
  const [isDisplayed, setIsDisplayed] = useToggleDisplay();

  return (
    <>
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
    </>
  );
};

AlertModalButton.propTypes = {
  closeLabel: PropTypes.string,
  content: PropTypes.string.isRequired,
};
AlertModalButton.defaultProps = {
  closeLabel: 'Close',
};

export default AlertModalButton;
