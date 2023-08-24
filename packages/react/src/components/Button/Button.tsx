'use client';

import { MouseEvent, ButtonHTMLAttributes, forwardRef } from 'react';
import styles from '@compassion-design-system/core/src/components/Button/button.module.css';
import { getClasses } from '../../utils/classes';
import { cdsIconMap } from '../Icon/Icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  showLabel?: boolean;
  kind?: 'cta' | 'white' | 'inverted' | 'destructive';
  emphasis?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  icon?: keyof typeof cdsIconMap;
  iconDescription?: string;
  iconPosition?: 'start' | 'end';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    label,
    showLabel = true,
    kind,
    emphasis = 'primary',
    size = 'medium',
    disabled = false,
    className,
    style,
    onClick,
    icon,
    iconDescription,
    iconPosition,
    ...rest
  } = props;

  const IconComponent = cdsIconMap[icon];

  const buttonSizeToIconSizeMap: { [key: string]: number } = {
    small: 13,
    medium: 16,
    large: 20,
  };

  const ButtonIcon = () => {
    return (
      <div className={getClasses(styles, buttonIconClassList)}>
        <IconComponent
          className=""
          alt={iconDescription}
          size={buttonSizeToIconSizeMap[size]}
        />
      </div>
    );
  };

  const buttonClassList = [`cds-button--${emphasis}`, `cds-button--${size}`];

  if (kind) {
    buttonClassList.push(`cds-button--${kind}`);
  }

  const buttonIconClassList = ['cds-button__icon'];

  if (IconComponent && showLabel) {
    if (iconPosition && iconPosition === 'end') {
      buttonClassList.push('cds-button--reverseTextIcon');
      buttonIconClassList.push('cds-button__icon--end');
    } else {
      buttonIconClassList.push('cds-button__icon--start');
    }
  }

  const buttonClassNames = getClasses(styles, buttonClassList, className);

  return (
    <button
      onClick={onClick}
      className={buttonClassNames}
      disabled={disabled}
      style={style}
      ref={ref}
      {...rest}
    >
      {IconComponent && <ButtonIcon />}
      {showLabel && label}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
