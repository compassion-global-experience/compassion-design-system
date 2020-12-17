import React, { useState } from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import { inputStyles } from './Input.styles';
import edit from '../assets/edit.svg';

/**
 * Primary UI component for user input
 */
export const Input = ({ type, size, label, disabled, validator, ...props }) => {
  // State used for text input fields
  const [value, setValue] = useState('');
  // State used for radio buttons and checkboxes
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const inline = type === 'radio' || type === 'checkbox';
  const [disable, setDisable] = useState(disabled);

  const handleChange = (e) => {
    setValue(e.target.value);
    setChecked(e.target.checked);
    if (validator) setErrorMessage(validator(e.target.value));
    if (props.onChange) props.onChange();
  };

  const changeInputToDisabled = () => {
    setDisable(!disable);
  };

  const changeInputToEnabled = () => {
    setDisable(!disable);
  };

  return (
    <div css={inputStyles} className={cx({ inline, error: errorMessage })}>
      <label htmlFor={props.id || label}>{label}</label>
      <input
        {...props}
        type={type || 'text'}
        value={value}
        checked={checked}
        disabled={disable}
        className={cx({ [`input--${size}`]: size })}
        name={props.name || label}
        id={props.id || label}
        aria-label={label}
        onChange={handleChange}
        onBlur={changeInputToDisabled}
      />
      {errorMessage && !inline && <span>{errorMessage}</span>}
      {type === 'edit' ? (
        <img src={edit} onClick={changeInputToEnabled} />
      ) : null}
    </div>
  );
};

Input.propTypes = {
  /**
   * Type of input
   */
  type: PropTypes.oneOf([
    'checkbox',
    'email',
    'password',
    'radio',
    'tel',
    'text',
    'edit',
  ]),
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Descriptive label
   */
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  /**
   * Optional validation function.
   */
  validator: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  disabled: false,
  validator: undefined,
};
