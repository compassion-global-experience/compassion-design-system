import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import { useTheme } from 'emotion-theming';
import gridStyles from './Grid.styles';

/**
 * Flexible layout component.
 */
export const Grid = ({
  direction,
  gap,
  cellMinWidth,
  cellGrowth,
  justifyContent,
  alignContent,
  ...props
}) => {
  const theme = useTheme().component.grid;
  const instanceOverrides = {
    direction,
    cellMinWidth,
    cellGrowth,
    justifyContent,
    alignContent,
  };
  instanceOverrides.cellCount = props.children ? props.children.length : 0;
  return (
    <div
      css={gridStyles(theme, instanceOverrides)}
      className={cx(
        { 'gds-grid': true },
        {
          'gds-grid--wide': gap === 'wide',
        },
        { 'gds-grid--condensed': gap === 'condensed' },
        { [`gds-grid--${cellGrowth}`]: cellGrowth !== 'none' }
      )}
    >
      {props.children}
    </div>
  );
};

Grid.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  /** Descriptor of the space between columns and rows. */
  gap: PropTypes.oneOf(['wide', 'narrow', 'condensed']),
  /** Default cell width; may be any valid CSS length. Can be overridden within a `Cell` component or via CSS. */
  cellMinWidth: PropTypes.string,
  cellGrowth: PropTypes.oneOf(['auto-fit', 'auto-fill', 'none']),
  /** This property only affects the component if the Grid doesn't fill its container. */
  justifyContent: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'stretch',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
  /** This property only affects the component if the Grid doesn't fill its container. */
  alignContent: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'stretch',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
};

Grid.defaultProps = {
  direction: 'row',
  gap: 'narrow',
  cellMinWidth: '0',
  cellGrowth: 'auto-fit',
  justifyContent: 'start',
  alignContent: 'start',
};
