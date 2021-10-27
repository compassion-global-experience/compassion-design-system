import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { helpers } from '@compassion-gds/elements';

import { useTheme } from '../hooks';
import selectStyles from './Select.styles';

/**
 * Form elements gather information from users via Inputs, Textareas, Selects,
 * Checkboxes, Radio buttons, and the like.
 *
 * For accessibility purposes, every instance of a form element must be
 * accompanied by a label, even if it’s visually hidden in the interface.
 */
export const Select = ({
  size,
  label,
  validator,
  options,
  onChange,
  defaultValue,
  getOptionKey,
  getOptionLabel,
  placeholder,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectId] = useState(helpers.gdsId());
  const [errorId] = useState(helpers.gdsId());

  const theme = useTheme().component.select;

  const handleChange = useCallback(
    (e) => {
      const selectedOption = options[e.target.value];

      setValue(selectedOption);
      if (validator) setErrorMessage(validator(selectedOption));
      onChange(selectedOption, e);
    },
    [options, onChange, validator]
  );

  return (
    <div className="select-group" css={selectStyles(theme)}>
      <select
        id={props.id || selectId}
        value={options.indexOf(value)}
        name={props.name || label}
        disabled={props.disabled}
        aria-describedby={errorMessage ? errorId : null}
        onChange={handleChange}
        {...props}
      >
        {Boolean(placeholder) && (
          <option value="" hidden>
            {placeholder}
          </option>
        )}
        {options.map((o, i) => (
          <option key={getOptionKey(o, i)} value={i}>
            {getOptionLabel(o, i)}
          </option>
        ))}
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
   * Field label
   */
  label: PropTypes.string.isRequired,

  placeholder: PropTypes.string,
  /**
   * Default or initial value
   */
  defaultValue: PropTypes.shape({}),
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

  // Optional change handler
  onChange: PropTypes.func,

  /**
   * Select options can be any object
   * but we have defaults that work with objects with a `label` key out of the box
   */
  options: PropTypes.arrayOf(PropTypes.object).isRequired,

  /**
   * Optional. A getter that receive an option (from options) and should return unique id for it
   */
  getOptionKey: PropTypes.func,

  /**
   * Optional. An option label getter, the default implementation uses object.label
   */
  getOptionLabel: PropTypes.func,
};

Select.defaultProps = {
  size: 'medium',
  required: false,
  disabled: false,
  validator: undefined,
  onChange: () => {},
  defaultValue: undefined,
  getOptionKey: (option, index) => index,
  getOptionLabel: (option) => option.label,
  placeholder: undefined,
};
