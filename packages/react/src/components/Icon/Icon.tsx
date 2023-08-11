'use client';

import styles from '@compassion-design-system/core/src/components/Icon/icon.module.css';
import { getClasses } from '../../utils/classes';
import * as icons from '../icons';
import SkippyIcon from '../icons/Skippy';

export const cdsIconMap = {
  arrowClockwise: icons.ArrowClockwise,
  arrowDown: icons.ArrowDown,
  arrowLeft: icons.ArrowLeft,
  arrowRight: icons.ArrowRight,
  arrowUp: icons.ArrowUp,
  arrowUpRight: icons.ArrowUpRight,
  arrowsLeftRight: icons.ArrowsLeftRight,
  browser: icons.Browser,
  camera: icons.Camera,
  caretDown: icons.CaretDown,
  caretLeft: icons.CaretLeft,
  caretRight: icons.CaretRight,
  caretUp: icons.CaretUp,
  chatDots: icons.ChatDots,
  chatText: icons.ChatCenteredText,
  check: icons.Check,
  clockCounterClockwise: icons.ClockCounterClockwise,
  cloudArrowUp: icons.CloudArrowUp,
  cloudArrowDown: icons.CloudArrowDown,
  church: icons.Church,
  compass: icons.Compass,
  envelope: icons.EnvelopeSimple,
  eye: icons.Eye,
  eyeSlash: icons.EyeSlash,
  fileText: icons.FileText,
  gear: icons.Gear,
  gift: icons.Gift,
  globe: icons.GlobeStand,
  info: icons.Info,
  images: icons.Images,
  house: icons.HouseLine,
  link: icons.Link,
  list: icons.List,
  lockKey: icons.LockKey,
  lockSimple: icons.LockSimple,
  magnigyGlass: icons.MagnifyingGlass,
  magnigyGlassPlus: icons.MagnifyingGlassPlus,
  mapPin: icons.MapPin,
  mapTrifold: icons.MapTrifold,
  minus: icons.Minus,
  playCircle: icons.PlayCircle,
  plus: icons.Plus,
  plusCircle: icons.PlusCircle,
  skippy: SkippyIcon,
  spinner: icons.Spinner,
  spinnerGap: icons.SpinnerGap,
  trash: icons.Trash,
  thumbsUp: icons.ThumbsUp,
  user: icons.User,
  warningCircle: icons.WarningCircle,
  warningOctagon: icons.WarningOctagon,
  wheelchair: icons.Wheelchair,
  x: icons.X,
  xCircle: icons.XCircle,
};

export const iconSizeMap = {
  xs: 12,
  sm: 16,
  md: 24,
  lg: 32,
};

export interface IconProps {
  description: string;
  color?: 'default' | 'primary' | 'muted';
  size?: keyof typeof iconSizeMap;
  icon: keyof typeof cdsIconMap;
}

const Icon = (props: IconProps) => {
  const { description, color = 'default', size = 'md', icon } = props;
  const SelectedIcon = cdsIconMap[icon];

  const iconColorClassPrefix = 'cds-icon__svg--';
  const colorClassName = getClasses(styles, [
    `${iconColorClassPrefix}${color}`,
  ]);

  return (
    <>
      {SelectedIcon && (
        <SelectedIcon
          className={colorClassName}
          size={iconSizeMap[size]}
          alt={description}
        />
      )}
    </>
  );
};

export default Icon;
