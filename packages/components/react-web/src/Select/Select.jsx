import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { helpers } from '@compassion-gds/elements';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import { useTheme } from '../hooks';
import selectStyles from './Select.styles';

/**
 * Form elements gather information from users via Inputs, Textareas, Selects,
 * Checkboxes, Radio buttons, and the like.
 *
 * For accessibility purposes, every instance of a form element must be
 * accompanied by a label, even if it’s visually hidden in the interface.
 */
export const Select = ({ size, label, validator, ...props }) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectId] = useState(helpers.gdsId());
  const [errorId] = useState(helpers.gdsId());

  const theme = useTheme().component.select;

  const handleChange = (e) => {
    setValue(e.target.value);
    if (validator) setErrorMessage(validator(e.target.value));
    if (props.onChange) props.onChange();
  };

  return (
    <div className="select-group" css={selectStyles(theme)}>
      <select
        id={props.id || selectId}
        value={value}
        name={props.name || label}
        disabled={props.disabled}
        aria-describedby={errorMessage ? errorId : null}
        onChange={handleChange}
        {...props}
      >
        {props.children}
      </select>
      <label htmlFor={props.id || selectId}>{label}</label>
    </div>
  );
};

Select.propTypes = {
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
  /**
   * Optional validation function.
   */
  validator: PropTypes.func,
  /**
   * Optional; if not supplied, one will be generated to link the label and select.
   */
  // Disabling require-default-props because a default is generated within the component.
  // eslint-disable-next-line react/require-default-props
  id: PropTypes.string,
  required: PropTypes.bool,
  /**
   * Is the Select disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Optional; if not supplied, the `name` attribute will be set to the same value as the label.
   */
  // Disabling require-default-props because a default name is assigned within the component if one isn't provided
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
};

Select.defaultProps = {
  size: 'medium',
  onClick: undefined,
  required: false,
  disabled: false,
  validator: undefined,
};
