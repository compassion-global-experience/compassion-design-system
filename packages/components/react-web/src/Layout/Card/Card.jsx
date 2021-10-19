import PropTypes from 'prop-types';
import React from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';

import { Frame } from '../Frame';
import { Stack } from '../Stack';

import cardStyles from './Card.styles';

export const Card = ({
  renderAs,
  href,
  onClick,
  padding,
  asListItem,
  image,
  imageRatio,
  imagePosition,
  border,
  backgroundColor,
  ...props
}) => {
  const El =
    renderAs === `anchor` ? `a` : renderAs === `button` ? `button` : `div`;
  const NestedEl = image ? Stack : React.Fragment;

  const hasImage = image !== undefined && image !== null;
  const isClickable = renderAs === `anchor` || renderAs === `button`;

  return (
    <El
      css={cardStyles({
        isClickable,
        padding,
        border,
        hasImage,
        imagePosition,
        backgroundColor,
      })}
      className={cx({
        ['gds-card']: true,
        ['gds-card--anchor']: renderAs === `anchor`,
        ['gds-card--button']: renderAs === `button`,
      })}
      href={href}
      onClick={onClick}
      type={renderAs === `button` ? `button` : null}
    >
      <NestedEl>
        <Stack className="gds-card__body">{props.children}</Stack>
        {/* If CTA text, render button and make button—not card—focusable. */}
        {/* If no CTA text, whole card will have focused appearance */}
        <Frame
          className={cx('gds-card__image', {
            [props.className]: props.className,
          })}
        >
          {image}
        </Frame>
      </NestedEl>
    </El>
  );
};

Card.propTypes = {
  renderAs: PropTypes.oneOf(['div', 'anchor', 'button']),
  href: PropTypes.string,
  onClick: PropTypes.func,
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  /**
   * A CDS [`Frame` component](/?path=/docs/components-layout-components-frame--basic),
   * [`Image` component](/?path=/docs/components-image--primary) component or a
   * standard `img` element.
   */
  image: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  // imagePosition: PropTypes.oneOf(['top', 'right', 'left']),
  // imageRatio: PropTypes.string,
  backgroundColor: PropTypes.oneOf(['white', 'gray', 'transparent']),
  border: PropTypes.bool,
};

Card.defaultProps = {
  renderAs: 'div',
  href: null,
  onClick: null,
  padding: `sm`,
  image: undefined,
  // imagePosition: 'top',
  // imageRatio: `1:1`,
  border: true,
  backgroundColor: `white`,
};
