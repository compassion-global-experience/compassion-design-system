// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import React from "react";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import iconStyles from "../Icon.styles";

function IconZoomOut(props) {
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
        d="M9.5 14.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zM3 14.5C3 8.148 8.149 3 14.5 3S26 8.148 26 14.5C26 20.85 20.851 26 14.5 26S3 20.85 3 14.5z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.217 21.218a1 1 0 0 1 1.414 0l6.075 6.075a1 1 0 0 1-1.414 1.414l-6.075-6.075a1 1 0 0 1 0-1.414z"
      />
    </svg>
  );
}
export default IconZoomOut;

IconZoomOut.propTypes = {
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

IconZoomOut.defaultProps = {
  fill: "currentColor",
  width: "100%",
  height: "100%",
};
