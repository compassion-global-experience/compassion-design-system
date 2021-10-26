// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import React from "react";
import PropTypes from "prop-types";
import iconStyles from "../Icon.styles";

function IconPlusCircle(props) {
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
        d="M16 5C9.925 5 5 9.925 5 16s4.925 11 11 11 11-4.925 11-11S22.075 5 16 5ZM3 16C3 8.82 8.82 3 16 3s13 5.82 13 13-5.82 13-13 13S3 23.18 3 16Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 16a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 10a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
}
export default IconPlusCircle;

IconPlusCircle.propTypes = {
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

IconPlusCircle.defaultProps = {
  fill: "currentColor",
  width: "100%",
  height: "100%",
};
