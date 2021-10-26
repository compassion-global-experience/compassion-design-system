import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ContentModal from '../ContentModal';
import useToggleDisplay from '../../hooks/useToggleDisplay';

export const ContentModalButton = ({
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
    <>
      <button
        aria-label="Open Window"
        onClick={handleOpen}
        type="button"
        {...props}
      >
        {children}
      </button>

      <ContentModal
        content={content}
        close={handleClose}
        isDisplayed={isDisplayed}
        title={title}
      />
    </>
  );
};

ContentModalButton.propTypes = {
  content: PropTypes.any.isRequired,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  title: PropTypes.string,
};

ContentModalButton.defaultProps = {
  onClose: undefined,
  onOpen: undefined,
  title: undefined,
};
export default ContentModalButton;
