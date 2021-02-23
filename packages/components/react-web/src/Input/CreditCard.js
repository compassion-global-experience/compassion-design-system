import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const CreditCard = ({ props, label, inputId }) => {
  return (
    <React.Fragment>
      <label htmlFor={props.id || inputId}>{label}</label>
      <NumberFormat format="#### #### #### ####" mask="_" />
    </React.Fragment>
  );
};

CreditCard.propTypes = {
  close: PropTypes.func.isRequired,
  content: PropTypes.any.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

export default CreditCard;
