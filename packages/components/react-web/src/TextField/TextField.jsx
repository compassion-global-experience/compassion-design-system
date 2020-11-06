import React, { useState } from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import { textFieldStyles } from './TextField.styles';

/**
 * Primary UI component for user *text* input
 */
export const TextField = ({ type, size, label, ...props }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    if (props.onChange) props.onChange();
  };

  return (
    <input
      {...props}
      type={type || 'text'}
      value={value}
      css={textFieldStyles}
      className={cx({ [`textField--${size}`]: size })}
      name={props.name || label}
      placeholder={label}
      aria-label={label}
      onChange={handleChange}
    />
  );
};

TextField.propTypes = {
  /**
   * Type of input
   */
  type: PropTypes.oneOf(['text', 'email', 'password']),
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['small', 'medium']),
  /**
   * Input placeholder text
   */
  label: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  type: 'text',
  size: 'medium',
};
