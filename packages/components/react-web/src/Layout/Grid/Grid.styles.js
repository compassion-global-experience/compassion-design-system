import { css } from '@emotion/react';

export default (theme) => {
  return css`
    --gds-grid-min-width: ${theme.minWidth};
    --gds-grid-space: ${theme.space};

    display: grid;
    grid-gap: var(--gds-grid-space);

    @supports (width: min(var(--gds-grid-min-width), 100%)) {
      & {
        grid-template-columns: repeat(
          auto-fit,
          minmax(min(var(--gds-grid-min-width), 100%), 1fr)
        );
      }
    }
  `;
};
