import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from '@emotion/core';
// import { cx } from 'emotion';
import { KEYCODES } from '../utils/constants';
// import * as modalStyles from './Modal.styles';

/**
 * Primary UI component for user interaction
 */
export const Modal = ({
  primary,
  size,
  label,
  children,
  close,
  isDisplayed,
  title,
  content,
  ...props
}) => {
  const ref = useRef(null);

  const handleKeyDown = ({ key }) => {
    // If the ref exists, we're rendering a modal
    // If it doesn't, this is a modal that is currently closed.
    if (ref.current && key === KEYCODES.ESCAPE) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');
    const openModals = document.querySelectorAll("[aria-modal='true']").length;

    //prevents scrolling when any number of modals are rendered
    html && (html.style.overflow = openModals > 0 ? 'hidden' : '');
    document.body.style.overflow = openModals > 0 ? 'hidden' : '';
  }, [isDisplayed]);

  if (!isDisplayed) return null;

  return ReactDOM.createPortal(
    <div
      aria-modal
      aria-hidden
      // className={styles.modal}
      ref={ref}
      role="dialog"
      tabIndex={-1}
    >
      {label}
    </div>,
    document.body
  );
};

Modal.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  type: PropTypes.oneOf(['content', 'alert', 'confirm', 'photo']),
  /**
   * Click handler
   */
  // close: PropTypes.func,
  /**
   * Is the modal displayed?
   */
  isDisplayed: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  type: 'content',
  // close: false,
  // isDisplayed: false,
  size: 'medium',
};
