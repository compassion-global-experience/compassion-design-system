import '@compassion-gds/css/src/components/Form/common.css';

import Input, { InputProps } from './Input';
import { forwardRef } from 'react';

export interface TextFieldProps extends InputProps {
  label?: string;
  hint?: string;
  fieldClassName?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    id,
    label = '',
    state,
    hint = '',
    className,
    fieldClassName,
    ...rest
  } = props;
  const containerClassNames = ['form-field-row', className].join(' ');
  const labelClassNames = ['form-label', state].join(' ');
  const helperClassNames = ['form-hint', state].join(' ');

  return (
    <div className={containerClassNames}>
      {label && (
        <label className={labelClassNames} htmlFor={id}>
          {label}
        </label>
      )}
      <Input
        ref={ref}
        id={id}
        state={state}
        className={fieldClassName}
        {...rest}
      />
      {hint && <span className={helperClassNames}>{hint}</span>}
    </div>
  );
});

TextField.displayName = 'TextField';

export default TextField;
