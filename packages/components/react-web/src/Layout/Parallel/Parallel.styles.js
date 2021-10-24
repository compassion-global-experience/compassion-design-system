import { css } from '@emotion/react';

export default (theme) => {
  return css`
    --gds-parallel-space: ${theme.space === `0` ? `0px` : theme.space};
    overflow: hidden;

    & > * {
      display: flex;
      flex-wrap: wrap;
      margin: calc(var(--gds-parallel-space) / 2 * -1);
    }

    & > * > * {
      margin: calc(var(--gds-parallel-space) / 2);

      ${theme.sideWidth !== undefined
        ? css`
            flex-basis: ${theme.sideWidth};
          `
        : css``}

      flex-grow: 1;
    }

    &
      > *
      > ${theme.sideLocation === 'left' ? `:last-child` : `:first-of-type`} {
      flex-basis: 0;
      flex-grow: 9999;
      min-width: calc(${theme.mainMinWidth} - var(--gds-parallel-space));
    }
  `;
};
