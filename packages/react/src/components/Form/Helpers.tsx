import { ReactElement } from 'react';
import common from '@compassion-design-system/core/src/components/Form/common.module.css';
import inputGroup from '@compassion-design-system/core/src/components/Form/input-group.module.css';
import { Check, Info, X } from '../icons';
import { getClasses } from '../../utils/classes';

export type FieldState = 'disabled' | 'error' | 'success';
export type FieldSize = 'small' | 'medium' | 'large';

interface FieldContainerProps {
  id: string;
  label?: string;
  state?: FieldState;
  hint?: string;
  className?: string;
  children: ReactElement;
}

export interface AdornmentProps {
  adornmentIcon?: ReactElement;
  adornmentPosition?: 'start' | 'end';
  adornmentText?: string;
}

export interface InputGroupContainerProps
  extends FieldContainerProps,
    AdornmentProps {
  size?: FieldSize;
}

export const FieldContainer = ({
  id,
  label = '',
  state,
  hint = '',
  className,
  children,
}: FieldContainerProps) => {
  const containerClassNames = getClasses(common, 'form-field-row', className);
  const labelClassNames = getClasses(common, ['form-label', state]);
  const helperClassNames = getClasses(common, ['form-hint', state]);

  return (
    <div className={containerClassNames}>
      {label && (
        <label className={labelClassNames} htmlFor={id}>
          {label}
        </label>
      )}
      {children}
      {hint && <span className={helperClassNames}>{hint}</span>}
    </div>
  );
};
export const InputGroupContainer = ({
  id,
  label = '',
  state,
  hint = '',
  adornmentPosition = 'end',
  adornmentText = '',
  adornmentIcon,
  className,
  size,
  children,
}: InputGroupContainerProps) => {
  const startPosition = adornmentPosition === 'start';

  return (
    <FieldContainer
      id={id}
      label={label}
      state={state}
      hint={hint}
      className={className}
    >
      <div className={getClasses(inputGroup, 'input-group')}>
        {startPosition && (
          <Adornment icon={adornmentIcon} text={adornmentText} size={size} />
        )}
        {children}
        {!startPosition && (
          <Adornment icon={adornmentIcon} text={adornmentText} size={size} />
        )}
      </div>
    </FieldContainer>
  );
};

export const StateIcon = (props: {
  state?: FieldState;
  size?: FieldSize;
  classes?: Record<string, string>;
}) => {
  const iconSize = props.size === 'small' ? 16 : 20;
  let icon;

  if (props.state === 'success') icon = <Check size={iconSize} />;
  if (props.state === 'error') icon = <X size={iconSize} />;

  if (!icon) return null;

  return (
    <span className={getClasses(props.classes || common, 'form-icon')}>
      {icon}
    </span>
  );
};

const Adornment = ({
  icon,
  text,
  size,
}: {
  icon: ReactElement;
  text: string;
  size: FieldSize;
}) => (
  <div className={getClasses(inputGroup, ['input-group-adornment', size])}>
    {icon || <Info size={22} />}
    {text && <span>{text}</span>}
  </div>
);
