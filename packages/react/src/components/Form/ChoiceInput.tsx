import { forwardRef, InputHTMLAttributes } from 'react';
import '@compassion-gds/css/src/components/Form/radio-checkbox.css';

import { FieldState } from './Helpers';
import { Check } from '../icons';

export interface ChoiceInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  id: string;
  type: 'checkbox' | 'radio';
  label: string;
  state?: FieldState;
  hint?: string;
}

const ChoiceInput = forwardRef<HTMLInputElement, ChoiceInputProps>((props, ref) => {
  const {
    id,
    state,
    type,
    hint,
    label,
    className,
    ...rest
  } = props;
  const containerClassNames =  ['form-field-row', className].join(' ');
  const labelClassNames = ['form-label', state].join(' ');
  const helperClassNames = ['form-hint', state].join(' ');

  return (
    <div className={containerClassNames}>
      <div className="form-control">
        <div className="form-control-inner">
          <input
            ref={ref}
            id={id}
            type={type}
            disabled={state === 'disabled'}
            className={state}
            {...rest}
          />
          {type === 'checkbox' && <span className="form-control-icon"><Check /></span>}
        </div>
        <label htmlFor={id} className={labelClassNames}>
          {label}
        </label>
      </div>
      {hint && <span className={helperClassNames}>{hint}</span>}
    </div>
  );
});

ChoiceInput.displayName = 'ChoiceInput';


export default ChoiceInput;
