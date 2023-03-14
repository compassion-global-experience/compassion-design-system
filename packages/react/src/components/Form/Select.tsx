import { forwardRef, InputHTMLAttributes, ReactElement } from 'react';
import '@compassion-gds/css/src/components/Form/input-group.css';

import { FieldSize, FieldState, StateIcon } from './Helpers';
import { CaretDown } from '../icons';

interface SelectOptions {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'size'> {
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

  const fieldClassNames = ['form-field', state, size, className].join(' ');

  return (
    <div className={fieldClassNames}>
      <select ref={ref} id={id} className="form-input" disabled={state === 'disabled'} {...rest}>
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
      {icon && <span className="form-icon">{icon}</span>}
      <StateIcon state={state} size={size} />
      <span className="form-icon select-icon"><CaretDown /></span>
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
