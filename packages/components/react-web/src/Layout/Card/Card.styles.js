import { css } from '@emotion/react';
import { typography, color, space } from '@compassion-gds/elements';

// WIP
// const imagePositionPartial = (imagePosition) => {
//   if (imagePosition !== 'top') {
//     if (imagePosition === 'right') {
//       return css`
//         flex-direction: row-reverse;
//       `;
//     } else {
//       return css`
//         flex-direction: row;
//       `;
//     }
//   }
// };

const paddingPartial = (padding) => {
  let paddingVal = 0;

  if (padding === `sm`) {
    paddingVal = `${space.plus1} ${space.plus4}`;
  } else if (padding === `md`) {
    paddingVal = `${space.plus2} ${space.plus6}`;
  } else if (padding === `lg`) {
    paddingVal = `${space.plus3} ${space.plus8}`;
  }

  return css`
    --gds-card-padding: ${paddingVal};
    padding: var(--gds-card-padding);
  `;
};

const borderPartial = (isClickable, border, hasImage, imagePosition) => {
  const zeroBorderProp = `border-${imagePosition}`;

  return border
    ? css`
        border: 1px solid ${color.gray.plus4};
      `
    : css``;
};

export default (theme) => {
  let backgroundColor;

  if (
    theme.backgroundColor === 'transparent' ||
    theme.backgroundColor === 'white'
  ) {
    backgroundColor = color[theme.backgroundColor];
  } else {
    backgroundColor = color.gray.plus4;
  }

  return css`
    --gds-stack-space: 0;

    background-color: ${backgroundColor};

    cursor: ${theme.isClickable ? `pointer` : `unset`};

    &.gds-card--anchor {
      display: inline-block;
      color: black;
      text-decoration: none;
    }

    &.gds-card--button {
      padding: 0;
      outline: 0;
      border: none;
      text-align: unset;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${color.primary.main};
      font-weight: bold;
      font-size: ${typography.fontSizes.base};
    }

    p,
    .gds-card__text {
      font-size: ${typography.fontSizes.minus1};
    }

    .gds-card__body {
      ${paddingPartial(theme.padding)};
      ${borderPartial(
        theme.isClickable,
        theme.border,
        theme.hasImage,
        theme.imagePosition
      )};
    }

    .gds-card__image {
      order: -1;

      > img {
        /* width: 100%;
        height: 100%; */
        object-fit: cover;
      }
    }

    & * {
      color: inherit;
    }
  `;
};
