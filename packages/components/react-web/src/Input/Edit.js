import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import edit from '../assets/edit.svg';
import check from '../assets/check.svg';
import clear from '../assets/clear.svg';

const Edit = ({
  label,
  props,
  inputId,
  disable,
  changeInputToEnabled,
  changeInputToDisabled,
}) => {
  return (
    <React.Fragment>
      <label htmlFor={props.id || inputId}>{label}</label>
      {!disable && (
        <button
          type="button"
          aria-controls={props.id || inputId}
          onClick={changeInputToDisabled}
        >
          <img src={check} alt="Accept Input Change" />
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
  );
};

Edit.propTypes = {
  close: PropTypes.func.isRequired,
  content: PropTypes.any.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

export default Edit;
