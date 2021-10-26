import { css } from '@emotion/react';

export const confirmModal = css`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  overflow: auto;
`;

export const actions = css`
  margin-top: 32px;
  text-align: right;

  & > button {
    padding: 10px 16px;
    border-radius: 8px;
    font-weight: 500;
    background-color: transparent;
    margin-right: 16px;

    div[data-type='proceed'] &:last-of-type {
      background-color: #005eb8;
      color: #fff;
    }

    div[data-type='warning'] &:last-of-type {
      background-color: #e34949;
      color: #fff;
    }
  }
`;
