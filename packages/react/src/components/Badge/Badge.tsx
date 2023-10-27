import { ReactNode } from 'react';
import styles from '@compassion-design-system/core/src/components/Badge/badge.module.css';
import { getClasses } from '../../utils/classes';
import Icon, { cdsIconMap } from '../Icon/Icon';

export interface BadgeProps {
  status?: 'primary' | 'warning' | 'danger' | 'success' | 'info' | 'neutral';
  label: string;
  borderRadius?: 'rounded' | 'pill';
  icon?: keyof typeof cdsIconMap;
  iconPosition?: 'start' | 'end';
  showLabel?: boolean;
}

const Badge = ({
  label,
  status = 'neutral',
  borderRadius = 'rounded',
  icon,
  iconPosition = 'start',
  showLabel = true,
}: BadgeProps) => {
  const badgeClasses = getClasses(styles, [
    'cds-badge',
    `cds-badge__${status}`,
    `cds-badge__${borderRadius}`,
    icon ? `cds-badge__icon-${iconPosition}` : '',
  ]).trim();

  return (
    <div className={badgeClasses}>
      {showLabel && <span>{label}</span>}
      {icon && (
        <Icon icon={icon} description={`Icon for badge: ${label}`} size="xs" />
      )}
    </div>
  );
};

export default Badge;
