import { css } from '@emotion/core';

const tokens = require('@compassion-gds/tokens').component.button;

export default css`
  padding-right: 1em;
  padding-left: 1em;
  min-height: ${tokens.base.minHeight};
  border: ${tokens.base.border};
  background: ${tokens.base.background};
  box-shadow: ${tokens.base.boxShadow};
  color: ${tokens.base.color};
  font-size: ${tokens.base.fontSize};
  font-family: unset;
  cursor: ${tokens.base.cursor};

  transition: box-shadow 200ms ${tokens.base.easing},
    background 200ms ${tokens.base.easing}, color 200ms ${tokens.base.easing};

  &:hover {
    border-color: ${tokens.base.hover.borderColor};
    background: ${tokens.base.hover.background};
    box-shadow: ${tokens.base.hover.boxShadow};
    color: ${tokens.base.hover.color};
  }

  &:active {
    box-shadow: ${tokens.base.active.boxShadow};
  }

  &[disabled] {
    color: ${tokens.base.disabled.color};
    opacity: ${tokens.base.disabled.opacity};
    filter: ${tokens.base.disabled.filter};
    cursor: ${tokens.base.disabled.cursor};

    &:hover,
    &:active {
      background: ${tokens.base.background};
      box-shadow: ${tokens.base.boxShadow};
      color: ${tokens.base.color};
    }
  }

  &.button--primary {
    background: ${tokens.primary.background};
    color: ${tokens.primary.color};

    &:hover {
      background: ${tokens.primary.hover.background};
    }

    &[disabled] {
      &:hover {
        background: ${tokens.primary.background};
        color: ${tokens.primary.color};
      }
    }
  }

  &.button--large {
    min-height: ${tokens.base.large.minHeight};
    font-size: ${tokens.base.large.fontSize};
  }

  &.button--small {
    min-height: ${tokens.base.small.minHeight};
    font-size: ${tokens.base.small.fontSize};
  }
`;
