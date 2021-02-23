import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import coverStyles from './Cover.styles';

export const Cover = ({
  centeredSelector,
  minHeight,
  padding,
  space,
  ...props
}) => {
  return (
    <div
      css={coverStyles({ centeredSelector, minHeight, padding, space })}
      className="gds-cover"
    >
      {props.children}
    </div>
  );
};

Cover.propTypes = {
  /** A CSS selector (appended as a child selector) that identifies a descendant of the `Cover` to be centered. Keep it simple! */
  centeredSelector: PropTypes.string,
  /** Any valid CSS height. */
  minHeight: PropTypes.string,
  /** Specifies outer padding and minimum space between `Cover` elements. */
  space: PropTypes.string,
  /** Whether the `Cover` container should have its own padding. */
  padding: PropTypes.bool,
};

Cover.defaultProps = {
  centeredSelector: `.gds-cover__centered`,
  minHeight: `100vh`,
  space: `1.5rem`,
  padding: true,
};
