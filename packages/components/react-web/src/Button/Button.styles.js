import { css } from '@emotion/core';

const tokens = require('@compassion-gds/tokens').component.button;

console.dir(tokens);

export default css`
  padding-right: 1em;
  padding-left: 1em;
  min-height: ${tokens.base.minHeight};
  border: ${tokens.base.border};
  background: ${tokens.base.background};
  color: ${tokens.base.color};
  font-family: unset;
  cursor: ${tokens.base.cursor};

  &:hover {
    border-color: ${tokens.base.hover.borderColor};
    background: ${tokens.base.hover.background};
    color: ${tokens.base.hover.color};
  }

  &.button--primary {
    background: ${tokens.primary.background};
    color: ${tokens.primary.color};

    &:hover {
      background: ${tokens.primary.hover.background};
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
