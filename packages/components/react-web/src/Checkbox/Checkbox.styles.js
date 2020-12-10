import { css } from '@emotion/core';

export default (theme) => {
  return css`
    display: block;

    input {
      position: absolute;
      overflow: hidden;
      clip: rect(0 0 0 0);
      margin: -1px;
      padding: 0;
      width: 1px;
      height: 1px;
      border: 0;
      white-space: nowrap;
      clip-path: inset(50%);

      cursor: pointer;

      &:focus + label {
        outline: ${theme.base.focus.outline};
        outline-offset: 2px;
      }

      + label::before {
        position: absolute;
        top: 0.1em;
        left: 0;
        width: 1em;
        height: 1em;
        border: ${theme.base.border};
        border-color: ${theme.base.borderColor};
        background: ${theme.base.background};
        background-image: none;
        background-position: 50%;
        content: '';
        transition: background 100ms ${theme.base.easing},
          background-image 100ms ${theme.base.easing},
          border-color 100ms ${theme.base.easing};
      }

      &:hover + label::before {
        border-color: ${theme.base.hover.borderColor};
        background: ${theme.base.hover.background};
        background-image: ${theme.base.hover.backgroundImage};
      }

      &:checked + label::before {
        border-color: ${theme.base.checked.borderColor};
        background: ${theme.base.checked.background};
        background-image: ${theme.base.checked.backgroundImage};
      }

      &[disabled]:not(:checked) + label::before,
      &[disabled]:not(:checked):hover + label::before {
        border-color: ${theme.base.disabled.borderColor};
        background: ${theme.base.disabled.background};
        background-image: ${theme.base.disabled.backgroundImage};
      }

      &[disabled]:checked + label::before,
      &[disabled]:checked:hover + label::before {
        border-color: ${theme.base.disabled.checked.borderColor};
        background: ${theme.base.disabled.checked.background};
        background-image: ${theme.base.disabled.checked.backgroundImage};
      }

      &[disabled] + label {
        color: ${theme.base.disabled.color};
        cursor: default;
      }
    }

    label {
      position: relative;
      padding-left: 1.33em;
      cursor: pointer;
    }
  `;
};
