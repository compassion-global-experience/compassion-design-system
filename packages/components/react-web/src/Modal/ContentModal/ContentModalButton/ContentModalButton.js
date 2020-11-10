import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ContentModal from '../ContentModal';
import useToggleDisplay from '../../hooks/useToggleDisplay';

export const ContentModalButton = ({
  closeLabel = 'Close',
  content,
  children,
  onClose,
  onOpen,
  title,
  ...props
}) => {
  const [isDisplayed, setIsDisplayed] = useToggleDisplay();

  const handleOpen = () => {
    if (onOpen) onOpen();
    setIsDisplayed();
  };

  const handleClose = () => {
    if (onClose) onClose();
    setIsDisplayed();
  };

  return (
    <Fragment>
      <button
        aria-label="Open Window"
        onClick={handleOpen}
        type="button"
        {...props}
      >
        {children}
      </button>

      <ContentModal
        closeLabel={closeLabel}
        content={content}
        close={handleClose}
        isDisplayed={isDisplayed}
        title={title}
      />
    </Fragment>
  );
};

ContentModalButton.propTypes = {
  content: PropTypes.any.isRequired,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  title: PropTypes.string,
};

export default ContentModalButton;
