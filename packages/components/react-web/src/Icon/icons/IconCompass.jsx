// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import React from "react";
import PropTypes from "prop-types";
import iconStyles from "../Icon.styles";

function IconCompass(props) {
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
        d="M22.339 9.646a1 1 0 0 1 .204 1.12l-3.511 7.767a1 1 0 0 1-.518.508l-7.424 3.181a1 1 0 0 1-1.313-1.313l3.182-7.424a1 1 0 0 1 .505-.517l7.754-3.525a1 1 0 0 1 1.12.203Zm-7.695 4.983-2.044 4.77 4.77-2.044 2.256-4.99-4.982 2.264Z"
      />
    </svg>
  );
}
export default IconCompass;

IconCompass.propTypes = {
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

IconCompass.defaultProps = {
  fill: "currentColor",
  width: "100%",
  height: "100%",
};
