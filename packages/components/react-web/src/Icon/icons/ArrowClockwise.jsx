// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import React from 'react';
import PropTypes from 'prop-types';
import iconStyles from '../Icon.styles';

const SvgArrowClockwise = (props) => (
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
      d="M28.021 5.464a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 1-1Z"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.95 6.192a10 10 0 1 0 5.121 16.88 1 1 0 1 1 1.414 1.413 12 12 0 1 1 0-16.97l4.243 4.242a1 1 0 0 1-1.414 1.415L23.07 8.929a10 10 0 0 0-5.12-2.737Z"
      fill="#000"
    />
  </svg>
);

SvgArrowClockwise.propTypes = {
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
SvgArrowClockwise.defaultProps = {
  fill: 'currentColor',
  width: '100%',
  height: '100%',
};
export default SvgArrowClockwise;
