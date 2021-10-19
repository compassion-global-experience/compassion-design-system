import { css } from '@emotion/core';
import { helpers } from '@compassion-gds/elements';

export default (theme, color, withImage) => {
  let textColor;

  if (!withImage) {
    textColor =
      helpers.color.calculateContrastRatio(color, '#000') > 4.5
        ? '#000'
        : '#fff';
  }
  return css`
    --gds-avatar-size: 44px;
    --gds-avatar-background-color: ${color};
    --gds-avatar-text-color: ${textColor || `inherit`};

    display: inline-flex;
    overflow: hidden;
    width: var(--gds-avatar-size);
    height: var(--gds-avatar-size);
    border-radius: 50%;

    background-color: var(--gds-avatar-background-color);
    color: var(--gds-avatar-text-color);

    font-weight: 300;
    font-size: calc(var(--gds-avatar-size) / 2);
    line-height: 1;

    justify-content: center;
    align-items: center;

    &.avatar--medium {
      --gds-avatar-size: 64px;
    }

    &.avatar--large {
      --gds-avatar-size: 88px;
    }

    &.avatar--square {
      border-radius: 0;
    }

    &.avatar--rounded {
      border-radius: 8px;
    }

    &.avatar--image {
      img {
        height: var(--gds-avatar-size);
      }
    }
  `;
};
