import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { KEYCODES } from '../constants';


import { cx } from 'emotion';
import * as modalStyles from './Modal.styles';

const Modal = ({ children, close, isDisplayed }) => {
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
  }, [handleKeyDown]);

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
      css={modalStyles.modalStyles}
      ref={ref}
      role="dialog"
      tabIndex={-1}
    >
      {children}
    </div>,
    document.body
  );
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
};

export default Modal;
