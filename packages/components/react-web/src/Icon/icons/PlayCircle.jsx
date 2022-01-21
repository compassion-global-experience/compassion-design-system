// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import React from 'react';
import PropTypes from 'prop-types';
import iconStyles from '../Icon.styles';

const SvgPlayCircle = (props) => (
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
      d="M16 5C9.925 5 5 9.925 5 16s4.925 11 11 11 11-4.925 11-11S22.075 5 16 5ZM3 16C3 8.82 8.82 3 16 3s13 5.82 13 13-5.82 13-13 13S3 23.18 3 16Z"
      fill={props.fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.528 11.118a1 1 0 0 1 1.027.05l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 13 20v-8a1 1 0 0 1 .528-.882ZM15 13.868v4.263L18.197 16 15 13.868Z"
      fill={props.fill}
    />
  </svg>
);

SvgPlayCircle.propTypes = {
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
SvgPlayCircle.defaultProps = {
  fill: 'currentColor',
  width: '100%',
  height: '100%',
};
export default SvgPlayCircle;