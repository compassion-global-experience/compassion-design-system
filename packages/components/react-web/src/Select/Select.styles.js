import { css } from '@emotion/core';

export default (theme) => {
  return css`
    padding-right: 1rem;
    padding-left: 1rem;
    min-height: 44px;
    border: 1px solid #0948aa;
    background: #fff;
    color: #0948aa;
    font-family: unset;
    cursor: pointer;

    &.select--primary {
      background: #0948aa;
      color: #fff;
    }

    &.select--large {
      min-height: 64px;
    }

    &.select--small {
      min-height: 36px;
    }
  `;
};
