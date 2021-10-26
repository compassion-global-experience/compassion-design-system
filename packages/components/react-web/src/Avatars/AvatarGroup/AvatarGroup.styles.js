import { css } from '@emotion/react';

export default (theme, gapColor) => {
  return css`
    display: flex;

    .avatar {
      --gds-avatar-size: 44px;
      --gds-avatar-group-overlap: calc(var(--gds-avatar-size) / -3);

      box-sizing: content-box;
      border: 4px ${gapColor} solid;

      &:not(:first-of-type) {
        margin-left: var(--gds-avatar-group-overlap);
      }
    }

    &.avatar-group--medium {
      .avatar {
        --gds-avatar-size: 64px;
      }
    }

    &.avatar-group--large {
      .avatar {
        --gds-avatar-size: 88px;
      }
    }

    &.avatar-group--square {
      .avatar {
        border-radius: 0;
      }
    }

    &.avatar-group--rounded {
      .avatar {
        border-radius: 8px;
      }
    }

    &.avatar-group--overlap {
      &-none .avatar {
        --gds-avatar-group-overlap: calc(var(--gds-avatar-size) / 8);
        box-sizing: border-box;
        border: none;
      }

      &-medium .avatar {
        --gds-avatar-group-overlap: calc(var(--gds-avatar-size) / -2);
      }

      &-large .avatar {
        --gds-avatar-group-overlap: calc(var(--gds-avatar-size) / -1.5);
        border-width: 3px;
      }
    }
  `;
};
