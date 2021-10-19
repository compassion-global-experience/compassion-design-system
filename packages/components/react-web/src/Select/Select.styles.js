import { css } from '@emotion/core';

export default (theme) => {
  return css`
    display: inline-flex;
    flex-direction: column-reverse;

    select {
      align-self: flex-start;
      padding-right: 1rem;
      padding-left: 1rem;
      min-height: 44px;
      border: 2px solid #777;
      background: #fff;
      font-family: unset;
      cursor: pointer;

      &:focus,
      &:active {
        border: 2px solid #0948aa;
      }

      &[disabled] {
        border: 1px solid #efefef;
        cursor: default;
        pointer-events: none;
      }
    }
  `;
};
