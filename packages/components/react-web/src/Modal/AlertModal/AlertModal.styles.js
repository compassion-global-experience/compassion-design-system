import { css } from '@emotion/core';

export const alertModal = css`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  overflow: auto;
`;

export const close = css`
  margin-top: 32px;
  text-align: right;

  & > button {
    background-color: #005eb8;
    border-radius: 8px;
    color: #fff;
    font-weight: 500;
    padding: 10px 16px;
  }
`;
