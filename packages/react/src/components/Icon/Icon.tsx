import { HTMLAttributes, memo, ExoticComponent } from 'react';
import buttonStyles from '@compassion-gds/core/src/components/Button/button.module.css';
import formStyles from '@compassion-gds/core/src/components/Form/common.module.css';
import choiceStyles from '@compassion-gds/core/src/components/Form/radio-checkbox.module.css';
import styles from '@compassion-gds/core/src/components/Icon/icon.module.css';
import { getClasses } from '../../utils/classes';

type IconFlavor = 'default' | 'muted' | 'primary';
interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  icon: ExoticComponent;
  size?: number | string | undefined;
  color?: string | undefined;
  mode?: IconFlavor;
}

const Icon = memo(
  ({ icon: IconComponent, size, color, className, mode, style }: IconProps) => {
    const flavorClass = getClasses(styles, mode, className);

    return (
      <span
        className={`${styles.icon} ${buttonStyles.icon} ${formStyles.formIcon} ${choiceStyles.formControlIcon} ${flavorClass}`}
        style={{
          ...style,
          fontSize: size,
          color,
        }}
      >
        <IconComponent />
      </span>
    );
  },
);

Icon.displayName = 'Icon';

export default Icon;
