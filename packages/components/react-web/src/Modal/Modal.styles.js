import { css } from '@emotion/core';

export const modalStyles = css`
  padding-right: 1rem;
  padding-left: 1rem;
  min-height: 44px;
  border: 1px solid #0948aa;
  background: #fff;
  color: #0948aa;
  font-family: unset;
  cursor: pointer;

  &.modal--primary {
    background: #0948aa;
    color: #fff;
  }

  &.modal--large {
    min-height: 64px;
  }

  &.modal--small {
    min-height: 36px;
  }
`;
