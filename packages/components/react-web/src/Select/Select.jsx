import React, { useState } from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import * as selectStyles from './Select.styles';

/**
 * Primary UI component for user interaction
 */
export const Select = ({ primary, size, label, ...props }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    if (props.onChange) props.onChange();
  };

  return (
    <form>
      <select
        placeholder={label}
        css={selectStyles.selectStyles}
        className={cx(
          { 'select--primary': primary },
          { [`select--${size}`]: size }
        )}
        {...props}
        value={value}
        onChange={handleChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </form>
  );
};

Select.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the select be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Select contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Select.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};
