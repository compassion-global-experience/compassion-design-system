import { css } from '@emotion/core';

export const headerStyles = css`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: 1fr;
  justify-content: space-between;

  .header__mark {
    height: var(--header-height);
  }
`;
