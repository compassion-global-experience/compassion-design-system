import { css } from '@emotion/core';

export default (theme) => {
  return css`
    padding-right: ${theme.base.paddingRight};
    padding-left: ${theme.base.paddingLeft};
    min-height: ${theme.base.minHeight};
    border: ${theme.base.border};
    background: ${theme.base.background};
    box-shadow: ${theme.base.boxShadow};
    color: ${theme.base.color};
    font-size: ${theme.base.fontSize};
    cursor: ${theme.base.cursor};

    transition: box-shadow 200ms ${theme.base.easing},
      background 200ms ${theme.base.easing}, color 200ms ${theme.base.easing};

    &:hover {
      border-color: ${theme.base.hover.borderColor};
      background: ${theme.base.hover.background};
      box-shadow: ${theme.base.hover.boxShadow};
      color: ${theme.base.hover.color};
    }

    &:active {
      box-shadow: ${theme.base.active.boxShadow};
    }

    &[disabled] {
      color: ${theme.base.disabled.color};
      opacity: ${theme.base.disabled.opacity};
      filter: ${theme.base.disabled.filter};
      cursor: ${theme.base.disabled.cursor};

      &:hover,
      &:active {
        background: ${theme.base.background};
        box-shadow: ${theme.base.boxShadow};
        color: ${theme.base.color};
      }
    }

    &.button--primary {
      background: ${theme.primary.background};
      color: ${theme.primary.color};

      &:hover {
        background: ${theme.primary.hover.background};
      }
    }

    &[disabled] {
      &:hover {
        background: ${theme.primary.background};
        color: ${theme.primary.color};
      }
    }

    &.button--large {
      min-height: ${theme.base.large.minHeight};
      font-size: ${theme.base.large.fontSize};
    }

    &.button--small {
      min-height: ${theme.base.small.minHeight};
      font-size: ${theme.base.small.fontSize};
    }
  `;
};
