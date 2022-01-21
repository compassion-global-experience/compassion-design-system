// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import React from 'react';
import PropTypes from 'prop-types';
import iconStyles from '../Icon.styles';

const SvgUser = (props) => (
  <svg
    width="1em"
    height="1em"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="gds-icon"
    css={iconStyles}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-9 7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
      fill={props.fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 21a13.005 13.005 0 0 0-11.26 6.5 1 1 0 0 1-1.732-1.001 15.005 15.005 0 0 1 25.984 0 1 1 0 0 1-1.731 1A13.004 13.004 0 0 0 16 21Z"
      fill={props.fill}
    />
  </svg>
);

SvgUser.propTypes = {
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
SvgUser.defaultProps = {
  fill: 'currentColor',
  width: '100%',
  height: '100%',
};
export default SvgUser;
