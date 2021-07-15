import { css } from '@emotion/core';

export default (theme) => {
  return css`
    .gds-menu__dropdown {
      padding: 1rem;
    }

    &:not(:focus-within),
    .gds-menu__trigger[aria-expanded='false'] {
      + .gds-menu__dropdown {
        display: none;
      }
    }
  `;
};
