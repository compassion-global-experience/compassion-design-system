import { css, keyframes } from '@emotion/core';

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const modalStyles = css`
  animation: ${fadein} 0.25s;
  background: rgba(50, 50, 50, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const modalContentStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 900px;
  max-width: 900px;
  height: 80%;
  width: 80%;
`;
