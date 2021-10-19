// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import React from "react";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import iconStyles from "../Icon.styles";

function IconChatText(props) {
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
        d="M3.586 4.586A2 2 0 0 1 5 4h22a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H10.385l-.129.047-3.969 3.337A2 2 0 0 1 3 25.853V6a2 2 0 0 1 .586-1.414zM27 6H5v19.853l4.105-3.45a1 1 0 0 1 .3-.175l.461-.168a1 1 0 0 1 .343-.06H27V6z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 12a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1zM11 16a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1z"
      />
    </svg>
  );
}
export default IconChatText;

IconChatText.propTypes = {
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

IconChatText.defaultProps = {
  fill: "currentColor",
  width: "100%",
  height: "100%",
};
