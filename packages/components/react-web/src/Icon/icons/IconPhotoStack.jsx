// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// DO NOT MODIFY THIS FILE; IT WAS GENERATED BY buildIconComponents.mjs.
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import React from "react";
import PropTypes from "prop-types";
import iconStyles from "../Icon.styles";

function IconPhotoStack(props) {
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
        d="M7.65 5a1.76 1.76 0 0 0-1.76 1.76V22.6c0 .972.788 1.76 1.76 1.76h19.36a1.76 1.76 0 0 0 1.76-1.76V6.76A1.76 1.76 0 0 0 27.01 5H7.65Zm0 14.445V22.6h19.36v-1.396l-4.4-4.4-2.275 2.276a1.761 1.761 0 0 1-2.49 0l-4.915-4.915-5.28 5.28Zm19.36-.73-3.155-3.155a1.758 1.758 0 0 0-2.49 0l-2.275 2.275-4.915-4.915a1.757 1.757 0 0 0-2.49 0L7.65 16.956V6.76h19.36v11.955Zm-6.6-5.795a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64ZM3.25 9.4c0-.972.788-1.76 1.76-1.76v17.6h21.12A1.76 1.76 0 0 1 24.37 27H5.01a1.76 1.76 0 0 1-1.76-1.76V9.4Z"
      />
    </svg>
  );
}
export default IconPhotoStack;

IconPhotoStack.propTypes = {
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

IconPhotoStack.defaultProps = {
  fill: "currentColor",
  width: "100%",
  height: "100%",
};
