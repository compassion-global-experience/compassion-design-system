// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import React from 'react';
import PropTypes from 'prop-types';
import iconStyles from '../Icon.styles';

const SvgSpinnerGap = (props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
    className="gds-icon"
    css={iconStyles}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1ZM23 16a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM20.95 20.95a1 1 0 0 1 1.414 0l2.828 2.828a1 1 0 0 1-1.414 1.414l-2.828-2.828a1 1 0 0 1 0-1.414ZM16 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1ZM11.05 20.95a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 0 1-1.414-1.414l2.828-2.828a1 1 0 0 1 1.414 0ZM3 16a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM6.808 6.808a1 1 0 0 1 1.414 0l2.828 2.828a1 1 0 0 1-1.414 1.414L6.808 8.222a1 1 0 0 1 0-1.414Z"
      fill="#000"
    />
  </svg>
);

SvgSpinnerGap.propTypes = {
  /**
   * A CSS fill color.
   */
  fill: PropTypes.string,

  /**
   * Any valid CSS width value.
   */
  width: PropTypes.string,

  /**
   * Any valid CSS height value.
   */
  height: PropTypes.string,
};
SvgSpinnerGap.defaultProps = {
  fill: 'currentColor',
  width: '100%',
  height: '100%',
};
export default SvgSpinnerGap;
