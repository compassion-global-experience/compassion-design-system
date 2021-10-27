import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

const ContentModal = (props) => {
  const [symbol, setSymbol] = useState('$');

  const updateSymbol = (e) => {
    setSymbol(e.target.value);
  };

  return (
    <div {...props}>
      {/* eslint-disable-next-line jsx-a11y/no-onchange */}
      <select onChange={updateSymbol}>
        <option label="USD" value="$" selected>
          USD
        </option>
        <option label="EUR" value="€">
          EUR
        </option>
        <option label="JPY" value="¥">
          JPY
        </option>
      </select>
      <NumberFormat thousandSeparator prefix={symbol} placeholder="100" />
    </div>
  );
};

export default ContentModal;
