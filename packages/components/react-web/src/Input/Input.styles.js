import { css } from '@emotion/core';

export const inputStyles = (theme) => {
  return css`
    display: inline-grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-auto-flow: column;
    flex-direction: column;
    align-items: center;

    label {
      cursor: pointer;
    }

    button {
      border: none;
      background: none;
      grid-row: 2;

      &.clear {
        visibility: hidden;
      }
    }

    input {
      padding: ${theme.base.padding};
      min-height: ${theme.base.minHeight};
      outline: ${theme.base.outline};
      border: ${theme.base.border};
      border-color: ${theme.base.borderColor};
      border-radius: ${theme.base.borderRadius};
      font-size: ${theme.base.fontSize};
      font-family: unset;
      cursor: pointer;
      transition: border-color 60ms ${theme.base.easing},
        outline 60ms ${theme.base.easing};

      &:not([type='radio']):not([type='checkbox']) {
        cursor: text;

        :focus {
          outline: ${theme.base.focus.outline};
          outline-offset: 0;
          border-color: ${theme.base.focus.borderColor};
        }

        + label {
          font-size: ${theme.base.label.fontSize};
          order: -1;
        }

        &[disabled] {
          border-color: transparent;
          background: transparent;
          color: ${theme.base.disabled.color};
          cursor: default;
          padding: 0;

          + label {
            cursor: default;
          }
        }
      }

      &[type='edit'] {
        width: 200px;
      }

      &[type='checkbox'],
      &[type='radio'] {
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

        + label {
          position: relative;
          padding-left: 1.33em;
          cursor: pointer;
        }

        &:focus + label {
          outline: ${theme.checkbox.focus.outline};
        }

        + label::before {
          position: absolute;
          top: 0.2em;
          left: 0;
          width: 1em;
          height: 1em;
          border: ${theme.base.border};
          border-color: ${theme.base.borderColor};
          background-image: none;
          background-position: 50%;
          content: '';
          transition: background 100ms ${theme.base.easing},
            background-image 100ms ${theme.base.easing},
            border 100ms ${theme.base.easing};
        }

        &:hover + label::before {
          border-color: ${theme.base.hover.borderColor};
          background: ${theme.base.hover.background};
        }

        &:checked + label::before {
          border-color: ${theme.checkbox.checked.borderColor};
          background: ${theme.checkbox.checked.background};
        }

        &[disabled]:not(:checked) + label::before,
        &[disabled]:not(:checked):hover + label::before {
          border-color: ${theme.base.disabled.borderColor};
          background: ${theme.base.disabled.background};
        }

        &[disabled]:checked + label::before,
        &[disabled]:checked:hover + label::before {
          border-color: ${theme.checkbox.disabled.checked.borderColor};
          background: ${theme.checkbox.disabled.checked.background};
        }

        &[disabled] + label {
          color: ${theme.base.disabled.color};
          cursor: default;
        }
      }

      &[type='radio'] {
        + label::before {
          border-radius: ${theme.radio.borderRadius};
          background-color: ${theme.radio.disabled.backgroundColor};
        }

        &:hover + label::before {
          border-width: ${theme.radio.borderWidth};
          background: #fff;
        }

        &:checked + label::before {
          border-width: ${theme.radio.borderWidth};
          background: #fff;
        }

        &[disabled]:not(:checked) + label::before,
        &[disabled]:checked + label::before,
        &[disabled]:hover:not(:checked) + label::before,
        &[disabled]:hover:checked + label::before {
          background: #fff;
        }
      }

      &[type='checkbox'] {
        + label::before {
          background: ${theme.base.background};
        }

        &:hover + label::before {
          background-image: ${theme.base.hover.backgroundImage};
        }

        &:checked + label::before {
          background-image: ${theme.checkbox.checked.backgroundImage};
        }

        &[disabled]:not(:checked) + label::before,
        &[disabled]:not(:checked):hover + label::before {
          background-image: ${theme.checkbox.disabled.backgroundImage};
        }

        &[disabled]:checked + label::before,
        &[disabled]:checked:hover + label::before {
          background-image: ${theme.checkbox.disabled.checked.backgroundImage};
        }
      }
    }

    &.input-group--error {
      .input-group__error-message {
        padding-top: 4px;
        color: ${theme.base.error.color};
        font-size: ${theme.base.error.fontSize};
      }

      input:not([type='radio']):not([type='checkbox']) {
        border-color: ${theme.base.error.color};

        &:focus {
          outline: ${theme.base.error.outline};
        }
      }
    }

    &.input-group--inline {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      label {
        padding-left: 8px;
        color: black;
      }

      input.input--small {
        min-height: 32px;
      }

      input.input--large {
        min-height: 56px;
      }
    }
  `;
};
