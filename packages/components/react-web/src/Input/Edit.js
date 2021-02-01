import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import edit from '../assets/edit.svg';
import check from '../assets/check.svg';
import clear from '../assets/clear.svg';
import { inputStyles } from './Input.styles';

const Edit = ({ label, props, type, inputId, disabled }) => {
  const [disable, setDisable] = useState(disabled);

  const inputRef = useRef(null);

  const changeInputToDisabled = () => {
    if (type === 'edit') {
      setDisable(true);
    }
  };

  const changeInputToEnabled = () => {
    if (type === 'edit') {
      setDisable(false);
    }
  };

  useEffect(() => {
    if (disable === false && inputRef.current) {
      inputRef.current.focus();
    }
  }, [disable]);

  return (
    <React.Fragment>
      <label htmlFor={props.id || inputId}>{label}</label>
      {type === 'edit' ? (
        <React.Fragment>
          {!disable && (
            <button
              type="button"
              aria-controls={props.id || inputId}
              onClick={changeInputToDisabled}
            >
              <img src={check} alt="Reject Input Change" />
            </button>
          )}
          {disable && (
            <button
              type="button"
              aria-controls={props.id || inputId}
              onClick={changeInputToEnabled}
            >
              <img src={edit} alt="Edit Input Change" />
            </button>
          )}
          <button
            type="button"
            aria-controls={props.id || inputId}
            aria-hidden="true"
            className="clear"
          >
            <img src={clear} alt="Reject Input Change" />
          </button>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

Edit.propTypes = {
  close: PropTypes.func.isRequired,
  content: PropTypes.any.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

export default Edit;
