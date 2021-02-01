import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { inputStyles } from './Input.styles';

const ContentModal = ({ close, content, isDisplayed, title }) => {
  const [symbol, setSymbol] = useState('$');

  const updateSymbol = (e) => {
    setSymbol(e.target.value);
  };

  return (
    <div>
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

ContentModal.propTypes = {
  close: PropTypes.func.isRequired,
  content: PropTypes.any.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

export default ContentModal;
