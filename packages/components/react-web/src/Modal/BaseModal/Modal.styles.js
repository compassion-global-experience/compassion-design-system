import { css, keyframes } from '@emotion/react';

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const modalStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: rgba(50, 50, 50, 0.95);
  animation: ${fadein} 0.25s;
  align-items: center;
  justify-content: center;
`;

export const modalContentStyles = css`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  max-height: 900px;
  width: 80%;
  height: 80%;
  align-items: center;
  justify-content: center;
`;
