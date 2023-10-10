import { ReactNode } from 'react';
import { getClasses } from '../../utils/classes';
import styles from '@compassion-design-system/core/src/components/TextBox/textBox.module.css';

export interface TextBoxProps {
  children: ReactNode;
  isMobile?: boolean;
  color?: 'default' | 'primary' | 'white' | 'accent';
}

const TextBox = ({
  children,
  isMobile = false,
  color = 'default',
}: TextBoxProps) => {
  const textBoxClasses = ['cds-text-box', `cds-text-box--${color}`];
  if (!isMobile) {
    textBoxClasses.push('cds-text-box--desktop');
  }
  return <div className={getClasses(styles, textBoxClasses)}>{children}</div>;
};

export default TextBox;
