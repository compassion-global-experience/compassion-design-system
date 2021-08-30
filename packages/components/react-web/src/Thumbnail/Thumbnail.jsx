import { useState } from 'react';
import PropTypes from 'prop-types';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from "../hooks";
import { thumbnailStyles } from './Thumbnail.styles';

/**
 * Primary UI component for user Image
 */
export const Thumbnail = ({ type, size, label, validator, data, ...props  }) => {
  const [selected, setSelected] = useState(data[0].img);
  console.log('selected =', selected);

  const theme = useTheme();

  return (
    <div css={thumbnailStyles(theme.component.input)}>
      {selected ? <img src={selected} alt={selected.title} /> : null}
      {data.map((obj) =>
        selected === obj.img ? null : (
          <div key={obj.id}>
            <button type="button" onClick={() => setSelected(obj.img)}>
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
