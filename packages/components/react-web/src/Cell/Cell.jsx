import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import { useTheme } from 'emotion-theming';
import cellStyles from './Cell.styles';

/**
 * Primary layout unit.
 */
export const Cell = ({ ...props }) => {
  const theme = useTheme().component.grid;
  return (
    <div css={cellStyles(theme)} className="gds-grid__cell">
      {props.children}
    </div>
  );
};

Cell.propTypes = {};

Cell.defaultProps = {};
