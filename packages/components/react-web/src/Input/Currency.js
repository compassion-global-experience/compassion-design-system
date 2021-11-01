import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const ContentModal = ({ options, value, handleChange, ...props }) => {
  const [symbol, setSymbol] = useState(value);

  const updateSymbol = (e) => {
    setSymbol(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <div>
      <select onChange={updateSymbol}>
        {options.map((o, idx) => (
          <option label={o.label} value={o.value} key={o.value} selected={!idx}>
            {o.label}
          </option>
        ))}
      </select>
      <NumberFormat thousandSeparator prefix={symbol} placeholder="100" />
    </div>
  );
};

ContentModal.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

ContentModal.defaultProps = {
  value: '$',
  options: [],
};

export default ContentModal;
