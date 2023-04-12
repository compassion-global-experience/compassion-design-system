import { MouseEvent, ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import styles from '@compassion-gds/core/src/components/Button/button.module.css';
import { getClasses } from '../../utils/classes';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: ReactNode;
  children?: ReactNode;
  mode?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    label,
    mode = 'primary',
    size = 'medium',
    disabled = false,
    className,
    style,
    onClick,
    children,
    ...rest
  } = props;
  const classNames = getClasses(styles, ['button-main', mode, size], className);

  return (
    <button
      onClick={onClick}
      className={classNames}
      disabled={disabled}
      style={style}
      ref={ref}
      {...rest}
    >
      {children || label}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
