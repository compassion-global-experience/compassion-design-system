import { css } from '@emotion/core';

export default (theme, instanceOverrides) => {
  const trackCount =
    instanceOverrides.cellGrowth === 'none'
      ? instanceOverrides.cellCount
      : instanceOverrides.cellGrowth;

  const trackWidth =
    instanceOverrides.cellGrowth === 'none'
      ? instanceOverrides.cellMinWidth
      : `minmax(${instanceOverrides.cellMinWidth}, 1fr)`;

  const repeatString = `repeat(${trackCount}, ${trackWidth})`;

  const gridTemplateProperty =
    instanceOverrides.direction === 'column'
      ? css`
          grid-template-rows: ${repeatString};
        `
      : css`
          grid-template-columns: ${repeatString};
        `;

  return css`
    display: grid;
    grid-gap: ${theme.base.gridGap};
    justify-content: ${instanceOverrides.justifyContent};
    align-content: ${instanceOverrides.alignContent};
    ${gridTemplateProperty};

    &.gds-grid--wide {
      grid-gap: ${theme.wide.gridGap};
    }

    &.gds-grid--condensed {
      grid-gap: ${theme.condensed.gridGap};
    }
  `;
};
