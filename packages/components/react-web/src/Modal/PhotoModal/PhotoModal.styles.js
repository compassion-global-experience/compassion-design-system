import { css } from '@emotion/core';

export const photoModal = css`
  display: flex;
  flex-direction: column;
  max-height: 90%;
  position: relative;

  & > button {
    background: rgba(0, 0, 0, 0.7) no-repeat center / 70%
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 50 50'%3E%3Cpath d='M 10,10 L 30,30 M 30,10 L 10,30' stroke='%23fff' stroke-linecap='round' stroke-width='7'%3E%3C/path%3E%3C/svg%3E");
    border-radius: 50%;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.9));
    position: absolute;
    right: 12px;
    top: 12px;
    height: 50px;
    width: 50px;
  }
`;

export const photo = css`
  box-shadow: 0 15px 10px -12px rgba(0, 0, 0, 0.5);
  height: 150px;
  object-fit: cover;
`;
