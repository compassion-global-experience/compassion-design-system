import React, { useState } from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import { inputStyles } from './Input.styles';

/**
 * Primary UI component for user input
 */
export const Input = ({ type, size, label, validator, ...props }) => {
  // State used for text input fields
  const [value, setValue] = useState('');
  // State used for radio buttons and checkboxes
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const inline = type === 'radio' || type === 'checkbox';

  const handleChange = (e) => {
    setValue(e.target.value);
    setChecked(e.target.checked);
    if (validator) setErrorMessage(validator(e.target.value));
    if (props.onChange) props.onChange();
  };

  return (
    <div
      css={inputStyles}
      className={cx({ inline: inline, error: errorMessage })}
    >
      <label htmlFor={props.id || label}>{label}</label>
      <input
        {...props}
        type={type || 'text'}
        value={value}
        checked={checked}
        className={cx({ [`input--${size}`]: size })}
        name={props.name || label}
        id={props.id || label}
        aria-label={label}
        onChange={handleChange}
      />
      {errorMessage && !inline && <span>{errorMessage}</span>}
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
  ]),
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Descriptive label
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional validation function.
   */
  validator: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  validator: undefined,
};
