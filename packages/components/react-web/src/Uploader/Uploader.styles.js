import { css } from '@emotion/react';

export default (theme) => {
  return css`
    position: relative;
    width: 100%;
    height: ${theme.base.height};
    max-width: 800px;

    &:hover {
      cursor: ${theme.base.cursor};
    }

    & > .file-drop-target {
      color: ${theme.base.color};
      background: ${theme.base.background};
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      outline: ${theme.base.outline};
      outline-offset: -10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: outline-offset 0.15s ${theme.base.easing},
        background 0.15s linear;

      &.file-drop-dragging-over-target {
        outline-offset: -15px;
        background: #f5f5f5;
      }

      & div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    & span {
      font-weight: bold;
    }

    & input[type='file'] {
      display: none;
      visibility: hidden;
    }

    & svg {
      width: 50px;
      height: 50px;
    }
  `;
};
