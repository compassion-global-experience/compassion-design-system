import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../BaseModal/Modal';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as modalStyles from '../BaseModal/Modal.styles';
import * as contentModalStyles from './ContentModal.styles';

const ContentModal = ({ close, content, isDisplayed, title }) => {
  return (
    <Modal close={close} isDisplayed={isDisplayed}>
      <div css={modalStyles.modalContentStyles}>
        <div css={contentModalStyles.contentModal}>
          <div
            css={contentModalStyles.titleBar}
            {...(title ? { 'data-title': title } : {})}
          >
            <h1>{title}</h1>
            <button onClick={close} aria-label="Close" type="button" />
          </div>

          <div css={contentModalStyles.content}>{content}</div>
        </div>
      </div>
    </Modal>
  );
};

ContentModal.propTypes = {
  close: PropTypes.func.isRequired,
  content: PropTypes.any.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

export default ContentModal;
