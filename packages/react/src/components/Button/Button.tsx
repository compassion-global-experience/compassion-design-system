import { MouseEvent, CSSProperties } from 'react';
import '@compassion-gds/css/src/components/Button/button.css';

export interface ButtonProps {
  label: string;
  mode?: 'primary' | 'secondary' | 'tertiary',
  size?: 'small' | 'medium' | 'large',
  disabled?: boolean,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void,
  className?: string,
  style?: CSSProperties,
}

const Button = ({ label, mode = 'primary', size = 'medium', disabled = false, className, style, onClick }: ButtonProps) => {
  const classNames = ['button-main', mode, size, className].join(' ');

  return (
    <button onClick={onClick} className={classNames} disabled={disabled} style={style}>
      {label}
    </button>
  );
};

export default Button;
