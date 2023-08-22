import { forwardRef, InputHTMLAttributes } from 'react';
import styles from '@compassion-design-system/core/src/components/Form/radio-checkbox.module.css';
import common from '@compassion-design-system/core/src/components/Form/form-common.module.css';

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
    const containerClassNames = getClasses(
      common,
      'cds-form__field-row',
      className,
    );
    const labelClassNames = getClasses(styles, [
      'cds-form__label',
      `cds-form--${state}`,
    ]);
    const helperClassNames = getClasses(common, [
      'cds-form__hint',
      `cds-form--${state}`,
    ]);

    return (
      <div className={containerClassNames}>
        <div className={getClasses(styles, 'cds-form__control')}>
          <div className={getClasses(styles, 'cds-form__control__inner')}>
            <input
              ref={ref}
              id={id}
              type={type}
              disabled={state === 'disabled'}
              className={getClasses(styles, `cds-form--${state}`)}
              {...rest}
            />
            {type === 'checkbox' && (
              <span className={getClasses(styles, 'cds-form__control__icon')}>
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
