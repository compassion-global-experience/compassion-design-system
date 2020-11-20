import React, { useState } from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import { inputStyles } from './Input.styles';

/**
 * Primary UI component for user input
 */
export const Input = ({ type, size, label, ...props }) => {
  const [value, setValue] = useState('');
  const inline = type === 'radio' || type === 'checkbox';

  const handleChange = (e) => {
    setValue(e.target.value);
    if (props.onChange) props.onChange();
  };

  return (
    <div css={inputStyles} className={cx({ 'inline': inline })}>
      <label htmlFor={props.id || label}>{label}</label>
      <input
        {...props}
        type={type || 'text'}
        value={value}
        className={cx({ [`input--${size}`]: size })}
        name={props.name || label}
        id={props.id || label}
        aria-label={label}
        onChange={handleChange}
      />
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
};

Input.defaultProps = {
  type: 'text',
  size: 'medium',
};
