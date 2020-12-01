import React, { useState } from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import * as checkboxStyles from './Checkbox.styles';

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({ primary, size, label, ...props }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    if (props.onChange) props.onChange();
  };

  return (
    <form>
      <label css={checkboxStyles.label}>
        Placeholder for checkbox:
        <input
          type="checkbox"
          placeholder={label}
          css={checkboxStyles.checkboxStyles}
          className={cx(
            { 'checkbox--primary': primary },
            { [`checkbox--${size}`]: size }
          )}
          {...props}
          value={value}
          onChange={handleChange}
        ></input>
      </label>
    </form>
  );
};

Checkbox.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the checkbox be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Checkbox contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};
