import '@compassion-gds/css/src/components/Button/button.css';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="button-main">{props.label}</button>;
};

export default Button;
