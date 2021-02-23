import { css } from '@emotion/core';

export default (theme) => {
  const limit = theme.horizontalLimit ? theme.horizontalLimit + 1 : 9999;

  return css`
    --gds-switcher-space: ${theme.space === `0` ? `0px` : theme.space};
    --gds-switcher-threshold: ${theme.threshold};

    & > * {
      display: flex;
      flex-wrap: wrap;
      margin: calc((var(--gds-switcher-space) / 2) * -1);
    }

    & > * > * {
      flex-grow: 1;
      flex-basis: calc(
        (var(--gds-switcher-threshold) - (100% - var(--gds-switcher-space))) *
          9999
      );
      margin: calc(var(--gds-switcher-space) / 2);
    }

    & > * > :nth-last-of-type(n + ${limit}),
    & > * > :nth-last-of-type(n + ${limit}) ~ * {
      flex-basis: 100%;
    }
  `;
};
