import { ReactNode } from 'react';
import { getClasses } from '../../utils/classes';
import textStyles from '@compassion-design-system/core/src/components/TextBox/textBox.module.css';
import boxStyles from '@compassion-design-system/core/src/components/Box/box.module.css';

export interface BoxProps {
  children: ReactNode;
  backgroundColor?: 'primary' | 'secondary' | 'accent' | 'neutral';
  backgroundTint?: 'default' | 'subtle' | 'amplified';
  borderRadius?: 'square' | 'rounded' | 'circle';
  borderColor?: 'default' | 'primary';
  isMobile?: boolean;
  textColor?: 'default' | 'primary' | 'white' | 'accent';
  className?: string;
}

const Box = ({
  children,
  isMobile = false,
  textColor = 'default',
  backgroundColor = 'neutral',
  backgroundTint = 'default',
  borderRadius,
  borderColor,
  className,
}: BoxProps) => {
  const boxClasses = [
    textStyles['cds-text-box'],
    textStyles[`cds-text-box--${textColor}`],
    boxStyles['cds-box'],
    boxStyles[`cds-box--${backgroundColor}-${backgroundTint}`],
  ];

  if (borderRadius || borderColor) {
    boxClasses.push(boxStyles['cds-box--border']);
    boxClasses.push(boxStyles[`cds-box--border-${borderRadius || 'square'}`]);
    borderColor !== 'default' &&
      boxClasses.push(boxStyles[`cds-box--border-${borderColor || 'default'}`]);
  }

  if (!isMobile) {
    boxClasses.push(textStyles['cds-text-box--desktop']);
  }

  return (
    <div className={`${boxClasses.join(' ')} ${className || ''}`}>
      <div>{children}</div>
    </div>
  );
};

export default Box;
