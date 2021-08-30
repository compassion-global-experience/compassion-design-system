import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from "../hooks";
import { thumbnailStyles } from './Thumbnail.styles';

/**
 * Primary UI component for user Image
 */
export const Thumbnail = ({ type, size, label, validator, data, onChange, ...props  }) => {
  const [selected, setSelected] = useState(data[0]);

  const theme = useTheme();

  const handleSelect = useCallback(newImg => {
    onChange(newImg);
    setSelected(newImg);
  }, []);

  return (
    <div css={thumbnailStyles(theme.component.input)}>
      {selected && <img src={selected.img} alt={selected.title} />}
      {data.map((obj) =>
        selected.id === obj.id ? null : (
          <div key={obj.id}>
            <button type="button" onClick={() => handleSelect(obj)}>
              <img src={obj.img} alt={obj.title} />
            </button>
          </div>
        )
      )}
    </div>
  );
};

Thumbnail.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ 
      id: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
      img: PropTypes.string, 
      title: PropTypes.string, 
    })
  ),
  /**
   * Type of Image
   */
  type: PropTypes.oneOf(['preview']),
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
  /**
   * Optional; if not supplied, one will be generated to link the label and input.
   */
  // Disabling require-default-props because a default is generated within the component.
  // eslint-disable-next-line react/require-default-props
  id: PropTypes.string,
  required: PropTypes.bool,
  /**
   * Is the Input disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Optional; if not supplied, the `name` attribute will be set to the same value as the label.
   */
  // Disabling require-default-props because a default name is assigned within the component if one isn't provided
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
  onChange: PropTypes.func,
};

Thumbnail.defaultProps = {
  data: [],
  type: 'text',
  size: 'medium',
  validator: undefined,
  required: false,
  disabled: false,
  onChange: undefined,
};
