import { css } from '@emotion/react';

export default (theme) => {
  const useObjectPosition = theme.objectPosition !== `center`;

  return css`
    --gds-frame-numerator: ${theme.numerator};
    --gds-frame-denominator: ${theme.denominator};

    ${useObjectPosition
      ? css`
          --gds-frame-object-position: ${theme.objectPosition};
        `
      : css``}

    position: relative;
    padding-bottom: calc(
      var(--gds-frame-numerator) / var(--gds-frame-denominator) * 100%
    );

    & > * {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      overflow: hidden;
      justify-content: center;
      align-items: center;
    }

    & > img,
    & > video {
      width: 100%;
      height: 100%;
      object-fit: cover;

      ${useObjectPosition
        ? css`
            object-position: var(--gds-frame-object-position);
          `
        : ``}
    }
  `;
};
