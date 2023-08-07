'use client';

import { MouseEvent, ButtonHTMLAttributes, forwardRef } from 'react';
import styles from '@compassion-design-system/core/src/components/Button/button.module.css';
import { getClasses } from '../../utils/classes';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  kind?: 'cta' | 'white' | 'inverted' | 'destructive';
  emphasis?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    label,
    kind,
    emphasis = 'primary',
    size = 'medium',
    disabled = false,
    className,
    style,
    onClick,
    ...rest
  } = props;

  const classNames = getClasses(
    styles,
    [`cds-button--${emphasis}`, `cds-button--${size}`, `cds-button--${kind}`],
    className,
  );

  return (
    <button
      onClick={onClick}
      className={classNames}
      disabled={disabled}
      style={style}
      ref={ref}
      {...rest}
    >
      {label}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
