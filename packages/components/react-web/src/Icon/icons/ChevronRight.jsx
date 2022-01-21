// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import React from 'react';
import PropTypes from 'prop-types';
import iconStyles from '../Icon.styles';

const SvgChevronRight = (props) => (
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
      d="M11.293 5.293a1 1 0 0 1 1.414 0l10 10a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414-1.414L20.586 16l-9.293-9.293a1 1 0 0 1 0-1.414Z"
      fill={props.fill}
    />
  </svg>
);

SvgChevronRight.propTypes = {
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
SvgChevronRight.defaultProps = {
  fill: 'currentColor',
  width: '100%',
  height: '100%',
};
export default SvgChevronRight;
