import PropTypes from 'prop-types';
import React from 'react';

import { cx } from '@emotion/css';

import { Frame } from '../Frame';
import { Stack } from '../Stack';

import cardStyles from './Card.styles';

export const Card = ({
  renderAs,
  href,
  onClick,
  padding,
  className,
  image,
  border,
  backgroundColor,
  children,
  ...props
}) => {
  const El = getRenderElement(renderAs);
  const NestedEl = image ? Stack : React.Fragment;

  const isClickable = renderAs === `anchor` || renderAs === `button`;

  return (
    <El
      css={cardStyles({
        isClickable,
        padding,
        border,
        backgroundColor,
      })}
      className={cx({
        'gds-card': true,
        'gds-card--anchor': renderAs === `anchor`,
        'gds-card--button': renderAs === `button`,
      })}
      href={href}
      onClick={onClick}
      type={renderAs === `button` ? `button` : null}
      {...props}
    >
      <NestedEl>
        <Stack className="gds-card__body">{children}</Stack>
        {/* If CTA text, render button and make button—not card—focusable. */}
        {/* If no CTA text, whole card will have focused appearance */}
        <Frame
          className={cx('gds-card__image', {
            [className]: className,
          })}
        >
          {image}
        </Frame>
      </NestedEl>
    </El>
  );
};

const getRenderElement = (renderAs) => {
  if (renderAs === 'anchor') return 'a';
  if (renderAs === 'button') return 'button';
  return 'div';
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
  backgroundColor: PropTypes.oneOf(['white', 'gray', 'transparent']),
  border: PropTypes.bool,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: null,
  renderAs: 'div',
  href: null,
  onClick: null,
  padding: `sm`,
  image: undefined,
  border: true,
  backgroundColor: `white`,
};
