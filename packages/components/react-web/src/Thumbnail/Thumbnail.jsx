import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from "../hooks";
import { thumbnailStyles } from './Thumbnail.styles';

/**
 * Primary UI component for user Image
 */
export const Thumbnail = ({ data, onChange, ...props  }) => {
  const [selected, setSelected] = useState(data[0]);

  const theme = useTheme();

  const handleSelect = useCallback(newImg => {
    onChange(newImg);
    setSelected(newImg);
  }, []);

  return (
    <div css={thumbnailStyles(theme.component.input)} {...props}>
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
    /**
   * Array of image records that would be used as thumbnails
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({ 
      id: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
      img: PropTypes.string, 
      title: PropTypes.string, 
    })
  ),
  onChange: PropTypes.func,
};

Thumbnail.defaultProps = {
  data: [],
  onChange: undefined,
};
