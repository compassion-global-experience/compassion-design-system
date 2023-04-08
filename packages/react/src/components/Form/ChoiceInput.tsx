import { forwardRef, InputHTMLAttributes } from 'react';
import styles from '@compassion-gds/css/src/components/Form/radio-checkbox.module.css';

import { FieldState } from './Helpers';
import { Check } from '../icons';
import { getClasses } from '../../utils/classes';

export interface ChoiceInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  id: string;
  type: 'checkbox' | 'radio';
  label: string;
  state?: FieldState;
  hint?: string;
}

const ChoiceInput = forwardRef<HTMLInputElement, ChoiceInputProps>(
  (props, ref) => {
    const { id, state, type, hint, label, className, ...rest } = props;
    const containerClassNames = getClasses(styles, 'form-field-row', className);
    const labelClassNames = getClasses(styles, 'form-label', state);
    const helperClassNames = getClasses(styles, 'form-hint', state);

    return (
      <div className={containerClassNames}>
        <div className={getClasses(styles, 'form-control')}>
          <div className={getClasses(styles, 'form-control-inner')}>
            <input
              ref={ref}
              id={id}
              type={type}
              disabled={state === 'disabled'}
              className={getClasses(styles, state)}
              {...rest}
            />
            {type === 'checkbox' && (
              <span className={getClasses(styles, 'form-control-icon')}>
                <Check />
              </span>
            )}
          </div>
          <label htmlFor={id} className={labelClassNames}>
            {label}
          </label>
        </div>
        {hint && <span className={helperClassNames}>{hint}</span>}
      </div>
    );
  },
);

ChoiceInput.displayName = 'ChoiceInput';

export default ChoiceInput;
