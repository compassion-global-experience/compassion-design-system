import { forwardRef, InputHTMLAttributes, ReactElement } from 'react';
import styles from '@compassion-design-system/core/src/components/Form/input-group.module.css';
import common from '@compassion-design-system/core/src/components/Form/common.module.css';

import { FieldSize, FieldState, StateIcon } from './Helpers';
import { CaretDown } from '../icons';
import { getClasses } from '../../utils/classes';

interface SelectOptions {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'size'> {
  id: string;
  options: SelectOptions[];
  defaultOption?: string;
  label?: string;
  size?: FieldSize;
  state?: FieldState;
  hint?: string;
  icon?: ReactElement;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {
    id,
    state,
    defaultOption,
    size = 'medium',
    icon,
    className,
    options,
    ...rest
  } = props;
  const fieldClassNames = getClasses(
    styles,
    ['form-field', state, size],
    className,
  );

  return (
    <div className={fieldClassNames}>
      <select
        ref={ref}
        id={id}
        className={getClasses(common, 'form-input')}
        disabled={state === 'disabled'}
        {...rest}
      >
        {defaultOption && (
          <option value="select-option" disabled>
            {defaultOption}
          </option>
        )}
        {options.map(({ value, label }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </select>
      {icon && <span className={getClasses(common, 'form-icon')}>{icon}</span>}
      <StateIcon state={state} size={size} />
      <span className={getClasses(common, ['form-icon', 'select-icon'])}>
        <CaretDown />
      </span>
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
