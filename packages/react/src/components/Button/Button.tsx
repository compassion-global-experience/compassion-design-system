import '@compassion-gds/css/src/components/Button/button.css';

export interface ButtonProps {
  label: string;
  mode: 'primary' | 'secondary' | 'tertiary',
  size: 'small' | 'medium' | 'large',
  disabled: boolean,
  onClick: () => void,
}

const Button = ({ mode = 'primary', size = 'medium', disabled = false, label = '', onClick }: ButtonProps) => {
  const className = ['button-main', mode, size].join(' ');

  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
