import { css } from '@emotion/react';

export default (theme) => {
  return css`
    --gds-reel-height: ${theme.height};
    --gds-reel-item-width: ${theme.itemWidth};
    --gds-reel-space: ${theme.space};
    --gds-reel-track-color: ${theme.trackColor};
    --gds-reel-thumb-color: ${theme.thumbColor};

    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    height: var(--gds-reel-height);

    ${!theme.hideScrollbar
      ? css`
          scrollbar-color: var(--gds-reel-thumb-color)
            var(--gds-reel-track-color);

          &::-webkit-scrollbar {
            height: 1rem;
          }

          &::-webkit-scrollbar-track {
            background-color: var(--gds-reel-track-color);
          }

          &::-webkit-scrollbar-thumb {
            background-color: var(--gds-reel-track-color);
            background-image: linear-gradient(
              var(--gds-reel-track-color) 0,
              var(--gds-reel-track-color) 0.125rem,
              var(--gds-reel-thumb-color) 0.125rem,
              var(--gds-reel-thumb-color) 0.875rem,
              var(--gds-reel-track-color) 0.875rem
            );
          }
        `
      : css`
          &::-webkit-scrollbar,
          &::-webkit-scrollbar-track,
          &::-webkit-scrollbar-thumb {
            display: none;
            visibility: hidden;
          }
        `}

    & > * {
      flex: 0 0 var(--gds-reel-item-width);
    }

    & > img {
      width: auto;
      height: 100%;
      flex-basis: auto;
    }

    & > * + * {
      margin-left: var(--gds-reel-space);
    }

    &.gds-reel--overflowing {
      padding-bottom: var(--gds-reel-space);
    }
  `;
};
