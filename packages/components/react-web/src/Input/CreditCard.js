import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const CreditCard = ({ id, label, inputId }) => {
  return (
    <>
      <label htmlFor={id ?? inputId}>{label}</label>
      <NumberFormat format="#### #### #### ####" mask="_" />
    </>
  );
};

CreditCard.propTypes = {
  id: PropTypes.string,
  inputId: PropTypes.string,
  label: PropTypes.string,
};

CreditCard.defaultProps = {
  id: undefined,
  inputId: undefined,
  label: undefined,
};

export default CreditCard;
