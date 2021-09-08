import { css } from '@emotion/core';

export default (theme) => {
  return css`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;

    .gds-list {
      position: absolute;
      top: 100%;
    }

    &[class*='gds-menu--open-toward'] {
      .gds-list {
        top: unset;
      }
    }

    &.gds-menu--open-toward-left {
      .gds-list {
        right: 100%;
      }
    }

    &.gds-menu--open-toward-right {
      .gds-list {
        left: 100%;
      }
    }

    &.gds-menu--open-toward-top {
      .gds-list {
        bottom: 100%;
      }
    }

    &:not(:focus-within),
    .gds-menu__trigger[aria-expanded='false'] {
      + .gds-list {
        display: none;
      }
    }
  `;
};
