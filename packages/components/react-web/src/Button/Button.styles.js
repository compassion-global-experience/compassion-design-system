import { css } from '@emotion/react';

export default (theme) => {
  return css`
    padding-right: ${theme.base.paddingRight};
    padding-left: ${theme.base.paddingLeft};
    min-height: ${theme.base.minHeight};
    border-width: ${theme.base.borderWidth};
    border-style: ${theme.base.borderStyle};
    border-color: ${theme.base.borderColor};
    background: ${theme.base.background};
    color: ${theme.base.color};
    font-size: ${theme.base.fontSize};
    cursor: ${theme.base.cursor};

    transition: box-shadow 200ms ${theme.base.easing},
      background 200ms ${theme.base.easing}, color 200ms ${theme.base.easing};

    &:hover {
      background: ${theme.base.hover.background};
      box-shadow: ${theme.base.hover.boxShadow};
    }

    &:active {
      box-shadow: ${theme.base.active.boxShadow};
      color: ${theme.base.active.color};
    }

    &[disabled] {
      border-color: ${theme.base.disabled.borderColor};
      color: ${theme.base.disabled.color};
      cursor: ${theme.base.disabled.cursor};
    }

    &.button--primary {
      background: ${theme.primary.background};
      color: ${theme.primary.color};

      &:hover {
        background: ${theme.primary.hover.background};
      }

      &[disabled] {
        border-color: ${theme.primary.disabled.borderColor};
        background: ${theme.primary.disabled.background};
        color: ${theme.primary.disabled.color};
      }
    }

    &.button--link {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
    }

    &.button--large {
      min-height: ${theme.base.large.minHeight};
      font-size: ${theme.base.large.fontSize};
    }

    &.button--small {
      padding-right: ${theme.base.small.paddingRight};
      padding-left: ${theme.base.small.paddingLeft};
      min-height: ${theme.base.small.minHeight};
      font-size: ${theme.base.small.fontSize};
    }
  `;
};
