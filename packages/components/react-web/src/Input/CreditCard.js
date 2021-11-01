import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const CreditCard = ({ id, label }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <NumberFormat format="#### #### #### ####" mask="_" />
    </>
  );
};

CreditCard.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
};

CreditCard.defaultProps = {
  id: undefined,
  label: undefined,
};

export default CreditCard;
