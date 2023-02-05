import styles from '@compassion-gds/css/src/components/Button/button.css';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className={styles.buttonMain}>{props.label}</button>;
};

export default Button;
