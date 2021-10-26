// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import React from "react";
import PropTypes from "prop-types";
import iconStyles from "../Icon.styles";

function IconMenu(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill={props.fill}
      className="gds-icon"
      css={iconStyles}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 16a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM4 8a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM4 24a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
      />
    </svg>
  );
}
export default IconMenu;

IconMenu.propTypes = {
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

IconMenu.defaultProps = {
  fill: "currentColor",
  width: "100%",
  height: "100%",
};
