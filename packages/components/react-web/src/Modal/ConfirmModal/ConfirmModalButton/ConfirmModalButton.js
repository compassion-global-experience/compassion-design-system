import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ConfirmModal from '../ConfirmModal';
import useToggleDisplay from '../../hooks/useToggleDisplay';

export const ConfirmModalButton = ({
  cancelLabel = 'Cancel',
  confirmAction,
  confirmLabel = 'Proceed',
  confirmType,
  content,
  children,
  ...props
}) => {
  const [isDisplayed, setIsDisplayed] = useToggleDisplay();

  return (
    <Fragment>
      <button
        aria-label={cancelLabel}
        onClick={setIsDisplayed}
        type="button"
        {...props}
      >
        {children}
      </button>

      <ConfirmModal
        cancelLabel={cancelLabel}
        confirmLabel={confirmLabel}
        confirmAction={confirmAction}
        content={content}
        close={setIsDisplayed}
        isDisplayed={isDisplayed}
        confirmType={confirmType}
      />
    </Fragment>
  );
};

ConfirmModalButton.propTypes = {
  cancelLabel: PropTypes.string,
  confirmAction: PropTypes.func.isRequired,
  confirmLabel: PropTypes.string,
  confirmType: PropTypes.string.isRequired,
  content: PropTypes.string,
};

export default ConfirmModalButton;
